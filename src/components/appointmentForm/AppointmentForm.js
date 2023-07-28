import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(
    2,
    "0"
  )}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleDateChange = (e) => {
    setDate(e.target.value);
  }
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }
  const handleContactChange = (e) => {
    setContact(e.target.value);
  }
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Event Title</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min={getTodayString()}
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            name="time"
            id="time"
            value={time}
            onChange={handleTimeChange}
          />
        </div>
        <div>
          <label htmlFor="contact">Contact</label>
          <ContactPicker
            contacts={contacts}
            onChange={handleContactChange}
            value={contact}
            name="contact"
            id="contact"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
