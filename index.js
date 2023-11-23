const fs = require("fs");
const constants = require("./src/constants");
const { platform } = process;

const symbols =
  platform === "win32"
    ? { success: "", failed: "" }
    : { success: "✔", failed: "✖" };

const init = async (outputFile, endpointsFiles, data) => {
  try {
    if (!outputFile)
      throw console.error("\nError: 'outputFile' was not specified.");
    if (!endpointsFiles)
      throw console.error("\nError: 'endpointsFiles' was not specified.");

    const docObject = { ...constants.DOC_TEMPLATE, ...data };

    //remove all null attributes
    for (const key in docObject) {
      if (docObject[key] === null) {
        delete docObject[key];
      }
    }
    const dataJSON = JSON.stringify(docObject);

    try {
      fs.writeFileSync(outputFile, dataJSON);
    } catch (err) {
      throw console.error(
        "[script]: Error! Could not generate output file.\nInvalid path: '" +
          outputFile +
          "'"
      );
    }
    console.log("Script:", "\x1b[32m", "Success " + symbols.success, "\x1b[0m");
    return { success: true, data: JSON.parse(dataJSON) }; // remove undefined attributes
  } catch (err) {
    console.log("Script:", "\x1b[31m", "Failed " + symbols.failed, "\x1b[0m");
    return { success: false, data: null };
  }
};

module.exports = init;
