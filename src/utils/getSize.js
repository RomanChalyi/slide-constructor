function getWidthOfText(txt, fontsize) {
  const canvas = document.createElement('canvas').getContext('2d');
  canvas.font = `bold ${fontsize}px Arial`;
  return canvas.measureText(txt).width;
}

const getSize = (firstLine, secondLine) => {
  let size = 40;
  const maxWidth = 710;
  let temp = true;
  while (temp) {
    temp = false;
    const firstLineWidth = getWidthOfText(firstLine, size);
    const secondLineWidth = getWidthOfText(secondLine, size);
    const maxLineWidth = Math.max(firstLineWidth, secondLineWidth);
    if (maxLineWidth > maxWidth) {
      size -= 0.5;
      temp = true;
    }
  }
  return size * 100;
};

export default getSize;
