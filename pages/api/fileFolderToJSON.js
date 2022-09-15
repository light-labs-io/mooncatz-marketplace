const fs = require('fs');
const dirTree = require("directory-tree");

const mainTree = dirTree("../../public/images/room");

let paths = [];

const rename = () => {
  fs.rename('/path/to/' + obj[p] + '.png', '/path/to/' + p + '.png', function(err) {
    if ( err ) console.log('ERROR: ' + err);
  });
}


const getAllPaths = (obj) => {
  for (let k in obj) {
    if (typeof obj[k] === "object") {
      getAllPaths(obj[k])
    } else {
      // base case, stop recurring
      if (obj[k].includes(".png")) {
          if (obj[k].includes("..\\mooncatz-marketplace\\public\\images\\room\\")) {
              paths.push(obj[k].replace("..\\mooncatz-marketplace\\public\\images\\room\\", ""));
          }
          // paths.push(obj[k]);
      };
    }
  }
}

// getAllPaths(tree);
// console.log(paths);

// let pathsJSON = JSON.stringify(paths);
// fs.writeFileSync('roomPNGs.json', pathsJSON);

let treeJSON = JSON.stringify(tree);
fs.writeFileSync('roomAssetsThumbsNew.json', treeJSON);

console.log(treeJSON);