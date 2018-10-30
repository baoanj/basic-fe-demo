window.onload = function() {
  document.getElementById('print').onclick = function() {
    var iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.left = 0;
    iframe.style.top = 0;
    iframe.style.opacity = 0;
    document.body.appendChild(iframe);

    var printWindow = iframe.contentWindow;
    printWindow.document.open();
    printWindow.document.write(
      '<html>' +
        '<head>' +
          '<title>打印-Example</title>' +
          '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">' +
          '<style>' +
            'h1 { margin-top: 50px; }' +
          '</style>' +
        '</head>' +
        '<body>' +
          '<h1>Example <span class="badge badge-secondary">New</span></h1>' +
          '<script> </script>' +
        '</body>' +
      '</html>'
    );
    printWindow.document.close();

    // ************************************************
    // 至关重要的代码：<script> </script>，尤其中间的这个空格，
    // 有了内容不为空（哪怕只有一个空格）的 script 标签，
    // printWindow.document.readyState 才能变为 complete
    // ************************************************

    printHelper();
    
    function printHelper() {
      setTimeout(function() {
        console.log(printWindow.document.readyState);
        if (printWindow.document.readyState === 'complete') {
          printWindow.focus();
          printWindow.print();
          // printWindow.document.execCommand('print');
          document.body.removeChild(iframe);
        } else {
          printHelper();
        }
      }, 50);
    }
  }
}