const zipFolder = require("zip-folder");
let folderName = "./auto-filler"

let zipName = "extension.zip"

zipFolder(folderName, zipName, function(err) {
    if(err){
        console.log("oh no!", err);
    } else {
        console.log(
            `${folderName}の作成に成功しました`
        )
    }
})