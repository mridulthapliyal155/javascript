const delayedColorChnage = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay);
};

delayedColorChnage("red", 1000, () => {
  delayedColorChnage("blue", 2000, () => {
    delayedColorChnage("orange", 3000);
  });
});
