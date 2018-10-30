window.onload = () => {
  document.getElementById('print').onclick = () => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    window.printFrameReady = false;

    const printWindow = iframe.contentWindow;
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>打印-Example</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
          <style>
            h1 { margin-top: 50px; }
          </style>
        </head>
        <body>
          <h1>Example <span class="badge badge-secondary">New</span></h1>
          <script>
            window.onload = () => {
              console.log('print iframe loaded!');
              window.parent.printFrameReady = true;
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();

    // ************************************************
    // 至关重要的代码：<script>...</script>，
    // 有了内容不为空（哪怕只有一个空格）的 script 标签，
    // printWindow.document.readyState 才能变为 complete
    // ************************************************

    printHelper();
    
    function printHelper() {
      setTimeout(() => {
        console.log(window.printFrameReady);
        if (window.printFrameReady) {
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