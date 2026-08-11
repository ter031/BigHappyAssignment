import { expect, Locator, Page } from '@playwright/test';

export class InventoryPage {

    // Locators
    private pageTitle: Locator;
    private backpackAddToCartButton: Locator;
    private shoppingCart: Locator;

    // Constructor
    constructor(private page: Page) {

        this.pageTitle = page.locator('[data-test="title"]');
        this.backpackAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
    }

    // Actions
    async addBackpackToCart() {
        await this.backpackAddToCartButton.click();
    }

    async openCart() {
        await this.shoppingCart.click();
    }

    // Assertions
    async verifyInventoryPage() {
        await expect(this.pageTitle).toHaveText('Products');
    }
}