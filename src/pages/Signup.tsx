import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signup } from '../api/auth'

type FormValues = {
    name: string,
    email: string,
    password: string
}

const Signup = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>();
    const navigate = useNavigate(); 
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        signup(data);
        navigate("/signin");
    }
    return (
    <div>
        <form action="" onSubmit = {handleSubmit(onSubmit)}>
            <input type="text" placeholder='Ten dang nhap' {...register('name',{required:true, minLength: 6})} />
            {errors.name && errors.name.type === "required" && <span> Require</span>}
            {errors.name && errors.name.type === "minLength" && <span> Min Length</span>}
            <input type="email" placeholder='emai'{...register('email',{required:true})} />
            <input type="password" placeholder='Password' {...register('password',{required: true})} />
            <button>Register</button>
        </form>
    </div>
    )
}

export default Signup