const transfer = async (
  api: ApiPromise,
  receiver: string,
  ammount: number,
): Promise<
  | Ok<BalanceTransferEvent>
  | Error<RejectedFees | Canceled | DispatchError | ShouldBeUnreachable>
> => {
  const transaction = api.tx.balances.transfer(receiver, ammount)

  for await (const step of transact(transaction)) {
    if (isFeesUpdate(step)) {
      if (confirm(`Do you accept ${step.fees} in fees?`)) {
        continue
      }
      return error(RejectedFees)
    }

    if (isSigning(step)) {
      try {
        const sender = await ui.state.get('selected-address')
        const injector = await web3FromAddress(sender)

        step(injector)

        continue
      } catch (error) {
        return error(Canceled)
      }
    }

    if (isError(step)) {
      ui.showError('rejected')
      return error(step)
    }

    if (isInBlock(step)) {
      ui.notify(`transaction included in ${step.block}`)
    }

    if (isFinalized(step)) {
      const balanceTransferEvent = getEvent(
        step.block,
        api.events.balances.Transfer,
      )

      ui.showSuccess(
        `transaction finalized, transfered ${balanceTransferEvent.ammount.toHuman()} to ${receiver}`,
      )

      return ok(balanceTransferEvent)
    }
  }

  return error(ShouldBeUnreachable)
}
