const getRelationships = (quantitySlides, ids) => {
  let relationships = ``;
  for (let i = 0; i < quantitySlides; i++) {
    relationships += `<Relationship Id="rId${
      ids[i + 1]
    }" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide${
      1 + i
    }.xml" />`;
  }

  return ` <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml" />
  ${relationships}
  <Relationship Id="rId${
    ids[1 + quantitySlides]
  }" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesMaster" Target="notesMasters/notesMaster1.xml" />
  <Relationship Id="rId${
    ids[2 + quantitySlides]
  }" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/presProps" Target="presProps.xml" />
  <Relationship Id="rId${
    ids[3 + quantitySlides]
  }" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/viewProps" Target="viewProps.xml" />
  <Relationship Id="rId${
    ids[4 + quantitySlides]
  }" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" />
  <Relationship Id="rId${
    ids[5 + quantitySlides]
  }" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/tableStyles" Target="tableStyles.xml" />
</Relationships>`;
};

export default getRelationships;
