import CommentForm from "./CommentForm"
import CommentCard from "./CommentCard";
import Counter from "./Counter";
import data from "../data/data.json"
import { useState, useEffect  } from "react";

import { v4 as uuidv4 } from "uuid";

export default function KarmaCounter(){
  const [comments, setComments] = useState(
    [...data.comments].map((comment) => ({
      ...comment,
      replies: [...comment.replies].sort((a, b) => b.score - a.score),
    })).sort((a, b) => b.score - a.score)
  );
 
  const [replyText, setReplyText] = useState();
  const [replyingTo, setReplyingto] = useState()
  

  function updateReply(){
    setComments((comments) => {
      const newReply = comments.map((comment)=>{
        if (replyingTo === comment.id){
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: uuidv4(),
                content: replyText,
                createdAt: new Date().toISOString(),
                score: 5,
                replyingTo: comment.user.username,
                user: data.currentUser,
              },
            ],
          };
        } else {return comment}
      })
      return newReply
    })
    setReplyText("")
    setReplyingto(null)
  }

    
  
  // useEffect(()=>{
  //   setComments(
  //     (prevComments) => [...prevComments].slice().sort( (a, b) => b.score - a.score) 
      
  //   )
  // }, [comments])


//     function updateScore(id, delta) {
//       setComments((comments) =>{
//              const updatedComments = comments.map((comment) => {
//                 if (id === comment.id) {
//                   return { ...comment, score: comment.score + delta };
//                 } else if (Array.isArray(comment.replies)) {
//                   const updatedReplies = comment.replies.map((reply) => {
//                     return id === reply.id
//                       ? { ...reply, score: reply.score + delta }
//                       : reply;
//                   }).sort((a,b) => b.score - a.score);
//                   return { ...comment, replies: updatedReplies };
//                 }
//                 return comment;
//               });
//               return([...updatedComments].sort((a,b) => b.score - a.score))
//       }

//   );
// }
    function updateScore(id, delta){
      setComments((comments) =>{
        const updatedComments = comments.map((comment) =>{
          if (id === comment.id){
            return {...comment, score: comment.score + delta}
          }
          else if (Array.isArray(comment.replies)){
            const updatedReplies = comment.replies.map((reply)=>{
             return reply.id === id ? { ...reply, score:reply.score + delta} : reply
          }).sort((a,b) => b.score - a.score)
          return { ...comment, replies: updatedReplies };
          }
        })
        return [...updatedComments].sort((a,b) => b.score - a.score)
      }
      )
    }

    function onVote(id, delta){
      console.log("onvote called with:", {id, delta})
      updateScore(id,delta)
    }
    return (
      <div className=" flex flex-col gap-[5px]">
        {comments.map((comment) => {
          return <CommentCard key={comment.id} isreply={false} score={comment.score} comment={comment} updateScore={updateScore} onVote={onVote} id={comment.id} replyText={replyText} setReplyText={setReplyText} updateReply={updateReply} replyingTo={replyingTo} setReplyingto={setReplyingto}/>;
        })}

      </div>
    );
}