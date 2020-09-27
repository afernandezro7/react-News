import React, { useState } from 'react'

const useSelect = (initialState, options) => {
    
    const [state, setstate] = useState(initialState)

    const handleChange = ( {target} )=>{
        setstate(
            target.value
        )
    } 

    const SelectNoticias = ()=>(
        <select
            className="browser-default "
            style={{marginBottom: 1 +'rem'}}
            value={ state }
            onChange={ handleChange }

        >
            
            
            {
                options.map( ({name,value}) =>(
                    <option value={value} key={value}>{name}</option>)
                )
            
            }

        </select>
    )

    return [state, SelectNoticias];
}



export default useSelect
