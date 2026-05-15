import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import DevTools from "./components/DevTools";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <DevTools />
    </div>
  );
}

export default App;