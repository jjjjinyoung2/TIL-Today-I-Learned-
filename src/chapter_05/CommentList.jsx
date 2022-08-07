import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "최진영",
    comment: "안녕하세요 jin입니다.",
  },
  {
    name: "기성용",
    comment: "안녕하세요 Ki입니다.",
  },
  {
    name: "지창욱",
    comment: "안녕하세요 Ji입니다.",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}
export default CommentList;
