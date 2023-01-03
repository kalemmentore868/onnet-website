import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoutesList from "./components/RoutesList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesList />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
