import getBreak from './getBreak'

const getLine = (text, fontSize) => {
  return `  <a:p>
  <a:pPr lvl="1"/>
  <a:r> <a:rPr lang="ru-RU"
  sz="${fontSize}"
  b="1"
  i="1"
  dirty="0"
  smtClean="0"/>
<a:t>${text}</a:t>
</a:r>
<a:endParaRPr lang="en-US"
  sz="3800"
  b="1"
  i="1"
  dirty="0"
  smtClean="0"/>
</a:p>`
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
    // acc += getBreak(fontSize)

    return acc
  }, '')
}

const getPreachingSlide = (slide) => {
  const index = slide.index - 1
  const slideText = getSlideText(slide)

  return ` <pkg:part pkg:name="/ppt/slides/slide${index}.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml">
<pkg:xmlData>
  <p:sld showMasterSp="0" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
    <p:cSld>
      <p:spTree>
        <p:nvGrpSpPr>
          <p:cNvPr id="1" name=""/>
          <p:cNvGrpSpPr/>
          <p:nvPr/>
        </p:nvGrpSpPr>
        <p:grpSpPr>
          <a:xfrm>
            <a:off x="0" y="0"/>
            <a:ext cx="0" cy="0"/>
            <a:chOff x="0" y="0"/>
            <a:chExt cx="0" cy="0"/>
          </a:xfrm>
        </p:grpSpPr>
        <p:sp>
          <p:nvSpPr>
            <p:cNvPr id="3" name="Rectangle 4"/>
            <p:cNvSpPr txBox="1">
              <a:spLocks noChangeArrowheads="1"/>
            </p:cNvSpPr>
            <p:nvPr/>
          </p:nvSpPr>
          <p:spPr>
            <a:xfrm>
              <a:off x="0" y="0"/>
              <a:ext cx="6023992" cy="6858000"/>
            </a:xfrm>
            <a:prstGeom prst="rect">
              <a:avLst/>
            </a:prstGeom>
          </p:spPr>
          <p:txBody>
            <a:bodyPr lIns="0"
              tIns="0"
              rIns="0"
              bIns="0"
              anchor="ctr">
              <a:noAutofit/>
            </a:bodyPr>
            <a:lstStyle>
              <a:lvl1pPr algn="l"
                rtl="0"
                eaLnBrk="0"
                fontAlgn="base"
                hangingPunct="0">
                <a:spcBef>
                  <a:spcPct val="0"/>
                </a:spcBef>
                <a:spcAft>
                  <a:spcPct val="0"/>
                </a:spcAft>
                <a:defRPr sz="4600" kern="1200">
                  <a:solidFill>
                    <a:schemeClr val="tx1"/>
                  </a:solidFill>
                  <a:latin typeface="+mj-lt"/>
                  <a:ea typeface="+mj-ea"/>
                  <a:cs typeface="+mj-cs"/>
                </a:defRPr>
              </a:lvl1pPr>
              <a:lvl2pPr algn="l"
                rtl="0"
                eaLnBrk="0"
                fontAlgn="base"
                hangingPunct="0">
                <a:spcBef>
                  <a:spcPct val="0"/>
                </a:spcBef>
                <a:spcAft>
                  <a:spcPct val="0"/>
                </a:spcAft>
                <a:defRPr sz="4600">
                  <a:solidFill>
                    <a:schemeClr val="tx1"/>
                  </a:solidFill>
                  <a:latin typeface="Franklin Gothic Book" pitchFamily="34" charset="0"/>
                </a:defRPr>
              </a:lvl2pPr>
              <a:lvl3pPr algn="l"
                rtl="0"
                eaLnBrk="0"
                fontAlgn="base"
                hangingPunct="0">
                <a:spcBef>
                  <a:spcPct val="0"/>
                </a:spcBef>
                <a:spcAft>
                  <a:spcPct val="0"/>
                </a:spcAft>
                <a:defRPr sz="4600">
                  <a:solidFill>
                    <a:schemeClr val="tx1"/>
                  </a:solidFill>
                  <a:latin typeface="Franklin Gothic Book" pitchFamily="34" charset="0"/>
                </a:defRPr>
              </a:lvl3pPr>
              <a:lvl4pPr algn="l"
                rtl="0"
                eaLnBrk="0"
                fontAlgn="base"
                hangingPunct="0">
                <a:spcBef>
                  <a:spcPct val="0"/>
                </a:spcBef>
                <a:spcAft>
                  <a:spcPct val="0"/>
                </a:spcAft>
                <a:defRPr sz="4600">
                  <a:solidFill>
                    <a:schemeClr val="tx1"/>
                  </a:solidFill>
                  <a:latin typeface="Franklin Gothic Book" pitchFamily="34" charset="0"/>
                </a:defRPr>
              </a:lvl4pPr>
              <a:lvl5pPr algn="l"
                rtl="0"
                eaLnBrk="0"
                fontAlgn="base"
                hangingPunct="0">
                <a:spcBef>
                  <a:spcPct val="0"/>
                </a:spcBef>
                <a:spcAft>
                  <a:spcPct val="0"/>
                </a:spcAft>
                <a:defRPr sz="4600">
                  <a:solidFill>
                    <a:schemeClr val="tx1"/>
                  </a:solidFill>
                  <a:latin typeface="Franklin Gothic Book" pitchFamily="34" charset="0"/>
                </a:defRPr>
              </a:lvl5pPr>
              <a:lvl6pPr marL="457200" algn="l" rtl="0" fontAlgn="base">
                <a:spcBef>
                  <a:spcPct val="0"/>
                </a:spcBef>
                <a:spcAft>
                  <a:spcPct val="0"/>
                </a:spcAft>
                <a:defRPr sz="4600">
                  <a:solidFill>
                    <a:schemeClr val="tx1"/>
                  </a:solidFill>
                  <a:latin typeface="Franklin Gothic Book" pitchFamily="34" charset="0"/>
                </a:defRPr>
              </a:lvl6pPr>
              <a:lvl7pPr marL="914400" algn="l" rtl="0" fontAlgn="base">
                <a:spcBef>
                  <a:spcPct val="0"/>
                </a:spcBef>
                <a:spcAft>
                  <a:spcPct val="0"/>
                </a:spcAft>
                <a:defRPr sz="4600">
                  <a:solidFill>
                    <a:schemeClr val="tx1"/>
                  </a:solidFill>
                  <a:latin typeface="Franklin Gothic Book" pitchFamily="34" charset="0"/>
                </a:defRPr>
              </a:lvl7pPr>
              <a:lvl8pPr marL="1371600" algn="l" rtl="0" fontAlgn="base">
                <a:spcBef>
                  <a:spcPct val="0"/>
                </a:spcBef>
                <a:spcAft>
                  <a:spcPct val="0"/>
                </a:spcAft>
                <a:defRPr sz="4600">
                  <a:solidFill>
                    <a:schemeClr val="tx1"/>
                  </a:solidFill>
                  <a:latin typeface="Franklin Gothic Book" pitchFamily="34" charset="0"/>
                </a:defRPr>
              </a:lvl8pPr>
              <a:lvl9pPr marL="1828800" algn="l" rtl="0" fontAlgn="base">
                <a:spcBef>
                  <a:spcPct val="0"/>
                </a:spcBef>
                <a:spcAft>
                  <a:spcPct val="0"/>
                </a:spcAft>
                <a:defRPr sz="4600">
                  <a:solidFill>
                    <a:schemeClr val="tx1"/>
                  </a:solidFill>
                  <a:latin typeface="Franklin Gothic Book" pitchFamily="34" charset="0"/>
                </a:defRPr>
              </a:lvl9pPr>
            </a:lstStyle>
                ${slideText}

          </p:txBody>
        </p:sp>
      </p:spTree>
      <p:extLst>
        <p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">
          <p14:creationId val="2906823740" xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main"/>
        </p:ext>
      </p:extLst>
    </p:cSld>
    <p:clrMapOvr>
      <a:masterClrMapping/>
    </p:clrMapOvr>
    <p:timing>
      <p:tnLst>
        <p:par>
          <p:cTn id="1" dur="indefinite" restart="never" nodeType="tmRoot"/>
        </p:par>
      </p:tnLst>
    </p:timing>
  </p:sld>
</pkg:xmlData>
</pkg:part>`
}

export default getPreachingSlide
