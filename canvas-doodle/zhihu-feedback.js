(function() {
  let padHtmlStr = '<button id="feedback">反馈</button>';
  for (let i = 0; i < 100; i++) {
    padHtmlStr += `<p>${(i + '').repeat(Math.ceil(Math.random() * 50))}</p>`;
  }
  document.querySelector('#tab-zhihu-feedback').innerHTML = padHtmlStr;

  document.querySelector('#feedback').onclick = () => {
    html2canvas(document.body).then(canvas => {
      const downDiv = document.createElement('div');
      downDiv.style.position = 'fixed';
      downDiv.style.top = '10px';
      downDiv.style.left = '20px';
      downDiv.style.right = '20px';
      downDiv.style.padding = '5px';
      downDiv.style.backgroundColor = '#fff';
      downDiv.innerHTML =
        '<button id="download">下载</button>' +
        '<button id="close">关闭</button>' +
        '<button id="backStep">后退</button>' +
        '<button id="goStep">前进</button>' +
        '<button id="clear">清除</button>' +
        '<label>画笔颜色:</label>' +
        `<select id="pencil-color">
          <option value="red">红</option>
          <option value="blue">蓝</option>
          <option value="yellow">黄</option>
          <option value="green">绿</option>
          <option value="black">黑</option>
          <option value="white">白</option>
         </select>` +
        '<label>画笔粗细:</label>' +
        `<select id="pencil-size">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>`;
      
      const canvasDraw = document.createElement('canvas');
      canvasDraw.style.cursor = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAALGPC/xhBQAAARpJREFUOBGdkr1KA0EUhTcxEkSQQIpAihQWPoedD2BnIVsZQiBVEkiR7SwtBDsJqXwBLQwEgoWNjY2FjYUQ38Ei5Oc7sBeGLTKze+Djzsyecxh2N4ryq0zkHpYQQ2H1SW5TNsxukaZzQsewACvTvIBg3eFUaABHMEv3OruBIN3icm8wZl+FZ3iBQ/AqweGW2FrlKlChV0McFsxOvaegm/T2lLzzTC/dqzaO7A1s/8GzE28Dhhj0f1jQnZ+c18CrKxxrcMO2/uK87m3AcAkrsKA7vzlvQJAmuNywrX84bwY1YBrBATyCFWj+QguCJKNCU1DZQ7r/Y55CsK5x2i2eWFcggTPIJd3Eiv5Zd3KlU3OJOQd9lVd4A5Xl1g4YG2GGhwRfegAAAABJRU5ErkJggg==) 0 17,default';
      canvasDraw.style.width = '100%';

      const subDiv = document.createElement('div');
      subDiv.style.position = 'absolute';
      subDiv.style.top = '50px';
      subDiv.style.left = '20px';
      subDiv.style.right = '20px';
      subDiv.style.bottom = '20px';
      subDiv.style.padding = '10px';
      subDiv.style.overflow = 'auto';
      subDiv.style.backgroundColor = '#fff';
      subDiv.appendChild(downDiv);
      subDiv.appendChild(canvasDraw);

      const div = document.createElement('div');
      div.style.position = 'fixed';
      div.style.top = 0;
      div.style.left = 0;
      div.style.right = 0;
      div.style.bottom = 0;
      div.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      div.appendChild(subDiv);
      document.body.appendChild(div);

      const drawWidth = subDiv.clientWidth - 40;
      const drawHeight = drawWidth * canvas.height / canvas.width;
      canvasDraw.width = canvas.width;
      canvasDraw.height = canvas.height;
      const ctxDraw = canvasDraw.getContext('2d');
      const ctx = canvas.getContext('2d');
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctxDraw.putImageData(imgData, 0, 0, 0, 0, canvas.width, canvas.height);

      const imgDataList = [imgData];
      let drawIndex = 0;

      ctxDraw.lineJoin = 'round';
      ctxDraw.lineCap = 'round';
      ctxDraw.strokeStyle = 'red';
      ctxDraw.lineWidth = 1;

      canvasDraw.onmousedown = ev => {
        const scaleX = canvasDraw.width / canvasDraw.clientWidth;
        const scaleY = canvasDraw.height / canvasDraw.clientHeight;
        
        ctxDraw.beginPath();
        ctxDraw.moveTo(ev.offsetX * scaleX, ev.offsetY * scaleY);
        let move = false;
        canvasDraw.onmousemove = evt => {
          ctxDraw.lineTo(evt.offsetX * scaleX, evt.offsetY * scaleY);
          ctxDraw.stroke();
          if (!move) move = true;
        };
        window.onmouseup = () => {
          if (move) {
            imgDataList.length = drawIndex + 1;
            imgDataList.push(ctxDraw.getImageData(0, 0, canvasDraw.width, canvasDraw.height));
            drawIndex++;
            move = false;
          }
          canvasDraw.onmousemove = null;
          canvasDraw.onmouseup = null;
        };
      };

      document.querySelector('#close').onclick = () => {
        document.body.removeChild(div);
      };

      document.querySelector('#download').onclick = () => {
        downloadImage(canvasDraw);
      };

      document.querySelector('#backStep').onclick = () => {
        if (drawIndex === 0) return;
        const curImgData = imgDataList[--drawIndex];
        ctxDraw.putImageData(curImgData, 0, 0, 0, 0, drawWidth, drawHeight);
      };

      document.querySelector('#goStep').onclick = () => {
        if (drawIndex === imgDataList.length - 1) return;
        const curImgData = imgDataList[++drawIndex];
        ctxDraw.putImageData(curImgData, 0, 0, 0, 0, drawWidth, drawHeight);
      };

      document.querySelector('#clear').onclick = () => {
        const curImgData = imgDataList[0];
        ctxDraw.putImageData(curImgData, 0, 0, 0, 0, drawWidth, drawHeight);
        imgDataList.length = 1;
        drawIndex = 0;
      };

      document.querySelector('#pencil-color').onchange = (e) => {
        ctxDraw.strokeStyle =  e.target.value;
      };

      document.querySelector('#pencil-size').onchange = (e) => {
        ctxDraw.lineWidth =  e.target.value;
      };
    });
  };

  function convertCanvasToImage(canvas) {
    const image = new Image();
    const url = canvas.toDataURL('image/png');
    image.src = url;
    image.style.width = '100%';
    return image;
  }

  function downloadImage(canvas) {
    const a = document.createElement('a');
    a.setAttribute('download', 'feedback.png');
    a.href = canvas.toDataURL('image/png');
    document.body.appendChild(a);
    a.click();
  }
})();
