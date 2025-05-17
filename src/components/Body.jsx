import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieTrailer from "./MovieTrailer";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movie/:movieId",
      element: <MovieTrailer />
    }
  ]);

  return (
    <div className="w-full h-full">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
