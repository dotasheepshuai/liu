const Database = require("@replit/database");
const { print } = require('../utils/print');
const db = new Database();

module.exports = {
  db_write,
  db_list,
  db_query,
}

/**
 * Use this function to write an array of objects into database
 * 
 * Example input: [
 *     {"age":23,"height":"140cm","weight":"53kg","cup":"B","gpa":64,"name":"Dudu Sun","hasBoyfriend":true,"hometown":"ChengDu"},
 *     {"age":24,"height":"146cm","weight":"53kg","cup":"C","gpa":64,"name":"Haha Sun","hasBoyfriend":true,"hometown":"Beijing"}
 * ]
 */
async function db_write(objects) {
  print(`Writing ${objects.length} records into database`);
  for (let i = 0; i < objects.length; i++) {
    const beauty = objects[i];
    await db.set(beauty.id, beauty);
  }
  print(`Successfully completed database write!`);
}

/**
 * Call this function to list all ids of the beauties
 * 
 * Example output: [
 *  '5f36c714-6e17-4c0b-be00-8725661b5577',
 *  '5f36c7-dd-4c0b-be00-8725661b557dasd7'
 * ]
 */
async function db_list() {
  print(`Listing all records from database`);
  const results = await db.list();
  print(`Successfully list out ${results.length} records from database!`);
  return results;
}

/**
 * Use this functino to query the information of specific beauty, by id
 */
async function db_query(id) {
  print(`Query by id ${id} from database`);
  const result = await db.get(id);
  print(`Successfully queried ${result.name} from database!`);
  return result;
}