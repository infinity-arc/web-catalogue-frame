const cp = require('child_process')

cp.exec('npm install', (err)=>{
    if(err){
        throw err;
    }
    cp.exec('npm run build', err=>{
        console.error(err);
    })
})