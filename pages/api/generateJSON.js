const fs = require('fs');
const file = fs.readFileSync('roomAssetsCondensed.json');
const json = JSON.parse(file);


const rename = () => {
	fs.rename('/path/to/' + obj[p] + '.png', '/path/to/' + p + '.png', function(err) {
		if ( err ) console.log('ERROR: ' + err);
	});
}

const copyPathToThumbPath = (obj) => {
  for (let k in obj) {
    if (typeof obj[k] === "object") {
    	if (obj[k].path) {
    		if (obj[k].path.includes(".png")) {
    			obj[k].thumb = obj[k].path.replace("/images/room", "/images/room thumbs")
    		};
    	};
      copyPathToThumbPath(obj[k]);
    }
  }
}

// copyPathToThumbPath(json);

let newJSON = JSON.stringify(json);
console.log(newJSON);
fs.writeFileSync('roomAssetsNew.json', newJSON);
