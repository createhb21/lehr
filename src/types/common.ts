export interface PageInfo {
  total_elements: number; // 전체 요소 개수
  total_pages: number; // (total_elements) / (size)
  page: number; // 현재 위치한 페이지
  size: number; // 각 페이지에 들어가는 요소의 개수
  is_first: boolean; // 첫 페이지인지 아닌지
  is_last: boolean; // 마지막 페이지인지 아닌지
}

export interface Status {
  status: number;
  status_name: string;
}

export interface StandardResponseModel<T> extends Status {
  data: T;
  page_result: PageInfo;
}

export type KeyOf<T> = keyof T;
export type ValueOf<T> = T[keyof T];
export type IndexOf<T, K extends KeyOf<T>> = ValueOf<T[K]>;

export interface SelectedFilterTag<T, K extends keyof T> {
  key: K;
  value: T[K] extends Array<IndexOf<T, K>> ? T[K][number] : T[K];
  label: string;
}

export type TagVariant = 'primary' | 'outline' | 'ghost';
