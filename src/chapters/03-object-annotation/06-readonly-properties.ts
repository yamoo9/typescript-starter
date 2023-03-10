// ------------------------------------------------------------------------------
// π μ½κΈ°μ μ© νλ‘νΌν° (Readonly Properties)
// β­οΈ URL : https://bit.ly/3EoL9sn
// ------------------------------------------------------------------------------
// - κ°μ²΄μ μ§μ λ μλνμ΄μ μ€ μΌλΆλ₯Ό μ½κΈ° μ μ©(readonly)μΌλ‘ μ€μ ν  μ μμ΅λλ€.
// ------------------------------------------------------------------------------

// Member νμ λ³μΉ­μ id νλ‘νΌν°λ₯Ό μ½κΈ° μ μ©μΌλ‘ μ€μ ν΄ μμλ‘ μμ ν  μ μλλ‘ ν©λλ€.

{
  type Member = {
    id: string;
    name: string;
    age: number;
    job?: string;
    isAdmin: boolean;
  };

  const guest: Member = {
    id: 'guest-101',
    name: 'μ΄μ² μ©',
    age: 17,
    isAdmin: false,
  };

  guest.id = 'administrator-ze82Kd';

  const administrator: Member = {
    id: 'administrator-ze82Kd',
    name: 'κ΄λ¦¬μ',
    age: 56,
    isAdmin: true,
  };

  administrator.id = 'guest-101';
}
