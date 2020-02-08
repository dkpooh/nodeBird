import React, { useCallback } from 'react';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import { useInput } from '../pages/signup';

const LoginForm = () => {
  const [id, onChangeId] = useInput('')
  const [password, onChangePass] = useInput('')
  const onSubmitForm = useCallback((e) => {
    e.preventDefault()
    console.log({
      id, password
    })
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