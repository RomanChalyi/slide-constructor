import getRelationships from './getRelationships'
import getBlocks from './songTemplate/getBlocks'
import getText from './getText'
import getIds from './getIds'
import getLines from './getLines'
import Presentation from './slideConstructor/presentation'

const getSlide = (textSong, createEmptySlides, formData) => {
  const lines = getLines(textSong)
  //   console.log(lines, 'lines')
  const presentation = new Presentation(formData)
  console.log(presentation, 'presentation')
  const quantitySlides = createEmptySlides ? Math.ceil(lines.length / 2) + 2 : Math.ceil(lines.length / 2)

  const ids = getIds(quantitySlides)
  //   console.log(ids, 'ids')
  const { PKGParts, sldIdLst, lpstr } = getText(quantitySlides, ids, lines)
  const relationships = getRelationships(quantitySlides, ids)
  const blocks = getBlocks(quantitySlides, lines, createEmptySlides)
  const stringSlides = `<?xml version="1.0" encoding="UTF-8"?>
  <?mso-application progid="PowerPoint.Show"?>
  <pkg:package xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage">
     <pkg:part pkg:name="/_rels/.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml" pkg:padding="512">
        <pkg:xmlData>
           <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
              <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml" />
              <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml" />
              <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml" />
           </Relationships>
        </pkg:xmlData>
     </pkg:part>
  ${PKGParts}
     <pkg:part pkg:name="/ppt/_rels/presentation.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml" pkg:padding="256">
        <pkg:xmlData>
        ${relationships}
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
              <p:sldIdLst>
                 ${sldIdLst}
              </p:sldIdLst>
              <p:sldSz cx="12192000" cy="6858000" />
              <p:notesSz cx="6858000" cy="9144000" />
              <p:defaultTextStyle>
                 <a:defPPr>
                    <a:defRPr lang="ru-RU" />
                 </a:defPPr>
                 <a:lvl1pPr algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                    <a:spcBef>
                       <a:spcPct val="0" />
                    </a:spcBef>
                    <a:spcAft>
                       <a:spcPct val="0" />
                    </a:spcAft>
                    <a:defRPr kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="Tahoma" panose="020B0604030504040204" pitchFamily="34" charset="0" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl1pPr>
                 <a:lvl2pPr marL="457200" algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                    <a:spcBef>
                       <a:spcPct val="0" />
                    </a:spcBef>
                    <a:spcAft>
                       <a:spcPct val="0" />
                    </a:spcAft>
                    <a:defRPr kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="Tahoma" panose="020B0604030504040204" pitchFamily="34" charset="0" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl2pPr>
                 <a:lvl3pPr marL="914400" algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                    <a:spcBef>
                       <a:spcPct val="0" />
                    </a:spcBef>
                    <a:spcAft>
                       <a:spcPct val="0" />
                    </a:spcAft>
                    <a:defRPr kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="Tahoma" panose="020B0604030504040204" pitchFamily="34" charset="0" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl3pPr>
                 <a:lvl4pPr marL="1371600" algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                    <a:spcBef>
                       <a:spcPct val="0" />
                    </a:spcBef>
                    <a:spcAft>
                       <a:spcPct val="0" />
                    </a:spcAft>
                    <a:defRPr kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="Tahoma" panose="020B0604030504040204" pitchFamily="34" charset="0" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl4pPr>
                 <a:lvl5pPr marL="1828800" algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                    <a:spcBef>
                       <a:spcPct val="0" />
                    </a:spcBef>
                    <a:spcAft>
                       <a:spcPct val="0" />
                    </a:spcAft>
                    <a:defRPr kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="Tahoma" panose="020B0604030504040204" pitchFamily="34" charset="0" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl5pPr>
                 <a:lvl6pPr marL="2286000" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                    <a:defRPr kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="Tahoma" panose="020B0604030504040204" pitchFamily="34" charset="0" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl6pPr>
                 <a:lvl7pPr marL="2743200" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                    <a:defRPr kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="Tahoma" panose="020B0604030504040204" pitchFamily="34" charset="0" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl7pPr>
                 <a:lvl8pPr marL="3200400" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                    <a:defRPr kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="Tahoma" panose="020B0604030504040204" pitchFamily="34" charset="0" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl8pPr>
                 <a:lvl9pPr marL="3657600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                    <a:defRPr kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="Tahoma" panose="020B0604030504040204" pitchFamily="34" charset="0" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl9pPr>
              </p:defaultTextStyle>
              <p:extLst>
                 <p:ext uri="{EFAFB233-063F-42B5-8137-9DF3F51BA10A}">
                    <p15:sldGuideLst xmlns:p15="http://schemas.microsoft.com/office/powerpoint/2012/main">
                       <p15:guide id="1" orient="horz" pos="2160" userDrawn="1">
                          <p15:clr>
                             <a:srgbClr val="A4A3A4" />
                          </p15:clr>
                       </p15:guide>
                       <p15:guide id="2" pos="3840" userDrawn="1">
                          <p15:clr>
                             <a:srgbClr val="A4A3A4" />
                          </p15:clr>
                       </p15:guide>
                    </p15:sldGuideLst>
                 </p:ext>
              </p:extLst>
           </p:presentation>
        </pkg:xmlData>
     </pkg:part>
     ${blocks}
     <pkg:part pkg:name="/ppt/slideMasters/slideMaster1.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml">
        <pkg:xmlData>
           <p:sldMaster xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
              <p:cSld>
                 <p:bg>
                    <p:bgPr>
                       <a:solidFill>
                          <a:schemeClr val="bg1" />
                       </a:solidFill>
                       <a:effectLst />
                    </p:bgPr>
                 </p:bg>
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
                          <p:cNvPr id="12" name="Полилиния 11" />
                          <p:cNvSpPr>
                             <a:spLocks />
                          </p:cNvSpPr>
                          <p:nvPr />
                       </p:nvSpPr>
                       <p:spPr bwMode="auto">
                          <a:xfrm>
                             <a:off x="0" y="4751388" />
                             <a:ext cx="12192000" cy="2112962" />
                          </a:xfrm>
                          <a:custGeom>
                             <a:avLst>
                                <a:gd name="A1" fmla="val 0" />
                                <a:gd name="A2" fmla="val 0" />
                                <a:gd name="A3" fmla="val 0" />
                                <a:gd name="A4" fmla="val 0" />
                                <a:gd name="A5" fmla="val 0" />
                                <a:gd name="A6" fmla="val 0" />
                                <a:gd name="A7" fmla="val 0" />
                                <a:gd name="A8" fmla="val 0" />
                             </a:avLst>
                             <a:gdLst />
                             <a:ahLst />
                             <a:cxnLst>
                                <a:cxn ang="0">
                                   <a:pos x="0" y="1066" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="0" y="1331" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="5760" y="1331" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="5760" y="0" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="0" y="1066" />
                                </a:cxn>
                             </a:cxnLst>
                             <a:rect l="0" t="0" r="0" b="0" />
                             <a:pathLst>
                                <a:path w="5760" h="1331">
                                   <a:moveTo>
                                      <a:pt x="0" y="1066" />
                                   </a:moveTo>
                                   <a:lnTo>
                                      <a:pt x="0" y="1331" />
                                   </a:lnTo>
                                   <a:lnTo>
                                      <a:pt x="5760" y="1331" />
                                   </a:lnTo>
                                   <a:lnTo>
                                      <a:pt x="5760" y="0" />
                                   </a:lnTo>
                                   <a:cubicBezTo>
                                      <a:pt x="3220" y="1206" />
                                      <a:pt x="2250" y="1146" />
                                      <a:pt x="0" y="1066" />
                                   </a:cubicBezTo>
                                   <a:close />
                                </a:path>
                             </a:pathLst>
                          </a:custGeom>
                          <a:solidFill>
                             <a:schemeClr val="bg1">
                                <a:tint val="80000" />
                                <a:satMod val="200000" />
                                <a:alpha val="45000" />
                             </a:schemeClr>
                          </a:solidFill>
                          <a:ln w="9525" cap="flat" cmpd="sng" algn="ctr">
                             <a:noFill />
                             <a:prstDash val="solid" />
                             <a:round />
                             <a:headEnd type="none" w="med" len="med" />
                             <a:tailEnd type="none" w="med" len="med" />
                          </a:ln>
                          <a:effectLst>
                             <a:outerShdw blurRad="50800" dist="44450" dir="16200000" algn="ctr" rotWithShape="0">
                                <a:prstClr val="black">
                                   <a:alpha val="35000" />
                                </a:prstClr>
                             </a:outerShdw>
                          </a:effectLst>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle />
                          <a:p>
                             <a:pPr eaLnBrk="1" hangingPunct="1">
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="16" name="Полилиния 15" />
                          <p:cNvSpPr>
                             <a:spLocks />
                          </p:cNvSpPr>
                          <p:nvPr />
                       </p:nvSpPr>
                       <p:spPr bwMode="auto">
                          <a:xfrm>
                             <a:off x="9753600" y="0" />
                             <a:ext cx="2438400" cy="6858000" />
                          </a:xfrm>
                          <a:custGeom>
                             <a:avLst />
                             <a:gdLst>
                                <a:gd name="connsiteX0" fmla="*/ 1914 w 1914" />
                                <a:gd name="connsiteY0" fmla="*/ 9 h 4329" />
                                <a:gd name="connsiteX1" fmla="*/ 1914 w 1914" />
                                <a:gd name="connsiteY1" fmla="*/ 4329 h 4329" />
                                <a:gd name="connsiteX2" fmla="*/ 204 w 1914" />
                                <a:gd name="connsiteY2" fmla="*/ 4327 h 4329" />
                                <a:gd name="connsiteX3" fmla="*/ 0 w 1914" />
                                <a:gd name="connsiteY3" fmla="*/ 0 h 4329" />
                                <a:gd name="connsiteX4" fmla="*/ 1914 w 1914" />
                                <a:gd name="connsiteY4" fmla="*/ 9 h 4329" />
                             </a:gdLst>
                             <a:ahLst />
                             <a:cxnLst>
                                <a:cxn ang="0">
                                   <a:pos x="connsiteX0" y="connsiteY0" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="connsiteX1" y="connsiteY1" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="connsiteX2" y="connsiteY2" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="connsiteX3" y="connsiteY3" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="connsiteX4" y="connsiteY4" />
                                </a:cxn>
                             </a:cxnLst>
                             <a:rect l="l" t="t" r="r" b="b" />
                             <a:pathLst>
                                <a:path w="1914" h="4329">
                                   <a:moveTo>
                                      <a:pt x="1914" y="9" />
                                   </a:moveTo>
                                   <a:lnTo>
                                      <a:pt x="1914" y="4329" />
                                   </a:lnTo>
                                   <a:lnTo>
                                      <a:pt x="204" y="4327" />
                                   </a:lnTo>
                                   <a:cubicBezTo>
                                      <a:pt x="1288" y="3574" />
                                      <a:pt x="2082" y="1734" />
                                      <a:pt x="0" y="0" />
                                   </a:cubicBezTo>
                                   <a:lnTo>
                                      <a:pt x="1914" y="9" />
                                   </a:lnTo>
                                   <a:close />
                                </a:path>
                             </a:pathLst>
                          </a:custGeom>
                          <a:solidFill>
                             <a:schemeClr val="bg1">
                                <a:tint val="90000" />
                                <a:satMod val="350000" />
                                <a:alpha val="40000" />
                             </a:schemeClr>
                          </a:solidFill>
                          <a:ln w="9525" cap="flat" cmpd="sng" algn="ctr">
                             <a:noFill />
                             <a:prstDash val="solid" />
                             <a:round />
                             <a:headEnd type="none" w="med" len="med" />
                             <a:tailEnd type="none" w="med" len="med" />
                          </a:ln>
                          <a:effectLst>
                             <a:outerShdw blurRad="50800" dist="50800" dir="10800000" algn="ctr" rotWithShape="0">
                                <a:prstClr val="black">
                                   <a:alpha val="45000" />
                                </a:prstClr>
                             </a:outerShdw>
                          </a:effectLst>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle />
                          <a:p>
                             <a:pPr eaLnBrk="1" hangingPunct="1">
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="1028" name="Заголовок 8" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="title" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr bwMode="auto">
                          <a:xfrm>
                             <a:off x="609600" y="274638" />
                             <a:ext cx="9956800" cy="1143000" />
                          </a:xfrm>
                          <a:prstGeom prst="rect">
                             <a:avLst />
                          </a:prstGeom>
                          <a:noFill />
                          <a:ln>
                             <a:noFill />
                          </a:ln>
                          <a:extLst>
                             <a:ext uri="{909E8E84-426E-40DD-AFC4-6F175D3DCCD1}">
                                <a14:hiddenFill xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main">
                                   <a:solidFill>
                                      <a:srgbClr val="FFFFFF" />
                                   </a:solidFill>
                                </a14:hiddenFill>
                             </a:ext>
                             <a:ext uri="{91240B29-F687-4F45-9708-019B960494DF}">
                                <a14:hiddenLine xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main" w="9525">
                                   <a:solidFill>
                                      <a:srgbClr val="000000" />
                                   </a:solidFill>
                                   <a:miter lim="800000" />
                                   <a:headEnd />
                                   <a:tailEnd />
                                </a14:hiddenLine>
                             </a:ext>
                          </a:extLst>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr vert="horz" wrap="square" lIns="45720" tIns="45720" rIns="45720" bIns="45720" numCol="1" anchor="ctr" anchorCtr="0" compatLnSpc="1">
                             <a:prstTxWarp prst="textNoShape">
                                <a:avLst />
                             </a:prstTxWarp>
                          </a:bodyPr>
                          <a:lstStyle />
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:r>
                                <a:rPr lang="ru-RU" altLang="en-US" smtClean="0" />
                                <a:t>Образец заголовка</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" altLang="en-US" smtClean="0" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="1029" name="Текст 29" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="body" idx="1" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr bwMode="auto">
                          <a:xfrm>
                             <a:off x="609600" y="1600201" />
                             <a:ext cx="9956800" cy="4525963" />
                          </a:xfrm>
                          <a:prstGeom prst="rect">
                             <a:avLst />
                          </a:prstGeom>
                          <a:noFill />
                          <a:ln>
                             <a:noFill />
                          </a:ln>
                          <a:extLst>
                             <a:ext uri="{909E8E84-426E-40DD-AFC4-6F175D3DCCD1}">
                                <a14:hiddenFill xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main">
                                   <a:solidFill>
                                      <a:srgbClr val="FFFFFF" />
                                   </a:solidFill>
                                </a14:hiddenFill>
                             </a:ext>
                             <a:ext uri="{91240B29-F687-4F45-9708-019B960494DF}">
                                <a14:hiddenLine xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main" w="9525">
                                   <a:solidFill>
                                      <a:srgbClr val="000000" />
                                   </a:solidFill>
                                   <a:miter lim="800000" />
                                   <a:headEnd />
                                   <a:tailEnd />
                                </a14:hiddenLine>
                             </a:ext>
                          </a:extLst>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr vert="horz" wrap="square" lIns="91440" tIns="45720" rIns="91440" bIns="45720" numCol="1" anchor="t" anchorCtr="0" compatLnSpc="1">
                             <a:prstTxWarp prst="textNoShape">
                                <a:avLst />
                             </a:prstTxWarp>
                          </a:bodyPr>
                          <a:lstStyle />
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:r>
                                <a:rPr lang="ru-RU" altLang="en-US" smtClean="0" />
                                <a:t>Образец текста</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="1" />
                             <a:r>
                                <a:rPr lang="ru-RU" altLang="en-US" smtClean="0" />
                                <a:t>Второй уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="2" />
                             <a:r>
                                <a:rPr lang="ru-RU" altLang="en-US" smtClean="0" />
                                <a:t>Третий уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="3" />
                             <a:r>
                                <a:rPr lang="ru-RU" altLang="en-US" smtClean="0" />
                                <a:t>Четвертый уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="4" />
                             <a:r>
                                <a:rPr lang="ru-RU" altLang="en-US" smtClean="0" />
                                <a:t>Пятый уровень</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" altLang="en-US" smtClean="0" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="10" name="Дата 9" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="dt" sz="half" idx="2" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="609600" y="6421439" />
                             <a:ext cx="2844800" cy="365125" />
                          </a:xfrm>
                          <a:prstGeom prst="rect">
                             <a:avLst />
                          </a:prstGeom>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr vert="horz" bIns="0" anchor="b" />
                          <a:lstStyle>
                             <a:lvl1pPr algn="l" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                                <a:defRPr kumimoji="0" sz="1000">
                                   <a:solidFill>
                                      <a:schemeClr val="tx2">
                                         <a:shade val="50000" />
                                      </a:schemeClr>
                                   </a:solidFill>
                                </a:defRPr>
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="22" name="Нижний колонтитул 21" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="ftr" sz="quarter" idx="3" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="4165600" y="6421439" />
                             <a:ext cx="3860800" cy="365125" />
                          </a:xfrm>
                          <a:prstGeom prst="rect">
                             <a:avLst />
                          </a:prstGeom>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr vert="horz" lIns="0" rIns="0" bIns="0" anchor="b" />
                          <a:lstStyle>
                             <a:lvl1pPr algn="ctr" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                                <a:defRPr kumimoji="0" sz="1000">
                                   <a:solidFill>
                                      <a:schemeClr val="tx2">
                                         <a:shade val="50000" />
                                      </a:schemeClr>
                                   </a:solidFill>
                                </a:defRPr>
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="18" name="Номер слайда 17" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="sldNum" sz="quarter" idx="4" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="10871200" y="6421439" />
                             <a:ext cx="1016000" cy="365125" />
                          </a:xfrm>
                          <a:prstGeom prst="rect">
                             <a:avLst />
                          </a:prstGeom>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr vert="horz" wrap="square" lIns="0" tIns="0" rIns="0" bIns="0" numCol="1" anchor="b" anchorCtr="0" compatLnSpc="1">
                             <a:prstTxWarp prst="textNoShape">
                                <a:avLst />
                             </a:prstTxWarp>
                          </a:bodyPr>
                          <a:lstStyle>
                             <a:lvl1pPr algn="r" eaLnBrk="1" hangingPunct="1">
                                <a:defRPr sz="1000">
                                   <a:solidFill>
                                      <a:srgbClr val="9B9A98" />
                                   </a:solidFill>
                                </a:defRPr>
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:fld id="{E1928DE2-7EC3-4166-84C7-7E45BF789AAC}" type="slidenum">
                                <a:rPr lang="ru-RU" altLang="en-US" />
                                <a:pPr>
                                   <a:defRPr />
                                </a:pPr>
                                <a:t>‹#›</a:t>
                             </a:fld>
                             <a:endParaRPr lang="ru-RU" altLang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                 </p:spTree>
              </p:cSld>
              <p:clrMap bg1="dk1" tx1="lt1" bg2="dk2" tx2="lt2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink" />
              <p:sldLayoutIdLst>
                 <p:sldLayoutId id="2147483959" r:id="rId1" />
                 <p:sldLayoutId id="2147483960" r:id="rId2" />
                 <p:sldLayoutId id="2147483961" r:id="rId3" />
                 <p:sldLayoutId id="2147483962" r:id="rId4" />
                 <p:sldLayoutId id="2147483963" r:id="rId5" />
                 <p:sldLayoutId id="2147483964" r:id="rId6" />
                 <p:sldLayoutId id="2147483965" r:id="rId7" />
                 <p:sldLayoutId id="2147483966" r:id="rId8" />
                 <p:sldLayoutId id="2147483967" r:id="rId9" />
                 <p:sldLayoutId id="2147483968" r:id="rId10" />
                 <p:sldLayoutId id="2147483969" r:id="rId11" />
              </p:sldLayoutIdLst>
              <p:txStyles>
                 <p:titleStyle>
                    <a:lvl1pPr algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                       <a:spcBef>
                          <a:spcPct val="0" />
                       </a:spcBef>
                       <a:spcAft>
                          <a:spcPct val="0" />
                       </a:spcAft>
                       <a:defRPr sz="4600" kern="1200">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mj-lt" />
                          <a:ea typeface="+mj-ea" />
                          <a:cs typeface="+mj-cs" />
                       </a:defRPr>
                    </a:lvl1pPr>
                    <a:lvl2pPr algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                       <a:spcBef>
                          <a:spcPct val="0" />
                       </a:spcBef>
                       <a:spcAft>
                          <a:spcPct val="0" />
                       </a:spcAft>
                       <a:defRPr sz="4600">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="Franklin Gothic Book" pitchFamily="34" charset="0" />
                       </a:defRPr>
                    </a:lvl2pPr>
                    <a:lvl3pPr algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                       <a:spcBef>
                          <a:spcPct val="0" />
                       </a:spcBef>
                       <a:spcAft>
                          <a:spcPct val="0" />
                       </a:spcAft>
                       <a:defRPr sz="4600">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="Franklin Gothic Book" pitchFamily="34" charset="0" />
                       </a:defRPr>
                    </a:lvl3pPr>
                    <a:lvl4pPr algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                       <a:spcBef>
                          <a:spcPct val="0" />
                       </a:spcBef>
                       <a:spcAft>
                          <a:spcPct val="0" />
                       </a:spcAft>
                       <a:defRPr sz="4600">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="Franklin Gothic Book" pitchFamily="34" charset="0" />
                       </a:defRPr>
                    </a:lvl4pPr>
                    <a:lvl5pPr algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                       <a:spcBef>
                          <a:spcPct val="0" />
                       </a:spcBef>
                       <a:spcAft>
                          <a:spcPct val="0" />
                       </a:spcAft>
                       <a:defRPr sz="4600">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="Franklin Gothic Book" pitchFamily="34" charset="0" />
                       </a:defRPr>
                    </a:lvl5pPr>
                    <a:lvl6pPr marL="457200" algn="l" rtl="0" fontAlgn="base">
                       <a:spcBef>
                          <a:spcPct val="0" />
                       </a:spcBef>
                       <a:spcAft>
                          <a:spcPct val="0" />
                       </a:spcAft>
                       <a:defRPr sz="4600">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="Franklin Gothic Book" pitchFamily="34" charset="0" />
                       </a:defRPr>
                    </a:lvl6pPr>
                    <a:lvl7pPr marL="914400" algn="l" rtl="0" fontAlgn="base">
                       <a:spcBef>
                          <a:spcPct val="0" />
                       </a:spcBef>
                       <a:spcAft>
                          <a:spcPct val="0" />
                       </a:spcAft>
                       <a:defRPr sz="4600">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="Franklin Gothic Book" pitchFamily="34" charset="0" />
                       </a:defRPr>
                    </a:lvl7pPr>
                    <a:lvl8pPr marL="1371600" algn="l" rtl="0" fontAlgn="base">
                       <a:spcBef>
                          <a:spcPct val="0" />
                       </a:spcBef>
                       <a:spcAft>
                          <a:spcPct val="0" />
                       </a:spcAft>
                       <a:defRPr sz="4600">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="Franklin Gothic Book" pitchFamily="34" charset="0" />
                       </a:defRPr>
                    </a:lvl8pPr>
                    <a:lvl9pPr marL="1828800" algn="l" rtl="0" fontAlgn="base">
                       <a:spcBef>
                          <a:spcPct val="0" />
                       </a:spcBef>
                       <a:spcAft>
                          <a:spcPct val="0" />
                       </a:spcAft>
                       <a:defRPr sz="4600">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="Franklin Gothic Book" pitchFamily="34" charset="0" />
                       </a:defRPr>
                    </a:lvl9pPr>
                 </p:titleStyle>
                 <p:bodyStyle>
                    <a:lvl1pPr marL="419100" indent="-382588" algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                       <a:spcBef>
                          <a:spcPct val="20000" />
                       </a:spcBef>
                       <a:spcAft>
                          <a:spcPct val="0" />
                       </a:spcAft>
                       <a:buClr>
                          <a:schemeClr val="accent1" />
                       </a:buClr>
                       <a:buSzPct val="80000" />
                       <a:buFont typeface="Wingdings 2" panose="05020102010507070707" pitchFamily="18" charset="2" />
                       <a:buChar char="" />
                       <a:defRPr sz="3000" kern="1200">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl1pPr>
                    <a:lvl2pPr marL="722313" indent="-273050" algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                       <a:spcBef>
                          <a:spcPct val="20000" />
                       </a:spcBef>
                       <a:spcAft>
                          <a:spcPct val="0" />
                       </a:spcAft>
                       <a:buClr>
                          <a:schemeClr val="accent1" />
                       </a:buClr>
                       <a:buSzPct val="90000" />
                       <a:buFont typeface="Wingdings 2" panose="05020102010507070707" pitchFamily="18" charset="2" />
                       <a:buChar char="" />
                       <a:defRPr sz="2600" kern="1200">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl2pPr>
                    <a:lvl3pPr marL="1004888" indent="-255588" algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                       <a:spcBef>
                          <a:spcPct val="20000" />
                       </a:spcBef>
                       <a:spcAft>
                          <a:spcPct val="0" />
                       </a:spcAft>
                       <a:buClr>
                          <a:schemeClr val="accent2" />
                       </a:buClr>
                       <a:buSzPct val="85000" />
                       <a:buFont typeface="Arial" panose="020B0604020202020204" pitchFamily="34" charset="0" />
                       <a:buChar char="○" />
                       <a:defRPr sz="2400" kern="1200">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl3pPr>
                    <a:lvl4pPr marL="1279525" indent="-236538" algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                       <a:spcBef>
                          <a:spcPct val="20000" />
                       </a:spcBef>
                       <a:spcAft>
                          <a:spcPct val="0" />
                       </a:spcAft>
                       <a:buClr>
                          <a:srgbClr val="8D89A4" />
                       </a:buClr>
                       <a:buSzPct val="90000" />
                       <a:buFont typeface="Wingdings 2" panose="05020102010507070707" pitchFamily="18" charset="2" />
                       <a:buChar char="" />
                       <a:defRPr sz="2000" kern="1200">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl4pPr>
                    <a:lvl5pPr marL="1489075" indent="-182563" algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                       <a:spcBef>
                          <a:spcPct val="20000" />
                       </a:spcBef>
                       <a:spcAft>
                          <a:spcPct val="0" />
                       </a:spcAft>
                       <a:buClr>
                          <a:srgbClr val="748560" />
                       </a:buClr>
                       <a:buSzPct val="100000" />
                       <a:buFont typeface="Arial" panose="020B0604020202020204" pitchFamily="34" charset="0" />
                       <a:buChar char="-" />
                       <a:defRPr sz="2000" kern="1200">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl5pPr>
                    <a:lvl6pPr marL="1700784" indent="-182880" algn="l" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                       <a:spcBef>
                          <a:spcPct val="20000" />
                       </a:spcBef>
                       <a:buClr>
                          <a:schemeClr val="accent5" />
                       </a:buClr>
                       <a:buFont typeface="Arial" />
                       <a:buChar char="-" />
                       <a:defRPr kumimoji="0" sz="2000" kern="1200" baseline="0">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl6pPr>
                    <a:lvl7pPr marL="1920240" indent="-182880" algn="l" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                       <a:spcBef>
                          <a:spcPct val="20000" />
                       </a:spcBef>
                       <a:buClr>
                          <a:schemeClr val="accent6" />
                       </a:buClr>
                       <a:buSzPct val="100000" />
                       <a:buFont typeface="Arial" />
                       <a:buChar char="•" />
                       <a:defRPr kumimoji="0" sz="1800" kern="1200" baseline="0">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl7pPr>
                    <a:lvl8pPr marL="2139696" indent="-182880" algn="l" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                       <a:spcBef>
                          <a:spcPct val="20000" />
                       </a:spcBef>
                       <a:buClr>
                          <a:schemeClr val="accent6" />
                       </a:buClr>
                       <a:buFont typeface="Arial" />
                       <a:buChar char="▪" />
                       <a:defRPr kumimoji="0" sz="1600" kern="1200">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl8pPr>
                    <a:lvl9pPr marL="2331720" indent="-182880" algn="l" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                       <a:spcBef>
                          <a:spcPct val="20000" />
                       </a:spcBef>
                       <a:buClr>
                          <a:schemeClr val="accent6" />
                       </a:buClr>
                       <a:buFont typeface="Arial" />
                       <a:buChar char="•" />
                       <a:defRPr kumimoji="0" sz="1600" kern="1200">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl9pPr>
                 </p:bodyStyle>
                 <p:otherStyle>
                    <a:lvl1pPr marL="0" algn="l" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                       <a:defRPr kumimoji="0" kern="1200">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl1pPr>
                    <a:lvl2pPr marL="457200" algn="l" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                       <a:defRPr kumimoji="0" kern="1200">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl2pPr>
                    <a:lvl3pPr marL="914400" algn="l" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                       <a:defRPr kumimoji="0" kern="1200">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl3pPr>
                    <a:lvl4pPr marL="1371600" algn="l" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                       <a:defRPr kumimoji="0" kern="1200">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl4pPr>
                    <a:lvl5pPr marL="1828800" algn="l" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                       <a:defRPr kumimoji="0" kern="1200">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl5pPr>
                    <a:lvl6pPr marL="2286000" algn="l" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                       <a:defRPr kumimoji="0" kern="1200">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl6pPr>
                    <a:lvl7pPr marL="2743200" algn="l" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                       <a:defRPr kumimoji="0" kern="1200">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl7pPr>
                    <a:lvl8pPr marL="3200400" algn="l" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                       <a:defRPr kumimoji="0" kern="1200">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl8pPr>
                    <a:lvl9pPr marL="3657600" algn="l" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                       <a:defRPr kumimoji="0" kern="1200">
                          <a:solidFill>
                             <a:schemeClr val="tx1" />
                          </a:solidFill>
                          <a:latin typeface="+mn-lt" />
                          <a:ea typeface="+mn-ea" />
                          <a:cs typeface="+mn-cs" />
                       </a:defRPr>
                    </a:lvl9pPr>
                 </p:otherStyle>
              </p:txStyles>
           </p:sldMaster>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout9.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
        <pkg:xmlData>
           <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
              <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />
           </Relationships>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideMasters/_rels/slideMaster1.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
        <pkg:xmlData>
           <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
              <Relationship Id="rId8" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout8.xml" />
              <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout3.xml" />
              <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout7.xml" />
              <Relationship Id="rId12" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="../theme/theme1.xml" />
              <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout2.xml" />
              <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml" />
              <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout6.xml" />
              <Relationship Id="rId11" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout11.xml" />
              <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout5.xml" />
              <Relationship Id="rId10" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout10.xml" />
              <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout4.xml" />
              <Relationship Id="rId9" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout9.xml" />
           </Relationships>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout1.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
        <pkg:xmlData>
           <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
              <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />
           </Relationships>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout2.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
        <pkg:xmlData>
           <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
              <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />
           </Relationships>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout6.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
        <pkg:xmlData>
           <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
              <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />
           </Relationships>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout5.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
        <pkg:xmlData>
           <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
              <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />
           </Relationships>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout4.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
        <pkg:xmlData>
           <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
              <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />
           </Relationships>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout3.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
        <pkg:xmlData>
           <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
              <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />
           </Relationships>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout8.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
        <pkg:xmlData>
           <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
              <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />
           </Relationships>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout10.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
        <pkg:xmlData>
           <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
              <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />
           </Relationships>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/slideLayout1.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">
        <pkg:xmlData>
           <p:sldLayout xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" showMasterSp="0" type="title" preserve="1">
              <p:cSld name="Титульный слайд">
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
                          <p:cNvPr id="4" name="Полилиния 3" />
                          <p:cNvSpPr>
                             <a:spLocks />
                          </p:cNvSpPr>
                          <p:nvPr />
                       </p:nvSpPr>
                       <p:spPr bwMode="auto">
                          <a:xfrm>
                             <a:off x="0" y="4751388" />
                             <a:ext cx="12192000" cy="2112962" />
                          </a:xfrm>
                          <a:custGeom>
                             <a:avLst>
                                <a:gd name="A1" fmla="val 0" />
                                <a:gd name="A2" fmla="val 0" />
                                <a:gd name="A3" fmla="val 0" />
                                <a:gd name="A4" fmla="val 0" />
                                <a:gd name="A5" fmla="val 0" />
                                <a:gd name="A6" fmla="val 0" />
                                <a:gd name="A7" fmla="val 0" />
                                <a:gd name="A8" fmla="val 0" />
                             </a:avLst>
                             <a:gdLst />
                             <a:ahLst />
                             <a:cxnLst>
                                <a:cxn ang="0">
                                   <a:pos x="0" y="1066" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="0" y="1331" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="5760" y="1331" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="5760" y="0" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="0" y="1066" />
                                </a:cxn>
                             </a:cxnLst>
                             <a:rect l="0" t="0" r="0" b="0" />
                             <a:pathLst>
                                <a:path w="5760" h="1331">
                                   <a:moveTo>
                                      <a:pt x="0" y="1066" />
                                   </a:moveTo>
                                   <a:lnTo>
                                      <a:pt x="0" y="1331" />
                                   </a:lnTo>
                                   <a:lnTo>
                                      <a:pt x="5760" y="1331" />
                                   </a:lnTo>
                                   <a:lnTo>
                                      <a:pt x="5760" y="0" />
                                   </a:lnTo>
                                   <a:cubicBezTo>
                                      <a:pt x="3220" y="1206" />
                                      <a:pt x="2250" y="1146" />
                                      <a:pt x="0" y="1066" />
                                   </a:cubicBezTo>
                                   <a:close />
                                </a:path>
                             </a:pathLst>
                          </a:custGeom>
                          <a:solidFill>
                             <a:schemeClr val="bg1">
                                <a:tint val="80000" />
                                <a:satMod val="200000" />
                                <a:alpha val="45000" />
                             </a:schemeClr>
                          </a:solidFill>
                          <a:ln w="9525" cap="flat" cmpd="sng" algn="ctr">
                             <a:noFill />
                             <a:prstDash val="solid" />
                             <a:round />
                             <a:headEnd type="none" w="med" len="med" />
                             <a:tailEnd type="none" w="med" len="med" />
                          </a:ln>
                          <a:effectLst>
                             <a:outerShdw blurRad="50800" dist="44450" dir="16200000" algn="ctr" rotWithShape="0">
                                <a:prstClr val="black">
                                   <a:alpha val="35000" />
                                </a:prstClr>
                             </a:outerShdw>
                          </a:effectLst>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle />
                          <a:p>
                             <a:pPr eaLnBrk="1" hangingPunct="1">
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="5" name="Полилиния 4" />
                          <p:cNvSpPr>
                             <a:spLocks />
                          </p:cNvSpPr>
                          <p:nvPr />
                       </p:nvSpPr>
                       <p:spPr bwMode="auto">
                          <a:xfrm>
                             <a:off x="8140701" y="0" />
                             <a:ext cx="4051300" cy="6858000" />
                          </a:xfrm>
                          <a:custGeom>
                             <a:avLst />
                             <a:gdLst>
                                <a:gd name="connsiteX0" fmla="*/ 1914 w 1914" />
                                <a:gd name="connsiteY0" fmla="*/ 9 h 4329" />
                                <a:gd name="connsiteX1" fmla="*/ 1914 w 1914" />
                                <a:gd name="connsiteY1" fmla="*/ 4329 h 4329" />
                                <a:gd name="connsiteX2" fmla="*/ 204 w 1914" />
                                <a:gd name="connsiteY2" fmla="*/ 4327 h 4329" />
                                <a:gd name="connsiteX3" fmla="*/ 0 w 1914" />
                                <a:gd name="connsiteY3" fmla="*/ 0 h 4329" />
                                <a:gd name="connsiteX4" fmla="*/ 1914 w 1914" />
                                <a:gd name="connsiteY4" fmla="*/ 9 h 4329" />
                             </a:gdLst>
                             <a:ahLst />
                             <a:cxnLst>
                                <a:cxn ang="0">
                                   <a:pos x="connsiteX0" y="connsiteY0" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="connsiteX1" y="connsiteY1" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="connsiteX2" y="connsiteY2" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="connsiteX3" y="connsiteY3" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="connsiteX4" y="connsiteY4" />
                                </a:cxn>
                             </a:cxnLst>
                             <a:rect l="l" t="t" r="r" b="b" />
                             <a:pathLst>
                                <a:path w="1914" h="4329">
                                   <a:moveTo>
                                      <a:pt x="1914" y="9" />
                                   </a:moveTo>
                                   <a:lnTo>
                                      <a:pt x="1914" y="4329" />
                                   </a:lnTo>
                                   <a:lnTo>
                                      <a:pt x="204" y="4327" />
                                   </a:lnTo>
                                   <a:cubicBezTo>
                                      <a:pt x="1288" y="3574" />
                                      <a:pt x="1608" y="1590" />
                                      <a:pt x="0" y="0" />
                                   </a:cubicBezTo>
                                   <a:lnTo>
                                      <a:pt x="1914" y="9" />
                                   </a:lnTo>
                                   <a:close />
                                </a:path>
                             </a:pathLst>
                          </a:custGeom>
                          <a:solidFill>
                             <a:schemeClr val="bg1">
                                <a:tint val="90000" />
                                <a:satMod val="350000" />
                                <a:alpha val="40000" />
                             </a:schemeClr>
                          </a:solidFill>
                          <a:ln w="9525" cap="flat" cmpd="sng" algn="ctr">
                             <a:noFill />
                             <a:prstDash val="solid" />
                             <a:round />
                             <a:headEnd type="none" w="med" len="med" />
                             <a:tailEnd type="none" w="med" len="med" />
                          </a:ln>
                          <a:effectLst>
                             <a:outerShdw blurRad="50800" dist="50800" dir="10800000" algn="ctr" rotWithShape="0">
                                <a:prstClr val="black">
                                   <a:alpha val="45000" />
                                </a:prstClr>
                             </a:outerShdw>
                          </a:effectLst>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle />
                          <a:p>
                             <a:pPr eaLnBrk="1" hangingPunct="1">
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="9" name="Заголовок 8" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="ctrTitle" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="572085" y="3337560" />
                             <a:ext cx="8640064" cy="2301240" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr anchor="t" />
                          <a:lstStyle>
                             <a:lvl1pPr algn="r">
                                <a:defRPr lang="en-US" b="1" cap="all" baseline="0" dirty="0">
                                   <a:ln w="5000" cmpd="sng">
                                      <a:solidFill>
                                         <a:schemeClr val="accent1">
                                            <a:tint val="80000" />
                                            <a:shade val="99000" />
                                            <a:satMod val="500000" />
                                         </a:schemeClr>
                                      </a:solidFill>
                                      <a:prstDash val="solid" />
                                   </a:ln>
                                   <a:gradFill>
                                      <a:gsLst>
                                         <a:gs pos="0">
                                            <a:schemeClr val="accent1">
                                               <a:tint val="63000" />
                                               <a:satMod val="255000" />
                                            </a:schemeClr>
                                         </a:gs>
                                         <a:gs pos="9000">
                                            <a:schemeClr val="accent1">
                                               <a:tint val="63000" />
                                               <a:satMod val="255000" />
                                            </a:schemeClr>
                                         </a:gs>
                                         <a:gs pos="53000">
                                            <a:schemeClr val="accent1">
                                               <a:shade val="60000" />
                                               <a:satMod val="100000" />
                                            </a:schemeClr>
                                         </a:gs>
                                         <a:gs pos="90000">
                                            <a:schemeClr val="accent1">
                                               <a:tint val="63000" />
                                               <a:satMod val="255000" />
                                            </a:schemeClr>
                                         </a:gs>
                                         <a:gs pos="100000">
                                            <a:schemeClr val="accent1">
                                               <a:tint val="63000" />
                                               <a:satMod val="255000" />
                                            </a:schemeClr>
                                         </a:gs>
                                      </a:gsLst>
                                      <a:lin ang="5400000" />
                                   </a:gradFill>
                                   <a:effectLst>
                                      <a:outerShdw blurRad="50800" dist="38100" dir="5400000" algn="t" rotWithShape="0">
                                         <a:prstClr val="black">
                                            <a:alpha val="50000" />
                                         </a:prstClr>
                                      </a:outerShdw>
                                   </a:effectLst>
                                </a:defRPr>
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец заголовка</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="17" name="Подзаголовок 16" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="subTitle" idx="1" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="577400" y="1544812" />
                             <a:ext cx="8640064" cy="1752600" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr tIns="0" rIns="45720" bIns="0" anchor="b">
                             <a:normAutofit />
                          </a:bodyPr>
                          <a:lstStyle>
                             <a:lvl1pPr marL="0" indent="0" algn="r">
                                <a:buNone />
                                <a:defRPr sz="2000">
                                   <a:solidFill>
                                      <a:schemeClr val="tx1" />
                                   </a:solidFill>
                                   <a:effectLst />
                                </a:defRPr>
                             </a:lvl1pPr>
                             <a:lvl2pPr marL="457200" indent="0" algn="ctr">
                                <a:buNone />
                             </a:lvl2pPr>
                             <a:lvl3pPr marL="914400" indent="0" algn="ctr">
                                <a:buNone />
                             </a:lvl3pPr>
                             <a:lvl4pPr marL="1371600" indent="0" algn="ctr">
                                <a:buNone />
                             </a:lvl4pPr>
                             <a:lvl5pPr marL="1828800" indent="0" algn="ctr">
                                <a:buNone />
                             </a:lvl5pPr>
                             <a:lvl6pPr marL="2286000" indent="0" algn="ctr">
                                <a:buNone />
                             </a:lvl6pPr>
                             <a:lvl7pPr marL="2743200" indent="0" algn="ctr">
                                <a:buNone />
                             </a:lvl7pPr>
                             <a:lvl8pPr marL="3200400" indent="0" algn="ctr">
                                <a:buNone />
                             </a:lvl8pPr>
                             <a:lvl9pPr marL="3657600" indent="0" algn="ctr">
                                <a:buNone />
                             </a:lvl9pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец подзаголовка</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="6" name="Дата 29" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="dt" sz="half" idx="10" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="7" name="Нижний колонтитул 18" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="ftr" sz="quarter" idx="11" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="8" name="Номер слайда 26" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="sldNum" sz="quarter" idx="12" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:fld id="{09821B1B-AE00-4F38-8162-FD16FEE04CA4}" type="slidenum">
                                <a:rPr lang="ru-RU" altLang="en-US" />
                                <a:pPr>
                                   <a:defRPr />
                                </a:pPr>
                                <a:t>‹#›</a:t>
                             </a:fld>
                             <a:endParaRPr lang="ru-RU" altLang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                 </p:spTree>
                 <p:extLst>
                    <p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">
                       <p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="912656359" />
                    </p:ext>
                 </p:extLst>
              </p:cSld>
              <p:clrMapOvr>
                 <a:masterClrMapping />
              </p:clrMapOvr>
           </p:sldLayout>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/slideLayout11.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">
        <pkg:xmlData>
           <p:sldLayout xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" showMasterSp="0" type="vertTitleAndTx" preserve="1">
              <p:cSld name="Вертикальный заголовок и текст">
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
                          <p:cNvPr id="2" name="Вертикальный заголовок 1" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="title" orient="vert" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="8839200" y="274639" />
                             <a:ext cx="2743200" cy="5851525" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr vert="eaVert" />
                          <a:lstStyle />
                          <a:p>
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец заголовка</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="3" name="Вертикальный текст 2" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="body" orient="vert" idx="1" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="609600" y="274639" />
                             <a:ext cx="8026400" cy="5851525" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr vert="eaVert" />
                          <a:lstStyle />
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец текста</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="1" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Второй уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="2" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Третий уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="3" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Четвертый уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="4" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Пятый уровень</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="4" name="Дата 9" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="dt" sz="half" idx="10" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="5" name="Нижний колонтитул 21" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="ftr" sz="quarter" idx="11" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="6" name="Номер слайда 17" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="sldNum" sz="quarter" idx="12" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:fld id="{6C9AD72F-7CA0-45E5-9FDC-33F77DA6BAFC}" type="slidenum">
                                <a:rPr lang="ru-RU" altLang="en-US" />
                                <a:pPr>
                                   <a:defRPr />
                                </a:pPr>
                                <a:t>‹#›</a:t>
                             </a:fld>
                             <a:endParaRPr lang="ru-RU" altLang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                 </p:spTree>
                 <p:extLst>
                    <p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">
                       <p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="1045512858" />
                    </p:ext>
                 </p:extLst>
              </p:cSld>
              <p:clrMapOvr>
                 <a:masterClrMapping />
              </p:clrMapOvr>
           </p:sldLayout>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/slideLayout4.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">
        <pkg:xmlData>
           <p:sldLayout xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" showMasterSp="0" type="twoObj" preserve="1">
              <p:cSld name="Два объекта">
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
                          <p:cNvPr id="2" name="Заголовок 1" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="title" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="609600" y="274638" />
                             <a:ext cx="9956800" cy="1143000" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle />
                          <a:p>
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец заголовка</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="3" name="Объект 2" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph sz="half" idx="1" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="609600" y="1600201" />
                             <a:ext cx="4876800" cy="4525963" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr sz="2600" />
                             </a:lvl1pPr>
                             <a:lvl2pPr>
                                <a:defRPr sz="2200" />
                             </a:lvl2pPr>
                             <a:lvl3pPr>
                                <a:defRPr sz="2000" />
                             </a:lvl3pPr>
                             <a:lvl4pPr>
                                <a:defRPr sz="1800" />
                             </a:lvl4pPr>
                             <a:lvl5pPr>
                                <a:defRPr sz="1800" />
                             </a:lvl5pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец текста</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="1" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Второй уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="2" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Третий уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="3" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Четвертый уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="4" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Пятый уровень</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="4" name="Объект 3" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph sz="half" idx="2" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="5689600" y="1600201" />
                             <a:ext cx="4876800" cy="4525963" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr sz="2600" />
                             </a:lvl1pPr>
                             <a:lvl2pPr>
                                <a:defRPr sz="2200" />
                             </a:lvl2pPr>
                             <a:lvl3pPr>
                                <a:defRPr sz="2000" />
                             </a:lvl3pPr>
                             <a:lvl4pPr>
                                <a:defRPr sz="1800" />
                             </a:lvl4pPr>
                             <a:lvl5pPr>
                                <a:defRPr sz="1800" />
                             </a:lvl5pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец текста</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="1" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Второй уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="2" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Третий уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="3" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Четвертый уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="4" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Пятый уровень</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="5" name="Дата 9" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="dt" sz="half" idx="10" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="6" name="Нижний колонтитул 21" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="ftr" sz="quarter" idx="11" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="7" name="Номер слайда 17" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="sldNum" sz="quarter" idx="12" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:fld id="{F1570F31-DCEE-4CE3-A080-E028B60C5E97}" type="slidenum">
                                <a:rPr lang="ru-RU" altLang="en-US" />
                                <a:pPr>
                                   <a:defRPr />
                                </a:pPr>
                                <a:t>‹#›</a:t>
                             </a:fld>
                             <a:endParaRPr lang="ru-RU" altLang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                 </p:spTree>
                 <p:extLst>
                    <p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">
                       <p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="545363127" />
                    </p:ext>
                 </p:extLst>
              </p:cSld>
              <p:clrMapOvr>
                 <a:masterClrMapping />
              </p:clrMapOvr>
           </p:sldLayout>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/slideLayout3.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">
        <pkg:xmlData>
           <p:sldLayout xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" showMasterSp="0" type="secHead" preserve="1">
              <p:cSld name="Заголовок раздела">
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
                          <p:cNvPr id="4" name="Полилиния 3" />
                          <p:cNvSpPr>
                             <a:spLocks />
                          </p:cNvSpPr>
                          <p:nvPr />
                       </p:nvSpPr>
                       <p:spPr bwMode="auto">
                          <a:xfrm>
                             <a:off x="0" y="4751388" />
                             <a:ext cx="12192000" cy="2112962" />
                          </a:xfrm>
                          <a:custGeom>
                             <a:avLst>
                                <a:gd name="A1" fmla="val 0" />
                                <a:gd name="A2" fmla="val 0" />
                                <a:gd name="A3" fmla="val 0" />
                                <a:gd name="A4" fmla="val 0" />
                                <a:gd name="A5" fmla="val 0" />
                                <a:gd name="A6" fmla="val 0" />
                                <a:gd name="A7" fmla="val 0" />
                                <a:gd name="A8" fmla="val 0" />
                             </a:avLst>
                             <a:gdLst />
                             <a:ahLst />
                             <a:cxnLst>
                                <a:cxn ang="0">
                                   <a:pos x="0" y="1066" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="0" y="1331" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="5760" y="1331" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="5760" y="0" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="0" y="1066" />
                                </a:cxn>
                             </a:cxnLst>
                             <a:rect l="0" t="0" r="0" b="0" />
                             <a:pathLst>
                                <a:path w="5760" h="1331">
                                   <a:moveTo>
                                      <a:pt x="0" y="1066" />
                                   </a:moveTo>
                                   <a:lnTo>
                                      <a:pt x="0" y="1331" />
                                   </a:lnTo>
                                   <a:lnTo>
                                      <a:pt x="5760" y="1331" />
                                   </a:lnTo>
                                   <a:lnTo>
                                      <a:pt x="5760" y="0" />
                                   </a:lnTo>
                                   <a:cubicBezTo>
                                      <a:pt x="3220" y="1206" />
                                      <a:pt x="2250" y="1146" />
                                      <a:pt x="0" y="1066" />
                                   </a:cubicBezTo>
                                   <a:close />
                                </a:path>
                             </a:pathLst>
                          </a:custGeom>
                          <a:solidFill>
                             <a:schemeClr val="bg1">
                                <a:tint val="80000" />
                                <a:satMod val="200000" />
                                <a:alpha val="45000" />
                             </a:schemeClr>
                          </a:solidFill>
                          <a:ln w="9525" cap="flat" cmpd="sng" algn="ctr">
                             <a:noFill />
                             <a:prstDash val="solid" />
                             <a:round />
                             <a:headEnd type="none" w="med" len="med" />
                             <a:tailEnd type="none" w="med" len="med" />
                          </a:ln>
                          <a:effectLst>
                             <a:outerShdw blurRad="50800" dist="44450" dir="16200000" algn="ctr" rotWithShape="0">
                                <a:prstClr val="black">
                                   <a:alpha val="35000" />
                                </a:prstClr>
                             </a:outerShdw>
                          </a:effectLst>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle />
                          <a:p>
                             <a:pPr eaLnBrk="1" hangingPunct="1">
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="5" name="Полилиния 4" />
                          <p:cNvSpPr>
                             <a:spLocks />
                          </p:cNvSpPr>
                          <p:nvPr />
                       </p:nvSpPr>
                       <p:spPr bwMode="auto">
                          <a:xfrm>
                             <a:off x="8140701" y="0" />
                             <a:ext cx="4051300" cy="6858000" />
                          </a:xfrm>
                          <a:custGeom>
                             <a:avLst />
                             <a:gdLst>
                                <a:gd name="connsiteX0" fmla="*/ 1914 w 1914" />
                                <a:gd name="connsiteY0" fmla="*/ 9 h 4329" />
                                <a:gd name="connsiteX1" fmla="*/ 1914 w 1914" />
                                <a:gd name="connsiteY1" fmla="*/ 4329 h 4329" />
                                <a:gd name="connsiteX2" fmla="*/ 204 w 1914" />
                                <a:gd name="connsiteY2" fmla="*/ 4327 h 4329" />
                                <a:gd name="connsiteX3" fmla="*/ 0 w 1914" />
                                <a:gd name="connsiteY3" fmla="*/ 0 h 4329" />
                                <a:gd name="connsiteX4" fmla="*/ 1914 w 1914" />
                                <a:gd name="connsiteY4" fmla="*/ 9 h 4329" />
                             </a:gdLst>
                             <a:ahLst />
                             <a:cxnLst>
                                <a:cxn ang="0">
                                   <a:pos x="connsiteX0" y="connsiteY0" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="connsiteX1" y="connsiteY1" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="connsiteX2" y="connsiteY2" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="connsiteX3" y="connsiteY3" />
                                </a:cxn>
                                <a:cxn ang="0">
                                   <a:pos x="connsiteX4" y="connsiteY4" />
                                </a:cxn>
                             </a:cxnLst>
                             <a:rect l="l" t="t" r="r" b="b" />
                             <a:pathLst>
                                <a:path w="1914" h="4329">
                                   <a:moveTo>
                                      <a:pt x="1914" y="9" />
                                   </a:moveTo>
                                   <a:lnTo>
                                      <a:pt x="1914" y="4329" />
                                   </a:lnTo>
                                   <a:lnTo>
                                      <a:pt x="204" y="4327" />
                                   </a:lnTo>
                                   <a:cubicBezTo>
                                      <a:pt x="1288" y="3574" />
                                      <a:pt x="1608" y="1590" />
                                      <a:pt x="0" y="0" />
                                   </a:cubicBezTo>
                                   <a:lnTo>
                                      <a:pt x="1914" y="9" />
                                   </a:lnTo>
                                   <a:close />
                                </a:path>
                             </a:pathLst>
                          </a:custGeom>
                          <a:solidFill>
                             <a:schemeClr val="bg1">
                                <a:tint val="90000" />
                                <a:satMod val="350000" />
                                <a:alpha val="40000" />
                             </a:schemeClr>
                          </a:solidFill>
                          <a:ln w="9525" cap="flat" cmpd="sng" algn="ctr">
                             <a:noFill />
                             <a:prstDash val="solid" />
                             <a:round />
                             <a:headEnd type="none" w="med" len="med" />
                             <a:tailEnd type="none" w="med" len="med" />
                          </a:ln>
                          <a:effectLst>
                             <a:outerShdw blurRad="50800" dist="50800" dir="10800000" algn="ctr" rotWithShape="0">
                                <a:prstClr val="black">
                                   <a:alpha val="45000" />
                                </a:prstClr>
                             </a:outerShdw>
                          </a:effectLst>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle />
                          <a:p>
                             <a:pPr eaLnBrk="1" hangingPunct="1">
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="2" name="Заголовок 1" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="title" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="914400" y="3583838" />
                             <a:ext cx="8839200" cy="1826363" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr tIns="0" bIns="0" anchor="t" />
                          <a:lstStyle>
                             <a:lvl1pPr algn="l">
                                <a:buNone />
                                <a:defRPr sz="4200" b="1" cap="none" baseline="0">
                                   <a:ln w="5000" cmpd="sng">
                                      <a:solidFill>
                                         <a:schemeClr val="accent1">
                                            <a:tint val="80000" />
                                            <a:shade val="99000" />
                                            <a:satMod val="500000" />
                                         </a:schemeClr>
                                      </a:solidFill>
                                      <a:prstDash val="solid" />
                                   </a:ln>
                                   <a:gradFill>
                                      <a:gsLst>
                                         <a:gs pos="0">
                                            <a:schemeClr val="accent1">
                                               <a:tint val="63000" />
                                               <a:satMod val="255000" />
                                            </a:schemeClr>
                                         </a:gs>
                                         <a:gs pos="9000">
                                            <a:schemeClr val="accent1">
                                               <a:tint val="63000" />
                                               <a:satMod val="255000" />
                                            </a:schemeClr>
                                         </a:gs>
                                         <a:gs pos="53000">
                                            <a:schemeClr val="accent1">
                                               <a:shade val="60000" />
                                               <a:satMod val="100000" />
                                            </a:schemeClr>
                                         </a:gs>
                                         <a:gs pos="90000">
                                            <a:schemeClr val="accent1">
                                               <a:tint val="63000" />
                                               <a:satMod val="255000" />
                                            </a:schemeClr>
                                         </a:gs>
                                         <a:gs pos="100000">
                                            <a:schemeClr val="accent1">
                                               <a:tint val="63000" />
                                               <a:satMod val="255000" />
                                            </a:schemeClr>
                                         </a:gs>
                                      </a:gsLst>
                                      <a:lin ang="5400000" />
                                   </a:gradFill>
                                   <a:effectLst>
                                      <a:outerShdw blurRad="50800" dist="38100" dir="5400000" algn="t" rotWithShape="0">
                                         <a:prstClr val="black">
                                            <a:alpha val="50000" />
                                         </a:prstClr>
                                      </a:outerShdw>
                                   </a:effectLst>
                                </a:defRPr>
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец заголовка</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="3" name="Текст 2" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="body" idx="1" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="914400" y="2485800" />
                             <a:ext cx="8839200" cy="1066688" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr lIns="45720" tIns="0" rIns="45720" bIns="0" anchor="b" />
                          <a:lstStyle>
                             <a:lvl1pPr marL="0" indent="0" algn="l">
                                <a:buNone />
                                <a:defRPr sz="2000">
                                   <a:solidFill>
                                      <a:schemeClr val="tx1" />
                                   </a:solidFill>
                                   <a:effectLst />
                                </a:defRPr>
                             </a:lvl1pPr>
                             <a:lvl2pPr>
                                <a:buNone />
                                <a:defRPr sz="1800">
                                   <a:solidFill>
                                      <a:schemeClr val="tx1">
                                         <a:tint val="75000" />
                                      </a:schemeClr>
                                   </a:solidFill>
                                </a:defRPr>
                             </a:lvl2pPr>
                             <a:lvl3pPr>
                                <a:buNone />
                                <a:defRPr sz="1600">
                                   <a:solidFill>
                                      <a:schemeClr val="tx1">
                                         <a:tint val="75000" />
                                      </a:schemeClr>
                                   </a:solidFill>
                                </a:defRPr>
                             </a:lvl3pPr>
                             <a:lvl4pPr>
                                <a:buNone />
                                <a:defRPr sz="1400">
                                   <a:solidFill>
                                      <a:schemeClr val="tx1">
                                         <a:tint val="75000" />
                                      </a:schemeClr>
                                   </a:solidFill>
                                </a:defRPr>
                             </a:lvl4pPr>
                             <a:lvl5pPr>
                                <a:buNone />
                                <a:defRPr sz="1400">
                                   <a:solidFill>
                                      <a:schemeClr val="tx1">
                                         <a:tint val="75000" />
                                      </a:schemeClr>
                                   </a:solidFill>
                                </a:defRPr>
                             </a:lvl5pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец текста</a:t>
                             </a:r>
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="6" name="Дата 3" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="dt" sz="half" idx="10" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="7" name="Нижний колонтитул 4" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="ftr" sz="quarter" idx="11" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="8" name="Номер слайда 5" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="sldNum" sz="quarter" idx="12" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:fld id="{83D67D37-4D50-4727-9FC5-DB57FEBCC683}" type="slidenum">
                                <a:rPr lang="ru-RU" altLang="en-US" />
                                <a:pPr>
                                   <a:defRPr />
                                </a:pPr>
                                <a:t>‹#›</a:t>
                             </a:fld>
                             <a:endParaRPr lang="ru-RU" altLang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                 </p:spTree>
                 <p:extLst>
                    <p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">
                       <p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="4150170223" />
                    </p:ext>
                 </p:extLst>
              </p:cSld>
              <p:clrMapOvr>
                 <a:masterClrMapping />
              </p:clrMapOvr>
           </p:sldLayout>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/slideLayout2.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">
        <pkg:xmlData>
           <p:sldLayout xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" showMasterSp="0" type="obj" preserve="1">
              <p:cSld name="Заголовок и объект">
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
                          <p:cNvPr id="2" name="Заголовок 1" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="title" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr algn="l">
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец заголовка</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="3" name="Объект 2" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph idx="1" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle />
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец текста</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="1" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Второй уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="2" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Третий уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="3" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Четвертый уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="4" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Пятый уровень</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="4" name="Дата 9" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="dt" sz="half" idx="10" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="5" name="Нижний колонтитул 21" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="ftr" sz="quarter" idx="11" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="6" name="Номер слайда 17" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="sldNum" sz="quarter" idx="12" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:fld id="{382B5DFC-BE07-4CF4-9174-843A8E6DB242}" type="slidenum">
                                <a:rPr lang="ru-RU" altLang="en-US" />
                                <a:pPr>
                                   <a:defRPr />
                                </a:pPr>
                                <a:t>‹#›</a:t>
                             </a:fld>
                             <a:endParaRPr lang="ru-RU" altLang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                 </p:spTree>
                 <p:extLst>
                    <p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">
                       <p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="3175471264" />
                    </p:ext>
                 </p:extLst>
              </p:cSld>
              <p:clrMapOvr>
                 <a:masterClrMapping />
              </p:clrMapOvr>
           </p:sldLayout>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/slideLayout5.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">
        <pkg:xmlData>
           <p:sldLayout xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" showMasterSp="0" type="twoTxTwoObj" preserve="1">
              <p:cSld name="Сравнение">
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
                          <p:cNvPr id="2" name="Заголовок 1" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="title" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="609600" y="273050" />
                             <a:ext cx="10972800" cy="1143000" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец заголовка</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="3" name="Текст 2" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="body" idx="1" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="609600" y="5486400" />
                             <a:ext cx="5386917" cy="838200" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr marL="0" indent="0">
                                <a:buNone />
                                <a:defRPr sz="2400" b="1">
                                   <a:solidFill>
                                      <a:schemeClr val="accent1" />
                                   </a:solidFill>
                                </a:defRPr>
                             </a:lvl1pPr>
                             <a:lvl2pPr>
                                <a:buNone />
                                <a:defRPr sz="2000" b="1" />
                             </a:lvl2pPr>
                             <a:lvl3pPr>
                                <a:buNone />
                                <a:defRPr sz="1800" b="1" />
                             </a:lvl3pPr>
                             <a:lvl4pPr>
                                <a:buNone />
                                <a:defRPr sz="1600" b="1" />
                             </a:lvl4pPr>
                             <a:lvl5pPr>
                                <a:buNone />
                                <a:defRPr sz="1600" b="1" />
                             </a:lvl5pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец текста</a:t>
                             </a:r>
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="4" name="Текст 3" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="body" sz="half" idx="3" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="6193368" y="5486400" />
                             <a:ext cx="5389033" cy="838200" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr marL="0" indent="0">
                                <a:buNone />
                                <a:defRPr sz="2400" b="1">
                                   <a:solidFill>
                                      <a:schemeClr val="accent1" />
                                   </a:solidFill>
                                </a:defRPr>
                             </a:lvl1pPr>
                             <a:lvl2pPr>
                                <a:buNone />
                                <a:defRPr sz="2000" b="1" />
                             </a:lvl2pPr>
                             <a:lvl3pPr>
                                <a:buNone />
                                <a:defRPr sz="1800" b="1" />
                             </a:lvl3pPr>
                             <a:lvl4pPr>
                                <a:buNone />
                                <a:defRPr sz="1600" b="1" />
                             </a:lvl4pPr>
                             <a:lvl5pPr>
                                <a:buNone />
                                <a:defRPr sz="1600" b="1" />
                             </a:lvl5pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец текста</a:t>
                             </a:r>
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="5" name="Объект 4" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph sz="quarter" idx="2" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="609600" y="1516912" />
                             <a:ext cx="5386917" cy="3941763" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr sz="2400" />
                             </a:lvl1pPr>
                             <a:lvl2pPr>
                                <a:defRPr sz="2000" />
                             </a:lvl2pPr>
                             <a:lvl3pPr>
                                <a:defRPr sz="1800" />
                             </a:lvl3pPr>
                             <a:lvl4pPr>
                                <a:defRPr sz="1600" />
                             </a:lvl4pPr>
                             <a:lvl5pPr>
                                <a:defRPr sz="1600" />
                             </a:lvl5pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец текста</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="1" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Второй уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="2" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Третий уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="3" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Четвертый уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="4" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Пятый уровень</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="6" name="Объект 5" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph sz="quarter" idx="4" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="6193368" y="1516912" />
                             <a:ext cx="5389033" cy="3941763" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr sz="2400" />
                             </a:lvl1pPr>
                             <a:lvl2pPr>
                                <a:defRPr sz="2000" />
                             </a:lvl2pPr>
                             <a:lvl3pPr>
                                <a:defRPr sz="1800" />
                             </a:lvl3pPr>
                             <a:lvl4pPr>
                                <a:defRPr sz="1600" />
                             </a:lvl4pPr>
                             <a:lvl5pPr>
                                <a:defRPr sz="1600" />
                             </a:lvl5pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец текста</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="1" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Второй уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="2" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Третий уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="3" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Четвертый уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="4" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Пятый уровень</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="7" name="Дата 6" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="dt" sz="half" idx="10" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="8" name="Нижний колонтитул 7" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="ftr" sz="quarter" idx="11" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="9" name="Номер слайда 8" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="sldNum" sz="quarter" idx="12" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:fld id="{CC3C1F58-E366-4F85-82F9-641758169AC8}" type="slidenum">
                                <a:rPr lang="ru-RU" altLang="en-US" />
                                <a:pPr>
                                   <a:defRPr />
                                </a:pPr>
                                <a:t>‹#›</a:t>
                             </a:fld>
                             <a:endParaRPr lang="ru-RU" altLang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                 </p:spTree>
                 <p:extLst>
                    <p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">
                       <p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="1363275956" />
                    </p:ext>
                 </p:extLst>
              </p:cSld>
              <p:clrMapOvr>
                 <a:masterClrMapping />
              </p:clrMapOvr>
           </p:sldLayout>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/slideLayout6.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">
        <pkg:xmlData>
           <p:sldLayout xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" showMasterSp="0" type="titleOnly" preserve="1">
              <p:cSld name="Только заголовок">
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
                          <p:cNvPr id="2" name="Заголовок 1" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="title" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="609600" y="274320" />
                             <a:ext cx="9960864" cy="1143000" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr algn="l">
                                <a:defRPr sz="4600" />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец заголовка</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="3" name="Дата 9" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="dt" sz="half" idx="10" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="4" name="Нижний колонтитул 21" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="ftr" sz="quarter" idx="11" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="5" name="Номер слайда 17" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="sldNum" sz="quarter" idx="12" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:fld id="{EE60CF8F-C1C2-44A8-94D1-F92DB5DCB7AD}" type="slidenum">
                                <a:rPr lang="ru-RU" altLang="en-US" />
                                <a:pPr>
                                   <a:defRPr />
                                </a:pPr>
                                <a:t>‹#›</a:t>
                             </a:fld>
                             <a:endParaRPr lang="ru-RU" altLang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                 </p:spTree>
                 <p:extLst>
                    <p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">
                       <p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="528027102" />
                    </p:ext>
                 </p:extLst>
              </p:cSld>
              <p:clrMapOvr>
                 <a:masterClrMapping />
              </p:clrMapOvr>
           </p:sldLayout>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/slideLayout7.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">
        <pkg:xmlData>
           <p:sldLayout xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" showMasterSp="0" type="blank" preserve="1">
              <p:cSld name="Пустой слайд">
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
                          <p:cNvPr id="2" name="Дата 9" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="dt" sz="half" idx="10" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="3" name="Нижний колонтитул 21" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="ftr" sz="quarter" idx="11" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="4" name="Номер слайда 17" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="sldNum" sz="quarter" idx="12" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:fld id="{F8834660-8313-44A3-AB3F-2911F7EACDEE}" type="slidenum">
                                <a:rPr lang="ru-RU" altLang="en-US" />
                                <a:pPr>
                                   <a:defRPr />
                                </a:pPr>
                                <a:t>‹#›</a:t>
                             </a:fld>
                             <a:endParaRPr lang="ru-RU" altLang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                 </p:spTree>
                 <p:extLst>
                    <p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">
                       <p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="89868039" />
                    </p:ext>
                 </p:extLst>
              </p:cSld>
              <p:clrMapOvr>
                 <a:masterClrMapping />
              </p:clrMapOvr>
           </p:sldLayout>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/slideLayout10.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">
        <pkg:xmlData>
           <p:sldLayout xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" showMasterSp="0" type="vertTx" preserve="1">
              <p:cSld name="Заголовок и вертикальный текст">
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
                          <p:cNvPr id="2" name="Заголовок 1" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="title" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle />
                          <a:p>
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец заголовка</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="3" name="Вертикальный текст 2" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="body" orient="vert" idx="1" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr vert="eaVert" />
                          <a:lstStyle />
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец текста</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="1" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Второй уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="2" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Третий уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="3" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Четвертый уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="4" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Пятый уровень</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="4" name="Дата 9" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="dt" sz="half" idx="10" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="5" name="Нижний колонтитул 21" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="ftr" sz="quarter" idx="11" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="6" name="Номер слайда 17" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="sldNum" sz="quarter" idx="12" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:fld id="{5B04192E-7723-4557-8216-11924F18D528}" type="slidenum">
                                <a:rPr lang="ru-RU" altLang="en-US" />
                                <a:pPr>
                                   <a:defRPr />
                                </a:pPr>
                                <a:t>‹#›</a:t>
                             </a:fld>
                             <a:endParaRPr lang="ru-RU" altLang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                 </p:spTree>
                 <p:extLst>
                    <p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">
                       <p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="1908708634" />
                    </p:ext>
                 </p:extLst>
              </p:cSld>
              <p:clrMapOvr>
                 <a:masterClrMapping />
              </p:clrMapOvr>
           </p:sldLayout>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/_rels/slideLayout11.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
        <pkg:xmlData>
           <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
              <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml" />
           </Relationships>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/slideLayout9.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">
        <pkg:xmlData>
           <p:sldLayout xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" showMasterSp="0" type="picTx" preserve="1">
              <p:cSld name="Рисунок с подписью">
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
                          <p:cNvPr id="2" name="Заголовок 1" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="title" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="7408976" y="1705709" />
                             <a:ext cx="4071824" cy="1253808" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr anchor="b" />
                          <a:lstStyle>
                             <a:lvl1pPr algn="l">
                                <a:buNone />
                                <a:defRPr sz="2200" b="1">
                                   <a:solidFill>
                                      <a:schemeClr val="accent1" />
                                   </a:solidFill>
                                </a:defRPr>
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец заголовка</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="3" name="Рисунок 2" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="pic" idx="1" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="1420837" y="1019907" />
                             <a:ext cx="5486400" cy="4114800" />
                          </a:xfrm>
                          <a:prstGeom prst="ellipse">
                             <a:avLst />
                          </a:prstGeom>
                          <a:solidFill>
                             <a:schemeClr val="bg2">
                                <a:shade val="50000" />
                             </a:schemeClr>
                          </a:solidFill>
                          <a:ln w="50800" cap="flat">
                             <a:solidFill>
                                <a:schemeClr val="bg2" />
                             </a:solidFill>
                             <a:miter lim="800000" />
                          </a:ln>
                          <a:effectLst>
                             <a:outerShdw blurRad="152000" dist="345000" dir="5400000" sx="-80000" sy="-18000" rotWithShape="0">
                                <a:srgbClr val="000000">
                                   <a:alpha val="25000" />
                                </a:srgbClr>
                             </a:outerShdw>
                          </a:effectLst>
                          <a:scene3d>
                             <a:camera prst="orthographicFront" />
                             <a:lightRig rig="contrasting" dir="t">
                                <a:rot lat="0" lon="0" rev="2400000" />
                             </a:lightRig>
                          </a:scene3d>
                          <a:sp3d contourW="7620">
                             <a:bevelT w="63500" h="63500" />
                             <a:contourClr>
                                <a:schemeClr val="bg2">
                                   <a:shade val="50000" />
                                </a:schemeClr>
                             </a:contourClr>
                          </a:sp3d>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr>
                             <a:normAutofit />
                          </a:bodyPr>
                          <a:lstStyle>
                             <a:lvl1pPr marL="0" indent="0">
                                <a:buNone />
                                <a:defRPr sz="3200" />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:r>
                                <a:rPr lang="ru-RU" noProof="0" smtClean="0" />
                                <a:t>Вставка рисунка</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" noProof="0" dirty="0" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="4" name="Текст 3" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="body" sz="half" idx="2" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="7408979" y="2998765" />
                             <a:ext cx="4071821" cy="2663482" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr lIns="45720" rIns="45720" />
                          <a:lstStyle>
                             <a:lvl1pPr marL="0" indent="0">
                                <a:buFontTx />
                                <a:buNone />
                                <a:defRPr sz="1200" />
                             </a:lvl1pPr>
                             <a:lvl2pPr>
                                <a:buFontTx />
                                <a:buNone />
                                <a:defRPr sz="1200" />
                             </a:lvl2pPr>
                             <a:lvl3pPr>
                                <a:buFontTx />
                                <a:buNone />
                                <a:defRPr sz="1000" />
                             </a:lvl3pPr>
                             <a:lvl4pPr>
                                <a:buFontTx />
                                <a:buNone />
                                <a:defRPr sz="900" />
                             </a:lvl4pPr>
                             <a:lvl5pPr>
                                <a:buFontTx />
                                <a:buNone />
                                <a:defRPr sz="900" />
                             </a:lvl5pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец текста</a:t>
                             </a:r>
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="5" name="Дата 4" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="dt" sz="half" idx="10" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="6" name="Нижний колонтитул 5" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="ftr" sz="quarter" idx="11" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="7" name="Номер слайда 6" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="sldNum" sz="quarter" idx="12" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:fld id="{27B32991-A43A-4DE4-9F4B-E4027BB1DEC4}" type="slidenum">
                                <a:rPr lang="ru-RU" altLang="en-US" />
                                <a:pPr>
                                   <a:defRPr />
                                </a:pPr>
                                <a:t>‹#›</a:t>
                             </a:fld>
                             <a:endParaRPr lang="ru-RU" altLang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                 </p:spTree>
                 <p:extLst>
                    <p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">
                       <p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="3452004956" />
                    </p:ext>
                 </p:extLst>
              </p:cSld>
              <p:clrMapOvr>
                 <a:masterClrMapping />
              </p:clrMapOvr>
           </p:sldLayout>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/slideLayouts/slideLayout8.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml">
        <pkg:xmlData>
           <p:sldLayout xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" showMasterSp="0" type="objTx" preserve="1">
              <p:cSld name="Объект с подписью">
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
                          <p:cNvPr id="2" name="Заголовок 1" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="title" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="609600" y="1185528" />
                             <a:ext cx="4267200" cy="730250" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr tIns="0" bIns="0" anchor="t" />
                          <a:lstStyle>
                             <a:lvl1pPr algn="l">
                                <a:buNone />
                                <a:defRPr sz="1800" b="1">
                                   <a:solidFill>
                                      <a:schemeClr val="accent1" />
                                   </a:solidFill>
                                </a:defRPr>
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец заголовка</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="3" name="Текст 2" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="body" idx="2" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="609600" y="214424" />
                             <a:ext cx="3657600" cy="914400" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr lIns="45720" tIns="0" rIns="45720" bIns="0" anchor="b" />
                          <a:lstStyle>
                             <a:lvl1pPr marL="0" indent="0" algn="l">
                                <a:buNone />
                                <a:defRPr sz="1400" />
                             </a:lvl1pPr>
                             <a:lvl2pPr>
                                <a:buNone />
                                <a:defRPr sz="1200" />
                             </a:lvl2pPr>
                             <a:lvl3pPr>
                                <a:buNone />
                                <a:defRPr sz="1000" />
                             </a:lvl3pPr>
                             <a:lvl4pPr>
                                <a:buNone />
                                <a:defRPr sz="900" />
                             </a:lvl4pPr>
                             <a:lvl5pPr>
                                <a:buNone />
                                <a:defRPr sz="900" />
                             </a:lvl5pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец текста</a:t>
                             </a:r>
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="4" name="Объект 3" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph sz="half" idx="1" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="609600" y="1981200" />
                             <a:ext cx="9448800" cy="3810000" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr sz="2800" />
                             </a:lvl1pPr>
                             <a:lvl2pPr>
                                <a:defRPr sz="2400" />
                             </a:lvl2pPr>
                             <a:lvl3pPr>
                                <a:defRPr sz="2200" />
                             </a:lvl3pPr>
                             <a:lvl4pPr>
                                <a:defRPr sz="2000" />
                             </a:lvl4pPr>
                             <a:lvl5pPr>
                                <a:defRPr sz="2000" />
                             </a:lvl5pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Образец текста</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="1" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Второй уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="2" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Третий уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="3" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Четвертый уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="4" />
                             <a:r>
                                <a:rPr lang="ru-RU" smtClean="0" />
                                <a:t>Пятый уровень</a:t>
                             </a:r>
                             <a:endParaRPr lang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="5" name="Дата 4" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="dt" sz="half" idx="10" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="6" name="Нижний колонтитул 5" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="ftr" sz="quarter" idx="11" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr />
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="7" name="Номер слайда 6" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="sldNum" sz="quarter" idx="12" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="10875433" y="6421439" />
                             <a:ext cx="1016000" cy="365125" />
                          </a:xfrm>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr />
                          <a:lstStyle>
                             <a:lvl1pPr>
                                <a:defRPr />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:fld id="{F9313173-BE08-4FC4-8C4A-6CDAFF3706B8}" type="slidenum">
                                <a:rPr lang="ru-RU" altLang="en-US" />
                                <a:pPr>
                                   <a:defRPr />
                                </a:pPr>
                                <a:t>‹#›</a:t>
                             </a:fld>
                             <a:endParaRPr lang="ru-RU" altLang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                 </p:spTree>
                 <p:extLst>
                    <p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">
                       <p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="3879372608" />
                    </p:ext>
                 </p:extLst>
              </p:cSld>
              <p:clrMapOvr>
                 <a:masterClrMapping />
              </p:clrMapOvr>
           </p:sldLayout>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/theme/theme1.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.theme+xml">
        <pkg:xmlData>
           <a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Техническая">
              <a:themeElements>
                 <a:clrScheme name="Техническая">
                    <a:dk1>
                       <a:sysClr val="windowText" lastClr="000000" />
                    </a:dk1>
                    <a:lt1>
                       <a:sysClr val="window" lastClr="FFFFFF" />
                    </a:lt1>
                    <a:dk2>
                       <a:srgbClr val="3B3B3B" />
                    </a:dk2>
                    <a:lt2>
                       <a:srgbClr val="D4D2D0" />
                    </a:lt2>
                    <a:accent1>
                       <a:srgbClr val="6EA0B0" />
                    </a:accent1>
                    <a:accent2>
                       <a:srgbClr val="CCAF0A" />
                    </a:accent2>
                    <a:accent3>
                       <a:srgbClr val="8D89A4" />
                    </a:accent3>
                    <a:accent4>
                       <a:srgbClr val="748560" />
                    </a:accent4>
                    <a:accent5>
                       <a:srgbClr val="9E9273" />
                    </a:accent5>
                    <a:accent6>
                       <a:srgbClr val="7E848D" />
                    </a:accent6>
                    <a:hlink>
                       <a:srgbClr val="00C8C3" />
                    </a:hlink>
                    <a:folHlink>
                       <a:srgbClr val="A116E0" />
                    </a:folHlink>
                 </a:clrScheme>
                 <a:fontScheme name="Техническая">
                    <a:majorFont>
                       <a:latin typeface="Franklin Gothic Book" />
                       <a:ea typeface="" />
                       <a:cs typeface="" />
                       <a:font script="Jpan" typeface="ＭＳ Ｐゴシック" />
                       <a:font script="Hang" typeface="HY견고딕" />
                       <a:font script="Hans" typeface="宋体" />
                       <a:font script="Hant" typeface="微軟正黑體" />
                       <a:font script="Arab" typeface="Tahoma" />
                       <a:font script="Hebr" typeface="Arial" />
                       <a:font script="Thai" typeface="Cordia New" />
                       <a:font script="Ethi" typeface="Nyala" />
                       <a:font script="Beng" typeface="Vrinda" />
                       <a:font script="Gujr" typeface="Shruti" />
                       <a:font script="Khmr" typeface="DaunPenh" />
                       <a:font script="Knda" typeface="Tunga" />
                       <a:font script="Guru" typeface="Raavi" />
                       <a:font script="Cans" typeface="Euphemia" />
                       <a:font script="Cher" typeface="Plantagenet Cherokee" />
                       <a:font script="Yiii" typeface="Microsoft Yi Baiti" />
                       <a:font script="Tibt" typeface="Microsoft Himalaya" />
                       <a:font script="Thaa" typeface="MV Boli" />
                       <a:font script="Deva" typeface="Mangal" />
                       <a:font script="Telu" typeface="Gautami" />
                       <a:font script="Taml" typeface="Latha" />
                       <a:font script="Syrc" typeface="Estrangelo Edessa" />
                       <a:font script="Orya" typeface="Kalinga" />
                       <a:font script="Mlym" typeface="Kartika" />
                       <a:font script="Laoo" typeface="DokChampa" />
                       <a:font script="Sinh" typeface="Iskoola Pota" />
                       <a:font script="Mong" typeface="Mongolian Baiti" />
                       <a:font script="Viet" typeface="Arial" />
                       <a:font script="Uigh" typeface="Microsoft Uighur" />
                       <a:font script="Geor" typeface="Sylfaen" />
                    </a:majorFont>
                    <a:minorFont>
                       <a:latin typeface="Arial" />
                       <a:ea typeface="" />
                       <a:cs typeface="" />
                       <a:font script="Jpan" typeface="HGｺﾞｼｯｸM" />
                       <a:font script="Hang" typeface="HY중고딕" />
                       <a:font script="Hans" typeface="黑体" />
                       <a:font script="Hant" typeface="微軟正黑體" />
                       <a:font script="Arab" typeface="Tahoma" />
                       <a:font script="Hebr" typeface="Levenim MT" />
                       <a:font script="Thai" typeface="LilyUPC" />
                       <a:font script="Ethi" typeface="Nyala" />
                       <a:font script="Beng" typeface="Vrinda" />
                       <a:font script="Gujr" typeface="Shruti" />
                       <a:font script="Khmr" typeface="DaunPenh" />
                       <a:font script="Knda" typeface="Tunga" />
                       <a:font script="Guru" typeface="Raavi" />
                       <a:font script="Cans" typeface="Euphemia" />
                       <a:font script="Cher" typeface="Plantagenet Cherokee" />
                       <a:font script="Yiii" typeface="Microsoft Yi Baiti" />
                       <a:font script="Tibt" typeface="Microsoft Himalaya" />
                       <a:font script="Thaa" typeface="MV Boli" />
                       <a:font script="Deva" typeface="Mangal" />
                       <a:font script="Telu" typeface="Gautami" />
                       <a:font script="Taml" typeface="Latha" />
                       <a:font script="Syrc" typeface="Estrangelo Edessa" />
                       <a:font script="Orya" typeface="Kalinga" />
                       <a:font script="Mlym" typeface="Kartika" />
                       <a:font script="Laoo" typeface="DokChampa" />
                       <a:font script="Sinh" typeface="Iskoola Pota" />
                       <a:font script="Mong" typeface="Mongolian Baiti" />
                       <a:font script="Viet" typeface="Arial" />
                       <a:font script="Uigh" typeface="Microsoft Uighur" />
                       <a:font script="Geor" typeface="Sylfaen" />
                    </a:minorFont>
                 </a:fontScheme>
                 <a:fmtScheme name="Техническая">
                    <a:fillStyleLst>
                       <a:solidFill>
                          <a:schemeClr val="phClr" />
                       </a:solidFill>
                       <a:gradFill rotWithShape="1">
                          <a:gsLst>
                             <a:gs pos="0">
                                <a:schemeClr val="phClr">
                                   <a:tint val="1000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="68000">
                                <a:schemeClr val="phClr">
                                   <a:tint val="77000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="81000">
                                <a:schemeClr val="phClr">
                                   <a:tint val="79000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="86000">
                                <a:schemeClr val="phClr">
                                   <a:tint val="73000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="100000">
                                <a:schemeClr val="phClr">
                                   <a:tint val="35000" />
                                </a:schemeClr>
                             </a:gs>
                          </a:gsLst>
                          <a:lin ang="5400000" scaled="1" />
                       </a:gradFill>
                       <a:gradFill rotWithShape="1">
                          <a:gsLst>
                             <a:gs pos="0">
                                <a:schemeClr val="phClr">
                                   <a:tint val="73000" />
                                   <a:satMod val="150000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="25000">
                                <a:schemeClr val="phClr">
                                   <a:tint val="96000" />
                                   <a:shade val="80000" />
                                   <a:satMod val="105000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="38000">
                                <a:schemeClr val="phClr">
                                   <a:tint val="96000" />
                                   <a:shade val="59000" />
                                   <a:satMod val="120000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="55000">
                                <a:schemeClr val="phClr">
                                   <a:shade val="57000" />
                                   <a:satMod val="120000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="80000">
                                <a:schemeClr val="phClr">
                                   <a:shade val="56000" />
                                   <a:satMod val="145000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="88000">
                                <a:schemeClr val="phClr">
                                   <a:shade val="63000" />
                                   <a:satMod val="160000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="100000">
                                <a:schemeClr val="phClr">
                                   <a:tint val="99555" />
                                   <a:satMod val="155000" />
                                </a:schemeClr>
                             </a:gs>
                          </a:gsLst>
                          <a:lin ang="5400000" scaled="1" />
                       </a:gradFill>
                    </a:fillStyleLst>
                    <a:lnStyleLst>
                       <a:ln w="9525" cap="flat" cmpd="sng" algn="ctr">
                          <a:solidFill>
                             <a:schemeClr val="phClr">
                                <a:shade val="60000" />
                                <a:satMod val="300000" />
                             </a:schemeClr>
                          </a:solidFill>
                          <a:prstDash val="solid" />
                       </a:ln>
                       <a:ln w="19050" cap="flat" cmpd="sng" algn="ctr">
                          <a:solidFill>
                             <a:schemeClr val="phClr" />
                          </a:solidFill>
                          <a:prstDash val="solid" />
                       </a:ln>
                       <a:ln w="19050" cap="flat" cmpd="sng" algn="ctr">
                          <a:solidFill>
                             <a:schemeClr val="phClr" />
                          </a:solidFill>
                          <a:prstDash val="solid" />
                       </a:ln>
                    </a:lnStyleLst>
                    <a:effectStyleLst>
                       <a:effectStyle>
                          <a:effectLst>
                             <a:glow rad="63500">
                                <a:schemeClr val="phClr">
                                   <a:tint val="30000" />
                                   <a:shade val="95000" />
                                   <a:satMod val="300000" />
                                   <a:alpha val="50000" />
                                </a:schemeClr>
                             </a:glow>
                          </a:effectLst>
                       </a:effectStyle>
                       <a:effectStyle>
                          <a:effectLst>
                             <a:glow rad="70000">
                                <a:schemeClr val="phClr">
                                   <a:tint val="30000" />
                                   <a:shade val="95000" />
                                   <a:satMod val="300000" />
                                   <a:alpha val="50000" />
                                </a:schemeClr>
                             </a:glow>
                          </a:effectLst>
                       </a:effectStyle>
                       <a:effectStyle>
                          <a:effectLst>
                             <a:glow rad="76200">
                                <a:schemeClr val="phClr">
                                   <a:tint val="30000" />
                                   <a:shade val="95000" />
                                   <a:satMod val="300000" />
                                   <a:alpha val="50000" />
                                </a:schemeClr>
                             </a:glow>
                          </a:effectLst>
                          <a:scene3d>
                             <a:camera prst="orthographicFront" fov="0">
                                <a:rot lat="0" lon="0" rev="0" />
                             </a:camera>
                             <a:lightRig rig="harsh" dir="t">
                                <a:rot lat="6000000" lon="6000000" rev="0" />
                             </a:lightRig>
                          </a:scene3d>
                          <a:sp3d contourW="10000" prstMaterial="metal">
                             <a:bevelT w="20000" h="9000" prst="softRound" />
                             <a:contourClr>
                                <a:schemeClr val="phClr">
                                   <a:shade val="30000" />
                                   <a:satMod val="200000" />
                                </a:schemeClr>
                             </a:contourClr>
                          </a:sp3d>
                       </a:effectStyle>
                    </a:effectStyleLst>
                    <a:bgFillStyleLst>
                       <a:solidFill>
                          <a:schemeClr val="phClr" />
                       </a:solidFill>
                       <a:gradFill rotWithShape="1">
                          <a:gsLst>
                             <a:gs pos="0">
                                <a:schemeClr val="phClr">
                                   <a:shade val="40000" />
                                   <a:satMod val="150000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="30000">
                                <a:schemeClr val="phClr">
                                   <a:shade val="60000" />
                                   <a:satMod val="150000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="100000">
                                <a:schemeClr val="phClr">
                                   <a:tint val="83000" />
                                   <a:satMod val="200000" />
                                </a:schemeClr>
                             </a:gs>
                          </a:gsLst>
                          <a:lin ang="13000000" scaled="0" />
                       </a:gradFill>
                       <a:gradFill rotWithShape="1">
                          <a:gsLst>
                             <a:gs pos="0">
                                <a:schemeClr val="phClr">
                                   <a:tint val="78000" />
                                   <a:satMod val="220000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="100000">
                                <a:schemeClr val="phClr">
                                   <a:shade val="35000" />
                                   <a:satMod val="155000" />
                                </a:schemeClr>
                             </a:gs>
                          </a:gsLst>
                          <a:path path="circle">
                             <a:fillToRect l="60000" t="50000" r="40000" b="50000" />
                          </a:path>
                       </a:gradFill>
                    </a:bgFillStyleLst>
                 </a:fmtScheme>
              </a:themeElements>
              <a:objectDefaults />
              <a:extraClrSchemeLst />
           </a:theme>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/theme/theme2.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.theme+xml">
        <pkg:xmlData>
           <a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Тема Office">
              <a:themeElements>
                 <a:clrScheme name="Стандартная">
                    <a:dk1>
                       <a:sysClr val="windowText" lastClr="000000" />
                    </a:dk1>
                    <a:lt1>
                       <a:sysClr val="window" lastClr="FFFFFF" />
                    </a:lt1>
                    <a:dk2>
                       <a:srgbClr val="1F497D" />
                    </a:dk2>
                    <a:lt2>
                       <a:srgbClr val="EEECE1" />
                    </a:lt2>
                    <a:accent1>
                       <a:srgbClr val="4F81BD" />
                    </a:accent1>
                    <a:accent2>
                       <a:srgbClr val="C0504D" />
                    </a:accent2>
                    <a:accent3>
                       <a:srgbClr val="9BBB59" />
                    </a:accent3>
                    <a:accent4>
                       <a:srgbClr val="8064A2" />
                    </a:accent4>
                    <a:accent5>
                       <a:srgbClr val="4BACC6" />
                    </a:accent5>
                    <a:accent6>
                       <a:srgbClr val="F79646" />
                    </a:accent6>
                    <a:hlink>
                       <a:srgbClr val="0000FF" />
                    </a:hlink>
                    <a:folHlink>
                       <a:srgbClr val="800080" />
                    </a:folHlink>
                 </a:clrScheme>
                 <a:fontScheme name="Стандартная">
                    <a:majorFont>
                       <a:latin typeface="Calibri" />
                       <a:ea typeface="" />
                       <a:cs typeface="" />
                       <a:font script="Jpan" typeface="ＭＳ Ｐゴシック" />
                       <a:font script="Hang" typeface="맑은 고딕" />
                       <a:font script="Hans" typeface="宋体" />
                       <a:font script="Hant" typeface="新細明體" />
                       <a:font script="Arab" typeface="Times New Roman" />
                       <a:font script="Hebr" typeface="Times New Roman" />
                       <a:font script="Thai" typeface="Angsana New" />
                       <a:font script="Ethi" typeface="Nyala" />
                       <a:font script="Beng" typeface="Vrinda" />
                       <a:font script="Gujr" typeface="Shruti" />
                       <a:font script="Khmr" typeface="MoolBoran" />
                       <a:font script="Knda" typeface="Tunga" />
                       <a:font script="Guru" typeface="Raavi" />
                       <a:font script="Cans" typeface="Euphemia" />
                       <a:font script="Cher" typeface="Plantagenet Cherokee" />
                       <a:font script="Yiii" typeface="Microsoft Yi Baiti" />
                       <a:font script="Tibt" typeface="Microsoft Himalaya" />
                       <a:font script="Thaa" typeface="MV Boli" />
                       <a:font script="Deva" typeface="Mangal" />
                       <a:font script="Telu" typeface="Gautami" />
                       <a:font script="Taml" typeface="Latha" />
                       <a:font script="Syrc" typeface="Estrangelo Edessa" />
                       <a:font script="Orya" typeface="Kalinga" />
                       <a:font script="Mlym" typeface="Kartika" />
                       <a:font script="Laoo" typeface="DokChampa" />
                       <a:font script="Sinh" typeface="Iskoola Pota" />
                       <a:font script="Mong" typeface="Mongolian Baiti" />
                       <a:font script="Viet" typeface="Times New Roman" />
                       <a:font script="Uigh" typeface="Microsoft Uighur" />
                    </a:majorFont>
                    <a:minorFont>
                       <a:latin typeface="Calibri" />
                       <a:ea typeface="" />
                       <a:cs typeface="" />
                       <a:font script="Jpan" typeface="ＭＳ Ｐゴシック" />
                       <a:font script="Hang" typeface="맑은 고딕" />
                       <a:font script="Hans" typeface="宋体" />
                       <a:font script="Hant" typeface="新細明體" />
                       <a:font script="Arab" typeface="Arial" />
                       <a:font script="Hebr" typeface="Arial" />
                       <a:font script="Thai" typeface="Cordia New" />
                       <a:font script="Ethi" typeface="Nyala" />
                       <a:font script="Beng" typeface="Vrinda" />
                       <a:font script="Gujr" typeface="Shruti" />
                       <a:font script="Khmr" typeface="DaunPenh" />
                       <a:font script="Knda" typeface="Tunga" />
                       <a:font script="Guru" typeface="Raavi" />
                       <a:font script="Cans" typeface="Euphemia" />
                       <a:font script="Cher" typeface="Plantagenet Cherokee" />
                       <a:font script="Yiii" typeface="Microsoft Yi Baiti" />
                       <a:font script="Tibt" typeface="Microsoft Himalaya" />
                       <a:font script="Thaa" typeface="MV Boli" />
                       <a:font script="Deva" typeface="Mangal" />
                       <a:font script="Telu" typeface="Gautami" />
                       <a:font script="Taml" typeface="Latha" />
                       <a:font script="Syrc" typeface="Estrangelo Edessa" />
                       <a:font script="Orya" typeface="Kalinga" />
                       <a:font script="Mlym" typeface="Kartika" />
                       <a:font script="Laoo" typeface="DokChampa" />
                       <a:font script="Sinh" typeface="Iskoola Pota" />
                       <a:font script="Mong" typeface="Mongolian Baiti" />
                       <a:font script="Viet" typeface="Arial" />
                       <a:font script="Uigh" typeface="Microsoft Uighur" />
                    </a:minorFont>
                 </a:fontScheme>
                 <a:fmtScheme name="Стандартная">
                    <a:fillStyleLst>
                       <a:solidFill>
                          <a:schemeClr val="phClr" />
                       </a:solidFill>
                       <a:gradFill rotWithShape="1">
                          <a:gsLst>
                             <a:gs pos="0">
                                <a:schemeClr val="phClr">
                                   <a:tint val="50000" />
                                   <a:satMod val="300000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="35000">
                                <a:schemeClr val="phClr">
                                   <a:tint val="37000" />
                                   <a:satMod val="300000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="100000">
                                <a:schemeClr val="phClr">
                                   <a:tint val="15000" />
                                   <a:satMod val="350000" />
                                </a:schemeClr>
                             </a:gs>
                          </a:gsLst>
                          <a:lin ang="16200000" scaled="1" />
                       </a:gradFill>
                       <a:gradFill rotWithShape="1">
                          <a:gsLst>
                             <a:gs pos="0">
                                <a:schemeClr val="phClr">
                                   <a:shade val="51000" />
                                   <a:satMod val="130000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="80000">
                                <a:schemeClr val="phClr">
                                   <a:shade val="93000" />
                                   <a:satMod val="130000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="100000">
                                <a:schemeClr val="phClr">
                                   <a:shade val="94000" />
                                   <a:satMod val="135000" />
                                </a:schemeClr>
                             </a:gs>
                          </a:gsLst>
                          <a:lin ang="16200000" scaled="0" />
                       </a:gradFill>
                    </a:fillStyleLst>
                    <a:lnStyleLst>
                       <a:ln w="9525" cap="flat" cmpd="sng" algn="ctr">
                          <a:solidFill>
                             <a:schemeClr val="phClr">
                                <a:shade val="95000" />
                                <a:satMod val="105000" />
                             </a:schemeClr>
                          </a:solidFill>
                          <a:prstDash val="solid" />
                       </a:ln>
                       <a:ln w="25400" cap="flat" cmpd="sng" algn="ctr">
                          <a:solidFill>
                             <a:schemeClr val="phClr" />
                          </a:solidFill>
                          <a:prstDash val="solid" />
                       </a:ln>
                       <a:ln w="38100" cap="flat" cmpd="sng" algn="ctr">
                          <a:solidFill>
                             <a:schemeClr val="phClr" />
                          </a:solidFill>
                          <a:prstDash val="solid" />
                       </a:ln>
                    </a:lnStyleLst>
                    <a:effectStyleLst>
                       <a:effectStyle>
                          <a:effectLst>
                             <a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0">
                                <a:srgbClr val="000000">
                                   <a:alpha val="38000" />
                                </a:srgbClr>
                             </a:outerShdw>
                          </a:effectLst>
                       </a:effectStyle>
                       <a:effectStyle>
                          <a:effectLst>
                             <a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0">
                                <a:srgbClr val="000000">
                                   <a:alpha val="35000" />
                                </a:srgbClr>
                             </a:outerShdw>
                          </a:effectLst>
                       </a:effectStyle>
                       <a:effectStyle>
                          <a:effectLst>
                             <a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0">
                                <a:srgbClr val="000000">
                                   <a:alpha val="35000" />
                                </a:srgbClr>
                             </a:outerShdw>
                          </a:effectLst>
                          <a:scene3d>
                             <a:camera prst="orthographicFront">
                                <a:rot lat="0" lon="0" rev="0" />
                             </a:camera>
                             <a:lightRig rig="threePt" dir="t">
                                <a:rot lat="0" lon="0" rev="1200000" />
                             </a:lightRig>
                          </a:scene3d>
                          <a:sp3d>
                             <a:bevelT w="63500" h="25400" />
                          </a:sp3d>
                       </a:effectStyle>
                    </a:effectStyleLst>
                    <a:bgFillStyleLst>
                       <a:solidFill>
                          <a:schemeClr val="phClr" />
                       </a:solidFill>
                       <a:gradFill rotWithShape="1">
                          <a:gsLst>
                             <a:gs pos="0">
                                <a:schemeClr val="phClr">
                                   <a:tint val="40000" />
                                   <a:satMod val="350000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="40000">
                                <a:schemeClr val="phClr">
                                   <a:tint val="45000" />
                                   <a:shade val="99000" />
                                   <a:satMod val="350000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="100000">
                                <a:schemeClr val="phClr">
                                   <a:shade val="20000" />
                                   <a:satMod val="255000" />
                                </a:schemeClr>
                             </a:gs>
                          </a:gsLst>
                          <a:path path="circle">
                             <a:fillToRect l="50000" t="-80000" r="50000" b="180000" />
                          </a:path>
                       </a:gradFill>
                       <a:gradFill rotWithShape="1">
                          <a:gsLst>
                             <a:gs pos="0">
                                <a:schemeClr val="phClr">
                                   <a:tint val="80000" />
                                   <a:satMod val="300000" />
                                </a:schemeClr>
                             </a:gs>
                             <a:gs pos="100000">
                                <a:schemeClr val="phClr">
                                   <a:shade val="30000" />
                                   <a:satMod val="200000" />
                                </a:schemeClr>
                             </a:gs>
                          </a:gsLst>
                          <a:path path="circle">
                             <a:fillToRect l="50000" t="50000" r="50000" b="50000" />
                          </a:path>
                       </a:gradFill>
                    </a:bgFillStyleLst>
                 </a:fmtScheme>
              </a:themeElements>
              <a:objectDefaults />
              <a:extraClrSchemeLst />
           </a:theme>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/notesMasters/_rels/notesMaster1.xml.rels" pkg:contentType="application/vnd.openxmlformats-package.relationships+xml">
        <pkg:xmlData>
           <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
              <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="../theme/theme2.xml" />
           </Relationships>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/notesMasters/notesMaster1.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.notesMaster+xml">
        <pkg:xmlData>
           <p:notesMaster xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
              <p:cSld>
                 <p:bg>
                    <p:bgPr>
                       <a:solidFill>
                          <a:schemeClr val="bg1" />
                       </a:solidFill>
                       <a:effectLst />
                    </p:bgPr>
                 </p:bg>
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
                          <p:cNvPr id="2" name="Верхний колонтитул 1" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="hdr" sz="quarter" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="0" y="0" />
                             <a:ext cx="2971800" cy="457200" />
                          </a:xfrm>
                          <a:prstGeom prst="rect">
                             <a:avLst />
                          </a:prstGeom>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0" />
                          <a:lstStyle>
                             <a:lvl1pPr algn="l" eaLnBrk="1" hangingPunct="1">
                                <a:defRPr sz="1200" />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="3" name="Дата 2" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="dt" idx="1" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="3884613" y="0" />
                             <a:ext cx="2971800" cy="457200" />
                          </a:xfrm>
                          <a:prstGeom prst="rect">
                             <a:avLst />
                          </a:prstGeom>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0" />
                          <a:lstStyle>
                             <a:lvl1pPr algn="r" eaLnBrk="1" hangingPunct="1">
                                <a:defRPr sz="1200" />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:fld id="{CD42284B-B685-4EAA-961E-E4A31315573F}" type="datetimeFigureOut">
                                <a:rPr lang="ru-RU" />
                                <a:pPr>
                                   <a:defRPr />
                                </a:pPr>
                                <a:t>18.05.2020</a:t>
                             </a:fld>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="4" name="Образ слайда 3" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" noRot="1" noChangeAspect="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="sldImg" idx="2" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="381000" y="685800" />
                             <a:ext cx="6096000" cy="3429000" />
                          </a:xfrm>
                          <a:prstGeom prst="rect">
                             <a:avLst />
                          </a:prstGeom>
                          <a:noFill />
                          <a:ln w="12700">
                             <a:solidFill>
                                <a:prstClr val="black" />
                             </a:solidFill>
                          </a:ln>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0" anchor="ctr" />
                          <a:lstStyle />
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:endParaRPr lang="ru-RU" noProof="0" smtClean="0" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="5" name="Заметки 4" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="body" sz="quarter" idx="3" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="685800" y="4343400" />
                             <a:ext cx="5486400" cy="4114800" />
                          </a:xfrm>
                          <a:prstGeom prst="rect">
                             <a:avLst />
                          </a:prstGeom>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0">
                             <a:normAutofit />
                          </a:bodyPr>
                          <a:lstStyle />
                          <a:p>
                             <a:pPr lvl="0" />
                             <a:r>
                                <a:rPr lang="ru-RU" noProof="0" smtClean="0" />
                                <a:t>Образец текста</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="1" />
                             <a:r>
                                <a:rPr lang="ru-RU" noProof="0" smtClean="0" />
                                <a:t>Второй уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="2" />
                             <a:r>
                                <a:rPr lang="ru-RU" noProof="0" smtClean="0" />
                                <a:t>Третий уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="3" />
                             <a:r>
                                <a:rPr lang="ru-RU" noProof="0" smtClean="0" />
                                <a:t>Четвертый уровень</a:t>
                             </a:r>
                          </a:p>
                          <a:p>
                             <a:pPr lvl="4" />
                             <a:r>
                                <a:rPr lang="ru-RU" noProof="0" smtClean="0" />
                                <a:t>Пятый уровень</a:t>
                             </a:r>
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="6" name="Нижний колонтитул 5" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="ftr" sz="quarter" idx="4" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="0" y="8685213" />
                             <a:ext cx="2971800" cy="457200" />
                          </a:xfrm>
                          <a:prstGeom prst="rect">
                             <a:avLst />
                          </a:prstGeom>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr vert="horz" lIns="91440" tIns="45720" rIns="91440" bIns="45720" rtlCol="0" anchor="b" />
                          <a:lstStyle>
                             <a:lvl1pPr algn="l" eaLnBrk="1" hangingPunct="1">
                                <a:defRPr sz="1200" />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:endParaRPr lang="ru-RU" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                    <p:sp>
                       <p:nvSpPr>
                          <p:cNvPr id="7" name="Номер слайда 6" />
                          <p:cNvSpPr>
                             <a:spLocks noGrp="1" />
                          </p:cNvSpPr>
                          <p:nvPr>
                             <p:ph type="sldNum" sz="quarter" idx="5" />
                          </p:nvPr>
                       </p:nvSpPr>
                       <p:spPr>
                          <a:xfrm>
                             <a:off x="3884613" y="8685213" />
                             <a:ext cx="2971800" cy="457200" />
                          </a:xfrm>
                          <a:prstGeom prst="rect">
                             <a:avLst />
                          </a:prstGeom>
                       </p:spPr>
                       <p:txBody>
                          <a:bodyPr vert="horz" wrap="square" lIns="91440" tIns="45720" rIns="91440" bIns="45720" numCol="1" anchor="b" anchorCtr="0" compatLnSpc="1">
                             <a:prstTxWarp prst="textNoShape">
                                <a:avLst />
                             </a:prstTxWarp>
                          </a:bodyPr>
                          <a:lstStyle>
                             <a:lvl1pPr algn="r" eaLnBrk="1" hangingPunct="1">
                                <a:defRPr sz="1200" />
                             </a:lvl1pPr>
                          </a:lstStyle>
                          <a:p>
                             <a:pPr>
                                <a:defRPr />
                             </a:pPr>
                             <a:fld id="{F0957C41-402A-4DB3-B7E2-B0455372538E}" type="slidenum">
                                <a:rPr lang="ru-RU" altLang="en-US" />
                                <a:pPr>
                                   <a:defRPr />
                                </a:pPr>
                                <a:t>‹#›</a:t>
                             </a:fld>
                             <a:endParaRPr lang="ru-RU" altLang="en-US" />
                          </a:p>
                       </p:txBody>
                    </p:sp>
                 </p:spTree>
                 <p:extLst>
                    <p:ext uri="{BB962C8B-B14F-4D97-AF65-F5344CB8AC3E}">
                       <p14:creationId xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="1461856519" />
                    </p:ext>
                 </p:extLst>
              </p:cSld>
              <p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink" />
              <p:notesStyle>
                 <a:lvl1pPr algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                    <a:spcBef>
                       <a:spcPct val="30000" />
                    </a:spcBef>
                    <a:spcAft>
                       <a:spcPct val="0" />
                    </a:spcAft>
                    <a:defRPr sz="1200" kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="+mn-lt" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl1pPr>
                 <a:lvl2pPr marL="457200" algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                    <a:spcBef>
                       <a:spcPct val="30000" />
                    </a:spcBef>
                    <a:spcAft>
                       <a:spcPct val="0" />
                    </a:spcAft>
                    <a:defRPr sz="1200" kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="+mn-lt" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl2pPr>
                 <a:lvl3pPr marL="914400" algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                    <a:spcBef>
                       <a:spcPct val="30000" />
                    </a:spcBef>
                    <a:spcAft>
                       <a:spcPct val="0" />
                    </a:spcAft>
                    <a:defRPr sz="1200" kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="+mn-lt" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl3pPr>
                 <a:lvl4pPr marL="1371600" algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                    <a:spcBef>
                       <a:spcPct val="30000" />
                    </a:spcBef>
                    <a:spcAft>
                       <a:spcPct val="0" />
                    </a:spcAft>
                    <a:defRPr sz="1200" kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="+mn-lt" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl4pPr>
                 <a:lvl5pPr marL="1828800" algn="l" rtl="0" eaLnBrk="0" fontAlgn="base" hangingPunct="0">
                    <a:spcBef>
                       <a:spcPct val="30000" />
                    </a:spcBef>
                    <a:spcAft>
                       <a:spcPct val="0" />
                    </a:spcAft>
                    <a:defRPr sz="1200" kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="+mn-lt" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl5pPr>
                 <a:lvl6pPr marL="2286000" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                    <a:defRPr sz="1200" kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="+mn-lt" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl6pPr>
                 <a:lvl7pPr marL="2743200" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                    <a:defRPr sz="1200" kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="+mn-lt" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl7pPr>
                 <a:lvl8pPr marL="3200400" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                    <a:defRPr sz="1200" kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="+mn-lt" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl8pPr>
                 <a:lvl9pPr marL="3657600" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
                    <a:defRPr sz="1200" kern="1200">
                       <a:solidFill>
                          <a:schemeClr val="tx1" />
                       </a:solidFill>
                       <a:latin typeface="+mn-lt" />
                       <a:ea typeface="+mn-ea" />
                       <a:cs typeface="+mn-cs" />
                    </a:defRPr>
                 </a:lvl9pPr>
              </p:notesStyle>
           </p:notesMaster>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/viewProps.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.viewProps+xml">
        <pkg:xmlData>
           <p:viewPr xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" lastView="sldThumbnailView">
              <p:normalViewPr horzBarState="maximized">
                 <p:restoredLeft sz="13422" autoAdjust="0" />
                 <p:restoredTop sz="94746" autoAdjust="0" />
              </p:normalViewPr>
              <p:slideViewPr>
                 <p:cSldViewPr>
                    <p:cViewPr varScale="1">
                       <p:scale>
                          <a:sx n="50" d="100" />
                          <a:sy n="50" d="100" />
                       </p:scale>
                       <p:origin x="504" y="42" />
                    </p:cViewPr>
                    <p:guideLst>
                       <p:guide orient="horz" pos="2160" />
                       <p:guide pos="3840" />
                    </p:guideLst>
                 </p:cSldViewPr>
              </p:slideViewPr>
              <p:outlineViewPr>
                 <p:cViewPr>
                    <p:scale>
                       <a:sx n="33" d="100" />
                       <a:sy n="33" d="100" />
                    </p:scale>
                    <p:origin x="0" y="0" />
                 </p:cViewPr>
              </p:outlineViewPr>
              <p:notesTextViewPr>
                 <p:cViewPr>
                    <p:scale>
                       <a:sx n="100" d="100" />
                       <a:sy n="100" d="100" />
                    </p:scale>
                    <p:origin x="0" y="0" />
                 </p:cViewPr>
              </p:notesTextViewPr>
              <p:gridSpacing cx="72008" cy="72008" />
           </p:viewPr>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/presProps.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.presProps+xml">
        <pkg:xmlData>
           <p:presentationPr xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
              <p:showPr showNarration="1">
                 <p:present />
                 <p:sldAll />
                 <p:penClr>
                    <a:prstClr val="red" />
                 </p:penClr>
                 <p:extLst>
                    <p:ext uri="{EC167BDD-8182-4AB7-AECC-EB403E3ABB37}">
                       <p14:laserClr xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main">
                          <a:srgbClr val="FF0000" />
                       </p14:laserClr>
                    </p:ext>
                    <p:ext uri="{2FDB2607-1784-4EEB-B798-7EB5836EED8A}">
                       <p14:showMediaCtrls xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="1" />
                    </p:ext>
                 </p:extLst>
              </p:showPr>
              <p:clrMru>
                 <a:srgbClr val="FF0000" />
                 <a:srgbClr val="FFFF00" />
              </p:clrMru>
              <p:extLst>
                 <p:ext uri="{E76CE94A-603C-4142-B9EB-6D1370010A27}">
                    <p14:discardImageEditData xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="0" />
                 </p:ext>
                 <p:ext uri="{D31A062A-798A-4329-ABDD-BBA856620510}">
                    <p14:defaultImageDpi xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main" val="220" />
                 </p:ext>
                 <p:ext uri="{FD5EFAAD-0ECE-453E-9831-46B23BE46B34}">
                    <p15:chartTrackingRefBased xmlns:p15="http://schemas.microsoft.com/office/powerpoint/2012/main" val="0" />
                 </p:ext>
              </p:extLst>
           </p:presentationPr>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/ppt/tableStyles.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.tableStyles+xml">
        <pkg:xmlData>
           <a:tblStyleLst xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" def="{5C22544A-7EE6-4342-B048-85BDC9FD1C3A}" />
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/docProps/core.xml" pkg:contentType="application/vnd.openxmlformats-package.core-properties+xml" pkg:padding="256">
        <pkg:xmlData>
           <cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
              <dc:title>Слайд 1</dc:title>
              <dc:creator>Роман Чалый</dc:creator>
              <cp:lastModifiedBy>Роман Чалый</cp:lastModifiedBy>
              <cp:revision>92</cp:revision>
              <dcterms:created xsi:type="dcterms:W3CDTF">2006-08-21T12:50:35Z</dcterms:created>
           </cp:coreProperties>
        </pkg:xmlData>
     </pkg:part>
     <pkg:part pkg:name="/docProps/app.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" pkg:padding="256">
        <pkg:xmlData>
           <Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
              <Template>Technic</Template>
              <TotalTime>211</TotalTime>
              <Words>0</Words>
              <Application>Microsoft Office PowerPoint</Application>
              <PresentationFormat>Широкоэкранный</PresentationFormat>
              <Paragraphs>0</Paragraphs>
              <Slides>2</Slides>
              <Notes>0</Notes>
              <HiddenSlides>0</HiddenSlides>
              <MMClips>0</MMClips>
              <ScaleCrop>false</ScaleCrop>
              <HeadingPairs>
                 <vt:vector size="6" baseType="variant">
                    <vt:variant>
                       <vt:lpstr>Использованные шрифты</vt:lpstr>
                    </vt:variant>
                    <vt:variant>
                       <vt:i4>5</vt:i4>
                    </vt:variant>
                    <vt:variant>
                       <vt:lpstr>Тема</vt:lpstr>
                    </vt:variant>
                    <vt:variant>
                       <vt:i4>1</vt:i4>
                    </vt:variant>
                    <vt:variant>
                       <vt:lpstr>Заголовки слайдов</vt:lpstr>
                    </vt:variant>
                    <vt:variant>
                       <vt:i4>2</vt:i4>
                    </vt:variant>
                 </vt:vector>
              </HeadingPairs>
              <TitlesOfParts>
                 <vt:vector size="8" baseType="lpstr">
                    <vt:lpstr>Arial</vt:lpstr>
                    <vt:lpstr>Calibri</vt:lpstr>
                    <vt:lpstr>Franklin Gothic Book</vt:lpstr>
                    <vt:lpstr>Tahoma</vt:lpstr>
                    <vt:lpstr>Wingdings 2</vt:lpstr>
                    <vt:lpstr>Техническая</vt:lpstr>
                    <vt:lpstr>Презентация PowerPoint</vt:lpstr>
                    ${lpstr}
                    <vt:lpstr>Презентация PowerPoint</vt:lpstr>
                 </vt:vector>
              </TitlesOfParts>
              <Company>Work</Company>
              <LinksUpToDate>false</LinksUpToDate>
              <SharedDoc>false</SharedDoc>
              <HyperlinksChanged>false</HyperlinksChanged>
                 <AppVersion>15.0000</AppVersion>
           </Properties>
        </pkg:xmlData>
     </pkg:part>
  </pkg:package>`
  return new Blob([stringSlides])
}

export default getSlide
