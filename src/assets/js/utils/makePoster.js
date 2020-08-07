export function imageToCanvas(canvas, url1, url2, code) {
  //传入canvas节点 背景图url1  头像url2 二维码code
  var ctx = canvas.getContext('2d');
  console.log(ctx);
  var img1 = new Image();
  img1.src = url1; //前面的不解释了，生成个图片
  img1.onload = function() {
    ctx.drawImage(img1, 0, 0); //当图片加载完成后 赋到画布上 从0 0 开始。
    var img2 = new Image();
    img2.src = url2;
    img2.onload = function() {
      console.log(222);
      ctx.save(); //保存当前画布状态
      ctx.arc(374, 134, 44, 0, 2 * Math.PI); //剪切操作 将正方形的头像切成圆的
      // 从画布上裁剪出这个圆形
      ctx.clip(); //进行裁剪
      ctx.drawImage(img2, 330, 90, 88, 88); //放入img2 在330 90坐标处     大小 88
      ctx.restore(); //释放画布状态
      ctx.font = '28px Arial';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'red'; //前面是设置文字 属性设为居中
      ctx.fillText('你叫神马名字', 375, 220); //文字 这里是写死的 实际中多传个参数就ok
      var img3 = new Image();
      img3.src = code;
      img3.onload = function() {
        ctx.drawImage(img3, 136, 554, 478, 478); //同理加图像
        var imgCode = convertCanvasToImage(canvas); //将图片转为base64
        console.log(imgCode.getAttribute('src'));
      };
    };
  };
}

function convertCanvasToImage(canvas) {
  var image = new Image();
  image.src = canvas.toDataURL('image/png'); //canvas转化为img
  return image;
}
