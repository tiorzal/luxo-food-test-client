import React, { useEffect } from "react";

export default function Luckysheet() {
  useEffect(() => {
    const luckysheet = window.luckysheet;
    luckysheet.create({
      container: "luckysheet",
      plugins: ["chart"],
    });
  }, []);

  return <div id="luckysheet" style={luckyCss}></div>;
}

const luckyCss = {
  marginTop: "56px",
  padding: "0px",
  position: "absolute",
  width: "100%",
  height: "100%",
  left: "0px",
  top: "0px",
};
