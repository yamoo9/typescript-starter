// --------------------------------------------------------------------------
// π instanceof μ°μ°μ νμ λ²μ μΆμ (instanceof operator narrowing)
// β­οΈ URL : https://bit.ly/3g5zsOP
// --------------------------------------------------------------------------
// - JavaScript μΈμ΄μ instanceof μ°μ°μλ λ°μ΄ν°κ° νΉμ  ν΄λμ€μ μΈμ€ν΄μμΈμ§ νμΈν©λλ€.
// - μ΄ μ°μ°μλ₯Ό μ¬μ©νλ©΄ νΉμ  ν΄λμ€μ μΈμ€ν΄μ€μλ§ μ μ©λλλ‘ νμ λ²μλ₯Ό μΆμν  μ μμ΅λλ€.
// --------------------------------------------------------------------------

{
  // date νμ μ€ Date ν΄λμ€μ μΈμ€ν΄μ€ μ¬λΆλ₯Ό νλ³νλλ‘ νμ λ²μλ₯Ό μΆμν©λλ€.
  const printFullDate = (date: string | Date) => {
    return date.toLocaleString();
    return new Date(date).toLocaleString();
  };

  printFullDate(new Date());
  printFullDate('2022. 08. 12');
}

{
  class Employee {
    constructor(public id: string, public fullname: string) {
      this.id = id;
      this.fullname = fullname;
    }
  }

  class Company {
    constructor(public name: string) {
      this.name = name;
    }
  }

  // entity νμμ΄ μ΄λ€ ν΄λμ€μ μΈμ€ν΄μ€μΈμ§ μ¬λΆλ₯Ό νλ³ν  μ μλλ‘ νμ λ²μλ₯Ό μΆμν©λλ€.
  function printName(entity: Employee | Company) {
    return entity.name;
    return entity.fullname;
  }

  printName(new Employee('cikd3zlwj@9', 'yamoo9'));
  printName(new Company('EUID'));
}
