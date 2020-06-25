import React, { Component } from 'react';
// Set up the initial context
const AccountContext = React.createContext();
// Create exportable consumer 
export const AccountConsumer = AccountContext.Consumer;
// provider logical , store anything want to have globally
class AccountProvider extends Component {
  state = { username: 'Fooman36', dateJoined: '6/24/05', membership: 'Silver' }
  updateAccount = (account) => {
    this.setState({ ...account })
  }
  render() {
    return( 
      <AccountContext.Provider value={{ 
        ...this.state,
        updateAccount: this.updateAccount,
      }}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}
export default AccountProvider;