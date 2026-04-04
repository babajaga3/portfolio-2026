// Source - https://stackoverflow.com/a/79670048
// Posted by Sam
// Retrieved 2026-04-04, License - CC BY-SA 4.0

import plugin from 'tailwindcss/plugin'

module.exports = plugin.withOptions(() => ({ matchUtilities }) => {
  matchUtilities({
    join: value => ({
      [`@apply ${value.replaceAll(',', ' ')}`]: {}
    })
  })
})
