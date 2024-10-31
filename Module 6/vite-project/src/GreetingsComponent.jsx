import React from 'react';

export default function Greeting({name, children}) {
    return (
    <div className="componentBox">
    <h3>Hello {name ? name: 'World'}!</h3>
    <p>{children}</p>
    </div>
    )
    }