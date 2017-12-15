import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';
import { Button, Message } from 'semantic-ui-react'
import '../../styles/semantic.min.css'
import './register.css';

import { signup } from '../../Api'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      address: '',
      email: '',
      phone: ''

    };
    this.onTextChange = this.onTextChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

  onTextChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value })
    console.log(value);
  }

  onSubmit(e) {

    signup(this.state.firstName, this.state.lastName, this.state.username, this.state.password, this.state.address, this.state.email, this.state.phone)
      .then(data => {
        if (data.status === 200) {
          this.props.history.replace('/news')
        }

      })

  }

  render() {
    return (
      <div className="register">
        <Navbar />

        <div class='regis'>
          <div>
            <h2 class="ui icon center aligned header">
              <i aria-hidden="true" class="users circular icon"></i>
              <div class="content">REGISTER</div>
            </h2>
          </div>

          <div class="ui grid">
            <div class="four wide column">
            </div>
            <div class="eight wide column">
              <form class="ui form" error>

                <div class="field">
                  <div class="required field">
                    <label>Username</label>
                    <div class="ui input">
                      <input type="text" placeholder="Username" name='username' onChange={this.onTextChange} />
                      <Message
                      error
                      header='Action Forbidden'
                      content='You can only sign up for an account once with a given e-mail address.'
                    />
                    </div>
                  </div>
                </div>
                <div class="field">
                  <div class="required field">

                    <label>Password</label>
                    <div class="ui input">
                      <input type="text" placeholder="Password" name='password' onChange={this.onTextChange} />
                    </div>
                  </div>

                </div>


                <div class="field">
                  <div class="required field">
                    <label>First Name</label>
                    <div class="ui input">
                      <input type="text" placeholder="First Name" name='firstName' onChange={this.onTextChange} />
                    </div>
                  </div>
                </div>
                <div class="field">
                  <div class="required field">
                    <label>Last Name</label>
                    <div class="ui input">
                      <input type="text" placeholder="Last Name" name='lastName' onChange={this.onTextChange} />
                    </div>
                  </div>
                </div>


                <div class="field">
                  <div class="required field">
                    <label>Address</label>
                    <div class="ui input">
                      <input type="text" placeholder="Address" name='address' onChange={this.onTextChange} />
                    </div>
                  </div>
                </div>

                <div class="two fields">
                  <div class="field">
                    <div class="required field">
                      <label>Email</label>
                      <div class="ui input">
                        <input type="text" placeholder="Email" name='email' onChange={this.onTextChange} />
                      </div>
                    </div>
                  </div>

                  <div class="field">
                    <div class="required field">
                      <label>Phone</label>
                      <div class="ui input">
                        <input type="text" placeholder="Phone" name='phone' onChange={this.onTextChange} />
                      </div>
                    </div>
                  </div>

                </div>
                <div class="field">
                  <textarea readonly="">Welcome to the registration to Sharing Ours Heart website and its related services. You may access many areas of our website without registering your details with us. Certain areas are only open to you if you register. The terms and conditions which govern material submitted by you to us and your use of the www.telegraph.co.uk website (including all 'Telegraph' branded microsites and any email bulletins) are governed by our general "Terms and Conditions of Reading". These Terms and Conditions of Registration are in addition to the general Terms and Conditions of Reading.
1.
Registration
1.1
By registering here and creating your "Profile", you can access different services that are offered by us without having to register for each service separately. If a service you wish to subscribe to has additional terms and conditions, you will be asked to accept these separately.
1.2
You agree that:
(1)
you will keep your username and password safe, and won't share them with anyone.
(2)
you will not pass yourself off as someone else or create multiple, false accounts.
2.
Term
2.1
If you breach these or any of our other terms and conditions we reserve the right to close your account, if we do so, we may close all accounts you have open in your name.
2.2
To deactivate your account please contact our customer services department; their details can be found under "contact us" on your Telegraph.co.uk Profile page.
3.
Administration
3.1
You can update your personal details (including your account and marketing preferences) by accessing your account at your Telegraph.co.uk Profile page and making any necessary changes; this will update your details across all services that you have subscribed to.
4.
Data
4.1
Full details of the way in which we use cookies on our website and how we hold and process your information can be found in our Privacy and Cookie Policy
5.
General
5.1
No waiver by us of any breach of these terms shall constitute a waiver of any other prior or subsequent breach and we shall not be affected by any delay, failure or omission to enforce or express forbearance granted in respect of any of your obligations.
5.2
The rights and remedies of is under these terms are independent, cumulative and without prejudice to its rights under the law.
5.3
These terms are not intended to create and shall not create any rights, entitlements, claims or benefits enforceable by any third party by virtue of the Contracts (Rights of Third Parties) Act 1999.
5.4
These terms and/or your use of the website shall be governed by and construed in accordance with English law and the English Courts shall have exclusive jurisdiction over any dispute which may arise.
                </textarea>
                </div>
                <div class="field">
                  <div class="ui checkbox">
                    <input type="checkbox" />
                    <label>I agree to the Terms and Conditions</label>
                  </div>
                </div>
                <Button negative class="ui button" onClick={this.onSubmit}>Submit</Button>
              </form>
            </div>
          </div>
          <div class="four wide column">
          </div>
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}
export default Register;