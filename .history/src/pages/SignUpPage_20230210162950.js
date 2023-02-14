import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import FormGroup from "../components/common/FormGroup";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import LayoutAuthentication from "../layout/LayoutAuthentication";

const SignUpPage = () => {
  const {handleSubmit, control, formState: {errors}} = useForm({});
  const handleSignUp = () => {

  }
  return (
    <LayoutAuthentication heading="Đăng ký">
      <p className="text-sm text-center text-primary mb-5">
        Bạn đã có tài khoản?{" "}
        <Link to="/sign-in" className="text-green-500 cursor-pointer font-semibold">
          Đăng nhập
        </Link>
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="username">Tài khoản</Label>
          <Input type="text" name="username" placeholder="Nhập tài khoản" control={control} ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>   
          <Input type="text" name="email" placeholder="Nhập email" control={control}></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Mật khẩu</Label>
          <Input type="password" name="password"  placeholder="Tạo mật khẩu"></Input>
        </FormGroup>
        <p className="text-right text-sm text-green-500 font-semibold">Quên mật khẩu</p>
        <Button className="w-full text-white mt-5">Đăng ký</Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
