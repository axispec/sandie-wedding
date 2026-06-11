import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import IndividualTimeline from "../components/IndividualTimeline";

const entries = [
  { time: "11:00am", items: ["Arrives at the venue"] },
  { time: "11:15am", items: ["Coverage begins", "Photos of the groom and grooms party getting ready"] },
  { time: "12:15pm", items: ["Photos of the bride and bridesmaids getting ready"] },
  { time: "1:40pm", items: ["First look with bridesmaids and the bride"] },
  { time: "1:50pm", items: ["First look with the father-of-the-bride and the bride"] },
  { time: "1:55pm", items: ["First look with the groom and the bride"] },
  { time: "2:00pm", items: ["Private vows"] },
  { time: "2:15pm", items: ["Bridal party photos"] },
  { time: "2:45pm", items: ["Prep for the ceremony"] },
  { time: "3:00pm", items: ["Ceremony starts"] },
  { time: "3:30pm", items: ["Ceremony ends"] },
  { time: "3:40pm", items: ["Congratulation shots - hugs and high-fives"] },
  { time: "3:50pm", items: ["Portraits - wedding couple and with bridal party"] },
  { time: "4:50pm", items: ["Family and friends photos"], button: "View photography schedule" },
  { time: "5:08pm", items: ["Wedding couple sunset portraits"] },
  { time: "9:30pm", items: ["Coverage concludes"] },
];

export default function SamWyperPhotography() {
  return (
    <div className="relative size-full bg-white overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-[120px]">
          <div className="flex flex-col items-center w-full">

            {/* Header */}
            <div className="w-full flex justify-center pt-[60px] pb-[16px] px-[16px]">
              <div className="flex flex-col gap-[8px] max-w-[360px] w-full">
                <p className="text-[13px] font-normal text-[#999] uppercase tracking-wide">Photographer</p>
                <p className="text-[24px] font-medium">Sam Wyper Photography</p>
                <p className="text-[14px] font-normal text-[#666]">Saturday, 18 July 2026</p>
                <p className="text-[13px] font-normal text-[#666]">This run sheet is only for the day of the wedding.</p>
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

            {/* Timeline */}
            <div className="w-full flex justify-center px-[16px] pb-[16px]">
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
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
