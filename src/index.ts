import { AppDataSource } from "./data-source"
import  express from "express";
const dotenv=require("dotenv");
import { Request, Response } from "express";
import cors from "cors";
//imports for router 
import "reflect-metadata";
import { bulkInsertData } from "./utility/bulkInsert1";
import path from "path";
dotenv.config();
const corsOptions = {
  origin: 'http://localhost/5173',  //(https://your-client-app.com)
  optionsSuccessStatus: 200,
};


const app = express();
app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
   
}))
app.set('view engine',"ejs")
app.set("views", path.join(__dirname, "views"));
app.engine('html', require('ejs').renderFile); 
app.set('view engine', 'html'); 
console.log(__dirname,"dirname")


// app.use(express.json());
// app.use(errorHandler);

const PORT=3000

console.log
// app.use("/auth", userRouter);
// app.use("/api", movieRouter);

// app.get("*", (req: Request, res: Response) => {
//   res.status(505).json({ message: "Bad Request" });
// });


//show individual polling unit 


AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.name = "Timber"
    // user.email="okonoluwaferanmi@gmail.com"
    
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)
   bulkInsertData()
    console.log("Here you can setup and run express / fastify / any other framework.")

app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
}).catch(error => console.log(error));

app.get('/',async(req:Request,res:Response)=>{
    res.status(200).send('welcome')
})


app.get('/pollingUnitNames',async(req:Request,res:Response)=>{
  try{
    const pollingNames=await AppDataSource.manager.query(
      `
    SELECT DISTINCT 
        r.polling_unit_uniqueid, 
        pu.polling_unit_name
      FROM announced_pu_results r
      JOIN polling_unit pu ON r.polling_unit_uniqueid = pu.polling_unit_id
      JOIN ward w ON pu.ward_id = w.ward_id
      JOIN lga l ON w.lga_id = l.lga_id
      WHERE l.state_id = 25
      `
    )
    res.status(200).json(pollingNames);
  }catch(error){
    console.error("Error fetching polling unit names:", error);
    res.status(500).send("Error fetching polling unit names");
  }
});

app.get('/lgas', async (req:Request, res:Response) => {
  try {
    const lgas = await AppDataSource.manager.query(
      `
      SELECT DISTINCT l.lga_id, l.lga_name
      FROM lga l
      JOIN ward w ON l.lga_id = w.lga_id
      JOIN polling_unit pu ON w.ward_id = pu.ward_id
      JOIN announced_pu_results r ON pu.polling_unit_id = r.polling_unit_uniqueid
      WHERE l.state_id = 25
      `
    );
    res.status(200).json(lgas);
  } catch (error) {
    console.error("Error fetching LGAs:", error);
    res.status(500).send("Error fetching LGAs");
  }
});

app.get('/lga-results/:lgaId', async (req, res) => {
  const { lgaId } = req.params;
  try {
    const results = await AppDataSource.manager.query(
      `
     SELECT 
    r.party_abbreviation, 
    SUM(r.party_score) AS total_score
FROM announced_pu_results r
JOIN polling_unit pu ON r.polling_unit_uniqueid = pu.polling_unit_id
JOIN ward w ON pu.ward_id = w.ward_id
JOIN lga l ON w.lga_id = l.lga_id
WHERE l.lga_id = ?  -- Selected LGA
GROUP BY r.party_abbreviation
      `,
      [lgaId]
    );
    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching LGA results:", error);
    res.status(500).send("Error fetching LGA results");
  }
});



app.get('/pollingunit/:id',async(req:any,res:any)=>{
  const pollingUnitId=req.params.id;
   try{
    const results = await AppDataSource.manager.query(
      `
      SELECT 
        r.result_id,
        r.polling_unit_uniqueid,
        r.party_abbreviation,
        r.party_score,
        r.entered_by_user,
        r.date_entered,
        r.user_ip_address,
        pu.polling_unit_name,
        pu.polling_unit_description,
        w.ward_name,
        l.lga_name
       FROM announced_pu_results r
      JOIN polling_unit pu ON r.polling_unit_uniqueid = pu.polling_unit_id
      JOIN ward w ON pu.ward_id = w.ward_id
      JOIN lga l ON w.lga_id = l.lga_id
      WHERE pu.polling_unit_id = ?
        AND l.state_id = 25
      `,
      [pollingUnitId]
    );
    console.log(results,"results gottten");
   res.status(200).json(results)
  // res.render(path.join(__dirname, "views", "pollingUnitResults"),{pollingUnitId,results});
    //  res.render("pollingUnitResults", { pollingUnitId, results });
   }catch(error){
    console.error("Error fetching polling unit results:", error);
    res.status(500).send("Error fetching results");
   }
})

app.get("/test", (req, res) => {
  res.render("test", { message: "Hello World" });
});

