import React, { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);
    var noStateCount = 0;

    return (
        <div>
            <div>
                <p>총 {noStateCount}번 클릭했습니다.</p>
                <button onClick={()=> noStateCount++}>
                    클릭
                </button>
            </div>
            <div>
                <p>총 {count}번 클릭했습니다.</p>
                <button onClick={() => setCount(count + 1)}>
                    클릭
                </button>
            </div>
        </div>
    );
}

export default Counter;