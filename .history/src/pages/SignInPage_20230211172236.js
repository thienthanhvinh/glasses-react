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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
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