import { BaseError } from "@qest/error-utils";

export class RoverErrorManager extends BaseError<EnumOfErrorTypes> {}

export enum EnumOfErrorTypes {
    AppsNotRunning
}