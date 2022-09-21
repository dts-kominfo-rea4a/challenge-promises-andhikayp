const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (expression) => {
  const ixxData = await promiseTheaterIXX()
  const vgcData = await promiseTheaterIXX()

  const ixxDataCount = ixxData.filter((element) => {
    return element.hasil === expression;
  }).length
  const vgcDataCount = vgcData.filter((element) => {
    return element.hasil === expression;
  }).length

  return ixxDataCount + vgcDataCount;
};

module.exports = {
  promiseOutput,
};
