// ------------------------------------------------------------------------------
// π λ°°μ΄ + μ λμΈ νμ (Union Types & Array)
// β­οΈ URL : https://bit.ly/3ts0fbl
// ------------------------------------------------------------------------------
// - μ¬λ¬ νμ μ€ νλλ₯Ό νμ©νλ λ°°μ΄μ μλνμ΄μ ν  λ μ λμΈ νμμ νμ©ν©λλ€.
// ------------------------------------------------------------------------------

// μ€λ₯κ° λ°μνμ§ μλλ‘ MultiDimensionalTypedArray νμμ λ³κ²½ν΄λ΄λλ€.
// μ€λ₯κ° λ μ΄μ λ°μνμ§ μμΌλ©΄? μ΄μ΄μ Array<> λ¬Έλ²μΌλ‘ λμ²΄ν΄λ΄λλ€.

{
  type MultiDimensionalTypedArray = string[][];

  type User = {
    readonly name: string;
    readonly gender: string;
    job?: string;
    age?: number;
  };

  const whangSujin: User = {
    name: 'λ°μ±κ΅¬',
    gender: 'λ¨μ±',
    job: 'μΈμ κΈ°μ¬',
    age: 26,
  };

  const whangSujinIterator: MultiDimensionalTypedArray =
    Object.entries(whangSujin);
}

// μλ μμ±λ μλνμ΄μκ³Ό λ¨Όμ  μμ±ν μλνμ΄μμ μ΄λ€ μ°¨μ΄μ μ΄ μμκΉμ?

{
  type CountDown = string[] | number[];

  let countdown: CountDown = ['three', 'two', 'one'];
  countdown = [3, 2, 1];
  countdown = [3, 'two', 'one'];
}

// coordsμ μ μ©ν  νμμ μ μΈν΄λ΄λλ€.
// [], Array<> λ¬Έλ² λͺ¨λ μ¬μ©ν΄λ³΄μΈμ.

{
  type Point = { x: number; y: number };
  type Location = { rat: number; lon: number };

  const coords = [
    { x: 8, y: -12 },
    { rat: 92.382, lon: -102.32 },
    { x: -27, y: 10 },
  ];
}
