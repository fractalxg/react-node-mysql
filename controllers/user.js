import { db } from '../db.js'

export const getUsers = (_, res) => {
    const selectAll = "SELECT * FROM usuarios"

    db.query(selectAll, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })
}