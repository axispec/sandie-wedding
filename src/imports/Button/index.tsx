import svgPaths from "./svg-r8dfno13mi";
type ButtonProps = {
  className?: string;
  leftIcon?: boolean;
  type?: "primary" | "secondary" | "hover";
};

export default function Button({ className, leftIcon = false, type = "primary" }: ButtonProps) {
  const isLeftIcon = leftIcon;
  const isPrimaryAndLeftIcon = type === "primary" && leftIcon;
  return (
    <div className={className || `h-[40px] relative rounded-[12px] w-[151px] ${type === "primary" ? "bg-black" : type === "hover" ? "bg-[#eee]" : "bg-white"}`}>
      <div className={`content-stretch flex items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full ${isLeftIcon ? "gap-[8px]" : ""}`}>
        {!leftIcon && <p className={`[word-break:break-word] font-["Inter:Semi_Bold",sans-serif] font-semibold not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${type === "primary" && !leftIcon ? "leading-none text-white" : "leading-[normal] text-black"}`}>Label</p>}
        {isLeftIcon && (
          <>
            <div className="relative shrink-0 size-[18px]">
              <div className="absolute inset-[-3.46%_-3.46%_4.18%_4.18%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8696 17.8696">
                  <path d={svgPaths.p3690e500} id="Vector 189" stroke={isPrimaryAndLeftIcon ? "var(--stroke-0, white)" : "var(--stroke-0, #33363F)"} strokeWidth="2" />
                </svg>
              </div>
            </div>
            <p className={`[word-break:break-word] font-["Inter:Semi_Bold",sans-serif] font-semibold not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${isPrimaryAndLeftIcon ? "leading-none text-white" : "leading-[normal] text-black"}`}>Call Label</p>
          </>
        )}
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}