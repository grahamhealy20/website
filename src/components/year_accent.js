import React from "react"

const year = new Date().getFullYear();
const YearAccent = React.forwardRef((props, ref) => (
    <div>
        <span className="year-accent" ref={ref}>
            -{year}-
        </span>
    </div>
));

export default YearAccent;