import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN, loginAction, logoutAction } from '../reducers/user';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
  const dispatch = useDispatch()
  // redux state을 가져다 사용할때 useSelctor 쓸 것.
  const { isLoggedIn, user } = useSelector(state => state.user) 
  const { mainPosts } = useSelector(state => state.post)
  
  // useEffect(() => {
  //   dispatch(loginAction)
  //   dispatch(logoutAction)
  //   dispatch(loginAction)
  // }, [])
  
  return (
    <div>
      {user ? `${user.nickname}님 로그인 하였습니다.` : '로그아웃 하였습니다.'}
      {isLoggedIn && <PostForm />}
      {mainPosts.map((c) => {
        return (
          <PostCard key={c} post={c} />
        );
      })}
    </div>
  );
};

export default Home;