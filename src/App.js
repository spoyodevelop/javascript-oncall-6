import InputView from './InputView.js';

class App {
  async run() {
    // const { number, day } = await InputView.getValidDateAndDay();
    // console.log(number, day);

    const { dateAndDay, weekday, weekend } = await InputView.getAllInput();
    console.log(dateAndDay, weekday, weekend);
  }
}

export default App;
