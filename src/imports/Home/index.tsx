import svgPaths from "./svg-qxrxzmskux";

function HomeHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 text-[24px] w-[360px]" data-name="home-heading">
      <p className="relative shrink-0 w-full">Sam and Andie</p>
      <p className="relative shrink-0 w-full">{` are getting married!`}</p>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section-01">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-center leading-[normal] not-italic pb-[24px] pt-[60px] px-[6px] relative size-full text-black text-center">
          <HomeHeading />
          <p className="min-w-full relative shrink-0 text-[16px] w-[min-content]">Saturday, 18 July, 2026</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[6px] items-center leading-[normal] not-italic relative shrink-0 text-black text-center w-full" data-name="container">
      <p className="relative shrink-0 text-[40px] w-full">43</p>
      <p className="relative shrink-0 text-[16px] w-full">days to go</p>
    </div>
  );
}

function EventCoundown() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="event-coundown">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
          <Container />
        </div>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[6px] items-center leading-[normal] not-italic relative shrink-0 text-black text-center w-full">
      <p className="relative shrink-0 text-[24px] w-full">108</p>
      <p className="relative shrink-0 text-[16px] w-full">attending</p>
    </div>
  );
}

function Col() {
  return (
    <div className="bg-white justify-self-stretch relative rounded-[12px] self-start shrink-0" data-name="col 01">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
          <Frame />
        </div>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[6px] items-center leading-[normal] not-italic relative shrink-0 text-black text-center w-full">
      <p className="relative shrink-0 text-[24px] w-full">13</p>
      <p className="relative shrink-0 text-[16px] w-full">vendors</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white justify-self-stretch relative rounded-[12px] self-start shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
          <Frame2 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Grid() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-name="grid">
      <Col />
      <Frame1 />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[360px]" data-name="data">
      <EventCoundown />
      <Grid />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section-02">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[6px] py-[16px] relative size-full">
          <Data />
        </div>
      </div>
    </div>
  );
}

function EventTimelineButton() {
  return (
    <div className="bg-white content-stretch flex gap-[20px] h-[60px] items-center relative rounded-[12px] shrink-0 w-full" data-name="event-timeline-button">
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
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Event timeline</p>
    </div>
  );
}

