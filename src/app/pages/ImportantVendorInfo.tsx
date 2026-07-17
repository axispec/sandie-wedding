import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

export default function ImportantVendorInfo() {
  const navigate = useNavigate();

  return (
    <div className="relative size-full bg-white overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-[120px]">
          <div className="flex flex-col items-center w-full">

            {/* Back arrow */}
            <div className="w-full flex justify-center pt-[60px] px-[16px]">
              <div className="max-w-[360px] w-full">
                <button onClick={() => navigate(-1)} className="text-[24px] leading-none">&#8592;</button>
              </div>
            </div>

            {/* Header */}
            <div className="w-full flex justify-center pt-[12px] pb-[16px] px-[16px]">
              <div className="flex flex-col items-center gap-[4px] max-w-[360px] w-full">
                <p className="text-[24px] font-medium text-center">Important Vendor Info</p>
              </div>
            </div>

            {/* Contact info card */}
            <div className="w-full flex justify-center px-[16px] pb-[16px]">
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full px-[18px] py-[16px]">
                <div className="flex flex-col gap-[16px]">
                  <p className="text-[16px] font-normal leading-[1.5]">
                    Please contact Ellen Carey - Celebrant and day coordinator{" "}
                    <a href="tel:+61403141088" className="font-medium underline whitespace-nowrap">+61 403 141 088</a>{" "}
                    for all enquiries and assistance up until 8pm. Following that, please contact Michael, Heartland's custodian, on{" "}
                    <a href="tel:0459173910" className="font-medium underline whitespace-nowrap">0459 173 910</a>.
                  </p>
                  <p className="text-[16px] font-normal leading-[1.5]">
                    If neither are available, please contact Reay Mackay on{" "}
                    <a href="tel:0412888616" className="font-medium underline whitespace-nowrap">0412 888 616</a>. Please only contact Reay as a last resort as he is father of the groom.
                  </p>
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
