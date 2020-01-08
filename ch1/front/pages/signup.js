import React, { useState } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd'
import AppLayout from '../components/AppLayout';
import Password from 'antd/lib/input/Password';

const Signup = () => {
  const [id, setId ] = useState('');
  const [nick, setNick ] = useState('');
  const [password, setPassword ] = useState('');
  const [passwordCheck, setPasswordCheck ] = useState('');
  const [term, setTerm] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }
    
  }

  const onChangeId = (e) => {
    setId(e.target.value)
  }

  const onChangeNick = (e) => {
    setNick(e.target.value)
  }

  const onChangePass = (e) => {
    setPassword(e.target.value)
  }

  const onChangePassCheck = (e) => {
    setPasswordError(e.target.value !== password)
    setPasswordCheck(e.target.value)
  }

  const onChangeTerm = (e) => {
    setTermError(false)
    setTerm(e.target.checked)
  }

  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css" />
      </Head>
      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding: '20px' }}>
            <div>
              <div>
                <label htmlFor="user-id">아이디</label>
                <Input name="user-id" value={id} required onChange={onChangeId} />
              </div>
              <br />
              <div>
                <label htmlFor="user-nick">닉네임</label>
                <Input name="user-nick" value={nick} required onChange={onChangeNick} />
              </div>
              <br />
              <div>
                <label htmlFor="user-pass">비밀번호</label>
                <Input name="user-pass" type="password" value={password} required onChange={onChangePass} />
              </div>
              <br />
              <div>
                <label htmlFor="user-pass-check">비밀번호 체크</label>
                <Input name="user-pass-check" type="password" value={passwordCheck} required onChange={onChangePassCheck} />
                {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
              </div>
              <br />
              <div>
                <Checkbox name="user-term" value={term} onChange={onChangeTerm}>동의합니다.</Checkbox>
                {termError && <div style={{ color: 'red' }}>약관에 동의해주세요.</div>}
              </div>
              <br />
              <div>
                <Button type="primary" htmlType="submit">가입하기</Button>
              </div>
            </div>
          </Form>
      </AppLayout>
    </>
  )
}

export default Signup;