import { OrmClient } from './infrastructure/adapters/orm'
export * from './application'
export * from './infrastructure'
export * from './domain'
export { OrmClient } from './infrastructure/adapters/orm'
export const ormClient = OrmClient.instance
