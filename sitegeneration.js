const fs = require('fs')

//writeing the  html file function

function writeSite(html){
    fs.writeFile('./Createdprofile.html', html, err => {
    if (err){
         throw err
    }
    console.log("saved")
    copyFile()
    })

     
    
}


// the CSS template copy file function
const copyFile = () => {
    fs.copyFile('style.css', 'style.css', err => {
            if (err) {
                console.log(err);
    }          
         console.log('css copied')   
});
}



module.exports = writeSite, copyFile
