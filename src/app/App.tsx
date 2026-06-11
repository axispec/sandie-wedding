import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeWrapper from "./components/HomeWrapper";
import Catering from "./pages/Catering";
import MasterRunSheet from "./pages/MasterRunSheet";
import RunSheets from "./pages/RunSheets";
import EventTimeline from "./pages/EventTimeline";
import Vendors from "./pages/Vendors";
import WeddingMenu from "./pages/WeddingMenu";
import WeddingDrinks from "./pages/WeddingDrinks";
import SamWyperPhotography from "./pages/SamWyperPhotography";

export default function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <div className="min-h-screen w-full flex items-center justify-center bg-[#f5f5f5]">
        <div className="w-full max-w-[600px] h-screen">
          <Routes>
            <Route path="/" element={<HomeWrapper />} />
            <Route path="/timeline" element={<EventTimeline />} />
            <Route path="/timeline/catering/:tab?" element={<Catering />} />
            <Route path="/master-run-sheet" element={<MasterRunSheet />} />
            <Route path="/run-sheets" element={<RunSheets />} />
            <Route path="/run-sheets/sam-wyper-photography" element={<SamWyperPhotography />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/wedding-menu" element={<WeddingMenu />} />
            <Route path="/wedding-drinks" element={<WeddingDrinks />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}