
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
 * Model archivo_adjunto
 * 
 */
export type archivo_adjunto = $Result.DefaultSelection<Prisma.$archivo_adjuntoPayload>
/**
 * Model correo_log
 * 
 */
export type correo_log = $Result.DefaultSelection<Prisma.$correo_logPayload>
/**
 * Model estado_novedad
 * 
 */
export type estado_novedad = $Result.DefaultSelection<Prisma.$estado_novedadPayload>
/**
 * Model historial_novedad
 * 
 */
export type historial_novedad = $Result.DefaultSelection<Prisma.$historial_novedadPayload>
/**
 * Model notificacion
 * 
 */
export type notificacion = $Result.DefaultSelection<Prisma.$notificacionPayload>
/**
 * Model novedad
 * 
 */
export type novedad = $Result.DefaultSelection<Prisma.$novedadPayload>
/**
 * Model rol
 * 
 */
export type rol = $Result.DefaultSelection<Prisma.$rolPayload>
/**
 * Model tipo_novedad
 * 
 */
export type tipo_novedad = $Result.DefaultSelection<Prisma.$tipo_novedadPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model usuario_rol
 * 
 */
export type usuario_rol = $Result.DefaultSelection<Prisma.$usuario_rolPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Archivo_adjuntos
 * const archivo_adjuntos = await prisma.archivo_adjunto.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Archivo_adjuntos
   * const archivo_adjuntos = await prisma.archivo_adjunto.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
   * `prisma.archivo_adjunto`: Exposes CRUD operations for the **archivo_adjunto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Archivo_adjuntos
    * const archivo_adjuntos = await prisma.archivo_adjunto.findMany()
    * ```
    */
  get archivo_adjunto(): Prisma.archivo_adjuntoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.correo_log`: Exposes CRUD operations for the **correo_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Correo_logs
    * const correo_logs = await prisma.correo_log.findMany()
    * ```
    */
  get correo_log(): Prisma.correo_logDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estado_novedad`: Exposes CRUD operations for the **estado_novedad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estado_novedads
    * const estado_novedads = await prisma.estado_novedad.findMany()
    * ```
    */
  get estado_novedad(): Prisma.estado_novedadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historial_novedad`: Exposes CRUD operations for the **historial_novedad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historial_novedads
    * const historial_novedads = await prisma.historial_novedad.findMany()
    * ```
    */
  get historial_novedad(): Prisma.historial_novedadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacion`: Exposes CRUD operations for the **notificacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacions
    * const notificacions = await prisma.notificacion.findMany()
    * ```
    */
  get notificacion(): Prisma.notificacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.novedad`: Exposes CRUD operations for the **novedad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Novedads
    * const novedads = await prisma.novedad.findMany()
    * ```
    */
  get novedad(): Prisma.novedadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rol`: Exposes CRUD operations for the **rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.rolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipo_novedad`: Exposes CRUD operations for the **tipo_novedad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipo_novedads
    * const tipo_novedads = await prisma.tipo_novedad.findMany()
    * ```
    */
  get tipo_novedad(): Prisma.tipo_novedadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario_rol`: Exposes CRUD operations for the **usuario_rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuario_rols
    * const usuario_rols = await prisma.usuario_rol.findMany()
    * ```
    */
  get usuario_rol(): Prisma.usuario_rolDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    archivo_adjunto: 'archivo_adjunto',
    correo_log: 'correo_log',
    estado_novedad: 'estado_novedad',
    historial_novedad: 'historial_novedad',
    notificacion: 'notificacion',
    novedad: 'novedad',
    rol: 'rol',
    tipo_novedad: 'tipo_novedad',
    usuario: 'usuario',
    usuario_rol: 'usuario_rol'
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
      modelProps: "archivo_adjunto" | "correo_log" | "estado_novedad" | "historial_novedad" | "notificacion" | "novedad" | "rol" | "tipo_novedad" | "usuario" | "usuario_rol"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      archivo_adjunto: {
        payload: Prisma.$archivo_adjuntoPayload<ExtArgs>
        fields: Prisma.archivo_adjuntoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.archivo_adjuntoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivo_adjuntoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.archivo_adjuntoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivo_adjuntoPayload>
          }
          findFirst: {
            args: Prisma.archivo_adjuntoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivo_adjuntoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.archivo_adjuntoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivo_adjuntoPayload>
          }
          findMany: {
            args: Prisma.archivo_adjuntoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivo_adjuntoPayload>[]
          }
          create: {
            args: Prisma.archivo_adjuntoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivo_adjuntoPayload>
          }
          createMany: {
            args: Prisma.archivo_adjuntoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.archivo_adjuntoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivo_adjuntoPayload>[]
          }
          delete: {
            args: Prisma.archivo_adjuntoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivo_adjuntoPayload>
          }
          update: {
            args: Prisma.archivo_adjuntoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivo_adjuntoPayload>
          }
          deleteMany: {
            args: Prisma.archivo_adjuntoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.archivo_adjuntoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.archivo_adjuntoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivo_adjuntoPayload>[]
          }
          upsert: {
            args: Prisma.archivo_adjuntoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivo_adjuntoPayload>
          }
          aggregate: {
            args: Prisma.Archivo_adjuntoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArchivo_adjunto>
          }
          groupBy: {
            args: Prisma.archivo_adjuntoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Archivo_adjuntoGroupByOutputType>[]
          }
          count: {
            args: Prisma.archivo_adjuntoCountArgs<ExtArgs>
            result: $Utils.Optional<Archivo_adjuntoCountAggregateOutputType> | number
          }
        }
      }
      correo_log: {
        payload: Prisma.$correo_logPayload<ExtArgs>
        fields: Prisma.correo_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.correo_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$correo_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.correo_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$correo_logPayload>
          }
          findFirst: {
            args: Prisma.correo_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$correo_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.correo_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$correo_logPayload>
          }
          findMany: {
            args: Prisma.correo_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$correo_logPayload>[]
          }
          create: {
            args: Prisma.correo_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$correo_logPayload>
          }
          createMany: {
            args: Prisma.correo_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.correo_logCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$correo_logPayload>[]
          }
          delete: {
            args: Prisma.correo_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$correo_logPayload>
          }
          update: {
            args: Prisma.correo_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$correo_logPayload>
          }
          deleteMany: {
            args: Prisma.correo_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.correo_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.correo_logUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$correo_logPayload>[]
          }
          upsert: {
            args: Prisma.correo_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$correo_logPayload>
          }
          aggregate: {
            args: Prisma.Correo_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCorreo_log>
          }
          groupBy: {
            args: Prisma.correo_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<Correo_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.correo_logCountArgs<ExtArgs>
            result: $Utils.Optional<Correo_logCountAggregateOutputType> | number
          }
        }
      }
      estado_novedad: {
        payload: Prisma.$estado_novedadPayload<ExtArgs>
        fields: Prisma.estado_novedadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.estado_novedadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_novedadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.estado_novedadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_novedadPayload>
          }
          findFirst: {
            args: Prisma.estado_novedadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_novedadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.estado_novedadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_novedadPayload>
          }
          findMany: {
            args: Prisma.estado_novedadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_novedadPayload>[]
          }
          create: {
            args: Prisma.estado_novedadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_novedadPayload>
          }
          createMany: {
            args: Prisma.estado_novedadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.estado_novedadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_novedadPayload>[]
          }
          delete: {
            args: Prisma.estado_novedadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_novedadPayload>
          }
          update: {
            args: Prisma.estado_novedadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_novedadPayload>
          }
          deleteMany: {
            args: Prisma.estado_novedadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.estado_novedadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.estado_novedadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_novedadPayload>[]
          }
          upsert: {
            args: Prisma.estado_novedadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estado_novedadPayload>
          }
          aggregate: {
            args: Prisma.Estado_novedadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstado_novedad>
          }
          groupBy: {
            args: Prisma.estado_novedadGroupByArgs<ExtArgs>
            result: $Utils.Optional<Estado_novedadGroupByOutputType>[]
          }
          count: {
            args: Prisma.estado_novedadCountArgs<ExtArgs>
            result: $Utils.Optional<Estado_novedadCountAggregateOutputType> | number
          }
        }
      }
      historial_novedad: {
        payload: Prisma.$historial_novedadPayload<ExtArgs>
        fields: Prisma.historial_novedadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.historial_novedadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_novedadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.historial_novedadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_novedadPayload>
          }
          findFirst: {
            args: Prisma.historial_novedadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_novedadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.historial_novedadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_novedadPayload>
          }
          findMany: {
            args: Prisma.historial_novedadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_novedadPayload>[]
          }
          create: {
            args: Prisma.historial_novedadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_novedadPayload>
          }
          createMany: {
            args: Prisma.historial_novedadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.historial_novedadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_novedadPayload>[]
          }
          delete: {
            args: Prisma.historial_novedadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_novedadPayload>
          }
          update: {
            args: Prisma.historial_novedadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_novedadPayload>
          }
          deleteMany: {
            args: Prisma.historial_novedadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.historial_novedadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.historial_novedadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_novedadPayload>[]
          }
          upsert: {
            args: Prisma.historial_novedadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_novedadPayload>
          }
          aggregate: {
            args: Prisma.Historial_novedadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorial_novedad>
          }
          groupBy: {
            args: Prisma.historial_novedadGroupByArgs<ExtArgs>
            result: $Utils.Optional<Historial_novedadGroupByOutputType>[]
          }
          count: {
            args: Prisma.historial_novedadCountArgs<ExtArgs>
            result: $Utils.Optional<Historial_novedadCountAggregateOutputType> | number
          }
        }
      }
      notificacion: {
        payload: Prisma.$notificacionPayload<ExtArgs>
        fields: Prisma.notificacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          findFirst: {
            args: Prisma.notificacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          findMany: {
            args: Prisma.notificacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>[]
          }
          create: {
            args: Prisma.notificacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          createMany: {
            args: Prisma.notificacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>[]
          }
          delete: {
            args: Prisma.notificacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          update: {
            args: Prisma.notificacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          deleteMany: {
            args: Prisma.notificacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>[]
          }
          upsert: {
            args: Prisma.notificacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          aggregate: {
            args: Prisma.NotificacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacion>
          }
          groupBy: {
            args: Prisma.notificacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificacionCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacionCountAggregateOutputType> | number
          }
        }
      }
      novedad: {
        payload: Prisma.$novedadPayload<ExtArgs>
        fields: Prisma.novedadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.novedadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.novedadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadPayload>
          }
          findFirst: {
            args: Prisma.novedadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.novedadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadPayload>
          }
          findMany: {
            args: Prisma.novedadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadPayload>[]
          }
          create: {
            args: Prisma.novedadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadPayload>
          }
          createMany: {
            args: Prisma.novedadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.novedadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadPayload>[]
          }
          delete: {
            args: Prisma.novedadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadPayload>
          }
          update: {
            args: Prisma.novedadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadPayload>
          }
          deleteMany: {
            args: Prisma.novedadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.novedadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.novedadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadPayload>[]
          }
          upsert: {
            args: Prisma.novedadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$novedadPayload>
          }
          aggregate: {
            args: Prisma.NovedadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNovedad>
          }
          groupBy: {
            args: Prisma.novedadGroupByArgs<ExtArgs>
            result: $Utils.Optional<NovedadGroupByOutputType>[]
          }
          count: {
            args: Prisma.novedadCountArgs<ExtArgs>
            result: $Utils.Optional<NovedadCountAggregateOutputType> | number
          }
        }
      }
      rol: {
        payload: Prisma.$rolPayload<ExtArgs>
        fields: Prisma.rolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          findFirst: {
            args: Prisma.rolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          findMany: {
            args: Prisma.rolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          create: {
            args: Prisma.rolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          createMany: {
            args: Prisma.rolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          delete: {
            args: Prisma.rolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          update: {
            args: Prisma.rolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          deleteMany: {
            args: Prisma.rolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          upsert: {
            args: Prisma.rolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.rolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      tipo_novedad: {
        payload: Prisma.$tipo_novedadPayload<ExtArgs>
        fields: Prisma.tipo_novedadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipo_novedadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_novedadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipo_novedadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_novedadPayload>
          }
          findFirst: {
            args: Prisma.tipo_novedadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_novedadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipo_novedadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_novedadPayload>
          }
          findMany: {
            args: Prisma.tipo_novedadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_novedadPayload>[]
          }
          create: {
            args: Prisma.tipo_novedadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_novedadPayload>
          }
          createMany: {
            args: Prisma.tipo_novedadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tipo_novedadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_novedadPayload>[]
          }
          delete: {
            args: Prisma.tipo_novedadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_novedadPayload>
          }
          update: {
            args: Prisma.tipo_novedadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_novedadPayload>
          }
          deleteMany: {
            args: Prisma.tipo_novedadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipo_novedadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tipo_novedadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_novedadPayload>[]
          }
          upsert: {
            args: Prisma.tipo_novedadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_novedadPayload>
          }
          aggregate: {
            args: Prisma.Tipo_novedadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo_novedad>
          }
          groupBy: {
            args: Prisma.tipo_novedadGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipo_novedadGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipo_novedadCountArgs<ExtArgs>
            result: $Utils.Optional<Tipo_novedadCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      usuario_rol: {
        payload: Prisma.$usuario_rolPayload<ExtArgs>
        fields: Prisma.usuario_rolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuario_rolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuario_rolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          findFirst: {
            args: Prisma.usuario_rolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuario_rolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          findMany: {
            args: Prisma.usuario_rolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>[]
          }
          create: {
            args: Prisma.usuario_rolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          createMany: {
            args: Prisma.usuario_rolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuario_rolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>[]
          }
          delete: {
            args: Prisma.usuario_rolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          update: {
            args: Prisma.usuario_rolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          deleteMany: {
            args: Prisma.usuario_rolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuario_rolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuario_rolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>[]
          }
          upsert: {
            args: Prisma.usuario_rolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          aggregate: {
            args: Prisma.Usuario_rolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario_rol>
          }
          groupBy: {
            args: Prisma.usuario_rolGroupByArgs<ExtArgs>
            result: $Utils.Optional<Usuario_rolGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuario_rolCountArgs<ExtArgs>
            result: $Utils.Optional<Usuario_rolCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    archivo_adjunto?: archivo_adjuntoOmit
    correo_log?: correo_logOmit
    estado_novedad?: estado_novedadOmit
    historial_novedad?: historial_novedadOmit
    notificacion?: notificacionOmit
    novedad?: novedadOmit
    rol?: rolOmit
    tipo_novedad?: tipo_novedadOmit
    usuario?: usuarioOmit
    usuario_rol?: usuario_rolOmit
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

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type Estado_novedadCountOutputType
   */

  export type Estado_novedadCountOutputType = {
    historial_novedad: number
    novedad: number
  }

  export type Estado_novedadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial_novedad?: boolean | Estado_novedadCountOutputTypeCountHistorial_novedadArgs
    novedad?: boolean | Estado_novedadCountOutputTypeCountNovedadArgs
  }

  // Custom InputTypes
  /**
   * Estado_novedadCountOutputType without action
   */
  export type Estado_novedadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado_novedadCountOutputType
     */
    select?: Estado_novedadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Estado_novedadCountOutputType without action
   */
  export type Estado_novedadCountOutputTypeCountHistorial_novedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historial_novedadWhereInput
  }

  /**
   * Estado_novedadCountOutputType without action
   */
  export type Estado_novedadCountOutputTypeCountNovedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: novedadWhereInput
  }


  /**
   * Count Type NotificacionCountOutputType
   */

  export type NotificacionCountOutputType = {
    correo_log: number
  }

  export type NotificacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    correo_log?: boolean | NotificacionCountOutputTypeCountCorreo_logArgs
  }

  // Custom InputTypes
  /**
   * NotificacionCountOutputType without action
   */
  export type NotificacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificacionCountOutputType
     */
    select?: NotificacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotificacionCountOutputType without action
   */
  export type NotificacionCountOutputTypeCountCorreo_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: correo_logWhereInput
  }


  /**
   * Count Type NovedadCountOutputType
   */

  export type NovedadCountOutputType = {
    archivo_adjunto: number
    historial_novedad: number
    notificacion: number
  }

  export type NovedadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archivo_adjunto?: boolean | NovedadCountOutputTypeCountArchivo_adjuntoArgs
    historial_novedad?: boolean | NovedadCountOutputTypeCountHistorial_novedadArgs
    notificacion?: boolean | NovedadCountOutputTypeCountNotificacionArgs
  }

  // Custom InputTypes
  /**
   * NovedadCountOutputType without action
   */
  export type NovedadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NovedadCountOutputType
     */
    select?: NovedadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NovedadCountOutputType without action
   */
  export type NovedadCountOutputTypeCountArchivo_adjuntoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: archivo_adjuntoWhereInput
  }

  /**
   * NovedadCountOutputType without action
   */
  export type NovedadCountOutputTypeCountHistorial_novedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historial_novedadWhereInput
  }

  /**
   * NovedadCountOutputType without action
   */
  export type NovedadCountOutputTypeCountNotificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificacionWhereInput
  }


  /**
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    usuario_rol: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario_rol?: boolean | RolCountOutputTypeCountUsuario_rolArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuario_rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_rolWhereInput
  }


  /**
   * Count Type Tipo_novedadCountOutputType
   */

  export type Tipo_novedadCountOutputType = {
    novedad: number
  }

  export type Tipo_novedadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novedad?: boolean | Tipo_novedadCountOutputTypeCountNovedadArgs
  }

  // Custom InputTypes
  /**
   * Tipo_novedadCountOutputType without action
   */
  export type Tipo_novedadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_novedadCountOutputType
     */
    select?: Tipo_novedadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipo_novedadCountOutputType without action
   */
  export type Tipo_novedadCountOutputTypeCountNovedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: novedadWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    historial_novedad: number
    notificacion: number
    novedad: number
    usuario_rol: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial_novedad?: boolean | UsuarioCountOutputTypeCountHistorial_novedadArgs
    notificacion?: boolean | UsuarioCountOutputTypeCountNotificacionArgs
    novedad?: boolean | UsuarioCountOutputTypeCountNovedadArgs
    usuario_rol?: boolean | UsuarioCountOutputTypeCountUsuario_rolArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountHistorial_novedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historial_novedadWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountNotificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificacionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountNovedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: novedadWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountUsuario_rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_rolWhereInput
  }


  /**
   * Models
   */

  /**
   * Model archivo_adjunto
   */

  export type AggregateArchivo_adjunto = {
    _count: Archivo_adjuntoCountAggregateOutputType | null
    _avg: Archivo_adjuntoAvgAggregateOutputType | null
    _sum: Archivo_adjuntoSumAggregateOutputType | null
    _min: Archivo_adjuntoMinAggregateOutputType | null
    _max: Archivo_adjuntoMaxAggregateOutputType | null
  }

  export type Archivo_adjuntoAvgAggregateOutputType = {
    id_archivo: number | null
    id_novedad: number | null
  }

  export type Archivo_adjuntoSumAggregateOutputType = {
    id_archivo: number | null
    id_novedad: number | null
  }

  export type Archivo_adjuntoMinAggregateOutputType = {
    id_archivo: number | null
    id_novedad: number | null
    nombre_archivo: string | null
    ruta_archivo: string | null
    fecha_subida: Date | null
  }

  export type Archivo_adjuntoMaxAggregateOutputType = {
    id_archivo: number | null
    id_novedad: number | null
    nombre_archivo: string | null
    ruta_archivo: string | null
    fecha_subida: Date | null
  }

  export type Archivo_adjuntoCountAggregateOutputType = {
    id_archivo: number
    id_novedad: number
    nombre_archivo: number
    ruta_archivo: number
    fecha_subida: number
    _all: number
  }


  export type Archivo_adjuntoAvgAggregateInputType = {
    id_archivo?: true
    id_novedad?: true
  }

  export type Archivo_adjuntoSumAggregateInputType = {
    id_archivo?: true
    id_novedad?: true
  }

  export type Archivo_adjuntoMinAggregateInputType = {
    id_archivo?: true
    id_novedad?: true
    nombre_archivo?: true
    ruta_archivo?: true
    fecha_subida?: true
  }

  export type Archivo_adjuntoMaxAggregateInputType = {
    id_archivo?: true
    id_novedad?: true
    nombre_archivo?: true
    ruta_archivo?: true
    fecha_subida?: true
  }

  export type Archivo_adjuntoCountAggregateInputType = {
    id_archivo?: true
    id_novedad?: true
    nombre_archivo?: true
    ruta_archivo?: true
    fecha_subida?: true
    _all?: true
  }

  export type Archivo_adjuntoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which archivo_adjunto to aggregate.
     */
    where?: archivo_adjuntoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archivo_adjuntos to fetch.
     */
    orderBy?: archivo_adjuntoOrderByWithRelationInput | archivo_adjuntoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: archivo_adjuntoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archivo_adjuntos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archivo_adjuntos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned archivo_adjuntos
    **/
    _count?: true | Archivo_adjuntoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Archivo_adjuntoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Archivo_adjuntoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Archivo_adjuntoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Archivo_adjuntoMaxAggregateInputType
  }

  export type GetArchivo_adjuntoAggregateType<T extends Archivo_adjuntoAggregateArgs> = {
        [P in keyof T & keyof AggregateArchivo_adjunto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchivo_adjunto[P]>
      : GetScalarType<T[P], AggregateArchivo_adjunto[P]>
  }




  export type archivo_adjuntoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: archivo_adjuntoWhereInput
    orderBy?: archivo_adjuntoOrderByWithAggregationInput | archivo_adjuntoOrderByWithAggregationInput[]
    by: Archivo_adjuntoScalarFieldEnum[] | Archivo_adjuntoScalarFieldEnum
    having?: archivo_adjuntoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Archivo_adjuntoCountAggregateInputType | true
    _avg?: Archivo_adjuntoAvgAggregateInputType
    _sum?: Archivo_adjuntoSumAggregateInputType
    _min?: Archivo_adjuntoMinAggregateInputType
    _max?: Archivo_adjuntoMaxAggregateInputType
  }

  export type Archivo_adjuntoGroupByOutputType = {
    id_archivo: number
    id_novedad: number | null
    nombre_archivo: string | null
    ruta_archivo: string | null
    fecha_subida: Date | null
    _count: Archivo_adjuntoCountAggregateOutputType | null
    _avg: Archivo_adjuntoAvgAggregateOutputType | null
    _sum: Archivo_adjuntoSumAggregateOutputType | null
    _min: Archivo_adjuntoMinAggregateOutputType | null
    _max: Archivo_adjuntoMaxAggregateOutputType | null
  }

  type GetArchivo_adjuntoGroupByPayload<T extends archivo_adjuntoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Archivo_adjuntoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Archivo_adjuntoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Archivo_adjuntoGroupByOutputType[P]>
            : GetScalarType<T[P], Archivo_adjuntoGroupByOutputType[P]>
        }
      >
    >


  export type archivo_adjuntoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_archivo?: boolean
    id_novedad?: boolean
    nombre_archivo?: boolean
    ruta_archivo?: boolean
    fecha_subida?: boolean
    novedad?: boolean | archivo_adjunto$novedadArgs<ExtArgs>
  }, ExtArgs["result"]["archivo_adjunto"]>

  export type archivo_adjuntoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_archivo?: boolean
    id_novedad?: boolean
    nombre_archivo?: boolean
    ruta_archivo?: boolean
    fecha_subida?: boolean
    novedad?: boolean | archivo_adjunto$novedadArgs<ExtArgs>
  }, ExtArgs["result"]["archivo_adjunto"]>

  export type archivo_adjuntoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_archivo?: boolean
    id_novedad?: boolean
    nombre_archivo?: boolean
    ruta_archivo?: boolean
    fecha_subida?: boolean
    novedad?: boolean | archivo_adjunto$novedadArgs<ExtArgs>
  }, ExtArgs["result"]["archivo_adjunto"]>

  export type archivo_adjuntoSelectScalar = {
    id_archivo?: boolean
    id_novedad?: boolean
    nombre_archivo?: boolean
    ruta_archivo?: boolean
    fecha_subida?: boolean
  }

  export type archivo_adjuntoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_archivo" | "id_novedad" | "nombre_archivo" | "ruta_archivo" | "fecha_subida", ExtArgs["result"]["archivo_adjunto"]>
  export type archivo_adjuntoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novedad?: boolean | archivo_adjunto$novedadArgs<ExtArgs>
  }
  export type archivo_adjuntoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novedad?: boolean | archivo_adjunto$novedadArgs<ExtArgs>
  }
  export type archivo_adjuntoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novedad?: boolean | archivo_adjunto$novedadArgs<ExtArgs>
  }

  export type $archivo_adjuntoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "archivo_adjunto"
    objects: {
      novedad: Prisma.$novedadPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_archivo: number
      id_novedad: number | null
      nombre_archivo: string | null
      ruta_archivo: string | null
      fecha_subida: Date | null
    }, ExtArgs["result"]["archivo_adjunto"]>
    composites: {}
  }

  type archivo_adjuntoGetPayload<S extends boolean | null | undefined | archivo_adjuntoDefaultArgs> = $Result.GetResult<Prisma.$archivo_adjuntoPayload, S>

  type archivo_adjuntoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<archivo_adjuntoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Archivo_adjuntoCountAggregateInputType | true
    }

  export interface archivo_adjuntoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['archivo_adjunto'], meta: { name: 'archivo_adjunto' } }
    /**
     * Find zero or one Archivo_adjunto that matches the filter.
     * @param {archivo_adjuntoFindUniqueArgs} args - Arguments to find a Archivo_adjunto
     * @example
     * // Get one Archivo_adjunto
     * const archivo_adjunto = await prisma.archivo_adjunto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends archivo_adjuntoFindUniqueArgs>(args: SelectSubset<T, archivo_adjuntoFindUniqueArgs<ExtArgs>>): Prisma__archivo_adjuntoClient<$Result.GetResult<Prisma.$archivo_adjuntoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Archivo_adjunto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {archivo_adjuntoFindUniqueOrThrowArgs} args - Arguments to find a Archivo_adjunto
     * @example
     * // Get one Archivo_adjunto
     * const archivo_adjunto = await prisma.archivo_adjunto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends archivo_adjuntoFindUniqueOrThrowArgs>(args: SelectSubset<T, archivo_adjuntoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__archivo_adjuntoClient<$Result.GetResult<Prisma.$archivo_adjuntoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archivo_adjunto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivo_adjuntoFindFirstArgs} args - Arguments to find a Archivo_adjunto
     * @example
     * // Get one Archivo_adjunto
     * const archivo_adjunto = await prisma.archivo_adjunto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends archivo_adjuntoFindFirstArgs>(args?: SelectSubset<T, archivo_adjuntoFindFirstArgs<ExtArgs>>): Prisma__archivo_adjuntoClient<$Result.GetResult<Prisma.$archivo_adjuntoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archivo_adjunto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivo_adjuntoFindFirstOrThrowArgs} args - Arguments to find a Archivo_adjunto
     * @example
     * // Get one Archivo_adjunto
     * const archivo_adjunto = await prisma.archivo_adjunto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends archivo_adjuntoFindFirstOrThrowArgs>(args?: SelectSubset<T, archivo_adjuntoFindFirstOrThrowArgs<ExtArgs>>): Prisma__archivo_adjuntoClient<$Result.GetResult<Prisma.$archivo_adjuntoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Archivo_adjuntos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivo_adjuntoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Archivo_adjuntos
     * const archivo_adjuntos = await prisma.archivo_adjunto.findMany()
     * 
     * // Get first 10 Archivo_adjuntos
     * const archivo_adjuntos = await prisma.archivo_adjunto.findMany({ take: 10 })
     * 
     * // Only select the `id_archivo`
     * const archivo_adjuntoWithId_archivoOnly = await prisma.archivo_adjunto.findMany({ select: { id_archivo: true } })
     * 
     */
    findMany<T extends archivo_adjuntoFindManyArgs>(args?: SelectSubset<T, archivo_adjuntoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivo_adjuntoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Archivo_adjunto.
     * @param {archivo_adjuntoCreateArgs} args - Arguments to create a Archivo_adjunto.
     * @example
     * // Create one Archivo_adjunto
     * const Archivo_adjunto = await prisma.archivo_adjunto.create({
     *   data: {
     *     // ... data to create a Archivo_adjunto
     *   }
     * })
     * 
     */
    create<T extends archivo_adjuntoCreateArgs>(args: SelectSubset<T, archivo_adjuntoCreateArgs<ExtArgs>>): Prisma__archivo_adjuntoClient<$Result.GetResult<Prisma.$archivo_adjuntoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Archivo_adjuntos.
     * @param {archivo_adjuntoCreateManyArgs} args - Arguments to create many Archivo_adjuntos.
     * @example
     * // Create many Archivo_adjuntos
     * const archivo_adjunto = await prisma.archivo_adjunto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends archivo_adjuntoCreateManyArgs>(args?: SelectSubset<T, archivo_adjuntoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Archivo_adjuntos and returns the data saved in the database.
     * @param {archivo_adjuntoCreateManyAndReturnArgs} args - Arguments to create many Archivo_adjuntos.
     * @example
     * // Create many Archivo_adjuntos
     * const archivo_adjunto = await prisma.archivo_adjunto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Archivo_adjuntos and only return the `id_archivo`
     * const archivo_adjuntoWithId_archivoOnly = await prisma.archivo_adjunto.createManyAndReturn({
     *   select: { id_archivo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends archivo_adjuntoCreateManyAndReturnArgs>(args?: SelectSubset<T, archivo_adjuntoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivo_adjuntoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Archivo_adjunto.
     * @param {archivo_adjuntoDeleteArgs} args - Arguments to delete one Archivo_adjunto.
     * @example
     * // Delete one Archivo_adjunto
     * const Archivo_adjunto = await prisma.archivo_adjunto.delete({
     *   where: {
     *     // ... filter to delete one Archivo_adjunto
     *   }
     * })
     * 
     */
    delete<T extends archivo_adjuntoDeleteArgs>(args: SelectSubset<T, archivo_adjuntoDeleteArgs<ExtArgs>>): Prisma__archivo_adjuntoClient<$Result.GetResult<Prisma.$archivo_adjuntoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Archivo_adjunto.
     * @param {archivo_adjuntoUpdateArgs} args - Arguments to update one Archivo_adjunto.
     * @example
     * // Update one Archivo_adjunto
     * const archivo_adjunto = await prisma.archivo_adjunto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends archivo_adjuntoUpdateArgs>(args: SelectSubset<T, archivo_adjuntoUpdateArgs<ExtArgs>>): Prisma__archivo_adjuntoClient<$Result.GetResult<Prisma.$archivo_adjuntoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Archivo_adjuntos.
     * @param {archivo_adjuntoDeleteManyArgs} args - Arguments to filter Archivo_adjuntos to delete.
     * @example
     * // Delete a few Archivo_adjuntos
     * const { count } = await prisma.archivo_adjunto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends archivo_adjuntoDeleteManyArgs>(args?: SelectSubset<T, archivo_adjuntoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archivo_adjuntos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivo_adjuntoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Archivo_adjuntos
     * const archivo_adjunto = await prisma.archivo_adjunto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends archivo_adjuntoUpdateManyArgs>(args: SelectSubset<T, archivo_adjuntoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archivo_adjuntos and returns the data updated in the database.
     * @param {archivo_adjuntoUpdateManyAndReturnArgs} args - Arguments to update many Archivo_adjuntos.
     * @example
     * // Update many Archivo_adjuntos
     * const archivo_adjunto = await prisma.archivo_adjunto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Archivo_adjuntos and only return the `id_archivo`
     * const archivo_adjuntoWithId_archivoOnly = await prisma.archivo_adjunto.updateManyAndReturn({
     *   select: { id_archivo: true },
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
    updateManyAndReturn<T extends archivo_adjuntoUpdateManyAndReturnArgs>(args: SelectSubset<T, archivo_adjuntoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivo_adjuntoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Archivo_adjunto.
     * @param {archivo_adjuntoUpsertArgs} args - Arguments to update or create a Archivo_adjunto.
     * @example
     * // Update or create a Archivo_adjunto
     * const archivo_adjunto = await prisma.archivo_adjunto.upsert({
     *   create: {
     *     // ... data to create a Archivo_adjunto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Archivo_adjunto we want to update
     *   }
     * })
     */
    upsert<T extends archivo_adjuntoUpsertArgs>(args: SelectSubset<T, archivo_adjuntoUpsertArgs<ExtArgs>>): Prisma__archivo_adjuntoClient<$Result.GetResult<Prisma.$archivo_adjuntoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Archivo_adjuntos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivo_adjuntoCountArgs} args - Arguments to filter Archivo_adjuntos to count.
     * @example
     * // Count the number of Archivo_adjuntos
     * const count = await prisma.archivo_adjunto.count({
     *   where: {
     *     // ... the filter for the Archivo_adjuntos we want to count
     *   }
     * })
    **/
    count<T extends archivo_adjuntoCountArgs>(
      args?: Subset<T, archivo_adjuntoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Archivo_adjuntoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Archivo_adjunto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Archivo_adjuntoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Archivo_adjuntoAggregateArgs>(args: Subset<T, Archivo_adjuntoAggregateArgs>): Prisma.PrismaPromise<GetArchivo_adjuntoAggregateType<T>>

    /**
     * Group by Archivo_adjunto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivo_adjuntoGroupByArgs} args - Group by arguments.
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
      T extends archivo_adjuntoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: archivo_adjuntoGroupByArgs['orderBy'] }
        : { orderBy?: archivo_adjuntoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, archivo_adjuntoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchivo_adjuntoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the archivo_adjunto model
   */
  readonly fields: archivo_adjuntoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for archivo_adjunto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__archivo_adjuntoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    novedad<T extends archivo_adjunto$novedadArgs<ExtArgs> = {}>(args?: Subset<T, archivo_adjunto$novedadArgs<ExtArgs>>): Prisma__novedadClient<$Result.GetResult<Prisma.$novedadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the archivo_adjunto model
   */
  interface archivo_adjuntoFieldRefs {
    readonly id_archivo: FieldRef<"archivo_adjunto", 'Int'>
    readonly id_novedad: FieldRef<"archivo_adjunto", 'Int'>
    readonly nombre_archivo: FieldRef<"archivo_adjunto", 'String'>
    readonly ruta_archivo: FieldRef<"archivo_adjunto", 'String'>
    readonly fecha_subida: FieldRef<"archivo_adjunto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * archivo_adjunto findUnique
   */
  export type archivo_adjuntoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivo_adjunto
     */
    select?: archivo_adjuntoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivo_adjunto
     */
    omit?: archivo_adjuntoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivo_adjuntoInclude<ExtArgs> | null
    /**
     * Filter, which archivo_adjunto to fetch.
     */
    where: archivo_adjuntoWhereUniqueInput
  }

  /**
   * archivo_adjunto findUniqueOrThrow
   */
  export type archivo_adjuntoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivo_adjunto
     */
    select?: archivo_adjuntoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivo_adjunto
     */
    omit?: archivo_adjuntoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivo_adjuntoInclude<ExtArgs> | null
    /**
     * Filter, which archivo_adjunto to fetch.
     */
    where: archivo_adjuntoWhereUniqueInput
  }

  /**
   * archivo_adjunto findFirst
   */
  export type archivo_adjuntoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivo_adjunto
     */
    select?: archivo_adjuntoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivo_adjunto
     */
    omit?: archivo_adjuntoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivo_adjuntoInclude<ExtArgs> | null
    /**
     * Filter, which archivo_adjunto to fetch.
     */
    where?: archivo_adjuntoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archivo_adjuntos to fetch.
     */
    orderBy?: archivo_adjuntoOrderByWithRelationInput | archivo_adjuntoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for archivo_adjuntos.
     */
    cursor?: archivo_adjuntoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archivo_adjuntos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archivo_adjuntos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of archivo_adjuntos.
     */
    distinct?: Archivo_adjuntoScalarFieldEnum | Archivo_adjuntoScalarFieldEnum[]
  }

  /**
   * archivo_adjunto findFirstOrThrow
   */
  export type archivo_adjuntoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivo_adjunto
     */
    select?: archivo_adjuntoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivo_adjunto
     */
    omit?: archivo_adjuntoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivo_adjuntoInclude<ExtArgs> | null
    /**
     * Filter, which archivo_adjunto to fetch.
     */
    where?: archivo_adjuntoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archivo_adjuntos to fetch.
     */
    orderBy?: archivo_adjuntoOrderByWithRelationInput | archivo_adjuntoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for archivo_adjuntos.
     */
    cursor?: archivo_adjuntoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archivo_adjuntos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archivo_adjuntos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of archivo_adjuntos.
     */
    distinct?: Archivo_adjuntoScalarFieldEnum | Archivo_adjuntoScalarFieldEnum[]
  }

  /**
   * archivo_adjunto findMany
   */
  export type archivo_adjuntoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivo_adjunto
     */
    select?: archivo_adjuntoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivo_adjunto
     */
    omit?: archivo_adjuntoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivo_adjuntoInclude<ExtArgs> | null
    /**
     * Filter, which archivo_adjuntos to fetch.
     */
    where?: archivo_adjuntoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archivo_adjuntos to fetch.
     */
    orderBy?: archivo_adjuntoOrderByWithRelationInput | archivo_adjuntoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing archivo_adjuntos.
     */
    cursor?: archivo_adjuntoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archivo_adjuntos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archivo_adjuntos.
     */
    skip?: number
    distinct?: Archivo_adjuntoScalarFieldEnum | Archivo_adjuntoScalarFieldEnum[]
  }

  /**
   * archivo_adjunto create
   */
  export type archivo_adjuntoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivo_adjunto
     */
    select?: archivo_adjuntoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivo_adjunto
     */
    omit?: archivo_adjuntoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivo_adjuntoInclude<ExtArgs> | null
    /**
     * The data needed to create a archivo_adjunto.
     */
    data?: XOR<archivo_adjuntoCreateInput, archivo_adjuntoUncheckedCreateInput>
  }

  /**
   * archivo_adjunto createMany
   */
  export type archivo_adjuntoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many archivo_adjuntos.
     */
    data: archivo_adjuntoCreateManyInput | archivo_adjuntoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * archivo_adjunto createManyAndReturn
   */
  export type archivo_adjuntoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivo_adjunto
     */
    select?: archivo_adjuntoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the archivo_adjunto
     */
    omit?: archivo_adjuntoOmit<ExtArgs> | null
    /**
     * The data used to create many archivo_adjuntos.
     */
    data: archivo_adjuntoCreateManyInput | archivo_adjuntoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivo_adjuntoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * archivo_adjunto update
   */
  export type archivo_adjuntoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivo_adjunto
     */
    select?: archivo_adjuntoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivo_adjunto
     */
    omit?: archivo_adjuntoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivo_adjuntoInclude<ExtArgs> | null
    /**
     * The data needed to update a archivo_adjunto.
     */
    data: XOR<archivo_adjuntoUpdateInput, archivo_adjuntoUncheckedUpdateInput>
    /**
     * Choose, which archivo_adjunto to update.
     */
    where: archivo_adjuntoWhereUniqueInput
  }

  /**
   * archivo_adjunto updateMany
   */
  export type archivo_adjuntoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update archivo_adjuntos.
     */
    data: XOR<archivo_adjuntoUpdateManyMutationInput, archivo_adjuntoUncheckedUpdateManyInput>
    /**
     * Filter which archivo_adjuntos to update
     */
    where?: archivo_adjuntoWhereInput
    /**
     * Limit how many archivo_adjuntos to update.
     */
    limit?: number
  }

  /**
   * archivo_adjunto updateManyAndReturn
   */
  export type archivo_adjuntoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivo_adjunto
     */
    select?: archivo_adjuntoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the archivo_adjunto
     */
    omit?: archivo_adjuntoOmit<ExtArgs> | null
    /**
     * The data used to update archivo_adjuntos.
     */
    data: XOR<archivo_adjuntoUpdateManyMutationInput, archivo_adjuntoUncheckedUpdateManyInput>
    /**
     * Filter which archivo_adjuntos to update
     */
    where?: archivo_adjuntoWhereInput
    /**
     * Limit how many archivo_adjuntos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivo_adjuntoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * archivo_adjunto upsert
   */
  export type archivo_adjuntoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivo_adjunto
     */
    select?: archivo_adjuntoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivo_adjunto
     */
    omit?: archivo_adjuntoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivo_adjuntoInclude<ExtArgs> | null
    /**
     * The filter to search for the archivo_adjunto to update in case it exists.
     */
    where: archivo_adjuntoWhereUniqueInput
    /**
     * In case the archivo_adjunto found by the `where` argument doesn't exist, create a new archivo_adjunto with this data.
     */
    create: XOR<archivo_adjuntoCreateInput, archivo_adjuntoUncheckedCreateInput>
    /**
     * In case the archivo_adjunto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<archivo_adjuntoUpdateInput, archivo_adjuntoUncheckedUpdateInput>
  }

  /**
   * archivo_adjunto delete
   */
  export type archivo_adjuntoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivo_adjunto
     */
    select?: archivo_adjuntoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivo_adjunto
     */
    omit?: archivo_adjuntoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivo_adjuntoInclude<ExtArgs> | null
    /**
     * Filter which archivo_adjunto to delete.
     */
    where: archivo_adjuntoWhereUniqueInput
  }

  /**
   * archivo_adjunto deleteMany
   */
  export type archivo_adjuntoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which archivo_adjuntos to delete
     */
    where?: archivo_adjuntoWhereInput
    /**
     * Limit how many archivo_adjuntos to delete.
     */
    limit?: number
  }

  /**
   * archivo_adjunto.novedad
   */
  export type archivo_adjunto$novedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadInclude<ExtArgs> | null
    where?: novedadWhereInput
  }

  /**
   * archivo_adjunto without action
   */
  export type archivo_adjuntoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivo_adjunto
     */
    select?: archivo_adjuntoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivo_adjunto
     */
    omit?: archivo_adjuntoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivo_adjuntoInclude<ExtArgs> | null
  }


  /**
   * Model correo_log
   */

  export type AggregateCorreo_log = {
    _count: Correo_logCountAggregateOutputType | null
    _avg: Correo_logAvgAggregateOutputType | null
    _sum: Correo_logSumAggregateOutputType | null
    _min: Correo_logMinAggregateOutputType | null
    _max: Correo_logMaxAggregateOutputType | null
  }

  export type Correo_logAvgAggregateOutputType = {
    id_log: number | null
    id_notificacion: number | null
  }

  export type Correo_logSumAggregateOutputType = {
    id_log: number | null
    id_notificacion: number | null
  }

  export type Correo_logMinAggregateOutputType = {
    id_log: number | null
    id_notificacion: number | null
    estado_envio: string | null
    fecha_envio: Date | null
    mensaje_error: string | null
  }

  export type Correo_logMaxAggregateOutputType = {
    id_log: number | null
    id_notificacion: number | null
    estado_envio: string | null
    fecha_envio: Date | null
    mensaje_error: string | null
  }

  export type Correo_logCountAggregateOutputType = {
    id_log: number
    id_notificacion: number
    estado_envio: number
    fecha_envio: number
    mensaje_error: number
    _all: number
  }


  export type Correo_logAvgAggregateInputType = {
    id_log?: true
    id_notificacion?: true
  }

  export type Correo_logSumAggregateInputType = {
    id_log?: true
    id_notificacion?: true
  }

  export type Correo_logMinAggregateInputType = {
    id_log?: true
    id_notificacion?: true
    estado_envio?: true
    fecha_envio?: true
    mensaje_error?: true
  }

  export type Correo_logMaxAggregateInputType = {
    id_log?: true
    id_notificacion?: true
    estado_envio?: true
    fecha_envio?: true
    mensaje_error?: true
  }

  export type Correo_logCountAggregateInputType = {
    id_log?: true
    id_notificacion?: true
    estado_envio?: true
    fecha_envio?: true
    mensaje_error?: true
    _all?: true
  }

  export type Correo_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which correo_log to aggregate.
     */
    where?: correo_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of correo_logs to fetch.
     */
    orderBy?: correo_logOrderByWithRelationInput | correo_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: correo_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` correo_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` correo_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned correo_logs
    **/
    _count?: true | Correo_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Correo_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Correo_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Correo_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Correo_logMaxAggregateInputType
  }

  export type GetCorreo_logAggregateType<T extends Correo_logAggregateArgs> = {
        [P in keyof T & keyof AggregateCorreo_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCorreo_log[P]>
      : GetScalarType<T[P], AggregateCorreo_log[P]>
  }




  export type correo_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: correo_logWhereInput
    orderBy?: correo_logOrderByWithAggregationInput | correo_logOrderByWithAggregationInput[]
    by: Correo_logScalarFieldEnum[] | Correo_logScalarFieldEnum
    having?: correo_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Correo_logCountAggregateInputType | true
    _avg?: Correo_logAvgAggregateInputType
    _sum?: Correo_logSumAggregateInputType
    _min?: Correo_logMinAggregateInputType
    _max?: Correo_logMaxAggregateInputType
  }

  export type Correo_logGroupByOutputType = {
    id_log: number
    id_notificacion: number | null
    estado_envio: string | null
    fecha_envio: Date | null
    mensaje_error: string | null
    _count: Correo_logCountAggregateOutputType | null
    _avg: Correo_logAvgAggregateOutputType | null
    _sum: Correo_logSumAggregateOutputType | null
    _min: Correo_logMinAggregateOutputType | null
    _max: Correo_logMaxAggregateOutputType | null
  }

  type GetCorreo_logGroupByPayload<T extends correo_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Correo_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Correo_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Correo_logGroupByOutputType[P]>
            : GetScalarType<T[P], Correo_logGroupByOutputType[P]>
        }
      >
    >


  export type correo_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_log?: boolean
    id_notificacion?: boolean
    estado_envio?: boolean
    fecha_envio?: boolean
    mensaje_error?: boolean
    notificacion?: boolean | correo_log$notificacionArgs<ExtArgs>
  }, ExtArgs["result"]["correo_log"]>

  export type correo_logSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_log?: boolean
    id_notificacion?: boolean
    estado_envio?: boolean
    fecha_envio?: boolean
    mensaje_error?: boolean
    notificacion?: boolean | correo_log$notificacionArgs<ExtArgs>
  }, ExtArgs["result"]["correo_log"]>

  export type correo_logSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_log?: boolean
    id_notificacion?: boolean
    estado_envio?: boolean
    fecha_envio?: boolean
    mensaje_error?: boolean
    notificacion?: boolean | correo_log$notificacionArgs<ExtArgs>
  }, ExtArgs["result"]["correo_log"]>

  export type correo_logSelectScalar = {
    id_log?: boolean
    id_notificacion?: boolean
    estado_envio?: boolean
    fecha_envio?: boolean
    mensaje_error?: boolean
  }

  export type correo_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_log" | "id_notificacion" | "estado_envio" | "fecha_envio" | "mensaje_error", ExtArgs["result"]["correo_log"]>
  export type correo_logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notificacion?: boolean | correo_log$notificacionArgs<ExtArgs>
  }
  export type correo_logIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notificacion?: boolean | correo_log$notificacionArgs<ExtArgs>
  }
  export type correo_logIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notificacion?: boolean | correo_log$notificacionArgs<ExtArgs>
  }

  export type $correo_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "correo_log"
    objects: {
      notificacion: Prisma.$notificacionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_log: number
      id_notificacion: number | null
      estado_envio: string | null
      fecha_envio: Date | null
      mensaje_error: string | null
    }, ExtArgs["result"]["correo_log"]>
    composites: {}
  }

  type correo_logGetPayload<S extends boolean | null | undefined | correo_logDefaultArgs> = $Result.GetResult<Prisma.$correo_logPayload, S>

  type correo_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<correo_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Correo_logCountAggregateInputType | true
    }

  export interface correo_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['correo_log'], meta: { name: 'correo_log' } }
    /**
     * Find zero or one Correo_log that matches the filter.
     * @param {correo_logFindUniqueArgs} args - Arguments to find a Correo_log
     * @example
     * // Get one Correo_log
     * const correo_log = await prisma.correo_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends correo_logFindUniqueArgs>(args: SelectSubset<T, correo_logFindUniqueArgs<ExtArgs>>): Prisma__correo_logClient<$Result.GetResult<Prisma.$correo_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Correo_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {correo_logFindUniqueOrThrowArgs} args - Arguments to find a Correo_log
     * @example
     * // Get one Correo_log
     * const correo_log = await prisma.correo_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends correo_logFindUniqueOrThrowArgs>(args: SelectSubset<T, correo_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__correo_logClient<$Result.GetResult<Prisma.$correo_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Correo_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {correo_logFindFirstArgs} args - Arguments to find a Correo_log
     * @example
     * // Get one Correo_log
     * const correo_log = await prisma.correo_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends correo_logFindFirstArgs>(args?: SelectSubset<T, correo_logFindFirstArgs<ExtArgs>>): Prisma__correo_logClient<$Result.GetResult<Prisma.$correo_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Correo_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {correo_logFindFirstOrThrowArgs} args - Arguments to find a Correo_log
     * @example
     * // Get one Correo_log
     * const correo_log = await prisma.correo_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends correo_logFindFirstOrThrowArgs>(args?: SelectSubset<T, correo_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__correo_logClient<$Result.GetResult<Prisma.$correo_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Correo_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {correo_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Correo_logs
     * const correo_logs = await prisma.correo_log.findMany()
     * 
     * // Get first 10 Correo_logs
     * const correo_logs = await prisma.correo_log.findMany({ take: 10 })
     * 
     * // Only select the `id_log`
     * const correo_logWithId_logOnly = await prisma.correo_log.findMany({ select: { id_log: true } })
     * 
     */
    findMany<T extends correo_logFindManyArgs>(args?: SelectSubset<T, correo_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$correo_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Correo_log.
     * @param {correo_logCreateArgs} args - Arguments to create a Correo_log.
     * @example
     * // Create one Correo_log
     * const Correo_log = await prisma.correo_log.create({
     *   data: {
     *     // ... data to create a Correo_log
     *   }
     * })
     * 
     */
    create<T extends correo_logCreateArgs>(args: SelectSubset<T, correo_logCreateArgs<ExtArgs>>): Prisma__correo_logClient<$Result.GetResult<Prisma.$correo_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Correo_logs.
     * @param {correo_logCreateManyArgs} args - Arguments to create many Correo_logs.
     * @example
     * // Create many Correo_logs
     * const correo_log = await prisma.correo_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends correo_logCreateManyArgs>(args?: SelectSubset<T, correo_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Correo_logs and returns the data saved in the database.
     * @param {correo_logCreateManyAndReturnArgs} args - Arguments to create many Correo_logs.
     * @example
     * // Create many Correo_logs
     * const correo_log = await prisma.correo_log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Correo_logs and only return the `id_log`
     * const correo_logWithId_logOnly = await prisma.correo_log.createManyAndReturn({
     *   select: { id_log: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends correo_logCreateManyAndReturnArgs>(args?: SelectSubset<T, correo_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$correo_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Correo_log.
     * @param {correo_logDeleteArgs} args - Arguments to delete one Correo_log.
     * @example
     * // Delete one Correo_log
     * const Correo_log = await prisma.correo_log.delete({
     *   where: {
     *     // ... filter to delete one Correo_log
     *   }
     * })
     * 
     */
    delete<T extends correo_logDeleteArgs>(args: SelectSubset<T, correo_logDeleteArgs<ExtArgs>>): Prisma__correo_logClient<$Result.GetResult<Prisma.$correo_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Correo_log.
     * @param {correo_logUpdateArgs} args - Arguments to update one Correo_log.
     * @example
     * // Update one Correo_log
     * const correo_log = await prisma.correo_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends correo_logUpdateArgs>(args: SelectSubset<T, correo_logUpdateArgs<ExtArgs>>): Prisma__correo_logClient<$Result.GetResult<Prisma.$correo_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Correo_logs.
     * @param {correo_logDeleteManyArgs} args - Arguments to filter Correo_logs to delete.
     * @example
     * // Delete a few Correo_logs
     * const { count } = await prisma.correo_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends correo_logDeleteManyArgs>(args?: SelectSubset<T, correo_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Correo_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {correo_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Correo_logs
     * const correo_log = await prisma.correo_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends correo_logUpdateManyArgs>(args: SelectSubset<T, correo_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Correo_logs and returns the data updated in the database.
     * @param {correo_logUpdateManyAndReturnArgs} args - Arguments to update many Correo_logs.
     * @example
     * // Update many Correo_logs
     * const correo_log = await prisma.correo_log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Correo_logs and only return the `id_log`
     * const correo_logWithId_logOnly = await prisma.correo_log.updateManyAndReturn({
     *   select: { id_log: true },
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
    updateManyAndReturn<T extends correo_logUpdateManyAndReturnArgs>(args: SelectSubset<T, correo_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$correo_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Correo_log.
     * @param {correo_logUpsertArgs} args - Arguments to update or create a Correo_log.
     * @example
     * // Update or create a Correo_log
     * const correo_log = await prisma.correo_log.upsert({
     *   create: {
     *     // ... data to create a Correo_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Correo_log we want to update
     *   }
     * })
     */
    upsert<T extends correo_logUpsertArgs>(args: SelectSubset<T, correo_logUpsertArgs<ExtArgs>>): Prisma__correo_logClient<$Result.GetResult<Prisma.$correo_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Correo_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {correo_logCountArgs} args - Arguments to filter Correo_logs to count.
     * @example
     * // Count the number of Correo_logs
     * const count = await prisma.correo_log.count({
     *   where: {
     *     // ... the filter for the Correo_logs we want to count
     *   }
     * })
    **/
    count<T extends correo_logCountArgs>(
      args?: Subset<T, correo_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Correo_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Correo_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Correo_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Correo_logAggregateArgs>(args: Subset<T, Correo_logAggregateArgs>): Prisma.PrismaPromise<GetCorreo_logAggregateType<T>>

    /**
     * Group by Correo_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {correo_logGroupByArgs} args - Group by arguments.
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
      T extends correo_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: correo_logGroupByArgs['orderBy'] }
        : { orderBy?: correo_logGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, correo_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCorreo_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the correo_log model
   */
  readonly fields: correo_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for correo_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__correo_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notificacion<T extends correo_log$notificacionArgs<ExtArgs> = {}>(args?: Subset<T, correo_log$notificacionArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the correo_log model
   */
  interface correo_logFieldRefs {
    readonly id_log: FieldRef<"correo_log", 'Int'>
    readonly id_notificacion: FieldRef<"correo_log", 'Int'>
    readonly estado_envio: FieldRef<"correo_log", 'String'>
    readonly fecha_envio: FieldRef<"correo_log", 'DateTime'>
    readonly mensaje_error: FieldRef<"correo_log", 'String'>
  }
    

  // Custom InputTypes
  /**
   * correo_log findUnique
   */
  export type correo_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the correo_log
     */
    select?: correo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the correo_log
     */
    omit?: correo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: correo_logInclude<ExtArgs> | null
    /**
     * Filter, which correo_log to fetch.
     */
    where: correo_logWhereUniqueInput
  }

  /**
   * correo_log findUniqueOrThrow
   */
  export type correo_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the correo_log
     */
    select?: correo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the correo_log
     */
    omit?: correo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: correo_logInclude<ExtArgs> | null
    /**
     * Filter, which correo_log to fetch.
     */
    where: correo_logWhereUniqueInput
  }

  /**
   * correo_log findFirst
   */
  export type correo_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the correo_log
     */
    select?: correo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the correo_log
     */
    omit?: correo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: correo_logInclude<ExtArgs> | null
    /**
     * Filter, which correo_log to fetch.
     */
    where?: correo_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of correo_logs to fetch.
     */
    orderBy?: correo_logOrderByWithRelationInput | correo_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for correo_logs.
     */
    cursor?: correo_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` correo_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` correo_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of correo_logs.
     */
    distinct?: Correo_logScalarFieldEnum | Correo_logScalarFieldEnum[]
  }

  /**
   * correo_log findFirstOrThrow
   */
  export type correo_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the correo_log
     */
    select?: correo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the correo_log
     */
    omit?: correo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: correo_logInclude<ExtArgs> | null
    /**
     * Filter, which correo_log to fetch.
     */
    where?: correo_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of correo_logs to fetch.
     */
    orderBy?: correo_logOrderByWithRelationInput | correo_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for correo_logs.
     */
    cursor?: correo_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` correo_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` correo_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of correo_logs.
     */
    distinct?: Correo_logScalarFieldEnum | Correo_logScalarFieldEnum[]
  }

  /**
   * correo_log findMany
   */
  export type correo_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the correo_log
     */
    select?: correo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the correo_log
     */
    omit?: correo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: correo_logInclude<ExtArgs> | null
    /**
     * Filter, which correo_logs to fetch.
     */
    where?: correo_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of correo_logs to fetch.
     */
    orderBy?: correo_logOrderByWithRelationInput | correo_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing correo_logs.
     */
    cursor?: correo_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` correo_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` correo_logs.
     */
    skip?: number
    distinct?: Correo_logScalarFieldEnum | Correo_logScalarFieldEnum[]
  }

  /**
   * correo_log create
   */
  export type correo_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the correo_log
     */
    select?: correo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the correo_log
     */
    omit?: correo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: correo_logInclude<ExtArgs> | null
    /**
     * The data needed to create a correo_log.
     */
    data?: XOR<correo_logCreateInput, correo_logUncheckedCreateInput>
  }

  /**
   * correo_log createMany
   */
  export type correo_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many correo_logs.
     */
    data: correo_logCreateManyInput | correo_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * correo_log createManyAndReturn
   */
  export type correo_logCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the correo_log
     */
    select?: correo_logSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the correo_log
     */
    omit?: correo_logOmit<ExtArgs> | null
    /**
     * The data used to create many correo_logs.
     */
    data: correo_logCreateManyInput | correo_logCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: correo_logIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * correo_log update
   */
  export type correo_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the correo_log
     */
    select?: correo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the correo_log
     */
    omit?: correo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: correo_logInclude<ExtArgs> | null
    /**
     * The data needed to update a correo_log.
     */
    data: XOR<correo_logUpdateInput, correo_logUncheckedUpdateInput>
    /**
     * Choose, which correo_log to update.
     */
    where: correo_logWhereUniqueInput
  }

  /**
   * correo_log updateMany
   */
  export type correo_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update correo_logs.
     */
    data: XOR<correo_logUpdateManyMutationInput, correo_logUncheckedUpdateManyInput>
    /**
     * Filter which correo_logs to update
     */
    where?: correo_logWhereInput
    /**
     * Limit how many correo_logs to update.
     */
    limit?: number
  }

  /**
   * correo_log updateManyAndReturn
   */
  export type correo_logUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the correo_log
     */
    select?: correo_logSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the correo_log
     */
    omit?: correo_logOmit<ExtArgs> | null
    /**
     * The data used to update correo_logs.
     */
    data: XOR<correo_logUpdateManyMutationInput, correo_logUncheckedUpdateManyInput>
    /**
     * Filter which correo_logs to update
     */
    where?: correo_logWhereInput
    /**
     * Limit how many correo_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: correo_logIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * correo_log upsert
   */
  export type correo_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the correo_log
     */
    select?: correo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the correo_log
     */
    omit?: correo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: correo_logInclude<ExtArgs> | null
    /**
     * The filter to search for the correo_log to update in case it exists.
     */
    where: correo_logWhereUniqueInput
    /**
     * In case the correo_log found by the `where` argument doesn't exist, create a new correo_log with this data.
     */
    create: XOR<correo_logCreateInput, correo_logUncheckedCreateInput>
    /**
     * In case the correo_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<correo_logUpdateInput, correo_logUncheckedUpdateInput>
  }

  /**
   * correo_log delete
   */
  export type correo_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the correo_log
     */
    select?: correo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the correo_log
     */
    omit?: correo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: correo_logInclude<ExtArgs> | null
    /**
     * Filter which correo_log to delete.
     */
    where: correo_logWhereUniqueInput
  }

  /**
   * correo_log deleteMany
   */
  export type correo_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which correo_logs to delete
     */
    where?: correo_logWhereInput
    /**
     * Limit how many correo_logs to delete.
     */
    limit?: number
  }

  /**
   * correo_log.notificacion
   */
  export type correo_log$notificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    where?: notificacionWhereInput
  }

  /**
   * correo_log without action
   */
  export type correo_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the correo_log
     */
    select?: correo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the correo_log
     */
    omit?: correo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: correo_logInclude<ExtArgs> | null
  }


  /**
   * Model estado_novedad
   */

  export type AggregateEstado_novedad = {
    _count: Estado_novedadCountAggregateOutputType | null
    _avg: Estado_novedadAvgAggregateOutputType | null
    _sum: Estado_novedadSumAggregateOutputType | null
    _min: Estado_novedadMinAggregateOutputType | null
    _max: Estado_novedadMaxAggregateOutputType | null
  }

  export type Estado_novedadAvgAggregateOutputType = {
    id_estado_novedad: number | null
  }

  export type Estado_novedadSumAggregateOutputType = {
    id_estado_novedad: number | null
  }

  export type Estado_novedadMinAggregateOutputType = {
    id_estado_novedad: number | null
    nombre_estado: string | null
  }

  export type Estado_novedadMaxAggregateOutputType = {
    id_estado_novedad: number | null
    nombre_estado: string | null
  }

  export type Estado_novedadCountAggregateOutputType = {
    id_estado_novedad: number
    nombre_estado: number
    _all: number
  }


  export type Estado_novedadAvgAggregateInputType = {
    id_estado_novedad?: true
  }

  export type Estado_novedadSumAggregateInputType = {
    id_estado_novedad?: true
  }

  export type Estado_novedadMinAggregateInputType = {
    id_estado_novedad?: true
    nombre_estado?: true
  }

  export type Estado_novedadMaxAggregateInputType = {
    id_estado_novedad?: true
    nombre_estado?: true
  }

  export type Estado_novedadCountAggregateInputType = {
    id_estado_novedad?: true
    nombre_estado?: true
    _all?: true
  }

  export type Estado_novedadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estado_novedad to aggregate.
     */
    where?: estado_novedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estado_novedads to fetch.
     */
    orderBy?: estado_novedadOrderByWithRelationInput | estado_novedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: estado_novedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estado_novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estado_novedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned estado_novedads
    **/
    _count?: true | Estado_novedadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Estado_novedadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Estado_novedadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Estado_novedadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Estado_novedadMaxAggregateInputType
  }

  export type GetEstado_novedadAggregateType<T extends Estado_novedadAggregateArgs> = {
        [P in keyof T & keyof AggregateEstado_novedad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstado_novedad[P]>
      : GetScalarType<T[P], AggregateEstado_novedad[P]>
  }




  export type estado_novedadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estado_novedadWhereInput
    orderBy?: estado_novedadOrderByWithAggregationInput | estado_novedadOrderByWithAggregationInput[]
    by: Estado_novedadScalarFieldEnum[] | Estado_novedadScalarFieldEnum
    having?: estado_novedadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Estado_novedadCountAggregateInputType | true
    _avg?: Estado_novedadAvgAggregateInputType
    _sum?: Estado_novedadSumAggregateInputType
    _min?: Estado_novedadMinAggregateInputType
    _max?: Estado_novedadMaxAggregateInputType
  }

  export type Estado_novedadGroupByOutputType = {
    id_estado_novedad: number
    nombre_estado: string
    _count: Estado_novedadCountAggregateOutputType | null
    _avg: Estado_novedadAvgAggregateOutputType | null
    _sum: Estado_novedadSumAggregateOutputType | null
    _min: Estado_novedadMinAggregateOutputType | null
    _max: Estado_novedadMaxAggregateOutputType | null
  }

  type GetEstado_novedadGroupByPayload<T extends estado_novedadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Estado_novedadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Estado_novedadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Estado_novedadGroupByOutputType[P]>
            : GetScalarType<T[P], Estado_novedadGroupByOutputType[P]>
        }
      >
    >


  export type estado_novedadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado_novedad?: boolean
    nombre_estado?: boolean
    historial_novedad?: boolean | estado_novedad$historial_novedadArgs<ExtArgs>
    novedad?: boolean | estado_novedad$novedadArgs<ExtArgs>
    _count?: boolean | Estado_novedadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado_novedad"]>

  export type estado_novedadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado_novedad?: boolean
    nombre_estado?: boolean
  }, ExtArgs["result"]["estado_novedad"]>

  export type estado_novedadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado_novedad?: boolean
    nombre_estado?: boolean
  }, ExtArgs["result"]["estado_novedad"]>

  export type estado_novedadSelectScalar = {
    id_estado_novedad?: boolean
    nombre_estado?: boolean
  }

  export type estado_novedadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_estado_novedad" | "nombre_estado", ExtArgs["result"]["estado_novedad"]>
  export type estado_novedadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial_novedad?: boolean | estado_novedad$historial_novedadArgs<ExtArgs>
    novedad?: boolean | estado_novedad$novedadArgs<ExtArgs>
    _count?: boolean | Estado_novedadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type estado_novedadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type estado_novedadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $estado_novedadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "estado_novedad"
    objects: {
      historial_novedad: Prisma.$historial_novedadPayload<ExtArgs>[]
      novedad: Prisma.$novedadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_estado_novedad: number
      nombre_estado: string
    }, ExtArgs["result"]["estado_novedad"]>
    composites: {}
  }

  type estado_novedadGetPayload<S extends boolean | null | undefined | estado_novedadDefaultArgs> = $Result.GetResult<Prisma.$estado_novedadPayload, S>

  type estado_novedadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<estado_novedadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Estado_novedadCountAggregateInputType | true
    }

  export interface estado_novedadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estado_novedad'], meta: { name: 'estado_novedad' } }
    /**
     * Find zero or one Estado_novedad that matches the filter.
     * @param {estado_novedadFindUniqueArgs} args - Arguments to find a Estado_novedad
     * @example
     * // Get one Estado_novedad
     * const estado_novedad = await prisma.estado_novedad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends estado_novedadFindUniqueArgs>(args: SelectSubset<T, estado_novedadFindUniqueArgs<ExtArgs>>): Prisma__estado_novedadClient<$Result.GetResult<Prisma.$estado_novedadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estado_novedad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {estado_novedadFindUniqueOrThrowArgs} args - Arguments to find a Estado_novedad
     * @example
     * // Get one Estado_novedad
     * const estado_novedad = await prisma.estado_novedad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends estado_novedadFindUniqueOrThrowArgs>(args: SelectSubset<T, estado_novedadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__estado_novedadClient<$Result.GetResult<Prisma.$estado_novedadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado_novedad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_novedadFindFirstArgs} args - Arguments to find a Estado_novedad
     * @example
     * // Get one Estado_novedad
     * const estado_novedad = await prisma.estado_novedad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends estado_novedadFindFirstArgs>(args?: SelectSubset<T, estado_novedadFindFirstArgs<ExtArgs>>): Prisma__estado_novedadClient<$Result.GetResult<Prisma.$estado_novedadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado_novedad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_novedadFindFirstOrThrowArgs} args - Arguments to find a Estado_novedad
     * @example
     * // Get one Estado_novedad
     * const estado_novedad = await prisma.estado_novedad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends estado_novedadFindFirstOrThrowArgs>(args?: SelectSubset<T, estado_novedadFindFirstOrThrowArgs<ExtArgs>>): Prisma__estado_novedadClient<$Result.GetResult<Prisma.$estado_novedadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estado_novedads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_novedadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estado_novedads
     * const estado_novedads = await prisma.estado_novedad.findMany()
     * 
     * // Get first 10 Estado_novedads
     * const estado_novedads = await prisma.estado_novedad.findMany({ take: 10 })
     * 
     * // Only select the `id_estado_novedad`
     * const estado_novedadWithId_estado_novedadOnly = await prisma.estado_novedad.findMany({ select: { id_estado_novedad: true } })
     * 
     */
    findMany<T extends estado_novedadFindManyArgs>(args?: SelectSubset<T, estado_novedadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estado_novedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estado_novedad.
     * @param {estado_novedadCreateArgs} args - Arguments to create a Estado_novedad.
     * @example
     * // Create one Estado_novedad
     * const Estado_novedad = await prisma.estado_novedad.create({
     *   data: {
     *     // ... data to create a Estado_novedad
     *   }
     * })
     * 
     */
    create<T extends estado_novedadCreateArgs>(args: SelectSubset<T, estado_novedadCreateArgs<ExtArgs>>): Prisma__estado_novedadClient<$Result.GetResult<Prisma.$estado_novedadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estado_novedads.
     * @param {estado_novedadCreateManyArgs} args - Arguments to create many Estado_novedads.
     * @example
     * // Create many Estado_novedads
     * const estado_novedad = await prisma.estado_novedad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends estado_novedadCreateManyArgs>(args?: SelectSubset<T, estado_novedadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estado_novedads and returns the data saved in the database.
     * @param {estado_novedadCreateManyAndReturnArgs} args - Arguments to create many Estado_novedads.
     * @example
     * // Create many Estado_novedads
     * const estado_novedad = await prisma.estado_novedad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estado_novedads and only return the `id_estado_novedad`
     * const estado_novedadWithId_estado_novedadOnly = await prisma.estado_novedad.createManyAndReturn({
     *   select: { id_estado_novedad: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends estado_novedadCreateManyAndReturnArgs>(args?: SelectSubset<T, estado_novedadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estado_novedadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estado_novedad.
     * @param {estado_novedadDeleteArgs} args - Arguments to delete one Estado_novedad.
     * @example
     * // Delete one Estado_novedad
     * const Estado_novedad = await prisma.estado_novedad.delete({
     *   where: {
     *     // ... filter to delete one Estado_novedad
     *   }
     * })
     * 
     */
    delete<T extends estado_novedadDeleteArgs>(args: SelectSubset<T, estado_novedadDeleteArgs<ExtArgs>>): Prisma__estado_novedadClient<$Result.GetResult<Prisma.$estado_novedadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estado_novedad.
     * @param {estado_novedadUpdateArgs} args - Arguments to update one Estado_novedad.
     * @example
     * // Update one Estado_novedad
     * const estado_novedad = await prisma.estado_novedad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends estado_novedadUpdateArgs>(args: SelectSubset<T, estado_novedadUpdateArgs<ExtArgs>>): Prisma__estado_novedadClient<$Result.GetResult<Prisma.$estado_novedadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estado_novedads.
     * @param {estado_novedadDeleteManyArgs} args - Arguments to filter Estado_novedads to delete.
     * @example
     * // Delete a few Estado_novedads
     * const { count } = await prisma.estado_novedad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends estado_novedadDeleteManyArgs>(args?: SelectSubset<T, estado_novedadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estado_novedads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_novedadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estado_novedads
     * const estado_novedad = await prisma.estado_novedad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends estado_novedadUpdateManyArgs>(args: SelectSubset<T, estado_novedadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estado_novedads and returns the data updated in the database.
     * @param {estado_novedadUpdateManyAndReturnArgs} args - Arguments to update many Estado_novedads.
     * @example
     * // Update many Estado_novedads
     * const estado_novedad = await prisma.estado_novedad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estado_novedads and only return the `id_estado_novedad`
     * const estado_novedadWithId_estado_novedadOnly = await prisma.estado_novedad.updateManyAndReturn({
     *   select: { id_estado_novedad: true },
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
    updateManyAndReturn<T extends estado_novedadUpdateManyAndReturnArgs>(args: SelectSubset<T, estado_novedadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estado_novedadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estado_novedad.
     * @param {estado_novedadUpsertArgs} args - Arguments to update or create a Estado_novedad.
     * @example
     * // Update or create a Estado_novedad
     * const estado_novedad = await prisma.estado_novedad.upsert({
     *   create: {
     *     // ... data to create a Estado_novedad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estado_novedad we want to update
     *   }
     * })
     */
    upsert<T extends estado_novedadUpsertArgs>(args: SelectSubset<T, estado_novedadUpsertArgs<ExtArgs>>): Prisma__estado_novedadClient<$Result.GetResult<Prisma.$estado_novedadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estado_novedads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_novedadCountArgs} args - Arguments to filter Estado_novedads to count.
     * @example
     * // Count the number of Estado_novedads
     * const count = await prisma.estado_novedad.count({
     *   where: {
     *     // ... the filter for the Estado_novedads we want to count
     *   }
     * })
    **/
    count<T extends estado_novedadCountArgs>(
      args?: Subset<T, estado_novedadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Estado_novedadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estado_novedad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estado_novedadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Estado_novedadAggregateArgs>(args: Subset<T, Estado_novedadAggregateArgs>): Prisma.PrismaPromise<GetEstado_novedadAggregateType<T>>

    /**
     * Group by Estado_novedad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estado_novedadGroupByArgs} args - Group by arguments.
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
      T extends estado_novedadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estado_novedadGroupByArgs['orderBy'] }
        : { orderBy?: estado_novedadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, estado_novedadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstado_novedadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the estado_novedad model
   */
  readonly fields: estado_novedadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estado_novedad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estado_novedadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historial_novedad<T extends estado_novedad$historial_novedadArgs<ExtArgs> = {}>(args?: Subset<T, estado_novedad$historial_novedadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historial_novedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    novedad<T extends estado_novedad$novedadArgs<ExtArgs> = {}>(args?: Subset<T, estado_novedad$novedadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$novedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the estado_novedad model
   */
  interface estado_novedadFieldRefs {
    readonly id_estado_novedad: FieldRef<"estado_novedad", 'Int'>
    readonly nombre_estado: FieldRef<"estado_novedad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * estado_novedad findUnique
   */
  export type estado_novedadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_novedad
     */
    select?: estado_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_novedad
     */
    omit?: estado_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_novedadInclude<ExtArgs> | null
    /**
     * Filter, which estado_novedad to fetch.
     */
    where: estado_novedadWhereUniqueInput
  }

  /**
   * estado_novedad findUniqueOrThrow
   */
  export type estado_novedadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_novedad
     */
    select?: estado_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_novedad
     */
    omit?: estado_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_novedadInclude<ExtArgs> | null
    /**
     * Filter, which estado_novedad to fetch.
     */
    where: estado_novedadWhereUniqueInput
  }

  /**
   * estado_novedad findFirst
   */
  export type estado_novedadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_novedad
     */
    select?: estado_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_novedad
     */
    omit?: estado_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_novedadInclude<ExtArgs> | null
    /**
     * Filter, which estado_novedad to fetch.
     */
    where?: estado_novedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estado_novedads to fetch.
     */
    orderBy?: estado_novedadOrderByWithRelationInput | estado_novedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estado_novedads.
     */
    cursor?: estado_novedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estado_novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estado_novedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estado_novedads.
     */
    distinct?: Estado_novedadScalarFieldEnum | Estado_novedadScalarFieldEnum[]
  }

  /**
   * estado_novedad findFirstOrThrow
   */
  export type estado_novedadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_novedad
     */
    select?: estado_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_novedad
     */
    omit?: estado_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_novedadInclude<ExtArgs> | null
    /**
     * Filter, which estado_novedad to fetch.
     */
    where?: estado_novedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estado_novedads to fetch.
     */
    orderBy?: estado_novedadOrderByWithRelationInput | estado_novedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estado_novedads.
     */
    cursor?: estado_novedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estado_novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estado_novedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estado_novedads.
     */
    distinct?: Estado_novedadScalarFieldEnum | Estado_novedadScalarFieldEnum[]
  }

  /**
   * estado_novedad findMany
   */
  export type estado_novedadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_novedad
     */
    select?: estado_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_novedad
     */
    omit?: estado_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_novedadInclude<ExtArgs> | null
    /**
     * Filter, which estado_novedads to fetch.
     */
    where?: estado_novedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estado_novedads to fetch.
     */
    orderBy?: estado_novedadOrderByWithRelationInput | estado_novedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing estado_novedads.
     */
    cursor?: estado_novedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estado_novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estado_novedads.
     */
    skip?: number
    distinct?: Estado_novedadScalarFieldEnum | Estado_novedadScalarFieldEnum[]
  }

  /**
   * estado_novedad create
   */
  export type estado_novedadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_novedad
     */
    select?: estado_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_novedad
     */
    omit?: estado_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_novedadInclude<ExtArgs> | null
    /**
     * The data needed to create a estado_novedad.
     */
    data: XOR<estado_novedadCreateInput, estado_novedadUncheckedCreateInput>
  }

  /**
   * estado_novedad createMany
   */
  export type estado_novedadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estado_novedads.
     */
    data: estado_novedadCreateManyInput | estado_novedadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estado_novedad createManyAndReturn
   */
  export type estado_novedadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_novedad
     */
    select?: estado_novedadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estado_novedad
     */
    omit?: estado_novedadOmit<ExtArgs> | null
    /**
     * The data used to create many estado_novedads.
     */
    data: estado_novedadCreateManyInput | estado_novedadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estado_novedad update
   */
  export type estado_novedadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_novedad
     */
    select?: estado_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_novedad
     */
    omit?: estado_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_novedadInclude<ExtArgs> | null
    /**
     * The data needed to update a estado_novedad.
     */
    data: XOR<estado_novedadUpdateInput, estado_novedadUncheckedUpdateInput>
    /**
     * Choose, which estado_novedad to update.
     */
    where: estado_novedadWhereUniqueInput
  }

  /**
   * estado_novedad updateMany
   */
  export type estado_novedadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estado_novedads.
     */
    data: XOR<estado_novedadUpdateManyMutationInput, estado_novedadUncheckedUpdateManyInput>
    /**
     * Filter which estado_novedads to update
     */
    where?: estado_novedadWhereInput
    /**
     * Limit how many estado_novedads to update.
     */
    limit?: number
  }

  /**
   * estado_novedad updateManyAndReturn
   */
  export type estado_novedadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_novedad
     */
    select?: estado_novedadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estado_novedad
     */
    omit?: estado_novedadOmit<ExtArgs> | null
    /**
     * The data used to update estado_novedads.
     */
    data: XOR<estado_novedadUpdateManyMutationInput, estado_novedadUncheckedUpdateManyInput>
    /**
     * Filter which estado_novedads to update
     */
    where?: estado_novedadWhereInput
    /**
     * Limit how many estado_novedads to update.
     */
    limit?: number
  }

  /**
   * estado_novedad upsert
   */
  export type estado_novedadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_novedad
     */
    select?: estado_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_novedad
     */
    omit?: estado_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_novedadInclude<ExtArgs> | null
    /**
     * The filter to search for the estado_novedad to update in case it exists.
     */
    where: estado_novedadWhereUniqueInput
    /**
     * In case the estado_novedad found by the `where` argument doesn't exist, create a new estado_novedad with this data.
     */
    create: XOR<estado_novedadCreateInput, estado_novedadUncheckedCreateInput>
    /**
     * In case the estado_novedad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estado_novedadUpdateInput, estado_novedadUncheckedUpdateInput>
  }

  /**
   * estado_novedad delete
   */
  export type estado_novedadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_novedad
     */
    select?: estado_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_novedad
     */
    omit?: estado_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_novedadInclude<ExtArgs> | null
    /**
     * Filter which estado_novedad to delete.
     */
    where: estado_novedadWhereUniqueInput
  }

  /**
   * estado_novedad deleteMany
   */
  export type estado_novedadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estado_novedads to delete
     */
    where?: estado_novedadWhereInput
    /**
     * Limit how many estado_novedads to delete.
     */
    limit?: number
  }

  /**
   * estado_novedad.historial_novedad
   */
  export type estado_novedad$historial_novedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_novedad
     */
    select?: historial_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_novedad
     */
    omit?: historial_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_novedadInclude<ExtArgs> | null
    where?: historial_novedadWhereInput
    orderBy?: historial_novedadOrderByWithRelationInput | historial_novedadOrderByWithRelationInput[]
    cursor?: historial_novedadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historial_novedadScalarFieldEnum | Historial_novedadScalarFieldEnum[]
  }

  /**
   * estado_novedad.novedad
   */
  export type estado_novedad$novedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadInclude<ExtArgs> | null
    where?: novedadWhereInput
    orderBy?: novedadOrderByWithRelationInput | novedadOrderByWithRelationInput[]
    cursor?: novedadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NovedadScalarFieldEnum | NovedadScalarFieldEnum[]
  }

  /**
   * estado_novedad without action
   */
  export type estado_novedadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_novedad
     */
    select?: estado_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_novedad
     */
    omit?: estado_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_novedadInclude<ExtArgs> | null
  }


  /**
   * Model historial_novedad
   */

  export type AggregateHistorial_novedad = {
    _count: Historial_novedadCountAggregateOutputType | null
    _avg: Historial_novedadAvgAggregateOutputType | null
    _sum: Historial_novedadSumAggregateOutputType | null
    _min: Historial_novedadMinAggregateOutputType | null
    _max: Historial_novedadMaxAggregateOutputType | null
  }

  export type Historial_novedadAvgAggregateOutputType = {
    id_historial: number | null
    id_novedad: number | null
    id_estado_novedad: number | null
    id_usuario_modificacion: number | null
  }

  export type Historial_novedadSumAggregateOutputType = {
    id_historial: number | null
    id_novedad: number | null
    id_estado_novedad: number | null
    id_usuario_modificacion: number | null
  }

  export type Historial_novedadMinAggregateOutputType = {
    id_historial: number | null
    id_novedad: number | null
    id_estado_novedad: number | null
    fecha_modificacion: Date | null
    comentario: string | null
    id_usuario_modificacion: number | null
  }

  export type Historial_novedadMaxAggregateOutputType = {
    id_historial: number | null
    id_novedad: number | null
    id_estado_novedad: number | null
    fecha_modificacion: Date | null
    comentario: string | null
    id_usuario_modificacion: number | null
  }

  export type Historial_novedadCountAggregateOutputType = {
    id_historial: number
    id_novedad: number
    id_estado_novedad: number
    fecha_modificacion: number
    comentario: number
    id_usuario_modificacion: number
    _all: number
  }


  export type Historial_novedadAvgAggregateInputType = {
    id_historial?: true
    id_novedad?: true
    id_estado_novedad?: true
    id_usuario_modificacion?: true
  }

  export type Historial_novedadSumAggregateInputType = {
    id_historial?: true
    id_novedad?: true
    id_estado_novedad?: true
    id_usuario_modificacion?: true
  }

  export type Historial_novedadMinAggregateInputType = {
    id_historial?: true
    id_novedad?: true
    id_estado_novedad?: true
    fecha_modificacion?: true
    comentario?: true
    id_usuario_modificacion?: true
  }

  export type Historial_novedadMaxAggregateInputType = {
    id_historial?: true
    id_novedad?: true
    id_estado_novedad?: true
    fecha_modificacion?: true
    comentario?: true
    id_usuario_modificacion?: true
  }

  export type Historial_novedadCountAggregateInputType = {
    id_historial?: true
    id_novedad?: true
    id_estado_novedad?: true
    fecha_modificacion?: true
    comentario?: true
    id_usuario_modificacion?: true
    _all?: true
  }

  export type Historial_novedadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historial_novedad to aggregate.
     */
    where?: historial_novedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_novedads to fetch.
     */
    orderBy?: historial_novedadOrderByWithRelationInput | historial_novedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historial_novedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_novedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned historial_novedads
    **/
    _count?: true | Historial_novedadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Historial_novedadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Historial_novedadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Historial_novedadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Historial_novedadMaxAggregateInputType
  }

  export type GetHistorial_novedadAggregateType<T extends Historial_novedadAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorial_novedad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorial_novedad[P]>
      : GetScalarType<T[P], AggregateHistorial_novedad[P]>
  }




  export type historial_novedadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historial_novedadWhereInput
    orderBy?: historial_novedadOrderByWithAggregationInput | historial_novedadOrderByWithAggregationInput[]
    by: Historial_novedadScalarFieldEnum[] | Historial_novedadScalarFieldEnum
    having?: historial_novedadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Historial_novedadCountAggregateInputType | true
    _avg?: Historial_novedadAvgAggregateInputType
    _sum?: Historial_novedadSumAggregateInputType
    _min?: Historial_novedadMinAggregateInputType
    _max?: Historial_novedadMaxAggregateInputType
  }

  export type Historial_novedadGroupByOutputType = {
    id_historial: number
    id_novedad: number | null
    id_estado_novedad: number | null
    fecha_modificacion: Date | null
    comentario: string | null
    id_usuario_modificacion: number | null
    _count: Historial_novedadCountAggregateOutputType | null
    _avg: Historial_novedadAvgAggregateOutputType | null
    _sum: Historial_novedadSumAggregateOutputType | null
    _min: Historial_novedadMinAggregateOutputType | null
    _max: Historial_novedadMaxAggregateOutputType | null
  }

  type GetHistorial_novedadGroupByPayload<T extends historial_novedadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Historial_novedadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Historial_novedadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Historial_novedadGroupByOutputType[P]>
            : GetScalarType<T[P], Historial_novedadGroupByOutputType[P]>
        }
      >
    >


  export type historial_novedadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_historial?: boolean
    id_novedad?: boolean
    id_estado_novedad?: boolean
    fecha_modificacion?: boolean
    comentario?: boolean
    id_usuario_modificacion?: boolean
    estado_novedad?: boolean | historial_novedad$estado_novedadArgs<ExtArgs>
    novedad?: boolean | historial_novedad$novedadArgs<ExtArgs>
    usuario?: boolean | historial_novedad$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["historial_novedad"]>

  export type historial_novedadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_historial?: boolean
    id_novedad?: boolean
    id_estado_novedad?: boolean
    fecha_modificacion?: boolean
    comentario?: boolean
    id_usuario_modificacion?: boolean
    estado_novedad?: boolean | historial_novedad$estado_novedadArgs<ExtArgs>
    novedad?: boolean | historial_novedad$novedadArgs<ExtArgs>
    usuario?: boolean | historial_novedad$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["historial_novedad"]>

  export type historial_novedadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_historial?: boolean
    id_novedad?: boolean
    id_estado_novedad?: boolean
    fecha_modificacion?: boolean
    comentario?: boolean
    id_usuario_modificacion?: boolean
    estado_novedad?: boolean | historial_novedad$estado_novedadArgs<ExtArgs>
    novedad?: boolean | historial_novedad$novedadArgs<ExtArgs>
    usuario?: boolean | historial_novedad$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["historial_novedad"]>

  export type historial_novedadSelectScalar = {
    id_historial?: boolean
    id_novedad?: boolean
    id_estado_novedad?: boolean
    fecha_modificacion?: boolean
    comentario?: boolean
    id_usuario_modificacion?: boolean
  }

  export type historial_novedadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_historial" | "id_novedad" | "id_estado_novedad" | "fecha_modificacion" | "comentario" | "id_usuario_modificacion", ExtArgs["result"]["historial_novedad"]>
  export type historial_novedadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado_novedad?: boolean | historial_novedad$estado_novedadArgs<ExtArgs>
    novedad?: boolean | historial_novedad$novedadArgs<ExtArgs>
    usuario?: boolean | historial_novedad$usuarioArgs<ExtArgs>
  }
  export type historial_novedadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado_novedad?: boolean | historial_novedad$estado_novedadArgs<ExtArgs>
    novedad?: boolean | historial_novedad$novedadArgs<ExtArgs>
    usuario?: boolean | historial_novedad$usuarioArgs<ExtArgs>
  }
  export type historial_novedadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado_novedad?: boolean | historial_novedad$estado_novedadArgs<ExtArgs>
    novedad?: boolean | historial_novedad$novedadArgs<ExtArgs>
    usuario?: boolean | historial_novedad$usuarioArgs<ExtArgs>
  }

  export type $historial_novedadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "historial_novedad"
    objects: {
      estado_novedad: Prisma.$estado_novedadPayload<ExtArgs> | null
      novedad: Prisma.$novedadPayload<ExtArgs> | null
      usuario: Prisma.$usuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_historial: number
      id_novedad: number | null
      id_estado_novedad: number | null
      fecha_modificacion: Date | null
      comentario: string | null
      id_usuario_modificacion: number | null
    }, ExtArgs["result"]["historial_novedad"]>
    composites: {}
  }

  type historial_novedadGetPayload<S extends boolean | null | undefined | historial_novedadDefaultArgs> = $Result.GetResult<Prisma.$historial_novedadPayload, S>

  type historial_novedadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<historial_novedadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Historial_novedadCountAggregateInputType | true
    }

  export interface historial_novedadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['historial_novedad'], meta: { name: 'historial_novedad' } }
    /**
     * Find zero or one Historial_novedad that matches the filter.
     * @param {historial_novedadFindUniqueArgs} args - Arguments to find a Historial_novedad
     * @example
     * // Get one Historial_novedad
     * const historial_novedad = await prisma.historial_novedad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends historial_novedadFindUniqueArgs>(args: SelectSubset<T, historial_novedadFindUniqueArgs<ExtArgs>>): Prisma__historial_novedadClient<$Result.GetResult<Prisma.$historial_novedadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historial_novedad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {historial_novedadFindUniqueOrThrowArgs} args - Arguments to find a Historial_novedad
     * @example
     * // Get one Historial_novedad
     * const historial_novedad = await prisma.historial_novedad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends historial_novedadFindUniqueOrThrowArgs>(args: SelectSubset<T, historial_novedadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__historial_novedadClient<$Result.GetResult<Prisma.$historial_novedadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historial_novedad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_novedadFindFirstArgs} args - Arguments to find a Historial_novedad
     * @example
     * // Get one Historial_novedad
     * const historial_novedad = await prisma.historial_novedad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends historial_novedadFindFirstArgs>(args?: SelectSubset<T, historial_novedadFindFirstArgs<ExtArgs>>): Prisma__historial_novedadClient<$Result.GetResult<Prisma.$historial_novedadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historial_novedad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_novedadFindFirstOrThrowArgs} args - Arguments to find a Historial_novedad
     * @example
     * // Get one Historial_novedad
     * const historial_novedad = await prisma.historial_novedad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends historial_novedadFindFirstOrThrowArgs>(args?: SelectSubset<T, historial_novedadFindFirstOrThrowArgs<ExtArgs>>): Prisma__historial_novedadClient<$Result.GetResult<Prisma.$historial_novedadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historial_novedads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_novedadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historial_novedads
     * const historial_novedads = await prisma.historial_novedad.findMany()
     * 
     * // Get first 10 Historial_novedads
     * const historial_novedads = await prisma.historial_novedad.findMany({ take: 10 })
     * 
     * // Only select the `id_historial`
     * const historial_novedadWithId_historialOnly = await prisma.historial_novedad.findMany({ select: { id_historial: true } })
     * 
     */
    findMany<T extends historial_novedadFindManyArgs>(args?: SelectSubset<T, historial_novedadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historial_novedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historial_novedad.
     * @param {historial_novedadCreateArgs} args - Arguments to create a Historial_novedad.
     * @example
     * // Create one Historial_novedad
     * const Historial_novedad = await prisma.historial_novedad.create({
     *   data: {
     *     // ... data to create a Historial_novedad
     *   }
     * })
     * 
     */
    create<T extends historial_novedadCreateArgs>(args: SelectSubset<T, historial_novedadCreateArgs<ExtArgs>>): Prisma__historial_novedadClient<$Result.GetResult<Prisma.$historial_novedadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historial_novedads.
     * @param {historial_novedadCreateManyArgs} args - Arguments to create many Historial_novedads.
     * @example
     * // Create many Historial_novedads
     * const historial_novedad = await prisma.historial_novedad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends historial_novedadCreateManyArgs>(args?: SelectSubset<T, historial_novedadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Historial_novedads and returns the data saved in the database.
     * @param {historial_novedadCreateManyAndReturnArgs} args - Arguments to create many Historial_novedads.
     * @example
     * // Create many Historial_novedads
     * const historial_novedad = await prisma.historial_novedad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Historial_novedads and only return the `id_historial`
     * const historial_novedadWithId_historialOnly = await prisma.historial_novedad.createManyAndReturn({
     *   select: { id_historial: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends historial_novedadCreateManyAndReturnArgs>(args?: SelectSubset<T, historial_novedadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historial_novedadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Historial_novedad.
     * @param {historial_novedadDeleteArgs} args - Arguments to delete one Historial_novedad.
     * @example
     * // Delete one Historial_novedad
     * const Historial_novedad = await prisma.historial_novedad.delete({
     *   where: {
     *     // ... filter to delete one Historial_novedad
     *   }
     * })
     * 
     */
    delete<T extends historial_novedadDeleteArgs>(args: SelectSubset<T, historial_novedadDeleteArgs<ExtArgs>>): Prisma__historial_novedadClient<$Result.GetResult<Prisma.$historial_novedadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historial_novedad.
     * @param {historial_novedadUpdateArgs} args - Arguments to update one Historial_novedad.
     * @example
     * // Update one Historial_novedad
     * const historial_novedad = await prisma.historial_novedad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends historial_novedadUpdateArgs>(args: SelectSubset<T, historial_novedadUpdateArgs<ExtArgs>>): Prisma__historial_novedadClient<$Result.GetResult<Prisma.$historial_novedadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historial_novedads.
     * @param {historial_novedadDeleteManyArgs} args - Arguments to filter Historial_novedads to delete.
     * @example
     * // Delete a few Historial_novedads
     * const { count } = await prisma.historial_novedad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends historial_novedadDeleteManyArgs>(args?: SelectSubset<T, historial_novedadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historial_novedads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_novedadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historial_novedads
     * const historial_novedad = await prisma.historial_novedad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends historial_novedadUpdateManyArgs>(args: SelectSubset<T, historial_novedadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historial_novedads and returns the data updated in the database.
     * @param {historial_novedadUpdateManyAndReturnArgs} args - Arguments to update many Historial_novedads.
     * @example
     * // Update many Historial_novedads
     * const historial_novedad = await prisma.historial_novedad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Historial_novedads and only return the `id_historial`
     * const historial_novedadWithId_historialOnly = await prisma.historial_novedad.updateManyAndReturn({
     *   select: { id_historial: true },
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
    updateManyAndReturn<T extends historial_novedadUpdateManyAndReturnArgs>(args: SelectSubset<T, historial_novedadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historial_novedadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Historial_novedad.
     * @param {historial_novedadUpsertArgs} args - Arguments to update or create a Historial_novedad.
     * @example
     * // Update or create a Historial_novedad
     * const historial_novedad = await prisma.historial_novedad.upsert({
     *   create: {
     *     // ... data to create a Historial_novedad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historial_novedad we want to update
     *   }
     * })
     */
    upsert<T extends historial_novedadUpsertArgs>(args: SelectSubset<T, historial_novedadUpsertArgs<ExtArgs>>): Prisma__historial_novedadClient<$Result.GetResult<Prisma.$historial_novedadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historial_novedads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_novedadCountArgs} args - Arguments to filter Historial_novedads to count.
     * @example
     * // Count the number of Historial_novedads
     * const count = await prisma.historial_novedad.count({
     *   where: {
     *     // ... the filter for the Historial_novedads we want to count
     *   }
     * })
    **/
    count<T extends historial_novedadCountArgs>(
      args?: Subset<T, historial_novedadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Historial_novedadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historial_novedad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historial_novedadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Historial_novedadAggregateArgs>(args: Subset<T, Historial_novedadAggregateArgs>): Prisma.PrismaPromise<GetHistorial_novedadAggregateType<T>>

    /**
     * Group by Historial_novedad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_novedadGroupByArgs} args - Group by arguments.
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
      T extends historial_novedadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: historial_novedadGroupByArgs['orderBy'] }
        : { orderBy?: historial_novedadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, historial_novedadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorial_novedadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the historial_novedad model
   */
  readonly fields: historial_novedadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for historial_novedad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__historial_novedadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estado_novedad<T extends historial_novedad$estado_novedadArgs<ExtArgs> = {}>(args?: Subset<T, historial_novedad$estado_novedadArgs<ExtArgs>>): Prisma__estado_novedadClient<$Result.GetResult<Prisma.$estado_novedadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    novedad<T extends historial_novedad$novedadArgs<ExtArgs> = {}>(args?: Subset<T, historial_novedad$novedadArgs<ExtArgs>>): Prisma__novedadClient<$Result.GetResult<Prisma.$novedadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends historial_novedad$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, historial_novedad$usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the historial_novedad model
   */
  interface historial_novedadFieldRefs {
    readonly id_historial: FieldRef<"historial_novedad", 'Int'>
    readonly id_novedad: FieldRef<"historial_novedad", 'Int'>
    readonly id_estado_novedad: FieldRef<"historial_novedad", 'Int'>
    readonly fecha_modificacion: FieldRef<"historial_novedad", 'DateTime'>
    readonly comentario: FieldRef<"historial_novedad", 'String'>
    readonly id_usuario_modificacion: FieldRef<"historial_novedad", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * historial_novedad findUnique
   */
  export type historial_novedadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_novedad
     */
    select?: historial_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_novedad
     */
    omit?: historial_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_novedadInclude<ExtArgs> | null
    /**
     * Filter, which historial_novedad to fetch.
     */
    where: historial_novedadWhereUniqueInput
  }

  /**
   * historial_novedad findUniqueOrThrow
   */
  export type historial_novedadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_novedad
     */
    select?: historial_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_novedad
     */
    omit?: historial_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_novedadInclude<ExtArgs> | null
    /**
     * Filter, which historial_novedad to fetch.
     */
    where: historial_novedadWhereUniqueInput
  }

  /**
   * historial_novedad findFirst
   */
  export type historial_novedadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_novedad
     */
    select?: historial_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_novedad
     */
    omit?: historial_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_novedadInclude<ExtArgs> | null
    /**
     * Filter, which historial_novedad to fetch.
     */
    where?: historial_novedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_novedads to fetch.
     */
    orderBy?: historial_novedadOrderByWithRelationInput | historial_novedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historial_novedads.
     */
    cursor?: historial_novedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_novedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historial_novedads.
     */
    distinct?: Historial_novedadScalarFieldEnum | Historial_novedadScalarFieldEnum[]
  }

  /**
   * historial_novedad findFirstOrThrow
   */
  export type historial_novedadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_novedad
     */
    select?: historial_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_novedad
     */
    omit?: historial_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_novedadInclude<ExtArgs> | null
    /**
     * Filter, which historial_novedad to fetch.
     */
    where?: historial_novedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_novedads to fetch.
     */
    orderBy?: historial_novedadOrderByWithRelationInput | historial_novedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historial_novedads.
     */
    cursor?: historial_novedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_novedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historial_novedads.
     */
    distinct?: Historial_novedadScalarFieldEnum | Historial_novedadScalarFieldEnum[]
  }

  /**
   * historial_novedad findMany
   */
  export type historial_novedadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_novedad
     */
    select?: historial_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_novedad
     */
    omit?: historial_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_novedadInclude<ExtArgs> | null
    /**
     * Filter, which historial_novedads to fetch.
     */
    where?: historial_novedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_novedads to fetch.
     */
    orderBy?: historial_novedadOrderByWithRelationInput | historial_novedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing historial_novedads.
     */
    cursor?: historial_novedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_novedads.
     */
    skip?: number
    distinct?: Historial_novedadScalarFieldEnum | Historial_novedadScalarFieldEnum[]
  }

  /**
   * historial_novedad create
   */
  export type historial_novedadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_novedad
     */
    select?: historial_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_novedad
     */
    omit?: historial_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_novedadInclude<ExtArgs> | null
    /**
     * The data needed to create a historial_novedad.
     */
    data?: XOR<historial_novedadCreateInput, historial_novedadUncheckedCreateInput>
  }

  /**
   * historial_novedad createMany
   */
  export type historial_novedadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many historial_novedads.
     */
    data: historial_novedadCreateManyInput | historial_novedadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * historial_novedad createManyAndReturn
   */
  export type historial_novedadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_novedad
     */
    select?: historial_novedadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the historial_novedad
     */
    omit?: historial_novedadOmit<ExtArgs> | null
    /**
     * The data used to create many historial_novedads.
     */
    data: historial_novedadCreateManyInput | historial_novedadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_novedadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * historial_novedad update
   */
  export type historial_novedadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_novedad
     */
    select?: historial_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_novedad
     */
    omit?: historial_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_novedadInclude<ExtArgs> | null
    /**
     * The data needed to update a historial_novedad.
     */
    data: XOR<historial_novedadUpdateInput, historial_novedadUncheckedUpdateInput>
    /**
     * Choose, which historial_novedad to update.
     */
    where: historial_novedadWhereUniqueInput
  }

  /**
   * historial_novedad updateMany
   */
  export type historial_novedadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update historial_novedads.
     */
    data: XOR<historial_novedadUpdateManyMutationInput, historial_novedadUncheckedUpdateManyInput>
    /**
     * Filter which historial_novedads to update
     */
    where?: historial_novedadWhereInput
    /**
     * Limit how many historial_novedads to update.
     */
    limit?: number
  }

  /**
   * historial_novedad updateManyAndReturn
   */
  export type historial_novedadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_novedad
     */
    select?: historial_novedadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the historial_novedad
     */
    omit?: historial_novedadOmit<ExtArgs> | null
    /**
     * The data used to update historial_novedads.
     */
    data: XOR<historial_novedadUpdateManyMutationInput, historial_novedadUncheckedUpdateManyInput>
    /**
     * Filter which historial_novedads to update
     */
    where?: historial_novedadWhereInput
    /**
     * Limit how many historial_novedads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_novedadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * historial_novedad upsert
   */
  export type historial_novedadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_novedad
     */
    select?: historial_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_novedad
     */
    omit?: historial_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_novedadInclude<ExtArgs> | null
    /**
     * The filter to search for the historial_novedad to update in case it exists.
     */
    where: historial_novedadWhereUniqueInput
    /**
     * In case the historial_novedad found by the `where` argument doesn't exist, create a new historial_novedad with this data.
     */
    create: XOR<historial_novedadCreateInput, historial_novedadUncheckedCreateInput>
    /**
     * In case the historial_novedad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historial_novedadUpdateInput, historial_novedadUncheckedUpdateInput>
  }

  /**
   * historial_novedad delete
   */
  export type historial_novedadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_novedad
     */
    select?: historial_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_novedad
     */
    omit?: historial_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_novedadInclude<ExtArgs> | null
    /**
     * Filter which historial_novedad to delete.
     */
    where: historial_novedadWhereUniqueInput
  }

  /**
   * historial_novedad deleteMany
   */
  export type historial_novedadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historial_novedads to delete
     */
    where?: historial_novedadWhereInput
    /**
     * Limit how many historial_novedads to delete.
     */
    limit?: number
  }

  /**
   * historial_novedad.estado_novedad
   */
  export type historial_novedad$estado_novedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_novedad
     */
    select?: estado_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_novedad
     */
    omit?: estado_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_novedadInclude<ExtArgs> | null
    where?: estado_novedadWhereInput
  }

  /**
   * historial_novedad.novedad
   */
  export type historial_novedad$novedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadInclude<ExtArgs> | null
    where?: novedadWhereInput
  }

  /**
   * historial_novedad.usuario
   */
  export type historial_novedad$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }

  /**
   * historial_novedad without action
   */
  export type historial_novedadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_novedad
     */
    select?: historial_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_novedad
     */
    omit?: historial_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_novedadInclude<ExtArgs> | null
  }


  /**
   * Model notificacion
   */

  export type AggregateNotificacion = {
    _count: NotificacionCountAggregateOutputType | null
    _avg: NotificacionAvgAggregateOutputType | null
    _sum: NotificacionSumAggregateOutputType | null
    _min: NotificacionMinAggregateOutputType | null
    _max: NotificacionMaxAggregateOutputType | null
  }

  export type NotificacionAvgAggregateOutputType = {
    id_notificacion: number | null
    id_usuario: number | null
    id_novedad: number | null
  }

  export type NotificacionSumAggregateOutputType = {
    id_notificacion: number | null
    id_usuario: number | null
    id_novedad: number | null
  }

  export type NotificacionMinAggregateOutputType = {
    id_notificacion: number | null
    id_usuario: number | null
    id_novedad: number | null
    mensaje: string | null
    fecha_creacion: Date | null
    leido: boolean | null
  }

  export type NotificacionMaxAggregateOutputType = {
    id_notificacion: number | null
    id_usuario: number | null
    id_novedad: number | null
    mensaje: string | null
    fecha_creacion: Date | null
    leido: boolean | null
  }

  export type NotificacionCountAggregateOutputType = {
    id_notificacion: number
    id_usuario: number
    id_novedad: number
    mensaje: number
    fecha_creacion: number
    leido: number
    _all: number
  }


  export type NotificacionAvgAggregateInputType = {
    id_notificacion?: true
    id_usuario?: true
    id_novedad?: true
  }

  export type NotificacionSumAggregateInputType = {
    id_notificacion?: true
    id_usuario?: true
    id_novedad?: true
  }

  export type NotificacionMinAggregateInputType = {
    id_notificacion?: true
    id_usuario?: true
    id_novedad?: true
    mensaje?: true
    fecha_creacion?: true
    leido?: true
  }

  export type NotificacionMaxAggregateInputType = {
    id_notificacion?: true
    id_usuario?: true
    id_novedad?: true
    mensaje?: true
    fecha_creacion?: true
    leido?: true
  }

  export type NotificacionCountAggregateInputType = {
    id_notificacion?: true
    id_usuario?: true
    id_novedad?: true
    mensaje?: true
    fecha_creacion?: true
    leido?: true
    _all?: true
  }

  export type NotificacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notificacion to aggregate.
     */
    where?: notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificacions to fetch.
     */
    orderBy?: notificacionOrderByWithRelationInput | notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notificacions
    **/
    _count?: true | NotificacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacionMaxAggregateInputType
  }

  export type GetNotificacionAggregateType<T extends NotificacionAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacion[P]>
      : GetScalarType<T[P], AggregateNotificacion[P]>
  }




  export type notificacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificacionWhereInput
    orderBy?: notificacionOrderByWithAggregationInput | notificacionOrderByWithAggregationInput[]
    by: NotificacionScalarFieldEnum[] | NotificacionScalarFieldEnum
    having?: notificacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacionCountAggregateInputType | true
    _avg?: NotificacionAvgAggregateInputType
    _sum?: NotificacionSumAggregateInputType
    _min?: NotificacionMinAggregateInputType
    _max?: NotificacionMaxAggregateInputType
  }

  export type NotificacionGroupByOutputType = {
    id_notificacion: number
    id_usuario: number | null
    id_novedad: number | null
    mensaje: string | null
    fecha_creacion: Date | null
    leido: boolean | null
    _count: NotificacionCountAggregateOutputType | null
    _avg: NotificacionAvgAggregateOutputType | null
    _sum: NotificacionSumAggregateOutputType | null
    _min: NotificacionMinAggregateOutputType | null
    _max: NotificacionMaxAggregateOutputType | null
  }

  type GetNotificacionGroupByPayload<T extends notificacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacionGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacionGroupByOutputType[P]>
        }
      >
    >


  export type notificacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_notificacion?: boolean
    id_usuario?: boolean
    id_novedad?: boolean
    mensaje?: boolean
    fecha_creacion?: boolean
    leido?: boolean
    correo_log?: boolean | notificacion$correo_logArgs<ExtArgs>
    novedad?: boolean | notificacion$novedadArgs<ExtArgs>
    usuario?: boolean | notificacion$usuarioArgs<ExtArgs>
    _count?: boolean | NotificacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacion"]>

  export type notificacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_notificacion?: boolean
    id_usuario?: boolean
    id_novedad?: boolean
    mensaje?: boolean
    fecha_creacion?: boolean
    leido?: boolean
    novedad?: boolean | notificacion$novedadArgs<ExtArgs>
    usuario?: boolean | notificacion$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["notificacion"]>

  export type notificacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_notificacion?: boolean
    id_usuario?: boolean
    id_novedad?: boolean
    mensaje?: boolean
    fecha_creacion?: boolean
    leido?: boolean
    novedad?: boolean | notificacion$novedadArgs<ExtArgs>
    usuario?: boolean | notificacion$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["notificacion"]>

  export type notificacionSelectScalar = {
    id_notificacion?: boolean
    id_usuario?: boolean
    id_novedad?: boolean
    mensaje?: boolean
    fecha_creacion?: boolean
    leido?: boolean
  }

  export type notificacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_notificacion" | "id_usuario" | "id_novedad" | "mensaje" | "fecha_creacion" | "leido", ExtArgs["result"]["notificacion"]>
  export type notificacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    correo_log?: boolean | notificacion$correo_logArgs<ExtArgs>
    novedad?: boolean | notificacion$novedadArgs<ExtArgs>
    usuario?: boolean | notificacion$usuarioArgs<ExtArgs>
    _count?: boolean | NotificacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type notificacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novedad?: boolean | notificacion$novedadArgs<ExtArgs>
    usuario?: boolean | notificacion$usuarioArgs<ExtArgs>
  }
  export type notificacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novedad?: boolean | notificacion$novedadArgs<ExtArgs>
    usuario?: boolean | notificacion$usuarioArgs<ExtArgs>
  }

  export type $notificacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notificacion"
    objects: {
      correo_log: Prisma.$correo_logPayload<ExtArgs>[]
      novedad: Prisma.$novedadPayload<ExtArgs> | null
      usuario: Prisma.$usuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_notificacion: number
      id_usuario: number | null
      id_novedad: number | null
      mensaje: string | null
      fecha_creacion: Date | null
      leido: boolean | null
    }, ExtArgs["result"]["notificacion"]>
    composites: {}
  }

  type notificacionGetPayload<S extends boolean | null | undefined | notificacionDefaultArgs> = $Result.GetResult<Prisma.$notificacionPayload, S>

  type notificacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacionCountAggregateInputType | true
    }

  export interface notificacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notificacion'], meta: { name: 'notificacion' } }
    /**
     * Find zero or one Notificacion that matches the filter.
     * @param {notificacionFindUniqueArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificacionFindUniqueArgs>(args: SelectSubset<T, notificacionFindUniqueArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificacionFindUniqueOrThrowArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificacionFindUniqueOrThrowArgs>(args: SelectSubset<T, notificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionFindFirstArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificacionFindFirstArgs>(args?: SelectSubset<T, notificacionFindFirstArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionFindFirstOrThrowArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificacionFindFirstOrThrowArgs>(args?: SelectSubset<T, notificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacions
     * const notificacions = await prisma.notificacion.findMany()
     * 
     * // Get first 10 Notificacions
     * const notificacions = await prisma.notificacion.findMany({ take: 10 })
     * 
     * // Only select the `id_notificacion`
     * const notificacionWithId_notificacionOnly = await prisma.notificacion.findMany({ select: { id_notificacion: true } })
     * 
     */
    findMany<T extends notificacionFindManyArgs>(args?: SelectSubset<T, notificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificacion.
     * @param {notificacionCreateArgs} args - Arguments to create a Notificacion.
     * @example
     * // Create one Notificacion
     * const Notificacion = await prisma.notificacion.create({
     *   data: {
     *     // ... data to create a Notificacion
     *   }
     * })
     * 
     */
    create<T extends notificacionCreateArgs>(args: SelectSubset<T, notificacionCreateArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificacions.
     * @param {notificacionCreateManyArgs} args - Arguments to create many Notificacions.
     * @example
     * // Create many Notificacions
     * const notificacion = await prisma.notificacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificacionCreateManyArgs>(args?: SelectSubset<T, notificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notificacions and returns the data saved in the database.
     * @param {notificacionCreateManyAndReturnArgs} args - Arguments to create many Notificacions.
     * @example
     * // Create many Notificacions
     * const notificacion = await prisma.notificacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notificacions and only return the `id_notificacion`
     * const notificacionWithId_notificacionOnly = await prisma.notificacion.createManyAndReturn({
     *   select: { id_notificacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificacionCreateManyAndReturnArgs>(args?: SelectSubset<T, notificacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notificacion.
     * @param {notificacionDeleteArgs} args - Arguments to delete one Notificacion.
     * @example
     * // Delete one Notificacion
     * const Notificacion = await prisma.notificacion.delete({
     *   where: {
     *     // ... filter to delete one Notificacion
     *   }
     * })
     * 
     */
    delete<T extends notificacionDeleteArgs>(args: SelectSubset<T, notificacionDeleteArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificacion.
     * @param {notificacionUpdateArgs} args - Arguments to update one Notificacion.
     * @example
     * // Update one Notificacion
     * const notificacion = await prisma.notificacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificacionUpdateArgs>(args: SelectSubset<T, notificacionUpdateArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificacions.
     * @param {notificacionDeleteManyArgs} args - Arguments to filter Notificacions to delete.
     * @example
     * // Delete a few Notificacions
     * const { count } = await prisma.notificacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificacionDeleteManyArgs>(args?: SelectSubset<T, notificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacions
     * const notificacion = await prisma.notificacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificacionUpdateManyArgs>(args: SelectSubset<T, notificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacions and returns the data updated in the database.
     * @param {notificacionUpdateManyAndReturnArgs} args - Arguments to update many Notificacions.
     * @example
     * // Update many Notificacions
     * const notificacion = await prisma.notificacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notificacions and only return the `id_notificacion`
     * const notificacionWithId_notificacionOnly = await prisma.notificacion.updateManyAndReturn({
     *   select: { id_notificacion: true },
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
    updateManyAndReturn<T extends notificacionUpdateManyAndReturnArgs>(args: SelectSubset<T, notificacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notificacion.
     * @param {notificacionUpsertArgs} args - Arguments to update or create a Notificacion.
     * @example
     * // Update or create a Notificacion
     * const notificacion = await prisma.notificacion.upsert({
     *   create: {
     *     // ... data to create a Notificacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacion we want to update
     *   }
     * })
     */
    upsert<T extends notificacionUpsertArgs>(args: SelectSubset<T, notificacionUpsertArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionCountArgs} args - Arguments to filter Notificacions to count.
     * @example
     * // Count the number of Notificacions
     * const count = await prisma.notificacion.count({
     *   where: {
     *     // ... the filter for the Notificacions we want to count
     *   }
     * })
    **/
    count<T extends notificacionCountArgs>(
      args?: Subset<T, notificacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificacionAggregateArgs>(args: Subset<T, NotificacionAggregateArgs>): Prisma.PrismaPromise<GetNotificacionAggregateType<T>>

    /**
     * Group by Notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionGroupByArgs} args - Group by arguments.
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
      T extends notificacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificacionGroupByArgs['orderBy'] }
        : { orderBy?: notificacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notificacion model
   */
  readonly fields: notificacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notificacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    correo_log<T extends notificacion$correo_logArgs<ExtArgs> = {}>(args?: Subset<T, notificacion$correo_logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$correo_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    novedad<T extends notificacion$novedadArgs<ExtArgs> = {}>(args?: Subset<T, notificacion$novedadArgs<ExtArgs>>): Prisma__novedadClient<$Result.GetResult<Prisma.$novedadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends notificacion$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, notificacion$usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the notificacion model
   */
  interface notificacionFieldRefs {
    readonly id_notificacion: FieldRef<"notificacion", 'Int'>
    readonly id_usuario: FieldRef<"notificacion", 'Int'>
    readonly id_novedad: FieldRef<"notificacion", 'Int'>
    readonly mensaje: FieldRef<"notificacion", 'String'>
    readonly fecha_creacion: FieldRef<"notificacion", 'DateTime'>
    readonly leido: FieldRef<"notificacion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * notificacion findUnique
   */
  export type notificacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter, which notificacion to fetch.
     */
    where: notificacionWhereUniqueInput
  }

  /**
   * notificacion findUniqueOrThrow
   */
  export type notificacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter, which notificacion to fetch.
     */
    where: notificacionWhereUniqueInput
  }

  /**
   * notificacion findFirst
   */
  export type notificacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter, which notificacion to fetch.
     */
    where?: notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificacions to fetch.
     */
    orderBy?: notificacionOrderByWithRelationInput | notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notificacions.
     */
    cursor?: notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notificacions.
     */
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * notificacion findFirstOrThrow
   */
  export type notificacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter, which notificacion to fetch.
     */
    where?: notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificacions to fetch.
     */
    orderBy?: notificacionOrderByWithRelationInput | notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notificacions.
     */
    cursor?: notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notificacions.
     */
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * notificacion findMany
   */
  export type notificacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter, which notificacions to fetch.
     */
    where?: notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificacions to fetch.
     */
    orderBy?: notificacionOrderByWithRelationInput | notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notificacions.
     */
    cursor?: notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificacions.
     */
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * notificacion create
   */
  export type notificacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * The data needed to create a notificacion.
     */
    data?: XOR<notificacionCreateInput, notificacionUncheckedCreateInput>
  }

  /**
   * notificacion createMany
   */
  export type notificacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notificacions.
     */
    data: notificacionCreateManyInput | notificacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notificacion createManyAndReturn
   */
  export type notificacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * The data used to create many notificacions.
     */
    data: notificacionCreateManyInput | notificacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notificacion update
   */
  export type notificacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * The data needed to update a notificacion.
     */
    data: XOR<notificacionUpdateInput, notificacionUncheckedUpdateInput>
    /**
     * Choose, which notificacion to update.
     */
    where: notificacionWhereUniqueInput
  }

  /**
   * notificacion updateMany
   */
  export type notificacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notificacions.
     */
    data: XOR<notificacionUpdateManyMutationInput, notificacionUncheckedUpdateManyInput>
    /**
     * Filter which notificacions to update
     */
    where?: notificacionWhereInput
    /**
     * Limit how many notificacions to update.
     */
    limit?: number
  }

  /**
   * notificacion updateManyAndReturn
   */
  export type notificacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * The data used to update notificacions.
     */
    data: XOR<notificacionUpdateManyMutationInput, notificacionUncheckedUpdateManyInput>
    /**
     * Filter which notificacions to update
     */
    where?: notificacionWhereInput
    /**
     * Limit how many notificacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notificacion upsert
   */
  export type notificacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * The filter to search for the notificacion to update in case it exists.
     */
    where: notificacionWhereUniqueInput
    /**
     * In case the notificacion found by the `where` argument doesn't exist, create a new notificacion with this data.
     */
    create: XOR<notificacionCreateInput, notificacionUncheckedCreateInput>
    /**
     * In case the notificacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificacionUpdateInput, notificacionUncheckedUpdateInput>
  }

  /**
   * notificacion delete
   */
  export type notificacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter which notificacion to delete.
     */
    where: notificacionWhereUniqueInput
  }

  /**
   * notificacion deleteMany
   */
  export type notificacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notificacions to delete
     */
    where?: notificacionWhereInput
    /**
     * Limit how many notificacions to delete.
     */
    limit?: number
  }

  /**
   * notificacion.correo_log
   */
  export type notificacion$correo_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the correo_log
     */
    select?: correo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the correo_log
     */
    omit?: correo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: correo_logInclude<ExtArgs> | null
    where?: correo_logWhereInput
    orderBy?: correo_logOrderByWithRelationInput | correo_logOrderByWithRelationInput[]
    cursor?: correo_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Correo_logScalarFieldEnum | Correo_logScalarFieldEnum[]
  }

  /**
   * notificacion.novedad
   */
  export type notificacion$novedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadInclude<ExtArgs> | null
    where?: novedadWhereInput
  }

  /**
   * notificacion.usuario
   */
  export type notificacion$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }

  /**
   * notificacion without action
   */
  export type notificacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
  }


  /**
   * Model novedad
   */

  export type AggregateNovedad = {
    _count: NovedadCountAggregateOutputType | null
    _avg: NovedadAvgAggregateOutputType | null
    _sum: NovedadSumAggregateOutputType | null
    _min: NovedadMinAggregateOutputType | null
    _max: NovedadMaxAggregateOutputType | null
  }

  export type NovedadAvgAggregateOutputType = {
    id_novedad: number | null
    id_usuario: number | null
    id_tipo_novedad: number | null
    id_estado_novedad: number | null
  }

  export type NovedadSumAggregateOutputType = {
    id_novedad: number | null
    id_usuario: number | null
    id_tipo_novedad: number | null
    id_estado_novedad: number | null
  }

  export type NovedadMinAggregateOutputType = {
    id_novedad: number | null
    id_usuario: number | null
    id_tipo_novedad: number | null
    id_estado_novedad: number | null
    fecha_creacion: Date | null
    descripcion: string | null
  }

  export type NovedadMaxAggregateOutputType = {
    id_novedad: number | null
    id_usuario: number | null
    id_tipo_novedad: number | null
    id_estado_novedad: number | null
    fecha_creacion: Date | null
    descripcion: string | null
  }

  export type NovedadCountAggregateOutputType = {
    id_novedad: number
    id_usuario: number
    id_tipo_novedad: number
    id_estado_novedad: number
    fecha_creacion: number
    descripcion: number
    _all: number
  }


  export type NovedadAvgAggregateInputType = {
    id_novedad?: true
    id_usuario?: true
    id_tipo_novedad?: true
    id_estado_novedad?: true
  }

  export type NovedadSumAggregateInputType = {
    id_novedad?: true
    id_usuario?: true
    id_tipo_novedad?: true
    id_estado_novedad?: true
  }

  export type NovedadMinAggregateInputType = {
    id_novedad?: true
    id_usuario?: true
    id_tipo_novedad?: true
    id_estado_novedad?: true
    fecha_creacion?: true
    descripcion?: true
  }

  export type NovedadMaxAggregateInputType = {
    id_novedad?: true
    id_usuario?: true
    id_tipo_novedad?: true
    id_estado_novedad?: true
    fecha_creacion?: true
    descripcion?: true
  }

  export type NovedadCountAggregateInputType = {
    id_novedad?: true
    id_usuario?: true
    id_tipo_novedad?: true
    id_estado_novedad?: true
    fecha_creacion?: true
    descripcion?: true
    _all?: true
  }

  export type NovedadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which novedad to aggregate.
     */
    where?: novedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of novedads to fetch.
     */
    orderBy?: novedadOrderByWithRelationInput | novedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: novedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` novedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned novedads
    **/
    _count?: true | NovedadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NovedadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NovedadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NovedadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NovedadMaxAggregateInputType
  }

  export type GetNovedadAggregateType<T extends NovedadAggregateArgs> = {
        [P in keyof T & keyof AggregateNovedad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNovedad[P]>
      : GetScalarType<T[P], AggregateNovedad[P]>
  }




  export type novedadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: novedadWhereInput
    orderBy?: novedadOrderByWithAggregationInput | novedadOrderByWithAggregationInput[]
    by: NovedadScalarFieldEnum[] | NovedadScalarFieldEnum
    having?: novedadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NovedadCountAggregateInputType | true
    _avg?: NovedadAvgAggregateInputType
    _sum?: NovedadSumAggregateInputType
    _min?: NovedadMinAggregateInputType
    _max?: NovedadMaxAggregateInputType
  }

  export type NovedadGroupByOutputType = {
    id_novedad: number
    id_usuario: number | null
    id_tipo_novedad: number | null
    id_estado_novedad: number | null
    fecha_creacion: Date | null
    descripcion: string | null
    _count: NovedadCountAggregateOutputType | null
    _avg: NovedadAvgAggregateOutputType | null
    _sum: NovedadSumAggregateOutputType | null
    _min: NovedadMinAggregateOutputType | null
    _max: NovedadMaxAggregateOutputType | null
  }

  type GetNovedadGroupByPayload<T extends novedadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NovedadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NovedadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NovedadGroupByOutputType[P]>
            : GetScalarType<T[P], NovedadGroupByOutputType[P]>
        }
      >
    >


  export type novedadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_novedad?: boolean
    id_usuario?: boolean
    id_tipo_novedad?: boolean
    id_estado_novedad?: boolean
    fecha_creacion?: boolean
    descripcion?: boolean
    archivo_adjunto?: boolean | novedad$archivo_adjuntoArgs<ExtArgs>
    historial_novedad?: boolean | novedad$historial_novedadArgs<ExtArgs>
    notificacion?: boolean | novedad$notificacionArgs<ExtArgs>
    estado_novedad?: boolean | novedad$estado_novedadArgs<ExtArgs>
    tipo_novedad?: boolean | novedad$tipo_novedadArgs<ExtArgs>
    usuario?: boolean | novedad$usuarioArgs<ExtArgs>
    _count?: boolean | NovedadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["novedad"]>

  export type novedadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_novedad?: boolean
    id_usuario?: boolean
    id_tipo_novedad?: boolean
    id_estado_novedad?: boolean
    fecha_creacion?: boolean
    descripcion?: boolean
    estado_novedad?: boolean | novedad$estado_novedadArgs<ExtArgs>
    tipo_novedad?: boolean | novedad$tipo_novedadArgs<ExtArgs>
    usuario?: boolean | novedad$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["novedad"]>

  export type novedadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_novedad?: boolean
    id_usuario?: boolean
    id_tipo_novedad?: boolean
    id_estado_novedad?: boolean
    fecha_creacion?: boolean
    descripcion?: boolean
    estado_novedad?: boolean | novedad$estado_novedadArgs<ExtArgs>
    tipo_novedad?: boolean | novedad$tipo_novedadArgs<ExtArgs>
    usuario?: boolean | novedad$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["novedad"]>

  export type novedadSelectScalar = {
    id_novedad?: boolean
    id_usuario?: boolean
    id_tipo_novedad?: boolean
    id_estado_novedad?: boolean
    fecha_creacion?: boolean
    descripcion?: boolean
  }

  export type novedadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_novedad" | "id_usuario" | "id_tipo_novedad" | "id_estado_novedad" | "fecha_creacion" | "descripcion", ExtArgs["result"]["novedad"]>
  export type novedadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archivo_adjunto?: boolean | novedad$archivo_adjuntoArgs<ExtArgs>
    historial_novedad?: boolean | novedad$historial_novedadArgs<ExtArgs>
    notificacion?: boolean | novedad$notificacionArgs<ExtArgs>
    estado_novedad?: boolean | novedad$estado_novedadArgs<ExtArgs>
    tipo_novedad?: boolean | novedad$tipo_novedadArgs<ExtArgs>
    usuario?: boolean | novedad$usuarioArgs<ExtArgs>
    _count?: boolean | NovedadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type novedadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado_novedad?: boolean | novedad$estado_novedadArgs<ExtArgs>
    tipo_novedad?: boolean | novedad$tipo_novedadArgs<ExtArgs>
    usuario?: boolean | novedad$usuarioArgs<ExtArgs>
  }
  export type novedadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado_novedad?: boolean | novedad$estado_novedadArgs<ExtArgs>
    tipo_novedad?: boolean | novedad$tipo_novedadArgs<ExtArgs>
    usuario?: boolean | novedad$usuarioArgs<ExtArgs>
  }

  export type $novedadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "novedad"
    objects: {
      archivo_adjunto: Prisma.$archivo_adjuntoPayload<ExtArgs>[]
      historial_novedad: Prisma.$historial_novedadPayload<ExtArgs>[]
      notificacion: Prisma.$notificacionPayload<ExtArgs>[]
      estado_novedad: Prisma.$estado_novedadPayload<ExtArgs> | null
      tipo_novedad: Prisma.$tipo_novedadPayload<ExtArgs> | null
      usuario: Prisma.$usuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_novedad: number
      id_usuario: number | null
      id_tipo_novedad: number | null
      id_estado_novedad: number | null
      fecha_creacion: Date | null
      descripcion: string | null
    }, ExtArgs["result"]["novedad"]>
    composites: {}
  }

  type novedadGetPayload<S extends boolean | null | undefined | novedadDefaultArgs> = $Result.GetResult<Prisma.$novedadPayload, S>

  type novedadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<novedadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NovedadCountAggregateInputType | true
    }

  export interface novedadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['novedad'], meta: { name: 'novedad' } }
    /**
     * Find zero or one Novedad that matches the filter.
     * @param {novedadFindUniqueArgs} args - Arguments to find a Novedad
     * @example
     * // Get one Novedad
     * const novedad = await prisma.novedad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends novedadFindUniqueArgs>(args: SelectSubset<T, novedadFindUniqueArgs<ExtArgs>>): Prisma__novedadClient<$Result.GetResult<Prisma.$novedadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Novedad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {novedadFindUniqueOrThrowArgs} args - Arguments to find a Novedad
     * @example
     * // Get one Novedad
     * const novedad = await prisma.novedad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends novedadFindUniqueOrThrowArgs>(args: SelectSubset<T, novedadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__novedadClient<$Result.GetResult<Prisma.$novedadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Novedad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novedadFindFirstArgs} args - Arguments to find a Novedad
     * @example
     * // Get one Novedad
     * const novedad = await prisma.novedad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends novedadFindFirstArgs>(args?: SelectSubset<T, novedadFindFirstArgs<ExtArgs>>): Prisma__novedadClient<$Result.GetResult<Prisma.$novedadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Novedad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novedadFindFirstOrThrowArgs} args - Arguments to find a Novedad
     * @example
     * // Get one Novedad
     * const novedad = await prisma.novedad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends novedadFindFirstOrThrowArgs>(args?: SelectSubset<T, novedadFindFirstOrThrowArgs<ExtArgs>>): Prisma__novedadClient<$Result.GetResult<Prisma.$novedadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Novedads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novedadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Novedads
     * const novedads = await prisma.novedad.findMany()
     * 
     * // Get first 10 Novedads
     * const novedads = await prisma.novedad.findMany({ take: 10 })
     * 
     * // Only select the `id_novedad`
     * const novedadWithId_novedadOnly = await prisma.novedad.findMany({ select: { id_novedad: true } })
     * 
     */
    findMany<T extends novedadFindManyArgs>(args?: SelectSubset<T, novedadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$novedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Novedad.
     * @param {novedadCreateArgs} args - Arguments to create a Novedad.
     * @example
     * // Create one Novedad
     * const Novedad = await prisma.novedad.create({
     *   data: {
     *     // ... data to create a Novedad
     *   }
     * })
     * 
     */
    create<T extends novedadCreateArgs>(args: SelectSubset<T, novedadCreateArgs<ExtArgs>>): Prisma__novedadClient<$Result.GetResult<Prisma.$novedadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Novedads.
     * @param {novedadCreateManyArgs} args - Arguments to create many Novedads.
     * @example
     * // Create many Novedads
     * const novedad = await prisma.novedad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends novedadCreateManyArgs>(args?: SelectSubset<T, novedadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Novedads and returns the data saved in the database.
     * @param {novedadCreateManyAndReturnArgs} args - Arguments to create many Novedads.
     * @example
     * // Create many Novedads
     * const novedad = await prisma.novedad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Novedads and only return the `id_novedad`
     * const novedadWithId_novedadOnly = await prisma.novedad.createManyAndReturn({
     *   select: { id_novedad: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends novedadCreateManyAndReturnArgs>(args?: SelectSubset<T, novedadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$novedadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Novedad.
     * @param {novedadDeleteArgs} args - Arguments to delete one Novedad.
     * @example
     * // Delete one Novedad
     * const Novedad = await prisma.novedad.delete({
     *   where: {
     *     // ... filter to delete one Novedad
     *   }
     * })
     * 
     */
    delete<T extends novedadDeleteArgs>(args: SelectSubset<T, novedadDeleteArgs<ExtArgs>>): Prisma__novedadClient<$Result.GetResult<Prisma.$novedadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Novedad.
     * @param {novedadUpdateArgs} args - Arguments to update one Novedad.
     * @example
     * // Update one Novedad
     * const novedad = await prisma.novedad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends novedadUpdateArgs>(args: SelectSubset<T, novedadUpdateArgs<ExtArgs>>): Prisma__novedadClient<$Result.GetResult<Prisma.$novedadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Novedads.
     * @param {novedadDeleteManyArgs} args - Arguments to filter Novedads to delete.
     * @example
     * // Delete a few Novedads
     * const { count } = await prisma.novedad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends novedadDeleteManyArgs>(args?: SelectSubset<T, novedadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Novedads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novedadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Novedads
     * const novedad = await prisma.novedad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends novedadUpdateManyArgs>(args: SelectSubset<T, novedadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Novedads and returns the data updated in the database.
     * @param {novedadUpdateManyAndReturnArgs} args - Arguments to update many Novedads.
     * @example
     * // Update many Novedads
     * const novedad = await prisma.novedad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Novedads and only return the `id_novedad`
     * const novedadWithId_novedadOnly = await prisma.novedad.updateManyAndReturn({
     *   select: { id_novedad: true },
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
    updateManyAndReturn<T extends novedadUpdateManyAndReturnArgs>(args: SelectSubset<T, novedadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$novedadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Novedad.
     * @param {novedadUpsertArgs} args - Arguments to update or create a Novedad.
     * @example
     * // Update or create a Novedad
     * const novedad = await prisma.novedad.upsert({
     *   create: {
     *     // ... data to create a Novedad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Novedad we want to update
     *   }
     * })
     */
    upsert<T extends novedadUpsertArgs>(args: SelectSubset<T, novedadUpsertArgs<ExtArgs>>): Prisma__novedadClient<$Result.GetResult<Prisma.$novedadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Novedads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novedadCountArgs} args - Arguments to filter Novedads to count.
     * @example
     * // Count the number of Novedads
     * const count = await prisma.novedad.count({
     *   where: {
     *     // ... the filter for the Novedads we want to count
     *   }
     * })
    **/
    count<T extends novedadCountArgs>(
      args?: Subset<T, novedadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NovedadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Novedad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovedadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NovedadAggregateArgs>(args: Subset<T, NovedadAggregateArgs>): Prisma.PrismaPromise<GetNovedadAggregateType<T>>

    /**
     * Group by Novedad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {novedadGroupByArgs} args - Group by arguments.
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
      T extends novedadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: novedadGroupByArgs['orderBy'] }
        : { orderBy?: novedadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, novedadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNovedadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the novedad model
   */
  readonly fields: novedadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for novedad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__novedadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    archivo_adjunto<T extends novedad$archivo_adjuntoArgs<ExtArgs> = {}>(args?: Subset<T, novedad$archivo_adjuntoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivo_adjuntoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historial_novedad<T extends novedad$historial_novedadArgs<ExtArgs> = {}>(args?: Subset<T, novedad$historial_novedadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historial_novedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificacion<T extends novedad$notificacionArgs<ExtArgs> = {}>(args?: Subset<T, novedad$notificacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estado_novedad<T extends novedad$estado_novedadArgs<ExtArgs> = {}>(args?: Subset<T, novedad$estado_novedadArgs<ExtArgs>>): Prisma__estado_novedadClient<$Result.GetResult<Prisma.$estado_novedadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tipo_novedad<T extends novedad$tipo_novedadArgs<ExtArgs> = {}>(args?: Subset<T, novedad$tipo_novedadArgs<ExtArgs>>): Prisma__tipo_novedadClient<$Result.GetResult<Prisma.$tipo_novedadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends novedad$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, novedad$usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the novedad model
   */
  interface novedadFieldRefs {
    readonly id_novedad: FieldRef<"novedad", 'Int'>
    readonly id_usuario: FieldRef<"novedad", 'Int'>
    readonly id_tipo_novedad: FieldRef<"novedad", 'Int'>
    readonly id_estado_novedad: FieldRef<"novedad", 'Int'>
    readonly fecha_creacion: FieldRef<"novedad", 'DateTime'>
    readonly descripcion: FieldRef<"novedad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * novedad findUnique
   */
  export type novedadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadInclude<ExtArgs> | null
    /**
     * Filter, which novedad to fetch.
     */
    where: novedadWhereUniqueInput
  }

  /**
   * novedad findUniqueOrThrow
   */
  export type novedadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadInclude<ExtArgs> | null
    /**
     * Filter, which novedad to fetch.
     */
    where: novedadWhereUniqueInput
  }

  /**
   * novedad findFirst
   */
  export type novedadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadInclude<ExtArgs> | null
    /**
     * Filter, which novedad to fetch.
     */
    where?: novedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of novedads to fetch.
     */
    orderBy?: novedadOrderByWithRelationInput | novedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for novedads.
     */
    cursor?: novedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` novedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of novedads.
     */
    distinct?: NovedadScalarFieldEnum | NovedadScalarFieldEnum[]
  }

  /**
   * novedad findFirstOrThrow
   */
  export type novedadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadInclude<ExtArgs> | null
    /**
     * Filter, which novedad to fetch.
     */
    where?: novedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of novedads to fetch.
     */
    orderBy?: novedadOrderByWithRelationInput | novedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for novedads.
     */
    cursor?: novedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` novedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of novedads.
     */
    distinct?: NovedadScalarFieldEnum | NovedadScalarFieldEnum[]
  }

  /**
   * novedad findMany
   */
  export type novedadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadInclude<ExtArgs> | null
    /**
     * Filter, which novedads to fetch.
     */
    where?: novedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of novedads to fetch.
     */
    orderBy?: novedadOrderByWithRelationInput | novedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing novedads.
     */
    cursor?: novedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` novedads.
     */
    skip?: number
    distinct?: NovedadScalarFieldEnum | NovedadScalarFieldEnum[]
  }

  /**
   * novedad create
   */
  export type novedadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadInclude<ExtArgs> | null
    /**
     * The data needed to create a novedad.
     */
    data?: XOR<novedadCreateInput, novedadUncheckedCreateInput>
  }

  /**
   * novedad createMany
   */
  export type novedadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many novedads.
     */
    data: novedadCreateManyInput | novedadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * novedad createManyAndReturn
   */
  export type novedadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * The data used to create many novedads.
     */
    data: novedadCreateManyInput | novedadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * novedad update
   */
  export type novedadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadInclude<ExtArgs> | null
    /**
     * The data needed to update a novedad.
     */
    data: XOR<novedadUpdateInput, novedadUncheckedUpdateInput>
    /**
     * Choose, which novedad to update.
     */
    where: novedadWhereUniqueInput
  }

  /**
   * novedad updateMany
   */
  export type novedadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update novedads.
     */
    data: XOR<novedadUpdateManyMutationInput, novedadUncheckedUpdateManyInput>
    /**
     * Filter which novedads to update
     */
    where?: novedadWhereInput
    /**
     * Limit how many novedads to update.
     */
    limit?: number
  }

  /**
   * novedad updateManyAndReturn
   */
  export type novedadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * The data used to update novedads.
     */
    data: XOR<novedadUpdateManyMutationInput, novedadUncheckedUpdateManyInput>
    /**
     * Filter which novedads to update
     */
    where?: novedadWhereInput
    /**
     * Limit how many novedads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * novedad upsert
   */
  export type novedadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadInclude<ExtArgs> | null
    /**
     * The filter to search for the novedad to update in case it exists.
     */
    where: novedadWhereUniqueInput
    /**
     * In case the novedad found by the `where` argument doesn't exist, create a new novedad with this data.
     */
    create: XOR<novedadCreateInput, novedadUncheckedCreateInput>
    /**
     * In case the novedad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<novedadUpdateInput, novedadUncheckedUpdateInput>
  }

  /**
   * novedad delete
   */
  export type novedadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadInclude<ExtArgs> | null
    /**
     * Filter which novedad to delete.
     */
    where: novedadWhereUniqueInput
  }

  /**
   * novedad deleteMany
   */
  export type novedadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which novedads to delete
     */
    where?: novedadWhereInput
    /**
     * Limit how many novedads to delete.
     */
    limit?: number
  }

  /**
   * novedad.archivo_adjunto
   */
  export type novedad$archivo_adjuntoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivo_adjunto
     */
    select?: archivo_adjuntoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivo_adjunto
     */
    omit?: archivo_adjuntoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivo_adjuntoInclude<ExtArgs> | null
    where?: archivo_adjuntoWhereInput
    orderBy?: archivo_adjuntoOrderByWithRelationInput | archivo_adjuntoOrderByWithRelationInput[]
    cursor?: archivo_adjuntoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Archivo_adjuntoScalarFieldEnum | Archivo_adjuntoScalarFieldEnum[]
  }

  /**
   * novedad.historial_novedad
   */
  export type novedad$historial_novedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_novedad
     */
    select?: historial_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_novedad
     */
    omit?: historial_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_novedadInclude<ExtArgs> | null
    where?: historial_novedadWhereInput
    orderBy?: historial_novedadOrderByWithRelationInput | historial_novedadOrderByWithRelationInput[]
    cursor?: historial_novedadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historial_novedadScalarFieldEnum | Historial_novedadScalarFieldEnum[]
  }

  /**
   * novedad.notificacion
   */
  export type novedad$notificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    where?: notificacionWhereInput
    orderBy?: notificacionOrderByWithRelationInput | notificacionOrderByWithRelationInput[]
    cursor?: notificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * novedad.estado_novedad
   */
  export type novedad$estado_novedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado_novedad
     */
    select?: estado_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado_novedad
     */
    omit?: estado_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estado_novedadInclude<ExtArgs> | null
    where?: estado_novedadWhereInput
  }

  /**
   * novedad.tipo_novedad
   */
  export type novedad$tipo_novedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_novedad
     */
    select?: tipo_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_novedad
     */
    omit?: tipo_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_novedadInclude<ExtArgs> | null
    where?: tipo_novedadWhereInput
  }

  /**
   * novedad.usuario
   */
  export type novedad$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }

  /**
   * novedad without action
   */
  export type novedadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadInclude<ExtArgs> | null
  }


  /**
   * Model rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id_rol: number | null
  }

  export type RolSumAggregateOutputType = {
    id_rol: number | null
  }

  export type RolMinAggregateOutputType = {
    id_rol: number | null
    nombre_rol: string | null
  }

  export type RolMaxAggregateOutputType = {
    id_rol: number | null
    nombre_rol: string | null
  }

  export type RolCountAggregateOutputType = {
    id_rol: number
    nombre_rol: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id_rol?: true
  }

  export type RolSumAggregateInputType = {
    id_rol?: true
  }

  export type RolMinAggregateInputType = {
    id_rol?: true
    nombre_rol?: true
  }

  export type RolMaxAggregateInputType = {
    id_rol?: true
    nombre_rol?: true
  }

  export type RolCountAggregateInputType = {
    id_rol?: true
    nombre_rol?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rol to aggregate.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type rolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolWhereInput
    orderBy?: rolOrderByWithAggregationInput | rolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: rolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id_rol: number
    nombre_rol: string
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends rolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type rolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    nombre_rol?: boolean
    usuario_rol?: boolean | rol$usuario_rolArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type rolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    nombre_rol?: boolean
  }, ExtArgs["result"]["rol"]>

  export type rolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    nombre_rol?: boolean
  }, ExtArgs["result"]["rol"]>

  export type rolSelectScalar = {
    id_rol?: boolean
    nombre_rol?: boolean
  }

  export type rolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_rol" | "nombre_rol", ExtArgs["result"]["rol"]>
  export type rolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario_rol?: boolean | rol$usuario_rolArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type rolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rol"
    objects: {
      usuario_rol: Prisma.$usuario_rolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_rol: number
      nombre_rol: string
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type rolGetPayload<S extends boolean | null | undefined | rolDefaultArgs> = $Result.GetResult<Prisma.$rolPayload, S>

  type rolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface rolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rol'], meta: { name: 'rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {rolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolFindUniqueArgs>(args: SelectSubset<T, rolFindUniqueArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolFindUniqueOrThrowArgs>(args: SelectSubset<T, rolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolFindFirstArgs>(args?: SelectSubset<T, rolFindFirstArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolFindFirstOrThrowArgs>(args?: SelectSubset<T, rolFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id_rol`
     * const rolWithId_rolOnly = await prisma.rol.findMany({ select: { id_rol: true } })
     * 
     */
    findMany<T extends rolFindManyArgs>(args?: SelectSubset<T, rolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {rolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends rolCreateArgs>(args: SelectSubset<T, rolCreateArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {rolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolCreateManyArgs>(args?: SelectSubset<T, rolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {rolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `id_rol`
     * const rolWithId_rolOnly = await prisma.rol.createManyAndReturn({
     *   select: { id_rol: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rolCreateManyAndReturnArgs>(args?: SelectSubset<T, rolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol.
     * @param {rolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends rolDeleteArgs>(args: SelectSubset<T, rolDeleteArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {rolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolUpdateArgs>(args: SelectSubset<T, rolUpdateArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {rolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolDeleteManyArgs>(args?: SelectSubset<T, rolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolUpdateManyArgs>(args: SelectSubset<T, rolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols and returns the data updated in the database.
     * @param {rolUpdateManyAndReturnArgs} args - Arguments to update many Rols.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rols and only return the `id_rol`
     * const rolWithId_rolOnly = await prisma.rol.updateManyAndReturn({
     *   select: { id_rol: true },
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
    updateManyAndReturn<T extends rolUpdateManyAndReturnArgs>(args: SelectSubset<T, rolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol.
     * @param {rolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends rolUpsertArgs>(args: SelectSubset<T, rolUpsertArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends rolCountArgs>(
      args?: Subset<T, rolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolGroupByArgs} args - Group by arguments.
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
      T extends rolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolGroupByArgs['orderBy'] }
        : { orderBy?: rolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rol model
   */
  readonly fields: rolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario_rol<T extends rol$usuario_rolArgs<ExtArgs> = {}>(args?: Subset<T, rol$usuario_rolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the rol model
   */
  interface rolFieldRefs {
    readonly id_rol: FieldRef<"rol", 'Int'>
    readonly nombre_rol: FieldRef<"rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rol findUnique
   */
  export type rolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol findUniqueOrThrow
   */
  export type rolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol findFirst
   */
  export type rolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol findFirstOrThrow
   */
  export type rolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol findMany
   */
  export type rolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rols to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol create
   */
  export type rolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The data needed to create a rol.
     */
    data: XOR<rolCreateInput, rolUncheckedCreateInput>
  }

  /**
   * rol createMany
   */
  export type rolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rols.
     */
    data: rolCreateManyInput | rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rol createManyAndReturn
   */
  export type rolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * The data used to create many rols.
     */
    data: rolCreateManyInput | rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rol update
   */
  export type rolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The data needed to update a rol.
     */
    data: XOR<rolUpdateInput, rolUncheckedUpdateInput>
    /**
     * Choose, which rol to update.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol updateMany
   */
  export type rolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rols.
     */
    data: XOR<rolUpdateManyMutationInput, rolUncheckedUpdateManyInput>
    /**
     * Filter which rols to update
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to update.
     */
    limit?: number
  }

  /**
   * rol updateManyAndReturn
   */
  export type rolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * The data used to update rols.
     */
    data: XOR<rolUpdateManyMutationInput, rolUncheckedUpdateManyInput>
    /**
     * Filter which rols to update
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to update.
     */
    limit?: number
  }

  /**
   * rol upsert
   */
  export type rolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The filter to search for the rol to update in case it exists.
     */
    where: rolWhereUniqueInput
    /**
     * In case the rol found by the `where` argument doesn't exist, create a new rol with this data.
     */
    create: XOR<rolCreateInput, rolUncheckedCreateInput>
    /**
     * In case the rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolUpdateInput, rolUncheckedUpdateInput>
  }

  /**
   * rol delete
   */
  export type rolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter which rol to delete.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol deleteMany
   */
  export type rolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rols to delete
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to delete.
     */
    limit?: number
  }

  /**
   * rol.usuario_rol
   */
  export type rol$usuario_rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    where?: usuario_rolWhereInput
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    cursor?: usuario_rolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_rolScalarFieldEnum | Usuario_rolScalarFieldEnum[]
  }

  /**
   * rol without action
   */
  export type rolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
  }


  /**
   * Model tipo_novedad
   */

  export type AggregateTipo_novedad = {
    _count: Tipo_novedadCountAggregateOutputType | null
    _avg: Tipo_novedadAvgAggregateOutputType | null
    _sum: Tipo_novedadSumAggregateOutputType | null
    _min: Tipo_novedadMinAggregateOutputType | null
    _max: Tipo_novedadMaxAggregateOutputType | null
  }

  export type Tipo_novedadAvgAggregateOutputType = {
    id_tipo_novedad: number | null
  }

  export type Tipo_novedadSumAggregateOutputType = {
    id_tipo_novedad: number | null
  }

  export type Tipo_novedadMinAggregateOutputType = {
    id_tipo_novedad: number | null
    nombre_tipo: string | null
    codigo: string | null
  }

  export type Tipo_novedadMaxAggregateOutputType = {
    id_tipo_novedad: number | null
    nombre_tipo: string | null
    codigo: string | null
  }

  export type Tipo_novedadCountAggregateOutputType = {
    id_tipo_novedad: number
    nombre_tipo: number
    codigo: number
    _all: number
  }


  export type Tipo_novedadAvgAggregateInputType = {
    id_tipo_novedad?: true
  }

  export type Tipo_novedadSumAggregateInputType = {
    id_tipo_novedad?: true
  }

  export type Tipo_novedadMinAggregateInputType = {
    id_tipo_novedad?: true
    nombre_tipo?: true
    codigo?: true
  }

  export type Tipo_novedadMaxAggregateInputType = {
    id_tipo_novedad?: true
    nombre_tipo?: true
    codigo?: true
  }

  export type Tipo_novedadCountAggregateInputType = {
    id_tipo_novedad?: true
    nombre_tipo?: true
    codigo?: true
    _all?: true
  }

  export type Tipo_novedadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_novedad to aggregate.
     */
    where?: tipo_novedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_novedads to fetch.
     */
    orderBy?: tipo_novedadOrderByWithRelationInput | tipo_novedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipo_novedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_novedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipo_novedads
    **/
    _count?: true | Tipo_novedadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipo_novedadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipo_novedadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipo_novedadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipo_novedadMaxAggregateInputType
  }

  export type GetTipo_novedadAggregateType<T extends Tipo_novedadAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo_novedad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo_novedad[P]>
      : GetScalarType<T[P], AggregateTipo_novedad[P]>
  }




  export type tipo_novedadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_novedadWhereInput
    orderBy?: tipo_novedadOrderByWithAggregationInput | tipo_novedadOrderByWithAggregationInput[]
    by: Tipo_novedadScalarFieldEnum[] | Tipo_novedadScalarFieldEnum
    having?: tipo_novedadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipo_novedadCountAggregateInputType | true
    _avg?: Tipo_novedadAvgAggregateInputType
    _sum?: Tipo_novedadSumAggregateInputType
    _min?: Tipo_novedadMinAggregateInputType
    _max?: Tipo_novedadMaxAggregateInputType
  }

  export type Tipo_novedadGroupByOutputType = {
    id_tipo_novedad: number
    nombre_tipo: string
    codigo: string
    _count: Tipo_novedadCountAggregateOutputType | null
    _avg: Tipo_novedadAvgAggregateOutputType | null
    _sum: Tipo_novedadSumAggregateOutputType | null
    _min: Tipo_novedadMinAggregateOutputType | null
    _max: Tipo_novedadMaxAggregateOutputType | null
  }

  type GetTipo_novedadGroupByPayload<T extends tipo_novedadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipo_novedadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipo_novedadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipo_novedadGroupByOutputType[P]>
            : GetScalarType<T[P], Tipo_novedadGroupByOutputType[P]>
        }
      >
    >


  export type tipo_novedadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_novedad?: boolean
    nombre_tipo?: boolean
    codigo?: boolean
    novedad?: boolean | tipo_novedad$novedadArgs<ExtArgs>
    _count?: boolean | Tipo_novedadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo_novedad"]>

  export type tipo_novedadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_novedad?: boolean
    nombre_tipo?: boolean
    codigo?: boolean
  }, ExtArgs["result"]["tipo_novedad"]>

  export type tipo_novedadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_novedad?: boolean
    nombre_tipo?: boolean
    codigo?: boolean
  }, ExtArgs["result"]["tipo_novedad"]>

  export type tipo_novedadSelectScalar = {
    id_tipo_novedad?: boolean
    nombre_tipo?: boolean
    codigo?: boolean
  }

  export type tipo_novedadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tipo_novedad" | "nombre_tipo" | "codigo", ExtArgs["result"]["tipo_novedad"]>
  export type tipo_novedadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    novedad?: boolean | tipo_novedad$novedadArgs<ExtArgs>
    _count?: boolean | Tipo_novedadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tipo_novedadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tipo_novedadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tipo_novedadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipo_novedad"
    objects: {
      novedad: Prisma.$novedadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tipo_novedad: number
      nombre_tipo: string
      codigo: string
    }, ExtArgs["result"]["tipo_novedad"]>
    composites: {}
  }

  type tipo_novedadGetPayload<S extends boolean | null | undefined | tipo_novedadDefaultArgs> = $Result.GetResult<Prisma.$tipo_novedadPayload, S>

  type tipo_novedadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipo_novedadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tipo_novedadCountAggregateInputType | true
    }

  export interface tipo_novedadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipo_novedad'], meta: { name: 'tipo_novedad' } }
    /**
     * Find zero or one Tipo_novedad that matches the filter.
     * @param {tipo_novedadFindUniqueArgs} args - Arguments to find a Tipo_novedad
     * @example
     * // Get one Tipo_novedad
     * const tipo_novedad = await prisma.tipo_novedad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipo_novedadFindUniqueArgs>(args: SelectSubset<T, tipo_novedadFindUniqueArgs<ExtArgs>>): Prisma__tipo_novedadClient<$Result.GetResult<Prisma.$tipo_novedadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipo_novedad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipo_novedadFindUniqueOrThrowArgs} args - Arguments to find a Tipo_novedad
     * @example
     * // Get one Tipo_novedad
     * const tipo_novedad = await prisma.tipo_novedad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipo_novedadFindUniqueOrThrowArgs>(args: SelectSubset<T, tipo_novedadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipo_novedadClient<$Result.GetResult<Prisma.$tipo_novedadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_novedad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_novedadFindFirstArgs} args - Arguments to find a Tipo_novedad
     * @example
     * // Get one Tipo_novedad
     * const tipo_novedad = await prisma.tipo_novedad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipo_novedadFindFirstArgs>(args?: SelectSubset<T, tipo_novedadFindFirstArgs<ExtArgs>>): Prisma__tipo_novedadClient<$Result.GetResult<Prisma.$tipo_novedadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_novedad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_novedadFindFirstOrThrowArgs} args - Arguments to find a Tipo_novedad
     * @example
     * // Get one Tipo_novedad
     * const tipo_novedad = await prisma.tipo_novedad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipo_novedadFindFirstOrThrowArgs>(args?: SelectSubset<T, tipo_novedadFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipo_novedadClient<$Result.GetResult<Prisma.$tipo_novedadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipo_novedads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_novedadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipo_novedads
     * const tipo_novedads = await prisma.tipo_novedad.findMany()
     * 
     * // Get first 10 Tipo_novedads
     * const tipo_novedads = await prisma.tipo_novedad.findMany({ take: 10 })
     * 
     * // Only select the `id_tipo_novedad`
     * const tipo_novedadWithId_tipo_novedadOnly = await prisma.tipo_novedad.findMany({ select: { id_tipo_novedad: true } })
     * 
     */
    findMany<T extends tipo_novedadFindManyArgs>(args?: SelectSubset<T, tipo_novedadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_novedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipo_novedad.
     * @param {tipo_novedadCreateArgs} args - Arguments to create a Tipo_novedad.
     * @example
     * // Create one Tipo_novedad
     * const Tipo_novedad = await prisma.tipo_novedad.create({
     *   data: {
     *     // ... data to create a Tipo_novedad
     *   }
     * })
     * 
     */
    create<T extends tipo_novedadCreateArgs>(args: SelectSubset<T, tipo_novedadCreateArgs<ExtArgs>>): Prisma__tipo_novedadClient<$Result.GetResult<Prisma.$tipo_novedadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipo_novedads.
     * @param {tipo_novedadCreateManyArgs} args - Arguments to create many Tipo_novedads.
     * @example
     * // Create many Tipo_novedads
     * const tipo_novedad = await prisma.tipo_novedad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipo_novedadCreateManyArgs>(args?: SelectSubset<T, tipo_novedadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipo_novedads and returns the data saved in the database.
     * @param {tipo_novedadCreateManyAndReturnArgs} args - Arguments to create many Tipo_novedads.
     * @example
     * // Create many Tipo_novedads
     * const tipo_novedad = await prisma.tipo_novedad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipo_novedads and only return the `id_tipo_novedad`
     * const tipo_novedadWithId_tipo_novedadOnly = await prisma.tipo_novedad.createManyAndReturn({
     *   select: { id_tipo_novedad: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tipo_novedadCreateManyAndReturnArgs>(args?: SelectSubset<T, tipo_novedadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_novedadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipo_novedad.
     * @param {tipo_novedadDeleteArgs} args - Arguments to delete one Tipo_novedad.
     * @example
     * // Delete one Tipo_novedad
     * const Tipo_novedad = await prisma.tipo_novedad.delete({
     *   where: {
     *     // ... filter to delete one Tipo_novedad
     *   }
     * })
     * 
     */
    delete<T extends tipo_novedadDeleteArgs>(args: SelectSubset<T, tipo_novedadDeleteArgs<ExtArgs>>): Prisma__tipo_novedadClient<$Result.GetResult<Prisma.$tipo_novedadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipo_novedad.
     * @param {tipo_novedadUpdateArgs} args - Arguments to update one Tipo_novedad.
     * @example
     * // Update one Tipo_novedad
     * const tipo_novedad = await prisma.tipo_novedad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipo_novedadUpdateArgs>(args: SelectSubset<T, tipo_novedadUpdateArgs<ExtArgs>>): Prisma__tipo_novedadClient<$Result.GetResult<Prisma.$tipo_novedadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipo_novedads.
     * @param {tipo_novedadDeleteManyArgs} args - Arguments to filter Tipo_novedads to delete.
     * @example
     * // Delete a few Tipo_novedads
     * const { count } = await prisma.tipo_novedad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipo_novedadDeleteManyArgs>(args?: SelectSubset<T, tipo_novedadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_novedads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_novedadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipo_novedads
     * const tipo_novedad = await prisma.tipo_novedad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipo_novedadUpdateManyArgs>(args: SelectSubset<T, tipo_novedadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_novedads and returns the data updated in the database.
     * @param {tipo_novedadUpdateManyAndReturnArgs} args - Arguments to update many Tipo_novedads.
     * @example
     * // Update many Tipo_novedads
     * const tipo_novedad = await prisma.tipo_novedad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipo_novedads and only return the `id_tipo_novedad`
     * const tipo_novedadWithId_tipo_novedadOnly = await prisma.tipo_novedad.updateManyAndReturn({
     *   select: { id_tipo_novedad: true },
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
    updateManyAndReturn<T extends tipo_novedadUpdateManyAndReturnArgs>(args: SelectSubset<T, tipo_novedadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_novedadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipo_novedad.
     * @param {tipo_novedadUpsertArgs} args - Arguments to update or create a Tipo_novedad.
     * @example
     * // Update or create a Tipo_novedad
     * const tipo_novedad = await prisma.tipo_novedad.upsert({
     *   create: {
     *     // ... data to create a Tipo_novedad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo_novedad we want to update
     *   }
     * })
     */
    upsert<T extends tipo_novedadUpsertArgs>(args: SelectSubset<T, tipo_novedadUpsertArgs<ExtArgs>>): Prisma__tipo_novedadClient<$Result.GetResult<Prisma.$tipo_novedadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipo_novedads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_novedadCountArgs} args - Arguments to filter Tipo_novedads to count.
     * @example
     * // Count the number of Tipo_novedads
     * const count = await prisma.tipo_novedad.count({
     *   where: {
     *     // ... the filter for the Tipo_novedads we want to count
     *   }
     * })
    **/
    count<T extends tipo_novedadCountArgs>(
      args?: Subset<T, tipo_novedadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipo_novedadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo_novedad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_novedadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tipo_novedadAggregateArgs>(args: Subset<T, Tipo_novedadAggregateArgs>): Prisma.PrismaPromise<GetTipo_novedadAggregateType<T>>

    /**
     * Group by Tipo_novedad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_novedadGroupByArgs} args - Group by arguments.
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
      T extends tipo_novedadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipo_novedadGroupByArgs['orderBy'] }
        : { orderBy?: tipo_novedadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tipo_novedadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipo_novedadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipo_novedad model
   */
  readonly fields: tipo_novedadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipo_novedad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipo_novedadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    novedad<T extends tipo_novedad$novedadArgs<ExtArgs> = {}>(args?: Subset<T, tipo_novedad$novedadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$novedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tipo_novedad model
   */
  interface tipo_novedadFieldRefs {
    readonly id_tipo_novedad: FieldRef<"tipo_novedad", 'Int'>
    readonly nombre_tipo: FieldRef<"tipo_novedad", 'String'>
    readonly codigo: FieldRef<"tipo_novedad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipo_novedad findUnique
   */
  export type tipo_novedadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_novedad
     */
    select?: tipo_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_novedad
     */
    omit?: tipo_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_novedadInclude<ExtArgs> | null
    /**
     * Filter, which tipo_novedad to fetch.
     */
    where: tipo_novedadWhereUniqueInput
  }

  /**
   * tipo_novedad findUniqueOrThrow
   */
  export type tipo_novedadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_novedad
     */
    select?: tipo_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_novedad
     */
    omit?: tipo_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_novedadInclude<ExtArgs> | null
    /**
     * Filter, which tipo_novedad to fetch.
     */
    where: tipo_novedadWhereUniqueInput
  }

  /**
   * tipo_novedad findFirst
   */
  export type tipo_novedadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_novedad
     */
    select?: tipo_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_novedad
     */
    omit?: tipo_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_novedadInclude<ExtArgs> | null
    /**
     * Filter, which tipo_novedad to fetch.
     */
    where?: tipo_novedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_novedads to fetch.
     */
    orderBy?: tipo_novedadOrderByWithRelationInput | tipo_novedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_novedads.
     */
    cursor?: tipo_novedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_novedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_novedads.
     */
    distinct?: Tipo_novedadScalarFieldEnum | Tipo_novedadScalarFieldEnum[]
  }

  /**
   * tipo_novedad findFirstOrThrow
   */
  export type tipo_novedadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_novedad
     */
    select?: tipo_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_novedad
     */
    omit?: tipo_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_novedadInclude<ExtArgs> | null
    /**
     * Filter, which tipo_novedad to fetch.
     */
    where?: tipo_novedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_novedads to fetch.
     */
    orderBy?: tipo_novedadOrderByWithRelationInput | tipo_novedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_novedads.
     */
    cursor?: tipo_novedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_novedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_novedads.
     */
    distinct?: Tipo_novedadScalarFieldEnum | Tipo_novedadScalarFieldEnum[]
  }

  /**
   * tipo_novedad findMany
   */
  export type tipo_novedadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_novedad
     */
    select?: tipo_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_novedad
     */
    omit?: tipo_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_novedadInclude<ExtArgs> | null
    /**
     * Filter, which tipo_novedads to fetch.
     */
    where?: tipo_novedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_novedads to fetch.
     */
    orderBy?: tipo_novedadOrderByWithRelationInput | tipo_novedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipo_novedads.
     */
    cursor?: tipo_novedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_novedads.
     */
    skip?: number
    distinct?: Tipo_novedadScalarFieldEnum | Tipo_novedadScalarFieldEnum[]
  }

  /**
   * tipo_novedad create
   */
  export type tipo_novedadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_novedad
     */
    select?: tipo_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_novedad
     */
    omit?: tipo_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_novedadInclude<ExtArgs> | null
    /**
     * The data needed to create a tipo_novedad.
     */
    data: XOR<tipo_novedadCreateInput, tipo_novedadUncheckedCreateInput>
  }

  /**
   * tipo_novedad createMany
   */
  export type tipo_novedadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipo_novedads.
     */
    data: tipo_novedadCreateManyInput | tipo_novedadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipo_novedad createManyAndReturn
   */
  export type tipo_novedadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_novedad
     */
    select?: tipo_novedadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_novedad
     */
    omit?: tipo_novedadOmit<ExtArgs> | null
    /**
     * The data used to create many tipo_novedads.
     */
    data: tipo_novedadCreateManyInput | tipo_novedadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipo_novedad update
   */
  export type tipo_novedadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_novedad
     */
    select?: tipo_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_novedad
     */
    omit?: tipo_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_novedadInclude<ExtArgs> | null
    /**
     * The data needed to update a tipo_novedad.
     */
    data: XOR<tipo_novedadUpdateInput, tipo_novedadUncheckedUpdateInput>
    /**
     * Choose, which tipo_novedad to update.
     */
    where: tipo_novedadWhereUniqueInput
  }

  /**
   * tipo_novedad updateMany
   */
  export type tipo_novedadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipo_novedads.
     */
    data: XOR<tipo_novedadUpdateManyMutationInput, tipo_novedadUncheckedUpdateManyInput>
    /**
     * Filter which tipo_novedads to update
     */
    where?: tipo_novedadWhereInput
    /**
     * Limit how many tipo_novedads to update.
     */
    limit?: number
  }

  /**
   * tipo_novedad updateManyAndReturn
   */
  export type tipo_novedadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_novedad
     */
    select?: tipo_novedadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_novedad
     */
    omit?: tipo_novedadOmit<ExtArgs> | null
    /**
     * The data used to update tipo_novedads.
     */
    data: XOR<tipo_novedadUpdateManyMutationInput, tipo_novedadUncheckedUpdateManyInput>
    /**
     * Filter which tipo_novedads to update
     */
    where?: tipo_novedadWhereInput
    /**
     * Limit how many tipo_novedads to update.
     */
    limit?: number
  }

  /**
   * tipo_novedad upsert
   */
  export type tipo_novedadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_novedad
     */
    select?: tipo_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_novedad
     */
    omit?: tipo_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_novedadInclude<ExtArgs> | null
    /**
     * The filter to search for the tipo_novedad to update in case it exists.
     */
    where: tipo_novedadWhereUniqueInput
    /**
     * In case the tipo_novedad found by the `where` argument doesn't exist, create a new tipo_novedad with this data.
     */
    create: XOR<tipo_novedadCreateInput, tipo_novedadUncheckedCreateInput>
    /**
     * In case the tipo_novedad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipo_novedadUpdateInput, tipo_novedadUncheckedUpdateInput>
  }

  /**
   * tipo_novedad delete
   */
  export type tipo_novedadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_novedad
     */
    select?: tipo_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_novedad
     */
    omit?: tipo_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_novedadInclude<ExtArgs> | null
    /**
     * Filter which tipo_novedad to delete.
     */
    where: tipo_novedadWhereUniqueInput
  }

  /**
   * tipo_novedad deleteMany
   */
  export type tipo_novedadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_novedads to delete
     */
    where?: tipo_novedadWhereInput
    /**
     * Limit how many tipo_novedads to delete.
     */
    limit?: number
  }

  /**
   * tipo_novedad.novedad
   */
  export type tipo_novedad$novedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadInclude<ExtArgs> | null
    where?: novedadWhereInput
    orderBy?: novedadOrderByWithRelationInput | novedadOrderByWithRelationInput[]
    cursor?: novedadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NovedadScalarFieldEnum | NovedadScalarFieldEnum[]
  }

  /**
   * tipo_novedad without action
   */
  export type tipo_novedadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_novedad
     */
    select?: tipo_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_novedad
     */
    omit?: tipo_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_novedadInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    correo: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    correo: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nombre: number
    correo: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nombre?: true
    correo?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nombre?: true
    correo?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nombre?: true
    correo?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nombre: string
    correo: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    correo?: boolean
    historial_novedad?: boolean | usuario$historial_novedadArgs<ExtArgs>
    notificacion?: boolean | usuario$notificacionArgs<ExtArgs>
    novedad?: boolean | usuario$novedadArgs<ExtArgs>
    usuario_rol?: boolean | usuario$usuario_rolArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    correo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    correo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectScalar = {
    id_usuario?: boolean
    nombre?: boolean
    correo?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre" | "correo", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial_novedad?: boolean | usuario$historial_novedadArgs<ExtArgs>
    notificacion?: boolean | usuario$notificacionArgs<ExtArgs>
    novedad?: boolean | usuario$novedadArgs<ExtArgs>
    usuario_rol?: boolean | usuario$usuario_rolArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      historial_novedad: Prisma.$historial_novedadPayload<ExtArgs>[]
      notificacion: Prisma.$notificacionPayload<ExtArgs>[]
      novedad: Prisma.$novedadPayload<ExtArgs>[]
      usuario_rol: Prisma.$usuario_rolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre: string
      correo: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, usuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
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
    updateManyAndReturn<T extends usuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, usuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
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
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historial_novedad<T extends usuario$historial_novedadArgs<ExtArgs> = {}>(args?: Subset<T, usuario$historial_novedadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historial_novedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificacion<T extends usuario$notificacionArgs<ExtArgs> = {}>(args?: Subset<T, usuario$notificacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    novedad<T extends usuario$novedadArgs<ExtArgs> = {}>(args?: Subset<T, usuario$novedadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$novedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario_rol<T extends usuario$usuario_rolArgs<ExtArgs> = {}>(args?: Subset<T, usuario$usuario_rolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id_usuario: FieldRef<"usuario", 'Int'>
    readonly nombre: FieldRef<"usuario", 'String'>
    readonly correo: FieldRef<"usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario createManyAndReturn
   */
  export type usuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario updateManyAndReturn
   */
  export type usuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.historial_novedad
   */
  export type usuario$historial_novedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_novedad
     */
    select?: historial_novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_novedad
     */
    omit?: historial_novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_novedadInclude<ExtArgs> | null
    where?: historial_novedadWhereInput
    orderBy?: historial_novedadOrderByWithRelationInput | historial_novedadOrderByWithRelationInput[]
    cursor?: historial_novedadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historial_novedadScalarFieldEnum | Historial_novedadScalarFieldEnum[]
  }

  /**
   * usuario.notificacion
   */
  export type usuario$notificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    where?: notificacionWhereInput
    orderBy?: notificacionOrderByWithRelationInput | notificacionOrderByWithRelationInput[]
    cursor?: notificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * usuario.novedad
   */
  export type usuario$novedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the novedad
     */
    select?: novedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the novedad
     */
    omit?: novedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: novedadInclude<ExtArgs> | null
    where?: novedadWhereInput
    orderBy?: novedadOrderByWithRelationInput | novedadOrderByWithRelationInput[]
    cursor?: novedadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NovedadScalarFieldEnum | NovedadScalarFieldEnum[]
  }

  /**
   * usuario.usuario_rol
   */
  export type usuario$usuario_rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    where?: usuario_rolWhereInput
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    cursor?: usuario_rolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_rolScalarFieldEnum | Usuario_rolScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Model usuario_rol
   */

  export type AggregateUsuario_rol = {
    _count: Usuario_rolCountAggregateOutputType | null
    _avg: Usuario_rolAvgAggregateOutputType | null
    _sum: Usuario_rolSumAggregateOutputType | null
    _min: Usuario_rolMinAggregateOutputType | null
    _max: Usuario_rolMaxAggregateOutputType | null
  }

  export type Usuario_rolAvgAggregateOutputType = {
    id_usuario: number | null
    id_rol: number | null
  }

  export type Usuario_rolSumAggregateOutputType = {
    id_usuario: number | null
    id_rol: number | null
  }

  export type Usuario_rolMinAggregateOutputType = {
    id_usuario: number | null
    id_rol: number | null
  }

  export type Usuario_rolMaxAggregateOutputType = {
    id_usuario: number | null
    id_rol: number | null
  }

  export type Usuario_rolCountAggregateOutputType = {
    id_usuario: number
    id_rol: number
    _all: number
  }


  export type Usuario_rolAvgAggregateInputType = {
    id_usuario?: true
    id_rol?: true
  }

  export type Usuario_rolSumAggregateInputType = {
    id_usuario?: true
    id_rol?: true
  }

  export type Usuario_rolMinAggregateInputType = {
    id_usuario?: true
    id_rol?: true
  }

  export type Usuario_rolMaxAggregateInputType = {
    id_usuario?: true
    id_rol?: true
  }

  export type Usuario_rolCountAggregateInputType = {
    id_usuario?: true
    id_rol?: true
    _all?: true
  }

  export type Usuario_rolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_rol to aggregate.
     */
    where?: usuario_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_rols to fetch.
     */
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuario_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuario_rols
    **/
    _count?: true | Usuario_rolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Usuario_rolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Usuario_rolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Usuario_rolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Usuario_rolMaxAggregateInputType
  }

  export type GetUsuario_rolAggregateType<T extends Usuario_rolAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario_rol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario_rol[P]>
      : GetScalarType<T[P], AggregateUsuario_rol[P]>
  }




  export type usuario_rolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_rolWhereInput
    orderBy?: usuario_rolOrderByWithAggregationInput | usuario_rolOrderByWithAggregationInput[]
    by: Usuario_rolScalarFieldEnum[] | Usuario_rolScalarFieldEnum
    having?: usuario_rolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Usuario_rolCountAggregateInputType | true
    _avg?: Usuario_rolAvgAggregateInputType
    _sum?: Usuario_rolSumAggregateInputType
    _min?: Usuario_rolMinAggregateInputType
    _max?: Usuario_rolMaxAggregateInputType
  }

  export type Usuario_rolGroupByOutputType = {
    id_usuario: number
    id_rol: number
    _count: Usuario_rolCountAggregateOutputType | null
    _avg: Usuario_rolAvgAggregateOutputType | null
    _sum: Usuario_rolSumAggregateOutputType | null
    _min: Usuario_rolMinAggregateOutputType | null
    _max: Usuario_rolMaxAggregateOutputType | null
  }

  type GetUsuario_rolGroupByPayload<T extends usuario_rolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Usuario_rolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Usuario_rolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Usuario_rolGroupByOutputType[P]>
            : GetScalarType<T[P], Usuario_rolGroupByOutputType[P]>
        }
      >
    >


  export type usuario_rolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_rol?: boolean
    rol?: boolean | rolDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_rol"]>

  export type usuario_rolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_rol?: boolean
    rol?: boolean | rolDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_rol"]>

  export type usuario_rolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_rol?: boolean
    rol?: boolean | rolDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_rol"]>

  export type usuario_rolSelectScalar = {
    id_usuario?: boolean
    id_rol?: boolean
  }

  export type usuario_rolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "id_rol", ExtArgs["result"]["usuario_rol"]>
  export type usuario_rolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | rolDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type usuario_rolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | rolDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type usuario_rolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | rolDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $usuario_rolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario_rol"
    objects: {
      rol: Prisma.$rolPayload<ExtArgs>
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      id_rol: number
    }, ExtArgs["result"]["usuario_rol"]>
    composites: {}
  }

  type usuario_rolGetPayload<S extends boolean | null | undefined | usuario_rolDefaultArgs> = $Result.GetResult<Prisma.$usuario_rolPayload, S>

  type usuario_rolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuario_rolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Usuario_rolCountAggregateInputType | true
    }

  export interface usuario_rolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario_rol'], meta: { name: 'usuario_rol' } }
    /**
     * Find zero or one Usuario_rol that matches the filter.
     * @param {usuario_rolFindUniqueArgs} args - Arguments to find a Usuario_rol
     * @example
     * // Get one Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuario_rolFindUniqueArgs>(args: SelectSubset<T, usuario_rolFindUniqueArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario_rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuario_rolFindUniqueOrThrowArgs} args - Arguments to find a Usuario_rol
     * @example
     * // Get one Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuario_rolFindUniqueOrThrowArgs>(args: SelectSubset<T, usuario_rolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolFindFirstArgs} args - Arguments to find a Usuario_rol
     * @example
     * // Get one Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuario_rolFindFirstArgs>(args?: SelectSubset<T, usuario_rolFindFirstArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolFindFirstOrThrowArgs} args - Arguments to find a Usuario_rol
     * @example
     * // Get one Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuario_rolFindFirstOrThrowArgs>(args?: SelectSubset<T, usuario_rolFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuario_rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuario_rols
     * const usuario_rols = await prisma.usuario_rol.findMany()
     * 
     * // Get first 10 Usuario_rols
     * const usuario_rols = await prisma.usuario_rol.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuario_rolWithId_usuarioOnly = await prisma.usuario_rol.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuario_rolFindManyArgs>(args?: SelectSubset<T, usuario_rolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario_rol.
     * @param {usuario_rolCreateArgs} args - Arguments to create a Usuario_rol.
     * @example
     * // Create one Usuario_rol
     * const Usuario_rol = await prisma.usuario_rol.create({
     *   data: {
     *     // ... data to create a Usuario_rol
     *   }
     * })
     * 
     */
    create<T extends usuario_rolCreateArgs>(args: SelectSubset<T, usuario_rolCreateArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuario_rols.
     * @param {usuario_rolCreateManyArgs} args - Arguments to create many Usuario_rols.
     * @example
     * // Create many Usuario_rols
     * const usuario_rol = await prisma.usuario_rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuario_rolCreateManyArgs>(args?: SelectSubset<T, usuario_rolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuario_rols and returns the data saved in the database.
     * @param {usuario_rolCreateManyAndReturnArgs} args - Arguments to create many Usuario_rols.
     * @example
     * // Create many Usuario_rols
     * const usuario_rol = await prisma.usuario_rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuario_rols and only return the `id_usuario`
     * const usuario_rolWithId_usuarioOnly = await prisma.usuario_rol.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuario_rolCreateManyAndReturnArgs>(args?: SelectSubset<T, usuario_rolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario_rol.
     * @param {usuario_rolDeleteArgs} args - Arguments to delete one Usuario_rol.
     * @example
     * // Delete one Usuario_rol
     * const Usuario_rol = await prisma.usuario_rol.delete({
     *   where: {
     *     // ... filter to delete one Usuario_rol
     *   }
     * })
     * 
     */
    delete<T extends usuario_rolDeleteArgs>(args: SelectSubset<T, usuario_rolDeleteArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario_rol.
     * @param {usuario_rolUpdateArgs} args - Arguments to update one Usuario_rol.
     * @example
     * // Update one Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuario_rolUpdateArgs>(args: SelectSubset<T, usuario_rolUpdateArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuario_rols.
     * @param {usuario_rolDeleteManyArgs} args - Arguments to filter Usuario_rols to delete.
     * @example
     * // Delete a few Usuario_rols
     * const { count } = await prisma.usuario_rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuario_rolDeleteManyArgs>(args?: SelectSubset<T, usuario_rolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuario_rols
     * const usuario_rol = await prisma.usuario_rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuario_rolUpdateManyArgs>(args: SelectSubset<T, usuario_rolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_rols and returns the data updated in the database.
     * @param {usuario_rolUpdateManyAndReturnArgs} args - Arguments to update many Usuario_rols.
     * @example
     * // Update many Usuario_rols
     * const usuario_rol = await prisma.usuario_rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuario_rols and only return the `id_usuario`
     * const usuario_rolWithId_usuarioOnly = await prisma.usuario_rol.updateManyAndReturn({
     *   select: { id_usuario: true },
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
    updateManyAndReturn<T extends usuario_rolUpdateManyAndReturnArgs>(args: SelectSubset<T, usuario_rolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario_rol.
     * @param {usuario_rolUpsertArgs} args - Arguments to update or create a Usuario_rol.
     * @example
     * // Update or create a Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.upsert({
     *   create: {
     *     // ... data to create a Usuario_rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario_rol we want to update
     *   }
     * })
     */
    upsert<T extends usuario_rolUpsertArgs>(args: SelectSubset<T, usuario_rolUpsertArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuario_rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolCountArgs} args - Arguments to filter Usuario_rols to count.
     * @example
     * // Count the number of Usuario_rols
     * const count = await prisma.usuario_rol.count({
     *   where: {
     *     // ... the filter for the Usuario_rols we want to count
     *   }
     * })
    **/
    count<T extends usuario_rolCountArgs>(
      args?: Subset<T, usuario_rolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Usuario_rolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario_rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_rolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Usuario_rolAggregateArgs>(args: Subset<T, Usuario_rolAggregateArgs>): Prisma.PrismaPromise<GetUsuario_rolAggregateType<T>>

    /**
     * Group by Usuario_rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolGroupByArgs} args - Group by arguments.
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
      T extends usuario_rolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuario_rolGroupByArgs['orderBy'] }
        : { orderBy?: usuario_rolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuario_rolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuario_rolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario_rol model
   */
  readonly fields: usuario_rolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario_rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuario_rolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends rolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolDefaultArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the usuario_rol model
   */
  interface usuario_rolFieldRefs {
    readonly id_usuario: FieldRef<"usuario_rol", 'Int'>
    readonly id_rol: FieldRef<"usuario_rol", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * usuario_rol findUnique
   */
  export type usuario_rolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter, which usuario_rol to fetch.
     */
    where: usuario_rolWhereUniqueInput
  }

  /**
   * usuario_rol findUniqueOrThrow
   */
  export type usuario_rolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter, which usuario_rol to fetch.
     */
    where: usuario_rolWhereUniqueInput
  }

  /**
   * usuario_rol findFirst
   */
  export type usuario_rolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter, which usuario_rol to fetch.
     */
    where?: usuario_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_rols to fetch.
     */
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_rols.
     */
    cursor?: usuario_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_rols.
     */
    distinct?: Usuario_rolScalarFieldEnum | Usuario_rolScalarFieldEnum[]
  }

  /**
   * usuario_rol findFirstOrThrow
   */
  export type usuario_rolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter, which usuario_rol to fetch.
     */
    where?: usuario_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_rols to fetch.
     */
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_rols.
     */
    cursor?: usuario_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_rols.
     */
    distinct?: Usuario_rolScalarFieldEnum | Usuario_rolScalarFieldEnum[]
  }

  /**
   * usuario_rol findMany
   */
  export type usuario_rolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter, which usuario_rols to fetch.
     */
    where?: usuario_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_rols to fetch.
     */
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuario_rols.
     */
    cursor?: usuario_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_rols.
     */
    skip?: number
    distinct?: Usuario_rolScalarFieldEnum | Usuario_rolScalarFieldEnum[]
  }

  /**
   * usuario_rol create
   */
  export type usuario_rolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario_rol.
     */
    data: XOR<usuario_rolCreateInput, usuario_rolUncheckedCreateInput>
  }

  /**
   * usuario_rol createMany
   */
  export type usuario_rolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuario_rols.
     */
    data: usuario_rolCreateManyInput | usuario_rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario_rol createManyAndReturn
   */
  export type usuario_rolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * The data used to create many usuario_rols.
     */
    data: usuario_rolCreateManyInput | usuario_rolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario_rol update
   */
  export type usuario_rolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario_rol.
     */
    data: XOR<usuario_rolUpdateInput, usuario_rolUncheckedUpdateInput>
    /**
     * Choose, which usuario_rol to update.
     */
    where: usuario_rolWhereUniqueInput
  }

  /**
   * usuario_rol updateMany
   */
  export type usuario_rolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuario_rols.
     */
    data: XOR<usuario_rolUpdateManyMutationInput, usuario_rolUncheckedUpdateManyInput>
    /**
     * Filter which usuario_rols to update
     */
    where?: usuario_rolWhereInput
    /**
     * Limit how many usuario_rols to update.
     */
    limit?: number
  }

  /**
   * usuario_rol updateManyAndReturn
   */
  export type usuario_rolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * The data used to update usuario_rols.
     */
    data: XOR<usuario_rolUpdateManyMutationInput, usuario_rolUncheckedUpdateManyInput>
    /**
     * Filter which usuario_rols to update
     */
    where?: usuario_rolWhereInput
    /**
     * Limit how many usuario_rols to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario_rol upsert
   */
  export type usuario_rolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario_rol to update in case it exists.
     */
    where: usuario_rolWhereUniqueInput
    /**
     * In case the usuario_rol found by the `where` argument doesn't exist, create a new usuario_rol with this data.
     */
    create: XOR<usuario_rolCreateInput, usuario_rolUncheckedCreateInput>
    /**
     * In case the usuario_rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuario_rolUpdateInput, usuario_rolUncheckedUpdateInput>
  }

  /**
   * usuario_rol delete
   */
  export type usuario_rolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter which usuario_rol to delete.
     */
    where: usuario_rolWhereUniqueInput
  }

  /**
   * usuario_rol deleteMany
   */
  export type usuario_rolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_rols to delete
     */
    where?: usuario_rolWhereInput
    /**
     * Limit how many usuario_rols to delete.
     */
    limit?: number
  }

  /**
   * usuario_rol without action
   */
  export type usuario_rolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
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


  export const Archivo_adjuntoScalarFieldEnum: {
    id_archivo: 'id_archivo',
    id_novedad: 'id_novedad',
    nombre_archivo: 'nombre_archivo',
    ruta_archivo: 'ruta_archivo',
    fecha_subida: 'fecha_subida'
  };

  export type Archivo_adjuntoScalarFieldEnum = (typeof Archivo_adjuntoScalarFieldEnum)[keyof typeof Archivo_adjuntoScalarFieldEnum]


  export const Correo_logScalarFieldEnum: {
    id_log: 'id_log',
    id_notificacion: 'id_notificacion',
    estado_envio: 'estado_envio',
    fecha_envio: 'fecha_envio',
    mensaje_error: 'mensaje_error'
  };

  export type Correo_logScalarFieldEnum = (typeof Correo_logScalarFieldEnum)[keyof typeof Correo_logScalarFieldEnum]


  export const Estado_novedadScalarFieldEnum: {
    id_estado_novedad: 'id_estado_novedad',
    nombre_estado: 'nombre_estado'
  };

  export type Estado_novedadScalarFieldEnum = (typeof Estado_novedadScalarFieldEnum)[keyof typeof Estado_novedadScalarFieldEnum]


  export const Historial_novedadScalarFieldEnum: {
    id_historial: 'id_historial',
    id_novedad: 'id_novedad',
    id_estado_novedad: 'id_estado_novedad',
    fecha_modificacion: 'fecha_modificacion',
    comentario: 'comentario',
    id_usuario_modificacion: 'id_usuario_modificacion'
  };

  export type Historial_novedadScalarFieldEnum = (typeof Historial_novedadScalarFieldEnum)[keyof typeof Historial_novedadScalarFieldEnum]


  export const NotificacionScalarFieldEnum: {
    id_notificacion: 'id_notificacion',
    id_usuario: 'id_usuario',
    id_novedad: 'id_novedad',
    mensaje: 'mensaje',
    fecha_creacion: 'fecha_creacion',
    leido: 'leido'
  };

  export type NotificacionScalarFieldEnum = (typeof NotificacionScalarFieldEnum)[keyof typeof NotificacionScalarFieldEnum]


  export const NovedadScalarFieldEnum: {
    id_novedad: 'id_novedad',
    id_usuario: 'id_usuario',
    id_tipo_novedad: 'id_tipo_novedad',
    id_estado_novedad: 'id_estado_novedad',
    fecha_creacion: 'fecha_creacion',
    descripcion: 'descripcion'
  };

  export type NovedadScalarFieldEnum = (typeof NovedadScalarFieldEnum)[keyof typeof NovedadScalarFieldEnum]


  export const RolScalarFieldEnum: {
    id_rol: 'id_rol',
    nombre_rol: 'nombre_rol'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const Tipo_novedadScalarFieldEnum: {
    id_tipo_novedad: 'id_tipo_novedad',
    nombre_tipo: 'nombre_tipo',
    codigo: 'codigo'
  };

  export type Tipo_novedadScalarFieldEnum = (typeof Tipo_novedadScalarFieldEnum)[keyof typeof Tipo_novedadScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre: 'nombre',
    correo: 'correo'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const Usuario_rolScalarFieldEnum: {
    id_usuario: 'id_usuario',
    id_rol: 'id_rol'
  };

  export type Usuario_rolScalarFieldEnum = (typeof Usuario_rolScalarFieldEnum)[keyof typeof Usuario_rolScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type archivo_adjuntoWhereInput = {
    AND?: archivo_adjuntoWhereInput | archivo_adjuntoWhereInput[]
    OR?: archivo_adjuntoWhereInput[]
    NOT?: archivo_adjuntoWhereInput | archivo_adjuntoWhereInput[]
    id_archivo?: IntFilter<"archivo_adjunto"> | number
    id_novedad?: IntNullableFilter<"archivo_adjunto"> | number | null
    nombre_archivo?: StringNullableFilter<"archivo_adjunto"> | string | null
    ruta_archivo?: StringNullableFilter<"archivo_adjunto"> | string | null
    fecha_subida?: DateTimeNullableFilter<"archivo_adjunto"> | Date | string | null
    novedad?: XOR<NovedadNullableScalarRelationFilter, novedadWhereInput> | null
  }

  export type archivo_adjuntoOrderByWithRelationInput = {
    id_archivo?: SortOrder
    id_novedad?: SortOrderInput | SortOrder
    nombre_archivo?: SortOrderInput | SortOrder
    ruta_archivo?: SortOrderInput | SortOrder
    fecha_subida?: SortOrderInput | SortOrder
    novedad?: novedadOrderByWithRelationInput
  }

  export type archivo_adjuntoWhereUniqueInput = Prisma.AtLeast<{
    id_archivo?: number
    AND?: archivo_adjuntoWhereInput | archivo_adjuntoWhereInput[]
    OR?: archivo_adjuntoWhereInput[]
    NOT?: archivo_adjuntoWhereInput | archivo_adjuntoWhereInput[]
    id_novedad?: IntNullableFilter<"archivo_adjunto"> | number | null
    nombre_archivo?: StringNullableFilter<"archivo_adjunto"> | string | null
    ruta_archivo?: StringNullableFilter<"archivo_adjunto"> | string | null
    fecha_subida?: DateTimeNullableFilter<"archivo_adjunto"> | Date | string | null
    novedad?: XOR<NovedadNullableScalarRelationFilter, novedadWhereInput> | null
  }, "id_archivo">

  export type archivo_adjuntoOrderByWithAggregationInput = {
    id_archivo?: SortOrder
    id_novedad?: SortOrderInput | SortOrder
    nombre_archivo?: SortOrderInput | SortOrder
    ruta_archivo?: SortOrderInput | SortOrder
    fecha_subida?: SortOrderInput | SortOrder
    _count?: archivo_adjuntoCountOrderByAggregateInput
    _avg?: archivo_adjuntoAvgOrderByAggregateInput
    _max?: archivo_adjuntoMaxOrderByAggregateInput
    _min?: archivo_adjuntoMinOrderByAggregateInput
    _sum?: archivo_adjuntoSumOrderByAggregateInput
  }

  export type archivo_adjuntoScalarWhereWithAggregatesInput = {
    AND?: archivo_adjuntoScalarWhereWithAggregatesInput | archivo_adjuntoScalarWhereWithAggregatesInput[]
    OR?: archivo_adjuntoScalarWhereWithAggregatesInput[]
    NOT?: archivo_adjuntoScalarWhereWithAggregatesInput | archivo_adjuntoScalarWhereWithAggregatesInput[]
    id_archivo?: IntWithAggregatesFilter<"archivo_adjunto"> | number
    id_novedad?: IntNullableWithAggregatesFilter<"archivo_adjunto"> | number | null
    nombre_archivo?: StringNullableWithAggregatesFilter<"archivo_adjunto"> | string | null
    ruta_archivo?: StringNullableWithAggregatesFilter<"archivo_adjunto"> | string | null
    fecha_subida?: DateTimeNullableWithAggregatesFilter<"archivo_adjunto"> | Date | string | null
  }

  export type correo_logWhereInput = {
    AND?: correo_logWhereInput | correo_logWhereInput[]
    OR?: correo_logWhereInput[]
    NOT?: correo_logWhereInput | correo_logWhereInput[]
    id_log?: IntFilter<"correo_log"> | number
    id_notificacion?: IntNullableFilter<"correo_log"> | number | null
    estado_envio?: StringNullableFilter<"correo_log"> | string | null
    fecha_envio?: DateTimeNullableFilter<"correo_log"> | Date | string | null
    mensaje_error?: StringNullableFilter<"correo_log"> | string | null
    notificacion?: XOR<NotificacionNullableScalarRelationFilter, notificacionWhereInput> | null
  }

  export type correo_logOrderByWithRelationInput = {
    id_log?: SortOrder
    id_notificacion?: SortOrderInput | SortOrder
    estado_envio?: SortOrderInput | SortOrder
    fecha_envio?: SortOrderInput | SortOrder
    mensaje_error?: SortOrderInput | SortOrder
    notificacion?: notificacionOrderByWithRelationInput
  }

  export type correo_logWhereUniqueInput = Prisma.AtLeast<{
    id_log?: number
    AND?: correo_logWhereInput | correo_logWhereInput[]
    OR?: correo_logWhereInput[]
    NOT?: correo_logWhereInput | correo_logWhereInput[]
    id_notificacion?: IntNullableFilter<"correo_log"> | number | null
    estado_envio?: StringNullableFilter<"correo_log"> | string | null
    fecha_envio?: DateTimeNullableFilter<"correo_log"> | Date | string | null
    mensaje_error?: StringNullableFilter<"correo_log"> | string | null
    notificacion?: XOR<NotificacionNullableScalarRelationFilter, notificacionWhereInput> | null
  }, "id_log">

  export type correo_logOrderByWithAggregationInput = {
    id_log?: SortOrder
    id_notificacion?: SortOrderInput | SortOrder
    estado_envio?: SortOrderInput | SortOrder
    fecha_envio?: SortOrderInput | SortOrder
    mensaje_error?: SortOrderInput | SortOrder
    _count?: correo_logCountOrderByAggregateInput
    _avg?: correo_logAvgOrderByAggregateInput
    _max?: correo_logMaxOrderByAggregateInput
    _min?: correo_logMinOrderByAggregateInput
    _sum?: correo_logSumOrderByAggregateInput
  }

  export type correo_logScalarWhereWithAggregatesInput = {
    AND?: correo_logScalarWhereWithAggregatesInput | correo_logScalarWhereWithAggregatesInput[]
    OR?: correo_logScalarWhereWithAggregatesInput[]
    NOT?: correo_logScalarWhereWithAggregatesInput | correo_logScalarWhereWithAggregatesInput[]
    id_log?: IntWithAggregatesFilter<"correo_log"> | number
    id_notificacion?: IntNullableWithAggregatesFilter<"correo_log"> | number | null
    estado_envio?: StringNullableWithAggregatesFilter<"correo_log"> | string | null
    fecha_envio?: DateTimeNullableWithAggregatesFilter<"correo_log"> | Date | string | null
    mensaje_error?: StringNullableWithAggregatesFilter<"correo_log"> | string | null
  }

  export type estado_novedadWhereInput = {
    AND?: estado_novedadWhereInput | estado_novedadWhereInput[]
    OR?: estado_novedadWhereInput[]
    NOT?: estado_novedadWhereInput | estado_novedadWhereInput[]
    id_estado_novedad?: IntFilter<"estado_novedad"> | number
    nombre_estado?: StringFilter<"estado_novedad"> | string
    historial_novedad?: Historial_novedadListRelationFilter
    novedad?: NovedadListRelationFilter
  }

  export type estado_novedadOrderByWithRelationInput = {
    id_estado_novedad?: SortOrder
    nombre_estado?: SortOrder
    historial_novedad?: historial_novedadOrderByRelationAggregateInput
    novedad?: novedadOrderByRelationAggregateInput
  }

  export type estado_novedadWhereUniqueInput = Prisma.AtLeast<{
    id_estado_novedad?: number
    AND?: estado_novedadWhereInput | estado_novedadWhereInput[]
    OR?: estado_novedadWhereInput[]
    NOT?: estado_novedadWhereInput | estado_novedadWhereInput[]
    nombre_estado?: StringFilter<"estado_novedad"> | string
    historial_novedad?: Historial_novedadListRelationFilter
    novedad?: NovedadListRelationFilter
  }, "id_estado_novedad">

  export type estado_novedadOrderByWithAggregationInput = {
    id_estado_novedad?: SortOrder
    nombre_estado?: SortOrder
    _count?: estado_novedadCountOrderByAggregateInput
    _avg?: estado_novedadAvgOrderByAggregateInput
    _max?: estado_novedadMaxOrderByAggregateInput
    _min?: estado_novedadMinOrderByAggregateInput
    _sum?: estado_novedadSumOrderByAggregateInput
  }

  export type estado_novedadScalarWhereWithAggregatesInput = {
    AND?: estado_novedadScalarWhereWithAggregatesInput | estado_novedadScalarWhereWithAggregatesInput[]
    OR?: estado_novedadScalarWhereWithAggregatesInput[]
    NOT?: estado_novedadScalarWhereWithAggregatesInput | estado_novedadScalarWhereWithAggregatesInput[]
    id_estado_novedad?: IntWithAggregatesFilter<"estado_novedad"> | number
    nombre_estado?: StringWithAggregatesFilter<"estado_novedad"> | string
  }

  export type historial_novedadWhereInput = {
    AND?: historial_novedadWhereInput | historial_novedadWhereInput[]
    OR?: historial_novedadWhereInput[]
    NOT?: historial_novedadWhereInput | historial_novedadWhereInput[]
    id_historial?: IntFilter<"historial_novedad"> | number
    id_novedad?: IntNullableFilter<"historial_novedad"> | number | null
    id_estado_novedad?: IntNullableFilter<"historial_novedad"> | number | null
    fecha_modificacion?: DateTimeNullableFilter<"historial_novedad"> | Date | string | null
    comentario?: StringNullableFilter<"historial_novedad"> | string | null
    id_usuario_modificacion?: IntNullableFilter<"historial_novedad"> | number | null
    estado_novedad?: XOR<Estado_novedadNullableScalarRelationFilter, estado_novedadWhereInput> | null
    novedad?: XOR<NovedadNullableScalarRelationFilter, novedadWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
  }

  export type historial_novedadOrderByWithRelationInput = {
    id_historial?: SortOrder
    id_novedad?: SortOrderInput | SortOrder
    id_estado_novedad?: SortOrderInput | SortOrder
    fecha_modificacion?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    id_usuario_modificacion?: SortOrderInput | SortOrder
    estado_novedad?: estado_novedadOrderByWithRelationInput
    novedad?: novedadOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type historial_novedadWhereUniqueInput = Prisma.AtLeast<{
    id_historial?: number
    AND?: historial_novedadWhereInput | historial_novedadWhereInput[]
    OR?: historial_novedadWhereInput[]
    NOT?: historial_novedadWhereInput | historial_novedadWhereInput[]
    id_novedad?: IntNullableFilter<"historial_novedad"> | number | null
    id_estado_novedad?: IntNullableFilter<"historial_novedad"> | number | null
    fecha_modificacion?: DateTimeNullableFilter<"historial_novedad"> | Date | string | null
    comentario?: StringNullableFilter<"historial_novedad"> | string | null
    id_usuario_modificacion?: IntNullableFilter<"historial_novedad"> | number | null
    estado_novedad?: XOR<Estado_novedadNullableScalarRelationFilter, estado_novedadWhereInput> | null
    novedad?: XOR<NovedadNullableScalarRelationFilter, novedadWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
  }, "id_historial">

  export type historial_novedadOrderByWithAggregationInput = {
    id_historial?: SortOrder
    id_novedad?: SortOrderInput | SortOrder
    id_estado_novedad?: SortOrderInput | SortOrder
    fecha_modificacion?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    id_usuario_modificacion?: SortOrderInput | SortOrder
    _count?: historial_novedadCountOrderByAggregateInput
    _avg?: historial_novedadAvgOrderByAggregateInput
    _max?: historial_novedadMaxOrderByAggregateInput
    _min?: historial_novedadMinOrderByAggregateInput
    _sum?: historial_novedadSumOrderByAggregateInput
  }

  export type historial_novedadScalarWhereWithAggregatesInput = {
    AND?: historial_novedadScalarWhereWithAggregatesInput | historial_novedadScalarWhereWithAggregatesInput[]
    OR?: historial_novedadScalarWhereWithAggregatesInput[]
    NOT?: historial_novedadScalarWhereWithAggregatesInput | historial_novedadScalarWhereWithAggregatesInput[]
    id_historial?: IntWithAggregatesFilter<"historial_novedad"> | number
    id_novedad?: IntNullableWithAggregatesFilter<"historial_novedad"> | number | null
    id_estado_novedad?: IntNullableWithAggregatesFilter<"historial_novedad"> | number | null
    fecha_modificacion?: DateTimeNullableWithAggregatesFilter<"historial_novedad"> | Date | string | null
    comentario?: StringNullableWithAggregatesFilter<"historial_novedad"> | string | null
    id_usuario_modificacion?: IntNullableWithAggregatesFilter<"historial_novedad"> | number | null
  }

  export type notificacionWhereInput = {
    AND?: notificacionWhereInput | notificacionWhereInput[]
    OR?: notificacionWhereInput[]
    NOT?: notificacionWhereInput | notificacionWhereInput[]
    id_notificacion?: IntFilter<"notificacion"> | number
    id_usuario?: IntNullableFilter<"notificacion"> | number | null
    id_novedad?: IntNullableFilter<"notificacion"> | number | null
    mensaje?: StringNullableFilter<"notificacion"> | string | null
    fecha_creacion?: DateTimeNullableFilter<"notificacion"> | Date | string | null
    leido?: BoolNullableFilter<"notificacion"> | boolean | null
    correo_log?: Correo_logListRelationFilter
    novedad?: XOR<NovedadNullableScalarRelationFilter, novedadWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
  }

  export type notificacionOrderByWithRelationInput = {
    id_notificacion?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    id_novedad?: SortOrderInput | SortOrder
    mensaje?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    leido?: SortOrderInput | SortOrder
    correo_log?: correo_logOrderByRelationAggregateInput
    novedad?: novedadOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type notificacionWhereUniqueInput = Prisma.AtLeast<{
    id_notificacion?: number
    AND?: notificacionWhereInput | notificacionWhereInput[]
    OR?: notificacionWhereInput[]
    NOT?: notificacionWhereInput | notificacionWhereInput[]
    id_usuario?: IntNullableFilter<"notificacion"> | number | null
    id_novedad?: IntNullableFilter<"notificacion"> | number | null
    mensaje?: StringNullableFilter<"notificacion"> | string | null
    fecha_creacion?: DateTimeNullableFilter<"notificacion"> | Date | string | null
    leido?: BoolNullableFilter<"notificacion"> | boolean | null
    correo_log?: Correo_logListRelationFilter
    novedad?: XOR<NovedadNullableScalarRelationFilter, novedadWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
  }, "id_notificacion">

  export type notificacionOrderByWithAggregationInput = {
    id_notificacion?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    id_novedad?: SortOrderInput | SortOrder
    mensaje?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    leido?: SortOrderInput | SortOrder
    _count?: notificacionCountOrderByAggregateInput
    _avg?: notificacionAvgOrderByAggregateInput
    _max?: notificacionMaxOrderByAggregateInput
    _min?: notificacionMinOrderByAggregateInput
    _sum?: notificacionSumOrderByAggregateInput
  }

  export type notificacionScalarWhereWithAggregatesInput = {
    AND?: notificacionScalarWhereWithAggregatesInput | notificacionScalarWhereWithAggregatesInput[]
    OR?: notificacionScalarWhereWithAggregatesInput[]
    NOT?: notificacionScalarWhereWithAggregatesInput | notificacionScalarWhereWithAggregatesInput[]
    id_notificacion?: IntWithAggregatesFilter<"notificacion"> | number
    id_usuario?: IntNullableWithAggregatesFilter<"notificacion"> | number | null
    id_novedad?: IntNullableWithAggregatesFilter<"notificacion"> | number | null
    mensaje?: StringNullableWithAggregatesFilter<"notificacion"> | string | null
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"notificacion"> | Date | string | null
    leido?: BoolNullableWithAggregatesFilter<"notificacion"> | boolean | null
  }

  export type novedadWhereInput = {
    AND?: novedadWhereInput | novedadWhereInput[]
    OR?: novedadWhereInput[]
    NOT?: novedadWhereInput | novedadWhereInput[]
    id_novedad?: IntFilter<"novedad"> | number
    id_usuario?: IntNullableFilter<"novedad"> | number | null
    id_tipo_novedad?: IntNullableFilter<"novedad"> | number | null
    id_estado_novedad?: IntNullableFilter<"novedad"> | number | null
    fecha_creacion?: DateTimeNullableFilter<"novedad"> | Date | string | null
    descripcion?: StringNullableFilter<"novedad"> | string | null
    archivo_adjunto?: Archivo_adjuntoListRelationFilter
    historial_novedad?: Historial_novedadListRelationFilter
    notificacion?: NotificacionListRelationFilter
    estado_novedad?: XOR<Estado_novedadNullableScalarRelationFilter, estado_novedadWhereInput> | null
    tipo_novedad?: XOR<Tipo_novedadNullableScalarRelationFilter, tipo_novedadWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
  }

  export type novedadOrderByWithRelationInput = {
    id_novedad?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    id_tipo_novedad?: SortOrderInput | SortOrder
    id_estado_novedad?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    archivo_adjunto?: archivo_adjuntoOrderByRelationAggregateInput
    historial_novedad?: historial_novedadOrderByRelationAggregateInput
    notificacion?: notificacionOrderByRelationAggregateInput
    estado_novedad?: estado_novedadOrderByWithRelationInput
    tipo_novedad?: tipo_novedadOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type novedadWhereUniqueInput = Prisma.AtLeast<{
    id_novedad?: number
    AND?: novedadWhereInput | novedadWhereInput[]
    OR?: novedadWhereInput[]
    NOT?: novedadWhereInput | novedadWhereInput[]
    id_usuario?: IntNullableFilter<"novedad"> | number | null
    id_tipo_novedad?: IntNullableFilter<"novedad"> | number | null
    id_estado_novedad?: IntNullableFilter<"novedad"> | number | null
    fecha_creacion?: DateTimeNullableFilter<"novedad"> | Date | string | null
    descripcion?: StringNullableFilter<"novedad"> | string | null
    archivo_adjunto?: Archivo_adjuntoListRelationFilter
    historial_novedad?: Historial_novedadListRelationFilter
    notificacion?: NotificacionListRelationFilter
    estado_novedad?: XOR<Estado_novedadNullableScalarRelationFilter, estado_novedadWhereInput> | null
    tipo_novedad?: XOR<Tipo_novedadNullableScalarRelationFilter, tipo_novedadWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
  }, "id_novedad">

  export type novedadOrderByWithAggregationInput = {
    id_novedad?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    id_tipo_novedad?: SortOrderInput | SortOrder
    id_estado_novedad?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: novedadCountOrderByAggregateInput
    _avg?: novedadAvgOrderByAggregateInput
    _max?: novedadMaxOrderByAggregateInput
    _min?: novedadMinOrderByAggregateInput
    _sum?: novedadSumOrderByAggregateInput
  }

  export type novedadScalarWhereWithAggregatesInput = {
    AND?: novedadScalarWhereWithAggregatesInput | novedadScalarWhereWithAggregatesInput[]
    OR?: novedadScalarWhereWithAggregatesInput[]
    NOT?: novedadScalarWhereWithAggregatesInput | novedadScalarWhereWithAggregatesInput[]
    id_novedad?: IntWithAggregatesFilter<"novedad"> | number
    id_usuario?: IntNullableWithAggregatesFilter<"novedad"> | number | null
    id_tipo_novedad?: IntNullableWithAggregatesFilter<"novedad"> | number | null
    id_estado_novedad?: IntNullableWithAggregatesFilter<"novedad"> | number | null
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"novedad"> | Date | string | null
    descripcion?: StringNullableWithAggregatesFilter<"novedad"> | string | null
  }

  export type rolWhereInput = {
    AND?: rolWhereInput | rolWhereInput[]
    OR?: rolWhereInput[]
    NOT?: rolWhereInput | rolWhereInput[]
    id_rol?: IntFilter<"rol"> | number
    nombre_rol?: StringFilter<"rol"> | string
    usuario_rol?: Usuario_rolListRelationFilter
  }

  export type rolOrderByWithRelationInput = {
    id_rol?: SortOrder
    nombre_rol?: SortOrder
    usuario_rol?: usuario_rolOrderByRelationAggregateInput
  }

  export type rolWhereUniqueInput = Prisma.AtLeast<{
    id_rol?: number
    AND?: rolWhereInput | rolWhereInput[]
    OR?: rolWhereInput[]
    NOT?: rolWhereInput | rolWhereInput[]
    nombre_rol?: StringFilter<"rol"> | string
    usuario_rol?: Usuario_rolListRelationFilter
  }, "id_rol">

  export type rolOrderByWithAggregationInput = {
    id_rol?: SortOrder
    nombre_rol?: SortOrder
    _count?: rolCountOrderByAggregateInput
    _avg?: rolAvgOrderByAggregateInput
    _max?: rolMaxOrderByAggregateInput
    _min?: rolMinOrderByAggregateInput
    _sum?: rolSumOrderByAggregateInput
  }

  export type rolScalarWhereWithAggregatesInput = {
    AND?: rolScalarWhereWithAggregatesInput | rolScalarWhereWithAggregatesInput[]
    OR?: rolScalarWhereWithAggregatesInput[]
    NOT?: rolScalarWhereWithAggregatesInput | rolScalarWhereWithAggregatesInput[]
    id_rol?: IntWithAggregatesFilter<"rol"> | number
    nombre_rol?: StringWithAggregatesFilter<"rol"> | string
  }

  export type tipo_novedadWhereInput = {
    AND?: tipo_novedadWhereInput | tipo_novedadWhereInput[]
    OR?: tipo_novedadWhereInput[]
    NOT?: tipo_novedadWhereInput | tipo_novedadWhereInput[]
    id_tipo_novedad?: IntFilter<"tipo_novedad"> | number
    nombre_tipo?: StringFilter<"tipo_novedad"> | string
    codigo?: StringFilter<"tipo_novedad"> | string
    novedad?: NovedadListRelationFilter
  }

  export type tipo_novedadOrderByWithRelationInput = {
    id_tipo_novedad?: SortOrder
    nombre_tipo?: SortOrder
    codigo?: SortOrder
    novedad?: novedadOrderByRelationAggregateInput
  }

  export type tipo_novedadWhereUniqueInput = Prisma.AtLeast<{
    id_tipo_novedad?: number
    codigo?: string
    AND?: tipo_novedadWhereInput | tipo_novedadWhereInput[]
    OR?: tipo_novedadWhereInput[]
    NOT?: tipo_novedadWhereInput | tipo_novedadWhereInput[]
    nombre_tipo?: StringFilter<"tipo_novedad"> | string
    novedad?: NovedadListRelationFilter
  }, "id_tipo_novedad" | "codigo">

  export type tipo_novedadOrderByWithAggregationInput = {
    id_tipo_novedad?: SortOrder
    nombre_tipo?: SortOrder
    codigo?: SortOrder
    _count?: tipo_novedadCountOrderByAggregateInput
    _avg?: tipo_novedadAvgOrderByAggregateInput
    _max?: tipo_novedadMaxOrderByAggregateInput
    _min?: tipo_novedadMinOrderByAggregateInput
    _sum?: tipo_novedadSumOrderByAggregateInput
  }

  export type tipo_novedadScalarWhereWithAggregatesInput = {
    AND?: tipo_novedadScalarWhereWithAggregatesInput | tipo_novedadScalarWhereWithAggregatesInput[]
    OR?: tipo_novedadScalarWhereWithAggregatesInput[]
    NOT?: tipo_novedadScalarWhereWithAggregatesInput | tipo_novedadScalarWhereWithAggregatesInput[]
    id_tipo_novedad?: IntWithAggregatesFilter<"tipo_novedad"> | number
    nombre_tipo?: StringWithAggregatesFilter<"tipo_novedad"> | string
    codigo?: StringWithAggregatesFilter<"tipo_novedad"> | string
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id_usuario?: IntFilter<"usuario"> | number
    nombre?: StringFilter<"usuario"> | string
    correo?: StringFilter<"usuario"> | string
    historial_novedad?: Historial_novedadListRelationFilter
    notificacion?: NotificacionListRelationFilter
    novedad?: NovedadListRelationFilter
    usuario_rol?: Usuario_rolListRelationFilter
  }

  export type usuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    historial_novedad?: historial_novedadOrderByRelationAggregateInput
    notificacion?: notificacionOrderByRelationAggregateInput
    novedad?: novedadOrderByRelationAggregateInput
    usuario_rol?: usuario_rolOrderByRelationAggregateInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    correo?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    nombre?: StringFilter<"usuario"> | string
    historial_novedad?: Historial_novedadListRelationFilter
    notificacion?: NotificacionListRelationFilter
    novedad?: NovedadListRelationFilter
    usuario_rol?: Usuario_rolListRelationFilter
  }, "id_usuario" | "correo">

  export type usuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuario"> | number
    nombre?: StringWithAggregatesFilter<"usuario"> | string
    correo?: StringWithAggregatesFilter<"usuario"> | string
  }

  export type usuario_rolWhereInput = {
    AND?: usuario_rolWhereInput | usuario_rolWhereInput[]
    OR?: usuario_rolWhereInput[]
    NOT?: usuario_rolWhereInput | usuario_rolWhereInput[]
    id_usuario?: IntFilter<"usuario_rol"> | number
    id_rol?: IntFilter<"usuario_rol"> | number
    rol?: XOR<RolScalarRelationFilter, rolWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type usuario_rolOrderByWithRelationInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
    rol?: rolOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type usuario_rolWhereUniqueInput = Prisma.AtLeast<{
    id_usuario_id_rol?: usuario_rolId_usuarioId_rolCompoundUniqueInput
    AND?: usuario_rolWhereInput | usuario_rolWhereInput[]
    OR?: usuario_rolWhereInput[]
    NOT?: usuario_rolWhereInput | usuario_rolWhereInput[]
    id_usuario?: IntFilter<"usuario_rol"> | number
    id_rol?: IntFilter<"usuario_rol"> | number
    rol?: XOR<RolScalarRelationFilter, rolWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id_usuario_id_rol">

  export type usuario_rolOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
    _count?: usuario_rolCountOrderByAggregateInput
    _avg?: usuario_rolAvgOrderByAggregateInput
    _max?: usuario_rolMaxOrderByAggregateInput
    _min?: usuario_rolMinOrderByAggregateInput
    _sum?: usuario_rolSumOrderByAggregateInput
  }

  export type usuario_rolScalarWhereWithAggregatesInput = {
    AND?: usuario_rolScalarWhereWithAggregatesInput | usuario_rolScalarWhereWithAggregatesInput[]
    OR?: usuario_rolScalarWhereWithAggregatesInput[]
    NOT?: usuario_rolScalarWhereWithAggregatesInput | usuario_rolScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuario_rol"> | number
    id_rol?: IntWithAggregatesFilter<"usuario_rol"> | number
  }

  export type archivo_adjuntoCreateInput = {
    nombre_archivo?: string | null
    ruta_archivo?: string | null
    fecha_subida?: Date | string | null
    novedad?: novedadCreateNestedOneWithoutArchivo_adjuntoInput
  }

  export type archivo_adjuntoUncheckedCreateInput = {
    id_archivo?: number
    id_novedad?: number | null
    nombre_archivo?: string | null
    ruta_archivo?: string | null
    fecha_subida?: Date | string | null
  }

  export type archivo_adjuntoUpdateInput = {
    nombre_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    novedad?: novedadUpdateOneWithoutArchivo_adjuntoNestedInput
  }

  export type archivo_adjuntoUncheckedUpdateInput = {
    id_archivo?: IntFieldUpdateOperationsInput | number
    id_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    nombre_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type archivo_adjuntoCreateManyInput = {
    id_archivo?: number
    id_novedad?: number | null
    nombre_archivo?: string | null
    ruta_archivo?: string | null
    fecha_subida?: Date | string | null
  }

  export type archivo_adjuntoUpdateManyMutationInput = {
    nombre_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type archivo_adjuntoUncheckedUpdateManyInput = {
    id_archivo?: IntFieldUpdateOperationsInput | number
    id_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    nombre_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type correo_logCreateInput = {
    estado_envio?: string | null
    fecha_envio?: Date | string | null
    mensaje_error?: string | null
    notificacion?: notificacionCreateNestedOneWithoutCorreo_logInput
  }

  export type correo_logUncheckedCreateInput = {
    id_log?: number
    id_notificacion?: number | null
    estado_envio?: string | null
    fecha_envio?: Date | string | null
    mensaje_error?: string | null
  }

  export type correo_logUpdateInput = {
    estado_envio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mensaje_error?: NullableStringFieldUpdateOperationsInput | string | null
    notificacion?: notificacionUpdateOneWithoutCorreo_logNestedInput
  }

  export type correo_logUncheckedUpdateInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    id_notificacion?: NullableIntFieldUpdateOperationsInput | number | null
    estado_envio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mensaje_error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type correo_logCreateManyInput = {
    id_log?: number
    id_notificacion?: number | null
    estado_envio?: string | null
    fecha_envio?: Date | string | null
    mensaje_error?: string | null
  }

  export type correo_logUpdateManyMutationInput = {
    estado_envio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mensaje_error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type correo_logUncheckedUpdateManyInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    id_notificacion?: NullableIntFieldUpdateOperationsInput | number | null
    estado_envio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mensaje_error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type estado_novedadCreateInput = {
    nombre_estado: string
    historial_novedad?: historial_novedadCreateNestedManyWithoutEstado_novedadInput
    novedad?: novedadCreateNestedManyWithoutEstado_novedadInput
  }

  export type estado_novedadUncheckedCreateInput = {
    id_estado_novedad?: number
    nombre_estado: string
    historial_novedad?: historial_novedadUncheckedCreateNestedManyWithoutEstado_novedadInput
    novedad?: novedadUncheckedCreateNestedManyWithoutEstado_novedadInput
  }

  export type estado_novedadUpdateInput = {
    nombre_estado?: StringFieldUpdateOperationsInput | string
    historial_novedad?: historial_novedadUpdateManyWithoutEstado_novedadNestedInput
    novedad?: novedadUpdateManyWithoutEstado_novedadNestedInput
  }

  export type estado_novedadUncheckedUpdateInput = {
    id_estado_novedad?: IntFieldUpdateOperationsInput | number
    nombre_estado?: StringFieldUpdateOperationsInput | string
    historial_novedad?: historial_novedadUncheckedUpdateManyWithoutEstado_novedadNestedInput
    novedad?: novedadUncheckedUpdateManyWithoutEstado_novedadNestedInput
  }

  export type estado_novedadCreateManyInput = {
    id_estado_novedad?: number
    nombre_estado: string
  }

  export type estado_novedadUpdateManyMutationInput = {
    nombre_estado?: StringFieldUpdateOperationsInput | string
  }

  export type estado_novedadUncheckedUpdateManyInput = {
    id_estado_novedad?: IntFieldUpdateOperationsInput | number
    nombre_estado?: StringFieldUpdateOperationsInput | string
  }

  export type historial_novedadCreateInput = {
    fecha_modificacion?: Date | string | null
    comentario?: string | null
    estado_novedad?: estado_novedadCreateNestedOneWithoutHistorial_novedadInput
    novedad?: novedadCreateNestedOneWithoutHistorial_novedadInput
    usuario?: usuarioCreateNestedOneWithoutHistorial_novedadInput
  }

  export type historial_novedadUncheckedCreateInput = {
    id_historial?: number
    id_novedad?: number | null
    id_estado_novedad?: number | null
    fecha_modificacion?: Date | string | null
    comentario?: string | null
    id_usuario_modificacion?: number | null
  }

  export type historial_novedadUpdateInput = {
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    estado_novedad?: estado_novedadUpdateOneWithoutHistorial_novedadNestedInput
    novedad?: novedadUpdateOneWithoutHistorial_novedadNestedInput
    usuario?: usuarioUpdateOneWithoutHistorial_novedadNestedInput
  }

  export type historial_novedadUncheckedUpdateInput = {
    id_historial?: IntFieldUpdateOperationsInput | number
    id_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    id_estado_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_modificacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type historial_novedadCreateManyInput = {
    id_historial?: number
    id_novedad?: number | null
    id_estado_novedad?: number | null
    fecha_modificacion?: Date | string | null
    comentario?: string | null
    id_usuario_modificacion?: number | null
  }

  export type historial_novedadUpdateManyMutationInput = {
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historial_novedadUncheckedUpdateManyInput = {
    id_historial?: IntFieldUpdateOperationsInput | number
    id_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    id_estado_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_modificacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notificacionCreateInput = {
    mensaje?: string | null
    fecha_creacion?: Date | string | null
    leido?: boolean | null
    correo_log?: correo_logCreateNestedManyWithoutNotificacionInput
    novedad?: novedadCreateNestedOneWithoutNotificacionInput
    usuario?: usuarioCreateNestedOneWithoutNotificacionInput
  }

  export type notificacionUncheckedCreateInput = {
    id_notificacion?: number
    id_usuario?: number | null
    id_novedad?: number | null
    mensaje?: string | null
    fecha_creacion?: Date | string | null
    leido?: boolean | null
    correo_log?: correo_logUncheckedCreateNestedManyWithoutNotificacionInput
  }

  export type notificacionUpdateInput = {
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    correo_log?: correo_logUpdateManyWithoutNotificacionNestedInput
    novedad?: novedadUpdateOneWithoutNotificacionNestedInput
    usuario?: usuarioUpdateOneWithoutNotificacionNestedInput
  }

  export type notificacionUncheckedUpdateInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    correo_log?: correo_logUncheckedUpdateManyWithoutNotificacionNestedInput
  }

  export type notificacionCreateManyInput = {
    id_notificacion?: number
    id_usuario?: number | null
    id_novedad?: number | null
    mensaje?: string | null
    fecha_creacion?: Date | string | null
    leido?: boolean | null
  }

  export type notificacionUpdateManyMutationInput = {
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type notificacionUncheckedUpdateManyInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type novedadCreateInput = {
    fecha_creacion?: Date | string | null
    descripcion?: string | null
    archivo_adjunto?: archivo_adjuntoCreateNestedManyWithoutNovedadInput
    historial_novedad?: historial_novedadCreateNestedManyWithoutNovedadInput
    notificacion?: notificacionCreateNestedManyWithoutNovedadInput
    estado_novedad?: estado_novedadCreateNestedOneWithoutNovedadInput
    tipo_novedad?: tipo_novedadCreateNestedOneWithoutNovedadInput
    usuario?: usuarioCreateNestedOneWithoutNovedadInput
  }

  export type novedadUncheckedCreateInput = {
    id_novedad?: number
    id_usuario?: number | null
    id_tipo_novedad?: number | null
    id_estado_novedad?: number | null
    fecha_creacion?: Date | string | null
    descripcion?: string | null
    archivo_adjunto?: archivo_adjuntoUncheckedCreateNestedManyWithoutNovedadInput
    historial_novedad?: historial_novedadUncheckedCreateNestedManyWithoutNovedadInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutNovedadInput
  }

  export type novedadUpdateInput = {
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    archivo_adjunto?: archivo_adjuntoUpdateManyWithoutNovedadNestedInput
    historial_novedad?: historial_novedadUpdateManyWithoutNovedadNestedInput
    notificacion?: notificacionUpdateManyWithoutNovedadNestedInput
    estado_novedad?: estado_novedadUpdateOneWithoutNovedadNestedInput
    tipo_novedad?: tipo_novedadUpdateOneWithoutNovedadNestedInput
    usuario?: usuarioUpdateOneWithoutNovedadNestedInput
  }

  export type novedadUncheckedUpdateInput = {
    id_novedad?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_tipo_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    id_estado_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    archivo_adjunto?: archivo_adjuntoUncheckedUpdateManyWithoutNovedadNestedInput
    historial_novedad?: historial_novedadUncheckedUpdateManyWithoutNovedadNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutNovedadNestedInput
  }

  export type novedadCreateManyInput = {
    id_novedad?: number
    id_usuario?: number | null
    id_tipo_novedad?: number | null
    id_estado_novedad?: number | null
    fecha_creacion?: Date | string | null
    descripcion?: string | null
  }

  export type novedadUpdateManyMutationInput = {
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type novedadUncheckedUpdateManyInput = {
    id_novedad?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_tipo_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    id_estado_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rolCreateInput = {
    nombre_rol: string
    usuario_rol?: usuario_rolCreateNestedManyWithoutRolInput
  }

  export type rolUncheckedCreateInput = {
    id_rol?: number
    nombre_rol: string
    usuario_rol?: usuario_rolUncheckedCreateNestedManyWithoutRolInput
  }

  export type rolUpdateInput = {
    nombre_rol?: StringFieldUpdateOperationsInput | string
    usuario_rol?: usuario_rolUpdateManyWithoutRolNestedInput
  }

  export type rolUncheckedUpdateInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_rol?: StringFieldUpdateOperationsInput | string
    usuario_rol?: usuario_rolUncheckedUpdateManyWithoutRolNestedInput
  }

  export type rolCreateManyInput = {
    id_rol?: number
    nombre_rol: string
  }

  export type rolUpdateManyMutationInput = {
    nombre_rol?: StringFieldUpdateOperationsInput | string
  }

  export type rolUncheckedUpdateManyInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_rol?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_novedadCreateInput = {
    nombre_tipo: string
    codigo: string
    novedad?: novedadCreateNestedManyWithoutTipo_novedadInput
  }

  export type tipo_novedadUncheckedCreateInput = {
    id_tipo_novedad?: number
    nombre_tipo: string
    codigo: string
    novedad?: novedadUncheckedCreateNestedManyWithoutTipo_novedadInput
  }

  export type tipo_novedadUpdateInput = {
    nombre_tipo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    novedad?: novedadUpdateManyWithoutTipo_novedadNestedInput
  }

  export type tipo_novedadUncheckedUpdateInput = {
    id_tipo_novedad?: IntFieldUpdateOperationsInput | number
    nombre_tipo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    novedad?: novedadUncheckedUpdateManyWithoutTipo_novedadNestedInput
  }

  export type tipo_novedadCreateManyInput = {
    id_tipo_novedad?: number
    nombre_tipo: string
    codigo: string
  }

  export type tipo_novedadUpdateManyMutationInput = {
    nombre_tipo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_novedadUncheckedUpdateManyInput = {
    id_tipo_novedad?: IntFieldUpdateOperationsInput | number
    nombre_tipo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioCreateInput = {
    nombre: string
    correo: string
    historial_novedad?: historial_novedadCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionCreateNestedManyWithoutUsuarioInput
    novedad?: novedadCreateNestedManyWithoutUsuarioInput
    usuario_rol?: usuario_rolCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id_usuario?: number
    nombre: string
    correo: string
    historial_novedad?: historial_novedadUncheckedCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutUsuarioInput
    novedad?: novedadUncheckedCreateNestedManyWithoutUsuarioInput
    usuario_rol?: usuario_rolUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    historial_novedad?: historial_novedadUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUpdateManyWithoutUsuarioNestedInput
    novedad?: novedadUpdateManyWithoutUsuarioNestedInput
    usuario_rol?: usuario_rolUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    historial_novedad?: historial_novedadUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    novedad?: novedadUncheckedUpdateManyWithoutUsuarioNestedInput
    usuario_rol?: usuario_rolUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id_usuario?: number
    nombre: string
    correo: string
  }

  export type usuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type usuario_rolCreateInput = {
    rol: rolCreateNestedOneWithoutUsuario_rolInput
    usuario: usuarioCreateNestedOneWithoutUsuario_rolInput
  }

  export type usuario_rolUncheckedCreateInput = {
    id_usuario: number
    id_rol: number
  }

  export type usuario_rolUpdateInput = {
    rol?: rolUpdateOneRequiredWithoutUsuario_rolNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutUsuario_rolNestedInput
  }

  export type usuario_rolUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_rolCreateManyInput = {
    id_usuario: number
    id_rol: number
  }

  export type usuario_rolUpdateManyMutationInput = {

  }

  export type usuario_rolUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
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

  export type NovedadNullableScalarRelationFilter = {
    is?: novedadWhereInput | null
    isNot?: novedadWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type archivo_adjuntoCountOrderByAggregateInput = {
    id_archivo?: SortOrder
    id_novedad?: SortOrder
    nombre_archivo?: SortOrder
    ruta_archivo?: SortOrder
    fecha_subida?: SortOrder
  }

  export type archivo_adjuntoAvgOrderByAggregateInput = {
    id_archivo?: SortOrder
    id_novedad?: SortOrder
  }

  export type archivo_adjuntoMaxOrderByAggregateInput = {
    id_archivo?: SortOrder
    id_novedad?: SortOrder
    nombre_archivo?: SortOrder
    ruta_archivo?: SortOrder
    fecha_subida?: SortOrder
  }

  export type archivo_adjuntoMinOrderByAggregateInput = {
    id_archivo?: SortOrder
    id_novedad?: SortOrder
    nombre_archivo?: SortOrder
    ruta_archivo?: SortOrder
    fecha_subida?: SortOrder
  }

  export type archivo_adjuntoSumOrderByAggregateInput = {
    id_archivo?: SortOrder
    id_novedad?: SortOrder
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

  export type NotificacionNullableScalarRelationFilter = {
    is?: notificacionWhereInput | null
    isNot?: notificacionWhereInput | null
  }

  export type correo_logCountOrderByAggregateInput = {
    id_log?: SortOrder
    id_notificacion?: SortOrder
    estado_envio?: SortOrder
    fecha_envio?: SortOrder
    mensaje_error?: SortOrder
  }

  export type correo_logAvgOrderByAggregateInput = {
    id_log?: SortOrder
    id_notificacion?: SortOrder
  }

  export type correo_logMaxOrderByAggregateInput = {
    id_log?: SortOrder
    id_notificacion?: SortOrder
    estado_envio?: SortOrder
    fecha_envio?: SortOrder
    mensaje_error?: SortOrder
  }

  export type correo_logMinOrderByAggregateInput = {
    id_log?: SortOrder
    id_notificacion?: SortOrder
    estado_envio?: SortOrder
    fecha_envio?: SortOrder
    mensaje_error?: SortOrder
  }

  export type correo_logSumOrderByAggregateInput = {
    id_log?: SortOrder
    id_notificacion?: SortOrder
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

  export type Historial_novedadListRelationFilter = {
    every?: historial_novedadWhereInput
    some?: historial_novedadWhereInput
    none?: historial_novedadWhereInput
  }

  export type NovedadListRelationFilter = {
    every?: novedadWhereInput
    some?: novedadWhereInput
    none?: novedadWhereInput
  }

  export type historial_novedadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type novedadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type estado_novedadCountOrderByAggregateInput = {
    id_estado_novedad?: SortOrder
    nombre_estado?: SortOrder
  }

  export type estado_novedadAvgOrderByAggregateInput = {
    id_estado_novedad?: SortOrder
  }

  export type estado_novedadMaxOrderByAggregateInput = {
    id_estado_novedad?: SortOrder
    nombre_estado?: SortOrder
  }

  export type estado_novedadMinOrderByAggregateInput = {
    id_estado_novedad?: SortOrder
    nombre_estado?: SortOrder
  }

  export type estado_novedadSumOrderByAggregateInput = {
    id_estado_novedad?: SortOrder
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

  export type Estado_novedadNullableScalarRelationFilter = {
    is?: estado_novedadWhereInput | null
    isNot?: estado_novedadWhereInput | null
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: usuarioWhereInput | null
    isNot?: usuarioWhereInput | null
  }

  export type historial_novedadCountOrderByAggregateInput = {
    id_historial?: SortOrder
    id_novedad?: SortOrder
    id_estado_novedad?: SortOrder
    fecha_modificacion?: SortOrder
    comentario?: SortOrder
    id_usuario_modificacion?: SortOrder
  }

  export type historial_novedadAvgOrderByAggregateInput = {
    id_historial?: SortOrder
    id_novedad?: SortOrder
    id_estado_novedad?: SortOrder
    id_usuario_modificacion?: SortOrder
  }

  export type historial_novedadMaxOrderByAggregateInput = {
    id_historial?: SortOrder
    id_novedad?: SortOrder
    id_estado_novedad?: SortOrder
    fecha_modificacion?: SortOrder
    comentario?: SortOrder
    id_usuario_modificacion?: SortOrder
  }

  export type historial_novedadMinOrderByAggregateInput = {
    id_historial?: SortOrder
    id_novedad?: SortOrder
    id_estado_novedad?: SortOrder
    fecha_modificacion?: SortOrder
    comentario?: SortOrder
    id_usuario_modificacion?: SortOrder
  }

  export type historial_novedadSumOrderByAggregateInput = {
    id_historial?: SortOrder
    id_novedad?: SortOrder
    id_estado_novedad?: SortOrder
    id_usuario_modificacion?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Correo_logListRelationFilter = {
    every?: correo_logWhereInput
    some?: correo_logWhereInput
    none?: correo_logWhereInput
  }

  export type correo_logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificacionCountOrderByAggregateInput = {
    id_notificacion?: SortOrder
    id_usuario?: SortOrder
    id_novedad?: SortOrder
    mensaje?: SortOrder
    fecha_creacion?: SortOrder
    leido?: SortOrder
  }

  export type notificacionAvgOrderByAggregateInput = {
    id_notificacion?: SortOrder
    id_usuario?: SortOrder
    id_novedad?: SortOrder
  }

  export type notificacionMaxOrderByAggregateInput = {
    id_notificacion?: SortOrder
    id_usuario?: SortOrder
    id_novedad?: SortOrder
    mensaje?: SortOrder
    fecha_creacion?: SortOrder
    leido?: SortOrder
  }

  export type notificacionMinOrderByAggregateInput = {
    id_notificacion?: SortOrder
    id_usuario?: SortOrder
    id_novedad?: SortOrder
    mensaje?: SortOrder
    fecha_creacion?: SortOrder
    leido?: SortOrder
  }

  export type notificacionSumOrderByAggregateInput = {
    id_notificacion?: SortOrder
    id_usuario?: SortOrder
    id_novedad?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Archivo_adjuntoListRelationFilter = {
    every?: archivo_adjuntoWhereInput
    some?: archivo_adjuntoWhereInput
    none?: archivo_adjuntoWhereInput
  }

  export type NotificacionListRelationFilter = {
    every?: notificacionWhereInput
    some?: notificacionWhereInput
    none?: notificacionWhereInput
  }

  export type Tipo_novedadNullableScalarRelationFilter = {
    is?: tipo_novedadWhereInput | null
    isNot?: tipo_novedadWhereInput | null
  }

  export type archivo_adjuntoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type novedadCountOrderByAggregateInput = {
    id_novedad?: SortOrder
    id_usuario?: SortOrder
    id_tipo_novedad?: SortOrder
    id_estado_novedad?: SortOrder
    fecha_creacion?: SortOrder
    descripcion?: SortOrder
  }

  export type novedadAvgOrderByAggregateInput = {
    id_novedad?: SortOrder
    id_usuario?: SortOrder
    id_tipo_novedad?: SortOrder
    id_estado_novedad?: SortOrder
  }

  export type novedadMaxOrderByAggregateInput = {
    id_novedad?: SortOrder
    id_usuario?: SortOrder
    id_tipo_novedad?: SortOrder
    id_estado_novedad?: SortOrder
    fecha_creacion?: SortOrder
    descripcion?: SortOrder
  }

  export type novedadMinOrderByAggregateInput = {
    id_novedad?: SortOrder
    id_usuario?: SortOrder
    id_tipo_novedad?: SortOrder
    id_estado_novedad?: SortOrder
    fecha_creacion?: SortOrder
    descripcion?: SortOrder
  }

  export type novedadSumOrderByAggregateInput = {
    id_novedad?: SortOrder
    id_usuario?: SortOrder
    id_tipo_novedad?: SortOrder
    id_estado_novedad?: SortOrder
  }

  export type Usuario_rolListRelationFilter = {
    every?: usuario_rolWhereInput
    some?: usuario_rolWhereInput
    none?: usuario_rolWhereInput
  }

  export type usuario_rolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolCountOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre_rol?: SortOrder
  }

  export type rolAvgOrderByAggregateInput = {
    id_rol?: SortOrder
  }

  export type rolMaxOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre_rol?: SortOrder
  }

  export type rolMinOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre_rol?: SortOrder
  }

  export type rolSumOrderByAggregateInput = {
    id_rol?: SortOrder
  }

  export type tipo_novedadCountOrderByAggregateInput = {
    id_tipo_novedad?: SortOrder
    nombre_tipo?: SortOrder
    codigo?: SortOrder
  }

  export type tipo_novedadAvgOrderByAggregateInput = {
    id_tipo_novedad?: SortOrder
  }

  export type tipo_novedadMaxOrderByAggregateInput = {
    id_tipo_novedad?: SortOrder
    nombre_tipo?: SortOrder
    codigo?: SortOrder
  }

  export type tipo_novedadMinOrderByAggregateInput = {
    id_tipo_novedad?: SortOrder
    nombre_tipo?: SortOrder
    codigo?: SortOrder
  }

  export type tipo_novedadSumOrderByAggregateInput = {
    id_tipo_novedad?: SortOrder
  }

  export type usuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type RolScalarRelationFilter = {
    is?: rolWhereInput
    isNot?: rolWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type usuario_rolId_usuarioId_rolCompoundUniqueInput = {
    id_usuario: number
    id_rol: number
  }

  export type usuario_rolCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
  }

  export type usuario_rolAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
  }

  export type usuario_rolMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
  }

  export type usuario_rolMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
  }

  export type usuario_rolSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
  }

  export type novedadCreateNestedOneWithoutArchivo_adjuntoInput = {
    create?: XOR<novedadCreateWithoutArchivo_adjuntoInput, novedadUncheckedCreateWithoutArchivo_adjuntoInput>
    connectOrCreate?: novedadCreateOrConnectWithoutArchivo_adjuntoInput
    connect?: novedadWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type novedadUpdateOneWithoutArchivo_adjuntoNestedInput = {
    create?: XOR<novedadCreateWithoutArchivo_adjuntoInput, novedadUncheckedCreateWithoutArchivo_adjuntoInput>
    connectOrCreate?: novedadCreateOrConnectWithoutArchivo_adjuntoInput
    upsert?: novedadUpsertWithoutArchivo_adjuntoInput
    disconnect?: novedadWhereInput | boolean
    delete?: novedadWhereInput | boolean
    connect?: novedadWhereUniqueInput
    update?: XOR<XOR<novedadUpdateToOneWithWhereWithoutArchivo_adjuntoInput, novedadUpdateWithoutArchivo_adjuntoInput>, novedadUncheckedUpdateWithoutArchivo_adjuntoInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type notificacionCreateNestedOneWithoutCorreo_logInput = {
    create?: XOR<notificacionCreateWithoutCorreo_logInput, notificacionUncheckedCreateWithoutCorreo_logInput>
    connectOrCreate?: notificacionCreateOrConnectWithoutCorreo_logInput
    connect?: notificacionWhereUniqueInput
  }

  export type notificacionUpdateOneWithoutCorreo_logNestedInput = {
    create?: XOR<notificacionCreateWithoutCorreo_logInput, notificacionUncheckedCreateWithoutCorreo_logInput>
    connectOrCreate?: notificacionCreateOrConnectWithoutCorreo_logInput
    upsert?: notificacionUpsertWithoutCorreo_logInput
    disconnect?: notificacionWhereInput | boolean
    delete?: notificacionWhereInput | boolean
    connect?: notificacionWhereUniqueInput
    update?: XOR<XOR<notificacionUpdateToOneWithWhereWithoutCorreo_logInput, notificacionUpdateWithoutCorreo_logInput>, notificacionUncheckedUpdateWithoutCorreo_logInput>
  }

  export type historial_novedadCreateNestedManyWithoutEstado_novedadInput = {
    create?: XOR<historial_novedadCreateWithoutEstado_novedadInput, historial_novedadUncheckedCreateWithoutEstado_novedadInput> | historial_novedadCreateWithoutEstado_novedadInput[] | historial_novedadUncheckedCreateWithoutEstado_novedadInput[]
    connectOrCreate?: historial_novedadCreateOrConnectWithoutEstado_novedadInput | historial_novedadCreateOrConnectWithoutEstado_novedadInput[]
    createMany?: historial_novedadCreateManyEstado_novedadInputEnvelope
    connect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
  }

  export type novedadCreateNestedManyWithoutEstado_novedadInput = {
    create?: XOR<novedadCreateWithoutEstado_novedadInput, novedadUncheckedCreateWithoutEstado_novedadInput> | novedadCreateWithoutEstado_novedadInput[] | novedadUncheckedCreateWithoutEstado_novedadInput[]
    connectOrCreate?: novedadCreateOrConnectWithoutEstado_novedadInput | novedadCreateOrConnectWithoutEstado_novedadInput[]
    createMany?: novedadCreateManyEstado_novedadInputEnvelope
    connect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
  }

  export type historial_novedadUncheckedCreateNestedManyWithoutEstado_novedadInput = {
    create?: XOR<historial_novedadCreateWithoutEstado_novedadInput, historial_novedadUncheckedCreateWithoutEstado_novedadInput> | historial_novedadCreateWithoutEstado_novedadInput[] | historial_novedadUncheckedCreateWithoutEstado_novedadInput[]
    connectOrCreate?: historial_novedadCreateOrConnectWithoutEstado_novedadInput | historial_novedadCreateOrConnectWithoutEstado_novedadInput[]
    createMany?: historial_novedadCreateManyEstado_novedadInputEnvelope
    connect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
  }

  export type novedadUncheckedCreateNestedManyWithoutEstado_novedadInput = {
    create?: XOR<novedadCreateWithoutEstado_novedadInput, novedadUncheckedCreateWithoutEstado_novedadInput> | novedadCreateWithoutEstado_novedadInput[] | novedadUncheckedCreateWithoutEstado_novedadInput[]
    connectOrCreate?: novedadCreateOrConnectWithoutEstado_novedadInput | novedadCreateOrConnectWithoutEstado_novedadInput[]
    createMany?: novedadCreateManyEstado_novedadInputEnvelope
    connect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type historial_novedadUpdateManyWithoutEstado_novedadNestedInput = {
    create?: XOR<historial_novedadCreateWithoutEstado_novedadInput, historial_novedadUncheckedCreateWithoutEstado_novedadInput> | historial_novedadCreateWithoutEstado_novedadInput[] | historial_novedadUncheckedCreateWithoutEstado_novedadInput[]
    connectOrCreate?: historial_novedadCreateOrConnectWithoutEstado_novedadInput | historial_novedadCreateOrConnectWithoutEstado_novedadInput[]
    upsert?: historial_novedadUpsertWithWhereUniqueWithoutEstado_novedadInput | historial_novedadUpsertWithWhereUniqueWithoutEstado_novedadInput[]
    createMany?: historial_novedadCreateManyEstado_novedadInputEnvelope
    set?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    disconnect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    delete?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    connect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    update?: historial_novedadUpdateWithWhereUniqueWithoutEstado_novedadInput | historial_novedadUpdateWithWhereUniqueWithoutEstado_novedadInput[]
    updateMany?: historial_novedadUpdateManyWithWhereWithoutEstado_novedadInput | historial_novedadUpdateManyWithWhereWithoutEstado_novedadInput[]
    deleteMany?: historial_novedadScalarWhereInput | historial_novedadScalarWhereInput[]
  }

  export type novedadUpdateManyWithoutEstado_novedadNestedInput = {
    create?: XOR<novedadCreateWithoutEstado_novedadInput, novedadUncheckedCreateWithoutEstado_novedadInput> | novedadCreateWithoutEstado_novedadInput[] | novedadUncheckedCreateWithoutEstado_novedadInput[]
    connectOrCreate?: novedadCreateOrConnectWithoutEstado_novedadInput | novedadCreateOrConnectWithoutEstado_novedadInput[]
    upsert?: novedadUpsertWithWhereUniqueWithoutEstado_novedadInput | novedadUpsertWithWhereUniqueWithoutEstado_novedadInput[]
    createMany?: novedadCreateManyEstado_novedadInputEnvelope
    set?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    disconnect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    delete?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    connect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    update?: novedadUpdateWithWhereUniqueWithoutEstado_novedadInput | novedadUpdateWithWhereUniqueWithoutEstado_novedadInput[]
    updateMany?: novedadUpdateManyWithWhereWithoutEstado_novedadInput | novedadUpdateManyWithWhereWithoutEstado_novedadInput[]
    deleteMany?: novedadScalarWhereInput | novedadScalarWhereInput[]
  }

  export type historial_novedadUncheckedUpdateManyWithoutEstado_novedadNestedInput = {
    create?: XOR<historial_novedadCreateWithoutEstado_novedadInput, historial_novedadUncheckedCreateWithoutEstado_novedadInput> | historial_novedadCreateWithoutEstado_novedadInput[] | historial_novedadUncheckedCreateWithoutEstado_novedadInput[]
    connectOrCreate?: historial_novedadCreateOrConnectWithoutEstado_novedadInput | historial_novedadCreateOrConnectWithoutEstado_novedadInput[]
    upsert?: historial_novedadUpsertWithWhereUniqueWithoutEstado_novedadInput | historial_novedadUpsertWithWhereUniqueWithoutEstado_novedadInput[]
    createMany?: historial_novedadCreateManyEstado_novedadInputEnvelope
    set?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    disconnect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    delete?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    connect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    update?: historial_novedadUpdateWithWhereUniqueWithoutEstado_novedadInput | historial_novedadUpdateWithWhereUniqueWithoutEstado_novedadInput[]
    updateMany?: historial_novedadUpdateManyWithWhereWithoutEstado_novedadInput | historial_novedadUpdateManyWithWhereWithoutEstado_novedadInput[]
    deleteMany?: historial_novedadScalarWhereInput | historial_novedadScalarWhereInput[]
  }

  export type novedadUncheckedUpdateManyWithoutEstado_novedadNestedInput = {
    create?: XOR<novedadCreateWithoutEstado_novedadInput, novedadUncheckedCreateWithoutEstado_novedadInput> | novedadCreateWithoutEstado_novedadInput[] | novedadUncheckedCreateWithoutEstado_novedadInput[]
    connectOrCreate?: novedadCreateOrConnectWithoutEstado_novedadInput | novedadCreateOrConnectWithoutEstado_novedadInput[]
    upsert?: novedadUpsertWithWhereUniqueWithoutEstado_novedadInput | novedadUpsertWithWhereUniqueWithoutEstado_novedadInput[]
    createMany?: novedadCreateManyEstado_novedadInputEnvelope
    set?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    disconnect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    delete?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    connect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    update?: novedadUpdateWithWhereUniqueWithoutEstado_novedadInput | novedadUpdateWithWhereUniqueWithoutEstado_novedadInput[]
    updateMany?: novedadUpdateManyWithWhereWithoutEstado_novedadInput | novedadUpdateManyWithWhereWithoutEstado_novedadInput[]
    deleteMany?: novedadScalarWhereInput | novedadScalarWhereInput[]
  }

  export type estado_novedadCreateNestedOneWithoutHistorial_novedadInput = {
    create?: XOR<estado_novedadCreateWithoutHistorial_novedadInput, estado_novedadUncheckedCreateWithoutHistorial_novedadInput>
    connectOrCreate?: estado_novedadCreateOrConnectWithoutHistorial_novedadInput
    connect?: estado_novedadWhereUniqueInput
  }

  export type novedadCreateNestedOneWithoutHistorial_novedadInput = {
    create?: XOR<novedadCreateWithoutHistorial_novedadInput, novedadUncheckedCreateWithoutHistorial_novedadInput>
    connectOrCreate?: novedadCreateOrConnectWithoutHistorial_novedadInput
    connect?: novedadWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutHistorial_novedadInput = {
    create?: XOR<usuarioCreateWithoutHistorial_novedadInput, usuarioUncheckedCreateWithoutHistorial_novedadInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutHistorial_novedadInput
    connect?: usuarioWhereUniqueInput
  }

  export type estado_novedadUpdateOneWithoutHistorial_novedadNestedInput = {
    create?: XOR<estado_novedadCreateWithoutHistorial_novedadInput, estado_novedadUncheckedCreateWithoutHistorial_novedadInput>
    connectOrCreate?: estado_novedadCreateOrConnectWithoutHistorial_novedadInput
    upsert?: estado_novedadUpsertWithoutHistorial_novedadInput
    disconnect?: estado_novedadWhereInput | boolean
    delete?: estado_novedadWhereInput | boolean
    connect?: estado_novedadWhereUniqueInput
    update?: XOR<XOR<estado_novedadUpdateToOneWithWhereWithoutHistorial_novedadInput, estado_novedadUpdateWithoutHistorial_novedadInput>, estado_novedadUncheckedUpdateWithoutHistorial_novedadInput>
  }

  export type novedadUpdateOneWithoutHistorial_novedadNestedInput = {
    create?: XOR<novedadCreateWithoutHistorial_novedadInput, novedadUncheckedCreateWithoutHistorial_novedadInput>
    connectOrCreate?: novedadCreateOrConnectWithoutHistorial_novedadInput
    upsert?: novedadUpsertWithoutHistorial_novedadInput
    disconnect?: novedadWhereInput | boolean
    delete?: novedadWhereInput | boolean
    connect?: novedadWhereUniqueInput
    update?: XOR<XOR<novedadUpdateToOneWithWhereWithoutHistorial_novedadInput, novedadUpdateWithoutHistorial_novedadInput>, novedadUncheckedUpdateWithoutHistorial_novedadInput>
  }

  export type usuarioUpdateOneWithoutHistorial_novedadNestedInput = {
    create?: XOR<usuarioCreateWithoutHistorial_novedadInput, usuarioUncheckedCreateWithoutHistorial_novedadInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutHistorial_novedadInput
    upsert?: usuarioUpsertWithoutHistorial_novedadInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutHistorial_novedadInput, usuarioUpdateWithoutHistorial_novedadInput>, usuarioUncheckedUpdateWithoutHistorial_novedadInput>
  }

  export type correo_logCreateNestedManyWithoutNotificacionInput = {
    create?: XOR<correo_logCreateWithoutNotificacionInput, correo_logUncheckedCreateWithoutNotificacionInput> | correo_logCreateWithoutNotificacionInput[] | correo_logUncheckedCreateWithoutNotificacionInput[]
    connectOrCreate?: correo_logCreateOrConnectWithoutNotificacionInput | correo_logCreateOrConnectWithoutNotificacionInput[]
    createMany?: correo_logCreateManyNotificacionInputEnvelope
    connect?: correo_logWhereUniqueInput | correo_logWhereUniqueInput[]
  }

  export type novedadCreateNestedOneWithoutNotificacionInput = {
    create?: XOR<novedadCreateWithoutNotificacionInput, novedadUncheckedCreateWithoutNotificacionInput>
    connectOrCreate?: novedadCreateOrConnectWithoutNotificacionInput
    connect?: novedadWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutNotificacionInput = {
    create?: XOR<usuarioCreateWithoutNotificacionInput, usuarioUncheckedCreateWithoutNotificacionInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutNotificacionInput
    connect?: usuarioWhereUniqueInput
  }

  export type correo_logUncheckedCreateNestedManyWithoutNotificacionInput = {
    create?: XOR<correo_logCreateWithoutNotificacionInput, correo_logUncheckedCreateWithoutNotificacionInput> | correo_logCreateWithoutNotificacionInput[] | correo_logUncheckedCreateWithoutNotificacionInput[]
    connectOrCreate?: correo_logCreateOrConnectWithoutNotificacionInput | correo_logCreateOrConnectWithoutNotificacionInput[]
    createMany?: correo_logCreateManyNotificacionInputEnvelope
    connect?: correo_logWhereUniqueInput | correo_logWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type correo_logUpdateManyWithoutNotificacionNestedInput = {
    create?: XOR<correo_logCreateWithoutNotificacionInput, correo_logUncheckedCreateWithoutNotificacionInput> | correo_logCreateWithoutNotificacionInput[] | correo_logUncheckedCreateWithoutNotificacionInput[]
    connectOrCreate?: correo_logCreateOrConnectWithoutNotificacionInput | correo_logCreateOrConnectWithoutNotificacionInput[]
    upsert?: correo_logUpsertWithWhereUniqueWithoutNotificacionInput | correo_logUpsertWithWhereUniqueWithoutNotificacionInput[]
    createMany?: correo_logCreateManyNotificacionInputEnvelope
    set?: correo_logWhereUniqueInput | correo_logWhereUniqueInput[]
    disconnect?: correo_logWhereUniqueInput | correo_logWhereUniqueInput[]
    delete?: correo_logWhereUniqueInput | correo_logWhereUniqueInput[]
    connect?: correo_logWhereUniqueInput | correo_logWhereUniqueInput[]
    update?: correo_logUpdateWithWhereUniqueWithoutNotificacionInput | correo_logUpdateWithWhereUniqueWithoutNotificacionInput[]
    updateMany?: correo_logUpdateManyWithWhereWithoutNotificacionInput | correo_logUpdateManyWithWhereWithoutNotificacionInput[]
    deleteMany?: correo_logScalarWhereInput | correo_logScalarWhereInput[]
  }

  export type novedadUpdateOneWithoutNotificacionNestedInput = {
    create?: XOR<novedadCreateWithoutNotificacionInput, novedadUncheckedCreateWithoutNotificacionInput>
    connectOrCreate?: novedadCreateOrConnectWithoutNotificacionInput
    upsert?: novedadUpsertWithoutNotificacionInput
    disconnect?: novedadWhereInput | boolean
    delete?: novedadWhereInput | boolean
    connect?: novedadWhereUniqueInput
    update?: XOR<XOR<novedadUpdateToOneWithWhereWithoutNotificacionInput, novedadUpdateWithoutNotificacionInput>, novedadUncheckedUpdateWithoutNotificacionInput>
  }

  export type usuarioUpdateOneWithoutNotificacionNestedInput = {
    create?: XOR<usuarioCreateWithoutNotificacionInput, usuarioUncheckedCreateWithoutNotificacionInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutNotificacionInput
    upsert?: usuarioUpsertWithoutNotificacionInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutNotificacionInput, usuarioUpdateWithoutNotificacionInput>, usuarioUncheckedUpdateWithoutNotificacionInput>
  }

  export type correo_logUncheckedUpdateManyWithoutNotificacionNestedInput = {
    create?: XOR<correo_logCreateWithoutNotificacionInput, correo_logUncheckedCreateWithoutNotificacionInput> | correo_logCreateWithoutNotificacionInput[] | correo_logUncheckedCreateWithoutNotificacionInput[]
    connectOrCreate?: correo_logCreateOrConnectWithoutNotificacionInput | correo_logCreateOrConnectWithoutNotificacionInput[]
    upsert?: correo_logUpsertWithWhereUniqueWithoutNotificacionInput | correo_logUpsertWithWhereUniqueWithoutNotificacionInput[]
    createMany?: correo_logCreateManyNotificacionInputEnvelope
    set?: correo_logWhereUniqueInput | correo_logWhereUniqueInput[]
    disconnect?: correo_logWhereUniqueInput | correo_logWhereUniqueInput[]
    delete?: correo_logWhereUniqueInput | correo_logWhereUniqueInput[]
    connect?: correo_logWhereUniqueInput | correo_logWhereUniqueInput[]
    update?: correo_logUpdateWithWhereUniqueWithoutNotificacionInput | correo_logUpdateWithWhereUniqueWithoutNotificacionInput[]
    updateMany?: correo_logUpdateManyWithWhereWithoutNotificacionInput | correo_logUpdateManyWithWhereWithoutNotificacionInput[]
    deleteMany?: correo_logScalarWhereInput | correo_logScalarWhereInput[]
  }

  export type archivo_adjuntoCreateNestedManyWithoutNovedadInput = {
    create?: XOR<archivo_adjuntoCreateWithoutNovedadInput, archivo_adjuntoUncheckedCreateWithoutNovedadInput> | archivo_adjuntoCreateWithoutNovedadInput[] | archivo_adjuntoUncheckedCreateWithoutNovedadInput[]
    connectOrCreate?: archivo_adjuntoCreateOrConnectWithoutNovedadInput | archivo_adjuntoCreateOrConnectWithoutNovedadInput[]
    createMany?: archivo_adjuntoCreateManyNovedadInputEnvelope
    connect?: archivo_adjuntoWhereUniqueInput | archivo_adjuntoWhereUniqueInput[]
  }

  export type historial_novedadCreateNestedManyWithoutNovedadInput = {
    create?: XOR<historial_novedadCreateWithoutNovedadInput, historial_novedadUncheckedCreateWithoutNovedadInput> | historial_novedadCreateWithoutNovedadInput[] | historial_novedadUncheckedCreateWithoutNovedadInput[]
    connectOrCreate?: historial_novedadCreateOrConnectWithoutNovedadInput | historial_novedadCreateOrConnectWithoutNovedadInput[]
    createMany?: historial_novedadCreateManyNovedadInputEnvelope
    connect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
  }

  export type notificacionCreateNestedManyWithoutNovedadInput = {
    create?: XOR<notificacionCreateWithoutNovedadInput, notificacionUncheckedCreateWithoutNovedadInput> | notificacionCreateWithoutNovedadInput[] | notificacionUncheckedCreateWithoutNovedadInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutNovedadInput | notificacionCreateOrConnectWithoutNovedadInput[]
    createMany?: notificacionCreateManyNovedadInputEnvelope
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
  }

  export type estado_novedadCreateNestedOneWithoutNovedadInput = {
    create?: XOR<estado_novedadCreateWithoutNovedadInput, estado_novedadUncheckedCreateWithoutNovedadInput>
    connectOrCreate?: estado_novedadCreateOrConnectWithoutNovedadInput
    connect?: estado_novedadWhereUniqueInput
  }

  export type tipo_novedadCreateNestedOneWithoutNovedadInput = {
    create?: XOR<tipo_novedadCreateWithoutNovedadInput, tipo_novedadUncheckedCreateWithoutNovedadInput>
    connectOrCreate?: tipo_novedadCreateOrConnectWithoutNovedadInput
    connect?: tipo_novedadWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutNovedadInput = {
    create?: XOR<usuarioCreateWithoutNovedadInput, usuarioUncheckedCreateWithoutNovedadInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutNovedadInput
    connect?: usuarioWhereUniqueInput
  }

  export type archivo_adjuntoUncheckedCreateNestedManyWithoutNovedadInput = {
    create?: XOR<archivo_adjuntoCreateWithoutNovedadInput, archivo_adjuntoUncheckedCreateWithoutNovedadInput> | archivo_adjuntoCreateWithoutNovedadInput[] | archivo_adjuntoUncheckedCreateWithoutNovedadInput[]
    connectOrCreate?: archivo_adjuntoCreateOrConnectWithoutNovedadInput | archivo_adjuntoCreateOrConnectWithoutNovedadInput[]
    createMany?: archivo_adjuntoCreateManyNovedadInputEnvelope
    connect?: archivo_adjuntoWhereUniqueInput | archivo_adjuntoWhereUniqueInput[]
  }

  export type historial_novedadUncheckedCreateNestedManyWithoutNovedadInput = {
    create?: XOR<historial_novedadCreateWithoutNovedadInput, historial_novedadUncheckedCreateWithoutNovedadInput> | historial_novedadCreateWithoutNovedadInput[] | historial_novedadUncheckedCreateWithoutNovedadInput[]
    connectOrCreate?: historial_novedadCreateOrConnectWithoutNovedadInput | historial_novedadCreateOrConnectWithoutNovedadInput[]
    createMany?: historial_novedadCreateManyNovedadInputEnvelope
    connect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
  }

  export type notificacionUncheckedCreateNestedManyWithoutNovedadInput = {
    create?: XOR<notificacionCreateWithoutNovedadInput, notificacionUncheckedCreateWithoutNovedadInput> | notificacionCreateWithoutNovedadInput[] | notificacionUncheckedCreateWithoutNovedadInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutNovedadInput | notificacionCreateOrConnectWithoutNovedadInput[]
    createMany?: notificacionCreateManyNovedadInputEnvelope
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
  }

  export type archivo_adjuntoUpdateManyWithoutNovedadNestedInput = {
    create?: XOR<archivo_adjuntoCreateWithoutNovedadInput, archivo_adjuntoUncheckedCreateWithoutNovedadInput> | archivo_adjuntoCreateWithoutNovedadInput[] | archivo_adjuntoUncheckedCreateWithoutNovedadInput[]
    connectOrCreate?: archivo_adjuntoCreateOrConnectWithoutNovedadInput | archivo_adjuntoCreateOrConnectWithoutNovedadInput[]
    upsert?: archivo_adjuntoUpsertWithWhereUniqueWithoutNovedadInput | archivo_adjuntoUpsertWithWhereUniqueWithoutNovedadInput[]
    createMany?: archivo_adjuntoCreateManyNovedadInputEnvelope
    set?: archivo_adjuntoWhereUniqueInput | archivo_adjuntoWhereUniqueInput[]
    disconnect?: archivo_adjuntoWhereUniqueInput | archivo_adjuntoWhereUniqueInput[]
    delete?: archivo_adjuntoWhereUniqueInput | archivo_adjuntoWhereUniqueInput[]
    connect?: archivo_adjuntoWhereUniqueInput | archivo_adjuntoWhereUniqueInput[]
    update?: archivo_adjuntoUpdateWithWhereUniqueWithoutNovedadInput | archivo_adjuntoUpdateWithWhereUniqueWithoutNovedadInput[]
    updateMany?: archivo_adjuntoUpdateManyWithWhereWithoutNovedadInput | archivo_adjuntoUpdateManyWithWhereWithoutNovedadInput[]
    deleteMany?: archivo_adjuntoScalarWhereInput | archivo_adjuntoScalarWhereInput[]
  }

  export type historial_novedadUpdateManyWithoutNovedadNestedInput = {
    create?: XOR<historial_novedadCreateWithoutNovedadInput, historial_novedadUncheckedCreateWithoutNovedadInput> | historial_novedadCreateWithoutNovedadInput[] | historial_novedadUncheckedCreateWithoutNovedadInput[]
    connectOrCreate?: historial_novedadCreateOrConnectWithoutNovedadInput | historial_novedadCreateOrConnectWithoutNovedadInput[]
    upsert?: historial_novedadUpsertWithWhereUniqueWithoutNovedadInput | historial_novedadUpsertWithWhereUniqueWithoutNovedadInput[]
    createMany?: historial_novedadCreateManyNovedadInputEnvelope
    set?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    disconnect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    delete?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    connect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    update?: historial_novedadUpdateWithWhereUniqueWithoutNovedadInput | historial_novedadUpdateWithWhereUniqueWithoutNovedadInput[]
    updateMany?: historial_novedadUpdateManyWithWhereWithoutNovedadInput | historial_novedadUpdateManyWithWhereWithoutNovedadInput[]
    deleteMany?: historial_novedadScalarWhereInput | historial_novedadScalarWhereInput[]
  }

  export type notificacionUpdateManyWithoutNovedadNestedInput = {
    create?: XOR<notificacionCreateWithoutNovedadInput, notificacionUncheckedCreateWithoutNovedadInput> | notificacionCreateWithoutNovedadInput[] | notificacionUncheckedCreateWithoutNovedadInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutNovedadInput | notificacionCreateOrConnectWithoutNovedadInput[]
    upsert?: notificacionUpsertWithWhereUniqueWithoutNovedadInput | notificacionUpsertWithWhereUniqueWithoutNovedadInput[]
    createMany?: notificacionCreateManyNovedadInputEnvelope
    set?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    disconnect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    delete?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    update?: notificacionUpdateWithWhereUniqueWithoutNovedadInput | notificacionUpdateWithWhereUniqueWithoutNovedadInput[]
    updateMany?: notificacionUpdateManyWithWhereWithoutNovedadInput | notificacionUpdateManyWithWhereWithoutNovedadInput[]
    deleteMany?: notificacionScalarWhereInput | notificacionScalarWhereInput[]
  }

  export type estado_novedadUpdateOneWithoutNovedadNestedInput = {
    create?: XOR<estado_novedadCreateWithoutNovedadInput, estado_novedadUncheckedCreateWithoutNovedadInput>
    connectOrCreate?: estado_novedadCreateOrConnectWithoutNovedadInput
    upsert?: estado_novedadUpsertWithoutNovedadInput
    disconnect?: estado_novedadWhereInput | boolean
    delete?: estado_novedadWhereInput | boolean
    connect?: estado_novedadWhereUniqueInput
    update?: XOR<XOR<estado_novedadUpdateToOneWithWhereWithoutNovedadInput, estado_novedadUpdateWithoutNovedadInput>, estado_novedadUncheckedUpdateWithoutNovedadInput>
  }

  export type tipo_novedadUpdateOneWithoutNovedadNestedInput = {
    create?: XOR<tipo_novedadCreateWithoutNovedadInput, tipo_novedadUncheckedCreateWithoutNovedadInput>
    connectOrCreate?: tipo_novedadCreateOrConnectWithoutNovedadInput
    upsert?: tipo_novedadUpsertWithoutNovedadInput
    disconnect?: tipo_novedadWhereInput | boolean
    delete?: tipo_novedadWhereInput | boolean
    connect?: tipo_novedadWhereUniqueInput
    update?: XOR<XOR<tipo_novedadUpdateToOneWithWhereWithoutNovedadInput, tipo_novedadUpdateWithoutNovedadInput>, tipo_novedadUncheckedUpdateWithoutNovedadInput>
  }

  export type usuarioUpdateOneWithoutNovedadNestedInput = {
    create?: XOR<usuarioCreateWithoutNovedadInput, usuarioUncheckedCreateWithoutNovedadInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutNovedadInput
    upsert?: usuarioUpsertWithoutNovedadInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutNovedadInput, usuarioUpdateWithoutNovedadInput>, usuarioUncheckedUpdateWithoutNovedadInput>
  }

  export type archivo_adjuntoUncheckedUpdateManyWithoutNovedadNestedInput = {
    create?: XOR<archivo_adjuntoCreateWithoutNovedadInput, archivo_adjuntoUncheckedCreateWithoutNovedadInput> | archivo_adjuntoCreateWithoutNovedadInput[] | archivo_adjuntoUncheckedCreateWithoutNovedadInput[]
    connectOrCreate?: archivo_adjuntoCreateOrConnectWithoutNovedadInput | archivo_adjuntoCreateOrConnectWithoutNovedadInput[]
    upsert?: archivo_adjuntoUpsertWithWhereUniqueWithoutNovedadInput | archivo_adjuntoUpsertWithWhereUniqueWithoutNovedadInput[]
    createMany?: archivo_adjuntoCreateManyNovedadInputEnvelope
    set?: archivo_adjuntoWhereUniqueInput | archivo_adjuntoWhereUniqueInput[]
    disconnect?: archivo_adjuntoWhereUniqueInput | archivo_adjuntoWhereUniqueInput[]
    delete?: archivo_adjuntoWhereUniqueInput | archivo_adjuntoWhereUniqueInput[]
    connect?: archivo_adjuntoWhereUniqueInput | archivo_adjuntoWhereUniqueInput[]
    update?: archivo_adjuntoUpdateWithWhereUniqueWithoutNovedadInput | archivo_adjuntoUpdateWithWhereUniqueWithoutNovedadInput[]
    updateMany?: archivo_adjuntoUpdateManyWithWhereWithoutNovedadInput | archivo_adjuntoUpdateManyWithWhereWithoutNovedadInput[]
    deleteMany?: archivo_adjuntoScalarWhereInput | archivo_adjuntoScalarWhereInput[]
  }

  export type historial_novedadUncheckedUpdateManyWithoutNovedadNestedInput = {
    create?: XOR<historial_novedadCreateWithoutNovedadInput, historial_novedadUncheckedCreateWithoutNovedadInput> | historial_novedadCreateWithoutNovedadInput[] | historial_novedadUncheckedCreateWithoutNovedadInput[]
    connectOrCreate?: historial_novedadCreateOrConnectWithoutNovedadInput | historial_novedadCreateOrConnectWithoutNovedadInput[]
    upsert?: historial_novedadUpsertWithWhereUniqueWithoutNovedadInput | historial_novedadUpsertWithWhereUniqueWithoutNovedadInput[]
    createMany?: historial_novedadCreateManyNovedadInputEnvelope
    set?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    disconnect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    delete?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    connect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    update?: historial_novedadUpdateWithWhereUniqueWithoutNovedadInput | historial_novedadUpdateWithWhereUniqueWithoutNovedadInput[]
    updateMany?: historial_novedadUpdateManyWithWhereWithoutNovedadInput | historial_novedadUpdateManyWithWhereWithoutNovedadInput[]
    deleteMany?: historial_novedadScalarWhereInput | historial_novedadScalarWhereInput[]
  }

  export type notificacionUncheckedUpdateManyWithoutNovedadNestedInput = {
    create?: XOR<notificacionCreateWithoutNovedadInput, notificacionUncheckedCreateWithoutNovedadInput> | notificacionCreateWithoutNovedadInput[] | notificacionUncheckedCreateWithoutNovedadInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutNovedadInput | notificacionCreateOrConnectWithoutNovedadInput[]
    upsert?: notificacionUpsertWithWhereUniqueWithoutNovedadInput | notificacionUpsertWithWhereUniqueWithoutNovedadInput[]
    createMany?: notificacionCreateManyNovedadInputEnvelope
    set?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    disconnect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    delete?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    update?: notificacionUpdateWithWhereUniqueWithoutNovedadInput | notificacionUpdateWithWhereUniqueWithoutNovedadInput[]
    updateMany?: notificacionUpdateManyWithWhereWithoutNovedadInput | notificacionUpdateManyWithWhereWithoutNovedadInput[]
    deleteMany?: notificacionScalarWhereInput | notificacionScalarWhereInput[]
  }

  export type usuario_rolCreateNestedManyWithoutRolInput = {
    create?: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput> | usuario_rolCreateWithoutRolInput[] | usuario_rolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutRolInput | usuario_rolCreateOrConnectWithoutRolInput[]
    createMany?: usuario_rolCreateManyRolInputEnvelope
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
  }

  export type usuario_rolUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput> | usuario_rolCreateWithoutRolInput[] | usuario_rolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutRolInput | usuario_rolCreateOrConnectWithoutRolInput[]
    createMany?: usuario_rolCreateManyRolInputEnvelope
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
  }

  export type usuario_rolUpdateManyWithoutRolNestedInput = {
    create?: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput> | usuario_rolCreateWithoutRolInput[] | usuario_rolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutRolInput | usuario_rolCreateOrConnectWithoutRolInput[]
    upsert?: usuario_rolUpsertWithWhereUniqueWithoutRolInput | usuario_rolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: usuario_rolCreateManyRolInputEnvelope
    set?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    disconnect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    delete?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    update?: usuario_rolUpdateWithWhereUniqueWithoutRolInput | usuario_rolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: usuario_rolUpdateManyWithWhereWithoutRolInput | usuario_rolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
  }

  export type usuario_rolUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput> | usuario_rolCreateWithoutRolInput[] | usuario_rolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutRolInput | usuario_rolCreateOrConnectWithoutRolInput[]
    upsert?: usuario_rolUpsertWithWhereUniqueWithoutRolInput | usuario_rolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: usuario_rolCreateManyRolInputEnvelope
    set?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    disconnect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    delete?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    update?: usuario_rolUpdateWithWhereUniqueWithoutRolInput | usuario_rolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: usuario_rolUpdateManyWithWhereWithoutRolInput | usuario_rolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
  }

  export type novedadCreateNestedManyWithoutTipo_novedadInput = {
    create?: XOR<novedadCreateWithoutTipo_novedadInput, novedadUncheckedCreateWithoutTipo_novedadInput> | novedadCreateWithoutTipo_novedadInput[] | novedadUncheckedCreateWithoutTipo_novedadInput[]
    connectOrCreate?: novedadCreateOrConnectWithoutTipo_novedadInput | novedadCreateOrConnectWithoutTipo_novedadInput[]
    createMany?: novedadCreateManyTipo_novedadInputEnvelope
    connect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
  }

  export type novedadUncheckedCreateNestedManyWithoutTipo_novedadInput = {
    create?: XOR<novedadCreateWithoutTipo_novedadInput, novedadUncheckedCreateWithoutTipo_novedadInput> | novedadCreateWithoutTipo_novedadInput[] | novedadUncheckedCreateWithoutTipo_novedadInput[]
    connectOrCreate?: novedadCreateOrConnectWithoutTipo_novedadInput | novedadCreateOrConnectWithoutTipo_novedadInput[]
    createMany?: novedadCreateManyTipo_novedadInputEnvelope
    connect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
  }

  export type novedadUpdateManyWithoutTipo_novedadNestedInput = {
    create?: XOR<novedadCreateWithoutTipo_novedadInput, novedadUncheckedCreateWithoutTipo_novedadInput> | novedadCreateWithoutTipo_novedadInput[] | novedadUncheckedCreateWithoutTipo_novedadInput[]
    connectOrCreate?: novedadCreateOrConnectWithoutTipo_novedadInput | novedadCreateOrConnectWithoutTipo_novedadInput[]
    upsert?: novedadUpsertWithWhereUniqueWithoutTipo_novedadInput | novedadUpsertWithWhereUniqueWithoutTipo_novedadInput[]
    createMany?: novedadCreateManyTipo_novedadInputEnvelope
    set?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    disconnect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    delete?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    connect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    update?: novedadUpdateWithWhereUniqueWithoutTipo_novedadInput | novedadUpdateWithWhereUniqueWithoutTipo_novedadInput[]
    updateMany?: novedadUpdateManyWithWhereWithoutTipo_novedadInput | novedadUpdateManyWithWhereWithoutTipo_novedadInput[]
    deleteMany?: novedadScalarWhereInput | novedadScalarWhereInput[]
  }

  export type novedadUncheckedUpdateManyWithoutTipo_novedadNestedInput = {
    create?: XOR<novedadCreateWithoutTipo_novedadInput, novedadUncheckedCreateWithoutTipo_novedadInput> | novedadCreateWithoutTipo_novedadInput[] | novedadUncheckedCreateWithoutTipo_novedadInput[]
    connectOrCreate?: novedadCreateOrConnectWithoutTipo_novedadInput | novedadCreateOrConnectWithoutTipo_novedadInput[]
    upsert?: novedadUpsertWithWhereUniqueWithoutTipo_novedadInput | novedadUpsertWithWhereUniqueWithoutTipo_novedadInput[]
    createMany?: novedadCreateManyTipo_novedadInputEnvelope
    set?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    disconnect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    delete?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    connect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    update?: novedadUpdateWithWhereUniqueWithoutTipo_novedadInput | novedadUpdateWithWhereUniqueWithoutTipo_novedadInput[]
    updateMany?: novedadUpdateManyWithWhereWithoutTipo_novedadInput | novedadUpdateManyWithWhereWithoutTipo_novedadInput[]
    deleteMany?: novedadScalarWhereInput | novedadScalarWhereInput[]
  }

  export type historial_novedadCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<historial_novedadCreateWithoutUsuarioInput, historial_novedadUncheckedCreateWithoutUsuarioInput> | historial_novedadCreateWithoutUsuarioInput[] | historial_novedadUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: historial_novedadCreateOrConnectWithoutUsuarioInput | historial_novedadCreateOrConnectWithoutUsuarioInput[]
    createMany?: historial_novedadCreateManyUsuarioInputEnvelope
    connect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
  }

  export type notificacionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<notificacionCreateWithoutUsuarioInput, notificacionUncheckedCreateWithoutUsuarioInput> | notificacionCreateWithoutUsuarioInput[] | notificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutUsuarioInput | notificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: notificacionCreateManyUsuarioInputEnvelope
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
  }

  export type novedadCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<novedadCreateWithoutUsuarioInput, novedadUncheckedCreateWithoutUsuarioInput> | novedadCreateWithoutUsuarioInput[] | novedadUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: novedadCreateOrConnectWithoutUsuarioInput | novedadCreateOrConnectWithoutUsuarioInput[]
    createMany?: novedadCreateManyUsuarioInputEnvelope
    connect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
  }

  export type usuario_rolCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput> | usuario_rolCreateWithoutUsuarioInput[] | usuario_rolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutUsuarioInput | usuario_rolCreateOrConnectWithoutUsuarioInput[]
    createMany?: usuario_rolCreateManyUsuarioInputEnvelope
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
  }

  export type historial_novedadUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<historial_novedadCreateWithoutUsuarioInput, historial_novedadUncheckedCreateWithoutUsuarioInput> | historial_novedadCreateWithoutUsuarioInput[] | historial_novedadUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: historial_novedadCreateOrConnectWithoutUsuarioInput | historial_novedadCreateOrConnectWithoutUsuarioInput[]
    createMany?: historial_novedadCreateManyUsuarioInputEnvelope
    connect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
  }

  export type notificacionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<notificacionCreateWithoutUsuarioInput, notificacionUncheckedCreateWithoutUsuarioInput> | notificacionCreateWithoutUsuarioInput[] | notificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutUsuarioInput | notificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: notificacionCreateManyUsuarioInputEnvelope
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
  }

  export type novedadUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<novedadCreateWithoutUsuarioInput, novedadUncheckedCreateWithoutUsuarioInput> | novedadCreateWithoutUsuarioInput[] | novedadUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: novedadCreateOrConnectWithoutUsuarioInput | novedadCreateOrConnectWithoutUsuarioInput[]
    createMany?: novedadCreateManyUsuarioInputEnvelope
    connect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
  }

  export type usuario_rolUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput> | usuario_rolCreateWithoutUsuarioInput[] | usuario_rolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutUsuarioInput | usuario_rolCreateOrConnectWithoutUsuarioInput[]
    createMany?: usuario_rolCreateManyUsuarioInputEnvelope
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
  }

  export type historial_novedadUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<historial_novedadCreateWithoutUsuarioInput, historial_novedadUncheckedCreateWithoutUsuarioInput> | historial_novedadCreateWithoutUsuarioInput[] | historial_novedadUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: historial_novedadCreateOrConnectWithoutUsuarioInput | historial_novedadCreateOrConnectWithoutUsuarioInput[]
    upsert?: historial_novedadUpsertWithWhereUniqueWithoutUsuarioInput | historial_novedadUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: historial_novedadCreateManyUsuarioInputEnvelope
    set?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    disconnect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    delete?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    connect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    update?: historial_novedadUpdateWithWhereUniqueWithoutUsuarioInput | historial_novedadUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: historial_novedadUpdateManyWithWhereWithoutUsuarioInput | historial_novedadUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: historial_novedadScalarWhereInput | historial_novedadScalarWhereInput[]
  }

  export type notificacionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<notificacionCreateWithoutUsuarioInput, notificacionUncheckedCreateWithoutUsuarioInput> | notificacionCreateWithoutUsuarioInput[] | notificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutUsuarioInput | notificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: notificacionUpsertWithWhereUniqueWithoutUsuarioInput | notificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: notificacionCreateManyUsuarioInputEnvelope
    set?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    disconnect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    delete?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    update?: notificacionUpdateWithWhereUniqueWithoutUsuarioInput | notificacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: notificacionUpdateManyWithWhereWithoutUsuarioInput | notificacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: notificacionScalarWhereInput | notificacionScalarWhereInput[]
  }

  export type novedadUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<novedadCreateWithoutUsuarioInput, novedadUncheckedCreateWithoutUsuarioInput> | novedadCreateWithoutUsuarioInput[] | novedadUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: novedadCreateOrConnectWithoutUsuarioInput | novedadCreateOrConnectWithoutUsuarioInput[]
    upsert?: novedadUpsertWithWhereUniqueWithoutUsuarioInput | novedadUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: novedadCreateManyUsuarioInputEnvelope
    set?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    disconnect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    delete?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    connect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    update?: novedadUpdateWithWhereUniqueWithoutUsuarioInput | novedadUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: novedadUpdateManyWithWhereWithoutUsuarioInput | novedadUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: novedadScalarWhereInput | novedadScalarWhereInput[]
  }

  export type usuario_rolUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput> | usuario_rolCreateWithoutUsuarioInput[] | usuario_rolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutUsuarioInput | usuario_rolCreateOrConnectWithoutUsuarioInput[]
    upsert?: usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput | usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: usuario_rolCreateManyUsuarioInputEnvelope
    set?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    disconnect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    delete?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    update?: usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput | usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: usuario_rolUpdateManyWithWhereWithoutUsuarioInput | usuario_rolUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
  }

  export type historial_novedadUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<historial_novedadCreateWithoutUsuarioInput, historial_novedadUncheckedCreateWithoutUsuarioInput> | historial_novedadCreateWithoutUsuarioInput[] | historial_novedadUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: historial_novedadCreateOrConnectWithoutUsuarioInput | historial_novedadCreateOrConnectWithoutUsuarioInput[]
    upsert?: historial_novedadUpsertWithWhereUniqueWithoutUsuarioInput | historial_novedadUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: historial_novedadCreateManyUsuarioInputEnvelope
    set?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    disconnect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    delete?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    connect?: historial_novedadWhereUniqueInput | historial_novedadWhereUniqueInput[]
    update?: historial_novedadUpdateWithWhereUniqueWithoutUsuarioInput | historial_novedadUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: historial_novedadUpdateManyWithWhereWithoutUsuarioInput | historial_novedadUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: historial_novedadScalarWhereInput | historial_novedadScalarWhereInput[]
  }

  export type notificacionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<notificacionCreateWithoutUsuarioInput, notificacionUncheckedCreateWithoutUsuarioInput> | notificacionCreateWithoutUsuarioInput[] | notificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutUsuarioInput | notificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: notificacionUpsertWithWhereUniqueWithoutUsuarioInput | notificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: notificacionCreateManyUsuarioInputEnvelope
    set?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    disconnect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    delete?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    update?: notificacionUpdateWithWhereUniqueWithoutUsuarioInput | notificacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: notificacionUpdateManyWithWhereWithoutUsuarioInput | notificacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: notificacionScalarWhereInput | notificacionScalarWhereInput[]
  }

  export type novedadUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<novedadCreateWithoutUsuarioInput, novedadUncheckedCreateWithoutUsuarioInput> | novedadCreateWithoutUsuarioInput[] | novedadUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: novedadCreateOrConnectWithoutUsuarioInput | novedadCreateOrConnectWithoutUsuarioInput[]
    upsert?: novedadUpsertWithWhereUniqueWithoutUsuarioInput | novedadUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: novedadCreateManyUsuarioInputEnvelope
    set?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    disconnect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    delete?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    connect?: novedadWhereUniqueInput | novedadWhereUniqueInput[]
    update?: novedadUpdateWithWhereUniqueWithoutUsuarioInput | novedadUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: novedadUpdateManyWithWhereWithoutUsuarioInput | novedadUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: novedadScalarWhereInput | novedadScalarWhereInput[]
  }

  export type usuario_rolUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput> | usuario_rolCreateWithoutUsuarioInput[] | usuario_rolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutUsuarioInput | usuario_rolCreateOrConnectWithoutUsuarioInput[]
    upsert?: usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput | usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: usuario_rolCreateManyUsuarioInputEnvelope
    set?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    disconnect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    delete?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    update?: usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput | usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: usuario_rolUpdateManyWithWhereWithoutUsuarioInput | usuario_rolUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
  }

  export type rolCreateNestedOneWithoutUsuario_rolInput = {
    create?: XOR<rolCreateWithoutUsuario_rolInput, rolUncheckedCreateWithoutUsuario_rolInput>
    connectOrCreate?: rolCreateOrConnectWithoutUsuario_rolInput
    connect?: rolWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutUsuario_rolInput = {
    create?: XOR<usuarioCreateWithoutUsuario_rolInput, usuarioUncheckedCreateWithoutUsuario_rolInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutUsuario_rolInput
    connect?: usuarioWhereUniqueInput
  }

  export type rolUpdateOneRequiredWithoutUsuario_rolNestedInput = {
    create?: XOR<rolCreateWithoutUsuario_rolInput, rolUncheckedCreateWithoutUsuario_rolInput>
    connectOrCreate?: rolCreateOrConnectWithoutUsuario_rolInput
    upsert?: rolUpsertWithoutUsuario_rolInput
    connect?: rolWhereUniqueInput
    update?: XOR<XOR<rolUpdateToOneWithWhereWithoutUsuario_rolInput, rolUpdateWithoutUsuario_rolInput>, rolUncheckedUpdateWithoutUsuario_rolInput>
  }

  export type usuarioUpdateOneRequiredWithoutUsuario_rolNestedInput = {
    create?: XOR<usuarioCreateWithoutUsuario_rolInput, usuarioUncheckedCreateWithoutUsuario_rolInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutUsuario_rolInput
    upsert?: usuarioUpsertWithoutUsuario_rolInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutUsuario_rolInput, usuarioUpdateWithoutUsuario_rolInput>, usuarioUncheckedUpdateWithoutUsuario_rolInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type novedadCreateWithoutArchivo_adjuntoInput = {
    fecha_creacion?: Date | string | null
    descripcion?: string | null
    historial_novedad?: historial_novedadCreateNestedManyWithoutNovedadInput
    notificacion?: notificacionCreateNestedManyWithoutNovedadInput
    estado_novedad?: estado_novedadCreateNestedOneWithoutNovedadInput
    tipo_novedad?: tipo_novedadCreateNestedOneWithoutNovedadInput
    usuario?: usuarioCreateNestedOneWithoutNovedadInput
  }

  export type novedadUncheckedCreateWithoutArchivo_adjuntoInput = {
    id_novedad?: number
    id_usuario?: number | null
    id_tipo_novedad?: number | null
    id_estado_novedad?: number | null
    fecha_creacion?: Date | string | null
    descripcion?: string | null
    historial_novedad?: historial_novedadUncheckedCreateNestedManyWithoutNovedadInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutNovedadInput
  }

  export type novedadCreateOrConnectWithoutArchivo_adjuntoInput = {
    where: novedadWhereUniqueInput
    create: XOR<novedadCreateWithoutArchivo_adjuntoInput, novedadUncheckedCreateWithoutArchivo_adjuntoInput>
  }

  export type novedadUpsertWithoutArchivo_adjuntoInput = {
    update: XOR<novedadUpdateWithoutArchivo_adjuntoInput, novedadUncheckedUpdateWithoutArchivo_adjuntoInput>
    create: XOR<novedadCreateWithoutArchivo_adjuntoInput, novedadUncheckedCreateWithoutArchivo_adjuntoInput>
    where?: novedadWhereInput
  }

  export type novedadUpdateToOneWithWhereWithoutArchivo_adjuntoInput = {
    where?: novedadWhereInput
    data: XOR<novedadUpdateWithoutArchivo_adjuntoInput, novedadUncheckedUpdateWithoutArchivo_adjuntoInput>
  }

  export type novedadUpdateWithoutArchivo_adjuntoInput = {
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    historial_novedad?: historial_novedadUpdateManyWithoutNovedadNestedInput
    notificacion?: notificacionUpdateManyWithoutNovedadNestedInput
    estado_novedad?: estado_novedadUpdateOneWithoutNovedadNestedInput
    tipo_novedad?: tipo_novedadUpdateOneWithoutNovedadNestedInput
    usuario?: usuarioUpdateOneWithoutNovedadNestedInput
  }

  export type novedadUncheckedUpdateWithoutArchivo_adjuntoInput = {
    id_novedad?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_tipo_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    id_estado_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    historial_novedad?: historial_novedadUncheckedUpdateManyWithoutNovedadNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutNovedadNestedInput
  }

  export type notificacionCreateWithoutCorreo_logInput = {
    mensaje?: string | null
    fecha_creacion?: Date | string | null
    leido?: boolean | null
    novedad?: novedadCreateNestedOneWithoutNotificacionInput
    usuario?: usuarioCreateNestedOneWithoutNotificacionInput
  }

  export type notificacionUncheckedCreateWithoutCorreo_logInput = {
    id_notificacion?: number
    id_usuario?: number | null
    id_novedad?: number | null
    mensaje?: string | null
    fecha_creacion?: Date | string | null
    leido?: boolean | null
  }

  export type notificacionCreateOrConnectWithoutCorreo_logInput = {
    where: notificacionWhereUniqueInput
    create: XOR<notificacionCreateWithoutCorreo_logInput, notificacionUncheckedCreateWithoutCorreo_logInput>
  }

  export type notificacionUpsertWithoutCorreo_logInput = {
    update: XOR<notificacionUpdateWithoutCorreo_logInput, notificacionUncheckedUpdateWithoutCorreo_logInput>
    create: XOR<notificacionCreateWithoutCorreo_logInput, notificacionUncheckedCreateWithoutCorreo_logInput>
    where?: notificacionWhereInput
  }

  export type notificacionUpdateToOneWithWhereWithoutCorreo_logInput = {
    where?: notificacionWhereInput
    data: XOR<notificacionUpdateWithoutCorreo_logInput, notificacionUncheckedUpdateWithoutCorreo_logInput>
  }

  export type notificacionUpdateWithoutCorreo_logInput = {
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    novedad?: novedadUpdateOneWithoutNotificacionNestedInput
    usuario?: usuarioUpdateOneWithoutNotificacionNestedInput
  }

  export type notificacionUncheckedUpdateWithoutCorreo_logInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type historial_novedadCreateWithoutEstado_novedadInput = {
    fecha_modificacion?: Date | string | null
    comentario?: string | null
    novedad?: novedadCreateNestedOneWithoutHistorial_novedadInput
    usuario?: usuarioCreateNestedOneWithoutHistorial_novedadInput
  }

  export type historial_novedadUncheckedCreateWithoutEstado_novedadInput = {
    id_historial?: number
    id_novedad?: number | null
    fecha_modificacion?: Date | string | null
    comentario?: string | null
    id_usuario_modificacion?: number | null
  }

  export type historial_novedadCreateOrConnectWithoutEstado_novedadInput = {
    where: historial_novedadWhereUniqueInput
    create: XOR<historial_novedadCreateWithoutEstado_novedadInput, historial_novedadUncheckedCreateWithoutEstado_novedadInput>
  }

  export type historial_novedadCreateManyEstado_novedadInputEnvelope = {
    data: historial_novedadCreateManyEstado_novedadInput | historial_novedadCreateManyEstado_novedadInput[]
    skipDuplicates?: boolean
  }

  export type novedadCreateWithoutEstado_novedadInput = {
    fecha_creacion?: Date | string | null
    descripcion?: string | null
    archivo_adjunto?: archivo_adjuntoCreateNestedManyWithoutNovedadInput
    historial_novedad?: historial_novedadCreateNestedManyWithoutNovedadInput
    notificacion?: notificacionCreateNestedManyWithoutNovedadInput
    tipo_novedad?: tipo_novedadCreateNestedOneWithoutNovedadInput
    usuario?: usuarioCreateNestedOneWithoutNovedadInput
  }

  export type novedadUncheckedCreateWithoutEstado_novedadInput = {
    id_novedad?: number
    id_usuario?: number | null
    id_tipo_novedad?: number | null
    fecha_creacion?: Date | string | null
    descripcion?: string | null
    archivo_adjunto?: archivo_adjuntoUncheckedCreateNestedManyWithoutNovedadInput
    historial_novedad?: historial_novedadUncheckedCreateNestedManyWithoutNovedadInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutNovedadInput
  }

  export type novedadCreateOrConnectWithoutEstado_novedadInput = {
    where: novedadWhereUniqueInput
    create: XOR<novedadCreateWithoutEstado_novedadInput, novedadUncheckedCreateWithoutEstado_novedadInput>
  }

  export type novedadCreateManyEstado_novedadInputEnvelope = {
    data: novedadCreateManyEstado_novedadInput | novedadCreateManyEstado_novedadInput[]
    skipDuplicates?: boolean
  }

  export type historial_novedadUpsertWithWhereUniqueWithoutEstado_novedadInput = {
    where: historial_novedadWhereUniqueInput
    update: XOR<historial_novedadUpdateWithoutEstado_novedadInput, historial_novedadUncheckedUpdateWithoutEstado_novedadInput>
    create: XOR<historial_novedadCreateWithoutEstado_novedadInput, historial_novedadUncheckedCreateWithoutEstado_novedadInput>
  }

  export type historial_novedadUpdateWithWhereUniqueWithoutEstado_novedadInput = {
    where: historial_novedadWhereUniqueInput
    data: XOR<historial_novedadUpdateWithoutEstado_novedadInput, historial_novedadUncheckedUpdateWithoutEstado_novedadInput>
  }

  export type historial_novedadUpdateManyWithWhereWithoutEstado_novedadInput = {
    where: historial_novedadScalarWhereInput
    data: XOR<historial_novedadUpdateManyMutationInput, historial_novedadUncheckedUpdateManyWithoutEstado_novedadInput>
  }

  export type historial_novedadScalarWhereInput = {
    AND?: historial_novedadScalarWhereInput | historial_novedadScalarWhereInput[]
    OR?: historial_novedadScalarWhereInput[]
    NOT?: historial_novedadScalarWhereInput | historial_novedadScalarWhereInput[]
    id_historial?: IntFilter<"historial_novedad"> | number
    id_novedad?: IntNullableFilter<"historial_novedad"> | number | null
    id_estado_novedad?: IntNullableFilter<"historial_novedad"> | number | null
    fecha_modificacion?: DateTimeNullableFilter<"historial_novedad"> | Date | string | null
    comentario?: StringNullableFilter<"historial_novedad"> | string | null
    id_usuario_modificacion?: IntNullableFilter<"historial_novedad"> | number | null
  }

  export type novedadUpsertWithWhereUniqueWithoutEstado_novedadInput = {
    where: novedadWhereUniqueInput
    update: XOR<novedadUpdateWithoutEstado_novedadInput, novedadUncheckedUpdateWithoutEstado_novedadInput>
    create: XOR<novedadCreateWithoutEstado_novedadInput, novedadUncheckedCreateWithoutEstado_novedadInput>
  }

  export type novedadUpdateWithWhereUniqueWithoutEstado_novedadInput = {
    where: novedadWhereUniqueInput
    data: XOR<novedadUpdateWithoutEstado_novedadInput, novedadUncheckedUpdateWithoutEstado_novedadInput>
  }

  export type novedadUpdateManyWithWhereWithoutEstado_novedadInput = {
    where: novedadScalarWhereInput
    data: XOR<novedadUpdateManyMutationInput, novedadUncheckedUpdateManyWithoutEstado_novedadInput>
  }

  export type novedadScalarWhereInput = {
    AND?: novedadScalarWhereInput | novedadScalarWhereInput[]
    OR?: novedadScalarWhereInput[]
    NOT?: novedadScalarWhereInput | novedadScalarWhereInput[]
    id_novedad?: IntFilter<"novedad"> | number
    id_usuario?: IntNullableFilter<"novedad"> | number | null
    id_tipo_novedad?: IntNullableFilter<"novedad"> | number | null
    id_estado_novedad?: IntNullableFilter<"novedad"> | number | null
    fecha_creacion?: DateTimeNullableFilter<"novedad"> | Date | string | null
    descripcion?: StringNullableFilter<"novedad"> | string | null
  }

  export type estado_novedadCreateWithoutHistorial_novedadInput = {
    nombre_estado: string
    novedad?: novedadCreateNestedManyWithoutEstado_novedadInput
  }

  export type estado_novedadUncheckedCreateWithoutHistorial_novedadInput = {
    id_estado_novedad?: number
    nombre_estado: string
    novedad?: novedadUncheckedCreateNestedManyWithoutEstado_novedadInput
  }

  export type estado_novedadCreateOrConnectWithoutHistorial_novedadInput = {
    where: estado_novedadWhereUniqueInput
    create: XOR<estado_novedadCreateWithoutHistorial_novedadInput, estado_novedadUncheckedCreateWithoutHistorial_novedadInput>
  }

  export type novedadCreateWithoutHistorial_novedadInput = {
    fecha_creacion?: Date | string | null
    descripcion?: string | null
    archivo_adjunto?: archivo_adjuntoCreateNestedManyWithoutNovedadInput
    notificacion?: notificacionCreateNestedManyWithoutNovedadInput
    estado_novedad?: estado_novedadCreateNestedOneWithoutNovedadInput
    tipo_novedad?: tipo_novedadCreateNestedOneWithoutNovedadInput
    usuario?: usuarioCreateNestedOneWithoutNovedadInput
  }

  export type novedadUncheckedCreateWithoutHistorial_novedadInput = {
    id_novedad?: number
    id_usuario?: number | null
    id_tipo_novedad?: number | null
    id_estado_novedad?: number | null
    fecha_creacion?: Date | string | null
    descripcion?: string | null
    archivo_adjunto?: archivo_adjuntoUncheckedCreateNestedManyWithoutNovedadInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutNovedadInput
  }

  export type novedadCreateOrConnectWithoutHistorial_novedadInput = {
    where: novedadWhereUniqueInput
    create: XOR<novedadCreateWithoutHistorial_novedadInput, novedadUncheckedCreateWithoutHistorial_novedadInput>
  }

  export type usuarioCreateWithoutHistorial_novedadInput = {
    nombre: string
    correo: string
    notificacion?: notificacionCreateNestedManyWithoutUsuarioInput
    novedad?: novedadCreateNestedManyWithoutUsuarioInput
    usuario_rol?: usuario_rolCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutHistorial_novedadInput = {
    id_usuario?: number
    nombre: string
    correo: string
    notificacion?: notificacionUncheckedCreateNestedManyWithoutUsuarioInput
    novedad?: novedadUncheckedCreateNestedManyWithoutUsuarioInput
    usuario_rol?: usuario_rolUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutHistorial_novedadInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutHistorial_novedadInput, usuarioUncheckedCreateWithoutHistorial_novedadInput>
  }

  export type estado_novedadUpsertWithoutHistorial_novedadInput = {
    update: XOR<estado_novedadUpdateWithoutHistorial_novedadInput, estado_novedadUncheckedUpdateWithoutHistorial_novedadInput>
    create: XOR<estado_novedadCreateWithoutHistorial_novedadInput, estado_novedadUncheckedCreateWithoutHistorial_novedadInput>
    where?: estado_novedadWhereInput
  }

  export type estado_novedadUpdateToOneWithWhereWithoutHistorial_novedadInput = {
    where?: estado_novedadWhereInput
    data: XOR<estado_novedadUpdateWithoutHistorial_novedadInput, estado_novedadUncheckedUpdateWithoutHistorial_novedadInput>
  }

  export type estado_novedadUpdateWithoutHistorial_novedadInput = {
    nombre_estado?: StringFieldUpdateOperationsInput | string
    novedad?: novedadUpdateManyWithoutEstado_novedadNestedInput
  }

  export type estado_novedadUncheckedUpdateWithoutHistorial_novedadInput = {
    id_estado_novedad?: IntFieldUpdateOperationsInput | number
    nombre_estado?: StringFieldUpdateOperationsInput | string
    novedad?: novedadUncheckedUpdateManyWithoutEstado_novedadNestedInput
  }

  export type novedadUpsertWithoutHistorial_novedadInput = {
    update: XOR<novedadUpdateWithoutHistorial_novedadInput, novedadUncheckedUpdateWithoutHistorial_novedadInput>
    create: XOR<novedadCreateWithoutHistorial_novedadInput, novedadUncheckedCreateWithoutHistorial_novedadInput>
    where?: novedadWhereInput
  }

  export type novedadUpdateToOneWithWhereWithoutHistorial_novedadInput = {
    where?: novedadWhereInput
    data: XOR<novedadUpdateWithoutHistorial_novedadInput, novedadUncheckedUpdateWithoutHistorial_novedadInput>
  }

  export type novedadUpdateWithoutHistorial_novedadInput = {
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    archivo_adjunto?: archivo_adjuntoUpdateManyWithoutNovedadNestedInput
    notificacion?: notificacionUpdateManyWithoutNovedadNestedInput
    estado_novedad?: estado_novedadUpdateOneWithoutNovedadNestedInput
    tipo_novedad?: tipo_novedadUpdateOneWithoutNovedadNestedInput
    usuario?: usuarioUpdateOneWithoutNovedadNestedInput
  }

  export type novedadUncheckedUpdateWithoutHistorial_novedadInput = {
    id_novedad?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_tipo_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    id_estado_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    archivo_adjunto?: archivo_adjuntoUncheckedUpdateManyWithoutNovedadNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutNovedadNestedInput
  }

  export type usuarioUpsertWithoutHistorial_novedadInput = {
    update: XOR<usuarioUpdateWithoutHistorial_novedadInput, usuarioUncheckedUpdateWithoutHistorial_novedadInput>
    create: XOR<usuarioCreateWithoutHistorial_novedadInput, usuarioUncheckedCreateWithoutHistorial_novedadInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutHistorial_novedadInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutHistorial_novedadInput, usuarioUncheckedUpdateWithoutHistorial_novedadInput>
  }

  export type usuarioUpdateWithoutHistorial_novedadInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    notificacion?: notificacionUpdateManyWithoutUsuarioNestedInput
    novedad?: novedadUpdateManyWithoutUsuarioNestedInput
    usuario_rol?: usuario_rolUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutHistorial_novedadInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    notificacion?: notificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    novedad?: novedadUncheckedUpdateManyWithoutUsuarioNestedInput
    usuario_rol?: usuario_rolUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type correo_logCreateWithoutNotificacionInput = {
    estado_envio?: string | null
    fecha_envio?: Date | string | null
    mensaje_error?: string | null
  }

  export type correo_logUncheckedCreateWithoutNotificacionInput = {
    id_log?: number
    estado_envio?: string | null
    fecha_envio?: Date | string | null
    mensaje_error?: string | null
  }

  export type correo_logCreateOrConnectWithoutNotificacionInput = {
    where: correo_logWhereUniqueInput
    create: XOR<correo_logCreateWithoutNotificacionInput, correo_logUncheckedCreateWithoutNotificacionInput>
  }

  export type correo_logCreateManyNotificacionInputEnvelope = {
    data: correo_logCreateManyNotificacionInput | correo_logCreateManyNotificacionInput[]
    skipDuplicates?: boolean
  }

  export type novedadCreateWithoutNotificacionInput = {
    fecha_creacion?: Date | string | null
    descripcion?: string | null
    archivo_adjunto?: archivo_adjuntoCreateNestedManyWithoutNovedadInput
    historial_novedad?: historial_novedadCreateNestedManyWithoutNovedadInput
    estado_novedad?: estado_novedadCreateNestedOneWithoutNovedadInput
    tipo_novedad?: tipo_novedadCreateNestedOneWithoutNovedadInput
    usuario?: usuarioCreateNestedOneWithoutNovedadInput
  }

  export type novedadUncheckedCreateWithoutNotificacionInput = {
    id_novedad?: number
    id_usuario?: number | null
    id_tipo_novedad?: number | null
    id_estado_novedad?: number | null
    fecha_creacion?: Date | string | null
    descripcion?: string | null
    archivo_adjunto?: archivo_adjuntoUncheckedCreateNestedManyWithoutNovedadInput
    historial_novedad?: historial_novedadUncheckedCreateNestedManyWithoutNovedadInput
  }

  export type novedadCreateOrConnectWithoutNotificacionInput = {
    where: novedadWhereUniqueInput
    create: XOR<novedadCreateWithoutNotificacionInput, novedadUncheckedCreateWithoutNotificacionInput>
  }

  export type usuarioCreateWithoutNotificacionInput = {
    nombre: string
    correo: string
    historial_novedad?: historial_novedadCreateNestedManyWithoutUsuarioInput
    novedad?: novedadCreateNestedManyWithoutUsuarioInput
    usuario_rol?: usuario_rolCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutNotificacionInput = {
    id_usuario?: number
    nombre: string
    correo: string
    historial_novedad?: historial_novedadUncheckedCreateNestedManyWithoutUsuarioInput
    novedad?: novedadUncheckedCreateNestedManyWithoutUsuarioInput
    usuario_rol?: usuario_rolUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutNotificacionInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutNotificacionInput, usuarioUncheckedCreateWithoutNotificacionInput>
  }

  export type correo_logUpsertWithWhereUniqueWithoutNotificacionInput = {
    where: correo_logWhereUniqueInput
    update: XOR<correo_logUpdateWithoutNotificacionInput, correo_logUncheckedUpdateWithoutNotificacionInput>
    create: XOR<correo_logCreateWithoutNotificacionInput, correo_logUncheckedCreateWithoutNotificacionInput>
  }

  export type correo_logUpdateWithWhereUniqueWithoutNotificacionInput = {
    where: correo_logWhereUniqueInput
    data: XOR<correo_logUpdateWithoutNotificacionInput, correo_logUncheckedUpdateWithoutNotificacionInput>
  }

  export type correo_logUpdateManyWithWhereWithoutNotificacionInput = {
    where: correo_logScalarWhereInput
    data: XOR<correo_logUpdateManyMutationInput, correo_logUncheckedUpdateManyWithoutNotificacionInput>
  }

  export type correo_logScalarWhereInput = {
    AND?: correo_logScalarWhereInput | correo_logScalarWhereInput[]
    OR?: correo_logScalarWhereInput[]
    NOT?: correo_logScalarWhereInput | correo_logScalarWhereInput[]
    id_log?: IntFilter<"correo_log"> | number
    id_notificacion?: IntNullableFilter<"correo_log"> | number | null
    estado_envio?: StringNullableFilter<"correo_log"> | string | null
    fecha_envio?: DateTimeNullableFilter<"correo_log"> | Date | string | null
    mensaje_error?: StringNullableFilter<"correo_log"> | string | null
  }

  export type novedadUpsertWithoutNotificacionInput = {
    update: XOR<novedadUpdateWithoutNotificacionInput, novedadUncheckedUpdateWithoutNotificacionInput>
    create: XOR<novedadCreateWithoutNotificacionInput, novedadUncheckedCreateWithoutNotificacionInput>
    where?: novedadWhereInput
  }

  export type novedadUpdateToOneWithWhereWithoutNotificacionInput = {
    where?: novedadWhereInput
    data: XOR<novedadUpdateWithoutNotificacionInput, novedadUncheckedUpdateWithoutNotificacionInput>
  }

  export type novedadUpdateWithoutNotificacionInput = {
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    archivo_adjunto?: archivo_adjuntoUpdateManyWithoutNovedadNestedInput
    historial_novedad?: historial_novedadUpdateManyWithoutNovedadNestedInput
    estado_novedad?: estado_novedadUpdateOneWithoutNovedadNestedInput
    tipo_novedad?: tipo_novedadUpdateOneWithoutNovedadNestedInput
    usuario?: usuarioUpdateOneWithoutNovedadNestedInput
  }

  export type novedadUncheckedUpdateWithoutNotificacionInput = {
    id_novedad?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_tipo_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    id_estado_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    archivo_adjunto?: archivo_adjuntoUncheckedUpdateManyWithoutNovedadNestedInput
    historial_novedad?: historial_novedadUncheckedUpdateManyWithoutNovedadNestedInput
  }

  export type usuarioUpsertWithoutNotificacionInput = {
    update: XOR<usuarioUpdateWithoutNotificacionInput, usuarioUncheckedUpdateWithoutNotificacionInput>
    create: XOR<usuarioCreateWithoutNotificacionInput, usuarioUncheckedCreateWithoutNotificacionInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutNotificacionInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutNotificacionInput, usuarioUncheckedUpdateWithoutNotificacionInput>
  }

  export type usuarioUpdateWithoutNotificacionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    historial_novedad?: historial_novedadUpdateManyWithoutUsuarioNestedInput
    novedad?: novedadUpdateManyWithoutUsuarioNestedInput
    usuario_rol?: usuario_rolUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutNotificacionInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    historial_novedad?: historial_novedadUncheckedUpdateManyWithoutUsuarioNestedInput
    novedad?: novedadUncheckedUpdateManyWithoutUsuarioNestedInput
    usuario_rol?: usuario_rolUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type archivo_adjuntoCreateWithoutNovedadInput = {
    nombre_archivo?: string | null
    ruta_archivo?: string | null
    fecha_subida?: Date | string | null
  }

  export type archivo_adjuntoUncheckedCreateWithoutNovedadInput = {
    id_archivo?: number
    nombre_archivo?: string | null
    ruta_archivo?: string | null
    fecha_subida?: Date | string | null
  }

  export type archivo_adjuntoCreateOrConnectWithoutNovedadInput = {
    where: archivo_adjuntoWhereUniqueInput
    create: XOR<archivo_adjuntoCreateWithoutNovedadInput, archivo_adjuntoUncheckedCreateWithoutNovedadInput>
  }

  export type archivo_adjuntoCreateManyNovedadInputEnvelope = {
    data: archivo_adjuntoCreateManyNovedadInput | archivo_adjuntoCreateManyNovedadInput[]
    skipDuplicates?: boolean
  }

  export type historial_novedadCreateWithoutNovedadInput = {
    fecha_modificacion?: Date | string | null
    comentario?: string | null
    estado_novedad?: estado_novedadCreateNestedOneWithoutHistorial_novedadInput
    usuario?: usuarioCreateNestedOneWithoutHistorial_novedadInput
  }

  export type historial_novedadUncheckedCreateWithoutNovedadInput = {
    id_historial?: number
    id_estado_novedad?: number | null
    fecha_modificacion?: Date | string | null
    comentario?: string | null
    id_usuario_modificacion?: number | null
  }

  export type historial_novedadCreateOrConnectWithoutNovedadInput = {
    where: historial_novedadWhereUniqueInput
    create: XOR<historial_novedadCreateWithoutNovedadInput, historial_novedadUncheckedCreateWithoutNovedadInput>
  }

  export type historial_novedadCreateManyNovedadInputEnvelope = {
    data: historial_novedadCreateManyNovedadInput | historial_novedadCreateManyNovedadInput[]
    skipDuplicates?: boolean
  }

  export type notificacionCreateWithoutNovedadInput = {
    mensaje?: string | null
    fecha_creacion?: Date | string | null
    leido?: boolean | null
    correo_log?: correo_logCreateNestedManyWithoutNotificacionInput
    usuario?: usuarioCreateNestedOneWithoutNotificacionInput
  }

  export type notificacionUncheckedCreateWithoutNovedadInput = {
    id_notificacion?: number
    id_usuario?: number | null
    mensaje?: string | null
    fecha_creacion?: Date | string | null
    leido?: boolean | null
    correo_log?: correo_logUncheckedCreateNestedManyWithoutNotificacionInput
  }

  export type notificacionCreateOrConnectWithoutNovedadInput = {
    where: notificacionWhereUniqueInput
    create: XOR<notificacionCreateWithoutNovedadInput, notificacionUncheckedCreateWithoutNovedadInput>
  }

  export type notificacionCreateManyNovedadInputEnvelope = {
    data: notificacionCreateManyNovedadInput | notificacionCreateManyNovedadInput[]
    skipDuplicates?: boolean
  }

  export type estado_novedadCreateWithoutNovedadInput = {
    nombre_estado: string
    historial_novedad?: historial_novedadCreateNestedManyWithoutEstado_novedadInput
  }

  export type estado_novedadUncheckedCreateWithoutNovedadInput = {
    id_estado_novedad?: number
    nombre_estado: string
    historial_novedad?: historial_novedadUncheckedCreateNestedManyWithoutEstado_novedadInput
  }

  export type estado_novedadCreateOrConnectWithoutNovedadInput = {
    where: estado_novedadWhereUniqueInput
    create: XOR<estado_novedadCreateWithoutNovedadInput, estado_novedadUncheckedCreateWithoutNovedadInput>
  }

  export type tipo_novedadCreateWithoutNovedadInput = {
    nombre_tipo: string
    codigo: string
  }

  export type tipo_novedadUncheckedCreateWithoutNovedadInput = {
    id_tipo_novedad?: number
    nombre_tipo: string
    codigo: string
  }

  export type tipo_novedadCreateOrConnectWithoutNovedadInput = {
    where: tipo_novedadWhereUniqueInput
    create: XOR<tipo_novedadCreateWithoutNovedadInput, tipo_novedadUncheckedCreateWithoutNovedadInput>
  }

  export type usuarioCreateWithoutNovedadInput = {
    nombre: string
    correo: string
    historial_novedad?: historial_novedadCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionCreateNestedManyWithoutUsuarioInput
    usuario_rol?: usuario_rolCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutNovedadInput = {
    id_usuario?: number
    nombre: string
    correo: string
    historial_novedad?: historial_novedadUncheckedCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutUsuarioInput
    usuario_rol?: usuario_rolUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutNovedadInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutNovedadInput, usuarioUncheckedCreateWithoutNovedadInput>
  }

  export type archivo_adjuntoUpsertWithWhereUniqueWithoutNovedadInput = {
    where: archivo_adjuntoWhereUniqueInput
    update: XOR<archivo_adjuntoUpdateWithoutNovedadInput, archivo_adjuntoUncheckedUpdateWithoutNovedadInput>
    create: XOR<archivo_adjuntoCreateWithoutNovedadInput, archivo_adjuntoUncheckedCreateWithoutNovedadInput>
  }

  export type archivo_adjuntoUpdateWithWhereUniqueWithoutNovedadInput = {
    where: archivo_adjuntoWhereUniqueInput
    data: XOR<archivo_adjuntoUpdateWithoutNovedadInput, archivo_adjuntoUncheckedUpdateWithoutNovedadInput>
  }

  export type archivo_adjuntoUpdateManyWithWhereWithoutNovedadInput = {
    where: archivo_adjuntoScalarWhereInput
    data: XOR<archivo_adjuntoUpdateManyMutationInput, archivo_adjuntoUncheckedUpdateManyWithoutNovedadInput>
  }

  export type archivo_adjuntoScalarWhereInput = {
    AND?: archivo_adjuntoScalarWhereInput | archivo_adjuntoScalarWhereInput[]
    OR?: archivo_adjuntoScalarWhereInput[]
    NOT?: archivo_adjuntoScalarWhereInput | archivo_adjuntoScalarWhereInput[]
    id_archivo?: IntFilter<"archivo_adjunto"> | number
    id_novedad?: IntNullableFilter<"archivo_adjunto"> | number | null
    nombre_archivo?: StringNullableFilter<"archivo_adjunto"> | string | null
    ruta_archivo?: StringNullableFilter<"archivo_adjunto"> | string | null
    fecha_subida?: DateTimeNullableFilter<"archivo_adjunto"> | Date | string | null
  }

  export type historial_novedadUpsertWithWhereUniqueWithoutNovedadInput = {
    where: historial_novedadWhereUniqueInput
    update: XOR<historial_novedadUpdateWithoutNovedadInput, historial_novedadUncheckedUpdateWithoutNovedadInput>
    create: XOR<historial_novedadCreateWithoutNovedadInput, historial_novedadUncheckedCreateWithoutNovedadInput>
  }

  export type historial_novedadUpdateWithWhereUniqueWithoutNovedadInput = {
    where: historial_novedadWhereUniqueInput
    data: XOR<historial_novedadUpdateWithoutNovedadInput, historial_novedadUncheckedUpdateWithoutNovedadInput>
  }

  export type historial_novedadUpdateManyWithWhereWithoutNovedadInput = {
    where: historial_novedadScalarWhereInput
    data: XOR<historial_novedadUpdateManyMutationInput, historial_novedadUncheckedUpdateManyWithoutNovedadInput>
  }

  export type notificacionUpsertWithWhereUniqueWithoutNovedadInput = {
    where: notificacionWhereUniqueInput
    update: XOR<notificacionUpdateWithoutNovedadInput, notificacionUncheckedUpdateWithoutNovedadInput>
    create: XOR<notificacionCreateWithoutNovedadInput, notificacionUncheckedCreateWithoutNovedadInput>
  }

  export type notificacionUpdateWithWhereUniqueWithoutNovedadInput = {
    where: notificacionWhereUniqueInput
    data: XOR<notificacionUpdateWithoutNovedadInput, notificacionUncheckedUpdateWithoutNovedadInput>
  }

  export type notificacionUpdateManyWithWhereWithoutNovedadInput = {
    where: notificacionScalarWhereInput
    data: XOR<notificacionUpdateManyMutationInput, notificacionUncheckedUpdateManyWithoutNovedadInput>
  }

  export type notificacionScalarWhereInput = {
    AND?: notificacionScalarWhereInput | notificacionScalarWhereInput[]
    OR?: notificacionScalarWhereInput[]
    NOT?: notificacionScalarWhereInput | notificacionScalarWhereInput[]
    id_notificacion?: IntFilter<"notificacion"> | number
    id_usuario?: IntNullableFilter<"notificacion"> | number | null
    id_novedad?: IntNullableFilter<"notificacion"> | number | null
    mensaje?: StringNullableFilter<"notificacion"> | string | null
    fecha_creacion?: DateTimeNullableFilter<"notificacion"> | Date | string | null
    leido?: BoolNullableFilter<"notificacion"> | boolean | null
  }

  export type estado_novedadUpsertWithoutNovedadInput = {
    update: XOR<estado_novedadUpdateWithoutNovedadInput, estado_novedadUncheckedUpdateWithoutNovedadInput>
    create: XOR<estado_novedadCreateWithoutNovedadInput, estado_novedadUncheckedCreateWithoutNovedadInput>
    where?: estado_novedadWhereInput
  }

  export type estado_novedadUpdateToOneWithWhereWithoutNovedadInput = {
    where?: estado_novedadWhereInput
    data: XOR<estado_novedadUpdateWithoutNovedadInput, estado_novedadUncheckedUpdateWithoutNovedadInput>
  }

  export type estado_novedadUpdateWithoutNovedadInput = {
    nombre_estado?: StringFieldUpdateOperationsInput | string
    historial_novedad?: historial_novedadUpdateManyWithoutEstado_novedadNestedInput
  }

  export type estado_novedadUncheckedUpdateWithoutNovedadInput = {
    id_estado_novedad?: IntFieldUpdateOperationsInput | number
    nombre_estado?: StringFieldUpdateOperationsInput | string
    historial_novedad?: historial_novedadUncheckedUpdateManyWithoutEstado_novedadNestedInput
  }

  export type tipo_novedadUpsertWithoutNovedadInput = {
    update: XOR<tipo_novedadUpdateWithoutNovedadInput, tipo_novedadUncheckedUpdateWithoutNovedadInput>
    create: XOR<tipo_novedadCreateWithoutNovedadInput, tipo_novedadUncheckedCreateWithoutNovedadInput>
    where?: tipo_novedadWhereInput
  }

  export type tipo_novedadUpdateToOneWithWhereWithoutNovedadInput = {
    where?: tipo_novedadWhereInput
    data: XOR<tipo_novedadUpdateWithoutNovedadInput, tipo_novedadUncheckedUpdateWithoutNovedadInput>
  }

  export type tipo_novedadUpdateWithoutNovedadInput = {
    nombre_tipo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_novedadUncheckedUpdateWithoutNovedadInput = {
    id_tipo_novedad?: IntFieldUpdateOperationsInput | number
    nombre_tipo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUpsertWithoutNovedadInput = {
    update: XOR<usuarioUpdateWithoutNovedadInput, usuarioUncheckedUpdateWithoutNovedadInput>
    create: XOR<usuarioCreateWithoutNovedadInput, usuarioUncheckedCreateWithoutNovedadInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutNovedadInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutNovedadInput, usuarioUncheckedUpdateWithoutNovedadInput>
  }

  export type usuarioUpdateWithoutNovedadInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    historial_novedad?: historial_novedadUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUpdateManyWithoutUsuarioNestedInput
    usuario_rol?: usuario_rolUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutNovedadInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    historial_novedad?: historial_novedadUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    usuario_rol?: usuario_rolUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuario_rolCreateWithoutRolInput = {
    usuario: usuarioCreateNestedOneWithoutUsuario_rolInput
  }

  export type usuario_rolUncheckedCreateWithoutRolInput = {
    id_usuario: number
  }

  export type usuario_rolCreateOrConnectWithoutRolInput = {
    where: usuario_rolWhereUniqueInput
    create: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput>
  }

  export type usuario_rolCreateManyRolInputEnvelope = {
    data: usuario_rolCreateManyRolInput | usuario_rolCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type usuario_rolUpsertWithWhereUniqueWithoutRolInput = {
    where: usuario_rolWhereUniqueInput
    update: XOR<usuario_rolUpdateWithoutRolInput, usuario_rolUncheckedUpdateWithoutRolInput>
    create: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput>
  }

  export type usuario_rolUpdateWithWhereUniqueWithoutRolInput = {
    where: usuario_rolWhereUniqueInput
    data: XOR<usuario_rolUpdateWithoutRolInput, usuario_rolUncheckedUpdateWithoutRolInput>
  }

  export type usuario_rolUpdateManyWithWhereWithoutRolInput = {
    where: usuario_rolScalarWhereInput
    data: XOR<usuario_rolUpdateManyMutationInput, usuario_rolUncheckedUpdateManyWithoutRolInput>
  }

  export type usuario_rolScalarWhereInput = {
    AND?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
    OR?: usuario_rolScalarWhereInput[]
    NOT?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
    id_usuario?: IntFilter<"usuario_rol"> | number
    id_rol?: IntFilter<"usuario_rol"> | number
  }

  export type novedadCreateWithoutTipo_novedadInput = {
    fecha_creacion?: Date | string | null
    descripcion?: string | null
    archivo_adjunto?: archivo_adjuntoCreateNestedManyWithoutNovedadInput
    historial_novedad?: historial_novedadCreateNestedManyWithoutNovedadInput
    notificacion?: notificacionCreateNestedManyWithoutNovedadInput
    estado_novedad?: estado_novedadCreateNestedOneWithoutNovedadInput
    usuario?: usuarioCreateNestedOneWithoutNovedadInput
  }

  export type novedadUncheckedCreateWithoutTipo_novedadInput = {
    id_novedad?: number
    id_usuario?: number | null
    id_estado_novedad?: number | null
    fecha_creacion?: Date | string | null
    descripcion?: string | null
    archivo_adjunto?: archivo_adjuntoUncheckedCreateNestedManyWithoutNovedadInput
    historial_novedad?: historial_novedadUncheckedCreateNestedManyWithoutNovedadInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutNovedadInput
  }

  export type novedadCreateOrConnectWithoutTipo_novedadInput = {
    where: novedadWhereUniqueInput
    create: XOR<novedadCreateWithoutTipo_novedadInput, novedadUncheckedCreateWithoutTipo_novedadInput>
  }

  export type novedadCreateManyTipo_novedadInputEnvelope = {
    data: novedadCreateManyTipo_novedadInput | novedadCreateManyTipo_novedadInput[]
    skipDuplicates?: boolean
  }

  export type novedadUpsertWithWhereUniqueWithoutTipo_novedadInput = {
    where: novedadWhereUniqueInput
    update: XOR<novedadUpdateWithoutTipo_novedadInput, novedadUncheckedUpdateWithoutTipo_novedadInput>
    create: XOR<novedadCreateWithoutTipo_novedadInput, novedadUncheckedCreateWithoutTipo_novedadInput>
  }

  export type novedadUpdateWithWhereUniqueWithoutTipo_novedadInput = {
    where: novedadWhereUniqueInput
    data: XOR<novedadUpdateWithoutTipo_novedadInput, novedadUncheckedUpdateWithoutTipo_novedadInput>
  }

  export type novedadUpdateManyWithWhereWithoutTipo_novedadInput = {
    where: novedadScalarWhereInput
    data: XOR<novedadUpdateManyMutationInput, novedadUncheckedUpdateManyWithoutTipo_novedadInput>
  }

  export type historial_novedadCreateWithoutUsuarioInput = {
    fecha_modificacion?: Date | string | null
    comentario?: string | null
    estado_novedad?: estado_novedadCreateNestedOneWithoutHistorial_novedadInput
    novedad?: novedadCreateNestedOneWithoutHistorial_novedadInput
  }

  export type historial_novedadUncheckedCreateWithoutUsuarioInput = {
    id_historial?: number
    id_novedad?: number | null
    id_estado_novedad?: number | null
    fecha_modificacion?: Date | string | null
    comentario?: string | null
  }

  export type historial_novedadCreateOrConnectWithoutUsuarioInput = {
    where: historial_novedadWhereUniqueInput
    create: XOR<historial_novedadCreateWithoutUsuarioInput, historial_novedadUncheckedCreateWithoutUsuarioInput>
  }

  export type historial_novedadCreateManyUsuarioInputEnvelope = {
    data: historial_novedadCreateManyUsuarioInput | historial_novedadCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type notificacionCreateWithoutUsuarioInput = {
    mensaje?: string | null
    fecha_creacion?: Date | string | null
    leido?: boolean | null
    correo_log?: correo_logCreateNestedManyWithoutNotificacionInput
    novedad?: novedadCreateNestedOneWithoutNotificacionInput
  }

  export type notificacionUncheckedCreateWithoutUsuarioInput = {
    id_notificacion?: number
    id_novedad?: number | null
    mensaje?: string | null
    fecha_creacion?: Date | string | null
    leido?: boolean | null
    correo_log?: correo_logUncheckedCreateNestedManyWithoutNotificacionInput
  }

  export type notificacionCreateOrConnectWithoutUsuarioInput = {
    where: notificacionWhereUniqueInput
    create: XOR<notificacionCreateWithoutUsuarioInput, notificacionUncheckedCreateWithoutUsuarioInput>
  }

  export type notificacionCreateManyUsuarioInputEnvelope = {
    data: notificacionCreateManyUsuarioInput | notificacionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type novedadCreateWithoutUsuarioInput = {
    fecha_creacion?: Date | string | null
    descripcion?: string | null
    archivo_adjunto?: archivo_adjuntoCreateNestedManyWithoutNovedadInput
    historial_novedad?: historial_novedadCreateNestedManyWithoutNovedadInput
    notificacion?: notificacionCreateNestedManyWithoutNovedadInput
    estado_novedad?: estado_novedadCreateNestedOneWithoutNovedadInput
    tipo_novedad?: tipo_novedadCreateNestedOneWithoutNovedadInput
  }

  export type novedadUncheckedCreateWithoutUsuarioInput = {
    id_novedad?: number
    id_tipo_novedad?: number | null
    id_estado_novedad?: number | null
    fecha_creacion?: Date | string | null
    descripcion?: string | null
    archivo_adjunto?: archivo_adjuntoUncheckedCreateNestedManyWithoutNovedadInput
    historial_novedad?: historial_novedadUncheckedCreateNestedManyWithoutNovedadInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutNovedadInput
  }

  export type novedadCreateOrConnectWithoutUsuarioInput = {
    where: novedadWhereUniqueInput
    create: XOR<novedadCreateWithoutUsuarioInput, novedadUncheckedCreateWithoutUsuarioInput>
  }

  export type novedadCreateManyUsuarioInputEnvelope = {
    data: novedadCreateManyUsuarioInput | novedadCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type usuario_rolCreateWithoutUsuarioInput = {
    rol: rolCreateNestedOneWithoutUsuario_rolInput
  }

  export type usuario_rolUncheckedCreateWithoutUsuarioInput = {
    id_rol: number
  }

  export type usuario_rolCreateOrConnectWithoutUsuarioInput = {
    where: usuario_rolWhereUniqueInput
    create: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput>
  }

  export type usuario_rolCreateManyUsuarioInputEnvelope = {
    data: usuario_rolCreateManyUsuarioInput | usuario_rolCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type historial_novedadUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: historial_novedadWhereUniqueInput
    update: XOR<historial_novedadUpdateWithoutUsuarioInput, historial_novedadUncheckedUpdateWithoutUsuarioInput>
    create: XOR<historial_novedadCreateWithoutUsuarioInput, historial_novedadUncheckedCreateWithoutUsuarioInput>
  }

  export type historial_novedadUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: historial_novedadWhereUniqueInput
    data: XOR<historial_novedadUpdateWithoutUsuarioInput, historial_novedadUncheckedUpdateWithoutUsuarioInput>
  }

  export type historial_novedadUpdateManyWithWhereWithoutUsuarioInput = {
    where: historial_novedadScalarWhereInput
    data: XOR<historial_novedadUpdateManyMutationInput, historial_novedadUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type notificacionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: notificacionWhereUniqueInput
    update: XOR<notificacionUpdateWithoutUsuarioInput, notificacionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<notificacionCreateWithoutUsuarioInput, notificacionUncheckedCreateWithoutUsuarioInput>
  }

  export type notificacionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: notificacionWhereUniqueInput
    data: XOR<notificacionUpdateWithoutUsuarioInput, notificacionUncheckedUpdateWithoutUsuarioInput>
  }

  export type notificacionUpdateManyWithWhereWithoutUsuarioInput = {
    where: notificacionScalarWhereInput
    data: XOR<notificacionUpdateManyMutationInput, notificacionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type novedadUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: novedadWhereUniqueInput
    update: XOR<novedadUpdateWithoutUsuarioInput, novedadUncheckedUpdateWithoutUsuarioInput>
    create: XOR<novedadCreateWithoutUsuarioInput, novedadUncheckedCreateWithoutUsuarioInput>
  }

  export type novedadUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: novedadWhereUniqueInput
    data: XOR<novedadUpdateWithoutUsuarioInput, novedadUncheckedUpdateWithoutUsuarioInput>
  }

  export type novedadUpdateManyWithWhereWithoutUsuarioInput = {
    where: novedadScalarWhereInput
    data: XOR<novedadUpdateManyMutationInput, novedadUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: usuario_rolWhereUniqueInput
    update: XOR<usuario_rolUpdateWithoutUsuarioInput, usuario_rolUncheckedUpdateWithoutUsuarioInput>
    create: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput>
  }

  export type usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: usuario_rolWhereUniqueInput
    data: XOR<usuario_rolUpdateWithoutUsuarioInput, usuario_rolUncheckedUpdateWithoutUsuarioInput>
  }

  export type usuario_rolUpdateManyWithWhereWithoutUsuarioInput = {
    where: usuario_rolScalarWhereInput
    data: XOR<usuario_rolUpdateManyMutationInput, usuario_rolUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type rolCreateWithoutUsuario_rolInput = {
    nombre_rol: string
  }

  export type rolUncheckedCreateWithoutUsuario_rolInput = {
    id_rol?: number
    nombre_rol: string
  }

  export type rolCreateOrConnectWithoutUsuario_rolInput = {
    where: rolWhereUniqueInput
    create: XOR<rolCreateWithoutUsuario_rolInput, rolUncheckedCreateWithoutUsuario_rolInput>
  }

  export type usuarioCreateWithoutUsuario_rolInput = {
    nombre: string
    correo: string
    historial_novedad?: historial_novedadCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionCreateNestedManyWithoutUsuarioInput
    novedad?: novedadCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutUsuario_rolInput = {
    id_usuario?: number
    nombre: string
    correo: string
    historial_novedad?: historial_novedadUncheckedCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutUsuarioInput
    novedad?: novedadUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutUsuario_rolInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutUsuario_rolInput, usuarioUncheckedCreateWithoutUsuario_rolInput>
  }

  export type rolUpsertWithoutUsuario_rolInput = {
    update: XOR<rolUpdateWithoutUsuario_rolInput, rolUncheckedUpdateWithoutUsuario_rolInput>
    create: XOR<rolCreateWithoutUsuario_rolInput, rolUncheckedCreateWithoutUsuario_rolInput>
    where?: rolWhereInput
  }

  export type rolUpdateToOneWithWhereWithoutUsuario_rolInput = {
    where?: rolWhereInput
    data: XOR<rolUpdateWithoutUsuario_rolInput, rolUncheckedUpdateWithoutUsuario_rolInput>
  }

  export type rolUpdateWithoutUsuario_rolInput = {
    nombre_rol?: StringFieldUpdateOperationsInput | string
  }

  export type rolUncheckedUpdateWithoutUsuario_rolInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_rol?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUpsertWithoutUsuario_rolInput = {
    update: XOR<usuarioUpdateWithoutUsuario_rolInput, usuarioUncheckedUpdateWithoutUsuario_rolInput>
    create: XOR<usuarioCreateWithoutUsuario_rolInput, usuarioUncheckedCreateWithoutUsuario_rolInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutUsuario_rolInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutUsuario_rolInput, usuarioUncheckedUpdateWithoutUsuario_rolInput>
  }

  export type usuarioUpdateWithoutUsuario_rolInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    historial_novedad?: historial_novedadUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUpdateManyWithoutUsuarioNestedInput
    novedad?: novedadUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutUsuario_rolInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    historial_novedad?: historial_novedadUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    novedad?: novedadUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type historial_novedadCreateManyEstado_novedadInput = {
    id_historial?: number
    id_novedad?: number | null
    fecha_modificacion?: Date | string | null
    comentario?: string | null
    id_usuario_modificacion?: number | null
  }

  export type novedadCreateManyEstado_novedadInput = {
    id_novedad?: number
    id_usuario?: number | null
    id_tipo_novedad?: number | null
    fecha_creacion?: Date | string | null
    descripcion?: string | null
  }

  export type historial_novedadUpdateWithoutEstado_novedadInput = {
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    novedad?: novedadUpdateOneWithoutHistorial_novedadNestedInput
    usuario?: usuarioUpdateOneWithoutHistorial_novedadNestedInput
  }

  export type historial_novedadUncheckedUpdateWithoutEstado_novedadInput = {
    id_historial?: IntFieldUpdateOperationsInput | number
    id_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_modificacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type historial_novedadUncheckedUpdateManyWithoutEstado_novedadInput = {
    id_historial?: IntFieldUpdateOperationsInput | number
    id_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_modificacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type novedadUpdateWithoutEstado_novedadInput = {
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    archivo_adjunto?: archivo_adjuntoUpdateManyWithoutNovedadNestedInput
    historial_novedad?: historial_novedadUpdateManyWithoutNovedadNestedInput
    notificacion?: notificacionUpdateManyWithoutNovedadNestedInput
    tipo_novedad?: tipo_novedadUpdateOneWithoutNovedadNestedInput
    usuario?: usuarioUpdateOneWithoutNovedadNestedInput
  }

  export type novedadUncheckedUpdateWithoutEstado_novedadInput = {
    id_novedad?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_tipo_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    archivo_adjunto?: archivo_adjuntoUncheckedUpdateManyWithoutNovedadNestedInput
    historial_novedad?: historial_novedadUncheckedUpdateManyWithoutNovedadNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutNovedadNestedInput
  }

  export type novedadUncheckedUpdateManyWithoutEstado_novedadInput = {
    id_novedad?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_tipo_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type correo_logCreateManyNotificacionInput = {
    id_log?: number
    estado_envio?: string | null
    fecha_envio?: Date | string | null
    mensaje_error?: string | null
  }

  export type correo_logUpdateWithoutNotificacionInput = {
    estado_envio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mensaje_error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type correo_logUncheckedUpdateWithoutNotificacionInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    estado_envio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mensaje_error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type correo_logUncheckedUpdateManyWithoutNotificacionInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    estado_envio?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mensaje_error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type archivo_adjuntoCreateManyNovedadInput = {
    id_archivo?: number
    nombre_archivo?: string | null
    ruta_archivo?: string | null
    fecha_subida?: Date | string | null
  }

  export type historial_novedadCreateManyNovedadInput = {
    id_historial?: number
    id_estado_novedad?: number | null
    fecha_modificacion?: Date | string | null
    comentario?: string | null
    id_usuario_modificacion?: number | null
  }

  export type notificacionCreateManyNovedadInput = {
    id_notificacion?: number
    id_usuario?: number | null
    mensaje?: string | null
    fecha_creacion?: Date | string | null
    leido?: boolean | null
  }

  export type archivo_adjuntoUpdateWithoutNovedadInput = {
    nombre_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type archivo_adjuntoUncheckedUpdateWithoutNovedadInput = {
    id_archivo?: IntFieldUpdateOperationsInput | number
    nombre_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type archivo_adjuntoUncheckedUpdateManyWithoutNovedadInput = {
    id_archivo?: IntFieldUpdateOperationsInput | number
    nombre_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type historial_novedadUpdateWithoutNovedadInput = {
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    estado_novedad?: estado_novedadUpdateOneWithoutHistorial_novedadNestedInput
    usuario?: usuarioUpdateOneWithoutHistorial_novedadNestedInput
  }

  export type historial_novedadUncheckedUpdateWithoutNovedadInput = {
    id_historial?: IntFieldUpdateOperationsInput | number
    id_estado_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_modificacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type historial_novedadUncheckedUpdateManyWithoutNovedadInput = {
    id_historial?: IntFieldUpdateOperationsInput | number
    id_estado_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_modificacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notificacionUpdateWithoutNovedadInput = {
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    correo_log?: correo_logUpdateManyWithoutNotificacionNestedInput
    usuario?: usuarioUpdateOneWithoutNotificacionNestedInput
  }

  export type notificacionUncheckedUpdateWithoutNovedadInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    correo_log?: correo_logUncheckedUpdateManyWithoutNotificacionNestedInput
  }

  export type notificacionUncheckedUpdateManyWithoutNovedadInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usuario_rolCreateManyRolInput = {
    id_usuario: number
  }

  export type usuario_rolUpdateWithoutRolInput = {
    usuario?: usuarioUpdateOneRequiredWithoutUsuario_rolNestedInput
  }

  export type usuario_rolUncheckedUpdateWithoutRolInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_rolUncheckedUpdateManyWithoutRolInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type novedadCreateManyTipo_novedadInput = {
    id_novedad?: number
    id_usuario?: number | null
    id_estado_novedad?: number | null
    fecha_creacion?: Date | string | null
    descripcion?: string | null
  }

  export type novedadUpdateWithoutTipo_novedadInput = {
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    archivo_adjunto?: archivo_adjuntoUpdateManyWithoutNovedadNestedInput
    historial_novedad?: historial_novedadUpdateManyWithoutNovedadNestedInput
    notificacion?: notificacionUpdateManyWithoutNovedadNestedInput
    estado_novedad?: estado_novedadUpdateOneWithoutNovedadNestedInput
    usuario?: usuarioUpdateOneWithoutNovedadNestedInput
  }

  export type novedadUncheckedUpdateWithoutTipo_novedadInput = {
    id_novedad?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_estado_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    archivo_adjunto?: archivo_adjuntoUncheckedUpdateManyWithoutNovedadNestedInput
    historial_novedad?: historial_novedadUncheckedUpdateManyWithoutNovedadNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutNovedadNestedInput
  }

  export type novedadUncheckedUpdateManyWithoutTipo_novedadInput = {
    id_novedad?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_estado_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historial_novedadCreateManyUsuarioInput = {
    id_historial?: number
    id_novedad?: number | null
    id_estado_novedad?: number | null
    fecha_modificacion?: Date | string | null
    comentario?: string | null
  }

  export type notificacionCreateManyUsuarioInput = {
    id_notificacion?: number
    id_novedad?: number | null
    mensaje?: string | null
    fecha_creacion?: Date | string | null
    leido?: boolean | null
  }

  export type novedadCreateManyUsuarioInput = {
    id_novedad?: number
    id_tipo_novedad?: number | null
    id_estado_novedad?: number | null
    fecha_creacion?: Date | string | null
    descripcion?: string | null
  }

  export type usuario_rolCreateManyUsuarioInput = {
    id_rol: number
  }

  export type historial_novedadUpdateWithoutUsuarioInput = {
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    estado_novedad?: estado_novedadUpdateOneWithoutHistorial_novedadNestedInput
    novedad?: novedadUpdateOneWithoutHistorial_novedadNestedInput
  }

  export type historial_novedadUncheckedUpdateWithoutUsuarioInput = {
    id_historial?: IntFieldUpdateOperationsInput | number
    id_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    id_estado_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historial_novedadUncheckedUpdateManyWithoutUsuarioInput = {
    id_historial?: IntFieldUpdateOperationsInput | number
    id_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    id_estado_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_modificacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type notificacionUpdateWithoutUsuarioInput = {
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    correo_log?: correo_logUpdateManyWithoutNotificacionNestedInput
    novedad?: novedadUpdateOneWithoutNotificacionNestedInput
  }

  export type notificacionUncheckedUpdateWithoutUsuarioInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    id_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    correo_log?: correo_logUncheckedUpdateManyWithoutNotificacionNestedInput
  }

  export type notificacionUncheckedUpdateManyWithoutUsuarioInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    id_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type novedadUpdateWithoutUsuarioInput = {
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    archivo_adjunto?: archivo_adjuntoUpdateManyWithoutNovedadNestedInput
    historial_novedad?: historial_novedadUpdateManyWithoutNovedadNestedInput
    notificacion?: notificacionUpdateManyWithoutNovedadNestedInput
    estado_novedad?: estado_novedadUpdateOneWithoutNovedadNestedInput
    tipo_novedad?: tipo_novedadUpdateOneWithoutNovedadNestedInput
  }

  export type novedadUncheckedUpdateWithoutUsuarioInput = {
    id_novedad?: IntFieldUpdateOperationsInput | number
    id_tipo_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    id_estado_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    archivo_adjunto?: archivo_adjuntoUncheckedUpdateManyWithoutNovedadNestedInput
    historial_novedad?: historial_novedadUncheckedUpdateManyWithoutNovedadNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutNovedadNestedInput
  }

  export type novedadUncheckedUpdateManyWithoutUsuarioInput = {
    id_novedad?: IntFieldUpdateOperationsInput | number
    id_tipo_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    id_estado_novedad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuario_rolUpdateWithoutUsuarioInput = {
    rol?: rolUpdateOneRequiredWithoutUsuario_rolNestedInput
  }

  export type usuario_rolUncheckedUpdateWithoutUsuarioInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_rolUncheckedUpdateManyWithoutUsuarioInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
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