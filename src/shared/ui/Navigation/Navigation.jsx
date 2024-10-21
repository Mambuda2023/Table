import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <ul className="d-flex g-3">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
      </ul>
    </>
  );
};
export default Navigation;
