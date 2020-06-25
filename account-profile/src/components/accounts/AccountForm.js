import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { AccountConsumer } from '../../providers/AccountProvider';
class AccountForm extends Component {
  state = { username: this.props.username, membership: this.props.membership }
  // handleChange = (e) => {
  //   const { name, value } = e.target
  //   this.setState({ [name]: value })
  // }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateAccount(this.state)
  }
  render() {
    const { username, membership } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='username'
          value={username}
          onChange={this.handleChange}
          label='Username'
        />
        <Form.Select
          name='membership'
          value={membership}
          onChange={this.handleChange}
          options={membershipOpt}
          label='Membership Level'
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}
const ConnectedAccountForm = (props) => (
  <AccountConsumer>
    { value => (
      <AccountForm 
        { ...props }
        // { ...value }
        username={value.username}
        membership={value.membership}
        updateAccount={value.updateAccount}
      />
    )}
  </AccountConsumer>
)
const membershipOpt = [
  { key: 'b', text: 'Bronze', value: 'Bronze' },
  { key: 's', text: 'Silver', value: 'Silver' },
  { key: 'g', text: 'Gold', value: 'Gold' },
  { key: 'p', text: 'Platinum', value: 'Platinum' },
]
export default ConnectedAccountForm;





