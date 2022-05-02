const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = email.split('');
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === '@') {
            arr.splice(0, i+1)
            break;
        }
    }
    return arr.join('');
}

module.exports = {
  getEmailDomain
};
