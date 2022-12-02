import fetch from "node-fetch";

const func = async () => {
  const data = await fetch('https://adventofcode.com/2022/day/1/input',
    {
      method: 'GET',
      headers: {
        "cookie": "_ga = GA1.2.1961698673.1669409795; _gid=GA1.2.881923312.1669732539; session=53616c7465645f5fe0ab9b65d473cec5c175b750b47c583a9d8fd6693bfcf6ba3fb139f2459acb52b49e74fee2a1c9e73c3be2677bb86829b7545cb8ac490078",

      }
    }
  );
  const text = await data.text();
  const arr = text.split('\n')

  const part1 = () => {
    let sum = 0;
    let max = 0
    for (const val of arr) {
      if (val === '') {
        max = Math.max(max, sum)
        sum = 0
      } else {
        sum += parseInt(val)
      }
    }
    return max
  }


  const part2 = () => {
    const sums = []
    let sum = 0;
    for (const val of arr) {
      if (val === '') {
        sums.push(sum)
        sum = 0
      } else {
        sum += parseInt(val)
      }
    }
    sums.push(sum)
    return sums.sort((a, b) => b - a).slice(0, 3).reduce((acc, curr) => acc + curr, 0)
  }
  return part2()
};
const temp = func();
temp.then((res) => console.log(res));