import InputView from './InputView.js';

class App {
  async run() {
    // const { number, day } = await InputView.getValidDateAndDay();
    // console.log(number, day);

    const nameList = await InputView.getValidShoppingCart();
    console.log(nameList);

    // const arr = ['사과', '배', '바나나', '사과', '딸기'];

    // const hasDuplicates = arr.length !== new Set(arr).size;

    // console.log(hasDuplicates ? '중복 있음' : '중복 없음'); // 중복 있음
    // // console.log(isDuplicateList(nameList));
    // // console.log(new Set(nameList));
  }
}

export default App;
