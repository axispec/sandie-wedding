type EventTimelineButtonProps = {
  className?: string;
  lastMenuItem?: boolean;
};

function EventTimelineButton({ className, lastMenuItem = false }: EventTimelineButtonProps) {
  const isLastMenuItem = lastMenuItem;
  return (
    <div className={className || `bg-white content-stretch flex flex-col gap-[12px] items-start justify-center relative w-[312px] ${isLastMenuItem ? "[word-break:break-word] font-medium leading-[normal] text-black" : "pb-[24px]"}`}>
      {!lastMenuItem && <div aria-hidden className="absolute border-b border-black border-dashed inset-0 pointer-events-none" />}
      <p className={`font-["Inter:Medium",sans-serif] not-italic relative shrink-0 text-[16px] whitespace-nowrap ${isLastMenuItem ? "" : "[word-break:break-word] font-medium leading-[normal] text-black"}`}>Name of dish</p>
      <p className={`font-["Inter:Medium_Italic",sans-serif] italic min-w-full relative shrink-0 text-[14px] w-[min-content] ${isLastMenuItem ? "" : "[word-break:break-word] font-medium leading-[normal] text-black"}`}>Ingredient list here</p>
    </div>
  );
}

export default function WeddingMenuDrinks({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white content-stretch flex items-start overflow-clip pl-px relative w-[393px]"} data-name="wedding-menu-drinks">
      <div className="bg-[#eee] content-stretch flex flex-col items-start pb-[120px] relative shrink-0 w-[392px]" data-name="main">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-[392px]" data-name="main">
          <div className="bg-white relative shrink-0 w-full" data-name="section-01">
            <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center pb-[24px] pt-[60px] px-[6px] relative size-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[360px]" data-name="home-heading">
                  <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center w-full">Wedding menu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pb-[60px] relative shrink-0 w-full" data-name="body">
          <div className="bg-[#eee] content-stretch flex items-center py-[12px] relative shrink-0 w-[392px]" data-name="menu-category-tab">
            <div aria-hidden className="absolute border-black border-solid border-t inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-[1_0_0] h-[46px] items-center min-w-px relative" data-name="menu-category-tab/tab3">
              <div className="flex-[1_0_0] h-full min-w-px relative" data-name="tab-container">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center px-[16px] relative size-full">
                    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full">
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
                          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Food</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] h-[46px] items-center min-w-px relative" data-name="menu-category-tab/food">
              <div className="flex-[1_0_0] h-full min-w-px relative" data-name="tab-container">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center px-[16px] relative size-full">
                    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
                          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Drinks</p>
                        </div>
                      </div>
                      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#eee] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="container">
            <div className="relative shrink-0 w-full" data-name="section-03">
              <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[16px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[18px] text-black text-center w-[min-content]">Wine</p>
                  <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
                    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
                      <div className="bg-white content-stretch flex flex-col gap-[12px] items-start justify-center pb-[24px] relative shrink-0 w-[312px]" data-name="event-timeline-button">
                        <div aria-hidden className="absolute border-b border-black border-dashed inset-0 pointer-events-none" />
                        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Name of drink</p>
                        <p className="[word-break:break-word] font-['Inter:Medium_Italic',sans-serif] font-medium italic leading-[normal] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]">Ingredient list here</p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[12px] items-start justify-center pb-[24px] relative shrink-0 w-[312px]" data-name="event-timeline-button">
                        <div aria-hidden className="absolute border-b border-black border-dashed inset-0 pointer-events-none" />
                        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Name of drink</p>
                        <p className="[word-break:break-word] font-['Inter:Medium_Italic',sans-serif] font-medium italic leading-[normal] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]">Ingredient list here</p>
                      </div>
                      <div className="[word-break:break-word] bg-white content-stretch flex flex-col font-medium gap-[12px] items-start justify-center leading-[normal] relative shrink-0 text-black w-[312px]" data-name="event-timeline-button">
                        <p className="font-['Inter:Medium',sans-serif] not-italic relative shrink-0 text-[16px] whitespace-nowrap">Name of drink</p>
                        <p className="font-['Inter:Medium_Italic',sans-serif] italic min-w-full relative shrink-0 text-[14px] w-[min-content]">Ingredient list here</p>
                      </div>
                    </div>
                    <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="section-03">
              <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[16px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[18px] text-black text-center w-[min-content]">Champagne</p>
                  <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
                    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
                      <div className="bg-white content-stretch flex flex-col gap-[12px] items-start justify-center pb-[24px] relative shrink-0 w-[312px]" data-name="event-timeline-button">
                        <div aria-hidden className="absolute border-b border-black border-dashed inset-0 pointer-events-none" />
                        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Name of drink</p>
                        <p className="[word-break:break-word] font-['Inter:Medium_Italic',sans-serif] font-medium italic leading-[normal] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]">Ingredient list here</p>
                      </div>
                      <div className="[word-break:break-word] bg-white content-stretch flex flex-col font-medium gap-[12px] items-start justify-center leading-[normal] relative shrink-0 text-black w-[312px]" data-name="event-timeline-button">
                        <p className="font-['Inter:Medium',sans-serif] not-italic relative shrink-0 text-[16px] whitespace-nowrap">Name of drink</p>
                        <p className="font-['Inter:Medium_Italic',sans-serif] italic min-w-full relative shrink-0 text-[14px] w-[min-content]">Ingredient list here</p>
                      </div>
                    </div>
                    <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="section-03">
              <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[16px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[18px] text-black text-center w-[min-content]">Cocktail</p>
                  <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
                    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
                      <div className="bg-white content-stretch flex flex-col gap-[12px] items-start justify-center pb-[24px] relative shrink-0 w-[312px]" data-name="event-timeline-button">
                        <div aria-hidden className="absolute border-b border-black border-dashed inset-0 pointer-events-none" />
                        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">The Maia</p>
                        <p className="[word-break:break-word] font-['Inter:Medium_Italic',sans-serif] font-medium italic leading-[normal] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]">Ingredient list here</p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[12px] items-start justify-center pb-[24px] relative shrink-0 w-[312px]" data-name="event-timeline-button">
                        <div aria-hidden className="absolute border-b border-black border-dashed inset-0 pointer-events-none" />
                        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">The Juniper</p>
                        <p className="[word-break:break-word] font-['Inter:Medium_Italic',sans-serif] font-medium italic leading-[normal] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]">Ingredient list here</p>
                      </div>
                      <div className="[word-break:break-word] bg-white content-stretch flex flex-col font-medium gap-[12px] items-start justify-center leading-[normal] relative shrink-0 text-black w-[312px]" data-name="event-timeline-button">
                        <p className="font-['Inter:Medium',sans-serif] not-italic relative shrink-0 text-[16px] whitespace-nowrap">The Romy</p>
                        <p className="font-['Inter:Medium_Italic',sans-serif] italic min-w-full relative shrink-0 text-[14px] w-[min-content]">Ingredient list here</p>
                      </div>
                    </div>
                    <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="section-03">
              <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[16px] relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[18px] text-black text-center w-[min-content]">Non-alcoholic</p>
                  <div className="bg-white relative rounded-[12px] shrink-0 w-[360px]" data-name="menu-list">
                    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
                      <div className="bg-white content-stretch flex flex-col gap-[12px] items-start justify-center pb-[24px] relative shrink-0 w-[312px]" data-name="event-timeline-button">
                        <div aria-hidden className="absolute border-b border-black border-dashed inset-0 pointer-events-none" />
                        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Still water</p>
                        <p className="[word-break:break-word] font-['Inter:Medium_Italic',sans-serif] font-medium italic leading-[normal] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]">Ingredient list here</p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[12px] items-start justify-center pb-[24px] relative shrink-0 w-[312px]" data-name="event-timeline-button">
                        <div aria-hidden className="absolute border-b border-black border-dashed inset-0 pointer-events-none" />
                        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Orange juice</p>
                        <p className="[word-break:break-word] font-['Inter:Medium_Italic',sans-serif] font-medium italic leading-[normal] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]">Ingredient list here</p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[12px] items-start justify-center pb-[24px] relative shrink-0 w-[312px]" data-name="event-timeline-button">
                        <div aria-hidden className="absolute border-b border-black border-dashed inset-0 pointer-events-none" />
                        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Coca Cola</p>
                        <p className="[word-break:break-word] font-['Inter:Medium_Italic',sans-serif] font-medium italic leading-[normal] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]">Ingredient list here</p>
                      </div>
                      <EventTimelineButton className="[word-break:break-word] bg-white content-stretch flex flex-col font-medium gap-[12px] items-start justify-center leading-[normal] relative shrink-0 text-black w-[312px]" lastMenuItem />
                    </div>
                    <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
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