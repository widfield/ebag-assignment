export interface FilterFieldProps<T> {
  onFilterChange: (name: string, value: T) => void;
  filterName: string;
  title: string;
}
