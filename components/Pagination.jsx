import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) => {
  return (
    <div className="flex items-center justify-center gap-12">
      <button
        onClick={onPrevPage}
        disabled={currentPage === 1}
        className="focus:outline-none disabled:opacity-30"
      >
        <span className="hover:text-textSecondary dark:text-white dark:hover:text-textSecondary">
          Previous page
        </span>
      </button>

      <span className="text-lg font-semibold dark:text-white">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className="focus:outline-none disabled:opacity-30"
      >
        <span className="hover:text-textSecondary dark:text-white dark:hover:text-textSecondary">
          Next page
        </span>
      </button>
    </div>
  );
};

export default Pagination;
  
