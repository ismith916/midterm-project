import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'

const GuessingGame = () => {
    const [luckyNumber, setLuckyNumber] = useState(0)
    const [guess, setGuess] = useState(0)
    const [totalGuess, setTotalGuess] = useState(0)
    const [message, setMessage] = useState("Start Guessing")

    useEffect(() => {
        guessClick()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (guess === luckyNumber) {
            setMessage("You guessed the Lucky Number!")
        } else if (guess > luckyNumber) {
            setMessage("Your guess is too high!")
        } else {
            setMessage("Your guess is too low!")
        }
        setTotalGuess(totalGuess + 1)
    }

    const guessClick = (e) => {
        const luckyDigits = Math.round(Math.random() * 20);
        setLuckyNumber(luckyDigits);
        localStorage.setItem("luckyNumber", luckyDigits)
        setGuess(0)
        setTotalGuess(0)
        if (message !== "Start Guessing") {
            setMessage("Start Guessing");
        }
    }

    return (
        <div className="text-center">
            <p>I am thinking of a number between 1 and 100. Guess the Lucky Number!</p>
            <p>You have made {totalGuess} guesses</p>
            <Form className="mb-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="message">
                    <Form.Control type="number" onChange={(e) => { setGuess(parseInt(e.target.value)) }} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Guess
                </Button>

            </Form>
            <Button variant="primary" type="reset" onClick={guessClick}>
                Reset
            </Button>
            <p>{message}</p>
        </div>
    )
}

export default GuessingGame