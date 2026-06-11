import svgPaths from "./svg-edbic3jxed";

function HomeHeading() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-black text-center w-[360px]" data-name="home-heading">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px] w-full">Wedding event timeline</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">The important activities across 4 days.</p>
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section-01">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pb-[24px] pt-[80px] px-[6px] relative size-full">
          <HomeHeading />
        </div>
      </div>
    </div>
  );
}

function MenuList() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="menu-list">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="button">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">Master run sheet</p>
            </div>
          </div>
          <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Section5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section-03">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative size-full">
          <MenuList />
          <div className="bg-white flex-[1_0_0] h-[40px] min-w-px relative rounded-[12px]" data-name="button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">All vendor run sheets</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineDate() {
  return (
    <div className="bg-white h-[50px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="timeline-date">
      <div aria-hidden className="absolute border-b border-black border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Date_range">
            <div className="absolute bottom-[12.5%] left-[12.5%] right-[12.5%] rounded-[2px] top-1/4">
              <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
            </div>
            <div className="absolute bg-[#33363f] bottom-[58.33%] left-[12.5%] right-[12.5%] rounded-tl-[2px] rounded-tr-[2px] top-1/4" />
            <div className="absolute bottom-3/4 flex items-center justify-center left-[29.17%] right-[70.83%] top-[12.5%]" style={{ containerType: "size" }}>
              <div className="flex-none h-[148032000cqw] rotate-90 w-[100cqh]">
                <div className="relative size-full">
                  <div className="absolute inset-[-1px_-33.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
                      <path d="M1 1H4" id="Line 1" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-3/4 flex items-center justify-center left-[70.83%] right-[29.17%] top-[12.5%]" style={{ containerType: "size" }}>
              <div className="flex-none h-[148032000cqw] rotate-90 w-[100cqh]">
                <div className="relative size-full">
                  <div className="absolute inset-[-1px_-33.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
                      <path d="M1 1H4" id="Line 1" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
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
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Friday, 17 July 2026</p>
        </div>
      </div>
    </div>
  );
}

function TimelineItem() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
            <div className="absolute inset-[20.83%_16.67%]">
              <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                  <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
                </svg>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] min-w-px not-italic relative text-[16px] text-black">Flower delivery</p>
        </div>
      </div>
    </div>
  );
}

function TimelineItem1() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
            <div className="absolute inset-[20.83%_16.67%]">
              <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                  <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
                </svg>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] min-w-px not-italic relative text-[16px] text-black">Furniture delivery</p>
        </div>
      </div>
    </div>
  );
}

function TimelineItem2() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
            <div className="absolute inset-[20.83%_16.67%]">
              <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                  <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
                </svg>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] min-w-px not-italic relative text-[16px] text-black">Set up furniture</p>
        </div>
      </div>
    </div>
  );
}

function Tbc() {
  return (
    <div className="bg-[#ffd2cc] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="tbc">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">To be confirmed</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">4PM - wedding rehearsal with bridal party</p>
      <Tbc />
    </div>
  );
}

function TimelineItem3() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <Frame9 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="container">
      <TimelineDate />
      <TimelineItem />
      <TimelineItem1 />
      <TimelineItem2 />
      <TimelineItem3 />
    </div>
  );
}

function MenuList1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section-03">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <MenuList1 />
        </div>
      </div>
    </div>
  );
}

function TimelineDate1() {
  return (
    <div className="bg-white h-[50px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="timeline-date">
      <div aria-hidden className="absolute border-b border-black border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Date_range">
            <div className="absolute bottom-[12.5%] left-[12.5%] right-[12.5%] rounded-[2px] top-1/4">
              <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
            </div>
            <div className="absolute bg-[#33363f] bottom-[58.33%] left-[12.5%] right-[12.5%] rounded-tl-[2px] rounded-tr-[2px] top-1/4" />
            <div className="absolute bottom-3/4 flex items-center justify-center left-[29.17%] right-[70.83%] top-[12.5%]" style={{ containerType: "size" }}>
              <div className="flex-none h-[148032000cqw] rotate-90 w-[100cqh]">
                <div className="relative size-full">
                  <div className="absolute inset-[-1px_-33.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
                      <path d="M1 1H4" id="Line 1" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-3/4 flex items-center justify-center left-[70.83%] right-[29.17%] top-[12.5%]" style={{ containerType: "size" }}>
              <div className="flex-none h-[148032000cqw] rotate-90 w-[100cqh]">
                <div className="relative size-full">
                  <div className="absolute inset-[-1px_-33.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
                      <path d="M1 1H4" id="Line 1" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
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
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Saturday, 18 July 2026</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-black w-full">See the make up artists’ run sheet for full details on their timeline.</p>
          <div className="bg-black h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Make up artist run sheet</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">{`6AM - Make up artists arrive `}</p>
      <Container3 />
    </div>
  );
}

