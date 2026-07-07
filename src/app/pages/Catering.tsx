import { useParams, Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import IndividualTimeline from "../components/IndividualTimeline";

const entries = [
  { time: "1:00pm", items: ["Arrive at the venue and set up in the cabana area (or whatever time you think is early enough)"] },
  { time: "2:00pm", items: ["Guests gradually start arriving", "Serve guests bubbly and 2x cold canapes on arrival", "Bar is not open yet"], bold: [false, false, true] },
  { time: "2:45pm", items: ["Ceremony begins (or in the follow 15 mins)"] },
  { time: "3:30pm", items: ["Approx. ceremony ends", "Bar opens"], bold: [false, true] },
  { time: "4:00pm", items: ["Three more bite sized canapes"] },
  { time: "4:30pm", items: ["Three substantial canapes"] },
  { time: "5:00pm", items: ["Pizzas and then pasta"] },
  { time: "6:00pm", items: ["Speeches (Food service has concluded ~10 minutes prior to this)"] },
  { time: "6:30pm", items: ["Serve desserts", "Tiramisu tower must be ready by 6:30pm for photographs"], bold: [false, true] },
  { time: "8:00pm", items: ["Set up leftovers in the pavilion"] },
  { time: "11:00pm", items: ["Last call for drinks"] },
];

type Tab = "timeline" | "food" | "drinks";
const TABS: Tab[] = ["timeline", "food", "drinks"];

export default function Catering() {
  const { tab } = useParams<{ tab?: string }>();
  const activeTab: Tab = TABS.includes(tab as Tab) ? (tab as Tab) : "timeline";

  return (
    <div className="relative size-full bg-white overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-[120px]">
          <div className="flex flex-col items-center w-full">

            {/* Back arrow */}
            <div className="w-full flex justify-center pt-[60px] px-[16px]">
              <div className="max-w-[360px] w-full">
                <Link to="/" className="text-[24px] leading-none">&#8592;</Link>
              </div>
            </div>

            {/* Header */}
            <div className="bg-white w-full flex justify-center pt-[12px] pb-[16px] px-[16px]">
              <div className="flex flex-col items-center gap-[4px] max-w-[360px] w-full">
                <p className="text-[24px] font-medium text-center">Caterer</p>
                <p className="text-[14px] text-[#666] text-center">Bespoke Catering</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white w-full flex justify-center py-[8px] px-[16px]">
              <div className="flex gap-[8px] max-w-[360px] w-full">
                {TABS.map((t) => (
                  <Link
                    key={t}
                    to={t === "timeline" ? "/timeline/catering" : `/timeline/catering/${t}`}
                    className={`flex-1 h-[40px] rounded-[12px] border border-black flex items-center justify-center transition-colors ${activeTab === t ? "bg-black text-white" : "bg-white text-black hover:bg-[#eee]"}`}
                  >
                    <span className="text-[14px] font-semibold capitalize">{t}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Content */}
            {activeTab === "timeline" && (
              <div className="w-full flex justify-center px-[16px] py-[8px]">
                <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                  <IndividualTimeline entries={entries} />
                </div>
              </div>
            )}

            {activeTab === "food" && (
              <div className="w-full flex justify-center px-[16px] py-[8px]">
                <div className="max-w-[360px] w-full flex flex-col gap-[8px]">
                  {[
                    {
                      section: "Bite Sized Canapés",
                      items: [
                        { name: "Pork belly skewer with tamarind, caramel, and toasted sesame", tags: ["gf", "df"] },
                        { name: "Smoked duck with beetroot and witlof", tags: ["gf", "df"] },
                        { name: "Rare beef toasts with dijonnaise, smoked onion and watercress", tags: ["gf", "df"] },
                        { name: "Chargrilled eggplant za'atar with cashew cheese", tags: ["v", "gf"] },
                        { name: "Smoked kingfish tartlet with radish remoulade", tags: [] },
                      ],
                    },
                    {
                      section: "Substantial Canapés",
                      items: [
                        { name: "Vodka king prawn gnocchi", tags: [] },
                        { name: "Sticky pork bao buns with toasted sesame, macadamia and papaya salad", tags: [] },
                        { name: "Black bean tacos with Pico de Gallo salsa and guacamole", tags: ["v", "gf"] },
                        { name: "Duck and mushroom spring rolls with black vinegar sauce", tags: ["df"] },
                      ],
                    },
                    {
                      section: "Pizzas",
                      items: [
                        { name: "Salumi sopressa, ricotta, hot honey and oregano", tags: [] },
                        { name: "Chicken Genovese", tags: [] },
                        { name: "Potato and caramelised onion", tags: [] },
                        { name: "Prawn, capers, chilli, garlic, provolone, cherry tomatoes and rocket", tags: [] },
                        { name: "Pumpkin, zucchini, macadamia pesto and vegan mozzarella", tags: ["v"] },
                      ],
                    },
                    {
                      section: "Dessert",
                      items: [
                        { name: "Tiramisu", tags: [] },
                        { name: "Biscoff gelato", tags: [] },
                        { name: "Lemon sorbet", tags: [] },
                      ],
                    },
                  ].map(({ section, items }) => (
                    <div key={section} className="bg-white border border-black rounded-[12px] overflow-hidden">
                      <div className="px-[20px] py-[14px] border-b border-black">
                        <p className="text-[16px] font-semibold">{section}</p>
                      </div>
                      <div className="flex flex-col divide-y divide-[#e5e5e5]">
                        {items.map((item, i) => (
                          <div key={i} className="px-[20px] py-[14px] flex items-start justify-between gap-[12px]">
                            <p className="text-[14px] leading-[1.5] flex-1">{item.name}</p>
                            {item.tags.length > 0 && (
                              <div className="flex gap-[4px] flex-wrap justify-end shrink-0">
                                {item.tags.map((tag) => (
                                  <span key={tag} className="text-[11px] font-medium text-[#666] border border-[#ccc] rounded-full px-[6px] py-[2px] uppercase">{tag}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "drinks" && (
              <div className="w-full flex justify-center px-[16px] py-[8px]">
                <div className="max-w-[360px] w-full">
                  <p className="text-[16px] text-[#666]">Drinks menu coming soon.</p>
                </div>
              </div>
            )}

          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
}
