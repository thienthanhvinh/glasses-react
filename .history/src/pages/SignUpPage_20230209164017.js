import React from 'react';
import LayoutAuthentication from '../layout/LayoutAuthentication';

const SignUpPage = () => {
    return (
        <LayoutAuthentication heading="Đăng ký">
            <p className='text-sm text-center text-primary'>Bạn đã có tài khoản? <span className='text-green-500 cursor-pointer font-semibold'>Đăng nhập</span></p>
        </LayoutAuthentication>
    );
};

export default SignUpPage;