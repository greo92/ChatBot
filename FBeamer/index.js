'use strict';



class FBeamer{

    constructor({pageAccessToken, VerifyToken}){

        this.pageAccessToken = pageAccessToken;
        this.VerifyToken = VerifyToken;
    }

    registerHook(req, res){
        const params = req.query;
        const mode = params[`hub.mode`],
        token = params[`hub.verify_token`],
        challenge = params[`hub.challenge`];
        
        try{
            if ((mode && this.VerifyToken) && mode === 'subscribe' && token == this.VerifyToken){
                console.log("Wehbook registered!");
                return res.send(challenge)
            }
            else{
                console.log('Could not register webhook!');
                return res.sendStatus(400);
            }
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = FBeamer;