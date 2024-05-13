// FIXME 자바스크립트 구현하기

alert("hello world");
setInterval(function () {
  const currentBackground = document.body.style.backgroundImage;
  const currentIndex = parseInt(currentBackground.match(/(\d+)\.jpg/)[1]);
  const nextIndex = (currentIndex % 5) + 1;
  document.body.style.backgroundImage = `url("assets/background/${nextIndex}.jpg")`;
}, 5000);
