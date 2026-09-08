import { useState, useEffect } from "react";

export default function Joker() {

    const URL = "https://official-joke-api.appspot.com/random_joke";

    let [joke, setJoke] = useState({
        setup: "",
        punchline: ""
    });

    const getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();

        console.log(jsonResponse);

        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline
        });
    };

    useEffect(() => {
        getNewJoke();
    }, []);

    return (
        <div>
            <h3>Joker!</h3>

            <h2>{joke.setup}</h2>

            <h2>{joke.punchline}</h2>

            <button onClick={getNewJoke}>
                New Joke
            </button>
        </div>
    );
}