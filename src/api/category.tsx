import type { category } from '../types/category'
import { $api } from './api'

export const categoryApi = {
  get: () => $api.get<category[]>('/categories'),
}
