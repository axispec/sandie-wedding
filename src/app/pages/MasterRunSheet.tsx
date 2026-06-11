import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import IndividualTimeline from "../components/IndividualTimeline";

const morningEntries = [
  { time: "5:00am", items: ["Bride and bridal party wake up"] },
  { time: "5:15am", items: ["Bridesmaids travel to venue"] },
  { time: "5:30am", items: ["Bridesmaids arrive at the venue (at the Pavillion)"] },
  { time: "5:45am", items: ["Make up artists team arrive and set up in the Pavillion", "Organise food for brides before make up"] },
  { time: "6:00am", items: ["Make up artists team start", "👤 Lu", "👤 Bekk", "👤 Clare", "To be confirmed"] },
  { time: "7:00am", items: ["Make up artists team", "👤 Alex", "👤 Michelle", "👤 Jess", "To be confirmed"] },
  { time: "8:00am", items: ["Make up artists team", "👤 Cobie (flower girl hair only)", "👤 Jacque", "👤 Jules", "To be confirmed"] },
  { time: "9:00am", items: ["Make up artists team", "👤 Andie (bride)", "👤 Katie", "👤 Ingrid", "To be confirmed"] },
  { time: "10:00am", items: ["Make up artists team", "👤 Bridesmaids - touch ups", "👤 Bridesmaids - touch ups", "👤 Bridesmaids - touch ups", "To be confirmed"] },
  { time: "10:30am", items: ["Make up artists team", "👤 Andie - touch ups", "👤 Bridesmaids - touch ups", "👤 Bridesmaids - touch ups", "Groom starts to get ready", "Groomsmen start to arrive with brunch, treats and coffee"] },
  { time: "10:45am", items: ["Photographer and videographer arrive"] },
  { time: "11:00am", items: ["Photographer and videographer start to capture getting ready moments"] },
  { time: "11:15am", items: ["Photographer and videographer capturing groom party final dressing and details"] },
  { time: "12:00pm", items: ["Vacate the guest bedroom"] },
  { time: "12:15pm", items: ["Bride and bridesmaids getting ready - (matching outfits?)"] },
  { time: "12:30pm", items: ["Bride and mother-of-the-bride - put the bride's dress on (photos and videos)", "Father-of-the-bride, Jun to wait with Neay, Jules and the groom party"] },
  { time: "1:30pm", items: ["Gareth with live band arrives and sets up"] },
  { time: "1:40pm", items: ["First looks: Bride and bridesmaids"] },
  { time: "1:50pm", items: ["First looks: Bride and father-of-the-bride"] },
  { time: "1:55pm", items: ["First looks: Bride and groom"] },
];

const ceremonyEntries = [
  {
    time: "2:00pm",
    items: ["Private vows", "Guests start to gather and board shuttle buses, prepared to transport up to the property/venue"],
  },
  {
    time: "2:15pm",
    items: ["Bridal party photos - away from guests", "First guests arrive to the property", "Shuttle bus transports the guests every 10 minutes", "Alcohol served", "🍸 Drinks available"],
  },
  {
    time: "2:45pm",
    items: ["Sam and Kelly prepare for the ceremony", "Main house is closed off", "Groom and groomsmen wait at the alter", "Bride, bridesmaids, flower girls, ring bearers, father-of-the-bride and dogs with Dylan prepare for procession in the main house"],
  },
  { time: "3:00pm", items: ["Ceremony starts", "Live band plays the processional song"] },
  { time: "3:30pm", items: ["Ceremony ends", "Live band plays the recessional song"] },
  { time: "3:35pm", items: ["Recessional, hugs, congratulations and guest interactions"] },
  { time: "3:50pm", items: ["Sam and Andie, with photographer and videographer"] },
];

const receptionEntries = [
  { time: "4:00pm", items: ["Cocktail hour begins", "Food starts to be served", "Alcohol served", "Live band plays their set"] },
  { time: "4:50pm", items: ["Bridal party photos"] },
  { time: "5:08pm", items: ["Sam and Andie, photographer and videographer sunset portraits"] },
  { time: "5:20pm", items: ["Couple rejoins the guests"] },
  { time: "5:45pm", items: ["Live band plays last song", "To be confirmed"] },
  {
    time: "5:50pm",
    items: ["MC Julian and Kyle start to bring everyone together and introduce themselves and thanks the live band for performing", "Live band packs up to leave"],
  },
  { time: "6:00pm", items: ["Speeches", "👤 Jun and Jacque", "👤 Reay and Jules", "👤 Bekk Silva", "👤 Adam Webber"] },
  { time: "6:30pm", items: ["Sam and Andie, photographer and videographer with tiramisu tower", "Start serving desserts"] },
  { time: "7:00pm", items: ["Sam and Andie's first dance as a married couple"] },
  { time: "7:15pm", items: ["Father-daughter dance"] },
  { time: "7:30pm", items: ["Dancefloor opens up", "Chris Verner - DJ", "To be confirmed"] },
  { time: "8:00pm", items: ["Caterers pack up and prepare to depart", "To be confirmed"] },
  { time: "8:30pm", items: ["KatieKarmaa", "To be confirmed"] },
  { time: "9:00pm", items: ["Photographer and videographer pack up and leave"] },
  { time: "9:30pm", items: ["3rd DJ?", "To be confirmed"] },
  { time: "10:30pm", items: ["4th DJ or Spotify playlist", "To be confirmed"] },
  { time: "11:00pm", items: ["Last call for drinks"] },
  { time: "11:30pm", items: ["Last dancefloor song"] },
  { time: "11:45pm", items: ["Last call for shuttle bus"] },
  { time: "12:00am", items: ["Shuttle bus for the bridal party back to their accommodation"] },
];

export default function MasterRunSheet() {
  const navigate = useNavigate();

  return (
    <div className="relative size-full bg-white overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-[120px]">
          <div className="flex flex-col items-center w-full">

            {/* Back arrow */}
            <div className="w-full flex justify-center pt-[60px] px-[16px]">
              <div className="max-w-[360px] w-full">
                <button onClick={() => navigate(-1)} className="text-[24px] leading-none">&#8592;</button>
              </div>
            </div>

            {/* Header */}
            <div className="w-full flex justify-center pt-[12px] pb-[16px] px-[16px]">
              <div className="max-w-[360px] w-full">
                <p className="text-[24px] font-medium">Master run sheet</p>
              </div>
            </div>

            {/* Morning prep */}
            <div className="w-full flex justify-center px-[16px] pb-[8px]">
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <IndividualTimeline entries={morningEntries} collapsible="MORNING PREP (5am-2pm)" />
              </div>
            </div>

            {/* Ceremony */}
            <div className="w-full flex justify-center px-[16px] pb-[8px]">
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <IndividualTimeline entries={ceremonyEntries} collapsible="CEREMONY (2pm-4pm)" />
              </div>
            </div>

            {/* Reception */}
            <div className="w-full flex justify-center px-[16px] pb-[16px]">
              <div className="bg-white border border-black rounded-[12px] max-w-[360px] w-full overflow-hidden">
                <IndividualTimeline entries={receptionEntries} collapsible="RECEPTION (4pm-midnight)" />
              </div>
            </div>

          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
}
