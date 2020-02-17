import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { 
  Menu, Input, Row, Col } from 'antd';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const AppLayout = ({ children }) => {
  const { isLoggedIn } = useSelector(state => state.user)

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
        <Link href="/profile">
            <a href = "">프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle ' }} />
        </Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile />
          ) : (
            <LoginForm />
          )}
        </Col>
        <Col xs={24} md={12}>{children}</Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.object
}

export default AppLayout;