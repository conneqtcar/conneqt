
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Inspection
 * 
 */
export type Inspection = $Result.DefaultSelection<Prisma.$InspectionPayload>
/**
 * Model InspectionMedia
 * 
 */
export type InspectionMedia = $Result.DefaultSelection<Prisma.$InspectionMediaPayload>
/**
 * Model InspectionItem
 * 
 */
export type InspectionItem = $Result.DefaultSelection<Prisma.$InspectionItemPayload>
/**
 * Model Listing
 * 
 */
export type Listing = $Result.DefaultSelection<Prisma.$ListingPayload>
/**
 * Model Proposal
 * 
 */
export type Proposal = $Result.DefaultSelection<Prisma.$ProposalPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model Dealer
 * 
 */
export type Dealer = $Result.DefaultSelection<Prisma.$DealerPayload>
/**
 * Model DealerListing
 * 
 */
export type DealerListing = $Result.DefaultSelection<Prisma.$DealerListingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  PF: 'PF',
  PJ: 'PJ',
  ADMIN: 'ADMIN'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  BLOCKED: 'BLOCKED',
  SUSPENDED: 'SUSPENDED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const KycStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  NOT_SUBMITTED: 'NOT_SUBMITTED'
};

export type KycStatus = (typeof KycStatus)[keyof typeof KycStatus]


export const VehicleStatus: {
  DRAFT: 'DRAFT',
  INSPECTION_PENDING: 'INSPECTION_PENDING',
  INSPECTION_IN_PROGRESS: 'INSPECTION_IN_PROGRESS',
  INSPECTION_APPROVED: 'INSPECTION_APPROVED',
  INSPECTION_REJECTED: 'INSPECTION_REJECTED',
  LISTED: 'LISTED',
  SOLD: 'SOLD',
  INACTIVE: 'INACTIVE'
};

export type VehicleStatus = (typeof VehicleStatus)[keyof typeof VehicleStatus]


export const FuelType: {
  FLEX: 'FLEX',
  GASOLINE: 'GASOLINE',
  DIESEL: 'DIESEL',
  ELECTRIC: 'ELECTRIC',
  HYBRID: 'HYBRID'
};

export type FuelType = (typeof FuelType)[keyof typeof FuelType]


export const TransmissionType: {
  MANUAL: 'MANUAL',
  AUTOMATIC: 'AUTOMATIC',
  CVT: 'CVT',
  SEMI_AUTO: 'SEMI_AUTO'
};

export type TransmissionType = (typeof TransmissionType)[keyof typeof TransmissionType]


export const InspectionType: {
  REMOTE: 'REMOTE',
  PRESENTIAL: 'PRESENTIAL',
  PARTNER: 'PARTNER'
};

export type InspectionType = (typeof InspectionType)[keyof typeof InspectionType]


export const InspectionStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  AWAITING_REVIEW: 'AWAITING_REVIEW',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED'
};

export type InspectionStatus = (typeof InspectionStatus)[keyof typeof InspectionStatus]


export const MediaType: {
  PHOTO: 'PHOTO',
  VIDEO: 'VIDEO',
  DOCUMENT: 'DOCUMENT'
};

export type MediaType = (typeof MediaType)[keyof typeof MediaType]


export const ListingStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SOLD: 'SOLD',
  EXPIRED: 'EXPIRED'
};

export type ListingStatus = (typeof ListingStatus)[keyof typeof ListingStatus]


export const ProposalStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  COUNTER: 'COUNTER',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED'
};

export type ProposalStatus = (typeof ProposalStatus)[keyof typeof ProposalStatus]


export const DealerPlan: {
  STARTER: 'STARTER',
  PRO: 'PRO',
  ENTERPRISE: 'ENTERPRISE'
};

export type DealerPlan = (typeof DealerPlan)[keyof typeof DealerPlan]


export const DealerStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  INACTIVE: 'INACTIVE'
};

export type DealerStatus = (typeof DealerStatus)[keyof typeof DealerStatus]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type KycStatus = $Enums.KycStatus

export const KycStatus: typeof $Enums.KycStatus

export type VehicleStatus = $Enums.VehicleStatus

export const VehicleStatus: typeof $Enums.VehicleStatus

export type FuelType = $Enums.FuelType

export const FuelType: typeof $Enums.FuelType

export type TransmissionType = $Enums.TransmissionType

export const TransmissionType: typeof $Enums.TransmissionType

export type InspectionType = $Enums.InspectionType

export const InspectionType: typeof $Enums.InspectionType

export type InspectionStatus = $Enums.InspectionStatus

export const InspectionStatus: typeof $Enums.InspectionStatus

export type MediaType = $Enums.MediaType

export const MediaType: typeof $Enums.MediaType

export type ListingStatus = $Enums.ListingStatus

export const ListingStatus: typeof $Enums.ListingStatus

export type ProposalStatus = $Enums.ProposalStatus

export const ProposalStatus: typeof $Enums.ProposalStatus

export type DealerPlan = $Enums.DealerPlan

export const DealerPlan: typeof $Enums.DealerPlan

export type DealerStatus = $Enums.DealerStatus

