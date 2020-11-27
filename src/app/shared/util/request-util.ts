import {HttpParams} from '@angular/common/http';

export interface Pagination {
  page?: number;
  size?: number;
  sort?: string[];
}

export interface Search {
  query?: string;
}


export interface SearchWithPagination extends Search, Pagination {
}

export class SearchWithPaginationCls implements SearchWithPagination {
  constructor(public page?: number,
              public size?: number,
              public sort?: string[],
              public query?: string) {
  }
}


export const createRequestOption = (req?: SearchWithPagination): HttpParams => {
  let options: HttpParams = new HttpParams();

  if (req) {
    Object.keys(req).forEach(key => {
      if (key !== 'sort') {
        options = options.set(key, req[key]);
      }
    });

    if (req.sort) {
      req.sort.forEach((val: string) => {
        options = options.append('sort', val);
      });
    }
  }

  return options;
};

