const Newsletter = require('../Models/newsletterModel')

const subscribeToNewsletter = async function (req, res){
    try{
        if(!req.body.email)
            throw new Error('email is required')
        const newsletter = new Newsletter({email: req.body.email})
        
        await newsletter.save()
        .then(()=>newsletter.transport())
        .then(()=>{return res.status(200).json("Welcome to our newsletter")})
        .catch((e)=>{
            console.log(e.message)
            return res.status(200).json(e.message)
        })
    }catch(e){
        console.log(e.message)
        return res.status(400).json(e.message)
    }
}

module.exports = subscribeToNewsletter;