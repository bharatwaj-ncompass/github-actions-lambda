exports.handler = async (event) => {
    console.log("This is a test lambda edit");
    const response = {
        statusCode: 200,
        body: JSON.stringify('Lambda retun something'),
      };
    return response;
}