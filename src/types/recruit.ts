export interface Company {
  id: number; // 회사의 ID
  name: string; // 회사 이름
  logo_url: string; // 회사 로고 이미지 URL
}

export interface RecruitOverview {
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

export type Order = 'recent' | 'end' | 'popular' | 'view' | 'rand';
export type Filter = 'valid' | 'expired' | 'todayUpload' | 'almostDeadline' | 'deadline';

export interface RecruitListQueryModel {
  order?: Order;
  filter?: Filter;
  page?: number;
  size?: number;
}

export interface RecruitDetailQueryModel {
  recruitId: string;
}

interface FactoryObjDef {
  address: string;
  bus: { exists: boolean; desc: string | null };
  dormitory: { exists: boolean; desc: string | null };
  female_number: number;
  id: number;
  male_number: number;
  name: string;
  product: string;
}

export interface RecruitDetail {
  id: number; // 공고 ID
  company: {
    id: number; // 회사의 ID
    name: string; // 회사 이름
    logo_url: string; // 회사 로고 URL
    youtube_url: string;
    comment_count: number;
  };
  title: string; // 공고 제목
  cut: boolean;
  start_time: string; // 공고 시작 날짜
  end_time: string; // 공고 마감 날짜
  process_arr: string[]; // 채용 과정
  apply_route_arr: string[]; // 지원 경로 및 제출 서류
  apply_url: string; // 지원 URL
  etc_arr: string[]; // 기타 사항들
  bookmark: number; // 북마크 수
  is_bookmark: boolean;
  view: number; // 조회수
  click: number; // 클릭 수
  position_arr: {
    // 공고 내 각 직무 배열
    id: number; // 직무 ID
    possible_edu: {
      summary: string;
      college: boolean;
      high: boolean;
      middle: boolean;
      four: boolean;
    };
    required_exp: {
      type: '신입' | '경력' | '무관' | '신입/경력';
      min_year: number | null;
      max_year: number | null;
    };
    required_etc_arr: string[];
    contract_type: {
      type: '정규직' | '계약직' | '계약>정규' | '연수생' | '인턴';
      conversion_rate: number | null;
    };
    task: {
      main_task: string; // 1차 직무
      sub_task_arr: string[]; // 2차 직무
    };
    task_detail_arr: string[];
    rotation_arr: string[]; // 교대 형태
    rotation_etc: string | null; // 기타 교대 형태
    place: {
      type: '일반' | '해외' | '기타';
      address_arr: string[];
      factory_arr: FactoryObjDef[];
      etc: string | null;
    };
    hire_number: string;
    pay_arr: string[];
    preferred_certi_arr: string[];
    preferred_etc_arr: string[];
  }[];
}
