import compareFiles from "./compareFiles.js";
import gendiff from "./gendiff.js";
import { getData } from "./utils.js";



const genDiff = (pathToFile1, pathToFile2) => {
    const data1 = JSON.parse(getData(pathToFile1));
    const data2 = JSON.parse(getData(pathToFile2));
    const compareData = gendiff(data1, data2);
    return compareFiles(compareData);
}

export default genDiff;