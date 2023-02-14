import React from "react";
import FormGroup from "../components/common/FormGroup";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import LayoutAuthentication from "../layout/LayoutAuthentication";

const SignUpPage = () => {
  return (
    <LayoutAuthentication heading="Đăng ký">
      <p className="text-sm text-center text-primary mb-5">
        Bạn đã có tài khoản?{" "}
        <span className="text-green-500 cursor-pointer font-semibold">
          Đăng nhập
        </span>
      </p>
      <form>
        <FormGroup>
          <Label>Tài khoản</Label>
          <Input></Input>
        </FormGroup>
        FormGr
        <Label>Mật khẩu</Label>
        <Input></Input>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
