import React, { useCallback, useState } from "react";
import AppLayout from "../component/AppLayout";
import { Form, Input, Button, Checkbox } from "antd";
import Head from "next/head";
import PropTypes from "prop-types";
import styled from "styled-components";
import useInput from "../hooks/useInput";
const Signup = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const ErrorMessage = styled.div`
    color: red;
  `;
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(false);
    },
    [password]
  );

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  });

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);
  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-id">닉네임</label>
          <br />
          <Input
            name="nickname"
            value={nickname}
            required
            onChange={onChangeNickname}
          />
        </div>
        <div>
          <label htmlFor="user-id">비밀번호</label>
          <br />
          <Input
            name="password"
            type={"password"}
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="checkPassword">비밀번호 체크</label>
          <br />
          <Input
            name="checkPassword"
            type={"password"}
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다. </ErrorMessage>
          )}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            제로초의 말을 잘 들을것을 선언합니다
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
