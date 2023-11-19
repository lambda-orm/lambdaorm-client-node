import { Orm } from './infrastructure/adapters/orm'
export * from './application'
export * from './infrastructure'
export * from './domain'
export { Orm } from './infrastructure/adapters/orm'
export const orm = Orm.instance
