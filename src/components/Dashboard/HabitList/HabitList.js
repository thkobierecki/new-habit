import React, { Component } from 'react';
import styled from 'styled-components';
import Habit from '../Habit/Habit';
import Modal from '../../Modals/Modal';
import AddHabitForm from '../AddHabitForm/AddHabitForm';
import SuccessInfo from '../Success/SuccessInfo';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 5% auto 5%;
  grid-template-rows: auto;
`;
const StyledHeader = styled.div`
  padding-top: 30px;
  grid-column: 2;
  grid-row: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledHeading = styled.h3`
  font-size: 1.6rem;
`;
const StyledBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 14px;

  cursor: pointer;

  &:hover {
    font-weight: 600;
  }
`;
const StyledList = styled.div`
  min-height: 100%;
  grid-column: 2;
  grid-row: 2;
`;

export default class HabitList extends Component {
  render() {
    const {
      addHabit,
      deleteHabit,
      habits,
      toggleDayMarked,
      showNewHabitForm,
      closeNewHabitForm,
      isNewHabitFormShown,
      updatedHabit,
      isSuccessModalShown,
      closeSuccessModal,
    } = this.props;

    return (
      <StyledContainer>
        <StyledHeader>
          <StyledHeading>Ongoing habits</StyledHeading>
          <StyledBtn onClick={showNewHabitForm}>Add new habit</StyledBtn>
        </StyledHeader>
        <StyledList>
          {isNewHabitFormShown && (
            <Modal closeModal={closeNewHabitForm}>
              <AddHabitForm
                addHabit={addHabit}
                closeNewHabitForm={closeNewHabitForm}
              />
            </Modal>
          )}
          {isSuccessModalShown && (
            <Modal closeModal={closeSuccessModal}>
              <SuccessInfo
                showNewHabitForm={showNewHabitForm}
                closeSuccessModal={closeSuccessModal}
              />
            </Modal>
          )}
          <Habit
            toggleDayMarked={toggleDayMarked}
            deleteHabit={deleteHabit}
            updatedHabit={updatedHabit}
          />
        </StyledList>
      </StyledContainer>
    );
  }
}
