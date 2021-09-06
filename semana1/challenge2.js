const reverseInt = (number) => {
  //Implementación
  if (typeof number === "number") {
    let str = number.toString().split("");
    str = str.map((_, i) => str[str.length - 1 - i]).join("");
    if (str[str.length - 1] == "-") {
      str = "-" + str.substring(0, str.length - 1);
    }
    return +str;
  } else {
    throw new Error("Invalid argument")
  }
};

module.exports = {
  reverseInt,
};
