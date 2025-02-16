import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './modlets/home/components/HomePage';
import { PostsPage } from './modlets/posts/components/PostsPage';
import { PostPage } from './modlets/post/components/PostPage';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </Router>
  );
};
