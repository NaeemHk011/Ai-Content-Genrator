/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:ufNUPmyG8x6M@ep-orange-credit-a5t079qa.us-east-2.aws.neon.tech/ai-content-generator?sslmode=require',
    }
};