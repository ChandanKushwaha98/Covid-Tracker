import React from 'react'
import './index.css'

export default function Card({heading,cases,color}) {
    return <div className="cardContainer">
        <div className="cardHeader">{heading}</div>
        <div className="cardBody" style={{ background: color }}>{cases}</div>
    </div>
}