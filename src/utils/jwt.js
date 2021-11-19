const jwt = require('jsonwebtoken')

const {systemConfig} = require('../configs')

const createToken = async ({authorId}) => {
    try {
        const token = await jwt.sign({
            authorId,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + systemConfig.jwtExpiry
        }, systemConfig.jwtSecretKey)
        return token
    } catch (error) {
        console.error(`Error! creating jwt token ${error.message}`);
        throw error;
    }
}

const verifyToken = async (token) => {
    try {
        const decoded = jwt.verify(token, systemConfig.jwtSecretKey);
        return decoded
    } catch (error) {
        console.error(`Error! verifying jwt token ${error.message}`)
        throw error;
    }
}

module.exports = {
    createToken,
    verifyToken
}


const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}
// --- Don't touch above this -----
/*
    works on node app.js < input.txt 
     
    readline () -> it will read entire line 
*/
let T = readline();
for(let i = 1; i <= T; i++){
    // Process input
    
    console.log(`Case #${i}: ${solve(--- parameters ---)}`);
}
//Main code starts 

function solve(--- parameters ---)
{
    // logic
}
