import { memo, useEffect, useState } from "react";

import DropDown from "../DropDown/DropDown";
import "./Table.css";
import axios from "axios";
import Pagination from "./Pagination/Pagination";

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [value, setValue] = useState("");
  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setTableData(res.data);
      setLoading(false);
    };
    getPosts();
  }, []);

  const handleSortTitle = () => {};
  const handleSortReset = () => {};
  const handleSortBody = () => {};
  // const handleFilter = tableData.filter((post) => {
  //   return post.title.toLowerCase().includes(value);
  // });

  //Pagination
  const indexOfLastPosts = currentPage * postsPerPage;
  const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
  let currentPosts = tableData
    .slice(indexOfFirstPosts, indexOfLastPosts)
    .filter((post) => {
      return post.title.toLowerCase().includes(value.toLowerCase());
    });
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const prevPage = () => {
    if (currentPage <= 1) {
      setCurrentPage(indexOfLastPosts + 1);
    }
    setCurrentPage((prev) => prev - 1);
  };
  const nextPage = (event) => {
    if (currentPage === indexOfLastPosts) {
      setCurrentPage(currentPage);
    }
    setCurrentPage((prev) => prev + 1);
  };

  //pagination
  if (loading) {
    <h2>Загрузка...</h2>;
  }
  return (
    <>
      <div className="box">
        {/* Фильтрация */}
        <input
          value={value}
          type="text"
          className="input-table p-2 rounded-2 "
          placeholder="Фильтровать"
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        {/* Выпадающее меню */}
        <DropDown
          handleSortBody={handleSortBody}
          handleSortTitle={handleSortTitle}
          handleSortReset={handleSortReset}
        />
      </div>
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
            {currentPosts?.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <Pagination /> */}
        <Pagination
          pagination={pagination}
          postsPerPage={postsPerPage}
          currentPosts={tableData.length}
        />
        <div className="d-flex gap-3 justify-content-between">
          <button
            className="bg-secondary p-2 rounded-2 text-white"
            onClick={prevPage}
          >
            prev
          </button>
          <button
            className="bg-secondary p-2 rounded-2 text-white"
            onClick={nextPage}
          >
            next
          </button>
        </div>
      </>
    </>
  );
};
export default memo(Table);
