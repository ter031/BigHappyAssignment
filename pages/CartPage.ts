import { expect, Locator, Page } from '@playwright/test';

export class CartPage {

    // Locators
    private checkoutButton: Locator;
    private backpackItem: Locator;

    // Constructor
    constructor(private page: Page) {

        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.backpackItem = page.locator('[data-test="inventory-item-name"]');
    }

    // Actions
    async checkout() {
        await this.checkoutButton.click();
    }

    // Assertions
    async verifyProductInCart(productName: string) {
        await expect(this.backpackItem).toHaveText(productName);
    }
}