const Account = require('./account')

describe('bank account', () => {
    beforeAll(() => {
      jest.spyOn(Date, "now").mockImplementation(() => new Date("2023-01-10"));
    });
  
    afterAll(() => {
      Date.now.mockRestore();
    });
    
  it('shows the balance of a new account as 0', () => {
    const account = new Account();
    expect(account.getBalance()).toEqual(0);
  })
  it('shows updated balance after one deposit', () => {
    const account = new Account();
    account.makeDeposit(1000.00)
    expect(account.getBalance()).toEqual(1000.00);
  })
  it('shows updated balance after two deposits', () => {
    const account = new Account();
    account.makeDeposit(1000.00)
    account.makeDeposit(2000.00)
    expect(account.getBalance()).toEqual(3000.00);
  })
  it('shows updated balance after a deposit and a withdrawal', () => {
    const account = new Account();
    account.makeDeposit(1000.00)
    account.makeWithdrawal(500.00)
    expect(account.getBalance()).toEqual(500.00);
  })
  it('shows updated balance after two deposits and a withdrawal', () => {
    const account = new Account();
    account.makeDeposit(1000.00)
    account.makeDeposit(2000.00)
    account.makeWithdrawal(500.00)
    expect(account.getBalance()).toEqual(2500.00);
  })
  it('shows updated balance after two deposits and a withdrawal', () => {
    const account = new Account();
    account.makeDeposit(2000.00)
    account.makeWithdrawal(500.00)
    account.makeWithdrawal(1500.00)
    account.makeDeposit(1000.00)
    expect(account.getBalance()).toEqual(1000.00);
  })
  it('returns transaction history for one deposit', () => {
    const account = new Account();
    account.makeDeposit(1000.00, "10/01/2023")
    expect(account.getTransactionHistory()).toEqual([{date: "10/01/2023", credit: 1000.00, debit: 0.00, balance: 1000.00}]);
  })

  it('returns transaction history for one withdrawal', () => {
    const account = new Account();
    account.makeWithdrawal(500.00, "12/01/2023")
    expect(account.getTransactionHistory()).toEqual([{date: "12/01/2023", credit: 0.00, debit: 500.00, balance: -500.00}]);
  })
})