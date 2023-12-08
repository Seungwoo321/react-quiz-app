import { HttpResponse, http } from 'msw'
import { questions } from './data'

// request, params, cookies
const fetchQuizQuestions = <T extends { request: any, params: any, cookies: any}>(ctx: T) => {
  const url = new URL(ctx.request.url)
  const amount = url.searchParams.get('amount')
  const difficulty= url.searchParams.get('difficulty')
  const type = url.searchParams.get('type')
  return HttpResponse.json({
    results: questions
  })
}

export const handlers = [
  http.get(`/api/v1/questions`, fetchQuizQuestions)
]
