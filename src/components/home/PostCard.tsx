import { FC } from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { RxShare2 } from "react-icons/rx";
import { PostCardProps } from "@/types/post";

const PostCard: FC<PostCardProps> = ({
  username,
  userHandle,
  userImage,
  postImage,
  content,
  hashtags,
  commentsCount,
  retweetsCount,
  likesCount,
  sharesCount,
}) => {
  return (
    <Dialog>
      <DialogTrigger className="flex rounded-md border border-gray items-center p-4 py-6">
        <div className="text-left flex flex-col gap-6">
          <div className="flex">
            <Image
              src={userImage}
              alt="user image"
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <div className="flex flex-col">
              <h1 className="text-sm">{username}</h1>
              <p className="text-xs text-gray100">@{userHandle}</p>
            </div>
          </div>
          <div>
            <h1 className="text-sm text-left text-gray-100 px-3">
              {content}
              <br />
              <br />
              <p className="text-green300">{hashtags}</p>
            </h1>
          </div>
          <div className="mx-5">
            <Image
              src={postImage}
              alt="post image"
              width={318}
              height={120}
              className="w-full rounded-xl"
            />
          </div>
          <nav className="bg-gray-800 p-4 text-base flex">
            <ul className="flex space-x-4 justify-between">
              <li className="flex items-center text-gray100">
                <FaRegComment className="mr-1" />
                <span>{commentsCount}</span>
              </li>
              <li className="flex items-center text-gray100">
                <FaRetweet className="mr-1" />
                <span>{retweetsCount}</span>
              </li>
              <li className="flex items-center text-gray100">
                <FaRegHeart className="mr-1" />
                <span>{likesCount}</span>
              </li>
              <li className="flex items-center text-gray100">
                <RxShare2 className="mr-1" />
                <span>{sharesCount}</span>
              </li>
            </ul>
          </nav>
        </div>
      </DialogTrigger>
    </Dialog>
  );
};

export default PostCard;
