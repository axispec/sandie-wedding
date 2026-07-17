import { Link, useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const vendors = [
  {
    emoji: "🍴",
    name: "Bespoke Catering (Andy)",
    phone: "0447 710 890",
    email: "TBC",
    runSheet: true,
    buttonLabel: "Run sheet & menu",
    buttonLink: "/timeline/catering",
  },
  {
    emoji: "🤍",
    name: "Honeybee Celebrancy (Ellen)",
    phone: "0403 141 088",
    email: "Email",
    runSheet: false,
  },
  {
    emoji: "📍",
    name: "Mindy Makeup Artist & Co.",
    phone: "0412 653 006",
    email: "minddymakeupartist@gmail.com",
    runSheet: true,
  },
  {
    emoji: "📷",
    name: "Sam Wyper Photography",
    phone: "0459 252 028",
    email: "hello@samwyperphotography.com",
    runSheet: true,
    buttonLink: "/run-sheets/sam-wyper-photography",
  },
  {
    emoji: "🛣️",
    name: "Gosels Bus Service (Jeff)",
    phone: "0427 149 689",
    email: "TBC",
    runSheet: true,
    buttonLink: "/run-sheets/gosels-bus-service",
  },
  {
    emoji: "🎪",
    name: "Tweed Party Hire",
    phone: "07 5524 7878",
    email: "Email",
    runSheet: false,
  },
  {
    emoji: "🏕️",
    name: "Hampton Event Hire (Melissa)",
    phone: "07 5523 9564",
    email: "sales@hamptoneventhire.com",
    runSheet: false,
  },
  {
    emoji: "🙋",
    name: "Michael - Venue/event support",
    phone: "0459 173 910",
    email: "Email",
    runSheet: false,
  },
];

function isPlaceholder(value: string) {
  return value === "Phone" || value === "Email" || value === "TBC";
}

export default function RunSheets() {
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
            <div className="w-full flex justify-center pt-[12px] pb-[24px] px-[16px]">
              <div className="max-w-[360px] w-full">
                <p className="text-[24px] font-medium text-center">Vendors & run sheets</p>
              </div>
            </div>

            {/* Vendor list */}
            <div className="w-full flex justify-center pb-[16px] px-[16px]">
              <div className="max-w-[360px] w-full flex flex-col gap-[12px]">
                {vendors.map((vendor) => (
                  <div key={vendor.name} className="bg-white border border-black rounded-[12px] overflow-hidden">
                    {/* Vendor name */}
                    <div className="flex items-center gap-[12px] px-[16px] py-[14px] border-b border-[#e5e5e5]">
                      <span className="text-[18px]">{vendor.emoji}</span>
                      <p className="text-[15px] font-semibold">{vendor.name}</p>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-[12px] px-[16px] py-[12px] border-b border-[#e5e5e5]">
                      <span className="text-[16px]">📞</span>
                      {isPlaceholder(vendor.phone) ? (
                        <p className="text-[14px] text-[#999]">{vendor.phone}</p>
                      ) : (
                        <a href={`tel:${vendor.phone.replace(/\s/g, "")}`} className="text-[14px] underline">{vendor.phone}</a>
                      )}
                    </div>

                    {/* Run sheet button */}
                    {vendor.runSheet && (
                      <div className="px-[16px] py-[12px]">
                        {vendor.buttonLink ? (
                          <Link to={vendor.buttonLink} className="w-full h-[40px] border border-black rounded-[12px] flex items-center justify-center hover:bg-[#eee] transition-colors">
                            <span className="text-[14px] font-semibold">{vendor.buttonLabel ?? "Run sheet"}</span>
                          </Link>
                        ) : (
                          <button className="w-full h-[40px] border border-black rounded-[12px] flex items-center justify-center hover:bg-[#eee] transition-colors">
                            <span className="text-[14px] font-semibold">{vendor.buttonLabel ?? "Run sheet"}</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
}
