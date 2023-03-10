// ------------------------------------------------------------------------------
// ๐ ๋ฉํฐ ์ธํฐํ์ด์ค ์์ (Multiple Interface Inheritance)
// โญ๏ธ URL : https://bit.ly/3O1s5EE
// ------------------------------------------------------------------------------
// - ์ธํฐํ์ด์ค๋ ํ๋ ์ด์ ์ธํฐํ์ด์ค๋ฅผ ์์(ํ์ฅ)ํ  ์ ์์ต๋๋ค.
// ------------------------------------------------------------------------------

// Mouse, VerticalTypeMouse๋ฅผ ์์๋ฐ๋ SpecialMouse ์ธํฐํ์ด์ค๋ฅผ ๊ตฌํํฉ๋๋ค.

{
  interface Mouse {
    x: number;
    y: number;
    hasWheel: boolean;
  }

  interface VerticalTypeMouse {
    direction: 'Vertial';
  }

  interface SpecialMouse {
    releaseDate: number;
  }

  const myMouse: SpecialMouse = {
    x: 100,
    y: 120,
    hasWheel: true,
    direction: 'Vertial',
    releaseDate: 2022,
  };

  console.log(myMouse.releaseDate);
}

// Human, Employee๋ฅผ ์์๋ฐ๋ Developer ์ธํฐํ์ด์ค๋ฅผ ๊ตฌํํฉ๋๋ค.

{
  interface Human {
    name: string;
    age: number;
  }

  interface Employee {
    readonly id: string;
    email: string;
  }

  interface Developer {
    role: string;
    career: number;
    programmingLanguages: string[];
  }

  const teamLeader: Developer = {
    name: '๊น์ํธ',
    age: 51,
    id: 'employee-dicos',
    email: 'kimsh@employee.io',
    role: 'ํ์ฅ',
    career: 16,
    programmingLanguages: ['TypeScript', 'JavaScript', 'Go', 'Python'],
  };

  console.log(teamLeader.programmingLanguages);
}
