import React from 'react'

export default ({data, updateActive}) => {

    const handleClick = (e) => {
        updateActive(e.target.getAttribute('index'))
        e.preventDefault()
    }

    return (
        <ul className="data-list">
            {data.map((item, index) => 
                <li index={item.id} onClick={handleClick} className="data-list__content" key={item.id}>{item.name}</li>
            )}
        </ul>
    )
}