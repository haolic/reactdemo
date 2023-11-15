export default class PointDraw {
  canvasWrap; // 包裹元素。
  canvas; // 画布。
  ctx; // 画布上下文。
  canPointerDraw = false; // 是否鼠标可以画。
  lastPos = { x: 0, y: 0 }; // 最后鼠标位置
  lastSpeed = 0; // 最后鼠标速度

  constructor(canvasWrap) {
    this.canvasWrap = canvasWrap;
    this.init();
    this.drawRect();
  }

  eventBind() {
    const { canvas, ctx } = this;

    canvas.addEventListener('mousedown', (e) => {
      const { left, top } = canvas.getBoundingClientRect();
      this.lastPos = { x: e.clientX - left, y: e.clientY - top };
      this.canPointerDraw = true;
    });

    document.addEventListener('mousemove', (e) => {
      if (this.canPointerDraw) {
        const { left, top } = canvas.getBoundingClientRect();
        const [x, y] = [e.clientX - left, e.clientY - top];

        const dx = x - this.lastPos.x;
        const dy = y - this.lastPos.y;
        this.lastSpeed = Math.sqrt(dx * dx + dy * dy);

        ctx.lineWidth = Math.max(Math.min(15 - this.lastSpeed, 15), 2);
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(this.lastPos.x, this.lastPos.y);
        ctx.lineTo(x, y);
        ctx.stroke();

        this.lastPos = { x, y };
      }
    });

    document.addEventListener('mouseup', () => {
      if (this.canPointerDraw) {
        this.canPointerDraw = false;
      }
    });
  }

  init() {
    /**
     * 初始化画布。
     * 需要计算设备像素比和canvas画布像素比。
     */
    const { canvasWrap } = this;
    this.canvasWrap = canvasWrap;
    canvasWrap.style.overflow = 'hidden';
    const width = canvasWrap.scrollWidth;
    const height = canvasWrap.scrollHeight;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    var devicePixelRatio = window.devicePixelRatio || 1;

    var backingStoreRatio = ctx.backingStorePixelRatio || 1;
    var ratio = devicePixelRatio / backingStoreRatio;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.scale(ratio, ratio);
    canvas.style.transform = `scale(${1 / ratio}, ${1 / ratio})`;
    canvas.style.transformOrigin = '0 0 0';

    this.ctx = ctx;
    this.canvas = canvas;
    this.canvasWrap.appendChild(this.canvas);
    this.eventBind();
    return { ctx: this.ctx, canvas };
  }

  /**
   * 画长方形。
   */
  drawRect() {
    const { ctx } = this;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 0);
    ctx.lineTo(200, 100);
    ctx.lineTo(0, 100);
    ctx.lineTo(0, 0);
    ctx.fillStyle = '#CCCCFF';
    ctx.fill();

    ctx.fillStyle = '#6699FF';
    ctx.fillRect(0, 110, 150, 75);
  }
}
