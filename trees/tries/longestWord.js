var longestWord = function (words) {
  let ans = "";

  let wordSet = new Set(words);

  for (let word in wordSet) {
    if (
      word.length > ans.length ||
      (word.length === ans.length && word.localeCompare(ans) < 0)
    ) {
      let good = true;
      for (let i = 1; i < word.length; i++) {
        if (!wordSet.has(word.slice(0, i))) {
          good = false;
          break;
        }
      }
      if (good) ans = word;
    }
  }
  return ans;
};

console.log(longestWord(["w", "wo", "wor", "worl", "world"]));
