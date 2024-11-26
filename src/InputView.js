import { Console } from '@woowacourse/mission-utils';
import validateNameList from './Validation/validateShoppingCart.js';
import validateDateNumber from './Validation/validateDateNumber.js';

const InputView = {
  async getValidShoppingCart() {
    while (true) {
      const input = await Console.readLineAsync(
        '평일 비상 근무 순번대로 사원 닉네임을 입력하세요>',
      );

      const nameList = validateNameList(input);

      if (nameList !== null) {
        return nameList;
      }
    }
  },
  async getAllinput() {},
  async getValidDateAndDay() {
    while (true) {
      const input = await Console.readLineAsync(
        '비상 근무를 배정할 월과 시작 요일을 입력하세요>',
      );

      const result = validateDateNumber(input);

      if (result) {
        const { number, day } = result;
        return { number, day };
      }
    }
  },
};
export default InputView;
