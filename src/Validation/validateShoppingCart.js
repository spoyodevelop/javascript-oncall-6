import OutputView from '../OutputView.js';

function isValidName(nameList) {
  return nameList.every((name) => name.length <= 5);
}

function isValidList(nameList) {
  return nameList.length >= 5 && nameList.length <= 35;
}

function hasDuplicates(arr) {
  const cleanedArr = arr.map((item) => item.trim());
  return cleanedArr.length !== new Set(cleanedArr).size;
}

function findDuplicates(arr) {
  return [...new Set(arr.filter((item, index) => arr.indexOf(item) !== index))];
}

export default function validateNameList(inputString) {
  if (!inputString.includes(',')) {
    OutputView.printMessage(
      '[ERROR] 입력 값은 쉼표(,)로 구분된 형식이어야 합니다. 다시 입력해 주세요.',
    );
    return null;
  }

  const nameList = inputString.trim().split(',');

  if (!isValidName(nameList)) {
    OutputView.printMessage(
      '[ERROR] 각 이름은 최대 5글자까지 가능합니다. 다시 입력해 주세요.',
    );
    return null;
  }

  if (!isValidList(nameList)) {
    OutputView.printMessage(
      '[ERROR] 인원 수는 최소 5명, 최대 35명이어야 합니다. 다시 입력해 주세요.',
    );
    return null;
  }

  if (hasDuplicates(nameList)) {
    const duplicates = findDuplicates(nameList);
    OutputView.printMessage(
      `[ERROR] 중복된 이름이 있습니다: ${duplicates.join(', ')}. 다시 입력해 주세요.`,
    );
    return null;
  }

  return nameList;
}
