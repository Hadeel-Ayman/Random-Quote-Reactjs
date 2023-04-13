// api
import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

// components
import Button from "../../component/button";

// images
import sound from "../../images/sound1.png";
import quotes from "../../images/quotes1.png";
import copy from "../../images/copy1.png";

const Home = () => {
    const [quote, setQuote] = useState([]);
    const [author, setAuthor] = useState([]);

    const API = () => {
        axios
            .get("https://type.fit/api/quotes")
            .then((res) => {
                const data = res.data;
                const len = data.length;
                const randomText = Math.floor(Math.random() * len);
                const Text = data[randomText];
                setQuote(Text.text);
                setAuthor(Text.author);
            })
            .catch((error) => console.log(error));
    };

    const handleSound = () => {
        const sound = new SpeechSynthesisUtterance(`${quote}`);
        speechSynthesis.speak(sound);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(quote);
    };

    const handleClick = () => {
        API();
    };
    useEffect(() => {
        API();
    }, []);

    return (
        <div className="content">
            <p>{quote}</p>
            <h3>{author}</h3>
            <div className="flex">
                <Button img={quotes} onClick={handleClick} />
                <Button img={sound} onClick={handleSound} />
                <Button img={copy} onClick={handleCopy} />
            </div>
        </div>
    );
};

export default Home;
