import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn() {
  const [showpassword, setShowpassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevstate) => ({
      ...prevstate,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      if (userCredentials.user) {
        navigate('/');
      }
    } catch (error) {
      toast.error('Wrong user credentials');
    }
  };

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome Back</p>
        </header>
        <main>
          <form onSubmit={onSubmit}>
            <input
              type='email'
              className='emailInput'
              placeholder='Email'
              id='email'
              value={email}
              onChange={onChange}
            />
            <div className='passwordInputDiv'>
              <input
                type={showpassword ? 'text' : 'password'}
                className='passwordInput'
                placeholder='Password'
                id='password'
                onChange={onChange}
                value={password}
              />
              <img
                src={visibilityIcon}
                alt='show password'
                className='showPassword'
                onClick={() => setShowpassword(!showpassword)}
              />
            </div>
            <Link to='/forgot-password' className='forgotPasswordLink'>
              Forgot Password
            </Link>
            <div className='signInBar'>
              <p className='signInText'>Sign In</p>
              <button className='signInButton'>
                <ArrowRightIcon fill='#fff' width='34px' height='34px' />
              </button>
            </div>
          </form>
          <Link to='/signup' className='registerLink'>
            Sign Up Instead
          </Link>
        </main>
      </div>
    </>
  );
}
