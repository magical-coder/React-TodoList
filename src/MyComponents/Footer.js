import React from 'react'


export const Footer = (props) => {
    // let footerStyle = {
    //     position: "relative",
    //     top: "70vh",
    //     width: "100%",
    //     border: "2px solid blue"
    // }
    return (
        //<footer className="bg-dark text-light py-3" style={footerStyle}>
        <footer className="bg-dark text-light py-3">
            <p className="text-center">
            {props.content}
            </p>
        </footer>
    )
}
