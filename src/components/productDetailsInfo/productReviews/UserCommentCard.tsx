import { useStarRating } from "@/hooks/useStarRating";
import { UserCommentType } from "@/utils/dtos";
import Image from "next/image";

interface Props {
  data: UserCommentType;
}

const UserCommentCard = ({ data }: Props) => {
  const { renderStars } = useStarRating();
  return (
    <div className=" not-first:pt-4 not-first:mt-4 not-first:border-t border-color">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden relative">
            <Image
              src={data.image}
              alt="profile"
              fill
              loading="lazy"
              className="object-cover"
              sizes="50px"
            />
          </div>
          <div>
            <h3 className="title-color">{data.name}</h3>
            <div className="flex items-center gap-[2px] mt-1">
              {renderStars(data.rateValue)}
            </div>
          </div>
        </div>
        <span className="desc-color text-sm">{data.time}</span>
      </div>
      <p className="mt-4 desc-color text-sm line-clamp-2">{data.description}</p>
    </div>
  );
};

export default UserCommentCard;
