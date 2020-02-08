import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { 
  Menu, Input, Button, 
  Row, Col, Card, Avatar,
} from 'antd';
import LoginForm from './LoginForm';

const dummy = {
  isLogin: true,
  nickname: '도경',
  post: [],
  followings: [],
  followers: [],
}

const AppLayout = ({ children }) => {
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
          {dummy.isLogin ? (
            <Card
              actions={[
                <div key=''>짹짹<br />{dummy.post.length}</div>,
                <div key=''>팔로잉<br />{dummy.followings.length}</div>,
                <div key=''>팔로워<br />{dummy.followers.length}</div>,
              ]}
            >
              <Card.Meta 
                avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                title={dummy.nickname}
              />
            </Card>
          ) : (
            <LoginForm />
          )}
        </Col>
        <Col xs={24} md={12}>{children}</Col>
        <Col xs={24} md={6}>
          세번째
        </Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.elementType
}

export default AppLayout;