import React, { Component } from "react";
import MasterLayout from "../../layouts/MasterLayout";
import { Form, Icon, Input, Button, Checkbox, notification, Badge } from "antd";
import {
  Firebase,
  FirebaseContext,
  withFirebase
} from "../../helpers/firebase";

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: "",
      current: false
    };
  }

  componentDidMount() {
    const firebase = this.props.firebase;
    // Request token browsers
    firebase.requestToken(async (token) => {
     console.log(token);
     
    });

    // Reciver message from server
    firebase.onMessage((data) => {
      console.log(data);
      
     
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.firebase
          .doSignInWithEmailAndPassword(values.username, values.password)
          .then(authUser => {
            console.log(authUser);
          })
          .catch(error => {
            this.setState({ error });
          });
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <MasterLayout>
        <Badge count={this.state.current}>
        </Badge>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </MasterLayout>
    );
  }
}

export default Form.create({ name: "normal_login" })(withFirebase(Login));
