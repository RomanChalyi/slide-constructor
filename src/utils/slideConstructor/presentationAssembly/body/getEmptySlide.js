const getEmptySlideBody = (
  index
) => `<pkg:part pkg:name="/ppt/slides/slide${index}.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml">
<pkg:xmlData>
  <p:sld xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
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
      </p:spTree>
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

export default getEmptySlideBody
