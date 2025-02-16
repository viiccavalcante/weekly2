import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "../../shared/apis/posts";
import { Loading } from "../../shared/components/Loading";
import { Link } from 'react-router-dom';
import { Post } from "../../../types/post";

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);

  const { data: post, error, isLoading } = useQuery<Post>({
    queryKey: ["post", postId],
    queryFn: () => fetchPost(postId),
  });

  if (isLoading) return <Loading />;
  if (error) return <div className="text-red-500">Error loading posts</div>;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
        <h1 className="text-4xl font-extrabold text-primary-500 mb-4">{post?.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{post?.body}</p>
        <Link to={`/posts`} className="text-primary-500 font-medium hover:underline">
          Back
        </Link>
      </div>
      
    </div>
  );
};
