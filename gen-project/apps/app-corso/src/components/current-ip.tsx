import { FrontendIp } from "../types/ip";

const CurrentIp = ({ ip, country, city_name }: FrontendIp) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        background: "MidnightBlue",
        padding: "20px 100px",
        borderRadius: 2,
        border: "1px solid CornflowerBlue",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
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
