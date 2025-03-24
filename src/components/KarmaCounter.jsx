import CommentForm from "./CommentForm"
import CommentCard from "./CommentCard";
import Counter from "./Counter";
import data from "../data/data.json"
export default function KarmaCounter(){
    return (
      <div className=" flex flex-col gap-[5px]">
        {data.comments.map((comment) => {
          return <CommentCard key={comment.id} comment={comment} isreply={false} />;
        })}

      </div>
    );
}