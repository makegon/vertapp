import axios from 'axios'

export default url => {
    return new Promise((success, fail) => {
        axios.delete(url)
            .then((response) =>{
                success(response)
            }).catch(err => fail(err))
    });
};