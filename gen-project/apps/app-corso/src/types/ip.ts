export type BackendIp = {
  ip: string
  country_code: string
  country_name: string
  region_name: string
  city_name: string
  latitude: number
  longitude: number
  zip_code: string
  time_zone: string
  asn: number
  as: string
  is_proxy: boolean
  message: string
}

export type FrontendIp = {
  ip: string
  country: {
    code: string
    name: string
  }
  city_name: string
  coordinates: [number, number]
}
