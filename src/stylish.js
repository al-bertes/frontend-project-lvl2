import _ from 'lodash';

const generateTab = (countSpace) => '  '.repeat(countSpace);

const getString = (value, countSpace) => {

  if (!_.isPlainObject(value)) {
    return value;
  }

  const values = Object.keys(value);

  const string = values.map((item) => `${generateTab(countSpace + 2)}  ${item}: ${getString(value[item], countSpace + 2)}`);

  return `{\n${string.join('\n')}\n${generateTab(countSpace + 1)}}`;
};

const stylish = (dates) => {

  const iter = (nodes, depth = 1) => {
    const string = nodes.map((node) => {
      const types = {
        add: () => `${generateTab(depth)}+ ${node.name}: ${getString(node.value, depth)}`,
        remove: () => `${generateTab(depth)}- ${node.name}: ${getString(node.value, depth)}`,
        chenged: () => `${generateTab(depth)}- ${node.name}: ${getString(node.beforeValue, depth)}\n${generateTab(depth)}+ ${node.name}: ${getString(node.afterValue, depth)}`,
        same: () => `${generateTab(depth)}  ${node.name}: ${getString(node.value, depth)}`,
        insert: () => `${generateTab(depth)}  ${node.name}: ${iter(node.value, depth + 2)}`,
      };
      return types[node.type]();
    });

    return `{\n${string.join('\n')}\n${generateTab(depth - 1)}}`;
  };

  return iter(dates);
};

export default stylish;