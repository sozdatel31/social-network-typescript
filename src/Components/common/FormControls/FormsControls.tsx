import React, {DetailedHTMLProps} from "react";
import style from './FormsControls.module.css'

type TextAreaType = {
    input: React.DetailedHTMLProps<any,any>,
    meta: any,
    props: {[p: string]: any}
}

export const Textarea = ({input, meta, ...props}:TextAreaType) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + ' ' + (hasError? style.error : "")}>
           <div> <textarea {...input} {...props}/></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Input = ({input, meta, ...props}:TextAreaType) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + ' ' + (hasError? style.error : "")}>
           <div> <textarea {...input} {...props}/></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}