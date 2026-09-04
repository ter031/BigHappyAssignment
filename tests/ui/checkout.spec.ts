import { test } from '../../fixtures/baseTest';

import loginData from '../../test-data/ui/loginData.json';

// test comment
test.describe('SauceDemo Checkout', () => {

    test('User should complete checkout successfully', async ({

        loginPage,
        inventoryPage,
        cartPage,
        checkoutPage,
        checkoutCompletePage

    }) => {

        await loginPage.open();

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );

        await inventoryPage.verifyInventoryPage();

        await inventoryPage.addBackpackToCart();

        await inventoryPage.openCart();

        await cartPage.verifyProductInCart(
            'Sauce Labs Backpack'
        );

        await cartPage.checkout();

        await checkoutPage.enterCheckoutInformation(

            loginData.checkout.firstName,
            loginData.checkout.lastName,
            loginData.checkout.postalCode

        );

        await checkoutPage.finishCheckout();

        await checkoutCompletePage.verifyOrderCompleted();

    });

    test('User should not login with invalid credentials', async ({

        loginPage

    }) => {

        await loginPage.open();

        await loginPage.login(

            loginData.invalidUser.username,
            loginData.invalidUser.password

        );

        await loginPage.verifyLoginError(
            'Epic sadface: Username and password do not match any user in this service'
        );

    });

});