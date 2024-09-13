import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About/index";
import Home from "./pages/Home/index";
import NotFound from "./pages/notFound";
import Splash from "./pages/Splash/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // 홈 페이지
      { path: "/", element: <Home /> },
      //스플래시 페이쥐
      { path: "/splash", element: <Splash /> },

      // 어바웃 페이지
      { path: "/about", element: <About /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
