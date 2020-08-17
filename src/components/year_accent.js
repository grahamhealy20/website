import React from "react"

const year = new Date().getFullYear();
const YearAccent = () => (

    <div>
        <span className="year-accent">
            -{year}-
        </span>
    </div>
)

export default YearAccent;