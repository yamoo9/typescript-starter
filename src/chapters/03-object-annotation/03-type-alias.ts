// -------------------------------------------------------------------------------
// π νμ λ³μΉ­ (Type Alias)
// β­οΈ URL : https://bit.ly/3TDq0jw
// -------------------------------------------------------------------------------
// - νμ μλνμ΄μμ κ°μ²΄μ μ§μ  μ€μ νλ λμ , νμ λ³μΉ­μ μ¬μ©ν΄ λ³λ μ μΈν  μ μμ΅λλ€.
// - νμ λ³μΉ­μ μ¬μ©νλ©΄ μ½λλ₯Ό λ³΄λ€ μ½κΈ° μ©μ΄νκ³ , λ€λ₯Έ κ³³μμ νμ λ³μΉ­μ μ¬μ¬μ©ν  μ μμ΅λλ€.
// -------------------------------------------------------------------------------

// νμ λ³μΉ­μ μ¬μ©νμ§ μμ μ½λ

{
  const suyeon: {
    name: string;
    gender: string;
    isMarried: boolean;
    age: number;
  } = {
    name: 'μμ°',
    gender: 'μ¬μ±',
    isMarried: true,
    age: 36,
  };

  const jaeho: {
    name: string;
    gender: string;
    isMarried: boolean;
    age: number;
  } = {
    name: 'μ¬νΈ',
    gender: 'λ¨μ±',
    isMarried: false,
    age: 24,
  };
}

// νμ λ³μΉ­μ μ¬μ©ν μ½λ

{
  type Friend = {
    name: string;
    gender: string;
    isMarried: boolean;
    age: number;
  };

  const suyeon: Friend = {
    name: 'μμ°',
    gender: 'μ¬μ±',
    isMarried: true,
    age: 36,
  };

  const jaeho: Friend = {
    name: 'μ¬νΈ',
    gender: 'λ¨μ±',
    isMarried: false,
    age: 24,
  };
}

// μλ μ½λμ λ°λ³΅ μ¬μ©λ κ°μ²΄ μλνμ΄μμ νμ λ³μΉ­μ νμ©νλ μ½λλ‘ λ³κ²½ν΄λ΄λλ€.

{
  let point: { x: number; y: number } = { x: 10, y: 10 };

  const generatePoint = (x: number, y: number): { x: number; y: number } => {
    return { x, y };
  };

  const powPoint = (porint: {
    x: number;
    y: number;
  }): { x: number; y: number } => {
    return {
      x: point.x ** 2,
      y: point.y ** 2,
    };
  };
}

// νμ λ³μΉ­μ νμ©νλ©΄ μ½λλ₯Ό μ½κ³  μμ νκΈ° μ©μ΄ν΄μ§λλ€. π

{
  type Point = { x: number; y: number };

  let point: Point = { x: 10, y: 10 };

  const generatePoint = (x: number, y: number): Point => {
    return { x, y };
  };

  const powPoint = (porint: Point): Point => {
    return {
      x: point.x ** 2,
      y: point.y ** 2,
    };
  };
}
