import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

// Define GRADES table
export const GRADES = mysqlTable('grades', {
  id: int('id').notNull(),  // Define the column
  grade: varchar('grade', { length: 10 }).notNull(),  // Another column
});

// Define STUDENTS table without explicitly defining primaryKey for `id`
export const STUDENTS = mysqlTable('students', {
  id: int('id').autoincrement(),  // Autoincrement is enough to make `id` the primary key
  name: varchar('name', { length: 20 }).notNull(),
  grade: varchar('grade', { length: 10 }).notNull(),
  address: varchar('address', { length: 50 }),
  contact: varchar('contact', { length: 11 }),
});
