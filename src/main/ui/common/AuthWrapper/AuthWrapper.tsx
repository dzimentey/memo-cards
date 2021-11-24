import React from "react";
import s from "./AuthWrapper.module.css";

type AuthWrapperPropsType = {
    title: string
}


export const AuthWrapper: React.FC<AuthWrapperPropsType> = ({children, title}) => {
// const {children, title} = props

   return (
      <div className={s.container}>
         <div className={s.within}>
             <H1/>
             <H2>{title}</H2>
            {children}
         </div>
      </div>
   )
}




export const H1: React.FC = () => {

    return <h1 className={s.title}>It-incubator</h1>
}

export const H2: React.FC = ({children}) => {

    return <h2 className={s.subtitle}>{children}</h2>
}