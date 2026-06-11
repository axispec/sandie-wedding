import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";

export default function WeddingDrinks() {
  return (
    <div className="relative size-full bg-white overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="absolute inset-0 flex flex-col">
        {/* Main content - scrollable */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-[120px] bg-[#eee]">
          <div className="flex flex-col items-center w-full">

            {/* Header */}
            <div className="bg-white w-full flex justify-center pt-[60px] pb-[24px] px-[16px]">
              <div className="flex flex-col items-start max-w-[360px] w-full">
                <p className="text-[24px] font-medium text-center w-full">Wedding menu</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-[#eee] w-full flex justify-center py-[12px] border-t border-black">
              <div className="flex gap-0 max-w-[392px] w-full h-[46px] px-[16px]">
                <Link to="/wedding-menu" className="flex-1 flex items-center justify-center">
                  <div className="h-[40px] w-full flex items-center justify-center">
                    <p className="text-[16px] font-medium">Food</p>
                  </div>
                </Link>
                <div className="flex-1 flex items-center justify-center">
                  <div className="bg-white border border-black rounded-[8px] h-[40px] w-full flex items-center justify-center">
                    <p className="text-[16px] font-medium">Drinks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wine */}
            <div className="bg-[#eee] w-full flex flex-col items-center gap-[24px] p-[16px]">
              <p className="text-[18px] font-normal text-center w-full">Wine</p>
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full p-[24px]">
                <div className="flex flex-col gap-[24px]">
                  <div className="pb-[24px] border-b border-black border-dashed">
                    <p className="text-[16px] font-medium">Name of drink</p>
                    <p className="text-[14px] font-medium italic">Ingredient list here</p>
                  </div>
                  <div className="pb-[24px] border-b border-black border-dashed">
                    <p className="text-[16px] font-medium">Name of drink</p>
                    <p className="text-[14px] font-medium italic">Ingredient list here</p>
                  </div>
                  <div>
                    <p className="text-[16px] font-medium">Name of drink</p>
                    <p className="text-[14px] font-medium italic">Ingredient list here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Champagne */}
            <div className="bg-[#eee] w-full flex flex-col items-center gap-[24px] p-[16px]">
              <p className="text-[18px] font-normal text-center w-full">Champagne</p>
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full p-[24px]">
                <div className="flex flex-col gap-[24px]">
                  <div className="pb-[24px] border-b border-black border-dashed">
                    <p className="text-[16px] font-medium">Name of drink</p>
                    <p className="text-[14px] font-medium italic">Ingredient list here</p>
                  </div>
                  <div>
                    <p className="text-[16px] font-medium">Name of drink</p>
                    <p className="text-[14px] font-medium italic">Ingredient list here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cocktail */}
            <div className="bg-[#eee] w-full flex flex-col items-center gap-[24px] p-[16px]">
              <p className="text-[18px] font-normal text-center w-full">Cocktail</p>
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full p-[24px]">
                <div className="flex flex-col gap-[24px]">
                  <div className="pb-[24px] border-b border-black border-dashed">
                    <p className="text-[16px] font-medium">The Maia</p>
                    <p className="text-[14px] font-medium italic">Ingredient list here</p>
                  </div>
                  <div className="pb-[24px] border-b border-black border-dashed">
                    <p className="text-[16px] font-medium">The Juniper</p>
                    <p className="text-[14px] font-medium italic">Ingredient list here</p>
                  </div>
                  <div>
                    <p className="text-[16px] font-medium">The Romy</p>
                    <p className="text-[14px] font-medium italic">Ingredient list here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-alcoholic */}
            <div className="bg-[#eee] w-full flex flex-col items-center gap-[24px] p-[16px]">
              <p className="text-[18px] font-normal text-center w-full">Non-alcoholic</p>
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full p-[24px]">
                <div className="flex flex-col gap-[24px]">
                  <div className="pb-[24px] border-b border-black border-dashed">
                    <p className="text-[16px] font-medium">Still water</p>
                    <p className="text-[14px] font-medium italic">Ingredient list here</p>
                  </div>
                  <div className="pb-[24px] border-b border-black border-dashed">
                    <p className="text-[16px] font-medium">Orange juice</p>
                    <p className="text-[14px] font-medium italic">Ingredient list here</p>
                  </div>
                  <div className="pb-[24px] border-b border-black border-dashed">
                    <p className="text-[16px] font-medium">Coca Cola</p>
                    <p className="text-[14px] font-medium italic">Ingredient list here</p>
                  </div>
                  <div>
                    <p className="text-[16px] font-medium">Name of drink</p>
                    <p className="text-[14px] font-medium italic">Ingredient list here</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom navigation - fixed (same as home page) */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-black h-[88px] flex items-center justify-center p-[8px]">
          <div className="flex gap-[10px] max-w-[360px] w-full h-[68px]">
            {/* Home */}
            <Link to="/" className="flex-1 bg-white border border-black rounded-[12px] flex items-center justify-center hover:bg-[#eee] transition-colors">
              <div className="relative shrink-0 size-[40px]">
                <div className="absolute inset-[20.63%_20.83%_12.5%_20.83%]">
                  <div className="absolute inset-[-6.23%_-7.14%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6674 30.0813">
                      <path d={svgPaths.p15dd9880} stroke="#33363F" strokeWidth="3.33333" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[62.5%_39.58%_12.5%_39.58%]">
                  <div className="absolute inset-[-16.67%_-20%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13.3333">
                      <path d={svgPaths.pb626c00} stroke="#33363F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Calendar */}
            <Link to="/timeline" className="flex-1 bg-white hover:bg-[#eee] border border-black rounded-[12px] flex items-center justify-center transition-colors cursor-pointer">
              <div className="relative shrink-0 size-[40px]">
                <div className="absolute bottom-[12.5%] left-[12.5%] right-[12.5%] rounded-[2px] top-1/4">
                  <div aria-hidden className="absolute border-[#33363f] border-[3.333px] border-solid inset-[-1.667px] pointer-events-none rounded-[3.667px]" />
                </div>
                <div className="absolute bg-[#33363f] bottom-[58.33%] left-[12.5%] right-[12.5%] rounded-tl-[3.333px] rounded-tr-[3.333px] top-1/4" />
                <div className="absolute bottom-3/4 flex items-center justify-center left-[29.17%] right-[70.83%] top-[12.5%]" style={{ containerType: "size" }}>
                  <div className="flex-none h-[88819000cqw] rotate-90 w-[100cqh]">
                    <div className="relative size-full">
                      <div className="absolute inset-[-1.67px_-33.33%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 3.33333">
                          <path d="M1.66667 1.66667H6.66667" stroke="#33363F" strokeLinecap="round" strokeWidth="3.33333" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-3/4 flex items-center justify-center left-[70.83%] right-[29.17%] top-[12.5%]" style={{ containerType: "size" }}>
                  <div className="flex-none h-[88819000cqw] rotate-90 w-[100cqh]">
                    <div className="relative size-full">
                      <div className="absolute inset-[-1.67px_-33.33%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 3.33333">
                          <path d="M1.66667 1.66667H6.66667" stroke="#33363F" strokeLinecap="round" strokeWidth="3.33333" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[#33363f] bottom-[41.67%] left-[29.17%] right-[54.17%] rounded-[0.5px] top-1/2" />
                <div className="absolute bg-[#33363f] bottom-1/4 left-[29.17%] right-[54.17%] rounded-[0.5px] top-[66.67%]" />
                <div className="absolute bg-[#33363f] bottom-[41.67%] left-[54.17%] right-[29.17%] rounded-[0.5px] top-1/2" />
                <div className="absolute bg-[#33363f] bottom-1/4 left-[54.17%] right-[29.17%] rounded-[0.5px] top-[66.67%]" />
              </div>
            </Link>

            {/* Shopping */}
            <Link to="/vendors" className="flex-1 bg-white border border-black rounded-[12px] flex items-center justify-center hover:bg-[#eee] transition-colors">
              <div className="relative shrink-0 size-[40px]">
                <div className="absolute inset-[16.67%_58.33%_66.67%_16.67%]">
                  <div className="absolute inset-[-25%_-16.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.0001">
                      <path d={svgPaths.p80fdc00} stroke="#222222" strokeLinecap="round" strokeWidth="3.33333" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[29.17%] left-1/4 right-1/4 top-[58.33%]">
                  <div className="absolute inset-[-33.33%_-8.33%_-33.34%_-5.11%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6885 8.33345">
                      <path d={svgPaths.p313da380} stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[33.33%_16.67%_41.67%_29.17%]">
                  <div className="absolute inset-[-16.67%_-2.96%_-16.67%_-5.61%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5241 13.3333">
                      <path d={svgPaths.p2574f240} stroke="#222222" strokeLinecap="round" strokeWidth="3.33333" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[12.5%] left-[66.67%] right-1/4 top-[79.17%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                    <circle cx="1.66667" cy="1.66667" fill="#222222" r="1.66667" />
                  </svg>
                </div>
                <div className="absolute inset-[79.17%_58.33%_12.5%_33.33%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                    <circle cx="1.66667" cy="1.66667" fill="#222222" r="1.66667" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Phone */}
            <div className="flex-1 bg-white border border-black rounded-[12px] flex items-center justify-center">
              <div className="relative shrink-0 size-[40px]">
                <div className="absolute left-[5px] size-[30px] top-[5px]">
                  <div className="absolute inset-[-3.46%_-3.46%_4.18%_4.18%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.7826 29.7826">
                      <path d={svgPaths.p1b4d2280} stroke="#33363F" strokeWidth="3.33333" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
