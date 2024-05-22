import { useState } from "react";

export default function App() {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });

  // Getting the current year, month, and day
  const currentTime = new Date();

  // Function to calculate user's age
  const calculateAge = (birthdate) => {
    const userBirthTime = new Date(birthdate);

    let years = currentTime.getFullYear() - userBirthTime.getFullYear();
    let months = currentTime.getMonth() - userBirthTime.getMonth();
    let days = currentTime.getDay() - userBirthTime.getDay();

    // Adjust years if the current date is before the birth date this year
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    // Adjust days if the current date is before the birth date this month
    if (days < 0) {
      const previousMonth = new Date(
        currentTime.getFullYear(),
        currentTime.getMonth(),
        0
      );
      days += previousMonth.getDate();
      months--;
    }

    setAge({ years, months, days });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!day || !month || !year) {
      alert("Please fill all the inputs");
      return;
    }
    const birthDate = `${year}-${month}-${day}`;
    calculateAge(birthDate);
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-[496px] bg-white p-8 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-[9.6rem]">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {/* Inputs container */}
          <div className="flex flex-row gap-5">
            {/*Declaring individual inputs*/}
            <div className="flex flex-col gap-1">
              {day > 31 ? (
                <lable
                  className="text-rose-500 text-[10px] font-bold uppercase tracking-[2px]"
                  htmlFor="day"
                >
                  Day
                </lable>
              ) : (
                <label
                  className="text-[10px] font-bold uppercase tracking-[2px]"
                  htmlFor="day"
                >
                  Day
                </label>
              )}
              <input
                type="number"
                min={1}
                max={31}
                className="cursor-pointer w-[7rem] rounded-[4px] px-3 font-bold py-2 text-xl"
                name="day"
                id="day"
                placeholder="DD"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
              {day > 31 && (
                <span className="text-rose-500 text-[12px] italic block">
                  Must be a valid day
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              {month > 12 ? (
                <lable
                  className="text-rose-500 text-[10px] font-bold uppercase tracking-[2px]"
                  htmlFor="day"
                >
                  Month
                </lable>
              ) : (
                <label
                  className="text-[10px] font-bold uppercase tracking-[2px]"
                  htmlFor="day"
                >
                  Month
                </label>
              )}
              <input
                type="number"
                min={1}
                max={12}
                className="cursor-pointer w-[7rem] rounded-[4px] px-3 font-bold py-2 text-xl"
                name="month"
                id="month"
                placeholder="MM"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
              {month > 12 && (
                <span className="text-rose-500 text-[12px] italic block">
                  Must be a valid month
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              {year > currentTime.getFullYear() ? (
                <lable
                  className="text-rose-500 text-[10px] font-bold uppercase tracking-[2px]"
                  htmlFor="day"
                >
                  Year
                </lable>
              ) : (
                <label
                  className="text-[10px] font-bold uppercase tracking-[2px]"
                  htmlFor="day"
                >
                  Year
                </label>
              )}
              <input
                type="number"
                min={1947}
                max={currentTime.getFullYear()}
                className="cursor-pointer w-[7rem] rounded-[4px] px-3 font-bold py-2 text-xl"
                name="year"
                id="year"
                placeholder="YYYY"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              {year > currentTime.getFullYear() && (
                <span className="text-rose-500 text-[12px] italic block">
                  Must be in the past
                </span>
              )}
            </div>
          </div>
          {/* Sumbit button */}
          <div className="relative">
            <hr className="w-full my-8" />
            <button className="absolute -top-6 right-0 rounded-full w-14 h-w-14 flex justify-center items-center p-3 active:bg-black">
              <img src="./images/icon-arrow.svg" alt="Arrow" />
            </button>
          </div>
          {/* User age will display here */}
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <h1 className="age-info text-6xl font-extrabold italic tracking-widest">
                {age.years}
              </h1>
              <h1 className="text-6xl font-extrabold italic">years</h1>
            </div>
            <div className="flex gap-2">
              <h1 className="age-info text-6xl font-extrabold italic tracking-widest">
                {age.months}
              </h1>
              <h1 className="text-6xl font-extrabold italic">months</h1>
            </div>
            <div className="flex gap-2">
              <h1 className="age-info text-6xl font-extrabold italic tracking-widest">
                {age.days}
              </h1>
              <h1 className="text-6xl font-extrabold italic">days</h1>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
