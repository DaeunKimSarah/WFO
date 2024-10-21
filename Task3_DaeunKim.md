# Candidate for Full Stack Developer at WFO  - Test Instructions
## Copyright: Daeun Kim (daeunsarahkim@gmail.com)

## Running the Tests

This project includes automated tests to ensure the application's functionality, reliability, and performance. Below are the steps for running the test suite.

### Prerequisites

- nsure that you have all the dependencies installed by running the following command:

```bash
npm install
```


## Test Files

### `CountryInfo.test.tsx`

This test file is responsible for testing the `CountryInfo` component. It includes the following tests:

- **Component Rendering**: Ensures that the `CountryInfo` component renders correctly with a loading state and displays country information after data is fetched.
- **Mocking API Calls**: Uses a mock service to prevent real API calls during tests, ensuring isolated component testing.

Test cases implemented:

- Verifies that the loading message is displayed initially when the component is rendered.
- Ensures that the correct country information is displayed after fetching data.

### `hazardService.test.ts`

This test file is responsible for testing the `hazardService`. It includes the following tests:

- **Service Functionality**: Ensures that the `hazardService` functions properly, fetching hazard data without making actual API calls.

Test cases implemented:

- Uses mock data to verify the correct handling of hazard information.
- Tests successful data fetching and ensures appropriate handling of responses.

### `ipcService.test.ts`

This test file tests the `ipcService`, which is used to fetch IPC phase information. It includes the following tests:

- **Service Functionality**: Ensures that the `ipcService` functions correctly by mocking IPC data and testing the API calls.

### Running the Tests

To run the test suite, execute the following command:

```bash
npm test
```

This will run all tests using Jest, the testing framework used for this project.

### Running Specific Tests

If you want to run a specific test file, use the following command:

```bash
npm test -- Task2_DaeunKim/src/tests/
```

For example, to run the `CountryInfo` test:

```bash
npm test -- src/tests/CountryInfo.test.tsx
```


### Test Coverage

To generate a test coverage report, run the following command:

```bash
npm run test:coverage
```

This will create a detailed report showing the percentage of code covered by the tests.

### Troubleshooting

- Ensure all modules are correctly installed.
- If any issues arise, try clearing the Jest cache:

```bash
npx jest --clearCache

