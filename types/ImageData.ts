export type ImageData = {
    id?: number;
    filename: string;
    file_data: string;
    upload_date?: string;
    mime_type: string;
}

export function fileToBase64(file: File): Promise<ImageData> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            const base64String = reader.result as string;
            const base64Data = base64String.split(',')[1];

            resolve({
                filename: file.name,
                file_data: base64Data,
                mime_type: file.type
            });
        };
        reader.onerror = error => reject(error);
    });
}