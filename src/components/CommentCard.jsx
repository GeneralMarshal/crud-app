

import Counter from "./Counter";
import CommentActions from "./CommentActions";
import CommentForm from "./CommentForm";
import { useState } from "react";






export default function CommentCard({ index, parentIndex, comment, isreply, score, updateComment, onVote, id, handleReply, replyText, setReplyText, updateReply, replyingTo, setReplyingto, setReplyUsername }){
    const [isCurrentUser, setIsCurrentUser] = useState(false)
    const [vote, setVote] = useState(null);

    function upvote(){
      console.log(isreply)
      
      if(isreply){
        console.log([parentIndex, index]);
        const updatedComment = comment;
        updatedComment.score = comment.score+1;
        updateComment(updatedComment, [parentIndex, index]);
      }else{
        const updatedComment = comment;
        updatedComment.score = comment.score+1;
        updateComment(updatedComment, [index]);
      }
      
    }

    function downvote(){
      if(isreply){
        const updatedComment = comment;
        updatedComment.score = comment.score-1;
        updateComment(updatedComment, [parentIndex, index]);
      }else{
        const updatedComment = comment;
        updatedComment.score = comment.score-1;
        updateComment(updatedComment, [index]);
      }
    }

    function handleReplyForReplies(replyIndex){
      console.log(comment);
      const replyusername = comment.replies[replyIndex].user.username;

      setReplyUsername(replyusername);
      console.log('hey');

      handleReply();
    }


    return (
      <article className="max-w-[800px] mt-[10px] ">
        <div className=" flex px-[12px] pt-[12px] pb-[0px] md:p-[20px] items-center border border-solid border-[#b6b3b3] w-full gap-[20px] rounded-[5px]">
          {/* counter for lager screens */}
          <div className="hidden md:flex ">
            <Counter
              score={comment.score}
              upvote={upvote}
              downvote={downvote}
              vote={vote}
              onVote={onVote}
            />
          </div>
          <div className="relative w-full">
            {/* user image details date of publication edit or reply button */}

            <div className="e flex items-center gap-[10px] pb-[5px]">
              <img
                src={comment.user.image.png}
                className=" w-[35px]"
                alt="user-image"
              />
              <p className=" text-md font-semibold"> {comment.user.username}</p>
              <p className=" text-md text-[gray]">{comment.createdAt}</p>
            </div>

            {/* the reply is for comments that isn't mine */}
            <CommentActions isCurrentUser={isCurrentUser} replyingTo={replyingTo} handleReply={handleReply}/>
           
            <div>
              <p className="text-md text-[gray] leading-5">
                {/* Impressive! Though it seems the drag feature could be improved.
              But overall it looks incredible. You've nailed the design and the
              responsiveness at various breakpoints works really well. */}
                {isreply ? (
                  <span className=" font-bold text-[#6060bf]">
                    @{comment.replyingTo}
                  </span>
                ) : (
                  ""
                )}{" "}
                {comment.content}
              </p>
            </div>

            <div className=" flex md:hidden">
              <Counter
                isHorizontal={true}
                score={score}
                vote={vote}
                onVote={onVote}
                upvote={upvote}
                downvote={downvote}
              />
            </div>
          </div>
        </div>

        <div className=" mt-[20px] flex flex-col gap-[5px] ml-[100px]">
          {
            (replyingTo === (parentIndex ? parentIndex : index)) && !isreply ? 
            <CommentForm replyText={replyText} setReplyText={setReplyText} updateReply={updateReply}/> : "" 
          }

          {
            Array.isArray(comment.replies) &&
              comment.replies.length > 0 &&
              comment.replies.map((reply, replyIndex) => {
                return (
                  <CommentCard
                    key={reply.id}
                    isreply={true}
                    comment={reply}
                    id={reply.id}
                    replyText={replyText} 
                    setReplyText={setReplyText} 
                    updateReply={updateReply} 
                    replyingTo={replyingTo} 
                    setReplyingto={setReplyingto}
                    setReplyUsername={setReplyUsername}
                    handleReply={()=>{ handleReplyForReplies(replyIndex); }}
                    index={replyIndex}
                    parentIndex={index}
                    updateComment={updateComment}
                  />
                );
              })
          }
        </div>
      </article>
    );
}