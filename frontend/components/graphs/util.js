const colorKey = {
  10: '#00d1a7',
  9: '#32dab8',
  8: '#7fe8d3',
  7: '#fac38c',
  6: '#e59a9a',
}

const gradeKey = {
  10: 'A',
  9: 'A',
  8: 'B',
  7: 'C',
  6: 'D'
}

export const colorByPercentage = (percentage) => {
  return colorKey[Math.floor(percentage/10)] || '#cb3535';
}

export const gradeByPercentage = (percentage) => {
  return gradeKey[Math.floor(percentage/10)] || 'F';
}
