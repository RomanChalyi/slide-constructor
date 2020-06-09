const getRelationshipsCreatedSlide = (slides) => {
  return slides.reduce((acc, slide, i) => {
    return (acc += `<Relationship Id="rId${
      slide.index
    }" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide${1 + i}.xml" />`)
  }, '')
}

const getAllRelationships = (relationshipsCreatedSlides, quantitySlides) => {
  return ` <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml" />
  ${relationshipsCreatedSlides}
  <Relationship Id="rId${
    2 + quantitySlides
  }" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesMaster" Target="notesMasters/notesMaster1.xml" />
  <Relationship Id="rId${
    3 + quantitySlides
  }" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/presProps" Target="presProps.xml" />
  <Relationship Id="rId${
    4 + quantitySlides
  }" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/viewProps" Target="viewProps.xml" />
  <Relationship Id="rId${
    5 + quantitySlides
  }" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml" />
  <Relationship Id="rId${
    6 + quantitySlides
  }" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/tableStyles" Target="tableStyles.xml" />
</Relationships>`
}

const getRelationships = (slides) => {
  const relationshipsCreatedSlides = getRelationshipsCreatedSlide(slides)
  const quantitySlides = slides.length
  const allRelationships = getAllRelationships(relationshipsCreatedSlides, quantitySlides)

  return `<pkg:part pkg:name="/ppt/_rels/presentation.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml" pkg:padding="256">
  <pkg:xmlData>
  ${allRelationships}
  </pkg:xmlData>
</pkg:part>
<pkg:part pkg:name="/ppt/presentation.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml">
  <pkg:xmlData>
     <p:presentation xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" saveSubsetFonts="1">
        <p:sldMasterIdLst>
           <p:sldMasterId id="2147483684" r:id="rId1" />
        </p:sldMasterIdLst>
        <p:notesMasterIdLst>
           <p:notesMasterId r:id="rId${2 + quantitySlides}" />
        </p:notesMasterIdLst>
        <p:sldIdLst>`
}

export default getRelationships
