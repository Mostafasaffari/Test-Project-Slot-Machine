import React, { useState } from "react";

import Input from "../ui-kit/input";
import Button from "../ui-kit/button";

import FilterWrapper from "./filter.style";

interface IProps {
  onSetFilter: (textFilter: string) => void;
  filterTitle: string;
  filterButtonText: string;
}
const Filter: React.FC<IProps> = ({
  onSetFilter,
  filterTitle,
  filterButtonText
}) => {
  const [filterText, setFilterText] = useState<string>("");
  const handleFilter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSetFilter(filterText);
  };
  const handleChangeFilterText = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterText(event.target.value);
  };
  return (
    <FilterWrapper onSubmit={handleFilter}>
      <Input onChange={handleChangeFilterText} placeholder={filterTitle} />
      <Button htmlType="submit">{filterButtonText}</Button>
    </FilterWrapper>
  );
};
export default Filter;
