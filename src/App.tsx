import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";  
import router from "./routes/Router";

const useGoogleFonts = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);
};

function App() {
  useGoogleFonts();
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
