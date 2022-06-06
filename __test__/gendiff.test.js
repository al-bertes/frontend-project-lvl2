import { getData } from "../src/utils.js";
import compareFiles from "../src/compareFiles.js";
import gendiff from "../src/gendiff.js";
import { test, expect } from '@jest/globals';


const expectResult = getData('__fixture__/result.txt');
const file1 = JSON.parse(getData('__fixture__/file1.json'));
const file2 = JSON.parse(getData('__fixture__/file2.json'));

describe("Filter function", () => {
    test('checking comatative function', () => {
        expect(compareFiles(gendiff(file1, file2))).toEqual(expectResult);
    })
});


