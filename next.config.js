const { withLayer0 } = require('@layer0/next/config')

module.exports = (phase, config) =>
  withLayer0({
    layer0SourceMaps: false,
    disableLayer0DevTools: false,
  })
