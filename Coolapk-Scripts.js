// @script type=http-request
// 在脚本开始时输出调试信息
console.log("Coolapk Image Header Fix script is running!");

// 设置请求头
$httpClient.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7");

// 打印修改后的请求头，方便调试
console.log($request.headers);