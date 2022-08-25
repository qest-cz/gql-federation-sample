import { BaseError } from "@qest/error-utils";

export class UserAppError extends BaseError<EnumOfErrorTypes> {}

export enum EnumOfErrorTypes {
    InvalidNumber
}