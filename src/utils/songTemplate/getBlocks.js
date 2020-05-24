import getLine from './getLine';
import getBreak from './getBreak';
import getSize from '../getSize';

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
</pkg:part>`;

const getBlocks = (quantitySlides, lines, createEmptySlides) => {
  let blocks = ``;
  const indexFirstSlide = 1;
  const indexLastSlide = quantitySlides;

  for (let i = 1, j = 0; i <= quantitySlides; i++, j += 2) {
    if (createEmptySlides && (i === indexFirstSlide || i === indexLastSlide)) {
      blocks += getEmptySlideBody(i);
      continue;
    }
    const size = createEmptySlides
      ? getSize(lines[j - 2], lines[j - 1])
      : getSize(lines[j], lines[j + 1]);
    const useSecondLine = createEmptySlides ? lines[j - 1] : !!lines[j + 1];
    const br = useSecondLine ? getBreak(size) : '';
    const firstLine = createEmptySlides ? getLine(lines[j - 2], size) : getLine(lines[j], size);
    const secondLine = useSecondLine
      ? createEmptySlides
        ? getLine(lines[j - 1], size)
        : getLine(lines[j + 1], size)
      : '';

    blocks += `<pkg:part pkg:name="/ppt/slides/slide${i}.xml" pkg:contentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml">
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
                         ${firstLine}
                         ${br}
                         ${secondLine}
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
  </pkg:part>`;
  }
  return blocks;
};

export default getBlocks;
