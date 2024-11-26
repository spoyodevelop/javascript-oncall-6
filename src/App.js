import InputView from './InputView.js';
import OutputView from './OutputView.js';

class App {
  async run() {
    const { monthAndWeekDay, weekdayList, weekendList } =
      await InputView.getAllInput();
    const holidays = [
      { holidayMonth: 1, holiday: 1 },
      { holidayMonth: 3, holiday: 1 },
      { holidayMonth: 5, holiday: 5 },
      { holidayMonth: 6, holiday: 6 },
      { holidayMonth: 8, holiday: 15 },
      { holidayMonth: 10, holiday: 3 },
      { holidayMonth: 10, holiday: 9 },
      { holidayMonth: 12, holiday: 25 },
    ];

    // 일자를 집어 넣으면 그때부터 시작해서 계속해서 토요일을 돌려 받는 함수를 하나 만들어라.
    // console.log(monthAndDay, weekday, weekend);
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const { month, weekday } = monthAndWeekDay;

    function getDateandDay(month, weekday) {
      const monthDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      const monthDateforSelectedMonth = monthDates[month - 1];
      const datesList = [];
      for (let day = 1; day < monthDateforSelectedMonth + 1; day++) {
        const isHoliday = holidays.some(
          (holiday) =>
            holiday.holidayMonth === month && holiday.holiday === day,
        );

        datesList.push({
          month,
          date: day,
          day: days[(days.indexOf(weekday) + day - 1) % 7],
          isHoliday,
        });
      }

      return datesList;
    }
    const dateList = getDateandDay(month, weekday);
    const finalizeList = [];

    function spinlistandGetCurr(list) {
      const curr = list.shift();
      list.push(curr);
      return curr;
    }

    let leftover = null;
    dateList.forEach((dateObj) => {
      const { month, date, day, isHoliday } = dateObj;

      const currentCurr = finalizeList[finalizeList.length - 1];

      if (isHoliday || day === '일' || day === '토') {
        if (leftover) {
          finalizeList.push({ month, date, day, isHoliday, curr: leftover });
          leftover = null;
          return;
        }
        let curr = spinlistandGetCurr(weekendList);
        if (currentCurr?.curr && currentCurr.curr === curr) {
          leftover = curr;
          curr = spinlistandGetCurr(weekendList);
          finalizeList.push({ month, date, day, isHoliday, curr });
        } else {
          finalizeList.push({ month, date, day, isHoliday, curr });
        }
      } else {
        if (leftover) {
          finalizeList.push({ month, date, day, isHoliday, curr: leftover });
          leftover = null;
          return;
        }
        let curr = spinlistandGetCurr(weekdayList);
        if (currentCurr?.curr && currentCurr.curr === curr) {
          leftover = curr;
          curr = spinlistandGetCurr(weekdayList);
          finalizeList.push({ month, date, day, isHoliday, curr });
        } else {
          finalizeList.push({ month, date, day, isHoliday, curr });
        }
      }
    });
    finalizeList.forEach((list) => {
      const { month: finalMonth, date, day, isHoliday, curr } = list;
      let holiday = '';
      if (isHoliday) holiday = '(휴일)';
      OutputView.printMessage(
        `${finalMonth}월 ${date}일 ${day}${holiday} ${curr}`,
      );
    });
  }
}

export default App;
