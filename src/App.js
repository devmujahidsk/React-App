import React from "react";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Registration from "./pages/registration/registration-form";
import NotFoundPage from "./pages/notfoundpage";
import './App.css';
import { useRoutes } from "hookrouter";

const routes = {
  '/': () => <Home />,
  '/about': () => <About />,
  '/contact': () => <Contact />,
  '/registration': () => <Registration />
}

export default function App() {
  const routeLink = useRoutes(routes);
  return (
    <div className="App">
      {routeLink || <NotFoundPage />}
    </div>  
  );
}
