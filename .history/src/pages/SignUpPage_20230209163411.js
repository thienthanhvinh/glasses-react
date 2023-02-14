import React from 'react';
import LayoutAuthentication from '../layout/LayoutAuthentication';

const SignUpPage = () => {
    return (
        <LayoutAuthentication heading="Đăng ký">
            <p className='text-sm'>Bạn đã có tài khoản? <span className='text-gre'>Đăng nhập</span></p>
        </LayoutAuthentication>
    );
};

export default SignUpPage;