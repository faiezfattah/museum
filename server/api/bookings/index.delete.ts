import getConnection from "~/server/utils/db";
import { BookingData } from "~/types/BookingData";

export default defineEventHandler(async (event) => {
    const deleteRequest = await readBody<BookingData>(event);
    const db = await getConnection();
    
    try {
        const result = await db.query("DELETE FROM borrow_request WHERE request_id = ?", [deleteRequest.request_id])
        return result[0];
    } catch (error) {
        console.log(error);
    }
})