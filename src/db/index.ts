import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

// db.snippet
//   .create({
//     data: {
//       title: "React",
//       code: 'import React from "react";',
//     },
//   })
//   .then(console.log);
