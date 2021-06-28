import React from "react"
import s from "./Users.module.css"

export const Paginator = (props: any) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map(m => {
            return <span className={props.currentPage === m ? s.selectedPage : ""} onClick={() => {
                props.onPageChanged(m)
            }}>{m + " "}</span>
        })}
    </div>
}