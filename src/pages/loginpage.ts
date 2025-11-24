import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput = '#username';
  readonly passwordInput = '#password';
  readonly signInButton = '#sign-in';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://qa-account.simplifysandbox.net/');
  }

  async enterUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  async signIn() {
    await this.page.click(this.signInButton);
  }
}
