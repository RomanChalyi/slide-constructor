const getLine = (text, size) => {
  return `<a:r>
  <a:rPr lang="en-US"
    sz="${size}"
    b="1"
    dirty="0"
    smtClean="0">
    <a:latin typeface="+mn-lt"/>
  </a:rPr>
  <a:t>${text}</a:t>
</a:r>`;
};
export default getLine;
