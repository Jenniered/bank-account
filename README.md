# Bank Tech Test

The challenge is to write programme that would manage a bank account. 

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

### My approach

1. I began with a recipe document and wrote user stories for the task
2. I planned out my first few tests to use TDD to build basic functionality for the programme. 
3. Using TDD, I built the programme to deal with multiple deposits and withdrawals, but without the date. 
4. I added in the date as an argument in the tests and updated the code accordingly.
5. I added the functions to print out a statement - following this I added a separate class for statement and refactored by moving the functions there according to separation of concerns
6. I used mocking for unit tests for the statement class
7. I refactored to improve the formatting of the statement so it matched what is shown in the acceptance criteria

## Installation

### Install Node.js

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
   ```
   nvm install 18
   ```
### Set up your project

1. Clone this repository to your local machine
2. Install Node.js dependencies
   ```
   npm install
   ```

### Run the program
The program to run for the acceptance criteria is at the bottom of the file statement.js. 
Run it from the command line.
  ```
  node statement.js
  ```

### Test
1. Run the unit and integration tests
```
jest
```
2. Run the linter
```
npx eslint bank.js statement.js
```

### Test coverage
Check the test coverage
```
open coverage/lcov-report/index.html
```


  


