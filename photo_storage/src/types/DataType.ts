export interface DataType {
    categories: [{ name?: string }],
    collections: [{ category?: number, name?: string, photos?: string[] }]
}