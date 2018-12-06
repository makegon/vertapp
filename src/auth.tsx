import { AsyncStorage } from "react-native";
import axios from "axios";
export const USER_KEY = '';
export const onSignIn = () => AsyncStorage.setItem(USER_KEY, "true");
export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);
export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
export const regUser = (dataurl) => {
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
