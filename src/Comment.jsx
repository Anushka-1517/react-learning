import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
    let [comments, setComments] = useState([
        {
            username: "@sk",
            remarks: "great job!",
            rating: 4
        }
    ]);

    let addNewComment = (comment) => {
        setComments((currComments) => {
            return [...currComments, comment];
        });
    };

    return (
        <>
            <div>
                <h3>All Comments</h3>

                {comments.map((comment, index) => (
                    <div className="comment" key={index}>
                        <span>{comment.remarks}</span>
                        &nbsp;
                        <span>(rating = {comment.rating})</span>
                        <p>- {comment.username}</p>
                    </div>
                ))}
            </div>

            <hr />

            <CommentsForm addNewComment={addNewComment} />
        </>
    );
}