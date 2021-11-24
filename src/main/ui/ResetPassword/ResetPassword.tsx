import React, {ChangeEvent, FormEvent, useState} from "react";
import {SuperInputText} from "../common/SuperInputText/SuperInputText";
import {SuperButton} from "../common/SuperButton/SuperButton";
import {NavLink, Redirect} from "react-router-dom";
import {Path} from "../Routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {resetPasswordTC, setResetPasswordErrorAC} from "../../bll/resetPasswordReducer";
import {RootStateType} from "../../bll/store";
import s from "./ResetPassword.module.css"
import {AuthWrapper} from "../common/AuthWrapper/AuthWrapper";


export const ResetPassword = React.memo(() => {

    const info = useSelector<RootStateType, string>(state => state.resetPassword.info)

    const error = useSelector<RootStateType, string>(state => state.resetPassword.error)

    const loading = useSelector<RootStateType, boolean>(state => state.resetPassword.loading)

    const dispatch = useDispatch()

    const message = `<div style="background-color: #cdfbcd; padding: 15px">
                    password recovery link: <a style="color: #090062; text-decoration: underline" href='https://dzimentey.github.io/memo-cards/#/set-new-password/$token$'>
                    click this link </a></div>`

    const [email, setEmail] = useState('')

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        dispatch(setResetPasswordErrorAC(''))
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent page reloading when button was pressed
        dispatch(resetPasswordTC(email, message));
    }

    if (!!info) { // if user email has founded in database redirect to page with further instruction

        return <Redirect to={'/check-email'}/>

    }

    return <div>

        <AuthWrapper title='Forgot your password?'>

            <form onSubmit={onSubmit} className={s.forgotForm}>

                <label>
                    <SuperInputText value={email} placeholder={'Email'} onChange={onEmailChange}/>
                    {error !== ''
                        ? <div className={s.error}> {error} </div>
                        : <div className={s.instruction}>Enter your email address and we will send you further
                            instruction</div>
                    }
                </label>

                <SuperButton className={s.btn} type={'submit'} disabled={loading}
                >Send instruction</SuperButton>
            </form>

            <div className={s.textBelow}>
                <p>Did you remember your password?</p>
                <NavLink to={Path.LogIn} activeClassName={''}>Try logging in</NavLink>
            </div>
        </AuthWrapper>
    </div>;
});
