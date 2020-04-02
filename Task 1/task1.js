const fs = require('fs');

const paths = process.argv.slice(2);

for (const path of paths) {
    if (!fs.existsSync(path)) {
        console.log(path, ': This path doesn\'t exist');
    } else {
        handlePath(path);
    }
}

function handlePath(pathToFile) {
    let file = fs.readFileSync(pathToFile, 'utf8');

    file = file.replace(/(\W)print(\W)/g, '$1myPrint$2');
    file = file.replace(/(['"].*)myPrint(.*['"])/g, '$1print$2');
    file = file.replace(/([^\w.])log(\(.*\))/g, '$1print$2');

    fs.writeFileSync(pathToFile, file);
}
