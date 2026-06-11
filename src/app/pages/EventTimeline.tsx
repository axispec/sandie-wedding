import svgPaths from "../../imports/Home-2/svg-v62trlssuc";
import BottomNav from "../components/BottomNav";
import svgPathsTimeline from "../../imports/EventTimeline-2/svg-3zwgxdetpv";

// Icon Components
function SendHorFill({ className }: { className?: string }) {
  return (
    <div className={`${className || "relative size-[24px]"} flex items-center justify-center`}>
      <span className="text-[16px] leading-none">&#x25BA;</span>
    </div>
  );
}

function DateRange({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"}>
      <div className="absolute bottom-[12.5%] left-[12.5%] right-[12.5%] rounded-[2px] top-1/4">
        <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
      </div>
      <div className="absolute bg-[#33363f] bottom-[58.33%] left-[12.5%] right-[12.5%] rounded-tl-[2px] rounded-tr-[2px] top-1/4" />
      <div className="absolute bg-[#33363f] bottom-[41.67%] left-[29.17%] right-[54.17%] rounded-[0.5px] top-1/2" />
      <div className="absolute bg-[#33363f] bottom-1/4 left-[29.17%] right-[54.17%] rounded-[0.5px] top-[66.67%]" />
      <div className="absolute bg-[#33363f] bottom-[41.67%] left-[54.17%] right-[29.17%] rounded-[0.5px] top-1/2" />
      <div className="absolute bg-[#33363f] bottom-1/4 left-[54.17%] right-[29.17%] rounded-[0.5px] top-[66.67%]" />
    </div>
  );
}

function CancelFill({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"}>
      <div className="absolute inset-[12.5%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPathsTimeline.p37b4100} fill="#222222" />
        </svg>
      </div>
    </div>
  );
}

