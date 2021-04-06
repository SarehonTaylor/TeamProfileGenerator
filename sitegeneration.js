const fs = require('fs')

//writeing the  html file function

function writeSite(html){
    fs.writeFile('./Createdprofile', html, err => {
    if (err){
         throw err
    }
    console.log("saved")
    copyFile()
    })

     
    
}


// the CSS template copy file function
const copyFile = () => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                console.log(err);
    }          
         console.log('css copied')   
});
}



module.exports = writeSite, copyFile
