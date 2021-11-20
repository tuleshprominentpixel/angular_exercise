export class Blog {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    author: string;
    language: { ['item_id']: number; ['item_text']: string }[];
    date?: Date;
    // publishBy?: number;
    constructor(
        id: number,
        title: string,
        description: string,
        imageUrl: string,
        author: string,
        language: { ['item_id']: number; ['item_text']: string }[],
        date: Date,
        // publishBy: number = null
      ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.language = language;
        this.author = author;
        this.date = date;
        // this.publishBy = publishBy;
      }
}
