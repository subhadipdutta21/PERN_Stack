const pool = require('../../db')
const Dataloader = require('dataloader');
const Ramda = require('ramda')

const likesByPostId = async (ids) => {
    console.log('called fetch likes', ids)
    let data = await pool.query(
        `SELECT u2."name" ,u2.email ,u2.user_id, l.post_id FROM likes l INNER JOIN users u2 ON l.liker_user_id = u2.user_id WHERE l.post_id=ANY($1)`,
        [ids]
    )
    console.log(data)  
    let tempdata = data.rows
    const groupedById = Ramda.groupBy(tempdataitm => tempdataitm.post_id, tempdata)
    console.log('groupedById', groupedById)
    return Ramda.map(post_id => {
        console.log(groupedById[post_id])
        let tempdata1 = groupedById[post_id]
        let changedKeyNames = []
        if (!!tempdata1) {
            tempdata1.map(d => {
                let { user_id, name, email } = d
                let tempx = {}
                tempx['liker_id'] = user_id
                tempx['liker_name'] = name
                tempx['liker_email'] = email
                changedKeyNames.push(tempx)
            })
        }
        return changedKeyNames
    }, ids)
}



module.exports = {
    likesDataLoader: () => new Dataloader(likesByPostId)
}
