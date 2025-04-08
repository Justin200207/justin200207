import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router"


export default function App() {
  return (
    <BrowserRouter basename="/justin200207">
      <Router />
    </BrowserRouter>
  );
}
