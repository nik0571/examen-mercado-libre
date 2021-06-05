export interface IResult {
  id: string;
  site_id: SiteID;
  title: string;
  seller: Seller;
  price: number;
  prices: Prices;
  sale_price: null;
  currency_id: CurrencyID;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: BuyingMode;
  listing_type_id: ListingTypeID;
  stop_time: Date;
  condition: Condition;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  accepts_mercadopago: boolean;
  installments: Installments;
  address: Address;
  shipping: Shipping;
  seller_address: SellerAddress;
  attributes: Attribute[];
  differential_pricing?: DifferentialPricing;
  original_price: number | null;
  category_id: string;
  official_store_id: number | null;
  domain_id: string;
  catalog_product_id: null | string;
  tags: IResultTag[];
  catalog_listing?: boolean;
  use_thumbnail_id: boolean;
  order_backend: number;
}

export interface Address {
  state_id: StateID;
  state_name: StateName;
  city_id: null | string;
  city_name: string;
}

export enum StateID {
  ArB = "AR-B",
  ArC = "AR-C",
  ArR = "AR-R",
}

export enum StateName {
  BuenosAires = "Buenos Aires",
  CapitalFederal = "Capital Federal",
  RíoNegro = "Río Negro",
}

export interface Attribute {
  name: string;
  value_name: null | string;
  value_struct: Struct | null;
  attribute_group_name: AttributeGroupName;
  id: string;
  value_id: null | string;
  values: Value[];
  attribute_group_id: AttributeGroupID;
  source: number;
}

export enum AttributeGroupID {
  Others = "OTHERS",
}

export enum AttributeGroupName {
  Otros = "Otros",
}

export interface Struct {
  number: number;
  unit: Unit;
}

export enum Unit {
  CM = "cm",
  G = "g",
  Kg = "kg",
  M = "m",
  W = "W",
}

export interface Value {
  id: null | string;
  name: null | string;
  struct: Struct | null;
  source: number;
}

export enum BuyingMode {
  BuyItNow = "buy_it_now",
}

export enum Condition {
  New = "new",
  Used = "used",
}

export enum CurrencyID {
  Ars = "ARS",
}

export interface DifferentialPricing {
  id: number;
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: CurrencyID;
}

export enum ListingTypeID {
  GoldPro = "gold_pro",
  GoldSpecial = "gold_special",
}

export interface Prices {
  id: string;
  prices: Price[];
  presentation: Presentation;
  payment_method_prices: any[];
  reference_prices: ReferencePrice[];
  purchase_discounts: any[];
}

export interface Presentation {
  display_currency: CurrencyID;
}

export interface Price {
  id: string;
  type: PriceType;
  conditions: Conditions;
  amount: number;
  regular_amount: number | null;
  currency_id: CurrencyID;
  exchange_rate_context: ExchangeRateContext;
  metadata: Metadata;
  last_updated: Date;
}

export interface Conditions {
  context_restrictions: string[];
  start_time: Date | null;
  end_time: Date | null;
  eligible: boolean;
}

export enum ExchangeRateContext {
  Default = "DEFAULT",
}

export interface Metadata {
  campaign_id?: string;
  promotion_id?: string;
  promotion_type?: string;
}

export enum PriceType {
  Promotion = "promotion",
  Standard = "standard",
}

export interface ReferencePrice {
  id: string;
  type: ReferencePriceType;
  conditions: Conditions;
  amount: number;
  currency_id: CurrencyID;
  exchange_rate_context: ExchangeRateContext;
  tags: any[];
  last_updated: Date;
}

export enum ReferencePriceType {
  Was = "was",
}

export interface Seller {
  id: number;
  permalink: string;
  registration_date: Date;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags: SellerTag[];
  seller_reputation: SellerReputation;
  eshop?: Eshop;
}

export interface Eshop {
  nick_name: string;
  eshop_rubro: null;
  eshop_id: number;
  eshop_locations: any[];
  site_id: SiteID;
  eshop_logo_url: string;
  eshop_status_id: number;
  seller: number;
  eshop_experience: number;
}

