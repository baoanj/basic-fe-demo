window.onload = () => {
  document.getElementById('btn').onclick = () => {
    simpleHTML2PDF(document.getElementById('print'), {smart: true}, () => {console.log('good');});
    return;
    const printFrame = document.createElement('iframe');
    printFrame.style.width = '100%';
    // printFrame.style.display = 'none';
    window.document.body.appendChild(printFrame);
    const printWindow = printFrame.contentWindow;
    printWindow.document.open();
    printWindow.document.write('<link href="http://127.0.0.1:8099/dist/assets/bootstrap/bootstrap.min.css" rel="stylesheet">');
    printWindow.document.write('<link href="http://127.0.0.1:8099/dist/assets/print.css" rel="stylesheet">');
    printWindow.document.write('<h1>printprintprintprintprintprintprintprint</h1>')
    printWindow.document.write('<h1 class="print-childTable-title">打印printprint</h1>')
    printWindow.document.write('<div class="print-schema-title"></div><div class="print-schema-title">抄送打印-999</div><table class="print-table" style="table-layout:fixed"><tbody><tr><td class="col-sm-2 col-xs-2">单行文本</td><td class="col-sm-10 col-xs-10" colspan="3">aaaaaaa</td></tr><tr><td class="col-sm-2 col-xs-2">数字</td><td class="col-sm-10 col-xs-10" colspan="3">1111</td></tr><tr><td class="col-sm-2 col-xs-2">日期</td><td class="col-sm-10 col-xs-10" colspan="3">2018-10-16</td></tr></tbody></table><p class="print-sub-title">审批记录</p><table class="print-table"><thead><tr><th class="ivu-table-column-center ivu-table-hidden"><div class="ivu-table-cell ivu-table-hidden"><span class="">#</span> <!----> <!----></div></th><th class="ivu-table-hidden"><div class="ivu-table-cell ivu-table-hidden"><span class="">环节名称</span> <!----> <!----></div></th><th class=""><div class="ivu-table-cell"><span class="ivu-table-cell-sort">办理人</span> <span class="ivu-table-sort"><i class="ivu-icon ivu-icon-arrow-up-b"></i> <i class="ivu-icon ivu-icon-arrow-down-b"></i></span> <!----></div></th><th class=""><div class="ivu-table-cell"><span class="">办理结果</span> <!----> <!----></div></th><th class=""><div class="ivu-table-cell"><span class="ivu-table-cell-sort">审批意见</span> <span class="ivu-table-sort"><i class="ivu-icon ivu-icon-arrow-up-b"></i> <i class="ivu-icon ivu-icon-arrow-down-b"></i></span> <!----></div></th><th class=""><div class="ivu-table-cell"><span class="ivu-table-cell-sort">创建时间</span> <span class="ivu-table-sort"><i class="ivu-icon ivu-icon-arrow-up-b"></i> <i class="ivu-icon ivu-icon-arrow-down-b"></i></span> <!----></div></th><th class=""><div class="ivu-table-cell"><span class="ivu-table-cell-sort">办理时间</span> <span class="ivu-table-sort"><i class="ivu-icon ivu-icon-arrow-up-b"></i> <i class="ivu-icon ivu-icon-arrow-down-b"></i></span> <!----></div></th> <!----></tr></thead><tbody class="ivu-table-tbody"><tr class="ivu-table-row"><td class="ivu-table-column-center ivu-table-hidden"><div class="ivu-table-cell ivu-table-hidden"><span>1</span> <!----> <!----> <!----> <!----> <!----></div></td><td class="ivu-table-hidden"><div class="ivu-table-cell ivu-table-hidden"><!----> <!----> <!----> <span>提交</span> <!----> <!----></div></td><td class=""><div class="ivu-table-cell"><!----> <!----> <!----> <span>管理员</span> <!----> <!----></div></td><td class=""><div class="ivu-table-cell"><!----> <!----> <!----> <!----> <!----> <div class="ivu-tag ivu-tag-blue ivu-tag-dot ivu-tag-checked"><span class="ivu-tag-dot-inner"></span> <span class="ivu-tag-text">同意</span> <!----></div></div></td><td class=""><div class="ivu-table-cell"><!----> <!----> <!----> <span>操作成功</span> <!----> <!----></div></td><td class=""><div class="ivu-table-cell"><!----> <!----> <!----> <!----> <!----> <div>2018-10-16 16:14:57</div></div></td><td class=""><div class="ivu-table-cell"><!----> <!----> <!----> <!----> <!----> <div>2018-10-16 16:14:57</div></div></td></tr> <!----><tr class="ivu-table-row"><td class="ivu-table-column-center ivu-table-hidden"><div class="ivu-table-cell ivu-table-hidden"><span>2</span> <!----> <!----> <!----> <!----> <!----></div></td><td class="ivu-table-hidden"><div class="ivu-table-cell ivu-table-hidden"><!----> <!----> <!----> <span>审批节点</span> <!----> <!----></div></td><td class=""><div class="ivu-table-cell"><!----> <!----> <!----> <span>管理员</span> <!----> <!----></div></td><td class=""><div class="ivu-table-cell"><!----> <!----> <!----> <!----> <!----> <div class="ivu-tag ivu-tag-blue ivu-tag-dot ivu-tag-checked"><span class="ivu-tag-dot-inner"></span> <span class="ivu-tag-text">同意</span> <!----></div></div></td><td class=""><div class="ivu-table-cell"><!----> <!----> <!----> <span></span> <!----> <!----></div></td><td class=""><div class="ivu-table-cell"><!----> <!----> <!----> <!----> <!----> <div>2018-10-16 16:14:57</div></div></td><td class=""><div class="ivu-table-cell"><!----> <!----> <!----> <!----> <!----> <div>2018-10-16 16:15:28</div></div></td></tr> <!----><tr class="ivu-table-row"><td class="ivu-table-column-center ivu-table-hidden"><div class="ivu-table-cell ivu-table-hidden"><span>3</span> <!----> <!----> <!----> <!----> <!----></div></td><td class="ivu-table-hidden"><div class="ivu-table-cell ivu-table-hidden"><!----> <!----> <!----> <span>经办节点(经办)</span> <!----> <!----></div></td><td class=""><div class="ivu-table-cell"><!----> <!----> <!----> <span>管理员</span> <!----> <!----></div></td><td class=""><div class="ivu-table-cell"><!----> <!----> <!----> <!----> <!----> <div class="ivu-tag ivu-tag-blue ivu-tag-dot ivu-tag-checked"><span class="ivu-tag-dot-inner"></span> <span class="ivu-tag-text">同意</span> <!----></div></div></td><td class=""><div class="ivu-table-cell"><!----> <!----> <!----> <span></span> <!----> <!----></div></td><td class=""><div class="ivu-table-cell"><!----> <!----> <!----> <!----> <!----> <div>2018-10-16 16:15:27</div></div></td><td class=""><div class="ivu-table-cell"><!----> <!----> <!----> <!----> <!----> <div>2018-10-16 16:15:37</div></div></td></tr> <!----></tbody></table><div class="print-info container-fluid sheet_container" style="padding-left:0;padding-right:0;"><div class="row sheet-control form-group"><div class="col-sm-4 col-xs-4 col-md-4">打印人:</div><div class="col-sm-4 col-xs-4 col-md-4">打印时间:2018/11/1 上午11:14:48</div><div class="col-sm-4 col-xs-4 col-md-4"><div id="printQrCode" style="text-align:right"></div><div style="text-align:right"><div style="position:absolute;right:15px;width:160px;text-align:center"></div></div></div></div></div>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<p>printprintprint</p>')
    printWindow.document.write('<p>printprintprint</p>')
    printWindow.document.write('<p>printprintprint</p>')
    printWindow.document.write('<p>printprintprint</p>')
    printWindow.document.write('<h1>1</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>2</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>3</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>4</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>5</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>6</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>7</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>printprintprint</h1>')
    printWindow.document.write('<h1>8</h1>')
    printWindow.document.write('<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>');
    printWindow.document.write('<script src="https://unpkg.com/jspdf@latest/dist/jspdf.min.js"></script>')
    // printWindow.document.write('<script src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>')
    printWindow.document.write(`
      <script>
        window.onload = function() {
          // 一步到位，不过内容太宽会被截断，可能需要额外设置
          // html2pdf().from(document.body).set({margin: 2}).save();

          // 自己干
          html2canvas(document.body).then(function(canvas) {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF('p', 'px', 'a4');
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = pageWidth - 40;
            const imgHeight = pageHeight - 40;
            let position = 0;
            while (position <= canvasHeight) {
              const tempCanvas = document.createElement('canvas');
              const tempHeight = canvasWidth * imgHeight / imgWidth;
              tempCanvas.width = canvasWidth;
              tempCanvas.height = tempHeight;
              const tempCtx = tempCanvas.getContext('2d');

              const bodyCtx = canvas.getContext('2d');
              const ctxImgData = bodyCtx.getImageData(0, position, canvasWidth, tempHeight);
              tempCtx.putImageData(ctxImgData, 0, 0, 0, 0, canvasWidth, tempHeight);
              
              pdf.addImage(tempCanvas.toDataURL("image/png"), 'PNG', 20, 20, imgWidth, imgHeight);
              position += tempHeight;
              if (position <= canvasHeight) {
                pdf.addPage();
              }
            }
            pdf.save('a4.pdf');
          });

          // 已被jsPDF弃用，内容太宽也存在各种问题
          // const pdf = new jsPDF();
          // pdf.addHTML(document.body, 0, 0, {pagesplit: true}, function () {
          //   pdf.save("test.pdf");
          // });

          // 生成文本PDF，但不支持中文，样式也很乱
          // const pdf = new jsPDF();
          // pdf.fromHTML(document.body);
          // pdf.save('test.pdf');
        }
      </script>
    `);
    printWindow.document.close();
  }
}
