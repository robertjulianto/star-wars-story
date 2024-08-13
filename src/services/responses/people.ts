import { BaseResponse } from "./baseResponse";
import { PersonResponse } from "./person";

export type PeopleResponse = BaseResponse & {
    count: number;
    next: string | null;
    previous: string | null;
    results: PersonResponse[];
}
