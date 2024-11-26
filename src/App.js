import InputView from './InputView.js';

class App {
  async run() {
    const { monthAndWeekDay, weekdayList, weekendList } =
      await InputView.getAllInput();
    const hoildays = [
      { month: 1, day: 1 },
      { month: 3, day: 1 },
      { month: 5, day: 5 },
      { month: 6, day: 6 },
      { month: 8, day: 15 },
      { month: 10, day: 3 },
      { month: 10, day: 9 },
      { month: 12, day: 15 },
    ];

    // 일자를 집어 넣으면 그때부터 시작해서 계속해서 토요일을 돌려 받는 함수를 하나 만들어라.
    // console.log(monthAndDay, weekday, weekend);
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const { month, weekday } = monthAndWeekDay;

    function getDateandDay(month, weekday) {
      const monthDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      const monthDateforSelectedMonth = monthDates[month - 1];
      const datesList = [];
      for (let i = 1; i < monthDateforSelectedMonth + 1; i++) {
        // hoildays.some((month, day) => {
        //   if (month === month && day === i) return true;
        // });

        datesList.push({
          month,
          date: i,
          day: days[(days.indexOf(weekday) + i - 1) % 7],
        });
      }

      return datesList;
    }

    console.log(getDateandDay(month, weekday));
  }
}

export default App;
