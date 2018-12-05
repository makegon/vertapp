import axios from 'axios'

export default dataurl => {
    dataurl = !dataurl
    return new Promise((success, fail) => {
        axios.request({
            method:'put',
            url:`http://10.102.100.121:3000/api/tasks/12?access_token=vlKd3hoPHZxLojCGSasWeaFi1Kw7G6SDnL1vm5PKmqyjyfHVGeeaEic0UAbGb06S`,
            data: {
                title: "Заметка первая",
                body: "Содержание первой заметки",
                done: dataurl
            }
        }).then((response) =>{
            success(response)
        }).catch(err => fail(err));
    });
};