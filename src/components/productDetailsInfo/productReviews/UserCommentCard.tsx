import { profile, user } from "@/assets";
import { useStarRating } from "@/hooks/useStarRating";
import { Comment } from "@/utils/dtos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CommentOptions from "./commentOptions/CommentOptions";

interface Props {
  data: Comment;
}

const UserCommentCard = ({ data }: Props) => {
  const { renderStars } = useStarRating();
  const t = useTranslations();
  return (
    <div className=" not-first:pt-4 not-first:mt-4 not-first:border-t border-color overflow-hidden">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden relative">
            <Image
              src={user}
              alt="profile"
              fill
              loading="lazy"
              className="object-cover"
              sizes="30px"
            />
          </div>
          <div>
            <h3 className="title-color">
              {data.user.name ? data.user.name : t("anonymous_user")}
            </h3>
            <div className="flex items-center gap-[2px] mt-1">
              {renderStars(5)}
            </div>
          </div>
        </div>
        <span className="desc-color text-sm">
          {new Date(data.createdAt).toLocaleDateString()}
        </span>
      </div>
      <div className="mt-4 flex items-start gap-4">
        <p className="desc-color text-sm grow">{data.text}</p>
        {data.isCommentOwner && <CommentOptions comment={data} />}
      </div>
    </div>
  );
};

export default UserCommentCard;
