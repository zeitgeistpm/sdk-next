import { PFunc } from '@zeitgeistpm/utility/dist/pfunc'
import { ChainTime } from '@zeitgeistpm/utility/dist/time'
import { Observable } from 'rxjs'
import { Context, RpcContext } from '../../context'
import { MetadataStorage } from '../../meta'

/**
 * Zeitgeist Time model.
 * Has functionality for getting the current block, on chain timestamp and block duration.
 */
export type Time<C extends Context<MS>, MS extends MetadataStorage> = {
  /**
   * Get the current ChainTime
   * @returns Promise<ChainTime>
   */
  now: C extends RpcContext<MS>
    ? PFunc<
        () => Promise<ChainTime>,
        {
          /**
           * Subscribe to the current ChainTime
           * @returns Observable<ChainTime>
           */
          $: () => Observable<ChainTime>
        }
      >
    : never
}
