import { Orm } from './infrastructure/adapters/orm'
export * from './application'
export * from './infrastructure'
export * from './domain'
export * from 'lambdaorm-base'
export const orm = Orm.instance
