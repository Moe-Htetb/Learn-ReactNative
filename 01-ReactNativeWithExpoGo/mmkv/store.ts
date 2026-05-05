import { MMKVLoader } from "react-native-mmkv-storage";

export const MMKV = new MMKVLoader().initialize();
export const tokenStorage = new MMKVLoader()
  .withEncryption()
  .withInstanceID("token")
  .initialize();

export const userStorage = new MMKVLoader().withInstanceID("user").initialize();
