import { BaseResponse } from "./baseResponse"

export type VehicleResponse = BaseResponse & {
    cargo_capacity: string
    consumables: string
    cost_in_credits: string
    created: string
    crew: string
    edited: string
    length: string
    manufacturer: string
    max_atmosphering_speed: string
    model: string
    name: string
    passengers: string
    pilots: any[]
    films: string[]
    url: string
    vehicle_class: string
}
