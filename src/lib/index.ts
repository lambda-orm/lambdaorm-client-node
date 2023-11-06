import { OrmClient } from './orm'
export * from './IOrm'
export * from './manager'
export * from './client'
export { OrmClient } from './orm'
export const ormClient = OrmClient.instance
