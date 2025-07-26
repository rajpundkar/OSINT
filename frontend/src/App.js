import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrahmastraUniverse from "./components/BrahmastraUniverse";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = () => {
  return (
    <ErrorBoundary>
      <BrahmastraUniverse />
    </ErrorBoundary>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
