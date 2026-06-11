import svgPaths from "./svg-shnqabucec";

function HomeHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[360px]" data-name="home-heading">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center w-full">Run sheets</p>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section-01">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pb-[16px] pt-[80px] px-[6px] relative size-full">
          <HomeHeading />
        </div>
      </div>
    </div>
  );
}

function Main1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[392px]" data-name="main">
      <Section2 />
    </div>
  );
}

function EventTimelineButton() {
  return (
    <div className="bg-white content-stretch flex gap-[20px] h-[60px] items-center relative rounded-[12px] shrink-0 w-full" data-name="event-timeline-button">
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
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Master run sheet</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <EventTimelineButton />
    </div>
  );
}

function MenuList() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[24px] relative rounded-[inherit] size-full">
        <Frame />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section-03">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pb-[24px] pt-[16px] px-[16px] relative size-full">
          <MenuList />
        </div>
      </div>
    </div>
  );
}

function EventTimelineButton1() {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="event-timeline-button">
      <div aria-hidden className="absolute border-b border-black border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Each vendor has their own run sheet</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">{`Mindy Makeup Artist & Co.`}</p>
    </div>
  );
}

function VendorName() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="vendor-name">
      <div className="relative shrink-0 size-[24px]" data-name="Favorites">
        <div className="absolute inset-[16.67%_16.67%_12.5%_16.67%]">
          <div className="absolute inset-[-5.88%_-6.25%_-5.3%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.9005">
              <path d={svgPaths.pa239180} id="Ellipse 41" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_33.33%_37.5%_33.33%]">
          <div className="absolute inset-[9.49%_-6.58%_-11.47%_-6.58%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.05354 8.15844">
              <path d={svgPaths.pcfd3600} id="Vector 15" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[360px]" data-name="container">
      <VendorName />
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

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">Honeybee Celebrancy</p>
    </div>
  );
}

function VendorName1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="vendor-name">
      <div className="relative shrink-0 size-[24px]" data-name="Favorite">
        <div className="absolute inset-[4.17%_4.17%_12.5%_4.17%]">
          <div className="absolute inset-[14.29%_3.68%_-4.07%_3.68%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3803 17.9567">
              <path d={svgPaths.pdcbc300} id="Vector 15" stroke="var(--stroke-0, #33363F)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Container3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[360px]" data-name="container">
      <VendorName1 />
    </div>
  );
}

function MenuList2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container2 />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">Sam Wyper Photography</p>
    </div>
  );
}

function VendorName2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="vendor-name">
      <div className="relative shrink-0 size-[24px]" data-name="Camera">
        <div className="absolute inset-[16.67%_12.5%]">
          <div className="absolute inset-[-6.25%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
              <path d={svgPaths.p223773c0} id="Rectangle 1" stroke="var(--stroke-0, #222222)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%_33.33%_29.17%_33.33%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" id="Ellipse 55" r="3" stroke="var(--stroke-0, #222222)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Container5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[360px]" data-name="container">
      <VendorName2 />
    </div>
  );
}

function MenuList3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container4 />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">Fiddle Fig Films</p>
    </div>
  );
}

function VendorName3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="vendor-name">
      <div className="relative shrink-0 size-[24px]" data-name="Video">
        <div className="absolute bottom-[29.17%] flex items-center justify-center left-[33.33%] right-1/4 top-[29.17%]" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full">
              <div className="absolute inset-[-2.61%_-10%_-2.61%_2.36%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7639 10.5224">
                  <path d={svgPaths.pba6c500} id="Vector 10" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[12.5%]">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" id="Ellipse 47" r="9" stroke="var(--stroke-0, #222222)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Container7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[360px]" data-name="container">
      <VendorName3 />
    </div>
  );
}

function MenuList4() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container6 />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">{`Gareth Mewes & Co.`}</p>
    </div>
  );
}

function VendorName4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="vendor-name">
      <div className="relative shrink-0 size-[24px]" data-name="Music_fill">
        <div className="absolute inset-[16.67%_20.83%_12.5%_16.67%]">
          <div className="absolute inset-[-2.78%_-6.67%_-3.3%_-6.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0001 18.0338">
              <g id="Vector 72">
                <path clipRule="evenodd" d={svgPaths.p217bee80} fill="var(--fill-0, #222222)" fillRule="evenodd" />
                <path d={svgPaths.p2cb41100} stroke="var(--stroke-0, #222222)" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Container9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[360px]" data-name="container">
      <VendorName4 />
    </div>
  );
}

function MenuList5() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container8 />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
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

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">Bespoke Catering</p>
    </div>
  );
}

function VendorName5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="vendor-name">
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
      <Container11 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[360px]" data-name="container">
      <VendorName5 />
    </div>
  );
}

function MenuList6() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container10 />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[16px] text-black w-full">Gosles Bus Service</p>
    </div>
  );
}

function VendorName6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="vendor-name">
      <div className="relative shrink-0 size-[24px]" data-name="Road_alt_fill">
        <div className="absolute bottom-1/4 left-[16.67%] right-[70.83%] top-[16.67%]">
          <div className="absolute inset-[-7.14%_-33.34%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00041 16.0004">
              <path d={svgPaths.p3ee7e400} id="Vector 435" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 flex items-center justify-center left-[70.83%] right-[16.67%] top-[16.67%]" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full">
              <div className="absolute inset-[-7.14%_-33.34%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00041 16.0004">
                  <path d={svgPaths.p3ee7e400} id="Vector 438" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[54.17%] left-1/2 right-1/2 top-[37.5%]">
          <div className="absolute inset-[-50%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
              <path d="M1 3V1" id="Vector 437" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-1/2 right-1/2 top-[16.67%]">
          <div className="absolute inset-[-50%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
              <path d="M1 3V1" id="Vector 437" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[56.25%_33.33%_8.33%_33.33%]">
          <div className="absolute inset-[7.93%_8.62%_9.77%_8.62%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.62145 6.99525">
              <path d={svgPaths.p16861600} fill="var(--fill-0, #222222)" id="Vector 361" />
            </svg>
          </div>
        </div>
      </div>
      <Container13 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[360px]" data-name="container">
      <VendorName6 />
    </div>
  );
}

function MenuList7() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container12 />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="section-03">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pb-[24px] pt-[16px] px-[16px] relative size-full">
          <MenuList1 />
          <MenuList2 />
          <MenuList3 />
          <MenuList4 />
          <MenuList5 />
          <MenuList6 />
          <MenuList7 />
        </div>
      </div>
      <div aria-hidden className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MenuList8() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[18px] text-black text-center w-full">Looking for a simple time for the wedding day?</p>
        <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="button">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">Wedding event timeline</p>
            </div>
          </div>
          <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section-03">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[24px] relative size-full">
          <MenuList8 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[392px]" data-name="main">
      <Main1 />
      <Section3 />
      <EventTimelineButton1 />
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

export default function RunSheetList() {
  return (
    <div className="relative size-full" data-name="run-sheet-list">
      <div className="-translate-x-1/2 absolute bg-white content-stretch flex items-start left-1/2 overflow-clip pb-[120px] pl-px top-0 w-[393px]" data-name="run-sheets">
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