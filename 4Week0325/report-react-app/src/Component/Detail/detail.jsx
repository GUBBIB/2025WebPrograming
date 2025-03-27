import React from "react";
import Sodugom from "../../img/sodugom.png";

const styles = {
    divSt: {
        margin: "10px",
        weight: "100%",
        textAlign: "center",
    }
};

function Detail(){
    return(
        <div style={styles.divSt}>
            <img src={Sodugom} alt="Sodugom" />
            <p>안녕하세요 저는 경성대학교에 재학중인 소프트웨어학과 21학번입니다.</p>
        </div>
    );
}

export default Detail;