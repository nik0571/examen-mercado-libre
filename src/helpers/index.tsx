import { currencyConfig, currencyLocale, ICurrencyConfig } from "../constants/currency";

export interface IFormatCurrency {
  options?: ICurrencyConfig;
  locales?: string;
}

export const formatCurrency = (value: number = 0, {
  options,
  locales,
}: IFormatCurrency = {
  options: currencyConfig,
  locales: currencyLocale,
}) => {
  const formatter = new Intl.NumberFormat(locales, options);
  return formatter.format(value);
};
