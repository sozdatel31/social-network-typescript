import React from "react";
import s from "./Dialogs.module.css"

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>Nadya</div>
                <div>Kolya</div>
                <div>Antony</div>
                <div>Ivan</div>
                <div>Victor</div>
            </div>
            <div className={s.message}>
                <div>Yo</div>
                <div>Hello, Kaban?</div>
                <div>Sosi sosisky</div>
                <div>Ssakroy ebalo</div>
                <div>Meowwwwwwww</div>
            </div>
        </div>
    )
}

export default Dialogs;