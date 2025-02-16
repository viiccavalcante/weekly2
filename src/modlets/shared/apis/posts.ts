import { Post } from "../../../types/post";

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async(): Promise<Post[]> => {
  const response = await fetch(`${API_BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

export const fetchPost = async(id: number): Promise<Post> => {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return response.json();
};