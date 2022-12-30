// --------------------------------------------------------------------------
// 📌 TSX 파일에서의 화살표 함수와 제네릭 (Arrow functions and generics in TSX files)
// ⭐️ URL : https://bit.ly/3X12obm
// --------------------------------------------------------------------------
// - TSX 파일은 제레릭 구문을 JSX로
// --------------------------------------------------------------------------

{
  // 일반 함수 구문에서의 제네릭 타입은 사용에 문제가 없습니다.
  function getRandomItem<T>(list: T[]): T {
    return list[Math.floor(Math.random() * list.length)];
  }

  // 일반 함수식에서 또한 제네릭 타입 사용에 문제가 없습니다.
  const getRandomElement = function <T>(list: T[]): T {
    return list[Math.floor(Math.random() * list.length)];
  };
}

{
  // 하지만 화살표 함수식에서는 제네릭 타입 사용에 문제가 발생합니다.
  // 이 문제를 해결하려면 <T,>로 설정해야 합니다.
  const getRandomItem = <T,>(list: T[]): T => {
    return list[Math.floor(Math.random() * list.length)];
  };
}
