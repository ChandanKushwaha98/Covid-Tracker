import React from 'react'

function Flag({countryInfo}) {
    return (
        <div>
            <img className="countryFlag" alt="flag" src={countryInfo.flag}/>
        </div>
    )
}

export default Flag
