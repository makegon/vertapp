import axios from 'axios'

export default dataurl => {
    return new Promise((success, fail) => {
        axios.request({
            method:'post',
            url:`http://10.102.100.121:3000/api/Users/login?access_token=vlKd3hoPHZxLojCGSasWeaFi1Kw7G6SDnL1vm5PKmqyjyfHVGeeaEic0UAbGb06S`,
            data: dataurl
        }).then((response) =>{
            success(response)
        }).catch(err => fail(err));
    });
};