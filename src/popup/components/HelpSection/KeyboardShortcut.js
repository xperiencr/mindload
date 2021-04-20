import React from 'react';
import './KeyboardShortcut.css';

export default function KeyboardShortcut(props) {

    props.keys, props.description

    const keysElements = props.keys.map(key => {
        return <span className="KeyboardShortCut__key">{key}</span>
    });

    return(
        <div className="KeyboardShortCut">
            {keysElements}
            <span className="KeyboardShortCut__title">{props.description}</span>
        </div>
    );
}