const BankAccount = require('./bank')
const bankAccount = require('./bank')

describe('bank account', () => {
  it('shows the balance of a new account as 0', () => {
    const account = new BankAccount();
    expect(account.getBalance()).toEqual(0);
  })
})