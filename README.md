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
5. 