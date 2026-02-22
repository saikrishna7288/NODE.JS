const os = require('os');

// 1. Operating System Platform
console.log("Operating System Platform:", os.platform());
// Output: Operating System Platform: win32

// 2. Operating System Type
console.log("Operating System Type:", os.type());
// Output: Operating System Type: Windows_NT

// 3. OS Release Version
console.log("OS Release:", os.release());
// Output: OS Release: 10.0.26200

// 4. System Architecture
console.log("System Architecture:", os.arch());
// Output: System Architecture: x64


// 5. Total & Free Memory (converted to GB)
console.log("Total Memory:", os.totalmem() / (1024 * 1024 * 1024), "GB");
// Output: Total Memory: 7.78 GB (approx)

console.log("Free Memory:", os.freemem() / (1024 * 1024 * 1024), "GB");
// Output: Free Memory: 1.97 GB (approx)


// 6. Home Directory
console.log("Home Directory:", os.homedir());
// Output: Home Directory: C:\Users\rrgur


// 7. System Uptime
console.log("System Uptime:", os.uptime(), "seconds");
// Output: System Uptime: 261338.718 seconds


// 8. Current User Info
console.log("User Info:", os.userInfo());
/*
Output:
User Info: {
  uid: -1,
  gid: -1,
  username: 'rrgur',
  homedir: 'C:\\Users\\rrgur',
  shell: null
}
*/


// 9. CPU Information
const cpus = os.cpus();
console.log("CPU Information:", cpus);
/*
Output: Array of CPU core objects like:
[
  {
    model: '11th Gen Intel(R) Core(TM) i3-1115G4 @ 3.00GHz',
    speed: 2995,
    times: { user: ..., sys: ..., idle: ... }
  },
  ...
]
*/

console.log("Number of CPU cores:", cpus.length);
// Output: Number of CPU cores: 4


// 10. Network Interfaces
console.log("Network Interfaces:", os.networkInterfaces());
/*
Output:
{
  'Wi-Fi': [
     { address: '192.168.29.5', family: 'IPv4', ... }
  ],
  'Loopback Pseudo-Interface 1': [
     { address: '127.0.0.1', family: 'IPv4', ... }
  ]
}
*/


// 11. Temporary Directory
console.log("Temporary Directory:", os.tmpdir());
// Output: C:\Users\rrgur\AppData\Local\Temp


// 12. Endianness
console.log("System Endianness:", os.endianness());
// Output: LE


// 13. Host Name
console.log("Host Name:", os.hostname());
// Output: rrgurrala


// 14. Load Average (Linux/macOS only)
console.log("Load Average:", os.loadavg());
// Output (Windows): [ 0, 0, 0 ]