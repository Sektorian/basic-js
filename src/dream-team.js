const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let forseName = [];

    if (Array.isArray(members)) {

        label: for (let i = 0; i < members.length; i++) {

            if ((typeof(members[i]) !== 'string') || (members[i].length === 0)) {
                
                continue;
                          
            } else {

                for (let j = 0; j < members[i].length; j++) {
                  if (members[i][j] === ' ') {
                      continue;
                  } else {
                      forseName.push(members[i][j].toUpperCase());
                      continue label;
                  }
                }

              }
            }
        
        if (forseName.length > 1) {
          let start = true;
          while (start) {
            start = false;
            for (let i = 0; i < forseName.length - 1; i++) {
                
                if (forseName[i] > forseName[i+1]) {
                    [forseName[i], forseName[i+1]] = [forseName[i+1], forseName[i]];
                    start = true;
                }
            }
        }
        }

        return forseName.join('');
     } else {return false;}


}

module.exports = {
  createDreamTeam
};
