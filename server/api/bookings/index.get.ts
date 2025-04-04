import { FieldPacket, RowDataPacket } from "mysql2/promise";
import getConnection from "~/server/utils/db";
import { BookingData, BookingStatus } from "~/types/BookingData";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const db = await getConnection();
    
    const status = query.status as BookingStatus | undefined;
    
    let result: [BookingData[], FieldPacket[]];
    if (!status) {
        result = await db.query<BookingData[] & RowDataPacket[]>("SELECT * FROM borrow_request");
    } 
    else {
        switch (status) {
            case BookingStatus.pending:
                result = await db.query<BookingData[] & RowDataPacket[]>("SELECT * FROM borrow_request WHERE status = 'pending'");
                break;
            case BookingStatus.accepted:
                result = await db.query<BookingData[] & RowDataPacket[]>("SELECT * FROM borrow_request WHERE status = 'accepted'");
                break;
            case BookingStatus.rejected:
                result = await db.query<BookingData[] & RowDataPacket[]>("SELECT * FROM borrow_request WHERE status = 'rejected'");
                break;
            default:
                result = await db.query<BookingData[] & RowDataPacket[]>("SELECT * FROM borrow_request");
        }
    }
   
    return result[0];
});