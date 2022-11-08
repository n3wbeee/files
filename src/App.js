/** @format */

import React from "react";

function ListItem({ item, delFunc }) {
	// 渲染列表项
	return (
		<>
			<h3>{item.name}</h3>
			<p>{item.info}</p>
			<p>{item.price}</p>
			<button onClick={() => delFunc(item.id)}>删除</button>{" "}
			{/*通过传递的删除函数删除*/}
		</>
	);
}

class App extends React.Component {
	state = {
		list: [
			{
				id: 1,
				name: "超级好吃的棒棒糖",
				price: 18.8,
				info: "开业大酬宾，全场8折",
			},
			{
				id: 2,
				name: "超级好吃的大鸡腿",
				price: 34.2,
				info: "开业大酬宾，全场8折",
			},
			{
				id: 3,
				name: "超级无敌的冰激凌",
				price: 14.2,
				info: "开业大酬宾，全场8折",
			},
		],
	};
	deleteListItem = (id) => {
		this.setState({
			list: this.state.list.filter((item) => item.id !== id), // 过滤掉id相同的项
		});
	};
	render() {
		return (
			<>
				{this.state.list.map((item) => (
					<ListItem
						key={item.id} // 为了避免警告，给每个列表项加上key
						item={item} // 把每个列表项的数据传递给子组件
						delFunc={this.deleteListItem} // 把删除函数传递给子组件
					/>
				))}
			</>
		);
	}
}

export default App;

