import React from 'react';
import Input from '../components/input/Input';
import Label from '../components/label/Label';
import LayoutAuthentication from '../layout/LayoutAuthentication';

const SignUpPage = () => {
    return (
        <LayoutAuthentication heading="Đăng ký">
            <p className='text-sm text-center text-primary mb-5'>Bạn đã có tài khoản? <span className='text-green-500 cursor-pointer font-semibold'>Đăng nhập</span></p>
            <form>
                <Label>Tài khoản</Label>
                <Input></Input>
                <Label>Mật khẩu</Label>
                <Input></Input>
            </form>
        </LayoutAuthentication>
    );
};

export default SignUpPage;