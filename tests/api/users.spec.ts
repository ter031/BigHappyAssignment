import { test, expect } from '../../fixtures/baseTest';
import { SchemaValidator } from '../../utils/schemaValidator';

import expectedResponses from '../../test-data/api/expectedResponses.json';
import loginData from '../../test-data/api/loginData.json';
import getUserSchema from '../../schemas/getUserSchema.json';

test.describe('Users API', () => {

    test('should fetch user details successfully', async ({ apiClient }) => {

        const response = await apiClient.getUser(2);

        await expect(response).toBeOK();
        expect(response.status()).toBe(200);

        const body = await response.json();

        SchemaValidator.validate(getUserSchema, body);

        expect(body.data).toEqual(
            expectedResponses.getUserById.user2.data
        );
    });

    test('should return 404 for non-existing user', async ({ apiClient }) => {

        const response = await apiClient.getUser(23);

        expect(response.status()).toBe(404);

        const body = await response.json();

        expect(body).toEqual({});
    });
    
    test('should return 400 when password is missing', async ({ apiClient }) => {

        const response = await apiClient.login(
            loginData.missingPassword
        );

        expect(response.status()).toBe(400);

        const body = await response.json();

        expect(body).toEqual({
            error: 'Missing password'
        });

    });
});