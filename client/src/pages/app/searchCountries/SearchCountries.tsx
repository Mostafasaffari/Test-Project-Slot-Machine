import React from "react";
import { useTranslation } from "react-i18next";

import TagFilter from "../../../components/tagFilter/tagFilter";

import SearchCountriesWrapper from "./searchCountries.style";

const SearchCountries: React.FC = () => {
  const { t } = useTranslation();

  const handleFilter = (name: string[]) => {
    console.log(name);
  };
  return (
    <SearchCountriesWrapper>
      <div className="searchcountries__header">
        <h5>
          * Please, enter a country name or a part of the name of the country.
          You can enter several.
        </h5>
        <TagFilter
          onFilter={handleFilter}
          buttonTextFilter={t("searchButtonText")}
          newTagTitle={t("newTag")}
        />
      </div>
    </SearchCountriesWrapper>
  );
};
export default SearchCountries;
