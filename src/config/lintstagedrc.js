const {resolveNickScripts, resolveBin, isOptedOut} = require('../utils')

const nickScripts = resolveNickScripts()
const doctoc = resolveBin('doctoc')

module.exports = {
  concurrent: false,
  linters: {
    'README.md': [`${doctoc} --maxlevel 3 --notitle`, 'git add'],
    '.all-contributorsrc': [
      `${nickScripts} contributors generate`,
      'git add README.md',
    ],
    '**/*.+(js|json|less|css|ts|md)': [
      isOptedOut('autoformat', null, `${nickScripts} format`),
      `${nickScripts} lint`,
      `${nickScripts} test --findRelatedTests --passWithNoTests`,
      isOptedOut('autoformat', null, 'git add'),
    ].filter(Boolean),
  },
}
