import  express  from "express";
import dotenv from "dotenv"
import cors from "cors"
import journeysRoute from "./routes/journey.js"
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())


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

app.use("/api/v1/journeys", journeysRoute)

app.listen(3001, ()=>{
    console.log("App is listening at port 3001")
})