function IceCream({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"}>
      <div className="-translate-x-1/2 absolute h-[9px] left-1/2 top-[12px] w-[10px]">
        <div className="absolute inset-[-11.11%_-10%_-9.35%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0004 10.8413">
            <path d={svgPathsTimeline.p2921060} stroke="#33363F" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[9px] left-[5px] top-[3px] w-[14px]">
        <div className="absolute inset-[-11.11%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
            <path d={svgPathsTimeline.p2e75b500} fill="#33363F" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[0.655px] left-[14px] top-[7.84px] w-[3.732px]">
        <div className="absolute inset-[-152.67%_-26.8%_-152.64%_-26.79%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.73232 2.6554">
            <path d={svgPathsTimeline.p3673f800} stroke="#33363F" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Burger({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+2px)] size-[12px] top-1/2">
        <div className="absolute inset-[-8.33%_-8.33%_-8.33%_16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0002 14">
            <path d={svgPathsTimeline.p2a29ee80} stroke="#33363F" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[14px] left-[4px] top-[5px] w-[6px]">
        <div className="absolute inset-[0_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <g>
              <path d="M4 14V0" stroke="#33363F" strokeWidth="2" />
              <path d={svgPathsTimeline.p21287910} stroke="#33363F" strokeWidth="2" />
              <path d={svgPathsTimeline.p174d5b00} stroke="#33363F" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Drink({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"}>
      <div className="absolute inset-[87.5%_37.5%_12.5%_37.5%]">
        <div className="absolute inset-[-1px_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
            <path d="M1 1H7" stroke="#33363F" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-1/2 right-1/2 top-[66.67%]">
        <div className="absolute inset-[-20%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7">
            <path d="M1 6V1" stroke="#33363F" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute border-2 border-[#33363f] border-solid inset-[33.33%_20.83%_29.17%_20.83%] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[1px] rounded-tr-[1px]" />
      <div className="absolute bottom-1/2 left-1/2 right-[20.83%] top-[12.5%]">
        <div className="absolute inset-[-10.32%_-5.31%_-11.11%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.37165 10.9287">
            <path d={svgPathsTimeline.p2d227210} fill="#33363F" />
          </svg>
        </div>
      </div>
    </div>
  );
}

type BadgeProps = {
  className?: string;
  property1?: "drinks-available" | "food-available" | "no-food-drinks" | "no-phones" | "Variant5";
};

function Badge({ className, property1 = "drinks-available" }: BadgeProps) {
  const isDrinksAvailable = property1 === "drinks-available";
  const isFoodAvailable = property1 === "food-available";
  const isNoFoodDrinksOrNoPhones = ["no-food-drinks", "no-phones"].includes(property1);
  const isVariant5 = property1 === "Variant5";

  return (
    <div className={className || "bg-white flex gap-[4px] items-center px-[8px] py-[4px] rounded-[100px]"}>
      {isNoFoodDrinksOrNoPhones && (
        <>
          <CancelFill className="relative shrink-0 size-[24px]" />
          <p className="text-[14px] font-medium leading-[1.4] whitespace-nowrap">
            {property1 === "no-phones" ? "No phones" : "No drinks or food served"}
          </p>
        </>
      )}
      {isDrinksAvailable && (
        <>
          <Drink className="relative shrink-0 size-[24px]" />
          <p className="text-[14px] font-medium leading-[1.4] whitespace-nowrap">Drinks available</p>
        </>
      )}
      {isFoodAvailable && (
        <>
          <Burger className="relative shrink-0 size-[24px]" />
          <p className="text-[14px] font-medium leading-[1.4] whitespace-nowrap">Food available</p>
        </>
      )}
      {isVariant5 && (
        <>
          <IceCream className="relative shrink-0 size-[24px]" />
          <p className="text-[14px] font-medium leading-[1.4] whitespace-nowrap">Desserts available</p>
        </>
      )}
    </div>
  );
}

export default function EventTimeline() {
  return (
    <div className="relative size-full bg-white overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="absolute inset-0 flex flex-col">
        {/* Main content - scrollable */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-[120px]">
          <div className="flex flex-col items-center w-full">

            {/* Header */}
            <div className="bg-white w-full flex justify-center pt-[80px] pb-[24px] px-[16px]">
              <div className="flex flex-col gap-[8px] items-start text-center max-w-[360px] w-full">
                <p className="text-[24px] font-medium w-full">Wedding event timeline</p>
                <p className="text-[16px] font-normal w-full">The important activities across 4 days.</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="bg-white w-full flex justify-center py-[8px] px-[16px]">
              <div className="flex gap-[8px] max-w-[360px] w-full">
                <div className="flex-1 bg-white border border-black rounded-[12px] h-[40px] flex items-center justify-center">
                  <p className="text-[14px] font-semibold">Master run sheet</p>
                </div>
                <div className="flex-1 bg-white border border-black rounded-[12px] h-[40px] flex items-center justify-center">
                  <p className="text-[14px] font-semibold">All vendor run sheets</p>
                </div>
              </div>
            </div>

            {/* Friday Timeline */}
            <div className="bg-white w-full flex justify-center py-[8px] px-[16px]">
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="flex flex-col">
                  {/* Date Header */}
                  <div className="bg-white h-[50px] border-b border-black">
                    <div className="flex items-center gap-[20px] h-full px-[24px]">
                      <DateRange className="relative shrink-0 size-[24px]" />
                      <p className="text-[16px] font-medium whitespace-nowrap">Friday, 17 July 2026</p>
                    </div>
                  </div>

                  {/* Timeline Items */}
                  <div className="bg-[#f4f4f4] flex items-center gap-[8px] px-[24px] py-[16px]">
                    <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                    <p className="text-[16px] font-medium leading-[1.4] flex-1">Flower delivery</p>
                  </div>
                  <div className="bg-[#f4f4f4] flex items-center gap-[8px] px-[24px] py-[16px]">
                    <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                    <p className="text-[16px] font-medium leading-[1.4] flex-1">Furniture delivery</p>
                  </div>
                  <div className="bg-[#f4f4f4] flex items-center gap-[8px] px-[24px] py-[16px]">
                    <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                    <p className="text-[16px] font-medium leading-[1.4] flex-1">Set up furniture</p>
                  </div>
                  <div className="bg-[#f4f4f4] flex flex-col gap-[8px] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <div className="flex-1 flex flex-col gap-[8px]">
                        <p className="text-[16px] font-medium leading-[1.4]">4PM - wedding rehearsal with bridal party</p>
                        <div className="bg-[#ffd2cc] px-[10px] py-[4px] rounded-full inline-block self-start">
                          <p className="text-[14px] font-medium leading-[1.4] whitespace-nowrap">To be confirmed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Saturday Timeline - Main Wedding Day */}
            <div className="bg-white w-full flex justify-center py-[8px] px-[16px]">
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="flex flex-col">
                  {/* Date Header */}
                  <div className="bg-white h-[50px] border-b border-black">
                    <div className="flex items-center gap-[20px] h-full px-[24px]">
                      <DateRange className="relative shrink-0 size-[24px]" />
                      <p className="text-[16px] font-medium whitespace-nowrap">Saturday, 18 July 2026</p>
                    </div>
                  </div>

                  {/* 6AM - Make up artists arrive */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <div className="flex-1">
                        <p className="text-[16px] font-medium leading-[1.4] mb-[16px]">6AM - Make up artists arrive</p>
                        <div className="bg-white rounded-[8px] p-[16px] flex flex-col gap-[16px]">
                          <p className="text-[14px] font-normal leading-[1.4]">See the make up artists' run sheet for full details on their timeline.</p>
                          <div className="bg-black h-[40px] rounded-[12px] flex items-center justify-center">
                            <p className="text-[14px] font-semibold text-white">Make up artist run sheet</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 10AM - Photographer and videographer arrives */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <div className="flex-1 flex flex-col gap-[16px]">
                        <p className="text-[16px] font-medium leading-[1.4]">10AM - Photographer and videographer arrives</p>
                        <div className="bg-white rounded-[8px] p-[16px] flex flex-col gap-[16px]">
                          <p className="text-[14px] font-normal leading-[1.4]">See the photographer's run sheet for full details on their timeline.</p>
                          <div className="bg-black h-[40px] rounded-[12px] flex items-center justify-center">
                            <p className="text-[14px] font-semibold text-white">Photographer run sheet</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Celebrant, Ellen and Dylan arrive */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <p className="text-[16px] font-medium leading-[1.4] flex-1">Celebrant, Ellen and Dylan arrive</p>
                    </div>
                  </div>

                  {/* Bridal party lunch break */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <p className="text-[16px] font-medium leading-[1.4] flex-1">Bridal party lunch break</p>
                    </div>
                  </div>

                  {/* 1:30PM - Live band arrives and sets up */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <div className="flex-1 flex flex-col gap-[16px]">
                        <p className="text-[16px] font-medium leading-[1.4]">1:30PM - Live band arrives and sets up</p>
                        <div className="bg-white rounded-[8px] p-[16px] flex flex-col gap-[16px]">
                          <p className="text-[14px] font-normal leading-[1.4]">See the live band's run sheet for full details on their timeline.</p>
                          <div className="bg-black h-[40px] rounded-[12px] flex items-center justify-center">
                            <p className="text-[14px] font-semibold text-white">Live band run sheet</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2PM - Guests start to arrive */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <div className="flex-1 flex flex-col gap-[16px]">
                        <p className="text-[16px] font-medium leading-[1.4]">2PM - Guests start to arrive</p>
                        <Badge className="bg-white flex gap-[4px] items-center px-[8px] py-[4px] rounded-[100px]" />
                      </div>
                    </div>
                  </div>

                  {/* 2:45PM - Last bus for guests to arrive */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <div className="flex-1 flex flex-col gap-[16px]">
                        <p className="text-[16px] font-medium leading-[1.4]">2:45PM - Last bus for guests to arrive</p>
                        <div className="bg-white rounded-[8px] p-[16px] flex flex-col gap-[16px]">
                          <p className="text-[14px] font-normal leading-[1.4]">See the event's bus run sheet for full details on their timeline.</p>
                          <div className="bg-black h-[40px] rounded-[12px] flex items-center justify-center">
                            <p className="text-[14px] font-semibold text-white">Event bus run sheet</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3PM - Ceremony starts */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <div className="flex-1 flex flex-col gap-[16px]">
                        <p className="text-[16px] font-medium leading-[1.4]">3PM - Ceremony starts</p>
                        <div className="flex flex-wrap gap-[16px]">
                          <Badge className="bg-white flex gap-[4px] items-center px-[8px] py-[4px] rounded-[100px]" property1="no-phones" />
                          <Badge className="bg-white flex gap-[4px] items-center px-[8px] py-[4px] rounded-[100px]" property1="no-food-drinks" />
                        </div>
                        <div className="bg-white rounded-[8px] p-[16px] flex flex-col gap-[16px]">
                          <p className="text-[14px] font-normal leading-[1.4]">See the ceremony timeline for full details.</p>
                          <div className="bg-black h-[40px] rounded-[12px] flex items-center justify-center">
                            <p className="text-[14px] font-semibold text-white">Ceremony timeline</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3:30PM - Ceremony ends */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <div className="flex-1 flex flex-col gap-[16px]">
                        <p className="text-[16px] font-medium leading-[1.4]">3:30PM - Ceremony ends</p>
                        <Badge className="bg-white flex gap-[4px] items-center px-[8px] py-[4px] rounded-[100px]" />
                      </div>
                    </div>
                  </div>

                  {/* 3:50PM - Bridal party private photos */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <p className="text-[16px] font-medium leading-[1.4] flex-1">3:50PM - Bridal party private photos</p>
                    </div>
                  </div>

                  {/* 4PM - Reception starts */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <div className="flex-1 flex flex-col gap-[16px]">
                        <p className="text-[16px] font-medium leading-[1.4]">4PM - Reception starts</p>
                        <div className="flex flex-wrap gap-[16px]">
                          <Badge className="bg-white flex gap-[4px] items-center px-[8px] py-[4px] rounded-[100px]" />
                          <Badge className="bg-white flex gap-[4px] items-center px-[8px] py-[4px] rounded-[100px]" property1="food-available" />
                        </div>
                        <div className="bg-white rounded-[8px] p-[16px] flex flex-col gap-[16px]">
                          <p className="text-[14px] font-normal leading-[1.4]">See the reception timeline for full details.</p>
                          <div className="bg-black h-[40px] rounded-[12px] flex items-center justify-center">
                            <p className="text-[14px] font-semibold text-white">Reception timeline</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 6PM - Speeches */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <div className="flex-1 flex flex-col gap-[16px]">
                        <p className="text-[16px] font-medium leading-[1.4]">6PM - Speeches</p>
                        <Badge className="bg-white flex gap-[4px] items-center px-[8px] py-[4px] rounded-[100px]" property1="no-food-drinks" />
                        <div className="bg-white rounded-[8px] p-[16px] flex flex-col gap-[16px]">
                          <p className="text-[14px] font-normal leading-[1.4]">See the speeches timeline for full details.</p>
                          <div className="bg-black h-[40px] rounded-[12px] flex items-center justify-center">
                            <p className="text-[14px] font-semibold text-white">Speeches timeline</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 7PM - Dance performances */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <div className="flex-1 flex flex-col gap-[16px]">
                        <p className="text-[16px] font-medium leading-[1.4]">7PM - Dance performances</p>
                        <div className="flex flex-wrap gap-[16px]">
                          <Badge className="bg-white flex gap-[4px] items-center px-[8px] py-[4px] rounded-[100px]" property1="Variant5" />
                          <Badge className="bg-white flex gap-[4px] items-center px-[8px] py-[4px] rounded-[100px]" property1="food-available" />
                        </div>
                        <div className="bg-white rounded-[8px] p-[16px] flex flex-col gap-[16px] text-[14px] font-normal leading-[1.4]">
                          <p>Sam and Andie's first dance</p>
                          <p>Father-of-the-bride and bride dance</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 8PM - Dancefloor open */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <div className="flex-1 flex flex-col gap-[16px]">
                        <p className="text-[16px] font-medium leading-[1.4]">8PM - Dancefloor open</p>
                        <div className="flex flex-wrap gap-[16px]">
                          <Badge className="bg-white flex gap-[4px] items-center px-[8px] py-[4px] rounded-[100px]" property1="Variant5" />
                          <Badge className="bg-white flex gap-[4px] items-center px-[8px] py-[4px] rounded-[100px]" property1="food-available" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 11:45PM - Reception ends */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <div className="flex-1 flex flex-col gap-[16px]">
                        <p className="text-[16px] font-medium leading-[1.4]">11:45PM - Reception ends</p>
                        <div className="bg-white rounded-[8px] p-[16px]">
                          <p className="text-[14px] font-normal leading-[1.4]">Last bus for guests is at 11:45pm to take them down to the bottom of the drive way where they can catch their organised transport home.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Midnight - Last bus home */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <p className="text-[16px] font-medium leading-[1.4] flex-1">Midnight - Last bus home (bridal party only)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sunday Timeline */}
            <div className="bg-white w-full flex justify-center py-[8px] px-[16px]">
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="flex flex-col">
                  {/* Date Header */}
                  <div className="bg-white h-[50px] border-b border-black">
                    <div className="flex items-center gap-[20px] h-full px-[24px]">
                      <DateRange className="relative shrink-0 size-[24px]" />
                      <p className="text-[16px] font-medium whitespace-nowrap">Sunday, 19 July 2026</p>
                    </div>
                  </div>

                  {/* Clean and pack up */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <div className="flex-1 flex flex-col gap-[16px]">
                        <p className="text-[16px] font-medium leading-[1.4]">Clean and pack up</p>
                        <div className="bg-white rounded-[8px] p-[16px] flex flex-col gap-[16px]">
                          <p className="text-[14px] font-normal leading-[1.4]">See the list of things that needs to be done the day after the wedding. This is only for the bride, groom and support crew for Sunday.</p>
                          <div className="bg-black h-[40px] rounded-[12px] flex items-center justify-center">
                            <p className="text-[14px] font-semibold text-white">Post-wedding to-do's</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Marquee and dance floor collected */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <div className="flex-1 flex flex-col gap-[16px]">
                        <p className="text-[16px] font-medium leading-[1.4]">Marquee and dance floor collected by vendor</p>
                        <div className="bg-white rounded-[8px] p-[16px] flex flex-col gap-[16px]">
                          <p className="text-[14px] font-normal leading-[1.4]">The vendor can be contacted here if needed.</p>
                          <div className="bg-black rounded-[12px] flex items-center justify-center px-[16px] py-[12px]">
                            <p className="text-[14px] font-semibold text-white">Contact Tweed Party Hire</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monday Timeline */}
            <div className="bg-white w-full flex justify-center py-[8px] px-[16px]">
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="flex flex-col">
                  {/* Date Header */}
                  <div className="bg-white h-[50px] border-b border-black">
                    <div className="flex items-center gap-[20px] h-full px-[24px]">
                      <DateRange className="relative shrink-0 size-[24px]" />
                      <p className="text-[16px] font-medium whitespace-nowrap">Monday, 20 July 2026</p>
                    </div>
                  </div>

                  {/* Furniture pick up */}
                  <div className="bg-[#f4f4f4] px-[24px] py-[16px]">
                    <div className="flex gap-[8px]">
                      <SendHorFill className="w-[24px] h-[24px] shrink-0" />
                      <div className="flex-1 flex flex-col gap-[16px]">
                        <p className="text-[16px] font-medium leading-[1.4]">Furniture pick up by vendor</p>
                        <div className="bg-white rounded-[8px] p-[16px] flex flex-col gap-[16px]">
                          <p className="text-[14px] font-normal leading-[1.4]">The vendor can be contacted here if needed.</p>
                          <div className="bg-black h-[40px] rounded-[12px] flex items-center justify-center">
                            <p className="text-[14px] font-semibold text-white">{`Contact {vendor name}`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}
