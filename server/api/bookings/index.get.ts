import getConnection from "~/server/utils/db";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const db = await getConnection();

    const result = await db.query("SELECT * FROM borrow_request")
    
    return result[0];
})