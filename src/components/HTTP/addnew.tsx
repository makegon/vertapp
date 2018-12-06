import axios from 'axios'

export default dataurl => {
    return new Promise((success, fail) => {
        axios.request({
            method:'post',
            url:`http://10.102.100.121:3000/api/tasks?access_token=dz08yyQL0fQs1thMHQI5mRm4Bj0FcL6zVSUHYREAoEZBOOVzODq2TjlCfxC7rVTN`,
            data: dataurl
        }).then((response) =>{
            success(response)
        }).catch(err => fail(err));
    });
};