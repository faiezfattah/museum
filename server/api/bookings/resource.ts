import { BookingData, BookingRequest } from "~/types/BookingData";

const dummyBookings: BookingData[] = [
    {
        id: 1,
        name: "John Smith",
        email: "john.smith@email.com",
        date: new Date("2024-03-15")
    },
    {
        id: 2,
        name: "Emma Wilson",
        email: "emma.w@email.com",
        date: new Date("2024-03-16")
    },
    {
        id: 3,
        name: "Michael Brown",
        email: "m.brown@email.com",
        date: new Date("2024-03-17")
    },
    {
        id: 4,
        name: "Sarah Davis",
        email: "sarah.d@email.com",
        date: new Date("2024-03-18")
    },
    {
        id: 5,
        name: "James Wilson",
        email: "j.wilson@email.com",
        date: new Date("2024-03-19")
    },
    {
        id: 6,
        name: "Lisa Anderson",
        email: "l.anderson@email.com",
        date: new Date("2024-03-20")
    },
    {
        id: 7,
        name: "Robert Taylor",
        email: "r.taylor@email.com",
        date: new Date("2024-03-21")
    },
    {
        id: 8,
        name: "Emily Clark",
        email: "e.clark@email.com",
        date: new Date("2024-03-22")
    }
]

export default defineEventHandler(async (event) =>{
    const method = event.method;

    switch(method) {
        case 'GET':
            return dummyBookings;
        case 'DELETE':
            const deleteRequest = await readBody<BookingData>(event);
            const index = dummyBookings.findIndex(item => item.id === deleteRequest.id);
            dummyBookings.splice(index, 1);
            return dummyBookings;
        case 'POST':
            const postRequest = await readBody<BookingData>(event);
            const newBooking:BookingData = {
                id: dummyBookings.length + 1,
                name: postRequest.name,
                email: postRequest.email,
                date: postRequest.date
            }
            try {
                dummyBookings.push(newBooking)
            } catch (error) {
                console.log(error);
            }
            return true;
        default:
            return false;
    }
})