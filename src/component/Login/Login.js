import React from 'react'
import style from './login.module.css'
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className={style.login}>
            <div className={style.login_modal}>
                <h3>FIND THE MOST LOVED ACTIVITIES</h3>
                <h2>BLACK CAT</h2>
                <div className={style.logo_container}>
                    <img src='/SVGs/logo-cat.svg' alt="" />
                </div>
                <form className={style.myForm}>
                    <div className={style.myForm_element} >
                        <input className={style.username} type='text' placeholder='Username'></input>

                    </div>
                    <div className={style.myForm_element}>
                        <input className={style.password} type='password' placeholder='Password'></input>
                    </div>

                </form>
                <Link className={style.signIn} to='/MainLayout'>

                    SIGN IN

                </Link>

            </div>
        </div>
    )
}
