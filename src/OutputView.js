import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMenu() {
    Console.print('<주문 메뉴>');
    // ...
  },
  toNumberFormatOfKor(num) {
    return num.toLocaleString('ko-KR');
  },

  printMessage(message) {
    Console.print(message);
  },
  printWelcomeMessage() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },
  printOrder(parsedItems) {
    Console.print('<주문 메뉴>');
    parsedItems.forEach((item) => Console.print(item.toString()));
    Console.print('\n');
  },
  printTotal(total) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(`${this.toNumberFormatOfKor(total)}원\n`);
  },
  printFreebie(freeCampagne) {
    Console.print('<증정 메뉴>');
    if (freeCampagne) {
      Console.print('샴페인 1개\n');
      return;
    }
    Console.print('없음\n');
  },
  printAllPromosStats({
    weekdayDessertPromotionTotal,
    weekendMainPromotionTotal,
    DDayPromotionTotal,
    freebiePromotionTotal,
    specialDatePromotionTotal,
  }) {
    Console.print('<혜택 내역>');
    if (
      weekdayDessertPromotionTotal +
        DDayPromotionTotal +
        weekendMainPromotionTotal +
        specialDatePromotionTotal +
        freebiePromotionTotal ===
      0
    ) {
      Console.print('없음');
      return;
    }
    if (DDayPromotionTotal > 0)
      Console.print(
        `크리스마스 디데이 할인: -${this.toNumberFormatOfKor(DDayPromotionTotal)}원`,
      );
    if (weekdayDessertPromotionTotal > 0)
      Console.print(
        `평일 할인: -${this.toNumberFormatOfKor(weekdayDessertPromotionTotal)}원`,
      );
    if (weekendMainPromotionTotal > 0)
      Console.print(
        `주말 할인: -${this.toNumberFormatOfKor(weekendMainPromotionTotal)}원`,
      );
    if (specialDatePromotionTotal > 0)
      Console.print(
        `특별 할인: -${this.toNumberFormatOfKor(specialDatePromotionTotal)}원`,
      );
    if (freebiePromotionTotal > 0)
      Console.print(
        `증정 이벤트: -${this.toNumberFormatOfKor(freebiePromotionTotal)}원`,
      );
    Console.print('\n');
  },
  printAllPromoTotal(allPromoTotal) {
    Console.print('<총혜택 금액>');
    if (allPromoTotal === 0) {
      Console.print('0원');
      return;
    }
    Console.print(`-${this.toNumberFormatOfKor(allPromoTotal)}원\n`);
  },
  printFinalPrice(expectedBill) {
    Console.print('<할인 후 예상 결제 금액>');
    Console.print(`${this.toNumberFormatOfKor(expectedBill)}원\n`);
  },
  printRank(rank) {
    Console.print('<12월 이벤트 배지>');
    Console.print(rank);
  },
};
export default OutputView;
