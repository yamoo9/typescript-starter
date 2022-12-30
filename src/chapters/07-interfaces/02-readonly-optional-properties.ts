// ------------------------------------------------------------------------------
// 📌 읽기전용(readonly), 옵셔널(optional) 인터페이스 프로퍼티
// ⭐️ URL : https://bit.ly/3EvTQSV
// ------------------------------------------------------------------------------
// - 인터페이스의 특정 속성을 읽기전용 또는 선택 적용할 수 있는 옵셔널로 설정할 수 있습니다.
// ------------------------------------------------------------------------------

// Person 인터페이스의 name 속성은 읽기 전용, gender 속성은 옵션으로 설정해봅니다.

{
  interface Person {
    name: string;
    age: number;
    gender: '남성' | '여성';
  }

  const sayHappyBirthDay = (person: Person): string => {
    return `${person.name}! ${person.age} 번째 생일을 생일 축하해! 🎉`;
  };

  const suyouen = { name: '이수연', age: 36 };

  suyouen.name = '이수정';

  console.log(sayHappyBirthDay(suyouen));
}
