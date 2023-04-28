export interface Company {
  id: number; // 회사의 ID
  name: string; // 회사 이름
  logo_url: string; // 회사 로고 이미지 URL
}

export interface Recruit {
  id: number; // 공고 ID
  company: Company;
  title: string; // 공고 제목
  cut: boolean;
  start_time: string; // 공고 시작 시간
  end_time: string; // 공고 마감 시간
  created_time: string;
  updated_time: string | null;
  apply_url: string;
  bookmark: number; // 북마크수
  is_bookmark: boolean;
  view: number; // 조회수
  click: number;
  position_count: number;
  high: boolean;
  college: boolean;
  required_exp_arr: string[];
  place_arr: string[];
  rotation_arr: string[];
  contract_type: string[];
  task_arr: string[];
}

export interface RecruitDetailQueryModel {
  recruitId: string;
}
