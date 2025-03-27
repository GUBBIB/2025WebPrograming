import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "GUBBIB",
        comment: "안녕하세요~",
    },
    {
        name: "굽빕",
        comment: "와 대단하시네요~",
    },
    {
        name: "장문용",
        comment: "저도 본받고 싶어요!",
    }
];

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;