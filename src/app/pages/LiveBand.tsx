import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import IndividualTimeline from "../components/IndividualTimeline";

const entries = [
  { time: "1:15pm", items: ["Arrive and set up"] },
  { time: "2:05pm", items: ["Guest arrival (atmospheric fantasy/folk background music)"] },
  { time: "2:45pm", items: ["Ceremony commences - processional song"] },
  { time: "3:30pm", items: ["Ceremony concludes - recessional song"] },
  { time: "3:45pm", items: ["Reception (upbeat folky fantasy and pop covers)"] },
  { time: "5:00pm", items: ["30-minute break for the band"] },
  { time: "5:30pm", items: ["Final set"] },
  { time: "6:00pm", items: ["Performance finished"] },
];

export default function LiveBand() {
  return (
    <div className="relative size-full bg-white overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-[120px]">
          <div className="flex flex-col items-center w-full">

            {/* Header */}
            <div className="w-full flex justify-center pt-[60px] pb-[16px] px-[16px]">
              <div className="flex flex-col items-center gap-[4px] max-w-[360px] w-full">
                <p className="text-[24px] font-medium text-center">Live band</p>
                <p className="text-[14px] text-[#666] text-center">Gareth</p>
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
                {/* Date + note rows */}
                <div className="bg-[#f5f5f5] border-b border-[#d4d4d4]">
                  <div className="px-[16px] py-[12px] flex items-center gap-[12px]">
                    <span className="text-[18px]">📅</span>
                    <p className="text-[15px]">Saturday, 18 July 2026</p>
                  </div>
                  <div className="px-[16px] py-[12px] flex items-start gap-[12px] border-t border-[#e0e0e0]">
                    <span className="text-[18px] mt-[1px]">⚠️</span>
                    <p className="text-[14px] text-[#444] leading-[1.4]">This run sheet is only for the day of the wedding.</p>
                  </div>
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
