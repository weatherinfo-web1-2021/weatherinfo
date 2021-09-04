export const request = async () => {
  try {
    const res = await fetch(
      "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=XdmAU3k7qAH%2F3khJ5sH%2Bs69CSFN%2FXt9bgrRSSY0R5X9zjb1nJYAM7QzDG6bZ2hWmC%2Fbg19TPusXfCm4kTfGphQ%3D%3D&returnType=JSON&numOfRows=100&pageNo=1&sidoName=%EC%84%9C%EC%9A%B8&ver=1.0"
    );
    if (res.ok) {
      const json = await res.json();
      return json;
    }
    throw new Error("API 호출 오류");
  } catch (e) {
    alert(e.message);
  }
};
