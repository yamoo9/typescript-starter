// ------------------------------------------------------------------------------
// π λ§€κ°λ³μ νλ‘νΌνΈ λ¨μΆ (Parameters Properties Shorthand)
// β­οΈ URL : https://bit.ly/3XbJrmL
// ------------------------------------------------------------------------------
// - μμ±μ λ§€κ°λ³μμ μΈμ€ν΄μ€ νλ‘νΌν° μ΄λ¦μ΄ λμΌνλ€λ©΄ λ¨μΆ νκΈ°λ²μ μ¬μ©ν  μλ μμ΅λλ€.
// ------------------------------------------------------------------------------

// λ¨μΆ νκΈ°λ²μ μ¬μ©ν΄ λͺ¨λ  νλ‘νΌν°λ₯Ό μμ±μμ λ§€κ°λ³μλ‘ μ¬κ΅¬μ±ν©λλ€.

{
  class Player {
    public readonly nickname: string;
    public readonly role: string;
    private score: number = 0;

    constructor(nickname: string, role: string) {
      this.nickname = nickname;
      this.role = role;
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

  yamoo9.boostScoreUp();
  console.log(yamoo9.score);
}
