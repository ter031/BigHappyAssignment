import { expect, Locator, Page } from '@playwright/test';

export class CheckoutCompletePage {

    // Locators
    private completeHeader: Locator;
    private completeMessage: Locator;

    // Constructor
    constructor(private page: Page) {

        this.completeHeader = page.locator('[data-test="complete-header"]');
        this.completeMessage = page.locator('[data-test="complete-text"]');
    }

    // Assertions
    async verifyOrderCompleted() {

        await expect(this.completeHeader).toHaveText(
            'Thank you for your order!'
        );

        await expect(this.completeMessage).toBeVisible();
    }
}