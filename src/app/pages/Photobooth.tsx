import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import IndividualTimeline from "../components/IndividualTimeline";

const entries = [
  { time: "2:00pm", items: ["Arrive and set up in the art room"] },
  { time: "4:00pm", items: ["Photobooth opens"] },
  { time: "6:00pm", items: ["Photobooth closed so Eddie can have a dinner break"] },
  { time: "9:00pm", items: ["Photobooth closes and packs up"] },
];

export default function Photobooth() {
  return (
    <div className="relative size-full bg-white overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-[120px]">
          <div className="flex flex-col items-center w-full">

            {/* Header */}
            <div className="w-full flex justify-center pt-[60px] pb-[16px] px-[16px]">
              <div className="flex flex-col items-center gap-[4px] max-w-[360px] w-full">
                <p className="text-[24px] font-medium text-center">Photobooth</p>
                <p className="text-[14px] text-[#666] text-center">A+J Photobooth</p>
              </div>
            </div>

            {/* Nav buttons */}
            <div className="w-full flex justify-center pb-[16px] px-[16px]">
              <div className="flex gap-[8px] max-w-[360px] w-full">
                <Link to="/run-sheets" className="flex-1 h-[40px] rounded-[12px] border border-black flex items-center justify-center hover:bg-[#eee] transition-colors">
                  <span className="text-[14px] font-semibold">All run sheets</span>
                </Link>
                <button className="flex-1 h-[40px] rounded-[12px] border border-black flex items-center justify-center hover:bg-[#eee] transition-colors">
                  <span className="text-[14px] font-semibold">Vendor details</span>
                </button>
              </div>
            </div>

            {/* Timeline card */}
            <div className="w-full flex justify-center px-[16px] pb-[16px]">
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="bg-[#f5f5f5] px-[16px] py-[14px] flex items-center gap-[12px] border-b border-[#d4d4d4]">
                  <span className="text-[18px]">📅</span>
                  <p className="text-[15px]">Saturday, 18 July 2026</p>
                </div>
                <IndividualTimeline entries={entries} />
              </div>
            </div>

          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
}
