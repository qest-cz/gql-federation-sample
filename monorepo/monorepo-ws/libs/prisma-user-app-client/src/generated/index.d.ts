
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  name: string
  age: number
  married: boolean
}

/**
 * Model FriendShip
 * 
 */
export type FriendShip = {
  friendOfId: number
  friendWithId: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.friendShip`: Exposes CRUD operations for the **FriendShip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FriendShips
    * const friendShips = await prisma.friendShip.findMany()
    * ```
    */
  get friendShip(): Prisma.FriendShipDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.2.0
   * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    FriendShip: 'FriendShip'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    friendOf: number
    friendWith: number
  }

  export type UserCountOutputTypeSelect = {
    friendOf?: boolean
    friendWith?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    married: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    married: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    age: number
    married: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    married?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    married?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    married?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    name: string
    age: number
    married: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    age?: boolean
    married?: boolean
    friendOf?: boolean | FriendShipFindManyArgs
    friendWith?: boolean | FriendShipFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    friendOf?: boolean | FriendShipFindManyArgs
    friendWith?: boolean | FriendShipFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'friendOf' ? Array < FriendShipGetPayload<S['include'][P]>>  :
        P extends 'friendWith' ? Array < FriendShipGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'friendOf' ? Array < FriendShipGetPayload<S['select'][P]>>  :
        P extends 'friendWith' ? Array < FriendShipGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    friendOf<T extends FriendShipFindManyArgs = {}>(args?: Subset<T, FriendShipFindManyArgs>): CheckSelect<T, PrismaPromise<Array<FriendShip>>, PrismaPromise<Array<FriendShipGetPayload<T>>>>;

    friendWith<T extends FriendShipFindManyArgs = {}>(args?: Subset<T, FriendShipFindManyArgs>): CheckSelect<T, PrismaPromise<Array<FriendShip>>, PrismaPromise<Array<FriendShipGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model FriendShip
   */


  export type AggregateFriendShip = {
    _count: FriendShipCountAggregateOutputType | null
    _avg: FriendShipAvgAggregateOutputType | null
    _sum: FriendShipSumAggregateOutputType | null
    _min: FriendShipMinAggregateOutputType | null
    _max: FriendShipMaxAggregateOutputType | null
  }

  export type FriendShipAvgAggregateOutputType = {
    friendOfId: number | null
    friendWithId: number | null
  }

  export type FriendShipSumAggregateOutputType = {
    friendOfId: number | null
    friendWithId: number | null
  }

  export type FriendShipMinAggregateOutputType = {
    friendOfId: number | null
    friendWithId: number | null
  }

  export type FriendShipMaxAggregateOutputType = {
    friendOfId: number | null
    friendWithId: number | null
  }

  export type FriendShipCountAggregateOutputType = {
    friendOfId: number
    friendWithId: number
    _all: number
  }


  export type FriendShipAvgAggregateInputType = {
    friendOfId?: true
    friendWithId?: true
  }

  export type FriendShipSumAggregateInputType = {
    friendOfId?: true
    friendWithId?: true
  }

  export type FriendShipMinAggregateInputType = {
    friendOfId?: true
    friendWithId?: true
  }

  export type FriendShipMaxAggregateInputType = {
    friendOfId?: true
    friendWithId?: true
  }

  export type FriendShipCountAggregateInputType = {
    friendOfId?: true
    friendWithId?: true
    _all?: true
  }

  export type FriendShipAggregateArgs = {
    /**
     * Filter which FriendShip to aggregate.
     * 
    **/
    where?: FriendShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendShips to fetch.
     * 
    **/
    orderBy?: Enumerable<FriendShipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FriendShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendShips from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendShips.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FriendShips
    **/
    _count?: true | FriendShipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendShipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendShipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendShipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendShipMaxAggregateInputType
  }

  export type GetFriendShipAggregateType<T extends FriendShipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendShip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendShip[P]>
      : GetScalarType<T[P], AggregateFriendShip[P]>
  }




  export type FriendShipGroupByArgs = {
    where?: FriendShipWhereInput
    orderBy?: Enumerable<FriendShipOrderByWithAggregationInput>
    by: Array<FriendShipScalarFieldEnum>
    having?: FriendShipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendShipCountAggregateInputType | true
    _avg?: FriendShipAvgAggregateInputType
    _sum?: FriendShipSumAggregateInputType
    _min?: FriendShipMinAggregateInputType
    _max?: FriendShipMaxAggregateInputType
  }


  export type FriendShipGroupByOutputType = {
    friendOfId: number
    friendWithId: number
    _count: FriendShipCountAggregateOutputType | null
    _avg: FriendShipAvgAggregateOutputType | null
    _sum: FriendShipSumAggregateOutputType | null
    _min: FriendShipMinAggregateOutputType | null
    _max: FriendShipMaxAggregateOutputType | null
  }

  type GetFriendShipGroupByPayload<T extends FriendShipGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FriendShipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendShipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendShipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendShipGroupByOutputType[P]>
        }
      >
    >


  export type FriendShipSelect = {
    friendOf?: boolean | UserArgs
    friendOfId?: boolean
    friendWith?: boolean | UserArgs
    friendWithId?: boolean
  }

  export type FriendShipInclude = {
    friendOf?: boolean | UserArgs
    friendWith?: boolean | UserArgs
  }

  export type FriendShipGetPayload<
    S extends boolean | null | undefined | FriendShipArgs,
    U = keyof S
      > = S extends true
        ? FriendShip
    : S extends undefined
    ? never
    : S extends FriendShipArgs | FriendShipFindManyArgs
    ?'include' extends U
    ? FriendShip  & {
    [P in TrueKeys<S['include']>]:
        P extends 'friendOf' ? UserGetPayload<S['include'][P]> :
        P extends 'friendWith' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'friendOf' ? UserGetPayload<S['select'][P]> :
        P extends 'friendWith' ? UserGetPayload<S['select'][P]> :  P extends keyof FriendShip ? FriendShip[P] : never
  } 
    : FriendShip
  : FriendShip


  type FriendShipCountArgs = Merge<
    Omit<FriendShipFindManyArgs, 'select' | 'include'> & {
      select?: FriendShipCountAggregateInputType | true
    }
  >

  export interface FriendShipDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one FriendShip that matches the filter.
     * @param {FriendShipFindUniqueArgs} args - Arguments to find a FriendShip
     * @example
     * // Get one FriendShip
     * const friendShip = await prisma.friendShip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FriendShipFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FriendShipFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FriendShip'> extends True ? CheckSelect<T, Prisma__FriendShipClient<FriendShip>, Prisma__FriendShipClient<FriendShipGetPayload<T>>> : CheckSelect<T, Prisma__FriendShipClient<FriendShip | null >, Prisma__FriendShipClient<FriendShipGetPayload<T> | null >>

    /**
     * Find the first FriendShip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipFindFirstArgs} args - Arguments to find a FriendShip
     * @example
     * // Get one FriendShip
     * const friendShip = await prisma.friendShip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FriendShipFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FriendShipFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FriendShip'> extends True ? CheckSelect<T, Prisma__FriendShipClient<FriendShip>, Prisma__FriendShipClient<FriendShipGetPayload<T>>> : CheckSelect<T, Prisma__FriendShipClient<FriendShip | null >, Prisma__FriendShipClient<FriendShipGetPayload<T> | null >>

    /**
     * Find zero or more FriendShips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FriendShips
     * const friendShips = await prisma.friendShip.findMany()
     * 
     * // Get first 10 FriendShips
     * const friendShips = await prisma.friendShip.findMany({ take: 10 })
     * 
     * // Only select the `friendOfId`
     * const friendShipWithFriendOfIdOnly = await prisma.friendShip.findMany({ select: { friendOfId: true } })
     * 
    **/
    findMany<T extends FriendShipFindManyArgs>(
      args?: SelectSubset<T, FriendShipFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<FriendShip>>, PrismaPromise<Array<FriendShipGetPayload<T>>>>

    /**
     * Create a FriendShip.
     * @param {FriendShipCreateArgs} args - Arguments to create a FriendShip.
     * @example
     * // Create one FriendShip
     * const FriendShip = await prisma.friendShip.create({
     *   data: {
     *     // ... data to create a FriendShip
     *   }
     * })
     * 
    **/
    create<T extends FriendShipCreateArgs>(
      args: SelectSubset<T, FriendShipCreateArgs>
    ): CheckSelect<T, Prisma__FriendShipClient<FriendShip>, Prisma__FriendShipClient<FriendShipGetPayload<T>>>

    /**
     * Create many FriendShips.
     *     @param {FriendShipCreateManyArgs} args - Arguments to create many FriendShips.
     *     @example
     *     // Create many FriendShips
     *     const friendShip = await prisma.friendShip.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FriendShipCreateManyArgs>(
      args?: SelectSubset<T, FriendShipCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a FriendShip.
     * @param {FriendShipDeleteArgs} args - Arguments to delete one FriendShip.
     * @example
     * // Delete one FriendShip
     * const FriendShip = await prisma.friendShip.delete({
     *   where: {
     *     // ... filter to delete one FriendShip
     *   }
     * })
     * 
    **/
    delete<T extends FriendShipDeleteArgs>(
      args: SelectSubset<T, FriendShipDeleteArgs>
    ): CheckSelect<T, Prisma__FriendShipClient<FriendShip>, Prisma__FriendShipClient<FriendShipGetPayload<T>>>

    /**
     * Update one FriendShip.
     * @param {FriendShipUpdateArgs} args - Arguments to update one FriendShip.
     * @example
     * // Update one FriendShip
     * const friendShip = await prisma.friendShip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FriendShipUpdateArgs>(
      args: SelectSubset<T, FriendShipUpdateArgs>
    ): CheckSelect<T, Prisma__FriendShipClient<FriendShip>, Prisma__FriendShipClient<FriendShipGetPayload<T>>>

    /**
     * Delete zero or more FriendShips.
     * @param {FriendShipDeleteManyArgs} args - Arguments to filter FriendShips to delete.
     * @example
     * // Delete a few FriendShips
     * const { count } = await prisma.friendShip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FriendShipDeleteManyArgs>(
      args?: SelectSubset<T, FriendShipDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more FriendShips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FriendShips
     * const friendShip = await prisma.friendShip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FriendShipUpdateManyArgs>(
      args: SelectSubset<T, FriendShipUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one FriendShip.
     * @param {FriendShipUpsertArgs} args - Arguments to update or create a FriendShip.
     * @example
     * // Update or create a FriendShip
     * const friendShip = await prisma.friendShip.upsert({
     *   create: {
     *     // ... data to create a FriendShip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FriendShip we want to update
     *   }
     * })
    **/
    upsert<T extends FriendShipUpsertArgs>(
      args: SelectSubset<T, FriendShipUpsertArgs>
    ): CheckSelect<T, Prisma__FriendShipClient<FriendShip>, Prisma__FriendShipClient<FriendShipGetPayload<T>>>

    /**
     * Find one FriendShip that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {FriendShipFindUniqueOrThrowArgs} args - Arguments to find a FriendShip
     * @example
     * // Get one FriendShip
     * const friendShip = await prisma.friendShip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FriendShipFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FriendShipFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__FriendShipClient<FriendShip>, Prisma__FriendShipClient<FriendShipGetPayload<T>>>

    /**
     * Find the first FriendShip that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipFindFirstOrThrowArgs} args - Arguments to find a FriendShip
     * @example
     * // Get one FriendShip
     * const friendShip = await prisma.friendShip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FriendShipFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FriendShipFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__FriendShipClient<FriendShip>, Prisma__FriendShipClient<FriendShipGetPayload<T>>>

    /**
     * Count the number of FriendShips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipCountArgs} args - Arguments to filter FriendShips to count.
     * @example
     * // Count the number of FriendShips
     * const count = await prisma.friendShip.count({
     *   where: {
     *     // ... the filter for the FriendShips we want to count
     *   }
     * })
    **/
    count<T extends FriendShipCountArgs>(
      args?: Subset<T, FriendShipCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendShipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FriendShip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendShipAggregateArgs>(args: Subset<T, FriendShipAggregateArgs>): PrismaPromise<GetFriendShipAggregateType<T>>

    /**
     * Group by FriendShip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendShipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendShipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendShipGroupByArgs['orderBy'] }
        : { orderBy?: FriendShipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendShipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendShipGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for FriendShip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FriendShipClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    friendOf<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    friendWith<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * FriendShip base type for findUnique actions
   */
  export type FriendShipFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    /**
     * Filter, which FriendShip to fetch.
     * 
    **/
    where: FriendShipWhereUniqueInput
  }

  /**
   * FriendShip: findUnique
   */
  export interface FriendShipFindUniqueArgs extends FriendShipFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FriendShip base type for findFirst actions
   */
  export type FriendShipFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    /**
     * Filter, which FriendShip to fetch.
     * 
    **/
    where?: FriendShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendShips to fetch.
     * 
    **/
    orderBy?: Enumerable<FriendShipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendShips.
     * 
    **/
    cursor?: FriendShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendShips from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendShips.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendShips.
     * 
    **/
    distinct?: Enumerable<FriendShipScalarFieldEnum>
  }

  /**
   * FriendShip: findFirst
   */
  export interface FriendShipFindFirstArgs extends FriendShipFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FriendShip findMany
   */
  export type FriendShipFindManyArgs = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    /**
     * Filter, which FriendShips to fetch.
     * 
    **/
    where?: FriendShipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendShips to fetch.
     * 
    **/
    orderBy?: Enumerable<FriendShipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FriendShips.
     * 
    **/
    cursor?: FriendShipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendShips from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendShips.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FriendShipScalarFieldEnum>
  }


  /**
   * FriendShip create
   */
  export type FriendShipCreateArgs = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    /**
     * The data needed to create a FriendShip.
     * 
    **/
    data: XOR<FriendShipCreateInput, FriendShipUncheckedCreateInput>
  }


  /**
   * FriendShip createMany
   */
  export type FriendShipCreateManyArgs = {
    /**
     * The data used to create many FriendShips.
     * 
    **/
    data: Enumerable<FriendShipCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FriendShip update
   */
  export type FriendShipUpdateArgs = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    /**
     * The data needed to update a FriendShip.
     * 
    **/
    data: XOR<FriendShipUpdateInput, FriendShipUncheckedUpdateInput>
    /**
     * Choose, which FriendShip to update.
     * 
    **/
    where: FriendShipWhereUniqueInput
  }


  /**
   * FriendShip updateMany
   */
  export type FriendShipUpdateManyArgs = {
    /**
     * The data used to update FriendShips.
     * 
    **/
    data: XOR<FriendShipUpdateManyMutationInput, FriendShipUncheckedUpdateManyInput>
    /**
     * Filter which FriendShips to update
     * 
    **/
    where?: FriendShipWhereInput
  }


  /**
   * FriendShip upsert
   */
  export type FriendShipUpsertArgs = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    /**
     * The filter to search for the FriendShip to update in case it exists.
     * 
    **/
    where: FriendShipWhereUniqueInput
    /**
     * In case the FriendShip found by the `where` argument doesn't exist, create a new FriendShip with this data.
     * 
    **/
    create: XOR<FriendShipCreateInput, FriendShipUncheckedCreateInput>
    /**
     * In case the FriendShip was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FriendShipUpdateInput, FriendShipUncheckedUpdateInput>
  }


  /**
   * FriendShip delete
   */
  export type FriendShipDeleteArgs = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
    /**
     * Filter which FriendShip to delete.
     * 
    **/
    where: FriendShipWhereUniqueInput
  }


  /**
   * FriendShip deleteMany
   */
  export type FriendShipDeleteManyArgs = {
    /**
     * Filter which FriendShips to delete
     * 
    **/
    where?: FriendShipWhereInput
  }


  /**
   * FriendShip: findUniqueOrThrow
   */
  export type FriendShipFindUniqueOrThrowArgs = FriendShipFindUniqueArgsBase
      

  /**
   * FriendShip: findFirstOrThrow
   */
  export type FriendShipFindFirstOrThrowArgs = FriendShipFindFirstArgsBase
      

  /**
   * FriendShip without action
   */
  export type FriendShipArgs = {
    /**
     * Select specific fields to fetch from the FriendShip
     * 
    **/
    select?: FriendShipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FriendShipInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const FriendShipScalarFieldEnum: {
    friendOfId: 'friendOfId',
    friendWithId: 'friendWithId'
  };

  export type FriendShipScalarFieldEnum = (typeof FriendShipScalarFieldEnum)[keyof typeof FriendShipScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    married: 'married'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    age?: IntFilter | number
    married?: BoolFilter | boolean
    friendOf?: FriendShipListRelationFilter
    friendWith?: FriendShipListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    married?: SortOrder
    friendOf?: FriendShipOrderByRelationAggregateInput
    friendWith?: FriendShipOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    married?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    age?: IntWithAggregatesFilter | number
    married?: BoolWithAggregatesFilter | boolean
  }

  export type FriendShipWhereInput = {
    AND?: Enumerable<FriendShipWhereInput>
    OR?: Enumerable<FriendShipWhereInput>
    NOT?: Enumerable<FriendShipWhereInput>
    friendOf?: XOR<UserRelationFilter, UserWhereInput>
    friendOfId?: IntFilter | number
    friendWith?: XOR<UserRelationFilter, UserWhereInput>
    friendWithId?: IntFilter | number
  }

  export type FriendShipOrderByWithRelationInput = {
    friendOf?: UserOrderByWithRelationInput
    friendOfId?: SortOrder
    friendWith?: UserOrderByWithRelationInput
    friendWithId?: SortOrder
  }

  export type FriendShipWhereUniqueInput = {
    friendWithId_friendOfId?: FriendShipFriendWithIdFriendOfIdCompoundUniqueInput
  }

  export type FriendShipOrderByWithAggregationInput = {
    friendOfId?: SortOrder
    friendWithId?: SortOrder
    _count?: FriendShipCountOrderByAggregateInput
    _avg?: FriendShipAvgOrderByAggregateInput
    _max?: FriendShipMaxOrderByAggregateInput
    _min?: FriendShipMinOrderByAggregateInput
    _sum?: FriendShipSumOrderByAggregateInput
  }

  export type FriendShipScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FriendShipScalarWhereWithAggregatesInput>
    OR?: Enumerable<FriendShipScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FriendShipScalarWhereWithAggregatesInput>
    friendOfId?: IntWithAggregatesFilter | number
    friendWithId?: IntWithAggregatesFilter | number
  }

  export type UserCreateInput = {
    name: string
    age: number
    married: boolean
    friendOf?: FriendShipCreateNestedManyWithoutFriendOfInput
    friendWith?: FriendShipCreateNestedManyWithoutFriendWithInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    age: number
    married: boolean
    friendOf?: FriendShipUncheckedCreateNestedManyWithoutFriendOfInput
    friendWith?: FriendShipUncheckedCreateNestedManyWithoutFriendWithInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    married?: BoolFieldUpdateOperationsInput | boolean
    friendOf?: FriendShipUpdateManyWithoutFriendOfNestedInput
    friendWith?: FriendShipUpdateManyWithoutFriendWithNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    married?: BoolFieldUpdateOperationsInput | boolean
    friendOf?: FriendShipUncheckedUpdateManyWithoutFriendOfNestedInput
    friendWith?: FriendShipUncheckedUpdateManyWithoutFriendWithNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    age: number
    married: boolean
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    married?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    married?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FriendShipCreateInput = {
    friendOf: UserCreateNestedOneWithoutFriendOfInput
    friendWith: UserCreateNestedOneWithoutFriendWithInput
  }

  export type FriendShipUncheckedCreateInput = {
    friendOfId: number
    friendWithId: number
  }

  export type FriendShipUpdateInput = {
    friendOf?: UserUpdateOneRequiredWithoutFriendOfNestedInput
    friendWith?: UserUpdateOneRequiredWithoutFriendWithNestedInput
  }

  export type FriendShipUncheckedUpdateInput = {
    friendOfId?: IntFieldUpdateOperationsInput | number
    friendWithId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendShipCreateManyInput = {
    friendOfId: number
    friendWithId: number
  }

  export type FriendShipUpdateManyMutationInput = {

  }

  export type FriendShipUncheckedUpdateManyInput = {
    friendOfId?: IntFieldUpdateOperationsInput | number
    friendWithId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type FriendShipListRelationFilter = {
    every?: FriendShipWhereInput
    some?: FriendShipWhereInput
    none?: FriendShipWhereInput
  }

  export type FriendShipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    married?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    married?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    married?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FriendShipFriendWithIdFriendOfIdCompoundUniqueInput = {
    friendWithId: number
    friendOfId: number
  }

  export type FriendShipCountOrderByAggregateInput = {
    friendOfId?: SortOrder
    friendWithId?: SortOrder
  }

  export type FriendShipAvgOrderByAggregateInput = {
    friendOfId?: SortOrder
    friendWithId?: SortOrder
  }

  export type FriendShipMaxOrderByAggregateInput = {
    friendOfId?: SortOrder
    friendWithId?: SortOrder
  }

  export type FriendShipMinOrderByAggregateInput = {
    friendOfId?: SortOrder
    friendWithId?: SortOrder
  }

  export type FriendShipSumOrderByAggregateInput = {
    friendOfId?: SortOrder
    friendWithId?: SortOrder
  }

  export type FriendShipCreateNestedManyWithoutFriendOfInput = {
    create?: XOR<Enumerable<FriendShipCreateWithoutFriendOfInput>, Enumerable<FriendShipUncheckedCreateWithoutFriendOfInput>>
    connectOrCreate?: Enumerable<FriendShipCreateOrConnectWithoutFriendOfInput>
    createMany?: FriendShipCreateManyFriendOfInputEnvelope
    connect?: Enumerable<FriendShipWhereUniqueInput>
  }

  export type FriendShipCreateNestedManyWithoutFriendWithInput = {
    create?: XOR<Enumerable<FriendShipCreateWithoutFriendWithInput>, Enumerable<FriendShipUncheckedCreateWithoutFriendWithInput>>
    connectOrCreate?: Enumerable<FriendShipCreateOrConnectWithoutFriendWithInput>
    createMany?: FriendShipCreateManyFriendWithInputEnvelope
    connect?: Enumerable<FriendShipWhereUniqueInput>
  }

  export type FriendShipUncheckedCreateNestedManyWithoutFriendOfInput = {
    create?: XOR<Enumerable<FriendShipCreateWithoutFriendOfInput>, Enumerable<FriendShipUncheckedCreateWithoutFriendOfInput>>
    connectOrCreate?: Enumerable<FriendShipCreateOrConnectWithoutFriendOfInput>
    createMany?: FriendShipCreateManyFriendOfInputEnvelope
    connect?: Enumerable<FriendShipWhereUniqueInput>
  }

  export type FriendShipUncheckedCreateNestedManyWithoutFriendWithInput = {
    create?: XOR<Enumerable<FriendShipCreateWithoutFriendWithInput>, Enumerable<FriendShipUncheckedCreateWithoutFriendWithInput>>
    connectOrCreate?: Enumerable<FriendShipCreateOrConnectWithoutFriendWithInput>
    createMany?: FriendShipCreateManyFriendWithInputEnvelope
    connect?: Enumerable<FriendShipWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FriendShipUpdateManyWithoutFriendOfNestedInput = {
    create?: XOR<Enumerable<FriendShipCreateWithoutFriendOfInput>, Enumerable<FriendShipUncheckedCreateWithoutFriendOfInput>>
    connectOrCreate?: Enumerable<FriendShipCreateOrConnectWithoutFriendOfInput>
    upsert?: Enumerable<FriendShipUpsertWithWhereUniqueWithoutFriendOfInput>
    createMany?: FriendShipCreateManyFriendOfInputEnvelope
    set?: Enumerable<FriendShipWhereUniqueInput>
    disconnect?: Enumerable<FriendShipWhereUniqueInput>
    delete?: Enumerable<FriendShipWhereUniqueInput>
    connect?: Enumerable<FriendShipWhereUniqueInput>
    update?: Enumerable<FriendShipUpdateWithWhereUniqueWithoutFriendOfInput>
    updateMany?: Enumerable<FriendShipUpdateManyWithWhereWithoutFriendOfInput>
    deleteMany?: Enumerable<FriendShipScalarWhereInput>
  }

  export type FriendShipUpdateManyWithoutFriendWithNestedInput = {
    create?: XOR<Enumerable<FriendShipCreateWithoutFriendWithInput>, Enumerable<FriendShipUncheckedCreateWithoutFriendWithInput>>
    connectOrCreate?: Enumerable<FriendShipCreateOrConnectWithoutFriendWithInput>
    upsert?: Enumerable<FriendShipUpsertWithWhereUniqueWithoutFriendWithInput>
    createMany?: FriendShipCreateManyFriendWithInputEnvelope
    set?: Enumerable<FriendShipWhereUniqueInput>
    disconnect?: Enumerable<FriendShipWhereUniqueInput>
    delete?: Enumerable<FriendShipWhereUniqueInput>
    connect?: Enumerable<FriendShipWhereUniqueInput>
    update?: Enumerable<FriendShipUpdateWithWhereUniqueWithoutFriendWithInput>
    updateMany?: Enumerable<FriendShipUpdateManyWithWhereWithoutFriendWithInput>
    deleteMany?: Enumerable<FriendShipScalarWhereInput>
  }

  export type FriendShipUncheckedUpdateManyWithoutFriendOfNestedInput = {
    create?: XOR<Enumerable<FriendShipCreateWithoutFriendOfInput>, Enumerable<FriendShipUncheckedCreateWithoutFriendOfInput>>
    connectOrCreate?: Enumerable<FriendShipCreateOrConnectWithoutFriendOfInput>
    upsert?: Enumerable<FriendShipUpsertWithWhereUniqueWithoutFriendOfInput>
    createMany?: FriendShipCreateManyFriendOfInputEnvelope
    set?: Enumerable<FriendShipWhereUniqueInput>
    disconnect?: Enumerable<FriendShipWhereUniqueInput>
    delete?: Enumerable<FriendShipWhereUniqueInput>
    connect?: Enumerable<FriendShipWhereUniqueInput>
    update?: Enumerable<FriendShipUpdateWithWhereUniqueWithoutFriendOfInput>
    updateMany?: Enumerable<FriendShipUpdateManyWithWhereWithoutFriendOfInput>
    deleteMany?: Enumerable<FriendShipScalarWhereInput>
  }

  export type FriendShipUncheckedUpdateManyWithoutFriendWithNestedInput = {
    create?: XOR<Enumerable<FriendShipCreateWithoutFriendWithInput>, Enumerable<FriendShipUncheckedCreateWithoutFriendWithInput>>
    connectOrCreate?: Enumerable<FriendShipCreateOrConnectWithoutFriendWithInput>
    upsert?: Enumerable<FriendShipUpsertWithWhereUniqueWithoutFriendWithInput>
    createMany?: FriendShipCreateManyFriendWithInputEnvelope
    set?: Enumerable<FriendShipWhereUniqueInput>
    disconnect?: Enumerable<FriendShipWhereUniqueInput>
    delete?: Enumerable<FriendShipWhereUniqueInput>
    connect?: Enumerable<FriendShipWhereUniqueInput>
    update?: Enumerable<FriendShipUpdateWithWhereUniqueWithoutFriendWithInput>
    updateMany?: Enumerable<FriendShipUpdateManyWithWhereWithoutFriendWithInput>
    deleteMany?: Enumerable<FriendShipScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutFriendOfInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFriendWithInput = {
    create?: XOR<UserCreateWithoutFriendWithInput, UserUncheckedCreateWithoutFriendWithInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendWithInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFriendOfNestedInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    upsert?: UserUpsertWithoutFriendOfInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserUpdateOneRequiredWithoutFriendWithNestedInput = {
    create?: XOR<UserCreateWithoutFriendWithInput, UserUncheckedCreateWithoutFriendWithInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendWithInput
    upsert?: UserUpsertWithoutFriendWithInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFriendWithInput, UserUncheckedUpdateWithoutFriendWithInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type FriendShipCreateWithoutFriendOfInput = {
    friendWith: UserCreateNestedOneWithoutFriendWithInput
  }

  export type FriendShipUncheckedCreateWithoutFriendOfInput = {
    friendWithId: number
  }

  export type FriendShipCreateOrConnectWithoutFriendOfInput = {
    where: FriendShipWhereUniqueInput
    create: XOR<FriendShipCreateWithoutFriendOfInput, FriendShipUncheckedCreateWithoutFriendOfInput>
  }

  export type FriendShipCreateManyFriendOfInputEnvelope = {
    data: Enumerable<FriendShipCreateManyFriendOfInput>
    skipDuplicates?: boolean
  }

  export type FriendShipCreateWithoutFriendWithInput = {
    friendOf: UserCreateNestedOneWithoutFriendOfInput
  }

  export type FriendShipUncheckedCreateWithoutFriendWithInput = {
    friendOfId: number
  }

  export type FriendShipCreateOrConnectWithoutFriendWithInput = {
    where: FriendShipWhereUniqueInput
    create: XOR<FriendShipCreateWithoutFriendWithInput, FriendShipUncheckedCreateWithoutFriendWithInput>
  }

  export type FriendShipCreateManyFriendWithInputEnvelope = {
    data: Enumerable<FriendShipCreateManyFriendWithInput>
    skipDuplicates?: boolean
  }

  export type FriendShipUpsertWithWhereUniqueWithoutFriendOfInput = {
    where: FriendShipWhereUniqueInput
    update: XOR<FriendShipUpdateWithoutFriendOfInput, FriendShipUncheckedUpdateWithoutFriendOfInput>
    create: XOR<FriendShipCreateWithoutFriendOfInput, FriendShipUncheckedCreateWithoutFriendOfInput>
  }

  export type FriendShipUpdateWithWhereUniqueWithoutFriendOfInput = {
    where: FriendShipWhereUniqueInput
    data: XOR<FriendShipUpdateWithoutFriendOfInput, FriendShipUncheckedUpdateWithoutFriendOfInput>
  }

  export type FriendShipUpdateManyWithWhereWithoutFriendOfInput = {
    where: FriendShipScalarWhereInput
    data: XOR<FriendShipUpdateManyMutationInput, FriendShipUncheckedUpdateManyWithoutFriendOfInput>
  }

  export type FriendShipScalarWhereInput = {
    AND?: Enumerable<FriendShipScalarWhereInput>
    OR?: Enumerable<FriendShipScalarWhereInput>
    NOT?: Enumerable<FriendShipScalarWhereInput>
    friendOfId?: IntFilter | number
    friendWithId?: IntFilter | number
  }

  export type FriendShipUpsertWithWhereUniqueWithoutFriendWithInput = {
    where: FriendShipWhereUniqueInput
    update: XOR<FriendShipUpdateWithoutFriendWithInput, FriendShipUncheckedUpdateWithoutFriendWithInput>
    create: XOR<FriendShipCreateWithoutFriendWithInput, FriendShipUncheckedCreateWithoutFriendWithInput>
  }

  export type FriendShipUpdateWithWhereUniqueWithoutFriendWithInput = {
    where: FriendShipWhereUniqueInput
    data: XOR<FriendShipUpdateWithoutFriendWithInput, FriendShipUncheckedUpdateWithoutFriendWithInput>
  }

  export type FriendShipUpdateManyWithWhereWithoutFriendWithInput = {
    where: FriendShipScalarWhereInput
    data: XOR<FriendShipUpdateManyMutationInput, FriendShipUncheckedUpdateManyWithoutFriendWithInput>
  }

  export type UserCreateWithoutFriendOfInput = {
    name: string
    age: number
    married: boolean
    friendWith?: FriendShipCreateNestedManyWithoutFriendWithInput
  }

  export type UserUncheckedCreateWithoutFriendOfInput = {
    id?: number
    name: string
    age: number
    married: boolean
    friendWith?: FriendShipUncheckedCreateNestedManyWithoutFriendWithInput
  }

  export type UserCreateOrConnectWithoutFriendOfInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
  }

  export type UserCreateWithoutFriendWithInput = {
    name: string
    age: number
    married: boolean
    friendOf?: FriendShipCreateNestedManyWithoutFriendOfInput
  }

  export type UserUncheckedCreateWithoutFriendWithInput = {
    id?: number
    name: string
    age: number
    married: boolean
    friendOf?: FriendShipUncheckedCreateNestedManyWithoutFriendOfInput
  }

  export type UserCreateOrConnectWithoutFriendWithInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendWithInput, UserUncheckedCreateWithoutFriendWithInput>
  }

  export type UserUpsertWithoutFriendOfInput = {
    update: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
  }

  export type UserUpdateWithoutFriendOfInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    married?: BoolFieldUpdateOperationsInput | boolean
    friendWith?: FriendShipUpdateManyWithoutFriendWithNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendOfInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    married?: BoolFieldUpdateOperationsInput | boolean
    friendWith?: FriendShipUncheckedUpdateManyWithoutFriendWithNestedInput
  }

  export type UserUpsertWithoutFriendWithInput = {
    update: XOR<UserUpdateWithoutFriendWithInput, UserUncheckedUpdateWithoutFriendWithInput>
    create: XOR<UserCreateWithoutFriendWithInput, UserUncheckedCreateWithoutFriendWithInput>
  }

  export type UserUpdateWithoutFriendWithInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    married?: BoolFieldUpdateOperationsInput | boolean
    friendOf?: FriendShipUpdateManyWithoutFriendOfNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendWithInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    married?: BoolFieldUpdateOperationsInput | boolean
    friendOf?: FriendShipUncheckedUpdateManyWithoutFriendOfNestedInput
  }

  export type FriendShipCreateManyFriendOfInput = {
    friendWithId: number
  }

  export type FriendShipCreateManyFriendWithInput = {
    friendOfId: number
  }

  export type FriendShipUpdateWithoutFriendOfInput = {
    friendWith?: UserUpdateOneRequiredWithoutFriendWithNestedInput
  }

  export type FriendShipUncheckedUpdateWithoutFriendOfInput = {
    friendWithId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendShipUncheckedUpdateManyWithoutFriendOfInput = {
    friendWithId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendShipUpdateWithoutFriendWithInput = {
    friendOf?: UserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type FriendShipUncheckedUpdateWithoutFriendWithInput = {
    friendOfId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendShipUncheckedUpdateManyWithoutFriendWithInput = {
    friendOfId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}