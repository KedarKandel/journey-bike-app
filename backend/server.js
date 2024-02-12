
// libraries
import  express  from "express";
import dotenv from "dotenv"
import cors from "cors"
import path from "path"


// initialize express port with env variable.
dotenv.config()
const PORT = process.env.EXPRESS_PORT || 5000;

// Initialize express app
const app = express()
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json())


/* >>>>>>>>>>>>>>>>>>/ load data to database(Don't need it after data is inserted successfully))/**>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/*/

 import dataImportFn from "./csvToDatabase/dataImport.js"

async function loadData(){
  try {
    await dataImportFn();  
  } catch (error) {
    console.error("Error importing data: ", error);
  }
}

 //call the function only once to prevent data duplication.
  loadData() 

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/*/
 const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, "../frontend/build")));


// routes
import journeysRoute from "./routes/journey.js"
import stationsRoute from "./routes/stations.js"

// use routes in app
app.use("/api/v1/journeys", journeysRoute)
app.use("/api/v1/stations", stationsRoute)



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.listen(PORT, ()=>{
    console.log(`App is listening at port ${PORT}`)
})

export default app;