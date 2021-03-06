import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import { useInput } from '../pages/signup';
import { loginAction } from '../reducers/user';

const LoginForm = () => {
  const [id, onChangeId] = useInput('')
  const [password, onChangePass] = useInput('')
  const dispatch = useDispatch()
  const onSubmitForm = useCallback((e) => {
    e.preventDefault()
    dispatch(loginAction)
  }, [id, password]) 

  return (
    <Form onSubmit={onSubmitForm}>
      <div>
        <div>
          <label htmlFor="user-id">아이디</label>
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <br />
        <div>
          <label htmlFor="user-pass">비밀번호</label>
          <Input name="user-pass" value={password} onChange={onChangePass} required />
        </div>
        <br />
        <div>
          <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
          <Link href="/signup"><a><Button>회원가입</Button></a></Link>
        </div>
      </div>
    </Form>
  )
}

export default LoginForm;