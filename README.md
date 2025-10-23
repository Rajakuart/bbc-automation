#  BBC Website E2E Automation Framework

A modular **Playwright + TypeScript** end-to-end automation framework for the **BBC Website**, built following the **Page Object Model (POM)** design pattern.  
This framework includes **custom fixtures**, **reusable page objects**, and **typed URL constants**, providing a clean, maintainable, and scalable structure for UI test automation.

---

##  Features

- **Playwright + TypeScript** — Modern E2E testing with type safety  
- **Page Object Model (POM)** — Clear separation of test logic and UI interactions  
- **Custom Fixtures** — Shared setup and teardown for reusability  
- **Typed Constants** — Centralized URLs and credentials for consistency  
- **Screenshot & Storage Handling** — Save screenshots and browser session data  
- **Scalable Architecture** — Easy to extend and maintain as the project grows  

---

##  Project Structure
```
bbc-playwright-framework/
│
├── fixtures/ # Custom fixtures for Playwright test extensions
│ └── test.extends.ts
│
├── pages/ # Page Object Model classes
│ ├── homePage.ts
│ ├── sportPage.ts
│ └── commentPage.ts
│
├── helper/ # Common helper/wrapper functions
│ └── playWRight.ts
│
├── constants/ # Shared constants
│ ├── credentialsLoginData.ts
│ └── urlConstants.ts
│
├── tests/ # Test specifications
│ ├── 01-login.spec.ts
│ ├── 02-sportpage.spec.ts
│ └── 03-comments.spec.ts
│
├── utils/ # Utilities and artifacts
│ └── screenshot/
│
├── data
│ └── sportsStorageState.json
│
├── Manual test cases (Gherkin)
│ └── stepdefination.feature
│
├── package.json
├── playwright.config.ts
└── tsconfig.json
```


##  Getting Started

### Clone this repository

Make sure you have **Node.js (>= 18.x)** installed.

```bash
# Clone this repository
git clone https://github.com/your-username/bbc-playwright-framework.git

# Navigate to project folder
cd bbc-playwright-framework

# Install dependencies
npm install

### Running Tests

- **Run all tests**: `npx playwright test`
- **Run a specific test**: `npx playwright test tests/aggridHome.spec.ts`
- **Run tests in headed mode**: `npx playwright test --headed`
- **Run with UI mode (interactive)**: `npx playwright test --ui`
- **Run a Report**: `npx playwright show-report`

Fixtures Overview

Custom fixtures are defined in fixtures/test.extends.ts and provide reusable page object instances for cleaner, maintainable tests.

| Fixture Name   | Description                          |
|----------------|--------------------------------------|
|homePage	|Handles homepage navigation, login, and title verification|
|sportPage	|Manages BBC Sport page navigation and session state|
|commentPage	|Handles article comments, filtering, and sorting|
