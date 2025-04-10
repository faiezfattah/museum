import getConnection from "~/server/utils/db";
import { BookingData, BookingStatus } from "~/types/BookingData";

export default defineEventHandler(async (event) => {
    const db = await getConnection();
    
    const postRequest = await readBody<BookingData>(event);
    try {
        const result = await db.query(
            "INSERT INTO borrow_request (request_id, name, email, about, request_date, status) VALUES (?, ?, ?, ?, ?, ?)",
            [
                crypto.randomUUID(),
                postRequest.name,
                postRequest.email,
                postRequest.about,
                postRequest.date,
                BookingStatus.pending,
            ]
        )
        console.log(result[0])
    } catch (error) {
        console.log(error);
    }
    return true;
})