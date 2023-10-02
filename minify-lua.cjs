/**
 * Node script that minifies Lua files for a smaller file size.
 * This is relevant for HTML5 exports in particular.
 * Other platforms use bytecode that is not affected by minification.
 * @link https://github.com/defold/defold/issues/6891
 */

const fs = require('fs');
const path = require('path');
const luamin = require('luamin');

// Array of file extensions to check
const fileExtensions = ['.lua', '.script', '.gui_script', '.render_script'];

// Luaparse options
// https://github.com/mathiasbynens/luamin#installation-and-usage
const options = { luaVersion: '5.1' };

function processFiles(folderPath) {
    // Read files in the folder
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error(`Error reading folder ${folderPath}: ${err}`);
            return;
        }

        // Loop through files
        files.forEach((file) => {
            // Get the absolute path of the current file
            const filePath = path.join(folderPath, file);

            // Check if the file is a directory
            if (fs.statSync(filePath).isDirectory()) {
                // Recursively process files in the subdirectory
                processFiles(filePath);
            } else {
                // Check if the file has a valid extension
                const fileExtension = path.extname(file);
                if (fileExtensions.includes(fileExtension)) {
                    // Read the content of the file
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) {
                            console.error(`Error reading file ${file}: ${err}`);
                            return;
                        }

                        // Minify the lua script
                        const modifiedData = luamin.minify(data, options);

                        // Write the modified content back to the file
                        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
                            if (err) {
                                console.error(`Error writing file ${file}: ${err}`);
                            } else {
                                console.log(`Successfully modified file ${file}`);
                            }
                        });
                    });
                }
            }
        });
    });
}

// Start processing files from the 'app' folder
const rootFolder = path.join(__dirname, 'app');
processFiles(rootFolder);
