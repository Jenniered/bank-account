const BankAccount = require('./bank')

describe('bank account', () => {
  it('shows the balance of a new account as 0', () => {
    const account = new BankAccount();
    expect(account.getBalance()).toEqual(0);
  })
  it('shows updated balance after one deposit', () => {
    const account = new BankAccount();
    account.makeDeposit(1000)
    expect(account.getBalance()).toEqual(1000);
  })
  it('shows updated balance after two deposits', () => {
    const account = new BankAccount();
    account.makeDeposit(1000)
    account.makeDeposit(2000)
    expect(account.getBalance()).toEqual(3000);
  })
  it('shows updated balance after a deposit and a withdrawal', () => {
    const account = new BankAccount();
    account.makeDeposit(1000)
    account.makeWithdrawal(500)
    expect(account.getBalance()).toEqual(500);
  })
  it('shows updated balance after two deposits and a withdrawal', () => {
    const account = new BankAccount();
    account.makeDeposit(1000)
    account.makeDeposit(2000)
    account.makeWithdrawal(500)
    expect(account.getBalance()).toEqual(2500);
  })
  it('shows updated balance after two deposits and a withdrawal', () => {
    const account = new BankAccount();
    account.makeDeposit(2000)
    account.makeWithdrawal(500)
    account.makeWithdrawal(1500)
    account.makeDeposit(1000)
    expect(account.getBalance()).toEqual(1000)
  })
  it ('creates an object for a deposit', () => { 
    const account = new BankAccount();
    account.makeDeposit(1000, "10/01/2023")
    expect(account.printStatement()).toEqual([{ date: "10/01/2023", credit: 1000, balance: 1000}])
  })
  it ('creates an object for a withdrawal', () => { 
    const account = new BankAccount();
    account.makeWithdrawal(500, "13/01/2023")
    expect(account.printStatement()).toEqual([{ date: "13/01/2023", debit: 500, balance: -500}])
  })
  it ('prints out statement with one deposit', () => { 
    const account = new BankAccount();
    account.makeDeposit(1000, "13/01/2023")
    expect(account.outputStatement()).toEqual(["13/01/2023 || 1000 ||  || 1000"])
    console.log(account.outputStatement())
  })
  it ('prints out statement for two deposits', () => { 
    const account = new BankAccount();
    account.makeDeposit(1000, "10/01/2023")
    account.makeDeposit(2000, "13/01/2023")
    expect(account.outputStatement()).toEqual(["10/01/2023 || 1000 ||  || 1000", "13/01/2023 || 2000 ||  || 3000"])
  })
  it ('prints a statement for deposits and a withdrawal', () => { 
    const account = new BankAccount();
    account.makeDeposit(1000, "10/01/2023")
    account.makeDeposit(2000, "13/01/2023")
    account.makeWithdrawal(500, "14/01/2023")
    console.log(account)
    expect(account.outputStatement()).toEqual(["10/01/2023 || 1000 ||  || 1000", "13/01/2023 || 2000 ||  || 3000", "14/01/2023 ||  || 500 || 2500"])
  })
})