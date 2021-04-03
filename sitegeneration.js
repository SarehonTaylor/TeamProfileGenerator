const fs = require ('fs')
function writeSite(html){
fs.writeFile(index.html), html, err => {
if (err){
    throw err    
}    
console.log("saved")
copyFiles()
})
}
const copyFile = () => {
    fs.copyFile('./style.css', err => {
        if (err) {
            console.log(err);
    }
            console.log('css has been copied')
});
}
    module.exports = wrtieSite, copyFile