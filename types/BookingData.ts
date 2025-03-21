export type BookingRequest = {
    Name: string | undefined,
    Email: string | undefined,
    RequestFor: string | undefined,
    Date: string | undefined,
    Check: boolean,
    Signature: string | undefined
}

export type BookingData = {
    id?: number;
    name: string;
    email: string;
    date: Date;
};

