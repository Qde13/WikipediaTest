# Wikipedia Change Language Test

## Overview

This project contains an automated test that verifies the functionality of changing the interface language in the Wikipedia web application for an authorized user.

The test is implemented using **Playwright + TypeScript** and can be executed both locally and inside a **Docker container**.

---

## Test Case

**ID:** TC-001  
**Title:** Authorized user can change interface language

### Preconditions:

- User has a valid Wikipedia account
- User is authorized in the system

### Steps:

1. Open Wikipedia homepage
2. Log in with valid credentials
3. Open **Preferences** section via user menu
4. Navigate to **User profile → Internationalisation**
5. Change interface language (e.g., English → Ukrainian)
6. Save preferences

### Expected Result:

- The application interface is displayed in the selected language

---

## How to Run Tests

### 1. Install dependencies

npm install

### 2. Create .env file

Create a .env file in the project root:
USER_NAME=username
PASSWORD=password

### 3. Run tests locally

npx playwright test

### 4. Run tests in Docker

docker compose --env-file .env up --build --abort-on-container-exit

## Test Report

After test execution, a Playwright HTML report is generated.
Report can be opened manualy in any browser or by using 'playwright-report/index.html'

- The report is automatically copied from the Docker container to the host machine
