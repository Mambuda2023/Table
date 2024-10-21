import Navigation from "../../shared/ui/Navigation/Navigation";

const Header = () => {
  return (
    <header className="mb-5 pb-2 pt-3 bg-secondary">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <p>Логотип</p>
          <Navigation />
        </div>
      </div>
    </header>
  );
};
export default Header;
