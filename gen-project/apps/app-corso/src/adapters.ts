import { ResponseAdapter } from "fetch-api";
import { BackendIp, FrontendIp } from "./types/ip";

export const ipAdapter: ResponseAdapter<BackendIp, FrontendIp> = (data) => {
  return {
    ip: data.ip,
    city_name: data.city_name,
    country: {
      code: data.country_code,
      name: data.country_name,
    },
  };
};
