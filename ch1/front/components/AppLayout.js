import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { 
  Menu, Input, Button, 
  Row, Col, Card, Avatar,
  Form
} from 'antd';

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
      <Button>
        <Link href="/signup"><a>회원가입</a></Link>
      </Button>
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
            <Form>
              <div>
                <div>
                  <label htmlFor="user-id">아이디</label>
                  <Input name="user-id" required />
                </div>
                <br />
                <div>
                  <label htmlFor="user-pass">비밀번호</label>
                  <Input name="user-pass" type="password" required />
                </div>
                <br />
                <div>
                  <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                  <Link href="/signup"><a><Button>회원가입</Button></a></Link>
                </div>
              </div>
            </Form>
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