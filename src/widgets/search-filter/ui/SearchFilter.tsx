import { Filter } from '@/features/filter';
import { Search } from '@/features/search';

export interface SearchFilterProps {
  onSearch: (value: string) => void;
  onFilter?: (value: string) => void;
  searchPlaceholder?: string;
}

export const SearchFilter = ({
  onSearch,
  onFilter,
  searchPlaceholder,
}: SearchFilterProps) => {
  return (
    <div className="flex gap-4 md:flex-col">
      <Search onSearch={onSearch} placeholder={searchPlaceholder} />
      <Filter />
    </div>
  );
};