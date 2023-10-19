import React from "react";
import { useMutation, useQuery } from "react-query";
import { User } from "../../api/fb.user";
import { BlogsCtrl } from "../../api/fb.blogs";
import { Heart, MessagesSquare, User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useAuth } from "../../hooks/useAuth";

const UserCtrl = new User();
const BlogCtrl = new BlogsCtrl();
export const BlogAutor = ({ id, blog }) => {
  const { User } = useAuth();
  const { data: Autor } = useQuery(`Autor ${id}`, () => UserCtrl.getMe(id));
  const mutation = useMutation(BlogCtrl.darLikeBlogs);

  const handleLike = () => {
    const blogId = blog?.id;
    const UserId = User?.uid;
    mutation.mutate({blogId,UserId})
  };


  return (
    <div className="w-full mt-2 flex">
      <div className="w-1/2 flex items-center gap-x-3">
        {/* AVATAR */}
        <Avatar>
          <Avatar>
            <AvatarImage src={Autor?.Img_url} alt="Autor Foto" />
            <AvatarFallback className="w-10 h-10 flex justify-center items-center bg-gray-600 rounded-full">
              <User2 className="text-white" />
            </AvatarFallback>
          </Avatar>
        </Avatar>
        <p className="text-gray-500 font-semibold">{Autor?.Username}</p>
      </div>
      <div className="w-1/2 flex items-center justify-end">
        <div className="w-1/2 flex justify-end">
          <Heart onClick={handleLike} className="w-5 mr-2 text-gray-600" />
          <span className="text-gray-600">{blog?.likes?.length}</span>
        </div>
        <div className="w-1/2 flex justify-end">
          <MessagesSquare className="w-5 mr-2 text-gray-600" />
          <span className="text-gray-600">7</span>
        </div>
      </div>
    </div>
  );
};
