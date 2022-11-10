const data = [undefined, 2, 3, 4, 5, 'sd'];
function testData([arg1, arg2, arg3, ...rest]) {
  if (data.length < 5) {
    console.log("Error");
  }
  if (arg1 === undefined) {
    arg1 = "Error";
  }
  console.log(`${arg1} - ${arg2} - ${arg3}`);
};
testData(data);