const generateBoard = (whiteQueen, blackQueen) => {
  let arr = [];
  for (let i = 0; i < 8; i++) {
    let subArr = [];
    for (let j = 0; j < 8; j++) {
      subArr.push(0);
    }
    arr.push(subArr);
  }
  arr[whiteQueen[0]][whiteQueen[1]] = 1;
  arr[blackQueen[0]][blackQueen[1]] = 1;
  return arr;
};

const queenThreat = () => {
  let wX = whiteQueen[0],
    wY = whiteQueen[1],
    bX = blackQueen[0],
    bY = blackQueen[1];
  return wX === bX
    ? true
    : wY === bY
    ? true
    : wX - bY === bX - wY
    ? true
    : wX - wY === bX - bY
    ? true
    : false;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat());
