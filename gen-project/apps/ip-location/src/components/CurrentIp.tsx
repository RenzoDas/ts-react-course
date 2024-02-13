import { FrontendIp } from "../types/ip";

const CurrentIp = ({ ip, country, city_name }: FrontendIp) => {
  return (
    <div className="currentIp">
      <div>
        <strong>Your IP:</strong> {ip}
      </div>
      <div>
        <strong>Country:</strong> {country.code}, {country.name}
      </div>
      <div>
        <strong>City:</strong> {city_name}
      </div>
    </div>
  );
};

export default CurrentIp;
