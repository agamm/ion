// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/routes/index').default>>>>
    }
  }
}
export {}