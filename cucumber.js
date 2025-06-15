// This is done to do the mapping for Assertions, Hooks and Step Definition files
const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-definitions/**/*.js
`
module.exports = {
  default: `${common} features/**/*.feature`,
}

