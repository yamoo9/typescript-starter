// ------------------------------------------------------------------------------
// π κ°μ²΄ μλνμ΄μ (Object Annotation)
// β­οΈ URL : https://bit.ly/3UAwJMj
// ------------------------------------------------------------------------------
// - κ°μ²΄μ λͺ¨μ(look like)μ μλνμ΄μνμ¬ μ μλμ§ μμ νλ‘νΌν°μ μ κ·Όμ μλνκ±°λ,
//   μ§μ λ νμκ³Ό λ€λ₯Έ νμμ κ°μΌλ‘ μ€μ  μλν  κ²½μ° μ€λ₯λ₯Ό μΆλ ₯ν©λλ€.
// ------------------------------------------------------------------------------

{
  const jaeho = {
    name: 'μ¬νΈ',
    gender: 'λ¨μ±',
    isMarried: false,
    age: 24,
  };

  console.log(jaeho.friends);
}

{
  const suyeon: /* κ°μ²΄ μλνμ΄μ */ {
    name: string;
    gender: string;
    isMarried: boolean;
    age: number;
  } = /* κ°(κ°μ²΄) */ {
    name: 'μμ°',
    gender: 'μ¬μ±',
    isMarried: true,
    age: 36,
  };
}

{
  function getName(user): string {
    return `${user.firstName} ${user.lastName}`;
  }

  // μλ ν¨μ μ€ν κ΅¬λ¬Έμ΄ μ€λ₯κ° λ°μνμ§ μλ μ΄μ λ λ¬΄μμΌκΉμ?
  // μ€λ₯κ° λ°μνλλ‘ getName ν¨μμ λ§€κ°λ³μ μλνμ΄μμ μ§μ ν΄λ΄λλ€.
  let userName = getName({
    name: 'νμ±μ°',
  });

  console.log(userName);
}

{
  // coordinate κ°μ²΄μ μλνμ΄μμ μ€μ ν©λλ€.
  let coodinate = {
    x: 100,
    y: -20,
    z: 0,
  };

  const getRandomMinMax = (min: number, max: number): number =>
    Math.round(Math.random() * max - min) + min;

  // getRandomCoordinate ν¨μμ λ°ν κ° νμμ μλνμ΄μ μ€μ ν©λλ€.
  function getRandomCoordinate(
    x: number = getRandomMinMax(-10, 10),
    y: number = getRandomMinMax(-10, 10),
    z: number = getRandomMinMax(-10, 10)
  ) {
    return { x, y, z };
  }
}
