import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { ICountry } from "../../../entities/country";

import { getCountryByNamesApi } from "../../../services/country";

import Table from "../../../components/ui-kit/table";
import message from "../../../components/ui-kit/message";
import TagFilter from "../../../components/tagFilter/tagFilter";

import SearchCountriesWrapper from "./searchCountries.style";

const SearchCountries: React.FC = () => {
  const [filterCountries, setFilterCountries] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleFilter = async (names: string[]) => {
    await getListOfCountries(names);
  };

  const getListOfCountries = async (names: string[]) => {
    setLoading(true);
    try {
      const data = await getCountryByNamesApi(names);
      setFilterCountries(data);
      setLoading(false);
    } catch (err) {
      message.error(err.message, 5);
      setLoading(false);
    }
  };
  const tableRowKey = (record: ICountry, index: number) => record.numericCode;
  const columns = [
    {
      title: t("country.name"),
      dataIndex: "name",
      sorter: (a: ICountry, b: ICountry) => a.name.localeCompare(b.name),
      width: "30%"
    },
    {
      title: t("country.capital"),
      dataIndex: "capital",
      sorter: (a: ICountry, b: ICountry) => a.capital.localeCompare(b.capital),
      width: "30%"
    },
    {
      title: t("country.region"),
      dataIndex: "region",
      width: "15%"
    },
    {
      title: t("country.callingCode"),
      dataIndex: "callingCodes",
      width: "10%"
    },
    {
      title: t("country.population"),
      dataIndex: "population",
      width: "15%"
    }
  ];

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
      <Table
        columns={columns}
        dataSource={filterCountries}
        loading={loading}
        rowKey={tableRowKey}
      />
    </SearchCountriesWrapper>
  );
};
export default SearchCountries;
