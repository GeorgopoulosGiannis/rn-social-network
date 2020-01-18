import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

export const apiUrl = "http://6eff5375.ngrok.io";
export const imageUrl = `${apiUrl}/api/Image/image?imagePath=`;
const instance = axios.create({
  baseURL: apiUrl
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

export default instance;