function MasterRunSheetButton() {
  return (
    <div className="bg-white content-stretch flex gap-[20px] h-[60px] items-center relative shrink-0 w-full" data-name="master-run-sheet-button">
      <div className="relative shrink-0 size-[24px]" data-name="File_dock">
        <div className="absolute inset-[12.5%_20.83%]">
          <div className="absolute inset-[-5.56%_-7.15%_-5.56%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0005 20.0005">
              <path d={svgPaths.p4372410} id="Rectangle 1" stroke="var(--stroke-3, #33363F)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[54.17%_37.5%_45.83%_37.5%]">
          <div className="absolute inset-[-1px_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
              <path d="M1 1H7" id="Vector 55" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_45.83%_29.17%_37.5%]">
          <div className="absolute inset-[-1px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
              <path d="M1 1H5" id="Vector 58" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_20.83%_62.5%_54.17%]">
          <div className="absolute inset-[0_0_-16.67%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.00001 7.00001">
              <path d={svgPaths.p3810dc00} id="Rectangle 2" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Run sheets</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex gap-[20px] h-[60px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Basket_alt_3">
        <div className="absolute inset-[16.67%_58.33%_66.67%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-25%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 6.00008">
              <path d={svgPaths.p1859da00} id="Vector" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[29.17%] left-1/4 right-1/4 top-[58.33%]">
          <div className="absolute inset-[-33.33%_-8.33%_-33.34%_-5.11%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6131 5.00007">
              <path d={svgPaths.p8b6ca00} id="Rectangle 41" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_16.67%_41.67%_29.17%]">
          <div className="absolute inset-[-16.67%_-2.96%_-16.67%_-5.61%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1145 8">
              <path d={svgPaths.p2afa4800} id="Vector 339" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-[66.67%] right-1/4 top-[79.17%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, #222222)" id="Ellipse 167" r="1" />
          </svg>
        </div>
        <div className="absolute inset-[79.17%_58.33%_12.5%_33.33%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <circle cx="1" cy="1" fill="var(--fill-0, #222222)" id="Ellipse 167" r="1" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Vendors</p>
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

function Frame4() {
  return (
    <div className="bg-white content-stretch flex gap-[17px] h-[60px] items-center relative shrink-0 w-full">
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
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Wedding menu</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex gap-[17px] h-[60px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Phone">
        <div className="absolute left-[3px] size-[18px] top-[3px]">
          <div className="absolute inset-[-3.46%_-3.46%_4.18%_4.18%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8696 17.8696">
              <path d={svgPaths.p3690e500} id="Vector 189" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Important contacts</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white content-stretch flex gap-[17px] h-[60px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="GIft">
        <div className="absolute inset-[33.33%_12.5%_16.67%_12.5%]">
          <div className="absolute inset-[-8.33%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
              <path d={svgPaths.p1e9a4f00} id="Rectangle 1" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[54.17%_20.83%_45.83%_20.83%]">
          <div className="absolute inset-[-1px_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 2">
              <path d="M1 1H15" id="Vector 3" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[16.67%] flex items-center justify-center left-1/2 right-1/2 top-[29.17%]" style={{ containerType: "size" }}>
          <div className="flex-none h-[419430000cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_-7.69%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 2">
                  <path d="M1 1H14" id="Vector 4" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[66.67%] left-[20.83%] right-1/2 top-[12.5%]">
          <div className="absolute inset-[-6.36%_-14.29%_-20.01%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.31816">
              <path d={svgPaths.p1e754ec0} id="Vector 208" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[66.67%] flex items-center justify-center left-1/2 right-[20.83%] top-[12.5%]" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full">
              <div className="absolute inset-[-6.36%_-14.29%_-20.01%_-14.29%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.31816">
                  <path d={svgPaths.p1e754ec0} id="Vector 209" stroke="var(--stroke-0, #33363F)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Wedding gifts</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <EventTimelineButton />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 324 1">
            <line id="Line 3" stroke="var(--stroke-0, black)" strokeLinecap="round" x1="0.5" x2="323.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <MasterRunSheetButton />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 324 1">
            <line id="Line 3" stroke="var(--stroke-0, black)" strokeLinecap="round" x1="0.5" x2="323.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame3 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 324 1">
            <line id="Line 3" stroke="var(--stroke-0, black)" strokeLinecap="round" x1="0.5" x2="323.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame4 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 324 1">
            <line id="Line 3" stroke="var(--stroke-0, black)" strokeLinecap="round" x1="0.5" x2="323.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame6 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 324 1">
            <line id="Line 3" stroke="var(--stroke-0, black)" strokeLinecap="round" x1="0.5" x2="323.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function MenuList() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[18px] relative rounded-[inherit] size-full">
        <Frame5 />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section-03">
      <div className="flex flex-row items-center overflow-x-clip overflow-y-auto rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <MenuList />
        </div>
      </div>
    </div>
  );
}

function EventTimelineButton1() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[12px] shrink-0 w-full" data-name="event-timeline-button">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-px not-italic relative text-[16px] text-black text-center">More details and FAQs are available on the wedding website.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <EventTimelineButton1 />
    </div>
  );
}

function MenuList1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip px-[18px] py-[16px] relative rounded-[inherit] size-full">
        <Frame8 />
        <a className="bg-white cursor-pointer h-[40px] relative rounded-[12px] shrink-0 w-full" href="https://samandandieswedding.webflow.io/" target="_blank" data-name="button">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">Wedding website</p>
            </div>
          </div>
          <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
        </a>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section-03">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <MenuList1 />
        </div>
      </div>
    </div>
  );
}

function EventTimelineButton2() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[12px] shrink-0" data-name="event-timeline-button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black text-center w-[324px]">Venue location:</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <EventTimelineButton2 />
    </div>
  );
}

function EventTimelineButton3() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[12px] shrink-0 w-full" data-name="event-timeline-button">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[16px] text-black text-center">
        181 Cabbage Gum Road,
        <br aria-hidden />
        Cudgera Creek NSW 2484
      </p>
    </div>
  );
}

function MenuList2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip px-[18px] py-[16px] relative rounded-[inherit] size-full">
        <Frame9 />
        <EventTimelineButton3 />
        <a className="bg-white cursor-pointer h-[40px] relative rounded-[12px] shrink-0 w-full" href="https://maps.app.goo.gl/1TvgjDNykD8wfwrr7" target="_blank" data-name="button">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">View in Google Maps</p>
            </div>
          </div>
          <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
        </a>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section-03">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <MenuList2 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative shrink-0 w-[392px]" data-name="main">
      <Section2 />
      <Section3 />
      <Section4 />
      <Section />
      <Section1 />
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

function Grid1() {
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

export default function Home() {
  return (
    <div className="relative size-full" data-name="home">
      <div className="absolute bg-white content-stretch flex items-start left-0 overflow-clip pb-[120px] pl-px top-0 w-[393px]" data-name="home">
        <Main />
      </div>
      <div className="-translate-x-1/2 absolute bg-white bottom-0 h-[88px] left-1/2 w-[393px]" data-name="bottom-menu">
        <div className="content-stretch flex items-start justify-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
          <Grid1 />
        </div>
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}