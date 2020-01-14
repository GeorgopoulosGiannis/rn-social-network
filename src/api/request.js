import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

const instance = axios.create({
  baseURL: "http://d9a421bc.ngrok.io"
});
instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(config);
    return config;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);
export const apiUrl = "http://d9a421bc.ngrok.io";
export const imageUrl ="http://d9a421bc.ngrok.io/api/Image/image?imagePath=";
export default instance;
