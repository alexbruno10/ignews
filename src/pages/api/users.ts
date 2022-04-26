import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Bruno' },
        { id: 3, name: 'Alex Bruno' },
    ]

    return response.json(users)
}