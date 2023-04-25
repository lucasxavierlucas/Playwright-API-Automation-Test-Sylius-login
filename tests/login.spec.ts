import { test, expect } from '@playwright/test';

test.describe('login flow', () => {
  test('Should login correctly', async ({ request }) => {
    const login = await request.post('https://demo.sylius.com/api/v2/admin/authentication-token', {
      data: {
        "email": "api@example.com",
        "password": "sylius-api"
      }
    });
    
    const loginResponse = await login.json();  

    expect(login.ok()).toBeTruthy();
    expect(login.status()).toBe(200);
    expect(loginResponse).toHaveProperty('token');
    expect(loginResponse.token).toHaveLength(867);

  });

  test('should not login with invalid credentials', async ({ request }) => {
    const login = await request.post('https://demo.sylius.com/api/v2/admin/authentication-token', {
      data: {
        "email": "wrong-api@example.com",
        "password": "invalid-password"
      }
    });

    const loginResponse = await login.json();  

    expect(login.ok()).toBeFalsy();
    expect(login.status()).toBe(401);
    expect(loginResponse.message).toEqual("Invalid credentials.");

  });
});
