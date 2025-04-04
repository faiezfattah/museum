import getConnection from "~/server/utils/db";
import { BookingData } from "~/types/BookingData";

export default defineEventHandler(async (event) => {
    const db = await getConnection();
    
    const postRequest = await readBody<BookingData>(event);
    try {
        const result = await db.query(
            "UPDATE INTO borrow_request (request_id, name, email, about, request_date, status) VALUES (?, ?, ?, ?, ?, ?)",
            [
                crypto.randomUUID(),
                postRequest.name,
                postRequest.email,
                "about",
                postRequest.date,
                "pending"
            ]
        )
        console.log(result[0])
    } catch (error) {
        console.log(error);
    }
    return true;
})