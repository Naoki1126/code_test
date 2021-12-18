// window.addEventListener('DOMContentLoaded', () => {
    // コンテナを指定
    const section = document.querySelector('.container')
    console.log(section)
    // 花びらを生成する関数
  
  const createPetal = function() {
    const petalEl = document.createElement('span');
    let classArray = ["petal", "petal2", "petal3"];
    let animationsNames = ["animation1", "animation2", "animation3"]
    let addClassName = classArray[Math.floor(Math.random() * classArray.length)];
    let addAnimationName = animationsNames[Math.floor(Math.random() * animationsNames.length)];
    petalEl.className = addClassName;
    const minSize = 10;
    const maxSize = 60;
    const size = Math.random() * (maxSize + 1 - minSize) + minSize;
    petalEl.style.width = `${size}px`;
    petalEl.style.height = `${size}px`;
    petalEl.style.animationName = addAnimationName;
    petalEl.style.left = Math.random() * innerWidth + 'px';
    section.prepend(petalEl);

    // 一定時間が経てば花びらを消す
    setTimeout(() => {
      petalEl.remove();
    }, 8000);
  }
  
  // 花びらを生成する間隔をミリ秒で指定
  setInterval(createPetal, 250);
  // });