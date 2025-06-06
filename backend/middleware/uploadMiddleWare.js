import multer from "multer";

// storage configration
const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req,file,cb)=>{
        cb(null,Date.now() + '-' + file.originalname)
    }
})

const upload = multer({storage:storage})
export default upload;