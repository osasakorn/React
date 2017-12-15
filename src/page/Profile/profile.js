import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';

import 'semantic-ui-css/semantic.min.css';
import './profile.css';
import { Button, Label, Card, Image, Checkbox, Icon, Table, Menu, Tab, Input, Image as ImageComponent, Item, Header, Message } from 'semantic-ui-react'

const colors = ['red']

class Profile extends Component {


    render() {
        return (
            <div className="Profile">
                <Navbar />
                <br/>

                <div>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='id card outline' circular />
                        <Header.Content>
                            (EDIT) YOUR PROFILE
            </Header.Content>
                    </Header>
                </div>
                <br/>

                <div class="ui grid">
                    <div class="four wide column">
                    </div>
                    <div class="eight wide column">
                        <form class="ui form ">

                            <div class="unstackable two fields">
                                <div class="field">
                                    <label>Username</label>
                                    <div class="ui input">
                                        <input type="text" placeholder="Username" name='username' />
                                    </div>
                                </div>


                                <div class="field">
                                    <label>Password</label>
                                    <div class="ui input">
                                        <input type="text" placeholder="Password" name='password' />
                                    </div>
                                </div>
                            </div>

                            <div class="unstackable two fields">
                                <div class="field">
                                    <label>First Name</label>
                                    <div class="ui input">
                                        <input type="text" placeholder="First Name" name='firstName' />
                                    </div>
                                </div>

                                <div class="field">
                                    <label>Last Name</label>
                                    <div class="ui input">
                                        <input type="text" placeholder="Last Name" name='lastName' />
                                    </div>
                                </div>
                            </div>

                            <div class="field">
                                <label>Address</label>
                                <div class="ui input">
                                    <input type="text" placeholder="Address" name='address' />
                                </div>
                            </div>

                            <div class="two fields">
                                <div class="field">
                                    <label>Email</label>
                                    <div class="ui input">
                                        <input type="text" placeholder="Email" name='email' />
                                    </div>
                                </div>

                                <div class="field">
                                    <label>Phone</label>
                                    <div class="ui input">
                                        <input type="text" placeholder="Phone" name='phone' />
                                    </div>
                                </div>

                            </div>

                            <Button negative class="ui button" onClick={this.onSubmit}>Submit</Button>
                        </form>
                    </div>
                </div>
                <div class="four wide column">
                </div>
                <br />
                <Footer />
            </div>


        );
    }
}
export default Profile;