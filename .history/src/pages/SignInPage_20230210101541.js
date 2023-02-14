import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import FormGroup from "../components/common/FormGroup";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  username: yup.string().required("Hãy nhập tài khoản"),
  password: yup.string().min(8,"Mật khẩu tối thiểu là 8 ký tự").required("Hãy nhập mật khẩu"),
});
const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });
  const handleSignIn = (values) => {
   
  }
  useEffect(() => {
    const arrErroes = Object.values(errors);
    if(arrErroes)
  })
  return (
    <LayoutAuthentication heading="Đăng nhập">
      <p className="text-sm text-center text-primary mb-5">
        Bạn chưa có tài khoản?{" "}
        <Link
          to="/sign-up"
          className="text-green-500 cursor-pointer font-semibold"
        >
          Đăng ký
        </Link>
      </p>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="username">Tài khoản</Label>

          <Input
            type="text"
            name="username"
            placeholder="Nhập tài khoản"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Mật khẩu</Label>
          <Input
            type="password"
            name="password"
            placeholder="Nhập mật khẩu"
          ></Input>
        </FormGroup>
        <p className="text-right text-sm text-green-500 font-semibold">
          Quên mật khẩu
        </p>
        <Button className="w-full text-white mt-5">Đăng nhập</Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
