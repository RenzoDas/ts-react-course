import { isRight } from "fp-ts/lib/Either"
import * as t from "io-ts"
import { BackendIp } from "./types/ip"

const BackendIpCodec = t.type({
  ip: t.string,
  country_code: t.string,
  country_name: t.string,
  region_name: t.string,
  city_name: t.string,
  latitude: t.number,
  longitude: t.number,
  zip_code: t.string,
  time_zone: t.string,
  asn: t.number,
  as: t.string,
  is_proxy: t.boolean,
  message: t.string,
})

export const validateBackendIp = (data: unknown): BackendIp | null => {
  const result = BackendIpCodec.decode(data)
  return isRight(result) ? result.right : null
}
