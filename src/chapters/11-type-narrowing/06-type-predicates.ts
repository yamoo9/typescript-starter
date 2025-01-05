// --------------------------------------------------------------------------
// 📌 타입 프리디케이트 (Type Predicates)
// ⭐️ URL : https://bit.ly/3tt0wec
// --------------------------------------------------------------------------
// - TypeScript를 사용하면 값의 타입 범위를 좁힐 수 있는 사용자 정의 함수를 작성할 수 있습니다.
// - 이러한 함수는 타입 술어(진술, 단언)라고 하는 매우 특별한 반환 타입을 지정할 수 있습니다.
// - 타입 술어는 `parameterName is Type` 포멧을 사용합니다.
// --------------------------------------------------------------------------

{
  interface Cat {
    name: string;
    hasChildren: boolean;
    meow(): string;
  }

  interface Dog {
    name: string;
    breed: boolean;
    bark(): string;
  }

  // isDog() 함수를 사용해 타입 범위를 좁히려 시도했으나, 여전히
  // TypeScript는 animal이 Cat인지, Dog인지 알 수 없어 경고합니다.
  // 타입 프리디케이트(술어)를 사용해 문제를 해결해봅니다.
  // `매개변수 이름 is 타입`
  //
  // 참고)
  // 5.5.4 버전 이후부터는 타입 프리디케이트를 사용하지 않아도
  // TypeScript에서 타입을 잘 추론하여 오류를 발생시키지 않습니다.
  function isDog(animal: Cat | Dog) {
    return 'breed' in animal;
  }

  function makeAnimalSound(animal: Cat | Dog): string {
    if (isDog(animal)) {
      return animal.bark();
    } else {
      return animal.meow();
    }
  }
}
