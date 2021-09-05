export default function SidoNameList({ $target, initialState }) {
  const $sidoName = document.createElement("div");

  $target.appendChild($sidoName);

  //   initialState의 형태
  //   [{sidoName, ...}]
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $sidoName.innerHTML = `
    <select name="sidoNames" id="sidoNames" placeholder="지역명을 선택해주세요">
        <option class="sidoName-item" value="">Select your area</option>
        ${this.state
          .map(
            ({
              sidoName,
              stationName,
              pm25Grade,
              pm10Grade,
            }) => `<option class="sidoName-item" value="미세먼지: ${pm10Grade}등급 초미세먼지: ${pm25Grade}등급">${sidoName} ${stationName}</option>
        `
          )
          .join("")} 
    </select>
    <div class="finedustInfo"></div>`;
  };

  this.render();

  const $select = $sidoName.querySelector("select");
  $select.addEventListener("change", (e) => {
    const $findustInfo = document.querySelector(".finedustInfo");
    $findustInfo.innerHTML = `<h2>
    지역별 미세먼지 정보</h2>
    <div>${e.target.value}</div>`;
  });
  //   const selectedValue = $select.options[$select.selectedIndex].value;
  //   console.log(selectedValue);
}