function TimelineItem4() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <Container2 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-black w-full">See the photographer’s run sheet for full details on their timeline.</p>
          <div className="bg-black h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Photographer run sheet</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">10AM - Photographer and videographer arrives</p>
      <Frame2 />
    </div>
  );
}

function TimelineItem5() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <Container4 />
      </div>
    </div>
  );
}

function TimelineItem6() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] min-w-px not-italic relative text-[16px] text-black">Celebrant, Ellen and Dylan arrive</p>
      </div>
    </div>
  );
}

function TimelineItem7() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] min-w-px not-italic relative text-[16px] text-black">Bridal party lunch break</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-black w-full">See the live band’s run sheet for full details on their timeline.</p>
          <div className="bg-black h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Live band run sheet</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">1:30PM - Live band arrives and sets up</p>
      <Frame4 />
    </div>
  );
}

function TimelineItem8() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <Frame3 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">2PM - Guests start to arrive</p>
      <div className="bg-white content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[100px] shrink-0" data-name="Component 1">
        <div className="relative shrink-0 size-[24px]" data-name="drink">
          <div className="absolute inset-[87.5%_37.5%_12.5%_37.5%]">
            <div className="absolute inset-[-1px_-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
                <path d="M1 1H7" id="Vector 119" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[12.5%] left-1/2 right-1/2 top-[66.67%]">
            <div className="absolute inset-[-20%_-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7">
                <path d="M1 6V1" id="Vector 120" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute border-2 border-[#33363f] border-solid inset-[33.33%_20.83%_29.17%_20.83%] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[1px] rounded-tr-[1px]" />
          <div className="absolute bottom-1/2 left-1/2 right-[20.83%] top-[12.5%]">
            <div className="absolute inset-[-10.32%_-5.31%_-11.11%_-14.29%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.37165 10.9287">
                <path d={svgPaths.p2d227210} fill="var(--stroke-0, #33363F)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Drinks available</p>
      </div>
    </div>
  );
}

function TimelineItem9() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <Frame1 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-black w-full">See the event’s bus run sheet for full details on their timeline.</p>
          <div className="bg-black h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Event bus run sheet</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">2:45PM - Last bus for guests to arrive</p>
      <Frame6 />
    </div>
  );
}

function TimelineItem10() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <Frame5 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[100px] shrink-0" data-name="Component 1">
        <div className="relative shrink-0 size-[24px]" data-name="Cancel_fill">
          <div className="absolute inset-[12.5%]" data-name="Subtract">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p37b4100} fill="var(--fill-0, #222222)" id="Subtract" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">{`No phones `}</p>
      </div>
      <div className="bg-white content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[100px] shrink-0" data-name="Component 1">
        <div className="relative shrink-0 size-[24px]" data-name="Cancel_fill">
          <div className="absolute inset-[12.5%]" data-name="Subtract">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p37b4100} fill="var(--fill-0, #222222)" id="Subtract" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">No drinks or food served</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-black w-full">See the ceremony timeline for full details.</p>
          <div className="bg-black h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Ceremony timeline</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">3PM - Ceremony starts</p>
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function TimelineItem11() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <Frame />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">3:30PM - Ceremony ends</p>
      <div className="bg-white content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[100px] shrink-0" data-name="Component 1">
        <div className="relative shrink-0 size-[24px]" data-name="drink">
          <div className="absolute inset-[87.5%_37.5%_12.5%_37.5%]">
            <div className="absolute inset-[-1px_-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
                <path d="M1 1H7" id="Vector 119" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[12.5%] left-1/2 right-1/2 top-[66.67%]">
            <div className="absolute inset-[-20%_-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7">
                <path d="M1 6V1" id="Vector 120" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute border-2 border-[#33363f] border-solid inset-[33.33%_20.83%_29.17%_20.83%] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[1px] rounded-tr-[1px]" />
          <div className="absolute bottom-1/2 left-1/2 right-[20.83%] top-[12.5%]">
            <div className="absolute inset-[-10.32%_-5.31%_-11.11%_-14.29%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.37165 10.9287">
                <path d={svgPaths.p2d227210} fill="var(--stroke-0, #33363F)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Drinks available</p>
      </div>
    </div>
  );
}

