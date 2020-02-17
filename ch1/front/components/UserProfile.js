import React, { useCallback } from 'react';
import { Avatar, Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const onClickLogout = useCallback(() => {
    // 자식 컴퍼넌트에 props로 전달하기 위해서 useCallback을 사용한다.
    dispatch(logoutAction)
  }, [])

  return (
    <Card
      actions={[
        <div key="twit">짹짹<br />{user.post.length}</div>,
        <div key="following">팔로잉<br />{user.followings.length}</div>,
        <div key="follower">팔로워<br />{user.followers.length}</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{user.nickname[0]}</Avatar>}
        title={user.nickname}
      />
      <Button onClick={onClickLogout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;