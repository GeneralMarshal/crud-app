

import Counter from "./Counter";
import CommentActions from "./CommentActions";
import { useState } from "react";






export default function CommentCard({ comment, isreply }){
    const[isCurrentUser, setIsCurrentUser] = useState(false)
  
    return (
      <article className="max-w-[800px] mt-[10px] ">
        <div className=" flex px-[12px] pt-[12px] pb-[0px] md:p-[20px] items-center border border-solid border-[#b6b3b3] w-full gap-[20px] rounded-[5px]">
          {/* counter for lager screens */}
          <div className="hidden md:flex">
            <Counter score={comment.score} />
          </div>
          <div className="relative ">
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
            <CommentActions isCurrentUser={isCurrentUser} />
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
              <Counter isHorizontal={true} score={comment.score} />
            </div>
          </div>
        </div>
        <div className=" mt-[20px] flex flex-col gap-[5px] ml-[100px]">
          {comment.replies &&
            comment.replies.length > 0 &&
            comment.replies.map((comment) => {
              return (
                <CommentCard
                  key={comment.id}
                  comment={comment}
                  isreply={true}
                />
              );
            })}
        </div>
      </article>
    );
}