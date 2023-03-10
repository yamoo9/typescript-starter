// ------------------------------------------------------------------------------
// π κ²ν° & μΈν° (Getter & Setter)
// β­οΈ URL : https://bit.ly/3GbEdRA
// ------------------------------------------------------------------------------
// - κ²ν°, μΈν°λ₯Ό μ¬μ©ν΄ λΉκ³΅κ° νλ‘νΌν° μ‘°ν©μ μ½κ±°λ, μΈ μ μλλ‘ κ΅¬μ±ν  μ μμ΅λλ€.
// ------------------------------------------------------------------------------

// score νλ‘νΌν°λ₯Ό μ½μ μ μλλ‘ μ€μ ν©λλ€.
// λ¨, μ§μ  score νλ‘νΌν° κ°μ μμ ν  μλ μμ΅λλ€.

// fullName νλ‘νΌν°λ₯Ό κ΅¬μ±ν©λλ€.
// - getterλ₯Ό μ¬μ©ν΄ `role nickname` μ‘°ν© κ°μ λ°ννλλ‘ ν©λλ€.
// - setterλ₯Ό μ¬μ©ν΄ role λλ nickname κ°μ μμ ν  μ μλλ‘ κ΅¬νν©λλ€.

// FullName νμ λ³μΉ­μ΄ νμν κ²½μ° μΆκ°ν©λλ€.

{
  class Player {
    constructor(
      private readonly nickname: string,
      private readonly role: string,
      private score: number = 0
    ) {
      this.boostScoreUp();
    }

    private boostScoreUp(): void {
      this.score += 100;
    }

    public scoreUp(point: number): void {
      this.score += point;
    }

    public scoreDown(point: number): void {
      this.score -= point;
    }
  }

  const yamoo9 = new Player('yamoo9', 'λ©ν ');

  console.log(yamoo9.score);
  console.log(yamoo9.fullName);
}
