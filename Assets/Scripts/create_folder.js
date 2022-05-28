var fs = require('fs');

function create_folder (dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {
            recursive: true
        });
    }
}
module.exports = create_folder;