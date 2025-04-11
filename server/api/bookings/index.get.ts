import { console } from "inspector";
import { RowDataPacket } from "mysql2/promise";
import getConnection from "~/server/utils/db";
import { BookingData, BookingStatus } from "~/types/BookingData";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const db = await getConnection();
    
    const status = query.status as BookingStatus | undefined;
    const request_id = query.request_id as string | undefined;
    console.log(query)
    if (request_id != undefined) {
        const [result] = await db.query<BookingData[] & RowDataPacket[]>(
            "SELECT * FROM borrow_request WHERE request_id = ? ORDER BY request_date DESC", 
            [request_id]
        );
        return result[0]
    }
    else if (status != undefined) {
        const [result] = await db.query<BookingData[] & RowDataPacket[]>(
            "SELECT * FROM borrow_request WHERE status = ? ORDER BY request_date DESC", 
            [status]
        );
        return result;
    } 
    else {
        const [result] = await db.query<BookingData[] & RowDataPacket[]>(
            "SELECT * FROM borrow_request ORDER BY request_date DESC",
        );
        return result;
    }
    
});