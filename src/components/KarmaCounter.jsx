import CommentForm from "./CommentForm"
import CommentCard from "./CommentCard";
import Counter from "./Counter";
import data from "../data/data.json"
import { useState, useEffect  } from "react";

import { v4 as uuidv4 } from "uuid";

export default function KarmaCounter(){
  const USER = {
    image: { png: '/images/avatars/image-juliusomo.png', webp: '/images/avatars/image-juliusomo.png' },
    username: 'juliusomo'
  }

  const [comments, setComments] = useState([]);
 
  const [replyText, setReplyText] = useState('');
  const [replyingTo, setReplyingto] = useState(null);
  const [replyusername, setReplyUsername] = useState(null);
  
  useEffect(()=>{
    getComments()
  }, []);

  async function getComments(){
    console.log(data.comments);
    setComments(data.comments);
  }

  function handleReply(index){
    console.log(index);
    setReplyingto(index);
  }

  function updateReply(){
    const currentComments = [...comments];
    
    currentComments[replyingTo].replies.push({
      id: uuidv4(),
      content: replyText,
      createdAt: new Date().toISOString(),
      score: 0,
      replyingTo: replyusername ? replyusername : comments[replyingTo].user.username,
      user: USER,
    });

    setReplyText("")
    setReplyingto(null);
    setReplyUsername(null);
  }

  //[1, 4]
  function updateComment(newComment, indexArr){
    if(indexArr.length===1){
      const currentComments = [...comments]; 
      currentComments[indexArr[0]] = newComment;
      setComments(currentComments);
    }else{ //Else it is 2
      const currentComments = [...comments]; 
      currentComments[indexArr[0]].replies[indexArr[1]] = newComment;
      setComments(currentComments);
    }
    
  }
  
  return (
    <div className=" flex flex-col gap-[5px]">
      {
        comments.map((comment, index) => {
          return  <CommentCard 
                    key={comment.id} index={index} isreply={false} updateComment={updateComment}
                    comment={comment} id={comment.id} replyText={replyText} handleReply={()=>{ handleReply(index); }}
                    setReplyText={setReplyText} updateReply={updateReply} replyingTo={replyingTo} setReplyingto={setReplyingto}
                    setReplyUsername={setReplyUsername}
                  />;
        })
      }    
      </div>
  );
}