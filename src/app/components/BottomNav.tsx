import { Link, useLocation } from "react-router-dom";
import svgPaths from "../../imports/Home-2/svg-v62trlssuc";

const ACTIVE_BG = "bg-[#f4f5e8]";
const INACTIVE_BG = "bg-white hover:bg-[#eee] transition-colors";

function NavButton({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={`flex-1 ${active ? ACTIVE_BG : INACTIVE_BG} border border-black rounded-[12px] flex items-center justify-center`}
    >
      {children}
    </Link>
  );
}

function HomeIcon() {
  return (
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
  );
}

function CalendarIcon() {
  return (
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
  );
}

function ShoppingIcon() {
  return (
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
  );
}

function PhoneIcon() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <div className="absolute left-[5px] size-[30px] top-[5px]">
        <div className="absolute inset-[-3.46%_-3.46%_4.18%_4.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.7826 29.7826">
            <path d={svgPaths.p1b4d2280} stroke="#33363F" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function BottomNav() {
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const isCalendar = pathname === "/timeline";
  const isShopping = pathname === "/vendors" || pathname === "/wedding-menu" || pathname === "/wedding-drinks";
  const isPhone = pathname === "/run-sheets";

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-black h-[88px] flex items-center justify-center p-[8px] hidden">
      <div className="flex gap-[10px] max-w-[360px] w-full h-[68px]">
        <NavButton to="/" active={isHome}><HomeIcon /></NavButton>
        <NavButton to="/timeline" active={isCalendar}><CalendarIcon /></NavButton>
        <NavButton to="/vendors" active={isShopping}><ShoppingIcon /></NavButton>
        <NavButton to="/run-sheets" active={isPhone}><PhoneIcon /></NavButton>
      </div>
    </div>
  );
}
