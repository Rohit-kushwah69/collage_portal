const mongoose = require("mongoose");
const local_url = "mongodb://127.0.0.1:27017/college_portal";
const live_URL =
  "mongodb+srv://rohitkushwah6109744:ram123@cluster0.uh5u4.mongodb.net/Test01?retryWrites=true&w=majority&appName=Cluster0";
const connectDb = () => {
  return mongoose   
    .connect(live_URL)
    .then(() => {
      console.log("connect");
    })     
    .catch((error) => {
      console.log(error); 
    });
};
module.exports = connectDb;


