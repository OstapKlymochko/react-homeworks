import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {authServices} from "../../services";
import {useNavigate} from "react-router-dom";

const LogInPage = () => {
    const {register, handleSubmit} = useForm();
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();
    const login = async (userCredentials) => {
        try {
            await authServices.login(userCredentials);
            navigate('/cars');
        } catch (e) {
            if (e.response.status === 401) {
                setErrors(e.response.data);

            }
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(login)}>
                    <input type="text" placeholder={'username'} {...register('username')}/>
                    <input type="text" placeholder={'password'} {...register('password')}/>
                    <button>Login</button>
                </form>
            </div>
            {errors?.detail && <div>{errors.detail}</div>}
        </div>
    );
};

export {LogInPage};