import special from './groups/special'
import positioning from './groups/positioning'
import boxModel from './groups/boxModel'
import typography from './groups/typography'
import visual from './groups/visual'
import animation from './groups/animation'
import misc from './groups/misc'

type Config = {
  emptyLineBefore?: boolean
}

export default function config({ emptyLineBefore = false }: Config = {}) {
  return {
    'unspecified-properties-position': 'bottom',
    'properties-order': [
      special,
      positioning,
      boxModel,
      typography,
      visual,
      animation,
      misc,
    ].reduce((acc, properties) => {
      /** v2 */
      acc.push({
        emptyLineBefore: true,
        properties,
      })

      /** v3+ */
      // acc.push(...properties)

      return acc
    }, []),
  }
}
