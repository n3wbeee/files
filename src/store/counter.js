/** @format */

import { makeAutoObservable } from "mobx";

// 编写第一个mobx store案例
// 1. 安装mobx
// 2. 创建store文件夹
// 3. 创建counter.js文件
// 4. 编写counter.js文件
// 5. 在App.js中引入counter.js文件

class CounterStore {
	constructor() {
		// makeAutoObservable(this) 会自动将当前类中的所有属性都转换为可观察的
		makeAutoObservable(this);
	}
	count = 0;
	// 定义action函数
	addCount = () => {
		this.count++;
	};
}

const counterStore = new CounterStore(); // 实例化counterStore
export { counterStore }; // 导出counterStore
