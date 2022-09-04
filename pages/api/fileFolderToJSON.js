const fs = require('fs');
const dirTree = require("directory-tree");

const tree = dirTree("../../public/images/room");

let paths = [];

function getAllPaths(obj) {
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
fs.writeFileSync('roomAssets.json', treeJSON);

console.log(treeJSON);