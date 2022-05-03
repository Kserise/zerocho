import React, { useMemo } from "react";
import { Form, Input } from "antd";
const NicknameEditForm = () => {
  const style = useMemo(
    () => ({ marginBottom: "20px", border: "1px solid " }),
    []
  );

  return (
    <Form>
      <Input.Search addonBefore="닉네임" enterButton="수정" style={style} />
    </Form>
  );
};

export default NicknameEditForm;
