import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const todo = todos.filter((todo) => todo.id === id)[0];

  const review = useSelector((state) => state.review);
  const [title, setTitle] = useState("");
  return (
    <div>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.body}
      <br />
      {todo.isDone.toString()}
      <br />
      <button onClick={() => navigate("/")}>이전 화면으로</button>
      <br />
      댓글 입력: &nbsp;
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      &nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "ADD_COMMENT",
            payload: {
              id: crypto.randomUUID(),
              title: title,
            },
          });
          setTitle("");
        }}
      >
        댓글 추가
      </button>
      {review.map((item) => {
        return (
          <div>
            {item.title}
            <button
              onClick={() => {
                dispatch({
                  type: "DELETE_COMMENT",
                  payload: item.id,
                });
              }}
            >
              댓글 삭제
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
