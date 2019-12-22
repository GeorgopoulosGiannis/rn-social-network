import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

const instance = axios.create({
    baseURL: "https://localhost:44387/api"
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