exports.handler = async (event) => {
    console.log("This is a test lambda edit 1 - demo");
    const response = {
        statusCode: 200,
        body: JSON.stringify('Lambda retun something'),
      };
    return response;
}