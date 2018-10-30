window.onload = () => {
  document.getElementById('print').onclick = () => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    const printWindow = iframe.contentWindow;

    window.onmessage = event => {
      if (event.data && event.data.ready) {
        console.log(event);
        printWindow.print();
        // printWindow.document.execCommand('print');
        document.body.removeChild(iframe);
      }
    };

    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>打印-Example</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.css">
          <style>
            h1 { margin-top: 50px; }
          </style>
        </head>
        <body>
          <h1>Example <span class="badge badge-secondary">New</span></h1>
          <script>
            window.onload = () => {
              console.log('print iframe loaded!');
              window.parent.postMessage({ ready: true }, '*');
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };
};