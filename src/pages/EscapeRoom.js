import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Confetti from 'react-confetti';

const fadeAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const artifactTheme = {
  backgroundColor: '#e5e5b7',
  textColor: '#000',
  shakeColor: '#000000',
};

const EscapeRoomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background-color: ${artifactTheme.backgroundColor};
  color: ${artifactTheme.textColor};
  font-size: 1.8em; /* Adjust the font size as needed */
`;

const PasswordInput = styled.input`
  font-family: 'Cinzel', serif;
  font-size: 2.5em; /* Adjust the font size as needed */
  text-align: center;
  width: 60px; /* Adjust the width as needed */
  margin: 0 5px;
  border: none;
  background-color: transparent;
  color: ${artifactTheme.textColor};
  outline: none;
  border-bottom: 2px solid ${artifactTheme.textColor};
  transition: background-color 0.3s ease-in-out;
  animation: ${({ isShaking }) => isShaking && shakeAnimation} 0.5s ease-in-out;
`;

const Message = styled.div`
  font-family: 'Cinzel', serif;
  text-align: center;
  font-size: ${({ isCorrect }) => (isCorrect ? '2.8em' : '2.2em')}; /* Adjust the font size as needed */
  color: ${({ isCorrect }) => (isCorrect ? '#fff' : artifactTheme.shakeColor)};
  margin-top: 20px;
  ${({ isShaking }) => isShaking && shakeStyles};
`;

const ArtifactContainer = styled.div`
  animation: ${fadeAnimation} 1s ease-in-out;
  vh: 100%;
  vw: 100%;
`;

const shakeAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
`;

const shakeStyles = css`
  animation: ${shakeAnimation} 0.5s ease-in-out;
`;

// ... (previous code)

const EscapeRoom = () => {
  const [password, setPassword] = useState(['', '', '', '']);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isShaking, setIsShaking] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0.1 * 60); // 30 minutes in seconds
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    if (password.every((digit) => digit !== '') && password.length === 4) {
      handleCheckPassword();
    }
  }, [password]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        if (newTime <= 0) {
          setGameEnded(true);
          clearInterval(timer);
        }
        return newTime;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      if (timeLeft === 0) {
        console.log("You lost :( but thanks for playing!");
        // Additional logic or functions to handle game over
      }
    };
  }, [timeLeft]);

  const handleInputChange = (index, value) => {
    const updatedPassword = [...password];
    updatedPassword[index] = value;

    if (index < 3 && value !== '') {
      document.getElementById(`password-input-${index + 1}`).focus();
    } else if (index > 0 && value === '') {
      document.getElementById(`password-input-${index - 1}`).focus();
    }

    setPassword(updatedPassword);
    setIsCorrect(null); // Reset the incorrect message when input changes
  };

  const handleCheckPassword = () => {
    const enteredPassword = password.join('');
    if (enteredPassword === '8888') {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 500);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <ArtifactContainer>
      <EscapeRoomWrapper>
        {isCorrect === true ? (
          <>
            <Confetti />
            <Message isCorrect style={{ color: 'black' }}>
              Congratulations for solving the mystery!
            </Message>
          </>
        ) : gameEnded ? (
          <Message isCorrect={false}>You lost :( but thanks for playing!</Message>
        ) : (
          <>
            <div>
              {password.map((digit, index) => (
                <PasswordInput
                  key={index}
                  type="text"
                  id={`password-input-${index}`}
                  value={digit}
                  maxLength="1"
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  isShaking={isShaking}
                />
              ))}
            </div>
            <div>
              <Message>{formatTime(timeLeft)}</Message>
            </div>
          </>
        )}
      </EscapeRoomWrapper>
    </ArtifactContainer>
  );
};

export default EscapeRoom;