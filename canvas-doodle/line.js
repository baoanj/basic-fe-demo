(function() {
  const canvas = document.getElementById('canvas-line');
  const ctx = canvas.getContext('2d');

  canvas.onmousedown = (ev) => {
    ctx.beginPath();
    ctx.moveTo(ev.offsetX, ev.offsetY);
    canvas.onmousemove = (evt) => {
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 1;
      ctx.lineTo(evt.offsetX, evt.offsetY);
      ctx.stroke();
    };
    window.onmouseup = () => {
      canvas.onmousemove = null;
      canvas.onmouseup = null;
    };
  };
})();
