import "./DropDown.css";
const DropDown = ({ handleSortTitle, handleSortBody, handleSortReset }) => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-4">
      <div className="dropdown mb-3">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Сортирова по
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <button className="dropdown-item" onClick={handleSortTitle}>
              Title
            </button>
          </li>
          <li>
            <button className="dropdown-item" href="#" onClick={handleSortBody}>
              Description
            </button>
          </li>
        </ul>
      </div>

      <button
        type="button"
        className="bg-secondary p-2 rounded-2 text-white"
        onClick={handleSortReset}
      >
        Reset Sorted
      </button>
    </div>
  );
};
export default DropDown;
