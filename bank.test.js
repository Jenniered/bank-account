const BankAccount = require('./bank')

describe('bank account', () => {
  it('shows the balance of a new account as 0', () => {
    const account = new BankAccount();
    expect(account.getBalance()).toEqual(0);
  })
  it('shows updated balance after one deposit', () => {
    const account = new BankAccount();
    account.makeDeposit(1000.00)
    expect(account.getBalance()).toEqual(1000.00);
  })
  it('shows updated balance after two deposits', () => {
    const account = new BankAccount();
    account.makeDeposit(1000.00)
    account.makeDeposit(2000.00)
    expect(account.getBalance()).toEqual(3000.00);
  })
  it('shows updated balance after a deposit and a withdrawal', () => {
    const account = new BankAccount();
    account.makeDeposit(1000.00)
    account.makeWithdrawal(500.00)
    expect(account.getBalance()).toEqual(500.00);
  })
  it('shows updated balance after two deposits and a withdrawal', () => {
    const account = new BankAccount();
    account.makeDeposit(1000.00)
    account.makeDeposit(2000.00)
    account.makeWithdrawal(500.00)
    expect(account.getBalance()).toEqual(2500.00);
  })
  it('shows updated balance after two deposits and a withdrawal', () => {
    const account = new BankAccount();
    account.makeDeposit(2000.00)
    account.makeWithdrawal(500.00)
    account.makeWithdrawal(1500.00)
    account.makeDeposit(1000.00)
    expect(account.getBalance()).toEqual(1000.00)
  })
  it('records a transaction for one deposit', () => {
    const account = new BankAccount();
    account.makeDeposit(1000.00, "10/01/2023")
    expect(account.logTransaction()).toEqual({date: "10/01/2023", credit: 1000.00, debit: 0.00, balance: 1000.00});
  })
  it('records a transaction for one withdrawal', () => {
    const account = new BankAccount();
    account.makeWithdrawal(500.00, "12/01/2023")
    expect(account.logTransaction()).toEqual({date: "12/01/2023", credit: 0.00, debit: 500.00, balance: -500.00});
  })
})