import React from "react";

const styles = {
    btn: {
        textAlign: "right",
        color: "gray",
        backgroundColor: "white",
        textDecoration: "none",
        fontSize: "0.55em",
        padding: "0px 2px 2px 2px",
        margin: "0px 2px 0px 2px",
        borderRadius: "5px",
    }
};

function Button(props){
    return(
        <span>
            <a href="#" style={styles.btn}>{props.name}</a>
        </span>
    );
}

export default Button;