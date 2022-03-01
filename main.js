import got from 'got';

async function main() {
        const response = await got('http://httpbin.org/get');
        const data = response.body;
        console.log(data)
    }
    
main();