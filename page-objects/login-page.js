class LoginPage {
  async navigateToLoginScreen() {
    // Go to the application
    await page.goto('https://www.saucedemo.com/')
  }

  async submitLoginForm() {
    // Login with valid credentials
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
  }

  async submitLoginWithParameters(username, password) {
    // Login with given credentials (Username and Password are coming from Feature file)
    await page.fill('#user-name', username)
    await page.fill('#password', password)
    await page.click('#login-button')
  }

  async assertUserIsLoggedIn() {
    // Assertion for an web element present on the Homepage (User comes at HomePage after successful login)
    await page.waitForSelector('.inventory_list')
  }

  async pause() {
    // Wait for 3 seconds
    await page.waitForTimeout(3000)
  }
}

module.exports = { LoginPage }
