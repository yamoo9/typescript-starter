// ------------------------------------------------------------------------------
// π μ½κΈ°μ μ© ν΄λμ€ νλ (Readonly Class Fields)
// β­οΈ URL : https://bit.ly/3TxbA4C
// ------------------------------------------------------------------------------
// - μΌλΆ μΈμ€ν΄μ€ νλ‘νΌν°λ₯Ό μ½κΈ°μ μ©μΌλ‘ μ€μ ν  μ μμ΅λλ€.
// ------------------------------------------------------------------------------

// nickname, role μΈμ€ν΄μ€ νλ‘νΌν° κ°μ μμ± μ΄ν λ³κ²½ν  μ μλλ‘ μ½κΈ°μ μ©μΌλ‘ μ€μ ν©λλ€.

{
  class Player {
    nickname: string;
    role: string;
    score: number = 0;

    constructor(nickname: string, role: string) {
      this.nickname = nickname;
      this.role = role;
    }

    scoreUp(point: number): void {
      this.score += point;
    }

    scoreDown(point: number): void {
      this.score -= point;
    }
  }

  const yamoo9 = new Player('yamoo9', 'λ©ν ');

  // π¨ Player κ°μ²΄ μμ± μ΄ν nickname, role λ³κ²½μ΄ λμλ μλ©λλ€!
  yamoo9.nickname = 'employer';
  yamoo9.role = 'CEO';

  yamoo9.scoreUp(20);
  console.log(yamoo9.score);

  yamoo9.scoreDown(12);
  console.log(yamoo9.score);
}
