import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { ICountry } from "../../../entities/country";

import { getAllCountriesApi } from "../../../services/country";

import Filter from "../../../components/filter";
import Table from "../../../components/ui-kit/table";
import message from "../../../components/ui-kit/message";

import AllCountriesWrapper from "./allCountries.style";

const AllCountries: React.FC = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [filterCountries, setFilterCountries] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    getListOfCountries();
  }, []);

  const getListOfCountries = async () => {
    setLoading(true);
    try {
      const data = await getAllCountriesApi();
      setCountries(data);
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
  const handleSetFilter = (filter: string) => {
    if (filter) {
      const newList = countries.filter(s =>
        s.name.toLowerCase().includes(filter.toLowerCase())
      );
      if (newList.length > 0) setFilterCountries(newList);
      else message.error(t("errors.countryNotFound"));
    } else {
      setFilterCountries([]);
    }
  };
  return (
    <AllCountriesWrapper>
      <Filter
        onSetFilter={handleSetFilter}
        filterTitle={t("filterByName")}
        filterButtonText={t("filterButtonText")}
      />
      <Table
        columns={columns}
        dataSource={filterCountries.length > 0 ? filterCountries : countries}
        loading={loading}
        rowKey={tableRowKey}
      />
    </AllCountriesWrapper>
  );
};

export default AllCountries;
