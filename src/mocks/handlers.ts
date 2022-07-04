import { rest } from 'msw'

interface ISigninReqBody {
  email: string
  password: string
}

export interface ITeam {
  name: string
  position: string
  id: string
}

const TEAM_LIST: ITeam[] = [
  {
    name: 'Name1',
    position: 'Co-Founder',
    id: '64318',
  },
  {
    name: 'Name2',
    position: 'Co-Founder',
    id: '64319',
  },
  {
    name: 'Name3',
    position: 'Co-Founder',
    id: '64320',
  },
]

const handlers = [
  rest.get<ITeam>('/users/team', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(2000), ctx.json(TEAM_LIST))
  }),
  rest.post<ISigninReqBody>('/signin', (req, res, ctx) => {
    const { email, password } = req.body
    if (email === process.env.REACT_APP_VP_EMAIL && password === process.env.REACT_APP_VP_PASSWORD) {
      return res(ctx.json({ code: 'SUCCESS' }))
    }
    return res(ctx.status(200), ctx.json({ code: 'UNAUTHORIZED' }))
  }),
]

export default handlers
