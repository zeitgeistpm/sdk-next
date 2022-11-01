import { Decimal } from 'decimal.js'

/**
 *
 * Opaqeue type representing a Ztg value.
 * Widens into bigint.
 *
 * @Monoid `mempty` creates a new empty Ztg of value 0
 *
 * @type Opaque bigint
 */
const Ztg: unique symbol = Symbol()
export type Ztg = Decimal & { __ztg: typeof Ztg }

/**
 * Decimal point in a native ztg
 */
export const ZTG = new Decimal(10 ** 10)

/**
 * Typeguard for Ztg values.
 *
 * @param value unknown
 * @returns value is Ztg
 */
export const isZtg = (value: unknown): value is Ztg =>
  Decimal.isDecimal(value) && '__ztg' in value && value['__ztg'] === Ztg

/**
 * Wrap a bignumber to Ztg type
 *
 * @param value Decimal
 * @returns Ztg
 */
export const wrap = (value: Decimal): Ztg => Object.assign(value as any, { __ztg: Ztg })

/**
 *
 * Create a empty Ztg value
 *
 * @returns Ztg
 */
export const mempty = () => wrap(new Decimal(0))

/**
 * Convert a integer or float to Ztg at the 10th decimal place
 *
 * @param ztg number - number as is
 * @returns Ztg
 */
export const fromNumber = (value: number): Ztg => wrap(new Decimal(value).mul(ZTG))

/**
 * Ztg info with price in usd and 24 hour change
 */
export type ZTGPriceInfo = {
  price: Decimal
  change: Decimal
}

/**
 * Fetch latest ztg price info.
 *
 * @returns Promise<ZTGInfo>
 */
export const fetchZTGInfo = async (): Promise<ZTGPriceInfo> => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=zeitgeist&vs_currencies=usd&include_24hr_change=true',
  )
  const json = await res.json()

  return {
    price: new Decimal(json.zeitgeist.usd),
    change: new Decimal(json.zeitgeist.usd_24h_change),
  }
}
