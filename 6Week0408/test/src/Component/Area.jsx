import { useState } from "react";

const Area = () => {
    const [size, setSize] = useState({ width: 100, height: 100 });
 
    return (
        <div>


            <h1>
                너비 : {size.width}, 높이 : {size.height}
            </h1>

            <button
                onClick={() => {
                    const sizeCopy = { ...size };
                    
                    if(sizeCopy.width + 20 < 150){
                        sizeCopy.width += 20;
                    }

                    setSize(sizeCopy);
                }}
            >
                너비 증가
            </button>
            <button
                onClick={() => {
                    const sizeCopy = { ...size};

                    if(sizeCopy.width - 20 > 0){
                        sizeCopy.width -= 20;
                    }

                    setSize(sizeCopy);
                }}
            >
                너비 감소
            </button>
            <button
                onClick={() => {
                    const sizeCopy = { ...size };

                    if(sizeCopy.height + 10 < 150){
                        sizeCopy.height += 10;
                    }

                    setSize(sizeCopy);
                }}
            >
                높이 증가
            </button>
            <button
                onClick={() => {
                    const sizeCopy = { ...size };

                    if(sizeCopy.height - 10 > 0){
                        sizeCopy.height -= 10;
                    }
                    setSize(sizeCopy);
                }}
            >
                높이 감소
            </button>
        </div>
    );
};
export default Area;
