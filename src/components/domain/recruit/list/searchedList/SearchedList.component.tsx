import { List } from '@/components/common';

import type { RecruitOverview } from '@/types';

interface SearchedListProps {
  data: RecruitOverview[];
}

const SearchedList = ({ data }: SearchedListProps) => {
  return (
    <List>
      {data?.map((recruit) => (
        <List.Item
          key={recruit.id}
          view={recruit.view}
          title={recruit.title}
          recruitId={recruit.id}
          endTime={recruit.end_time}
          bookmark={recruit.bookmark}
          createdTime={recruit.created_time}
          companyName={recruit.company.name}
          companyThumbnail={recruit.company.logo_url}
        />
      ))}
    </List>
  );
};

export default SearchedList;
