import getBreak from './getBreak'

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
 </a:r>`
}

const getSlideText = (slide) => {
  const { text, fontSize } = slide

  if (text.length === 1) {
    return getLine(text[0], fontSize)
  }
  const textQuantity = text.length

  return text.reduce((acc, line, index) => {
    acc += getLine(line, fontSize)
    if (textQuantity - 1 === index) {
      return acc
    }
    acc += getBreak(fontSize)

    return acc
  }, '')
}

const getSongSlide = (slide) => {
  const index = slide.index - 1
  const slideText = getSlideText(slide)

  return `<pkg:part pkg:name="/ppt/slides/slide${index}.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml">
<pkg:xmlData>
   <p:sld xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
      <p:cSld>
         <p:spTree>
            <p:nvGrpSpPr>
               <p:cNvPr id="1" name="" />
               <p:cNvGrpSpPr />
               <p:nvPr />
            </p:nvGrpSpPr>
            <p:grpSpPr>
               <a:xfrm>
                  <a:off x="0" y="0" />
                  <a:ext cx="0" cy="0" />
                  <a:chOff x="0" y="0" />
                  <a:chExt cx="0" cy="0" />
               </a:xfrm>
            </p:grpSpPr>
            <p:sp>
               <p:nvSpPr>
                  <p:cNvPr id="2052" name="Rectangle 4" />
                  <p:cNvSpPr>
                     <a:spLocks noGrp="1" noChangeArrowheads="1" />
                  </p:cNvSpPr>
                  <p:nvPr>
                     <p:ph type="title" />
                  </p:nvPr>
               </p:nvSpPr>
               <p:spPr>
                  <a:xfrm>
                     <a:off x="1524000" y="0" />
                     <a:ext cx="9144000" cy="6525344" />
                  </a:xfrm>
               </p:spPr>
               <p:txBody>
                  <a:bodyPr anchor="b">
                     <a:normAutofit />
                  </a:bodyPr>
                  <a:lstStyle />
                  <a:p>
                     <a:pPr marL="0" indent="0" algn="ctr" />
                     ${slideText}
                     <a:endParaRPr lang="ru-RU" sz="4000" b="1" dirty="0">
                        <a:latin typeface="+mn-lt" />
                     </a:endParaRPr>
                  </a:p>
               </p:txBody>
            </p:sp>
         </p:spTree>
         <p:extLst>
            <p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">
               <p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="3356205144" />
            </p:ext>
         </p:extLst>
      </p:cSld>
      <p:clrMapOvr>
         <a:masterClrMapping />
      </p:clrMapOvr>
      <p:timing>
         <p:tnLst>
            <p:par>
               <p:cTn id="1" dur="indefinite" restart="never" nodeType="tmRoot" />
            </p:par>
         </p:tnLst>
      </p:timing>
   </p:sld>
</pkg:xmlData>
</pkg:part>`
}

export default getSongSlide