function TimelineItem12() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <Frame10 />
      </div>
    </div>
  );
}

function TimelineItem13() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] min-w-px not-italic relative text-[16px] text-black">3:50PM - Bridal party private photos</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[14px] left-[4px] top-[5px] w-[6px]">
      <div className="absolute inset-[0_-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
          <g id="Group 8735">
            <path d="M4 14V0" id="Vector 624" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
            <path d={svgPaths.p21287910} id="Vector 625" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
            <path d={svgPaths.p174d5b00} id="Vector 626" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[100px] shrink-0" data-name="Component 1">
        <div className="relative shrink-0 size-[24px]" data-name="drink">
          <div className="absolute inset-[87.5%_37.5%_12.5%_37.5%]">
            <div className="absolute inset-[-1px_-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
                <path d="M1 1H7" id="Vector 119" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[12.5%] left-1/2 right-1/2 top-[66.67%]">
            <div className="absolute inset-[-20%_-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7">
                <path d="M1 6V1" id="Vector 120" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute border-2 border-[#33363f] border-solid inset-[33.33%_20.83%_29.17%_20.83%] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[1px] rounded-tr-[1px]" />
          <div className="absolute bottom-1/2 left-1/2 right-[20.83%] top-[12.5%]">
            <div className="absolute inset-[-10.32%_-5.31%_-11.11%_-14.29%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.37165 10.9287">
                <path d={svgPaths.p2d227210} fill="var(--stroke-0, #33363F)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Drinks available</p>
      </div>
      <div className="bg-white content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[100px] shrink-0" data-name="Component 1">
        <div className="relative shrink-0 size-[24px]" data-name="burger">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+2px)] size-[12px] top-1/2">
            <div className="absolute inset-[-8.33%_-8.33%_-8.33%_16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0002 14">
                <path d={svgPaths.p2a29ee80} id="Ellipse 240" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <Group />
        </div>
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Food available</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-black w-full">See the reception timeline for full details.</p>
          <div className="bg-black h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Reception timeline</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">4PM - Reception starts</p>
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function TimelineItem14() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <Frame11 />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-start flex flex-wrap gap-y-[16px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[100px] shrink-0" data-name="Component 2">
        <div className="relative shrink-0 size-[24px]" data-name="Cancel_fill">
          <div className="absolute inset-[12.5%]" data-name="Subtract">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p37b4100} fill="var(--fill-0, #222222)" id="Subtract" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">No drinks or food served</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-black w-full">See the speeches timeline for full details.</p>
          <div className="bg-black h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Speeches timeline</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">6PM - Speeches</p>
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function TimelineItem15() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <Frame14 />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[14px] left-[4px] top-[5px] w-[6px]">
      <div className="absolute inset-[0_-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
          <g id="Group 8735">
            <path d="M4 14V0" id="Vector 624" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
            <path d={svgPaths.p21287910} id="Vector 625" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
            <path d={svgPaths.p174d5b00} id="Vector 626" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[100px] shrink-0" data-name="Component 1">
        <div className="relative shrink-0 size-[24px]" data-name="ice_cream_1">
          <div className="-translate-x-1/2 absolute h-[9px] left-1/2 top-[12px] w-[10px]">
            <div className="absolute inset-[-11.11%_-10%_-9.35%_-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0004 10.8413">
                <path d={svgPaths.p2921060} id="Ellipse 211" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute h-[9px] left-[5px] top-[3px] w-[14px]" data-name="Union">
            <div className="absolute inset-[-11.11%_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
                <path d={svgPaths.p2e75b500} fill="var(--stroke-0, #33363F)" id="Union" />
              </svg>
            </div>
          </div>
          <div className="absolute h-[0.655px] left-[14px] top-[7.84px] w-[3.732px]">
            <div className="absolute inset-[-152.67%_-26.8%_-152.64%_-26.79%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.73232 2.6554">
                <path d={svgPaths.p3673f800} id="Ellipse 222" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Desserts available</p>
      </div>
      <div className="bg-white content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[100px] shrink-0" data-name="Component 1">
        <div className="relative shrink-0 size-[24px]" data-name="burger">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+2px)] size-[12px] top-1/2">
            <div className="absolute inset-[-8.33%_-8.33%_-8.33%_16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0002 14">
                <path d={svgPaths.p2a29ee80} id="Ellipse 240" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <Group1 />
        </div>
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Food available</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-center justify-center leading-[1.4] not-italic p-[16px] relative size-full text-[14px] text-black">
          <p className="relative shrink-0 w-full">Sam and Andie’s first dance</p>
          <p className="relative shrink-0 w-full">Father-of-the-bride and bride dance</p>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">7PM - Dance performances</p>
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function TimelineItem16() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <Frame17 />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[14px] left-[4px] top-[5px] w-[6px]">
      <div className="absolute inset-[0_-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
          <g id="Group 8735">
            <path d="M4 14V0" id="Vector 624" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
            <path d={svgPaths.p21287910} id="Vector 625" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
            <path d={svgPaths.p174d5b00} id="Vector 626" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[100px] shrink-0" data-name="Component 1">
        <div className="relative shrink-0 size-[24px]" data-name="ice_cream_1">
          <div className="-translate-x-1/2 absolute h-[9px] left-1/2 top-[12px] w-[10px]">
            <div className="absolute inset-[-11.11%_-10%_-9.35%_-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0004 10.8413">
                <path d={svgPaths.p2921060} id="Ellipse 211" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute h-[9px] left-[5px] top-[3px] w-[14px]" data-name="Union">
            <div className="absolute inset-[-11.11%_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
                <path d={svgPaths.p2e75b500} fill="var(--stroke-0, #33363F)" id="Union" />
              </svg>
            </div>
          </div>
          <div className="absolute h-[0.655px] left-[14px] top-[7.84px] w-[3.732px]">
            <div className="absolute inset-[-152.67%_-26.8%_-152.64%_-26.79%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.73232 2.6554">
                <path d={svgPaths.p3673f800} id="Ellipse 222" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Desserts available</p>
      </div>
      <div className="bg-white content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[100px] shrink-0" data-name="Component 1">
        <div className="relative shrink-0 size-[24px]" data-name="burger">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+2px)] size-[12px] top-1/2">
            <div className="absolute inset-[-8.33%_-8.33%_-8.33%_16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0002 14">
                <path d={svgPaths.p2a29ee80} id="Ellipse 240" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <Group2 />
        </div>
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Food available</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">8PM - Dancefloor open</p>
      <Frame21 />
    </div>
  );
}

