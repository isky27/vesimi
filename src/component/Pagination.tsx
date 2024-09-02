import React from "react";

const Pagination = (props: any) => {
  const { total=1, currentPage, handleClick, pageSize=1 } = props;

  const pageCount = Math.ceil(total / pageSize);

  const startPage = Math.max(1, Math.min(currentPage - 4, pageCount - 9));
  const endPage = Math.min(pageCount, startPage + 9);

  const pageArray = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div>
      <div className="themePagger text-center py-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <p className="m-2">{currentPage} of {pageCount}</p>
            <li className="page-item">
              <button
                className={`page-link ${currentPage !== 1 && "text-dark"}`}
                disabled={currentPage === 1}
                onClick={() => handleClick(Number(currentPage) - 1)}
              >
                Previous
              </button>
            </li>
            {pageArray?.map((elem) => (
              <li key={elem} className="page-item">
                <button
                  className={`page-link ${currentPage !== elem && "text-dark"}`}
                  disabled={currentPage === elem}
                  key={elem}
                  onClick={() => handleClick(elem)}
                >
                  {elem}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                className={`page-link ${currentPage !== pageCount && "text-dark"}`}
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
