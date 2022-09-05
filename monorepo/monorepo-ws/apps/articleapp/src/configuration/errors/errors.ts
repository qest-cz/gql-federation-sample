import { BaseError } from "@qest/error-utils";

export class ArticleAppError extends BaseError<EnumOfErrorTypes> {}

export enum EnumOfErrorTypes {
    InvalidNumber
}