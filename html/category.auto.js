
var defaultPageSize = 5;
var arr = eval('[{"title":"cosnet_introduction","date":"2018-01-05 10:06:40","desc":""},{"title":"献给所有想在github.io中写博文的人","date":"2017-12-29 11:30:17","desc":""}]');
function get(currentPage) {
	return getResult(currentPage, defaultPageSize);
}
function getResult(currentPage, pageSize) {
	currentPage = parseInt(currentPage);
	pageSize = parseInt(pageSize);
	var startIndex = (currentPage - 1) * pageSize;
	var endIndex = startIndex + pageSize;
	if (arr.length <= startIndex) { return null;}
	if (endIndex > arr.length) { endIndex = arr.length;}
	return arr.slice(startIndex, endIndex);
}
function pageCount() {
	return getPageCount(defaultPageSize);
}
function getPageCount(pageSize) {
	return Math.ceil(arr.length / pageSize);
}
function getQueryString(query) {
	var uri = window.location.search;
    var re = new RegExp("" +query+ "=([^&?]*)", "ig");
    return ((uri.match(re))?(uri.match(re)[0].substr(query.length+1)):null);
}
	