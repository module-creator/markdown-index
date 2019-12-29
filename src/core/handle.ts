import * as fse from 'fs-extra';
import * as path from 'path';

// 辅助函数

// 获取md文件
export const readMarkDownFilePath = (): string[] => {
  return fse
    .readdirSync(path.resolve(process.cwd()))
    .filter(item => /^\w*.md/.test(item))
    .map(item => path.resolve(process.cwd(), item));
};

export const readMDFiles = (): void => {
  const paths = readMarkDownFilePath();
  const contentList = paths.map(item => fse.readFileSync(item, { encoding: 'utf8' }));
  const content = contentList[0]
    .replace(/\n#####\s(.*)/g, '\n### <h5 id="$1">$1</h5>')
    .replace(/\n####\s(.*)/g, '\n### <h4 id="$1">$1</h4>')
    .replace(/\n###\s(.*)/g, '\n### <h3 id="$1">$1</h3>')
    .replace(/\n##\s(.*)/g, '\n## <h2 id="$1">$1</h2>')
    .replace(/^#\s(.*)/g, '# <h1 id="$1">$1</h1>')
    .replace(/^##\s(.*)/g, '## <h1 id="$1">$1</h1>');
  console.log(content);
  // console.log(content[0].match(/^##\s.*/m));
  // content[0].match(/###\s.*/g).forEach(item => {
  //   console.log(item);
  // });
};