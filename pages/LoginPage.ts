import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {

    // Locators
    private username: Locator;
    private password: Locator;
    private loginButton: Locator;
    private errorMessage: Locator;

    // Constructor
    constructor(private page: Page) {

        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    // Actions
    async open() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    // Assertions
    async verifyLoginPage() {
        await expect(this.username).toBeVisible();
        await expect(this.password).toBeVisible();
        await expect(this.loginButton).toBeVisible();
    }

    async verifyLoginError(message: string) {
        await expect(this.errorMessage).toHaveText(message);
    }
}