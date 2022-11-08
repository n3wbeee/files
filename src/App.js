/** @format */

import React, { createContext } from "react";

function ListItem({ item, delFunc }) {
	return (
		<>
			<h3>{item.name}</h3>
			<p>{item.info}</p>
			<p>{item.price}</p>
			<button onClick={() => delFunc(item.id)}>删除</button>
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
			list: this.state.list.filter((item) => item.id !== id),
		});
	};
	render() {
		return (
			<>
				{this.state.list.map((item) => (
					<ListItem
						key={item.id}
						item={item}
						delFunc={this.deleteListItem}
					/>
				))}
			</>
		);
	}
}

export default App;

