import got from 'got';

async function main() {
        const resp = got('https://api.github.com/users/PaN8bors/repos')
        const data = await resp.json();
        console.log(data)
    }
    
main();