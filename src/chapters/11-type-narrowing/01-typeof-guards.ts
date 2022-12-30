// --------------------------------------------------------------------------
// 📌 typeof 가드 (Guard)
// ⭐️ URL : https://bit.ly/3Epydn9
// --------------------------------------------------------------------------
// - typeof 가드는 값을 사용하기 전에 타입 검사를 수행합니다.
// - 유니언(|)은 하나의 값에 대해 여러 타입을 허용하므로 먼저 타입 축소 후 사용하는 것이 좋습니다.
// --------------------------------------------------------------------------

{
  // printRepeat 함수는 숫자 또는 문자 타입을 전달 받아 해당 값을 반복 출력합니다.
  function printRepeat(data: number | string, repeatCount: number = 2): string {
    // 하지만 TypeScript는 전달 받은 data 값이 숫자인지, 문자인지 판단할 수 없습니다.
    // repeat() 메서드를 string 타입은 사용 가능하지만, number 타입은 사용할 수 없습니다.
    // 그러므로 타입 범위를 좁혀 안전하게 코드가 실행될 수 있도록 사용자는 조치해야 합니다.
    return data.repeat(repeatCount);
  }

  printRepeat('나를 아시오?');
  printRepeat(2022);
}

{
  // 십10대인지 여부를 나이 값으로 확인하는 함수 isTeenager에 타입 축소(Type Narrowing)를 설정합니다.
  const isTeenager = (age: number | string): boolean => {
    // age 타입이 number인 경우
    // age 타입이 string인 경우
  };

  isTeenager(29);
  isTeenager('12');
}
