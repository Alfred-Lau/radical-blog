/* loader 不要写箭头函数 */

module.exports = function(content, sourceMap) {
  console.log('i am a small step for this proj ,but a big step for engineer.', content.trim(), sourceMap);
  this.callback(
    null,
    `export default function (Component) {
      Component.options.__docs = ${
        JSON.stringify(content)
      }
    }`,
    sourceMap
  );
};
