const getText = (quantitySlides, ids, paragraphs) => {
  let PKGParts = ``;
  let sldIdLst = ``;
  let lpstr = ``;
  for (let i = 0, j = 0; i < quantitySlides; i++, j += 2) {
    const id = Math.round(200 - 0.5 + Math.random() * (1900 - 200 + 1900));
    sldIdLst += `<p:sldId id="${id}" r:id="rId${ids[i + 1]}" />`;
    lpstr += `<vt:lpstr>${paragraphs[j]} ${paragraphs[j + 1]}</vt:lpstr>`;
    PKGParts += `   <pkg:part pkg:name="/ppt/slides/_rels/slide${ids[i]}.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
   <pkg:xmlData>
      <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
         <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout6.xml" />
      </Relationships>
   </pkg:xmlData>
</pkg:part>`;
  }
  return { PKGParts, sldIdLst, lpstr };
};

export default getText;
