import { Console } from '@woowacourse/mission-utils';
import validateNameList from './Validation/validateShoppingCart.js';
import validateDateNumber from './Validation/validateDateNumber.js';

const InputView = {
  async getValidWeekdayList() {
    const input = await Console.readLineAsync(
      '평일 비상 근무 순번대로 사원 닉네임을 입력하세요>',
    );

    const nameList = validateNameList(input);

    if (nameList !== null) {
      return nameList;
    }
  },
  async getValidWeekendList() {
    const input = await Console.readLineAsync(
      '휴일 비상 근무 순번대로 사원 닉네임을 입력하세요>',
    );

    const nameList = validateNameList(input);

    if (nameList !== null) {
      return nameList;
    }
  },
  async getValidDateAndDay() {
    const input = await Console.readLineAsync(
      '비상 근무를 배정할 월과 시작 요일을 입력하세요>',
    );

    const result = validateDateNumber(input);

    if (result) {
      const { month, weekday } = result;
      return { month, weekday };
    }
  },
  async getAllInput() {
    while (true) {
      const monthAndWeekDay = await this.getValidDateAndDay();
      if (!monthAndWeekDay) {
        continue;
      }

      const weekdayList = await this.getValidWeekdayList();
      if (!weekdayList) {
        continue;
      }
      const weekendList = await this.getValidWeekendList();
      if (!weekendList) {
        continue;
      }

      if (monthAndWeekDay && weekdayList && weekendList)
        return { monthAndWeekDay, weekdayList, weekendList };
    }
  },
};
export default InputView;
