import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { SAVE } from "../query";

export default function Luckysheet({ data }) {
  const luckysheet = window.luckysheet;

  //mutation function to save the data into database
  const [saveData] = useMutation(SAVE, {
    context: {
      headers: {
        token: localStorage.getItem('token')
      }
    }
  })

  //a use effect function to create the sheet after the data is fetched
  useEffect(() => {
      
      luckysheet.create({
        container: "luckysheet",
        title: `${data.title}`,
        data: [
          {
            name: "Cell",
            color: "",
            index: 0,
            status: 1,
            order: 0,
            hide: 0,
            row: 36,
            column: 26,
            defaultRowHeight: 19,
            defaultColWidth: 73,
            celldata: [],
            config: {
              merge: {},
              rowlen: {},
              columnlen: {},
              rowhidden: {},
              colhidden: {},
              borderInfo: {},
              authority: {},
            },
            scrollLeft: 0,
            scrollTop: 315,
            luckysheet_select_save: [],
            calcChain: [],
            isPivotTable: false,
            pivotTable: {},
            filter_select: {},
            filter: null,
            luckysheet_alternateformat_save: [],
            luckysheet_alternateformat_save_modelCustom: [],
            luckysheet_conditionformat_save: {},
            frozen: {},
            chart: [],
            zoomRatio: 1,
            image: [],
            showGridLines: 1,
            dataVerification: {},
            data: (data.data) ? JSON.parse(data.data): null,
          },
        ],
      });
    
  }, [luckysheet, data]);

  //a handler function to save the data
  const onClickHanlderSave = () => {
    saveData({
      variables: {
        id: data.id,
        data: JSON.stringify(luckysheet.getAllSheets()[0].data)
      }
    })
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={() => onClickHanlderSave()}>save</button>
      <div id="luckysheet" style={luckyCss}></div>
    </div>
  );
}

const luckyCss = {
  marginTop: "120px",
  padding: "0px",
  position: "absolute",
  width: "100%",
  height: "100%",
  left: "0px",
  top: "0px",
};
