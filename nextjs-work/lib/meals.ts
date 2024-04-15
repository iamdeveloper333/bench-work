import sql, { Database } from "better-sqlite3";

const db: Database = sql("meals.db");

export async function getMeals(): Promise<any[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}
