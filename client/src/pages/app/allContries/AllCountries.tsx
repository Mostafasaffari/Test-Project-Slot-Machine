import React, { useState, useEffect } from "react";

import { ICountry } from "../../../entities/country";

import Table from "../../../components/ui-kit/table";
import message from "../../../components/ui-kit/message";

import AllCountriesWrapper from "./allCountries.style";
import { getAllCountriesApi } from "../../../services/country";

const AllCountries: React.FC = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
    }
  };
  const tableRowKey = (record: ICountry, index: number) => record.numericCode;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a: ICountry, b: ICountry) => a.name.localeCompare(b.name),
      width: "30%"
    },
    {
      title: "Capital",
      dataIndex: "capital",
      sorter: (a: ICountry, b: ICountry) => a.capital.localeCompare(b.capital),
      width: "30%"
    },
    {
      title: "Region",
      dataIndex: "region",
      width: "15%"
    },
    {
      title: "Calling Code",
      dataIndex: "callingCodes",
      width: "10%"
    },
    {
      title: "Population",
      dataIndex: "population",
      width: "15%"
    }
  ];
  return (
    <AllCountriesWrapper>
      <Table
        columns={columns}
        dataSource={countries}
        loading={loading}
        rowKey={tableRowKey}
      />
    </AllCountriesWrapper>
  );
};

export default AllCountries;
