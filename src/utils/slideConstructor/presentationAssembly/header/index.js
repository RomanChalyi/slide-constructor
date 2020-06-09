import { HEADER, FOOTER } from './constants'
import getRelationships from './getRelationships'

const getHeaderData = (slides) => {
  const headerData = slides.reduce(
    (acc, slide) => {
      acc.PKGParts += `<pkg:part pkg:name="/ppt/slides/_rels/slide${
        slide.index - 1
      }.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
    <pkg:xmlData>
       <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
          <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout6.xml" />
       </Relationships>   
    </pkg:xmlData>   
 </pkg:part>`

      acc.sldIdLst += `<p:sldId id="${slide.id}" r:id="rId${slide.index}" />`
      return acc
    },
    { PKGParts: '', sldIdLst: '' }
  )
  return headerData
}

const getHeaderPresentation = (slides) => {
  const { PKGParts, sldIdLst } = getHeaderData(slides)
  const relationships = getRelationships(slides)

  const header = HEADER + PKGParts + relationships + sldIdLst + FOOTER
  // return sldIdLst
  return header
}

export default getHeaderPresentation
