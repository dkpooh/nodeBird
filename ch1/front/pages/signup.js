import React, { useState, useCallback } from 'react';
import { Form, Input, Checkbox, Button } from 'antd'

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue)
  const handler = (e) => {
    setter(e.target.value)
  }
  return [value, handler]
}

const Signup = () => {
  const [passwordCheck, setPasswordCheck ] = useState('');
  const [term, setTerm] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [id, onChangeId] = useInput('')
  const [nick, onChangeNick] = useInput('')
  const [password, onChangePass] = useInput('')

  const onSubmit = useCallback(e => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }
  }, [password, passwordCheck, term])

  const onChangePassCheck = useCallback(e => {
    setPasswordError(e.target.value !== password)
    setPasswordCheck(e.target.value)
  }, [password])

  const onChangeTerm = useCallback(e => {
    setTermError(false)
    setTerm(e.target.checked)
  },[])

  return (
    <>
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
    </>
  )
}

export default Signup;