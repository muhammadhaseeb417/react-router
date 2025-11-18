import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router'
import NotFoundPage from './components/not-found-page.jsx';
import Post from './components/post.jsx';
import PostIds from './components/post-ids.jsx';

function HomeButtonPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello from router</h1>
      <button onClick={() => navigate('/home')}>Go to Home Page</button>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeButtonPage />
  },
  {
    path: "/home",
    element: <App />
  },
  {
    path: "*",
    element: <NotFoundPage />
  },
  {
    path: "/post",
    element: <Post />
  },
  {
    path: "/post/:id",
    element: <PostIds />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
