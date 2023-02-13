import type { FullContext, Sdk } from '@zeitgeistpm/sdk'
import { create, batterystation } from '@zeitgeistpm/sdk'

const sdk: Sdk<FullContext> = await create(batterystation())
