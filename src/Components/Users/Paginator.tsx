import React, {useState} from "react"

type paginatorType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: any
}

export const Paginator = (props: paginatorType) => {
    let portionSize = 10;
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber-1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div>
        {portionNumber > 1 &&
        <button onClick={()=> {setPortionNumber(portionNumber-1)}}>Prev</button>
        }
        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p)=> {
                return <span
                             key={p}
                             onClick={(e)=> {
                             props.onPageChanged(p);}}>{p} </span>
            })}
        {portionCount > portionNumber &&
        <button onClick={()=> {setPortionNumber(portionNumber+1)}}>Next</button>}
    </div>
}