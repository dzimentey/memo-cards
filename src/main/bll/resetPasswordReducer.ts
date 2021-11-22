import {Dispatch} from "redux";
import {cardsAPI} from "../dal/password-api/passwordAPI";
import {AxiosError} from "axios";

type InitStateType = typeof initState;

const initState = {
    info: '',
    error: '',
    loading: false,
};

// reducer
export const resetPasswordReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "RESET-PASSWORD/SET-INFO":
            return {...state, info: action.info};
        case "RESET-PASSWORD/SET-ERROR":
            return {...state, error: action.error};
        case "RESET-PASSWORD/SET-LOADING":
            return {...state, loading: action.loading};
        default:
            return state;
    }
};

// action
type ActionType = ReturnType<typeof setResetPasswordInfoAC> | ReturnType<typeof setResetPasswordErrorAC>
                                                            | ReturnType<typeof setResetPasswordLoadingAC>;

export const setResetPasswordInfoAC = (info: string) => ({type: 'RESET-PASSWORD/SET-INFO', info} as const);

export const setResetPasswordErrorAC = (error: string) => ({type: 'RESET-PASSWORD/SET-ERROR', error} as const);

export const setResetPasswordLoadingAC = (loading: boolean) => ({type: 'RESET-PASSWORD/SET-LOADING', loading} as const);

// thunk
export const resetPasswordTC = (email: string, message: string) => (dispatch: Dispatch) => {

    dispatch(setResetPasswordLoadingAC(true)); // disable send button

    cardsAPI.resetPassword(email, message)
        .then((res) => {
            dispatch(setResetPasswordInfoAC(res.data.info));
        })
        .catch((error: AxiosError) => {
            let errorMessage = error.response?.data.error
            //console.log(errorMessage);
            dispatch(setResetPasswordErrorAC(errorMessage));
        })
        .finally(() => {
            dispatch(setResetPasswordLoadingAC(false)); // enable send button
        })
};
