/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model accounts
 *
 */
export type accounts = $Result.DefaultSelection<Prisma.$accountsPayload>;
/**
 * Model budgets
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type budgets = $Result.DefaultSelection<Prisma.$budgetsPayload>;
/**
 * Model categories
 *
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>;
/**
 * Model goals
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type goals = $Result.DefaultSelection<Prisma.$goalsPayload>;
/**
 * Model reminders
 *
 */
export type reminders = $Result.DefaultSelection<Prisma.$remindersPayload>;
/**
 * Model sync_states
 *
 */
export type sync_states = $Result.DefaultSelection<Prisma.$sync_statesPayload>;
/**
 * Model transactions
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type transactions =
  $Result.DefaultSelection<Prisma.$transactionsPayload>;
/**
 * Model users
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const account_type: {
    CASH: "CASH";
    BANK_ACCOUNT: "BANK_ACCOUNT";
    CREDIT_CARD: "CREDIT_CARD";
    SAVINGS: "SAVINGS";
    INVESTMENT: "INVESTMENT";
    OTHER: "OTHER";
  };

  export type account_type = (typeof account_type)[keyof typeof account_type];

  export const budget_period: {
    WEEKLY: "WEEKLY";
    MONTHLY: "MONTHLY";
    QUARTERLY: "QUARTERLY";
    YEARLY: "YEARLY";
  };

  export type budget_period =
    (typeof budget_period)[keyof typeof budget_period];

  export const recurring_frequency: {
    DAILY: "DAILY";
    WEEKLY: "WEEKLY";
    MONTHLY: "MONTHLY";
    YEARLY: "YEARLY";
  };

  export type recurring_frequency =
    (typeof recurring_frequency)[keyof typeof recurring_frequency];

  export const transaction_type: {
    INCOME: "INCOME";
    EXPENSE: "EXPENSE";
    TRANSFER: "TRANSFER";
  };

  export type transaction_type =
    (typeof transaction_type)[keyof typeof transaction_type];
}

export type account_type = $Enums.account_type;

export const account_type: typeof $Enums.account_type;

export type budget_period = $Enums.budget_period;

export const budget_period: typeof $Enums.budget_period;

export type recurring_frequency = $Enums.recurring_frequency;

export const recurring_frequency: typeof $Enums.recurring_frequency;

export type transaction_type = $Enums.transaction_type;

export const transaction_type: typeof $Enums.transaction_type;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.accounts.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.accounts.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

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
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.accounts`: Exposes CRUD operations for the **accounts** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Accounts
   * const accounts = await prisma.accounts.findMany()
   * ```
   */
  get accounts(): Prisma.accountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.budgets`: Exposes CRUD operations for the **budgets** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Budgets
   * const budgets = await prisma.budgets.findMany()
   * ```
   */
  get budgets(): Prisma.budgetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goals`: Exposes CRUD operations for the **goals** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Goals
   * const goals = await prisma.goals.findMany()
   * ```
   */
  get goals(): Prisma.goalsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reminders`: Exposes CRUD operations for the **reminders** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reminders
   * const reminders = await prisma.reminders.findMany()
   * ```
   */
  get reminders(): Prisma.remindersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sync_states`: Exposes CRUD operations for the **sync_states** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sync_states
   * const sync_states = await prisma.sync_states.findMany()
   * ```
   */
  get sync_states(): Prisma.sync_statesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **transactions** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Transactions
   * const transactions = await prisma.transactions.findMany()
   * ```
   */
  get transactions(): Prisma.transactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends bigint
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    accounts: "accounts";
    budgets: "budgets";
    categories: "categories";
    goals: "goals";
    reminders: "reminders";
    sync_states: "sync_states";
    transactions: "transactions";
    users: "users";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | "accounts"
        | "budgets"
        | "categories"
        | "goals"
        | "reminders"
        | "sync_states"
        | "transactions"
        | "users";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      accounts: {
        payload: Prisma.$accountsPayload<ExtArgs>;
        fields: Prisma.accountsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.accountsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.accountsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>;
          };
          findFirst: {
            args: Prisma.accountsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.accountsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>;
          };
          findMany: {
            args: Prisma.accountsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[];
          };
          create: {
            args: Prisma.accountsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>;
          };
          createMany: {
            args: Prisma.accountsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.accountsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[];
          };
          delete: {
            args: Prisma.accountsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>;
          };
          update: {
            args: Prisma.accountsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>;
          };
          deleteMany: {
            args: Prisma.accountsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.accountsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.accountsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[];
          };
          upsert: {
            args: Prisma.accountsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>;
          };
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAccounts>;
          };
          groupBy: {
            args: Prisma.accountsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AccountsGroupByOutputType>[];
          };
          count: {
            args: Prisma.accountsCountArgs<ExtArgs>;
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number;
          };
        };
      };
      budgets: {
        payload: Prisma.$budgetsPayload<ExtArgs>;
        fields: Prisma.budgetsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.budgetsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.budgetsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>;
          };
          findFirst: {
            args: Prisma.budgetsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.budgetsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>;
          };
          findMany: {
            args: Prisma.budgetsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>[];
          };
          create: {
            args: Prisma.budgetsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>;
          };
          createMany: {
            args: Prisma.budgetsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.budgetsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>[];
          };
          delete: {
            args: Prisma.budgetsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>;
          };
          update: {
            args: Prisma.budgetsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>;
          };
          deleteMany: {
            args: Prisma.budgetsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.budgetsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.budgetsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>[];
          };
          upsert: {
            args: Prisma.budgetsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$budgetsPayload>;
          };
          aggregate: {
            args: Prisma.BudgetsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBudgets>;
          };
          groupBy: {
            args: Prisma.budgetsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BudgetsGroupByOutputType>[];
          };
          count: {
            args: Prisma.budgetsCountArgs<ExtArgs>;
            result: $Utils.Optional<BudgetsCountAggregateOutputType> | number;
          };
        };
      };
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>;
        fields: Prisma.categoriesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>;
          };
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>;
          };
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[];
          };
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>;
          };
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[];
          };
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>;
          };
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>;
          };
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[];
          };
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>;
          };
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategories>;
          };
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoriesGroupByOutputType>[];
          };
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CategoriesCountAggregateOutputType>
              | number;
          };
        };
      };
      goals: {
        payload: Prisma.$goalsPayload<ExtArgs>;
        fields: Prisma.goalsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.goalsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.goalsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalsPayload>;
          };
          findFirst: {
            args: Prisma.goalsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.goalsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalsPayload>;
          };
          findMany: {
            args: Prisma.goalsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalsPayload>[];
          };
          create: {
            args: Prisma.goalsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalsPayload>;
          };
          createMany: {
            args: Prisma.goalsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.goalsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalsPayload>[];
          };
          delete: {
            args: Prisma.goalsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalsPayload>;
          };
          update: {
            args: Prisma.goalsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalsPayload>;
          };
          deleteMany: {
            args: Prisma.goalsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.goalsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.goalsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalsPayload>[];
          };
          upsert: {
            args: Prisma.goalsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalsPayload>;
          };
          aggregate: {
            args: Prisma.GoalsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGoals>;
          };
          groupBy: {
            args: Prisma.goalsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GoalsGroupByOutputType>[];
          };
          count: {
            args: Prisma.goalsCountArgs<ExtArgs>;
            result: $Utils.Optional<GoalsCountAggregateOutputType> | number;
          };
        };
      };
      reminders: {
        payload: Prisma.$remindersPayload<ExtArgs>;
        fields: Prisma.remindersFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.remindersFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$remindersPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.remindersFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>;
          };
          findFirst: {
            args: Prisma.remindersFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$remindersPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.remindersFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>;
          };
          findMany: {
            args: Prisma.remindersFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>[];
          };
          create: {
            args: Prisma.remindersCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>;
          };
          createMany: {
            args: Prisma.remindersCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.remindersCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>[];
          };
          delete: {
            args: Prisma.remindersDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>;
          };
          update: {
            args: Prisma.remindersUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>;
          };
          deleteMany: {
            args: Prisma.remindersDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.remindersUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.remindersUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>[];
          };
          upsert: {
            args: Prisma.remindersUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>;
          };
          aggregate: {
            args: Prisma.RemindersAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReminders>;
          };
          groupBy: {
            args: Prisma.remindersGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RemindersGroupByOutputType>[];
          };
          count: {
            args: Prisma.remindersCountArgs<ExtArgs>;
            result: $Utils.Optional<RemindersCountAggregateOutputType> | number;
          };
        };
      };
      sync_states: {
        payload: Prisma.$sync_statesPayload<ExtArgs>;
        fields: Prisma.sync_statesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.sync_statesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sync_statesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.sync_statesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sync_statesPayload>;
          };
          findFirst: {
            args: Prisma.sync_statesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sync_statesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.sync_statesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sync_statesPayload>;
          };
          findMany: {
            args: Prisma.sync_statesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sync_statesPayload>[];
          };
          create: {
            args: Prisma.sync_statesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sync_statesPayload>;
          };
          createMany: {
            args: Prisma.sync_statesCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.sync_statesCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sync_statesPayload>[];
          };
          delete: {
            args: Prisma.sync_statesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sync_statesPayload>;
          };
          update: {
            args: Prisma.sync_statesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sync_statesPayload>;
          };
          deleteMany: {
            args: Prisma.sync_statesDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.sync_statesUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.sync_statesUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sync_statesPayload>[];
          };
          upsert: {
            args: Prisma.sync_statesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sync_statesPayload>;
          };
          aggregate: {
            args: Prisma.Sync_statesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSync_states>;
          };
          groupBy: {
            args: Prisma.sync_statesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Sync_statesGroupByOutputType>[];
          };
          count: {
            args: Prisma.sync_statesCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<Sync_statesCountAggregateOutputType>
              | number;
          };
        };
      };
      transactions: {
        payload: Prisma.$transactionsPayload<ExtArgs>;
        fields: Prisma.transactionsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.transactionsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.transactionsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>;
          };
          findFirst: {
            args: Prisma.transactionsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.transactionsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>;
          };
          findMany: {
            args: Prisma.transactionsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[];
          };
          create: {
            args: Prisma.transactionsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>;
          };
          createMany: {
            args: Prisma.transactionsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.transactionsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[];
          };
          delete: {
            args: Prisma.transactionsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>;
          };
          update: {
            args: Prisma.transactionsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>;
          };
          deleteMany: {
            args: Prisma.transactionsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.transactionsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.transactionsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[];
          };
          upsert: {
            args: Prisma.transactionsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>;
          };
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTransactions>;
          };
          groupBy: {
            args: Prisma.transactionsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TransactionsGroupByOutputType>[];
          };
          count: {
            args: Prisma.transactionsCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<TransactionsCountAggregateOutputType>
              | number;
          };
        };
      };
      users: {
        payload: Prisma.$usersPayload<ExtArgs>;
        fields: Prisma.usersFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[];
          };
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[];
          };
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[];
          };
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$usersPayload>;
          };
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUsers>;
          };
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UsersGroupByOutputType>[];
          };
          count: {
            args: Prisma.usersCountArgs<ExtArgs>;
            result: $Utils.Optional<UsersCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    accounts?: accountsOmit;
    budgets?: budgetsOmit;
    categories?: categoriesOmit;
    goals?: goalsOmit;
    reminders?: remindersOmit;
    sync_states?: sync_statesOmit;
    transactions?: transactionsOmit;
    users?: usersOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T["level"] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type AccountsCountOutputType
   */

  export type AccountsCountOutputType = {
    goals: number;
    transactions_transactions_account_idToaccounts: number;
    transactions_transactions_to_account_idToaccounts: number;
  };

  export type AccountsCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    goals?: boolean | AccountsCountOutputTypeCountGoalsArgs;
    transactions_transactions_account_idToaccounts?:
      | boolean
      | AccountsCountOutputTypeCountTransactions_transactions_account_idToaccountsArgs;
    transactions_transactions_to_account_idToaccounts?:
      | boolean
      | AccountsCountOutputTypeCountTransactions_transactions_to_account_idToaccountsArgs;
  };

  // Custom InputTypes
  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AccountsCountOutputType
     */
    select?: AccountsCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountGoalsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: goalsWhereInput;
  };

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountTransactions_transactions_account_idToaccountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: transactionsWhereInput;
  };

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountTransactions_transactions_to_account_idToaccountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: transactionsWhereInput;
  };

  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    budgets: number;
    other_categories: number;
    transactions: number;
  };

  export type CategoriesCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    budgets?: boolean | CategoriesCountOutputTypeCountBudgetsArgs;
    other_categories?:
      | boolean
      | CategoriesCountOutputTypeCountOther_categoriesArgs;
    transactions?: boolean | CategoriesCountOutputTypeCountTransactionsArgs;
  };

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountBudgetsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: budgetsWhereInput;
  };

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountOther_categoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: categoriesWhereInput;
  };

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountTransactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: transactionsWhereInput;
  };

  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    accounts: number;
    budgets: number;
    categories: number;
    goals: number;
    reminders: number;
    transactions: number;
  };

  export type UsersCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    accounts?: boolean | UsersCountOutputTypeCountAccountsArgs;
    budgets?: boolean | UsersCountOutputTypeCountBudgetsArgs;
    categories?: boolean | UsersCountOutputTypeCountCategoriesArgs;
    goals?: boolean | UsersCountOutputTypeCountGoalsArgs;
    reminders?: boolean | UsersCountOutputTypeCountRemindersArgs;
    transactions?: boolean | UsersCountOutputTypeCountTransactionsArgs;
  };

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAccountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: accountsWhereInput;
  };

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBudgetsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: budgetsWhereInput;
  };

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCategoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: categoriesWhereInput;
  };

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGoalsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: goalsWhereInput;
  };

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRemindersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: remindersWhereInput;
  };

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTransactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: transactionsWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null;
    _avg: AccountsAvgAggregateOutputType | null;
    _sum: AccountsSumAggregateOutputType | null;
    _min: AccountsMinAggregateOutputType | null;
    _max: AccountsMaxAggregateOutputType | null;
  };

  export type AccountsAvgAggregateOutputType = {
    balance: Decimal | null;
  };

  export type AccountsSumAggregateOutputType = {
    balance: Decimal | null;
  };

  export type AccountsMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: $Enums.account_type | null;
    balance: Decimal | null;
    color: string | null;
    icon: string | null;
    is_active: boolean | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AccountsMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: $Enums.account_type | null;
    balance: Decimal | null;
    color: string | null;
    icon: string | null;
    is_active: boolean | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AccountsCountAggregateOutputType = {
    id: number;
    name: number;
    type: number;
    balance: number;
    color: number;
    icon: number;
    is_active: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AccountsAvgAggregateInputType = {
    balance?: true;
  };

  export type AccountsSumAggregateInputType = {
    balance?: true;
  };

  export type AccountsMinAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    balance?: true;
    color?: true;
    icon?: true;
    is_active?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AccountsMaxAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    balance?: true;
    color?: true;
    icon?: true;
    is_active?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AccountsCountAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    balance?: true;
    color?: true;
    icon?: true;
    is_active?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AccountsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which accounts to aggregate.
     */
    where?: accountsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of accounts to fetch.
     */
    orderBy?:
      | accountsOrderByWithRelationInput
      | accountsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: accountsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned accounts
     **/
    _count?: true | AccountsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AccountsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AccountsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AccountsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AccountsMaxAggregateInputType;
  };

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
    [P in keyof T & keyof AggregateAccounts]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>;
  };

  export type accountsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: accountsWhereInput;
    orderBy?:
      | accountsOrderByWithAggregationInput
      | accountsOrderByWithAggregationInput[];
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum;
    having?: accountsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AccountsCountAggregateInputType | true;
    _avg?: AccountsAvgAggregateInputType;
    _sum?: AccountsSumAggregateInputType;
    _min?: AccountsMinAggregateInputType;
    _max?: AccountsMaxAggregateInputType;
  };

  export type AccountsGroupByOutputType = {
    id: string;
    name: string;
    type: $Enums.account_type;
    balance: Decimal | null;
    color: string | null;
    icon: string | null;
    is_active: boolean | null;
    user_id: string;
    created_at: Date | null;
    updated_at: Date | null;
    _count: AccountsCountAggregateOutputType | null;
    _avg: AccountsAvgAggregateOutputType | null;
    _sum: AccountsSumAggregateOutputType | null;
    _min: AccountsMinAggregateOutputType | null;
    _max: AccountsMaxAggregateOutputType | null;
  };

  type GetAccountsGroupByPayload<T extends accountsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AccountsGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof AccountsGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>;
        }
      >
    >;

  export type accountsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
      balance?: boolean;
      color?: boolean;
      icon?: boolean;
      is_active?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      users?: boolean | usersDefaultArgs<ExtArgs>;
      goals?: boolean | accounts$goalsArgs<ExtArgs>;
      transactions_transactions_account_idToaccounts?:
        | boolean
        | accounts$transactions_transactions_account_idToaccountsArgs<ExtArgs>;
      transactions_transactions_to_account_idToaccounts?:
        | boolean
        | accounts$transactions_transactions_to_account_idToaccountsArgs<ExtArgs>;
      _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["accounts"]
  >;

  export type accountsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
      balance?: boolean;
      color?: boolean;
      icon?: boolean;
      is_active?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      users?: boolean | usersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["accounts"]
  >;

  export type accountsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
      balance?: boolean;
      color?: boolean;
      icon?: boolean;
      is_active?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      users?: boolean | usersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["accounts"]
  >;

  export type accountsSelectScalar = {
    id?: boolean;
    name?: boolean;
    type?: boolean;
    balance?: boolean;
    color?: boolean;
    icon?: boolean;
    is_active?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type accountsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "type"
    | "balance"
    | "color"
    | "icon"
    | "is_active"
    | "user_id"
    | "created_at"
    | "updated_at",
    ExtArgs["result"]["accounts"]
  >;
  export type accountsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | usersDefaultArgs<ExtArgs>;
    goals?: boolean | accounts$goalsArgs<ExtArgs>;
    transactions_transactions_account_idToaccounts?:
      | boolean
      | accounts$transactions_transactions_account_idToaccountsArgs<ExtArgs>;
    transactions_transactions_to_account_idToaccounts?:
      | boolean
      | accounts$transactions_transactions_to_account_idToaccountsArgs<ExtArgs>;
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type accountsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | usersDefaultArgs<ExtArgs>;
  };
  export type accountsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | usersDefaultArgs<ExtArgs>;
  };

  export type $accountsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "accounts";
    objects: {
      users: Prisma.$usersPayload<ExtArgs>;
      goals: Prisma.$goalsPayload<ExtArgs>[];
      transactions_transactions_account_idToaccounts: Prisma.$transactionsPayload<ExtArgs>[];
      transactions_transactions_to_account_idToaccounts: Prisma.$transactionsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        type: $Enums.account_type;
        balance: Prisma.Decimal | null;
        color: string | null;
        icon: string | null;
        is_active: boolean | null;
        user_id: string;
        created_at: Date | null;
        updated_at: Date | null;
      },
      ExtArgs["result"]["accounts"]
    >;
    composites: {};
  };

  type accountsGetPayload<
    S extends boolean | null | undefined | accountsDefaultArgs,
  > = $Result.GetResult<Prisma.$accountsPayload, S>;

  type accountsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<accountsFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: AccountsCountAggregateInputType | true;
  };

  export interface accountsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["accounts"];
      meta: { name: "accounts" };
    };
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {accountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountsFindUniqueArgs>(
      args: SelectSubset<T, accountsFindUniqueArgs<ExtArgs>>,
    ): Prisma__accountsClient<
      $Result.GetResult<
        Prisma.$accountsPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, accountsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__accountsClient<
      $Result.GetResult<
        Prisma.$accountsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountsFindFirstArgs>(
      args?: SelectSubset<T, accountsFindFirstArgs<ExtArgs>>,
    ): Prisma__accountsClient<
      $Result.GetResult<
        Prisma.$accountsPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, accountsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__accountsClient<
      $Result.GetResult<
        Prisma.$accountsPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     *
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const accountsWithIdOnly = await prisma.accounts.findMany({ select: { id: true } })
     *
     */
    findMany<T extends accountsFindManyArgs>(
      args?: SelectSubset<T, accountsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$accountsPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Accounts.
     * @param {accountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     *
     */
    create<T extends accountsCreateArgs>(
      args: SelectSubset<T, accountsCreateArgs<ExtArgs>>,
    ): Prisma__accountsClient<
      $Result.GetResult<
        Prisma.$accountsPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Accounts.
     * @param {accountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends accountsCreateManyArgs>(
      args?: SelectSubset<T, accountsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {accountsCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Accounts and only return the `id`
     * const accountsWithIdOnly = await prisma.accounts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends accountsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, accountsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$accountsPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Accounts.
     * @param {accountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     *
     */
    delete<T extends accountsDeleteArgs>(
      args: SelectSubset<T, accountsDeleteArgs<ExtArgs>>,
    ): Prisma__accountsClient<
      $Result.GetResult<
        Prisma.$accountsPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Accounts.
     * @param {accountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends accountsUpdateArgs>(
      args: SelectSubset<T, accountsUpdateArgs<ExtArgs>>,
    ): Prisma__accountsClient<
      $Result.GetResult<
        Prisma.$accountsPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Accounts.
     * @param {accountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends accountsDeleteManyArgs>(
      args?: SelectSubset<T, accountsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends accountsUpdateManyArgs>(
      args: SelectSubset<T, accountsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {accountsUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Accounts and only return the `id`
     * const accountsWithIdOnly = await prisma.accounts.updateManyAndReturn({
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
    updateManyAndReturn<T extends accountsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, accountsUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$accountsPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Accounts.
     * @param {accountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends accountsUpsertArgs>(
      args: SelectSubset<T, accountsUpsertArgs<ExtArgs>>,
    ): Prisma__accountsClient<
      $Result.GetResult<
        Prisma.$accountsPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
     **/
    count<T extends accountsCountArgs>(
      args?: Subset<T, accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AccountsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountsAggregateArgs>(
      args: Subset<T, AccountsAggregateArgs>,
    ): Prisma.PrismaPromise<GetAccountsAggregateType<T>>;

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsGroupByArgs} args - Group by arguments.
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
      T extends accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountsGroupByArgs["orderBy"] }
        : { orderBy?: accountsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? "Error: \"by\" must not be empty."
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      " in \"having\" needs to be provided in \"by\"",
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : "Error: If you provide \"take\", you also need to provide \"orderBy\""
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, accountsGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAccountsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the accounts model
     */
    readonly fields: accountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends usersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, usersDefaultArgs<ExtArgs>>,
    ): Prisma__usersClient<
      | $Result.GetResult<
          Prisma.$usersPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    goals<T extends accounts$goalsArgs<ExtArgs> = {}>(
      args?: Subset<T, accounts$goalsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$goalsPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    transactions_transactions_account_idToaccounts<
      T extends
        accounts$transactions_transactions_account_idToaccountsArgs<ExtArgs> = {},
    >(
      args?: Subset<
        T,
        accounts$transactions_transactions_account_idToaccountsArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$transactionsPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    transactions_transactions_to_account_idToaccounts<
      T extends
        accounts$transactions_transactions_to_account_idToaccountsArgs<ExtArgs> = {},
    >(
      args?: Subset<
        T,
        accounts$transactions_transactions_to_account_idToaccountsArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$transactionsPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the accounts model
   */
  interface accountsFieldRefs {
    readonly id: FieldRef<"accounts", "String">;
    readonly name: FieldRef<"accounts", "String">;
    readonly type: FieldRef<"accounts", "account_type">;
    readonly balance: FieldRef<"accounts", "Decimal">;
    readonly color: FieldRef<"accounts", "String">;
    readonly icon: FieldRef<"accounts", "String">;
    readonly is_active: FieldRef<"accounts", "Boolean">;
    readonly user_id: FieldRef<"accounts", "String">;
    readonly created_at: FieldRef<"accounts", "DateTime">;
    readonly updated_at: FieldRef<"accounts", "DateTime">;
  }

  // Custom InputTypes
  /**
   * accounts findUnique
   */
  export type accountsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null;
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput;
  };

  /**
   * accounts findUniqueOrThrow
   */
  export type accountsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null;
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput;
  };

  /**
   * accounts findFirst
   */
  export type accountsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null;
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of accounts to fetch.
     */
    orderBy?:
      | accountsOrderByWithRelationInput
      | accountsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[];
  };

  /**
   * accounts findFirstOrThrow
   */
  export type accountsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null;
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of accounts to fetch.
     */
    orderBy?:
      | accountsOrderByWithRelationInput
      | accountsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[];
  };

  /**
   * accounts findMany
   */
  export type accountsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null;
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of accounts to fetch.
     */
    orderBy?:
      | accountsOrderByWithRelationInput
      | accountsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing accounts.
     */
    cursor?: accountsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` accounts.
     */
    skip?: number;
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[];
  };

  /**
   * accounts create
   */
  export type accountsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null;
    /**
     * The data needed to create a accounts.
     */
    data: XOR<accountsCreateInput, accountsUncheckedCreateInput>;
  };

  /**
   * accounts createMany
   */
  export type accountsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * accounts createManyAndReturn
   */
  export type accountsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null;
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * accounts update
   */
  export type accountsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null;
    /**
     * The data needed to update a accounts.
     */
    data: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>;
    /**
     * Choose, which accounts to update.
     */
    where: accountsWhereUniqueInput;
  };

  /**
   * accounts updateMany
   */
  export type accountsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update accounts.
     */
    data: XOR<
      accountsUpdateManyMutationInput,
      accountsUncheckedUpdateManyInput
    >;
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput;
    /**
     * Limit how many accounts to update.
     */
    limit?: number;
  };

  /**
   * accounts updateManyAndReturn
   */
  export type accountsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null;
    /**
     * The data used to update accounts.
     */
    data: XOR<
      accountsUpdateManyMutationInput,
      accountsUncheckedUpdateManyInput
    >;
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput;
    /**
     * Limit how many accounts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * accounts upsert
   */
  export type accountsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null;
    /**
     * The filter to search for the accounts to update in case it exists.
     */
    where: accountsWhereUniqueInput;
    /**
     * In case the accounts found by the `where` argument doesn't exist, create a new accounts with this data.
     */
    create: XOR<accountsCreateInput, accountsUncheckedCreateInput>;
    /**
     * In case the accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>;
  };

  /**
   * accounts delete
   */
  export type accountsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null;
    /**
     * Filter which accounts to delete.
     */
    where: accountsWhereUniqueInput;
  };

  /**
   * accounts deleteMany
   */
  export type accountsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which accounts to delete
     */
    where?: accountsWhereInput;
    /**
     * Limit how many accounts to delete.
     */
    limit?: number;
  };

  /**
   * accounts.goals
   */
  export type accounts$goalsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goals
     */
    omit?: goalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null;
    where?: goalsWhereInput;
    orderBy?: goalsOrderByWithRelationInput | goalsOrderByWithRelationInput[];
    cursor?: goalsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: GoalsScalarFieldEnum | GoalsScalarFieldEnum[];
  };

  /**
   * accounts.transactions_transactions_account_idToaccounts
   */
  export type accounts$transactions_transactions_account_idToaccountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    where?: transactionsWhereInput;
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    cursor?: transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[];
  };

  /**
   * accounts.transactions_transactions_to_account_idToaccounts
   */
  export type accounts$transactions_transactions_to_account_idToaccountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    where?: transactionsWhereInput;
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    cursor?: transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[];
  };

  /**
   * accounts without action
   */
  export type accountsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null;
  };

  /**
   * Model budgets
   */

  export type AggregateBudgets = {
    _count: BudgetsCountAggregateOutputType | null;
    _avg: BudgetsAvgAggregateOutputType | null;
    _sum: BudgetsSumAggregateOutputType | null;
    _min: BudgetsMinAggregateOutputType | null;
    _max: BudgetsMaxAggregateOutputType | null;
  };

  export type BudgetsAvgAggregateOutputType = {
    amount: Decimal | null;
    spent: Decimal | null;
    alert_at: Decimal | null;
  };

  export type BudgetsSumAggregateOutputType = {
    amount: Decimal | null;
    spent: Decimal | null;
    alert_at: Decimal | null;
  };

  export type BudgetsMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    amount: Decimal | null;
    period: $Enums.budget_period | null;
    start_date: Date | null;
    end_date: Date | null;
    spent: Decimal | null;
    alert_at: Decimal | null;
    category_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BudgetsMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    amount: Decimal | null;
    period: $Enums.budget_period | null;
    start_date: Date | null;
    end_date: Date | null;
    spent: Decimal | null;
    alert_at: Decimal | null;
    category_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BudgetsCountAggregateOutputType = {
    id: number;
    name: number;
    amount: number;
    period: number;
    start_date: number;
    end_date: number;
    spent: number;
    alert_at: number;
    category_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BudgetsAvgAggregateInputType = {
    amount?: true;
    spent?: true;
    alert_at?: true;
  };

  export type BudgetsSumAggregateInputType = {
    amount?: true;
    spent?: true;
    alert_at?: true;
  };

  export type BudgetsMinAggregateInputType = {
    id?: true;
    name?: true;
    amount?: true;
    period?: true;
    start_date?: true;
    end_date?: true;
    spent?: true;
    alert_at?: true;
    category_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BudgetsMaxAggregateInputType = {
    id?: true;
    name?: true;
    amount?: true;
    period?: true;
    start_date?: true;
    end_date?: true;
    spent?: true;
    alert_at?: true;
    category_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BudgetsCountAggregateInputType = {
    id?: true;
    name?: true;
    amount?: true;
    period?: true;
    start_date?: true;
    end_date?: true;
    spent?: true;
    alert_at?: true;
    category_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BudgetsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which budgets to aggregate.
     */
    where?: budgetsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of budgets to fetch.
     */
    orderBy?:
      | budgetsOrderByWithRelationInput
      | budgetsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: budgetsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` budgets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` budgets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned budgets
     **/
    _count?: true | BudgetsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BudgetsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BudgetsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BudgetsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BudgetsMaxAggregateInputType;
  };

  export type GetBudgetsAggregateType<T extends BudgetsAggregateArgs> = {
    [P in keyof T & keyof AggregateBudgets]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudgets[P]>
      : GetScalarType<T[P], AggregateBudgets[P]>;
  };

  export type budgetsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: budgetsWhereInput;
    orderBy?:
      | budgetsOrderByWithAggregationInput
      | budgetsOrderByWithAggregationInput[];
    by: BudgetsScalarFieldEnum[] | BudgetsScalarFieldEnum;
    having?: budgetsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BudgetsCountAggregateInputType | true;
    _avg?: BudgetsAvgAggregateInputType;
    _sum?: BudgetsSumAggregateInputType;
    _min?: BudgetsMinAggregateInputType;
    _max?: BudgetsMaxAggregateInputType;
  };

  export type BudgetsGroupByOutputType = {
    id: string;
    name: string;
    amount: Decimal;
    period: $Enums.budget_period | null;
    start_date: Date;
    end_date: Date | null;
    spent: Decimal | null;
    alert_at: Decimal | null;
    category_id: string | null;
    user_id: string;
    created_at: Date | null;
    updated_at: Date | null;
    _count: BudgetsCountAggregateOutputType | null;
    _avg: BudgetsAvgAggregateOutputType | null;
    _sum: BudgetsSumAggregateOutputType | null;
    _min: BudgetsMinAggregateOutputType | null;
    _max: BudgetsMaxAggregateOutputType | null;
  };

  type GetBudgetsGroupByPayload<T extends budgetsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BudgetsGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof BudgetsGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetsGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetsGroupByOutputType[P]>;
        }
      >
    >;

  export type budgetsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      amount?: boolean;
      period?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      spent?: boolean;
      alert_at?: boolean;
      category_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      categories?: boolean | budgets$categoriesArgs<ExtArgs>;
      users?: boolean | usersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["budgets"]
  >;

  export type budgetsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      amount?: boolean;
      period?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      spent?: boolean;
      alert_at?: boolean;
      category_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      categories?: boolean | budgets$categoriesArgs<ExtArgs>;
      users?: boolean | usersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["budgets"]
  >;

  export type budgetsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      amount?: boolean;
      period?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      spent?: boolean;
      alert_at?: boolean;
      category_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      categories?: boolean | budgets$categoriesArgs<ExtArgs>;
      users?: boolean | usersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["budgets"]
  >;

  export type budgetsSelectScalar = {
    id?: boolean;
    name?: boolean;
    amount?: boolean;
    period?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    spent?: boolean;
    alert_at?: boolean;
    category_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type budgetsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "amount"
    | "period"
    | "start_date"
    | "end_date"
    | "spent"
    | "alert_at"
    | "category_id"
    | "user_id"
    | "created_at"
    | "updated_at",
    ExtArgs["result"]["budgets"]
  >;
  export type budgetsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    categories?: boolean | budgets$categoriesArgs<ExtArgs>;
    users?: boolean | usersDefaultArgs<ExtArgs>;
  };
  export type budgetsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    categories?: boolean | budgets$categoriesArgs<ExtArgs>;
    users?: boolean | usersDefaultArgs<ExtArgs>;
  };
  export type budgetsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    categories?: boolean | budgets$categoriesArgs<ExtArgs>;
    users?: boolean | usersDefaultArgs<ExtArgs>;
  };

  export type $budgetsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "budgets";
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs> | null;
      users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        amount: Prisma.Decimal;
        period: $Enums.budget_period | null;
        start_date: Date;
        end_date: Date | null;
        spent: Prisma.Decimal | null;
        alert_at: Prisma.Decimal | null;
        category_id: string | null;
        user_id: string;
        created_at: Date | null;
        updated_at: Date | null;
      },
      ExtArgs["result"]["budgets"]
    >;
    composites: {};
  };

  type budgetsGetPayload<
    S extends boolean | null | undefined | budgetsDefaultArgs,
  > = $Result.GetResult<Prisma.$budgetsPayload, S>;

  type budgetsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<budgetsFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: BudgetsCountAggregateInputType | true;
  };

  export interface budgetsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["budgets"];
      meta: { name: "budgets" };
    };
    /**
     * Find zero or one Budgets that matches the filter.
     * @param {budgetsFindUniqueArgs} args - Arguments to find a Budgets
     * @example
     * // Get one Budgets
     * const budgets = await prisma.budgets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends budgetsFindUniqueArgs>(
      args: SelectSubset<T, budgetsFindUniqueArgs<ExtArgs>>,
    ): Prisma__budgetsClient<
      $Result.GetResult<
        Prisma.$budgetsPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Budgets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {budgetsFindUniqueOrThrowArgs} args - Arguments to find a Budgets
     * @example
     * // Get one Budgets
     * const budgets = await prisma.budgets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends budgetsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, budgetsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__budgetsClient<
      $Result.GetResult<
        Prisma.$budgetsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetsFindFirstArgs} args - Arguments to find a Budgets
     * @example
     * // Get one Budgets
     * const budgets = await prisma.budgets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends budgetsFindFirstArgs>(
      args?: SelectSubset<T, budgetsFindFirstArgs<ExtArgs>>,
    ): Prisma__budgetsClient<
      $Result.GetResult<
        Prisma.$budgetsPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Budgets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetsFindFirstOrThrowArgs} args - Arguments to find a Budgets
     * @example
     * // Get one Budgets
     * const budgets = await prisma.budgets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends budgetsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, budgetsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__budgetsClient<
      $Result.GetResult<
        Prisma.$budgetsPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Budgets
     * const budgets = await prisma.budgets.findMany()
     *
     * // Get first 10 Budgets
     * const budgets = await prisma.budgets.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const budgetsWithIdOnly = await prisma.budgets.findMany({ select: { id: true } })
     *
     */
    findMany<T extends budgetsFindManyArgs>(
      args?: SelectSubset<T, budgetsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$budgetsPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Budgets.
     * @param {budgetsCreateArgs} args - Arguments to create a Budgets.
     * @example
     * // Create one Budgets
     * const Budgets = await prisma.budgets.create({
     *   data: {
     *     // ... data to create a Budgets
     *   }
     * })
     *
     */
    create<T extends budgetsCreateArgs>(
      args: SelectSubset<T, budgetsCreateArgs<ExtArgs>>,
    ): Prisma__budgetsClient<
      $Result.GetResult<
        Prisma.$budgetsPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Budgets.
     * @param {budgetsCreateManyArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budgets = await prisma.budgets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends budgetsCreateManyArgs>(
      args?: SelectSubset<T, budgetsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Budgets and returns the data saved in the database.
     * @param {budgetsCreateManyAndReturnArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budgets = await prisma.budgets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Budgets and only return the `id`
     * const budgetsWithIdOnly = await prisma.budgets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends budgetsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, budgetsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$budgetsPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Budgets.
     * @param {budgetsDeleteArgs} args - Arguments to delete one Budgets.
     * @example
     * // Delete one Budgets
     * const Budgets = await prisma.budgets.delete({
     *   where: {
     *     // ... filter to delete one Budgets
     *   }
     * })
     *
     */
    delete<T extends budgetsDeleteArgs>(
      args: SelectSubset<T, budgetsDeleteArgs<ExtArgs>>,
    ): Prisma__budgetsClient<
      $Result.GetResult<
        Prisma.$budgetsPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Budgets.
     * @param {budgetsUpdateArgs} args - Arguments to update one Budgets.
     * @example
     * // Update one Budgets
     * const budgets = await prisma.budgets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends budgetsUpdateArgs>(
      args: SelectSubset<T, budgetsUpdateArgs<ExtArgs>>,
    ): Prisma__budgetsClient<
      $Result.GetResult<
        Prisma.$budgetsPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Budgets.
     * @param {budgetsDeleteManyArgs} args - Arguments to filter Budgets to delete.
     * @example
     * // Delete a few Budgets
     * const { count } = await prisma.budgets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends budgetsDeleteManyArgs>(
      args?: SelectSubset<T, budgetsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Budgets
     * const budgets = await prisma.budgets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends budgetsUpdateManyArgs>(
      args: SelectSubset<T, budgetsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Budgets and returns the data updated in the database.
     * @param {budgetsUpdateManyAndReturnArgs} args - Arguments to update many Budgets.
     * @example
     * // Update many Budgets
     * const budgets = await prisma.budgets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Budgets and only return the `id`
     * const budgetsWithIdOnly = await prisma.budgets.updateManyAndReturn({
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
    updateManyAndReturn<T extends budgetsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, budgetsUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$budgetsPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Budgets.
     * @param {budgetsUpsertArgs} args - Arguments to update or create a Budgets.
     * @example
     * // Update or create a Budgets
     * const budgets = await prisma.budgets.upsert({
     *   create: {
     *     // ... data to create a Budgets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Budgets we want to update
     *   }
     * })
     */
    upsert<T extends budgetsUpsertArgs>(
      args: SelectSubset<T, budgetsUpsertArgs<ExtArgs>>,
    ): Prisma__budgetsClient<
      $Result.GetResult<
        Prisma.$budgetsPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetsCountArgs} args - Arguments to filter Budgets to count.
     * @example
     * // Count the number of Budgets
     * const count = await prisma.budgets.count({
     *   where: {
     *     // ... the filter for the Budgets we want to count
     *   }
     * })
     **/
    count<T extends budgetsCountArgs>(
      args?: Subset<T, budgetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], BudgetsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BudgetsAggregateArgs>(
      args: Subset<T, BudgetsAggregateArgs>,
    ): Prisma.PrismaPromise<GetBudgetsAggregateType<T>>;

    /**
     * Group by Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {budgetsGroupByArgs} args - Group by arguments.
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
      T extends budgetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: budgetsGroupByArgs["orderBy"] }
        : { orderBy?: budgetsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? "Error: \"by\" must not be empty."
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      " in \"having\" needs to be provided in \"by\"",
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : "Error: If you provide \"take\", you also need to provide \"orderBy\""
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, budgetsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetBudgetsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the budgets model
     */
    readonly fields: budgetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for budgets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__budgetsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    categories<T extends budgets$categoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, budgets$categoriesArgs<ExtArgs>>,
    ): Prisma__categoriesClient<
      $Result.GetResult<
        Prisma.$categoriesPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    users<T extends usersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, usersDefaultArgs<ExtArgs>>,
    ): Prisma__usersClient<
      | $Result.GetResult<
          Prisma.$usersPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the budgets model
   */
  interface budgetsFieldRefs {
    readonly id: FieldRef<"budgets", "String">;
    readonly name: FieldRef<"budgets", "String">;
    readonly amount: FieldRef<"budgets", "Decimal">;
    readonly period: FieldRef<"budgets", "budget_period">;
    readonly start_date: FieldRef<"budgets", "DateTime">;
    readonly end_date: FieldRef<"budgets", "DateTime">;
    readonly spent: FieldRef<"budgets", "Decimal">;
    readonly alert_at: FieldRef<"budgets", "Decimal">;
    readonly category_id: FieldRef<"budgets", "String">;
    readonly user_id: FieldRef<"budgets", "String">;
    readonly created_at: FieldRef<"budgets", "DateTime">;
    readonly updated_at: FieldRef<"budgets", "DateTime">;
  }

  // Custom InputTypes
  /**
   * budgets findUnique
   */
  export type budgetsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null;
    /**
     * Filter, which budgets to fetch.
     */
    where: budgetsWhereUniqueInput;
  };

  /**
   * budgets findUniqueOrThrow
   */
  export type budgetsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null;
    /**
     * Filter, which budgets to fetch.
     */
    where: budgetsWhereUniqueInput;
  };

  /**
   * budgets findFirst
   */
  export type budgetsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null;
    /**
     * Filter, which budgets to fetch.
     */
    where?: budgetsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of budgets to fetch.
     */
    orderBy?:
      | budgetsOrderByWithRelationInput
      | budgetsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for budgets.
     */
    cursor?: budgetsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` budgets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` budgets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of budgets.
     */
    distinct?: BudgetsScalarFieldEnum | BudgetsScalarFieldEnum[];
  };

  /**
   * budgets findFirstOrThrow
   */
  export type budgetsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null;
    /**
     * Filter, which budgets to fetch.
     */
    where?: budgetsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of budgets to fetch.
     */
    orderBy?:
      | budgetsOrderByWithRelationInput
      | budgetsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for budgets.
     */
    cursor?: budgetsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` budgets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` budgets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of budgets.
     */
    distinct?: BudgetsScalarFieldEnum | BudgetsScalarFieldEnum[];
  };

  /**
   * budgets findMany
   */
  export type budgetsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null;
    /**
     * Filter, which budgets to fetch.
     */
    where?: budgetsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of budgets to fetch.
     */
    orderBy?:
      | budgetsOrderByWithRelationInput
      | budgetsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing budgets.
     */
    cursor?: budgetsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` budgets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` budgets.
     */
    skip?: number;
    distinct?: BudgetsScalarFieldEnum | BudgetsScalarFieldEnum[];
  };

  /**
   * budgets create
   */
  export type budgetsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null;
    /**
     * The data needed to create a budgets.
     */
    data: XOR<budgetsCreateInput, budgetsUncheckedCreateInput>;
  };

  /**
   * budgets createMany
   */
  export type budgetsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many budgets.
     */
    data: budgetsCreateManyInput | budgetsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * budgets createManyAndReturn
   */
  export type budgetsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null;
    /**
     * The data used to create many budgets.
     */
    data: budgetsCreateManyInput | budgetsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * budgets update
   */
  export type budgetsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null;
    /**
     * The data needed to update a budgets.
     */
    data: XOR<budgetsUpdateInput, budgetsUncheckedUpdateInput>;
    /**
     * Choose, which budgets to update.
     */
    where: budgetsWhereUniqueInput;
  };

  /**
   * budgets updateMany
   */
  export type budgetsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update budgets.
     */
    data: XOR<budgetsUpdateManyMutationInput, budgetsUncheckedUpdateManyInput>;
    /**
     * Filter which budgets to update
     */
    where?: budgetsWhereInput;
    /**
     * Limit how many budgets to update.
     */
    limit?: number;
  };

  /**
   * budgets updateManyAndReturn
   */
  export type budgetsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null;
    /**
     * The data used to update budgets.
     */
    data: XOR<budgetsUpdateManyMutationInput, budgetsUncheckedUpdateManyInput>;
    /**
     * Filter which budgets to update
     */
    where?: budgetsWhereInput;
    /**
     * Limit how many budgets to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * budgets upsert
   */
  export type budgetsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null;
    /**
     * The filter to search for the budgets to update in case it exists.
     */
    where: budgetsWhereUniqueInput;
    /**
     * In case the budgets found by the `where` argument doesn't exist, create a new budgets with this data.
     */
    create: XOR<budgetsCreateInput, budgetsUncheckedCreateInput>;
    /**
     * In case the budgets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<budgetsUpdateInput, budgetsUncheckedUpdateInput>;
  };

  /**
   * budgets delete
   */
  export type budgetsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null;
    /**
     * Filter which budgets to delete.
     */
    where: budgetsWhereUniqueInput;
  };

  /**
   * budgets deleteMany
   */
  export type budgetsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which budgets to delete
     */
    where?: budgetsWhereInput;
    /**
     * Limit how many budgets to delete.
     */
    limit?: number;
  };

  /**
   * budgets.categories
   */
  export type budgets$categoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    where?: categoriesWhereInput;
  };

  /**
   * budgets without action
   */
  export type budgetsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null;
  };

  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null;
    _min: CategoriesMinAggregateOutputType | null;
    _max: CategoriesMaxAggregateOutputType | null;
  };

  export type CategoriesMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    color: string | null;
    icon: string | null;
    type: $Enums.transaction_type | null;
    parent_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CategoriesMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    color: string | null;
    icon: string | null;
    type: $Enums.transaction_type | null;
    parent_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CategoriesCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    color: number;
    icon: number;
    type: number;
    parent_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CategoriesMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    color?: true;
    icon?: true;
    type?: true;
    parent_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CategoriesMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    color?: true;
    icon?: true;
    type?: true;
    parent_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CategoriesCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    color?: true;
    icon?: true;
    type?: true;
    parent_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CategoriesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of categories to fetch.
     */
    orderBy?:
      | categoriesOrderByWithRelationInput
      | categoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned categories
     **/
    _count?: true | CategoriesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoriesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoriesMaxAggregateInputType;
  };

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
    [P in keyof T & keyof AggregateCategories]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>;
  };

  export type categoriesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: categoriesWhereInput;
    orderBy?:
      | categoriesOrderByWithAggregationInput
      | categoriesOrderByWithAggregationInput[];
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum;
    having?: categoriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoriesCountAggregateInputType | true;
    _min?: CategoriesMinAggregateInputType;
    _max?: CategoriesMaxAggregateInputType;
  };

  export type CategoriesGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    color: string | null;
    icon: string | null;
    type: $Enums.transaction_type;
    parent_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: CategoriesCountAggregateOutputType | null;
    _min: CategoriesMinAggregateOutputType | null;
    _max: CategoriesMaxAggregateOutputType | null;
  };

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CategoriesGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CategoriesGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>;
        }
      >
    >;

  export type categoriesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      color?: boolean;
      icon?: boolean;
      type?: boolean;
      parent_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      budgets?: boolean | categories$budgetsArgs<ExtArgs>;
      categories?: boolean | categories$categoriesArgs<ExtArgs>;
      other_categories?: boolean | categories$other_categoriesArgs<ExtArgs>;
      users?: boolean | categories$usersArgs<ExtArgs>;
      transactions?: boolean | categories$transactionsArgs<ExtArgs>;
      _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["categories"]
  >;

  export type categoriesSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      color?: boolean;
      icon?: boolean;
      type?: boolean;
      parent_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      categories?: boolean | categories$categoriesArgs<ExtArgs>;
      users?: boolean | categories$usersArgs<ExtArgs>;
    },
    ExtArgs["result"]["categories"]
  >;

  export type categoriesSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      color?: boolean;
      icon?: boolean;
      type?: boolean;
      parent_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      categories?: boolean | categories$categoriesArgs<ExtArgs>;
      users?: boolean | categories$usersArgs<ExtArgs>;
    },
    ExtArgs["result"]["categories"]
  >;

  export type categoriesSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    color?: boolean;
    icon?: boolean;
    type?: boolean;
    parent_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type categoriesOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "description"
    | "color"
    | "icon"
    | "type"
    | "parent_id"
    | "user_id"
    | "created_at"
    | "updated_at",
    ExtArgs["result"]["categories"]
  >;
  export type categoriesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    budgets?: boolean | categories$budgetsArgs<ExtArgs>;
    categories?: boolean | categories$categoriesArgs<ExtArgs>;
    other_categories?: boolean | categories$other_categoriesArgs<ExtArgs>;
    users?: boolean | categories$usersArgs<ExtArgs>;
    transactions?: boolean | categories$transactionsArgs<ExtArgs>;
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type categoriesIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    categories?: boolean | categories$categoriesArgs<ExtArgs>;
    users?: boolean | categories$usersArgs<ExtArgs>;
  };
  export type categoriesIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    categories?: boolean | categories$categoriesArgs<ExtArgs>;
    users?: boolean | categories$usersArgs<ExtArgs>;
  };

  export type $categoriesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "categories";
    objects: {
      budgets: Prisma.$budgetsPayload<ExtArgs>[];
      categories: Prisma.$categoriesPayload<ExtArgs> | null;
      other_categories: Prisma.$categoriesPayload<ExtArgs>[];
      users: Prisma.$usersPayload<ExtArgs> | null;
      transactions: Prisma.$transactionsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        color: string | null;
        icon: string | null;
        type: $Enums.transaction_type;
        parent_id: string | null;
        user_id: string | null;
        created_at: Date | null;
        updated_at: Date | null;
      },
      ExtArgs["result"]["categories"]
    >;
    composites: {};
  };

  type categoriesGetPayload<
    S extends boolean | null | undefined | categoriesDefaultArgs,
  > = $Result.GetResult<Prisma.$categoriesPayload, S>;

  type categoriesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    categoriesFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: CategoriesCountAggregateInputType | true;
  };

  export interface categoriesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["categories"];
      meta: { name: "categories" };
    };
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(
      args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>,
    ): Prisma__categoriesClient<
      $Result.GetResult<
        Prisma.$categoriesPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(
      args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__categoriesClient<
      $Result.GetResult<
        Prisma.$categoriesPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(
      args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>,
    ): Prisma__categoriesClient<
      $Result.GetResult<
        Prisma.$categoriesPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__categoriesClient<
      $Result.GetResult<
        Prisma.$categoriesPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     *
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     *
     */
    findMany<T extends categoriesFindManyArgs>(
      args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$categoriesPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     *
     */
    create<T extends categoriesCreateArgs>(
      args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>,
    ): Prisma__categoriesClient<
      $Result.GetResult<
        Prisma.$categoriesPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends categoriesCreateManyArgs>(
      args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(
      args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$categoriesPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     *
     */
    delete<T extends categoriesDeleteArgs>(
      args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>,
    ): Prisma__categoriesClient<
      $Result.GetResult<
        Prisma.$categoriesPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends categoriesUpdateArgs>(
      args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>,
    ): Prisma__categoriesClient<
      $Result.GetResult<
        Prisma.$categoriesPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends categoriesDeleteManyArgs>(
      args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends categoriesUpdateManyArgs>(
      args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(
      args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$categoriesPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(
      args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>,
    ): Prisma__categoriesClient<
      $Result.GetResult<
        Prisma.$categoriesPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
     **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CategoriesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(
      args: Subset<T, CategoriesAggregateArgs>,
    ): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>;

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs["orderBy"] }
        : { orderBy?: categoriesGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? "Error: \"by\" must not be empty."
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      " in \"having\" needs to be provided in \"by\"",
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : "Error: If you provide \"take\", you also need to provide \"orderBy\""
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCategoriesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the categories model
     */
    readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    budgets<T extends categories$budgetsArgs<ExtArgs> = {}>(
      args?: Subset<T, categories$budgetsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$budgetsPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    categories<T extends categories$categoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, categories$categoriesArgs<ExtArgs>>,
    ): Prisma__categoriesClient<
      $Result.GetResult<
        Prisma.$categoriesPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    other_categories<T extends categories$other_categoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, categories$other_categoriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$categoriesPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    users<T extends categories$usersArgs<ExtArgs> = {}>(
      args?: Subset<T, categories$usersArgs<ExtArgs>>,
    ): Prisma__usersClient<
      $Result.GetResult<
        Prisma.$usersPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    transactions<T extends categories$transactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, categories$transactionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$transactionsPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", "String">;
    readonly name: FieldRef<"categories", "String">;
    readonly description: FieldRef<"categories", "String">;
    readonly color: FieldRef<"categories", "String">;
    readonly icon: FieldRef<"categories", "String">;
    readonly type: FieldRef<"categories", "transaction_type">;
    readonly parent_id: FieldRef<"categories", "String">;
    readonly user_id: FieldRef<"categories", "String">;
    readonly created_at: FieldRef<"categories", "DateTime">;
    readonly updated_at: FieldRef<"categories", "DateTime">;
  }

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput;
  };

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput;
  };

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of categories to fetch.
     */
    orderBy?:
      | categoriesOrderByWithRelationInput
      | categoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[];
  };

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of categories to fetch.
     */
    orderBy?:
      | categoriesOrderByWithRelationInput
      | categoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[];
  };

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of categories to fetch.
     */
    orderBy?:
      | categoriesOrderByWithRelationInput
      | categoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` categories.
     */
    skip?: number;
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[];
  };

  /**
   * categories create
   */
  export type categoriesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>;
  };

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * categories update
   */
  export type categoriesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>;
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput;
  };

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update categories.
     */
    data: XOR<
      categoriesUpdateManyMutationInput,
      categoriesUncheckedUpdateManyInput
    >;
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput;
    /**
     * Limit how many categories to update.
     */
    limit?: number;
  };

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * The data used to update categories.
     */
    data: XOR<
      categoriesUpdateManyMutationInput,
      categoriesUncheckedUpdateManyInput
    >;
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput;
    /**
     * Limit how many categories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput;
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>;
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>;
  };

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput;
  };

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput;
    /**
     * Limit how many categories to delete.
     */
    limit?: number;
  };

  /**
   * categories.budgets
   */
  export type categories$budgetsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null;
    where?: budgetsWhereInput;
    orderBy?:
      | budgetsOrderByWithRelationInput
      | budgetsOrderByWithRelationInput[];
    cursor?: budgetsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BudgetsScalarFieldEnum | BudgetsScalarFieldEnum[];
  };

  /**
   * categories.categories
   */
  export type categories$categoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    where?: categoriesWhereInput;
  };

  /**
   * categories.other_categories
   */
  export type categories$other_categoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    where?: categoriesWhereInput;
    orderBy?:
      | categoriesOrderByWithRelationInput
      | categoriesOrderByWithRelationInput[];
    cursor?: categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[];
  };

  /**
   * categories.users
   */
  export type categories$usersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null;
    where?: usersWhereInput;
  };

  /**
   * categories.transactions
   */
  export type categories$transactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    where?: transactionsWhereInput;
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    cursor?: transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[];
  };

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
  };

  /**
   * Model goals
   */

  export type AggregateGoals = {
    _count: GoalsCountAggregateOutputType | null;
    _avg: GoalsAvgAggregateOutputType | null;
    _sum: GoalsSumAggregateOutputType | null;
    _min: GoalsMinAggregateOutputType | null;
    _max: GoalsMaxAggregateOutputType | null;
  };

  export type GoalsAvgAggregateOutputType = {
    target: Decimal | null;
    current: Decimal | null;
  };

  export type GoalsSumAggregateOutputType = {
    target: Decimal | null;
    current: Decimal | null;
  };

  export type GoalsMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    target: Decimal | null;
    current: Decimal | null;
    deadline: Date | null;
    color: string | null;
    icon: string | null;
    auto_transfer: boolean | null;
    transfer_account_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GoalsMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    target: Decimal | null;
    current: Decimal | null;
    deadline: Date | null;
    color: string | null;
    icon: string | null;
    auto_transfer: boolean | null;
    transfer_account_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GoalsCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    target: number;
    current: number;
    deadline: number;
    color: number;
    icon: number;
    auto_transfer: number;
    transfer_account_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type GoalsAvgAggregateInputType = {
    target?: true;
    current?: true;
  };

  export type GoalsSumAggregateInputType = {
    target?: true;
    current?: true;
  };

  export type GoalsMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    target?: true;
    current?: true;
    deadline?: true;
    color?: true;
    icon?: true;
    auto_transfer?: true;
    transfer_account_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GoalsMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    target?: true;
    current?: true;
    deadline?: true;
    color?: true;
    icon?: true;
    auto_transfer?: true;
    transfer_account_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GoalsCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    target?: true;
    current?: true;
    deadline?: true;
    color?: true;
    icon?: true;
    auto_transfer?: true;
    transfer_account_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type GoalsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which goals to aggregate.
     */
    where?: goalsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of goals to fetch.
     */
    orderBy?: goalsOrderByWithRelationInput | goalsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: goalsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` goals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` goals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned goals
     **/
    _count?: true | GoalsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: GoalsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: GoalsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GoalsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GoalsMaxAggregateInputType;
  };

  export type GetGoalsAggregateType<T extends GoalsAggregateArgs> = {
    [P in keyof T & keyof AggregateGoals]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoals[P]>
      : GetScalarType<T[P], AggregateGoals[P]>;
  };

  export type goalsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: goalsWhereInput;
    orderBy?:
      | goalsOrderByWithAggregationInput
      | goalsOrderByWithAggregationInput[];
    by: GoalsScalarFieldEnum[] | GoalsScalarFieldEnum;
    having?: goalsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GoalsCountAggregateInputType | true;
    _avg?: GoalsAvgAggregateInputType;
    _sum?: GoalsSumAggregateInputType;
    _min?: GoalsMinAggregateInputType;
    _max?: GoalsMaxAggregateInputType;
  };

  export type GoalsGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    target: Decimal;
    current: Decimal | null;
    deadline: Date | null;
    color: string | null;
    icon: string | null;
    auto_transfer: boolean | null;
    transfer_account_id: string | null;
    user_id: string;
    created_at: Date | null;
    updated_at: Date | null;
    _count: GoalsCountAggregateOutputType | null;
    _avg: GoalsAvgAggregateOutputType | null;
    _sum: GoalsSumAggregateOutputType | null;
    _min: GoalsMinAggregateOutputType | null;
    _max: GoalsMaxAggregateOutputType | null;
  };

  type GetGoalsGroupByPayload<T extends goalsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<GoalsGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof GoalsGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalsGroupByOutputType[P]>
            : GetScalarType<T[P], GoalsGroupByOutputType[P]>;
        }
      >
    >;

  export type goalsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      target?: boolean;
      current?: boolean;
      deadline?: boolean;
      color?: boolean;
      icon?: boolean;
      auto_transfer?: boolean;
      transfer_account_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      accounts?: boolean | goals$accountsArgs<ExtArgs>;
      users?: boolean | usersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["goals"]
  >;

  export type goalsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      target?: boolean;
      current?: boolean;
      deadline?: boolean;
      color?: boolean;
      icon?: boolean;
      auto_transfer?: boolean;
      transfer_account_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      accounts?: boolean | goals$accountsArgs<ExtArgs>;
      users?: boolean | usersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["goals"]
  >;

  export type goalsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      target?: boolean;
      current?: boolean;
      deadline?: boolean;
      color?: boolean;
      icon?: boolean;
      auto_transfer?: boolean;
      transfer_account_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      accounts?: boolean | goals$accountsArgs<ExtArgs>;
      users?: boolean | usersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["goals"]
  >;

  export type goalsSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    target?: boolean;
    current?: boolean;
    deadline?: boolean;
    color?: boolean;
    icon?: boolean;
    auto_transfer?: boolean;
    transfer_account_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type goalsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "description"
    | "target"
    | "current"
    | "deadline"
    | "color"
    | "icon"
    | "auto_transfer"
    | "transfer_account_id"
    | "user_id"
    | "created_at"
    | "updated_at",
    ExtArgs["result"]["goals"]
  >;
  export type goalsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    accounts?: boolean | goals$accountsArgs<ExtArgs>;
    users?: boolean | usersDefaultArgs<ExtArgs>;
  };
  export type goalsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    accounts?: boolean | goals$accountsArgs<ExtArgs>;
    users?: boolean | usersDefaultArgs<ExtArgs>;
  };
  export type goalsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    accounts?: boolean | goals$accountsArgs<ExtArgs>;
    users?: boolean | usersDefaultArgs<ExtArgs>;
  };

  export type $goalsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "goals";
    objects: {
      accounts: Prisma.$accountsPayload<ExtArgs> | null;
      users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        target: Prisma.Decimal;
        current: Prisma.Decimal | null;
        deadline: Date | null;
        color: string | null;
        icon: string | null;
        auto_transfer: boolean | null;
        transfer_account_id: string | null;
        user_id: string;
        created_at: Date | null;
        updated_at: Date | null;
      },
      ExtArgs["result"]["goals"]
    >;
    composites: {};
  };

  type goalsGetPayload<
    S extends boolean | null | undefined | goalsDefaultArgs,
  > = $Result.GetResult<Prisma.$goalsPayload, S>;

  type goalsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<goalsFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: GoalsCountAggregateInputType | true;
  };

  export interface goalsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["goals"];
      meta: { name: "goals" };
    };
    /**
     * Find zero or one Goals that matches the filter.
     * @param {goalsFindUniqueArgs} args - Arguments to find a Goals
     * @example
     * // Get one Goals
     * const goals = await prisma.goals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends goalsFindUniqueArgs>(
      args: SelectSubset<T, goalsFindUniqueArgs<ExtArgs>>,
    ): Prisma__goalsClient<
      $Result.GetResult<
        Prisma.$goalsPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Goals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {goalsFindUniqueOrThrowArgs} args - Arguments to find a Goals
     * @example
     * // Get one Goals
     * const goals = await prisma.goals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends goalsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, goalsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__goalsClient<
      $Result.GetResult<
        Prisma.$goalsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalsFindFirstArgs} args - Arguments to find a Goals
     * @example
     * // Get one Goals
     * const goals = await prisma.goals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends goalsFindFirstArgs>(
      args?: SelectSubset<T, goalsFindFirstArgs<ExtArgs>>,
    ): Prisma__goalsClient<
      $Result.GetResult<
        Prisma.$goalsPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Goals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalsFindFirstOrThrowArgs} args - Arguments to find a Goals
     * @example
     * // Get one Goals
     * const goals = await prisma.goals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends goalsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, goalsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__goalsClient<
      $Result.GetResult<
        Prisma.$goalsPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goals.findMany()
     *
     * // Get first 10 Goals
     * const goals = await prisma.goals.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const goalsWithIdOnly = await prisma.goals.findMany({ select: { id: true } })
     *
     */
    findMany<T extends goalsFindManyArgs>(
      args?: SelectSubset<T, goalsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$goalsPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Goals.
     * @param {goalsCreateArgs} args - Arguments to create a Goals.
     * @example
     * // Create one Goals
     * const Goals = await prisma.goals.create({
     *   data: {
     *     // ... data to create a Goals
     *   }
     * })
     *
     */
    create<T extends goalsCreateArgs>(
      args: SelectSubset<T, goalsCreateArgs<ExtArgs>>,
    ): Prisma__goalsClient<
      $Result.GetResult<
        Prisma.$goalsPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Goals.
     * @param {goalsCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goals = await prisma.goals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends goalsCreateManyArgs>(
      args?: SelectSubset<T, goalsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {goalsCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goals = await prisma.goals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Goals and only return the `id`
     * const goalsWithIdOnly = await prisma.goals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends goalsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, goalsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$goalsPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Goals.
     * @param {goalsDeleteArgs} args - Arguments to delete one Goals.
     * @example
     * // Delete one Goals
     * const Goals = await prisma.goals.delete({
     *   where: {
     *     // ... filter to delete one Goals
     *   }
     * })
     *
     */
    delete<T extends goalsDeleteArgs>(
      args: SelectSubset<T, goalsDeleteArgs<ExtArgs>>,
    ): Prisma__goalsClient<
      $Result.GetResult<
        Prisma.$goalsPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Goals.
     * @param {goalsUpdateArgs} args - Arguments to update one Goals.
     * @example
     * // Update one Goals
     * const goals = await prisma.goals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends goalsUpdateArgs>(
      args: SelectSubset<T, goalsUpdateArgs<ExtArgs>>,
    ): Prisma__goalsClient<
      $Result.GetResult<
        Prisma.$goalsPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Goals.
     * @param {goalsDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends goalsDeleteManyArgs>(
      args?: SelectSubset<T, goalsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goals = await prisma.goals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends goalsUpdateManyArgs>(
      args: SelectSubset<T, goalsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {goalsUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goals = await prisma.goals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Goals and only return the `id`
     * const goalsWithIdOnly = await prisma.goals.updateManyAndReturn({
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
    updateManyAndReturn<T extends goalsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, goalsUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$goalsPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Goals.
     * @param {goalsUpsertArgs} args - Arguments to update or create a Goals.
     * @example
     * // Update or create a Goals
     * const goals = await prisma.goals.upsert({
     *   create: {
     *     // ... data to create a Goals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goals we want to update
     *   }
     * })
     */
    upsert<T extends goalsUpsertArgs>(
      args: SelectSubset<T, goalsUpsertArgs<ExtArgs>>,
    ): Prisma__goalsClient<
      $Result.GetResult<
        Prisma.$goalsPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalsCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goals.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
     **/
    count<T extends goalsCountArgs>(
      args?: Subset<T, goalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], GoalsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalsAggregateArgs>(
      args: Subset<T, GoalsAggregateArgs>,
    ): Prisma.PrismaPromise<GetGoalsAggregateType<T>>;

    /**
     * Group by Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalsGroupByArgs} args - Group by arguments.
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
      T extends goalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: goalsGroupByArgs["orderBy"] }
        : { orderBy?: goalsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? "Error: \"by\" must not be empty."
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      " in \"having\" needs to be provided in \"by\"",
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : "Error: If you provide \"take\", you also need to provide \"orderBy\""
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, goalsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetGoalsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the goals model
     */
    readonly fields: goalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for goals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__goalsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    accounts<T extends goals$accountsArgs<ExtArgs> = {}>(
      args?: Subset<T, goals$accountsArgs<ExtArgs>>,
    ): Prisma__accountsClient<
      $Result.GetResult<
        Prisma.$accountsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    users<T extends usersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, usersDefaultArgs<ExtArgs>>,
    ): Prisma__usersClient<
      | $Result.GetResult<
          Prisma.$usersPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the goals model
   */
  interface goalsFieldRefs {
    readonly id: FieldRef<"goals", "String">;
    readonly name: FieldRef<"goals", "String">;
    readonly description: FieldRef<"goals", "String">;
    readonly target: FieldRef<"goals", "Decimal">;
    readonly current: FieldRef<"goals", "Decimal">;
    readonly deadline: FieldRef<"goals", "DateTime">;
    readonly color: FieldRef<"goals", "String">;
    readonly icon: FieldRef<"goals", "String">;
    readonly auto_transfer: FieldRef<"goals", "Boolean">;
    readonly transfer_account_id: FieldRef<"goals", "String">;
    readonly user_id: FieldRef<"goals", "String">;
    readonly created_at: FieldRef<"goals", "DateTime">;
    readonly updated_at: FieldRef<"goals", "DateTime">;
  }

  // Custom InputTypes
  /**
   * goals findUnique
   */
  export type goalsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goals
     */
    omit?: goalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null;
    /**
     * Filter, which goals to fetch.
     */
    where: goalsWhereUniqueInput;
  };

  /**
   * goals findUniqueOrThrow
   */
  export type goalsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goals
     */
    omit?: goalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null;
    /**
     * Filter, which goals to fetch.
     */
    where: goalsWhereUniqueInput;
  };

  /**
   * goals findFirst
   */
  export type goalsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goals
     */
    omit?: goalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null;
    /**
     * Filter, which goals to fetch.
     */
    where?: goalsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of goals to fetch.
     */
    orderBy?: goalsOrderByWithRelationInput | goalsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for goals.
     */
    cursor?: goalsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` goals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` goals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of goals.
     */
    distinct?: GoalsScalarFieldEnum | GoalsScalarFieldEnum[];
  };

  /**
   * goals findFirstOrThrow
   */
  export type goalsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goals
     */
    omit?: goalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null;
    /**
     * Filter, which goals to fetch.
     */
    where?: goalsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of goals to fetch.
     */
    orderBy?: goalsOrderByWithRelationInput | goalsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for goals.
     */
    cursor?: goalsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` goals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` goals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of goals.
     */
    distinct?: GoalsScalarFieldEnum | GoalsScalarFieldEnum[];
  };

  /**
   * goals findMany
   */
  export type goalsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goals
     */
    omit?: goalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null;
    /**
     * Filter, which goals to fetch.
     */
    where?: goalsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of goals to fetch.
     */
    orderBy?: goalsOrderByWithRelationInput | goalsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing goals.
     */
    cursor?: goalsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` goals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` goals.
     */
    skip?: number;
    distinct?: GoalsScalarFieldEnum | GoalsScalarFieldEnum[];
  };

  /**
   * goals create
   */
  export type goalsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goals
     */
    omit?: goalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null;
    /**
     * The data needed to create a goals.
     */
    data: XOR<goalsCreateInput, goalsUncheckedCreateInput>;
  };

  /**
   * goals createMany
   */
  export type goalsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many goals.
     */
    data: goalsCreateManyInput | goalsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * goals createManyAndReturn
   */
  export type goalsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the goals
     */
    omit?: goalsOmit<ExtArgs> | null;
    /**
     * The data used to create many goals.
     */
    data: goalsCreateManyInput | goalsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * goals update
   */
  export type goalsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goals
     */
    omit?: goalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null;
    /**
     * The data needed to update a goals.
     */
    data: XOR<goalsUpdateInput, goalsUncheckedUpdateInput>;
    /**
     * Choose, which goals to update.
     */
    where: goalsWhereUniqueInput;
  };

  /**
   * goals updateMany
   */
  export type goalsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update goals.
     */
    data: XOR<goalsUpdateManyMutationInput, goalsUncheckedUpdateManyInput>;
    /**
     * Filter which goals to update
     */
    where?: goalsWhereInput;
    /**
     * Limit how many goals to update.
     */
    limit?: number;
  };

  /**
   * goals updateManyAndReturn
   */
  export type goalsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the goals
     */
    omit?: goalsOmit<ExtArgs> | null;
    /**
     * The data used to update goals.
     */
    data: XOR<goalsUpdateManyMutationInput, goalsUncheckedUpdateManyInput>;
    /**
     * Filter which goals to update
     */
    where?: goalsWhereInput;
    /**
     * Limit how many goals to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * goals upsert
   */
  export type goalsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goals
     */
    omit?: goalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null;
    /**
     * The filter to search for the goals to update in case it exists.
     */
    where: goalsWhereUniqueInput;
    /**
     * In case the goals found by the `where` argument doesn't exist, create a new goals with this data.
     */
    create: XOR<goalsCreateInput, goalsUncheckedCreateInput>;
    /**
     * In case the goals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<goalsUpdateInput, goalsUncheckedUpdateInput>;
  };

  /**
   * goals delete
   */
  export type goalsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goals
     */
    omit?: goalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null;
    /**
     * Filter which goals to delete.
     */
    where: goalsWhereUniqueInput;
  };

  /**
   * goals deleteMany
   */
  export type goalsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which goals to delete
     */
    where?: goalsWhereInput;
    /**
     * Limit how many goals to delete.
     */
    limit?: number;
  };

  /**
   * goals.accounts
   */
  export type goals$accountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null;
    where?: accountsWhereInput;
  };

  /**
   * goals without action
   */
  export type goalsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goals
     */
    omit?: goalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null;
  };

  /**
   * Model reminders
   */

  export type AggregateReminders = {
    _count: RemindersCountAggregateOutputType | null;
    _min: RemindersMinAggregateOutputType | null;
    _max: RemindersMaxAggregateOutputType | null;
  };

  export type RemindersMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    due_date: Date | null;
    is_completed: boolean | null;
    is_recurring: boolean | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RemindersMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    due_date: Date | null;
    is_completed: boolean | null;
    is_recurring: boolean | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RemindersCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    due_date: number;
    is_completed: number;
    is_recurring: number;
    recurring_rule: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type RemindersMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    due_date?: true;
    is_completed?: true;
    is_recurring?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RemindersMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    due_date?: true;
    is_completed?: true;
    is_recurring?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RemindersCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    due_date?: true;
    is_completed?: true;
    is_recurring?: true;
    recurring_rule?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type RemindersAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which reminders to aggregate.
     */
    where?: remindersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reminders to fetch.
     */
    orderBy?:
      | remindersOrderByWithRelationInput
      | remindersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: remindersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reminders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned reminders
     **/
    _count?: true | RemindersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RemindersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RemindersMaxAggregateInputType;
  };

  export type GetRemindersAggregateType<T extends RemindersAggregateArgs> = {
    [P in keyof T & keyof AggregateReminders]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminders[P]>
      : GetScalarType<T[P], AggregateReminders[P]>;
  };

  export type remindersGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: remindersWhereInput;
    orderBy?:
      | remindersOrderByWithAggregationInput
      | remindersOrderByWithAggregationInput[];
    by: RemindersScalarFieldEnum[] | RemindersScalarFieldEnum;
    having?: remindersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RemindersCountAggregateInputType | true;
    _min?: RemindersMinAggregateInputType;
    _max?: RemindersMaxAggregateInputType;
  };

  export type RemindersGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    due_date: Date;
    is_completed: boolean | null;
    is_recurring: boolean | null;
    recurring_rule: JsonValue | null;
    user_id: string;
    created_at: Date | null;
    updated_at: Date | null;
    _count: RemindersCountAggregateOutputType | null;
    _min: RemindersMinAggregateOutputType | null;
    _max: RemindersMaxAggregateOutputType | null;
  };

  type GetRemindersGroupByPayload<T extends remindersGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<RemindersGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof RemindersGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RemindersGroupByOutputType[P]>
            : GetScalarType<T[P], RemindersGroupByOutputType[P]>;
        }
      >
    >;

  export type remindersSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      due_date?: boolean;
      is_completed?: boolean;
      is_recurring?: boolean;
      recurring_rule?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      users?: boolean | usersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["reminders"]
  >;

  export type remindersSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      due_date?: boolean;
      is_completed?: boolean;
      is_recurring?: boolean;
      recurring_rule?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      users?: boolean | usersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["reminders"]
  >;

  export type remindersSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      due_date?: boolean;
      is_completed?: boolean;
      is_recurring?: boolean;
      recurring_rule?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      users?: boolean | usersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["reminders"]
  >;

  export type remindersSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    due_date?: boolean;
    is_completed?: boolean;
    is_recurring?: boolean;
    recurring_rule?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type remindersOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "title"
    | "description"
    | "due_date"
    | "is_completed"
    | "is_recurring"
    | "recurring_rule"
    | "user_id"
    | "created_at"
    | "updated_at",
    ExtArgs["result"]["reminders"]
  >;
  export type remindersInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | usersDefaultArgs<ExtArgs>;
  };
  export type remindersIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | usersDefaultArgs<ExtArgs>;
  };
  export type remindersIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | usersDefaultArgs<ExtArgs>;
  };

  export type $remindersPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "reminders";
    objects: {
      users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        due_date: Date;
        is_completed: boolean | null;
        is_recurring: boolean | null;
        recurring_rule: Prisma.JsonValue | null;
        user_id: string;
        created_at: Date | null;
        updated_at: Date | null;
      },
      ExtArgs["result"]["reminders"]
    >;
    composites: {};
  };

  type remindersGetPayload<
    S extends boolean | null | undefined | remindersDefaultArgs,
  > = $Result.GetResult<Prisma.$remindersPayload, S>;

  type remindersCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    remindersFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: RemindersCountAggregateInputType | true;
  };

  export interface remindersDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["reminders"];
      meta: { name: "reminders" };
    };
    /**
     * Find zero or one Reminders that matches the filter.
     * @param {remindersFindUniqueArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends remindersFindUniqueArgs>(
      args: SelectSubset<T, remindersFindUniqueArgs<ExtArgs>>,
    ): Prisma__remindersClient<
      $Result.GetResult<
        Prisma.$remindersPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Reminders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {remindersFindUniqueOrThrowArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends remindersFindUniqueOrThrowArgs>(
      args: SelectSubset<T, remindersFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__remindersClient<
      $Result.GetResult<
        Prisma.$remindersPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersFindFirstArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends remindersFindFirstArgs>(
      args?: SelectSubset<T, remindersFindFirstArgs<ExtArgs>>,
    ): Prisma__remindersClient<
      $Result.GetResult<
        Prisma.$remindersPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Reminders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersFindFirstOrThrowArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends remindersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, remindersFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__remindersClient<
      $Result.GetResult<
        Prisma.$remindersPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminders.findMany()
     *
     * // Get first 10 Reminders
     * const reminders = await prisma.reminders.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const remindersWithIdOnly = await prisma.reminders.findMany({ select: { id: true } })
     *
     */
    findMany<T extends remindersFindManyArgs>(
      args?: SelectSubset<T, remindersFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$remindersPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Reminders.
     * @param {remindersCreateArgs} args - Arguments to create a Reminders.
     * @example
     * // Create one Reminders
     * const Reminders = await prisma.reminders.create({
     *   data: {
     *     // ... data to create a Reminders
     *   }
     * })
     *
     */
    create<T extends remindersCreateArgs>(
      args: SelectSubset<T, remindersCreateArgs<ExtArgs>>,
    ): Prisma__remindersClient<
      $Result.GetResult<
        Prisma.$remindersPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Reminders.
     * @param {remindersCreateManyArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminders = await prisma.reminders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends remindersCreateManyArgs>(
      args?: SelectSubset<T, remindersCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Reminders and returns the data saved in the database.
     * @param {remindersCreateManyAndReturnArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminders = await prisma.reminders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Reminders and only return the `id`
     * const remindersWithIdOnly = await prisma.reminders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends remindersCreateManyAndReturnArgs>(
      args?: SelectSubset<T, remindersCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$remindersPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Reminders.
     * @param {remindersDeleteArgs} args - Arguments to delete one Reminders.
     * @example
     * // Delete one Reminders
     * const Reminders = await prisma.reminders.delete({
     *   where: {
     *     // ... filter to delete one Reminders
     *   }
     * })
     *
     */
    delete<T extends remindersDeleteArgs>(
      args: SelectSubset<T, remindersDeleteArgs<ExtArgs>>,
    ): Prisma__remindersClient<
      $Result.GetResult<
        Prisma.$remindersPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Reminders.
     * @param {remindersUpdateArgs} args - Arguments to update one Reminders.
     * @example
     * // Update one Reminders
     * const reminders = await prisma.reminders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends remindersUpdateArgs>(
      args: SelectSubset<T, remindersUpdateArgs<ExtArgs>>,
    ): Prisma__remindersClient<
      $Result.GetResult<
        Prisma.$remindersPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Reminders.
     * @param {remindersDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends remindersDeleteManyArgs>(
      args?: SelectSubset<T, remindersDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminders = await prisma.reminders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends remindersUpdateManyArgs>(
      args: SelectSubset<T, remindersUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reminders and returns the data updated in the database.
     * @param {remindersUpdateManyAndReturnArgs} args - Arguments to update many Reminders.
     * @example
     * // Update many Reminders
     * const reminders = await prisma.reminders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Reminders and only return the `id`
     * const remindersWithIdOnly = await prisma.reminders.updateManyAndReturn({
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
    updateManyAndReturn<T extends remindersUpdateManyAndReturnArgs>(
      args: SelectSubset<T, remindersUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$remindersPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Reminders.
     * @param {remindersUpsertArgs} args - Arguments to update or create a Reminders.
     * @example
     * // Update or create a Reminders
     * const reminders = await prisma.reminders.upsert({
     *   create: {
     *     // ... data to create a Reminders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminders we want to update
     *   }
     * })
     */
    upsert<T extends remindersUpsertArgs>(
      args: SelectSubset<T, remindersUpsertArgs<ExtArgs>>,
    ): Prisma__remindersClient<
      $Result.GetResult<
        Prisma.$remindersPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminders.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
     **/
    count<T extends remindersCountArgs>(
      args?: Subset<T, remindersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], RemindersCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemindersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RemindersAggregateArgs>(
      args: Subset<T, RemindersAggregateArgs>,
    ): Prisma.PrismaPromise<GetRemindersAggregateType<T>>;

    /**
     * Group by Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersGroupByArgs} args - Group by arguments.
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
      T extends remindersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: remindersGroupByArgs["orderBy"] }
        : { orderBy?: remindersGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? "Error: \"by\" must not be empty."
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      " in \"having\" needs to be provided in \"by\"",
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : "Error: If you provide \"take\", you also need to provide \"orderBy\""
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, remindersGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetRemindersGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the reminders model
     */
    readonly fields: remindersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reminders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__remindersClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends usersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, usersDefaultArgs<ExtArgs>>,
    ): Prisma__usersClient<
      | $Result.GetResult<
          Prisma.$usersPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the reminders model
   */
  interface remindersFieldRefs {
    readonly id: FieldRef<"reminders", "String">;
    readonly title: FieldRef<"reminders", "String">;
    readonly description: FieldRef<"reminders", "String">;
    readonly due_date: FieldRef<"reminders", "DateTime">;
    readonly is_completed: FieldRef<"reminders", "Boolean">;
    readonly is_recurring: FieldRef<"reminders", "Boolean">;
    readonly recurring_rule: FieldRef<"reminders", "Json">;
    readonly user_id: FieldRef<"reminders", "String">;
    readonly created_at: FieldRef<"reminders", "DateTime">;
    readonly updated_at: FieldRef<"reminders", "DateTime">;
  }

  // Custom InputTypes
  /**
   * reminders findUnique
   */
  export type remindersFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null;
    /**
     * Filter, which reminders to fetch.
     */
    where: remindersWhereUniqueInput;
  };

  /**
   * reminders findUniqueOrThrow
   */
  export type remindersFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null;
    /**
     * Filter, which reminders to fetch.
     */
    where: remindersWhereUniqueInput;
  };

  /**
   * reminders findFirst
   */
  export type remindersFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null;
    /**
     * Filter, which reminders to fetch.
     */
    where?: remindersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reminders to fetch.
     */
    orderBy?:
      | remindersOrderByWithRelationInput
      | remindersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reminders.
     */
    cursor?: remindersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reminders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reminders.
     */
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[];
  };

  /**
   * reminders findFirstOrThrow
   */
  export type remindersFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null;
    /**
     * Filter, which reminders to fetch.
     */
    where?: remindersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reminders to fetch.
     */
    orderBy?:
      | remindersOrderByWithRelationInput
      | remindersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reminders.
     */
    cursor?: remindersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reminders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reminders.
     */
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[];
  };

  /**
   * reminders findMany
   */
  export type remindersFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null;
    /**
     * Filter, which reminders to fetch.
     */
    where?: remindersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reminders to fetch.
     */
    orderBy?:
      | remindersOrderByWithRelationInput
      | remindersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing reminders.
     */
    cursor?: remindersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reminders.
     */
    skip?: number;
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[];
  };

  /**
   * reminders create
   */
  export type remindersCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null;
    /**
     * The data needed to create a reminders.
     */
    data: XOR<remindersCreateInput, remindersUncheckedCreateInput>;
  };

  /**
   * reminders createMany
   */
  export type remindersCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many reminders.
     */
    data: remindersCreateManyInput | remindersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * reminders createManyAndReturn
   */
  export type remindersCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null;
    /**
     * The data used to create many reminders.
     */
    data: remindersCreateManyInput | remindersCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * reminders update
   */
  export type remindersUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null;
    /**
     * The data needed to update a reminders.
     */
    data: XOR<remindersUpdateInput, remindersUncheckedUpdateInput>;
    /**
     * Choose, which reminders to update.
     */
    where: remindersWhereUniqueInput;
  };

  /**
   * reminders updateMany
   */
  export type remindersUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update reminders.
     */
    data: XOR<
      remindersUpdateManyMutationInput,
      remindersUncheckedUpdateManyInput
    >;
    /**
     * Filter which reminders to update
     */
    where?: remindersWhereInput;
    /**
     * Limit how many reminders to update.
     */
    limit?: number;
  };

  /**
   * reminders updateManyAndReturn
   */
  export type remindersUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null;
    /**
     * The data used to update reminders.
     */
    data: XOR<
      remindersUpdateManyMutationInput,
      remindersUncheckedUpdateManyInput
    >;
    /**
     * Filter which reminders to update
     */
    where?: remindersWhereInput;
    /**
     * Limit how many reminders to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * reminders upsert
   */
  export type remindersUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null;
    /**
     * The filter to search for the reminders to update in case it exists.
     */
    where: remindersWhereUniqueInput;
    /**
     * In case the reminders found by the `where` argument doesn't exist, create a new reminders with this data.
     */
    create: XOR<remindersCreateInput, remindersUncheckedCreateInput>;
    /**
     * In case the reminders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<remindersUpdateInput, remindersUncheckedUpdateInput>;
  };

  /**
   * reminders delete
   */
  export type remindersDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null;
    /**
     * Filter which reminders to delete.
     */
    where: remindersWhereUniqueInput;
  };

  /**
   * reminders deleteMany
   */
  export type remindersDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which reminders to delete
     */
    where?: remindersWhereInput;
    /**
     * Limit how many reminders to delete.
     */
    limit?: number;
  };

  /**
   * reminders without action
   */
  export type remindersDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null;
  };

  /**
   * Model sync_states
   */

  export type AggregateSync_states = {
    _count: Sync_statesCountAggregateOutputType | null;
    _min: Sync_statesMinAggregateOutputType | null;
    _max: Sync_statesMaxAggregateOutputType | null;
  };

  export type Sync_statesMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    last_sync: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Sync_statesMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    last_sync: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Sync_statesCountAggregateOutputType = {
    id: number;
    user_id: number;
    last_sync: number;
    pending_ops: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Sync_statesMinAggregateInputType = {
    id?: true;
    user_id?: true;
    last_sync?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Sync_statesMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    last_sync?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Sync_statesCountAggregateInputType = {
    id?: true;
    user_id?: true;
    last_sync?: true;
    pending_ops?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Sync_statesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which sync_states to aggregate.
     */
    where?: sync_statesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sync_states to fetch.
     */
    orderBy?:
      | sync_statesOrderByWithRelationInput
      | sync_statesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: sync_statesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sync_states from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sync_states.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned sync_states
     **/
    _count?: true | Sync_statesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Sync_statesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Sync_statesMaxAggregateInputType;
  };

  export type GetSync_statesAggregateType<T extends Sync_statesAggregateArgs> =
    {
      [P in keyof T & keyof AggregateSync_states]: P extends "_count" | "count"
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateSync_states[P]>
        : GetScalarType<T[P], AggregateSync_states[P]>;
    };

  export type sync_statesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: sync_statesWhereInput;
    orderBy?:
      | sync_statesOrderByWithAggregationInput
      | sync_statesOrderByWithAggregationInput[];
    by: Sync_statesScalarFieldEnum[] | Sync_statesScalarFieldEnum;
    having?: sync_statesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Sync_statesCountAggregateInputType | true;
    _min?: Sync_statesMinAggregateInputType;
    _max?: Sync_statesMaxAggregateInputType;
  };

  export type Sync_statesGroupByOutputType = {
    id: string;
    user_id: string;
    last_sync: Date | null;
    pending_ops: JsonValue | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Sync_statesCountAggregateOutputType | null;
    _min: Sync_statesMinAggregateOutputType | null;
    _max: Sync_statesMaxAggregateOutputType | null;
  };

  type GetSync_statesGroupByPayload<T extends sync_statesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<Sync_statesGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof Sync_statesGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sync_statesGroupByOutputType[P]>
            : GetScalarType<T[P], Sync_statesGroupByOutputType[P]>;
        }
      >
    >;

  export type sync_statesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      last_sync?: boolean;
      pending_ops?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      users?: boolean | usersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["sync_states"]
  >;

  export type sync_statesSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      last_sync?: boolean;
      pending_ops?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      users?: boolean | usersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["sync_states"]
  >;

  export type sync_statesSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      last_sync?: boolean;
      pending_ops?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      users?: boolean | usersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["sync_states"]
  >;

  export type sync_statesSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    last_sync?: boolean;
    pending_ops?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type sync_statesOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "user_id"
    | "last_sync"
    | "pending_ops"
    | "created_at"
    | "updated_at",
    ExtArgs["result"]["sync_states"]
  >;
  export type sync_statesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | usersDefaultArgs<ExtArgs>;
  };
  export type sync_statesIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | usersDefaultArgs<ExtArgs>;
  };
  export type sync_statesIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | usersDefaultArgs<ExtArgs>;
  };

  export type $sync_statesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "sync_states";
    objects: {
      users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        last_sync: Date | null;
        pending_ops: Prisma.JsonValue | null;
        created_at: Date | null;
        updated_at: Date | null;
      },
      ExtArgs["result"]["sync_states"]
    >;
    composites: {};
  };

  type sync_statesGetPayload<
    S extends boolean | null | undefined | sync_statesDefaultArgs,
  > = $Result.GetResult<Prisma.$sync_statesPayload, S>;

  type sync_statesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    sync_statesFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: Sync_statesCountAggregateInputType | true;
  };

  export interface sync_statesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["sync_states"];
      meta: { name: "sync_states" };
    };
    /**
     * Find zero or one Sync_states that matches the filter.
     * @param {sync_statesFindUniqueArgs} args - Arguments to find a Sync_states
     * @example
     * // Get one Sync_states
     * const sync_states = await prisma.sync_states.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sync_statesFindUniqueArgs>(
      args: SelectSubset<T, sync_statesFindUniqueArgs<ExtArgs>>,
    ): Prisma__sync_statesClient<
      $Result.GetResult<
        Prisma.$sync_statesPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Sync_states that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sync_statesFindUniqueOrThrowArgs} args - Arguments to find a Sync_states
     * @example
     * // Get one Sync_states
     * const sync_states = await prisma.sync_states.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sync_statesFindUniqueOrThrowArgs>(
      args: SelectSubset<T, sync_statesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__sync_statesClient<
      $Result.GetResult<
        Prisma.$sync_statesPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Sync_states that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sync_statesFindFirstArgs} args - Arguments to find a Sync_states
     * @example
     * // Get one Sync_states
     * const sync_states = await prisma.sync_states.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sync_statesFindFirstArgs>(
      args?: SelectSubset<T, sync_statesFindFirstArgs<ExtArgs>>,
    ): Prisma__sync_statesClient<
      $Result.GetResult<
        Prisma.$sync_statesPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Sync_states that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sync_statesFindFirstOrThrowArgs} args - Arguments to find a Sync_states
     * @example
     * // Get one Sync_states
     * const sync_states = await prisma.sync_states.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sync_statesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, sync_statesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__sync_statesClient<
      $Result.GetResult<
        Prisma.$sync_statesPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Sync_states that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sync_statesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sync_states
     * const sync_states = await prisma.sync_states.findMany()
     *
     * // Get first 10 Sync_states
     * const sync_states = await prisma.sync_states.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sync_statesWithIdOnly = await prisma.sync_states.findMany({ select: { id: true } })
     *
     */
    findMany<T extends sync_statesFindManyArgs>(
      args?: SelectSubset<T, sync_statesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$sync_statesPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Sync_states.
     * @param {sync_statesCreateArgs} args - Arguments to create a Sync_states.
     * @example
     * // Create one Sync_states
     * const Sync_states = await prisma.sync_states.create({
     *   data: {
     *     // ... data to create a Sync_states
     *   }
     * })
     *
     */
    create<T extends sync_statesCreateArgs>(
      args: SelectSubset<T, sync_statesCreateArgs<ExtArgs>>,
    ): Prisma__sync_statesClient<
      $Result.GetResult<
        Prisma.$sync_statesPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Sync_states.
     * @param {sync_statesCreateManyArgs} args - Arguments to create many Sync_states.
     * @example
     * // Create many Sync_states
     * const sync_states = await prisma.sync_states.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends sync_statesCreateManyArgs>(
      args?: SelectSubset<T, sync_statesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Sync_states and returns the data saved in the database.
     * @param {sync_statesCreateManyAndReturnArgs} args - Arguments to create many Sync_states.
     * @example
     * // Create many Sync_states
     * const sync_states = await prisma.sync_states.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Sync_states and only return the `id`
     * const sync_statesWithIdOnly = await prisma.sync_states.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends sync_statesCreateManyAndReturnArgs>(
      args?: SelectSubset<T, sync_statesCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$sync_statesPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Sync_states.
     * @param {sync_statesDeleteArgs} args - Arguments to delete one Sync_states.
     * @example
     * // Delete one Sync_states
     * const Sync_states = await prisma.sync_states.delete({
     *   where: {
     *     // ... filter to delete one Sync_states
     *   }
     * })
     *
     */
    delete<T extends sync_statesDeleteArgs>(
      args: SelectSubset<T, sync_statesDeleteArgs<ExtArgs>>,
    ): Prisma__sync_statesClient<
      $Result.GetResult<
        Prisma.$sync_statesPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Sync_states.
     * @param {sync_statesUpdateArgs} args - Arguments to update one Sync_states.
     * @example
     * // Update one Sync_states
     * const sync_states = await prisma.sync_states.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends sync_statesUpdateArgs>(
      args: SelectSubset<T, sync_statesUpdateArgs<ExtArgs>>,
    ): Prisma__sync_statesClient<
      $Result.GetResult<
        Prisma.$sync_statesPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Sync_states.
     * @param {sync_statesDeleteManyArgs} args - Arguments to filter Sync_states to delete.
     * @example
     * // Delete a few Sync_states
     * const { count } = await prisma.sync_states.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends sync_statesDeleteManyArgs>(
      args?: SelectSubset<T, sync_statesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sync_states.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sync_statesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sync_states
     * const sync_states = await prisma.sync_states.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends sync_statesUpdateManyArgs>(
      args: SelectSubset<T, sync_statesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sync_states and returns the data updated in the database.
     * @param {sync_statesUpdateManyAndReturnArgs} args - Arguments to update many Sync_states.
     * @example
     * // Update many Sync_states
     * const sync_states = await prisma.sync_states.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Sync_states and only return the `id`
     * const sync_statesWithIdOnly = await prisma.sync_states.updateManyAndReturn({
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
    updateManyAndReturn<T extends sync_statesUpdateManyAndReturnArgs>(
      args: SelectSubset<T, sync_statesUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$sync_statesPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Sync_states.
     * @param {sync_statesUpsertArgs} args - Arguments to update or create a Sync_states.
     * @example
     * // Update or create a Sync_states
     * const sync_states = await prisma.sync_states.upsert({
     *   create: {
     *     // ... data to create a Sync_states
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sync_states we want to update
     *   }
     * })
     */
    upsert<T extends sync_statesUpsertArgs>(
      args: SelectSubset<T, sync_statesUpsertArgs<ExtArgs>>,
    ): Prisma__sync_statesClient<
      $Result.GetResult<
        Prisma.$sync_statesPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Sync_states.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sync_statesCountArgs} args - Arguments to filter Sync_states to count.
     * @example
     * // Count the number of Sync_states
     * const count = await prisma.sync_states.count({
     *   where: {
     *     // ... the filter for the Sync_states we want to count
     *   }
     * })
     **/
    count<T extends sync_statesCountArgs>(
      args?: Subset<T, sync_statesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], Sync_statesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Sync_states.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sync_statesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sync_statesAggregateArgs>(
      args: Subset<T, Sync_statesAggregateArgs>,
    ): Prisma.PrismaPromise<GetSync_statesAggregateType<T>>;

    /**
     * Group by Sync_states.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sync_statesGroupByArgs} args - Group by arguments.
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
      T extends sync_statesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sync_statesGroupByArgs["orderBy"] }
        : { orderBy?: sync_statesGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? "Error: \"by\" must not be empty."
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      " in \"having\" needs to be provided in \"by\"",
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : "Error: If you provide \"take\", you also need to provide \"orderBy\""
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, sync_statesGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetSync_statesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the sync_states model
     */
    readonly fields: sync_statesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sync_states.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sync_statesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends usersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, usersDefaultArgs<ExtArgs>>,
    ): Prisma__usersClient<
      | $Result.GetResult<
          Prisma.$usersPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the sync_states model
   */
  interface sync_statesFieldRefs {
    readonly id: FieldRef<"sync_states", "String">;
    readonly user_id: FieldRef<"sync_states", "String">;
    readonly last_sync: FieldRef<"sync_states", "DateTime">;
    readonly pending_ops: FieldRef<"sync_states", "Json">;
    readonly created_at: FieldRef<"sync_states", "DateTime">;
    readonly updated_at: FieldRef<"sync_states", "DateTime">;
  }

  // Custom InputTypes
  /**
   * sync_states findUnique
   */
  export type sync_statesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sync_states
     */
    select?: sync_statesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the sync_states
     */
    omit?: sync_statesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_statesInclude<ExtArgs> | null;
    /**
     * Filter, which sync_states to fetch.
     */
    where: sync_statesWhereUniqueInput;
  };

  /**
   * sync_states findUniqueOrThrow
   */
  export type sync_statesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sync_states
     */
    select?: sync_statesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the sync_states
     */
    omit?: sync_statesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_statesInclude<ExtArgs> | null;
    /**
     * Filter, which sync_states to fetch.
     */
    where: sync_statesWhereUniqueInput;
  };

  /**
   * sync_states findFirst
   */
  export type sync_statesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sync_states
     */
    select?: sync_statesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the sync_states
     */
    omit?: sync_statesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_statesInclude<ExtArgs> | null;
    /**
     * Filter, which sync_states to fetch.
     */
    where?: sync_statesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sync_states to fetch.
     */
    orderBy?:
      | sync_statesOrderByWithRelationInput
      | sync_statesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sync_states.
     */
    cursor?: sync_statesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sync_states from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sync_states.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sync_states.
     */
    distinct?: Sync_statesScalarFieldEnum | Sync_statesScalarFieldEnum[];
  };

  /**
   * sync_states findFirstOrThrow
   */
  export type sync_statesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sync_states
     */
    select?: sync_statesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the sync_states
     */
    omit?: sync_statesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_statesInclude<ExtArgs> | null;
    /**
     * Filter, which sync_states to fetch.
     */
    where?: sync_statesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sync_states to fetch.
     */
    orderBy?:
      | sync_statesOrderByWithRelationInput
      | sync_statesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sync_states.
     */
    cursor?: sync_statesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sync_states from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sync_states.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sync_states.
     */
    distinct?: Sync_statesScalarFieldEnum | Sync_statesScalarFieldEnum[];
  };

  /**
   * sync_states findMany
   */
  export type sync_statesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sync_states
     */
    select?: sync_statesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the sync_states
     */
    omit?: sync_statesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_statesInclude<ExtArgs> | null;
    /**
     * Filter, which sync_states to fetch.
     */
    where?: sync_statesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sync_states to fetch.
     */
    orderBy?:
      | sync_statesOrderByWithRelationInput
      | sync_statesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing sync_states.
     */
    cursor?: sync_statesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sync_states from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sync_states.
     */
    skip?: number;
    distinct?: Sync_statesScalarFieldEnum | Sync_statesScalarFieldEnum[];
  };

  /**
   * sync_states create
   */
  export type sync_statesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sync_states
     */
    select?: sync_statesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the sync_states
     */
    omit?: sync_statesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_statesInclude<ExtArgs> | null;
    /**
     * The data needed to create a sync_states.
     */
    data: XOR<sync_statesCreateInput, sync_statesUncheckedCreateInput>;
  };

  /**
   * sync_states createMany
   */
  export type sync_statesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many sync_states.
     */
    data: sync_statesCreateManyInput | sync_statesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * sync_states createManyAndReturn
   */
  export type sync_statesCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sync_states
     */
    select?: sync_statesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the sync_states
     */
    omit?: sync_statesOmit<ExtArgs> | null;
    /**
     * The data used to create many sync_states.
     */
    data: sync_statesCreateManyInput | sync_statesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_statesIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * sync_states update
   */
  export type sync_statesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sync_states
     */
    select?: sync_statesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the sync_states
     */
    omit?: sync_statesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_statesInclude<ExtArgs> | null;
    /**
     * The data needed to update a sync_states.
     */
    data: XOR<sync_statesUpdateInput, sync_statesUncheckedUpdateInput>;
    /**
     * Choose, which sync_states to update.
     */
    where: sync_statesWhereUniqueInput;
  };

  /**
   * sync_states updateMany
   */
  export type sync_statesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update sync_states.
     */
    data: XOR<
      sync_statesUpdateManyMutationInput,
      sync_statesUncheckedUpdateManyInput
    >;
    /**
     * Filter which sync_states to update
     */
    where?: sync_statesWhereInput;
    /**
     * Limit how many sync_states to update.
     */
    limit?: number;
  };

  /**
   * sync_states updateManyAndReturn
   */
  export type sync_statesUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sync_states
     */
    select?: sync_statesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the sync_states
     */
    omit?: sync_statesOmit<ExtArgs> | null;
    /**
     * The data used to update sync_states.
     */
    data: XOR<
      sync_statesUpdateManyMutationInput,
      sync_statesUncheckedUpdateManyInput
    >;
    /**
     * Filter which sync_states to update
     */
    where?: sync_statesWhereInput;
    /**
     * Limit how many sync_states to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_statesIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * sync_states upsert
   */
  export type sync_statesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sync_states
     */
    select?: sync_statesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the sync_states
     */
    omit?: sync_statesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_statesInclude<ExtArgs> | null;
    /**
     * The filter to search for the sync_states to update in case it exists.
     */
    where: sync_statesWhereUniqueInput;
    /**
     * In case the sync_states found by the `where` argument doesn't exist, create a new sync_states with this data.
     */
    create: XOR<sync_statesCreateInput, sync_statesUncheckedCreateInput>;
    /**
     * In case the sync_states was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sync_statesUpdateInput, sync_statesUncheckedUpdateInput>;
  };

  /**
   * sync_states delete
   */
  export type sync_statesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sync_states
     */
    select?: sync_statesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the sync_states
     */
    omit?: sync_statesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_statesInclude<ExtArgs> | null;
    /**
     * Filter which sync_states to delete.
     */
    where: sync_statesWhereUniqueInput;
  };

  /**
   * sync_states deleteMany
   */
  export type sync_statesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which sync_states to delete
     */
    where?: sync_statesWhereInput;
    /**
     * Limit how many sync_states to delete.
     */
    limit?: number;
  };

  /**
   * sync_states without action
   */
  export type sync_statesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sync_states
     */
    select?: sync_statesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the sync_states
     */
    omit?: sync_statesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_statesInclude<ExtArgs> | null;
  };

  /**
   * Model transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null;
    _avg: TransactionsAvgAggregateOutputType | null;
    _sum: TransactionsSumAggregateOutputType | null;
    _min: TransactionsMinAggregateOutputType | null;
    _max: TransactionsMaxAggregateOutputType | null;
  };

  export type TransactionsAvgAggregateOutputType = {
    amount: Decimal | null;
  };

  export type TransactionsSumAggregateOutputType = {
    amount: Decimal | null;
  };

  export type TransactionsMinAggregateOutputType = {
    id: string | null;
    amount: Decimal | null;
    description: string | null;
    date: Date | null;
    type: $Enums.transaction_type | null;
    notes: string | null;
    location: string | null;
    receipt_image: string | null;
    is_recurring: boolean | null;
    recurring_id: string | null;
    account_id: string | null;
    to_account_id: string | null;
    category_id: string | null;
    user_id: string | null;
    local_id: string | null;
    is_synced: boolean | null;
    last_sync_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TransactionsMaxAggregateOutputType = {
    id: string | null;
    amount: Decimal | null;
    description: string | null;
    date: Date | null;
    type: $Enums.transaction_type | null;
    notes: string | null;
    location: string | null;
    receipt_image: string | null;
    is_recurring: boolean | null;
    recurring_id: string | null;
    account_id: string | null;
    to_account_id: string | null;
    category_id: string | null;
    user_id: string | null;
    local_id: string | null;
    is_synced: boolean | null;
    last_sync_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TransactionsCountAggregateOutputType = {
    id: number;
    amount: number;
    description: number;
    date: number;
    type: number;
    notes: number;
    location: number;
    receipt_image: number;
    is_recurring: number;
    recurring_id: number;
    recurring_rule: number;
    account_id: number;
    to_account_id: number;
    category_id: number;
    user_id: number;
    local_id: number;
    is_synced: number;
    last_sync_at: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TransactionsAvgAggregateInputType = {
    amount?: true;
  };

  export type TransactionsSumAggregateInputType = {
    amount?: true;
  };

  export type TransactionsMinAggregateInputType = {
    id?: true;
    amount?: true;
    description?: true;
    date?: true;
    type?: true;
    notes?: true;
    location?: true;
    receipt_image?: true;
    is_recurring?: true;
    recurring_id?: true;
    account_id?: true;
    to_account_id?: true;
    category_id?: true;
    user_id?: true;
    local_id?: true;
    is_synced?: true;
    last_sync_at?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TransactionsMaxAggregateInputType = {
    id?: true;
    amount?: true;
    description?: true;
    date?: true;
    type?: true;
    notes?: true;
    location?: true;
    receipt_image?: true;
    is_recurring?: true;
    recurring_id?: true;
    account_id?: true;
    to_account_id?: true;
    category_id?: true;
    user_id?: true;
    local_id?: true;
    is_synced?: true;
    last_sync_at?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TransactionsCountAggregateInputType = {
    id?: true;
    amount?: true;
    description?: true;
    date?: true;
    type?: true;
    notes?: true;
    location?: true;
    receipt_image?: true;
    is_recurring?: true;
    recurring_id?: true;
    recurring_rule?: true;
    account_id?: true;
    to_account_id?: true;
    category_id?: true;
    user_id?: true;
    local_id?: true;
    is_synced?: true;
    last_sync_at?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TransactionsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which transactions to aggregate.
     */
    where?: transactionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: transactionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned transactions
     **/
    _count?: true | TransactionsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TransactionsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TransactionsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TransactionsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TransactionsMaxAggregateInputType;
  };

  export type GetTransactionsAggregateType<
    T extends TransactionsAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateTransactions]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>;
  };

  export type transactionsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: transactionsWhereInput;
    orderBy?:
      | transactionsOrderByWithAggregationInput
      | transactionsOrderByWithAggregationInput[];
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum;
    having?: transactionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionsCountAggregateInputType | true;
    _avg?: TransactionsAvgAggregateInputType;
    _sum?: TransactionsSumAggregateInputType;
    _min?: TransactionsMinAggregateInputType;
    _max?: TransactionsMaxAggregateInputType;
  };

  export type TransactionsGroupByOutputType = {
    id: string;
    amount: Decimal;
    description: string;
    date: Date | null;
    type: $Enums.transaction_type;
    notes: string | null;
    location: string | null;
    receipt_image: string | null;
    is_recurring: boolean | null;
    recurring_id: string | null;
    recurring_rule: JsonValue | null;
    account_id: string;
    to_account_id: string | null;
    category_id: string | null;
    user_id: string;
    local_id: string | null;
    is_synced: boolean | null;
    last_sync_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: TransactionsCountAggregateOutputType | null;
    _avg: TransactionsAvgAggregateOutputType | null;
    _sum: TransactionsSumAggregateOutputType | null;
    _min: TransactionsMinAggregateOutputType | null;
    _max: TransactionsMaxAggregateOutputType | null;
  };

  type GetTransactionsGroupByPayload<T extends transactionsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TransactionsGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof TransactionsGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>;
        }
      >
    >;

  export type transactionsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      amount?: boolean;
      description?: boolean;
      date?: boolean;
      type?: boolean;
      notes?: boolean;
      location?: boolean;
      receipt_image?: boolean;
      is_recurring?: boolean;
      recurring_id?: boolean;
      recurring_rule?: boolean;
      account_id?: boolean;
      to_account_id?: boolean;
      category_id?: boolean;
      user_id?: boolean;
      local_id?: boolean;
      is_synced?: boolean;
      last_sync_at?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      accounts_transactions_account_idToaccounts?:
        | boolean
        | accountsDefaultArgs<ExtArgs>;
      categories?: boolean | transactions$categoriesArgs<ExtArgs>;
      accounts_transactions_to_account_idToaccounts?:
        | boolean
        | transactions$accounts_transactions_to_account_idToaccountsArgs<ExtArgs>;
      users?: boolean | usersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["transactions"]
  >;

  export type transactionsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      amount?: boolean;
      description?: boolean;
      date?: boolean;
      type?: boolean;
      notes?: boolean;
      location?: boolean;
      receipt_image?: boolean;
      is_recurring?: boolean;
      recurring_id?: boolean;
      recurring_rule?: boolean;
      account_id?: boolean;
      to_account_id?: boolean;
      category_id?: boolean;
      user_id?: boolean;
      local_id?: boolean;
      is_synced?: boolean;
      last_sync_at?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      accounts_transactions_account_idToaccounts?:
        | boolean
        | accountsDefaultArgs<ExtArgs>;
      categories?: boolean | transactions$categoriesArgs<ExtArgs>;
      accounts_transactions_to_account_idToaccounts?:
        | boolean
        | transactions$accounts_transactions_to_account_idToaccountsArgs<ExtArgs>;
      users?: boolean | usersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["transactions"]
  >;

  export type transactionsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      amount?: boolean;
      description?: boolean;
      date?: boolean;
      type?: boolean;
      notes?: boolean;
      location?: boolean;
      receipt_image?: boolean;
      is_recurring?: boolean;
      recurring_id?: boolean;
      recurring_rule?: boolean;
      account_id?: boolean;
      to_account_id?: boolean;
      category_id?: boolean;
      user_id?: boolean;
      local_id?: boolean;
      is_synced?: boolean;
      last_sync_at?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      accounts_transactions_account_idToaccounts?:
        | boolean
        | accountsDefaultArgs<ExtArgs>;
      categories?: boolean | transactions$categoriesArgs<ExtArgs>;
      accounts_transactions_to_account_idToaccounts?:
        | boolean
        | transactions$accounts_transactions_to_account_idToaccountsArgs<ExtArgs>;
      users?: boolean | usersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["transactions"]
  >;

  export type transactionsSelectScalar = {
    id?: boolean;
    amount?: boolean;
    description?: boolean;
    date?: boolean;
    type?: boolean;
    notes?: boolean;
    location?: boolean;
    receipt_image?: boolean;
    is_recurring?: boolean;
    recurring_id?: boolean;
    recurring_rule?: boolean;
    account_id?: boolean;
    to_account_id?: boolean;
    category_id?: boolean;
    user_id?: boolean;
    local_id?: boolean;
    is_synced?: boolean;
    last_sync_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type transactionsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "amount"
    | "description"
    | "date"
    | "type"
    | "notes"
    | "location"
    | "receipt_image"
    | "is_recurring"
    | "recurring_id"
    | "recurring_rule"
    | "account_id"
    | "to_account_id"
    | "category_id"
    | "user_id"
    | "local_id"
    | "is_synced"
    | "last_sync_at"
    | "created_at"
    | "updated_at",
    ExtArgs["result"]["transactions"]
  >;
  export type transactionsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    accounts_transactions_account_idToaccounts?:
      | boolean
      | accountsDefaultArgs<ExtArgs>;
    categories?: boolean | transactions$categoriesArgs<ExtArgs>;
    accounts_transactions_to_account_idToaccounts?:
      | boolean
      | transactions$accounts_transactions_to_account_idToaccountsArgs<ExtArgs>;
    users?: boolean | usersDefaultArgs<ExtArgs>;
  };
  export type transactionsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    accounts_transactions_account_idToaccounts?:
      | boolean
      | accountsDefaultArgs<ExtArgs>;
    categories?: boolean | transactions$categoriesArgs<ExtArgs>;
    accounts_transactions_to_account_idToaccounts?:
      | boolean
      | transactions$accounts_transactions_to_account_idToaccountsArgs<ExtArgs>;
    users?: boolean | usersDefaultArgs<ExtArgs>;
  };
  export type transactionsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    accounts_transactions_account_idToaccounts?:
      | boolean
      | accountsDefaultArgs<ExtArgs>;
    categories?: boolean | transactions$categoriesArgs<ExtArgs>;
    accounts_transactions_to_account_idToaccounts?:
      | boolean
      | transactions$accounts_transactions_to_account_idToaccountsArgs<ExtArgs>;
    users?: boolean | usersDefaultArgs<ExtArgs>;
  };

  export type $transactionsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "transactions";
    objects: {
      accounts_transactions_account_idToaccounts: Prisma.$accountsPayload<ExtArgs>;
      categories: Prisma.$categoriesPayload<ExtArgs> | null;
      accounts_transactions_to_account_idToaccounts: Prisma.$accountsPayload<ExtArgs> | null;
      users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        amount: Prisma.Decimal;
        description: string;
        date: Date | null;
        type: $Enums.transaction_type;
        notes: string | null;
        location: string | null;
        receipt_image: string | null;
        is_recurring: boolean | null;
        recurring_id: string | null;
        recurring_rule: Prisma.JsonValue | null;
        account_id: string;
        to_account_id: string | null;
        category_id: string | null;
        user_id: string;
        local_id: string | null;
        is_synced: boolean | null;
        last_sync_at: Date | null;
        created_at: Date | null;
        updated_at: Date | null;
      },
      ExtArgs["result"]["transactions"]
    >;
    composites: {};
  };

  type transactionsGetPayload<
    S extends boolean | null | undefined | transactionsDefaultArgs,
  > = $Result.GetResult<Prisma.$transactionsPayload, S>;

  type transactionsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    transactionsFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: TransactionsCountAggregateInputType | true;
  };

  export interface transactionsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["transactions"];
      meta: { name: "transactions" };
    };
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {transactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionsFindUniqueArgs>(
      args: SelectSubset<T, transactionsFindUniqueArgs<ExtArgs>>,
    ): Prisma__transactionsClient<
      $Result.GetResult<
        Prisma.$transactionsPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, transactionsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__transactionsClient<
      $Result.GetResult<
        Prisma.$transactionsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionsFindFirstArgs>(
      args?: SelectSubset<T, transactionsFindFirstArgs<ExtArgs>>,
    ): Prisma__transactionsClient<
      $Result.GetResult<
        Prisma.$transactionsPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, transactionsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__transactionsClient<
      $Result.GetResult<
        Prisma.$transactionsPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     *
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     *
     */
    findMany<T extends transactionsFindManyArgs>(
      args?: SelectSubset<T, transactionsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$transactionsPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Transactions.
     * @param {transactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     *
     */
    create<T extends transactionsCreateArgs>(
      args: SelectSubset<T, transactionsCreateArgs<ExtArgs>>,
    ): Prisma__transactionsClient<
      $Result.GetResult<
        Prisma.$transactionsPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Transactions.
     * @param {transactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends transactionsCreateManyArgs>(
      args?: SelectSubset<T, transactionsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends transactionsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, transactionsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$transactionsPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Transactions.
     * @param {transactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     *
     */
    delete<T extends transactionsDeleteArgs>(
      args: SelectSubset<T, transactionsDeleteArgs<ExtArgs>>,
    ): Prisma__transactionsClient<
      $Result.GetResult<
        Prisma.$transactionsPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Transactions.
     * @param {transactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends transactionsUpdateArgs>(
      args: SelectSubset<T, transactionsUpdateArgs<ExtArgs>>,
    ): Prisma__transactionsClient<
      $Result.GetResult<
        Prisma.$transactionsPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Transactions.
     * @param {transactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends transactionsDeleteManyArgs>(
      args?: SelectSubset<T, transactionsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends transactionsUpdateManyArgs>(
      args: SelectSubset<T, transactionsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionsUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.updateManyAndReturn({
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
    updateManyAndReturn<T extends transactionsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, transactionsUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$transactionsPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Transactions.
     * @param {transactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends transactionsUpsertArgs>(
      args: SelectSubset<T, transactionsUpsertArgs<ExtArgs>>,
    ): Prisma__transactionsClient<
      $Result.GetResult<
        Prisma.$transactionsPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
     **/
    count<T extends transactionsCountArgs>(
      args?: Subset<T, transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], TransactionsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionsAggregateArgs>(
      args: Subset<T, TransactionsAggregateArgs>,
    ): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>;

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsGroupByArgs} args - Group by arguments.
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
      T extends transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionsGroupByArgs["orderBy"] }
        : { orderBy?: transactionsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? "Error: \"by\" must not be empty."
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ' in "having" needs to be provided in "by"',
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : "Error: If you provide \"take\", you also need to provide \"orderBy\""
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, transactionsGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetTransactionsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the transactions model
     */
    readonly fields: transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    accounts_transactions_account_idToaccounts<
      T extends accountsDefaultArgs<ExtArgs> = {},
    >(
      args?: Subset<T, accountsDefaultArgs<ExtArgs>>,
    ): Prisma__accountsClient<
      | $Result.GetResult<
          Prisma.$accountsPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    categories<T extends transactions$categoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, transactions$categoriesArgs<ExtArgs>>,
    ): Prisma__categoriesClient<
      $Result.GetResult<
        Prisma.$categoriesPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    accounts_transactions_to_account_idToaccounts<
      T extends
        transactions$accounts_transactions_to_account_idToaccountsArgs<ExtArgs> = {},
    >(
      args?: Subset<
        T,
        transactions$accounts_transactions_to_account_idToaccountsArgs<ExtArgs>
      >,
    ): Prisma__accountsClient<
      $Result.GetResult<
        Prisma.$accountsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    users<T extends usersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, usersDefaultArgs<ExtArgs>>,
    ): Prisma__usersClient<
      | $Result.GetResult<
          Prisma.$usersPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the transactions model
   */
  interface transactionsFieldRefs {
    readonly id: FieldRef<"transactions", "String">;
    readonly amount: FieldRef<"transactions", "Decimal">;
    readonly description: FieldRef<"transactions", "String">;
    readonly date: FieldRef<"transactions", "DateTime">;
    readonly type: FieldRef<"transactions", "transaction_type">;
    readonly notes: FieldRef<"transactions", "String">;
    readonly location: FieldRef<"transactions", "String">;
    readonly receipt_image: FieldRef<"transactions", "String">;
    readonly is_recurring: FieldRef<"transactions", "Boolean">;
    readonly recurring_id: FieldRef<"transactions", "String">;
    readonly recurring_rule: FieldRef<"transactions", "Json">;
    readonly account_id: FieldRef<"transactions", "String">;
    readonly to_account_id: FieldRef<"transactions", "String">;
    readonly category_id: FieldRef<"transactions", "String">;
    readonly user_id: FieldRef<"transactions", "String">;
    readonly local_id: FieldRef<"transactions", "String">;
    readonly is_synced: FieldRef<"transactions", "Boolean">;
    readonly last_sync_at: FieldRef<"transactions", "DateTime">;
    readonly created_at: FieldRef<"transactions", "DateTime">;
    readonly updated_at: FieldRef<"transactions", "DateTime">;
  }

  // Custom InputTypes
  /**
   * transactions findUnique
   */
  export type transactionsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput;
  };

  /**
   * transactions findUniqueOrThrow
   */
  export type transactionsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput;
  };

  /**
   * transactions findFirst
   */
  export type transactionsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[];
  };

  /**
   * transactions findFirstOrThrow
   */
  export type transactionsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[];
  };

  /**
   * transactions findMany
   */
  export type transactionsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing transactions.
     */
    cursor?: transactionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[];
  };

  /**
   * transactions create
   */
  export type transactionsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * The data needed to create a transactions.
     */
    data: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>;
  };

  /**
   * transactions createMany
   */
  export type transactionsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * transactions createManyAndReturn
   */
  export type transactionsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null;
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * transactions update
   */
  export type transactionsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * The data needed to update a transactions.
     */
    data: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>;
    /**
     * Choose, which transactions to update.
     */
    where: transactionsWhereUniqueInput;
  };

  /**
   * transactions updateMany
   */
  export type transactionsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update transactions.
     */
    data: XOR<
      transactionsUpdateManyMutationInput,
      transactionsUncheckedUpdateManyInput
    >;
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput;
    /**
     * Limit how many transactions to update.
     */
    limit?: number;
  };

  /**
   * transactions updateManyAndReturn
   */
  export type transactionsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null;
    /**
     * The data used to update transactions.
     */
    data: XOR<
      transactionsUpdateManyMutationInput,
      transactionsUncheckedUpdateManyInput
    >;
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput;
    /**
     * Limit how many transactions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * transactions upsert
   */
  export type transactionsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * The filter to search for the transactions to update in case it exists.
     */
    where: transactionsWhereUniqueInput;
    /**
     * In case the transactions found by the `where` argument doesn't exist, create a new transactions with this data.
     */
    create: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>;
    /**
     * In case the transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>;
  };

  /**
   * transactions delete
   */
  export type transactionsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    /**
     * Filter which transactions to delete.
     */
    where: transactionsWhereUniqueInput;
  };

  /**
   * transactions deleteMany
   */
  export type transactionsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionsWhereInput;
    /**
     * Limit how many transactions to delete.
     */
    limit?: number;
  };

  /**
   * transactions.categories
   */
  export type transactions$categoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    where?: categoriesWhereInput;
  };

  /**
   * transactions.accounts_transactions_to_account_idToaccounts
   */
  export type transactions$accounts_transactions_to_account_idToaccountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null;
    where?: accountsWhereInput;
  };

  /**
   * transactions without action
   */
  export type transactionsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
  };

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
  };

  export type UsersMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    password: string | null;
    avatar: string | null;
    currency: string | null;
    language: string | null;
    timezone: string | null;
    theme: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UsersMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    password: string | null;
    avatar: string | null;
    currency: string | null;
    language: string | null;
    timezone: string | null;
    theme: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UsersCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    password: number;
    avatar: number;
    currency: number;
    language: number;
    timezone: number;
    theme: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UsersMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    avatar?: true;
    currency?: true;
    language?: true;
    timezone?: true;
    theme?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UsersMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    avatar?: true;
    currency?: true;
    language?: true;
    timezone?: true;
    theme?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UsersCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    avatar?: true;
    currency?: true;
    language?: true;
    timezone?: true;
    theme?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UsersAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UsersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UsersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UsersMaxAggregateInputType;
  };

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>;
  };

  export type usersGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: usersWhereInput;
    orderBy?:
      | usersOrderByWithAggregationInput
      | usersOrderByWithAggregationInput[];
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum;
    having?: usersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
  };

  export type UsersGroupByOutputType = {
    id: string;
    email: string;
    name: string | null;
    password: string;
    avatar: string | null;
    currency: string | null;
    language: string | null;
    timezone: string | null;
    theme: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: UsersCountAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
  };

  type GetUsersGroupByPayload<T extends usersGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UsersGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof UsersGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>;
        }
      >
    >;

  export type usersSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      password?: boolean;
      avatar?: boolean;
      currency?: boolean;
      language?: boolean;
      timezone?: boolean;
      theme?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      accounts?: boolean | users$accountsArgs<ExtArgs>;
      budgets?: boolean | users$budgetsArgs<ExtArgs>;
      categories?: boolean | users$categoriesArgs<ExtArgs>;
      goals?: boolean | users$goalsArgs<ExtArgs>;
      reminders?: boolean | users$remindersArgs<ExtArgs>;
      sync_states?: boolean | users$sync_statesArgs<ExtArgs>;
      transactions?: boolean | users$transactionsArgs<ExtArgs>;
      _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["users"]
  >;

  export type usersSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      password?: boolean;
      avatar?: boolean;
      currency?: boolean;
      language?: boolean;
      timezone?: boolean;
      theme?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs["result"]["users"]
  >;

  export type usersSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      password?: boolean;
      avatar?: boolean;
      currency?: boolean;
      language?: boolean;
      timezone?: boolean;
      theme?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs["result"]["users"]
  >;

  export type usersSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    password?: boolean;
    avatar?: boolean;
    currency?: boolean;
    language?: boolean;
    timezone?: boolean;
    theme?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type usersOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "email"
    | "name"
    | "password"
    | "avatar"
    | "currency"
    | "language"
    | "timezone"
    | "theme"
    | "created_at"
    | "updated_at",
    ExtArgs["result"]["users"]
  >;
  export type usersInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    accounts?: boolean | users$accountsArgs<ExtArgs>;
    budgets?: boolean | users$budgetsArgs<ExtArgs>;
    categories?: boolean | users$categoriesArgs<ExtArgs>;
    goals?: boolean | users$goalsArgs<ExtArgs>;
    reminders?: boolean | users$remindersArgs<ExtArgs>;
    sync_states?: boolean | users$sync_statesArgs<ExtArgs>;
    transactions?: boolean | users$transactionsArgs<ExtArgs>;
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type usersIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type usersIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $usersPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "users";
    objects: {
      accounts: Prisma.$accountsPayload<ExtArgs>[];
      budgets: Prisma.$budgetsPayload<ExtArgs>[];
      categories: Prisma.$categoriesPayload<ExtArgs>[];
      goals: Prisma.$goalsPayload<ExtArgs>[];
      reminders: Prisma.$remindersPayload<ExtArgs>[];
      sync_states: Prisma.$sync_statesPayload<ExtArgs> | null;
      transactions: Prisma.$transactionsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        name: string | null;
        password: string;
        avatar: string | null;
        currency: string | null;
        language: string | null;
        timezone: string | null;
        theme: string | null;
        created_at: Date | null;
        updated_at: Date | null;
      },
      ExtArgs["result"]["users"]
    >;
    composites: {};
  };

  type usersGetPayload<
    S extends boolean | null | undefined | usersDefaultArgs,
  > = $Result.GetResult<Prisma.$usersPayload, S>;

  type usersCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<usersFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UsersCountAggregateInputType | true;
  };

  export interface usersDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["users"];
      meta: { name: "users" };
    };
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>,
    ): Prisma__usersClient<
      $Result.GetResult<
        Prisma.$usersPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(
      args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__usersClient<
      $Result.GetResult<
        Prisma.$usersPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>,
    ): Prisma__usersClient<
      $Result.GetResult<
        Prisma.$usersPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__usersClient<
      $Result.GetResult<
        Prisma.$usersPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     *
     */
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$usersPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     *
     */
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>,
    ): Prisma__usersClient<
      $Result.GetResult<
        Prisma.$usersPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(
      args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$usersPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     *
     */
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>,
    ): Prisma__usersClient<
      $Result.GetResult<
        Prisma.$usersPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>,
    ): Prisma__usersClient<
      $Result.GetResult<
        Prisma.$usersPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(
      args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$usersPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>,
    ): Prisma__usersClient<
      $Result.GetResult<
        Prisma.$usersPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UsersCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(
      args: Subset<T, UsersAggregateArgs>,
    ): Prisma.PrismaPromise<GetUsersAggregateType<T>>;

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs["orderBy"] }
        : { orderBy?: usersGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? "Error: \"by\" must not be empty."
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      " in \"having\" needs to be provided in \"by\"",
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : "Error: If you provide \"take\", you also need to provide \"orderBy\""
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : "Error: If you provide \"skip\", you also need to provide \"orderBy\""
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUsersGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the users model
     */
    readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    accounts<T extends users$accountsArgs<ExtArgs> = {}>(
      args?: Subset<T, users$accountsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$accountsPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    budgets<T extends users$budgetsArgs<ExtArgs> = {}>(
      args?: Subset<T, users$budgetsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$budgetsPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    categories<T extends users$categoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, users$categoriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$categoriesPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    goals<T extends users$goalsArgs<ExtArgs> = {}>(
      args?: Subset<T, users$goalsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$goalsPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    reminders<T extends users$remindersArgs<ExtArgs> = {}>(
      args?: Subset<T, users$remindersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$remindersPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    sync_states<T extends users$sync_statesArgs<ExtArgs> = {}>(
      args?: Subset<T, users$sync_statesArgs<ExtArgs>>,
    ): Prisma__sync_statesClient<
      $Result.GetResult<
        Prisma.$sync_statesPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    transactions<T extends users$transactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, users$transactionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$transactionsPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", "String">;
    readonly email: FieldRef<"users", "String">;
    readonly name: FieldRef<"users", "String">;
    readonly password: FieldRef<"users", "String">;
    readonly avatar: FieldRef<"users", "String">;
    readonly currency: FieldRef<"users", "String">;
    readonly language: FieldRef<"users", "String">;
    readonly timezone: FieldRef<"users", "String">;
    readonly theme: FieldRef<"users", "String">;
    readonly created_at: FieldRef<"users", "DateTime">;
    readonly updated_at: FieldRef<"users", "DateTime">;
  }

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput;
  };

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput;
  };

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * users findMany
   */
  export type usersFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * users create
   */
  export type usersCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null;
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>;
  };

  /**
   * users createMany
   */
  export type usersCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * users update
   */
  export type usersUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null;
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>;
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput;
  };

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: usersWhereInput;
    /**
     * Limit how many users to update.
     */
    limit?: number;
  };

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: usersWhereInput;
    /**
     * Limit how many users to update.
     */
    limit?: number;
  };

  /**
   * users upsert
   */
  export type usersUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null;
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput;
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>;
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>;
  };

  /**
   * users delete
   */
  export type usersDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null;
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput;
  };

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput;
    /**
     * Limit how many users to delete.
     */
    limit?: number;
  };

  /**
   * users.accounts
   */
  export type users$accountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null;
    where?: accountsWhereInput;
    orderBy?:
      | accountsOrderByWithRelationInput
      | accountsOrderByWithRelationInput[];
    cursor?: accountsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[];
  };

  /**
   * users.budgets
   */
  export type users$budgetsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the budgets
     */
    select?: budgetsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the budgets
     */
    omit?: budgetsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: budgetsInclude<ExtArgs> | null;
    where?: budgetsWhereInput;
    orderBy?:
      | budgetsOrderByWithRelationInput
      | budgetsOrderByWithRelationInput[];
    cursor?: budgetsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BudgetsScalarFieldEnum | BudgetsScalarFieldEnum[];
  };

  /**
   * users.categories
   */
  export type users$categoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null;
    where?: categoriesWhereInput;
    orderBy?:
      | categoriesOrderByWithRelationInput
      | categoriesOrderByWithRelationInput[];
    cursor?: categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[];
  };

  /**
   * users.goals
   */
  export type users$goalsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the goals
     */
    omit?: goalsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null;
    where?: goalsWhereInput;
    orderBy?: goalsOrderByWithRelationInput | goalsOrderByWithRelationInput[];
    cursor?: goalsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: GoalsScalarFieldEnum | GoalsScalarFieldEnum[];
  };

  /**
   * users.reminders
   */
  export type users$remindersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null;
    where?: remindersWhereInput;
    orderBy?:
      | remindersOrderByWithRelationInput
      | remindersOrderByWithRelationInput[];
    cursor?: remindersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[];
  };

  /**
   * users.sync_states
   */
  export type users$sync_statesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the sync_states
     */
    select?: sync_statesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the sync_states
     */
    omit?: sync_statesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sync_statesInclude<ExtArgs> | null;
    where?: sync_statesWhereInput;
  };

  /**
   * users.transactions
   */
  export type users$transactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null;
    where?: transactionsWhereInput;
    orderBy?:
      | transactionsOrderByWithRelationInput
      | transactionsOrderByWithRelationInput[];
    cursor?: transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[];
  };

  /**
   * users without action
   */
  export type usersDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AccountsScalarFieldEnum: {
    id: "id";
    name: "name";
    type: "type";
    balance: "balance";
    color: "color";
    icon: "icon";
    is_active: "is_active";
    user_id: "user_id";
    created_at: "created_at";
    updated_at: "updated_at";
  };

  export type AccountsScalarFieldEnum =
    (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum];

  export const BudgetsScalarFieldEnum: {
    id: "id";
    name: "name";
    amount: "amount";
    period: "period";
    start_date: "start_date";
    end_date: "end_date";
    spent: "spent";
    alert_at: "alert_at";
    category_id: "category_id";
    user_id: "user_id";
    created_at: "created_at";
    updated_at: "updated_at";
  };

  export type BudgetsScalarFieldEnum =
    (typeof BudgetsScalarFieldEnum)[keyof typeof BudgetsScalarFieldEnum];

  export const CategoriesScalarFieldEnum: {
    id: "id";
    name: "name";
    description: "description";
    color: "color";
    icon: "icon";
    type: "type";
    parent_id: "parent_id";
    user_id: "user_id";
    created_at: "created_at";
    updated_at: "updated_at";
  };

  export type CategoriesScalarFieldEnum =
    (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum];

  export const GoalsScalarFieldEnum: {
    id: "id";
    name: "name";
    description: "description";
    target: "target";
    current: "current";
    deadline: "deadline";
    color: "color";
    icon: "icon";
    auto_transfer: "auto_transfer";
    transfer_account_id: "transfer_account_id";
    user_id: "user_id";
    created_at: "created_at";
    updated_at: "updated_at";
  };

  export type GoalsScalarFieldEnum =
    (typeof GoalsScalarFieldEnum)[keyof typeof GoalsScalarFieldEnum];

  export const RemindersScalarFieldEnum: {
    id: "id";
    title: "title";
    description: "description";
    due_date: "due_date";
    is_completed: "is_completed";
    is_recurring: "is_recurring";
    recurring_rule: "recurring_rule";
    user_id: "user_id";
    created_at: "created_at";
    updated_at: "updated_at";
  };

  export type RemindersScalarFieldEnum =
    (typeof RemindersScalarFieldEnum)[keyof typeof RemindersScalarFieldEnum];

  export const Sync_statesScalarFieldEnum: {
    id: "id";
    user_id: "user_id";
    last_sync: "last_sync";
    pending_ops: "pending_ops";
    created_at: "created_at";
    updated_at: "updated_at";
  };

  export type Sync_statesScalarFieldEnum =
    (typeof Sync_statesScalarFieldEnum)[keyof typeof Sync_statesScalarFieldEnum];

  export const TransactionsScalarFieldEnum: {
    id: "id";
    amount: "amount";
    description: "description";
    date: "date";
    type: "type";
    notes: "notes";
    location: "location";
    receipt_image: "receipt_image";
    is_recurring: "is_recurring";
    recurring_id: "recurring_id";
    recurring_rule: "recurring_rule";
    account_id: "account_id";
    to_account_id: "to_account_id";
    category_id: "category_id";
    user_id: "user_id";
    local_id: "local_id";
    is_synced: "is_synced";
    last_sync_at: "last_sync_at";
    created_at: "created_at";
    updated_at: "updated_at";
  };

  export type TransactionsScalarFieldEnum =
    (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum];

  export const UsersScalarFieldEnum: {
    id: "id";
    email: "email";
    name: "name";
    password: "password";
    avatar: "avatar";
    currency: "currency";
    language: "language";
    timezone: "timezone";
    theme: "theme";
    created_at: "created_at";
    updated_at: "updated_at";
  };

  export type UsersScalarFieldEnum =
    (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
  };

  export type NullableJsonNullValueInput =
    (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'account_type'
   */
  export type Enumaccount_typeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "account_type"
  >;

  /**
   * Reference to a field of type 'account_type[]'
   */
  export type ListEnumaccount_typeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "account_type[]">;

  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Decimal"
  >;

  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Decimal[]"
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Boolean"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'budget_period'
   */
  export type Enumbudget_periodFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "budget_period"
  >;

  /**
   * Reference to a field of type 'budget_period[]'
   */
  export type ListEnumbudget_periodFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "budget_period[]">;

  /**
   * Reference to a field of type 'transaction_type'
   */
  export type Enumtransaction_typeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "transaction_type">;

  /**
   * Reference to a field of type 'transaction_type[]'
   */
  export type ListEnumtransaction_typeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "transaction_type[]">;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Json"
  >;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "QueryMode"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Deep Input Types
   */

  export type accountsWhereInput = {
    AND?: accountsWhereInput | accountsWhereInput[];
    OR?: accountsWhereInput[];
    NOT?: accountsWhereInput | accountsWhereInput[];
    id?: StringFilter<"accounts"> | string;
    name?: StringFilter<"accounts"> | string;
    type?: Enumaccount_typeFilter<"accounts"> | $Enums.account_type;
    balance?:
      | DecimalNullableFilter<"accounts">
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    color?: StringNullableFilter<"accounts"> | string | null;
    icon?: StringNullableFilter<"accounts"> | string | null;
    is_active?: BoolNullableFilter<"accounts"> | boolean | null;
    user_id?: StringFilter<"accounts"> | string;
    created_at?: DateTimeNullableFilter<"accounts"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"accounts"> | Date | string | null;
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>;
    goals?: GoalsListRelationFilter;
    transactions_transactions_account_idToaccounts?: TransactionsListRelationFilter;
    transactions_transactions_to_account_idToaccounts?: TransactionsListRelationFilter;
  };

  export type accountsOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    balance?: SortOrderInput | SortOrder;
    color?: SortOrderInput | SortOrder;
    icon?: SortOrderInput | SortOrder;
    is_active?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    users?: usersOrderByWithRelationInput;
    goals?: goalsOrderByRelationAggregateInput;
    transactions_transactions_account_idToaccounts?: transactionsOrderByRelationAggregateInput;
    transactions_transactions_to_account_idToaccounts?: transactionsOrderByRelationAggregateInput;
  };

  export type accountsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      name?: string;
      AND?: accountsWhereInput | accountsWhereInput[];
      OR?: accountsWhereInput[];
      NOT?: accountsWhereInput | accountsWhereInput[];
      type?: Enumaccount_typeFilter<"accounts"> | $Enums.account_type;
      balance?:
        | DecimalNullableFilter<"accounts">
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      color?: StringNullableFilter<"accounts"> | string | null;
      icon?: StringNullableFilter<"accounts"> | string | null;
      is_active?: BoolNullableFilter<"accounts"> | boolean | null;
      user_id?: StringFilter<"accounts"> | string;
      created_at?: DateTimeNullableFilter<"accounts"> | Date | string | null;
      updated_at?: DateTimeNullableFilter<"accounts"> | Date | string | null;
      users?: XOR<UsersScalarRelationFilter, usersWhereInput>;
      goals?: GoalsListRelationFilter;
      transactions_transactions_account_idToaccounts?: TransactionsListRelationFilter;
      transactions_transactions_to_account_idToaccounts?: TransactionsListRelationFilter;
    },
    "id" | "name"
  >;

  export type accountsOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    balance?: SortOrderInput | SortOrder;
    color?: SortOrderInput | SortOrder;
    icon?: SortOrderInput | SortOrder;
    is_active?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    _count?: accountsCountOrderByAggregateInput;
    _avg?: accountsAvgOrderByAggregateInput;
    _max?: accountsMaxOrderByAggregateInput;
    _min?: accountsMinOrderByAggregateInput;
    _sum?: accountsSumOrderByAggregateInput;
  };

  export type accountsScalarWhereWithAggregatesInput = {
    AND?:
      | accountsScalarWhereWithAggregatesInput
      | accountsScalarWhereWithAggregatesInput[];
    OR?: accountsScalarWhereWithAggregatesInput[];
    NOT?:
      | accountsScalarWhereWithAggregatesInput
      | accountsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"accounts"> | string;
    name?: StringWithAggregatesFilter<"accounts"> | string;
    type?:
      | Enumaccount_typeWithAggregatesFilter<"accounts">
      | $Enums.account_type;
    balance?:
      | DecimalNullableWithAggregatesFilter<"accounts">
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    color?: StringNullableWithAggregatesFilter<"accounts"> | string | null;
    icon?: StringNullableWithAggregatesFilter<"accounts"> | string | null;
    is_active?: BoolNullableWithAggregatesFilter<"accounts"> | boolean | null;
    user_id?: StringWithAggregatesFilter<"accounts"> | string;
    created_at?:
      | DateTimeNullableWithAggregatesFilter<"accounts">
      | Date
      | string
      | null;
    updated_at?:
      | DateTimeNullableWithAggregatesFilter<"accounts">
      | Date
      | string
      | null;
  };

  export type budgetsWhereInput = {
    AND?: budgetsWhereInput | budgetsWhereInput[];
    OR?: budgetsWhereInput[];
    NOT?: budgetsWhereInput | budgetsWhereInput[];
    id?: StringFilter<"budgets"> | string;
    name?: StringFilter<"budgets"> | string;
    amount?:
      | DecimalFilter<"budgets">
      | Decimal
      | DecimalJsLike
      | number
      | string;
    period?:
      | Enumbudget_periodNullableFilter<"budgets">
      | $Enums.budget_period
      | null;
    start_date?: DateTimeFilter<"budgets"> | Date | string;
    end_date?: DateTimeNullableFilter<"budgets"> | Date | string | null;
    spent?:
      | DecimalNullableFilter<"budgets">
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    alert_at?:
      | DecimalNullableFilter<"budgets">
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    category_id?: StringNullableFilter<"budgets"> | string | null;
    user_id?: StringFilter<"budgets"> | string;
    created_at?: DateTimeNullableFilter<"budgets"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"budgets"> | Date | string | null;
    categories?: XOR<
      CategoriesNullableScalarRelationFilter,
      categoriesWhereInput
    > | null;
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>;
  };

  export type budgetsOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    amount?: SortOrder;
    period?: SortOrderInput | SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrderInput | SortOrder;
    spent?: SortOrderInput | SortOrder;
    alert_at?: SortOrderInput | SortOrder;
    category_id?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    categories?: categoriesOrderByWithRelationInput;
    users?: usersOrderByWithRelationInput;
  };

  export type budgetsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: budgetsWhereInput | budgetsWhereInput[];
      OR?: budgetsWhereInput[];
      NOT?: budgetsWhereInput | budgetsWhereInput[];
      name?: StringFilter<"budgets"> | string;
      amount?:
        | DecimalFilter<"budgets">
        | Decimal
        | DecimalJsLike
        | number
        | string;
      period?:
        | Enumbudget_periodNullableFilter<"budgets">
        | $Enums.budget_period
        | null;
      start_date?: DateTimeFilter<"budgets"> | Date | string;
      end_date?: DateTimeNullableFilter<"budgets"> | Date | string | null;
      spent?:
        | DecimalNullableFilter<"budgets">
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      alert_at?:
        | DecimalNullableFilter<"budgets">
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      category_id?: StringNullableFilter<"budgets"> | string | null;
      user_id?: StringFilter<"budgets"> | string;
      created_at?: DateTimeNullableFilter<"budgets"> | Date | string | null;
      updated_at?: DateTimeNullableFilter<"budgets"> | Date | string | null;
      categories?: XOR<
        CategoriesNullableScalarRelationFilter,
        categoriesWhereInput
      > | null;
      users?: XOR<UsersScalarRelationFilter, usersWhereInput>;
    },
    "id"
  >;

  export type budgetsOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    amount?: SortOrder;
    period?: SortOrderInput | SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrderInput | SortOrder;
    spent?: SortOrderInput | SortOrder;
    alert_at?: SortOrderInput | SortOrder;
    category_id?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    _count?: budgetsCountOrderByAggregateInput;
    _avg?: budgetsAvgOrderByAggregateInput;
    _max?: budgetsMaxOrderByAggregateInput;
    _min?: budgetsMinOrderByAggregateInput;
    _sum?: budgetsSumOrderByAggregateInput;
  };

  export type budgetsScalarWhereWithAggregatesInput = {
    AND?:
      | budgetsScalarWhereWithAggregatesInput
      | budgetsScalarWhereWithAggregatesInput[];
    OR?: budgetsScalarWhereWithAggregatesInput[];
    NOT?:
      | budgetsScalarWhereWithAggregatesInput
      | budgetsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"budgets"> | string;
    name?: StringWithAggregatesFilter<"budgets"> | string;
    amount?:
      | DecimalWithAggregatesFilter<"budgets">
      | Decimal
      | DecimalJsLike
      | number
      | string;
    period?:
      | Enumbudget_periodNullableWithAggregatesFilter<"budgets">
      | $Enums.budget_period
      | null;
    start_date?: DateTimeWithAggregatesFilter<"budgets"> | Date | string;
    end_date?:
      | DateTimeNullableWithAggregatesFilter<"budgets">
      | Date
      | string
      | null;
    spent?:
      | DecimalNullableWithAggregatesFilter<"budgets">
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    alert_at?:
      | DecimalNullableWithAggregatesFilter<"budgets">
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    category_id?: StringNullableWithAggregatesFilter<"budgets"> | string | null;
    user_id?: StringWithAggregatesFilter<"budgets"> | string;
    created_at?:
      | DateTimeNullableWithAggregatesFilter<"budgets">
      | Date
      | string
      | null;
    updated_at?:
      | DateTimeNullableWithAggregatesFilter<"budgets">
      | Date
      | string
      | null;
  };

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[];
    OR?: categoriesWhereInput[];
    NOT?: categoriesWhereInput | categoriesWhereInput[];
    id?: StringFilter<"categories"> | string;
    name?: StringFilter<"categories"> | string;
    description?: StringNullableFilter<"categories"> | string | null;
    color?: StringNullableFilter<"categories"> | string | null;
    icon?: StringNullableFilter<"categories"> | string | null;
    type?: Enumtransaction_typeFilter<"categories"> | $Enums.transaction_type;
    parent_id?: StringNullableFilter<"categories"> | string | null;
    user_id?: StringNullableFilter<"categories"> | string | null;
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null;
    budgets?: BudgetsListRelationFilter;
    categories?: XOR<
      CategoriesNullableScalarRelationFilter,
      categoriesWhereInput
    > | null;
    other_categories?: CategoriesListRelationFilter;
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null;
    transactions?: TransactionsListRelationFilter;
  };

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    color?: SortOrderInput | SortOrder;
    icon?: SortOrderInput | SortOrder;
    type?: SortOrder;
    parent_id?: SortOrderInput | SortOrder;
    user_id?: SortOrderInput | SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    budgets?: budgetsOrderByRelationAggregateInput;
    categories?: categoriesOrderByWithRelationInput;
    other_categories?: categoriesOrderByRelationAggregateInput;
    users?: usersOrderByWithRelationInput;
    transactions?: transactionsOrderByRelationAggregateInput;
  };

  export type categoriesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      name?: string;
      AND?: categoriesWhereInput | categoriesWhereInput[];
      OR?: categoriesWhereInput[];
      NOT?: categoriesWhereInput | categoriesWhereInput[];
      description?: StringNullableFilter<"categories"> | string | null;
      color?: StringNullableFilter<"categories"> | string | null;
      icon?: StringNullableFilter<"categories"> | string | null;
      type?: Enumtransaction_typeFilter<"categories"> | $Enums.transaction_type;
      parent_id?: StringNullableFilter<"categories"> | string | null;
      user_id?: StringNullableFilter<"categories"> | string | null;
      created_at?: DateTimeNullableFilter<"categories"> | Date | string | null;
      updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null;
      budgets?: BudgetsListRelationFilter;
      categories?: XOR<
        CategoriesNullableScalarRelationFilter,
        categoriesWhereInput
      > | null;
      other_categories?: CategoriesListRelationFilter;
      users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null;
      transactions?: TransactionsListRelationFilter;
    },
    "id" | "name"
  >;

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    color?: SortOrderInput | SortOrder;
    icon?: SortOrderInput | SortOrder;
    type?: SortOrder;
    parent_id?: SortOrderInput | SortOrder;
    user_id?: SortOrderInput | SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    _count?: categoriesCountOrderByAggregateInput;
    _max?: categoriesMaxOrderByAggregateInput;
    _min?: categoriesMinOrderByAggregateInput;
  };

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?:
      | categoriesScalarWhereWithAggregatesInput
      | categoriesScalarWhereWithAggregatesInput[];
    OR?: categoriesScalarWhereWithAggregatesInput[];
    NOT?:
      | categoriesScalarWhereWithAggregatesInput
      | categoriesScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"categories"> | string;
    name?: StringWithAggregatesFilter<"categories"> | string;
    description?:
      | StringNullableWithAggregatesFilter<"categories">
      | string
      | null;
    color?: StringNullableWithAggregatesFilter<"categories"> | string | null;
    icon?: StringNullableWithAggregatesFilter<"categories"> | string | null;
    type?:
      | Enumtransaction_typeWithAggregatesFilter<"categories">
      | $Enums.transaction_type;
    parent_id?:
      | StringNullableWithAggregatesFilter<"categories">
      | string
      | null;
    user_id?: StringNullableWithAggregatesFilter<"categories"> | string | null;
    created_at?:
      | DateTimeNullableWithAggregatesFilter<"categories">
      | Date
      | string
      | null;
    updated_at?:
      | DateTimeNullableWithAggregatesFilter<"categories">
      | Date
      | string
      | null;
  };

  export type goalsWhereInput = {
    AND?: goalsWhereInput | goalsWhereInput[];
    OR?: goalsWhereInput[];
    NOT?: goalsWhereInput | goalsWhereInput[];
    id?: StringFilter<"goals"> | string;
    name?: StringFilter<"goals"> | string;
    description?: StringNullableFilter<"goals"> | string | null;
    target?: DecimalFilter<"goals"> | Decimal | DecimalJsLike | number | string;
    current?:
      | DecimalNullableFilter<"goals">
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    deadline?: DateTimeNullableFilter<"goals"> | Date | string | null;
    color?: StringNullableFilter<"goals"> | string | null;
    icon?: StringNullableFilter<"goals"> | string | null;
    auto_transfer?: BoolNullableFilter<"goals"> | boolean | null;
    transfer_account_id?: StringNullableFilter<"goals"> | string | null;
    user_id?: StringFilter<"goals"> | string;
    created_at?: DateTimeNullableFilter<"goals"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"goals"> | Date | string | null;
    accounts?: XOR<
      AccountsNullableScalarRelationFilter,
      accountsWhereInput
    > | null;
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>;
  };

  export type goalsOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    target?: SortOrder;
    current?: SortOrderInput | SortOrder;
    deadline?: SortOrderInput | SortOrder;
    color?: SortOrderInput | SortOrder;
    icon?: SortOrderInput | SortOrder;
    auto_transfer?: SortOrderInput | SortOrder;
    transfer_account_id?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    accounts?: accountsOrderByWithRelationInput;
    users?: usersOrderByWithRelationInput;
  };

  export type goalsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: goalsWhereInput | goalsWhereInput[];
      OR?: goalsWhereInput[];
      NOT?: goalsWhereInput | goalsWhereInput[];
      name?: StringFilter<"goals"> | string;
      description?: StringNullableFilter<"goals"> | string | null;
      target?:
        | DecimalFilter<"goals">
        | Decimal
        | DecimalJsLike
        | number
        | string;
      current?:
        | DecimalNullableFilter<"goals">
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      deadline?: DateTimeNullableFilter<"goals"> | Date | string | null;
      color?: StringNullableFilter<"goals"> | string | null;
      icon?: StringNullableFilter<"goals"> | string | null;
      auto_transfer?: BoolNullableFilter<"goals"> | boolean | null;
      transfer_account_id?: StringNullableFilter<"goals"> | string | null;
      user_id?: StringFilter<"goals"> | string;
      created_at?: DateTimeNullableFilter<"goals"> | Date | string | null;
      updated_at?: DateTimeNullableFilter<"goals"> | Date | string | null;
      accounts?: XOR<
        AccountsNullableScalarRelationFilter,
        accountsWhereInput
      > | null;
      users?: XOR<UsersScalarRelationFilter, usersWhereInput>;
    },
    "id"
  >;

  export type goalsOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    target?: SortOrder;
    current?: SortOrderInput | SortOrder;
    deadline?: SortOrderInput | SortOrder;
    color?: SortOrderInput | SortOrder;
    icon?: SortOrderInput | SortOrder;
    auto_transfer?: SortOrderInput | SortOrder;
    transfer_account_id?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    _count?: goalsCountOrderByAggregateInput;
    _avg?: goalsAvgOrderByAggregateInput;
    _max?: goalsMaxOrderByAggregateInput;
    _min?: goalsMinOrderByAggregateInput;
    _sum?: goalsSumOrderByAggregateInput;
  };

  export type goalsScalarWhereWithAggregatesInput = {
    AND?:
      | goalsScalarWhereWithAggregatesInput
      | goalsScalarWhereWithAggregatesInput[];
    OR?: goalsScalarWhereWithAggregatesInput[];
    NOT?:
      | goalsScalarWhereWithAggregatesInput
      | goalsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"goals"> | string;
    name?: StringWithAggregatesFilter<"goals"> | string;
    description?: StringNullableWithAggregatesFilter<"goals"> | string | null;
    target?:
      | DecimalWithAggregatesFilter<"goals">
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current?:
      | DecimalNullableWithAggregatesFilter<"goals">
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    deadline?:
      | DateTimeNullableWithAggregatesFilter<"goals">
      | Date
      | string
      | null;
    color?: StringNullableWithAggregatesFilter<"goals"> | string | null;
    icon?: StringNullableWithAggregatesFilter<"goals"> | string | null;
    auto_transfer?: BoolNullableWithAggregatesFilter<"goals"> | boolean | null;
    transfer_account_id?:
      | StringNullableWithAggregatesFilter<"goals">
      | string
      | null;
    user_id?: StringWithAggregatesFilter<"goals"> | string;
    created_at?:
      | DateTimeNullableWithAggregatesFilter<"goals">
      | Date
      | string
      | null;
    updated_at?:
      | DateTimeNullableWithAggregatesFilter<"goals">
      | Date
      | string
      | null;
  };

  export type remindersWhereInput = {
    AND?: remindersWhereInput | remindersWhereInput[];
    OR?: remindersWhereInput[];
    NOT?: remindersWhereInput | remindersWhereInput[];
    id?: StringFilter<"reminders"> | string;
    title?: StringFilter<"reminders"> | string;
    description?: StringNullableFilter<"reminders"> | string | null;
    due_date?: DateTimeFilter<"reminders"> | Date | string;
    is_completed?: BoolNullableFilter<"reminders"> | boolean | null;
    is_recurring?: BoolNullableFilter<"reminders"> | boolean | null;
    recurring_rule?: JsonNullableFilter<"reminders">;
    user_id?: StringFilter<"reminders"> | string;
    created_at?: DateTimeNullableFilter<"reminders"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"reminders"> | Date | string | null;
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>;
  };

  export type remindersOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    due_date?: SortOrder;
    is_completed?: SortOrderInput | SortOrder;
    is_recurring?: SortOrderInput | SortOrder;
    recurring_rule?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    users?: usersOrderByWithRelationInput;
  };

  export type remindersWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: remindersWhereInput | remindersWhereInput[];
      OR?: remindersWhereInput[];
      NOT?: remindersWhereInput | remindersWhereInput[];
      title?: StringFilter<"reminders"> | string;
      description?: StringNullableFilter<"reminders"> | string | null;
      due_date?: DateTimeFilter<"reminders"> | Date | string;
      is_completed?: BoolNullableFilter<"reminders"> | boolean | null;
      is_recurring?: BoolNullableFilter<"reminders"> | boolean | null;
      recurring_rule?: JsonNullableFilter<"reminders">;
      user_id?: StringFilter<"reminders"> | string;
      created_at?: DateTimeNullableFilter<"reminders"> | Date | string | null;
      updated_at?: DateTimeNullableFilter<"reminders"> | Date | string | null;
      users?: XOR<UsersScalarRelationFilter, usersWhereInput>;
    },
    "id"
  >;

  export type remindersOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    due_date?: SortOrder;
    is_completed?: SortOrderInput | SortOrder;
    is_recurring?: SortOrderInput | SortOrder;
    recurring_rule?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    _count?: remindersCountOrderByAggregateInput;
    _max?: remindersMaxOrderByAggregateInput;
    _min?: remindersMinOrderByAggregateInput;
  };

  export type remindersScalarWhereWithAggregatesInput = {
    AND?:
      | remindersScalarWhereWithAggregatesInput
      | remindersScalarWhereWithAggregatesInput[];
    OR?: remindersScalarWhereWithAggregatesInput[];
    NOT?:
      | remindersScalarWhereWithAggregatesInput
      | remindersScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"reminders"> | string;
    title?: StringWithAggregatesFilter<"reminders"> | string;
    description?:
      | StringNullableWithAggregatesFilter<"reminders">
      | string
      | null;
    due_date?: DateTimeWithAggregatesFilter<"reminders"> | Date | string;
    is_completed?:
      | BoolNullableWithAggregatesFilter<"reminders">
      | boolean
      | null;
    is_recurring?:
      | BoolNullableWithAggregatesFilter<"reminders">
      | boolean
      | null;
    recurring_rule?: JsonNullableWithAggregatesFilter<"reminders">;
    user_id?: StringWithAggregatesFilter<"reminders"> | string;
    created_at?:
      | DateTimeNullableWithAggregatesFilter<"reminders">
      | Date
      | string
      | null;
    updated_at?:
      | DateTimeNullableWithAggregatesFilter<"reminders">
      | Date
      | string
      | null;
  };

  export type sync_statesWhereInput = {
    AND?: sync_statesWhereInput | sync_statesWhereInput[];
    OR?: sync_statesWhereInput[];
    NOT?: sync_statesWhereInput | sync_statesWhereInput[];
    id?: StringFilter<"sync_states"> | string;
    user_id?: StringFilter<"sync_states"> | string;
    last_sync?: DateTimeNullableFilter<"sync_states"> | Date | string | null;
    pending_ops?: JsonNullableFilter<"sync_states">;
    created_at?: DateTimeNullableFilter<"sync_states"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"sync_states"> | Date | string | null;
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>;
  };

  export type sync_statesOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    last_sync?: SortOrderInput | SortOrder;
    pending_ops?: SortOrderInput | SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    users?: usersOrderByWithRelationInput;
  };

  export type sync_statesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      user_id?: string;
      AND?: sync_statesWhereInput | sync_statesWhereInput[];
      OR?: sync_statesWhereInput[];
      NOT?: sync_statesWhereInput | sync_statesWhereInput[];
      last_sync?: DateTimeNullableFilter<"sync_states"> | Date | string | null;
      pending_ops?: JsonNullableFilter<"sync_states">;
      created_at?: DateTimeNullableFilter<"sync_states"> | Date | string | null;
      updated_at?: DateTimeNullableFilter<"sync_states"> | Date | string | null;
      users?: XOR<UsersScalarRelationFilter, usersWhereInput>;
    },
    "id" | "user_id"
  >;

  export type sync_statesOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    last_sync?: SortOrderInput | SortOrder;
    pending_ops?: SortOrderInput | SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    _count?: sync_statesCountOrderByAggregateInput;
    _max?: sync_statesMaxOrderByAggregateInput;
    _min?: sync_statesMinOrderByAggregateInput;
  };

  export type sync_statesScalarWhereWithAggregatesInput = {
    AND?:
      | sync_statesScalarWhereWithAggregatesInput
      | sync_statesScalarWhereWithAggregatesInput[];
    OR?: sync_statesScalarWhereWithAggregatesInput[];
    NOT?:
      | sync_statesScalarWhereWithAggregatesInput
      | sync_statesScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"sync_states"> | string;
    user_id?: StringWithAggregatesFilter<"sync_states"> | string;
    last_sync?:
      | DateTimeNullableWithAggregatesFilter<"sync_states">
      | Date
      | string
      | null;
    pending_ops?: JsonNullableWithAggregatesFilter<"sync_states">;
    created_at?:
      | DateTimeNullableWithAggregatesFilter<"sync_states">
      | Date
      | string
      | null;
    updated_at?:
      | DateTimeNullableWithAggregatesFilter<"sync_states">
      | Date
      | string
      | null;
  };

  export type transactionsWhereInput = {
    AND?: transactionsWhereInput | transactionsWhereInput[];
    OR?: transactionsWhereInput[];
    NOT?: transactionsWhereInput | transactionsWhereInput[];
    id?: StringFilter<"transactions"> | string;
    amount?:
      | DecimalFilter<"transactions">
      | Decimal
      | DecimalJsLike
      | number
      | string;
    description?: StringFilter<"transactions"> | string;
    date?: DateTimeNullableFilter<"transactions"> | Date | string | null;
    type?: Enumtransaction_typeFilter<"transactions"> | $Enums.transaction_type;
    notes?: StringNullableFilter<"transactions"> | string | null;
    location?: StringNullableFilter<"transactions"> | string | null;
    receipt_image?: StringNullableFilter<"transactions"> | string | null;
    is_recurring?: BoolNullableFilter<"transactions"> | boolean | null;
    recurring_id?: StringNullableFilter<"transactions"> | string | null;
    recurring_rule?: JsonNullableFilter<"transactions">;
    account_id?: StringFilter<"transactions"> | string;
    to_account_id?: StringNullableFilter<"transactions"> | string | null;
    category_id?: StringNullableFilter<"transactions"> | string | null;
    user_id?: StringFilter<"transactions"> | string;
    local_id?: StringNullableFilter<"transactions"> | string | null;
    is_synced?: BoolNullableFilter<"transactions"> | boolean | null;
    last_sync_at?:
      | DateTimeNullableFilter<"transactions">
      | Date
      | string
      | null;
    created_at?: DateTimeNullableFilter<"transactions"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"transactions"> | Date | string | null;
    accounts_transactions_account_idToaccounts?: XOR<
      AccountsScalarRelationFilter,
      accountsWhereInput
    >;
    categories?: XOR<
      CategoriesNullableScalarRelationFilter,
      categoriesWhereInput
    > | null;
    accounts_transactions_to_account_idToaccounts?: XOR<
      AccountsNullableScalarRelationFilter,
      accountsWhereInput
    > | null;
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>;
  };

  export type transactionsOrderByWithRelationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrder;
    date?: SortOrderInput | SortOrder;
    type?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    receipt_image?: SortOrderInput | SortOrder;
    is_recurring?: SortOrderInput | SortOrder;
    recurring_id?: SortOrderInput | SortOrder;
    recurring_rule?: SortOrderInput | SortOrder;
    account_id?: SortOrder;
    to_account_id?: SortOrderInput | SortOrder;
    category_id?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    local_id?: SortOrderInput | SortOrder;
    is_synced?: SortOrderInput | SortOrder;
    last_sync_at?: SortOrderInput | SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    accounts_transactions_account_idToaccounts?: accountsOrderByWithRelationInput;
    categories?: categoriesOrderByWithRelationInput;
    accounts_transactions_to_account_idToaccounts?: accountsOrderByWithRelationInput;
    users?: usersOrderByWithRelationInput;
  };

  export type transactionsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      local_id?: string;
      AND?: transactionsWhereInput | transactionsWhereInput[];
      OR?: transactionsWhereInput[];
      NOT?: transactionsWhereInput | transactionsWhereInput[];
      amount?:
        | DecimalFilter<"transactions">
        | Decimal
        | DecimalJsLike
        | number
        | string;
      description?: StringFilter<"transactions"> | string;
      date?: DateTimeNullableFilter<"transactions"> | Date | string | null;
      type?:
        | Enumtransaction_typeFilter<"transactions">
        | $Enums.transaction_type;
      notes?: StringNullableFilter<"transactions"> | string | null;
      location?: StringNullableFilter<"transactions"> | string | null;
      receipt_image?: StringNullableFilter<"transactions"> | string | null;
      is_recurring?: BoolNullableFilter<"transactions"> | boolean | null;
      recurring_id?: StringNullableFilter<"transactions"> | string | null;
      recurring_rule?: JsonNullableFilter<"transactions">;
      account_id?: StringFilter<"transactions"> | string;
      to_account_id?: StringNullableFilter<"transactions"> | string | null;
      category_id?: StringNullableFilter<"transactions"> | string | null;
      user_id?: StringFilter<"transactions"> | string;
      is_synced?: BoolNullableFilter<"transactions"> | boolean | null;
      last_sync_at?:
        | DateTimeNullableFilter<"transactions">
        | Date
        | string
        | null;
      created_at?:
        | DateTimeNullableFilter<"transactions">
        | Date
        | string
        | null;
      updated_at?:
        | DateTimeNullableFilter<"transactions">
        | Date
        | string
        | null;
      accounts_transactions_account_idToaccounts?: XOR<
        AccountsScalarRelationFilter,
        accountsWhereInput
      >;
      categories?: XOR<
        CategoriesNullableScalarRelationFilter,
        categoriesWhereInput
      > | null;
      accounts_transactions_to_account_idToaccounts?: XOR<
        AccountsNullableScalarRelationFilter,
        accountsWhereInput
      > | null;
      users?: XOR<UsersScalarRelationFilter, usersWhereInput>;
    },
    "id" | "local_id"
  >;

  export type transactionsOrderByWithAggregationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrder;
    date?: SortOrderInput | SortOrder;
    type?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    receipt_image?: SortOrderInput | SortOrder;
    is_recurring?: SortOrderInput | SortOrder;
    recurring_id?: SortOrderInput | SortOrder;
    recurring_rule?: SortOrderInput | SortOrder;
    account_id?: SortOrder;
    to_account_id?: SortOrderInput | SortOrder;
    category_id?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    local_id?: SortOrderInput | SortOrder;
    is_synced?: SortOrderInput | SortOrder;
    last_sync_at?: SortOrderInput | SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    _count?: transactionsCountOrderByAggregateInput;
    _avg?: transactionsAvgOrderByAggregateInput;
    _max?: transactionsMaxOrderByAggregateInput;
    _min?: transactionsMinOrderByAggregateInput;
    _sum?: transactionsSumOrderByAggregateInput;
  };

  export type transactionsScalarWhereWithAggregatesInput = {
    AND?:
      | transactionsScalarWhereWithAggregatesInput
      | transactionsScalarWhereWithAggregatesInput[];
    OR?: transactionsScalarWhereWithAggregatesInput[];
    NOT?:
      | transactionsScalarWhereWithAggregatesInput
      | transactionsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"transactions"> | string;
    amount?:
      | DecimalWithAggregatesFilter<"transactions">
      | Decimal
      | DecimalJsLike
      | number
      | string;
    description?: StringWithAggregatesFilter<"transactions"> | string;
    date?:
      | DateTimeNullableWithAggregatesFilter<"transactions">
      | Date
      | string
      | null;
    type?:
      | Enumtransaction_typeWithAggregatesFilter<"transactions">
      | $Enums.transaction_type;
    notes?: StringNullableWithAggregatesFilter<"transactions"> | string | null;
    location?:
      | StringNullableWithAggregatesFilter<"transactions">
      | string
      | null;
    receipt_image?:
      | StringNullableWithAggregatesFilter<"transactions">
      | string
      | null;
    is_recurring?:
      | BoolNullableWithAggregatesFilter<"transactions">
      | boolean
      | null;
    recurring_id?:
      | StringNullableWithAggregatesFilter<"transactions">
      | string
      | null;
    recurring_rule?: JsonNullableWithAggregatesFilter<"transactions">;
    account_id?: StringWithAggregatesFilter<"transactions"> | string;
    to_account_id?:
      | StringNullableWithAggregatesFilter<"transactions">
      | string
      | null;
    category_id?:
      | StringNullableWithAggregatesFilter<"transactions">
      | string
      | null;
    user_id?: StringWithAggregatesFilter<"transactions"> | string;
    local_id?:
      | StringNullableWithAggregatesFilter<"transactions">
      | string
      | null;
    is_synced?:
      | BoolNullableWithAggregatesFilter<"transactions">
      | boolean
      | null;
    last_sync_at?:
      | DateTimeNullableWithAggregatesFilter<"transactions">
      | Date
      | string
      | null;
    created_at?:
      | DateTimeNullableWithAggregatesFilter<"transactions">
      | Date
      | string
      | null;
    updated_at?:
      | DateTimeNullableWithAggregatesFilter<"transactions">
      | Date
      | string
      | null;
  };

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[];
    OR?: usersWhereInput[];
    NOT?: usersWhereInput | usersWhereInput[];
    id?: StringFilter<"users"> | string;
    email?: StringFilter<"users"> | string;
    name?: StringNullableFilter<"users"> | string | null;
    password?: StringFilter<"users"> | string;
    avatar?: StringNullableFilter<"users"> | string | null;
    currency?: StringNullableFilter<"users"> | string | null;
    language?: StringNullableFilter<"users"> | string | null;
    timezone?: StringNullableFilter<"users"> | string | null;
    theme?: StringNullableFilter<"users"> | string | null;
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null;
    accounts?: AccountsListRelationFilter;
    budgets?: BudgetsListRelationFilter;
    categories?: CategoriesListRelationFilter;
    goals?: GoalsListRelationFilter;
    reminders?: RemindersListRelationFilter;
    sync_states?: XOR<
      Sync_statesNullableScalarRelationFilter,
      sync_statesWhereInput
    > | null;
    transactions?: TransactionsListRelationFilter;
  };

  export type usersOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrderInput | SortOrder;
    password?: SortOrder;
    avatar?: SortOrderInput | SortOrder;
    currency?: SortOrderInput | SortOrder;
    language?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    theme?: SortOrderInput | SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    accounts?: accountsOrderByRelationAggregateInput;
    budgets?: budgetsOrderByRelationAggregateInput;
    categories?: categoriesOrderByRelationAggregateInput;
    goals?: goalsOrderByRelationAggregateInput;
    reminders?: remindersOrderByRelationAggregateInput;
    sync_states?: sync_statesOrderByWithRelationInput;
    transactions?: transactionsOrderByRelationAggregateInput;
  };

  export type usersWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: usersWhereInput | usersWhereInput[];
      OR?: usersWhereInput[];
      NOT?: usersWhereInput | usersWhereInput[];
      name?: StringNullableFilter<"users"> | string | null;
      password?: StringFilter<"users"> | string;
      avatar?: StringNullableFilter<"users"> | string | null;
      currency?: StringNullableFilter<"users"> | string | null;
      language?: StringNullableFilter<"users"> | string | null;
      timezone?: StringNullableFilter<"users"> | string | null;
      theme?: StringNullableFilter<"users"> | string | null;
      created_at?: DateTimeNullableFilter<"users"> | Date | string | null;
      updated_at?: DateTimeNullableFilter<"users"> | Date | string | null;
      accounts?: AccountsListRelationFilter;
      budgets?: BudgetsListRelationFilter;
      categories?: CategoriesListRelationFilter;
      goals?: GoalsListRelationFilter;
      reminders?: RemindersListRelationFilter;
      sync_states?: XOR<
        Sync_statesNullableScalarRelationFilter,
        sync_statesWhereInput
      > | null;
      transactions?: TransactionsListRelationFilter;
    },
    "id" | "email"
  >;

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrderInput | SortOrder;
    password?: SortOrder;
    avatar?: SortOrderInput | SortOrder;
    currency?: SortOrderInput | SortOrder;
    language?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    theme?: SortOrderInput | SortOrder;
    created_at?: SortOrderInput | SortOrder;
    updated_at?: SortOrderInput | SortOrder;
    _count?: usersCountOrderByAggregateInput;
    _max?: usersMaxOrderByAggregateInput;
    _min?: usersMinOrderByAggregateInput;
  };

  export type usersScalarWhereWithAggregatesInput = {
    AND?:
      | usersScalarWhereWithAggregatesInput
      | usersScalarWhereWithAggregatesInput[];
    OR?: usersScalarWhereWithAggregatesInput[];
    NOT?:
      | usersScalarWhereWithAggregatesInput
      | usersScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"users"> | string;
    email?: StringWithAggregatesFilter<"users"> | string;
    name?: StringNullableWithAggregatesFilter<"users"> | string | null;
    password?: StringWithAggregatesFilter<"users"> | string;
    avatar?: StringNullableWithAggregatesFilter<"users"> | string | null;
    currency?: StringNullableWithAggregatesFilter<"users"> | string | null;
    language?: StringNullableWithAggregatesFilter<"users"> | string | null;
    timezone?: StringNullableWithAggregatesFilter<"users"> | string | null;
    theme?: StringNullableWithAggregatesFilter<"users"> | string | null;
    created_at?:
      | DateTimeNullableWithAggregatesFilter<"users">
      | Date
      | string
      | null;
    updated_at?:
      | DateTimeNullableWithAggregatesFilter<"users">
      | Date
      | string
      | null;
  };

  export type accountsCreateInput = {
    id?: string;
    name: string;
    type: $Enums.account_type;
    balance?: Decimal | DecimalJsLike | number | string | null;
    color?: string | null;
    icon?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users: usersCreateNestedOneWithoutAccountsInput;
    goals?: goalsCreateNestedManyWithoutAccountsInput;
    transactions_transactions_account_idToaccounts?: transactionsCreateNestedManyWithoutAccounts_transactions_account_idToaccountsInput;
    transactions_transactions_to_account_idToaccounts?: transactionsCreateNestedManyWithoutAccounts_transactions_to_account_idToaccountsInput;
  };

  export type accountsUncheckedCreateInput = {
    id?: string;
    name: string;
    type: $Enums.account_type;
    balance?: Decimal | DecimalJsLike | number | string | null;
    color?: string | null;
    icon?: string | null;
    is_active?: boolean | null;
    user_id: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    goals?: goalsUncheckedCreateNestedManyWithoutAccountsInput;
    transactions_transactions_account_idToaccounts?: transactionsUncheckedCreateNestedManyWithoutAccounts_transactions_account_idToaccountsInput;
    transactions_transactions_to_account_idToaccounts?: transactionsUncheckedCreateNestedManyWithoutAccounts_transactions_to_account_idToaccountsInput;
  };

  export type accountsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type;
    balance?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    users?: usersUpdateOneRequiredWithoutAccountsNestedInput;
    goals?: goalsUpdateManyWithoutAccountsNestedInput;
    transactions_transactions_account_idToaccounts?: transactionsUpdateManyWithoutAccounts_transactions_account_idToaccountsNestedInput;
    transactions_transactions_to_account_idToaccounts?: transactionsUpdateManyWithoutAccounts_transactions_to_account_idToaccountsNestedInput;
  };

  export type accountsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type;
    balance?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    goals?: goalsUncheckedUpdateManyWithoutAccountsNestedInput;
    transactions_transactions_account_idToaccounts?: transactionsUncheckedUpdateManyWithoutAccounts_transactions_account_idToaccountsNestedInput;
    transactions_transactions_to_account_idToaccounts?: transactionsUncheckedUpdateManyWithoutAccounts_transactions_to_account_idToaccountsNestedInput;
  };

  export type accountsCreateManyInput = {
    id?: string;
    name: string;
    type: $Enums.account_type;
    balance?: Decimal | DecimalJsLike | number | string | null;
    color?: string | null;
    icon?: string | null;
    is_active?: boolean | null;
    user_id: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type accountsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type;
    balance?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type accountsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type;
    balance?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type budgetsCreateInput = {
    id?: string;
    name: string;
    amount: Decimal | DecimalJsLike | number | string;
    period?: $Enums.budget_period | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    spent?: Decimal | DecimalJsLike | number | string | null;
    alert_at?: Decimal | DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    categories?: categoriesCreateNestedOneWithoutBudgetsInput;
    users: usersCreateNestedOneWithoutBudgetsInput;
  };

  export type budgetsUncheckedCreateInput = {
    id?: string;
    name: string;
    amount: Decimal | DecimalJsLike | number | string;
    period?: $Enums.budget_period | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    spent?: Decimal | DecimalJsLike | number | string | null;
    alert_at?: Decimal | DecimalJsLike | number | string | null;
    category_id?: string | null;
    user_id: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type budgetsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    period?:
      | NullableEnumbudget_periodFieldUpdateOperationsInput
      | $Enums.budget_period
      | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    spent?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    alert_at?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    categories?: categoriesUpdateOneWithoutBudgetsNestedInput;
    users?: usersUpdateOneRequiredWithoutBudgetsNestedInput;
  };

  export type budgetsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    period?:
      | NullableEnumbudget_periodFieldUpdateOperationsInput
      | $Enums.budget_period
      | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    spent?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    alert_at?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    category_id?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type budgetsCreateManyInput = {
    id?: string;
    name: string;
    amount: Decimal | DecimalJsLike | number | string;
    period?: $Enums.budget_period | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    spent?: Decimal | DecimalJsLike | number | string | null;
    alert_at?: Decimal | DecimalJsLike | number | string | null;
    category_id?: string | null;
    user_id: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type budgetsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    period?:
      | NullableEnumbudget_periodFieldUpdateOperationsInput
      | $Enums.budget_period
      | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    spent?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    alert_at?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type budgetsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    period?:
      | NullableEnumbudget_periodFieldUpdateOperationsInput
      | $Enums.budget_period
      | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    spent?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    alert_at?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    category_id?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type categoriesCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    type: $Enums.transaction_type;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    budgets?: budgetsCreateNestedManyWithoutCategoriesInput;
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput;
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput;
    users?: usersCreateNestedOneWithoutCategoriesInput;
    transactions?: transactionsCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    type: $Enums.transaction_type;
    parent_id?: string | null;
    user_id?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    budgets?: budgetsUncheckedCreateNestedManyWithoutCategoriesInput;
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    budgets?: budgetsUpdateManyWithoutCategoriesNestedInput;
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput;
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput;
    users?: usersUpdateOneWithoutCategoriesNestedInput;
    transactions?: transactionsUpdateManyWithoutCategoriesNestedInput;
  };

  export type categoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    budgets?: budgetsUncheckedUpdateManyWithoutCategoriesNestedInput;
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutCategoriesNestedInput;
  };

  export type categoriesCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    type: $Enums.transaction_type;
    parent_id?: string | null;
    user_id?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type categoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type categoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type goalsCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    target: Decimal | DecimalJsLike | number | string;
    current?: Decimal | DecimalJsLike | number | string | null;
    deadline?: Date | string | null;
    color?: string | null;
    icon?: string | null;
    auto_transfer?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts?: accountsCreateNestedOneWithoutGoalsInput;
    users: usersCreateNestedOneWithoutGoalsInput;
  };

  export type goalsUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    target: Decimal | DecimalJsLike | number | string;
    current?: Decimal | DecimalJsLike | number | string | null;
    deadline?: Date | string | null;
    color?: string | null;
    icon?: string | null;
    auto_transfer?: boolean | null;
    transfer_account_id?: string | null;
    user_id: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type goalsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    target?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    deadline?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    auto_transfer?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts?: accountsUpdateOneWithoutGoalsNestedInput;
    users?: usersUpdateOneRequiredWithoutGoalsNestedInput;
  };

  export type goalsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    target?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    deadline?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    auto_transfer?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    transfer_account_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type goalsCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    target: Decimal | DecimalJsLike | number | string;
    current?: Decimal | DecimalJsLike | number | string | null;
    deadline?: Date | string | null;
    color?: string | null;
    icon?: string | null;
    auto_transfer?: boolean | null;
    transfer_account_id?: string | null;
    user_id: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type goalsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    target?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    deadline?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    auto_transfer?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type goalsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    target?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    deadline?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    auto_transfer?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    transfer_account_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type remindersCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    due_date: Date | string;
    is_completed?: boolean | null;
    is_recurring?: boolean | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users: usersCreateNestedOneWithoutRemindersInput;
  };

  export type remindersUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    due_date: Date | string;
    is_completed?: boolean | null;
    is_recurring?: boolean | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    user_id: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type remindersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    users?: usersUpdateOneRequiredWithoutRemindersNestedInput;
  };

  export type remindersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type remindersCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    due_date: Date | string;
    is_completed?: boolean | null;
    is_recurring?: boolean | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    user_id: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type remindersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type remindersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type sync_statesCreateInput = {
    id?: string;
    last_sync?: Date | string | null;
    pending_ops?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users: usersCreateNestedOneWithoutSync_statesInput;
  };

  export type sync_statesUncheckedCreateInput = {
    id?: string;
    user_id: string;
    last_sync?: Date | string | null;
    pending_ops?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type sync_statesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    last_sync?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    pending_ops?: NullableJsonNullValueInput | InputJsonValue;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    users?: usersUpdateOneRequiredWithoutSync_statesNestedInput;
  };

  export type sync_statesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    last_sync?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    pending_ops?: NullableJsonNullValueInput | InputJsonValue;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type sync_statesCreateManyInput = {
    id?: string;
    user_id: string;
    last_sync?: Date | string | null;
    pending_ops?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type sync_statesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    last_sync?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    pending_ops?: NullableJsonNullValueInput | InputJsonValue;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type sync_statesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    last_sync?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    pending_ops?: NullableJsonNullValueInput | InputJsonValue;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type transactionsCreateInput = {
    id?: string;
    amount: Decimal | DecimalJsLike | number | string;
    description: string;
    date?: Date | string | null;
    type: $Enums.transaction_type;
    notes?: string | null;
    location?: string | null;
    receipt_image?: string | null;
    is_recurring?: boolean | null;
    recurring_id?: string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    local_id?: string | null;
    is_synced?: boolean | null;
    last_sync_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts_transactions_account_idToaccounts: accountsCreateNestedOneWithoutTransactions_transactions_account_idToaccountsInput;
    categories?: categoriesCreateNestedOneWithoutTransactionsInput;
    accounts_transactions_to_account_idToaccounts?: accountsCreateNestedOneWithoutTransactions_transactions_to_account_idToaccountsInput;
    users: usersCreateNestedOneWithoutTransactionsInput;
  };

  export type transactionsUncheckedCreateInput = {
    id?: string;
    amount: Decimal | DecimalJsLike | number | string;
    description: string;
    date?: Date | string | null;
    type: $Enums.transaction_type;
    notes?: string | null;
    location?: string | null;
    receipt_image?: string | null;
    is_recurring?: boolean | null;
    recurring_id?: string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    account_id: string;
    to_account_id?: string | null;
    category_id?: string | null;
    user_id: string;
    local_id?: string | null;
    is_synced?: boolean | null;
    last_sync_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type transactionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    description?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    receipt_image?: NullableStringFieldUpdateOperationsInput | string | null;
    is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    recurring_id?: NullableStringFieldUpdateOperationsInput | string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    local_id?: NullableStringFieldUpdateOperationsInput | string | null;
    is_synced?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_sync_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts_transactions_account_idToaccounts?: accountsUpdateOneRequiredWithoutTransactions_transactions_account_idToaccountsNestedInput;
    categories?: categoriesUpdateOneWithoutTransactionsNestedInput;
    accounts_transactions_to_account_idToaccounts?: accountsUpdateOneWithoutTransactions_transactions_to_account_idToaccountsNestedInput;
    users?: usersUpdateOneRequiredWithoutTransactionsNestedInput;
  };

  export type transactionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    description?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    receipt_image?: NullableStringFieldUpdateOperationsInput | string | null;
    is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    recurring_id?: NullableStringFieldUpdateOperationsInput | string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    account_id?: StringFieldUpdateOperationsInput | string;
    to_account_id?: NullableStringFieldUpdateOperationsInput | string | null;
    category_id?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    local_id?: NullableStringFieldUpdateOperationsInput | string | null;
    is_synced?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_sync_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type transactionsCreateManyInput = {
    id?: string;
    amount: Decimal | DecimalJsLike | number | string;
    description: string;
    date?: Date | string | null;
    type: $Enums.transaction_type;
    notes?: string | null;
    location?: string | null;
    receipt_image?: string | null;
    is_recurring?: boolean | null;
    recurring_id?: string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    account_id: string;
    to_account_id?: string | null;
    category_id?: string | null;
    user_id: string;
    local_id?: string | null;
    is_synced?: boolean | null;
    last_sync_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type transactionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    description?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    receipt_image?: NullableStringFieldUpdateOperationsInput | string | null;
    is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    recurring_id?: NullableStringFieldUpdateOperationsInput | string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    local_id?: NullableStringFieldUpdateOperationsInput | string | null;
    is_synced?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_sync_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type transactionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    description?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    receipt_image?: NullableStringFieldUpdateOperationsInput | string | null;
    is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    recurring_id?: NullableStringFieldUpdateOperationsInput | string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    account_id?: StringFieldUpdateOperationsInput | string;
    to_account_id?: NullableStringFieldUpdateOperationsInput | string | null;
    category_id?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    local_id?: NullableStringFieldUpdateOperationsInput | string | null;
    is_synced?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_sync_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type usersCreateInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    avatar?: string | null;
    currency?: string | null;
    language?: string | null;
    timezone?: string | null;
    theme?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts?: accountsCreateNestedManyWithoutUsersInput;
    budgets?: budgetsCreateNestedManyWithoutUsersInput;
    categories?: categoriesCreateNestedManyWithoutUsersInput;
    goals?: goalsCreateNestedManyWithoutUsersInput;
    reminders?: remindersCreateNestedManyWithoutUsersInput;
    sync_states?: sync_statesCreateNestedOneWithoutUsersInput;
    transactions?: transactionsCreateNestedManyWithoutUsersInput;
  };

  export type usersUncheckedCreateInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    avatar?: string | null;
    currency?: string | null;
    language?: string | null;
    timezone?: string | null;
    theme?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts?: accountsUncheckedCreateNestedManyWithoutUsersInput;
    budgets?: budgetsUncheckedCreateNestedManyWithoutUsersInput;
    categories?: categoriesUncheckedCreateNestedManyWithoutUsersInput;
    goals?: goalsUncheckedCreateNestedManyWithoutUsersInput;
    reminders?: remindersUncheckedCreateNestedManyWithoutUsersInput;
    sync_states?: sync_statesUncheckedCreateNestedOneWithoutUsersInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput;
  };

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts?: accountsUpdateManyWithoutUsersNestedInput;
    budgets?: budgetsUpdateManyWithoutUsersNestedInput;
    categories?: categoriesUpdateManyWithoutUsersNestedInput;
    goals?: goalsUpdateManyWithoutUsersNestedInput;
    reminders?: remindersUpdateManyWithoutUsersNestedInput;
    sync_states?: sync_statesUpdateOneWithoutUsersNestedInput;
    transactions?: transactionsUpdateManyWithoutUsersNestedInput;
  };

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts?: accountsUncheckedUpdateManyWithoutUsersNestedInput;
    budgets?: budgetsUncheckedUpdateManyWithoutUsersNestedInput;
    categories?: categoriesUncheckedUpdateManyWithoutUsersNestedInput;
    goals?: goalsUncheckedUpdateManyWithoutUsersNestedInput;
    reminders?: remindersUncheckedUpdateManyWithoutUsersNestedInput;
    sync_states?: sync_statesUncheckedUpdateOneWithoutUsersNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput;
  };

  export type usersCreateManyInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    avatar?: string | null;
    currency?: string | null;
    language?: string | null;
    timezone?: string | null;
    theme?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type Enumaccount_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.account_type | Enumaccount_typeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.account_type[]
      | ListEnumaccount_typeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.account_type[]
      | ListEnumaccount_typeFieldRefInput<$PrismaModel>;
    not?: NestedEnumaccount_typeFilter<$PrismaModel> | $Enums.account_type;
  };

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput;
    isNot?: usersWhereInput;
  };

  export type GoalsListRelationFilter = {
    every?: goalsWhereInput;
    some?: goalsWhereInput;
    none?: goalsWhereInput;
  };

  export type TransactionsListRelationFilter = {
    every?: transactionsWhereInput;
    some?: transactionsWhereInput;
    none?: transactionsWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type goalsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type transactionsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type accountsCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    balance?: SortOrder;
    color?: SortOrder;
    icon?: SortOrder;
    is_active?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type accountsAvgOrderByAggregateInput = {
    balance?: SortOrder;
  };

  export type accountsMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    balance?: SortOrder;
    color?: SortOrder;
    icon?: SortOrder;
    is_active?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type accountsMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    balance?: SortOrder;
    color?: SortOrder;
    icon?: SortOrder;
    is_active?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type accountsSumOrderByAggregateInput = {
    balance?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type Enumaccount_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.account_type | Enumaccount_typeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.account_type[]
      | ListEnumaccount_typeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.account_type[]
      | ListEnumaccount_typeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumaccount_typeWithAggregatesFilter<$PrismaModel>
      | $Enums.account_type;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumaccount_typeFilter<$PrismaModel>;
    _max?: NestedEnumaccount_typeFilter<$PrismaModel>;
  };

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: NestedDecimalNullableFilter<$PrismaModel>;
    _min?: NestedDecimalNullableFilter<$PrismaModel>;
    _max?: NestedDecimalNullableFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type DecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type Enumbudget_periodNullableFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.budget_period
      | Enumbudget_periodFieldRefInput<$PrismaModel>
      | null;
    in?:
      | $Enums.budget_period[]
      | ListEnumbudget_periodFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | $Enums.budget_period[]
      | ListEnumbudget_periodFieldRefInput<$PrismaModel>
      | null;
    not?:
      | NestedEnumbudget_periodNullableFilter<$PrismaModel>
      | $Enums.budget_period
      | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type CategoriesNullableScalarRelationFilter = {
    is?: categoriesWhereInput | null;
    isNot?: categoriesWhereInput | null;
  };

  export type budgetsCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    amount?: SortOrder;
    period?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    spent?: SortOrder;
    alert_at?: SortOrder;
    category_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type budgetsAvgOrderByAggregateInput = {
    amount?: SortOrder;
    spent?: SortOrder;
    alert_at?: SortOrder;
  };

  export type budgetsMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    amount?: SortOrder;
    period?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    spent?: SortOrder;
    alert_at?: SortOrder;
    category_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type budgetsMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    amount?: SortOrder;
    period?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    spent?: SortOrder;
    alert_at?: SortOrder;
    category_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type budgetsSumOrderByAggregateInput = {
    amount?: SortOrder;
    spent?: SortOrder;
    alert_at?: SortOrder;
  };

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type Enumbudget_periodNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.budget_period
      | Enumbudget_periodFieldRefInput<$PrismaModel>
      | null;
    in?:
      | $Enums.budget_period[]
      | ListEnumbudget_periodFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | $Enums.budget_period[]
      | ListEnumbudget_periodFieldRefInput<$PrismaModel>
      | null;
    not?:
      | NestedEnumbudget_periodNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.budget_period
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumbudget_periodNullableFilter<$PrismaModel>;
    _max?: NestedEnumbudget_periodNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type Enumtransaction_typeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.transaction_type
      | Enumtransaction_typeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.transaction_type[]
      | ListEnumtransaction_typeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.transaction_type[]
      | ListEnumtransaction_typeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumtransaction_typeFilter<$PrismaModel>
      | $Enums.transaction_type;
  };

  export type BudgetsListRelationFilter = {
    every?: budgetsWhereInput;
    some?: budgetsWhereInput;
    none?: budgetsWhereInput;
  };

  export type CategoriesListRelationFilter = {
    every?: categoriesWhereInput;
    some?: categoriesWhereInput;
    none?: categoriesWhereInput;
  };

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null;
    isNot?: usersWhereInput | null;
  };

  export type budgetsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    color?: SortOrder;
    icon?: SortOrder;
    type?: SortOrder;
    parent_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    color?: SortOrder;
    icon?: SortOrder;
    type?: SortOrder;
    parent_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    color?: SortOrder;
    icon?: SortOrder;
    type?: SortOrder;
    parent_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type Enumtransaction_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.transaction_type
      | Enumtransaction_typeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.transaction_type[]
      | ListEnumtransaction_typeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.transaction_type[]
      | ListEnumtransaction_typeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumtransaction_typeWithAggregatesFilter<$PrismaModel>
      | $Enums.transaction_type;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumtransaction_typeFilter<$PrismaModel>;
    _max?: NestedEnumtransaction_typeFilter<$PrismaModel>;
  };

  export type AccountsNullableScalarRelationFilter = {
    is?: accountsWhereInput | null;
    isNot?: accountsWhereInput | null;
  };

  export type goalsCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    target?: SortOrder;
    current?: SortOrder;
    deadline?: SortOrder;
    color?: SortOrder;
    icon?: SortOrder;
    auto_transfer?: SortOrder;
    transfer_account_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type goalsAvgOrderByAggregateInput = {
    target?: SortOrder;
    current?: SortOrder;
  };

  export type goalsMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    target?: SortOrder;
    current?: SortOrder;
    deadline?: SortOrder;
    color?: SortOrder;
    icon?: SortOrder;
    auto_transfer?: SortOrder;
    transfer_account_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type goalsMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    target?: SortOrder;
    current?: SortOrder;
    deadline?: SortOrder;
    color?: SortOrder;
    icon?: SortOrder;
    auto_transfer?: SortOrder;
    transfer_account_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type goalsSumOrderByAggregateInput = {
    target?: SortOrder;
    current?: SortOrder;
  };
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, "path">
        >,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonNullableFilterBase<$PrismaModel>>, "path">
      >;

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type remindersCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    due_date?: SortOrder;
    is_completed?: SortOrder;
    is_recurring?: SortOrder;
    recurring_rule?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type remindersMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    due_date?: SortOrder;
    is_completed?: SortOrder;
    is_recurring?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type remindersMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    due_date?: SortOrder;
    is_completed?: SortOrder;
    is_recurring?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          "path"
        >
      >;

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedJsonNullableFilter<$PrismaModel>;
    _max?: NestedJsonNullableFilter<$PrismaModel>;
  };

  export type sync_statesCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    last_sync?: SortOrder;
    pending_ops?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type sync_statesMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    last_sync?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type sync_statesMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    last_sync?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type AccountsScalarRelationFilter = {
    is?: accountsWhereInput;
    isNot?: accountsWhereInput;
  };

  export type transactionsCountOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrder;
    date?: SortOrder;
    type?: SortOrder;
    notes?: SortOrder;
    location?: SortOrder;
    receipt_image?: SortOrder;
    is_recurring?: SortOrder;
    recurring_id?: SortOrder;
    recurring_rule?: SortOrder;
    account_id?: SortOrder;
    to_account_id?: SortOrder;
    category_id?: SortOrder;
    user_id?: SortOrder;
    local_id?: SortOrder;
    is_synced?: SortOrder;
    last_sync_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type transactionsAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type transactionsMaxOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrder;
    date?: SortOrder;
    type?: SortOrder;
    notes?: SortOrder;
    location?: SortOrder;
    receipt_image?: SortOrder;
    is_recurring?: SortOrder;
    recurring_id?: SortOrder;
    account_id?: SortOrder;
    to_account_id?: SortOrder;
    category_id?: SortOrder;
    user_id?: SortOrder;
    local_id?: SortOrder;
    is_synced?: SortOrder;
    last_sync_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type transactionsMinOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrder;
    date?: SortOrder;
    type?: SortOrder;
    notes?: SortOrder;
    location?: SortOrder;
    receipt_image?: SortOrder;
    is_recurring?: SortOrder;
    recurring_id?: SortOrder;
    account_id?: SortOrder;
    to_account_id?: SortOrder;
    category_id?: SortOrder;
    user_id?: SortOrder;
    local_id?: SortOrder;
    is_synced?: SortOrder;
    last_sync_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type transactionsSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type AccountsListRelationFilter = {
    every?: accountsWhereInput;
    some?: accountsWhereInput;
    none?: accountsWhereInput;
  };

  export type RemindersListRelationFilter = {
    every?: remindersWhereInput;
    some?: remindersWhereInput;
    none?: remindersWhereInput;
  };

  export type Sync_statesNullableScalarRelationFilter = {
    is?: sync_statesWhereInput | null;
    isNot?: sync_statesWhereInput | null;
  };

  export type accountsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type remindersOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
    avatar?: SortOrder;
    currency?: SortOrder;
    language?: SortOrder;
    timezone?: SortOrder;
    theme?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
    avatar?: SortOrder;
    currency?: SortOrder;
    language?: SortOrder;
    timezone?: SortOrder;
    theme?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
    avatar?: SortOrder;
    currency?: SortOrder;
    language?: SortOrder;
    timezone?: SortOrder;
    theme?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type usersCreateNestedOneWithoutAccountsInput = {
    create?: XOR<
      usersCreateWithoutAccountsInput,
      usersUncheckedCreateWithoutAccountsInput
    >;
    connectOrCreate?: usersCreateOrConnectWithoutAccountsInput;
    connect?: usersWhereUniqueInput;
  };

  export type goalsCreateNestedManyWithoutAccountsInput = {
    create?:
      | XOR<
          goalsCreateWithoutAccountsInput,
          goalsUncheckedCreateWithoutAccountsInput
        >
      | goalsCreateWithoutAccountsInput[]
      | goalsUncheckedCreateWithoutAccountsInput[];
    connectOrCreate?:
      | goalsCreateOrConnectWithoutAccountsInput
      | goalsCreateOrConnectWithoutAccountsInput[];
    createMany?: goalsCreateManyAccountsInputEnvelope;
    connect?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
  };

  export type transactionsCreateNestedManyWithoutAccounts_transactions_account_idToaccountsInput =
    {
      create?:
        | XOR<
            transactionsCreateWithoutAccounts_transactions_account_idToaccountsInput,
            transactionsUncheckedCreateWithoutAccounts_transactions_account_idToaccountsInput
          >
        | transactionsCreateWithoutAccounts_transactions_account_idToaccountsInput[]
        | transactionsUncheckedCreateWithoutAccounts_transactions_account_idToaccountsInput[];
      connectOrCreate?:
        | transactionsCreateOrConnectWithoutAccounts_transactions_account_idToaccountsInput
        | transactionsCreateOrConnectWithoutAccounts_transactions_account_idToaccountsInput[];
      createMany?: transactionsCreateManyAccounts_transactions_account_idToaccountsInputEnvelope;
      connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    };

  export type transactionsCreateNestedManyWithoutAccounts_transactions_to_account_idToaccountsInput =
    {
      create?:
        | XOR<
            transactionsCreateWithoutAccounts_transactions_to_account_idToaccountsInput,
            transactionsUncheckedCreateWithoutAccounts_transactions_to_account_idToaccountsInput
          >
        | transactionsCreateWithoutAccounts_transactions_to_account_idToaccountsInput[]
        | transactionsUncheckedCreateWithoutAccounts_transactions_to_account_idToaccountsInput[];
      connectOrCreate?:
        | transactionsCreateOrConnectWithoutAccounts_transactions_to_account_idToaccountsInput
        | transactionsCreateOrConnectWithoutAccounts_transactions_to_account_idToaccountsInput[];
      createMany?: transactionsCreateManyAccounts_transactions_to_account_idToaccountsInputEnvelope;
      connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    };

  export type goalsUncheckedCreateNestedManyWithoutAccountsInput = {
    create?:
      | XOR<
          goalsCreateWithoutAccountsInput,
          goalsUncheckedCreateWithoutAccountsInput
        >
      | goalsCreateWithoutAccountsInput[]
      | goalsUncheckedCreateWithoutAccountsInput[];
    connectOrCreate?:
      | goalsCreateOrConnectWithoutAccountsInput
      | goalsCreateOrConnectWithoutAccountsInput[];
    createMany?: goalsCreateManyAccountsInputEnvelope;
    connect?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
  };

  export type transactionsUncheckedCreateNestedManyWithoutAccounts_transactions_account_idToaccountsInput =
    {
      create?:
        | XOR<
            transactionsCreateWithoutAccounts_transactions_account_idToaccountsInput,
            transactionsUncheckedCreateWithoutAccounts_transactions_account_idToaccountsInput
          >
        | transactionsCreateWithoutAccounts_transactions_account_idToaccountsInput[]
        | transactionsUncheckedCreateWithoutAccounts_transactions_account_idToaccountsInput[];
      connectOrCreate?:
        | transactionsCreateOrConnectWithoutAccounts_transactions_account_idToaccountsInput
        | transactionsCreateOrConnectWithoutAccounts_transactions_account_idToaccountsInput[];
      createMany?: transactionsCreateManyAccounts_transactions_account_idToaccountsInputEnvelope;
      connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    };

  export type transactionsUncheckedCreateNestedManyWithoutAccounts_transactions_to_account_idToaccountsInput =
    {
      create?:
        | XOR<
            transactionsCreateWithoutAccounts_transactions_to_account_idToaccountsInput,
            transactionsUncheckedCreateWithoutAccounts_transactions_to_account_idToaccountsInput
          >
        | transactionsCreateWithoutAccounts_transactions_to_account_idToaccountsInput[]
        | transactionsUncheckedCreateWithoutAccounts_transactions_to_account_idToaccountsInput[];
      connectOrCreate?:
        | transactionsCreateOrConnectWithoutAccounts_transactions_to_account_idToaccountsInput
        | transactionsCreateOrConnectWithoutAccounts_transactions_to_account_idToaccountsInput[];
      createMany?: transactionsCreateManyAccounts_transactions_to_account_idToaccountsInputEnvelope;
      connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type Enumaccount_typeFieldUpdateOperationsInput = {
    set?: $Enums.account_type;
  };

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type usersUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<
      usersCreateWithoutAccountsInput,
      usersUncheckedCreateWithoutAccountsInput
    >;
    connectOrCreate?: usersCreateOrConnectWithoutAccountsInput;
    upsert?: usersUpsertWithoutAccountsInput;
    connect?: usersWhereUniqueInput;
    update?: XOR<
      XOR<
        usersUpdateToOneWithWhereWithoutAccountsInput,
        usersUpdateWithoutAccountsInput
      >,
      usersUncheckedUpdateWithoutAccountsInput
    >;
  };

  export type goalsUpdateManyWithoutAccountsNestedInput = {
    create?:
      | XOR<
          goalsCreateWithoutAccountsInput,
          goalsUncheckedCreateWithoutAccountsInput
        >
      | goalsCreateWithoutAccountsInput[]
      | goalsUncheckedCreateWithoutAccountsInput[];
    connectOrCreate?:
      | goalsCreateOrConnectWithoutAccountsInput
      | goalsCreateOrConnectWithoutAccountsInput[];
    upsert?:
      | goalsUpsertWithWhereUniqueWithoutAccountsInput
      | goalsUpsertWithWhereUniqueWithoutAccountsInput[];
    createMany?: goalsCreateManyAccountsInputEnvelope;
    set?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
    disconnect?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
    delete?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
    connect?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
    update?:
      | goalsUpdateWithWhereUniqueWithoutAccountsInput
      | goalsUpdateWithWhereUniqueWithoutAccountsInput[];
    updateMany?:
      | goalsUpdateManyWithWhereWithoutAccountsInput
      | goalsUpdateManyWithWhereWithoutAccountsInput[];
    deleteMany?: goalsScalarWhereInput | goalsScalarWhereInput[];
  };

  export type transactionsUpdateManyWithoutAccounts_transactions_account_idToaccountsNestedInput =
    {
      create?:
        | XOR<
            transactionsCreateWithoutAccounts_transactions_account_idToaccountsInput,
            transactionsUncheckedCreateWithoutAccounts_transactions_account_idToaccountsInput
          >
        | transactionsCreateWithoutAccounts_transactions_account_idToaccountsInput[]
        | transactionsUncheckedCreateWithoutAccounts_transactions_account_idToaccountsInput[];
      connectOrCreate?:
        | transactionsCreateOrConnectWithoutAccounts_transactions_account_idToaccountsInput
        | transactionsCreateOrConnectWithoutAccounts_transactions_account_idToaccountsInput[];
      upsert?:
        | transactionsUpsertWithWhereUniqueWithoutAccounts_transactions_account_idToaccountsInput
        | transactionsUpsertWithWhereUniqueWithoutAccounts_transactions_account_idToaccountsInput[];
      createMany?: transactionsCreateManyAccounts_transactions_account_idToaccountsInputEnvelope;
      set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      disconnect?:
        | transactionsWhereUniqueInput
        | transactionsWhereUniqueInput[];
      delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      update?:
        | transactionsUpdateWithWhereUniqueWithoutAccounts_transactions_account_idToaccountsInput
        | transactionsUpdateWithWhereUniqueWithoutAccounts_transactions_account_idToaccountsInput[];
      updateMany?:
        | transactionsUpdateManyWithWhereWithoutAccounts_transactions_account_idToaccountsInput
        | transactionsUpdateManyWithWhereWithoutAccounts_transactions_account_idToaccountsInput[];
      deleteMany?:
        | transactionsScalarWhereInput
        | transactionsScalarWhereInput[];
    };

  export type transactionsUpdateManyWithoutAccounts_transactions_to_account_idToaccountsNestedInput =
    {
      create?:
        | XOR<
            transactionsCreateWithoutAccounts_transactions_to_account_idToaccountsInput,
            transactionsUncheckedCreateWithoutAccounts_transactions_to_account_idToaccountsInput
          >
        | transactionsCreateWithoutAccounts_transactions_to_account_idToaccountsInput[]
        | transactionsUncheckedCreateWithoutAccounts_transactions_to_account_idToaccountsInput[];
      connectOrCreate?:
        | transactionsCreateOrConnectWithoutAccounts_transactions_to_account_idToaccountsInput
        | transactionsCreateOrConnectWithoutAccounts_transactions_to_account_idToaccountsInput[];
      upsert?:
        | transactionsUpsertWithWhereUniqueWithoutAccounts_transactions_to_account_idToaccountsInput
        | transactionsUpsertWithWhereUniqueWithoutAccounts_transactions_to_account_idToaccountsInput[];
      createMany?: transactionsCreateManyAccounts_transactions_to_account_idToaccountsInputEnvelope;
      set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      disconnect?:
        | transactionsWhereUniqueInput
        | transactionsWhereUniqueInput[];
      delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      update?:
        | transactionsUpdateWithWhereUniqueWithoutAccounts_transactions_to_account_idToaccountsInput
        | transactionsUpdateWithWhereUniqueWithoutAccounts_transactions_to_account_idToaccountsInput[];
      updateMany?:
        | transactionsUpdateManyWithWhereWithoutAccounts_transactions_to_account_idToaccountsInput
        | transactionsUpdateManyWithWhereWithoutAccounts_transactions_to_account_idToaccountsInput[];
      deleteMany?:
        | transactionsScalarWhereInput
        | transactionsScalarWhereInput[];
    };

  export type goalsUncheckedUpdateManyWithoutAccountsNestedInput = {
    create?:
      | XOR<
          goalsCreateWithoutAccountsInput,
          goalsUncheckedCreateWithoutAccountsInput
        >
      | goalsCreateWithoutAccountsInput[]
      | goalsUncheckedCreateWithoutAccountsInput[];
    connectOrCreate?:
      | goalsCreateOrConnectWithoutAccountsInput
      | goalsCreateOrConnectWithoutAccountsInput[];
    upsert?:
      | goalsUpsertWithWhereUniqueWithoutAccountsInput
      | goalsUpsertWithWhereUniqueWithoutAccountsInput[];
    createMany?: goalsCreateManyAccountsInputEnvelope;
    set?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
    disconnect?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
    delete?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
    connect?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
    update?:
      | goalsUpdateWithWhereUniqueWithoutAccountsInput
      | goalsUpdateWithWhereUniqueWithoutAccountsInput[];
    updateMany?:
      | goalsUpdateManyWithWhereWithoutAccountsInput
      | goalsUpdateManyWithWhereWithoutAccountsInput[];
    deleteMany?: goalsScalarWhereInput | goalsScalarWhereInput[];
  };

  export type transactionsUncheckedUpdateManyWithoutAccounts_transactions_account_idToaccountsNestedInput =
    {
      create?:
        | XOR<
            transactionsCreateWithoutAccounts_transactions_account_idToaccountsInput,
            transactionsUncheckedCreateWithoutAccounts_transactions_account_idToaccountsInput
          >
        | transactionsCreateWithoutAccounts_transactions_account_idToaccountsInput[]
        | transactionsUncheckedCreateWithoutAccounts_transactions_account_idToaccountsInput[];
      connectOrCreate?:
        | transactionsCreateOrConnectWithoutAccounts_transactions_account_idToaccountsInput
        | transactionsCreateOrConnectWithoutAccounts_transactions_account_idToaccountsInput[];
      upsert?:
        | transactionsUpsertWithWhereUniqueWithoutAccounts_transactions_account_idToaccountsInput
        | transactionsUpsertWithWhereUniqueWithoutAccounts_transactions_account_idToaccountsInput[];
      createMany?: transactionsCreateManyAccounts_transactions_account_idToaccountsInputEnvelope;
      set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      disconnect?:
        | transactionsWhereUniqueInput
        | transactionsWhereUniqueInput[];
      delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      update?:
        | transactionsUpdateWithWhereUniqueWithoutAccounts_transactions_account_idToaccountsInput
        | transactionsUpdateWithWhereUniqueWithoutAccounts_transactions_account_idToaccountsInput[];
      updateMany?:
        | transactionsUpdateManyWithWhereWithoutAccounts_transactions_account_idToaccountsInput
        | transactionsUpdateManyWithWhereWithoutAccounts_transactions_account_idToaccountsInput[];
      deleteMany?:
        | transactionsScalarWhereInput
        | transactionsScalarWhereInput[];
    };

  export type transactionsUncheckedUpdateManyWithoutAccounts_transactions_to_account_idToaccountsNestedInput =
    {
      create?:
        | XOR<
            transactionsCreateWithoutAccounts_transactions_to_account_idToaccountsInput,
            transactionsUncheckedCreateWithoutAccounts_transactions_to_account_idToaccountsInput
          >
        | transactionsCreateWithoutAccounts_transactions_to_account_idToaccountsInput[]
        | transactionsUncheckedCreateWithoutAccounts_transactions_to_account_idToaccountsInput[];
      connectOrCreate?:
        | transactionsCreateOrConnectWithoutAccounts_transactions_to_account_idToaccountsInput
        | transactionsCreateOrConnectWithoutAccounts_transactions_to_account_idToaccountsInput[];
      upsert?:
        | transactionsUpsertWithWhereUniqueWithoutAccounts_transactions_to_account_idToaccountsInput
        | transactionsUpsertWithWhereUniqueWithoutAccounts_transactions_to_account_idToaccountsInput[];
      createMany?: transactionsCreateManyAccounts_transactions_to_account_idToaccountsInputEnvelope;
      set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      disconnect?:
        | transactionsWhereUniqueInput
        | transactionsWhereUniqueInput[];
      delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
      update?:
        | transactionsUpdateWithWhereUniqueWithoutAccounts_transactions_to_account_idToaccountsInput
        | transactionsUpdateWithWhereUniqueWithoutAccounts_transactions_to_account_idToaccountsInput[];
      updateMany?:
        | transactionsUpdateManyWithWhereWithoutAccounts_transactions_to_account_idToaccountsInput
        | transactionsUpdateManyWithWhereWithoutAccounts_transactions_to_account_idToaccountsInput[];
      deleteMany?:
        | transactionsScalarWhereInput
        | transactionsScalarWhereInput[];
    };

  export type categoriesCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<
      categoriesCreateWithoutBudgetsInput,
      categoriesUncheckedCreateWithoutBudgetsInput
    >;
    connectOrCreate?: categoriesCreateOrConnectWithoutBudgetsInput;
    connect?: categoriesWhereUniqueInput;
  };

  export type usersCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<
      usersCreateWithoutBudgetsInput,
      usersUncheckedCreateWithoutBudgetsInput
    >;
    connectOrCreate?: usersCreateOrConnectWithoutBudgetsInput;
    connect?: usersWhereUniqueInput;
  };

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type NullableEnumbudget_periodFieldUpdateOperationsInput = {
    set?: $Enums.budget_period | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type categoriesUpdateOneWithoutBudgetsNestedInput = {
    create?: XOR<
      categoriesCreateWithoutBudgetsInput,
      categoriesUncheckedCreateWithoutBudgetsInput
    >;
    connectOrCreate?: categoriesCreateOrConnectWithoutBudgetsInput;
    upsert?: categoriesUpsertWithoutBudgetsInput;
    disconnect?: categoriesWhereInput | boolean;
    delete?: categoriesWhereInput | boolean;
    connect?: categoriesWhereUniqueInput;
    update?: XOR<
      XOR<
        categoriesUpdateToOneWithWhereWithoutBudgetsInput,
        categoriesUpdateWithoutBudgetsInput
      >,
      categoriesUncheckedUpdateWithoutBudgetsInput
    >;
  };

  export type usersUpdateOneRequiredWithoutBudgetsNestedInput = {
    create?: XOR<
      usersCreateWithoutBudgetsInput,
      usersUncheckedCreateWithoutBudgetsInput
    >;
    connectOrCreate?: usersCreateOrConnectWithoutBudgetsInput;
    upsert?: usersUpsertWithoutBudgetsInput;
    connect?: usersWhereUniqueInput;
    update?: XOR<
      XOR<
        usersUpdateToOneWithWhereWithoutBudgetsInput,
        usersUpdateWithoutBudgetsInput
      >,
      usersUncheckedUpdateWithoutBudgetsInput
    >;
  };

  export type budgetsCreateNestedManyWithoutCategoriesInput = {
    create?:
      | XOR<
          budgetsCreateWithoutCategoriesInput,
          budgetsUncheckedCreateWithoutCategoriesInput
        >
      | budgetsCreateWithoutCategoriesInput[]
      | budgetsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | budgetsCreateOrConnectWithoutCategoriesInput
      | budgetsCreateOrConnectWithoutCategoriesInput[];
    createMany?: budgetsCreateManyCategoriesInputEnvelope;
    connect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
  };

  export type categoriesCreateNestedOneWithoutOther_categoriesInput = {
    create?: XOR<
      categoriesCreateWithoutOther_categoriesInput,
      categoriesUncheckedCreateWithoutOther_categoriesInput
    >;
    connectOrCreate?: categoriesCreateOrConnectWithoutOther_categoriesInput;
    connect?: categoriesWhereUniqueInput;
  };

  export type categoriesCreateNestedManyWithoutCategoriesInput = {
    create?:
      | XOR<
          categoriesCreateWithoutCategoriesInput,
          categoriesUncheckedCreateWithoutCategoriesInput
        >
      | categoriesCreateWithoutCategoriesInput[]
      | categoriesUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | categoriesCreateOrConnectWithoutCategoriesInput
      | categoriesCreateOrConnectWithoutCategoriesInput[];
    createMany?: categoriesCreateManyCategoriesInputEnvelope;
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
  };

  export type usersCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<
      usersCreateWithoutCategoriesInput,
      usersUncheckedCreateWithoutCategoriesInput
    >;
    connectOrCreate?: usersCreateOrConnectWithoutCategoriesInput;
    connect?: usersWhereUniqueInput;
  };

  export type transactionsCreateNestedManyWithoutCategoriesInput = {
    create?:
      | XOR<
          transactionsCreateWithoutCategoriesInput,
          transactionsUncheckedCreateWithoutCategoriesInput
        >
      | transactionsCreateWithoutCategoriesInput[]
      | transactionsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutCategoriesInput
      | transactionsCreateOrConnectWithoutCategoriesInput[];
    createMany?: transactionsCreateManyCategoriesInputEnvelope;
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
  };

  export type budgetsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?:
      | XOR<
          budgetsCreateWithoutCategoriesInput,
          budgetsUncheckedCreateWithoutCategoriesInput
        >
      | budgetsCreateWithoutCategoriesInput[]
      | budgetsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | budgetsCreateOrConnectWithoutCategoriesInput
      | budgetsCreateOrConnectWithoutCategoriesInput[];
    createMany?: budgetsCreateManyCategoriesInputEnvelope;
    connect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
  };

  export type categoriesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?:
      | XOR<
          categoriesCreateWithoutCategoriesInput,
          categoriesUncheckedCreateWithoutCategoriesInput
        >
      | categoriesCreateWithoutCategoriesInput[]
      | categoriesUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | categoriesCreateOrConnectWithoutCategoriesInput
      | categoriesCreateOrConnectWithoutCategoriesInput[];
    createMany?: categoriesCreateManyCategoriesInputEnvelope;
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
  };

  export type transactionsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?:
      | XOR<
          transactionsCreateWithoutCategoriesInput,
          transactionsUncheckedCreateWithoutCategoriesInput
        >
      | transactionsCreateWithoutCategoriesInput[]
      | transactionsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutCategoriesInput
      | transactionsCreateOrConnectWithoutCategoriesInput[];
    createMany?: transactionsCreateManyCategoriesInputEnvelope;
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
  };

  export type Enumtransaction_typeFieldUpdateOperationsInput = {
    set?: $Enums.transaction_type;
  };

  export type budgetsUpdateManyWithoutCategoriesNestedInput = {
    create?:
      | XOR<
          budgetsCreateWithoutCategoriesInput,
          budgetsUncheckedCreateWithoutCategoriesInput
        >
      | budgetsCreateWithoutCategoriesInput[]
      | budgetsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | budgetsCreateOrConnectWithoutCategoriesInput
      | budgetsCreateOrConnectWithoutCategoriesInput[];
    upsert?:
      | budgetsUpsertWithWhereUniqueWithoutCategoriesInput
      | budgetsUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: budgetsCreateManyCategoriesInputEnvelope;
    set?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
    disconnect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
    delete?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
    connect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
    update?:
      | budgetsUpdateWithWhereUniqueWithoutCategoriesInput
      | budgetsUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?:
      | budgetsUpdateManyWithWhereWithoutCategoriesInput
      | budgetsUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: budgetsScalarWhereInput | budgetsScalarWhereInput[];
  };

  export type categoriesUpdateOneWithoutOther_categoriesNestedInput = {
    create?: XOR<
      categoriesCreateWithoutOther_categoriesInput,
      categoriesUncheckedCreateWithoutOther_categoriesInput
    >;
    connectOrCreate?: categoriesCreateOrConnectWithoutOther_categoriesInput;
    upsert?: categoriesUpsertWithoutOther_categoriesInput;
    disconnect?: categoriesWhereInput | boolean;
    delete?: categoriesWhereInput | boolean;
    connect?: categoriesWhereUniqueInput;
    update?: XOR<
      XOR<
        categoriesUpdateToOneWithWhereWithoutOther_categoriesInput,
        categoriesUpdateWithoutOther_categoriesInput
      >,
      categoriesUncheckedUpdateWithoutOther_categoriesInput
    >;
  };

  export type categoriesUpdateManyWithoutCategoriesNestedInput = {
    create?:
      | XOR<
          categoriesCreateWithoutCategoriesInput,
          categoriesUncheckedCreateWithoutCategoriesInput
        >
      | categoriesCreateWithoutCategoriesInput[]
      | categoriesUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | categoriesCreateOrConnectWithoutCategoriesInput
      | categoriesCreateOrConnectWithoutCategoriesInput[];
    upsert?:
      | categoriesUpsertWithWhereUniqueWithoutCategoriesInput
      | categoriesUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: categoriesCreateManyCategoriesInputEnvelope;
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    update?:
      | categoriesUpdateWithWhereUniqueWithoutCategoriesInput
      | categoriesUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?:
      | categoriesUpdateManyWithWhereWithoutCategoriesInput
      | categoriesUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[];
  };

  export type usersUpdateOneWithoutCategoriesNestedInput = {
    create?: XOR<
      usersCreateWithoutCategoriesInput,
      usersUncheckedCreateWithoutCategoriesInput
    >;
    connectOrCreate?: usersCreateOrConnectWithoutCategoriesInput;
    upsert?: usersUpsertWithoutCategoriesInput;
    disconnect?: usersWhereInput | boolean;
    delete?: usersWhereInput | boolean;
    connect?: usersWhereUniqueInput;
    update?: XOR<
      XOR<
        usersUpdateToOneWithWhereWithoutCategoriesInput,
        usersUpdateWithoutCategoriesInput
      >,
      usersUncheckedUpdateWithoutCategoriesInput
    >;
  };

  export type transactionsUpdateManyWithoutCategoriesNestedInput = {
    create?:
      | XOR<
          transactionsCreateWithoutCategoriesInput,
          transactionsUncheckedCreateWithoutCategoriesInput
        >
      | transactionsCreateWithoutCategoriesInput[]
      | transactionsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutCategoriesInput
      | transactionsCreateOrConnectWithoutCategoriesInput[];
    upsert?:
      | transactionsUpsertWithWhereUniqueWithoutCategoriesInput
      | transactionsUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: transactionsCreateManyCategoriesInputEnvelope;
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    update?:
      | transactionsUpdateWithWhereUniqueWithoutCategoriesInput
      | transactionsUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?:
      | transactionsUpdateManyWithWhereWithoutCategoriesInput
      | transactionsUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
  };

  export type budgetsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?:
      | XOR<
          budgetsCreateWithoutCategoriesInput,
          budgetsUncheckedCreateWithoutCategoriesInput
        >
      | budgetsCreateWithoutCategoriesInput[]
      | budgetsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | budgetsCreateOrConnectWithoutCategoriesInput
      | budgetsCreateOrConnectWithoutCategoriesInput[];
    upsert?:
      | budgetsUpsertWithWhereUniqueWithoutCategoriesInput
      | budgetsUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: budgetsCreateManyCategoriesInputEnvelope;
    set?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
    disconnect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
    delete?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
    connect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
    update?:
      | budgetsUpdateWithWhereUniqueWithoutCategoriesInput
      | budgetsUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?:
      | budgetsUpdateManyWithWhereWithoutCategoriesInput
      | budgetsUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: budgetsScalarWhereInput | budgetsScalarWhereInput[];
  };

  export type categoriesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?:
      | XOR<
          categoriesCreateWithoutCategoriesInput,
          categoriesUncheckedCreateWithoutCategoriesInput
        >
      | categoriesCreateWithoutCategoriesInput[]
      | categoriesUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | categoriesCreateOrConnectWithoutCategoriesInput
      | categoriesCreateOrConnectWithoutCategoriesInput[];
    upsert?:
      | categoriesUpsertWithWhereUniqueWithoutCategoriesInput
      | categoriesUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: categoriesCreateManyCategoriesInputEnvelope;
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    update?:
      | categoriesUpdateWithWhereUniqueWithoutCategoriesInput
      | categoriesUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?:
      | categoriesUpdateManyWithWhereWithoutCategoriesInput
      | categoriesUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[];
  };

  export type transactionsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?:
      | XOR<
          transactionsCreateWithoutCategoriesInput,
          transactionsUncheckedCreateWithoutCategoriesInput
        >
      | transactionsCreateWithoutCategoriesInput[]
      | transactionsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutCategoriesInput
      | transactionsCreateOrConnectWithoutCategoriesInput[];
    upsert?:
      | transactionsUpsertWithWhereUniqueWithoutCategoriesInput
      | transactionsUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: transactionsCreateManyCategoriesInputEnvelope;
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    update?:
      | transactionsUpdateWithWhereUniqueWithoutCategoriesInput
      | transactionsUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?:
      | transactionsUpdateManyWithWhereWithoutCategoriesInput
      | transactionsUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
  };

  export type accountsCreateNestedOneWithoutGoalsInput = {
    create?: XOR<
      accountsCreateWithoutGoalsInput,
      accountsUncheckedCreateWithoutGoalsInput
    >;
    connectOrCreate?: accountsCreateOrConnectWithoutGoalsInput;
    connect?: accountsWhereUniqueInput;
  };

  export type usersCreateNestedOneWithoutGoalsInput = {
    create?: XOR<
      usersCreateWithoutGoalsInput,
      usersUncheckedCreateWithoutGoalsInput
    >;
    connectOrCreate?: usersCreateOrConnectWithoutGoalsInput;
    connect?: usersWhereUniqueInput;
  };

  export type accountsUpdateOneWithoutGoalsNestedInput = {
    create?: XOR<
      accountsCreateWithoutGoalsInput,
      accountsUncheckedCreateWithoutGoalsInput
    >;
    connectOrCreate?: accountsCreateOrConnectWithoutGoalsInput;
    upsert?: accountsUpsertWithoutGoalsInput;
    disconnect?: accountsWhereInput | boolean;
    delete?: accountsWhereInput | boolean;
    connect?: accountsWhereUniqueInput;
    update?: XOR<
      XOR<
        accountsUpdateToOneWithWhereWithoutGoalsInput,
        accountsUpdateWithoutGoalsInput
      >,
      accountsUncheckedUpdateWithoutGoalsInput
    >;
  };

  export type usersUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<
      usersCreateWithoutGoalsInput,
      usersUncheckedCreateWithoutGoalsInput
    >;
    connectOrCreate?: usersCreateOrConnectWithoutGoalsInput;
    upsert?: usersUpsertWithoutGoalsInput;
    connect?: usersWhereUniqueInput;
    update?: XOR<
      XOR<
        usersUpdateToOneWithWhereWithoutGoalsInput,
        usersUpdateWithoutGoalsInput
      >,
      usersUncheckedUpdateWithoutGoalsInput
    >;
  };

  export type usersCreateNestedOneWithoutRemindersInput = {
    create?: XOR<
      usersCreateWithoutRemindersInput,
      usersUncheckedCreateWithoutRemindersInput
    >;
    connectOrCreate?: usersCreateOrConnectWithoutRemindersInput;
    connect?: usersWhereUniqueInput;
  };

  export type usersUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<
      usersCreateWithoutRemindersInput,
      usersUncheckedCreateWithoutRemindersInput
    >;
    connectOrCreate?: usersCreateOrConnectWithoutRemindersInput;
    upsert?: usersUpsertWithoutRemindersInput;
    connect?: usersWhereUniqueInput;
    update?: XOR<
      XOR<
        usersUpdateToOneWithWhereWithoutRemindersInput,
        usersUpdateWithoutRemindersInput
      >,
      usersUncheckedUpdateWithoutRemindersInput
    >;
  };

  export type usersCreateNestedOneWithoutSync_statesInput = {
    create?: XOR<
      usersCreateWithoutSync_statesInput,
      usersUncheckedCreateWithoutSync_statesInput
    >;
    connectOrCreate?: usersCreateOrConnectWithoutSync_statesInput;
    connect?: usersWhereUniqueInput;
  };

  export type usersUpdateOneRequiredWithoutSync_statesNestedInput = {
    create?: XOR<
      usersCreateWithoutSync_statesInput,
      usersUncheckedCreateWithoutSync_statesInput
    >;
    connectOrCreate?: usersCreateOrConnectWithoutSync_statesInput;
    upsert?: usersUpsertWithoutSync_statesInput;
    connect?: usersWhereUniqueInput;
    update?: XOR<
      XOR<
        usersUpdateToOneWithWhereWithoutSync_statesInput,
        usersUpdateWithoutSync_statesInput
      >,
      usersUncheckedUpdateWithoutSync_statesInput
    >;
  };

  export type accountsCreateNestedOneWithoutTransactions_transactions_account_idToaccountsInput =
    {
      create?: XOR<
        accountsCreateWithoutTransactions_transactions_account_idToaccountsInput,
        accountsUncheckedCreateWithoutTransactions_transactions_account_idToaccountsInput
      >;
      connectOrCreate?: accountsCreateOrConnectWithoutTransactions_transactions_account_idToaccountsInput;
      connect?: accountsWhereUniqueInput;
    };

  export type categoriesCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<
      categoriesCreateWithoutTransactionsInput,
      categoriesUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: categoriesCreateOrConnectWithoutTransactionsInput;
    connect?: categoriesWhereUniqueInput;
  };

  export type accountsCreateNestedOneWithoutTransactions_transactions_to_account_idToaccountsInput =
    {
      create?: XOR<
        accountsCreateWithoutTransactions_transactions_to_account_idToaccountsInput,
        accountsUncheckedCreateWithoutTransactions_transactions_to_account_idToaccountsInput
      >;
      connectOrCreate?: accountsCreateOrConnectWithoutTransactions_transactions_to_account_idToaccountsInput;
      connect?: accountsWhereUniqueInput;
    };

  export type usersCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<
      usersCreateWithoutTransactionsInput,
      usersUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput;
    connect?: usersWhereUniqueInput;
  };

  export type accountsUpdateOneRequiredWithoutTransactions_transactions_account_idToaccountsNestedInput =
    {
      create?: XOR<
        accountsCreateWithoutTransactions_transactions_account_idToaccountsInput,
        accountsUncheckedCreateWithoutTransactions_transactions_account_idToaccountsInput
      >;
      connectOrCreate?: accountsCreateOrConnectWithoutTransactions_transactions_account_idToaccountsInput;
      upsert?: accountsUpsertWithoutTransactions_transactions_account_idToaccountsInput;
      connect?: accountsWhereUniqueInput;
      update?: XOR<
        XOR<
          accountsUpdateToOneWithWhereWithoutTransactions_transactions_account_idToaccountsInput,
          accountsUpdateWithoutTransactions_transactions_account_idToaccountsInput
        >,
        accountsUncheckedUpdateWithoutTransactions_transactions_account_idToaccountsInput
      >;
    };

  export type categoriesUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<
      categoriesCreateWithoutTransactionsInput,
      categoriesUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: categoriesCreateOrConnectWithoutTransactionsInput;
    upsert?: categoriesUpsertWithoutTransactionsInput;
    disconnect?: categoriesWhereInput | boolean;
    delete?: categoriesWhereInput | boolean;
    connect?: categoriesWhereUniqueInput;
    update?: XOR<
      XOR<
        categoriesUpdateToOneWithWhereWithoutTransactionsInput,
        categoriesUpdateWithoutTransactionsInput
      >,
      categoriesUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type accountsUpdateOneWithoutTransactions_transactions_to_account_idToaccountsNestedInput =
    {
      create?: XOR<
        accountsCreateWithoutTransactions_transactions_to_account_idToaccountsInput,
        accountsUncheckedCreateWithoutTransactions_transactions_to_account_idToaccountsInput
      >;
      connectOrCreate?: accountsCreateOrConnectWithoutTransactions_transactions_to_account_idToaccountsInput;
      upsert?: accountsUpsertWithoutTransactions_transactions_to_account_idToaccountsInput;
      disconnect?: accountsWhereInput | boolean;
      delete?: accountsWhereInput | boolean;
      connect?: accountsWhereUniqueInput;
      update?: XOR<
        XOR<
          accountsUpdateToOneWithWhereWithoutTransactions_transactions_to_account_idToaccountsInput,
          accountsUpdateWithoutTransactions_transactions_to_account_idToaccountsInput
        >,
        accountsUncheckedUpdateWithoutTransactions_transactions_to_account_idToaccountsInput
      >;
    };

  export type usersUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<
      usersCreateWithoutTransactionsInput,
      usersUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput;
    upsert?: usersUpsertWithoutTransactionsInput;
    connect?: usersWhereUniqueInput;
    update?: XOR<
      XOR<
        usersUpdateToOneWithWhereWithoutTransactionsInput,
        usersUpdateWithoutTransactionsInput
      >,
      usersUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type accountsCreateNestedManyWithoutUsersInput = {
    create?:
      | XOR<
          accountsCreateWithoutUsersInput,
          accountsUncheckedCreateWithoutUsersInput
        >
      | accountsCreateWithoutUsersInput[]
      | accountsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | accountsCreateOrConnectWithoutUsersInput
      | accountsCreateOrConnectWithoutUsersInput[];
    createMany?: accountsCreateManyUsersInputEnvelope;
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[];
  };

  export type budgetsCreateNestedManyWithoutUsersInput = {
    create?:
      | XOR<
          budgetsCreateWithoutUsersInput,
          budgetsUncheckedCreateWithoutUsersInput
        >
      | budgetsCreateWithoutUsersInput[]
      | budgetsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | budgetsCreateOrConnectWithoutUsersInput
      | budgetsCreateOrConnectWithoutUsersInput[];
    createMany?: budgetsCreateManyUsersInputEnvelope;
    connect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
  };

  export type categoriesCreateNestedManyWithoutUsersInput = {
    create?:
      | XOR<
          categoriesCreateWithoutUsersInput,
          categoriesUncheckedCreateWithoutUsersInput
        >
      | categoriesCreateWithoutUsersInput[]
      | categoriesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | categoriesCreateOrConnectWithoutUsersInput
      | categoriesCreateOrConnectWithoutUsersInput[];
    createMany?: categoriesCreateManyUsersInputEnvelope;
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
  };

  export type goalsCreateNestedManyWithoutUsersInput = {
    create?:
      | XOR<goalsCreateWithoutUsersInput, goalsUncheckedCreateWithoutUsersInput>
      | goalsCreateWithoutUsersInput[]
      | goalsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | goalsCreateOrConnectWithoutUsersInput
      | goalsCreateOrConnectWithoutUsersInput[];
    createMany?: goalsCreateManyUsersInputEnvelope;
    connect?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
  };

  export type remindersCreateNestedManyWithoutUsersInput = {
    create?:
      | XOR<
          remindersCreateWithoutUsersInput,
          remindersUncheckedCreateWithoutUsersInput
        >
      | remindersCreateWithoutUsersInput[]
      | remindersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | remindersCreateOrConnectWithoutUsersInput
      | remindersCreateOrConnectWithoutUsersInput[];
    createMany?: remindersCreateManyUsersInputEnvelope;
    connect?: remindersWhereUniqueInput | remindersWhereUniqueInput[];
  };

  export type sync_statesCreateNestedOneWithoutUsersInput = {
    create?: XOR<
      sync_statesCreateWithoutUsersInput,
      sync_statesUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: sync_statesCreateOrConnectWithoutUsersInput;
    connect?: sync_statesWhereUniqueInput;
  };

  export type transactionsCreateNestedManyWithoutUsersInput = {
    create?:
      | XOR<
          transactionsCreateWithoutUsersInput,
          transactionsUncheckedCreateWithoutUsersInput
        >
      | transactionsCreateWithoutUsersInput[]
      | transactionsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutUsersInput
      | transactionsCreateOrConnectWithoutUsersInput[];
    createMany?: transactionsCreateManyUsersInputEnvelope;
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
  };

  export type accountsUncheckedCreateNestedManyWithoutUsersInput = {
    create?:
      | XOR<
          accountsCreateWithoutUsersInput,
          accountsUncheckedCreateWithoutUsersInput
        >
      | accountsCreateWithoutUsersInput[]
      | accountsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | accountsCreateOrConnectWithoutUsersInput
      | accountsCreateOrConnectWithoutUsersInput[];
    createMany?: accountsCreateManyUsersInputEnvelope;
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[];
  };

  export type budgetsUncheckedCreateNestedManyWithoutUsersInput = {
    create?:
      | XOR<
          budgetsCreateWithoutUsersInput,
          budgetsUncheckedCreateWithoutUsersInput
        >
      | budgetsCreateWithoutUsersInput[]
      | budgetsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | budgetsCreateOrConnectWithoutUsersInput
      | budgetsCreateOrConnectWithoutUsersInput[];
    createMany?: budgetsCreateManyUsersInputEnvelope;
    connect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
  };

  export type categoriesUncheckedCreateNestedManyWithoutUsersInput = {
    create?:
      | XOR<
          categoriesCreateWithoutUsersInput,
          categoriesUncheckedCreateWithoutUsersInput
        >
      | categoriesCreateWithoutUsersInput[]
      | categoriesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | categoriesCreateOrConnectWithoutUsersInput
      | categoriesCreateOrConnectWithoutUsersInput[];
    createMany?: categoriesCreateManyUsersInputEnvelope;
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
  };

  export type goalsUncheckedCreateNestedManyWithoutUsersInput = {
    create?:
      | XOR<goalsCreateWithoutUsersInput, goalsUncheckedCreateWithoutUsersInput>
      | goalsCreateWithoutUsersInput[]
      | goalsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | goalsCreateOrConnectWithoutUsersInput
      | goalsCreateOrConnectWithoutUsersInput[];
    createMany?: goalsCreateManyUsersInputEnvelope;
    connect?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
  };

  export type remindersUncheckedCreateNestedManyWithoutUsersInput = {
    create?:
      | XOR<
          remindersCreateWithoutUsersInput,
          remindersUncheckedCreateWithoutUsersInput
        >
      | remindersCreateWithoutUsersInput[]
      | remindersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | remindersCreateOrConnectWithoutUsersInput
      | remindersCreateOrConnectWithoutUsersInput[];
    createMany?: remindersCreateManyUsersInputEnvelope;
    connect?: remindersWhereUniqueInput | remindersWhereUniqueInput[];
  };

  export type sync_statesUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<
      sync_statesCreateWithoutUsersInput,
      sync_statesUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: sync_statesCreateOrConnectWithoutUsersInput;
    connect?: sync_statesWhereUniqueInput;
  };

  export type transactionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?:
      | XOR<
          transactionsCreateWithoutUsersInput,
          transactionsUncheckedCreateWithoutUsersInput
        >
      | transactionsCreateWithoutUsersInput[]
      | transactionsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutUsersInput
      | transactionsCreateOrConnectWithoutUsersInput[];
    createMany?: transactionsCreateManyUsersInputEnvelope;
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
  };

  export type accountsUpdateManyWithoutUsersNestedInput = {
    create?:
      | XOR<
          accountsCreateWithoutUsersInput,
          accountsUncheckedCreateWithoutUsersInput
        >
      | accountsCreateWithoutUsersInput[]
      | accountsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | accountsCreateOrConnectWithoutUsersInput
      | accountsCreateOrConnectWithoutUsersInput[];
    upsert?:
      | accountsUpsertWithWhereUniqueWithoutUsersInput
      | accountsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: accountsCreateManyUsersInputEnvelope;
    set?: accountsWhereUniqueInput | accountsWhereUniqueInput[];
    disconnect?: accountsWhereUniqueInput | accountsWhereUniqueInput[];
    delete?: accountsWhereUniqueInput | accountsWhereUniqueInput[];
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[];
    update?:
      | accountsUpdateWithWhereUniqueWithoutUsersInput
      | accountsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?:
      | accountsUpdateManyWithWhereWithoutUsersInput
      | accountsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: accountsScalarWhereInput | accountsScalarWhereInput[];
  };

  export type budgetsUpdateManyWithoutUsersNestedInput = {
    create?:
      | XOR<
          budgetsCreateWithoutUsersInput,
          budgetsUncheckedCreateWithoutUsersInput
        >
      | budgetsCreateWithoutUsersInput[]
      | budgetsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | budgetsCreateOrConnectWithoutUsersInput
      | budgetsCreateOrConnectWithoutUsersInput[];
    upsert?:
      | budgetsUpsertWithWhereUniqueWithoutUsersInput
      | budgetsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: budgetsCreateManyUsersInputEnvelope;
    set?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
    disconnect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
    delete?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
    connect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
    update?:
      | budgetsUpdateWithWhereUniqueWithoutUsersInput
      | budgetsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?:
      | budgetsUpdateManyWithWhereWithoutUsersInput
      | budgetsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: budgetsScalarWhereInput | budgetsScalarWhereInput[];
  };

  export type categoriesUpdateManyWithoutUsersNestedInput = {
    create?:
      | XOR<
          categoriesCreateWithoutUsersInput,
          categoriesUncheckedCreateWithoutUsersInput
        >
      | categoriesCreateWithoutUsersInput[]
      | categoriesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | categoriesCreateOrConnectWithoutUsersInput
      | categoriesCreateOrConnectWithoutUsersInput[];
    upsert?:
      | categoriesUpsertWithWhereUniqueWithoutUsersInput
      | categoriesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: categoriesCreateManyUsersInputEnvelope;
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    update?:
      | categoriesUpdateWithWhereUniqueWithoutUsersInput
      | categoriesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?:
      | categoriesUpdateManyWithWhereWithoutUsersInput
      | categoriesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[];
  };

  export type goalsUpdateManyWithoutUsersNestedInput = {
    create?:
      | XOR<goalsCreateWithoutUsersInput, goalsUncheckedCreateWithoutUsersInput>
      | goalsCreateWithoutUsersInput[]
      | goalsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | goalsCreateOrConnectWithoutUsersInput
      | goalsCreateOrConnectWithoutUsersInput[];
    upsert?:
      | goalsUpsertWithWhereUniqueWithoutUsersInput
      | goalsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: goalsCreateManyUsersInputEnvelope;
    set?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
    disconnect?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
    delete?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
    connect?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
    update?:
      | goalsUpdateWithWhereUniqueWithoutUsersInput
      | goalsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?:
      | goalsUpdateManyWithWhereWithoutUsersInput
      | goalsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: goalsScalarWhereInput | goalsScalarWhereInput[];
  };

  export type remindersUpdateManyWithoutUsersNestedInput = {
    create?:
      | XOR<
          remindersCreateWithoutUsersInput,
          remindersUncheckedCreateWithoutUsersInput
        >
      | remindersCreateWithoutUsersInput[]
      | remindersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | remindersCreateOrConnectWithoutUsersInput
      | remindersCreateOrConnectWithoutUsersInput[];
    upsert?:
      | remindersUpsertWithWhereUniqueWithoutUsersInput
      | remindersUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: remindersCreateManyUsersInputEnvelope;
    set?: remindersWhereUniqueInput | remindersWhereUniqueInput[];
    disconnect?: remindersWhereUniqueInput | remindersWhereUniqueInput[];
    delete?: remindersWhereUniqueInput | remindersWhereUniqueInput[];
    connect?: remindersWhereUniqueInput | remindersWhereUniqueInput[];
    update?:
      | remindersUpdateWithWhereUniqueWithoutUsersInput
      | remindersUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?:
      | remindersUpdateManyWithWhereWithoutUsersInput
      | remindersUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: remindersScalarWhereInput | remindersScalarWhereInput[];
  };

  export type sync_statesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<
      sync_statesCreateWithoutUsersInput,
      sync_statesUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: sync_statesCreateOrConnectWithoutUsersInput;
    upsert?: sync_statesUpsertWithoutUsersInput;
    disconnect?: sync_statesWhereInput | boolean;
    delete?: sync_statesWhereInput | boolean;
    connect?: sync_statesWhereUniqueInput;
    update?: XOR<
      XOR<
        sync_statesUpdateToOneWithWhereWithoutUsersInput,
        sync_statesUpdateWithoutUsersInput
      >,
      sync_statesUncheckedUpdateWithoutUsersInput
    >;
  };

  export type transactionsUpdateManyWithoutUsersNestedInput = {
    create?:
      | XOR<
          transactionsCreateWithoutUsersInput,
          transactionsUncheckedCreateWithoutUsersInput
        >
      | transactionsCreateWithoutUsersInput[]
      | transactionsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutUsersInput
      | transactionsCreateOrConnectWithoutUsersInput[];
    upsert?:
      | transactionsUpsertWithWhereUniqueWithoutUsersInput
      | transactionsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: transactionsCreateManyUsersInputEnvelope;
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    update?:
      | transactionsUpdateWithWhereUniqueWithoutUsersInput
      | transactionsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?:
      | transactionsUpdateManyWithWhereWithoutUsersInput
      | transactionsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
  };

  export type accountsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?:
      | XOR<
          accountsCreateWithoutUsersInput,
          accountsUncheckedCreateWithoutUsersInput
        >
      | accountsCreateWithoutUsersInput[]
      | accountsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | accountsCreateOrConnectWithoutUsersInput
      | accountsCreateOrConnectWithoutUsersInput[];
    upsert?:
      | accountsUpsertWithWhereUniqueWithoutUsersInput
      | accountsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: accountsCreateManyUsersInputEnvelope;
    set?: accountsWhereUniqueInput | accountsWhereUniqueInput[];
    disconnect?: accountsWhereUniqueInput | accountsWhereUniqueInput[];
    delete?: accountsWhereUniqueInput | accountsWhereUniqueInput[];
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[];
    update?:
      | accountsUpdateWithWhereUniqueWithoutUsersInput
      | accountsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?:
      | accountsUpdateManyWithWhereWithoutUsersInput
      | accountsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: accountsScalarWhereInput | accountsScalarWhereInput[];
  };

  export type budgetsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?:
      | XOR<
          budgetsCreateWithoutUsersInput,
          budgetsUncheckedCreateWithoutUsersInput
        >
      | budgetsCreateWithoutUsersInput[]
      | budgetsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | budgetsCreateOrConnectWithoutUsersInput
      | budgetsCreateOrConnectWithoutUsersInput[];
    upsert?:
      | budgetsUpsertWithWhereUniqueWithoutUsersInput
      | budgetsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: budgetsCreateManyUsersInputEnvelope;
    set?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
    disconnect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
    delete?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
    connect?: budgetsWhereUniqueInput | budgetsWhereUniqueInput[];
    update?:
      | budgetsUpdateWithWhereUniqueWithoutUsersInput
      | budgetsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?:
      | budgetsUpdateManyWithWhereWithoutUsersInput
      | budgetsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: budgetsScalarWhereInput | budgetsScalarWhereInput[];
  };

  export type categoriesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?:
      | XOR<
          categoriesCreateWithoutUsersInput,
          categoriesUncheckedCreateWithoutUsersInput
        >
      | categoriesCreateWithoutUsersInput[]
      | categoriesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | categoriesCreateOrConnectWithoutUsersInput
      | categoriesCreateOrConnectWithoutUsersInput[];
    upsert?:
      | categoriesUpsertWithWhereUniqueWithoutUsersInput
      | categoriesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: categoriesCreateManyUsersInputEnvelope;
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[];
    update?:
      | categoriesUpdateWithWhereUniqueWithoutUsersInput
      | categoriesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?:
      | categoriesUpdateManyWithWhereWithoutUsersInput
      | categoriesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[];
  };

  export type goalsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?:
      | XOR<goalsCreateWithoutUsersInput, goalsUncheckedCreateWithoutUsersInput>
      | goalsCreateWithoutUsersInput[]
      | goalsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | goalsCreateOrConnectWithoutUsersInput
      | goalsCreateOrConnectWithoutUsersInput[];
    upsert?:
      | goalsUpsertWithWhereUniqueWithoutUsersInput
      | goalsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: goalsCreateManyUsersInputEnvelope;
    set?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
    disconnect?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
    delete?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
    connect?: goalsWhereUniqueInput | goalsWhereUniqueInput[];
    update?:
      | goalsUpdateWithWhereUniqueWithoutUsersInput
      | goalsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?:
      | goalsUpdateManyWithWhereWithoutUsersInput
      | goalsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: goalsScalarWhereInput | goalsScalarWhereInput[];
  };

  export type remindersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?:
      | XOR<
          remindersCreateWithoutUsersInput,
          remindersUncheckedCreateWithoutUsersInput
        >
      | remindersCreateWithoutUsersInput[]
      | remindersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | remindersCreateOrConnectWithoutUsersInput
      | remindersCreateOrConnectWithoutUsersInput[];
    upsert?:
      | remindersUpsertWithWhereUniqueWithoutUsersInput
      | remindersUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: remindersCreateManyUsersInputEnvelope;
    set?: remindersWhereUniqueInput | remindersWhereUniqueInput[];
    disconnect?: remindersWhereUniqueInput | remindersWhereUniqueInput[];
    delete?: remindersWhereUniqueInput | remindersWhereUniqueInput[];
    connect?: remindersWhereUniqueInput | remindersWhereUniqueInput[];
    update?:
      | remindersUpdateWithWhereUniqueWithoutUsersInput
      | remindersUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?:
      | remindersUpdateManyWithWhereWithoutUsersInput
      | remindersUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: remindersScalarWhereInput | remindersScalarWhereInput[];
  };

  export type sync_statesUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<
      sync_statesCreateWithoutUsersInput,
      sync_statesUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: sync_statesCreateOrConnectWithoutUsersInput;
    upsert?: sync_statesUpsertWithoutUsersInput;
    disconnect?: sync_statesWhereInput | boolean;
    delete?: sync_statesWhereInput | boolean;
    connect?: sync_statesWhereUniqueInput;
    update?: XOR<
      XOR<
        sync_statesUpdateToOneWithWhereWithoutUsersInput,
        sync_statesUpdateWithoutUsersInput
      >,
      sync_statesUncheckedUpdateWithoutUsersInput
    >;
  };

  export type transactionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?:
      | XOR<
          transactionsCreateWithoutUsersInput,
          transactionsUncheckedCreateWithoutUsersInput
        >
      | transactionsCreateWithoutUsersInput[]
      | transactionsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?:
      | transactionsCreateOrConnectWithoutUsersInput
      | transactionsCreateOrConnectWithoutUsersInput[];
    upsert?:
      | transactionsUpsertWithWhereUniqueWithoutUsersInput
      | transactionsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: transactionsCreateManyUsersInputEnvelope;
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[];
    update?:
      | transactionsUpdateWithWhereUniqueWithoutUsersInput
      | transactionsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?:
      | transactionsUpdateManyWithWhereWithoutUsersInput
      | transactionsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumaccount_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.account_type | Enumaccount_typeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.account_type[]
      | ListEnumaccount_typeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.account_type[]
      | ListEnumaccount_typeFieldRefInput<$PrismaModel>;
    not?: NestedEnumaccount_typeFilter<$PrismaModel> | $Enums.account_type;
  };

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedEnumaccount_typeWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.account_type
        | Enumaccount_typeFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.account_type[]
        | ListEnumaccount_typeFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.account_type[]
        | ListEnumaccount_typeFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumaccount_typeWithAggregatesFilter<$PrismaModel>
        | $Enums.account_type;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumaccount_typeFilter<$PrismaModel>;
      _max?: NestedEnumaccount_typeFilter<$PrismaModel>;
    };

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>
        | null;
      in?:
        | Decimal[]
        | DecimalJsLike[]
        | number[]
        | string[]
        | ListDecimalFieldRefInput<$PrismaModel>
        | null;
      notIn?:
        | Decimal[]
        | DecimalJsLike[]
        | number[]
        | string[]
        | ListDecimalFieldRefInput<$PrismaModel>
        | null;
      lt?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      lte?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      gt?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      gte?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>;
      not?:
        | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _avg?: NestedDecimalNullableFilter<$PrismaModel>;
      _sum?: NestedDecimalNullableFilter<$PrismaModel>;
      _min?: NestedDecimalNullableFilter<$PrismaModel>;
      _max?: NestedDecimalNullableFilter<$PrismaModel>;
    };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type NestedEnumbudget_periodNullableFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.budget_period
      | Enumbudget_periodFieldRefInput<$PrismaModel>
      | null;
    in?:
      | $Enums.budget_period[]
      | ListEnumbudget_periodFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | $Enums.budget_period[]
      | ListEnumbudget_periodFieldRefInput<$PrismaModel>
      | null;
    not?:
      | NestedEnumbudget_periodNullableFilter<$PrismaModel>
      | $Enums.budget_period
      | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type NestedEnumbudget_periodNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.budget_period
      | Enumbudget_periodFieldRefInput<$PrismaModel>
      | null;
    in?:
      | $Enums.budget_period[]
      | ListEnumbudget_periodFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | $Enums.budget_period[]
      | ListEnumbudget_periodFieldRefInput<$PrismaModel>
      | null;
    not?:
      | NestedEnumbudget_periodNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.budget_period
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumbudget_periodNullableFilter<$PrismaModel>;
    _max?: NestedEnumbudget_periodNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedEnumtransaction_typeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.transaction_type
      | Enumtransaction_typeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.transaction_type[]
      | ListEnumtransaction_typeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.transaction_type[]
      | ListEnumtransaction_typeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumtransaction_typeFilter<$PrismaModel>
      | $Enums.transaction_type;
  };

  export type NestedEnumtransaction_typeWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.transaction_type
      | Enumtransaction_typeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.transaction_type[]
      | ListEnumtransaction_typeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.transaction_type[]
      | ListEnumtransaction_typeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumtransaction_typeWithAggregatesFilter<$PrismaModel>
      | $Enums.transaction_type;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumtransaction_typeFilter<$PrismaModel>;
    _max?: NestedEnumtransaction_typeFilter<$PrismaModel>;
  };
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonNullableFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, "path">
      >;

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type usersCreateWithoutAccountsInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    avatar?: string | null;
    currency?: string | null;
    language?: string | null;
    timezone?: string | null;
    theme?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    budgets?: budgetsCreateNestedManyWithoutUsersInput;
    categories?: categoriesCreateNestedManyWithoutUsersInput;
    goals?: goalsCreateNestedManyWithoutUsersInput;
    reminders?: remindersCreateNestedManyWithoutUsersInput;
    sync_states?: sync_statesCreateNestedOneWithoutUsersInput;
    transactions?: transactionsCreateNestedManyWithoutUsersInput;
  };

  export type usersUncheckedCreateWithoutAccountsInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    avatar?: string | null;
    currency?: string | null;
    language?: string | null;
    timezone?: string | null;
    theme?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    budgets?: budgetsUncheckedCreateNestedManyWithoutUsersInput;
    categories?: categoriesUncheckedCreateNestedManyWithoutUsersInput;
    goals?: goalsUncheckedCreateNestedManyWithoutUsersInput;
    reminders?: remindersUncheckedCreateNestedManyWithoutUsersInput;
    sync_states?: sync_statesUncheckedCreateNestedOneWithoutUsersInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput;
  };

  export type usersCreateOrConnectWithoutAccountsInput = {
    where: usersWhereUniqueInput;
    create: XOR<
      usersCreateWithoutAccountsInput,
      usersUncheckedCreateWithoutAccountsInput
    >;
  };

  export type goalsCreateWithoutAccountsInput = {
    id?: string;
    name: string;
    description?: string | null;
    target: Decimal | DecimalJsLike | number | string;
    current?: Decimal | DecimalJsLike | number | string | null;
    deadline?: Date | string | null;
    color?: string | null;
    icon?: string | null;
    auto_transfer?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users: usersCreateNestedOneWithoutGoalsInput;
  };

  export type goalsUncheckedCreateWithoutAccountsInput = {
    id?: string;
    name: string;
    description?: string | null;
    target: Decimal | DecimalJsLike | number | string;
    current?: Decimal | DecimalJsLike | number | string | null;
    deadline?: Date | string | null;
    color?: string | null;
    icon?: string | null;
    auto_transfer?: boolean | null;
    user_id: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type goalsCreateOrConnectWithoutAccountsInput = {
    where: goalsWhereUniqueInput;
    create: XOR<
      goalsCreateWithoutAccountsInput,
      goalsUncheckedCreateWithoutAccountsInput
    >;
  };

  export type goalsCreateManyAccountsInputEnvelope = {
    data: goalsCreateManyAccountsInput | goalsCreateManyAccountsInput[];
    skipDuplicates?: boolean;
  };

  export type transactionsCreateWithoutAccounts_transactions_account_idToaccountsInput =
    {
      id?: string;
      amount: Decimal | DecimalJsLike | number | string;
      description: string;
      date?: Date | string | null;
      type: $Enums.transaction_type;
      notes?: string | null;
      location?: string | null;
      receipt_image?: string | null;
      is_recurring?: boolean | null;
      recurring_id?: string | null;
      recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
      local_id?: string | null;
      is_synced?: boolean | null;
      last_sync_at?: Date | string | null;
      created_at?: Date | string | null;
      updated_at?: Date | string | null;
      categories?: categoriesCreateNestedOneWithoutTransactionsInput;
      accounts_transactions_to_account_idToaccounts?: accountsCreateNestedOneWithoutTransactions_transactions_to_account_idToaccountsInput;
      users: usersCreateNestedOneWithoutTransactionsInput;
    };

  export type transactionsUncheckedCreateWithoutAccounts_transactions_account_idToaccountsInput =
    {
      id?: string;
      amount: Decimal | DecimalJsLike | number | string;
      description: string;
      date?: Date | string | null;
      type: $Enums.transaction_type;
      notes?: string | null;
      location?: string | null;
      receipt_image?: string | null;
      is_recurring?: boolean | null;
      recurring_id?: string | null;
      recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
      to_account_id?: string | null;
      category_id?: string | null;
      user_id: string;
      local_id?: string | null;
      is_synced?: boolean | null;
      last_sync_at?: Date | string | null;
      created_at?: Date | string | null;
      updated_at?: Date | string | null;
    };

  export type transactionsCreateOrConnectWithoutAccounts_transactions_account_idToaccountsInput =
    {
      where: transactionsWhereUniqueInput;
      create: XOR<
        transactionsCreateWithoutAccounts_transactions_account_idToaccountsInput,
        transactionsUncheckedCreateWithoutAccounts_transactions_account_idToaccountsInput
      >;
    };

  export type transactionsCreateManyAccounts_transactions_account_idToaccountsInputEnvelope =
    {
      data:
        | transactionsCreateManyAccounts_transactions_account_idToaccountsInput
        | transactionsCreateManyAccounts_transactions_account_idToaccountsInput[];
      skipDuplicates?: boolean;
    };

  export type transactionsCreateWithoutAccounts_transactions_to_account_idToaccountsInput =
    {
      id?: string;
      amount: Decimal | DecimalJsLike | number | string;
      description: string;
      date?: Date | string | null;
      type: $Enums.transaction_type;
      notes?: string | null;
      location?: string | null;
      receipt_image?: string | null;
      is_recurring?: boolean | null;
      recurring_id?: string | null;
      recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
      local_id?: string | null;
      is_synced?: boolean | null;
      last_sync_at?: Date | string | null;
      created_at?: Date | string | null;
      updated_at?: Date | string | null;
      accounts_transactions_account_idToaccounts: accountsCreateNestedOneWithoutTransactions_transactions_account_idToaccountsInput;
      categories?: categoriesCreateNestedOneWithoutTransactionsInput;
      users: usersCreateNestedOneWithoutTransactionsInput;
    };

  export type transactionsUncheckedCreateWithoutAccounts_transactions_to_account_idToaccountsInput =
    {
      id?: string;
      amount: Decimal | DecimalJsLike | number | string;
      description: string;
      date?: Date | string | null;
      type: $Enums.transaction_type;
      notes?: string | null;
      location?: string | null;
      receipt_image?: string | null;
      is_recurring?: boolean | null;
      recurring_id?: string | null;
      recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
      account_id: string;
      category_id?: string | null;
      user_id: string;
      local_id?: string | null;
      is_synced?: boolean | null;
      last_sync_at?: Date | string | null;
      created_at?: Date | string | null;
      updated_at?: Date | string | null;
    };

  export type transactionsCreateOrConnectWithoutAccounts_transactions_to_account_idToaccountsInput =
    {
      where: transactionsWhereUniqueInput;
      create: XOR<
        transactionsCreateWithoutAccounts_transactions_to_account_idToaccountsInput,
        transactionsUncheckedCreateWithoutAccounts_transactions_to_account_idToaccountsInput
      >;
    };

  export type transactionsCreateManyAccounts_transactions_to_account_idToaccountsInputEnvelope =
    {
      data:
        | transactionsCreateManyAccounts_transactions_to_account_idToaccountsInput
        | transactionsCreateManyAccounts_transactions_to_account_idToaccountsInput[];
      skipDuplicates?: boolean;
    };

  export type usersUpsertWithoutAccountsInput = {
    update: XOR<
      usersUpdateWithoutAccountsInput,
      usersUncheckedUpdateWithoutAccountsInput
    >;
    create: XOR<
      usersCreateWithoutAccountsInput,
      usersUncheckedCreateWithoutAccountsInput
    >;
    where?: usersWhereInput;
  };

  export type usersUpdateToOneWithWhereWithoutAccountsInput = {
    where?: usersWhereInput;
    data: XOR<
      usersUpdateWithoutAccountsInput,
      usersUncheckedUpdateWithoutAccountsInput
    >;
  };

  export type usersUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    budgets?: budgetsUpdateManyWithoutUsersNestedInput;
    categories?: categoriesUpdateManyWithoutUsersNestedInput;
    goals?: goalsUpdateManyWithoutUsersNestedInput;
    reminders?: remindersUpdateManyWithoutUsersNestedInput;
    sync_states?: sync_statesUpdateOneWithoutUsersNestedInput;
    transactions?: transactionsUpdateManyWithoutUsersNestedInput;
  };

  export type usersUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    budgets?: budgetsUncheckedUpdateManyWithoutUsersNestedInput;
    categories?: categoriesUncheckedUpdateManyWithoutUsersNestedInput;
    goals?: goalsUncheckedUpdateManyWithoutUsersNestedInput;
    reminders?: remindersUncheckedUpdateManyWithoutUsersNestedInput;
    sync_states?: sync_statesUncheckedUpdateOneWithoutUsersNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput;
  };

  export type goalsUpsertWithWhereUniqueWithoutAccountsInput = {
    where: goalsWhereUniqueInput;
    update: XOR<
      goalsUpdateWithoutAccountsInput,
      goalsUncheckedUpdateWithoutAccountsInput
    >;
    create: XOR<
      goalsCreateWithoutAccountsInput,
      goalsUncheckedCreateWithoutAccountsInput
    >;
  };

  export type goalsUpdateWithWhereUniqueWithoutAccountsInput = {
    where: goalsWhereUniqueInput;
    data: XOR<
      goalsUpdateWithoutAccountsInput,
      goalsUncheckedUpdateWithoutAccountsInput
    >;
  };

  export type goalsUpdateManyWithWhereWithoutAccountsInput = {
    where: goalsScalarWhereInput;
    data: XOR<
      goalsUpdateManyMutationInput,
      goalsUncheckedUpdateManyWithoutAccountsInput
    >;
  };

  export type goalsScalarWhereInput = {
    AND?: goalsScalarWhereInput | goalsScalarWhereInput[];
    OR?: goalsScalarWhereInput[];
    NOT?: goalsScalarWhereInput | goalsScalarWhereInput[];
    id?: StringFilter<"goals"> | string;
    name?: StringFilter<"goals"> | string;
    description?: StringNullableFilter<"goals"> | string | null;
    target?: DecimalFilter<"goals"> | Decimal | DecimalJsLike | number | string;
    current?:
      | DecimalNullableFilter<"goals">
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    deadline?: DateTimeNullableFilter<"goals"> | Date | string | null;
    color?: StringNullableFilter<"goals"> | string | null;
    icon?: StringNullableFilter<"goals"> | string | null;
    auto_transfer?: BoolNullableFilter<"goals"> | boolean | null;
    transfer_account_id?: StringNullableFilter<"goals"> | string | null;
    user_id?: StringFilter<"goals"> | string;
    created_at?: DateTimeNullableFilter<"goals"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"goals"> | Date | string | null;
  };

  export type transactionsUpsertWithWhereUniqueWithoutAccounts_transactions_account_idToaccountsInput =
    {
      where: transactionsWhereUniqueInput;
      update: XOR<
        transactionsUpdateWithoutAccounts_transactions_account_idToaccountsInput,
        transactionsUncheckedUpdateWithoutAccounts_transactions_account_idToaccountsInput
      >;
      create: XOR<
        transactionsCreateWithoutAccounts_transactions_account_idToaccountsInput,
        transactionsUncheckedCreateWithoutAccounts_transactions_account_idToaccountsInput
      >;
    };

  export type transactionsUpdateWithWhereUniqueWithoutAccounts_transactions_account_idToaccountsInput =
    {
      where: transactionsWhereUniqueInput;
      data: XOR<
        transactionsUpdateWithoutAccounts_transactions_account_idToaccountsInput,
        transactionsUncheckedUpdateWithoutAccounts_transactions_account_idToaccountsInput
      >;
    };

  export type transactionsUpdateManyWithWhereWithoutAccounts_transactions_account_idToaccountsInput =
    {
      where: transactionsScalarWhereInput;
      data: XOR<
        transactionsUpdateManyMutationInput,
        transactionsUncheckedUpdateManyWithoutAccounts_transactions_account_idToaccountsInput
      >;
    };

  export type transactionsScalarWhereInput = {
    AND?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
    OR?: transactionsScalarWhereInput[];
    NOT?: transactionsScalarWhereInput | transactionsScalarWhereInput[];
    id?: StringFilter<"transactions"> | string;
    amount?:
      | DecimalFilter<"transactions">
      | Decimal
      | DecimalJsLike
      | number
      | string;
    description?: StringFilter<"transactions"> | string;
    date?: DateTimeNullableFilter<"transactions"> | Date | string | null;
    type?: Enumtransaction_typeFilter<"transactions"> | $Enums.transaction_type;
    notes?: StringNullableFilter<"transactions"> | string | null;
    location?: StringNullableFilter<"transactions"> | string | null;
    receipt_image?: StringNullableFilter<"transactions"> | string | null;
    is_recurring?: BoolNullableFilter<"transactions"> | boolean | null;
    recurring_id?: StringNullableFilter<"transactions"> | string | null;
    recurring_rule?: JsonNullableFilter<"transactions">;
    account_id?: StringFilter<"transactions"> | string;
    to_account_id?: StringNullableFilter<"transactions"> | string | null;
    category_id?: StringNullableFilter<"transactions"> | string | null;
    user_id?: StringFilter<"transactions"> | string;
    local_id?: StringNullableFilter<"transactions"> | string | null;
    is_synced?: BoolNullableFilter<"transactions"> | boolean | null;
    last_sync_at?:
      | DateTimeNullableFilter<"transactions">
      | Date
      | string
      | null;
    created_at?: DateTimeNullableFilter<"transactions"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"transactions"> | Date | string | null;
  };

  export type transactionsUpsertWithWhereUniqueWithoutAccounts_transactions_to_account_idToaccountsInput =
    {
      where: transactionsWhereUniqueInput;
      update: XOR<
        transactionsUpdateWithoutAccounts_transactions_to_account_idToaccountsInput,
        transactionsUncheckedUpdateWithoutAccounts_transactions_to_account_idToaccountsInput
      >;
      create: XOR<
        transactionsCreateWithoutAccounts_transactions_to_account_idToaccountsInput,
        transactionsUncheckedCreateWithoutAccounts_transactions_to_account_idToaccountsInput
      >;
    };

  export type transactionsUpdateWithWhereUniqueWithoutAccounts_transactions_to_account_idToaccountsInput =
    {
      where: transactionsWhereUniqueInput;
      data: XOR<
        transactionsUpdateWithoutAccounts_transactions_to_account_idToaccountsInput,
        transactionsUncheckedUpdateWithoutAccounts_transactions_to_account_idToaccountsInput
      >;
    };

  export type transactionsUpdateManyWithWhereWithoutAccounts_transactions_to_account_idToaccountsInput =
    {
      where: transactionsScalarWhereInput;
      data: XOR<
        transactionsUpdateManyMutationInput,
        transactionsUncheckedUpdateManyWithoutAccounts_transactions_to_account_idToaccountsInput
      >;
    };

  export type categoriesCreateWithoutBudgetsInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    type: $Enums.transaction_type;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput;
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput;
    users?: usersCreateNestedOneWithoutCategoriesInput;
    transactions?: transactionsCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesUncheckedCreateWithoutBudgetsInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    type: $Enums.transaction_type;
    parent_id?: string | null;
    user_id?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesCreateOrConnectWithoutBudgetsInput = {
    where: categoriesWhereUniqueInput;
    create: XOR<
      categoriesCreateWithoutBudgetsInput,
      categoriesUncheckedCreateWithoutBudgetsInput
    >;
  };

  export type usersCreateWithoutBudgetsInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    avatar?: string | null;
    currency?: string | null;
    language?: string | null;
    timezone?: string | null;
    theme?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts?: accountsCreateNestedManyWithoutUsersInput;
    categories?: categoriesCreateNestedManyWithoutUsersInput;
    goals?: goalsCreateNestedManyWithoutUsersInput;
    reminders?: remindersCreateNestedManyWithoutUsersInput;
    sync_states?: sync_statesCreateNestedOneWithoutUsersInput;
    transactions?: transactionsCreateNestedManyWithoutUsersInput;
  };

  export type usersUncheckedCreateWithoutBudgetsInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    avatar?: string | null;
    currency?: string | null;
    language?: string | null;
    timezone?: string | null;
    theme?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts?: accountsUncheckedCreateNestedManyWithoutUsersInput;
    categories?: categoriesUncheckedCreateNestedManyWithoutUsersInput;
    goals?: goalsUncheckedCreateNestedManyWithoutUsersInput;
    reminders?: remindersUncheckedCreateNestedManyWithoutUsersInput;
    sync_states?: sync_statesUncheckedCreateNestedOneWithoutUsersInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput;
  };

  export type usersCreateOrConnectWithoutBudgetsInput = {
    where: usersWhereUniqueInput;
    create: XOR<
      usersCreateWithoutBudgetsInput,
      usersUncheckedCreateWithoutBudgetsInput
    >;
  };

  export type categoriesUpsertWithoutBudgetsInput = {
    update: XOR<
      categoriesUpdateWithoutBudgetsInput,
      categoriesUncheckedUpdateWithoutBudgetsInput
    >;
    create: XOR<
      categoriesCreateWithoutBudgetsInput,
      categoriesUncheckedCreateWithoutBudgetsInput
    >;
    where?: categoriesWhereInput;
  };

  export type categoriesUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: categoriesWhereInput;
    data: XOR<
      categoriesUpdateWithoutBudgetsInput,
      categoriesUncheckedUpdateWithoutBudgetsInput
    >;
  };

  export type categoriesUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput;
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput;
    users?: usersUpdateOneWithoutCategoriesNestedInput;
    transactions?: transactionsUpdateManyWithoutCategoriesNestedInput;
  };

  export type categoriesUncheckedUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutCategoriesNestedInput;
  };

  export type usersUpsertWithoutBudgetsInput = {
    update: XOR<
      usersUpdateWithoutBudgetsInput,
      usersUncheckedUpdateWithoutBudgetsInput
    >;
    create: XOR<
      usersCreateWithoutBudgetsInput,
      usersUncheckedCreateWithoutBudgetsInput
    >;
    where?: usersWhereInput;
  };

  export type usersUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: usersWhereInput;
    data: XOR<
      usersUpdateWithoutBudgetsInput,
      usersUncheckedUpdateWithoutBudgetsInput
    >;
  };

  export type usersUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts?: accountsUpdateManyWithoutUsersNestedInput;
    categories?: categoriesUpdateManyWithoutUsersNestedInput;
    goals?: goalsUpdateManyWithoutUsersNestedInput;
    reminders?: remindersUpdateManyWithoutUsersNestedInput;
    sync_states?: sync_statesUpdateOneWithoutUsersNestedInput;
    transactions?: transactionsUpdateManyWithoutUsersNestedInput;
  };

  export type usersUncheckedUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts?: accountsUncheckedUpdateManyWithoutUsersNestedInput;
    categories?: categoriesUncheckedUpdateManyWithoutUsersNestedInput;
    goals?: goalsUncheckedUpdateManyWithoutUsersNestedInput;
    reminders?: remindersUncheckedUpdateManyWithoutUsersNestedInput;
    sync_states?: sync_statesUncheckedUpdateOneWithoutUsersNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput;
  };

  export type budgetsCreateWithoutCategoriesInput = {
    id?: string;
    name: string;
    amount: Decimal | DecimalJsLike | number | string;
    period?: $Enums.budget_period | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    spent?: Decimal | DecimalJsLike | number | string | null;
    alert_at?: Decimal | DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users: usersCreateNestedOneWithoutBudgetsInput;
  };

  export type budgetsUncheckedCreateWithoutCategoriesInput = {
    id?: string;
    name: string;
    amount: Decimal | DecimalJsLike | number | string;
    period?: $Enums.budget_period | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    spent?: Decimal | DecimalJsLike | number | string | null;
    alert_at?: Decimal | DecimalJsLike | number | string | null;
    user_id: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type budgetsCreateOrConnectWithoutCategoriesInput = {
    where: budgetsWhereUniqueInput;
    create: XOR<
      budgetsCreateWithoutCategoriesInput,
      budgetsUncheckedCreateWithoutCategoriesInput
    >;
  };

  export type budgetsCreateManyCategoriesInputEnvelope = {
    data: budgetsCreateManyCategoriesInput | budgetsCreateManyCategoriesInput[];
    skipDuplicates?: boolean;
  };

  export type categoriesCreateWithoutOther_categoriesInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    type: $Enums.transaction_type;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    budgets?: budgetsCreateNestedManyWithoutCategoriesInput;
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput;
    users?: usersCreateNestedOneWithoutCategoriesInput;
    transactions?: transactionsCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesUncheckedCreateWithoutOther_categoriesInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    type: $Enums.transaction_type;
    parent_id?: string | null;
    user_id?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    budgets?: budgetsUncheckedCreateNestedManyWithoutCategoriesInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesCreateOrConnectWithoutOther_categoriesInput = {
    where: categoriesWhereUniqueInput;
    create: XOR<
      categoriesCreateWithoutOther_categoriesInput,
      categoriesUncheckedCreateWithoutOther_categoriesInput
    >;
  };

  export type categoriesCreateWithoutCategoriesInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    type: $Enums.transaction_type;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    budgets?: budgetsCreateNestedManyWithoutCategoriesInput;
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput;
    users?: usersCreateNestedOneWithoutCategoriesInput;
    transactions?: transactionsCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesUncheckedCreateWithoutCategoriesInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    type: $Enums.transaction_type;
    user_id?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    budgets?: budgetsUncheckedCreateNestedManyWithoutCategoriesInput;
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesCreateOrConnectWithoutCategoriesInput = {
    where: categoriesWhereUniqueInput;
    create: XOR<
      categoriesCreateWithoutCategoriesInput,
      categoriesUncheckedCreateWithoutCategoriesInput
    >;
  };

  export type categoriesCreateManyCategoriesInputEnvelope = {
    data:
      | categoriesCreateManyCategoriesInput
      | categoriesCreateManyCategoriesInput[];
    skipDuplicates?: boolean;
  };

  export type usersCreateWithoutCategoriesInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    avatar?: string | null;
    currency?: string | null;
    language?: string | null;
    timezone?: string | null;
    theme?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts?: accountsCreateNestedManyWithoutUsersInput;
    budgets?: budgetsCreateNestedManyWithoutUsersInput;
    goals?: goalsCreateNestedManyWithoutUsersInput;
    reminders?: remindersCreateNestedManyWithoutUsersInput;
    sync_states?: sync_statesCreateNestedOneWithoutUsersInput;
    transactions?: transactionsCreateNestedManyWithoutUsersInput;
  };

  export type usersUncheckedCreateWithoutCategoriesInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    avatar?: string | null;
    currency?: string | null;
    language?: string | null;
    timezone?: string | null;
    theme?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts?: accountsUncheckedCreateNestedManyWithoutUsersInput;
    budgets?: budgetsUncheckedCreateNestedManyWithoutUsersInput;
    goals?: goalsUncheckedCreateNestedManyWithoutUsersInput;
    reminders?: remindersUncheckedCreateNestedManyWithoutUsersInput;
    sync_states?: sync_statesUncheckedCreateNestedOneWithoutUsersInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput;
  };

  export type usersCreateOrConnectWithoutCategoriesInput = {
    where: usersWhereUniqueInput;
    create: XOR<
      usersCreateWithoutCategoriesInput,
      usersUncheckedCreateWithoutCategoriesInput
    >;
  };

  export type transactionsCreateWithoutCategoriesInput = {
    id?: string;
    amount: Decimal | DecimalJsLike | number | string;
    description: string;
    date?: Date | string | null;
    type: $Enums.transaction_type;
    notes?: string | null;
    location?: string | null;
    receipt_image?: string | null;
    is_recurring?: boolean | null;
    recurring_id?: string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    local_id?: string | null;
    is_synced?: boolean | null;
    last_sync_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts_transactions_account_idToaccounts: accountsCreateNestedOneWithoutTransactions_transactions_account_idToaccountsInput;
    accounts_transactions_to_account_idToaccounts?: accountsCreateNestedOneWithoutTransactions_transactions_to_account_idToaccountsInput;
    users: usersCreateNestedOneWithoutTransactionsInput;
  };

  export type transactionsUncheckedCreateWithoutCategoriesInput = {
    id?: string;
    amount: Decimal | DecimalJsLike | number | string;
    description: string;
    date?: Date | string | null;
    type: $Enums.transaction_type;
    notes?: string | null;
    location?: string | null;
    receipt_image?: string | null;
    is_recurring?: boolean | null;
    recurring_id?: string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    account_id: string;
    to_account_id?: string | null;
    user_id: string;
    local_id?: string | null;
    is_synced?: boolean | null;
    last_sync_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type transactionsCreateOrConnectWithoutCategoriesInput = {
    where: transactionsWhereUniqueInput;
    create: XOR<
      transactionsCreateWithoutCategoriesInput,
      transactionsUncheckedCreateWithoutCategoriesInput
    >;
  };

  export type transactionsCreateManyCategoriesInputEnvelope = {
    data:
      | transactionsCreateManyCategoriesInput
      | transactionsCreateManyCategoriesInput[];
    skipDuplicates?: boolean;
  };

  export type budgetsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: budgetsWhereUniqueInput;
    update: XOR<
      budgetsUpdateWithoutCategoriesInput,
      budgetsUncheckedUpdateWithoutCategoriesInput
    >;
    create: XOR<
      budgetsCreateWithoutCategoriesInput,
      budgetsUncheckedCreateWithoutCategoriesInput
    >;
  };

  export type budgetsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: budgetsWhereUniqueInput;
    data: XOR<
      budgetsUpdateWithoutCategoriesInput,
      budgetsUncheckedUpdateWithoutCategoriesInput
    >;
  };

  export type budgetsUpdateManyWithWhereWithoutCategoriesInput = {
    where: budgetsScalarWhereInput;
    data: XOR<
      budgetsUpdateManyMutationInput,
      budgetsUncheckedUpdateManyWithoutCategoriesInput
    >;
  };

  export type budgetsScalarWhereInput = {
    AND?: budgetsScalarWhereInput | budgetsScalarWhereInput[];
    OR?: budgetsScalarWhereInput[];
    NOT?: budgetsScalarWhereInput | budgetsScalarWhereInput[];
    id?: StringFilter<"budgets"> | string;
    name?: StringFilter<"budgets"> | string;
    amount?:
      | DecimalFilter<"budgets">
      | Decimal
      | DecimalJsLike
      | number
      | string;
    period?:
      | Enumbudget_periodNullableFilter<"budgets">
      | $Enums.budget_period
      | null;
    start_date?: DateTimeFilter<"budgets"> | Date | string;
    end_date?: DateTimeNullableFilter<"budgets"> | Date | string | null;
    spent?:
      | DecimalNullableFilter<"budgets">
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    alert_at?:
      | DecimalNullableFilter<"budgets">
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    category_id?: StringNullableFilter<"budgets"> | string | null;
    user_id?: StringFilter<"budgets"> | string;
    created_at?: DateTimeNullableFilter<"budgets"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"budgets"> | Date | string | null;
  };

  export type categoriesUpsertWithoutOther_categoriesInput = {
    update: XOR<
      categoriesUpdateWithoutOther_categoriesInput,
      categoriesUncheckedUpdateWithoutOther_categoriesInput
    >;
    create: XOR<
      categoriesCreateWithoutOther_categoriesInput,
      categoriesUncheckedCreateWithoutOther_categoriesInput
    >;
    where?: categoriesWhereInput;
  };

  export type categoriesUpdateToOneWithWhereWithoutOther_categoriesInput = {
    where?: categoriesWhereInput;
    data: XOR<
      categoriesUpdateWithoutOther_categoriesInput,
      categoriesUncheckedUpdateWithoutOther_categoriesInput
    >;
  };

  export type categoriesUpdateWithoutOther_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    budgets?: budgetsUpdateManyWithoutCategoriesNestedInput;
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput;
    users?: usersUpdateOneWithoutCategoriesNestedInput;
    transactions?: transactionsUpdateManyWithoutCategoriesNestedInput;
  };

  export type categoriesUncheckedUpdateWithoutOther_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    budgets?: budgetsUncheckedUpdateManyWithoutCategoriesNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutCategoriesNestedInput;
  };

  export type categoriesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: categoriesWhereUniqueInput;
    update: XOR<
      categoriesUpdateWithoutCategoriesInput,
      categoriesUncheckedUpdateWithoutCategoriesInput
    >;
    create: XOR<
      categoriesCreateWithoutCategoriesInput,
      categoriesUncheckedCreateWithoutCategoriesInput
    >;
  };

  export type categoriesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: categoriesWhereUniqueInput;
    data: XOR<
      categoriesUpdateWithoutCategoriesInput,
      categoriesUncheckedUpdateWithoutCategoriesInput
    >;
  };

  export type categoriesUpdateManyWithWhereWithoutCategoriesInput = {
    where: categoriesScalarWhereInput;
    data: XOR<
      categoriesUpdateManyMutationInput,
      categoriesUncheckedUpdateManyWithoutCategoriesInput
    >;
  };

  export type categoriesScalarWhereInput = {
    AND?: categoriesScalarWhereInput | categoriesScalarWhereInput[];
    OR?: categoriesScalarWhereInput[];
    NOT?: categoriesScalarWhereInput | categoriesScalarWhereInput[];
    id?: StringFilter<"categories"> | string;
    name?: StringFilter<"categories"> | string;
    description?: StringNullableFilter<"categories"> | string | null;
    color?: StringNullableFilter<"categories"> | string | null;
    icon?: StringNullableFilter<"categories"> | string | null;
    type?: Enumtransaction_typeFilter<"categories"> | $Enums.transaction_type;
    parent_id?: StringNullableFilter<"categories"> | string | null;
    user_id?: StringNullableFilter<"categories"> | string | null;
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null;
  };

  export type usersUpsertWithoutCategoriesInput = {
    update: XOR<
      usersUpdateWithoutCategoriesInput,
      usersUncheckedUpdateWithoutCategoriesInput
    >;
    create: XOR<
      usersCreateWithoutCategoriesInput,
      usersUncheckedCreateWithoutCategoriesInput
    >;
    where?: usersWhereInput;
  };

  export type usersUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: usersWhereInput;
    data: XOR<
      usersUpdateWithoutCategoriesInput,
      usersUncheckedUpdateWithoutCategoriesInput
    >;
  };

  export type usersUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts?: accountsUpdateManyWithoutUsersNestedInput;
    budgets?: budgetsUpdateManyWithoutUsersNestedInput;
    goals?: goalsUpdateManyWithoutUsersNestedInput;
    reminders?: remindersUpdateManyWithoutUsersNestedInput;
    sync_states?: sync_statesUpdateOneWithoutUsersNestedInput;
    transactions?: transactionsUpdateManyWithoutUsersNestedInput;
  };

  export type usersUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts?: accountsUncheckedUpdateManyWithoutUsersNestedInput;
    budgets?: budgetsUncheckedUpdateManyWithoutUsersNestedInput;
    goals?: goalsUncheckedUpdateManyWithoutUsersNestedInput;
    reminders?: remindersUncheckedUpdateManyWithoutUsersNestedInput;
    sync_states?: sync_statesUncheckedUpdateOneWithoutUsersNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput;
  };

  export type transactionsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: transactionsWhereUniqueInput;
    update: XOR<
      transactionsUpdateWithoutCategoriesInput,
      transactionsUncheckedUpdateWithoutCategoriesInput
    >;
    create: XOR<
      transactionsCreateWithoutCategoriesInput,
      transactionsUncheckedCreateWithoutCategoriesInput
    >;
  };

  export type transactionsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: transactionsWhereUniqueInput;
    data: XOR<
      transactionsUpdateWithoutCategoriesInput,
      transactionsUncheckedUpdateWithoutCategoriesInput
    >;
  };

  export type transactionsUpdateManyWithWhereWithoutCategoriesInput = {
    where: transactionsScalarWhereInput;
    data: XOR<
      transactionsUpdateManyMutationInput,
      transactionsUncheckedUpdateManyWithoutCategoriesInput
    >;
  };

  export type accountsCreateWithoutGoalsInput = {
    id?: string;
    name: string;
    type: $Enums.account_type;
    balance?: Decimal | DecimalJsLike | number | string | null;
    color?: string | null;
    icon?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users: usersCreateNestedOneWithoutAccountsInput;
    transactions_transactions_account_idToaccounts?: transactionsCreateNestedManyWithoutAccounts_transactions_account_idToaccountsInput;
    transactions_transactions_to_account_idToaccounts?: transactionsCreateNestedManyWithoutAccounts_transactions_to_account_idToaccountsInput;
  };

  export type accountsUncheckedCreateWithoutGoalsInput = {
    id?: string;
    name: string;
    type: $Enums.account_type;
    balance?: Decimal | DecimalJsLike | number | string | null;
    color?: string | null;
    icon?: string | null;
    is_active?: boolean | null;
    user_id: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    transactions_transactions_account_idToaccounts?: transactionsUncheckedCreateNestedManyWithoutAccounts_transactions_account_idToaccountsInput;
    transactions_transactions_to_account_idToaccounts?: transactionsUncheckedCreateNestedManyWithoutAccounts_transactions_to_account_idToaccountsInput;
  };

  export type accountsCreateOrConnectWithoutGoalsInput = {
    where: accountsWhereUniqueInput;
    create: XOR<
      accountsCreateWithoutGoalsInput,
      accountsUncheckedCreateWithoutGoalsInput
    >;
  };

  export type usersCreateWithoutGoalsInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    avatar?: string | null;
    currency?: string | null;
    language?: string | null;
    timezone?: string | null;
    theme?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts?: accountsCreateNestedManyWithoutUsersInput;
    budgets?: budgetsCreateNestedManyWithoutUsersInput;
    categories?: categoriesCreateNestedManyWithoutUsersInput;
    reminders?: remindersCreateNestedManyWithoutUsersInput;
    sync_states?: sync_statesCreateNestedOneWithoutUsersInput;
    transactions?: transactionsCreateNestedManyWithoutUsersInput;
  };

  export type usersUncheckedCreateWithoutGoalsInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    avatar?: string | null;
    currency?: string | null;
    language?: string | null;
    timezone?: string | null;
    theme?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts?: accountsUncheckedCreateNestedManyWithoutUsersInput;
    budgets?: budgetsUncheckedCreateNestedManyWithoutUsersInput;
    categories?: categoriesUncheckedCreateNestedManyWithoutUsersInput;
    reminders?: remindersUncheckedCreateNestedManyWithoutUsersInput;
    sync_states?: sync_statesUncheckedCreateNestedOneWithoutUsersInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput;
  };

  export type usersCreateOrConnectWithoutGoalsInput = {
    where: usersWhereUniqueInput;
    create: XOR<
      usersCreateWithoutGoalsInput,
      usersUncheckedCreateWithoutGoalsInput
    >;
  };

  export type accountsUpsertWithoutGoalsInput = {
    update: XOR<
      accountsUpdateWithoutGoalsInput,
      accountsUncheckedUpdateWithoutGoalsInput
    >;
    create: XOR<
      accountsCreateWithoutGoalsInput,
      accountsUncheckedCreateWithoutGoalsInput
    >;
    where?: accountsWhereInput;
  };

  export type accountsUpdateToOneWithWhereWithoutGoalsInput = {
    where?: accountsWhereInput;
    data: XOR<
      accountsUpdateWithoutGoalsInput,
      accountsUncheckedUpdateWithoutGoalsInput
    >;
  };

  export type accountsUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type;
    balance?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    users?: usersUpdateOneRequiredWithoutAccountsNestedInput;
    transactions_transactions_account_idToaccounts?: transactionsUpdateManyWithoutAccounts_transactions_account_idToaccountsNestedInput;
    transactions_transactions_to_account_idToaccounts?: transactionsUpdateManyWithoutAccounts_transactions_to_account_idToaccountsNestedInput;
  };

  export type accountsUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type;
    balance?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    transactions_transactions_account_idToaccounts?: transactionsUncheckedUpdateManyWithoutAccounts_transactions_account_idToaccountsNestedInput;
    transactions_transactions_to_account_idToaccounts?: transactionsUncheckedUpdateManyWithoutAccounts_transactions_to_account_idToaccountsNestedInput;
  };

  export type usersUpsertWithoutGoalsInput = {
    update: XOR<
      usersUpdateWithoutGoalsInput,
      usersUncheckedUpdateWithoutGoalsInput
    >;
    create: XOR<
      usersCreateWithoutGoalsInput,
      usersUncheckedCreateWithoutGoalsInput
    >;
    where?: usersWhereInput;
  };

  export type usersUpdateToOneWithWhereWithoutGoalsInput = {
    where?: usersWhereInput;
    data: XOR<
      usersUpdateWithoutGoalsInput,
      usersUncheckedUpdateWithoutGoalsInput
    >;
  };

  export type usersUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts?: accountsUpdateManyWithoutUsersNestedInput;
    budgets?: budgetsUpdateManyWithoutUsersNestedInput;
    categories?: categoriesUpdateManyWithoutUsersNestedInput;
    reminders?: remindersUpdateManyWithoutUsersNestedInput;
    sync_states?: sync_statesUpdateOneWithoutUsersNestedInput;
    transactions?: transactionsUpdateManyWithoutUsersNestedInput;
  };

  export type usersUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts?: accountsUncheckedUpdateManyWithoutUsersNestedInput;
    budgets?: budgetsUncheckedUpdateManyWithoutUsersNestedInput;
    categories?: categoriesUncheckedUpdateManyWithoutUsersNestedInput;
    reminders?: remindersUncheckedUpdateManyWithoutUsersNestedInput;
    sync_states?: sync_statesUncheckedUpdateOneWithoutUsersNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput;
  };

  export type usersCreateWithoutRemindersInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    avatar?: string | null;
    currency?: string | null;
    language?: string | null;
    timezone?: string | null;
    theme?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts?: accountsCreateNestedManyWithoutUsersInput;
    budgets?: budgetsCreateNestedManyWithoutUsersInput;
    categories?: categoriesCreateNestedManyWithoutUsersInput;
    goals?: goalsCreateNestedManyWithoutUsersInput;
    sync_states?: sync_statesCreateNestedOneWithoutUsersInput;
    transactions?: transactionsCreateNestedManyWithoutUsersInput;
  };

  export type usersUncheckedCreateWithoutRemindersInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    avatar?: string | null;
    currency?: string | null;
    language?: string | null;
    timezone?: string | null;
    theme?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts?: accountsUncheckedCreateNestedManyWithoutUsersInput;
    budgets?: budgetsUncheckedCreateNestedManyWithoutUsersInput;
    categories?: categoriesUncheckedCreateNestedManyWithoutUsersInput;
    goals?: goalsUncheckedCreateNestedManyWithoutUsersInput;
    sync_states?: sync_statesUncheckedCreateNestedOneWithoutUsersInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput;
  };

  export type usersCreateOrConnectWithoutRemindersInput = {
    where: usersWhereUniqueInput;
    create: XOR<
      usersCreateWithoutRemindersInput,
      usersUncheckedCreateWithoutRemindersInput
    >;
  };

  export type usersUpsertWithoutRemindersInput = {
    update: XOR<
      usersUpdateWithoutRemindersInput,
      usersUncheckedUpdateWithoutRemindersInput
    >;
    create: XOR<
      usersCreateWithoutRemindersInput,
      usersUncheckedCreateWithoutRemindersInput
    >;
    where?: usersWhereInput;
  };

  export type usersUpdateToOneWithWhereWithoutRemindersInput = {
    where?: usersWhereInput;
    data: XOR<
      usersUpdateWithoutRemindersInput,
      usersUncheckedUpdateWithoutRemindersInput
    >;
  };

  export type usersUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts?: accountsUpdateManyWithoutUsersNestedInput;
    budgets?: budgetsUpdateManyWithoutUsersNestedInput;
    categories?: categoriesUpdateManyWithoutUsersNestedInput;
    goals?: goalsUpdateManyWithoutUsersNestedInput;
    sync_states?: sync_statesUpdateOneWithoutUsersNestedInput;
    transactions?: transactionsUpdateManyWithoutUsersNestedInput;
  };

  export type usersUncheckedUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts?: accountsUncheckedUpdateManyWithoutUsersNestedInput;
    budgets?: budgetsUncheckedUpdateManyWithoutUsersNestedInput;
    categories?: categoriesUncheckedUpdateManyWithoutUsersNestedInput;
    goals?: goalsUncheckedUpdateManyWithoutUsersNestedInput;
    sync_states?: sync_statesUncheckedUpdateOneWithoutUsersNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput;
  };

  export type usersCreateWithoutSync_statesInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    avatar?: string | null;
    currency?: string | null;
    language?: string | null;
    timezone?: string | null;
    theme?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts?: accountsCreateNestedManyWithoutUsersInput;
    budgets?: budgetsCreateNestedManyWithoutUsersInput;
    categories?: categoriesCreateNestedManyWithoutUsersInput;
    goals?: goalsCreateNestedManyWithoutUsersInput;
    reminders?: remindersCreateNestedManyWithoutUsersInput;
    transactions?: transactionsCreateNestedManyWithoutUsersInput;
  };

  export type usersUncheckedCreateWithoutSync_statesInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    avatar?: string | null;
    currency?: string | null;
    language?: string | null;
    timezone?: string | null;
    theme?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts?: accountsUncheckedCreateNestedManyWithoutUsersInput;
    budgets?: budgetsUncheckedCreateNestedManyWithoutUsersInput;
    categories?: categoriesUncheckedCreateNestedManyWithoutUsersInput;
    goals?: goalsUncheckedCreateNestedManyWithoutUsersInput;
    reminders?: remindersUncheckedCreateNestedManyWithoutUsersInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutUsersInput;
  };

  export type usersCreateOrConnectWithoutSync_statesInput = {
    where: usersWhereUniqueInput;
    create: XOR<
      usersCreateWithoutSync_statesInput,
      usersUncheckedCreateWithoutSync_statesInput
    >;
  };

  export type usersUpsertWithoutSync_statesInput = {
    update: XOR<
      usersUpdateWithoutSync_statesInput,
      usersUncheckedUpdateWithoutSync_statesInput
    >;
    create: XOR<
      usersCreateWithoutSync_statesInput,
      usersUncheckedCreateWithoutSync_statesInput
    >;
    where?: usersWhereInput;
  };

  export type usersUpdateToOneWithWhereWithoutSync_statesInput = {
    where?: usersWhereInput;
    data: XOR<
      usersUpdateWithoutSync_statesInput,
      usersUncheckedUpdateWithoutSync_statesInput
    >;
  };

  export type usersUpdateWithoutSync_statesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts?: accountsUpdateManyWithoutUsersNestedInput;
    budgets?: budgetsUpdateManyWithoutUsersNestedInput;
    categories?: categoriesUpdateManyWithoutUsersNestedInput;
    goals?: goalsUpdateManyWithoutUsersNestedInput;
    reminders?: remindersUpdateManyWithoutUsersNestedInput;
    transactions?: transactionsUpdateManyWithoutUsersNestedInput;
  };

  export type usersUncheckedUpdateWithoutSync_statesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts?: accountsUncheckedUpdateManyWithoutUsersNestedInput;
    budgets?: budgetsUncheckedUpdateManyWithoutUsersNestedInput;
    categories?: categoriesUncheckedUpdateManyWithoutUsersNestedInput;
    goals?: goalsUncheckedUpdateManyWithoutUsersNestedInput;
    reminders?: remindersUncheckedUpdateManyWithoutUsersNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutUsersNestedInput;
  };

  export type accountsCreateWithoutTransactions_transactions_account_idToaccountsInput =
    {
      id?: string;
      name: string;
      type: $Enums.account_type;
      balance?: Decimal | DecimalJsLike | number | string | null;
      color?: string | null;
      icon?: string | null;
      is_active?: boolean | null;
      created_at?: Date | string | null;
      updated_at?: Date | string | null;
      users: usersCreateNestedOneWithoutAccountsInput;
      goals?: goalsCreateNestedManyWithoutAccountsInput;
      transactions_transactions_to_account_idToaccounts?: transactionsCreateNestedManyWithoutAccounts_transactions_to_account_idToaccountsInput;
    };

  export type accountsUncheckedCreateWithoutTransactions_transactions_account_idToaccountsInput =
    {
      id?: string;
      name: string;
      type: $Enums.account_type;
      balance?: Decimal | DecimalJsLike | number | string | null;
      color?: string | null;
      icon?: string | null;
      is_active?: boolean | null;
      user_id: string;
      created_at?: Date | string | null;
      updated_at?: Date | string | null;
      goals?: goalsUncheckedCreateNestedManyWithoutAccountsInput;
      transactions_transactions_to_account_idToaccounts?: transactionsUncheckedCreateNestedManyWithoutAccounts_transactions_to_account_idToaccountsInput;
    };

  export type accountsCreateOrConnectWithoutTransactions_transactions_account_idToaccountsInput =
    {
      where: accountsWhereUniqueInput;
      create: XOR<
        accountsCreateWithoutTransactions_transactions_account_idToaccountsInput,
        accountsUncheckedCreateWithoutTransactions_transactions_account_idToaccountsInput
      >;
    };

  export type categoriesCreateWithoutTransactionsInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    type: $Enums.transaction_type;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    budgets?: budgetsCreateNestedManyWithoutCategoriesInput;
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput;
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput;
    users?: usersCreateNestedOneWithoutCategoriesInput;
  };

  export type categoriesUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    type: $Enums.transaction_type;
    parent_id?: string | null;
    user_id?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    budgets?: budgetsUncheckedCreateNestedManyWithoutCategoriesInput;
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesCreateOrConnectWithoutTransactionsInput = {
    where: categoriesWhereUniqueInput;
    create: XOR<
      categoriesCreateWithoutTransactionsInput,
      categoriesUncheckedCreateWithoutTransactionsInput
    >;
  };

  export type accountsCreateWithoutTransactions_transactions_to_account_idToaccountsInput =
    {
      id?: string;
      name: string;
      type: $Enums.account_type;
      balance?: Decimal | DecimalJsLike | number | string | null;
      color?: string | null;
      icon?: string | null;
      is_active?: boolean | null;
      created_at?: Date | string | null;
      updated_at?: Date | string | null;
      users: usersCreateNestedOneWithoutAccountsInput;
      goals?: goalsCreateNestedManyWithoutAccountsInput;
      transactions_transactions_account_idToaccounts?: transactionsCreateNestedManyWithoutAccounts_transactions_account_idToaccountsInput;
    };

  export type accountsUncheckedCreateWithoutTransactions_transactions_to_account_idToaccountsInput =
    {
      id?: string;
      name: string;
      type: $Enums.account_type;
      balance?: Decimal | DecimalJsLike | number | string | null;
      color?: string | null;
      icon?: string | null;
      is_active?: boolean | null;
      user_id: string;
      created_at?: Date | string | null;
      updated_at?: Date | string | null;
      goals?: goalsUncheckedCreateNestedManyWithoutAccountsInput;
      transactions_transactions_account_idToaccounts?: transactionsUncheckedCreateNestedManyWithoutAccounts_transactions_account_idToaccountsInput;
    };

  export type accountsCreateOrConnectWithoutTransactions_transactions_to_account_idToaccountsInput =
    {
      where: accountsWhereUniqueInput;
      create: XOR<
        accountsCreateWithoutTransactions_transactions_to_account_idToaccountsInput,
        accountsUncheckedCreateWithoutTransactions_transactions_to_account_idToaccountsInput
      >;
    };

  export type usersCreateWithoutTransactionsInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    avatar?: string | null;
    currency?: string | null;
    language?: string | null;
    timezone?: string | null;
    theme?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts?: accountsCreateNestedManyWithoutUsersInput;
    budgets?: budgetsCreateNestedManyWithoutUsersInput;
    categories?: categoriesCreateNestedManyWithoutUsersInput;
    goals?: goalsCreateNestedManyWithoutUsersInput;
    reminders?: remindersCreateNestedManyWithoutUsersInput;
    sync_states?: sync_statesCreateNestedOneWithoutUsersInput;
  };

  export type usersUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    avatar?: string | null;
    currency?: string | null;
    language?: string | null;
    timezone?: string | null;
    theme?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts?: accountsUncheckedCreateNestedManyWithoutUsersInput;
    budgets?: budgetsUncheckedCreateNestedManyWithoutUsersInput;
    categories?: categoriesUncheckedCreateNestedManyWithoutUsersInput;
    goals?: goalsUncheckedCreateNestedManyWithoutUsersInput;
    reminders?: remindersUncheckedCreateNestedManyWithoutUsersInput;
    sync_states?: sync_statesUncheckedCreateNestedOneWithoutUsersInput;
  };

  export type usersCreateOrConnectWithoutTransactionsInput = {
    where: usersWhereUniqueInput;
    create: XOR<
      usersCreateWithoutTransactionsInput,
      usersUncheckedCreateWithoutTransactionsInput
    >;
  };

  export type accountsUpsertWithoutTransactions_transactions_account_idToaccountsInput =
    {
      update: XOR<
        accountsUpdateWithoutTransactions_transactions_account_idToaccountsInput,
        accountsUncheckedUpdateWithoutTransactions_transactions_account_idToaccountsInput
      >;
      create: XOR<
        accountsCreateWithoutTransactions_transactions_account_idToaccountsInput,
        accountsUncheckedCreateWithoutTransactions_transactions_account_idToaccountsInput
      >;
      where?: accountsWhereInput;
    };

  export type accountsUpdateToOneWithWhereWithoutTransactions_transactions_account_idToaccountsInput =
    {
      where?: accountsWhereInput;
      data: XOR<
        accountsUpdateWithoutTransactions_transactions_account_idToaccountsInput,
        accountsUncheckedUpdateWithoutTransactions_transactions_account_idToaccountsInput
      >;
    };

  export type accountsUpdateWithoutTransactions_transactions_account_idToaccountsInput =
    {
      id?: StringFieldUpdateOperationsInput | string;
      name?: StringFieldUpdateOperationsInput | string;
      type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type;
      balance?:
        | NullableDecimalFieldUpdateOperationsInput
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      color?: NullableStringFieldUpdateOperationsInput | string | null;
      icon?: NullableStringFieldUpdateOperationsInput | string | null;
      is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
      created_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      updated_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      users?: usersUpdateOneRequiredWithoutAccountsNestedInput;
      goals?: goalsUpdateManyWithoutAccountsNestedInput;
      transactions_transactions_to_account_idToaccounts?: transactionsUpdateManyWithoutAccounts_transactions_to_account_idToaccountsNestedInput;
    };

  export type accountsUncheckedUpdateWithoutTransactions_transactions_account_idToaccountsInput =
    {
      id?: StringFieldUpdateOperationsInput | string;
      name?: StringFieldUpdateOperationsInput | string;
      type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type;
      balance?:
        | NullableDecimalFieldUpdateOperationsInput
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      color?: NullableStringFieldUpdateOperationsInput | string | null;
      icon?: NullableStringFieldUpdateOperationsInput | string | null;
      is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
      user_id?: StringFieldUpdateOperationsInput | string;
      created_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      updated_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      goals?: goalsUncheckedUpdateManyWithoutAccountsNestedInput;
      transactions_transactions_to_account_idToaccounts?: transactionsUncheckedUpdateManyWithoutAccounts_transactions_to_account_idToaccountsNestedInput;
    };

  export type categoriesUpsertWithoutTransactionsInput = {
    update: XOR<
      categoriesUpdateWithoutTransactionsInput,
      categoriesUncheckedUpdateWithoutTransactionsInput
    >;
    create: XOR<
      categoriesCreateWithoutTransactionsInput,
      categoriesUncheckedCreateWithoutTransactionsInput
    >;
    where?: categoriesWhereInput;
  };

  export type categoriesUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: categoriesWhereInput;
    data: XOR<
      categoriesUpdateWithoutTransactionsInput,
      categoriesUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type categoriesUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    budgets?: budgetsUpdateManyWithoutCategoriesNestedInput;
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput;
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput;
    users?: usersUpdateOneWithoutCategoriesNestedInput;
  };

  export type categoriesUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    budgets?: budgetsUncheckedUpdateManyWithoutCategoriesNestedInput;
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput;
  };

  export type accountsUpsertWithoutTransactions_transactions_to_account_idToaccountsInput =
    {
      update: XOR<
        accountsUpdateWithoutTransactions_transactions_to_account_idToaccountsInput,
        accountsUncheckedUpdateWithoutTransactions_transactions_to_account_idToaccountsInput
      >;
      create: XOR<
        accountsCreateWithoutTransactions_transactions_to_account_idToaccountsInput,
        accountsUncheckedCreateWithoutTransactions_transactions_to_account_idToaccountsInput
      >;
      where?: accountsWhereInput;
    };

  export type accountsUpdateToOneWithWhereWithoutTransactions_transactions_to_account_idToaccountsInput =
    {
      where?: accountsWhereInput;
      data: XOR<
        accountsUpdateWithoutTransactions_transactions_to_account_idToaccountsInput,
        accountsUncheckedUpdateWithoutTransactions_transactions_to_account_idToaccountsInput
      >;
    };

  export type accountsUpdateWithoutTransactions_transactions_to_account_idToaccountsInput =
    {
      id?: StringFieldUpdateOperationsInput | string;
      name?: StringFieldUpdateOperationsInput | string;
      type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type;
      balance?:
        | NullableDecimalFieldUpdateOperationsInput
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      color?: NullableStringFieldUpdateOperationsInput | string | null;
      icon?: NullableStringFieldUpdateOperationsInput | string | null;
      is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
      created_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      updated_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      users?: usersUpdateOneRequiredWithoutAccountsNestedInput;
      goals?: goalsUpdateManyWithoutAccountsNestedInput;
      transactions_transactions_account_idToaccounts?: transactionsUpdateManyWithoutAccounts_transactions_account_idToaccountsNestedInput;
    };

  export type accountsUncheckedUpdateWithoutTransactions_transactions_to_account_idToaccountsInput =
    {
      id?: StringFieldUpdateOperationsInput | string;
      name?: StringFieldUpdateOperationsInput | string;
      type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type;
      balance?:
        | NullableDecimalFieldUpdateOperationsInput
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      color?: NullableStringFieldUpdateOperationsInput | string | null;
      icon?: NullableStringFieldUpdateOperationsInput | string | null;
      is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
      user_id?: StringFieldUpdateOperationsInput | string;
      created_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      updated_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      goals?: goalsUncheckedUpdateManyWithoutAccountsNestedInput;
      transactions_transactions_account_idToaccounts?: transactionsUncheckedUpdateManyWithoutAccounts_transactions_account_idToaccountsNestedInput;
    };

  export type usersUpsertWithoutTransactionsInput = {
    update: XOR<
      usersUpdateWithoutTransactionsInput,
      usersUncheckedUpdateWithoutTransactionsInput
    >;
    create: XOR<
      usersCreateWithoutTransactionsInput,
      usersUncheckedCreateWithoutTransactionsInput
    >;
    where?: usersWhereInput;
  };

  export type usersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: usersWhereInput;
    data: XOR<
      usersUpdateWithoutTransactionsInput,
      usersUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type usersUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts?: accountsUpdateManyWithoutUsersNestedInput;
    budgets?: budgetsUpdateManyWithoutUsersNestedInput;
    categories?: categoriesUpdateManyWithoutUsersNestedInput;
    goals?: goalsUpdateManyWithoutUsersNestedInput;
    reminders?: remindersUpdateManyWithoutUsersNestedInput;
    sync_states?: sync_statesUpdateOneWithoutUsersNestedInput;
  };

  export type usersUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    currency?: NullableStringFieldUpdateOperationsInput | string | null;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    theme?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts?: accountsUncheckedUpdateManyWithoutUsersNestedInput;
    budgets?: budgetsUncheckedUpdateManyWithoutUsersNestedInput;
    categories?: categoriesUncheckedUpdateManyWithoutUsersNestedInput;
    goals?: goalsUncheckedUpdateManyWithoutUsersNestedInput;
    reminders?: remindersUncheckedUpdateManyWithoutUsersNestedInput;
    sync_states?: sync_statesUncheckedUpdateOneWithoutUsersNestedInput;
  };

  export type accountsCreateWithoutUsersInput = {
    id?: string;
    name: string;
    type: $Enums.account_type;
    balance?: Decimal | DecimalJsLike | number | string | null;
    color?: string | null;
    icon?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    goals?: goalsCreateNestedManyWithoutAccountsInput;
    transactions_transactions_account_idToaccounts?: transactionsCreateNestedManyWithoutAccounts_transactions_account_idToaccountsInput;
    transactions_transactions_to_account_idToaccounts?: transactionsCreateNestedManyWithoutAccounts_transactions_to_account_idToaccountsInput;
  };

  export type accountsUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    type: $Enums.account_type;
    balance?: Decimal | DecimalJsLike | number | string | null;
    color?: string | null;
    icon?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    goals?: goalsUncheckedCreateNestedManyWithoutAccountsInput;
    transactions_transactions_account_idToaccounts?: transactionsUncheckedCreateNestedManyWithoutAccounts_transactions_account_idToaccountsInput;
    transactions_transactions_to_account_idToaccounts?: transactionsUncheckedCreateNestedManyWithoutAccounts_transactions_to_account_idToaccountsInput;
  };

  export type accountsCreateOrConnectWithoutUsersInput = {
    where: accountsWhereUniqueInput;
    create: XOR<
      accountsCreateWithoutUsersInput,
      accountsUncheckedCreateWithoutUsersInput
    >;
  };

  export type accountsCreateManyUsersInputEnvelope = {
    data: accountsCreateManyUsersInput | accountsCreateManyUsersInput[];
    skipDuplicates?: boolean;
  };

  export type budgetsCreateWithoutUsersInput = {
    id?: string;
    name: string;
    amount: Decimal | DecimalJsLike | number | string;
    period?: $Enums.budget_period | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    spent?: Decimal | DecimalJsLike | number | string | null;
    alert_at?: Decimal | DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    categories?: categoriesCreateNestedOneWithoutBudgetsInput;
  };

  export type budgetsUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    amount: Decimal | DecimalJsLike | number | string;
    period?: $Enums.budget_period | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    spent?: Decimal | DecimalJsLike | number | string | null;
    alert_at?: Decimal | DecimalJsLike | number | string | null;
    category_id?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type budgetsCreateOrConnectWithoutUsersInput = {
    where: budgetsWhereUniqueInput;
    create: XOR<
      budgetsCreateWithoutUsersInput,
      budgetsUncheckedCreateWithoutUsersInput
    >;
  };

  export type budgetsCreateManyUsersInputEnvelope = {
    data: budgetsCreateManyUsersInput | budgetsCreateManyUsersInput[];
    skipDuplicates?: boolean;
  };

  export type categoriesCreateWithoutUsersInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    type: $Enums.transaction_type;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    budgets?: budgetsCreateNestedManyWithoutCategoriesInput;
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput;
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput;
    transactions?: transactionsCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    type: $Enums.transaction_type;
    parent_id?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    budgets?: budgetsUncheckedCreateNestedManyWithoutCategoriesInput;
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput;
    transactions?: transactionsUncheckedCreateNestedManyWithoutCategoriesInput;
  };

  export type categoriesCreateOrConnectWithoutUsersInput = {
    where: categoriesWhereUniqueInput;
    create: XOR<
      categoriesCreateWithoutUsersInput,
      categoriesUncheckedCreateWithoutUsersInput
    >;
  };

  export type categoriesCreateManyUsersInputEnvelope = {
    data: categoriesCreateManyUsersInput | categoriesCreateManyUsersInput[];
    skipDuplicates?: boolean;
  };

  export type goalsCreateWithoutUsersInput = {
    id?: string;
    name: string;
    description?: string | null;
    target: Decimal | DecimalJsLike | number | string;
    current?: Decimal | DecimalJsLike | number | string | null;
    deadline?: Date | string | null;
    color?: string | null;
    icon?: string | null;
    auto_transfer?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts?: accountsCreateNestedOneWithoutGoalsInput;
  };

  export type goalsUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    description?: string | null;
    target: Decimal | DecimalJsLike | number | string;
    current?: Decimal | DecimalJsLike | number | string | null;
    deadline?: Date | string | null;
    color?: string | null;
    icon?: string | null;
    auto_transfer?: boolean | null;
    transfer_account_id?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type goalsCreateOrConnectWithoutUsersInput = {
    where: goalsWhereUniqueInput;
    create: XOR<
      goalsCreateWithoutUsersInput,
      goalsUncheckedCreateWithoutUsersInput
    >;
  };

  export type goalsCreateManyUsersInputEnvelope = {
    data: goalsCreateManyUsersInput | goalsCreateManyUsersInput[];
    skipDuplicates?: boolean;
  };

  export type remindersCreateWithoutUsersInput = {
    id?: string;
    title: string;
    description?: string | null;
    due_date: Date | string;
    is_completed?: boolean | null;
    is_recurring?: boolean | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type remindersUncheckedCreateWithoutUsersInput = {
    id?: string;
    title: string;
    description?: string | null;
    due_date: Date | string;
    is_completed?: boolean | null;
    is_recurring?: boolean | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type remindersCreateOrConnectWithoutUsersInput = {
    where: remindersWhereUniqueInput;
    create: XOR<
      remindersCreateWithoutUsersInput,
      remindersUncheckedCreateWithoutUsersInput
    >;
  };

  export type remindersCreateManyUsersInputEnvelope = {
    data: remindersCreateManyUsersInput | remindersCreateManyUsersInput[];
    skipDuplicates?: boolean;
  };

  export type sync_statesCreateWithoutUsersInput = {
    id?: string;
    last_sync?: Date | string | null;
    pending_ops?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type sync_statesUncheckedCreateWithoutUsersInput = {
    id?: string;
    last_sync?: Date | string | null;
    pending_ops?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type sync_statesCreateOrConnectWithoutUsersInput = {
    where: sync_statesWhereUniqueInput;
    create: XOR<
      sync_statesCreateWithoutUsersInput,
      sync_statesUncheckedCreateWithoutUsersInput
    >;
  };

  export type transactionsCreateWithoutUsersInput = {
    id?: string;
    amount: Decimal | DecimalJsLike | number | string;
    description: string;
    date?: Date | string | null;
    type: $Enums.transaction_type;
    notes?: string | null;
    location?: string | null;
    receipt_image?: string | null;
    is_recurring?: boolean | null;
    recurring_id?: string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    local_id?: string | null;
    is_synced?: boolean | null;
    last_sync_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    accounts_transactions_account_idToaccounts: accountsCreateNestedOneWithoutTransactions_transactions_account_idToaccountsInput;
    categories?: categoriesCreateNestedOneWithoutTransactionsInput;
    accounts_transactions_to_account_idToaccounts?: accountsCreateNestedOneWithoutTransactions_transactions_to_account_idToaccountsInput;
  };

  export type transactionsUncheckedCreateWithoutUsersInput = {
    id?: string;
    amount: Decimal | DecimalJsLike | number | string;
    description: string;
    date?: Date | string | null;
    type: $Enums.transaction_type;
    notes?: string | null;
    location?: string | null;
    receipt_image?: string | null;
    is_recurring?: boolean | null;
    recurring_id?: string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    account_id: string;
    to_account_id?: string | null;
    category_id?: string | null;
    local_id?: string | null;
    is_synced?: boolean | null;
    last_sync_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type transactionsCreateOrConnectWithoutUsersInput = {
    where: transactionsWhereUniqueInput;
    create: XOR<
      transactionsCreateWithoutUsersInput,
      transactionsUncheckedCreateWithoutUsersInput
    >;
  };

  export type transactionsCreateManyUsersInputEnvelope = {
    data: transactionsCreateManyUsersInput | transactionsCreateManyUsersInput[];
    skipDuplicates?: boolean;
  };

  export type accountsUpsertWithWhereUniqueWithoutUsersInput = {
    where: accountsWhereUniqueInput;
    update: XOR<
      accountsUpdateWithoutUsersInput,
      accountsUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      accountsCreateWithoutUsersInput,
      accountsUncheckedCreateWithoutUsersInput
    >;
  };

  export type accountsUpdateWithWhereUniqueWithoutUsersInput = {
    where: accountsWhereUniqueInput;
    data: XOR<
      accountsUpdateWithoutUsersInput,
      accountsUncheckedUpdateWithoutUsersInput
    >;
  };

  export type accountsUpdateManyWithWhereWithoutUsersInput = {
    where: accountsScalarWhereInput;
    data: XOR<
      accountsUpdateManyMutationInput,
      accountsUncheckedUpdateManyWithoutUsersInput
    >;
  };

  export type accountsScalarWhereInput = {
    AND?: accountsScalarWhereInput | accountsScalarWhereInput[];
    OR?: accountsScalarWhereInput[];
    NOT?: accountsScalarWhereInput | accountsScalarWhereInput[];
    id?: StringFilter<"accounts"> | string;
    name?: StringFilter<"accounts"> | string;
    type?: Enumaccount_typeFilter<"accounts"> | $Enums.account_type;
    balance?:
      | DecimalNullableFilter<"accounts">
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    color?: StringNullableFilter<"accounts"> | string | null;
    icon?: StringNullableFilter<"accounts"> | string | null;
    is_active?: BoolNullableFilter<"accounts"> | boolean | null;
    user_id?: StringFilter<"accounts"> | string;
    created_at?: DateTimeNullableFilter<"accounts"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"accounts"> | Date | string | null;
  };

  export type budgetsUpsertWithWhereUniqueWithoutUsersInput = {
    where: budgetsWhereUniqueInput;
    update: XOR<
      budgetsUpdateWithoutUsersInput,
      budgetsUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      budgetsCreateWithoutUsersInput,
      budgetsUncheckedCreateWithoutUsersInput
    >;
  };

  export type budgetsUpdateWithWhereUniqueWithoutUsersInput = {
    where: budgetsWhereUniqueInput;
    data: XOR<
      budgetsUpdateWithoutUsersInput,
      budgetsUncheckedUpdateWithoutUsersInput
    >;
  };

  export type budgetsUpdateManyWithWhereWithoutUsersInput = {
    where: budgetsScalarWhereInput;
    data: XOR<
      budgetsUpdateManyMutationInput,
      budgetsUncheckedUpdateManyWithoutUsersInput
    >;
  };

  export type categoriesUpsertWithWhereUniqueWithoutUsersInput = {
    where: categoriesWhereUniqueInput;
    update: XOR<
      categoriesUpdateWithoutUsersInput,
      categoriesUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      categoriesCreateWithoutUsersInput,
      categoriesUncheckedCreateWithoutUsersInput
    >;
  };

  export type categoriesUpdateWithWhereUniqueWithoutUsersInput = {
    where: categoriesWhereUniqueInput;
    data: XOR<
      categoriesUpdateWithoutUsersInput,
      categoriesUncheckedUpdateWithoutUsersInput
    >;
  };

  export type categoriesUpdateManyWithWhereWithoutUsersInput = {
    where: categoriesScalarWhereInput;
    data: XOR<
      categoriesUpdateManyMutationInput,
      categoriesUncheckedUpdateManyWithoutUsersInput
    >;
  };

  export type goalsUpsertWithWhereUniqueWithoutUsersInput = {
    where: goalsWhereUniqueInput;
    update: XOR<
      goalsUpdateWithoutUsersInput,
      goalsUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      goalsCreateWithoutUsersInput,
      goalsUncheckedCreateWithoutUsersInput
    >;
  };

  export type goalsUpdateWithWhereUniqueWithoutUsersInput = {
    where: goalsWhereUniqueInput;
    data: XOR<
      goalsUpdateWithoutUsersInput,
      goalsUncheckedUpdateWithoutUsersInput
    >;
  };

  export type goalsUpdateManyWithWhereWithoutUsersInput = {
    where: goalsScalarWhereInput;
    data: XOR<
      goalsUpdateManyMutationInput,
      goalsUncheckedUpdateManyWithoutUsersInput
    >;
  };

  export type remindersUpsertWithWhereUniqueWithoutUsersInput = {
    where: remindersWhereUniqueInput;
    update: XOR<
      remindersUpdateWithoutUsersInput,
      remindersUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      remindersCreateWithoutUsersInput,
      remindersUncheckedCreateWithoutUsersInput
    >;
  };

  export type remindersUpdateWithWhereUniqueWithoutUsersInput = {
    where: remindersWhereUniqueInput;
    data: XOR<
      remindersUpdateWithoutUsersInput,
      remindersUncheckedUpdateWithoutUsersInput
    >;
  };

  export type remindersUpdateManyWithWhereWithoutUsersInput = {
    where: remindersScalarWhereInput;
    data: XOR<
      remindersUpdateManyMutationInput,
      remindersUncheckedUpdateManyWithoutUsersInput
    >;
  };

  export type remindersScalarWhereInput = {
    AND?: remindersScalarWhereInput | remindersScalarWhereInput[];
    OR?: remindersScalarWhereInput[];
    NOT?: remindersScalarWhereInput | remindersScalarWhereInput[];
    id?: StringFilter<"reminders"> | string;
    title?: StringFilter<"reminders"> | string;
    description?: StringNullableFilter<"reminders"> | string | null;
    due_date?: DateTimeFilter<"reminders"> | Date | string;
    is_completed?: BoolNullableFilter<"reminders"> | boolean | null;
    is_recurring?: BoolNullableFilter<"reminders"> | boolean | null;
    recurring_rule?: JsonNullableFilter<"reminders">;
    user_id?: StringFilter<"reminders"> | string;
    created_at?: DateTimeNullableFilter<"reminders"> | Date | string | null;
    updated_at?: DateTimeNullableFilter<"reminders"> | Date | string | null;
  };

  export type sync_statesUpsertWithoutUsersInput = {
    update: XOR<
      sync_statesUpdateWithoutUsersInput,
      sync_statesUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      sync_statesCreateWithoutUsersInput,
      sync_statesUncheckedCreateWithoutUsersInput
    >;
    where?: sync_statesWhereInput;
  };

  export type sync_statesUpdateToOneWithWhereWithoutUsersInput = {
    where?: sync_statesWhereInput;
    data: XOR<
      sync_statesUpdateWithoutUsersInput,
      sync_statesUncheckedUpdateWithoutUsersInput
    >;
  };

  export type sync_statesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    last_sync?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    pending_ops?: NullableJsonNullValueInput | InputJsonValue;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type sync_statesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    last_sync?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    pending_ops?: NullableJsonNullValueInput | InputJsonValue;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type transactionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: transactionsWhereUniqueInput;
    update: XOR<
      transactionsUpdateWithoutUsersInput,
      transactionsUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      transactionsCreateWithoutUsersInput,
      transactionsUncheckedCreateWithoutUsersInput
    >;
  };

  export type transactionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: transactionsWhereUniqueInput;
    data: XOR<
      transactionsUpdateWithoutUsersInput,
      transactionsUncheckedUpdateWithoutUsersInput
    >;
  };

  export type transactionsUpdateManyWithWhereWithoutUsersInput = {
    where: transactionsScalarWhereInput;
    data: XOR<
      transactionsUpdateManyMutationInput,
      transactionsUncheckedUpdateManyWithoutUsersInput
    >;
  };

  export type goalsCreateManyAccountsInput = {
    id?: string;
    name: string;
    description?: string | null;
    target: Decimal | DecimalJsLike | number | string;
    current?: Decimal | DecimalJsLike | number | string | null;
    deadline?: Date | string | null;
    color?: string | null;
    icon?: string | null;
    auto_transfer?: boolean | null;
    user_id: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type transactionsCreateManyAccounts_transactions_account_idToaccountsInput =
    {
      id?: string;
      amount: Decimal | DecimalJsLike | number | string;
      description: string;
      date?: Date | string | null;
      type: $Enums.transaction_type;
      notes?: string | null;
      location?: string | null;
      receipt_image?: string | null;
      is_recurring?: boolean | null;
      recurring_id?: string | null;
      recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
      to_account_id?: string | null;
      category_id?: string | null;
      user_id: string;
      local_id?: string | null;
      is_synced?: boolean | null;
      last_sync_at?: Date | string | null;
      created_at?: Date | string | null;
      updated_at?: Date | string | null;
    };

  export type transactionsCreateManyAccounts_transactions_to_account_idToaccountsInput =
    {
      id?: string;
      amount: Decimal | DecimalJsLike | number | string;
      description: string;
      date?: Date | string | null;
      type: $Enums.transaction_type;
      notes?: string | null;
      location?: string | null;
      receipt_image?: string | null;
      is_recurring?: boolean | null;
      recurring_id?: string | null;
      recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
      account_id: string;
      category_id?: string | null;
      user_id: string;
      local_id?: string | null;
      is_synced?: boolean | null;
      last_sync_at?: Date | string | null;
      created_at?: Date | string | null;
      updated_at?: Date | string | null;
    };

  export type goalsUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    target?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    deadline?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    auto_transfer?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    users?: usersUpdateOneRequiredWithoutGoalsNestedInput;
  };

  export type goalsUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    target?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    deadline?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    auto_transfer?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type goalsUncheckedUpdateManyWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    target?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    deadline?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    auto_transfer?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type transactionsUpdateWithoutAccounts_transactions_account_idToaccountsInput =
    {
      id?: StringFieldUpdateOperationsInput | string;
      amount?:
        | DecimalFieldUpdateOperationsInput
        | Decimal
        | DecimalJsLike
        | number
        | string;
      description?: StringFieldUpdateOperationsInput | string;
      date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
      type?:
        | Enumtransaction_typeFieldUpdateOperationsInput
        | $Enums.transaction_type;
      notes?: NullableStringFieldUpdateOperationsInput | string | null;
      location?: NullableStringFieldUpdateOperationsInput | string | null;
      receipt_image?: NullableStringFieldUpdateOperationsInput | string | null;
      is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
      recurring_id?: NullableStringFieldUpdateOperationsInput | string | null;
      recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
      local_id?: NullableStringFieldUpdateOperationsInput | string | null;
      is_synced?: NullableBoolFieldUpdateOperationsInput | boolean | null;
      last_sync_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      created_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      updated_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      categories?: categoriesUpdateOneWithoutTransactionsNestedInput;
      accounts_transactions_to_account_idToaccounts?: accountsUpdateOneWithoutTransactions_transactions_to_account_idToaccountsNestedInput;
      users?: usersUpdateOneRequiredWithoutTransactionsNestedInput;
    };

  export type transactionsUncheckedUpdateWithoutAccounts_transactions_account_idToaccountsInput =
    {
      id?: StringFieldUpdateOperationsInput | string;
      amount?:
        | DecimalFieldUpdateOperationsInput
        | Decimal
        | DecimalJsLike
        | number
        | string;
      description?: StringFieldUpdateOperationsInput | string;
      date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
      type?:
        | Enumtransaction_typeFieldUpdateOperationsInput
        | $Enums.transaction_type;
      notes?: NullableStringFieldUpdateOperationsInput | string | null;
      location?: NullableStringFieldUpdateOperationsInput | string | null;
      receipt_image?: NullableStringFieldUpdateOperationsInput | string | null;
      is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
      recurring_id?: NullableStringFieldUpdateOperationsInput | string | null;
      recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
      to_account_id?: NullableStringFieldUpdateOperationsInput | string | null;
      category_id?: NullableStringFieldUpdateOperationsInput | string | null;
      user_id?: StringFieldUpdateOperationsInput | string;
      local_id?: NullableStringFieldUpdateOperationsInput | string | null;
      is_synced?: NullableBoolFieldUpdateOperationsInput | boolean | null;
      last_sync_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      created_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      updated_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
    };

  export type transactionsUncheckedUpdateManyWithoutAccounts_transactions_account_idToaccountsInput =
    {
      id?: StringFieldUpdateOperationsInput | string;
      amount?:
        | DecimalFieldUpdateOperationsInput
        | Decimal
        | DecimalJsLike
        | number
        | string;
      description?: StringFieldUpdateOperationsInput | string;
      date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
      type?:
        | Enumtransaction_typeFieldUpdateOperationsInput
        | $Enums.transaction_type;
      notes?: NullableStringFieldUpdateOperationsInput | string | null;
      location?: NullableStringFieldUpdateOperationsInput | string | null;
      receipt_image?: NullableStringFieldUpdateOperationsInput | string | null;
      is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
      recurring_id?: NullableStringFieldUpdateOperationsInput | string | null;
      recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
      to_account_id?: NullableStringFieldUpdateOperationsInput | string | null;
      category_id?: NullableStringFieldUpdateOperationsInput | string | null;
      user_id?: StringFieldUpdateOperationsInput | string;
      local_id?: NullableStringFieldUpdateOperationsInput | string | null;
      is_synced?: NullableBoolFieldUpdateOperationsInput | boolean | null;
      last_sync_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      created_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      updated_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
    };

  export type transactionsUpdateWithoutAccounts_transactions_to_account_idToaccountsInput =
    {
      id?: StringFieldUpdateOperationsInput | string;
      amount?:
        | DecimalFieldUpdateOperationsInput
        | Decimal
        | DecimalJsLike
        | number
        | string;
      description?: StringFieldUpdateOperationsInput | string;
      date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
      type?:
        | Enumtransaction_typeFieldUpdateOperationsInput
        | $Enums.transaction_type;
      notes?: NullableStringFieldUpdateOperationsInput | string | null;
      location?: NullableStringFieldUpdateOperationsInput | string | null;
      receipt_image?: NullableStringFieldUpdateOperationsInput | string | null;
      is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
      recurring_id?: NullableStringFieldUpdateOperationsInput | string | null;
      recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
      local_id?: NullableStringFieldUpdateOperationsInput | string | null;
      is_synced?: NullableBoolFieldUpdateOperationsInput | boolean | null;
      last_sync_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      created_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      updated_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      accounts_transactions_account_idToaccounts?: accountsUpdateOneRequiredWithoutTransactions_transactions_account_idToaccountsNestedInput;
      categories?: categoriesUpdateOneWithoutTransactionsNestedInput;
      users?: usersUpdateOneRequiredWithoutTransactionsNestedInput;
    };

  export type transactionsUncheckedUpdateWithoutAccounts_transactions_to_account_idToaccountsInput =
    {
      id?: StringFieldUpdateOperationsInput | string;
      amount?:
        | DecimalFieldUpdateOperationsInput
        | Decimal
        | DecimalJsLike
        | number
        | string;
      description?: StringFieldUpdateOperationsInput | string;
      date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
      type?:
        | Enumtransaction_typeFieldUpdateOperationsInput
        | $Enums.transaction_type;
      notes?: NullableStringFieldUpdateOperationsInput | string | null;
      location?: NullableStringFieldUpdateOperationsInput | string | null;
      receipt_image?: NullableStringFieldUpdateOperationsInput | string | null;
      is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
      recurring_id?: NullableStringFieldUpdateOperationsInput | string | null;
      recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
      account_id?: StringFieldUpdateOperationsInput | string;
      category_id?: NullableStringFieldUpdateOperationsInput | string | null;
      user_id?: StringFieldUpdateOperationsInput | string;
      local_id?: NullableStringFieldUpdateOperationsInput | string | null;
      is_synced?: NullableBoolFieldUpdateOperationsInput | boolean | null;
      last_sync_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      created_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      updated_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
    };

  export type transactionsUncheckedUpdateManyWithoutAccounts_transactions_to_account_idToaccountsInput =
    {
      id?: StringFieldUpdateOperationsInput | string;
      amount?:
        | DecimalFieldUpdateOperationsInput
        | Decimal
        | DecimalJsLike
        | number
        | string;
      description?: StringFieldUpdateOperationsInput | string;
      date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
      type?:
        | Enumtransaction_typeFieldUpdateOperationsInput
        | $Enums.transaction_type;
      notes?: NullableStringFieldUpdateOperationsInput | string | null;
      location?: NullableStringFieldUpdateOperationsInput | string | null;
      receipt_image?: NullableStringFieldUpdateOperationsInput | string | null;
      is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
      recurring_id?: NullableStringFieldUpdateOperationsInput | string | null;
      recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
      account_id?: StringFieldUpdateOperationsInput | string;
      category_id?: NullableStringFieldUpdateOperationsInput | string | null;
      user_id?: StringFieldUpdateOperationsInput | string;
      local_id?: NullableStringFieldUpdateOperationsInput | string | null;
      is_synced?: NullableBoolFieldUpdateOperationsInput | boolean | null;
      last_sync_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      created_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
      updated_at?:
        | NullableDateTimeFieldUpdateOperationsInput
        | Date
        | string
        | null;
    };

  export type budgetsCreateManyCategoriesInput = {
    id?: string;
    name: string;
    amount: Decimal | DecimalJsLike | number | string;
    period?: $Enums.budget_period | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    spent?: Decimal | DecimalJsLike | number | string | null;
    alert_at?: Decimal | DecimalJsLike | number | string | null;
    user_id: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type categoriesCreateManyCategoriesInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    type: $Enums.transaction_type;
    user_id?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type transactionsCreateManyCategoriesInput = {
    id?: string;
    amount: Decimal | DecimalJsLike | number | string;
    description: string;
    date?: Date | string | null;
    type: $Enums.transaction_type;
    notes?: string | null;
    location?: string | null;
    receipt_image?: string | null;
    is_recurring?: boolean | null;
    recurring_id?: string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    account_id: string;
    to_account_id?: string | null;
    user_id: string;
    local_id?: string | null;
    is_synced?: boolean | null;
    last_sync_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type budgetsUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    period?:
      | NullableEnumbudget_periodFieldUpdateOperationsInput
      | $Enums.budget_period
      | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    spent?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    alert_at?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    users?: usersUpdateOneRequiredWithoutBudgetsNestedInput;
  };

  export type budgetsUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    period?:
      | NullableEnumbudget_periodFieldUpdateOperationsInput
      | $Enums.budget_period
      | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    spent?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    alert_at?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type budgetsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    period?:
      | NullableEnumbudget_periodFieldUpdateOperationsInput
      | $Enums.budget_period
      | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    spent?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    alert_at?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type categoriesUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    budgets?: budgetsUpdateManyWithoutCategoriesNestedInput;
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput;
    users?: usersUpdateOneWithoutCategoriesNestedInput;
    transactions?: transactionsUpdateManyWithoutCategoriesNestedInput;
  };

  export type categoriesUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    user_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    budgets?: budgetsUncheckedUpdateManyWithoutCategoriesNestedInput;
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutCategoriesNestedInput;
  };

  export type categoriesUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    user_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type transactionsUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    description?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    receipt_image?: NullableStringFieldUpdateOperationsInput | string | null;
    is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    recurring_id?: NullableStringFieldUpdateOperationsInput | string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    local_id?: NullableStringFieldUpdateOperationsInput | string | null;
    is_synced?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_sync_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts_transactions_account_idToaccounts?: accountsUpdateOneRequiredWithoutTransactions_transactions_account_idToaccountsNestedInput;
    accounts_transactions_to_account_idToaccounts?: accountsUpdateOneWithoutTransactions_transactions_to_account_idToaccountsNestedInput;
    users?: usersUpdateOneRequiredWithoutTransactionsNestedInput;
  };

  export type transactionsUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    description?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    receipt_image?: NullableStringFieldUpdateOperationsInput | string | null;
    is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    recurring_id?: NullableStringFieldUpdateOperationsInput | string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    account_id?: StringFieldUpdateOperationsInput | string;
    to_account_id?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    local_id?: NullableStringFieldUpdateOperationsInput | string | null;
    is_synced?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_sync_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type transactionsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    description?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    receipt_image?: NullableStringFieldUpdateOperationsInput | string | null;
    is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    recurring_id?: NullableStringFieldUpdateOperationsInput | string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    account_id?: StringFieldUpdateOperationsInput | string;
    to_account_id?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    local_id?: NullableStringFieldUpdateOperationsInput | string | null;
    is_synced?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_sync_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type accountsCreateManyUsersInput = {
    id?: string;
    name: string;
    type: $Enums.account_type;
    balance?: Decimal | DecimalJsLike | number | string | null;
    color?: string | null;
    icon?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type budgetsCreateManyUsersInput = {
    id?: string;
    name: string;
    amount: Decimal | DecimalJsLike | number | string;
    period?: $Enums.budget_period | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    spent?: Decimal | DecimalJsLike | number | string | null;
    alert_at?: Decimal | DecimalJsLike | number | string | null;
    category_id?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type categoriesCreateManyUsersInput = {
    id?: string;
    name: string;
    description?: string | null;
    color?: string | null;
    icon?: string | null;
    type: $Enums.transaction_type;
    parent_id?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type goalsCreateManyUsersInput = {
    id?: string;
    name: string;
    description?: string | null;
    target: Decimal | DecimalJsLike | number | string;
    current?: Decimal | DecimalJsLike | number | string | null;
    deadline?: Date | string | null;
    color?: string | null;
    icon?: string | null;
    auto_transfer?: boolean | null;
    transfer_account_id?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type remindersCreateManyUsersInput = {
    id?: string;
    title: string;
    description?: string | null;
    due_date: Date | string;
    is_completed?: boolean | null;
    is_recurring?: boolean | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type transactionsCreateManyUsersInput = {
    id?: string;
    amount: Decimal | DecimalJsLike | number | string;
    description: string;
    date?: Date | string | null;
    type: $Enums.transaction_type;
    notes?: string | null;
    location?: string | null;
    receipt_image?: string | null;
    is_recurring?: boolean | null;
    recurring_id?: string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    account_id: string;
    to_account_id?: string | null;
    category_id?: string | null;
    local_id?: string | null;
    is_synced?: boolean | null;
    last_sync_at?: Date | string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
  };

  export type accountsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type;
    balance?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    goals?: goalsUpdateManyWithoutAccountsNestedInput;
    transactions_transactions_account_idToaccounts?: transactionsUpdateManyWithoutAccounts_transactions_account_idToaccountsNestedInput;
    transactions_transactions_to_account_idToaccounts?: transactionsUpdateManyWithoutAccounts_transactions_to_account_idToaccountsNestedInput;
  };

  export type accountsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type;
    balance?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    goals?: goalsUncheckedUpdateManyWithoutAccountsNestedInput;
    transactions_transactions_account_idToaccounts?: transactionsUncheckedUpdateManyWithoutAccounts_transactions_account_idToaccountsNestedInput;
    transactions_transactions_to_account_idToaccounts?: transactionsUncheckedUpdateManyWithoutAccounts_transactions_to_account_idToaccountsNestedInput;
  };

  export type accountsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type;
    balance?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type budgetsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    period?:
      | NullableEnumbudget_periodFieldUpdateOperationsInput
      | $Enums.budget_period
      | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    spent?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    alert_at?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    categories?: categoriesUpdateOneWithoutBudgetsNestedInput;
  };

  export type budgetsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    period?:
      | NullableEnumbudget_periodFieldUpdateOperationsInput
      | $Enums.budget_period
      | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    spent?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    alert_at?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    category_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type budgetsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    period?:
      | NullableEnumbudget_periodFieldUpdateOperationsInput
      | $Enums.budget_period
      | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    spent?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    alert_at?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    category_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type categoriesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    budgets?: budgetsUpdateManyWithoutCategoriesNestedInput;
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput;
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput;
    transactions?: transactionsUpdateManyWithoutCategoriesNestedInput;
  };

  export type categoriesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    budgets?: budgetsUncheckedUpdateManyWithoutCategoriesNestedInput;
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput;
    transactions?: transactionsUncheckedUpdateManyWithoutCategoriesNestedInput;
  };

  export type categoriesUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type goalsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    target?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    deadline?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    auto_transfer?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts?: accountsUpdateOneWithoutGoalsNestedInput;
  };

  export type goalsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    target?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    deadline?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    auto_transfer?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    transfer_account_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type goalsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    target?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    current?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    deadline?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    icon?: NullableStringFieldUpdateOperationsInput | string | null;
    auto_transfer?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    transfer_account_id?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type remindersUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type remindersUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type remindersUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type transactionsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    description?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    receipt_image?: NullableStringFieldUpdateOperationsInput | string | null;
    is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    recurring_id?: NullableStringFieldUpdateOperationsInput | string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    local_id?: NullableStringFieldUpdateOperationsInput | string | null;
    is_synced?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_sync_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    accounts_transactions_account_idToaccounts?: accountsUpdateOneRequiredWithoutTransactions_transactions_account_idToaccountsNestedInput;
    categories?: categoriesUpdateOneWithoutTransactionsNestedInput;
    accounts_transactions_to_account_idToaccounts?: accountsUpdateOneWithoutTransactions_transactions_to_account_idToaccountsNestedInput;
  };

  export type transactionsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    description?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    receipt_image?: NullableStringFieldUpdateOperationsInput | string | null;
    is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    recurring_id?: NullableStringFieldUpdateOperationsInput | string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    account_id?: StringFieldUpdateOperationsInput | string;
    to_account_id?: NullableStringFieldUpdateOperationsInput | string | null;
    category_id?: NullableStringFieldUpdateOperationsInput | string | null;
    local_id?: NullableStringFieldUpdateOperationsInput | string | null;
    is_synced?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_sync_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type transactionsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    description?: StringFieldUpdateOperationsInput | string;
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?:
      | Enumtransaction_typeFieldUpdateOperationsInput
      | $Enums.transaction_type;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    receipt_image?: NullableStringFieldUpdateOperationsInput | string | null;
    is_recurring?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    recurring_id?: NullableStringFieldUpdateOperationsInput | string | null;
    recurring_rule?: NullableJsonNullValueInput | InputJsonValue;
    account_id?: StringFieldUpdateOperationsInput | string;
    to_account_id?: NullableStringFieldUpdateOperationsInput | string | null;
    category_id?: NullableStringFieldUpdateOperationsInput | string | null;
    local_id?: NullableStringFieldUpdateOperationsInput | string | null;
    is_synced?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_sync_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
