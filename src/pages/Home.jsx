import React, { useEffect, useState } from "react";
import { SheetCard, AddSheetModal } from "../components/";
import { useQuery } from "@apollo/client";
import { LOAD } from "../query";

export default function Home() {
  const [sheets, setSheets] = useState([]);
  const [addModal, setAddModal] = useState(false);

  const { data, loading, refetch } = useQuery(LOAD, {
    context: {
      headers: {
        token: localStorage.getItem("token"),
      },
    },
    errorPolicy: "all",
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (data) {
      const { loadData } = data;
      setSheets(loadData.Sheets);
    }
  }, [data]);

  const showAddModal = () => {
    setAddModal(true);
  };

  if (loading) {
    return <h1>LOADING...</h1>;
  } else
    return (
      <div>
        <AddSheetModal
          status={addModal}
          setToggle={setAddModal}
          message="add a new sheet"
          doFunction={refetch}
        />
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-2">
              <button
                className="btn btn-primary"
                onClick={() => showAddModal()}
              >
                add new sheet
              </button>
            </div>
            <div className="col-10">
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th>no</th>
                    <th>sheet</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody className="">
                  {sheets &&
                    sheets.map((sheet, idx) => (
                      <SheetCard
                        key={sheet.id}
                        sheet={sheet}
                        refetchHome={refetch}
                        noIdx={idx}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}
