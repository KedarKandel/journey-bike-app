import  express  from "express";
import dotenv from "dotenv"
dotenv.config()
const app = express()


/*>>>>>>>>>>>>>>>>>>/ load data to database/**>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/*/
//  import dataImport from "./csvToDatabase/dataImport.js"
// async function loadData(){
//   try {
//     await importData();  
//   } catch (error) {
//     console.error("Error importing data: ", error);
//   }
// }
// call the function only once
  //loadData()
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/*/


app.listen(3001, ()=>{
    console.log("App is listening at port 3001")
})