import axios from "axios";

export const deleteart = (dataurl) => {
    return new Promise((success, fail) => {
        axios.delete(dataurl)
            .then((response) =>{
                success(response)
            }).catch(err => fail(err))
    });

};
export const loadart = (url) => {
    return new Promise((success, fail) => {
        const request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.addEventListener('load', () => {
            request.status >= 200 && request.status < 400
                ? success(request.responseText)
                : fail(new Error(`Request Failed: ${request.statusText}`));
        });

        request.addEventListener('error', () => {
            fail(new Error('Network Error'));
        });

        request.send();
    });
};
export const updateart = (dataurl) => {
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
export const addart = (dataurl) => {
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