import React, { Component } from "react";
import HabitList from "./HabitList/HabitList";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: {},
      isNewHabitFormShown: false,
      isSuccessModalShown: false
    };

    this.showNewHabitForm = this.showNewHabitForm.bind(this);
    this.closeNewHabitForm = this.closeNewHabitForm.bind(this);
    this.closeSuccessModal = this.closeSuccessModal.bind(this);
  }

  showNewHabitForm() {
    this.setState({ isNewHabitFormShown: true });
  }

  closeNewHabitForm() {
    this.setState({ isNewHabitFormShown: false });
  }

  showSuccessModal() {
    this.setState({ isSuccessModalShown: true });
  }

  closeSuccessModal() {
    this.setState({ isSuccessModalShown: false });
  }

  addHabit = habit => {
    const habits = { ...this.state.habits };
    habits[`habit${Date.now()}`] = habit;
    this.setState({ habits });
  };
  updateHabit = (habitKey, updatedHabit) => {
    const habits = { ...this.state.habits };
    habits[habitKey] = updatedHabit;
    this.setState({ habits });
  };

  deleteHabit = habitKey => {
    const habits = { ...this.state.habits };
    habits[habitKey] = null;
    this.setState({ habits });
  };

  toggleDayMarked = (habitKey, dayNo) => {
    const habitToUpdate = this.state.habits[habitKey];

    habitToUpdate.days.map(day => {
      if (day.dayNo === dayNo) {
        day.marked = !day.marked;

        day.marked === true
          ? habitToUpdate.progress++
          : habitToUpdate.progress--;

        if (habitToUpdate.progress === habitToUpdate.duration) {
          habitToUpdate.completed = true;
          this.showSuccessModal();
        } else {
          habitToUpdate.completed = false;
        }

        this.updateHabit(habitKey, habitToUpdate);
      }
    });
  };

  render() {
    return (
      <>
        <HabitList
          addHabit={this.addHabit}
          deleteHabit={this.deleteHabit}
          habits={this.state.habits}
          toggleDayMarked={this.toggleDayMarked}
          showNewHabitForm={this.showNewHabitForm}
          closeNewHabitForm={this.closeNewHabitForm}
          isNewHabitFormShown={this.isNewHabitFormShown}
          updatedHabit={this.updateHabit}
          isSuccessModalShown={this.isSuccessModalShown}
          closeSuccessModal={this.closeSuccessModal}
        />
      </>
    );
  }
}
