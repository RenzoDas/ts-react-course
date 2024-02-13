import { BackendIp } from "../types/ip";

export const ipMock: BackendIp = {
  ip: "127.0.0.1",
  country_code: "IT",
  country_name: "Italy",
  region_name: "Piemonte",
  city_name: "Ivrea",
  latitude: 45.458407,
  longitude: 7.871661,
  zip_code: "73042",
  time_zone: "+01:00",
  asn: 30722,
  as: "Vodafone Italia S.p.A.",
  is_proxy: false,
  message:
    "Limit to 500 queries per day. Sign up for a Free plan at https://www.ip2location.io to get 30K queries per month.",
};
