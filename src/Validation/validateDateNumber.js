// import { ERROR_MESSAGES } from '../config/defaultSettings.js';
import OutputView from '../OutputView.js';
import { isNumber } from '../Utility/regex.js';

function isValidNumber(input) {
  return isNumber.test(input);
}

function parseNumber(input) {
  return Number(input);
}

function isValidMonth(input) {
  return Number(input) >= 1 && Number(input) <= 12;
}
function isValidDay(dayInput) {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  if (days.includes(dayInput)) return true;
  return false;
}

export default function validateDateNumber(inputString) {
  if (!inputString.includes(',')) {
    OutputView.printMessage(
      '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.',
    );
    return null;
  }
  const [number, day] = inputString.split(',');
  if (!isValidNumber(number)) {
    OutputView.printMessage(
      '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
    );
    return null;
  }
  if (!isValidMonth(number)) {
    OutputView.printMessage(
      `[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
    );
    return null;
  }

  if (!isValidDay(day)) {
    OutputView.printMessage(
      `[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
    );
    return null;
  }

  return { number: Number(number), day };
}
