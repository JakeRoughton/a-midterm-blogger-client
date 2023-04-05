import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/Auth";

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT

const HomePage = () => {
	const [message, setMessage] = useState("")
	// const {userToken} = useAuth()
	const auth = useAuth()
	console.log(auth);

	// console.log(userToken)

    const fetchMessage = async () => {
        const headers = {
            "Content-Type": "application/json",
            // [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken
        }

        headers[process.env.REACT_APP_TOKEN_HEADER_KEY] = auth.userToken
        // headers.process.env.REACT_APP_TOKEN_HEADER_KEY = auth.userToken

        console.log(headers)

        const response = await fetch(`${urlEndpoint}/users/message`, {
            method: "GET",
            headers: headers,
        });
        const responseJSON = await response.json();
        if (responseJSON.success) {setMessage(responseJSON.message)}
        else{setMessage("")}
    }
	
	useEffect(()=>{
        // if(auth.userToken)
	


        console.log('message', message)
		if (auth.userToken !== null && auth.userToken !== undefined) {
            console.log('hello');
			fetchMessage()
		}
		if (auth.userToken === null) {
			setMessage("")
        }
	    //  [auth.userToken]
    }) 

	

	return (
		<div>
			<h1>Home</h1>
            <p className="Greeting">The best blogs you never knew you needed</p>
			{ message.length !== 0 && <p>Message: {message}</p>}
		</div>
    )
}

export default HomePage;