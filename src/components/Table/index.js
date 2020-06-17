import React from "react";
import "./style.css";

function Table(props) {
    return (
        <table className="striped bordered hover">{props.children}</table>
    )
}

export default Table;