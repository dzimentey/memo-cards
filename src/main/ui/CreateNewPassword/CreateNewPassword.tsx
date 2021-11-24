import React, {ChangeEvent, FormEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SuperInputText} from "../common/SuperInputText/SuperInputText";
import {SuperButton} from "../common/SuperButton/SuperButton";
import {Redirect, useParams} from "react-router-dom";
import {createNewPasswordTC, setNewPasswordErrorAC, setNewPasswordInfoAC} from "../../bll/createNewPasswordReducer";
import {RootStateType} from "../../bll/store";
import {AuthWrapper} from "../common/AuthWrapper/AuthWrapper";
import s from "../ResetPassword/ResetPassword.module.css";

export const CreateNewPassword = React.memo( () => {

  const info = useSelector<RootStateType, string>(state => state.createNewPassword.info)

  const error = useSelector<RootStateType, string>(state => state.createNewPassword.error)

  const loading = useSelector<RootStateType, boolean>(state => state.createNewPassword.loading)

  const dispatch = useDispatch()

  let {token} = useParams<{token: string}>();

  const [password, setPassword] = useState('')

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    dispatch(setNewPasswordErrorAC(''));
  }

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reloading when button was pressed
    dispatch(createNewPasswordTC(password, token));
  }

  if (info !== '') {
    alert(info); // show success password change message
    setTimeout(() => dispatch(setNewPasswordInfoAC('')), 3000); // reset info to ''
    return <Redirect to={'/login'} />
  }

  return <div>

    <AuthWrapper title='Create new password'>

    <form onSubmit={onSubmitHandler} className={s.forgotForm}>

      <label>
        <SuperInputText value={password} placeholder={'New password'} onChange={onPasswordChange}/>
        {error !== ''
            ? <div className={s.error} >{error}</div>
            : <div className={s.instruction}>Enter your New Password and we will save it for you</div>
        }
      </label>

      <SuperButton className={s.btn} type={'submit'} style={{ marginTop: '60px'}} disabled={loading}
      >Create new password</SuperButton>

    </form>

    </AuthWrapper>
  </div>;
});
