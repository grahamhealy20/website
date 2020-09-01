import React from 'react';

import fullStackBadgeImage from "./full-stack-engineer.png"

const FullStackBadge = React.forwardRef((props, ref) => {
    return (
        <div className="full-stack-badge">
            <figure className="image">
                <img ref={ref} src={fullStackBadgeImage} className="full-stack-badge-image" alt="A logo that says 'full stack developer'" />
            </figure>
        </div>
    )
});

export default FullStackBadge;