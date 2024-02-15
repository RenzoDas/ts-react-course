import { FrontendIp } from "../types/ip"

const CurrentIp = ({ ip, country, city_name }: FrontendIp) => {
  return (
    <div className="ip">
      <div>
        <strong>Your IP:</strong> <span id="data-ip">{ip}</span>
      </div>
      <div>
        <strong>Country:</strong>&nbsp;
        <span id="data-country">
          {country.code}, {country.name}
        </span>
      </div>
      <div id="data-city">
        <strong>City:</strong> <span>{city_name}</span>
      </div>
    </div>
  )
}

export default CurrentIp
