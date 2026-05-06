# Playwright TypeScript E-commerce Automation Framework

## Overview

This project is a scalable Playwright TypeScript automation framework designed for e-commerce workflows inspired by Amazon.

The framework demonstrates:

- UI automation
- Page Object Model (POM)
- Custom fixtures
- Smoke and regression strategy
- GitHub Actions CI/CD
- Mocked tests for CI stability
- Data-driven testing
- Flaky test mitigation
- Accessibility-first selectors

---

# Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- HTML Reports
- JUnit Reports

---

# Framework Architecture

```txt
config/
fixtures/
mocks/
pages/
tests/
utils/
.github/workflows/
```

---

# Test Strategy

## Smoke Tests

Critical validations to ensure application availability.

Examples:

- Homepage validation
- Search validation

Smoke tests are mocked in CI to avoid flaky third-party dependencies.

---

## Regression Tests

Broader end-to-end functional coverage.

Examples:

- Product search
- Product detail validation
- Add to cart flow
- Cart quantity validation

---

## Mocked Tests

Mocked tests are used to guarantee CI stability and deterministic behavior.

This avoids failures caused by:

- CAPTCHA
- Bot detection
- Dynamic third-party content
- Regional popups
- External instability

---

# Design Decisions

## Why Page Object Model?

To improve:

- Maintainability
- Reusability
- Scalability
- Separation of concerns

---

## Why Mocking?

Amazon is not stable for CI automation because it can block automated traffic.

Mocking allows:

- Stable pipelines
- Faster execution
- Deterministic results
- Better debugging

---

## Why Accessibility-first Selectors?

Selectors based on roles and accessible names are more stable than CSS/XPath selectors.

Example:

```ts
page.getByRole('button', { name: /buscar/i })
```

---

# CI/CD

GitHub Actions automatically executes:

- Smoke tests
- Mocked tests

on every:

- push
- pull request

Artifacts include:

- HTML report
- Screenshots
- Videos
- Traces

---

# How to Run

## Install dependencies

```bash
npm ci
```

---

## Install Playwright browsers

```bash
npx playwright install
```

---

## Run all tests

```bash
npm run test
```

---

## Run smoke tests

```bash
npm run test:smoke
```

---

## Run regression tests

```bash
npm run test:regression
```

---

## Run mocked tests

```bash
npm run test:mocked
```

---

## Open Playwright report

```bash
npm run report
```

---

# Engineering Challenges Solved

## Challenge

Amazon generated flaky behavior due to:

- dynamic DOM
- localization
- CAPTCHA
- bot detection
- unstable selectors

## Solution

Implemented:

- mocked smoke tests
- accessibility-first selectors
- stable locators
- CI-safe strategy
- separated smoke/regression execution

---

# What I Would Not Automate

- CAPTCHA
- Real payment processing
- Third-party unstable widgets
- Visual-only validations without visual testing tools
- Personal real-user account flows

---

# Interview Summary

I designed and implemented a scalable Playwright TypeScript automation framework for e-commerce workflows.

The framework includes:

- Page Object Model
- Custom fixtures
- Smoke and regression suites
- GitHub Actions CI/CD
- Mocked tests for CI stability
- Accessibility-first selectors
- Flaky test mitigation strategies

The project demonstrates enterprise-level automation architecture and real-world QA engineering practices.
