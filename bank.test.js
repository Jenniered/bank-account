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
})