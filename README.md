# Playwright Practice: Herokuapp Test Suite

This repository contains automated UI tests for [the-internet.herokuapp.com](https://the-internet.herokuapp.com/) using [Playwright](https://playwright.dev/).

## Project Structure
- Each `.spec.js` file contains Playwright tests for a specific feature or page of the site.
- Example test files:
  - `ABtesting.spec.js`
  - `AddRemoveElements.spec.js`
  - `basicAuth.spec.js`
  - `brokenImages.spec.js`
  - `challengingDOM.spec.js`
  - `checkBoxes.spec.js`
  - `contextMenu.spec.js`
  - `digestAuth.spec.js`
  - `disappearingElements.spec.js`
  - `dragAndDrop.spec.js`

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### Install Dependencies
```powershell
npm install
```

### Run Tests
To run all tests:
```powershell
npx playwright test
```
To run a specific test file (example):
```powershell
npx playwright test disappearingElements.spec.js
```
To debug a test:
```powershell
npx playwright test disappearingElements.spec.js --debug
```

## About the Tests
- Tests use Playwright's test runner and assertion library.
- Example: The `disappearingElements.spec.js` test checks for the presence of navigation links and logs their names.

## Contributing
Feel free to fork, clone, and submit pull requests to improve or add new tests.