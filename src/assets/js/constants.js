export const TEST_FLAG = process.env.NODE_ENV === "development";
export const __INTERFACEURL__ = TEST_FLAG
  ? "http://192.168.40.181:3000/api/"
  : "http://39.107.27.66:3000/api/";
