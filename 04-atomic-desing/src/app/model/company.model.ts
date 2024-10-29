export interface IGetCompaniesRespone {
    content:          Content[];
    pageable:         Pageable;
    totalElements:    number;
    totalPages:       number;
    last:             boolean;
    numberOfElements: number;
    size:             number;
    number:           number;
    sort:             Sort;
    first:            boolean;
    empty:            boolean;
}

export interface Content {
    id:       string;
    name:     string;
    location: string;
    contact:  string;
    vacants:  any[];
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    sort:       Sort;
    offset:     number;
    unpaged:    boolean;
    paged:      boolean;
}

export interface Sort {
    unsorted: boolean;
    sorted:   boolean;
    empty:    boolean;
}





