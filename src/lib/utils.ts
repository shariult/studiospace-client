const delay = function (ms: number) {
  const dummyPromise = new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
  return dummyPromise;
};

export { delay };
