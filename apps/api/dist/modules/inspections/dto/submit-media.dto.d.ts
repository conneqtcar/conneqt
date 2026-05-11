declare class MediaItemDto {
    type: 'PHOTO' | 'VIDEO' | 'DOCUMENT';
    url: string;
    key: string;
    hash: string;
    metadata?: Record<string, unknown>;
}
export declare class SubmitMediaDto {
    media: MediaItemDto[];
}
export {};
//# sourceMappingURL=submit-media.dto.d.ts.map