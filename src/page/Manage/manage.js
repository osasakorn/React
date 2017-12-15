import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';
import Receiver from '../../Component/Receiver/receiver';

import 'semantic-ui-css/semantic.min.css';
import './manage.css';
import { Button, Label, Card, Image, Checkbox, Icon, Table, Menu, Tab, Input, Image as ImageComponent, Item, Header} from 'semantic-ui-react'
import { getalluser , deleteuser , deletepost , deletesend , getall , getalls } from '../../Api'


const colors = ['red']

class Manage extends Component {

  constructor() {
    super();
    this.state = {
        search: '',
        i: 1,
        user: [],
        post: [],
        send: []
    };
    this.onSubmit1 = this.onSubmit1.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
    this.onSubmit3 = this.onSubmit3.bind(this);
  }

  onSubmit1 (e) {
    
    deleteuser(e.target.value)
    .then(data => {
      if (data.status === 200) {
      this.componentDidMount()
      }
    })
  }
  onSubmit2 (e) {
    
    deletepost(e.target.value)
    .then(data => {
      if (data.status === 200) {
        this.componentDidMount()
      }
    })
  }
  onSubmit3 (e) {
    
    deletesend(e.target.value)
    .then(data => {
      if (data.status === 200) {
      this.componentDidMount()
      }
    })
  }

  componentDidMount(){
    getalluser().then((user) => this.setState({ user }));
    getall().then((post) => this.setState({ post }));
    getalls().then((send) => this.setState({ send }));
  }
  
  render() {

    const paragraph = <ImageComponent src='https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png' />
    
    const panes = [
      {
        menuItem: { key: 'users', icon: 'users', content: 'User' },
        render: () => <Tab.Pane>
          {colors.map(color => (
          <Table color={color} key={color} celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign='center' ><Icon name='user' />Name</Table.HeaderCell>
                <Table.HeaderCell textAlign='center' ><Icon name='phone' />Phone</Table.HeaderCell>
                <Table.HeaderCell textAlign='center' ><Icon name='mail' />E-mail</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'><Icon name='user close' /> User</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
    
            <Table.Body>

            {this.state.user.length >= 0 ?
                    this.state.user.map(list =>

              <Table.Row>
                <Table.Cell width='5'>{list.firstName} {list.lastName}</Table.Cell>
                <Table.Cell width='4'>{list.phone}</Table.Cell>
                <Table.Cell width='5'>{list.email}</Table.Cell>
                <Table.Cell negative width='2' textAlign='center'>
                  <Button  icon negative size='tiny' value={list.username} onClick={this.onSubmit1}>
                  <Icon name='close' /></Button>
                </Table.Cell>
              </Table.Row>

            ) : null
            }
    
              
            </Table.Body>
          </Table>
        ))}
    
        </Tab.Pane>,
      },
      {
        menuItem: <Menu.Item ><Icon name='remove bookmark'  />Donee's Post</Menu.Item>,
        render: () => <Tab.Pane>
          {colors.map(color => (
          <Table color={color} key={color} celled padded>
          <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='center' ><Icon name='talk outline' />Title</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' ><Icon name='user' />Name</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' ><Icon name='time' />Time</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'><Icon name='close' />Post</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
            <Table.Body>
            
                        {this.state.post.length >= 0 ?
                                this.state.post.map(list =>
            
                          <Table.Row>
                            <Table.Cell width='5'>{list.title}</Table.Cell>
                            <Table.Cell width='4'>{list.author}</Table.Cell>
                            <Table.Cell width='5'>{list.time}</Table.Cell>
                            <Table.Cell negative width='2' textAlign='center'>
                              <Button  icon negative size='tiny' value={list._id} onClick={this.onSubmit2}>
                              <Icon name='close' /></Button>
                            </Table.Cell>
                          </Table.Row>
            
                        ) : null
                        }
                
                          
                        </Table.Body>
    
    
          </Table>
        ))}
        </Tab.Pane>,
      },
      {
        menuItem: <Menu.Item ><Icon name='bookmark'  />Donor's Post</Menu.Item>,
        render: () => <Tab.Pane>
          {colors.map(color => (
          <Table color={color} key={color} celled padded>
          <Table.Header>
          <Table.Row>
          <Table.HeaderCell textAlign='center' ><Icon name='talk' />Title</Table.HeaderCell>
          <Table.HeaderCell textAlign='center' ><Icon name='user' />Name</Table.HeaderCell>
          <Table.HeaderCell textAlign='center' ><Icon name='time' />Time</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'><Icon name='close' />Post</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
            <Table.Body>
            
                        {this.state.send.length >= 0 ?
                                this.state.send.map(list =>
            
                          <Table.Row>
                            <Table.Cell width='5'>{list.title}}</Table.Cell>
                            <Table.Cell width='4'>{list.author}</Table.Cell>
                            <Table.Cell width='5'>{list.time}</Table.Cell>
                            <Table.Cell negative width='2' textAlign='center'>
                              <Button  icon negative size='tiny' value={list._id} onClick={this.onSubmit3}>
                              <Icon name='close' /></Button>
                            </Table.Cell>
                          </Table.Row>
            
                        ) : null
                        }
                        </Table.Body>
    
    
          </Table>
        ))}
        </Tab.Pane>,
      },
      
    ]

    return (
      <div className="Manage">
        <Navbar />
        <br />

        <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>
            MANAGEMENT
          </Header.Content>
        </Header>
      </div>

        <div class="postn">
          <Tab panes={panes} />
        </div >
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Manage;