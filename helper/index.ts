import axios from 'axios';

const ip = '192.168.100.25'
const url = `http://${ip}:3000`
export const Api = (data: any) =>
    new Promise((resolve, reject) => {
        const payLoad = JSON.stringify({ data });
        axios.post(url, payLoad, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer',
            },
        }).then((resp) => {
            resolve(resp.data)
        }).catch((e: any) => {
            console.log(e)
            reject(e)
        })
    })