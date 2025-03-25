import React from "react";
import Comment from "./Comment";

const commentse = [
    {
        name: "이인제",
        comment: "안녕하세요, 소플입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요~!",
    },
    {
        name: "강인경",
        comment: "저도 리액트 배워 보고 싶어요!!",
    },
];

function CommentList(props){
    return (
        <div>
            {commentse.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    );
}

export default CommentList;