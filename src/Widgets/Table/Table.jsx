import { useEffect, useState } from "react";
import { tableApi } from "../../app/services/table/table.services";
// import Pagination from "../../shared/ui/Pagination/Pagination";

import DropDown from "../DropDown/DropDown";
import "./Table.css";

const Table = () => {
  const [page, setPage] = useState(1);
  const { data: table, isError, isLoading } = tableApi.useGetTableQuery(page);
  const { data: sortBody } = tableApi.useSortTableQuery("body", "desc", page);
  const { data: sortTitle } = tableApi.useSortTableQuery("title", "desc", page);
  const { data: filterTable } = tableApi.useFiltrationTableQuery("");
  const [tableData, setTableData] = useState([]);
  // console.log(table?.last);
  useEffect(() => {
    setTableData(table?.data);
  }, [table?.data]);

  const handleSortTitle = () => {
    setTableData(sortTitle);
  };

  const handleSortBody = () => {
    setTableData(sortBody);
  };

  const handleSortReset = () => {
    setTableData(table?.data);
  };
  const handleFilter = () => {};

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!table) {
    return <div>No posts :</div>;
  }

  if (isError) return <h2>Не удалось получить данные</h2>;

  return (
    <>
      <div className="box">
        {/* Фильтрация */}
        <input
          type="text"
          className="input-table p-2 rounded-2 "
          placeholder="Фильтровать"
          onChange={handleFilter}
        />
        {/* Выпадающее меню */}
        <DropDown
          handleSortBody={handleSortBody}
          handleSortTitle={handleSortTitle}
          handleSortReset={handleSortReset}
        />
      </div>
      {/* Таблица */}
      {isLoading ? (
        <h2>Загрузка...</h2>
      ) : (
        <>
          <table className="table mb-4">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
              </tr>
            </thead>

            <tbody>
              {tableData?.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <Pagination /> */}

          <div className="d-flex gap-3 justify-content-between pt-2 pb-3">
            <button
              className="p-3 bg-secondary rounded-2 button-page text-white"
              onClick={(event) => {
                if (table?.prev === null) {
                  event.target.setAttribute("disabled", true);
                } else {
                  event.target.removeAttribute("disabled");
                  setPage(page - 1);
                }
              }}
            >
              Previous
            </button>
            <button
              className="p-3 bg-secondary rounded-2 button-page text-white"
              onClick={(event) => {
                if (table.next === null) {
                  event.target.setAttribute("disabled", true);
                } else {
                  event.target.removeAttribute("disabled");
                  setPage(page + 1);
                }
              }}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default Table;
