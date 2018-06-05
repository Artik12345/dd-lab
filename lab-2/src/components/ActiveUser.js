import React from 'react'


export default ({activeUser}) => {

    if (!activeUser) {
        return (
            <p>Пользователь не выбран</p>
        )
    } else {
        return (
            <div className="active-user">
                <img src={activeUser.avatar}/>
                <p>{activeUser.name}</p>
                <p>{activeUser.email}</p>
                <p>{activeUser.phone}</p>
            </div>
        )
    }

}