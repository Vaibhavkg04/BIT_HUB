import React, { useState, useEffect } from "react";
import axios from "axios";
import "./K20.css";
import Card from "../../card";
import Card2 from "../../card2";
let id1;
function K20() {
	const loggedInUsername = localStorage.getItem("userMain");
	const [data, setData] = useState([]);
	const [Chat, setChat] = useState("");
	const [MainUser, setUser] = useState("");
	if (loggedInUsername && MainUser !== loggedInUsername) {
		setUser(loggedInUsername);
	}
	const Jaldi_batao2 = localStorage.getItem("sen_stu");
	if (Jaldi_batao2 === "false") {
		id1 = "junior";
	} else {
		id1 = "senior";
	}
	const getData = async () => {
		try {
			const response = await axios.get("https://bit-c-hub.onrender.com/alK20");
			const combinedData = response.data.chatMessages.map(
				(chatMessage, index) => ({
					chatMessage,
					user: response.data.userxx[index],
					id_net: response.data.id2[index],
				})
			);
			setData(combinedData);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};
	useEffect(() => {
		const intervalId = setInterval(() => {
			getData();
		}, 1000);
	});
	const SendChat = () => {
		if (Chat === "") {
			alert("cant send empty message");
			getData();
			return;
		}
		const url = "https://bit-c-hub.onrender.com/seniorK20";
		const data = { Chat, MainUser, id1 };
		axios
			.post(url, data)
			.then((res) => {
				if (res.data.message) {
					setChat("");
				}
			})
			.catch((err) => {
				console.error(err);
				alert("Server error occurred");
			});
		getData();
	};
	return (
		<div>
			<div className="container  ">
				<div>
					{data &&
						data.map((item, index) =>
							item.id_net === "junior" ? (
								<Card
									chatMessage={item.chatMessage}
									user={item.user}
									key={index}
								/>
							) : (
								<Card2
									chatMessage={item.chatMessage}
									user={item.user}
									key={index}
								/>
							)
						)}
				</div>
				<footer className="down_input ">
					<form action="">
						<input
							className=""
							type="text"
							placeholder="Chat"
							value={Chat}
							onChange={(e) => setChat(e.target.value)}
							required
						/>
						<button type="submit" onClick={SendChat}>
							Send
						</button>
					</form>
				</footer>
				<div className="mb-10">hi</div>
			</div>
		</div>
	);
}
export default K20;
