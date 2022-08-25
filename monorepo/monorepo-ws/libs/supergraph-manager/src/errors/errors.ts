import { BaseError } from "@qest/error-utils";

export class SupergraphManagerError extends BaseError<EnumOfErrorTypes> {}

export enum EnumOfErrorTypes {
    BadStorageType
}