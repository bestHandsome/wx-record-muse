export const TEST_FLAG = process.env.NODE_ENV === "development";
export const __INTERFACEURL__ = TEST_FLAG
  ? "http://192.168.40.181:3000/api/"
  : "http://39.106.22.71:3000/api/";

export const ImageUrl = TEST_FLAG
  ? "http://192.168.40.181:3000/upload/images/"
  : "http://39.106.22.71:3000/upload/images/";
