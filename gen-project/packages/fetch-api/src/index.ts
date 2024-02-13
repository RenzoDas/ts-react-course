// export type LocationApi = {
//   ip: string;
//   country_code: string;
//   country_name: string;
//   region_name: string;
//   city_name: string;
//   latitude: number;
//   longitude: number;
//   zip_code: string;
//   time_zone: string;
//   asn: number;
//   as: string;
//   is_proxy: false;
//   message: string;
// };

import { ResponseAdapter } from "./types";

async function fetchData<I, O>(
  url: string,
  adapter: ResponseAdapter<I, O>,
  mock?: I
): Promise<O | null> {
  try {
    if (mock) return adapter(mock);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Errore nella richiesta");
    }
    const res: I = await response.json();
    return adapter(res);
  } catch (error: any) {
    console.log("Errore nella richiesta:", error.message);
  }
  return null;
}

export default fetchData;
