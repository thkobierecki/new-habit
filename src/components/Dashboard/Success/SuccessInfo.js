import React, { Component } from 'react';
import styled from 'styled-components';


const StyledContainer = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 18px;
`;
const StyledBtn = styled.button`
    background-color:rgb(134, 75, 134) ;
    padding: 15px 25px;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px rgb(134, 134, 134);
    margin-top: 20px;
    cursor: pointer;
`;
const StyledParagraph = styled.p`
    letter-spacing:1.5px;
`;

export default class SuccessInfo extends Component {
  constructor(props) {
    super(props);

    this.redirectToNewHabitForm = this.redirectToNewHabitForm.bind(this);
  }

  redirectToNewHabitForm() {
    this.props.closeSuccessModal();
    this.props.showNewHabitForm();
  }

  render() {
    return (
      <StyledContainer>
        <StyledParagraph>Congratulations!</StyledParagraph>
        <StyledParagraph>You have successfully developed a new habit.</StyledParagraph>
        <StyledBtn onClick={this.redirectToNewHabitForm}>Start new habit</StyledBtn>
      </StyledContainer>
    );
  }
}