function TimelineItem17() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <Frame20 />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-black w-full">Last bus for guests is at 11:45pm to take them down to the bottom of the drive way where they can catch their organised transport home.</p>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">11:45PM - Reception ends</p>
      <Frame23 />
    </div>
  );
}

function TimelineItem18() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <Frame22 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">Midnight - Last bus home (bridal party only)</p>
    </div>
  );
}

function TimelineItem19() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="timeline-item">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <Frame24 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="container">
      <TimelineDate1 />
      <TimelineItem4 />
      <TimelineItem5 />
      <TimelineItem6 />
      <TimelineItem7 />
      <TimelineItem8 />
      <TimelineItem9 />
      <TimelineItem10 />
      <TimelineItem11 />
      <TimelineItem12 />
      <TimelineItem13 />
      <TimelineItem14 />
      <TimelineItem15 />
      <TimelineItem16 />
      <TimelineItem17 />
      <TimelineItem18 />
      <TimelineItem19 />
    </div>
  );
}

function MenuList2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container1 />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section-03">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <MenuList2 />
        </div>
      </div>
    </div>
  );
}

function EventTimelineButton() {
  return (
    <div className="bg-white h-[50px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="event-timeline-button">
      <div aria-hidden className="absolute border-b border-black border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Date_range">
            <div className="absolute bottom-[12.5%] left-[12.5%] right-[12.5%] rounded-[2px] top-1/4">
              <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
            </div>
            <div className="absolute bg-[#33363f] bottom-[58.33%] left-[12.5%] right-[12.5%] rounded-tl-[2px] rounded-tr-[2px] top-1/4" />
            <div className="absolute bottom-3/4 flex items-center justify-center left-[29.17%] right-[70.83%] top-[12.5%]" style={{ containerType: "size" }}>
              <div className="flex-none h-[148032000cqw] rotate-90 w-[100cqh]">
                <div className="relative size-full">
                  <div className="absolute inset-[-1px_-33.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
                      <path d="M1 1H4" id="Line 1" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-3/4 flex items-center justify-center left-[70.83%] right-[29.17%] top-[12.5%]" style={{ containerType: "size" }}>
              <div className="flex-none h-[148032000cqw] rotate-90 w-[100cqh]">
                <div className="relative size-full">
                  <div className="absolute inset-[-1px_-33.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
                      <path d="M1 1H4" id="Line 1" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
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
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Sunday, 19 July 2026</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-black w-full">See the list of things that needs to be done the day after the wedding. This is only for the bride, groom and support crew for Sunday.</p>
          <div className="bg-black h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Post-wedding to-do’s</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">Clean and pack up</p>
      <Container7 />
    </div>
  );
}

