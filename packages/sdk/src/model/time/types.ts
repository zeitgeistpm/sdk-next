import { PFunc } from '@zeitgeistpm/utility/dist/pfunc'
import { ChainTime } from '@zeitgeistpm/utility/dist/time'
import { Observable } from 'rxjs'
import { Context, RpcContext } from '../../context'
import { MetadataStorage } from '../../meta'

export type Time<C extends Context<MS>, MS extends MetadataStorage> = {
  now: C extends RpcContext<MS>
    ? PFunc<
        () => Promise<ChainTime>,
        {
          $: () => Observable<ChainTime>
        }
      >
    : never
}
