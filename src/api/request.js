import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

const instance = axios.create({
    baseURL: "http://d8725f3c.ngrok.io"
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