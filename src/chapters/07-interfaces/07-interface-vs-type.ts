// ------------------------------------------------------------------------------
// π μΈν°νμ΄μ€ vs νμ λ³μΉ­
// β­οΈ URL : https://bit.ly/3X01xbe
// ------------------------------------------------------------------------------
// - μΈν°νμ΄μ€μ νμ λ³μΉ­μ μλ‘μ΄ νλ‘νΌν°λ₯Ό μΆκ°νκ±°λ, νμ₯νλ λ°©λ²μ΄ λ€λ¦λλ€.
// ------------------------------------------------------------------------------

// μλ‘μ΄ νλ‘νΌν° μΆκ°

{
  type Dog = {
    kind: string;
  };

  type Dog = {
    age: number;
  };
}

{
  interface Dog {
    kind: string;
  }

  interface Dog {
    age: number;
  }
}

// λ€λ₯Έ νμ νμ₯

{
  type Dog = {
    kind: string;
    age: number;
  };

  type SuperDog = Dog & {
    hasSuperPower: boolean;
  };
}

// λ€λ₯Έ μΈν°νμ΄μ€ νμ₯

{
  interface Dog {
    kind: string;
    age: number;
  }

  interface SuperDog extends Dog {
    hasSuperPower: boolean;
  }
}
