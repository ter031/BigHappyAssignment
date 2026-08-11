# BigHappy Test Automation Assignment

## Overview

This repository contains a test automation framework built from scratch using **TypeScript** and **Playwright**. It includes both API and UI automated test suites following industry-standard practices such as the Page Object Model (POM), reusable fixtures, JSON-based test data, response schema validation, and GitHub Actions for Continuous Integration.

---

## Setup

### Prerequisites

* Node.js (v22 or later)
* npm

### Installation

1. Clone the repository.
2. Install project dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root and add the following values:

```properties
API_BASE_URL=https://reqres.in/api
REQRES_API_KEY=reqres-free-v1
UI_BASE_URL=https://www.saucedemo.com
```

4. Install Playwright browsers:

```bash
npx playwright install
```

---

## Running the Tests

Run all tests:

```bash
npm test
```

Run API tests only:

```bash
npm run test:api
```

Run UI tests only:

```bash
npm run test:ui
```

Run tests in headed mode:

```bash
npm run test:headed
```

View the HTML report:

```bash
npm run report
```

---

## Why I Picked These Targets and Frameworks

### API – ReqRes

I selected **ReqRes** because it is a stable, publicly accessible REST API designed for testing and automation practice. It provides predictable responses and supports both positive and negative test scenarios, making it ideal for demonstrating backend automation.

The API suite covers:

* Successful retrieval of user details
* User not found (404)
* Login with missing password (400)

### UI – SauceDemo

I selected **SauceDemo** because it is a widely used web application for UI automation practice. It offers stable locators, consistent test data, and a realistic end-to-end e-commerce workflow.

The UI suite covers:

* Successful login
* Add product to cart
* Complete checkout process
* Order confirmation
* Invalid login validation

### Framework Choice

I chose **TypeScript** because it provides strong typing, improved maintainability, better IDE support, and helps catch errors during development.

I chose **Playwright** because it offers:

* Reliable auto-waiting
* Cross-browser support
* Fast execution
* Built-in API testing capabilities
* Rich reporting and debugging tools
* Seamless GitHub Actions integration

Using a single framework for both API and UI automation keeps the project consistent, reduces maintenance, and simplifies onboarding.

---

## How I Would Triage a Flaky Test

If a test became flaky, I would investigate the root cause rather than relying on retries.

My approach would be:

1. Reproduce the failure locally to determine whether it is consistent or intermittent.
2. Review Playwright traces, screenshots, videos, and logs to identify where the failure occurred.
3. Determine whether the issue is caused by the application, synchronization, environment instability, test data, or an external dependency.
4. Verify that stable locators (preferably `data-test` attributes) are being used.
5. Replace fixed waits with Playwright's built-in auto-waiting or explicit assertions where appropriate.
6. Ensure the test is independent and does not rely on execution order or shared state.
7. Use retries only after understanding and addressing the root cause.

The goal is to eliminate the cause of flakiness rather than masking unstable tests.

---

## How This Setup Would Need to Change if the Team Grew from 1 QA Engineer to 5

As the automation team grows, the framework should evolve to improve scalability, collaboration, and maintainability.

The main improvements I would introduce are:

* Organize API functionality into domain-specific service classes.
* Support multiple environments (Development, QA, Staging, Production) through configuration management.
* Increase parallel execution and introduce test tagging for selective execution.
* Integrate code quality tools such as ESLint and Prettier.
* Enforce pull request reviews and automated quality checks through GitHub Actions.
* Add advanced reporting (such as Allure) for improved test analysis.
* Expand schema validation and reusable test utilities as the API surface grows.
* Introduce reusable test data builders or factories for larger test suites.
* Continue running API and UI suites in parallel within the CI pipeline to reduce execution time.

These enhancements would allow multiple QA engineers to contribute simultaneously while keeping the framework maintainable, scalable, and easy to extend.

---

## Continuous Integration

GitHub Actions is configured to automatically execute both the API and UI test suites on every push and pull request. The workflow runs the API and UI suites in parallel and uploads Playwright HTML reports as workflow artifacts, enabling failures to be reviewed without reproducing them locally.
