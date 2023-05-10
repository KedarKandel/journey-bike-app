
// libraries
import  express  from "express";
import dotenv from "dotenv"
import cors from "cors"


// initialize express port with env variable.
dotenv.config()
const PORT = process.env.EXPRESS_PORT || 5000;

// Initialize express app
const app = express()
app.use(cors())
app.use(express.json())


/* >>>>>>>>>>>>>>>>>>/ load data to database(Don't need it after data is inserted successfully))/**>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/*/

//  import dataImportFn from "./csvToDatabase/dataImport.js"

// async function loadData(){
//   try {
//     await dataImportFn();  
//   } catch (error) {
//     console.error("Error importing data: ", error);
//   }
// }

 // call the function only once to prevent data duplication.
  //loadData() 

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/*/


// routes
import journeysRoute from "./routes/journey.js"
import stationsRoute from "./routes/stations.js"

// use routes in app
app.use("/api/v1/journeys", journeysRoute)
app.use("/api/v1/stations", stationsRoute)

app.listen(PORT, ()=>{
    console.log(`App is listening at port ${PORT}`)
})

export default app;