export enum SiteID {
  Mla = "MLA",
}

export interface SellerReputation {
  transactions: Transactions;
  power_seller_status: PowerSellerStatus | null;
  metrics: Metrics;
  level_id: LevelID;
  protection_end_date?: Date;
  real_level?: RealLevel;
}

export enum LevelID {
  The5_Green = "5_green",
}

export interface Metrics {
  claims: Cancellations;
  delayed_handling_time: Cancellations;
  sales: Sales;
  cancellations: Cancellations;
}

export interface Cancellations {
  rate: number;
  value: number;
  period: CancellationsPeriod;
  excluded?: Excluded;
}

export interface Excluded {
  real_rate: number;
  real_value: number;
}

export enum CancellationsPeriod {
  The365Days = "365 days",
  The60Days = "60 days",
}

export interface Sales {
  period: CancellationsPeriod;
  completed: number;
}

export enum PowerSellerStatus {
  Gold = "gold",
  Platinum = "platinum",
}

export enum RealLevel {
  GreenPlatinum = "green_platinum",
  Orange = "orange",
}

export interface Transactions {
  total: number;
  canceled: number;
  period: TransactionsPeriod;
  ratings: Ratings;
  completed: number;
}

export enum TransactionsPeriod {
  Historic = "historic",
}

export interface Ratings {
  negative: number;
  positive: number;
  neutral: number;
}

export enum SellerTag {
  Brand = "brand",
  CreditsPriority1 = "credits_priority_1",
  CreditsPriority2 = "credits_priority_2",
  CreditsPriority3 = "credits_priority_3",
  CreditsPriority4 = "credits_priority_4",
  CreditsProfile = "credits_profile",
  Developer = "developer",
  Eshop = "eshop",
  LargeSeller = "large_seller",
  MediumSeller = "medium_seller",
  MessagesAsBuyer = "messages_as_buyer",
  MessagesAsSeller = "messages_as_seller",
  Mshops = "mshops",
  Normal = "normal",
  UserInfoVerified = "user_info_verified",
}

export interface SellerAddress {
  id: string;
  comment: string;
  address_line: string;
  zip_code: string;
  country: City;
  state: City;
  city: City;
  latitude: string;
  longitude: string;
}

export interface City {
  id: null | string;
  name: string;
}

export interface Shipping {
  free_shipping: boolean;
  mode: Mode;
  tags: ShippingTag[];
  logistic_type: LogisticType;
  store_pick_up: boolean;
}

export enum LogisticType {
  CrossDocking = "cross_docking",
  DropOff = "drop_off",
  Fulfillment = "fulfillment",
  XdDropOff = "xd_drop_off",
}

export enum Mode {
  Me2 = "me2",
}

export enum ShippingTag {
  FSThresholdMlaChangeFeb2021 = "fs_threshold_mla_change_feb2021",
  Fulfillment = "fulfillment",
  MandatoryFreeShipping = "mandatory_free_shipping",
  SelfServiceIn = "self_service_in",
  SelfServiceOut = "self_service_out",
}

export enum IResultTag {
  BestSellerCandidate = "best_seller_candidate",
  BrandVerified = "brand_verified",
  CartEligible = "cart_eligible",
  CatalogListingEligible = "catalog_listing_eligible",
  CatalogProductCandidate = "catalog_product_candidate",
  ExtendedWarrantyEligible = "extended_warranty_eligible",
  GoodQualityPicture = "good_quality_picture",
  GoodQualityThumbnail = "good_quality_thumbnail",
  ImmediatePayment = "immediate_payment",
  IncompleteTechnicalSpecs = "incomplete_technical_specs",
  LoyaltyDiscountEligible = "loyalty_discount_eligible",
  ModerationPenalty = "moderation_penalty",
  PoorQualityPicture = "poor_quality_picture",
  ShippingGuaranteed = "shipping_guaranteed",
}
