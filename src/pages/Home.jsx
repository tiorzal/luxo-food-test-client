import React, { useEffect, useState } from "react";
import { SheetCard, AddSheetModal } from "../components/";
import { useQuery } from "@apollo/client";
import { LOAD } from "../query";

export default function Home() {
  //local state for sheets
  const [sheets, setSheets] = useState([]);

  //local state for modal toggling
  const [addModal, setAddModal] = useState(false);

  //query function to fetch user sheets and data
  const { data, loading, refetch } = useQuery(LOAD, {
    context: {
      headers: {
        token: localStorage.getItem("token"),
      },
    },
    errorPolicy: "all",
    fetchPolicy: "no-cache",
  });

  //use effect function to handle when the user data is fetched and set it into local state
  useEffect(() => {
    if (data) {
      const { loadData } = data;
      setSheets(loadData.Sheets);
    }
  }, [data]);

  //function to show the add sheet modal
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
