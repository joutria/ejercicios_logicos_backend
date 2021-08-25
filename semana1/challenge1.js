const reverseString = (str) => {
  //Implementación
  const error = new Error("Tipo de dato o longitud no admitidos.");
  function reverse(srt) {
    const x = str.split("");
    return x
      .map((_, i) => {
        return x[x.length - (i + 1)];
      })
      .join("");
  }
  if (
    typeof str === "string" &&
    !str.match(/[0-9]/) &&
    str.length > 1 &&
    str.length <= 15
  ) {
    return reverse(str);
  } else {
    throw error;
  }
};

module.exports = {
  reverseString,
};
