import reply from "../assets/icons/icon-reply.svg";
import edit from "../assets/icons/icon-edit.svg";
import iconDelete from "../assets/icons/icon-delete.svg";

export default function CommentActions({ isCurrentUser,  handleReply }) {
  return (
    <div className=" flex gap-[10px] absolute right-[0px] bottom-[23px] md:bottom-0 md:top-[-40px]">
      {isCurrentUser ? (
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
        <span className=" flex items-center gap-[5px] font-semibold text-md text-[#6060bf] cursor-pointer" onClick={()=> handleReply()}>
          <img src={reply} alt="" />
          Reply
        </span>
      )}
    </div>
  );
}
