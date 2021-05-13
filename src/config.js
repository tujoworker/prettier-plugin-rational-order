const special = require('./groups/special')
const positioning = require('./groups/positioning')
const boxModel = require('./groups/boxModel')
const typography = require('./groups/typography')
const visual = require('./groups/visual')
const animation = require('./groups/animation')
const misc = require('./groups/misc')

module.exports = () => {
  return {
    'unspecified-properties-position': 'bottom',
    'properties-order': [
      ['Special', special],
      ['Positioning', positioning],
      ['Box Model', boxModel],
      ['Typography', typography],
      ['Visual', visual],
      ['Animation', animation],
      ['Misc', misc],
    ].reduce((acc, [groupName, properties]) => {
      /** v2 */
      // if (emptyLineBefore) {
      //   acc.push({
      //     emptyLineBefore: true,
      //     properties,
      //   })
      // }

      /** v3+ */
      acc.push(...properties)

      return acc
    }, []),
  }
}
