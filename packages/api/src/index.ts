import { Elysia } from 'elysia'

import { todosRouter } from './modules/todos'

export const app = new Elysia({ prefix: '/api' })
  .use(todosRouter)
  .get('/health', () => 'ok')

export type App = typeof app
