// ------------------------------------------------------------------------------
// π μ΅μλ νλ‘νΌν° (Optional Properties)
// β­οΈ URL : https://bit.ly/3hAmKbo
// ------------------------------------------------------------------------------
// - κ°μ²΄μ μ§μ λ μλνμ΄μ μ€ μΌλΆλ₯Ό μ νμ μΌλ‘ μ€μ ν  μ μλλ‘ μ§μ ν  μ μμ΅λλ€.
// ------------------------------------------------------------------------------

{
  type Point = {
    x: number;
    y: number;
    z: number;
  };

  const generatePoint = (x: number, y: number): Point => {
    return { x, y };
  };

  const calcPointValues = (point: Point) =>
    Object.entries(point).reduce((total, [, value]) => total + value, 0);

  const anyPoint: Point = { x: 10, y: -20 };

  calcPointValues(anyPoint);
}
