var totalPages = 5; // 总页数
var currentPage = 1; // 当前页

// 创建页码按钮
function createPageButtons() {
	var pageBox = document.getElementById('pageBox');
	pageBox.innerHTML = '';

	for (var i = 1; i <= totalPages; i++) {
		var button = document.createElement('button');
		button.innerText = i;
		button.className = 'btn btn-primary';
		button.setAttribute('onclick', 'jumpToPage(' + i + ')');
		if (i === currentPage) {
			button.classList.add('current-page');
		}
		pageBox.appendChild(button);
	}
}

// 跳转到指定页码
function jumpToPage(page) {
	currentPage = page;
	createPageButtons();
	// 在这里编写跳转逻辑，例如跳转到对应页面或执行其他操作
	console.log('跳转到第' + page + '页');
}

// 上一页
function prevPage() {
	if (currentPage > 1) {
		currentPage--;
		createPageButtons();
		// 在这里编写跳转逻辑，例如跳转到对应页面或执行其他操作
		console.log('上一页');
	}
}

// 下一页
function nextPage() {
	if (currentPage < totalPages) {
		currentPage++;
		createPageButtons();
		// 在这里编写跳转逻辑，例如跳转到对应页面或执行其他操作
		console.log('下一页');
	}
}

// 初始化
createPageButtons();
