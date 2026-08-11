import { test as base, expect } from '@playwright/test';

import { ApiClient } from '../utils/apiClient';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';

type Fixtures = {

    // API
    apiClient: ApiClient;

    // UI
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    checkoutCompletePage: CheckoutCompletePage;
};

export const test = base.extend<Fixtures>({

    apiClient: async ({ request }, use) => {
        await use(new ApiClient(request));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },

    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },

    checkoutCompletePage: async ({ page }, use) => {
        await use(new CheckoutCompletePage(page));
    }

});

export { expect };