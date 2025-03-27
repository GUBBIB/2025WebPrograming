import React from "react";
import Button from "../Button/button";

const styles = {
    nav: {
        backgroundColor: "gray",
        weight: "100%",
        textAlign: "center",
        fontSize: "2em",
        color: "white",
        margin: "10px",
        padding: "10px",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
};

function Header(props){
    return(
        <div style={styles.nav}>    
            Introduce My-Self
            <div>
                <Button name={"버튼 1"} />
                <Button name={"버튼 2"} />
            </div>
        </div>
    );
}

export default Header;