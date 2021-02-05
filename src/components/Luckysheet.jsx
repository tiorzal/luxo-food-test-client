import React, { useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { SAVE, LOAD } from "../query";

export default function Luckysheet() {
  const luckysheet = window.luckysheet;

  const [saveData] = useMutation(SAVE, {
    context: {
      headers: {
        token: localStorage.getItem("token"),
      },
    },
    errorPolicy: "all",
  });

  const { data, refetch } = useQuery(LOAD, {
    context: {
      headers: {
        token: localStorage.getItem("token"),
      },
    },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      luckysheet.create({
        container: "luckysheet",
        // plugins: ["chart"],
        title: `${data.loadData.email}`,
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
            data: JSON.parse(data.loadData.data),
          },
        ],
      });
    }
  }, [luckysheet, data]);

  const onClickHanlderSave = () => {
    // console.log(JSON.stringify(luckysheet.getLuckysheetfile()[0].data), 'ini');
    saveData({
      variables: {
        data: JSON.stringify(luckysheet.getLuckysheetfile()[0].data),
      },
    });
  };

  const onClickHanlderLoad =() => {
    refetch()
  }

  return (
    <div>
      <button onClick={() => onClickHanlderSave()}>save</button>
      <button onClick={() => onClickHanlderLoad()}>load</button>
      <div id="luckysheet" style={luckyCss}></div>
    </div>
  );
}

const luckyCss = {
  marginTop: "85px",
  padding: "0px",
  position: "absolute",
  width: "100%",
  height: "100%",
  left: "0px",
  top: "0px",
};
