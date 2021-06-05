export interface ICurrencyConfig {
  style: string,
  currency: string,
  minimumFractionDigits: number,
}

export const currencyLocale: string = 'en-US';

export const currencyConfig:ICurrencyConfig = {
  style: 'currency',
  currency: "USD",
  minimumFractionDigits: 0,
};
