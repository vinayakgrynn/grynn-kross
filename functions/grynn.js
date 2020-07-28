console.log("Hello Vinayak!!!");

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "Hello, World"
  };
};
