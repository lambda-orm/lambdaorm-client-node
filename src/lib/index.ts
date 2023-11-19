import { Orm } from './infrastructure/adapters/orm'
export * from './application'
export * from './infrastructure'
export * from './domain'
export const orm = Orm.instance