function MastErRunSheetButton() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="mast er-run-sheet-button">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <Container6 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-black w-full">The vendor can be contacted here if needed.</p>
          <div className="bg-black relative rounded-[12px] shrink-0 w-full" data-name="button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Contact Tweed Party Hire</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">Marquee and dance floor collected by vendor</p>
      <Container9 />
    </div>
  );
}

function MastErRunSheetButton1() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="mast er-run-sheet-button">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <Container8 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="container">
      <EventTimelineButton />
      <MastErRunSheetButton />
      <MastErRunSheetButton1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <line id="Line 5" stroke="var(--stroke-0, black)" strokeLinecap="round" x1="0.5" x2="359.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <line id="Line 5" stroke="var(--stroke-0, black)" strokeLinecap="round" x1="0.5" x2="359.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <line id="Line 5" stroke="var(--stroke-0, black)" strokeLinecap="round" x1="0.5" x2="359.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <line id="Line 5" stroke="var(--stroke-0, black)" strokeLinecap="round" x1="0.5" x2="359.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MenuList3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container5 />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section-03">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <MenuList3 />
        </div>
      </div>
    </div>
  );
}

function EventTimelineButton1() {
  return (
    <div className="bg-white h-[50px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="event-timeline-button">
      <div aria-hidden className="absolute border-b border-black border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Date_range">
            <div className="absolute bottom-[12.5%] left-[12.5%] right-[12.5%] rounded-[2px] top-1/4">
              <div aria-hidden className="absolute border-2 border-[#33363f] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
            </div>
            <div className="absolute bg-[#33363f] bottom-[58.33%] left-[12.5%] right-[12.5%] rounded-tl-[2px] rounded-tr-[2px] top-1/4" />
            <div className="absolute bottom-3/4 flex items-center justify-center left-[29.17%] right-[70.83%] top-[12.5%]" style={{ containerType: "size" }}>
              <div className="flex-none h-[148032000cqw] rotate-90 w-[100cqh]">
                <div className="relative size-full">
                  <div className="absolute inset-[-1px_-33.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
                      <path d="M1 1H4" id="Line 1" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-3/4 flex items-center justify-center left-[70.83%] right-[29.17%] top-[12.5%]" style={{ containerType: "size" }}>
              <div className="flex-none h-[148032000cqw] rotate-90 w-[100cqh]">
                <div className="relative size-full">
                  <div className="absolute inset-[-1px_-33.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
                      <path d="M1 1H4" id="Line 1" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
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
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Monday, 20 July 2026</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-black w-full">The vendor can be contacted here if needed.</p>
          <div className="bg-black h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">{`Contact {vendor name}`}</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">Furniture pick up by vendor</p>
      <Container12 />
    </div>
  );
}

