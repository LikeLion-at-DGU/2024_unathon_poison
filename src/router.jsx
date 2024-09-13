import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About/index";
import Home from "./pages/Home/index";
import First from "./pages/First/index";
import NotFound from "./pages/notFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // 홈 페이지
      { path: "/", element: <Home /> },

      //첫페이지
      { path: "/first", element: <First /> },

      // 어바웃 페이지
      { path: "/about", element: <About /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
