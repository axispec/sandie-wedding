import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import IndividualTimeline from "../components/IndividualTimeline";

const entries = [
  {
    time: "1:45pm",
    items: ["2 buses arrive at the venue, cul-de-sac at the end of Cabbage Gum Road, Cudgera Creek 2484"],
  },
  {
    time: "2:00pm",
    items: [
      "Start ferrying guests up the driveway to the property.",
      "Don't start ferrying before this time but you can get the buses loaded up with people",
    ],
  },
  {
    time: "~2:35pm\n~2:40pm",
    items: [
      "Start final bus trip up the hill. Buses can depart the venue after this trip.",
      "Note: Ceremony will be starting very soon, to avoid disruptions, if there are any guests waiting when you come back down to leave, they have missed the window and should not be brought up the hill.",
    ],
    bold: [true, false],
  },
  { time: "9:45pm", items: ["One bus returns to the venue"] },
  { time: "10:00pm", items: ["Start ferrying guests from the property carpark back down to the original pick up spot"] },
  { time: "11:45pm", items: ["Last shuttle bus to transport guests down the hill"] },
  {
    time: "12:00am",
    items: ["After all guests have departed, bus should do one more trip to transport bridal party back to their accommodations"],
  },
];

export default function GoselsBusService() {
  return (
    <div className="relative size-full bg-white overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-[120px]">
          <div className="flex flex-col items-center w-full">

            {/* Header */}
            <div className="w-full flex justify-center pt-[60px] pb-[16px] px-[16px]">
              <div className="flex flex-col items-center gap-[4px] max-w-[360px] w-full">
                <p className="text-[24px] font-medium text-center">Shuttle buses</p>
                <p className="text-[14px] text-[#666] text-center">Gosels Bus Service</p>
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
                {/* Date row */}
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
