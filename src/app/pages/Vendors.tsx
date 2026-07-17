import { Link } from "react-router-dom";
import svgPaths from "../../imports/Home-2/svg-v62trlssuc";
import vendorIcons from "../../imports/Vendors-2/svg-p2yubhcpma";
import BottomNav from "../components/BottomNav";

export default function Vendors() {
  return (
    <div className="relative size-full bg-white overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="absolute inset-0 flex flex-col">
        {/* Main content - scrollable */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-[120px]">
          <div className="flex flex-col items-center w-full">

            {/* Header */}
            <div className="bg-white w-full flex justify-center pt-[80px] pb-[16px] px-[16px]">
              <div className="flex flex-col gap-[8px] items-start max-w-[360px] w-full">
                <p className="text-[24px] font-medium text-center w-full">Vendors</p>
              </div>
            </div>

            {/* Vendor List */}
            <div className="bg-white w-full flex flex-col items-center gap-[16px] p-[16px]">

              {/* Honeybee Celebrancy */}
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="flex flex-col">
                  <div className="bg-white h-[60px] border-b border-black px-[24px] flex items-center">
                    <p className="text-[16px] font-medium">Honeybee Celebrancy</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[16px]">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={vendorIcons.p3690e500} stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="text-[16px] font-medium">0403 141 088</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[8px]">
                    <div className="relative shrink-0 size-[24px]">
                      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] rounded-[2px] top-1/4">
                        <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
                      </div>
                      <div className="absolute inset-[37.5%_16.67%_45.83%_16.67%]">
                        <div className="absolute inset-[-22.36%_-2.8%_-19.1%_-2.8%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8944 5.65836">
                            <path d={vendorIcons.p33a24680} stroke="#33363F" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-[16px] font-medium">Email</p>
                  </div>
                  <div className="bg-[#f4f4f4] pb-[12px] pt-[8px] px-[24px]">
                    <div className="bg-white border border-black rounded-[12px] h-[40px] flex items-center justify-center">
                      <p className="text-[14px] font-semibold">View run sheet</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mindy Makeup Artist & Co. */}
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="flex flex-col">
                  <div className="bg-white h-[60px] border-b border-black px-[24px] flex items-center">
                    <p className="text-[16px] font-medium">Mindy Makeup Artist & Co.</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[16px]">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={vendorIcons.p3690e500} stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="text-[16px] font-medium">0412 653 006</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[8px]">
                    <div className="relative shrink-0 size-[24px]">
                      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] rounded-[2px] top-1/4">
                        <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
                      </div>
                      <div className="absolute inset-[37.5%_16.67%_45.83%_16.67%]">
                        <div className="absolute inset-[-22.36%_-2.8%_-19.1%_-2.8%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8944 5.65836">
                            <path d={vendorIcons.p33a24680} stroke="#33363F" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-[16px] font-medium">minddymakeupartist@gmail.com</p>
                  </div>
                  <div className="bg-[#f4f4f4] pb-[12px] pt-[8px] px-[24px]">
                    <div className="bg-white border border-black rounded-[12px] h-[40px] flex items-center justify-center">
                      <p className="text-[14px] font-semibold">View run sheet</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sam Wyper Photography */}
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="flex flex-col">
                  <div className="bg-white h-[60px] border-b border-black px-[24px] flex items-center">
                    <p className="text-[16px] font-medium">Sam Wyper Photography</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[16px]">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={vendorIcons.p3690e500} stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="text-[16px] font-medium">Phone</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[8px]">
                    <div className="relative shrink-0 size-[24px]">
                      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] rounded-[2px] top-1/4">
                        <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
                      </div>
                      <div className="absolute inset-[37.5%_16.67%_45.83%_16.67%]">
                        <div className="absolute inset-[-22.36%_-2.8%_-19.1%_-2.8%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8944 5.65836">
                            <path d={vendorIcons.p33a24680} stroke="#33363F" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-[16px] font-medium">hello@samwyperphotography.com</p>
                  </div>
                  <div className="bg-[#f4f4f4] pb-[12px] pt-[8px] px-[24px]">
                    <div className="bg-white border border-black rounded-[12px] h-[40px] flex items-center justify-center">
                      <p className="text-[14px] font-semibold">View run sheet</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fiddle Fig Films */}
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="flex flex-col">
                  <div className="bg-white h-[60px] border-b border-black px-[24px] flex items-center">
                    <p className="text-[16px] font-medium">Fiddle Fig Films</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[16px]">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={vendorIcons.p3690e500} stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="text-[16px] font-medium">Phone</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[8px]">
                    <div className="relative shrink-0 size-[24px]">
                      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] rounded-[2px] top-1/4">
                        <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
                      </div>
                      <div className="absolute inset-[37.5%_16.67%_45.83%_16.67%]">
                        <div className="absolute inset-[-22.36%_-2.8%_-19.1%_-2.8%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8944 5.65836">
                            <path d={vendorIcons.p33a24680} stroke="#33363F" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-[16px] font-medium">fiddlefigfilms@hotmail.com</p>
                  </div>
                  <div className="bg-[#f4f4f4] pb-[12px] pt-[8px] px-[24px]">
                    <div className="bg-white border border-black rounded-[12px] h-[40px] flex items-center justify-center">
                      <p className="text-[14px] font-semibold">View run sheet</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gareth Mewes & Co. */}
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="flex flex-col">
                  <div className="bg-white h-[60px] border-b border-black px-[24px] flex items-center">
                    <p className="text-[16px] font-medium">Gareth Mewes & Co.</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[16px]">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={vendorIcons.p3690e500} stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="text-[16px] font-medium">Phone</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[8px]">
                    <div className="relative shrink-0 size-[24px]">
                      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] rounded-[2px] top-1/4">
                        <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
                      </div>
                      <div className="absolute inset-[37.5%_16.67%_45.83%_16.67%]">
                        <div className="absolute inset-[-22.36%_-2.8%_-19.1%_-2.8%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8944 5.65836">
                            <path d={vendorIcons.p33a24680} stroke="#33363F" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-[16px] font-medium">Email</p>
                  </div>
                  <div className="bg-[#f4f4f4] pb-[12px] pt-[8px] px-[24px]">
                    <div className="bg-white border border-black rounded-[12px] h-[40px] flex items-center justify-center">
                      <p className="text-[14px] font-semibold">View run sheet</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bespoke Catering */}
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="flex flex-col">
                  <div className="bg-white h-[60px] border-b border-black px-[24px] flex items-center">
                    <p className="text-[16px] font-medium">Bespoke Catering</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[16px]">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={vendorIcons.p3690e500} stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="text-[16px] font-medium">Phone</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[8px]">
                    <div className="relative shrink-0 size-[24px]">
                      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] rounded-[2px] top-1/4">
                        <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
                      </div>
                      <div className="absolute inset-[37.5%_16.67%_45.83%_16.67%]">
                        <div className="absolute inset-[-22.36%_-2.8%_-19.1%_-2.8%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8944 5.65836">
                            <path d={vendorIcons.p33a24680} stroke="#33363F" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-[16px] font-medium">Email</p>
                  </div>
                  <div className="bg-[#f4f4f4] pb-[12px] pt-[8px] px-[24px]">
                    <div className="bg-white border border-black rounded-[12px] h-[40px] flex items-center justify-center">
                      <p className="text-[14px] font-semibold">View run sheet</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gosles Bus Service */}
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="flex flex-col">
                  <div className="bg-white h-[60px] border-b border-black px-[24px] flex items-center">
                    <p className="text-[16px] font-medium">Gosels Bus Service</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[16px]">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={vendorIcons.p3690e500} stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="text-[16px] font-medium">Phone</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[8px]">
                    <div className="relative shrink-0 size-[24px]">
                      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] rounded-[2px] top-1/4">
                        <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
                      </div>
                      <div className="absolute inset-[37.5%_16.67%_45.83%_16.67%]">
                        <div className="absolute inset-[-22.36%_-2.8%_-19.1%_-2.8%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8944 5.65836">
                            <path d={vendorIcons.p33a24680} stroke="#33363F" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-[16px] font-medium">Email</p>
                  </div>
                  <div className="bg-[#f4f4f4] pb-[12px] pt-[8px] px-[24px]">
                    <div className="bg-white border border-black rounded-[12px] h-[40px] flex items-center justify-center">
                      <p className="text-[14px] font-semibold">View run sheet</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brisbane Avenue Florists */}
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="flex flex-col">
                  <div className="bg-white h-[60px] border-b border-black px-[24px] flex items-center">
                    <p className="text-[16px] font-medium">Botanical Avenue (Sophie)</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[16px]">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={vendorIcons.p3690e500} stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="text-[16px] font-medium">Phone</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[8px]">
                    <div className="relative shrink-0 size-[24px]">
                      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] rounded-[2px] top-1/4">
                        <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
                      </div>
                      <div className="absolute inset-[37.5%_16.67%_45.83%_16.67%]">
                        <div className="absolute inset-[-22.36%_-2.8%_-19.1%_-2.8%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8944 5.65836">
                            <path d={vendorIcons.p33a24680} stroke="#33363F" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-[16px] font-medium">hello@botanicalavenue.com.au</p>
                  </div>
                  <div className="bg-[#f4f4f4] pb-[12px] pt-[8px] px-[24px]">
                    <div className="bg-white border border-black rounded-[12px] h-[40px] flex items-center justify-center">
                      <p className="text-[14px] font-semibold">View run sheet</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tweed Party Hire */}
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="flex flex-col">
                  <div className="bg-white h-[60px] border-b border-black px-[24px] flex items-center">
                    <p className="text-[16px] font-medium">Tweed Party Hire</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[16px]">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={vendorIcons.p3690e500} stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="text-[16px] font-medium">07 5524 7878</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[8px]">
                    <div className="relative shrink-0 size-[24px]">
                      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] rounded-[2px] top-1/4">
                        <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
                      </div>
                      <div className="absolute inset-[37.5%_16.67%_45.83%_16.67%]">
                        <div className="absolute inset-[-22.36%_-2.8%_-19.1%_-2.8%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8944 5.65836">
                            <path d={vendorIcons.p33a24680} stroke="#33363F" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-[16px] font-medium">info@tweedpartyhire.com</p>
                  </div>
                  <div className="bg-[#f4f4f4] pb-[12px] pt-[8px] px-[24px]">
                    <div className="bg-white border border-black rounded-[12px] h-[40px] flex items-center justify-center">
                      <p className="text-[14px] font-semibold">View run sheet</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hampton Event Hire (Mullum) */}
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="flex flex-col">
                  <div className="bg-white h-[60px] border-b border-black px-[24px] flex items-center">
                    <p className="text-[16px] font-medium">Hampton Event Hire (Melissa)</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[16px]">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={vendorIcons.p3690e500} stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="text-[16px] font-medium">07 5523 9564</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[8px]">
                    <div className="relative shrink-0 size-[24px]">
                      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] rounded-[2px] top-1/4">
                        <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
                      </div>
                      <div className="absolute inset-[37.5%_16.67%_45.83%_16.67%]">
                        <div className="absolute inset-[-22.36%_-2.8%_-19.1%_-2.8%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8944 5.65836">
                            <path d={vendorIcons.p33a24680} stroke="#33363F" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-[16px] font-medium">sales@hamptoneventhire.com</p>
                  </div>
                  <div className="bg-[#f4f4f4] pb-[12px] pt-[8px] px-[24px]">
                    <div className="bg-white border border-black rounded-[12px] h-[40px] flex items-center justify-center">
                      <p className="text-[14px] font-semibold">View run sheet</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AJ Photobooths */}
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="flex flex-col">
                  <div className="bg-white h-[60px] border-b border-black px-[24px] flex items-center">
                    <p className="text-[16px] font-medium">AJ Photobooths</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[16px]">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={vendorIcons.p3690e500} stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="text-[16px] font-medium">Phone</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[8px]">
                    <div className="relative shrink-0 size-[24px]">
                      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] rounded-[2px] top-1/4">
                        <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
                      </div>
                      <div className="absolute inset-[37.5%_16.67%_45.83%_16.67%]">
                        <div className="absolute inset-[-22.36%_-2.8%_-19.1%_-2.8%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8944 5.65836">
                            <path d={vendorIcons.p33a24680} stroke="#33363F" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-[16px] font-medium">aplusjphotobooth@gmail.com</p>
                  </div>
                  <div className="bg-[#f4f4f4] pb-[12px] pt-[8px] px-[24px]">
                    <div className="bg-white border border-black rounded-[12px] h-[40px] flex items-center justify-center">
                      <p className="text-[14px] font-semibold">View run sheet</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Off the Hook Massage (on site) */}
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="flex flex-col">
                  <div className="bg-white h-[60px] border-b border-black px-[24px] flex items-center">
                    <p className="text-[16px] font-medium">Off the Hook Massage (on site)</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[16px]">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={vendorIcons.p3690e500} stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="text-[16px] font-medium">Phone</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[8px]">
                    <div className="relative shrink-0 size-[24px]">
                      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] rounded-[2px] top-1/4">
                        <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
                      </div>
                      <div className="absolute inset-[37.5%_16.67%_45.83%_16.67%]">
                        <div className="absolute inset-[-22.36%_-2.8%_-19.1%_-2.8%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8944 5.65836">
                            <path d={vendorIcons.p33a24680} stroke="#33363F" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-[16px] font-medium">Email</p>
                  </div>
                  <div className="bg-[#f4f4f4] pb-[12px] pt-[8px] px-[24px]">
                    <div className="bg-white border border-black rounded-[12px] h-[40px] flex items-center justify-center">
                      <p className="text-[14px] font-semibold">View run sheet</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Michael - Homebred Support */}
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <div className="flex flex-col">
                  <div className="bg-white h-[60px] border-b border-black px-[24px] flex items-center">
                    <p className="text-[16px] font-medium">Michael - Venue/event support</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[16px]">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={vendorIcons.p3690e500} stroke="#222222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                    <p className="text-[16px] font-medium">Phone</p>
                  </div>
                  <div className="bg-[#f4f4f4] h-[50px] px-[24px] py-[12px] flex items-center gap-[8px]">
                    <div className="relative shrink-0 size-[24px]">
                      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] rounded-[2px] top-1/4">
                        <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
                      </div>
                      <div className="absolute inset-[37.5%_16.67%_45.83%_16.67%]">
                        <div className="absolute inset-[-22.36%_-2.8%_-19.1%_-2.8%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8944 5.65836">
                            <path d={vendorIcons.p33a24680} stroke="#33363F" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-[16px] font-medium">Email</p>
                  </div>
                  <div className="bg-[#f4f4f4] pb-[12px] pt-[8px] px-[24px]">
                    <div className="bg-white border border-black rounded-[12px] h-[40px] flex items-center justify-center">
                      <p className="text-[14px] font-semibold">View run sheet</p>
                    </div>
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
            <div className="flex-1 bg-[#f4f5e8] border border-black rounded-[12px] flex items-center justify-center">
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
            </div>

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
