// add middlewares here related to 
const Project = require('./projects-model')

async function validateProjectId(req,res, next){
try{
    const project = await Project.get(req.params.id)
    if (!project){
        res.status(404).json({ message : "This project couldn't be found"})
    } else {
        req.project = project
        next()
    }
} catch (error){
    next(error)
    }
}

function validate

module.exports = {
    validateProjectId,
}