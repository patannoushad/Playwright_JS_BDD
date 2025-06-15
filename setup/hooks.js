const playwright = require('playwright')
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber')

// To launch the browser before all the scenarios
BeforeAll(async () => {
  console.log('Launch Browser')
  // Giving browser- Chromium and headed mode
  global.browser = await playwright['chromium'].launch({ headless: false })
})

// To close the browser after all the scenarios
AfterAll(async () => {
  console.log('Close Browser')
  await global.browser.close()
})

// Before every scenario, Create new context and page
Before(async () => {
  console.log('Create new context and page')
  global.context = await global.browser.newContext()
  global.page = await global.context.newPage()
})

// After every scenario, Close context and page
After(async () => {
  console.log('Close context and page')
  await global.page.close()
  await global.context.close()
})
