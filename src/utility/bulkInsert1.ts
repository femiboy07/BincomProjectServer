import "reflect-metadata";
import { AppDataSource } from "../data-source"; // Your DataSource instance
import * as fs from "fs";
import { join } from "path";

export async function bulkInsertData() {
  try {
    // Option A: Read SQL from a file (recommended for very large datasets)
    // const sql1 = fs.readFileSync(__dirname + "sql" + "announcedpollingunitfiles.sql", "utf8");
    // const sql2=fs.readFileSync(__dirname + "sql" + "ward.sql","utf-8")
    const sqlFilePaths = [
        join("sql", "announcedpollingunitfiles.sql"),
        join("sql", "ward.sql"),
        join("sql","pollingunit.sql"),
        join("sql","lga.sql"),
        join("sql","announcedlgaresults.sql")
        // add more file paths as needed
      ].map((item)=>item.replace(/(\r\n|\n|\r)/gm, " ").trim());
      
      const sqlQueries = await Promise.all(
        sqlFilePaths.map(path => fs.promises.readFile(path, "utf8"))
      ); 

      await Promise.all(
        sqlQueries.map(sql => AppDataSource.manager.query(sql))
      );
    //   await AppDataSource.manager.transaction(async (transactionalEntityManager) => {
    //     await Promise.all([
    //       transactionalEntityManager.query(sql1),
    //       transactionalEntityManager.query(sql2)
    //     ]);
    //   });
    
    // Option B: If you have the SQL string inline, assign it directly:
    // const sql = `INSERT INTO announced_pu_results 
    //   (polling_unit_uniqueid, party_abbreviation, party_score, entered_by_user, date_entered, user_ip_address)
    // VALUES
    //   (111, '8', 'PDP', 802, 'Bose', '2011-04-26 15:44:03', '192.168.1.101'),
    //   (112, '8', 'DPP', 719, 'Bose', '2011-04-26 15:44:03', '192.168.1.101'),
    //   ... (more rows) ...`;

    // Run the SQL query as a raw query
   
    console.log("Bulk insert completed.");
  } catch (error) {
    console.error("Error during bulk insert:", error);
  }
}

// AppDataSource.initialize()
//   .then(() => bulkInsertData())
//   .catch((error) => console.error("Error during DataSource initialization:", error));