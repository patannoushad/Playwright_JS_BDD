const reporter = require('cucumber-html-reporter')

// These options will be used at the time of HTML Report generation
const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chromium",
    "Platform": "Windows 10",
    "Executed": "Local"
  },
}

reporter.generate(options)

