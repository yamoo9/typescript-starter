// ---------------------------------------------------------------------------------
// π ν¨μ λ§€κ°λ³μ νμ(Function Parameter Type)
// β­οΈ URL : https://bit.ly/3UVCUur
// ---------------------------------------------------------------------------------
// - ν¨μ λ§€κ°λ³μ νμμ μ§μ ν  μ μμ΅λλ€.
// - TypeScriptλ λ§€κ°λ³μ νμ μλνμ΄μμ ν΅ν΄ κ°μ μ νμ μ΄ν΄νκ³  κ²μ¬λ₯Ό μνν©λλ€.
// - ν¨μμ λ§€κ°λ³μμ νμμ μ§μ νλ λ°©λ²μ λ³μμ νμμ μ§μ νλ κ²κ³Ό λμΌν©λλ€.
// ---------------------------------------------------------------------------------

{
  /**
   * λμλ₯Ό λ°ννλ ν¨μ
   * ECMAScript(JavaScript) vs. TypeScript
   * @param n number
   */
  function getRandom(n) {
    if (typeof n !== 'number') {
      throw new TypeError(
        `n λ§€κ°λ³μ νμμ numberμ¬μΌ ν©λλ€. (μ λ¬ κ° νμ ${typeof n})`
      );
    }
    return Math.floor(Math.random() * n);
  }

  getRandom(101);
  getRandom('101');
  getRandom('one zero one');

  /**
   * μ΅μκ°, μ΅λκ° μ¬μ΄μ λμλ₯Ό λ°ννλ ν¨μ
   * @param min number
   * @param max number
   */
  function getRandomMinMax(min, max) {
    min();
    max.toLowerCase();
    return getRandom(max - min) + min;
  }

  getRandomMinMax('min', 'max');
}

// ---------------------------------------------------------------------------------

{
  // ν¨μ λ§€κ°λ³μ μλνμ΄μμ΄ μ€μ λ κ²½μ°
  const sendGreeting = (
    toName: string,
    fromName: string,
    isMorning: boolean,
    currentYear: number
  ) => {
    let thisTime = isMorning ? 'μ€μ ' : 'μ€ν';
    return `μλ ${toName}! μ’μ ${thisTime}μ΄ λκΈΈ λ°λΌ. νλ³΅ν ${currentYear} ν ν΄κ° λκΈΈ! - λΉμ μ ${fromName}`;
  };

  // ν¨μ λ§€κ°λ³μ μμ­μ ν΄λ©(folding)ν ν, ν¨μ μ€ν κ΅¬λ¬Έμ μμ±ν΄λ΄λλ€.
}
