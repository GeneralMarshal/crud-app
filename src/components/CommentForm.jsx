  import { useState } from "react";
export default function CommentForm(){
    const [isReply,, setIsReply] = useState(true)
    return (
      <form
        className=" relative flex flex-wrap md:justify-between p-[20px] gap-[10px] w-auto max-w-[800px] border-1 border-solid border-[#b6b3b3] rounded-[6px] "
        action=""
      > 

        {/* image for larger screens */}
        <img
          src="avatars/image-ramsesmiron.png"
          className=" hidden md:flex w-[35px] h-[35px]"
          alt="user-avatar"
        />
        <textarea
          placeholder="Add a comment..."
          className=" border-solid border-1 flex-1 border-[#b6b3b3] rounded-[6px] w-full h-[100px] px-[15px] py-[10px] text-sm "
        ></textarea>
        <div className="flex justify-between w-[100%] md:w-auto">

        {/* image for smaller screens */}
          <img
            src="avatars/image-ramsesmiron.png"
            className=" flex md:hidden w-[35px] h-[35px]"
            alt="user-avatar"
          />
          <button className=" h-[40px] w-[70px] bg-[#6060bf] text-white rounded-[5px]">
            Send
          </button>
        </div>
      </form>
    );
}