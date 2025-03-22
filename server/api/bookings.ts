import { BookingData } from "~/types/BookingData";
import getConnection from "~/server/utils/db";


export default defineEventHandler(async (event) =>{
    const method = event.method;

    const db = await getConnection();

    switch(method) {
        case 'GET':
            const result = await db.query("SELECT * FROM borrow_request")
            return result[0];

        case 'DELETE':
            const deleteRequest = await readBody<BookingData>(event);
            try {
                const result = await db.query("DELETE FROM borrow_request WHERE request_id = ?", [deleteRequest.request_id])
                return result[0];
            } catch (error) {
                console.log(error);
            }
            break;

        case 'POST':
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

        case "PATCH":
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
        default:
            return false;
    }
})