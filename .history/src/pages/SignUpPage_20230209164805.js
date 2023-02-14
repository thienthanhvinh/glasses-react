import React from 'react';
import Label from '../components/label/Label';
import LayoutAuthentication from '../layout/LayoutAuthentication';

const SignUpPage = () => {
    return (
        <LayoutAuthentication heading="Đăng ký">
            <p className='text-sm text-center text-primary mb-3'>Bạn đã có tài khoản? <span className='text-green-500 cursor-pointer font-semibold'>Đăng nhập</span></p>
            <form>
                <Label>Tài khoản</Label>
            </form>
        </LayoutAuthentication>
    );
};

export default SignUpPage;