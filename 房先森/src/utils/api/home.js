import http from "./request.js";

async function getBanner() {
  let { data } = await http("", "get");
  //   let {data}={data:[],status:200,config}
  return data;
}

export { getBanner };
