import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
export const db = new PrismaClient({ adapter })

// db.snippet
//   .create({
//     data: {
//       title: "React",
//       code: 'import React from "react";',
//     },
//   })
//   .then(console.log);
