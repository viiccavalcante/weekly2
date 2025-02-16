import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../shared/apis/posts';
import { Link } from 'react-router-dom';
import { Loading } from '../../shared/components/Loading';
import { Post } from '../../../types/post';

export const PostsPage = () => {
  const { data: posts, error, isLoading } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <Loading />;
  if (error) return <div className="text-red-500">Error loading posts</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-center mb-6">Posts</h1>
      <ul className="space-y-4">
        {posts?.map((post) => (
          <li key={post.id} className="bg-white p-4 rounded-xl shadow-soft hover:shadow-strong transition-all">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body.substring(0, 100)}...</p>
            <Link to={`/post/${post.id}`} className="text-primary-500 font-medium hover:underline">
              See more
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
