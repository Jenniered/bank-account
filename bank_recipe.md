{{Bank Tech Test}} Class Design Recipe
1. Describe the Problem
As a customer,  
So that I can add money to my bank account,  
I want to be able to make deposits to my account

As a customer,  
So that I can spend my money,  
I want to be able to withdraw money from my account

As a customer,  
So that I know when activity happened on my account,  
I want to be able to see the dates of deposits and withdrawals  

As a customer,  
So that I know how much money I have,  
I want to be able to see my balance  

As a customer,  
So that I can keep a track of my money,  
I want to be able to print a statement with my activity and balance  

2. Design the Class Interface
Include the initializer and public methods with all parameters and return values.

# EXAMPLE

class BankAccount
  constructor 
    
  makeDeposit(credit, date)
    # amount is an integer
    # No return value

  makeWithdrawal(debit, date)
    # amount is an integer
    # No return value

  getBalance()
     # returns overall balance of account

  getStatement()
    # returns statement of activity


3. Create Examples as Tests
Make a list of examples of how the class will behave in different situations.

# EXAMPLE

# 1
account = new BankAccount
account.balance() # => 0

# 2
account = new BankAccount
account.makeDeposit(1000)
account.balance() # => 1000

# 3
account = new BankAccount
account.makeDeposit(1000)
account.makeDeposit(2000)
account.balance() # => 3000

# 4
account = new BankAccount
account.makeDeposit(1000)
account.makeDeposit(2000)
account.makeWithdrawal(500)
account.balance() # => 2500

# 5
Adding in date

# 6
Get statement

What happens if insufficient funds in the account? 