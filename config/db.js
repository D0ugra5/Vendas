if (process.env.NODE_ENV == "production"){

module.exports = {mongoURI:"mongodb+srv://DevsJabinho:Jabinho@13@cluster0.f46a1.mongodb.net/<dbname>?retryWrites=true&w=majority"}

}else{

module.exports = {mongoURI :"mongodb://localhost/blogapp"}



}