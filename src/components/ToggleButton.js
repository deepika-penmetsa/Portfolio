import React from 'react';
import styled from 'styled-components';

const ToggleButton = ({ onClick, currentTheme }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <ThemeIndicator currentTheme={currentTheme}>
        {currentTheme === 'vscode' ? 'VS Code Theme' : 'Linux Theme'}
      </ThemeIndicator>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 100;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const ThemeIndicator = styled.div`
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${props => 
    props.currentTheme === 'vscode' 
      ? '#007ACC' 
      : '#00AA00'
  };
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
`;

export default ToggleButton; 