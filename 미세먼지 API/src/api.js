const API_END_POINT =
  "https://cors.bridged.cc/http://apis.data.go.kr/B552584/ArpltnInforInqireSvc";
// const url = "getCtprvnRltmMesureDnsty"
const SERVICE_KEY =
  "XdmAU3k7qAH%2F3khJ5sH%2Bs69CSFN%2FXt9bgrRSSY0R5X9zjb1nJYAM7QzDG6bZ2hWmC%2Fbg19TPusXfCm4kTfGphQ%3D%3D";
const RETURN_TYPE = "JSON";
const NUM_OF_ROWS = "100";
const PAGE_NO = "1";
//(서울, 부산, 대구, 인천, 광주, 대전, 울산, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주, 세종)
// const SIDO_NAME = "대구";
const VER = "1.0";
export const request = async (url, SIDO_NAME) => {
  try {
    const res = await fetch(
      `${API_END_POINT}/${url}?serviceKey=${SERVICE_KEY}&returnType=${RETURN_TYPE}&numOfRows=${NUM_OF_ROWS}&pageNo=${PAGE_NO}&sidoName=${SIDO_NAME}&ver=${VER}`
    );
    // res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
    if (res.ok) {
      const json = await res.json();
      return json;
    }
    throw new Error("API 호출 오류");
  } catch (e) {
    alert(e.message);
  }
};
