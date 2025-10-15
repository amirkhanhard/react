import * as React from "react";
import Rating1 from "./components/Rating";
import BadgeVisibility from "./components/Badge";
import AlertDialogSlide from "./components/AlertDialogSlide";
import Variants from "./components/Variants";

export default function App() {

  return (
    <div style={{padding:"15px"}}>
      <Rating1></Rating1>
      <BadgeVisibility></BadgeVisibility>
      <AlertDialogSlide></AlertDialogSlide>
      <div style={{display:"flex",gap:"5px"}}>
        <Variants></Variants><Variants></Variants><Variants></Variants><Variants></Variants><Variants></Variants>
      </div>
    </div>
  );
}
