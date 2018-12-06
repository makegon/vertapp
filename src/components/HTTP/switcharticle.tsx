import axios from 'axios'

export default dataurl => {
    const id = dataurl.id
    return new Promise((success, fail) => {
        axios.request({
            method:'put',
            url:`http://10.102.100.121:3000/api/tasks/${id}?access_token=dz08yyQL0fQs1thMHQI5mRm4Bj0FcL6zVSUHYREAoEZBOOVzODq2TjlCfxC7rVTN`,
            data: {
                title: dataurl.title,
                body: dataurl.body
            }
        }).then((response) =>{
            success(response)
        }).catch(err => fail(err));
    });
};