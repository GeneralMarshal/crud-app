import CommentForm from "./CommentForm"
import CommentCard from "./CommentCard";
import Counter from "./Counter";
import data from "../data/data.json"
import { useState } from "react";
export default function KarmaCounter(){
  const [comments, setComments] = useState(data.comments)

    function updateScore(id, delta) {
      console.log(id)
      console.log(delta)
      setComments((comments) =>
      comments.map((comment) =>{
        if (id === comment.id) {
          return { ...comment, score: comment.score + delta };
        }
        else if(Array.isArray(comment.replies)){
          const updatedReplies =  comment.replies.map((reply)=>{
                return (id === reply.id ? {...reply, score: reply.score + delta} : reply)
          })
          return {...comment, replies:updatedReplies}
        }
        return comment
      }
      
    )
  );
}

         function onVote(id, delta){
          console.log("onvote called with:", {id, delta})
          updateScore(id,delta)
         }
    return (
      <div className=" flex flex-col gap-[5px]">
        {comments.map((comment) => {
          return <CommentCard key={comment.id} isreply={false} score={comment.score} comment={comment} updateScore={updateScore} onVote={(delta) => onVote(comment.id,delta)}/>;
        })}

      </div>
    );
}