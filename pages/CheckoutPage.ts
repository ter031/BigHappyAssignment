import { Locator, Page } from '@playwright/test';

export class CheckoutPage {

    // Locators
    private firstName: Locator;
    private lastName: Locator;
    private postalCode: Locator;
    private continueButton: Locator;
    private finishButton: Locator;

    // Constructor
    constructor(private page: Page) {

        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
    }

    // Actions
    async enterCheckoutInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);

        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }
}