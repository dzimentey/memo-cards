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
export const createNewPasswordReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "CREATE-NEW-PASSWORD/SET-INFO":
            return {...state, info: action.info};
        case "CREATE-NEW-PASSWORD/SET-ERROR":
            return {...state, error: action.error};
        case "CREATE-NEW-PASSWORD/SET-LOADING":
            return {...state, loading: action.loading};
        default:
            return state;
    }
};

// action
type ActionType = ReturnType<typeof setNewPasswordInfoAC> | ReturnType<typeof setNewPasswordErrorAC>
                                                          | ReturnType<typeof setNewPasswordLoadingAC>;

export const setNewPasswordInfoAC = (info: string) => ({type: 'CREATE-NEW-PASSWORD/SET-INFO', info} as const);
export const setNewPasswordErrorAC = (error: string) => ({type: 'CREATE-NEW-PASSWORD/SET-ERROR', error} as const);
export const setNewPasswordLoadingAC = (loading: boolean) => ({type: 'CREATE-NEW-PASSWORD/SET-LOADING', loading} as const);

// thunk
export const createNewPasswordTC = (password: string, resetPasswordToken: string) => (dispatch: Dispatch) => {
    dispatch(setNewPasswordLoadingAC(true));
    cardsAPI.setNewPassword(password, resetPasswordToken)
        .then((res) => {
            dispatch(setNewPasswordInfoAC(res.data.info));
        })
        .catch((error: AxiosError) => {
            let errorMessage = error.response?.data.error
            //console.log(errorMessage);
            dispatch(setNewPasswordErrorAC(errorMessage));
        })
        .finally(() => {
            dispatch(setNewPasswordLoadingAC(false));
        })
};
