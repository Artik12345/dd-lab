import React from 'react'

export default ({originalData, data, updateData}) => {
    
    const inputFilter = (e) => {
        let val = e.target.value.toLowerCase()
        if (val === '') {
            updateData(originalData)
        } else {
            if (val.indexOf(':') !== -1) {
                let search_field = val.slice(0, val.indexOf(':'))
                if (search_field in originalData[0]) {
                    let field_value = val.slice(val.indexOf(':') + 1)
                    let filter_data = originalData.filter((user) => {
                        return user[search_field].toLowerCase().includes(field_value)
                    })
                    updateData(filter_data)
                }
            } else {
                let filter_data = originalData.filter((user) => {
                    return user.name.toLowerCase().includes(val)
                })
                updateData(filter_data)
            }
        }
        e.preventDefault()
    }

    return (
        <input
            type="text"
            className="search"
            onChange={inputFilter}
            placeholder="Введите текст для поиска..."
        />
    )
}