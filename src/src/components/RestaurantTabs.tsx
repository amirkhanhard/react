import { ChevronDown, ChevronUp } from "lucide-react";
import Recommended from "./Recommended";

interface CustomProps {
  info: any;
  showItem:boolean;
  setShowItemIndex:any
}
export default function RestaurantTabs({ info, showItem, setShowItemIndex }: CustomProps) {
  const currInfo = info?.card?.card;
    // console.log(showItem);
  const title = currInfo?.title || "N/A";
//   if (!title) {
//     return;
//   }

//   const [showItem, setShowItem] = useState(false);

  return (
    <li className="list-row w-full">
      <div className="flex justify-between">
        <div className="text-lg font-bold uppercase  opacity-60">{title}</div>
        <button
          className="btn btn-square btn-ghost float-right"
          // onClick={setShowItemIndex}
          onClick={()=>{setShowItemIndex()}}
        >
          {!showItem ? <ChevronDown /> : <ChevronUp />}
        </button>
      </div>
      <div className="list-col-wrap text-xs">
        {showItem &&
          currInfo?.itemCards &&
          currInfo.itemCards.map((item: any, idx: number) => {
            return <Recommended key={"id_" + idx} itemCard={item} />;
          })}
      </div>
    </li>
  );
}
