import _ from 'lodash';

const gendiff = (file1, file2) => {

    const fileKeys1 = Object.keys(file1);
    const fileKeys2 = Object.keys(file2);

    const unionKeys = _.union(fileKeys1, fileKeys2).sort();

    const different = unionKeys.map(item => {
        if (!fileKeys1.includes(item)) {

            return {
                name: item,
                type: 'add',
                value: file2[item],
            }
        }
        if (!fileKeys2.includes(item)) {

            return {
                name: item,
                type: 'remove',
                value: file1[item]
            }
        }

        if (_.isPlainObject(file1[item]) && _.isPlainObject(file2[item])) {
            return {
                name: item,
                type: 'insert',
                value: gendiff(file1[item], file2[item])
            }
        }
        if (file1[item] !== file2[item]) {
            return {
                name: item,
                type: 'chenged',
                beforeValue: file1[item],
                afterValue: file2[item],
                
            }
        }
        if (file1[item] === file2[item]) {
            return {
                name: item,
                type: 'same',
                value: file2[item]
            }
        }
    });
    return different;
}



export default gendiff;
