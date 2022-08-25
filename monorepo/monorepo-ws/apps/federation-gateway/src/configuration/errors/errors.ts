import { BaseError } from "@qest/error-utils";

export class FederationGatewayError extends BaseError<EnumOfErrorTypes> {}

export enum EnumOfErrorTypes {
    BadStorageType,
    InvalidNumber
}