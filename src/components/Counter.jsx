import { useState } from "react";

export default function Counter( {isHorizontal}){
    const [count, setCount] = useState(7);
    const[vote, setVote] = useState(null)
    const [isUserComment, setIsUserComment] = useState(true)
    


    function handleVote(type){
       if ( vote === null){
            setCount((prev) => ( type === "upvote" ? prev + 1 : prev - 1))
            setVote(type)
        }
        else if(vote === type){
            setCount((prev) => ( vote === "upvote" ? prev - 1 : prev + 1))
            setVote(null)
        }
        
        else {setCount((prev) => (vote === "upvote" ? prev - 2 : prev + 2));
            setVote(type)}

    }

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
          onClick={() => handleVote("upvote")}
        >
          +
        </span>

        <span className={`flex w-full justify-center text-[#393c8b] text-md ${isHorizontal ? "rotate-90" : ""}`}>
          {count}
        </span>

        <span
          className={` flex w-full justify-center text-[#393c8b] text-md ${
            vote === "downvote" ? "bg-[red]" : ""
          }`}
          onClick={() => handleVote("downvote")}
        >
          -
        </span>
      </div>
    );
}