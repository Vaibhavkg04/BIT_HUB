import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AlertDismissibleExample from "../Alerts/profuAlert";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Img from "./Proff-inter2.jpg";
import "./professor.css";
function Professor() {
	const navigate = useNavigate();
	function teleport() {
		navigate("/pro_cs");
	}
	return (
		<div className="All">
			<AlertDismissibleExample />
			<div className="text-4xl heading ">Choose Branch For Interaction</div>
			<br />
			<div className="branch">
				<div className=" butt mr-56">
					<button
						className="text-xl bg-blue-600 mr-4 hover:bg-blue-900 text-white font-bold py-4 px-8  rounded border-2 border-white"
						onClick={teleport}
					>
						cs
					</button>
					<button className="text-xl bg-blue-600 mr-4 hover:bg-blue-900 text-white font-bold py-4 px-8  rounded border-2 border-white">
						ECE
					</button>
					<button className="text-xl bg-green-600 mr-4 hover:bg-blue-900 text-white font-bold py-4 px-8  rounded border-2 border-white">
						EEE
					</button>
					<button className="text-xl bg-blue-600  mr-4 hover:bg-blue-900 text-white font-bold py-4 px-8  rounded border-2 border-white">
						Mech
					</button>
				</div>
				<img className="learn" src={Img} alt="" />
			</div>
		</div>
	);
}
export default Professor;
