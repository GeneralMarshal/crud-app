import reply from "../assets/icons/icon-reply.svg"
import edit from "../assets/icons/icon-edit.svg";
import iconDelete from "../assets/icons/icon-delete.svg";

import Counter from "./Counter";
import { useState } from "react";






export default function CommentCard(){

  const [isUserComment, setIsUserComment] = useState(false)
    return (
      <article className=" flex px-[12px] pt-[12px] pb-[0px] md:p-[20px] items-center border border-solid border-[#b6b3b3] max-w-[800px] gap-[10px] rounded-[5px]">
        {/* counter for lager screens */}
        <div className="hidden md:flex">
          <Counter />
        </div>
        <div className="relative ">
          {/* user image details date of publication edit or reply button */}

          <div className="e flex items-center gap-[10px] pb-[5px]">
            <img
              src="avatars/image-amyrobson.png"
              className=" w-[35px]"
              alt=""
            />
            <p className=" text-md font-semibold"> amyrobson</p>
            <p className=" text-md text-[gray]">1 month ago</p>
          </div>

          {/* the reply is for comments that isn't mine */}
          <div className=" flex gap-[10px] absolute right-[0px] bottom-[23px] md:bottom-0 md:top-[-40px]">
            {isUserComment ? (
              <>
                <span className=" flex items-center gap-[5px] font-semibold text-md text-[red]">
                  <img src={iconDelete} alt="" />
                  Delete
                </span>
                <span className=" flex items-center gap-[5px] font-semibold text-md text-[#6060bf]">
                  <img src={edit} alt="" />
                  Edit
                </span>
                
              </>
            ) : (
              <span className=" flex items-center gap-[5px] font-semibold text-md text-[#6060bf]">
                <img src={reply} alt="" />
                Reply
              </span>
            )}
          </div>

          <div>
            <p className="text-md text-[gray] leading-5">
              Impressive! Though it seems the drag feature could be improved.
              But overall it looks incredible. You've nailed the design and the
              responsiveness at various breakpoints works really well.
            </p>
          </div>
          <div className=" flex md:hidden">
            <Counter isHorizontal={true} />
          </div>
        </div>
      </article>
    );
}