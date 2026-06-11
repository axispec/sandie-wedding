import { useState } from "react";

type TimelineEntry = {
  time: string;
  items: string[];
  button?: string;
  onButtonClick?: () => void;
};

type Props = {
  entries: TimelineEntry[];
  collapsible?: string;
  defaultOpen?: boolean;
};

export default function IndividualTimeline({ entries, collapsible, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  const rows = (
    <div className="w-full flex flex-col">
      {entries.map((entry, i) => (
        <div key={i} className="flex gap-[24px] px-[16px] py-[20px] border-b border-[#d4d4d4]">
          <div className="w-[80px] shrink-0">
            <p className="text-[16px] leading-[1.4]">{entry.time}</p>
          </div>
          <div className="flex-1 flex flex-col gap-[12px]">
            {entry.items.map((item, j) => (
              <p key={j} className="text-[16px] leading-[1.4]">{item}</p>
            ))}
            {entry.button && (
              <button
                onClick={entry.onButtonClick}
                className="border border-black rounded-[12px] h-[48px] flex items-center justify-center w-full mt-[4px]"
              >
                <span className="text-[14px] font-semibold">{entry.button}</span>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  if (!collapsible) return rows;

  return (
    <div className="w-full flex flex-col">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between px-[16px] py-[16px] border-b border-[#d4d4d4] w-full text-left"
      >
        <span className="text-[14px] font-semibold tracking-wide">{collapsible}</span>
        <span className="text-[18px] leading-none">{open ? "▲" : "▼"}</span>
      </button>
      {open && rows}
    </div>
  );
}
