import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skDAOjxALS85tJNwvI1Pb7ilSqfw2ArfTKgDoN7YEqonUzu6jjAQZdLDIvr9XULbpr2ZPE7IpXj9o6OsbNDMpMMPvWbnVzVysSuAqA79Ti5TZcNTeLcqGRGTpV4kARCY9lL2g42gcRMf3qVBffhBx6ty1PVbUg9Z6fLw1WVWNrlEInYx82zU"
})
