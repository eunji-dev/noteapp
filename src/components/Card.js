import React from 'react'

export default function Card(props) {
    const {id,title,body,deleteCard} = props
    const onDelete = (e) => {
        const idx = e.target.className.slice(12)
        deleteCard(idx)
    }
    return (
        <div className={'card '+`${id}`}>
            <span>{title}</span>
            <span>{body}</span>
            <input type='button' className={'deleteButton'+`${id}`} value='X' onClick={onDelete}/>
        </div>
    )
}
