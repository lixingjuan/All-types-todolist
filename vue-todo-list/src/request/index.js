import { post } from "./axios";
import { queryTodoItemsURL } from "./comUrl";

const queryTodoItemsAPI = params => post(queryTodoItemsURL, params);

export { queryTodoItemsAPI };
