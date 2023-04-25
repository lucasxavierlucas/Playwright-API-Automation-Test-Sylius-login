# Sylius API Login Tests

This repository contains two test cases for testing the login functionality of a Sylius API endpoint using Playwright test runner + Typescript.

## Getting Started

1. Clone the repository to your local machine.
2. Install the dependencies using `npm install -D playwright typescript`.
3. Run the tests using `npx playwright test login.spec.ts`.

## Tests

### `Should login correctly`

- Asserts that the response has a 200 status code
- Asserts that the response contains a `token` property in the response body
- Asserts that the `token` string has a length of 867.

### `Should not login with invalid credentials`

- Asserts that the response has a 401 status code 
- Asserts that the response  contains a `message` property in the response body with the value "Invalid credentials."

## Dependencies

- `@playwright/test` - a test runner for end-to-end testing web applications.
- `playwright` - a Node.js library for automating web browsers.

