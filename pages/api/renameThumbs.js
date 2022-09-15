const fs = require('fs');
const dirTree = require("directory-tree");

const mainTree = dirTree("../../public/images/roomAssetsAndThumbs");
// console.log(mainTree);

let paths = [];
let allCount = 0;
let sideBCount = 0;

const renameThumbs = (path) => {
  const newPath = path.replace(".png", " thumb.png");
  // console.log(path);
  // console.log(newPath);
  fs.rename(path, newPath, function(err) {
    if ( err ) console.log('ERROR: ' + err);
  });
}

const deleteIfSideB = (path) => {
  if (path.includes("Side B")) {
    fs.unlink(path, (err) => {
    if (err) throw err //handle your error the way you want to;
    console.log('path/file.txt was deleted');//or else the file will be deleted
    });
  };
}

const condenseNodes = (node, parent) => {
  if (node.path.includes("Side A") && !node.path.includes(" thumb")) {
    node.reverse = node.path.replace("Side A", "Side B");
    node.thumb = node.path.replace(".png", " thumb.png");
  } else {
    console.log(parent[node]);
  };
}


let currentParent;
let currentChild = 0;

let newJSON = {};

const getAllPaths = (obj) => {
  for (let k in obj) {
    if (typeof obj[k] === "object") {
      if (Array.isArray(obj[k])) {
        currentParent = obj[k];
        // console.log(currentParent.length);
      } else {
        currentChild = k;
      };
      getAllPaths(obj[k])
    } else {
      if (obj[k].includes("Side B") || obj[k].includes("thumb")) {
        if (k == "path") {
          // console.log(currentChild + "/" + currentParent.length);
          // console.log(currentParent);
          // console.log("-----------------------");
          // currentParent[currentChild].myParent = currentParent.name;
          currentParent[currentChild] = { "name": "deleted" };
        };
        // delete currentParent[currentChild];
        // Here is where I would want to delete the entire node if it contains substr "Side B"
      } else if (obj[k].includes(".png")) {
        obj.reverse = obj.path.replace("Side A", "Side B");
        obj.thumb = obj.path.replace(".png", " thumb.png");
      };
    }
  }
}

getAllPaths(mainTree);

// console.log(mainTree);

// let pathsJSON = JSON.stringify(paths);
// fs.writeFileSync('roomPNGs.json', pathsJSON);

let treeJSON = JSON.stringify(mainTree);
fs.writeFileSync('roomAssetsFullPruned.json', treeJSON);

// console.log(treeJSON);