function MastErRunSheetButton2() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="mast er-run-sheet-button">
      <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Send_hor_fill">
          <div className="absolute inset-[20.83%_16.67%]">
            <div className="absolute inset-[8.86%_9.34%_8.86%_9.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0458 11.5206">
                <path d={svgPaths.p63b1500} fill="var(--fill-0, #222222)" id="Vector 121" />
              </svg>
            </div>
          </div>
        </div>
        <Container11 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="container">
      <EventTimelineButton1 />
      <MastErRunSheetButton2 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <line id="Line 5" stroke="var(--stroke-0, black)" strokeLinecap="round" x1="0.5" x2="359.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <line id="Line 5" stroke="var(--stroke-0, black)" strokeLinecap="round" x1="0.5" x2="359.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <line id="Line 5" stroke="var(--stroke-0, black)" strokeLinecap="round" x1="0.5" x2="359.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <line id="Line 5" stroke="var(--stroke-0, black)" strokeLinecap="round" x1="0.5" x2="359.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MenuList4() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container10 />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section-03">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <MenuList4 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[392px]" data-name="main">
      <Section4 />
      <Section5 />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function BottomMenu() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[12px]" data-name="Bottom menu">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[13px] py-[12px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Home">
            <div className="absolute inset-[20.63%_20.83%_12.5%_20.83%]">
              <div className="absolute inset-[-6.23%_-7.14%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6674 30.0813">
                  <path d={svgPaths.p15dd9880} id="Rectangle 1" stroke="var(--stroke-2, #33363F)" strokeWidth="3.33333" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[62.5%_39.58%_12.5%_39.58%]">
              <div className="absolute inset-[-16.67%_-20%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13.3333">
                  <path d={svgPaths.pb626c00} id="Vector 3" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BottomMenu1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[12px]" data-name="Bottom menu">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center py-[14px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Date_range">
            <div className="absolute bottom-[12.5%] left-[12.5%] right-[12.5%] rounded-[2px] top-1/4">
              <div aria-hidden className="absolute border-[#33363f] border-[3.333px] border-solid inset-[-1.667px] pointer-events-none rounded-[3.667px]" />
            </div>
            <div className="absolute bg-[#33363f] bottom-[58.33%] left-[12.5%] right-[12.5%] rounded-tl-[3.333px] rounded-tr-[3.333px] top-1/4" />
            <div className="absolute bottom-3/4 flex items-center justify-center left-[29.17%] right-[70.83%] top-[12.5%]" style={{ containerType: "size" }}>
              <div className="flex-none h-[88819000cqw] rotate-90 w-[100cqh]">
                <div className="relative size-full">
                  <div className="absolute inset-[-1.67px_-33.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 3.33333">
                      <path d="M1.66667 1.66667H6.66667" id="Line 1" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="3.33333" />
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
                      <path d="M1.66667 1.66667H6.66667" id="Line 1" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="3.33333" />
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
        </div>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BottomMenu2() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[12px]" data-name="Bottom menu">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Basket_alt_3">
            <div className="absolute inset-[16.67%_58.33%_66.67%_16.67%]" data-name="Vector">
              <div className="absolute inset-[-25%_-16.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.0001">
                  <path d={svgPaths.p80fdc00} id="Vector" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeWidth="3.33333" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-[29.17%] left-1/4 right-1/4 top-[58.33%]">
              <div className="absolute inset-[-33.33%_-8.33%_-33.34%_-5.11%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6885 8.33345">
                  <path d={svgPaths.p313da380} id="Rectangle 41" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[33.33%_16.67%_41.67%_29.17%]">
              <div className="absolute inset-[-16.67%_-2.96%_-16.67%_-5.61%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5241 13.3333">
                  <path d={svgPaths.p2574f240} id="Vector 339" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeWidth="3.33333" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-[12.5%] left-[66.67%] right-1/4 top-[79.17%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                <circle cx="1.66667" cy="1.66667" fill="var(--fill-0, #222222)" id="Ellipse 167" r="1.66667" />
              </svg>
            </div>
            <div className="absolute inset-[79.17%_58.33%_12.5%_33.33%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                <circle cx="1.66667" cy="1.66667" fill="var(--fill-0, #222222)" id="Ellipse 167" r="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BottomMenu3() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[12px]" data-name="Bottom menu">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center py-[14px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Phone">
            <div className="absolute left-[5px] size-[30px] top-[5px]">
              <div className="absolute inset-[-3.46%_-3.46%_4.18%_4.18%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.7826 29.7826">
                  <path d={svgPaths.p1b4d2280} id="Vector 189" stroke="var(--stroke-0, #33363F)" strokeWidth="3.33333" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Grid() {
  return (
    <div className="content-stretch flex gap-[10px] h-[68px] items-center relative shrink-0 w-[360px]" data-name="Grid">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <BottomMenu />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <BottomMenu1 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <BottomMenu2 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <BottomMenu3 />
      </div>
    </div>
  );
}

export default function EventTimeline() {
  return (
    <div className="relative size-full" data-name="event-timeline">
      <div className="absolute bg-white content-stretch flex h-[869px] items-start left-0 overflow-clip pl-px top-0 w-[393px]" data-name="master-run-sheets" />
      <div className="-translate-x-1/2 absolute bg-white content-stretch flex h-[4293px] items-start left-1/2 overflow-x-clip overflow-y-auto pl-px top-0 w-[393px]" data-name="event-timeline">
        <Main />
      </div>
      <div className="-translate-x-1/2 absolute bg-white bottom-0 h-[88px] left-1/2 w-[393px]" data-name="bottom-menu">
        <div className="content-stretch flex items-start justify-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
          <Grid />
        </div>
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}