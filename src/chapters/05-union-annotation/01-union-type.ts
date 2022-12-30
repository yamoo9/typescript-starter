// ------------------------------------------------------------------------------
// 📌 유니언 타입 (Union Type)
// ⭐️ URL : https://bit.ly/3g375ky
// ------------------------------------------------------------------------------
// - 유니언 타입을 사용하면 여러 타입 별칭 중 매칭되는 하나를 지정할 수 있습니다.
// - 유니언 타입은 파이프(|) 기호를 사용해 지정합니다.
// ------------------------------------------------------------------------------

// Product 타입 별칭의 id 프로퍼티를 string 뿐만 아니라, number도 설정 가능하도록 지정합니다.

{
  type Product = {
    readonly id: string;
  };

  const basket: Product = {
    id: '81730121',
  };

  const cup: Product = {
    id: 29302394,
  };
}

// coordinate 타입이 Point 또는 Location 중 하나를 허용하도록 설정합니다.

{
  type Point = {
    x: number;
    y: number;
  };

  type Location = {
    latitude: number;
    longitude: number;
  };

  let coordinate = { x: 100, y: -201 };

  coordinate = {
    latitude: 920.23,
    longitude: -920.23,
  };
}
