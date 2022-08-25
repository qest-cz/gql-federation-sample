import { BaseError } from "@qest/error-utils";

export class UpdateSupergraphAppError extends BaseError<EnumOfErrorTypes> {}

export enum EnumOfErrorTypes {
    InvalidNumber
}