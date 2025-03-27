import React from "react";

const styles = {
    nav: {
        backgroundColor: "gray",
        weight: "100%",
        textAlign: "center",
        fontSize: "2em",
        color: "white",
        margin: "10px",
        padding: "10px",
    },
};

function Navigator(props){
    return(
        <div style={styles.nav}>
            Introduce My-Self
        </div>
    );
}

export default Navigator;