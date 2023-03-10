// ------------------------------------------------------------------------------
// π νλ‘ννΈ μ κ·Ό μ μ΄μ (Protected Access Modifier)
// β­οΈ URL : https://bit.ly/3X01Qmo
// ------------------------------------------------------------------------------
// - μΈλΆμμλ μ κ·Όμ΄ λΆκ°λ₯νμ§λ§, μλΈ ν΄λμ€μμλ μ κ·Ό κ°λ₯νλλ‘ μ κ·Ό μ μ΄λ₯Ό μ€μ ν  μ μμ΅λλ€.
// ------------------------------------------------------------------------------

// AdvancedPlayer ν΄λμ€μμ Player ν΄λμ€μ _score νλ‘νΌν°μ μ κ·Όν  μ μλλ‘ μ‘°μ ν©λλ€.

{
  type FullName = { role: string; nickname: string } | string;

  class Player {
    private _score: number;

    constructor(
      private nickname: string,
      private role: string,
      score: number = 0
    ) {
      this._score = score;
      this.boostScoreUp();
    }

    get score() {
      return this._score;
    }

    get fullName() {
      const { nickname, role } = this;
      return `${role} ${nickname}`;
    }

    set fullName(options: FullName) {
      if (typeof options === 'string') {
        const [role, nickname] = options.split(' ');
        this.role = role;
        this.nickname = nickname;
      } else {
        const { role, nickname } = options;
        this.role = role;
        this.nickname = nickname;
      }
    }

    private boostScoreUp(): void {
      this._score += 100;
    }

    public scoreUp(point: number): void {
      this._score += point;
    }

    public scoreDown(point: number): void {
      this._score -= point;
    }
  }

  class AdvancedPlayer extends Player {
    public hasSuperPower: boolean = true;

    fullScoreUp() {
      this._score = 99999;
    }
  }

  const yamoo9 = new AdvancedPlayer('yamoo9', 'λ©ν ');

  yamoo9.fullScoreUp();
  console.log(yamoo9.score);
}
