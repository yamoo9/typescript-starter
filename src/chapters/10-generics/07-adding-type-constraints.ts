// --------------------------------------------------------------------------
// 📌 타입 제약 조건 추가 (Adding Type Constraints)
// ⭐️ URL : https://bit.ly/3O5R0XJ
// --------------------------------------------------------------------------
// - 제네릭 사용 시 특정 타입만 사용 가능하도록 제한할 수 있습니다.
// --------------------------------------------------------------------------

{
  function combine<T, U>(o1: T, o2: U): T & U {
    return { ...o1, ...o2 };
  }

  // 객체가 아닌 타입이 combine 함수에 전달되더라도 TypeScript는 아무런 경고를 하지 않습니다.
  // 제네릭에 타입 제약 조건을 추가해 오류가 표시되도록 설정합니다.
  combine('design', 'workflow');
  combine(true, 101);
}

{
  interface Lengthy {
    length: number;
  }

  // 제네릭 타입 T는 length 속성을 포함하는 지 알 수 없으므로 TypeScript가 경고합니다.
  // 제네릭에 타입 제약 조건을 설정해 문제를 해결해봅니다.
  function getLengthPow<T>(o: T, powNumber: number = 2): number {
    return o.length ** powNumber;
  }

  getLengthPow('get length pow');

  getLengthPow(
    {
      name: 'Get Length Pow',
      length: 7,
    },
    3
  );
}
