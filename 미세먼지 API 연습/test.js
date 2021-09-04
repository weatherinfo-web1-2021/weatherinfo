const storage = window.localStorage;

const setItem = (key, value) => {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
};

const data = {
  response: {
    body: {
      totalCount: 123,
      items: [
        {
          so2Grade: "1",
          coFlag: null,
          khaiValue: "90",
          so2Value: "0.002",
          coValue: "0.4",
          pm25Flag: null,
          pm10Flag: null,
          o3Grade: "2",
          pm10Value: "57",
          khaiGrade: "2",
          pm25Value: "32",
          sidoName: "경기",
          no2Flag: null,
          no2Grade: "1",
          o3Flag: null,
          pm25Grade: "2",
          so2Flag: null,
          dataTime: "2021-08-28 16:00",
          coGrade: "1",
          no2Value: "0.012",
          stationName: "소사본동",
          pm10Grade: "2",
          o3Value: "0.078",
        },
      ],
    },
  },
};

const {
  response: {
    body: {
      items,
    },
  },
} = data;
console.log([{ sidoName }]);
const bodydata = setItem("body", data);
