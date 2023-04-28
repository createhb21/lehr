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
