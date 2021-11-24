import React from "react";
import {useDispatch} from "react-redux";
import {SuperButton} from "../common/SuperButton/SuperButton";
import {useHistory} from "react-router-dom";
import {setResetPasswordInfoAC} from "../../bll/resetPasswordReducer";
import {AuthWrapper} from "../common/AuthWrapper/AuthWrapper";
import s from "./ResetPassword.module.css";
import {IconSVG} from "../common/assets/img/IconSVG";

export const CheckEmail = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const navigateTo = () => {
        history.push('/');
        dispatch(setResetPasswordInfoAC(''));
    };

    return <div>
        <AuthWrapper title={''}>
            <div className={s.iconEmail}>

                <IconSVG/>
                <h2 className={s.checkText}>Check Email</h2>
                <div className={s.instruction}>
                    We've sent an Email width instruction to yor Email address.
                </div>

                <SuperButton className={s.btn} type={'submit'} style={{width: '200px', borderRadius: '30px'}} onClick={navigateTo}
                >Ok</SuperButton>

            </div>


        </AuthWrapper>
    </div>;
};