export const DealerStatus: typeof $Enums.DealerStatus

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inspection`: Exposes CRUD operations for the **Inspection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inspections
    * const inspections = await prisma.inspection.findMany()
    * ```
    */
  get inspection(): Prisma.InspectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inspectionMedia`: Exposes CRUD operations for the **InspectionMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InspectionMedias
    * const inspectionMedias = await prisma.inspectionMedia.findMany()
    * ```
    */
  get inspectionMedia(): Prisma.InspectionMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inspectionItem`: Exposes CRUD operations for the **InspectionItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InspectionItems
    * const inspectionItems = await prisma.inspectionItem.findMany()
    * ```
    */
  get inspectionItem(): Prisma.InspectionItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listing`: Exposes CRUD operations for the **Listing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listings
    * const listings = await prisma.listing.findMany()
    * ```
    */
  get listing(): Prisma.ListingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proposal`: Exposes CRUD operations for the **Proposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proposals
    * const proposals = await prisma.proposal.findMany()
    * ```
    */
  get proposal(): Prisma.ProposalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dealer`: Exposes CRUD operations for the **Dealer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dealers
    * const dealers = await prisma.dealer.findMany()
    * ```
    */
  get dealer(): Prisma.DealerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dealerListing`: Exposes CRUD operations for the **DealerListing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DealerListings
    * const dealerListings = await prisma.dealerListing.findMany()
    * ```
    */
  get dealerListing(): Prisma.DealerListingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    RefreshToken: 'RefreshToken',
    Vehicle: 'Vehicle',
    Inspection: 'Inspection',
    InspectionMedia: 'InspectionMedia',
    InspectionItem: 'InspectionItem',
    Listing: 'Listing',
    Proposal: 'Proposal',
    ChatMessage: 'ChatMessage',
    Dealer: 'Dealer',
    DealerListing: 'DealerListing'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "refreshToken" | "vehicle" | "inspection" | "inspectionMedia" | "inspectionItem" | "listing" | "proposal" | "chatMessage" | "dealer" | "dealerListing"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Inspection: {
        payload: Prisma.$InspectionPayload<ExtArgs>
        fields: Prisma.InspectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InspectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InspectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>
          }
          findFirst: {
            args: Prisma.InspectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InspectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>
          }
          findMany: {
            args: Prisma.InspectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>[]
          }
          create: {
            args: Prisma.InspectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>
          }
          createMany: {
            args: Prisma.InspectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InspectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>[]
          }
          delete: {
            args: Prisma.InspectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>
          }
          update: {
            args: Prisma.InspectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>
          }
          deleteMany: {
            args: Prisma.InspectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InspectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InspectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>[]
          }
          upsert: {
            args: Prisma.InspectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionPayload>
          }
          aggregate: {
            args: Prisma.InspectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInspection>
          }
          groupBy: {
            args: Prisma.InspectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InspectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InspectionCountArgs<ExtArgs>
            result: $Utils.Optional<InspectionCountAggregateOutputType> | number
          }
        }
      }
      InspectionMedia: {
        payload: Prisma.$InspectionMediaPayload<ExtArgs>
        fields: Prisma.InspectionMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InspectionMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InspectionMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionMediaPayload>
          }
          findFirst: {
            args: Prisma.InspectionMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InspectionMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionMediaPayload>
          }
          findMany: {
            args: Prisma.InspectionMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionMediaPayload>[]
          }
          create: {
            args: Prisma.InspectionMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionMediaPayload>
          }
          createMany: {
            args: Prisma.InspectionMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InspectionMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionMediaPayload>[]
          }
          delete: {
            args: Prisma.InspectionMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionMediaPayload>
          }
          update: {
            args: Prisma.InspectionMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionMediaPayload>
          }
          deleteMany: {
            args: Prisma.InspectionMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InspectionMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InspectionMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionMediaPayload>[]
          }
          upsert: {
            args: Prisma.InspectionMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionMediaPayload>
          }
          aggregate: {
            args: Prisma.InspectionMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInspectionMedia>
          }
          groupBy: {
            args: Prisma.InspectionMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<InspectionMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.InspectionMediaCountArgs<ExtArgs>
            result: $Utils.Optional<InspectionMediaCountAggregateOutputType> | number
          }
        }
      }
      InspectionItem: {
        payload: Prisma.$InspectionItemPayload<ExtArgs>
        fields: Prisma.InspectionItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InspectionItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InspectionItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionItemPayload>
          }
          findFirst: {
            args: Prisma.InspectionItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InspectionItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionItemPayload>
          }
          findMany: {
            args: Prisma.InspectionItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionItemPayload>[]
          }
          create: {
            args: Prisma.InspectionItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionItemPayload>
          }
          createMany: {
            args: Prisma.InspectionItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InspectionItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionItemPayload>[]
          }
          delete: {
            args: Prisma.InspectionItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionItemPayload>
          }
          update: {
            args: Prisma.InspectionItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionItemPayload>
          }
          deleteMany: {
            args: Prisma.InspectionItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InspectionItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InspectionItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionItemPayload>[]
          }
          upsert: {
            args: Prisma.InspectionItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspectionItemPayload>
          }
          aggregate: {
            args: Prisma.InspectionItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInspectionItem>
          }
          groupBy: {
            args: Prisma.InspectionItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InspectionItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InspectionItemCountArgs<ExtArgs>
            result: $Utils.Optional<InspectionItemCountAggregateOutputType> | number
          }
        }
      }
      Listing: {
        payload: Prisma.$ListingPayload<ExtArgs>
        fields: Prisma.ListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findFirst: {
            args: Prisma.ListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findMany: {
            args: Prisma.ListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          create: {
            args: Prisma.ListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          createMany: {
            args: Prisma.ListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          delete: {
            args: Prisma.ListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          update: {
            args: Prisma.ListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          deleteMany: {
            args: Prisma.ListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          upsert: {
            args: Prisma.ListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          aggregate: {
            args: Prisma.ListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListing>
          }
          groupBy: {
            args: Prisma.ListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingCountArgs<ExtArgs>
            result: $Utils.Optional<ListingCountAggregateOutputType> | number
          }
        }
      }
      Proposal: {
        payload: Prisma.$ProposalPayload<ExtArgs>
        fields: Prisma.ProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findFirst: {
            args: Prisma.ProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findMany: {
            args: Prisma.ProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          create: {
            args: Prisma.ProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          createMany: {
            args: Prisma.ProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProposalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          delete: {
            args: Prisma.ProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          update: {
            args: Prisma.ProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          deleteMany: {
            args: Prisma.ProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProposalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          upsert: {
            args: Prisma.ProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          aggregate: {
            args: Prisma.ProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposal>
          }
          groupBy: {
            args: Prisma.ProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposalCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      Dealer: {
        payload: Prisma.$DealerPayload<ExtArgs>
        fields: Prisma.DealerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DealerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DealerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          findFirst: {
            args: Prisma.DealerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DealerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          findMany: {
            args: Prisma.DealerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>[]
          }
          create: {
            args: Prisma.DealerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          createMany: {
            args: Prisma.DealerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DealerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>[]
          }
          delete: {
            args: Prisma.DealerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          update: {
            args: Prisma.DealerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          deleteMany: {
            args: Prisma.DealerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DealerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DealerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>[]
          }
          upsert: {
            args: Prisma.DealerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerPayload>
          }
          aggregate: {
            args: Prisma.DealerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDealer>
          }
          groupBy: {
            args: Prisma.DealerGroupByArgs<ExtArgs>
            result: $Utils.Optional<DealerGroupByOutputType>[]
          }
          count: {
            args: Prisma.DealerCountArgs<ExtArgs>
            result: $Utils.Optional<DealerCountAggregateOutputType> | number
          }
        }
      }
      DealerListing: {
        payload: Prisma.$DealerListingPayload<ExtArgs>
        fields: Prisma.DealerListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DealerListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DealerListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerListingPayload>
          }
          findFirst: {
            args: Prisma.DealerListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DealerListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerListingPayload>
          }
          findMany: {
            args: Prisma.DealerListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerListingPayload>[]
          }
          create: {
            args: Prisma.DealerListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerListingPayload>
          }
          createMany: {
            args: Prisma.DealerListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DealerListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerListingPayload>[]
          }
          delete: {
            args: Prisma.DealerListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerListingPayload>
          }
          update: {
            args: Prisma.DealerListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerListingPayload>
          }
          deleteMany: {
            args: Prisma.DealerListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DealerListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DealerListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerListingPayload>[]
          }
          upsert: {
            args: Prisma.DealerListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealerListingPayload>
          }
          aggregate: {
            args: Prisma.DealerListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDealerListing>
          }
          groupBy: {
            args: Prisma.DealerListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<DealerListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.DealerListingCountArgs<ExtArgs>
            result: $Utils.Optional<DealerListingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    refreshToken?: RefreshTokenOmit
    vehicle?: VehicleOmit
    inspection?: InspectionOmit
    inspectionMedia?: InspectionMediaOmit
    inspectionItem?: InspectionItemOmit
    listing?: ListingOmit
    proposal?: ProposalOmit
    chatMessage?: ChatMessageOmit
    dealer?: DealerOmit
    dealerListing?: DealerListingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

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
    vehicles: number
    sellerListings: number
    buyerProposals: number
    refreshTokens: number
    chatMessages: number
    inspectionsReviewed: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | UserCountOutputTypeCountVehiclesArgs
    sellerListings?: boolean | UserCountOutputTypeCountSellerListingsArgs
    buyerProposals?: boolean | UserCountOutputTypeCountBuyerProposalsArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    chatMessages?: boolean | UserCountOutputTypeCountChatMessagesArgs
    inspectionsReviewed?: boolean | UserCountOutputTypeCountInspectionsReviewedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSellerListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBuyerProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInspectionsReviewedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspectionWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    inspections: number
    listings: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inspections?: boolean | VehicleCountOutputTypeCountInspectionsArgs
    listings?: boolean | VehicleCountOutputTypeCountListingsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountInspectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspectionWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
  }


  /**
   * Count Type InspectionCountOutputType
   */

  export type InspectionCountOutputType = {
    media: number
    items: number
  }

  export type InspectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | InspectionCountOutputTypeCountMediaArgs
    items?: boolean | InspectionCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * InspectionCountOutputType without action
   */
  export type InspectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionCountOutputType
     */
    select?: InspectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InspectionCountOutputType without action
   */
  export type InspectionCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspectionMediaWhereInput
  }

  /**
   * InspectionCountOutputType without action
   */
  export type InspectionCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspectionItemWhereInput
  }


  /**
   * Count Type ListingCountOutputType
   */

  export type ListingCountOutputType = {
    proposals: number
    chatMessages: number
  }

  export type ListingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposals?: boolean | ListingCountOutputTypeCountProposalsArgs
    chatMessages?: boolean | ListingCountOutputTypeCountChatMessagesArgs
  }

  // Custom InputTypes
  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingCountOutputType
     */
    select?: ListingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Count Type DealerCountOutputType
   */

  export type DealerCountOutputType = {
    listings: number
  }

  export type DealerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | DealerCountOutputTypeCountListingsArgs
  }

  // Custom InputTypes
  /**
   * DealerCountOutputType without action
   */
  export type DealerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealerCountOutputType
     */
    select?: DealerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DealerCountOutputType without action
   */
  export type DealerCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealerListingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    phone: string | null
    cpf: string | null
    type: $Enums.UserType | null
    status: $Enums.UserStatus | null
    kycStatus: $Enums.KycStatus | null
    avatarUrl: string | null
    kycSubmittedAt: Date | null
    kycApprovedAt: Date | null
    kycRejectionReason: string | null
    blockReason: string | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    phone: string | null
    cpf: string | null
    type: $Enums.UserType | null
    status: $Enums.UserStatus | null
    kycStatus: $Enums.KycStatus | null
    avatarUrl: string | null
    kycSubmittedAt: Date | null
    kycApprovedAt: Date | null
    kycRejectionReason: string | null
    blockReason: string | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    phone: number
    cpf: number
    type: number
    status: number
    kycStatus: number
    avatarUrl: number
    kycSubmittedAt: number
    kycApprovedAt: number
    kycRejectionReason: number
    blockReason: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    phone?: true
    cpf?: true
    type?: true
    status?: true
    kycStatus?: true
    avatarUrl?: true
    kycSubmittedAt?: true
    kycApprovedAt?: true
    kycRejectionReason?: true
    blockReason?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    phone?: true
    cpf?: true
    type?: true
    status?: true
    kycStatus?: true
    avatarUrl?: true
    kycSubmittedAt?: true
    kycApprovedAt?: true
    kycRejectionReason?: true
    blockReason?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    phone?: true
    cpf?: true
    type?: true
    status?: true
    kycStatus?: true
    avatarUrl?: true
    kycSubmittedAt?: true
    kycApprovedAt?: true
    kycRejectionReason?: true
    blockReason?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string
    phone: string | null
    cpf: string | null
    type: $Enums.UserType
    status: $Enums.UserStatus
    kycStatus: $Enums.KycStatus
    avatarUrl: string | null
    kycSubmittedAt: Date | null
    kycApprovedAt: Date | null
    kycRejectionReason: string | null
    blockReason: string | null
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    phone?: boolean
    cpf?: boolean
    type?: boolean
    status?: boolean
    kycStatus?: boolean
    avatarUrl?: boolean
    kycSubmittedAt?: boolean
    kycApprovedAt?: boolean
    kycRejectionReason?: boolean
    blockReason?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    sellerListings?: boolean | User$sellerListingsArgs<ExtArgs>
    buyerProposals?: boolean | User$buyerProposalsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    dealer?: boolean | User$dealerArgs<ExtArgs>
    inspectionsReviewed?: boolean | User$inspectionsReviewedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    phone?: boolean
    cpf?: boolean
    type?: boolean
    status?: boolean
    kycStatus?: boolean
    avatarUrl?: boolean
    kycSubmittedAt?: boolean
    kycApprovedAt?: boolean
    kycRejectionReason?: boolean
    blockReason?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    phone?: boolean
    cpf?: boolean
    type?: boolean
    status?: boolean
    kycStatus?: boolean
    avatarUrl?: boolean
    kycSubmittedAt?: boolean
    kycApprovedAt?: boolean
    kycRejectionReason?: boolean
    blockReason?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    phone?: boolean
    cpf?: boolean
    type?: boolean
    status?: boolean
    kycStatus?: boolean
    avatarUrl?: boolean
    kycSubmittedAt?: boolean
    kycApprovedAt?: boolean
    kycRejectionReason?: boolean
    blockReason?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "phone" | "cpf" | "type" | "status" | "kycStatus" | "avatarUrl" | "kycSubmittedAt" | "kycApprovedAt" | "kycRejectionReason" | "blockReason" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    sellerListings?: boolean | User$sellerListingsArgs<ExtArgs>
    buyerProposals?: boolean | User$buyerProposalsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    dealer?: boolean | User$dealerArgs<ExtArgs>
    inspectionsReviewed?: boolean | User$inspectionsReviewedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
      sellerListings: Prisma.$ListingPayload<ExtArgs>[]
      buyerProposals: Prisma.$ProposalPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      dealer: Prisma.$DealerPayload<ExtArgs> | null
      inspectionsReviewed: Prisma.$InspectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      phone: string | null
      cpf: string | null
      type: $Enums.UserType
      status: $Enums.UserStatus
      kycStatus: $Enums.KycStatus
      avatarUrl: string | null
      kycSubmittedAt: Date | null
      kycApprovedAt: Date | null
      kycRejectionReason: string | null
      blockReason: string | null
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicles<T extends User$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, User$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sellerListings<T extends User$sellerListingsArgs<ExtArgs> = {}>(args?: Subset<T, User$sellerListingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    buyerProposals<T extends User$buyerProposalsArgs<ExtArgs> = {}>(args?: Subset<T, User$buyerProposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMessages<T extends User$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dealer<T extends User$dealerArgs<ExtArgs> = {}>(args?: Subset<T, User$dealerArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    inspectionsReviewed<T extends User$inspectionsReviewedArgs<ExtArgs> = {}>(args?: Subset<T, User$inspectionsReviewedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly type: FieldRef<"User", 'UserType'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly kycStatus: FieldRef<"User", 'KycStatus'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly kycSubmittedAt: FieldRef<"User", 'DateTime'>
    readonly kycApprovedAt: FieldRef<"User", 'DateTime'>
    readonly kycRejectionReason: FieldRef<"User", 'String'>
    readonly blockReason: FieldRef<"User", 'String'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.vehicles
   */
  export type User$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * User.sellerListings
   */
  export type User$sellerListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    cursor?: ListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * User.buyerProposals
   */
  export type User$buyerProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.chatMessages
   */
  export type User$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.dealer
   */
  export type User$dealerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    where?: DealerWhereInput
  }

  /**
   * User.inspectionsReviewed
   */
  export type User$inspectionsReviewedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    where?: InspectionWhereInput
    orderBy?: InspectionOrderByWithRelationInput | InspectionOrderByWithRelationInput[]
    cursor?: InspectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InspectionScalarFieldEnum | InspectionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    userId: number
    tokenHash: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    userId: string
    tokenHash: string
    expiresAt: Date
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenHash" | "expiresAt" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenHash: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly tokenHash: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    year: number | null
    mileage: number | null
    fipePrice: number | null
  }

  export type VehicleSumAggregateOutputType = {
    year: number | null
    mileage: number | null
    fipePrice: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    plate: string | null
    chassis: string | null
    renavam: string | null
    brand: string | null
    model: string | null
    year: number | null
    color: string | null
    mileage: number | null
    fuelType: $Enums.FuelType | null
    transmission: $Enums.TransmissionType | null
    fipeCode: string | null
    fipePrice: number | null
    status: $Enums.VehicleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    plate: string | null
    chassis: string | null
    renavam: string | null
    brand: string | null
    model: string | null
    year: number | null
    color: string | null
    mileage: number | null
    fuelType: $Enums.FuelType | null
    transmission: $Enums.TransmissionType | null
    fipeCode: string | null
    fipePrice: number | null
    status: $Enums.VehicleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    ownerId: number
    plate: number
    chassis: number
    renavam: number
    brand: number
    model: number
    year: number
    color: number
    mileage: number
    fuelType: number
    transmission: number
    fipeCode: number
    fipePrice: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    year?: true
    mileage?: true
    fipePrice?: true
  }

  export type VehicleSumAggregateInputType = {
    year?: true
    mileage?: true
    fipePrice?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    ownerId?: true
    plate?: true
    chassis?: true
    renavam?: true
    brand?: true
    model?: true
    year?: true
    color?: true
    mileage?: true
    fuelType?: true
    transmission?: true
    fipeCode?: true
    fipePrice?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    ownerId?: true
    plate?: true
    chassis?: true
    renavam?: true
    brand?: true
    model?: true
    year?: true
    color?: true
    mileage?: true
    fuelType?: true
    transmission?: true
    fipeCode?: true
    fipePrice?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    ownerId?: true
    plate?: true
    chassis?: true
    renavam?: true
    brand?: true
    model?: true
    year?: true
    color?: true
    mileage?: true
    fuelType?: true
    transmission?: true
    fipeCode?: true
    fipePrice?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    ownerId: string
    plate: string | null
    chassis: string | null
    renavam: string | null
    brand: string | null
    model: string | null
    year: number | null
    color: string | null
    mileage: number
    fuelType: $Enums.FuelType | null
    transmission: $Enums.TransmissionType | null
    fipeCode: string | null
    fipePrice: number | null
    status: $Enums.VehicleStatus
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    plate?: boolean
    chassis?: boolean
    renavam?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    color?: boolean
    mileage?: boolean
    fuelType?: boolean
    transmission?: boolean
    fipeCode?: boolean
    fipePrice?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    inspections?: boolean | Vehicle$inspectionsArgs<ExtArgs>
    listings?: boolean | Vehicle$listingsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    plate?: boolean
    chassis?: boolean
    renavam?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    color?: boolean
    mileage?: boolean
    fuelType?: boolean
    transmission?: boolean
    fipeCode?: boolean
    fipePrice?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    plate?: boolean
    chassis?: boolean
    renavam?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    color?: boolean
    mileage?: boolean
    fuelType?: boolean
    transmission?: boolean
    fipeCode?: boolean
    fipePrice?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    ownerId?: boolean
    plate?: boolean
    chassis?: boolean
    renavam?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    color?: boolean
    mileage?: boolean
    fuelType?: boolean
    transmission?: boolean
    fipeCode?: boolean
    fipePrice?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "plate" | "chassis" | "renavam" | "brand" | "model" | "year" | "color" | "mileage" | "fuelType" | "transmission" | "fipeCode" | "fipePrice" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    inspections?: boolean | Vehicle$inspectionsArgs<ExtArgs>
    listings?: boolean | Vehicle$listingsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      inspections: Prisma.$InspectionPayload<ExtArgs>[]
      listings: Prisma.$ListingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      plate: string | null
      chassis: string | null
      renavam: string | null
      brand: string | null
      model: string | null
      year: number | null
      color: string | null
      mileage: number
      fuelType: $Enums.FuelType | null
      transmission: $Enums.TransmissionType | null
      fipeCode: string | null
      fipePrice: number | null
      status: $Enums.VehicleStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inspections<T extends Vehicle$inspectionsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$inspectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listings<T extends Vehicle$listingsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly ownerId: FieldRef<"Vehicle", 'String'>
    readonly plate: FieldRef<"Vehicle", 'String'>
    readonly chassis: FieldRef<"Vehicle", 'String'>
    readonly renavam: FieldRef<"Vehicle", 'String'>
    readonly brand: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly year: FieldRef<"Vehicle", 'Int'>
    readonly color: FieldRef<"Vehicle", 'String'>
    readonly mileage: FieldRef<"Vehicle", 'Int'>
    readonly fuelType: FieldRef<"Vehicle", 'FuelType'>
    readonly transmission: FieldRef<"Vehicle", 'TransmissionType'>
    readonly fipeCode: FieldRef<"Vehicle", 'String'>
    readonly fipePrice: FieldRef<"Vehicle", 'Float'>
    readonly status: FieldRef<"Vehicle", 'VehicleStatus'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.inspections
   */
  export type Vehicle$inspectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    where?: InspectionWhereInput
    orderBy?: InspectionOrderByWithRelationInput | InspectionOrderByWithRelationInput[]
    cursor?: InspectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InspectionScalarFieldEnum | InspectionScalarFieldEnum[]
  }

  /**
   * Vehicle.listings
   */
  export type Vehicle$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    cursor?: ListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model Inspection
   */

  export type AggregateInspection = {
    _count: InspectionCountAggregateOutputType | null
    _avg: InspectionAvgAggregateOutputType | null
    _sum: InspectionSumAggregateOutputType | null
    _min: InspectionMinAggregateOutputType | null
    _max: InspectionMaxAggregateOutputType | null
  }

  export type InspectionAvgAggregateOutputType = {
    score: number | null
  }

  export type InspectionSumAggregateOutputType = {
    score: number | null
  }

  export type InspectionMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    type: $Enums.InspectionType | null
    status: $Enums.InspectionStatus | null
    score: number | null
    reviewerId: string | null
    reviewedAt: Date | null
    reviewNotes: string | null
    aiProcessedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InspectionMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    type: $Enums.InspectionType | null
    status: $Enums.InspectionStatus | null
    score: number | null
    reviewerId: string | null
    reviewedAt: Date | null
    reviewNotes: string | null
    aiProcessedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InspectionCountAggregateOutputType = {
    id: number
    vehicleId: number
    type: number
    status: number
    score: number
    reviewerId: number
    reviewedAt: number
    reviewNotes: number
    aiFlags: number
    aiProcessedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InspectionAvgAggregateInputType = {
    score?: true
  }

  export type InspectionSumAggregateInputType = {
    score?: true
  }

  export type InspectionMinAggregateInputType = {
    id?: true
    vehicleId?: true
    type?: true
    status?: true
    score?: true
    reviewerId?: true
    reviewedAt?: true
    reviewNotes?: true
    aiProcessedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InspectionMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    type?: true
    status?: true
    score?: true
    reviewerId?: true
    reviewedAt?: true
    reviewNotes?: true
    aiProcessedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InspectionCountAggregateInputType = {
    id?: true
    vehicleId?: true
    type?: true
    status?: true
    score?: true
    reviewerId?: true
    reviewedAt?: true
    reviewNotes?: true
    aiFlags?: true
    aiProcessedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InspectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inspection to aggregate.
     */
    where?: InspectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inspections to fetch.
     */
    orderBy?: InspectionOrderByWithRelationInput | InspectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InspectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inspections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inspections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inspections
    **/
    _count?: true | InspectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InspectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InspectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InspectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InspectionMaxAggregateInputType
  }

  export type GetInspectionAggregateType<T extends InspectionAggregateArgs> = {
        [P in keyof T & keyof AggregateInspection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInspection[P]>
      : GetScalarType<T[P], AggregateInspection[P]>
  }




  export type InspectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspectionWhereInput
    orderBy?: InspectionOrderByWithAggregationInput | InspectionOrderByWithAggregationInput[]
    by: InspectionScalarFieldEnum[] | InspectionScalarFieldEnum
    having?: InspectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InspectionCountAggregateInputType | true
    _avg?: InspectionAvgAggregateInputType
    _sum?: InspectionSumAggregateInputType
    _min?: InspectionMinAggregateInputType
    _max?: InspectionMaxAggregateInputType
  }

  export type InspectionGroupByOutputType = {
    id: string
    vehicleId: string
    type: $Enums.InspectionType
    status: $Enums.InspectionStatus
    score: number | null
    reviewerId: string | null
    reviewedAt: Date | null
    reviewNotes: string | null
    aiFlags: string[]
    aiProcessedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: InspectionCountAggregateOutputType | null
    _avg: InspectionAvgAggregateOutputType | null
    _sum: InspectionSumAggregateOutputType | null
    _min: InspectionMinAggregateOutputType | null
    _max: InspectionMaxAggregateOutputType | null
  }

  type GetInspectionGroupByPayload<T extends InspectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InspectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InspectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InspectionGroupByOutputType[P]>
            : GetScalarType<T[P], InspectionGroupByOutputType[P]>
        }
      >
    >


  export type InspectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    type?: boolean
    status?: boolean
    score?: boolean
    reviewerId?: boolean
    reviewedAt?: boolean
    reviewNotes?: boolean
    aiFlags?: boolean
    aiProcessedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    reviewer?: boolean | Inspection$reviewerArgs<ExtArgs>
    media?: boolean | Inspection$mediaArgs<ExtArgs>
    items?: boolean | Inspection$itemsArgs<ExtArgs>
    _count?: boolean | InspectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inspection"]>

  export type InspectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    type?: boolean
    status?: boolean
    score?: boolean
    reviewerId?: boolean
    reviewedAt?: boolean
    reviewNotes?: boolean
    aiFlags?: boolean
    aiProcessedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    reviewer?: boolean | Inspection$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["inspection"]>

  export type InspectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    type?: boolean
    status?: boolean
    score?: boolean
    reviewerId?: boolean
    reviewedAt?: boolean
    reviewNotes?: boolean
    aiFlags?: boolean
    aiProcessedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    reviewer?: boolean | Inspection$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["inspection"]>

  export type InspectionSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    type?: boolean
    status?: boolean
    score?: boolean
    reviewerId?: boolean
    reviewedAt?: boolean
    reviewNotes?: boolean
    aiFlags?: boolean
    aiProcessedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InspectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "type" | "status" | "score" | "reviewerId" | "reviewedAt" | "reviewNotes" | "aiFlags" | "aiProcessedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["inspection"]>
  export type InspectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    reviewer?: boolean | Inspection$reviewerArgs<ExtArgs>
    media?: boolean | Inspection$mediaArgs<ExtArgs>
    items?: boolean | Inspection$itemsArgs<ExtArgs>
    _count?: boolean | InspectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InspectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    reviewer?: boolean | Inspection$reviewerArgs<ExtArgs>
  }
  export type InspectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    reviewer?: boolean | Inspection$reviewerArgs<ExtArgs>
  }

  export type $InspectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inspection"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      reviewer: Prisma.$UserPayload<ExtArgs> | null
      media: Prisma.$InspectionMediaPayload<ExtArgs>[]
      items: Prisma.$InspectionItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      type: $Enums.InspectionType
      status: $Enums.InspectionStatus
      score: number | null
      reviewerId: string | null
      reviewedAt: Date | null
      reviewNotes: string | null
      aiFlags: string[]
      aiProcessedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inspection"]>
    composites: {}
  }

  type InspectionGetPayload<S extends boolean | null | undefined | InspectionDefaultArgs> = $Result.GetResult<Prisma.$InspectionPayload, S>

  type InspectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InspectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InspectionCountAggregateInputType | true
    }

  export interface InspectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inspection'], meta: { name: 'Inspection' } }
    /**
     * Find zero or one Inspection that matches the filter.
     * @param {InspectionFindUniqueArgs} args - Arguments to find a Inspection
     * @example
     * // Get one Inspection
     * const inspection = await prisma.inspection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InspectionFindUniqueArgs>(args: SelectSubset<T, InspectionFindUniqueArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inspection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InspectionFindUniqueOrThrowArgs} args - Arguments to find a Inspection
     * @example
     * // Get one Inspection
     * const inspection = await prisma.inspection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InspectionFindUniqueOrThrowArgs>(args: SelectSubset<T, InspectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inspection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionFindFirstArgs} args - Arguments to find a Inspection
     * @example
     * // Get one Inspection
     * const inspection = await prisma.inspection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InspectionFindFirstArgs>(args?: SelectSubset<T, InspectionFindFirstArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inspection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionFindFirstOrThrowArgs} args - Arguments to find a Inspection
     * @example
     * // Get one Inspection
     * const inspection = await prisma.inspection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InspectionFindFirstOrThrowArgs>(args?: SelectSubset<T, InspectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inspections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inspections
     * const inspections = await prisma.inspection.findMany()
     * 
     * // Get first 10 Inspections
     * const inspections = await prisma.inspection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inspectionWithIdOnly = await prisma.inspection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InspectionFindManyArgs>(args?: SelectSubset<T, InspectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inspection.
     * @param {InspectionCreateArgs} args - Arguments to create a Inspection.
     * @example
     * // Create one Inspection
     * const Inspection = await prisma.inspection.create({
     *   data: {
     *     // ... data to create a Inspection
     *   }
     * })
     * 
     */
    create<T extends InspectionCreateArgs>(args: SelectSubset<T, InspectionCreateArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inspections.
     * @param {InspectionCreateManyArgs} args - Arguments to create many Inspections.
     * @example
     * // Create many Inspections
     * const inspection = await prisma.inspection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InspectionCreateManyArgs>(args?: SelectSubset<T, InspectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inspections and returns the data saved in the database.
     * @param {InspectionCreateManyAndReturnArgs} args - Arguments to create many Inspections.
     * @example
     * // Create many Inspections
     * const inspection = await prisma.inspection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inspections and only return the `id`
     * const inspectionWithIdOnly = await prisma.inspection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InspectionCreateManyAndReturnArgs>(args?: SelectSubset<T, InspectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inspection.
     * @param {InspectionDeleteArgs} args - Arguments to delete one Inspection.
     * @example
     * // Delete one Inspection
     * const Inspection = await prisma.inspection.delete({
     *   where: {
     *     // ... filter to delete one Inspection
     *   }
     * })
     * 
     */
    delete<T extends InspectionDeleteArgs>(args: SelectSubset<T, InspectionDeleteArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inspection.
     * @param {InspectionUpdateArgs} args - Arguments to update one Inspection.
     * @example
     * // Update one Inspection
     * const inspection = await prisma.inspection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InspectionUpdateArgs>(args: SelectSubset<T, InspectionUpdateArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inspections.
     * @param {InspectionDeleteManyArgs} args - Arguments to filter Inspections to delete.
     * @example
     * // Delete a few Inspections
     * const { count } = await prisma.inspection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InspectionDeleteManyArgs>(args?: SelectSubset<T, InspectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inspections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inspections
     * const inspection = await prisma.inspection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InspectionUpdateManyArgs>(args: SelectSubset<T, InspectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inspections and returns the data updated in the database.
     * @param {InspectionUpdateManyAndReturnArgs} args - Arguments to update many Inspections.
     * @example
     * // Update many Inspections
     * const inspection = await prisma.inspection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inspections and only return the `id`
     * const inspectionWithIdOnly = await prisma.inspection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InspectionUpdateManyAndReturnArgs>(args: SelectSubset<T, InspectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inspection.
     * @param {InspectionUpsertArgs} args - Arguments to update or create a Inspection.
     * @example
     * // Update or create a Inspection
     * const inspection = await prisma.inspection.upsert({
     *   create: {
     *     // ... data to create a Inspection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inspection we want to update
     *   }
     * })
     */
    upsert<T extends InspectionUpsertArgs>(args: SelectSubset<T, InspectionUpsertArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inspections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionCountArgs} args - Arguments to filter Inspections to count.
     * @example
     * // Count the number of Inspections
     * const count = await prisma.inspection.count({
     *   where: {
     *     // ... the filter for the Inspections we want to count
     *   }
     * })
    **/
    count<T extends InspectionCountArgs>(
      args?: Subset<T, InspectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InspectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inspection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InspectionAggregateArgs>(args: Subset<T, InspectionAggregateArgs>): Prisma.PrismaPromise<GetInspectionAggregateType<T>>

    /**
     * Group by Inspection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionGroupByArgs} args - Group by arguments.
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
      T extends InspectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InspectionGroupByArgs['orderBy'] }
        : { orderBy?: InspectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, InspectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInspectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inspection model
   */
  readonly fields: InspectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inspection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InspectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends Inspection$reviewerArgs<ExtArgs> = {}>(args?: Subset<T, Inspection$reviewerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    media<T extends Inspection$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Inspection$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    items<T extends Inspection$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Inspection$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inspection model
   */
  interface InspectionFieldRefs {
    readonly id: FieldRef<"Inspection", 'String'>
    readonly vehicleId: FieldRef<"Inspection", 'String'>
    readonly type: FieldRef<"Inspection", 'InspectionType'>
    readonly status: FieldRef<"Inspection", 'InspectionStatus'>
    readonly score: FieldRef<"Inspection", 'Int'>
    readonly reviewerId: FieldRef<"Inspection", 'String'>
    readonly reviewedAt: FieldRef<"Inspection", 'DateTime'>
    readonly reviewNotes: FieldRef<"Inspection", 'String'>
    readonly aiFlags: FieldRef<"Inspection", 'String[]'>
    readonly aiProcessedAt: FieldRef<"Inspection", 'DateTime'>
    readonly createdAt: FieldRef<"Inspection", 'DateTime'>
    readonly updatedAt: FieldRef<"Inspection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inspection findUnique
   */
  export type InspectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * Filter, which Inspection to fetch.
     */
    where: InspectionWhereUniqueInput
  }

  /**
   * Inspection findUniqueOrThrow
   */
  export type InspectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * Filter, which Inspection to fetch.
     */
    where: InspectionWhereUniqueInput
  }

  /**
   * Inspection findFirst
   */
  export type InspectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * Filter, which Inspection to fetch.
     */
    where?: InspectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inspections to fetch.
     */
    orderBy?: InspectionOrderByWithRelationInput | InspectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inspections.
     */
    cursor?: InspectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inspections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inspections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inspections.
     */
    distinct?: InspectionScalarFieldEnum | InspectionScalarFieldEnum[]
  }

  /**
   * Inspection findFirstOrThrow
   */
  export type InspectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * Filter, which Inspection to fetch.
     */
    where?: InspectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inspections to fetch.
     */
    orderBy?: InspectionOrderByWithRelationInput | InspectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inspections.
     */
    cursor?: InspectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inspections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inspections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inspections.
     */
    distinct?: InspectionScalarFieldEnum | InspectionScalarFieldEnum[]
  }

  /**
   * Inspection findMany
   */
  export type InspectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * Filter, which Inspections to fetch.
     */
    where?: InspectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inspections to fetch.
     */
    orderBy?: InspectionOrderByWithRelationInput | InspectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inspections.
     */
    cursor?: InspectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inspections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inspections.
     */
    skip?: number
    distinct?: InspectionScalarFieldEnum | InspectionScalarFieldEnum[]
  }

  /**
   * Inspection create
   */
  export type InspectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Inspection.
     */
    data: XOR<InspectionCreateInput, InspectionUncheckedCreateInput>
  }

  /**
   * Inspection createMany
   */
  export type InspectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inspections.
     */
    data: InspectionCreateManyInput | InspectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inspection createManyAndReturn
   */
  export type InspectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * The data used to create many Inspections.
     */
    data: InspectionCreateManyInput | InspectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inspection update
   */
  export type InspectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Inspection.
     */
    data: XOR<InspectionUpdateInput, InspectionUncheckedUpdateInput>
    /**
     * Choose, which Inspection to update.
     */
    where: InspectionWhereUniqueInput
  }

  /**
   * Inspection updateMany
   */
  export type InspectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inspections.
     */
    data: XOR<InspectionUpdateManyMutationInput, InspectionUncheckedUpdateManyInput>
    /**
     * Filter which Inspections to update
     */
    where?: InspectionWhereInput
    /**
     * Limit how many Inspections to update.
     */
    limit?: number
  }

  /**
   * Inspection updateManyAndReturn
   */
  export type InspectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * The data used to update Inspections.
     */
    data: XOR<InspectionUpdateManyMutationInput, InspectionUncheckedUpdateManyInput>
    /**
     * Filter which Inspections to update
     */
    where?: InspectionWhereInput
    /**
     * Limit how many Inspections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inspection upsert
   */
  export type InspectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Inspection to update in case it exists.
     */
    where: InspectionWhereUniqueInput
    /**
     * In case the Inspection found by the `where` argument doesn't exist, create a new Inspection with this data.
     */
    create: XOR<InspectionCreateInput, InspectionUncheckedCreateInput>
    /**
     * In case the Inspection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InspectionUpdateInput, InspectionUncheckedUpdateInput>
  }

  /**
   * Inspection delete
   */
  export type InspectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
    /**
     * Filter which Inspection to delete.
     */
    where: InspectionWhereUniqueInput
  }

  /**
   * Inspection deleteMany
   */
  export type InspectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inspections to delete
     */
    where?: InspectionWhereInput
    /**
     * Limit how many Inspections to delete.
     */
    limit?: number
  }

  /**
   * Inspection.reviewer
   */
  export type Inspection$reviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Inspection.media
   */
  export type Inspection$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionMedia
     */
    select?: InspectionMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionMedia
     */
    omit?: InspectionMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionMediaInclude<ExtArgs> | null
    where?: InspectionMediaWhereInput
    orderBy?: InspectionMediaOrderByWithRelationInput | InspectionMediaOrderByWithRelationInput[]
    cursor?: InspectionMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InspectionMediaScalarFieldEnum | InspectionMediaScalarFieldEnum[]
  }

  /**
   * Inspection.items
   */
  export type Inspection$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionItem
     */
    select?: InspectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionItem
     */
    omit?: InspectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionItemInclude<ExtArgs> | null
    where?: InspectionItemWhereInput
    orderBy?: InspectionItemOrderByWithRelationInput | InspectionItemOrderByWithRelationInput[]
    cursor?: InspectionItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InspectionItemScalarFieldEnum | InspectionItemScalarFieldEnum[]
  }

  /**
   * Inspection without action
   */
  export type InspectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspection
     */
    select?: InspectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspection
     */
    omit?: InspectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionInclude<ExtArgs> | null
  }


  /**
   * Model InspectionMedia
   */

  export type AggregateInspectionMedia = {
    _count: InspectionMediaCountAggregateOutputType | null
    _min: InspectionMediaMinAggregateOutputType | null
    _max: InspectionMediaMaxAggregateOutputType | null
  }

  export type InspectionMediaMinAggregateOutputType = {
    id: string | null
    inspectionId: string | null
    type: $Enums.MediaType | null
    url: string | null
    key: string | null
    hash: string | null
    createdAt: Date | null
  }

  export type InspectionMediaMaxAggregateOutputType = {
    id: string | null
    inspectionId: string | null
    type: $Enums.MediaType | null
    url: string | null
    key: string | null
    hash: string | null
    createdAt: Date | null
  }

  export type InspectionMediaCountAggregateOutputType = {
    id: number
    inspectionId: number
    type: number
    url: number
    key: number
    hash: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type InspectionMediaMinAggregateInputType = {
    id?: true
    inspectionId?: true
    type?: true
    url?: true
    key?: true
    hash?: true
    createdAt?: true
  }

  export type InspectionMediaMaxAggregateInputType = {
    id?: true
    inspectionId?: true
    type?: true
    url?: true
    key?: true
    hash?: true
    createdAt?: true
  }

  export type InspectionMediaCountAggregateInputType = {
    id?: true
    inspectionId?: true
    type?: true
    url?: true
    key?: true
    hash?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type InspectionMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InspectionMedia to aggregate.
     */
    where?: InspectionMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InspectionMedias to fetch.
     */
    orderBy?: InspectionMediaOrderByWithRelationInput | InspectionMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InspectionMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InspectionMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InspectionMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InspectionMedias
    **/
    _count?: true | InspectionMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InspectionMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InspectionMediaMaxAggregateInputType
  }

  export type GetInspectionMediaAggregateType<T extends InspectionMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateInspectionMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInspectionMedia[P]>
      : GetScalarType<T[P], AggregateInspectionMedia[P]>
  }




  export type InspectionMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspectionMediaWhereInput
    orderBy?: InspectionMediaOrderByWithAggregationInput | InspectionMediaOrderByWithAggregationInput[]
    by: InspectionMediaScalarFieldEnum[] | InspectionMediaScalarFieldEnum
    having?: InspectionMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InspectionMediaCountAggregateInputType | true
    _min?: InspectionMediaMinAggregateInputType
    _max?: InspectionMediaMaxAggregateInputType
  }

  export type InspectionMediaGroupByOutputType = {
    id: string
    inspectionId: string
    type: $Enums.MediaType
    url: string
    key: string
    hash: string
    metadata: JsonValue | null
    createdAt: Date
    _count: InspectionMediaCountAggregateOutputType | null
    _min: InspectionMediaMinAggregateOutputType | null
    _max: InspectionMediaMaxAggregateOutputType | null
  }

  type GetInspectionMediaGroupByPayload<T extends InspectionMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InspectionMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InspectionMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InspectionMediaGroupByOutputType[P]>
            : GetScalarType<T[P], InspectionMediaGroupByOutputType[P]>
        }
      >
    >


  export type InspectionMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inspectionId?: boolean
    type?: boolean
    url?: boolean
    key?: boolean
    hash?: boolean
    metadata?: boolean
    createdAt?: boolean
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inspectionMedia"]>

  export type InspectionMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inspectionId?: boolean
    type?: boolean
    url?: boolean
    key?: boolean
    hash?: boolean
    metadata?: boolean
    createdAt?: boolean
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inspectionMedia"]>

  export type InspectionMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inspectionId?: boolean
    type?: boolean
    url?: boolean
    key?: boolean
    hash?: boolean
    metadata?: boolean
    createdAt?: boolean
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inspectionMedia"]>

  export type InspectionMediaSelectScalar = {
    id?: boolean
    inspectionId?: boolean
    type?: boolean
    url?: boolean
    key?: boolean
    hash?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type InspectionMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inspectionId" | "type" | "url" | "key" | "hash" | "metadata" | "createdAt", ExtArgs["result"]["inspectionMedia"]>
  export type InspectionMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
  }
  export type InspectionMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
  }
  export type InspectionMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
  }

  export type $InspectionMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InspectionMedia"
    objects: {
      inspection: Prisma.$InspectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inspectionId: string
      type: $Enums.MediaType
      url: string
      key: string
      hash: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["inspectionMedia"]>
    composites: {}
  }

  type InspectionMediaGetPayload<S extends boolean | null | undefined | InspectionMediaDefaultArgs> = $Result.GetResult<Prisma.$InspectionMediaPayload, S>

  type InspectionMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InspectionMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InspectionMediaCountAggregateInputType | true
    }

  export interface InspectionMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InspectionMedia'], meta: { name: 'InspectionMedia' } }
    /**
     * Find zero or one InspectionMedia that matches the filter.
     * @param {InspectionMediaFindUniqueArgs} args - Arguments to find a InspectionMedia
     * @example
     * // Get one InspectionMedia
     * const inspectionMedia = await prisma.inspectionMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InspectionMediaFindUniqueArgs>(args: SelectSubset<T, InspectionMediaFindUniqueArgs<ExtArgs>>): Prisma__InspectionMediaClient<$Result.GetResult<Prisma.$InspectionMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InspectionMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InspectionMediaFindUniqueOrThrowArgs} args - Arguments to find a InspectionMedia
     * @example
     * // Get one InspectionMedia
     * const inspectionMedia = await prisma.inspectionMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InspectionMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, InspectionMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InspectionMediaClient<$Result.GetResult<Prisma.$InspectionMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InspectionMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionMediaFindFirstArgs} args - Arguments to find a InspectionMedia
     * @example
     * // Get one InspectionMedia
     * const inspectionMedia = await prisma.inspectionMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InspectionMediaFindFirstArgs>(args?: SelectSubset<T, InspectionMediaFindFirstArgs<ExtArgs>>): Prisma__InspectionMediaClient<$Result.GetResult<Prisma.$InspectionMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InspectionMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionMediaFindFirstOrThrowArgs} args - Arguments to find a InspectionMedia
     * @example
     * // Get one InspectionMedia
     * const inspectionMedia = await prisma.inspectionMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InspectionMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, InspectionMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__InspectionMediaClient<$Result.GetResult<Prisma.$InspectionMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InspectionMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InspectionMedias
     * const inspectionMedias = await prisma.inspectionMedia.findMany()
     * 
     * // Get first 10 InspectionMedias
     * const inspectionMedias = await prisma.inspectionMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inspectionMediaWithIdOnly = await prisma.inspectionMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InspectionMediaFindManyArgs>(args?: SelectSubset<T, InspectionMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InspectionMedia.
     * @param {InspectionMediaCreateArgs} args - Arguments to create a InspectionMedia.
     * @example
     * // Create one InspectionMedia
     * const InspectionMedia = await prisma.inspectionMedia.create({
     *   data: {
     *     // ... data to create a InspectionMedia
     *   }
     * })
     * 
     */
    create<T extends InspectionMediaCreateArgs>(args: SelectSubset<T, InspectionMediaCreateArgs<ExtArgs>>): Prisma__InspectionMediaClient<$Result.GetResult<Prisma.$InspectionMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InspectionMedias.
     * @param {InspectionMediaCreateManyArgs} args - Arguments to create many InspectionMedias.
     * @example
     * // Create many InspectionMedias
     * const inspectionMedia = await prisma.inspectionMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InspectionMediaCreateManyArgs>(args?: SelectSubset<T, InspectionMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InspectionMedias and returns the data saved in the database.
     * @param {InspectionMediaCreateManyAndReturnArgs} args - Arguments to create many InspectionMedias.
     * @example
     * // Create many InspectionMedias
     * const inspectionMedia = await prisma.inspectionMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InspectionMedias and only return the `id`
     * const inspectionMediaWithIdOnly = await prisma.inspectionMedia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InspectionMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, InspectionMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InspectionMedia.
     * @param {InspectionMediaDeleteArgs} args - Arguments to delete one InspectionMedia.
     * @example
     * // Delete one InspectionMedia
     * const InspectionMedia = await prisma.inspectionMedia.delete({
     *   where: {
     *     // ... filter to delete one InspectionMedia
     *   }
     * })
     * 
     */
    delete<T extends InspectionMediaDeleteArgs>(args: SelectSubset<T, InspectionMediaDeleteArgs<ExtArgs>>): Prisma__InspectionMediaClient<$Result.GetResult<Prisma.$InspectionMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InspectionMedia.
     * @param {InspectionMediaUpdateArgs} args - Arguments to update one InspectionMedia.
     * @example
     * // Update one InspectionMedia
     * const inspectionMedia = await prisma.inspectionMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InspectionMediaUpdateArgs>(args: SelectSubset<T, InspectionMediaUpdateArgs<ExtArgs>>): Prisma__InspectionMediaClient<$Result.GetResult<Prisma.$InspectionMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InspectionMedias.
     * @param {InspectionMediaDeleteManyArgs} args - Arguments to filter InspectionMedias to delete.
     * @example
     * // Delete a few InspectionMedias
     * const { count } = await prisma.inspectionMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InspectionMediaDeleteManyArgs>(args?: SelectSubset<T, InspectionMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InspectionMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InspectionMedias
     * const inspectionMedia = await prisma.inspectionMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InspectionMediaUpdateManyArgs>(args: SelectSubset<T, InspectionMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InspectionMedias and returns the data updated in the database.
     * @param {InspectionMediaUpdateManyAndReturnArgs} args - Arguments to update many InspectionMedias.
     * @example
     * // Update many InspectionMedias
     * const inspectionMedia = await prisma.inspectionMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InspectionMedias and only return the `id`
     * const inspectionMediaWithIdOnly = await prisma.inspectionMedia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InspectionMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, InspectionMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InspectionMedia.
     * @param {InspectionMediaUpsertArgs} args - Arguments to update or create a InspectionMedia.
     * @example
     * // Update or create a InspectionMedia
     * const inspectionMedia = await prisma.inspectionMedia.upsert({
     *   create: {
     *     // ... data to create a InspectionMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InspectionMedia we want to update
     *   }
     * })
     */
    upsert<T extends InspectionMediaUpsertArgs>(args: SelectSubset<T, InspectionMediaUpsertArgs<ExtArgs>>): Prisma__InspectionMediaClient<$Result.GetResult<Prisma.$InspectionMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InspectionMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionMediaCountArgs} args - Arguments to filter InspectionMedias to count.
     * @example
     * // Count the number of InspectionMedias
     * const count = await prisma.inspectionMedia.count({
     *   where: {
     *     // ... the filter for the InspectionMedias we want to count
     *   }
     * })
    **/
    count<T extends InspectionMediaCountArgs>(
      args?: Subset<T, InspectionMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InspectionMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InspectionMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InspectionMediaAggregateArgs>(args: Subset<T, InspectionMediaAggregateArgs>): Prisma.PrismaPromise<GetInspectionMediaAggregateType<T>>

    /**
     * Group by InspectionMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionMediaGroupByArgs} args - Group by arguments.
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
      T extends InspectionMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InspectionMediaGroupByArgs['orderBy'] }
        : { orderBy?: InspectionMediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, InspectionMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInspectionMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InspectionMedia model
   */
  readonly fields: InspectionMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InspectionMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InspectionMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inspection<T extends InspectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InspectionDefaultArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InspectionMedia model
   */
  interface InspectionMediaFieldRefs {
    readonly id: FieldRef<"InspectionMedia", 'String'>
    readonly inspectionId: FieldRef<"InspectionMedia", 'String'>
    readonly type: FieldRef<"InspectionMedia", 'MediaType'>
    readonly url: FieldRef<"InspectionMedia", 'String'>
    readonly key: FieldRef<"InspectionMedia", 'String'>
    readonly hash: FieldRef<"InspectionMedia", 'String'>
    readonly metadata: FieldRef<"InspectionMedia", 'Json'>
    readonly createdAt: FieldRef<"InspectionMedia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InspectionMedia findUnique
   */
  export type InspectionMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionMedia
     */
    select?: InspectionMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionMedia
     */
    omit?: InspectionMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionMediaInclude<ExtArgs> | null
    /**
     * Filter, which InspectionMedia to fetch.
     */
    where: InspectionMediaWhereUniqueInput
  }

  /**
   * InspectionMedia findUniqueOrThrow
   */
  export type InspectionMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionMedia
     */
    select?: InspectionMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionMedia
     */
    omit?: InspectionMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionMediaInclude<ExtArgs> | null
    /**
     * Filter, which InspectionMedia to fetch.
     */
    where: InspectionMediaWhereUniqueInput
  }

  /**
   * InspectionMedia findFirst
   */
  export type InspectionMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionMedia
     */
    select?: InspectionMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionMedia
     */
    omit?: InspectionMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionMediaInclude<ExtArgs> | null
    /**
     * Filter, which InspectionMedia to fetch.
     */
    where?: InspectionMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InspectionMedias to fetch.
     */
    orderBy?: InspectionMediaOrderByWithRelationInput | InspectionMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InspectionMedias.
     */
    cursor?: InspectionMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InspectionMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InspectionMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InspectionMedias.
     */
    distinct?: InspectionMediaScalarFieldEnum | InspectionMediaScalarFieldEnum[]
  }

  /**
   * InspectionMedia findFirstOrThrow
   */
  export type InspectionMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionMedia
     */
    select?: InspectionMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionMedia
     */
    omit?: InspectionMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionMediaInclude<ExtArgs> | null
    /**
     * Filter, which InspectionMedia to fetch.
     */
    where?: InspectionMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InspectionMedias to fetch.
     */
    orderBy?: InspectionMediaOrderByWithRelationInput | InspectionMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InspectionMedias.
     */
    cursor?: InspectionMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InspectionMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InspectionMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InspectionMedias.
     */
    distinct?: InspectionMediaScalarFieldEnum | InspectionMediaScalarFieldEnum[]
  }

  /**
   * InspectionMedia findMany
   */
  export type InspectionMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionMedia
     */
    select?: InspectionMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionMedia
     */
    omit?: InspectionMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionMediaInclude<ExtArgs> | null
    /**
     * Filter, which InspectionMedias to fetch.
     */
    where?: InspectionMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InspectionMedias to fetch.
     */
    orderBy?: InspectionMediaOrderByWithRelationInput | InspectionMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InspectionMedias.
     */
    cursor?: InspectionMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InspectionMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InspectionMedias.
     */
    skip?: number
    distinct?: InspectionMediaScalarFieldEnum | InspectionMediaScalarFieldEnum[]
  }

  /**
   * InspectionMedia create
   */
  export type InspectionMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionMedia
     */
    select?: InspectionMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionMedia
     */
    omit?: InspectionMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a InspectionMedia.
     */
    data: XOR<InspectionMediaCreateInput, InspectionMediaUncheckedCreateInput>
  }

  /**
   * InspectionMedia createMany
   */
  export type InspectionMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InspectionMedias.
     */
    data: InspectionMediaCreateManyInput | InspectionMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InspectionMedia createManyAndReturn
   */
  export type InspectionMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionMedia
     */
    select?: InspectionMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionMedia
     */
    omit?: InspectionMediaOmit<ExtArgs> | null
    /**
     * The data used to create many InspectionMedias.
     */
    data: InspectionMediaCreateManyInput | InspectionMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InspectionMedia update
   */
  export type InspectionMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionMedia
     */
    select?: InspectionMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionMedia
     */
    omit?: InspectionMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a InspectionMedia.
     */
    data: XOR<InspectionMediaUpdateInput, InspectionMediaUncheckedUpdateInput>
    /**
     * Choose, which InspectionMedia to update.
     */
    where: InspectionMediaWhereUniqueInput
  }

  /**
   * InspectionMedia updateMany
   */
  export type InspectionMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InspectionMedias.
     */
    data: XOR<InspectionMediaUpdateManyMutationInput, InspectionMediaUncheckedUpdateManyInput>
    /**
     * Filter which InspectionMedias to update
     */
    where?: InspectionMediaWhereInput
    /**
     * Limit how many InspectionMedias to update.
     */
    limit?: number
  }

  /**
   * InspectionMedia updateManyAndReturn
   */
  export type InspectionMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionMedia
     */
    select?: InspectionMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionMedia
     */
    omit?: InspectionMediaOmit<ExtArgs> | null
    /**
     * The data used to update InspectionMedias.
     */
    data: XOR<InspectionMediaUpdateManyMutationInput, InspectionMediaUncheckedUpdateManyInput>
    /**
     * Filter which InspectionMedias to update
     */
    where?: InspectionMediaWhereInput
    /**
     * Limit how many InspectionMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InspectionMedia upsert
   */
  export type InspectionMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionMedia
     */
    select?: InspectionMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionMedia
     */
    omit?: InspectionMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the InspectionMedia to update in case it exists.
     */
    where: InspectionMediaWhereUniqueInput
    /**
     * In case the InspectionMedia found by the `where` argument doesn't exist, create a new InspectionMedia with this data.
     */
    create: XOR<InspectionMediaCreateInput, InspectionMediaUncheckedCreateInput>
    /**
     * In case the InspectionMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InspectionMediaUpdateInput, InspectionMediaUncheckedUpdateInput>
  }

  /**
   * InspectionMedia delete
   */
  export type InspectionMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionMedia
     */
    select?: InspectionMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionMedia
     */
    omit?: InspectionMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionMediaInclude<ExtArgs> | null
    /**
     * Filter which InspectionMedia to delete.
     */
    where: InspectionMediaWhereUniqueInput
  }

  /**
   * InspectionMedia deleteMany
   */
  export type InspectionMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InspectionMedias to delete
     */
    where?: InspectionMediaWhereInput
    /**
     * Limit how many InspectionMedias to delete.
     */
    limit?: number
  }

  /**
   * InspectionMedia without action
   */
  export type InspectionMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionMedia
     */
    select?: InspectionMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionMedia
     */
    omit?: InspectionMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionMediaInclude<ExtArgs> | null
  }


  /**
   * Model InspectionItem
   */

  export type AggregateInspectionItem = {
    _count: InspectionItemCountAggregateOutputType | null
    _avg: InspectionItemAvgAggregateOutputType | null
    _sum: InspectionItemSumAggregateOutputType | null
    _min: InspectionItemMinAggregateOutputType | null
    _max: InspectionItemMaxAggregateOutputType | null
  }

  export type InspectionItemAvgAggregateOutputType = {
    score: number | null
  }

  export type InspectionItemSumAggregateOutputType = {
    score: number | null
  }

  export type InspectionItemMinAggregateOutputType = {
    id: string | null
    inspectionId: string | null
    category: string | null
    item: string | null
    result: string | null
    score: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type InspectionItemMaxAggregateOutputType = {
    id: string | null
    inspectionId: string | null
    category: string | null
    item: string | null
    result: string | null
    score: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type InspectionItemCountAggregateOutputType = {
    id: number
    inspectionId: number
    category: number
    item: number
    result: number
    score: number
    notes: number
    createdAt: number
    _all: number
  }


  export type InspectionItemAvgAggregateInputType = {
    score?: true
  }

  export type InspectionItemSumAggregateInputType = {
    score?: true
  }

  export type InspectionItemMinAggregateInputType = {
    id?: true
    inspectionId?: true
    category?: true
    item?: true
    result?: true
    score?: true
    notes?: true
    createdAt?: true
  }

  export type InspectionItemMaxAggregateInputType = {
    id?: true
    inspectionId?: true
    category?: true
    item?: true
    result?: true
    score?: true
    notes?: true
    createdAt?: true
  }

  export type InspectionItemCountAggregateInputType = {
    id?: true
    inspectionId?: true
    category?: true
    item?: true
    result?: true
    score?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type InspectionItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InspectionItem to aggregate.
     */
    where?: InspectionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InspectionItems to fetch.
     */
    orderBy?: InspectionItemOrderByWithRelationInput | InspectionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InspectionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InspectionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InspectionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InspectionItems
    **/
    _count?: true | InspectionItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InspectionItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InspectionItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InspectionItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InspectionItemMaxAggregateInputType
  }

  export type GetInspectionItemAggregateType<T extends InspectionItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInspectionItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInspectionItem[P]>
      : GetScalarType<T[P], AggregateInspectionItem[P]>
  }




  export type InspectionItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspectionItemWhereInput
    orderBy?: InspectionItemOrderByWithAggregationInput | InspectionItemOrderByWithAggregationInput[]
    by: InspectionItemScalarFieldEnum[] | InspectionItemScalarFieldEnum
    having?: InspectionItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InspectionItemCountAggregateInputType | true
    _avg?: InspectionItemAvgAggregateInputType
    _sum?: InspectionItemSumAggregateInputType
    _min?: InspectionItemMinAggregateInputType
    _max?: InspectionItemMaxAggregateInputType
  }

  export type InspectionItemGroupByOutputType = {
    id: string
    inspectionId: string
    category: string
    item: string
    result: string
    score: number | null
    notes: string | null
    createdAt: Date
    _count: InspectionItemCountAggregateOutputType | null
    _avg: InspectionItemAvgAggregateOutputType | null
    _sum: InspectionItemSumAggregateOutputType | null
    _min: InspectionItemMinAggregateOutputType | null
    _max: InspectionItemMaxAggregateOutputType | null
  }

  type GetInspectionItemGroupByPayload<T extends InspectionItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InspectionItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InspectionItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InspectionItemGroupByOutputType[P]>
            : GetScalarType<T[P], InspectionItemGroupByOutputType[P]>
        }
      >
    >


  export type InspectionItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inspectionId?: boolean
    category?: boolean
    item?: boolean
    result?: boolean
    score?: boolean
    notes?: boolean
    createdAt?: boolean
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inspectionItem"]>

  export type InspectionItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inspectionId?: boolean
    category?: boolean
    item?: boolean
    result?: boolean
    score?: boolean
    notes?: boolean
    createdAt?: boolean
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inspectionItem"]>

  export type InspectionItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inspectionId?: boolean
    category?: boolean
    item?: boolean
    result?: boolean
    score?: boolean
    notes?: boolean
    createdAt?: boolean
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inspectionItem"]>

  export type InspectionItemSelectScalar = {
    id?: boolean
    inspectionId?: boolean
    category?: boolean
    item?: boolean
    result?: boolean
    score?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type InspectionItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inspectionId" | "category" | "item" | "result" | "score" | "notes" | "createdAt", ExtArgs["result"]["inspectionItem"]>
  export type InspectionItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
  }
  export type InspectionItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
  }
  export type InspectionItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inspection?: boolean | InspectionDefaultArgs<ExtArgs>
  }

  export type $InspectionItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InspectionItem"
    objects: {
      inspection: Prisma.$InspectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inspectionId: string
      category: string
      item: string
      result: string
      score: number | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["inspectionItem"]>
    composites: {}
  }

  type InspectionItemGetPayload<S extends boolean | null | undefined | InspectionItemDefaultArgs> = $Result.GetResult<Prisma.$InspectionItemPayload, S>

  type InspectionItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InspectionItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InspectionItemCountAggregateInputType | true
    }

  export interface InspectionItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InspectionItem'], meta: { name: 'InspectionItem' } }
    /**
     * Find zero or one InspectionItem that matches the filter.
     * @param {InspectionItemFindUniqueArgs} args - Arguments to find a InspectionItem
     * @example
     * // Get one InspectionItem
     * const inspectionItem = await prisma.inspectionItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InspectionItemFindUniqueArgs>(args: SelectSubset<T, InspectionItemFindUniqueArgs<ExtArgs>>): Prisma__InspectionItemClient<$Result.GetResult<Prisma.$InspectionItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InspectionItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InspectionItemFindUniqueOrThrowArgs} args - Arguments to find a InspectionItem
     * @example
     * // Get one InspectionItem
     * const inspectionItem = await prisma.inspectionItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InspectionItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InspectionItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InspectionItemClient<$Result.GetResult<Prisma.$InspectionItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InspectionItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionItemFindFirstArgs} args - Arguments to find a InspectionItem
     * @example
     * // Get one InspectionItem
     * const inspectionItem = await prisma.inspectionItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InspectionItemFindFirstArgs>(args?: SelectSubset<T, InspectionItemFindFirstArgs<ExtArgs>>): Prisma__InspectionItemClient<$Result.GetResult<Prisma.$InspectionItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InspectionItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionItemFindFirstOrThrowArgs} args - Arguments to find a InspectionItem
     * @example
     * // Get one InspectionItem
     * const inspectionItem = await prisma.inspectionItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InspectionItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InspectionItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InspectionItemClient<$Result.GetResult<Prisma.$InspectionItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InspectionItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InspectionItems
     * const inspectionItems = await prisma.inspectionItem.findMany()
     * 
     * // Get first 10 InspectionItems
     * const inspectionItems = await prisma.inspectionItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inspectionItemWithIdOnly = await prisma.inspectionItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InspectionItemFindManyArgs>(args?: SelectSubset<T, InspectionItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InspectionItem.
     * @param {InspectionItemCreateArgs} args - Arguments to create a InspectionItem.
     * @example
     * // Create one InspectionItem
     * const InspectionItem = await prisma.inspectionItem.create({
     *   data: {
     *     // ... data to create a InspectionItem
     *   }
     * })
     * 
     */
    create<T extends InspectionItemCreateArgs>(args: SelectSubset<T, InspectionItemCreateArgs<ExtArgs>>): Prisma__InspectionItemClient<$Result.GetResult<Prisma.$InspectionItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InspectionItems.
     * @param {InspectionItemCreateManyArgs} args - Arguments to create many InspectionItems.
     * @example
     * // Create many InspectionItems
     * const inspectionItem = await prisma.inspectionItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InspectionItemCreateManyArgs>(args?: SelectSubset<T, InspectionItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InspectionItems and returns the data saved in the database.
     * @param {InspectionItemCreateManyAndReturnArgs} args - Arguments to create many InspectionItems.
     * @example
     * // Create many InspectionItems
     * const inspectionItem = await prisma.inspectionItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InspectionItems and only return the `id`
     * const inspectionItemWithIdOnly = await prisma.inspectionItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InspectionItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InspectionItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InspectionItem.
     * @param {InspectionItemDeleteArgs} args - Arguments to delete one InspectionItem.
     * @example
     * // Delete one InspectionItem
     * const InspectionItem = await prisma.inspectionItem.delete({
     *   where: {
     *     // ... filter to delete one InspectionItem
     *   }
     * })
     * 
     */
    delete<T extends InspectionItemDeleteArgs>(args: SelectSubset<T, InspectionItemDeleteArgs<ExtArgs>>): Prisma__InspectionItemClient<$Result.GetResult<Prisma.$InspectionItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InspectionItem.
     * @param {InspectionItemUpdateArgs} args - Arguments to update one InspectionItem.
     * @example
     * // Update one InspectionItem
     * const inspectionItem = await prisma.inspectionItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InspectionItemUpdateArgs>(args: SelectSubset<T, InspectionItemUpdateArgs<ExtArgs>>): Prisma__InspectionItemClient<$Result.GetResult<Prisma.$InspectionItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InspectionItems.
     * @param {InspectionItemDeleteManyArgs} args - Arguments to filter InspectionItems to delete.
     * @example
     * // Delete a few InspectionItems
     * const { count } = await prisma.inspectionItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InspectionItemDeleteManyArgs>(args?: SelectSubset<T, InspectionItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InspectionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InspectionItems
     * const inspectionItem = await prisma.inspectionItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InspectionItemUpdateManyArgs>(args: SelectSubset<T, InspectionItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InspectionItems and returns the data updated in the database.
     * @param {InspectionItemUpdateManyAndReturnArgs} args - Arguments to update many InspectionItems.
     * @example
     * // Update many InspectionItems
     * const inspectionItem = await prisma.inspectionItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InspectionItems and only return the `id`
     * const inspectionItemWithIdOnly = await prisma.inspectionItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InspectionItemUpdateManyAndReturnArgs>(args: SelectSubset<T, InspectionItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspectionItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InspectionItem.
     * @param {InspectionItemUpsertArgs} args - Arguments to update or create a InspectionItem.
     * @example
     * // Update or create a InspectionItem
     * const inspectionItem = await prisma.inspectionItem.upsert({
     *   create: {
     *     // ... data to create a InspectionItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InspectionItem we want to update
     *   }
     * })
     */
    upsert<T extends InspectionItemUpsertArgs>(args: SelectSubset<T, InspectionItemUpsertArgs<ExtArgs>>): Prisma__InspectionItemClient<$Result.GetResult<Prisma.$InspectionItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InspectionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionItemCountArgs} args - Arguments to filter InspectionItems to count.
     * @example
     * // Count the number of InspectionItems
     * const count = await prisma.inspectionItem.count({
     *   where: {
     *     // ... the filter for the InspectionItems we want to count
     *   }
     * })
    **/
    count<T extends InspectionItemCountArgs>(
      args?: Subset<T, InspectionItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InspectionItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InspectionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InspectionItemAggregateArgs>(args: Subset<T, InspectionItemAggregateArgs>): Prisma.PrismaPromise<GetInspectionItemAggregateType<T>>

    /**
     * Group by InspectionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspectionItemGroupByArgs} args - Group by arguments.
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
      T extends InspectionItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InspectionItemGroupByArgs['orderBy'] }
        : { orderBy?: InspectionItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, InspectionItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInspectionItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InspectionItem model
   */
  readonly fields: InspectionItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InspectionItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InspectionItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inspection<T extends InspectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InspectionDefaultArgs<ExtArgs>>): Prisma__InspectionClient<$Result.GetResult<Prisma.$InspectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InspectionItem model
   */
  interface InspectionItemFieldRefs {
    readonly id: FieldRef<"InspectionItem", 'String'>
    readonly inspectionId: FieldRef<"InspectionItem", 'String'>
    readonly category: FieldRef<"InspectionItem", 'String'>
    readonly item: FieldRef<"InspectionItem", 'String'>
    readonly result: FieldRef<"InspectionItem", 'String'>
    readonly score: FieldRef<"InspectionItem", 'Int'>
    readonly notes: FieldRef<"InspectionItem", 'String'>
    readonly createdAt: FieldRef<"InspectionItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InspectionItem findUnique
   */
  export type InspectionItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionItem
     */
    select?: InspectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionItem
     */
    omit?: InspectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionItemInclude<ExtArgs> | null
    /**
     * Filter, which InspectionItem to fetch.
     */
    where: InspectionItemWhereUniqueInput
  }

  /**
   * InspectionItem findUniqueOrThrow
   */
  export type InspectionItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionItem
     */
    select?: InspectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionItem
     */
    omit?: InspectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionItemInclude<ExtArgs> | null
    /**
     * Filter, which InspectionItem to fetch.
     */
    where: InspectionItemWhereUniqueInput
  }

  /**
   * InspectionItem findFirst
   */
  export type InspectionItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionItem
     */
    select?: InspectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionItem
     */
    omit?: InspectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionItemInclude<ExtArgs> | null
    /**
     * Filter, which InspectionItem to fetch.
     */
    where?: InspectionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InspectionItems to fetch.
     */
    orderBy?: InspectionItemOrderByWithRelationInput | InspectionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InspectionItems.
     */
    cursor?: InspectionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InspectionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InspectionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InspectionItems.
     */
    distinct?: InspectionItemScalarFieldEnum | InspectionItemScalarFieldEnum[]
  }

  /**
   * InspectionItem findFirstOrThrow
   */
  export type InspectionItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionItem
     */
    select?: InspectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionItem
     */
    omit?: InspectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionItemInclude<ExtArgs> | null
    /**
     * Filter, which InspectionItem to fetch.
     */
    where?: InspectionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InspectionItems to fetch.
     */
    orderBy?: InspectionItemOrderByWithRelationInput | InspectionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InspectionItems.
     */
    cursor?: InspectionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InspectionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InspectionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InspectionItems.
     */
    distinct?: InspectionItemScalarFieldEnum | InspectionItemScalarFieldEnum[]
  }

  /**
   * InspectionItem findMany
   */
  export type InspectionItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionItem
     */
    select?: InspectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionItem
     */
    omit?: InspectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionItemInclude<ExtArgs> | null
    /**
     * Filter, which InspectionItems to fetch.
     */
    where?: InspectionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InspectionItems to fetch.
     */
    orderBy?: InspectionItemOrderByWithRelationInput | InspectionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InspectionItems.
     */
    cursor?: InspectionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InspectionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InspectionItems.
     */
    skip?: number
    distinct?: InspectionItemScalarFieldEnum | InspectionItemScalarFieldEnum[]
  }

  /**
   * InspectionItem create
   */
  export type InspectionItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionItem
     */
    select?: InspectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionItem
     */
    omit?: InspectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InspectionItem.
     */
    data: XOR<InspectionItemCreateInput, InspectionItemUncheckedCreateInput>
  }

  /**
   * InspectionItem createMany
   */
  export type InspectionItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InspectionItems.
     */
    data: InspectionItemCreateManyInput | InspectionItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InspectionItem createManyAndReturn
   */
  export type InspectionItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionItem
     */
    select?: InspectionItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionItem
     */
    omit?: InspectionItemOmit<ExtArgs> | null
    /**
     * The data used to create many InspectionItems.
     */
    data: InspectionItemCreateManyInput | InspectionItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InspectionItem update
   */
  export type InspectionItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionItem
     */
    select?: InspectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionItem
     */
    omit?: InspectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InspectionItem.
     */
    data: XOR<InspectionItemUpdateInput, InspectionItemUncheckedUpdateInput>
    /**
     * Choose, which InspectionItem to update.
     */
    where: InspectionItemWhereUniqueInput
  }

  /**
   * InspectionItem updateMany
   */
  export type InspectionItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InspectionItems.
     */
    data: XOR<InspectionItemUpdateManyMutationInput, InspectionItemUncheckedUpdateManyInput>
    /**
     * Filter which InspectionItems to update
     */
    where?: InspectionItemWhereInput
    /**
     * Limit how many InspectionItems to update.
     */
    limit?: number
  }

  /**
   * InspectionItem updateManyAndReturn
   */
  export type InspectionItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionItem
     */
    select?: InspectionItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionItem
     */
    omit?: InspectionItemOmit<ExtArgs> | null
    /**
     * The data used to update InspectionItems.
     */
    data: XOR<InspectionItemUpdateManyMutationInput, InspectionItemUncheckedUpdateManyInput>
    /**
     * Filter which InspectionItems to update
     */
    where?: InspectionItemWhereInput
    /**
     * Limit how many InspectionItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InspectionItem upsert
   */
  export type InspectionItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionItem
     */
    select?: InspectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionItem
     */
    omit?: InspectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InspectionItem to update in case it exists.
     */
    where: InspectionItemWhereUniqueInput
    /**
     * In case the InspectionItem found by the `where` argument doesn't exist, create a new InspectionItem with this data.
     */
    create: XOR<InspectionItemCreateInput, InspectionItemUncheckedCreateInput>
    /**
     * In case the InspectionItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InspectionItemUpdateInput, InspectionItemUncheckedUpdateInput>
  }

  /**
   * InspectionItem delete
   */
  export type InspectionItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionItem
     */
    select?: InspectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionItem
     */
    omit?: InspectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionItemInclude<ExtArgs> | null
    /**
     * Filter which InspectionItem to delete.
     */
    where: InspectionItemWhereUniqueInput
  }

  /**
   * InspectionItem deleteMany
   */
  export type InspectionItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InspectionItems to delete
     */
    where?: InspectionItemWhereInput
    /**
     * Limit how many InspectionItems to delete.
     */
    limit?: number
  }

  /**
   * InspectionItem without action
   */
  export type InspectionItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspectionItem
     */
    select?: InspectionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InspectionItem
     */
    omit?: InspectionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspectionItemInclude<ExtArgs> | null
  }


  /**
   * Model Listing
   */

  export type AggregateListing = {
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  export type ListingAvgAggregateOutputType = {
    price: number | null
    views: number | null
  }

  export type ListingSumAggregateOutputType = {
    price: number | null
    views: number | null
  }

  export type ListingMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    sellerId: string | null
    price: number | null
    description: string | null
    acceptsFinancing: boolean | null
    acceptsTrade: boolean | null
    status: $Enums.ListingStatus | null
    views: number | null
    expiresAt: Date | null
    soldAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    sellerId: string | null
    price: number | null
    description: string | null
    acceptsFinancing: boolean | null
    acceptsTrade: boolean | null
    status: $Enums.ListingStatus | null
    views: number | null
    expiresAt: Date | null
    soldAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingCountAggregateOutputType = {
    id: number
    vehicleId: number
    sellerId: number
    price: number
    description: number
    acceptsFinancing: number
    acceptsTrade: number
    status: number
    views: number
    expiresAt: number
    soldAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ListingAvgAggregateInputType = {
    price?: true
    views?: true
  }

  export type ListingSumAggregateInputType = {
    price?: true
    views?: true
  }

  export type ListingMinAggregateInputType = {
    id?: true
    vehicleId?: true
    sellerId?: true
    price?: true
    description?: true
    acceptsFinancing?: true
    acceptsTrade?: true
    status?: true
    views?: true
    expiresAt?: true
    soldAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    sellerId?: true
    price?: true
    description?: true
    acceptsFinancing?: true
    acceptsTrade?: true
    status?: true
    views?: true
    expiresAt?: true
    soldAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingCountAggregateInputType = {
    id?: true
    vehicleId?: true
    sellerId?: true
    price?: true
    description?: true
    acceptsFinancing?: true
    acceptsTrade?: true
    status?: true
    views?: true
    expiresAt?: true
    soldAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listing to aggregate.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listings
    **/
    _count?: true | ListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingMaxAggregateInputType
  }

  export type GetListingAggregateType<T extends ListingAggregateArgs> = {
        [P in keyof T & keyof AggregateListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListing[P]>
      : GetScalarType<T[P], AggregateListing[P]>
  }




  export type ListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithAggregationInput | ListingOrderByWithAggregationInput[]
    by: ListingScalarFieldEnum[] | ListingScalarFieldEnum
    having?: ListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingCountAggregateInputType | true
    _avg?: ListingAvgAggregateInputType
    _sum?: ListingSumAggregateInputType
    _min?: ListingMinAggregateInputType
    _max?: ListingMaxAggregateInputType
  }

  export type ListingGroupByOutputType = {
    id: string
    vehicleId: string
    sellerId: string
    price: number
    description: string | null
    acceptsFinancing: boolean
    acceptsTrade: boolean
    status: $Enums.ListingStatus
    views: number
    expiresAt: Date | null
    soldAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  type GetListingGroupByPayload<T extends ListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingGroupByOutputType[P]>
            : GetScalarType<T[P], ListingGroupByOutputType[P]>
        }
      >
    >


  export type ListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    sellerId?: boolean
    price?: boolean
    description?: boolean
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: boolean
    views?: boolean
    expiresAt?: boolean
    soldAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    proposals?: boolean | Listing$proposalsArgs<ExtArgs>
    chatMessages?: boolean | Listing$chatMessagesArgs<ExtArgs>
    dealerListing?: boolean | Listing$dealerListingArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    sellerId?: boolean
    price?: boolean
    description?: boolean
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: boolean
    views?: boolean
    expiresAt?: boolean
    soldAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    sellerId?: boolean
    price?: boolean
    description?: boolean
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: boolean
    views?: boolean
    expiresAt?: boolean
    soldAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    sellerId?: boolean
    price?: boolean
    description?: boolean
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: boolean
    views?: boolean
    expiresAt?: boolean
    soldAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "sellerId" | "price" | "description" | "acceptsFinancing" | "acceptsTrade" | "status" | "views" | "expiresAt" | "soldAt" | "createdAt" | "updatedAt", ExtArgs["result"]["listing"]>
  export type ListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    proposals?: boolean | Listing$proposalsArgs<ExtArgs>
    chatMessages?: boolean | Listing$chatMessagesArgs<ExtArgs>
    dealerListing?: boolean | Listing$dealerListingArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listing"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      seller: Prisma.$UserPayload<ExtArgs>
      proposals: Prisma.$ProposalPayload<ExtArgs>[]
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      dealerListing: Prisma.$DealerListingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      sellerId: string
      price: number
      description: string | null
      acceptsFinancing: boolean
      acceptsTrade: boolean
      status: $Enums.ListingStatus
      views: number
      expiresAt: Date | null
      soldAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["listing"]>
    composites: {}
  }

  type ListingGetPayload<S extends boolean | null | undefined | ListingDefaultArgs> = $Result.GetResult<Prisma.$ListingPayload, S>

  type ListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingCountAggregateInputType | true
    }

  export interface ListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Listing'], meta: { name: 'Listing' } }
    /**
     * Find zero or one Listing that matches the filter.
     * @param {ListingFindUniqueArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingFindUniqueArgs>(args: SelectSubset<T, ListingFindUniqueArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Listing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingFindUniqueOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingFindFirstArgs>(args?: SelectSubset<T, ListingFindFirstArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listings
     * const listings = await prisma.listing.findMany()
     * 
     * // Get first 10 Listings
     * const listings = await prisma.listing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingWithIdOnly = await prisma.listing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingFindManyArgs>(args?: SelectSubset<T, ListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Listing.
     * @param {ListingCreateArgs} args - Arguments to create a Listing.
     * @example
     * // Create one Listing
     * const Listing = await prisma.listing.create({
     *   data: {
     *     // ... data to create a Listing
     *   }
     * })
     * 
     */
    create<T extends ListingCreateArgs>(args: SelectSubset<T, ListingCreateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Listings.
     * @param {ListingCreateManyArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingCreateManyArgs>(args?: SelectSubset<T, ListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listings and returns the data saved in the database.
     * @param {ListingCreateManyAndReturnArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Listing.
     * @param {ListingDeleteArgs} args - Arguments to delete one Listing.
     * @example
     * // Delete one Listing
     * const Listing = await prisma.listing.delete({
     *   where: {
     *     // ... filter to delete one Listing
     *   }
     * })
     * 
     */
    delete<T extends ListingDeleteArgs>(args: SelectSubset<T, ListingDeleteArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Listing.
     * @param {ListingUpdateArgs} args - Arguments to update one Listing.
     * @example
     * // Update one Listing
     * const listing = await prisma.listing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingUpdateArgs>(args: SelectSubset<T, ListingUpdateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Listings.
     * @param {ListingDeleteManyArgs} args - Arguments to filter Listings to delete.
     * @example
     * // Delete a few Listings
     * const { count } = await prisma.listing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingDeleteManyArgs>(args?: SelectSubset<T, ListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingUpdateManyArgs>(args: SelectSubset<T, ListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings and returns the data updated in the database.
     * @param {ListingUpdateManyAndReturnArgs} args - Arguments to update many Listings.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListingUpdateManyAndReturnArgs>(args: SelectSubset<T, ListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Listing.
     * @param {ListingUpsertArgs} args - Arguments to update or create a Listing.
     * @example
     * // Update or create a Listing
     * const listing = await prisma.listing.upsert({
     *   create: {
     *     // ... data to create a Listing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listing we want to update
     *   }
     * })
     */
    upsert<T extends ListingUpsertArgs>(args: SelectSubset<T, ListingUpsertArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingCountArgs} args - Arguments to filter Listings to count.
     * @example
     * // Count the number of Listings
     * const count = await prisma.listing.count({
     *   where: {
     *     // ... the filter for the Listings we want to count
     *   }
     * })
    **/
    count<T extends ListingCountArgs>(
      args?: Subset<T, ListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingAggregateArgs>(args: Subset<T, ListingAggregateArgs>): Prisma.PrismaPromise<GetListingAggregateType<T>>

    /**
     * Group by Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingGroupByArgs} args - Group by arguments.
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
      T extends ListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingGroupByArgs['orderBy'] }
        : { orderBy?: ListingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Listing model
   */
  readonly fields: ListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Listing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proposals<T extends Listing$proposalsArgs<ExtArgs> = {}>(args?: Subset<T, Listing$proposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMessages<T extends Listing$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Listing$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dealerListing<T extends Listing$dealerListingArgs<ExtArgs> = {}>(args?: Subset<T, Listing$dealerListingArgs<ExtArgs>>): Prisma__DealerListingClient<$Result.GetResult<Prisma.$DealerListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Listing model
   */
  interface ListingFieldRefs {
    readonly id: FieldRef<"Listing", 'String'>
    readonly vehicleId: FieldRef<"Listing", 'String'>
    readonly sellerId: FieldRef<"Listing", 'String'>
    readonly price: FieldRef<"Listing", 'Float'>
    readonly description: FieldRef<"Listing", 'String'>
    readonly acceptsFinancing: FieldRef<"Listing", 'Boolean'>
    readonly acceptsTrade: FieldRef<"Listing", 'Boolean'>
    readonly status: FieldRef<"Listing", 'ListingStatus'>
    readonly views: FieldRef<"Listing", 'Int'>
    readonly expiresAt: FieldRef<"Listing", 'DateTime'>
    readonly soldAt: FieldRef<"Listing", 'DateTime'>
    readonly createdAt: FieldRef<"Listing", 'DateTime'>
    readonly updatedAt: FieldRef<"Listing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Listing findUnique
   */
  export type ListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findUniqueOrThrow
   */
  export type ListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findFirst
   */
  export type ListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findFirstOrThrow
   */
  export type ListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findMany
   */
  export type ListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listings to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing create
   */
  export type ListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to create a Listing.
     */
    data: XOR<ListingCreateInput, ListingUncheckedCreateInput>
  }

  /**
   * Listing createMany
   */
  export type ListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listing createManyAndReturn
   */
  export type ListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing update
   */
  export type ListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to update a Listing.
     */
    data: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
    /**
     * Choose, which Listing to update.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing updateMany
   */
  export type ListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
  }

  /**
   * Listing updateManyAndReturn
   */
  export type ListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing upsert
   */
  export type ListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The filter to search for the Listing to update in case it exists.
     */
    where: ListingWhereUniqueInput
    /**
     * In case the Listing found by the `where` argument doesn't exist, create a new Listing with this data.
     */
    create: XOR<ListingCreateInput, ListingUncheckedCreateInput>
    /**
     * In case the Listing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
  }

  /**
   * Listing delete
   */
  export type ListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter which Listing to delete.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing deleteMany
   */
  export type ListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listings to delete
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to delete.
     */
    limit?: number
  }

  /**
   * Listing.proposals
   */
  export type Listing$proposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Listing.chatMessages
   */
  export type Listing$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * Listing.dealerListing
   */
  export type Listing$dealerListingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealerListing
     */
    select?: DealerListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealerListing
     */
    omit?: DealerListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerListingInclude<ExtArgs> | null
    where?: DealerListingWhereInput
  }

  /**
   * Listing without action
   */
  export type ListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
  }


  /**
   * Model Proposal
   */

  export type AggregateProposal = {
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  export type ProposalAvgAggregateOutputType = {
    amount: number | null
    counterAmount: number | null
  }

  export type ProposalSumAggregateOutputType = {
    amount: number | null
    counterAmount: number | null
  }

  export type ProposalMinAggregateOutputType = {
    id: string | null
    listingId: string | null
    buyerId: string | null
    amount: number | null
    message: string | null
    status: $Enums.ProposalStatus | null
    counterAmount: number | null
    respondedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProposalMaxAggregateOutputType = {
    id: string | null
    listingId: string | null
    buyerId: string | null
    amount: number | null
    message: string | null
    status: $Enums.ProposalStatus | null
    counterAmount: number | null
    respondedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProposalCountAggregateOutputType = {
    id: number
    listingId: number
    buyerId: number
    amount: number
    message: number
    status: number
    counterAmount: number
    respondedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProposalAvgAggregateInputType = {
    amount?: true
    counterAmount?: true
  }

  export type ProposalSumAggregateInputType = {
    amount?: true
    counterAmount?: true
  }

  export type ProposalMinAggregateInputType = {
    id?: true
    listingId?: true
    buyerId?: true
    amount?: true
    message?: true
    status?: true
    counterAmount?: true
    respondedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProposalMaxAggregateInputType = {
    id?: true
    listingId?: true
    buyerId?: true
    amount?: true
    message?: true
    status?: true
    counterAmount?: true
    respondedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProposalCountAggregateInputType = {
    id?: true
    listingId?: true
    buyerId?: true
    amount?: true
    message?: true
    status?: true
    counterAmount?: true
    respondedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposal to aggregate.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proposals
    **/
    _count?: true | ProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProposalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProposalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalMaxAggregateInputType
  }

  export type GetProposalAggregateType<T extends ProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposal[P]>
      : GetScalarType<T[P], AggregateProposal[P]>
  }




  export type ProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithAggregationInput | ProposalOrderByWithAggregationInput[]
    by: ProposalScalarFieldEnum[] | ProposalScalarFieldEnum
    having?: ProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalCountAggregateInputType | true
    _avg?: ProposalAvgAggregateInputType
    _sum?: ProposalSumAggregateInputType
    _min?: ProposalMinAggregateInputType
    _max?: ProposalMaxAggregateInputType
  }

  export type ProposalGroupByOutputType = {
    id: string
    listingId: string
    buyerId: string
    amount: number
    message: string | null
    status: $Enums.ProposalStatus
    counterAmount: number | null
    respondedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  type GetProposalGroupByPayload<T extends ProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalGroupByOutputType[P]>
        }
      >
    >


  export type ProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    buyerId?: boolean
    amount?: boolean
    message?: boolean
    status?: boolean
    counterAmount?: boolean
    respondedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    buyerId?: boolean
    amount?: boolean
    message?: boolean
    status?: boolean
    counterAmount?: boolean
    respondedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    buyerId?: boolean
    amount?: boolean
    message?: boolean
    status?: boolean
    counterAmount?: boolean
    respondedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectScalar = {
    id?: boolean
    listingId?: boolean
    buyerId?: boolean
    amount?: boolean
    message?: boolean
    status?: boolean
    counterAmount?: boolean
    respondedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listingId" | "buyerId" | "amount" | "message" | "status" | "counterAmount" | "respondedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["proposal"]>
  export type ProposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProposalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProposalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proposal"
    objects: {
      listing: Prisma.$ListingPayload<ExtArgs>
      buyer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listingId: string
      buyerId: string
      amount: number
      message: string | null
      status: $Enums.ProposalStatus
      counterAmount: number | null
      respondedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["proposal"]>
    composites: {}
  }

  type ProposalGetPayload<S extends boolean | null | undefined | ProposalDefaultArgs> = $Result.GetResult<Prisma.$ProposalPayload, S>

  type ProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProposalCountAggregateInputType | true
    }

  export interface ProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proposal'], meta: { name: 'Proposal' } }
    /**
     * Find zero or one Proposal that matches the filter.
     * @param {ProposalFindUniqueArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposalFindUniqueArgs>(args: SelectSubset<T, ProposalFindUniqueArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProposalFindUniqueOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposalFindFirstArgs>(args?: SelectSubset<T, ProposalFindFirstArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposals
     * const proposals = await prisma.proposal.findMany()
     * 
     * // Get first 10 Proposals
     * const proposals = await prisma.proposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposalWithIdOnly = await prisma.proposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProposalFindManyArgs>(args?: SelectSubset<T, ProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proposal.
     * @param {ProposalCreateArgs} args - Arguments to create a Proposal.
     * @example
     * // Create one Proposal
     * const Proposal = await prisma.proposal.create({
     *   data: {
     *     // ... data to create a Proposal
     *   }
     * })
     * 
     */
    create<T extends ProposalCreateArgs>(args: SelectSubset<T, ProposalCreateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proposals.
     * @param {ProposalCreateManyArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposalCreateManyArgs>(args?: SelectSubset<T, ProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proposals and returns the data saved in the database.
     * @param {ProposalCreateManyAndReturnArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proposals and only return the `id`
     * const proposalWithIdOnly = await prisma.proposal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProposalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proposal.
     * @param {ProposalDeleteArgs} args - Arguments to delete one Proposal.
     * @example
     * // Delete one Proposal
     * const Proposal = await prisma.proposal.delete({
     *   where: {
     *     // ... filter to delete one Proposal
     *   }
     * })
     * 
     */
    delete<T extends ProposalDeleteArgs>(args: SelectSubset<T, ProposalDeleteArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proposal.
     * @param {ProposalUpdateArgs} args - Arguments to update one Proposal.
     * @example
     * // Update one Proposal
     * const proposal = await prisma.proposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposalUpdateArgs>(args: SelectSubset<T, ProposalUpdateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proposals.
     * @param {ProposalDeleteManyArgs} args - Arguments to filter Proposals to delete.
     * @example
     * // Delete a few Proposals
     * const { count } = await prisma.proposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposalDeleteManyArgs>(args?: SelectSubset<T, ProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposalUpdateManyArgs>(args: SelectSubset<T, ProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals and returns the data updated in the database.
     * @param {ProposalUpdateManyAndReturnArgs} args - Arguments to update many Proposals.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proposals and only return the `id`
     * const proposalWithIdOnly = await prisma.proposal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProposalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProposalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proposal.
     * @param {ProposalUpsertArgs} args - Arguments to update or create a Proposal.
     * @example
     * // Update or create a Proposal
     * const proposal = await prisma.proposal.upsert({
     *   create: {
     *     // ... data to create a Proposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposal we want to update
     *   }
     * })
     */
    upsert<T extends ProposalUpsertArgs>(args: SelectSubset<T, ProposalUpsertArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalCountArgs} args - Arguments to filter Proposals to count.
     * @example
     * // Count the number of Proposals
     * const count = await prisma.proposal.count({
     *   where: {
     *     // ... the filter for the Proposals we want to count
     *   }
     * })
    **/
    count<T extends ProposalCountArgs>(
      args?: Subset<T, ProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProposalAggregateArgs>(args: Subset<T, ProposalAggregateArgs>): Prisma.PrismaPromise<GetProposalAggregateType<T>>

    /**
     * Group by Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalGroupByArgs} args - Group by arguments.
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
      T extends ProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposalGroupByArgs['orderBy'] }
        : { orderBy?: ProposalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proposal model
   */
  readonly fields: ProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proposal model
   */
  interface ProposalFieldRefs {
    readonly id: FieldRef<"Proposal", 'String'>
    readonly listingId: FieldRef<"Proposal", 'String'>
    readonly buyerId: FieldRef<"Proposal", 'String'>
    readonly amount: FieldRef<"Proposal", 'Float'>
    readonly message: FieldRef<"Proposal", 'String'>
    readonly status: FieldRef<"Proposal", 'ProposalStatus'>
    readonly counterAmount: FieldRef<"Proposal", 'Float'>
    readonly respondedAt: FieldRef<"Proposal", 'DateTime'>
    readonly createdAt: FieldRef<"Proposal", 'DateTime'>
    readonly updatedAt: FieldRef<"Proposal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Proposal findUnique
   */
  export type ProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findUniqueOrThrow
   */
  export type ProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findFirst
   */
  export type ProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findFirstOrThrow
   */
  export type ProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findMany
   */
  export type ProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposals to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal create
   */
  export type ProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to create a Proposal.
     */
    data: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
  }

  /**
   * Proposal createMany
   */
  export type ProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proposal createManyAndReturn
   */
  export type ProposalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proposal update
   */
  export type ProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to update a Proposal.
     */
    data: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
    /**
     * Choose, which Proposal to update.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal updateMany
   */
  export type ProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proposals.
     */
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyInput>
    /**
     * Filter which Proposals to update
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to update.
     */
    limit?: number
  }

  /**
   * Proposal updateManyAndReturn
   */
  export type ProposalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The data used to update Proposals.
     */
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyInput>
    /**
     * Filter which Proposals to update
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proposal upsert
   */
  export type ProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The filter to search for the Proposal to update in case it exists.
     */
    where: ProposalWhereUniqueInput
    /**
     * In case the Proposal found by the `where` argument doesn't exist, create a new Proposal with this data.
     */
    create: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
    /**
     * In case the Proposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
  }

  /**
   * Proposal delete
   */
  export type ProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter which Proposal to delete.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal deleteMany
   */
  export type ProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposals to delete
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to delete.
     */
    limit?: number
  }

  /**
   * Proposal without action
   */
  export type ProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    listingId: string | null
    senderId: string | null
    content: string | null
    readAt: Date | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    listingId: string | null
    senderId: string | null
    content: string | null
    readAt: Date | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    listingId: number
    senderId: number
    content: number
    readAt: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    listingId?: true
    senderId?: true
    content?: true
    readAt?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    listingId?: true
    senderId?: true
    content?: true
    readAt?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    listingId?: true
    senderId?: true
    content?: true
    readAt?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    listingId: string
    senderId: string
    content: string
    readAt: Date | null
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    senderId?: boolean
    content?: boolean
    readAt?: boolean
    createdAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    senderId?: boolean
    content?: boolean
    readAt?: boolean
    createdAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    senderId?: boolean
    content?: boolean
    readAt?: boolean
    createdAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    listingId?: boolean
    senderId?: boolean
    content?: boolean
    readAt?: boolean
    createdAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listingId" | "senderId" | "content" | "readAt" | "createdAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      listing: Prisma.$ListingPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listingId: string
      senderId: string
      content: string
      readAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly listingId: FieldRef<"ChatMessage", 'String'>
    readonly senderId: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly readAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model Dealer
   */

  export type AggregateDealer = {
    _count: DealerCountAggregateOutputType | null
    _avg: DealerAvgAggregateOutputType | null
    _sum: DealerSumAggregateOutputType | null
    _min: DealerMinAggregateOutputType | null
    _max: DealerMaxAggregateOutputType | null
  }

  export type DealerAvgAggregateOutputType = {
    commissionRate: number | null
  }

  export type DealerSumAggregateOutputType = {
    commissionRate: number | null
  }

  export type DealerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    cnpj: string | null
    plan: $Enums.DealerPlan | null
    status: $Enums.DealerStatus | null
    commissionRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DealerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    cnpj: string | null
    plan: $Enums.DealerPlan | null
    status: $Enums.DealerStatus | null
    commissionRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DealerCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    cnpj: number
    plan: number
    status: number
    commissionRate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DealerAvgAggregateInputType = {
    commissionRate?: true
  }

  export type DealerSumAggregateInputType = {
    commissionRate?: true
  }

  export type DealerMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    cnpj?: true
    plan?: true
    status?: true
    commissionRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DealerMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    cnpj?: true
    plan?: true
    status?: true
    commissionRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DealerCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    cnpj?: true
    plan?: true
    status?: true
    commissionRate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DealerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dealer to aggregate.
     */
    where?: DealerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealers to fetch.
     */
    orderBy?: DealerOrderByWithRelationInput | DealerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DealerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dealers
    **/
    _count?: true | DealerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DealerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DealerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DealerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DealerMaxAggregateInputType
  }

  export type GetDealerAggregateType<T extends DealerAggregateArgs> = {
        [P in keyof T & keyof AggregateDealer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDealer[P]>
      : GetScalarType<T[P], AggregateDealer[P]>
  }




  export type DealerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealerWhereInput
    orderBy?: DealerOrderByWithAggregationInput | DealerOrderByWithAggregationInput[]
    by: DealerScalarFieldEnum[] | DealerScalarFieldEnum
    having?: DealerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DealerCountAggregateInputType | true
    _avg?: DealerAvgAggregateInputType
    _sum?: DealerSumAggregateInputType
    _min?: DealerMinAggregateInputType
    _max?: DealerMaxAggregateInputType
  }

  export type DealerGroupByOutputType = {
    id: string
    userId: string
    companyName: string
    cnpj: string
    plan: $Enums.DealerPlan
    status: $Enums.DealerStatus
    commissionRate: number
    createdAt: Date
    updatedAt: Date
    _count: DealerCountAggregateOutputType | null
    _avg: DealerAvgAggregateOutputType | null
    _sum: DealerSumAggregateOutputType | null
    _min: DealerMinAggregateOutputType | null
    _max: DealerMaxAggregateOutputType | null
  }

  type GetDealerGroupByPayload<T extends DealerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DealerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DealerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DealerGroupByOutputType[P]>
            : GetScalarType<T[P], DealerGroupByOutputType[P]>
        }
      >
    >


  export type DealerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    cnpj?: boolean
    plan?: boolean
    status?: boolean
    commissionRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    listings?: boolean | Dealer$listingsArgs<ExtArgs>
    _count?: boolean | DealerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealer"]>

  export type DealerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    cnpj?: boolean
    plan?: boolean
    status?: boolean
    commissionRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealer"]>

  export type DealerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    cnpj?: boolean
    plan?: boolean
    status?: boolean
    commissionRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealer"]>

  export type DealerSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    cnpj?: boolean
    plan?: boolean
    status?: boolean
    commissionRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DealerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyName" | "cnpj" | "plan" | "status" | "commissionRate" | "createdAt" | "updatedAt", ExtArgs["result"]["dealer"]>
  export type DealerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    listings?: boolean | Dealer$listingsArgs<ExtArgs>
    _count?: boolean | DealerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DealerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DealerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DealerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dealer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      listings: Prisma.$DealerListingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      companyName: string
      cnpj: string
      plan: $Enums.DealerPlan
      status: $Enums.DealerStatus
      commissionRate: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dealer"]>
    composites: {}
  }

  type DealerGetPayload<S extends boolean | null | undefined | DealerDefaultArgs> = $Result.GetResult<Prisma.$DealerPayload, S>

  type DealerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DealerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DealerCountAggregateInputType | true
    }

  export interface DealerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dealer'], meta: { name: 'Dealer' } }
    /**
     * Find zero or one Dealer that matches the filter.
     * @param {DealerFindUniqueArgs} args - Arguments to find a Dealer
     * @example
     * // Get one Dealer
     * const dealer = await prisma.dealer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DealerFindUniqueArgs>(args: SelectSubset<T, DealerFindUniqueArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dealer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DealerFindUniqueOrThrowArgs} args - Arguments to find a Dealer
     * @example
     * // Get one Dealer
     * const dealer = await prisma.dealer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DealerFindUniqueOrThrowArgs>(args: SelectSubset<T, DealerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dealer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerFindFirstArgs} args - Arguments to find a Dealer
     * @example
     * // Get one Dealer
     * const dealer = await prisma.dealer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DealerFindFirstArgs>(args?: SelectSubset<T, DealerFindFirstArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dealer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerFindFirstOrThrowArgs} args - Arguments to find a Dealer
     * @example
     * // Get one Dealer
     * const dealer = await prisma.dealer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DealerFindFirstOrThrowArgs>(args?: SelectSubset<T, DealerFindFirstOrThrowArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dealers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dealers
     * const dealers = await prisma.dealer.findMany()
     * 
     * // Get first 10 Dealers
     * const dealers = await prisma.dealer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dealerWithIdOnly = await prisma.dealer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DealerFindManyArgs>(args?: SelectSubset<T, DealerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dealer.
     * @param {DealerCreateArgs} args - Arguments to create a Dealer.
     * @example
     * // Create one Dealer
     * const Dealer = await prisma.dealer.create({
     *   data: {
     *     // ... data to create a Dealer
     *   }
     * })
     * 
     */
    create<T extends DealerCreateArgs>(args: SelectSubset<T, DealerCreateArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dealers.
     * @param {DealerCreateManyArgs} args - Arguments to create many Dealers.
     * @example
     * // Create many Dealers
     * const dealer = await prisma.dealer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DealerCreateManyArgs>(args?: SelectSubset<T, DealerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dealers and returns the data saved in the database.
     * @param {DealerCreateManyAndReturnArgs} args - Arguments to create many Dealers.
     * @example
     * // Create many Dealers
     * const dealer = await prisma.dealer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dealers and only return the `id`
     * const dealerWithIdOnly = await prisma.dealer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DealerCreateManyAndReturnArgs>(args?: SelectSubset<T, DealerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dealer.
     * @param {DealerDeleteArgs} args - Arguments to delete one Dealer.
     * @example
     * // Delete one Dealer
     * const Dealer = await prisma.dealer.delete({
     *   where: {
     *     // ... filter to delete one Dealer
     *   }
     * })
     * 
     */
    delete<T extends DealerDeleteArgs>(args: SelectSubset<T, DealerDeleteArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dealer.
     * @param {DealerUpdateArgs} args - Arguments to update one Dealer.
     * @example
     * // Update one Dealer
     * const dealer = await prisma.dealer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DealerUpdateArgs>(args: SelectSubset<T, DealerUpdateArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dealers.
     * @param {DealerDeleteManyArgs} args - Arguments to filter Dealers to delete.
     * @example
     * // Delete a few Dealers
     * const { count } = await prisma.dealer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DealerDeleteManyArgs>(args?: SelectSubset<T, DealerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dealers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dealers
     * const dealer = await prisma.dealer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DealerUpdateManyArgs>(args: SelectSubset<T, DealerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dealers and returns the data updated in the database.
     * @param {DealerUpdateManyAndReturnArgs} args - Arguments to update many Dealers.
     * @example
     * // Update many Dealers
     * const dealer = await prisma.dealer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dealers and only return the `id`
     * const dealerWithIdOnly = await prisma.dealer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DealerUpdateManyAndReturnArgs>(args: SelectSubset<T, DealerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dealer.
     * @param {DealerUpsertArgs} args - Arguments to update or create a Dealer.
     * @example
     * // Update or create a Dealer
     * const dealer = await prisma.dealer.upsert({
     *   create: {
     *     // ... data to create a Dealer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dealer we want to update
     *   }
     * })
     */
    upsert<T extends DealerUpsertArgs>(args: SelectSubset<T, DealerUpsertArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dealers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerCountArgs} args - Arguments to filter Dealers to count.
     * @example
     * // Count the number of Dealers
     * const count = await prisma.dealer.count({
     *   where: {
     *     // ... the filter for the Dealers we want to count
     *   }
     * })
    **/
    count<T extends DealerCountArgs>(
      args?: Subset<T, DealerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DealerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dealer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DealerAggregateArgs>(args: Subset<T, DealerAggregateArgs>): Prisma.PrismaPromise<GetDealerAggregateType<T>>

    /**
     * Group by Dealer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerGroupByArgs} args - Group by arguments.
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
      T extends DealerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DealerGroupByArgs['orderBy'] }
        : { orderBy?: DealerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DealerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dealer model
   */
  readonly fields: DealerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dealer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DealerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    listings<T extends Dealer$listingsArgs<ExtArgs> = {}>(args?: Subset<T, Dealer$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealerListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dealer model
   */
  interface DealerFieldRefs {
    readonly id: FieldRef<"Dealer", 'String'>
    readonly userId: FieldRef<"Dealer", 'String'>
    readonly companyName: FieldRef<"Dealer", 'String'>
    readonly cnpj: FieldRef<"Dealer", 'String'>
    readonly plan: FieldRef<"Dealer", 'DealerPlan'>
    readonly status: FieldRef<"Dealer", 'DealerStatus'>
    readonly commissionRate: FieldRef<"Dealer", 'Float'>
    readonly createdAt: FieldRef<"Dealer", 'DateTime'>
    readonly updatedAt: FieldRef<"Dealer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dealer findUnique
   */
  export type DealerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter, which Dealer to fetch.
     */
    where: DealerWhereUniqueInput
  }

  /**
   * Dealer findUniqueOrThrow
   */
  export type DealerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter, which Dealer to fetch.
     */
    where: DealerWhereUniqueInput
  }

  /**
   * Dealer findFirst
   */
  export type DealerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter, which Dealer to fetch.
     */
    where?: DealerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealers to fetch.
     */
    orderBy?: DealerOrderByWithRelationInput | DealerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dealers.
     */
    cursor?: DealerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dealers.
     */
    distinct?: DealerScalarFieldEnum | DealerScalarFieldEnum[]
  }

  /**
   * Dealer findFirstOrThrow
   */
  export type DealerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter, which Dealer to fetch.
     */
    where?: DealerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealers to fetch.
     */
    orderBy?: DealerOrderByWithRelationInput | DealerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dealers.
     */
    cursor?: DealerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dealers.
     */
    distinct?: DealerScalarFieldEnum | DealerScalarFieldEnum[]
  }

  /**
   * Dealer findMany
   */
  export type DealerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter, which Dealers to fetch.
     */
    where?: DealerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealers to fetch.
     */
    orderBy?: DealerOrderByWithRelationInput | DealerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dealers.
     */
    cursor?: DealerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealers.
     */
    skip?: number
    distinct?: DealerScalarFieldEnum | DealerScalarFieldEnum[]
  }

  /**
   * Dealer create
   */
  export type DealerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * The data needed to create a Dealer.
     */
    data: XOR<DealerCreateInput, DealerUncheckedCreateInput>
  }

  /**
   * Dealer createMany
   */
  export type DealerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dealers.
     */
    data: DealerCreateManyInput | DealerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dealer createManyAndReturn
   */
  export type DealerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * The data used to create many Dealers.
     */
    data: DealerCreateManyInput | DealerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dealer update
   */
  export type DealerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * The data needed to update a Dealer.
     */
    data: XOR<DealerUpdateInput, DealerUncheckedUpdateInput>
    /**
     * Choose, which Dealer to update.
     */
    where: DealerWhereUniqueInput
  }

  /**
   * Dealer updateMany
   */
  export type DealerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dealers.
     */
    data: XOR<DealerUpdateManyMutationInput, DealerUncheckedUpdateManyInput>
    /**
     * Filter which Dealers to update
     */
    where?: DealerWhereInput
    /**
     * Limit how many Dealers to update.
     */
    limit?: number
  }

  /**
   * Dealer updateManyAndReturn
   */
  export type DealerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * The data used to update Dealers.
     */
    data: XOR<DealerUpdateManyMutationInput, DealerUncheckedUpdateManyInput>
    /**
     * Filter which Dealers to update
     */
    where?: DealerWhereInput
    /**
     * Limit how many Dealers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dealer upsert
   */
  export type DealerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * The filter to search for the Dealer to update in case it exists.
     */
    where: DealerWhereUniqueInput
    /**
     * In case the Dealer found by the `where` argument doesn't exist, create a new Dealer with this data.
     */
    create: XOR<DealerCreateInput, DealerUncheckedCreateInput>
    /**
     * In case the Dealer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DealerUpdateInput, DealerUncheckedUpdateInput>
  }

  /**
   * Dealer delete
   */
  export type DealerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
    /**
     * Filter which Dealer to delete.
     */
    where: DealerWhereUniqueInput
  }

  /**
   * Dealer deleteMany
   */
  export type DealerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dealers to delete
     */
    where?: DealerWhereInput
    /**
     * Limit how many Dealers to delete.
     */
    limit?: number
  }

  /**
   * Dealer.listings
   */
  export type Dealer$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealerListing
     */
    select?: DealerListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealerListing
     */
    omit?: DealerListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerListingInclude<ExtArgs> | null
    where?: DealerListingWhereInput
    orderBy?: DealerListingOrderByWithRelationInput | DealerListingOrderByWithRelationInput[]
    cursor?: DealerListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DealerListingScalarFieldEnum | DealerListingScalarFieldEnum[]
  }

  /**
   * Dealer without action
   */
  export type DealerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealer
     */
    select?: DealerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealer
     */
    omit?: DealerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerInclude<ExtArgs> | null
  }


  /**
   * Model DealerListing
   */

  export type AggregateDealerListing = {
    _count: DealerListingCountAggregateOutputType | null
    _min: DealerListingMinAggregateOutputType | null
    _max: DealerListingMaxAggregateOutputType | null
  }

  export type DealerListingMinAggregateOutputType = {
    id: string | null
    dealerId: string | null
    listingId: string | null
    createdAt: Date | null
  }

  export type DealerListingMaxAggregateOutputType = {
    id: string | null
    dealerId: string | null
    listingId: string | null
    createdAt: Date | null
  }

  export type DealerListingCountAggregateOutputType = {
    id: number
    dealerId: number
    listingId: number
    createdAt: number
    _all: number
  }


  export type DealerListingMinAggregateInputType = {
    id?: true
    dealerId?: true
    listingId?: true
    createdAt?: true
  }

  export type DealerListingMaxAggregateInputType = {
    id?: true
    dealerId?: true
    listingId?: true
    createdAt?: true
  }

  export type DealerListingCountAggregateInputType = {
    id?: true
    dealerId?: true
    listingId?: true
    createdAt?: true
    _all?: true
  }

  export type DealerListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DealerListing to aggregate.
     */
    where?: DealerListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealerListings to fetch.
     */
    orderBy?: DealerListingOrderByWithRelationInput | DealerListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DealerListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealerListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealerListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DealerListings
    **/
    _count?: true | DealerListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DealerListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DealerListingMaxAggregateInputType
  }

  export type GetDealerListingAggregateType<T extends DealerListingAggregateArgs> = {
        [P in keyof T & keyof AggregateDealerListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDealerListing[P]>
      : GetScalarType<T[P], AggregateDealerListing[P]>
  }




  export type DealerListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealerListingWhereInput
    orderBy?: DealerListingOrderByWithAggregationInput | DealerListingOrderByWithAggregationInput[]
    by: DealerListingScalarFieldEnum[] | DealerListingScalarFieldEnum
    having?: DealerListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DealerListingCountAggregateInputType | true
    _min?: DealerListingMinAggregateInputType
    _max?: DealerListingMaxAggregateInputType
  }

  export type DealerListingGroupByOutputType = {
    id: string
    dealerId: string
    listingId: string
    createdAt: Date
    _count: DealerListingCountAggregateOutputType | null
    _min: DealerListingMinAggregateOutputType | null
    _max: DealerListingMaxAggregateOutputType | null
  }

  type GetDealerListingGroupByPayload<T extends DealerListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DealerListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DealerListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DealerListingGroupByOutputType[P]>
            : GetScalarType<T[P], DealerListingGroupByOutputType[P]>
        }
      >
    >


  export type DealerListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealerId?: boolean
    listingId?: boolean
    createdAt?: boolean
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealerListing"]>

  export type DealerListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealerId?: boolean
    listingId?: boolean
    createdAt?: boolean
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealerListing"]>

  export type DealerListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealerId?: boolean
    listingId?: boolean
    createdAt?: boolean
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealerListing"]>

  export type DealerListingSelectScalar = {
    id?: boolean
    dealerId?: boolean
    listingId?: boolean
    createdAt?: boolean
  }

  export type DealerListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dealerId" | "listingId" | "createdAt", ExtArgs["result"]["dealerListing"]>
  export type DealerListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type DealerListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type DealerListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealer?: boolean | DealerDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }

  export type $DealerListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DealerListing"
    objects: {
      dealer: Prisma.$DealerPayload<ExtArgs>
      listing: Prisma.$ListingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dealerId: string
      listingId: string
      createdAt: Date
    }, ExtArgs["result"]["dealerListing"]>
    composites: {}
  }

  type DealerListingGetPayload<S extends boolean | null | undefined | DealerListingDefaultArgs> = $Result.GetResult<Prisma.$DealerListingPayload, S>

  type DealerListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DealerListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DealerListingCountAggregateInputType | true
    }

  export interface DealerListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DealerListing'], meta: { name: 'DealerListing' } }
    /**
     * Find zero or one DealerListing that matches the filter.
     * @param {DealerListingFindUniqueArgs} args - Arguments to find a DealerListing
     * @example
     * // Get one DealerListing
     * const dealerListing = await prisma.dealerListing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DealerListingFindUniqueArgs>(args: SelectSubset<T, DealerListingFindUniqueArgs<ExtArgs>>): Prisma__DealerListingClient<$Result.GetResult<Prisma.$DealerListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DealerListing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DealerListingFindUniqueOrThrowArgs} args - Arguments to find a DealerListing
     * @example
     * // Get one DealerListing
     * const dealerListing = await prisma.dealerListing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DealerListingFindUniqueOrThrowArgs>(args: SelectSubset<T, DealerListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DealerListingClient<$Result.GetResult<Prisma.$DealerListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DealerListing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerListingFindFirstArgs} args - Arguments to find a DealerListing
     * @example
     * // Get one DealerListing
     * const dealerListing = await prisma.dealerListing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DealerListingFindFirstArgs>(args?: SelectSubset<T, DealerListingFindFirstArgs<ExtArgs>>): Prisma__DealerListingClient<$Result.GetResult<Prisma.$DealerListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DealerListing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerListingFindFirstOrThrowArgs} args - Arguments to find a DealerListing
     * @example
     * // Get one DealerListing
     * const dealerListing = await prisma.dealerListing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DealerListingFindFirstOrThrowArgs>(args?: SelectSubset<T, DealerListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__DealerListingClient<$Result.GetResult<Prisma.$DealerListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DealerListings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DealerListings
     * const dealerListings = await prisma.dealerListing.findMany()
     * 
     * // Get first 10 DealerListings
     * const dealerListings = await prisma.dealerListing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dealerListingWithIdOnly = await prisma.dealerListing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DealerListingFindManyArgs>(args?: SelectSubset<T, DealerListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealerListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DealerListing.
     * @param {DealerListingCreateArgs} args - Arguments to create a DealerListing.
     * @example
     * // Create one DealerListing
     * const DealerListing = await prisma.dealerListing.create({
     *   data: {
     *     // ... data to create a DealerListing
     *   }
     * })
     * 
     */
    create<T extends DealerListingCreateArgs>(args: SelectSubset<T, DealerListingCreateArgs<ExtArgs>>): Prisma__DealerListingClient<$Result.GetResult<Prisma.$DealerListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DealerListings.
     * @param {DealerListingCreateManyArgs} args - Arguments to create many DealerListings.
     * @example
     * // Create many DealerListings
     * const dealerListing = await prisma.dealerListing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DealerListingCreateManyArgs>(args?: SelectSubset<T, DealerListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DealerListings and returns the data saved in the database.
     * @param {DealerListingCreateManyAndReturnArgs} args - Arguments to create many DealerListings.
     * @example
     * // Create many DealerListings
     * const dealerListing = await prisma.dealerListing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DealerListings and only return the `id`
     * const dealerListingWithIdOnly = await prisma.dealerListing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DealerListingCreateManyAndReturnArgs>(args?: SelectSubset<T, DealerListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealerListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DealerListing.
     * @param {DealerListingDeleteArgs} args - Arguments to delete one DealerListing.
     * @example
     * // Delete one DealerListing
     * const DealerListing = await prisma.dealerListing.delete({
     *   where: {
     *     // ... filter to delete one DealerListing
     *   }
     * })
     * 
     */
    delete<T extends DealerListingDeleteArgs>(args: SelectSubset<T, DealerListingDeleteArgs<ExtArgs>>): Prisma__DealerListingClient<$Result.GetResult<Prisma.$DealerListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DealerListing.
     * @param {DealerListingUpdateArgs} args - Arguments to update one DealerListing.
     * @example
     * // Update one DealerListing
     * const dealerListing = await prisma.dealerListing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DealerListingUpdateArgs>(args: SelectSubset<T, DealerListingUpdateArgs<ExtArgs>>): Prisma__DealerListingClient<$Result.GetResult<Prisma.$DealerListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DealerListings.
     * @param {DealerListingDeleteManyArgs} args - Arguments to filter DealerListings to delete.
     * @example
     * // Delete a few DealerListings
     * const { count } = await prisma.dealerListing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DealerListingDeleteManyArgs>(args?: SelectSubset<T, DealerListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DealerListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DealerListings
     * const dealerListing = await prisma.dealerListing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DealerListingUpdateManyArgs>(args: SelectSubset<T, DealerListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DealerListings and returns the data updated in the database.
     * @param {DealerListingUpdateManyAndReturnArgs} args - Arguments to update many DealerListings.
     * @example
     * // Update many DealerListings
     * const dealerListing = await prisma.dealerListing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DealerListings and only return the `id`
     * const dealerListingWithIdOnly = await prisma.dealerListing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DealerListingUpdateManyAndReturnArgs>(args: SelectSubset<T, DealerListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealerListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DealerListing.
     * @param {DealerListingUpsertArgs} args - Arguments to update or create a DealerListing.
     * @example
     * // Update or create a DealerListing
     * const dealerListing = await prisma.dealerListing.upsert({
     *   create: {
     *     // ... data to create a DealerListing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DealerListing we want to update
     *   }
     * })
     */
    upsert<T extends DealerListingUpsertArgs>(args: SelectSubset<T, DealerListingUpsertArgs<ExtArgs>>): Prisma__DealerListingClient<$Result.GetResult<Prisma.$DealerListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DealerListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerListingCountArgs} args - Arguments to filter DealerListings to count.
     * @example
     * // Count the number of DealerListings
     * const count = await prisma.dealerListing.count({
     *   where: {
     *     // ... the filter for the DealerListings we want to count
     *   }
     * })
    **/
    count<T extends DealerListingCountArgs>(
      args?: Subset<T, DealerListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DealerListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DealerListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DealerListingAggregateArgs>(args: Subset<T, DealerListingAggregateArgs>): Prisma.PrismaPromise<GetDealerListingAggregateType<T>>

    /**
     * Group by DealerListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealerListingGroupByArgs} args - Group by arguments.
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
      T extends DealerListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DealerListingGroupByArgs['orderBy'] }
        : { orderBy?: DealerListingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DealerListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealerListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DealerListing model
   */
  readonly fields: DealerListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DealerListing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DealerListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dealer<T extends DealerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DealerDefaultArgs<ExtArgs>>): Prisma__DealerClient<$Result.GetResult<Prisma.$DealerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DealerListing model
   */
  interface DealerListingFieldRefs {
    readonly id: FieldRef<"DealerListing", 'String'>
    readonly dealerId: FieldRef<"DealerListing", 'String'>
    readonly listingId: FieldRef<"DealerListing", 'String'>
    readonly createdAt: FieldRef<"DealerListing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DealerListing findUnique
   */
  export type DealerListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealerListing
     */
    select?: DealerListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealerListing
     */
    omit?: DealerListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerListingInclude<ExtArgs> | null
    /**
     * Filter, which DealerListing to fetch.
     */
    where: DealerListingWhereUniqueInput
  }

  /**
   * DealerListing findUniqueOrThrow
   */
  export type DealerListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealerListing
     */
    select?: DealerListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealerListing
     */
    omit?: DealerListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerListingInclude<ExtArgs> | null
    /**
     * Filter, which DealerListing to fetch.
     */
    where: DealerListingWhereUniqueInput
  }

  /**
   * DealerListing findFirst
   */
  export type DealerListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealerListing
     */
    select?: DealerListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealerListing
     */
    omit?: DealerListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerListingInclude<ExtArgs> | null
    /**
     * Filter, which DealerListing to fetch.
     */
    where?: DealerListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealerListings to fetch.
     */
    orderBy?: DealerListingOrderByWithRelationInput | DealerListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DealerListings.
     */
    cursor?: DealerListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealerListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealerListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DealerListings.
     */
    distinct?: DealerListingScalarFieldEnum | DealerListingScalarFieldEnum[]
  }

  /**
   * DealerListing findFirstOrThrow
   */
  export type DealerListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealerListing
     */
    select?: DealerListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealerListing
     */
    omit?: DealerListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerListingInclude<ExtArgs> | null
    /**
     * Filter, which DealerListing to fetch.
     */
    where?: DealerListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealerListings to fetch.
     */
    orderBy?: DealerListingOrderByWithRelationInput | DealerListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DealerListings.
     */
    cursor?: DealerListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealerListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealerListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DealerListings.
     */
    distinct?: DealerListingScalarFieldEnum | DealerListingScalarFieldEnum[]
  }

  /**
   * DealerListing findMany
   */
  export type DealerListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealerListing
     */
    select?: DealerListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealerListing
     */
    omit?: DealerListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerListingInclude<ExtArgs> | null
    /**
     * Filter, which DealerListings to fetch.
     */
    where?: DealerListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealerListings to fetch.
     */
    orderBy?: DealerListingOrderByWithRelationInput | DealerListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DealerListings.
     */
    cursor?: DealerListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealerListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealerListings.
     */
    skip?: number
    distinct?: DealerListingScalarFieldEnum | DealerListingScalarFieldEnum[]
  }

  /**
   * DealerListing create
   */
  export type DealerListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealerListing
     */
    select?: DealerListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealerListing
     */
    omit?: DealerListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerListingInclude<ExtArgs> | null
    /**
     * The data needed to create a DealerListing.
     */
    data: XOR<DealerListingCreateInput, DealerListingUncheckedCreateInput>
  }

  /**
   * DealerListing createMany
   */
  export type DealerListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DealerListings.
     */
    data: DealerListingCreateManyInput | DealerListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DealerListing createManyAndReturn
   */
  export type DealerListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealerListing
     */
    select?: DealerListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DealerListing
     */
    omit?: DealerListingOmit<ExtArgs> | null
    /**
     * The data used to create many DealerListings.
     */
    data: DealerListingCreateManyInput | DealerListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DealerListing update
   */
  export type DealerListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealerListing
     */
    select?: DealerListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealerListing
     */
    omit?: DealerListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerListingInclude<ExtArgs> | null
    /**
     * The data needed to update a DealerListing.
     */
    data: XOR<DealerListingUpdateInput, DealerListingUncheckedUpdateInput>
    /**
     * Choose, which DealerListing to update.
     */
    where: DealerListingWhereUniqueInput
  }

  /**
   * DealerListing updateMany
   */
  export type DealerListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DealerListings.
     */
    data: XOR<DealerListingUpdateManyMutationInput, DealerListingUncheckedUpdateManyInput>
    /**
     * Filter which DealerListings to update
     */
    where?: DealerListingWhereInput
    /**
     * Limit how many DealerListings to update.
     */
    limit?: number
  }

  /**
   * DealerListing updateManyAndReturn
   */
  export type DealerListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealerListing
     */
    select?: DealerListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DealerListing
     */
    omit?: DealerListingOmit<ExtArgs> | null
    /**
     * The data used to update DealerListings.
     */
    data: XOR<DealerListingUpdateManyMutationInput, DealerListingUncheckedUpdateManyInput>
    /**
     * Filter which DealerListings to update
     */
    where?: DealerListingWhereInput
    /**
     * Limit how many DealerListings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerListingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DealerListing upsert
   */
  export type DealerListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealerListing
     */
    select?: DealerListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealerListing
     */
    omit?: DealerListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerListingInclude<ExtArgs> | null
    /**
     * The filter to search for the DealerListing to update in case it exists.
     */
    where: DealerListingWhereUniqueInput
    /**
     * In case the DealerListing found by the `where` argument doesn't exist, create a new DealerListing with this data.
     */
    create: XOR<DealerListingCreateInput, DealerListingUncheckedCreateInput>
    /**
     * In case the DealerListing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DealerListingUpdateInput, DealerListingUncheckedUpdateInput>
  }

  /**
   * DealerListing delete
   */
  export type DealerListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealerListing
     */
    select?: DealerListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealerListing
     */
    omit?: DealerListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerListingInclude<ExtArgs> | null
    /**
     * Filter which DealerListing to delete.
     */
    where: DealerListingWhereUniqueInput
  }

  /**
   * DealerListing deleteMany
   */
  export type DealerListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DealerListings to delete
     */
    where?: DealerListingWhereInput
    /**
     * Limit how many DealerListings to delete.
     */
    limit?: number
  }

  /**
   * DealerListing without action
   */
  export type DealerListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealerListing
     */
    select?: DealerListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealerListing
     */
    omit?: DealerListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealerListingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    phone: 'phone',
    cpf: 'cpf',
    type: 'type',
    status: 'status',
    kycStatus: 'kycStatus',
    avatarUrl: 'avatarUrl',
    kycSubmittedAt: 'kycSubmittedAt',
    kycApprovedAt: 'kycApprovedAt',
    kycRejectionReason: 'kycRejectionReason',
    blockReason: 'blockReason',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    plate: 'plate',
    chassis: 'chassis',
    renavam: 'renavam',
    brand: 'brand',
    model: 'model',
    year: 'year',
    color: 'color',
    mileage: 'mileage',
    fuelType: 'fuelType',
    transmission: 'transmission',
    fipeCode: 'fipeCode',
    fipePrice: 'fipePrice',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const InspectionScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    type: 'type',
    status: 'status',
    score: 'score',
    reviewerId: 'reviewerId',
    reviewedAt: 'reviewedAt',
    reviewNotes: 'reviewNotes',
    aiFlags: 'aiFlags',
    aiProcessedAt: 'aiProcessedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InspectionScalarFieldEnum = (typeof InspectionScalarFieldEnum)[keyof typeof InspectionScalarFieldEnum]


  export const InspectionMediaScalarFieldEnum: {
    id: 'id',
    inspectionId: 'inspectionId',
    type: 'type',
    url: 'url',
    key: 'key',
    hash: 'hash',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type InspectionMediaScalarFieldEnum = (typeof InspectionMediaScalarFieldEnum)[keyof typeof InspectionMediaScalarFieldEnum]


  export const InspectionItemScalarFieldEnum: {
    id: 'id',
    inspectionId: 'inspectionId',
    category: 'category',
    item: 'item',
    result: 'result',
    score: 'score',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type InspectionItemScalarFieldEnum = (typeof InspectionItemScalarFieldEnum)[keyof typeof InspectionItemScalarFieldEnum]


  export const ListingScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    sellerId: 'sellerId',
    price: 'price',
    description: 'description',
    acceptsFinancing: 'acceptsFinancing',
    acceptsTrade: 'acceptsTrade',
    status: 'status',
    views: 'views',
    expiresAt: 'expiresAt',
    soldAt: 'soldAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ListingScalarFieldEnum = (typeof ListingScalarFieldEnum)[keyof typeof ListingScalarFieldEnum]


  export const ProposalScalarFieldEnum: {
    id: 'id',
    listingId: 'listingId',
    buyerId: 'buyerId',
    amount: 'amount',
    message: 'message',
    status: 'status',
    counterAmount: 'counterAmount',
    respondedAt: 'respondedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProposalScalarFieldEnum = (typeof ProposalScalarFieldEnum)[keyof typeof ProposalScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    listingId: 'listingId',
    senderId: 'senderId',
    content: 'content',
    readAt: 'readAt',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const DealerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    cnpj: 'cnpj',
    plan: 'plan',
    status: 'status',
    commissionRate: 'commissionRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DealerScalarFieldEnum = (typeof DealerScalarFieldEnum)[keyof typeof DealerScalarFieldEnum]


  export const DealerListingScalarFieldEnum: {
    id: 'id',
    dealerId: 'dealerId',
    listingId: 'listingId',
    createdAt: 'createdAt'
  };

  export type DealerListingScalarFieldEnum = (typeof DealerListingScalarFieldEnum)[keyof typeof DealerListingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'KycStatus'
   */
  export type EnumKycStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycStatus'>
    


  /**
   * Reference to a field of type 'KycStatus[]'
   */
  export type ListEnumKycStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'FuelType'
   */
  export type EnumFuelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FuelType'>
    


  /**
   * Reference to a field of type 'FuelType[]'
   */
  export type ListEnumFuelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FuelType[]'>
    


  /**
   * Reference to a field of type 'TransmissionType'
   */
  export type EnumTransmissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransmissionType'>
    


  /**
   * Reference to a field of type 'TransmissionType[]'
   */
  export type ListEnumTransmissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransmissionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'VehicleStatus'
   */
  export type EnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus'>
    


  /**
   * Reference to a field of type 'VehicleStatus[]'
   */
  export type ListEnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus[]'>
    


  /**
   * Reference to a field of type 'InspectionType'
   */
  export type EnumInspectionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InspectionType'>
    


  /**
   * Reference to a field of type 'InspectionType[]'
   */
  export type ListEnumInspectionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InspectionType[]'>
    


  /**
   * Reference to a field of type 'InspectionStatus'
   */
  export type EnumInspectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InspectionStatus'>
    


  /**
   * Reference to a field of type 'InspectionStatus[]'
   */
  export type ListEnumInspectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InspectionStatus[]'>
    


  /**
   * Reference to a field of type 'MediaType'
   */
  export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>
    


  /**
   * Reference to a field of type 'MediaType[]'
   */
  export type ListEnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ListingStatus'
   */
  export type EnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus'>
    


  /**
   * Reference to a field of type 'ListingStatus[]'
   */
  export type ListEnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus[]'>
    


  /**
   * Reference to a field of type 'ProposalStatus'
   */
  export type EnumProposalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalStatus'>
    


  /**
   * Reference to a field of type 'ProposalStatus[]'
   */
  export type ListEnumProposalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalStatus[]'>
    


  /**
   * Reference to a field of type 'DealerPlan'
   */
  export type EnumDealerPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DealerPlan'>
    


  /**
   * Reference to a field of type 'DealerPlan[]'
   */
  export type ListEnumDealerPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DealerPlan[]'>
    


  /**
   * Reference to a field of type 'DealerStatus'
   */
  export type EnumDealerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DealerStatus'>
    


  /**
   * Reference to a field of type 'DealerStatus[]'
   */
  export type ListEnumDealerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DealerStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    cpf?: StringNullableFilter<"User"> | string | null
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    kycStatus?: EnumKycStatusFilter<"User"> | $Enums.KycStatus
    avatarUrl?: StringNullableFilter<"User"> | string | null
    kycSubmittedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    kycApprovedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    kycRejectionReason?: StringNullableFilter<"User"> | string | null
    blockReason?: StringNullableFilter<"User"> | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vehicles?: VehicleListRelationFilter
    sellerListings?: ListingListRelationFilter
    buyerProposals?: ProposalListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    dealer?: XOR<DealerNullableScalarRelationFilter, DealerWhereInput> | null
    inspectionsReviewed?: InspectionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    kycStatus?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    kycSubmittedAt?: SortOrderInput | SortOrder
    kycApprovedAt?: SortOrderInput | SortOrder
    kycRejectionReason?: SortOrderInput | SortOrder
    blockReason?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicles?: VehicleOrderByRelationAggregateInput
    sellerListings?: ListingOrderByRelationAggregateInput
    buyerProposals?: ProposalOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
    dealer?: DealerOrderByWithRelationInput
    inspectionsReviewed?: InspectionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    cpf?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    kycStatus?: EnumKycStatusFilter<"User"> | $Enums.KycStatus
    avatarUrl?: StringNullableFilter<"User"> | string | null
    kycSubmittedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    kycApprovedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    kycRejectionReason?: StringNullableFilter<"User"> | string | null
    blockReason?: StringNullableFilter<"User"> | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vehicles?: VehicleListRelationFilter
    sellerListings?: ListingListRelationFilter
    buyerProposals?: ProposalListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    dealer?: XOR<DealerNullableScalarRelationFilter, DealerWhereInput> | null
    inspectionsReviewed?: InspectionListRelationFilter
  }, "id" | "email" | "cpf">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    kycStatus?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    kycSubmittedAt?: SortOrderInput | SortOrder
    kycApprovedAt?: SortOrderInput | SortOrder
    kycRejectionReason?: SortOrderInput | SortOrder
    blockReason?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    cpf?: StringNullableWithAggregatesFilter<"User"> | string | null
    type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    kycStatus?: EnumKycStatusWithAggregatesFilter<"User"> | $Enums.KycStatus
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    kycSubmittedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    kycApprovedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    kycRejectionReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    blockReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    tokenHash?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    ownerId?: StringFilter<"Vehicle"> | string
    plate?: StringNullableFilter<"Vehicle"> | string | null
    chassis?: StringNullableFilter<"Vehicle"> | string | null
    renavam?: StringNullableFilter<"Vehicle"> | string | null
    brand?: StringNullableFilter<"Vehicle"> | string | null
    model?: StringNullableFilter<"Vehicle"> | string | null
    year?: IntNullableFilter<"Vehicle"> | number | null
    color?: StringNullableFilter<"Vehicle"> | string | null
    mileage?: IntFilter<"Vehicle"> | number
    fuelType?: EnumFuelTypeNullableFilter<"Vehicle"> | $Enums.FuelType | null
    transmission?: EnumTransmissionTypeNullableFilter<"Vehicle"> | $Enums.TransmissionType | null
    fipeCode?: StringNullableFilter<"Vehicle"> | string | null
    fipePrice?: FloatNullableFilter<"Vehicle"> | number | null
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    inspections?: InspectionListRelationFilter
    listings?: ListingListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    plate?: SortOrderInput | SortOrder
    chassis?: SortOrderInput | SortOrder
    renavam?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    mileage?: SortOrder
    fuelType?: SortOrderInput | SortOrder
    transmission?: SortOrderInput | SortOrder
    fipeCode?: SortOrderInput | SortOrder
    fipePrice?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    inspections?: InspectionOrderByRelationAggregateInput
    listings?: ListingOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plate?: string
    chassis?: string
    renavam?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    ownerId?: StringFilter<"Vehicle"> | string
    brand?: StringNullableFilter<"Vehicle"> | string | null
    model?: StringNullableFilter<"Vehicle"> | string | null
    year?: IntNullableFilter<"Vehicle"> | number | null
    color?: StringNullableFilter<"Vehicle"> | string | null
    mileage?: IntFilter<"Vehicle"> | number
    fuelType?: EnumFuelTypeNullableFilter<"Vehicle"> | $Enums.FuelType | null
    transmission?: EnumTransmissionTypeNullableFilter<"Vehicle"> | $Enums.TransmissionType | null
    fipeCode?: StringNullableFilter<"Vehicle"> | string | null
    fipePrice?: FloatNullableFilter<"Vehicle"> | number | null
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    inspections?: InspectionListRelationFilter
    listings?: ListingListRelationFilter
  }, "id" | "plate" | "chassis" | "renavam">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    plate?: SortOrderInput | SortOrder
    chassis?: SortOrderInput | SortOrder
    renavam?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    mileage?: SortOrder
    fuelType?: SortOrderInput | SortOrder
    transmission?: SortOrderInput | SortOrder
    fipeCode?: SortOrderInput | SortOrder
    fipePrice?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    ownerId?: StringWithAggregatesFilter<"Vehicle"> | string
    plate?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    chassis?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    renavam?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    brand?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    model?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    year?: IntNullableWithAggregatesFilter<"Vehicle"> | number | null
    color?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    mileage?: IntWithAggregatesFilter<"Vehicle"> | number
    fuelType?: EnumFuelTypeNullableWithAggregatesFilter<"Vehicle"> | $Enums.FuelType | null
    transmission?: EnumTransmissionTypeNullableWithAggregatesFilter<"Vehicle"> | $Enums.TransmissionType | null
    fipeCode?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    fipePrice?: FloatNullableWithAggregatesFilter<"Vehicle"> | number | null
    status?: EnumVehicleStatusWithAggregatesFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type InspectionWhereInput = {
    AND?: InspectionWhereInput | InspectionWhereInput[]
    OR?: InspectionWhereInput[]
    NOT?: InspectionWhereInput | InspectionWhereInput[]
    id?: StringFilter<"Inspection"> | string
    vehicleId?: StringFilter<"Inspection"> | string
    type?: EnumInspectionTypeFilter<"Inspection"> | $Enums.InspectionType
    status?: EnumInspectionStatusFilter<"Inspection"> | $Enums.InspectionStatus
    score?: IntNullableFilter<"Inspection"> | number | null
    reviewerId?: StringNullableFilter<"Inspection"> | string | null
    reviewedAt?: DateTimeNullableFilter<"Inspection"> | Date | string | null
    reviewNotes?: StringNullableFilter<"Inspection"> | string | null
    aiFlags?: StringNullableListFilter<"Inspection">
    aiProcessedAt?: DateTimeNullableFilter<"Inspection"> | Date | string | null
    createdAt?: DateTimeFilter<"Inspection"> | Date | string
    updatedAt?: DateTimeFilter<"Inspection"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    media?: InspectionMediaListRelationFilter
    items?: InspectionItemListRelationFilter
  }

  export type InspectionOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    score?: SortOrderInput | SortOrder
    reviewerId?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    reviewNotes?: SortOrderInput | SortOrder
    aiFlags?: SortOrder
    aiProcessedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    reviewer?: UserOrderByWithRelationInput
    media?: InspectionMediaOrderByRelationAggregateInput
    items?: InspectionItemOrderByRelationAggregateInput
  }

  export type InspectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InspectionWhereInput | InspectionWhereInput[]
    OR?: InspectionWhereInput[]
    NOT?: InspectionWhereInput | InspectionWhereInput[]
    vehicleId?: StringFilter<"Inspection"> | string
    type?: EnumInspectionTypeFilter<"Inspection"> | $Enums.InspectionType
    status?: EnumInspectionStatusFilter<"Inspection"> | $Enums.InspectionStatus
    score?: IntNullableFilter<"Inspection"> | number | null
    reviewerId?: StringNullableFilter<"Inspection"> | string | null
    reviewedAt?: DateTimeNullableFilter<"Inspection"> | Date | string | null
    reviewNotes?: StringNullableFilter<"Inspection"> | string | null
    aiFlags?: StringNullableListFilter<"Inspection">
    aiProcessedAt?: DateTimeNullableFilter<"Inspection"> | Date | string | null
    createdAt?: DateTimeFilter<"Inspection"> | Date | string
    updatedAt?: DateTimeFilter<"Inspection"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    media?: InspectionMediaListRelationFilter
    items?: InspectionItemListRelationFilter
  }, "id">

  export type InspectionOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    score?: SortOrderInput | SortOrder
    reviewerId?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    reviewNotes?: SortOrderInput | SortOrder
    aiFlags?: SortOrder
    aiProcessedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InspectionCountOrderByAggregateInput
    _avg?: InspectionAvgOrderByAggregateInput
    _max?: InspectionMaxOrderByAggregateInput
    _min?: InspectionMinOrderByAggregateInput
    _sum?: InspectionSumOrderByAggregateInput
  }

  export type InspectionScalarWhereWithAggregatesInput = {
    AND?: InspectionScalarWhereWithAggregatesInput | InspectionScalarWhereWithAggregatesInput[]
    OR?: InspectionScalarWhereWithAggregatesInput[]
    NOT?: InspectionScalarWhereWithAggregatesInput | InspectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inspection"> | string
    vehicleId?: StringWithAggregatesFilter<"Inspection"> | string
    type?: EnumInspectionTypeWithAggregatesFilter<"Inspection"> | $Enums.InspectionType
    status?: EnumInspectionStatusWithAggregatesFilter<"Inspection"> | $Enums.InspectionStatus
    score?: IntNullableWithAggregatesFilter<"Inspection"> | number | null
    reviewerId?: StringNullableWithAggregatesFilter<"Inspection"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"Inspection"> | Date | string | null
    reviewNotes?: StringNullableWithAggregatesFilter<"Inspection"> | string | null
    aiFlags?: StringNullableListFilter<"Inspection">
    aiProcessedAt?: DateTimeNullableWithAggregatesFilter<"Inspection"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Inspection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Inspection"> | Date | string
  }

  export type InspectionMediaWhereInput = {
    AND?: InspectionMediaWhereInput | InspectionMediaWhereInput[]
    OR?: InspectionMediaWhereInput[]
    NOT?: InspectionMediaWhereInput | InspectionMediaWhereInput[]
    id?: StringFilter<"InspectionMedia"> | string
    inspectionId?: StringFilter<"InspectionMedia"> | string
    type?: EnumMediaTypeFilter<"InspectionMedia"> | $Enums.MediaType
    url?: StringFilter<"InspectionMedia"> | string
    key?: StringFilter<"InspectionMedia"> | string
    hash?: StringFilter<"InspectionMedia"> | string
    metadata?: JsonNullableFilter<"InspectionMedia">
    createdAt?: DateTimeFilter<"InspectionMedia"> | Date | string
    inspection?: XOR<InspectionScalarRelationFilter, InspectionWhereInput>
  }

  export type InspectionMediaOrderByWithRelationInput = {
    id?: SortOrder
    inspectionId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    key?: SortOrder
    hash?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    inspection?: InspectionOrderByWithRelationInput
  }

  export type InspectionMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InspectionMediaWhereInput | InspectionMediaWhereInput[]
    OR?: InspectionMediaWhereInput[]
    NOT?: InspectionMediaWhereInput | InspectionMediaWhereInput[]
    inspectionId?: StringFilter<"InspectionMedia"> | string
    type?: EnumMediaTypeFilter<"InspectionMedia"> | $Enums.MediaType
    url?: StringFilter<"InspectionMedia"> | string
    key?: StringFilter<"InspectionMedia"> | string
    hash?: StringFilter<"InspectionMedia"> | string
    metadata?: JsonNullableFilter<"InspectionMedia">
    createdAt?: DateTimeFilter<"InspectionMedia"> | Date | string
    inspection?: XOR<InspectionScalarRelationFilter, InspectionWhereInput>
  }, "id">

  export type InspectionMediaOrderByWithAggregationInput = {
    id?: SortOrder
    inspectionId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    key?: SortOrder
    hash?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: InspectionMediaCountOrderByAggregateInput
    _max?: InspectionMediaMaxOrderByAggregateInput
    _min?: InspectionMediaMinOrderByAggregateInput
  }

  export type InspectionMediaScalarWhereWithAggregatesInput = {
    AND?: InspectionMediaScalarWhereWithAggregatesInput | InspectionMediaScalarWhereWithAggregatesInput[]
    OR?: InspectionMediaScalarWhereWithAggregatesInput[]
    NOT?: InspectionMediaScalarWhereWithAggregatesInput | InspectionMediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InspectionMedia"> | string
    inspectionId?: StringWithAggregatesFilter<"InspectionMedia"> | string
    type?: EnumMediaTypeWithAggregatesFilter<"InspectionMedia"> | $Enums.MediaType
    url?: StringWithAggregatesFilter<"InspectionMedia"> | string
    key?: StringWithAggregatesFilter<"InspectionMedia"> | string
    hash?: StringWithAggregatesFilter<"InspectionMedia"> | string
    metadata?: JsonNullableWithAggregatesFilter<"InspectionMedia">
    createdAt?: DateTimeWithAggregatesFilter<"InspectionMedia"> | Date | string
  }

  export type InspectionItemWhereInput = {
    AND?: InspectionItemWhereInput | InspectionItemWhereInput[]
    OR?: InspectionItemWhereInput[]
    NOT?: InspectionItemWhereInput | InspectionItemWhereInput[]
    id?: StringFilter<"InspectionItem"> | string
    inspectionId?: StringFilter<"InspectionItem"> | string
    category?: StringFilter<"InspectionItem"> | string
    item?: StringFilter<"InspectionItem"> | string
    result?: StringFilter<"InspectionItem"> | string
    score?: IntNullableFilter<"InspectionItem"> | number | null
    notes?: StringNullableFilter<"InspectionItem"> | string | null
    createdAt?: DateTimeFilter<"InspectionItem"> | Date | string
    inspection?: XOR<InspectionScalarRelationFilter, InspectionWhereInput>
  }

  export type InspectionItemOrderByWithRelationInput = {
    id?: SortOrder
    inspectionId?: SortOrder
    category?: SortOrder
    item?: SortOrder
    result?: SortOrder
    score?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    inspection?: InspectionOrderByWithRelationInput
  }

  export type InspectionItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InspectionItemWhereInput | InspectionItemWhereInput[]
    OR?: InspectionItemWhereInput[]
    NOT?: InspectionItemWhereInput | InspectionItemWhereInput[]
    inspectionId?: StringFilter<"InspectionItem"> | string
    category?: StringFilter<"InspectionItem"> | string
    item?: StringFilter<"InspectionItem"> | string
    result?: StringFilter<"InspectionItem"> | string
    score?: IntNullableFilter<"InspectionItem"> | number | null
    notes?: StringNullableFilter<"InspectionItem"> | string | null
    createdAt?: DateTimeFilter<"InspectionItem"> | Date | string
    inspection?: XOR<InspectionScalarRelationFilter, InspectionWhereInput>
  }, "id">

  export type InspectionItemOrderByWithAggregationInput = {
    id?: SortOrder
    inspectionId?: SortOrder
    category?: SortOrder
    item?: SortOrder
    result?: SortOrder
    score?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: InspectionItemCountOrderByAggregateInput
    _avg?: InspectionItemAvgOrderByAggregateInput
    _max?: InspectionItemMaxOrderByAggregateInput
    _min?: InspectionItemMinOrderByAggregateInput
    _sum?: InspectionItemSumOrderByAggregateInput
  }

  export type InspectionItemScalarWhereWithAggregatesInput = {
    AND?: InspectionItemScalarWhereWithAggregatesInput | InspectionItemScalarWhereWithAggregatesInput[]
    OR?: InspectionItemScalarWhereWithAggregatesInput[]
    NOT?: InspectionItemScalarWhereWithAggregatesInput | InspectionItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InspectionItem"> | string
    inspectionId?: StringWithAggregatesFilter<"InspectionItem"> | string
    category?: StringWithAggregatesFilter<"InspectionItem"> | string
    item?: StringWithAggregatesFilter<"InspectionItem"> | string
    result?: StringWithAggregatesFilter<"InspectionItem"> | string
    score?: IntNullableWithAggregatesFilter<"InspectionItem"> | number | null
    notes?: StringNullableWithAggregatesFilter<"InspectionItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InspectionItem"> | Date | string
  }

  export type ListingWhereInput = {
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    id?: StringFilter<"Listing"> | string
    vehicleId?: StringFilter<"Listing"> | string
    sellerId?: StringFilter<"Listing"> | string
    price?: FloatFilter<"Listing"> | number
    description?: StringNullableFilter<"Listing"> | string | null
    acceptsFinancing?: BoolFilter<"Listing"> | boolean
    acceptsTrade?: BoolFilter<"Listing"> | boolean
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    views?: IntFilter<"Listing"> | number
    expiresAt?: DateTimeNullableFilter<"Listing"> | Date | string | null
    soldAt?: DateTimeNullableFilter<"Listing"> | Date | string | null
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    proposals?: ProposalListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    dealerListing?: XOR<DealerListingNullableScalarRelationFilter, DealerListingWhereInput> | null
  }

  export type ListingOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    sellerId?: SortOrder
    price?: SortOrder
    description?: SortOrderInput | SortOrder
    acceptsFinancing?: SortOrder
    acceptsTrade?: SortOrder
    status?: SortOrder
    views?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    soldAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    seller?: UserOrderByWithRelationInput
    proposals?: ProposalOrderByRelationAggregateInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
    dealerListing?: DealerListingOrderByWithRelationInput
  }

  export type ListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    vehicleId?: StringFilter<"Listing"> | string
    sellerId?: StringFilter<"Listing"> | string
    price?: FloatFilter<"Listing"> | number
    description?: StringNullableFilter<"Listing"> | string | null
    acceptsFinancing?: BoolFilter<"Listing"> | boolean
    acceptsTrade?: BoolFilter<"Listing"> | boolean
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    views?: IntFilter<"Listing"> | number
    expiresAt?: DateTimeNullableFilter<"Listing"> | Date | string | null
    soldAt?: DateTimeNullableFilter<"Listing"> | Date | string | null
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    proposals?: ProposalListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    dealerListing?: XOR<DealerListingNullableScalarRelationFilter, DealerListingWhereInput> | null
  }, "id">

  export type ListingOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    sellerId?: SortOrder
    price?: SortOrder
    description?: SortOrderInput | SortOrder
    acceptsFinancing?: SortOrder
    acceptsTrade?: SortOrder
    status?: SortOrder
    views?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    soldAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ListingCountOrderByAggregateInput
    _avg?: ListingAvgOrderByAggregateInput
    _max?: ListingMaxOrderByAggregateInput
    _min?: ListingMinOrderByAggregateInput
    _sum?: ListingSumOrderByAggregateInput
  }

  export type ListingScalarWhereWithAggregatesInput = {
    AND?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    OR?: ListingScalarWhereWithAggregatesInput[]
    NOT?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Listing"> | string
    vehicleId?: StringWithAggregatesFilter<"Listing"> | string
    sellerId?: StringWithAggregatesFilter<"Listing"> | string
    price?: FloatWithAggregatesFilter<"Listing"> | number
    description?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    acceptsFinancing?: BoolWithAggregatesFilter<"Listing"> | boolean
    acceptsTrade?: BoolWithAggregatesFilter<"Listing"> | boolean
    status?: EnumListingStatusWithAggregatesFilter<"Listing"> | $Enums.ListingStatus
    views?: IntWithAggregatesFilter<"Listing"> | number
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Listing"> | Date | string | null
    soldAt?: DateTimeNullableWithAggregatesFilter<"Listing"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
  }

  export type ProposalWhereInput = {
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    id?: StringFilter<"Proposal"> | string
    listingId?: StringFilter<"Proposal"> | string
    buyerId?: StringFilter<"Proposal"> | string
    amount?: FloatFilter<"Proposal"> | number
    message?: StringNullableFilter<"Proposal"> | string | null
    status?: EnumProposalStatusFilter<"Proposal"> | $Enums.ProposalStatus
    counterAmount?: FloatNullableFilter<"Proposal"> | number | null
    respondedAt?: DateTimeNullableFilter<"Proposal"> | Date | string | null
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeFilter<"Proposal"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProposalOrderByWithRelationInput = {
    id?: SortOrder
    listingId?: SortOrder
    buyerId?: SortOrder
    amount?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    counterAmount?: SortOrderInput | SortOrder
    respondedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listing?: ListingOrderByWithRelationInput
    buyer?: UserOrderByWithRelationInput
  }

  export type ProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    listingId?: StringFilter<"Proposal"> | string
    buyerId?: StringFilter<"Proposal"> | string
    amount?: FloatFilter<"Proposal"> | number
    message?: StringNullableFilter<"Proposal"> | string | null
    status?: EnumProposalStatusFilter<"Proposal"> | $Enums.ProposalStatus
    counterAmount?: FloatNullableFilter<"Proposal"> | number | null
    respondedAt?: DateTimeNullableFilter<"Proposal"> | Date | string | null
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeFilter<"Proposal"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProposalOrderByWithAggregationInput = {
    id?: SortOrder
    listingId?: SortOrder
    buyerId?: SortOrder
    amount?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    counterAmount?: SortOrderInput | SortOrder
    respondedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProposalCountOrderByAggregateInput
    _avg?: ProposalAvgOrderByAggregateInput
    _max?: ProposalMaxOrderByAggregateInput
    _min?: ProposalMinOrderByAggregateInput
    _sum?: ProposalSumOrderByAggregateInput
  }

  export type ProposalScalarWhereWithAggregatesInput = {
    AND?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    OR?: ProposalScalarWhereWithAggregatesInput[]
    NOT?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Proposal"> | string
    listingId?: StringWithAggregatesFilter<"Proposal"> | string
    buyerId?: StringWithAggregatesFilter<"Proposal"> | string
    amount?: FloatWithAggregatesFilter<"Proposal"> | number
    message?: StringNullableWithAggregatesFilter<"Proposal"> | string | null
    status?: EnumProposalStatusWithAggregatesFilter<"Proposal"> | $Enums.ProposalStatus
    counterAmount?: FloatNullableWithAggregatesFilter<"Proposal"> | number | null
    respondedAt?: DateTimeNullableWithAggregatesFilter<"Proposal"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Proposal"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    listingId?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    readAt?: DateTimeNullableFilter<"ChatMessage"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    listingId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    listing?: ListingOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    listingId?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    readAt?: DateTimeNullableFilter<"ChatMessage"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    listingId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    listingId?: StringWithAggregatesFilter<"ChatMessage"> | string
    senderId?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    readAt?: DateTimeNullableWithAggregatesFilter<"ChatMessage"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type DealerWhereInput = {
    AND?: DealerWhereInput | DealerWhereInput[]
    OR?: DealerWhereInput[]
    NOT?: DealerWhereInput | DealerWhereInput[]
    id?: StringFilter<"Dealer"> | string
    userId?: StringFilter<"Dealer"> | string
    companyName?: StringFilter<"Dealer"> | string
    cnpj?: StringFilter<"Dealer"> | string
    plan?: EnumDealerPlanFilter<"Dealer"> | $Enums.DealerPlan
    status?: EnumDealerStatusFilter<"Dealer"> | $Enums.DealerStatus
    commissionRate?: FloatFilter<"Dealer"> | number
    createdAt?: DateTimeFilter<"Dealer"> | Date | string
    updatedAt?: DateTimeFilter<"Dealer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    listings?: DealerListingListRelationFilter
  }

  export type DealerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    cnpj?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    commissionRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    listings?: DealerListingOrderByRelationAggregateInput
  }

  export type DealerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    cnpj?: string
    AND?: DealerWhereInput | DealerWhereInput[]
    OR?: DealerWhereInput[]
    NOT?: DealerWhereInput | DealerWhereInput[]
    companyName?: StringFilter<"Dealer"> | string
    plan?: EnumDealerPlanFilter<"Dealer"> | $Enums.DealerPlan
    status?: EnumDealerStatusFilter<"Dealer"> | $Enums.DealerStatus
    commissionRate?: FloatFilter<"Dealer"> | number
    createdAt?: DateTimeFilter<"Dealer"> | Date | string
    updatedAt?: DateTimeFilter<"Dealer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    listings?: DealerListingListRelationFilter
  }, "id" | "userId" | "cnpj">

  export type DealerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    cnpj?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    commissionRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DealerCountOrderByAggregateInput
    _avg?: DealerAvgOrderByAggregateInput
    _max?: DealerMaxOrderByAggregateInput
    _min?: DealerMinOrderByAggregateInput
    _sum?: DealerSumOrderByAggregateInput
  }

  export type DealerScalarWhereWithAggregatesInput = {
    AND?: DealerScalarWhereWithAggregatesInput | DealerScalarWhereWithAggregatesInput[]
    OR?: DealerScalarWhereWithAggregatesInput[]
    NOT?: DealerScalarWhereWithAggregatesInput | DealerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dealer"> | string
    userId?: StringWithAggregatesFilter<"Dealer"> | string
    companyName?: StringWithAggregatesFilter<"Dealer"> | string
    cnpj?: StringWithAggregatesFilter<"Dealer"> | string
    plan?: EnumDealerPlanWithAggregatesFilter<"Dealer"> | $Enums.DealerPlan
    status?: EnumDealerStatusWithAggregatesFilter<"Dealer"> | $Enums.DealerStatus
    commissionRate?: FloatWithAggregatesFilter<"Dealer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Dealer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dealer"> | Date | string
  }

  export type DealerListingWhereInput = {
    AND?: DealerListingWhereInput | DealerListingWhereInput[]
    OR?: DealerListingWhereInput[]
    NOT?: DealerListingWhereInput | DealerListingWhereInput[]
    id?: StringFilter<"DealerListing"> | string
    dealerId?: StringFilter<"DealerListing"> | string
    listingId?: StringFilter<"DealerListing"> | string
    createdAt?: DateTimeFilter<"DealerListing"> | Date | string
    dealer?: XOR<DealerScalarRelationFilter, DealerWhereInput>
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }

  export type DealerListingOrderByWithRelationInput = {
    id?: SortOrder
    dealerId?: SortOrder
    listingId?: SortOrder
    createdAt?: SortOrder
    dealer?: DealerOrderByWithRelationInput
    listing?: ListingOrderByWithRelationInput
  }

  export type DealerListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    listingId?: string
    AND?: DealerListingWhereInput | DealerListingWhereInput[]
    OR?: DealerListingWhereInput[]
    NOT?: DealerListingWhereInput | DealerListingWhereInput[]
    dealerId?: StringFilter<"DealerListing"> | string
    createdAt?: DateTimeFilter<"DealerListing"> | Date | string
    dealer?: XOR<DealerScalarRelationFilter, DealerWhereInput>
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }, "id" | "listingId">

  export type DealerListingOrderByWithAggregationInput = {
    id?: SortOrder
    dealerId?: SortOrder
    listingId?: SortOrder
    createdAt?: SortOrder
    _count?: DealerListingCountOrderByAggregateInput
    _max?: DealerListingMaxOrderByAggregateInput
    _min?: DealerListingMinOrderByAggregateInput
  }

  export type DealerListingScalarWhereWithAggregatesInput = {
    AND?: DealerListingScalarWhereWithAggregatesInput | DealerListingScalarWhereWithAggregatesInput[]
    OR?: DealerListingScalarWhereWithAggregatesInput[]
    NOT?: DealerListingScalarWhereWithAggregatesInput | DealerListingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DealerListing"> | string
    dealerId?: StringWithAggregatesFilter<"DealerListing"> | string
    listingId?: StringWithAggregatesFilter<"DealerListing"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DealerListing"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    cpf?: string | null
    type?: $Enums.UserType
    status?: $Enums.UserStatus
    kycStatus?: $Enums.KycStatus
    avatarUrl?: string | null
    kycSubmittedAt?: Date | string | null
    kycApprovedAt?: Date | string | null
    kycRejectionReason?: string | null
    blockReason?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    sellerListings?: ListingCreateNestedManyWithoutSellerInput
    buyerProposals?: ProposalCreateNestedManyWithoutBuyerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    dealer?: DealerCreateNestedOneWithoutUserInput
    inspectionsReviewed?: InspectionCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    cpf?: string | null
    type?: $Enums.UserType
    status?: $Enums.UserStatus
    kycStatus?: $Enums.KycStatus
    avatarUrl?: string | null
    kycSubmittedAt?: Date | string | null
    kycApprovedAt?: Date | string | null
    kycRejectionReason?: string | null
    blockReason?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    sellerListings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    buyerProposals?: ProposalUncheckedCreateNestedManyWithoutBuyerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    dealer?: DealerUncheckedCreateNestedOneWithoutUserInput
    inspectionsReviewed?: InspectionUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    sellerListings?: ListingUpdateManyWithoutSellerNestedInput
    buyerProposals?: ProposalUpdateManyWithoutBuyerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    dealer?: DealerUpdateOneWithoutUserNestedInput
    inspectionsReviewed?: InspectionUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    sellerListings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    buyerProposals?: ProposalUncheckedUpdateManyWithoutBuyerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    dealer?: DealerUncheckedUpdateOneWithoutUserNestedInput
    inspectionsReviewed?: InspectionUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    cpf?: string | null
    type?: $Enums.UserType
    status?: $Enums.UserStatus
    kycStatus?: $Enums.KycStatus
    avatarUrl?: string | null
    kycSubmittedAt?: Date | string | null
    kycApprovedAt?: Date | string | null
    kycRejectionReason?: string | null
    blockReason?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    userId: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    userId: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    id?: string
    plate?: string | null
    chassis?: string | null
    renavam?: string | null
    brand?: string | null
    model?: string | null
    year?: number | null
    color?: string | null
    mileage?: number
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.TransmissionType | null
    fipeCode?: string | null
    fipePrice?: number | null
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutVehiclesInput
    inspections?: InspectionCreateNestedManyWithoutVehicleInput
    listings?: ListingCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    ownerId: string
    plate?: string | null
    chassis?: string | null
    renavam?: string | null
    brand?: string | null
    model?: string | null
    year?: number | null
    color?: string | null
    mileage?: number
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.TransmissionType | null
    fipeCode?: string | null
    fipePrice?: number | null
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    inspections?: InspectionUncheckedCreateNestedManyWithoutVehicleInput
    listings?: ListingUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: NullableStringFieldUpdateOperationsInput | string | null
    chassis?: NullableStringFieldUpdateOperationsInput | string | null
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType | null
    fipeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fipePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    inspections?: InspectionUpdateManyWithoutVehicleNestedInput
    listings?: ListingUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    plate?: NullableStringFieldUpdateOperationsInput | string | null
    chassis?: NullableStringFieldUpdateOperationsInput | string | null
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType | null
    fipeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fipePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspections?: InspectionUncheckedUpdateManyWithoutVehicleNestedInput
    listings?: ListingUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    ownerId: string
    plate?: string | null
    chassis?: string | null
    renavam?: string | null
    brand?: string | null
    model?: string | null
    year?: number | null
    color?: string | null
    mileage?: number
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.TransmissionType | null
    fipeCode?: string | null
    fipePrice?: number | null
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: NullableStringFieldUpdateOperationsInput | string | null
    chassis?: NullableStringFieldUpdateOperationsInput | string | null
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType | null
    fipeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fipePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    plate?: NullableStringFieldUpdateOperationsInput | string | null
    chassis?: NullableStringFieldUpdateOperationsInput | string | null
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType | null
    fipeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fipePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionCreateInput = {
    id?: string
    type?: $Enums.InspectionType
    status?: $Enums.InspectionStatus
    score?: number | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    aiFlags?: InspectionCreateaiFlagsInput | string[]
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutInspectionsInput
    reviewer?: UserCreateNestedOneWithoutInspectionsReviewedInput
    media?: InspectionMediaCreateNestedManyWithoutInspectionInput
    items?: InspectionItemCreateNestedManyWithoutInspectionInput
  }

  export type InspectionUncheckedCreateInput = {
    id?: string
    vehicleId: string
    type?: $Enums.InspectionType
    status?: $Enums.InspectionStatus
    score?: number | null
    reviewerId?: string | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    aiFlags?: InspectionCreateaiFlagsInput | string[]
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: InspectionMediaUncheckedCreateNestedManyWithoutInspectionInput
    items?: InspectionItemUncheckedCreateNestedManyWithoutInspectionInput
  }

  export type InspectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInspectionTypeFieldUpdateOperationsInput | $Enums.InspectionType
    status?: EnumInspectionStatusFieldUpdateOperationsInput | $Enums.InspectionStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    aiFlags?: InspectionUpdateaiFlagsInput | string[]
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutInspectionsNestedInput
    reviewer?: UserUpdateOneWithoutInspectionsReviewedNestedInput
    media?: InspectionMediaUpdateManyWithoutInspectionNestedInput
    items?: InspectionItemUpdateManyWithoutInspectionNestedInput
  }

  export type InspectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: EnumInspectionTypeFieldUpdateOperationsInput | $Enums.InspectionType
    status?: EnumInspectionStatusFieldUpdateOperationsInput | $Enums.InspectionStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    aiFlags?: InspectionUpdateaiFlagsInput | string[]
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: InspectionMediaUncheckedUpdateManyWithoutInspectionNestedInput
    items?: InspectionItemUncheckedUpdateManyWithoutInspectionNestedInput
  }

  export type InspectionCreateManyInput = {
    id?: string
    vehicleId: string
    type?: $Enums.InspectionType
    status?: $Enums.InspectionStatus
    score?: number | null
    reviewerId?: string | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    aiFlags?: InspectionCreateaiFlagsInput | string[]
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InspectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInspectionTypeFieldUpdateOperationsInput | $Enums.InspectionType
    status?: EnumInspectionStatusFieldUpdateOperationsInput | $Enums.InspectionStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    aiFlags?: InspectionUpdateaiFlagsInput | string[]
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: EnumInspectionTypeFieldUpdateOperationsInput | $Enums.InspectionType
    status?: EnumInspectionStatusFieldUpdateOperationsInput | $Enums.InspectionStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    aiFlags?: InspectionUpdateaiFlagsInput | string[]
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionMediaCreateInput = {
    id?: string
    type: $Enums.MediaType
    url: string
    key: string
    hash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    inspection: InspectionCreateNestedOneWithoutMediaInput
  }

  export type InspectionMediaUncheckedCreateInput = {
    id?: string
    inspectionId: string
    type: $Enums.MediaType
    url: string
    key: string
    hash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InspectionMediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspection?: InspectionUpdateOneRequiredWithoutMediaNestedInput
  }

  export type InspectionMediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inspectionId?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionMediaCreateManyInput = {
    id?: string
    inspectionId: string
    type: $Enums.MediaType
    url: string
    key: string
    hash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InspectionMediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionMediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inspectionId?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionItemCreateInput = {
    id?: string
    category: string
    item: string
    result: string
    score?: number | null
    notes?: string | null
    createdAt?: Date | string
    inspection: InspectionCreateNestedOneWithoutItemsInput
  }

  export type InspectionItemUncheckedCreateInput = {
    id?: string
    inspectionId: string
    category: string
    item: string
    result: string
    score?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type InspectionItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspection?: InspectionUpdateOneRequiredWithoutItemsNestedInput
  }

  export type InspectionItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inspectionId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionItemCreateManyInput = {
    id?: string
    inspectionId: string
    category: string
    item: string
    result: string
    score?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type InspectionItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inspectionId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingCreateInput = {
    id?: string
    price: number
    description?: string | null
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: $Enums.ListingStatus
    views?: number
    expiresAt?: Date | string | null
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutListingsInput
    seller: UserCreateNestedOneWithoutSellerListingsInput
    proposals?: ProposalCreateNestedManyWithoutListingInput
    chatMessages?: ChatMessageCreateNestedManyWithoutListingInput
    dealerListing?: DealerListingCreateNestedOneWithoutListingInput
  }

  export type ListingUncheckedCreateInput = {
    id?: string
    vehicleId: string
    sellerId: string
    price: number
    description?: string | null
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: $Enums.ListingStatus
    views?: number
    expiresAt?: Date | string | null
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    proposals?: ProposalUncheckedCreateNestedManyWithoutListingInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutListingInput
    dealerListing?: DealerListingUncheckedCreateNestedOneWithoutListingInput
  }

  export type ListingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptsFinancing?: BoolFieldUpdateOperationsInput | boolean
    acceptsTrade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    views?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutListingsNestedInput
    seller?: UserUpdateOneRequiredWithoutSellerListingsNestedInput
    proposals?: ProposalUpdateManyWithoutListingNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutListingNestedInput
    dealerListing?: DealerListingUpdateOneWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptsFinancing?: BoolFieldUpdateOperationsInput | boolean
    acceptsTrade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    views?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposals?: ProposalUncheckedUpdateManyWithoutListingNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutListingNestedInput
    dealerListing?: DealerListingUncheckedUpdateOneWithoutListingNestedInput
  }

  export type ListingCreateManyInput = {
    id?: string
    vehicleId: string
    sellerId: string
    price: number
    description?: string | null
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: $Enums.ListingStatus
    views?: number
    expiresAt?: Date | string | null
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptsFinancing?: BoolFieldUpdateOperationsInput | boolean
    acceptsTrade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    views?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptsFinancing?: BoolFieldUpdateOperationsInput | boolean
    acceptsTrade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    views?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalCreateInput = {
    id?: string
    amount: number
    message?: string | null
    status?: $Enums.ProposalStatus
    counterAmount?: number | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listing: ListingCreateNestedOneWithoutProposalsInput
    buyer: UserCreateNestedOneWithoutBuyerProposalsInput
  }

  export type ProposalUncheckedCreateInput = {
    id?: string
    listingId: string
    buyerId: string
    amount: number
    message?: string | null
    status?: $Enums.ProposalStatus
    counterAmount?: number | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProposalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    counterAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutProposalsNestedInput
    buyer?: UserUpdateOneRequiredWithoutBuyerProposalsNestedInput
  }

  export type ProposalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    counterAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalCreateManyInput = {
    id?: string
    listingId: string
    buyerId: string
    amount: number
    message?: string | null
    status?: $Enums.ProposalStatus
    counterAmount?: number | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProposalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    counterAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    counterAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    content: string
    readAt?: Date | string | null
    createdAt?: Date | string
    listing: ListingCreateNestedOneWithoutChatMessagesInput
    sender: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    listingId: string
    senderId: string
    content: string
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutChatMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    listingId: string
    senderId: string
    content: string
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealerCreateInput = {
    id?: string
    companyName: string
    cnpj: string
    plan?: $Enums.DealerPlan
    status?: $Enums.DealerStatus
    commissionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDealerInput
    listings?: DealerListingCreateNestedManyWithoutDealerInput
  }

  export type DealerUncheckedCreateInput = {
    id?: string
    userId: string
    companyName: string
    cnpj: string
    plan?: $Enums.DealerPlan
    status?: $Enums.DealerStatus
    commissionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: DealerListingUncheckedCreateNestedManyWithoutDealerInput
  }

  export type DealerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    plan?: EnumDealerPlanFieldUpdateOperationsInput | $Enums.DealerPlan
    status?: EnumDealerStatusFieldUpdateOperationsInput | $Enums.DealerStatus
    commissionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDealerNestedInput
    listings?: DealerListingUpdateManyWithoutDealerNestedInput
  }

  export type DealerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    plan?: EnumDealerPlanFieldUpdateOperationsInput | $Enums.DealerPlan
    status?: EnumDealerStatusFieldUpdateOperationsInput | $Enums.DealerStatus
    commissionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: DealerListingUncheckedUpdateManyWithoutDealerNestedInput
  }

  export type DealerCreateManyInput = {
    id?: string
    userId: string
    companyName: string
    cnpj: string
    plan?: $Enums.DealerPlan
    status?: $Enums.DealerStatus
    commissionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DealerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    plan?: EnumDealerPlanFieldUpdateOperationsInput | $Enums.DealerPlan
    status?: EnumDealerStatusFieldUpdateOperationsInput | $Enums.DealerStatus
    commissionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    plan?: EnumDealerPlanFieldUpdateOperationsInput | $Enums.DealerPlan
    status?: EnumDealerStatusFieldUpdateOperationsInput | $Enums.DealerStatus
    commissionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealerListingCreateInput = {
    id?: string
    createdAt?: Date | string
    dealer: DealerCreateNestedOneWithoutListingsInput
    listing: ListingCreateNestedOneWithoutDealerListingInput
  }

  export type DealerListingUncheckedCreateInput = {
    id?: string
    dealerId: string
    listingId: string
    createdAt?: Date | string
  }

  export type DealerListingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dealer?: DealerUpdateOneRequiredWithoutListingsNestedInput
    listing?: ListingUpdateOneRequiredWithoutDealerListingNestedInput
  }

  export type DealerListingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dealerId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealerListingCreateManyInput = {
    id?: string
    dealerId: string
    listingId: string
    createdAt?: Date | string
  }

  export type DealerListingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealerListingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dealerId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type EnumKycStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusFilter<$PrismaModel> | $Enums.KycStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type ListingListRelationFilter = {
    every?: ListingWhereInput
    some?: ListingWhereInput
    none?: ListingWhereInput
  }

  export type ProposalListRelationFilter = {
    every?: ProposalWhereInput
    some?: ProposalWhereInput
    none?: ProposalWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type DealerNullableScalarRelationFilter = {
    is?: DealerWhereInput | null
    isNot?: DealerWhereInput | null
  }

  export type InspectionListRelationFilter = {
    every?: InspectionWhereInput
    some?: InspectionWhereInput
    none?: InspectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProposalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InspectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    type?: SortOrder
    status?: SortOrder
    kycStatus?: SortOrder
    avatarUrl?: SortOrder
    kycSubmittedAt?: SortOrder
    kycApprovedAt?: SortOrder
    kycRejectionReason?: SortOrder
    blockReason?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    type?: SortOrder
    status?: SortOrder
    kycStatus?: SortOrder
    avatarUrl?: SortOrder
    kycSubmittedAt?: SortOrder
    kycApprovedAt?: SortOrder
    kycRejectionReason?: SortOrder
    blockReason?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    type?: SortOrder
    status?: SortOrder
    kycStatus?: SortOrder
    avatarUrl?: SortOrder
    kycSubmittedAt?: SortOrder
    kycApprovedAt?: SortOrder
    kycRejectionReason?: SortOrder
    blockReason?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type EnumKycStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusWithAggregatesFilter<$PrismaModel> | $Enums.KycStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycStatusFilter<$PrismaModel>
    _max?: NestedEnumKycStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumFuelTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFuelTypeNullableFilter<$PrismaModel> | $Enums.FuelType | null
  }

  export type EnumTransmissionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TransmissionType | EnumTransmissionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransmissionTypeNullableFilter<$PrismaModel> | $Enums.TransmissionType | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    plate?: SortOrder
    chassis?: SortOrder
    renavam?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    mileage?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    fipeCode?: SortOrder
    fipePrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    year?: SortOrder
    mileage?: SortOrder
    fipePrice?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    plate?: SortOrder
    chassis?: SortOrder
    renavam?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    mileage?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    fipeCode?: SortOrder
    fipePrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    plate?: SortOrder
    chassis?: SortOrder
    renavam?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    mileage?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    fipeCode?: SortOrder
    fipePrice?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    year?: SortOrder
    mileage?: SortOrder
    fipePrice?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumFuelTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFuelTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.FuelType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFuelTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumFuelTypeNullableFilter<$PrismaModel>
  }

  export type EnumTransmissionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransmissionType | EnumTransmissionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransmissionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TransmissionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTransmissionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumTransmissionTypeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type EnumInspectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InspectionType | EnumInspectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InspectionType[] | ListEnumInspectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InspectionType[] | ListEnumInspectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInspectionTypeFilter<$PrismaModel> | $Enums.InspectionType
  }

  export type EnumInspectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InspectionStatus | EnumInspectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InspectionStatus[] | ListEnumInspectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InspectionStatus[] | ListEnumInspectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInspectionStatusFilter<$PrismaModel> | $Enums.InspectionStatus
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type InspectionMediaListRelationFilter = {
    every?: InspectionMediaWhereInput
    some?: InspectionMediaWhereInput
    none?: InspectionMediaWhereInput
  }

  export type InspectionItemListRelationFilter = {
    every?: InspectionItemWhereInput
    some?: InspectionItemWhereInput
    none?: InspectionItemWhereInput
  }

  export type InspectionMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InspectionItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InspectionCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    score?: SortOrder
    reviewerId?: SortOrder
    reviewedAt?: SortOrder
    reviewNotes?: SortOrder
    aiFlags?: SortOrder
    aiProcessedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InspectionAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type InspectionMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    score?: SortOrder
    reviewerId?: SortOrder
    reviewedAt?: SortOrder
    reviewNotes?: SortOrder
    aiProcessedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InspectionMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    score?: SortOrder
    reviewerId?: SortOrder
    reviewedAt?: SortOrder
    reviewNotes?: SortOrder
    aiProcessedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InspectionSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EnumInspectionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InspectionType | EnumInspectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InspectionType[] | ListEnumInspectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InspectionType[] | ListEnumInspectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInspectionTypeWithAggregatesFilter<$PrismaModel> | $Enums.InspectionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInspectionTypeFilter<$PrismaModel>
    _max?: NestedEnumInspectionTypeFilter<$PrismaModel>
  }

  export type EnumInspectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InspectionStatus | EnumInspectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InspectionStatus[] | ListEnumInspectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InspectionStatus[] | ListEnumInspectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInspectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.InspectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInspectionStatusFilter<$PrismaModel>
    _max?: NestedEnumInspectionStatusFilter<$PrismaModel>
  }

  export type EnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type InspectionScalarRelationFilter = {
    is?: InspectionWhereInput
    isNot?: InspectionWhereInput
  }

  export type InspectionMediaCountOrderByAggregateInput = {
    id?: SortOrder
    inspectionId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    key?: SortOrder
    hash?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type InspectionMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    inspectionId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    key?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
  }

  export type InspectionMediaMinOrderByAggregateInput = {
    id?: SortOrder
    inspectionId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    key?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type InspectionItemCountOrderByAggregateInput = {
    id?: SortOrder
    inspectionId?: SortOrder
    category?: SortOrder
    item?: SortOrder
    result?: SortOrder
    score?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type InspectionItemAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type InspectionItemMaxOrderByAggregateInput = {
    id?: SortOrder
    inspectionId?: SortOrder
    category?: SortOrder
    item?: SortOrder
    result?: SortOrder
    score?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type InspectionItemMinOrderByAggregateInput = {
    id?: SortOrder
    inspectionId?: SortOrder
    category?: SortOrder
    item?: SortOrder
    result?: SortOrder
    score?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type InspectionItemSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }

  export type DealerListingNullableScalarRelationFilter = {
    is?: DealerListingWhereInput | null
    isNot?: DealerListingWhereInput | null
  }

  export type ListingCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    sellerId?: SortOrder
    price?: SortOrder
    description?: SortOrder
    acceptsFinancing?: SortOrder
    acceptsTrade?: SortOrder
    status?: SortOrder
    views?: SortOrder
    expiresAt?: SortOrder
    soldAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingAvgOrderByAggregateInput = {
    price?: SortOrder
    views?: SortOrder
  }

  export type ListingMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    sellerId?: SortOrder
    price?: SortOrder
    description?: SortOrder
    acceptsFinancing?: SortOrder
    acceptsTrade?: SortOrder
    status?: SortOrder
    views?: SortOrder
    expiresAt?: SortOrder
    soldAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    sellerId?: SortOrder
    price?: SortOrder
    description?: SortOrder
    acceptsFinancing?: SortOrder
    acceptsTrade?: SortOrder
    status?: SortOrder
    views?: SortOrder
    expiresAt?: SortOrder
    soldAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingSumOrderByAggregateInput = {
    price?: SortOrder
    views?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }

  export type EnumProposalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusFilter<$PrismaModel> | $Enums.ProposalStatus
  }

  export type ListingScalarRelationFilter = {
    is?: ListingWhereInput
    isNot?: ListingWhereInput
  }

  export type ProposalCountOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    buyerId?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    status?: SortOrder
    counterAmount?: SortOrder
    respondedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProposalAvgOrderByAggregateInput = {
    amount?: SortOrder
    counterAmount?: SortOrder
  }

  export type ProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    buyerId?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    status?: SortOrder
    counterAmount?: SortOrder
    respondedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProposalMinOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    buyerId?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    status?: SortOrder
    counterAmount?: SortOrder
    respondedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProposalSumOrderByAggregateInput = {
    amount?: SortOrder
    counterAmount?: SortOrder
  }

  export type EnumProposalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProposalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProposalStatusFilter<$PrismaModel>
    _max?: NestedEnumProposalStatusFilter<$PrismaModel>
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumDealerPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.DealerPlan | EnumDealerPlanFieldRefInput<$PrismaModel>
    in?: $Enums.DealerPlan[] | ListEnumDealerPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.DealerPlan[] | ListEnumDealerPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumDealerPlanFilter<$PrismaModel> | $Enums.DealerPlan
  }

  export type EnumDealerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DealerStatus | EnumDealerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DealerStatus[] | ListEnumDealerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DealerStatus[] | ListEnumDealerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDealerStatusFilter<$PrismaModel> | $Enums.DealerStatus
  }

  export type DealerListingListRelationFilter = {
    every?: DealerListingWhereInput
    some?: DealerListingWhereInput
    none?: DealerListingWhereInput
  }

  export type DealerListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DealerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    cnpj?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    commissionRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DealerAvgOrderByAggregateInput = {
    commissionRate?: SortOrder
  }

  export type DealerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    cnpj?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    commissionRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DealerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    cnpj?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    commissionRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DealerSumOrderByAggregateInput = {
    commissionRate?: SortOrder
  }

  export type EnumDealerPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DealerPlan | EnumDealerPlanFieldRefInput<$PrismaModel>
    in?: $Enums.DealerPlan[] | ListEnumDealerPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.DealerPlan[] | ListEnumDealerPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumDealerPlanWithAggregatesFilter<$PrismaModel> | $Enums.DealerPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDealerPlanFilter<$PrismaModel>
    _max?: NestedEnumDealerPlanFilter<$PrismaModel>
  }

  export type EnumDealerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DealerStatus | EnumDealerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DealerStatus[] | ListEnumDealerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DealerStatus[] | ListEnumDealerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDealerStatusWithAggregatesFilter<$PrismaModel> | $Enums.DealerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDealerStatusFilter<$PrismaModel>
    _max?: NestedEnumDealerStatusFilter<$PrismaModel>
  }

  export type DealerScalarRelationFilter = {
    is?: DealerWhereInput
    isNot?: DealerWhereInput
  }

  export type DealerListingCountOrderByAggregateInput = {
    id?: SortOrder
    dealerId?: SortOrder
    listingId?: SortOrder
    createdAt?: SortOrder
  }

  export type DealerListingMaxOrderByAggregateInput = {
    id?: SortOrder
    dealerId?: SortOrder
    listingId?: SortOrder
    createdAt?: SortOrder
  }

  export type DealerListingMinOrderByAggregateInput = {
    id?: SortOrder
    dealerId?: SortOrder
    listingId?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleCreateNestedManyWithoutOwnerInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type ListingCreateNestedManyWithoutSellerInput = {
    create?: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput> | ListingCreateWithoutSellerInput[] | ListingUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutSellerInput | ListingCreateOrConnectWithoutSellerInput[]
    createMany?: ListingCreateManySellerInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type ProposalCreateNestedManyWithoutBuyerInput = {
    create?: XOR<ProposalCreateWithoutBuyerInput, ProposalUncheckedCreateWithoutBuyerInput> | ProposalCreateWithoutBuyerInput[] | ProposalUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutBuyerInput | ProposalCreateOrConnectWithoutBuyerInput[]
    createMany?: ProposalCreateManyBuyerInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type DealerCreateNestedOneWithoutUserInput = {
    create?: XOR<DealerCreateWithoutUserInput, DealerUncheckedCreateWithoutUserInput>
    connectOrCreate?: DealerCreateOrConnectWithoutUserInput
    connect?: DealerWhereUniqueInput
  }

  export type InspectionCreateNestedManyWithoutReviewerInput = {
    create?: XOR<InspectionCreateWithoutReviewerInput, InspectionUncheckedCreateWithoutReviewerInput> | InspectionCreateWithoutReviewerInput[] | InspectionUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: InspectionCreateOrConnectWithoutReviewerInput | InspectionCreateOrConnectWithoutReviewerInput[]
    createMany?: InspectionCreateManyReviewerInputEnvelope
    connect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type ListingUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput> | ListingCreateWithoutSellerInput[] | ListingUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutSellerInput | ListingCreateOrConnectWithoutSellerInput[]
    createMany?: ListingCreateManySellerInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<ProposalCreateWithoutBuyerInput, ProposalUncheckedCreateWithoutBuyerInput> | ProposalCreateWithoutBuyerInput[] | ProposalUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutBuyerInput | ProposalCreateOrConnectWithoutBuyerInput[]
    createMany?: ProposalCreateManyBuyerInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type DealerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DealerCreateWithoutUserInput, DealerUncheckedCreateWithoutUserInput>
    connectOrCreate?: DealerCreateOrConnectWithoutUserInput
    connect?: DealerWhereUniqueInput
  }

  export type InspectionUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<InspectionCreateWithoutReviewerInput, InspectionUncheckedCreateWithoutReviewerInput> | InspectionCreateWithoutReviewerInput[] | InspectionUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: InspectionCreateOrConnectWithoutReviewerInput | InspectionCreateOrConnectWithoutReviewerInput[]
    createMany?: InspectionCreateManyReviewerInputEnvelope
    connect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type EnumKycStatusFieldUpdateOperationsInput = {
    set?: $Enums.KycStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VehicleUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutOwnerInput | VehicleUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutOwnerInput | VehicleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutOwnerInput | VehicleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type ListingUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput> | ListingCreateWithoutSellerInput[] | ListingUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutSellerInput | ListingCreateOrConnectWithoutSellerInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutSellerInput | ListingUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ListingCreateManySellerInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutSellerInput | ListingUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutSellerInput | ListingUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type ProposalUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<ProposalCreateWithoutBuyerInput, ProposalUncheckedCreateWithoutBuyerInput> | ProposalCreateWithoutBuyerInput[] | ProposalUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutBuyerInput | ProposalCreateOrConnectWithoutBuyerInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutBuyerInput | ProposalUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: ProposalCreateManyBuyerInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutBuyerInput | ProposalUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutBuyerInput | ProposalUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type DealerUpdateOneWithoutUserNestedInput = {
    create?: XOR<DealerCreateWithoutUserInput, DealerUncheckedCreateWithoutUserInput>
    connectOrCreate?: DealerCreateOrConnectWithoutUserInput
    upsert?: DealerUpsertWithoutUserInput
    disconnect?: DealerWhereInput | boolean
    delete?: DealerWhereInput | boolean
    connect?: DealerWhereUniqueInput
    update?: XOR<XOR<DealerUpdateToOneWithWhereWithoutUserInput, DealerUpdateWithoutUserInput>, DealerUncheckedUpdateWithoutUserInput>
  }

  export type InspectionUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<InspectionCreateWithoutReviewerInput, InspectionUncheckedCreateWithoutReviewerInput> | InspectionCreateWithoutReviewerInput[] | InspectionUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: InspectionCreateOrConnectWithoutReviewerInput | InspectionCreateOrConnectWithoutReviewerInput[]
    upsert?: InspectionUpsertWithWhereUniqueWithoutReviewerInput | InspectionUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: InspectionCreateManyReviewerInputEnvelope
    set?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    disconnect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    delete?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    connect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    update?: InspectionUpdateWithWhereUniqueWithoutReviewerInput | InspectionUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: InspectionUpdateManyWithWhereWithoutReviewerInput | InspectionUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: InspectionScalarWhereInput | InspectionScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput> | VehicleCreateWithoutOwnerInput[] | VehicleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutOwnerInput | VehicleCreateOrConnectWithoutOwnerInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutOwnerInput | VehicleUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: VehicleCreateManyOwnerInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutOwnerInput | VehicleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutOwnerInput | VehicleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type ListingUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput> | ListingCreateWithoutSellerInput[] | ListingUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutSellerInput | ListingCreateOrConnectWithoutSellerInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutSellerInput | ListingUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ListingCreateManySellerInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutSellerInput | ListingUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutSellerInput | ListingUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type ProposalUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<ProposalCreateWithoutBuyerInput, ProposalUncheckedCreateWithoutBuyerInput> | ProposalCreateWithoutBuyerInput[] | ProposalUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutBuyerInput | ProposalCreateOrConnectWithoutBuyerInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutBuyerInput | ProposalUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: ProposalCreateManyBuyerInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutBuyerInput | ProposalUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutBuyerInput | ProposalUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type DealerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DealerCreateWithoutUserInput, DealerUncheckedCreateWithoutUserInput>
    connectOrCreate?: DealerCreateOrConnectWithoutUserInput
    upsert?: DealerUpsertWithoutUserInput
    disconnect?: DealerWhereInput | boolean
    delete?: DealerWhereInput | boolean
    connect?: DealerWhereUniqueInput
    update?: XOR<XOR<DealerUpdateToOneWithWhereWithoutUserInput, DealerUpdateWithoutUserInput>, DealerUncheckedUpdateWithoutUserInput>
  }

  export type InspectionUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<InspectionCreateWithoutReviewerInput, InspectionUncheckedCreateWithoutReviewerInput> | InspectionCreateWithoutReviewerInput[] | InspectionUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: InspectionCreateOrConnectWithoutReviewerInput | InspectionCreateOrConnectWithoutReviewerInput[]
    upsert?: InspectionUpsertWithWhereUniqueWithoutReviewerInput | InspectionUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: InspectionCreateManyReviewerInputEnvelope
    set?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    disconnect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    delete?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    connect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    update?: InspectionUpdateWithWhereUniqueWithoutReviewerInput | InspectionUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: InspectionUpdateManyWithWhereWithoutReviewerInput | InspectionUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: InspectionScalarWhereInput | InspectionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    connect?: UserWhereUniqueInput
  }

  export type InspectionCreateNestedManyWithoutVehicleInput = {
    create?: XOR<InspectionCreateWithoutVehicleInput, InspectionUncheckedCreateWithoutVehicleInput> | InspectionCreateWithoutVehicleInput[] | InspectionUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: InspectionCreateOrConnectWithoutVehicleInput | InspectionCreateOrConnectWithoutVehicleInput[]
    createMany?: InspectionCreateManyVehicleInputEnvelope
    connect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
  }

  export type ListingCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ListingCreateWithoutVehicleInput, ListingUncheckedCreateWithoutVehicleInput> | ListingCreateWithoutVehicleInput[] | ListingUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutVehicleInput | ListingCreateOrConnectWithoutVehicleInput[]
    createMany?: ListingCreateManyVehicleInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type InspectionUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<InspectionCreateWithoutVehicleInput, InspectionUncheckedCreateWithoutVehicleInput> | InspectionCreateWithoutVehicleInput[] | InspectionUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: InspectionCreateOrConnectWithoutVehicleInput | InspectionCreateOrConnectWithoutVehicleInput[]
    createMany?: InspectionCreateManyVehicleInputEnvelope
    connect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
  }

  export type ListingUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ListingCreateWithoutVehicleInput, ListingUncheckedCreateWithoutVehicleInput> | ListingCreateWithoutVehicleInput[] | ListingUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutVehicleInput | ListingCreateOrConnectWithoutVehicleInput[]
    createMany?: ListingCreateManyVehicleInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumFuelTypeFieldUpdateOperationsInput = {
    set?: $Enums.FuelType | null
  }

  export type NullableEnumTransmissionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransmissionType | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumVehicleStatusFieldUpdateOperationsInput = {
    set?: $Enums.VehicleStatus
  }

  export type UserUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    upsert?: UserUpsertWithoutVehiclesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehiclesInput, UserUpdateWithoutVehiclesInput>, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type InspectionUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<InspectionCreateWithoutVehicleInput, InspectionUncheckedCreateWithoutVehicleInput> | InspectionCreateWithoutVehicleInput[] | InspectionUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: InspectionCreateOrConnectWithoutVehicleInput | InspectionCreateOrConnectWithoutVehicleInput[]
    upsert?: InspectionUpsertWithWhereUniqueWithoutVehicleInput | InspectionUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: InspectionCreateManyVehicleInputEnvelope
    set?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    disconnect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    delete?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    connect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    update?: InspectionUpdateWithWhereUniqueWithoutVehicleInput | InspectionUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: InspectionUpdateManyWithWhereWithoutVehicleInput | InspectionUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: InspectionScalarWhereInput | InspectionScalarWhereInput[]
  }

  export type ListingUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ListingCreateWithoutVehicleInput, ListingUncheckedCreateWithoutVehicleInput> | ListingCreateWithoutVehicleInput[] | ListingUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutVehicleInput | ListingCreateOrConnectWithoutVehicleInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutVehicleInput | ListingUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ListingCreateManyVehicleInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutVehicleInput | ListingUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutVehicleInput | ListingUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type InspectionUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<InspectionCreateWithoutVehicleInput, InspectionUncheckedCreateWithoutVehicleInput> | InspectionCreateWithoutVehicleInput[] | InspectionUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: InspectionCreateOrConnectWithoutVehicleInput | InspectionCreateOrConnectWithoutVehicleInput[]
    upsert?: InspectionUpsertWithWhereUniqueWithoutVehicleInput | InspectionUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: InspectionCreateManyVehicleInputEnvelope
    set?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    disconnect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    delete?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    connect?: InspectionWhereUniqueInput | InspectionWhereUniqueInput[]
    update?: InspectionUpdateWithWhereUniqueWithoutVehicleInput | InspectionUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: InspectionUpdateManyWithWhereWithoutVehicleInput | InspectionUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: InspectionScalarWhereInput | InspectionScalarWhereInput[]
  }

  export type ListingUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ListingCreateWithoutVehicleInput, ListingUncheckedCreateWithoutVehicleInput> | ListingCreateWithoutVehicleInput[] | ListingUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutVehicleInput | ListingCreateOrConnectWithoutVehicleInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutVehicleInput | ListingUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ListingCreateManyVehicleInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutVehicleInput | ListingUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutVehicleInput | ListingUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type InspectionCreateaiFlagsInput = {
    set: string[]
  }

  export type VehicleCreateNestedOneWithoutInspectionsInput = {
    create?: XOR<VehicleCreateWithoutInspectionsInput, VehicleUncheckedCreateWithoutInspectionsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutInspectionsInput
    connect?: VehicleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInspectionsReviewedInput = {
    create?: XOR<UserCreateWithoutInspectionsReviewedInput, UserUncheckedCreateWithoutInspectionsReviewedInput>
    connectOrCreate?: UserCreateOrConnectWithoutInspectionsReviewedInput
    connect?: UserWhereUniqueInput
  }

  export type InspectionMediaCreateNestedManyWithoutInspectionInput = {
    create?: XOR<InspectionMediaCreateWithoutInspectionInput, InspectionMediaUncheckedCreateWithoutInspectionInput> | InspectionMediaCreateWithoutInspectionInput[] | InspectionMediaUncheckedCreateWithoutInspectionInput[]
    connectOrCreate?: InspectionMediaCreateOrConnectWithoutInspectionInput | InspectionMediaCreateOrConnectWithoutInspectionInput[]
    createMany?: InspectionMediaCreateManyInspectionInputEnvelope
    connect?: InspectionMediaWhereUniqueInput | InspectionMediaWhereUniqueInput[]
  }

  export type InspectionItemCreateNestedManyWithoutInspectionInput = {
    create?: XOR<InspectionItemCreateWithoutInspectionInput, InspectionItemUncheckedCreateWithoutInspectionInput> | InspectionItemCreateWithoutInspectionInput[] | InspectionItemUncheckedCreateWithoutInspectionInput[]
    connectOrCreate?: InspectionItemCreateOrConnectWithoutInspectionInput | InspectionItemCreateOrConnectWithoutInspectionInput[]
    createMany?: InspectionItemCreateManyInspectionInputEnvelope
    connect?: InspectionItemWhereUniqueInput | InspectionItemWhereUniqueInput[]
  }

  export type InspectionMediaUncheckedCreateNestedManyWithoutInspectionInput = {
    create?: XOR<InspectionMediaCreateWithoutInspectionInput, InspectionMediaUncheckedCreateWithoutInspectionInput> | InspectionMediaCreateWithoutInspectionInput[] | InspectionMediaUncheckedCreateWithoutInspectionInput[]
    connectOrCreate?: InspectionMediaCreateOrConnectWithoutInspectionInput | InspectionMediaCreateOrConnectWithoutInspectionInput[]
    createMany?: InspectionMediaCreateManyInspectionInputEnvelope
    connect?: InspectionMediaWhereUniqueInput | InspectionMediaWhereUniqueInput[]
  }

  export type InspectionItemUncheckedCreateNestedManyWithoutInspectionInput = {
    create?: XOR<InspectionItemCreateWithoutInspectionInput, InspectionItemUncheckedCreateWithoutInspectionInput> | InspectionItemCreateWithoutInspectionInput[] | InspectionItemUncheckedCreateWithoutInspectionInput[]
    connectOrCreate?: InspectionItemCreateOrConnectWithoutInspectionInput | InspectionItemCreateOrConnectWithoutInspectionInput[]
    createMany?: InspectionItemCreateManyInspectionInputEnvelope
    connect?: InspectionItemWhereUniqueInput | InspectionItemWhereUniqueInput[]
  }

  export type EnumInspectionTypeFieldUpdateOperationsInput = {
    set?: $Enums.InspectionType
  }

  export type EnumInspectionStatusFieldUpdateOperationsInput = {
    set?: $Enums.InspectionStatus
  }

  export type InspectionUpdateaiFlagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type VehicleUpdateOneRequiredWithoutInspectionsNestedInput = {
    create?: XOR<VehicleCreateWithoutInspectionsInput, VehicleUncheckedCreateWithoutInspectionsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutInspectionsInput
    upsert?: VehicleUpsertWithoutInspectionsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutInspectionsInput, VehicleUpdateWithoutInspectionsInput>, VehicleUncheckedUpdateWithoutInspectionsInput>
  }

  export type UserUpdateOneWithoutInspectionsReviewedNestedInput = {
    create?: XOR<UserCreateWithoutInspectionsReviewedInput, UserUncheckedCreateWithoutInspectionsReviewedInput>
    connectOrCreate?: UserCreateOrConnectWithoutInspectionsReviewedInput
    upsert?: UserUpsertWithoutInspectionsReviewedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInspectionsReviewedInput, UserUpdateWithoutInspectionsReviewedInput>, UserUncheckedUpdateWithoutInspectionsReviewedInput>
  }

  export type InspectionMediaUpdateManyWithoutInspectionNestedInput = {
    create?: XOR<InspectionMediaCreateWithoutInspectionInput, InspectionMediaUncheckedCreateWithoutInspectionInput> | InspectionMediaCreateWithoutInspectionInput[] | InspectionMediaUncheckedCreateWithoutInspectionInput[]
    connectOrCreate?: InspectionMediaCreateOrConnectWithoutInspectionInput | InspectionMediaCreateOrConnectWithoutInspectionInput[]
    upsert?: InspectionMediaUpsertWithWhereUniqueWithoutInspectionInput | InspectionMediaUpsertWithWhereUniqueWithoutInspectionInput[]
    createMany?: InspectionMediaCreateManyInspectionInputEnvelope
    set?: InspectionMediaWhereUniqueInput | InspectionMediaWhereUniqueInput[]
    disconnect?: InspectionMediaWhereUniqueInput | InspectionMediaWhereUniqueInput[]
    delete?: InspectionMediaWhereUniqueInput | InspectionMediaWhereUniqueInput[]
    connect?: InspectionMediaWhereUniqueInput | InspectionMediaWhereUniqueInput[]
    update?: InspectionMediaUpdateWithWhereUniqueWithoutInspectionInput | InspectionMediaUpdateWithWhereUniqueWithoutInspectionInput[]
    updateMany?: InspectionMediaUpdateManyWithWhereWithoutInspectionInput | InspectionMediaUpdateManyWithWhereWithoutInspectionInput[]
    deleteMany?: InspectionMediaScalarWhereInput | InspectionMediaScalarWhereInput[]
  }

  export type InspectionItemUpdateManyWithoutInspectionNestedInput = {
    create?: XOR<InspectionItemCreateWithoutInspectionInput, InspectionItemUncheckedCreateWithoutInspectionInput> | InspectionItemCreateWithoutInspectionInput[] | InspectionItemUncheckedCreateWithoutInspectionInput[]
    connectOrCreate?: InspectionItemCreateOrConnectWithoutInspectionInput | InspectionItemCreateOrConnectWithoutInspectionInput[]
    upsert?: InspectionItemUpsertWithWhereUniqueWithoutInspectionInput | InspectionItemUpsertWithWhereUniqueWithoutInspectionInput[]
    createMany?: InspectionItemCreateManyInspectionInputEnvelope
    set?: InspectionItemWhereUniqueInput | InspectionItemWhereUniqueInput[]
    disconnect?: InspectionItemWhereUniqueInput | InspectionItemWhereUniqueInput[]
    delete?: InspectionItemWhereUniqueInput | InspectionItemWhereUniqueInput[]
    connect?: InspectionItemWhereUniqueInput | InspectionItemWhereUniqueInput[]
    update?: InspectionItemUpdateWithWhereUniqueWithoutInspectionInput | InspectionItemUpdateWithWhereUniqueWithoutInspectionInput[]
    updateMany?: InspectionItemUpdateManyWithWhereWithoutInspectionInput | InspectionItemUpdateManyWithWhereWithoutInspectionInput[]
    deleteMany?: InspectionItemScalarWhereInput | InspectionItemScalarWhereInput[]
  }

  export type InspectionMediaUncheckedUpdateManyWithoutInspectionNestedInput = {
    create?: XOR<InspectionMediaCreateWithoutInspectionInput, InspectionMediaUncheckedCreateWithoutInspectionInput> | InspectionMediaCreateWithoutInspectionInput[] | InspectionMediaUncheckedCreateWithoutInspectionInput[]
    connectOrCreate?: InspectionMediaCreateOrConnectWithoutInspectionInput | InspectionMediaCreateOrConnectWithoutInspectionInput[]
    upsert?: InspectionMediaUpsertWithWhereUniqueWithoutInspectionInput | InspectionMediaUpsertWithWhereUniqueWithoutInspectionInput[]
    createMany?: InspectionMediaCreateManyInspectionInputEnvelope
    set?: InspectionMediaWhereUniqueInput | InspectionMediaWhereUniqueInput[]
    disconnect?: InspectionMediaWhereUniqueInput | InspectionMediaWhereUniqueInput[]
    delete?: InspectionMediaWhereUniqueInput | InspectionMediaWhereUniqueInput[]
    connect?: InspectionMediaWhereUniqueInput | InspectionMediaWhereUniqueInput[]
    update?: InspectionMediaUpdateWithWhereUniqueWithoutInspectionInput | InspectionMediaUpdateWithWhereUniqueWithoutInspectionInput[]
    updateMany?: InspectionMediaUpdateManyWithWhereWithoutInspectionInput | InspectionMediaUpdateManyWithWhereWithoutInspectionInput[]
    deleteMany?: InspectionMediaScalarWhereInput | InspectionMediaScalarWhereInput[]
  }

  export type InspectionItemUncheckedUpdateManyWithoutInspectionNestedInput = {
    create?: XOR<InspectionItemCreateWithoutInspectionInput, InspectionItemUncheckedCreateWithoutInspectionInput> | InspectionItemCreateWithoutInspectionInput[] | InspectionItemUncheckedCreateWithoutInspectionInput[]
    connectOrCreate?: InspectionItemCreateOrConnectWithoutInspectionInput | InspectionItemCreateOrConnectWithoutInspectionInput[]
    upsert?: InspectionItemUpsertWithWhereUniqueWithoutInspectionInput | InspectionItemUpsertWithWhereUniqueWithoutInspectionInput[]
    createMany?: InspectionItemCreateManyInspectionInputEnvelope
    set?: InspectionItemWhereUniqueInput | InspectionItemWhereUniqueInput[]
    disconnect?: InspectionItemWhereUniqueInput | InspectionItemWhereUniqueInput[]
    delete?: InspectionItemWhereUniqueInput | InspectionItemWhereUniqueInput[]
    connect?: InspectionItemWhereUniqueInput | InspectionItemWhereUniqueInput[]
    update?: InspectionItemUpdateWithWhereUniqueWithoutInspectionInput | InspectionItemUpdateWithWhereUniqueWithoutInspectionInput[]
    updateMany?: InspectionItemUpdateManyWithWhereWithoutInspectionInput | InspectionItemUpdateManyWithWhereWithoutInspectionInput[]
    deleteMany?: InspectionItemScalarWhereInput | InspectionItemScalarWhereInput[]
  }

  export type InspectionCreateNestedOneWithoutMediaInput = {
    create?: XOR<InspectionCreateWithoutMediaInput, InspectionUncheckedCreateWithoutMediaInput>
    connectOrCreate?: InspectionCreateOrConnectWithoutMediaInput
    connect?: InspectionWhereUniqueInput
  }

  export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType
  }

  export type InspectionUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<InspectionCreateWithoutMediaInput, InspectionUncheckedCreateWithoutMediaInput>
    connectOrCreate?: InspectionCreateOrConnectWithoutMediaInput
    upsert?: InspectionUpsertWithoutMediaInput
    connect?: InspectionWhereUniqueInput
    update?: XOR<XOR<InspectionUpdateToOneWithWhereWithoutMediaInput, InspectionUpdateWithoutMediaInput>, InspectionUncheckedUpdateWithoutMediaInput>
  }

  export type InspectionCreateNestedOneWithoutItemsInput = {
    create?: XOR<InspectionCreateWithoutItemsInput, InspectionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InspectionCreateOrConnectWithoutItemsInput
    connect?: InspectionWhereUniqueInput
  }

  export type InspectionUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<InspectionCreateWithoutItemsInput, InspectionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InspectionCreateOrConnectWithoutItemsInput
    upsert?: InspectionUpsertWithoutItemsInput
    connect?: InspectionWhereUniqueInput
    update?: XOR<XOR<InspectionUpdateToOneWithWhereWithoutItemsInput, InspectionUpdateWithoutItemsInput>, InspectionUncheckedUpdateWithoutItemsInput>
  }

  export type VehicleCreateNestedOneWithoutListingsInput = {
    create?: XOR<VehicleCreateWithoutListingsInput, VehicleUncheckedCreateWithoutListingsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutListingsInput
    connect?: VehicleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSellerListingsInput = {
    create?: XOR<UserCreateWithoutSellerListingsInput, UserUncheckedCreateWithoutSellerListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSellerListingsInput
    connect?: UserWhereUniqueInput
  }

  export type ProposalCreateNestedManyWithoutListingInput = {
    create?: XOR<ProposalCreateWithoutListingInput, ProposalUncheckedCreateWithoutListingInput> | ProposalCreateWithoutListingInput[] | ProposalUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutListingInput | ProposalCreateOrConnectWithoutListingInput[]
    createMany?: ProposalCreateManyListingInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutListingInput = {
    create?: XOR<ChatMessageCreateWithoutListingInput, ChatMessageUncheckedCreateWithoutListingInput> | ChatMessageCreateWithoutListingInput[] | ChatMessageUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutListingInput | ChatMessageCreateOrConnectWithoutListingInput[]
    createMany?: ChatMessageCreateManyListingInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type DealerListingCreateNestedOneWithoutListingInput = {
    create?: XOR<DealerListingCreateWithoutListingInput, DealerListingUncheckedCreateWithoutListingInput>
    connectOrCreate?: DealerListingCreateOrConnectWithoutListingInput
    connect?: DealerListingWhereUniqueInput
  }

  export type ProposalUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<ProposalCreateWithoutListingInput, ProposalUncheckedCreateWithoutListingInput> | ProposalCreateWithoutListingInput[] | ProposalUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutListingInput | ProposalCreateOrConnectWithoutListingInput[]
    createMany?: ProposalCreateManyListingInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<ChatMessageCreateWithoutListingInput, ChatMessageUncheckedCreateWithoutListingInput> | ChatMessageCreateWithoutListingInput[] | ChatMessageUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutListingInput | ChatMessageCreateOrConnectWithoutListingInput[]
    createMany?: ChatMessageCreateManyListingInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type DealerListingUncheckedCreateNestedOneWithoutListingInput = {
    create?: XOR<DealerListingCreateWithoutListingInput, DealerListingUncheckedCreateWithoutListingInput>
    connectOrCreate?: DealerListingCreateOrConnectWithoutListingInput
    connect?: DealerListingWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumListingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ListingStatus
  }

  export type VehicleUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<VehicleCreateWithoutListingsInput, VehicleUncheckedCreateWithoutListingsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutListingsInput
    upsert?: VehicleUpsertWithoutListingsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutListingsInput, VehicleUpdateWithoutListingsInput>, VehicleUncheckedUpdateWithoutListingsInput>
  }

  export type UserUpdateOneRequiredWithoutSellerListingsNestedInput = {
    create?: XOR<UserCreateWithoutSellerListingsInput, UserUncheckedCreateWithoutSellerListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSellerListingsInput
    upsert?: UserUpsertWithoutSellerListingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSellerListingsInput, UserUpdateWithoutSellerListingsInput>, UserUncheckedUpdateWithoutSellerListingsInput>
  }

  export type ProposalUpdateManyWithoutListingNestedInput = {
    create?: XOR<ProposalCreateWithoutListingInput, ProposalUncheckedCreateWithoutListingInput> | ProposalCreateWithoutListingInput[] | ProposalUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutListingInput | ProposalCreateOrConnectWithoutListingInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutListingInput | ProposalUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ProposalCreateManyListingInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutListingInput | ProposalUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutListingInput | ProposalUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutListingNestedInput = {
    create?: XOR<ChatMessageCreateWithoutListingInput, ChatMessageUncheckedCreateWithoutListingInput> | ChatMessageCreateWithoutListingInput[] | ChatMessageUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutListingInput | ChatMessageCreateOrConnectWithoutListingInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutListingInput | ChatMessageUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ChatMessageCreateManyListingInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutListingInput | ChatMessageUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutListingInput | ChatMessageUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type DealerListingUpdateOneWithoutListingNestedInput = {
    create?: XOR<DealerListingCreateWithoutListingInput, DealerListingUncheckedCreateWithoutListingInput>
    connectOrCreate?: DealerListingCreateOrConnectWithoutListingInput
    upsert?: DealerListingUpsertWithoutListingInput
    disconnect?: DealerListingWhereInput | boolean
    delete?: DealerListingWhereInput | boolean
    connect?: DealerListingWhereUniqueInput
    update?: XOR<XOR<DealerListingUpdateToOneWithWhereWithoutListingInput, DealerListingUpdateWithoutListingInput>, DealerListingUncheckedUpdateWithoutListingInput>
  }

  export type ProposalUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<ProposalCreateWithoutListingInput, ProposalUncheckedCreateWithoutListingInput> | ProposalCreateWithoutListingInput[] | ProposalUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutListingInput | ProposalCreateOrConnectWithoutListingInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutListingInput | ProposalUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ProposalCreateManyListingInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutListingInput | ProposalUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutListingInput | ProposalUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<ChatMessageCreateWithoutListingInput, ChatMessageUncheckedCreateWithoutListingInput> | ChatMessageCreateWithoutListingInput[] | ChatMessageUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutListingInput | ChatMessageCreateOrConnectWithoutListingInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutListingInput | ChatMessageUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ChatMessageCreateManyListingInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutListingInput | ChatMessageUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutListingInput | ChatMessageUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type DealerListingUncheckedUpdateOneWithoutListingNestedInput = {
    create?: XOR<DealerListingCreateWithoutListingInput, DealerListingUncheckedCreateWithoutListingInput>
    connectOrCreate?: DealerListingCreateOrConnectWithoutListingInput
    upsert?: DealerListingUpsertWithoutListingInput
    disconnect?: DealerListingWhereInput | boolean
    delete?: DealerListingWhereInput | boolean
    connect?: DealerListingWhereUniqueInput
    update?: XOR<XOR<DealerListingUpdateToOneWithWhereWithoutListingInput, DealerListingUpdateWithoutListingInput>, DealerListingUncheckedUpdateWithoutListingInput>
  }

  export type ListingCreateNestedOneWithoutProposalsInput = {
    create?: XOR<ListingCreateWithoutProposalsInput, ListingUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutProposalsInput
    connect?: ListingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBuyerProposalsInput = {
    create?: XOR<UserCreateWithoutBuyerProposalsInput, UserUncheckedCreateWithoutBuyerProposalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBuyerProposalsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumProposalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProposalStatus
  }

  export type ListingUpdateOneRequiredWithoutProposalsNestedInput = {
    create?: XOR<ListingCreateWithoutProposalsInput, ListingUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutProposalsInput
    upsert?: ListingUpsertWithoutProposalsInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutProposalsInput, ListingUpdateWithoutProposalsInput>, ListingUncheckedUpdateWithoutProposalsInput>
  }

  export type UserUpdateOneRequiredWithoutBuyerProposalsNestedInput = {
    create?: XOR<UserCreateWithoutBuyerProposalsInput, UserUncheckedCreateWithoutBuyerProposalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBuyerProposalsInput
    upsert?: UserUpsertWithoutBuyerProposalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBuyerProposalsInput, UserUpdateWithoutBuyerProposalsInput>, UserUncheckedUpdateWithoutBuyerProposalsInput>
  }

  export type ListingCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<ListingCreateWithoutChatMessagesInput, ListingUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutChatMessagesInput
    connect?: ListingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ListingUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<ListingCreateWithoutChatMessagesInput, ListingUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutChatMessagesInput
    upsert?: ListingUpsertWithoutChatMessagesInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutChatMessagesInput, ListingUpdateWithoutChatMessagesInput>, ListingUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    upsert?: UserUpsertWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMessagesInput, UserUpdateWithoutChatMessagesInput>, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserCreateNestedOneWithoutDealerInput = {
    create?: XOR<UserCreateWithoutDealerInput, UserUncheckedCreateWithoutDealerInput>
    connectOrCreate?: UserCreateOrConnectWithoutDealerInput
    connect?: UserWhereUniqueInput
  }

  export type DealerListingCreateNestedManyWithoutDealerInput = {
    create?: XOR<DealerListingCreateWithoutDealerInput, DealerListingUncheckedCreateWithoutDealerInput> | DealerListingCreateWithoutDealerInput[] | DealerListingUncheckedCreateWithoutDealerInput[]
    connectOrCreate?: DealerListingCreateOrConnectWithoutDealerInput | DealerListingCreateOrConnectWithoutDealerInput[]
    createMany?: DealerListingCreateManyDealerInputEnvelope
    connect?: DealerListingWhereUniqueInput | DealerListingWhereUniqueInput[]
  }

  export type DealerListingUncheckedCreateNestedManyWithoutDealerInput = {
    create?: XOR<DealerListingCreateWithoutDealerInput, DealerListingUncheckedCreateWithoutDealerInput> | DealerListingCreateWithoutDealerInput[] | DealerListingUncheckedCreateWithoutDealerInput[]
    connectOrCreate?: DealerListingCreateOrConnectWithoutDealerInput | DealerListingCreateOrConnectWithoutDealerInput[]
    createMany?: DealerListingCreateManyDealerInputEnvelope
    connect?: DealerListingWhereUniqueInput | DealerListingWhereUniqueInput[]
  }

  export type EnumDealerPlanFieldUpdateOperationsInput = {
    set?: $Enums.DealerPlan
  }

  export type EnumDealerStatusFieldUpdateOperationsInput = {
    set?: $Enums.DealerStatus
  }

  export type UserUpdateOneRequiredWithoutDealerNestedInput = {
    create?: XOR<UserCreateWithoutDealerInput, UserUncheckedCreateWithoutDealerInput>
    connectOrCreate?: UserCreateOrConnectWithoutDealerInput
    upsert?: UserUpsertWithoutDealerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDealerInput, UserUpdateWithoutDealerInput>, UserUncheckedUpdateWithoutDealerInput>
  }

  export type DealerListingUpdateManyWithoutDealerNestedInput = {
    create?: XOR<DealerListingCreateWithoutDealerInput, DealerListingUncheckedCreateWithoutDealerInput> | DealerListingCreateWithoutDealerInput[] | DealerListingUncheckedCreateWithoutDealerInput[]
    connectOrCreate?: DealerListingCreateOrConnectWithoutDealerInput | DealerListingCreateOrConnectWithoutDealerInput[]
    upsert?: DealerListingUpsertWithWhereUniqueWithoutDealerInput | DealerListingUpsertWithWhereUniqueWithoutDealerInput[]
    createMany?: DealerListingCreateManyDealerInputEnvelope
    set?: DealerListingWhereUniqueInput | DealerListingWhereUniqueInput[]
    disconnect?: DealerListingWhereUniqueInput | DealerListingWhereUniqueInput[]
    delete?: DealerListingWhereUniqueInput | DealerListingWhereUniqueInput[]
    connect?: DealerListingWhereUniqueInput | DealerListingWhereUniqueInput[]
    update?: DealerListingUpdateWithWhereUniqueWithoutDealerInput | DealerListingUpdateWithWhereUniqueWithoutDealerInput[]
    updateMany?: DealerListingUpdateManyWithWhereWithoutDealerInput | DealerListingUpdateManyWithWhereWithoutDealerInput[]
    deleteMany?: DealerListingScalarWhereInput | DealerListingScalarWhereInput[]
  }

  export type DealerListingUncheckedUpdateManyWithoutDealerNestedInput = {
    create?: XOR<DealerListingCreateWithoutDealerInput, DealerListingUncheckedCreateWithoutDealerInput> | DealerListingCreateWithoutDealerInput[] | DealerListingUncheckedCreateWithoutDealerInput[]
    connectOrCreate?: DealerListingCreateOrConnectWithoutDealerInput | DealerListingCreateOrConnectWithoutDealerInput[]
    upsert?: DealerListingUpsertWithWhereUniqueWithoutDealerInput | DealerListingUpsertWithWhereUniqueWithoutDealerInput[]
    createMany?: DealerListingCreateManyDealerInputEnvelope
    set?: DealerListingWhereUniqueInput | DealerListingWhereUniqueInput[]
    disconnect?: DealerListingWhereUniqueInput | DealerListingWhereUniqueInput[]
    delete?: DealerListingWhereUniqueInput | DealerListingWhereUniqueInput[]
    connect?: DealerListingWhereUniqueInput | DealerListingWhereUniqueInput[]
    update?: DealerListingUpdateWithWhereUniqueWithoutDealerInput | DealerListingUpdateWithWhereUniqueWithoutDealerInput[]
    updateMany?: DealerListingUpdateManyWithWhereWithoutDealerInput | DealerListingUpdateManyWithWhereWithoutDealerInput[]
    deleteMany?: DealerListingScalarWhereInput | DealerListingScalarWhereInput[]
  }

  export type DealerCreateNestedOneWithoutListingsInput = {
    create?: XOR<DealerCreateWithoutListingsInput, DealerUncheckedCreateWithoutListingsInput>
    connectOrCreate?: DealerCreateOrConnectWithoutListingsInput
    connect?: DealerWhereUniqueInput
  }

  export type ListingCreateNestedOneWithoutDealerListingInput = {
    create?: XOR<ListingCreateWithoutDealerListingInput, ListingUncheckedCreateWithoutDealerListingInput>
    connectOrCreate?: ListingCreateOrConnectWithoutDealerListingInput
    connect?: ListingWhereUniqueInput
  }

  export type DealerUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<DealerCreateWithoutListingsInput, DealerUncheckedCreateWithoutListingsInput>
    connectOrCreate?: DealerCreateOrConnectWithoutListingsInput
    upsert?: DealerUpsertWithoutListingsInput
    connect?: DealerWhereUniqueInput
    update?: XOR<XOR<DealerUpdateToOneWithWhereWithoutListingsInput, DealerUpdateWithoutListingsInput>, DealerUncheckedUpdateWithoutListingsInput>
  }

  export type ListingUpdateOneRequiredWithoutDealerListingNestedInput = {
    create?: XOR<ListingCreateWithoutDealerListingInput, ListingUncheckedCreateWithoutDealerListingInput>
    connectOrCreate?: ListingCreateOrConnectWithoutDealerListingInput
    upsert?: ListingUpsertWithoutDealerListingInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutDealerListingInput, ListingUpdateWithoutDealerListingInput>, ListingUncheckedUpdateWithoutDealerListingInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumKycStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusFilter<$PrismaModel> | $Enums.KycStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedEnumKycStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusWithAggregatesFilter<$PrismaModel> | $Enums.KycStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycStatusFilter<$PrismaModel>
    _max?: NestedEnumKycStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumFuelTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFuelTypeNullableFilter<$PrismaModel> | $Enums.FuelType | null
  }

  export type NestedEnumTransmissionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TransmissionType | EnumTransmissionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransmissionTypeNullableFilter<$PrismaModel> | $Enums.TransmissionType | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumFuelTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFuelTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.FuelType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFuelTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumFuelTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTransmissionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransmissionType | EnumTransmissionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransmissionType[] | ListEnumTransmissionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransmissionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TransmissionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTransmissionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumTransmissionTypeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type NestedEnumInspectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InspectionType | EnumInspectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InspectionType[] | ListEnumInspectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InspectionType[] | ListEnumInspectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInspectionTypeFilter<$PrismaModel> | $Enums.InspectionType
  }

  export type NestedEnumInspectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InspectionStatus | EnumInspectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InspectionStatus[] | ListEnumInspectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InspectionStatus[] | ListEnumInspectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInspectionStatusFilter<$PrismaModel> | $Enums.InspectionStatus
  }

  export type NestedEnumInspectionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InspectionType | EnumInspectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InspectionType[] | ListEnumInspectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InspectionType[] | ListEnumInspectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInspectionTypeWithAggregatesFilter<$PrismaModel> | $Enums.InspectionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInspectionTypeFilter<$PrismaModel>
    _max?: NestedEnumInspectionTypeFilter<$PrismaModel>
  }

  export type NestedEnumInspectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InspectionStatus | EnumInspectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InspectionStatus[] | ListEnumInspectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InspectionStatus[] | ListEnumInspectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInspectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.InspectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInspectionStatusFilter<$PrismaModel>
    _max?: NestedEnumInspectionStatusFilter<$PrismaModel>
  }

  export type NestedEnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }

  export type NestedEnumProposalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusFilter<$PrismaModel> | $Enums.ProposalStatus
  }

  export type NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProposalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProposalStatusFilter<$PrismaModel>
    _max?: NestedEnumProposalStatusFilter<$PrismaModel>
  }

  export type NestedEnumDealerPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.DealerPlan | EnumDealerPlanFieldRefInput<$PrismaModel>
    in?: $Enums.DealerPlan[] | ListEnumDealerPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.DealerPlan[] | ListEnumDealerPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumDealerPlanFilter<$PrismaModel> | $Enums.DealerPlan
  }

  export type NestedEnumDealerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DealerStatus | EnumDealerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DealerStatus[] | ListEnumDealerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DealerStatus[] | ListEnumDealerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDealerStatusFilter<$PrismaModel> | $Enums.DealerStatus
  }

  export type NestedEnumDealerPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DealerPlan | EnumDealerPlanFieldRefInput<$PrismaModel>
    in?: $Enums.DealerPlan[] | ListEnumDealerPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.DealerPlan[] | ListEnumDealerPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumDealerPlanWithAggregatesFilter<$PrismaModel> | $Enums.DealerPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDealerPlanFilter<$PrismaModel>
    _max?: NestedEnumDealerPlanFilter<$PrismaModel>
  }

  export type NestedEnumDealerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DealerStatus | EnumDealerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DealerStatus[] | ListEnumDealerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DealerStatus[] | ListEnumDealerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDealerStatusWithAggregatesFilter<$PrismaModel> | $Enums.DealerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDealerStatusFilter<$PrismaModel>
    _max?: NestedEnumDealerStatusFilter<$PrismaModel>
  }

  export type VehicleCreateWithoutOwnerInput = {
    id?: string
    plate?: string | null
    chassis?: string | null
    renavam?: string | null
    brand?: string | null
    model?: string | null
    year?: number | null
    color?: string | null
    mileage?: number
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.TransmissionType | null
    fipeCode?: string | null
    fipePrice?: number | null
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    inspections?: InspectionCreateNestedManyWithoutVehicleInput
    listings?: ListingCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutOwnerInput = {
    id?: string
    plate?: string | null
    chassis?: string | null
    renavam?: string | null
    brand?: string | null
    model?: string | null
    year?: number | null
    color?: string | null
    mileage?: number
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.TransmissionType | null
    fipeCode?: string | null
    fipePrice?: number | null
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    inspections?: InspectionUncheckedCreateNestedManyWithoutVehicleInput
    listings?: ListingUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutOwnerInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput>
  }

  export type VehicleCreateManyOwnerInputEnvelope = {
    data: VehicleCreateManyOwnerInput | VehicleCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ListingCreateWithoutSellerInput = {
    id?: string
    price: number
    description?: string | null
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: $Enums.ListingStatus
    views?: number
    expiresAt?: Date | string | null
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutListingsInput
    proposals?: ProposalCreateNestedManyWithoutListingInput
    chatMessages?: ChatMessageCreateNestedManyWithoutListingInput
    dealerListing?: DealerListingCreateNestedOneWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutSellerInput = {
    id?: string
    vehicleId: string
    price: number
    description?: string | null
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: $Enums.ListingStatus
    views?: number
    expiresAt?: Date | string | null
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    proposals?: ProposalUncheckedCreateNestedManyWithoutListingInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutListingInput
    dealerListing?: DealerListingUncheckedCreateNestedOneWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutSellerInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput>
  }

  export type ListingCreateManySellerInputEnvelope = {
    data: ListingCreateManySellerInput | ListingCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type ProposalCreateWithoutBuyerInput = {
    id?: string
    amount: number
    message?: string | null
    status?: $Enums.ProposalStatus
    counterAmount?: number | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listing: ListingCreateNestedOneWithoutProposalsInput
  }

  export type ProposalUncheckedCreateWithoutBuyerInput = {
    id?: string
    listingId: string
    amount: number
    message?: string | null
    status?: $Enums.ProposalStatus
    counterAmount?: number | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProposalCreateOrConnectWithoutBuyerInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutBuyerInput, ProposalUncheckedCreateWithoutBuyerInput>
  }

  export type ProposalCreateManyBuyerInputEnvelope = {
    data: ProposalCreateManyBuyerInput | ProposalCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutSenderInput = {
    id?: string
    content: string
    readAt?: Date | string | null
    createdAt?: Date | string
    listing: ListingCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutSenderInput = {
    id?: string
    listingId: string
    content: string
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageCreateManySenderInputEnvelope = {
    data: ChatMessageCreateManySenderInput | ChatMessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type DealerCreateWithoutUserInput = {
    id?: string
    companyName: string
    cnpj: string
    plan?: $Enums.DealerPlan
    status?: $Enums.DealerStatus
    commissionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: DealerListingCreateNestedManyWithoutDealerInput
  }

  export type DealerUncheckedCreateWithoutUserInput = {
    id?: string
    companyName: string
    cnpj: string
    plan?: $Enums.DealerPlan
    status?: $Enums.DealerStatus
    commissionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: DealerListingUncheckedCreateNestedManyWithoutDealerInput
  }

  export type DealerCreateOrConnectWithoutUserInput = {
    where: DealerWhereUniqueInput
    create: XOR<DealerCreateWithoutUserInput, DealerUncheckedCreateWithoutUserInput>
  }

  export type InspectionCreateWithoutReviewerInput = {
    id?: string
    type?: $Enums.InspectionType
    status?: $Enums.InspectionStatus
    score?: number | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    aiFlags?: InspectionCreateaiFlagsInput | string[]
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutInspectionsInput
    media?: InspectionMediaCreateNestedManyWithoutInspectionInput
    items?: InspectionItemCreateNestedManyWithoutInspectionInput
  }

  export type InspectionUncheckedCreateWithoutReviewerInput = {
    id?: string
    vehicleId: string
    type?: $Enums.InspectionType
    status?: $Enums.InspectionStatus
    score?: number | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    aiFlags?: InspectionCreateaiFlagsInput | string[]
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: InspectionMediaUncheckedCreateNestedManyWithoutInspectionInput
    items?: InspectionItemUncheckedCreateNestedManyWithoutInspectionInput
  }

  export type InspectionCreateOrConnectWithoutReviewerInput = {
    where: InspectionWhereUniqueInput
    create: XOR<InspectionCreateWithoutReviewerInput, InspectionUncheckedCreateWithoutReviewerInput>
  }

  export type InspectionCreateManyReviewerInputEnvelope = {
    data: InspectionCreateManyReviewerInput | InspectionCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithWhereUniqueWithoutOwnerInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutOwnerInput, VehicleUncheckedUpdateWithoutOwnerInput>
    create: XOR<VehicleCreateWithoutOwnerInput, VehicleUncheckedCreateWithoutOwnerInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutOwnerInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutOwnerInput, VehicleUncheckedUpdateWithoutOwnerInput>
  }

  export type VehicleUpdateManyWithWhereWithoutOwnerInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutOwnerInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    ownerId?: StringFilter<"Vehicle"> | string
    plate?: StringNullableFilter<"Vehicle"> | string | null
    chassis?: StringNullableFilter<"Vehicle"> | string | null
    renavam?: StringNullableFilter<"Vehicle"> | string | null
    brand?: StringNullableFilter<"Vehicle"> | string | null
    model?: StringNullableFilter<"Vehicle"> | string | null
    year?: IntNullableFilter<"Vehicle"> | number | null
    color?: StringNullableFilter<"Vehicle"> | string | null
    mileage?: IntFilter<"Vehicle"> | number
    fuelType?: EnumFuelTypeNullableFilter<"Vehicle"> | $Enums.FuelType | null
    transmission?: EnumTransmissionTypeNullableFilter<"Vehicle"> | $Enums.TransmissionType | null
    fipeCode?: StringNullableFilter<"Vehicle"> | string | null
    fipePrice?: FloatNullableFilter<"Vehicle"> | number | null
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
  }

  export type ListingUpsertWithWhereUniqueWithoutSellerInput = {
    where: ListingWhereUniqueInput
    update: XOR<ListingUpdateWithoutSellerInput, ListingUncheckedUpdateWithoutSellerInput>
    create: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput>
  }

  export type ListingUpdateWithWhereUniqueWithoutSellerInput = {
    where: ListingWhereUniqueInput
    data: XOR<ListingUpdateWithoutSellerInput, ListingUncheckedUpdateWithoutSellerInput>
  }

  export type ListingUpdateManyWithWhereWithoutSellerInput = {
    where: ListingScalarWhereInput
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyWithoutSellerInput>
  }

  export type ListingScalarWhereInput = {
    AND?: ListingScalarWhereInput | ListingScalarWhereInput[]
    OR?: ListingScalarWhereInput[]
    NOT?: ListingScalarWhereInput | ListingScalarWhereInput[]
    id?: StringFilter<"Listing"> | string
    vehicleId?: StringFilter<"Listing"> | string
    sellerId?: StringFilter<"Listing"> | string
    price?: FloatFilter<"Listing"> | number
    description?: StringNullableFilter<"Listing"> | string | null
    acceptsFinancing?: BoolFilter<"Listing"> | boolean
    acceptsTrade?: BoolFilter<"Listing"> | boolean
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    views?: IntFilter<"Listing"> | number
    expiresAt?: DateTimeNullableFilter<"Listing"> | Date | string | null
    soldAt?: DateTimeNullableFilter<"Listing"> | Date | string | null
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
  }

  export type ProposalUpsertWithWhereUniqueWithoutBuyerInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutBuyerInput, ProposalUncheckedUpdateWithoutBuyerInput>
    create: XOR<ProposalCreateWithoutBuyerInput, ProposalUncheckedCreateWithoutBuyerInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutBuyerInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutBuyerInput, ProposalUncheckedUpdateWithoutBuyerInput>
  }

  export type ProposalUpdateManyWithWhereWithoutBuyerInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutBuyerInput>
  }

  export type ProposalScalarWhereInput = {
    AND?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    OR?: ProposalScalarWhereInput[]
    NOT?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    id?: StringFilter<"Proposal"> | string
    listingId?: StringFilter<"Proposal"> | string
    buyerId?: StringFilter<"Proposal"> | string
    amount?: FloatFilter<"Proposal"> | number
    message?: StringNullableFilter<"Proposal"> | string | null
    status?: EnumProposalStatusFilter<"Proposal"> | $Enums.ProposalStatus
    counterAmount?: FloatNullableFilter<"Proposal"> | number | null
    respondedAt?: DateTimeNullableFilter<"Proposal"> | Date | string | null
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeFilter<"Proposal"> | Date | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutSenderInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    listingId?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    readAt?: DateTimeNullableFilter<"ChatMessage"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type DealerUpsertWithoutUserInput = {
    update: XOR<DealerUpdateWithoutUserInput, DealerUncheckedUpdateWithoutUserInput>
    create: XOR<DealerCreateWithoutUserInput, DealerUncheckedCreateWithoutUserInput>
    where?: DealerWhereInput
  }

  export type DealerUpdateToOneWithWhereWithoutUserInput = {
    where?: DealerWhereInput
    data: XOR<DealerUpdateWithoutUserInput, DealerUncheckedUpdateWithoutUserInput>
  }

  export type DealerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    plan?: EnumDealerPlanFieldUpdateOperationsInput | $Enums.DealerPlan
    status?: EnumDealerStatusFieldUpdateOperationsInput | $Enums.DealerStatus
    commissionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: DealerListingUpdateManyWithoutDealerNestedInput
  }

  export type DealerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    plan?: EnumDealerPlanFieldUpdateOperationsInput | $Enums.DealerPlan
    status?: EnumDealerStatusFieldUpdateOperationsInput | $Enums.DealerStatus
    commissionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: DealerListingUncheckedUpdateManyWithoutDealerNestedInput
  }

  export type InspectionUpsertWithWhereUniqueWithoutReviewerInput = {
    where: InspectionWhereUniqueInput
    update: XOR<InspectionUpdateWithoutReviewerInput, InspectionUncheckedUpdateWithoutReviewerInput>
    create: XOR<InspectionCreateWithoutReviewerInput, InspectionUncheckedCreateWithoutReviewerInput>
  }

  export type InspectionUpdateWithWhereUniqueWithoutReviewerInput = {
    where: InspectionWhereUniqueInput
    data: XOR<InspectionUpdateWithoutReviewerInput, InspectionUncheckedUpdateWithoutReviewerInput>
  }

  export type InspectionUpdateManyWithWhereWithoutReviewerInput = {
    where: InspectionScalarWhereInput
    data: XOR<InspectionUpdateManyMutationInput, InspectionUncheckedUpdateManyWithoutReviewerInput>
  }

  export type InspectionScalarWhereInput = {
    AND?: InspectionScalarWhereInput | InspectionScalarWhereInput[]
    OR?: InspectionScalarWhereInput[]
    NOT?: InspectionScalarWhereInput | InspectionScalarWhereInput[]
    id?: StringFilter<"Inspection"> | string
    vehicleId?: StringFilter<"Inspection"> | string
    type?: EnumInspectionTypeFilter<"Inspection"> | $Enums.InspectionType
    status?: EnumInspectionStatusFilter<"Inspection"> | $Enums.InspectionStatus
    score?: IntNullableFilter<"Inspection"> | number | null
    reviewerId?: StringNullableFilter<"Inspection"> | string | null
    reviewedAt?: DateTimeNullableFilter<"Inspection"> | Date | string | null
    reviewNotes?: StringNullableFilter<"Inspection"> | string | null
    aiFlags?: StringNullableListFilter<"Inspection">
    aiProcessedAt?: DateTimeNullableFilter<"Inspection"> | Date | string | null
    createdAt?: DateTimeFilter<"Inspection"> | Date | string
    updatedAt?: DateTimeFilter<"Inspection"> | Date | string
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    cpf?: string | null
    type?: $Enums.UserType
    status?: $Enums.UserStatus
    kycStatus?: $Enums.KycStatus
    avatarUrl?: string | null
    kycSubmittedAt?: Date | string | null
    kycApprovedAt?: Date | string | null
    kycRejectionReason?: string | null
    blockReason?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    sellerListings?: ListingCreateNestedManyWithoutSellerInput
    buyerProposals?: ProposalCreateNestedManyWithoutBuyerInput
    chatMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    dealer?: DealerCreateNestedOneWithoutUserInput
    inspectionsReviewed?: InspectionCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    cpf?: string | null
    type?: $Enums.UserType
    status?: $Enums.UserStatus
    kycStatus?: $Enums.KycStatus
    avatarUrl?: string | null
    kycSubmittedAt?: Date | string | null
    kycApprovedAt?: Date | string | null
    kycRejectionReason?: string | null
    blockReason?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    sellerListings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    buyerProposals?: ProposalUncheckedCreateNestedManyWithoutBuyerInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    dealer?: DealerUncheckedCreateNestedOneWithoutUserInput
    inspectionsReviewed?: InspectionUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    sellerListings?: ListingUpdateManyWithoutSellerNestedInput
    buyerProposals?: ProposalUpdateManyWithoutBuyerNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    dealer?: DealerUpdateOneWithoutUserNestedInput
    inspectionsReviewed?: InspectionUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    sellerListings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    buyerProposals?: ProposalUncheckedUpdateManyWithoutBuyerNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    dealer?: DealerUncheckedUpdateOneWithoutUserNestedInput
    inspectionsReviewed?: InspectionUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UserCreateWithoutVehiclesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    cpf?: string | null
    type?: $Enums.UserType
    status?: $Enums.UserStatus
    kycStatus?: $Enums.KycStatus
    avatarUrl?: string | null
    kycSubmittedAt?: Date | string | null
    kycApprovedAt?: Date | string | null
    kycRejectionReason?: string | null
    blockReason?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sellerListings?: ListingCreateNestedManyWithoutSellerInput
    buyerProposals?: ProposalCreateNestedManyWithoutBuyerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    dealer?: DealerCreateNestedOneWithoutUserInput
    inspectionsReviewed?: InspectionCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutVehiclesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    cpf?: string | null
    type?: $Enums.UserType
    status?: $Enums.UserStatus
    kycStatus?: $Enums.KycStatus
    avatarUrl?: string | null
    kycSubmittedAt?: Date | string | null
    kycApprovedAt?: Date | string | null
    kycRejectionReason?: string | null
    blockReason?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sellerListings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    buyerProposals?: ProposalUncheckedCreateNestedManyWithoutBuyerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    dealer?: DealerUncheckedCreateNestedOneWithoutUserInput
    inspectionsReviewed?: InspectionUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutVehiclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
  }

  export type InspectionCreateWithoutVehicleInput = {
    id?: string
    type?: $Enums.InspectionType
    status?: $Enums.InspectionStatus
    score?: number | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    aiFlags?: InspectionCreateaiFlagsInput | string[]
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer?: UserCreateNestedOneWithoutInspectionsReviewedInput
    media?: InspectionMediaCreateNestedManyWithoutInspectionInput
    items?: InspectionItemCreateNestedManyWithoutInspectionInput
  }

  export type InspectionUncheckedCreateWithoutVehicleInput = {
    id?: string
    type?: $Enums.InspectionType
    status?: $Enums.InspectionStatus
    score?: number | null
    reviewerId?: string | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    aiFlags?: InspectionCreateaiFlagsInput | string[]
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: InspectionMediaUncheckedCreateNestedManyWithoutInspectionInput
    items?: InspectionItemUncheckedCreateNestedManyWithoutInspectionInput
  }

  export type InspectionCreateOrConnectWithoutVehicleInput = {
    where: InspectionWhereUniqueInput
    create: XOR<InspectionCreateWithoutVehicleInput, InspectionUncheckedCreateWithoutVehicleInput>
  }

  export type InspectionCreateManyVehicleInputEnvelope = {
    data: InspectionCreateManyVehicleInput | InspectionCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type ListingCreateWithoutVehicleInput = {
    id?: string
    price: number
    description?: string | null
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: $Enums.ListingStatus
    views?: number
    expiresAt?: Date | string | null
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    seller: UserCreateNestedOneWithoutSellerListingsInput
    proposals?: ProposalCreateNestedManyWithoutListingInput
    chatMessages?: ChatMessageCreateNestedManyWithoutListingInput
    dealerListing?: DealerListingCreateNestedOneWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutVehicleInput = {
    id?: string
    sellerId: string
    price: number
    description?: string | null
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: $Enums.ListingStatus
    views?: number
    expiresAt?: Date | string | null
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    proposals?: ProposalUncheckedCreateNestedManyWithoutListingInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutListingInput
    dealerListing?: DealerListingUncheckedCreateNestedOneWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutVehicleInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutVehicleInput, ListingUncheckedCreateWithoutVehicleInput>
  }

  export type ListingCreateManyVehicleInputEnvelope = {
    data: ListingCreateManyVehicleInput | ListingCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVehiclesInput = {
    update: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type UserUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerListings?: ListingUpdateManyWithoutSellerNestedInput
    buyerProposals?: ProposalUpdateManyWithoutBuyerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    dealer?: DealerUpdateOneWithoutUserNestedInput
    inspectionsReviewed?: InspectionUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerListings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    buyerProposals?: ProposalUncheckedUpdateManyWithoutBuyerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    dealer?: DealerUncheckedUpdateOneWithoutUserNestedInput
    inspectionsReviewed?: InspectionUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type InspectionUpsertWithWhereUniqueWithoutVehicleInput = {
    where: InspectionWhereUniqueInput
    update: XOR<InspectionUpdateWithoutVehicleInput, InspectionUncheckedUpdateWithoutVehicleInput>
    create: XOR<InspectionCreateWithoutVehicleInput, InspectionUncheckedCreateWithoutVehicleInput>
  }

  export type InspectionUpdateWithWhereUniqueWithoutVehicleInput = {
    where: InspectionWhereUniqueInput
    data: XOR<InspectionUpdateWithoutVehicleInput, InspectionUncheckedUpdateWithoutVehicleInput>
  }

  export type InspectionUpdateManyWithWhereWithoutVehicleInput = {
    where: InspectionScalarWhereInput
    data: XOR<InspectionUpdateManyMutationInput, InspectionUncheckedUpdateManyWithoutVehicleInput>
  }

  export type ListingUpsertWithWhereUniqueWithoutVehicleInput = {
    where: ListingWhereUniqueInput
    update: XOR<ListingUpdateWithoutVehicleInput, ListingUncheckedUpdateWithoutVehicleInput>
    create: XOR<ListingCreateWithoutVehicleInput, ListingUncheckedCreateWithoutVehicleInput>
  }

  export type ListingUpdateWithWhereUniqueWithoutVehicleInput = {
    where: ListingWhereUniqueInput
    data: XOR<ListingUpdateWithoutVehicleInput, ListingUncheckedUpdateWithoutVehicleInput>
  }

  export type ListingUpdateManyWithWhereWithoutVehicleInput = {
    where: ListingScalarWhereInput
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyWithoutVehicleInput>
  }

  export type VehicleCreateWithoutInspectionsInput = {
    id?: string
    plate?: string | null
    chassis?: string | null
    renavam?: string | null
    brand?: string | null
    model?: string | null
    year?: number | null
    color?: string | null
    mileage?: number
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.TransmissionType | null
    fipeCode?: string | null
    fipePrice?: number | null
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutVehiclesInput
    listings?: ListingCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutInspectionsInput = {
    id?: string
    ownerId: string
    plate?: string | null
    chassis?: string | null
    renavam?: string | null
    brand?: string | null
    model?: string | null
    year?: number | null
    color?: string | null
    mileage?: number
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.TransmissionType | null
    fipeCode?: string | null
    fipePrice?: number | null
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutInspectionsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutInspectionsInput, VehicleUncheckedCreateWithoutInspectionsInput>
  }

  export type UserCreateWithoutInspectionsReviewedInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    cpf?: string | null
    type?: $Enums.UserType
    status?: $Enums.UserStatus
    kycStatus?: $Enums.KycStatus
    avatarUrl?: string | null
    kycSubmittedAt?: Date | string | null
    kycApprovedAt?: Date | string | null
    kycRejectionReason?: string | null
    blockReason?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    sellerListings?: ListingCreateNestedManyWithoutSellerInput
    buyerProposals?: ProposalCreateNestedManyWithoutBuyerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    dealer?: DealerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInspectionsReviewedInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    cpf?: string | null
    type?: $Enums.UserType
    status?: $Enums.UserStatus
    kycStatus?: $Enums.KycStatus
    avatarUrl?: string | null
    kycSubmittedAt?: Date | string | null
    kycApprovedAt?: Date | string | null
    kycRejectionReason?: string | null
    blockReason?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    sellerListings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    buyerProposals?: ProposalUncheckedCreateNestedManyWithoutBuyerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    dealer?: DealerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInspectionsReviewedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInspectionsReviewedInput, UserUncheckedCreateWithoutInspectionsReviewedInput>
  }

  export type InspectionMediaCreateWithoutInspectionInput = {
    id?: string
    type: $Enums.MediaType
    url: string
    key: string
    hash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InspectionMediaUncheckedCreateWithoutInspectionInput = {
    id?: string
    type: $Enums.MediaType
    url: string
    key: string
    hash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InspectionMediaCreateOrConnectWithoutInspectionInput = {
    where: InspectionMediaWhereUniqueInput
    create: XOR<InspectionMediaCreateWithoutInspectionInput, InspectionMediaUncheckedCreateWithoutInspectionInput>
  }

  export type InspectionMediaCreateManyInspectionInputEnvelope = {
    data: InspectionMediaCreateManyInspectionInput | InspectionMediaCreateManyInspectionInput[]
    skipDuplicates?: boolean
  }

  export type InspectionItemCreateWithoutInspectionInput = {
    id?: string
    category: string
    item: string
    result: string
    score?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type InspectionItemUncheckedCreateWithoutInspectionInput = {
    id?: string
    category: string
    item: string
    result: string
    score?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type InspectionItemCreateOrConnectWithoutInspectionInput = {
    where: InspectionItemWhereUniqueInput
    create: XOR<InspectionItemCreateWithoutInspectionInput, InspectionItemUncheckedCreateWithoutInspectionInput>
  }

  export type InspectionItemCreateManyInspectionInputEnvelope = {
    data: InspectionItemCreateManyInspectionInput | InspectionItemCreateManyInspectionInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithoutInspectionsInput = {
    update: XOR<VehicleUpdateWithoutInspectionsInput, VehicleUncheckedUpdateWithoutInspectionsInput>
    create: XOR<VehicleCreateWithoutInspectionsInput, VehicleUncheckedCreateWithoutInspectionsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutInspectionsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutInspectionsInput, VehicleUncheckedUpdateWithoutInspectionsInput>
  }

  export type VehicleUpdateWithoutInspectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: NullableStringFieldUpdateOperationsInput | string | null
    chassis?: NullableStringFieldUpdateOperationsInput | string | null
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType | null
    fipeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fipePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    listings?: ListingUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutInspectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    plate?: NullableStringFieldUpdateOperationsInput | string | null
    chassis?: NullableStringFieldUpdateOperationsInput | string | null
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType | null
    fipeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fipePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type UserUpsertWithoutInspectionsReviewedInput = {
    update: XOR<UserUpdateWithoutInspectionsReviewedInput, UserUncheckedUpdateWithoutInspectionsReviewedInput>
    create: XOR<UserCreateWithoutInspectionsReviewedInput, UserUncheckedCreateWithoutInspectionsReviewedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInspectionsReviewedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInspectionsReviewedInput, UserUncheckedUpdateWithoutInspectionsReviewedInput>
  }

  export type UserUpdateWithoutInspectionsReviewedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    sellerListings?: ListingUpdateManyWithoutSellerNestedInput
    buyerProposals?: ProposalUpdateManyWithoutBuyerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    dealer?: DealerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInspectionsReviewedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    sellerListings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    buyerProposals?: ProposalUncheckedUpdateManyWithoutBuyerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    dealer?: DealerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type InspectionMediaUpsertWithWhereUniqueWithoutInspectionInput = {
    where: InspectionMediaWhereUniqueInput
    update: XOR<InspectionMediaUpdateWithoutInspectionInput, InspectionMediaUncheckedUpdateWithoutInspectionInput>
    create: XOR<InspectionMediaCreateWithoutInspectionInput, InspectionMediaUncheckedCreateWithoutInspectionInput>
  }

  export type InspectionMediaUpdateWithWhereUniqueWithoutInspectionInput = {
    where: InspectionMediaWhereUniqueInput
    data: XOR<InspectionMediaUpdateWithoutInspectionInput, InspectionMediaUncheckedUpdateWithoutInspectionInput>
  }

  export type InspectionMediaUpdateManyWithWhereWithoutInspectionInput = {
    where: InspectionMediaScalarWhereInput
    data: XOR<InspectionMediaUpdateManyMutationInput, InspectionMediaUncheckedUpdateManyWithoutInspectionInput>
  }

  export type InspectionMediaScalarWhereInput = {
    AND?: InspectionMediaScalarWhereInput | InspectionMediaScalarWhereInput[]
    OR?: InspectionMediaScalarWhereInput[]
    NOT?: InspectionMediaScalarWhereInput | InspectionMediaScalarWhereInput[]
    id?: StringFilter<"InspectionMedia"> | string
    inspectionId?: StringFilter<"InspectionMedia"> | string
    type?: EnumMediaTypeFilter<"InspectionMedia"> | $Enums.MediaType
    url?: StringFilter<"InspectionMedia"> | string
    key?: StringFilter<"InspectionMedia"> | string
    hash?: StringFilter<"InspectionMedia"> | string
    metadata?: JsonNullableFilter<"InspectionMedia">
    createdAt?: DateTimeFilter<"InspectionMedia"> | Date | string
  }

  export type InspectionItemUpsertWithWhereUniqueWithoutInspectionInput = {
    where: InspectionItemWhereUniqueInput
    update: XOR<InspectionItemUpdateWithoutInspectionInput, InspectionItemUncheckedUpdateWithoutInspectionInput>
    create: XOR<InspectionItemCreateWithoutInspectionInput, InspectionItemUncheckedCreateWithoutInspectionInput>
  }

  export type InspectionItemUpdateWithWhereUniqueWithoutInspectionInput = {
    where: InspectionItemWhereUniqueInput
    data: XOR<InspectionItemUpdateWithoutInspectionInput, InspectionItemUncheckedUpdateWithoutInspectionInput>
  }

  export type InspectionItemUpdateManyWithWhereWithoutInspectionInput = {
    where: InspectionItemScalarWhereInput
    data: XOR<InspectionItemUpdateManyMutationInput, InspectionItemUncheckedUpdateManyWithoutInspectionInput>
  }

  export type InspectionItemScalarWhereInput = {
    AND?: InspectionItemScalarWhereInput | InspectionItemScalarWhereInput[]
    OR?: InspectionItemScalarWhereInput[]
    NOT?: InspectionItemScalarWhereInput | InspectionItemScalarWhereInput[]
    id?: StringFilter<"InspectionItem"> | string
    inspectionId?: StringFilter<"InspectionItem"> | string
    category?: StringFilter<"InspectionItem"> | string
    item?: StringFilter<"InspectionItem"> | string
    result?: StringFilter<"InspectionItem"> | string
    score?: IntNullableFilter<"InspectionItem"> | number | null
    notes?: StringNullableFilter<"InspectionItem"> | string | null
    createdAt?: DateTimeFilter<"InspectionItem"> | Date | string
  }

  export type InspectionCreateWithoutMediaInput = {
    id?: string
    type?: $Enums.InspectionType
    status?: $Enums.InspectionStatus
    score?: number | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    aiFlags?: InspectionCreateaiFlagsInput | string[]
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutInspectionsInput
    reviewer?: UserCreateNestedOneWithoutInspectionsReviewedInput
    items?: InspectionItemCreateNestedManyWithoutInspectionInput
  }

  export type InspectionUncheckedCreateWithoutMediaInput = {
    id?: string
    vehicleId: string
    type?: $Enums.InspectionType
    status?: $Enums.InspectionStatus
    score?: number | null
    reviewerId?: string | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    aiFlags?: InspectionCreateaiFlagsInput | string[]
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InspectionItemUncheckedCreateNestedManyWithoutInspectionInput
  }

  export type InspectionCreateOrConnectWithoutMediaInput = {
    where: InspectionWhereUniqueInput
    create: XOR<InspectionCreateWithoutMediaInput, InspectionUncheckedCreateWithoutMediaInput>
  }

  export type InspectionUpsertWithoutMediaInput = {
    update: XOR<InspectionUpdateWithoutMediaInput, InspectionUncheckedUpdateWithoutMediaInput>
    create: XOR<InspectionCreateWithoutMediaInput, InspectionUncheckedCreateWithoutMediaInput>
    where?: InspectionWhereInput
  }

  export type InspectionUpdateToOneWithWhereWithoutMediaInput = {
    where?: InspectionWhereInput
    data: XOR<InspectionUpdateWithoutMediaInput, InspectionUncheckedUpdateWithoutMediaInput>
  }

  export type InspectionUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInspectionTypeFieldUpdateOperationsInput | $Enums.InspectionType
    status?: EnumInspectionStatusFieldUpdateOperationsInput | $Enums.InspectionStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    aiFlags?: InspectionUpdateaiFlagsInput | string[]
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutInspectionsNestedInput
    reviewer?: UserUpdateOneWithoutInspectionsReviewedNestedInput
    items?: InspectionItemUpdateManyWithoutInspectionNestedInput
  }

  export type InspectionUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: EnumInspectionTypeFieldUpdateOperationsInput | $Enums.InspectionType
    status?: EnumInspectionStatusFieldUpdateOperationsInput | $Enums.InspectionStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    aiFlags?: InspectionUpdateaiFlagsInput | string[]
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InspectionItemUncheckedUpdateManyWithoutInspectionNestedInput
  }

  export type InspectionCreateWithoutItemsInput = {
    id?: string
    type?: $Enums.InspectionType
    status?: $Enums.InspectionStatus
    score?: number | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    aiFlags?: InspectionCreateaiFlagsInput | string[]
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutInspectionsInput
    reviewer?: UserCreateNestedOneWithoutInspectionsReviewedInput
    media?: InspectionMediaCreateNestedManyWithoutInspectionInput
  }

  export type InspectionUncheckedCreateWithoutItemsInput = {
    id?: string
    vehicleId: string
    type?: $Enums.InspectionType
    status?: $Enums.InspectionStatus
    score?: number | null
    reviewerId?: string | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    aiFlags?: InspectionCreateaiFlagsInput | string[]
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: InspectionMediaUncheckedCreateNestedManyWithoutInspectionInput
  }

  export type InspectionCreateOrConnectWithoutItemsInput = {
    where: InspectionWhereUniqueInput
    create: XOR<InspectionCreateWithoutItemsInput, InspectionUncheckedCreateWithoutItemsInput>
  }

  export type InspectionUpsertWithoutItemsInput = {
    update: XOR<InspectionUpdateWithoutItemsInput, InspectionUncheckedUpdateWithoutItemsInput>
    create: XOR<InspectionCreateWithoutItemsInput, InspectionUncheckedCreateWithoutItemsInput>
    where?: InspectionWhereInput
  }

  export type InspectionUpdateToOneWithWhereWithoutItemsInput = {
    where?: InspectionWhereInput
    data: XOR<InspectionUpdateWithoutItemsInput, InspectionUncheckedUpdateWithoutItemsInput>
  }

  export type InspectionUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInspectionTypeFieldUpdateOperationsInput | $Enums.InspectionType
    status?: EnumInspectionStatusFieldUpdateOperationsInput | $Enums.InspectionStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    aiFlags?: InspectionUpdateaiFlagsInput | string[]
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutInspectionsNestedInput
    reviewer?: UserUpdateOneWithoutInspectionsReviewedNestedInput
    media?: InspectionMediaUpdateManyWithoutInspectionNestedInput
  }

  export type InspectionUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: EnumInspectionTypeFieldUpdateOperationsInput | $Enums.InspectionType
    status?: EnumInspectionStatusFieldUpdateOperationsInput | $Enums.InspectionStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    aiFlags?: InspectionUpdateaiFlagsInput | string[]
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: InspectionMediaUncheckedUpdateManyWithoutInspectionNestedInput
  }

  export type VehicleCreateWithoutListingsInput = {
    id?: string
    plate?: string | null
    chassis?: string | null
    renavam?: string | null
    brand?: string | null
    model?: string | null
    year?: number | null
    color?: string | null
    mileage?: number
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.TransmissionType | null
    fipeCode?: string | null
    fipePrice?: number | null
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutVehiclesInput
    inspections?: InspectionCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutListingsInput = {
    id?: string
    ownerId: string
    plate?: string | null
    chassis?: string | null
    renavam?: string | null
    brand?: string | null
    model?: string | null
    year?: number | null
    color?: string | null
    mileage?: number
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.TransmissionType | null
    fipeCode?: string | null
    fipePrice?: number | null
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    inspections?: InspectionUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutListingsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutListingsInput, VehicleUncheckedCreateWithoutListingsInput>
  }

  export type UserCreateWithoutSellerListingsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    cpf?: string | null
    type?: $Enums.UserType
    status?: $Enums.UserStatus
    kycStatus?: $Enums.KycStatus
    avatarUrl?: string | null
    kycSubmittedAt?: Date | string | null
    kycApprovedAt?: Date | string | null
    kycRejectionReason?: string | null
    blockReason?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    buyerProposals?: ProposalCreateNestedManyWithoutBuyerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    dealer?: DealerCreateNestedOneWithoutUserInput
    inspectionsReviewed?: InspectionCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutSellerListingsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    cpf?: string | null
    type?: $Enums.UserType
    status?: $Enums.UserStatus
    kycStatus?: $Enums.KycStatus
    avatarUrl?: string | null
    kycSubmittedAt?: Date | string | null
    kycApprovedAt?: Date | string | null
    kycRejectionReason?: string | null
    blockReason?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    buyerProposals?: ProposalUncheckedCreateNestedManyWithoutBuyerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    dealer?: DealerUncheckedCreateNestedOneWithoutUserInput
    inspectionsReviewed?: InspectionUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutSellerListingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSellerListingsInput, UserUncheckedCreateWithoutSellerListingsInput>
  }

  export type ProposalCreateWithoutListingInput = {
    id?: string
    amount: number
    message?: string | null
    status?: $Enums.ProposalStatus
    counterAmount?: number | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    buyer: UserCreateNestedOneWithoutBuyerProposalsInput
  }

  export type ProposalUncheckedCreateWithoutListingInput = {
    id?: string
    buyerId: string
    amount: number
    message?: string | null
    status?: $Enums.ProposalStatus
    counterAmount?: number | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProposalCreateOrConnectWithoutListingInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutListingInput, ProposalUncheckedCreateWithoutListingInput>
  }

  export type ProposalCreateManyListingInputEnvelope = {
    data: ProposalCreateManyListingInput | ProposalCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutListingInput = {
    id?: string
    content: string
    readAt?: Date | string | null
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutListingInput = {
    id?: string
    senderId: string
    content: string
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutListingInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutListingInput, ChatMessageUncheckedCreateWithoutListingInput>
  }

  export type ChatMessageCreateManyListingInputEnvelope = {
    data: ChatMessageCreateManyListingInput | ChatMessageCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type DealerListingCreateWithoutListingInput = {
    id?: string
    createdAt?: Date | string
    dealer: DealerCreateNestedOneWithoutListingsInput
  }

  export type DealerListingUncheckedCreateWithoutListingInput = {
    id?: string
    dealerId: string
    createdAt?: Date | string
  }

  export type DealerListingCreateOrConnectWithoutListingInput = {
    where: DealerListingWhereUniqueInput
    create: XOR<DealerListingCreateWithoutListingInput, DealerListingUncheckedCreateWithoutListingInput>
  }

  export type VehicleUpsertWithoutListingsInput = {
    update: XOR<VehicleUpdateWithoutListingsInput, VehicleUncheckedUpdateWithoutListingsInput>
    create: XOR<VehicleCreateWithoutListingsInput, VehicleUncheckedCreateWithoutListingsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutListingsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutListingsInput, VehicleUncheckedUpdateWithoutListingsInput>
  }

  export type VehicleUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: NullableStringFieldUpdateOperationsInput | string | null
    chassis?: NullableStringFieldUpdateOperationsInput | string | null
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType | null
    fipeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fipePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    inspections?: InspectionUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    plate?: NullableStringFieldUpdateOperationsInput | string | null
    chassis?: NullableStringFieldUpdateOperationsInput | string | null
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType | null
    fipeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fipePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspections?: InspectionUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type UserUpsertWithoutSellerListingsInput = {
    update: XOR<UserUpdateWithoutSellerListingsInput, UserUncheckedUpdateWithoutSellerListingsInput>
    create: XOR<UserCreateWithoutSellerListingsInput, UserUncheckedCreateWithoutSellerListingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSellerListingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSellerListingsInput, UserUncheckedUpdateWithoutSellerListingsInput>
  }

  export type UserUpdateWithoutSellerListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    buyerProposals?: ProposalUpdateManyWithoutBuyerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    dealer?: DealerUpdateOneWithoutUserNestedInput
    inspectionsReviewed?: InspectionUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutSellerListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    buyerProposals?: ProposalUncheckedUpdateManyWithoutBuyerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    dealer?: DealerUncheckedUpdateOneWithoutUserNestedInput
    inspectionsReviewed?: InspectionUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type ProposalUpsertWithWhereUniqueWithoutListingInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutListingInput, ProposalUncheckedUpdateWithoutListingInput>
    create: XOR<ProposalCreateWithoutListingInput, ProposalUncheckedCreateWithoutListingInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutListingInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutListingInput, ProposalUncheckedUpdateWithoutListingInput>
  }

  export type ProposalUpdateManyWithWhereWithoutListingInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutListingInput>
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutListingInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutListingInput, ChatMessageUncheckedUpdateWithoutListingInput>
    create: XOR<ChatMessageCreateWithoutListingInput, ChatMessageUncheckedCreateWithoutListingInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutListingInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutListingInput, ChatMessageUncheckedUpdateWithoutListingInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutListingInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutListingInput>
  }

  export type DealerListingUpsertWithoutListingInput = {
    update: XOR<DealerListingUpdateWithoutListingInput, DealerListingUncheckedUpdateWithoutListingInput>
    create: XOR<DealerListingCreateWithoutListingInput, DealerListingUncheckedCreateWithoutListingInput>
    where?: DealerListingWhereInput
  }

  export type DealerListingUpdateToOneWithWhereWithoutListingInput = {
    where?: DealerListingWhereInput
    data: XOR<DealerListingUpdateWithoutListingInput, DealerListingUncheckedUpdateWithoutListingInput>
  }

  export type DealerListingUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dealer?: DealerUpdateOneRequiredWithoutListingsNestedInput
  }

  export type DealerListingUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    dealerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingCreateWithoutProposalsInput = {
    id?: string
    price: number
    description?: string | null
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: $Enums.ListingStatus
    views?: number
    expiresAt?: Date | string | null
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutListingsInput
    seller: UserCreateNestedOneWithoutSellerListingsInput
    chatMessages?: ChatMessageCreateNestedManyWithoutListingInput
    dealerListing?: DealerListingCreateNestedOneWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutProposalsInput = {
    id?: string
    vehicleId: string
    sellerId: string
    price: number
    description?: string | null
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: $Enums.ListingStatus
    views?: number
    expiresAt?: Date | string | null
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutListingInput
    dealerListing?: DealerListingUncheckedCreateNestedOneWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutProposalsInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutProposalsInput, ListingUncheckedCreateWithoutProposalsInput>
  }

  export type UserCreateWithoutBuyerProposalsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    cpf?: string | null
    type?: $Enums.UserType
    status?: $Enums.UserStatus
    kycStatus?: $Enums.KycStatus
    avatarUrl?: string | null
    kycSubmittedAt?: Date | string | null
    kycApprovedAt?: Date | string | null
    kycRejectionReason?: string | null
    blockReason?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    sellerListings?: ListingCreateNestedManyWithoutSellerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    dealer?: DealerCreateNestedOneWithoutUserInput
    inspectionsReviewed?: InspectionCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutBuyerProposalsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    cpf?: string | null
    type?: $Enums.UserType
    status?: $Enums.UserStatus
    kycStatus?: $Enums.KycStatus
    avatarUrl?: string | null
    kycSubmittedAt?: Date | string | null
    kycApprovedAt?: Date | string | null
    kycRejectionReason?: string | null
    blockReason?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    sellerListings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    dealer?: DealerUncheckedCreateNestedOneWithoutUserInput
    inspectionsReviewed?: InspectionUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutBuyerProposalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBuyerProposalsInput, UserUncheckedCreateWithoutBuyerProposalsInput>
  }

  export type ListingUpsertWithoutProposalsInput = {
    update: XOR<ListingUpdateWithoutProposalsInput, ListingUncheckedUpdateWithoutProposalsInput>
    create: XOR<ListingCreateWithoutProposalsInput, ListingUncheckedCreateWithoutProposalsInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutProposalsInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutProposalsInput, ListingUncheckedUpdateWithoutProposalsInput>
  }

  export type ListingUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptsFinancing?: BoolFieldUpdateOperationsInput | boolean
    acceptsTrade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    views?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutListingsNestedInput
    seller?: UserUpdateOneRequiredWithoutSellerListingsNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutListingNestedInput
    dealerListing?: DealerListingUpdateOneWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptsFinancing?: BoolFieldUpdateOperationsInput | boolean
    acceptsTrade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    views?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutListingNestedInput
    dealerListing?: DealerListingUncheckedUpdateOneWithoutListingNestedInput
  }

  export type UserUpsertWithoutBuyerProposalsInput = {
    update: XOR<UserUpdateWithoutBuyerProposalsInput, UserUncheckedUpdateWithoutBuyerProposalsInput>
    create: XOR<UserCreateWithoutBuyerProposalsInput, UserUncheckedCreateWithoutBuyerProposalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBuyerProposalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBuyerProposalsInput, UserUncheckedUpdateWithoutBuyerProposalsInput>
  }

  export type UserUpdateWithoutBuyerProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    sellerListings?: ListingUpdateManyWithoutSellerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    dealer?: DealerUpdateOneWithoutUserNestedInput
    inspectionsReviewed?: InspectionUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutBuyerProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    sellerListings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    dealer?: DealerUncheckedUpdateOneWithoutUserNestedInput
    inspectionsReviewed?: InspectionUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type ListingCreateWithoutChatMessagesInput = {
    id?: string
    price: number
    description?: string | null
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: $Enums.ListingStatus
    views?: number
    expiresAt?: Date | string | null
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutListingsInput
    seller: UserCreateNestedOneWithoutSellerListingsInput
    proposals?: ProposalCreateNestedManyWithoutListingInput
    dealerListing?: DealerListingCreateNestedOneWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    vehicleId: string
    sellerId: string
    price: number
    description?: string | null
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: $Enums.ListingStatus
    views?: number
    expiresAt?: Date | string | null
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    proposals?: ProposalUncheckedCreateNestedManyWithoutListingInput
    dealerListing?: DealerListingUncheckedCreateNestedOneWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutChatMessagesInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutChatMessagesInput, ListingUncheckedCreateWithoutChatMessagesInput>
  }

  export type UserCreateWithoutChatMessagesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    cpf?: string | null
    type?: $Enums.UserType
    status?: $Enums.UserStatus
    kycStatus?: $Enums.KycStatus
    avatarUrl?: string | null
    kycSubmittedAt?: Date | string | null
    kycApprovedAt?: Date | string | null
    kycRejectionReason?: string | null
    blockReason?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    sellerListings?: ListingCreateNestedManyWithoutSellerInput
    buyerProposals?: ProposalCreateNestedManyWithoutBuyerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    dealer?: DealerCreateNestedOneWithoutUserInput
    inspectionsReviewed?: InspectionCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    cpf?: string | null
    type?: $Enums.UserType
    status?: $Enums.UserStatus
    kycStatus?: $Enums.KycStatus
    avatarUrl?: string | null
    kycSubmittedAt?: Date | string | null
    kycApprovedAt?: Date | string | null
    kycRejectionReason?: string | null
    blockReason?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    sellerListings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    buyerProposals?: ProposalUncheckedCreateNestedManyWithoutBuyerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    dealer?: DealerUncheckedCreateNestedOneWithoutUserInput
    inspectionsReviewed?: InspectionUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutChatMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
  }

  export type ListingUpsertWithoutChatMessagesInput = {
    update: XOR<ListingUpdateWithoutChatMessagesInput, ListingUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<ListingCreateWithoutChatMessagesInput, ListingUncheckedCreateWithoutChatMessagesInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutChatMessagesInput, ListingUncheckedUpdateWithoutChatMessagesInput>
  }

  export type ListingUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptsFinancing?: BoolFieldUpdateOperationsInput | boolean
    acceptsTrade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    views?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutListingsNestedInput
    seller?: UserUpdateOneRequiredWithoutSellerListingsNestedInput
    proposals?: ProposalUpdateManyWithoutListingNestedInput
    dealerListing?: DealerListingUpdateOneWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptsFinancing?: BoolFieldUpdateOperationsInput | boolean
    acceptsTrade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    views?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposals?: ProposalUncheckedUpdateManyWithoutListingNestedInput
    dealerListing?: DealerListingUncheckedUpdateOneWithoutListingNestedInput
  }

  export type UserUpsertWithoutChatMessagesInput = {
    update: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    sellerListings?: ListingUpdateManyWithoutSellerNestedInput
    buyerProposals?: ProposalUpdateManyWithoutBuyerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    dealer?: DealerUpdateOneWithoutUserNestedInput
    inspectionsReviewed?: InspectionUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    sellerListings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    buyerProposals?: ProposalUncheckedUpdateManyWithoutBuyerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    dealer?: DealerUncheckedUpdateOneWithoutUserNestedInput
    inspectionsReviewed?: InspectionUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UserCreateWithoutDealerInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    cpf?: string | null
    type?: $Enums.UserType
    status?: $Enums.UserStatus
    kycStatus?: $Enums.KycStatus
    avatarUrl?: string | null
    kycSubmittedAt?: Date | string | null
    kycApprovedAt?: Date | string | null
    kycRejectionReason?: string | null
    blockReason?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutOwnerInput
    sellerListings?: ListingCreateNestedManyWithoutSellerInput
    buyerProposals?: ProposalCreateNestedManyWithoutBuyerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    inspectionsReviewed?: InspectionCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutDealerInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    cpf?: string | null
    type?: $Enums.UserType
    status?: $Enums.UserStatus
    kycStatus?: $Enums.KycStatus
    avatarUrl?: string | null
    kycSubmittedAt?: Date | string | null
    kycApprovedAt?: Date | string | null
    kycRejectionReason?: string | null
    blockReason?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutOwnerInput
    sellerListings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    buyerProposals?: ProposalUncheckedCreateNestedManyWithoutBuyerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    inspectionsReviewed?: InspectionUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutDealerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDealerInput, UserUncheckedCreateWithoutDealerInput>
  }

  export type DealerListingCreateWithoutDealerInput = {
    id?: string
    createdAt?: Date | string
    listing: ListingCreateNestedOneWithoutDealerListingInput
  }

  export type DealerListingUncheckedCreateWithoutDealerInput = {
    id?: string
    listingId: string
    createdAt?: Date | string
  }

  export type DealerListingCreateOrConnectWithoutDealerInput = {
    where: DealerListingWhereUniqueInput
    create: XOR<DealerListingCreateWithoutDealerInput, DealerListingUncheckedCreateWithoutDealerInput>
  }

  export type DealerListingCreateManyDealerInputEnvelope = {
    data: DealerListingCreateManyDealerInput | DealerListingCreateManyDealerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDealerInput = {
    update: XOR<UserUpdateWithoutDealerInput, UserUncheckedUpdateWithoutDealerInput>
    create: XOR<UserCreateWithoutDealerInput, UserUncheckedCreateWithoutDealerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDealerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDealerInput, UserUncheckedUpdateWithoutDealerInput>
  }

  export type UserUpdateWithoutDealerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutOwnerNestedInput
    sellerListings?: ListingUpdateManyWithoutSellerNestedInput
    buyerProposals?: ProposalUpdateManyWithoutBuyerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    inspectionsReviewed?: InspectionUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutDealerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kycSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycRejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    blockReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutOwnerNestedInput
    sellerListings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    buyerProposals?: ProposalUncheckedUpdateManyWithoutBuyerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    inspectionsReviewed?: InspectionUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type DealerListingUpsertWithWhereUniqueWithoutDealerInput = {
    where: DealerListingWhereUniqueInput
    update: XOR<DealerListingUpdateWithoutDealerInput, DealerListingUncheckedUpdateWithoutDealerInput>
    create: XOR<DealerListingCreateWithoutDealerInput, DealerListingUncheckedCreateWithoutDealerInput>
  }

  export type DealerListingUpdateWithWhereUniqueWithoutDealerInput = {
    where: DealerListingWhereUniqueInput
    data: XOR<DealerListingUpdateWithoutDealerInput, DealerListingUncheckedUpdateWithoutDealerInput>
  }

  export type DealerListingUpdateManyWithWhereWithoutDealerInput = {
    where: DealerListingScalarWhereInput
    data: XOR<DealerListingUpdateManyMutationInput, DealerListingUncheckedUpdateManyWithoutDealerInput>
  }

  export type DealerListingScalarWhereInput = {
    AND?: DealerListingScalarWhereInput | DealerListingScalarWhereInput[]
    OR?: DealerListingScalarWhereInput[]
    NOT?: DealerListingScalarWhereInput | DealerListingScalarWhereInput[]
    id?: StringFilter<"DealerListing"> | string
    dealerId?: StringFilter<"DealerListing"> | string
    listingId?: StringFilter<"DealerListing"> | string
    createdAt?: DateTimeFilter<"DealerListing"> | Date | string
  }

  export type DealerCreateWithoutListingsInput = {
    id?: string
    companyName: string
    cnpj: string
    plan?: $Enums.DealerPlan
    status?: $Enums.DealerStatus
    commissionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDealerInput
  }

  export type DealerUncheckedCreateWithoutListingsInput = {
    id?: string
    userId: string
    companyName: string
    cnpj: string
    plan?: $Enums.DealerPlan
    status?: $Enums.DealerStatus
    commissionRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DealerCreateOrConnectWithoutListingsInput = {
    where: DealerWhereUniqueInput
    create: XOR<DealerCreateWithoutListingsInput, DealerUncheckedCreateWithoutListingsInput>
  }

  export type ListingCreateWithoutDealerListingInput = {
    id?: string
    price: number
    description?: string | null
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: $Enums.ListingStatus
    views?: number
    expiresAt?: Date | string | null
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutListingsInput
    seller: UserCreateNestedOneWithoutSellerListingsInput
    proposals?: ProposalCreateNestedManyWithoutListingInput
    chatMessages?: ChatMessageCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutDealerListingInput = {
    id?: string
    vehicleId: string
    sellerId: string
    price: number
    description?: string | null
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: $Enums.ListingStatus
    views?: number
    expiresAt?: Date | string | null
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    proposals?: ProposalUncheckedCreateNestedManyWithoutListingInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutDealerListingInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutDealerListingInput, ListingUncheckedCreateWithoutDealerListingInput>
  }

  export type DealerUpsertWithoutListingsInput = {
    update: XOR<DealerUpdateWithoutListingsInput, DealerUncheckedUpdateWithoutListingsInput>
    create: XOR<DealerCreateWithoutListingsInput, DealerUncheckedCreateWithoutListingsInput>
    where?: DealerWhereInput
  }

  export type DealerUpdateToOneWithWhereWithoutListingsInput = {
    where?: DealerWhereInput
    data: XOR<DealerUpdateWithoutListingsInput, DealerUncheckedUpdateWithoutListingsInput>
  }

  export type DealerUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    plan?: EnumDealerPlanFieldUpdateOperationsInput | $Enums.DealerPlan
    status?: EnumDealerStatusFieldUpdateOperationsInput | $Enums.DealerStatus
    commissionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDealerNestedInput
  }

  export type DealerUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    plan?: EnumDealerPlanFieldUpdateOperationsInput | $Enums.DealerPlan
    status?: EnumDealerStatusFieldUpdateOperationsInput | $Enums.DealerStatus
    commissionRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUpsertWithoutDealerListingInput = {
    update: XOR<ListingUpdateWithoutDealerListingInput, ListingUncheckedUpdateWithoutDealerListingInput>
    create: XOR<ListingCreateWithoutDealerListingInput, ListingUncheckedCreateWithoutDealerListingInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutDealerListingInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutDealerListingInput, ListingUncheckedUpdateWithoutDealerListingInput>
  }

  export type ListingUpdateWithoutDealerListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptsFinancing?: BoolFieldUpdateOperationsInput | boolean
    acceptsTrade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    views?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutListingsNestedInput
    seller?: UserUpdateOneRequiredWithoutSellerListingsNestedInput
    proposals?: ProposalUpdateManyWithoutListingNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutDealerListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptsFinancing?: BoolFieldUpdateOperationsInput | boolean
    acceptsTrade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    views?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposals?: ProposalUncheckedUpdateManyWithoutListingNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutListingNestedInput
  }

  export type VehicleCreateManyOwnerInput = {
    id?: string
    plate?: string | null
    chassis?: string | null
    renavam?: string | null
    brand?: string | null
    model?: string | null
    year?: number | null
    color?: string | null
    mileage?: number
    fuelType?: $Enums.FuelType | null
    transmission?: $Enums.TransmissionType | null
    fipeCode?: string | null
    fipePrice?: number | null
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingCreateManySellerInput = {
    id?: string
    vehicleId: string
    price: number
    description?: string | null
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: $Enums.ListingStatus
    views?: number
    expiresAt?: Date | string | null
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProposalCreateManyBuyerInput = {
    id?: string
    listingId: string
    amount: number
    message?: string | null
    status?: $Enums.ProposalStatus
    counterAmount?: number | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ChatMessageCreateManySenderInput = {
    id?: string
    listingId: string
    content: string
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type InspectionCreateManyReviewerInput = {
    id?: string
    vehicleId: string
    type?: $Enums.InspectionType
    status?: $Enums.InspectionStatus
    score?: number | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    aiFlags?: InspectionCreateaiFlagsInput | string[]
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: NullableStringFieldUpdateOperationsInput | string | null
    chassis?: NullableStringFieldUpdateOperationsInput | string | null
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType | null
    fipeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fipePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspections?: InspectionUpdateManyWithoutVehicleNestedInput
    listings?: ListingUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: NullableStringFieldUpdateOperationsInput | string | null
    chassis?: NullableStringFieldUpdateOperationsInput | string | null
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType | null
    fipeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fipePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspections?: InspectionUncheckedUpdateManyWithoutVehicleNestedInput
    listings?: ListingUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: NullableStringFieldUpdateOperationsInput | string | null
    chassis?: NullableStringFieldUpdateOperationsInput | string | null
    renavam?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionTypeFieldUpdateOperationsInput | $Enums.TransmissionType | null
    fipeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fipePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptsFinancing?: BoolFieldUpdateOperationsInput | boolean
    acceptsTrade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    views?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutListingsNestedInput
    proposals?: ProposalUpdateManyWithoutListingNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutListingNestedInput
    dealerListing?: DealerListingUpdateOneWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptsFinancing?: BoolFieldUpdateOperationsInput | boolean
    acceptsTrade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    views?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposals?: ProposalUncheckedUpdateManyWithoutListingNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutListingNestedInput
    dealerListing?: DealerListingUncheckedUpdateOneWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptsFinancing?: BoolFieldUpdateOperationsInput | boolean
    acceptsTrade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    views?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    counterAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutProposalsNestedInput
  }

  export type ProposalUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    counterAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    counterAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInspectionTypeFieldUpdateOperationsInput | $Enums.InspectionType
    status?: EnumInspectionStatusFieldUpdateOperationsInput | $Enums.InspectionStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    aiFlags?: InspectionUpdateaiFlagsInput | string[]
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutInspectionsNestedInput
    media?: InspectionMediaUpdateManyWithoutInspectionNestedInput
    items?: InspectionItemUpdateManyWithoutInspectionNestedInput
  }

  export type InspectionUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: EnumInspectionTypeFieldUpdateOperationsInput | $Enums.InspectionType
    status?: EnumInspectionStatusFieldUpdateOperationsInput | $Enums.InspectionStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    aiFlags?: InspectionUpdateaiFlagsInput | string[]
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: InspectionMediaUncheckedUpdateManyWithoutInspectionNestedInput
    items?: InspectionItemUncheckedUpdateManyWithoutInspectionNestedInput
  }

  export type InspectionUncheckedUpdateManyWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: EnumInspectionTypeFieldUpdateOperationsInput | $Enums.InspectionType
    status?: EnumInspectionStatusFieldUpdateOperationsInput | $Enums.InspectionStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    aiFlags?: InspectionUpdateaiFlagsInput | string[]
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionCreateManyVehicleInput = {
    id?: string
    type?: $Enums.InspectionType
    status?: $Enums.InspectionStatus
    score?: number | null
    reviewerId?: string | null
    reviewedAt?: Date | string | null
    reviewNotes?: string | null
    aiFlags?: InspectionCreateaiFlagsInput | string[]
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingCreateManyVehicleInput = {
    id?: string
    sellerId: string
    price: number
    description?: string | null
    acceptsFinancing?: boolean
    acceptsTrade?: boolean
    status?: $Enums.ListingStatus
    views?: number
    expiresAt?: Date | string | null
    soldAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InspectionUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInspectionTypeFieldUpdateOperationsInput | $Enums.InspectionType
    status?: EnumInspectionStatusFieldUpdateOperationsInput | $Enums.InspectionStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    aiFlags?: InspectionUpdateaiFlagsInput | string[]
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneWithoutInspectionsReviewedNestedInput
    media?: InspectionMediaUpdateManyWithoutInspectionNestedInput
    items?: InspectionItemUpdateManyWithoutInspectionNestedInput
  }

  export type InspectionUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInspectionTypeFieldUpdateOperationsInput | $Enums.InspectionType
    status?: EnumInspectionStatusFieldUpdateOperationsInput | $Enums.InspectionStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    aiFlags?: InspectionUpdateaiFlagsInput | string[]
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: InspectionMediaUncheckedUpdateManyWithoutInspectionNestedInput
    items?: InspectionItemUncheckedUpdateManyWithoutInspectionNestedInput
  }

  export type InspectionUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInspectionTypeFieldUpdateOperationsInput | $Enums.InspectionType
    status?: EnumInspectionStatusFieldUpdateOperationsInput | $Enums.InspectionStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewNotes?: NullableStringFieldUpdateOperationsInput | string | null
    aiFlags?: InspectionUpdateaiFlagsInput | string[]
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptsFinancing?: BoolFieldUpdateOperationsInput | boolean
    acceptsTrade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    views?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: UserUpdateOneRequiredWithoutSellerListingsNestedInput
    proposals?: ProposalUpdateManyWithoutListingNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutListingNestedInput
    dealerListing?: DealerListingUpdateOneWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptsFinancing?: BoolFieldUpdateOperationsInput | boolean
    acceptsTrade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    views?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposals?: ProposalUncheckedUpdateManyWithoutListingNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutListingNestedInput
    dealerListing?: DealerListingUncheckedUpdateOneWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    acceptsFinancing?: BoolFieldUpdateOperationsInput | boolean
    acceptsTrade?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    views?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionMediaCreateManyInspectionInput = {
    id?: string
    type: $Enums.MediaType
    url: string
    key: string
    hash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InspectionItemCreateManyInspectionInput = {
    id?: string
    category: string
    item: string
    result: string
    score?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type InspectionMediaUpdateWithoutInspectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionMediaUncheckedUpdateWithoutInspectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionMediaUncheckedUpdateManyWithoutInspectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionItemUpdateWithoutInspectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionItemUncheckedUpdateWithoutInspectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspectionItemUncheckedUpdateManyWithoutInspectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalCreateManyListingInput = {
    id?: string
    buyerId: string
    amount: number
    message?: string | null
    status?: $Enums.ProposalStatus
    counterAmount?: number | null
    respondedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateManyListingInput = {
    id?: string
    senderId: string
    content: string
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ProposalUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    counterAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutBuyerProposalsNestedInput
  }

  export type ProposalUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    counterAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalUncheckedUpdateManyWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    counterAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealerListingCreateManyDealerInput = {
    id?: string
    listingId: string
    createdAt?: Date | string
  }

  export type DealerListingUpdateWithoutDealerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutDealerListingNestedInput
  }

  export type DealerListingUncheckedUpdateWithoutDealerInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealerListingUncheckedUpdateManyWithoutDealerInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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