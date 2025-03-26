import { useState } from "react";

export default function Counter( {isHorizontal, score, handleVote, vote, id}){
    const [isUserComment, setIsUserComment] = useState(true)
    




    return (
      <div
        className={`  flex flex-shrink-0 flex-col items-center justify-around rounded-[5px] h-[70px] w-[30px]   bg-[#dddfff] ${
          isHorizontal ? "rotate-270 translate-x-[70%] " : ""
        }`}
      >
        <span
          className={` flex w-full justify-center text-[#393c8b] text-md ${
            vote === "upvote" ? "bg-[green]" : ""
          }`}
          onClick={() => handleVote(id, "upvote")}
        >
          +
        </span>

        <span className={`flex w-full justify-center text-[#393c8b] text-md ${isHorizontal ? "rotate-90" : ""}`}>
          {score}
        </span>

        <span
          className={` flex w-full justify-center text-[#393c8b] text-md ${
            (vote === "downvote" ? "bg-[red]" : "") + (isHorizontal ? "rotate-90" : "")
          }`}
          onClick={() => handleVote(id, "downvote")}
        >
          -
        </span>
      </div>
    );
}