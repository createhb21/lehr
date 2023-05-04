import { List } from '@/components/common';

import type { RecruitOverview } from '@/types';

interface SearchedListProps {
  data: RecruitOverview[];
}

const SearchedList = ({ data }: SearchedListProps) => {
  return (
    <List>
      {data?.map((recruit) => (
        <List.Item key={recruit.id} recruitId={recruit.id} title={recruit.title} />
      ))}
    </List>
  );
};

export default SearchedList;
