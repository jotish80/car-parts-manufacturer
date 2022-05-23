import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import background from '../../assets/images/backround.jpg'
import auth from '../../Firebase/firebase.init';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (loading || googleLoading) {
        return <Loading />
    }


    if (user || googleUser) {
        navigate(from, { replace: true });
    }

    let displayErrorMessage;
    if (error || googleError) {
        displayErrorMessage = <p className='text-red-500'>{error?.message || googleError?.message}</p>
    }



    const onSubmit = (data) => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };

 
    const myStyle = {
        backgroundImage:
            `url(${background})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        opacity: '0.8'  
    };
    return (
        <div style={myStyle} className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input type="email" placeholder="Your Email" {...register("email", {
                                required: {
                                    value: true,
                                    message: "email is required"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })} class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input type="password" placeholder="Password" {...register("password", {
                                required: {
                                    value: true,
                                    message: "password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Provide six character'
                                }
                            })} class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {displayErrorMessage}
                        <input className='btn w-full max-w-xs text-white' value="Login" type='submit' />
                    </form>
                    <p className='mt-2'>New to this site? <Link className='text-orange-600 ml-2' to='/signup'>Create a New User</Link></p>
                     
                    <div class="divider">OR</div>
                    <div className='card-action justify-center'>
                        <button className='btn btn-outline w-full' onClick={() => signInWithGoogle()}><FcGoogle className='mr-2 h-6 w-6'/>Google log in</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;