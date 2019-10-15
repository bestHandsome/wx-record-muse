import axios from "axios";
// import { Modal.confirm } from "components/Jrui";
// 接口地址

import { __INTERFACEURL__ } from "assets/js/constants";

// axios 实例
const INSTANCE = axios.create({
  baseURL: __INTERFACEURL__
});

export default INSTANCE;
