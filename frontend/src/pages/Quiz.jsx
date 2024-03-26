import { useState } from "react";
import Footer from "./Footer";

function Quiz() {
  const questions = [
    {
      question: "How often do you feel overwhelmed or stressed?",
      options: ["Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How would you rate your overall mood most of the time?",
      options: ["Happy", "Neutral", "Sad", "Anxious"],
    },
    {
      question: "How often do you feel lonely or isolated?",
      options: ["Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How do you typically cope with failure or setbacks?",
      options: ["Learn from it", "Move on quickly", "Feel demotivated", "Get stuck in a negative mindset"],
    },
    {
      question: "Have you experienced the death of a close family member or friend recently?",
      options: ["No", "Yes, within the past year", "Yes, more than a year ago"],
    },
    {
      question: "How often do you engage in activities that you enjoy?",
      options: ["Frequently", "Occasionally", "Rarely", "Never"],
    },
    {
      question: "How often do you have suicidal thoughts?",
      options: ["Rarely", "Sometimes", "Often", "Always"],
    },
    // Add more questions here
  ];

  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0); // State to hold the score
  const [showMessage, setShowMessage] = useState(false); // State to control message display

  const handleAnswer = (answer) => {
    // Calculate the score based on the selected answer
    let newScore = score;
    if (answer === "Rarely" || answer === "Happy" || answer === "Learn from it" || answer === "Move on quickly" || answer === "No" || answer === "Frequently") {
      newScore += 1;
    } else if (answer === "Sometimes" || answer === "Neutral" || answer === "Occasionally" || answer === "Yes, within the past year") {
      newScore += 2;
    } else if (answer === "Often" || answer === "Sad" || answer === "Feel demotivated" || answer === "Rarely") {
      newScore += 3;
    } else if (answer === "Always" || answer === "Anxious" || answer === "Get stuck in a negative mindset" || answer === "Yes, more than a year ago" || answer === "Never") {
      newScore += 4;
    }
    setScore(newScore);

    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Display the score to the user
      setShowMessage(true);
    }
  };

  // Function to determine button color based on the option index
  const getOptionColor = (optionIndex) => {
    if (optionIndex % 4 === 0) {
      return "btn btn-success text-2xl text-white bold";
    } else if (optionIndex % 4 === 1) {
      return "btn btn-neutral text-2xl text-white bold";
    } else if (optionIndex % 4 === 2) {
      return "btn btn-warning text-2xl text-white bold";
    } else {
      return "btn btn-error text-2xl text-white bold";
    }
  };

  // Function to display message based on the score
  const renderMessage = () => {
    if (score < 8) {
      return (
        <div className="text-lg bg-blue-300 p-4 rounded-lg">
          You are alright as per our interrogation.
        </div>
      );
    } else if (score >= 8 && score < 16) {
      return (
        <div className="text-lg bg-yellow-300 p-4 rounded-lg">
          You seem to be a bit off.
        </div>
      );
    } else {
      return (
        <div className="text-lg bg-red-300 p-4 rounded-lg">
          Danger!
        </div>
      );
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen mt-36 bg-slate-500">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 hover:mt-12 hover:mb-12">
          <h1 className="text-2xl font-bold mb-4">
            Question {currentQuestion + 1}:
          </h1>
          <p className="mb-6 text-2xl hover:strong">
            {questions[currentQuestion].question}
          </p>
          <div className="grid grid-cols-1 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={getOptionColor(index)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 w-3/4 bg-green-400 h-8 rounded-md">
          <div
            style={{ width: `${(score / (questions.length * 4)) * 100}%` }}
            className="bg-red-500 h-full rounded-md"
          ></div>
        </div>
        {showMessage && (
          <div
            id="what is next"
            className="text-2xl flex flex-col items-center justify-center w-full mt-8"
          >
            {renderMessage()}
          </div>
        )}
        {/* New button to display message based on score */}
        <div className="mt-4">
          {score < 8 && (
            <button
              className="btn btn-success text-lg text-white"
            >
              As per our virtual interaction you are pretty normal. 
              You can always book a concellor by pressing this button
            </button>
          )}
          {(score >= 8 && score < 16) && (
            <button
              className="btn btn-warning text-lg text-white"
              onClick={(evt) =>{ 
                alert("You seem to be a bit off!")
                evt.preventDefault()
                fetch('http://localhost:5000/send')
                .then(
                    console.log("Mail Sent")
                )
                .catch(console.error("Mail not Sent "))
              }}
            >
              Get Message for 8 {"<= "} Score {"<"} 16
            </button>
          )}
          {score >= 16 && (
            <button
              className="btn btn-error text-lg text-white"
              onClick={(evt) =>{ 
                alert("Danger!")
                evt.preventDefault()
                fetch('http://localhost:5000/mail')
                .then(
                    console.log("Mail Sent")
                )
                .catch(console.error("Mail not Sent "))
              }}
            >
              Get Message for Score {">="} 16
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>

  );
}

export default Quiz;
