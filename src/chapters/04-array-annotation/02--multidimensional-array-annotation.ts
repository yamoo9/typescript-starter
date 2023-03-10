// ------------------------------------------------------------------------------
// π λ€μ°¨μ λ°°μ΄ μλνμ΄μ (Multi Dimensional Array Annotation)
// β­οΈ URL : https://bit.ly/3g0owlB
// ------------------------------------------------------------------------------
// - λ°°μ΄ μμ μ€μ²©λ λ°°μ΄μ ν¬ν¨νλ λ€μ°¨μ λ°°μ΄ λν μλνμ΄μμ μ§μ ν  μ μμ΅λλ€.
// ------------------------------------------------------------------------------

// MultiDimensionalTypedArray μλνμ΄μμ μ€μ ν©λλ€.

{
  type MultiDimensionalTypedArray = [];

  type User = {
    readonly name: string;
    gender: string;
    job?: string;
  };

  const objectToIterator: MultiDimensionalTypedArray = [
    ['name', 'ν©μμ§'],
    ['gender', 'μ¬μ±'],
    ['job', 'λμμ΄λ'],
  ];

  const whangSujin: User = {
    name: 'ν©μμ§',
    gender: 'μ¬μ±',
    job: 'λμμ΄λ',
  };

  const whangSujinIterator: MultiDimensionalTypedArray =
    Object.entries(whangSujin);
}

// MultiDimensionalNumbers μλνμ΄μμ μ€μ ν©λλ€.
// MultiDimensionalNumbers μλνμ΄μμ Array<> λ¬Έλ²μΌλ‘ λ³κ²½ν©λλ€.

{
  type MultiDimensionalNumbers = number[];

  const numbers: MultiDimensionalNumbers = [
    [[101, 201]],
    [[301]],
    [[401, 501]],
  ];
}
