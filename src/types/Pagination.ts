export interface PaginationParams {
    totalItems: number;
    itemsPerPage: number;
  }
  
  export interface PaginationData {
    currentPage: number;
    totalPages: number;
    nextPage: () => void;
    prevPage: () => void;
    goToPage: (page: number) => void;
  }
  