import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../helpers/firebase';
import { Layout, Menu, Breadcrumb, Button } from 'antd';

const { Header, Content, Footer } = Layout;
class MasterLayout extends Component {
  logout = () => {
    this.props.firebase.doSignOut();
  }
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <Link to='/login'>Login</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/register'>Register</Link>
            </Menu.Item>
            <Menu.Item key="3">Home</Menu.Item>
            <Menu.Item key="4">
              <Button type="button" onClick={this.logout}>Logout</Button>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }
}

export default withFirebase(MasterLayout);