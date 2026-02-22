const fs = require('fs');
const path = require('path');

// Create a folder path safely using path.join()
const folderPath = path.join(__dirname, "demoFolder"); 
// Explanation: Creates a safe folder path (cross-platform).

// 1️⃣ Create Directory (Sync)
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log("Directory created");
// Output: Directory created
}
// Explanation: Creates a new folder if it does not exist.


// File path inside folder
const filePath = path.join(folderPath, "demo.txt");


// 2️⃣ Write File (Sync)
fs.writeFileSync(filePath, "Hello", "utf8");
console.log("File created and written");
// Output: File created and written
// Explanation: Creates a file and writes text into it.


// 3️⃣ Read File (Sync)
const data = fs.readFileSync(filePath, "utf8");
console.log("File content:", data);
// Output: File content: Hello KMIT
// Explanation: Reads content from file.


 // 4️⃣ Append File (Sync)
fs.appendFileSync(filePath, "\nAutonomous Institution");
console.log("Data appended");
// Output: Data appended
// Explanation: Adds new content to existing file.


// 5️⃣ Read Updated File
const updatedData = fs.readFileSync(filePath, "utf8");
console.log("Updated content:", updatedData);
/*
Output:
Updated content:
Hello 
Autonomous Institution
*/
// Explanation: Reads updated file content.


// 6️⃣ Read Directory (Sync)
const files = fs.readdirSync(folderPath);
console.log("Files in directory:", files);
// Output: Files in directory: [ 'demo.txt' ]
// Explanation: Lists files inside directory.


// 7️⃣ Rename File
const newFilePath = path.join(folderPath, "renamed.txt");
fs.renameSync(filePath, newFilePath);
console.log("File renamed");
// Output: File renamed
// Explanation: Renames existing file.


// 8️⃣ Delete File
fs.unlinkSync(newFilePath);
console.log("File deleted");
// Output: File deleted
// Explanation: Deletes the file.


// 9️⃣ Remove Directory
fs.rmdirSync(folderPath);
console.log("Directory removed");
// Output: Directory removed
// Explanation: Deletes the folder.