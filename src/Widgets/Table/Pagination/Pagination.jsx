const Pagination = ({ postsPerPage, currentPosts, pagination }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(currentPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="d-flex justify-content-center gap-3 mb-3">
      <ul className="d-flex gap-4 justify-content-between">
        {pageNumbers.map((number) => (
          <li className="p-2 bg-secondary rounded-2" key={number}>
            <a
              className="text-white"
              href="!#"
              onClick={(event) => {
                event.preventDefault();
                pagination(number);
              }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
