const { posts } = require('../models/index');

module.exports = {
    async index(req, res){

    let posts = await posts.findAll();

    res.json(posts);
    }
}