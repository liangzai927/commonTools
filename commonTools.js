/* 点击复制 */
var copy = function () {
    var _this = this
    var clipboard = new ClipboardJS(".tag-read");//括号里是元素
    clipboard.on("success", function (e) {
        // console.log("复制成功"); // 释放内存
        clipboard.destroy();
    });
    clipboard.on("error", function (e) {
        // 不支持复制
        alert("该浏览器不支持自动复制"); // 释放内存
        clipboard.destroy();
    });
},



/* jq获取url'?'后面的字符串 */
var GetRequest = function(){
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
},



/* 数组去重 */
function onlyOne(arr){
    var hash=[];
    for (var i = 0; i < arr.length; i++) {
       if(hash.indexOf(arr[i])==-1){
        hash.push(arr[i]);
       }
    }
    return hash;
}
//ES6 方法\
function onlyOne6(arr){
    var x = new Set(arr);
    return [...x];
}



/* 获取图片文件的地址 */
 function getPicUlr(file){
     // 创建一个 FileReader 对象
    let reader = new FileReader()
    // readAsDataURL 方法用于读取指定 Blob 或 File 的内容
    // 当读操作完成，readyState 变为 DONE，loadend 被触发，此时 result 属性包含数据：URL（以 base64 编码的字符串表示文件的数据）
    // 读取文件作为 URL 可访问地址
    reader.readAsDataURL(file)

    let url = ''
    reader.onloadend = function (e) {
        url = reader.result
    }

    return url
 }


 /**
* 数组去重（对象或者普通数字字符串都可以）
* @param 
* 	arr  要去重的数组  Array类型
*   key	 如果是数组中是对象，key为对象的唯一值，根据此唯一值进行去重，String类型，非必填
* @returns  newArr，去重后的数组，如果没有传递参数则返回空数组
*/
function arrayToHeavy(arr, key) {
	if (!arr) return [];
	if (Object.prototype.toString.call(arr) !== '[object Array]') return console.warn('给我一个数组');
	let newArr = [];
	// 普通的数字字符串去重
	if (!key) {
		newArr = Array.from(new Set(arr));
	} else {	// 数组对象去重
		const keyArr = [];
		arr.forEach((ite) => {
			if (!keyArr.includes(ite[key])) {
				keyArr.push(ite[key]);
				newArr.push(ite);
			}
		})
	}
	return newArr;
}