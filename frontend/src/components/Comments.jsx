import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import axios from "axios";
import { useSelector } from "react-redux";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #aaa;
  color: white;
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
  color: white;
`;

const Button = styled.button`
  padding: 5px 15px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
`;

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user) || {};

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/comments/${videoId}`);
        setComments(response.data);
      } catch (err) {}
    };
    fetchComments();
  });

  const handleClick = async () => {
    try {
      if (!comment) return; 
      const response = await axios.post("comments/", { comment });
      setComment(""); 
      setComments((prevComments) => [...prevComments, response.data]); // add new comment to the list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser?.img} />
        <Input
          placeholder="Add a comment..."
          onChange={(e) => setComment(e.target.value)}
        />
        <Button onClick={handleClick}>submit</Button>
      </NewComment>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};

export default Comments;
