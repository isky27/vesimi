import React from "react";

const Pagination = (props: any) => {
  const { total, currentPage, handleClick, pageSize } = props;

  const pageCount = Math.ceil(total / pageSize);

  const pageArray = new Array(pageCount >= 10 ? 10 : pageCount)
    .fill((currentPage - 4) < 1 ? 1 : (currentPage + 5) > pageCount ? (pageCount - 9) < 1 ? 1 : pageCount - 9 : currentPage - 4)
    .map((el, i) =>  el + i);

  return (
    <div>
      <div className="themePagger text-center py-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <button
                className={`page-link ${currentPage !== 1 && "text-dark"}`}
                disabled={currentPage === 1}
                onClick={() => handleClick(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {pageArray?.map((elem) => (
              <li className="page-item">
                <button
                  className={`page-link ${currentPage !== elem && "text-dark"}`}
                  key={elem}
                  onClick={() => handleClick(elem)}
                >
                  {elem}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                className={`page-link ${
                  currentPage !== pageCount && "text-dark"
                }`}
                disabled={currentPage === Math.ceil(total / pageSize)}
                onClick={() => handleClick(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
