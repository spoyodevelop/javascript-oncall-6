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
      const { number, day } = result;
      return { number, day };
    }
  },
  async getAllInput() {
    while (true) {
      const dateAndDay = await this.getValidDateAndDay();
      if (!dateAndDay) {
        continue;
      }

      const weekday = await this.getValidWeekdayList();
      if (!weekday) {
        continue;
      }
      const weekend = await this.getValidWeekendList();
      if (!weekend) {
        continue;
      }

      if (dateAndDay && weekday && weekend)
        return { dateAndDay, weekday, weekend };
    }
  },
};
export default InputView;
