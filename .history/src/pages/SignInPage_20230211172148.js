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
import { toast } from "react-toastify";

const schema = yup.object({
  username: yup.string().required("Hãy nhập tài khoản"),
  password: yup
    .string()
    .required("Hãy nhập mật khẩu")
    .min(8, "Mật khẩu tối thiểu là 8 ký tự"),
});
const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });
  const handleSignIn = (values) => {};
  useEffect(() => {
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message, {
        pauseOnHover: false,
      });
    }
  });
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
            control={control}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Mật khẩu</Label>
          <Input
            type="password"
            name="password"
            placeholder="Nhập mật khẩu"
            control={control}
          >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

          </Input>
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
