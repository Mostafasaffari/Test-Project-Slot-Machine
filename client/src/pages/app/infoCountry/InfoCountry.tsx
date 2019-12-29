import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { ICountry } from "../../../entities/country";

import { getCountryByNameApi } from "../../../services/country";

import Filter from "../../../components/filter";
import Card from "../../../components/ui-kit/card";
import message from "../../../components/ui-kit/message";

import InfoCountryWrapper from "./infoCountry.style";

const InfoCountry = () => {
  const [countryData, setCountryData] = useState<ICountry>();
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleSetFilter = async (filter: string) => {
    if (filter) {
      try {
        setLoading(true);
        const response = await getCountryByNameApi(filter);
        setCountryData(response);
        setLoading(false);
      } catch (err) {
        message.error(err.message, 5);
        setCountryData(undefined);
        setLoading(false);
      }
    }
  };
  return (
    <InfoCountryWrapper>
      <Filter
        onSetFilter={handleSetFilter}
        filterTitle={t("searchByName")}
        filterButtonText={t("searchButtonText")}
        loading={loading}
      />
      <Card
        className={["infocountry__card", !countryData ? "boxhide" : ""].join(
          " "
        )}
        loading={loading}
      >
        {countryData && Object.keys(countryData).length > 0 && (
          <div className="infocountry__card__content">
            <div className="infocountry__card__content--row">
              <span>
                <b>{t("country.flag")}: </b>
                <img src={countryData.flag} alt="flag" />
              </span>
              <span>
                <b>{t("country.name")}: </b>
                {countryData.name}
              </span>
            </div>
            <div className="infocountry__card__content--row">
              <span>
                <b>{t("country.capital")}: </b>
                {countryData.capital}
              </span>
              <span>
                <b>{t("country.region")}: </b>
                {countryData.region}
              </span>
            </div>
            <div className="infocountry__card__content--row">
              <span>
                <b>{t("country.language")}: </b>
                {countryData.languages.length > 0 &&
                  countryData.languages[0].name}
              </span>
              <span>
                <b>{t("country.population")}: </b>
                {countryData.population}
              </span>
            </div>
          </div>
        )}
      </Card>
    </InfoCountryWrapper>
  );
};
export default InfoCountry;
