import getConnection from "~/server/utils/db";
import { BookingData } from "~/types/BookingData";

export default defineEventHandler(async (event) => {
    const db = await getConnection();
    
    const patchRequest = await readBody<BookingData>(event);
    try {
        const result = await db.query(
            "UPDATE borrow_request SET status = ? WHERE request_id = ?",
            [
                patchRequest.status,
                patchRequest.request_id
            ]
        )
        console.log(result[0])
    } catch (error) {
        console.log(error);
    }
    return true;
})