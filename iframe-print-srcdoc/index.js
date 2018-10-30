window.onload = () => {
  document.getElementById('print').onclick = () => {
    const iframe = document.createElement('iframe');

    iframe.srcdoc = `
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
        </body>
      </html>
    `;
    
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    const printWindow = iframe.contentWindow;

    printHelper();
    
    function printHelper() {
      setTimeout(() => {
        console.log(printWindow.document.readyState);
        if (printWindow.document.readyState === 'complete') {
          // printWindow.document.execCommand('print');
          printWindow.print();
          document.body.removeChild(iframe);
        } else {
          printHelper();
        }
      }, 50);
    }
  };
};