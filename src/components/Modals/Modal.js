import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const modalRoot = document.getElementById('modal-root');

const StyledModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  position: absolute;
  z-index: 1000;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledModalArea = styled.div`
  display: grid;
  grid-template-columns: 5% auto 5%;
  background-color: white;
  opacity: 1;
  height: auto;
  width: 600px;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 1px 2px 5px rgb(134, 134, 134);
`;
const StyledModalDetails = styled.div`
  grid-column: 2;
`;
const StyledCloseIcon = styled.div`
  grid-column: 3;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <StyledModalContainer>
        <StyledModalArea>
          <StyledModalDetails>{this.props.children}</StyledModalDetails>
          <StyledCloseIcon onClick={this.props.closeModal}>X</StyledCloseIcon>
        </StyledModalArea>
      </StyledModalContainer>,
      this.el,
    );
  }
}
