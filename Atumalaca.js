elderAge(26, 26, 3, 100);

function elderAge(columns, rows, lostTime, timeMax) {
  let sum = 0;

  if (columns <= 0 || rows <= 0) {
    return 0;
  }

  if (columns == rows || Number.isInteger(maxBin(columns))) {
    for (let i = 0; i < columns; i++) {
      sum += Math.max(0, i - lostTime);
    }
  }

  if (columns < rows) {
    [columns, rows] = [rows, columns];
  }
  let m2 = Math.pow(2, maxBin(columns));

  
  
  
  
  
  sum = sum % timeMax;
}

function maxBin(value) {
  return Math.log2(value);
} // Finds the amount of bits necessary to represent the given value in binary
