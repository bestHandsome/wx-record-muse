import { post, get, deleteMethod } from "./helper";

const upload = post("upload/image");
const getList = get("list");

// 评论相关
const getCommentList = get("comment/list");
const delComment = deleteMethod("comment/delete");
const addComment = post("comment/add");

export { upload, getList, getCommentList, delComment, addComment };
