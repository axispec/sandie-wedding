import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import svgPaths from "../../imports/Home-2/svg-v62trlssuc";
import BottomNav from "./BottomNav";

export default function HomeWrapper() {
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    const calculateDaysRemaining = () => {
      const weddingDate = new Date('2026-07-18T00:00:00');
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const timeDiff = weddingDate.getTime() - today.getTime();
      const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      setDaysRemaining(days > 0 ? days : 0);
    };

    calculateDaysRemaining();

    // Update daily at midnight
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();

    const midnightTimeout = setTimeout(() => {
      calculateDaysRemaining();
      // Then update every 24 hours
      const dailyInterval = setInterval(calculateDaysRemaining, 24 * 60 * 60 * 1000);
      return () => clearInterval(dailyInterval);
    }, timeUntilMidnight);

    return () => clearTimeout(midnightTimeout);
  }, []);

  return (
    <div className="relative size-full bg-white overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="absolute inset-0 flex flex-col">
        {/* Main content - scrollable */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col items-center w-full">
            {/* Top section with heading and date */}
            <div className="bg-white w-full flex justify-center pt-[60px] pb-[24px] px-[16px]">
              <div className="flex flex-col gap-[24px] items-center text-center max-w-[360px] w-full">
                <div className="flex flex-col gap-[4px] items-center w-full">
                  <p className="text-[28px] font-semibold leading-[1.2]">Sam and Andie</p>
                  <p className="text-[28px] font-semibold leading-[1.2]">are getting married!</p>
                </div>
                <p className="text-[16px] font-medium">Saturday, 18 July, 2026</p>
              </div>
            </div>

            {/* Stats cards */}
            <div className="bg-white w-full flex justify-center py-[16px] px-[16px]">
              <div className="flex flex-col gap-[8px] items-center max-w-[360px] w-full">
                {/* Days countdown */}
                <div className="bg-white border border-black rounded-[12px] w-full px-[24px] py-[16px]">
                  <div className="flex flex-col gap-[8px] items-center text-center">
                    <p className="text-[40px] font-medium leading-[1] py-0">{daysRemaining}</p>
                    <p className="text-[16px] font-medium">days to go</p>
                  </div>
                </div>

                {/* Grid with attending and vendors */}
                <div className="grid grid-cols-2 gap-[8px] w-full">
                  <div className="bg-white border border-black rounded-[12px] px-[16px] py-[12px] flex items-center justify-center">
                    <div className="flex flex-col gap-[8px] items-center text-center">
                      <p className="text-[24px] font-medium leading-[1]">108</p>
                      <p className="text-[16px] font-medium leading-[1]">attending</p>
                    </div>
                  </div>
                  <div className="bg-white border border-black rounded-[12px] px-[16px] py-[12px] flex items-center justify-center">
                    <div className="flex flex-col gap-[8px] items-center text-center">
                      <p className="text-[24px] font-medium leading-[1]">13</p>
                      <p className="text-[16px] font-medium leading-[1]">vendors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu list with items */}
            <div className="bg-white w-full flex justify-center py-[16px] px-[16px]">
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden divide-y divide-black">
                <Link to="/timeline" className="flex items-center gap-[20px] h-[60px] px-[18px] bg-white hover:bg-[#eee] transition-colors">
                  <span className="text-[18px] w-[24px] text-center">🗓️</span>
                  <p className="text-[16px] font-medium whitespace-nowrap">Event timeline</p>
                </Link>
                <Link to="/master-run-sheet" className="flex items-center gap-[20px] h-[60px] px-[18px] bg-white hover:bg-[#eee] transition-colors">
                  <span className="text-[18px] w-[24px] text-center">🕐</span>
                  <p className="text-[16px] font-medium whitespace-nowrap">Master run sheet</p>
                </Link>
                <Link to="/run-sheets" className="flex items-center gap-[20px] h-[60px] px-[18px] bg-white hover:bg-[#eee] transition-colors">
                  <span className="text-[18px] w-[24px] text-center">📋</span>
                  <p className="text-[16px] font-medium whitespace-nowrap">Vendors & run sheets</p>
                </Link>
                <Link to="/timeline/catering/food" className="flex items-center gap-[20px] h-[60px] px-[18px] bg-white hover:bg-[#eee] transition-colors">
                  <span className="text-[18px] w-[24px] text-center">🍽️</span>
                  <p className="text-[16px] font-medium whitespace-nowrap">Wedding menu</p>
                </Link>
                <div className="flex items-center gap-[20px] h-[60px] px-[18px] bg-white">
                  <span className="text-[18px] w-[24px] text-center">📞</span>
                  <p className="text-[16px] font-medium whitespace-nowrap">Important contacts</p>
                </div>
                <div className="flex items-center gap-[20px] h-[60px] px-[18px] bg-white">
                  <span className="text-[18px] w-[24px] text-center">🎁</span>
                  <p className="text-[16px] font-medium whitespace-nowrap">Wedding gifts</p>
                </div>
              </div>
            </div>

            {/* Venue location section */}
            <div className="bg-white w-full flex justify-center py-[16px] px-[16px]">
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full px-[18px] py-[16px]">
                <div className="flex flex-col gap-[16px] items-center">
                  <p className="text-[16px] font-medium text-center">Venue location:</p>
                  <p className="text-[16px] font-normal text-center leading-[1.5]">
                    181 Cabbage Gum Road,<br />
                    Cudgera Creek NSW 2484
                  </p>
                  <p className="text-[13px] font-normal text-center leading-[1.5] text-[#666]">
                    IMPORTANT: Do not follow this address directly in Google Maps or Apple Maps, instead, enter just 'Cabbage Gum Road', drive to the end of the road until you hit a cul-de-sac, and look for the gate with a large metal heart and the numbers 181
                  </p>
                </div>
              </div>
            </div>

            {/* Wedding website section */}
            <div className="bg-white w-full flex justify-center py-[16px] px-[16px] pb-[120px]">
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full px-[18px] py-[16px]">
                <div className="flex flex-col gap-[16px] items-center">
                  <p className="text-[16px] font-medium text-center leading-[1.5]">
                    More details and FAQs are available on the wedding website.
                  </p>
                  <a
                    href="https://samandandieswedding.webflow.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-[#eee] border border-black rounded-[12px] w-full h-[40px] flex items-center justify-center transition-colors"
                  >
                    <p className="text-[14px] font-semibold">Wedding website</p>
                  </a>
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
