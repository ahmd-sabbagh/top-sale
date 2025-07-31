import { profile } from "@/assets";
import { useStarRating } from "@/hooks/useStarRating";
import { Comment } from "@/utils/dtos";
import Image from "next/image";

interface Props {
  data: Comment;
}

const UserCommentCard = ({ data }: Props) => {
  const { renderStars } = useStarRating();
  return (
    <div className=" not-first:pt-4 not-first:mt-4 not-first:border-t border-color">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden relative">
            <Image
              src={profile}
              alt="profile"
              fill
              loading="lazy"
              className="object-cover"
              sizes="50px"
            />
          </div>
          <div>
            <h3 className="title-color">{data.user.name}</h3>
            <div className="flex items-center gap-[2px] mt-1">
              {renderStars(5)}
            </div>
          </div>
        </div>
        <span className="desc-color text-sm">{new Date(data.createdAt).toLocaleDateString()}</span>
      </div>
      <p className="mt-4 desc-color text-sm line-clamp-2">{data.text}</p>
    </div>
  );
};

export default UserCommentCard;
