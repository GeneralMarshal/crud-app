import data from  "../data/data.json"

export default function CommentForm( {setReplyText, updateReply}){
    const currentUser = data.currentUser
    return (
      <form
        className={currentUser.image.png}
        action=""
        onSubmit={(e)=> e.preventDefault()}
      >
        {/* image for larger screens */}
        <img
          src="images/avatars/image-juliusomo.png"
          className=" hidden md:flex w-[35px] h-[35px]"
          alt="user-avatar"
        />
        
        <textarea
          placeholder="Add a comment..."
          className=" border-solid border-1 flex-1 border-[#b6b3b3] rounded-[6px] w-full h-[100px] px-[15px] py-[10px] text-sm "
          onChange={(e)=>{setReplyText(e.target.value)}}
        ></textarea>

        <div className="flex justify-between w-[100%] md:w-auto">
          {/* image for smaller screens */}
          <img
            src={currentUser.image.png}
            className=" flex md:hidden w-[35px] h-[35px]"
            alt="user-avatar"
          />
          <button className=" h-[40px] w-[70px] bg-[#6060bf] text-white rounded-[5px]" onClick={updateReply}>
            Send
          </button>
        </div>
      </form>
    );
}