import Axios from "axios";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import InputGroup from "../components/InputGroup";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState<any>({});

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		try {
			const res = await Axios.post(
				"/auth/login",
				{
					username,
					password,
				},
				{ withCredentials: true }
			);
		} catch (error: any) {
			console.log(error);
			setErrors(error.response.data || {});
		}
	};
	return (
		<div className="bg-white">
			<div className="flex flex-col items-center justify-content h-screen p-6">
				<div className="w-10/12 mx-auto md:w-96">
					<h1 className="mb-2 text-lg font-medium">회원가입</h1>
					<form onSubmit={handleSubmit}>
						<InputGroup
							placeholder="Username"
							value={username}
							setValue={setUsername}
							error={errors.username}
						/>
						<InputGroup
							placeholder="Password"
							value={password}
							setValue={setPassword}
							error={errors.password}
						/>
						<button className="w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded">
							로그인
						</button>
					</form>
					<small>
						아직 회원이 아닌가요?
						<Link href="/register">
							<a className="ml-1 text-blue-500">회원가입</a>
						</Link>
					</small>
				</div>
			</div>
		</div>
	);
};

export default Login;
