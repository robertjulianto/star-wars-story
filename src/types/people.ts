import { Person } from "./person";

export type People = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Person[];
}
