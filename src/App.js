import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import StudyManagement from "./pages/StudyManagement";
import FrameComponent from "./pages/FrameComponent";
import Workspace from "./pages/Workspace";
import ControlPanelConfiguration from "./pages/ControlPanelConfiguration";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-2681590":
        title = "";
        metaDescription = "";
        break;
      case "/1920-workspace":
        title = "";
        metaDescription = "";
        break;
      case "/control-panel-configuration":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<StudyManagement />} />

      <Route path="/frame-2681590" element={<FrameComponent />} />

      <Route path="/1920-workspace" element={<Workspace />} />

      <Route
        path="/control-panel-configuration"
        element={<ControlPanelConfiguration />}
      />
    </Routes>
  );
}
export default App;
