export type BookingForm = {
    Name: string | undefined,
    Email: string | undefined,
    RequestFor: string | undefined,
    Date: string | undefined,
    Check: boolean,
    Signature: string | undefined
}
export enum BookingStatus {
    pending = 'pending',
    rejected = 'rejected',
    accepted = 'accepted'
}
export type BookingData = {
    id?: number;
    request_id?: string;
    name: string;
    email: string;
    about: string;
    date: Date;
    status?: BookingStatus,
};

