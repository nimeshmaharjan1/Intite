import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const defaultValues = {
        name: '',
        email: '',
        phone: '',
        password: '',
    };
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (formData: any) => {
        try {
            const user = await axios.post('/api/users/sign-up', formData);
            console.log({ user });
        } catch (error) {
            console.log({ error });
        }
    };
    return (
        <section className="min-h-screen flex items-center justify-center px-12 md:px-0">
            <div className="card w-96 bg-neutral shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl mb-2">Sign Up</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register('name', { required: 'This is required' })}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">E-mail</span>
                        </label>
                        <input
                            {...register('email', { required: 'This is required' })}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input
                            {...register('phone', { required: 'This is required' })}
                            type="tel"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register('password', { required: 'This is required' })}
                            type="password"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>

                    <button className="btn btn-primary mt-3 w-full " onClick={handleSubmit(onSubmit)}>
                        Register
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
