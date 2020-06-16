'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const daysCount = new Date(year, month, 0).getDate();
  const weekStart = new Date(`${year}/${month}/1`).getDay();
  const table = document.createElement('table');

  element.append(table);
  table.append(tHead(), tBody(daysCount, weekStart));
}

function tHead() {
  const header = document.createElement('thead');

  const daysList = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  for (const day of daysList) {
    const currentDay = document.createElement('th');

    currentDay.textContent = day;
    header.append(currentDay);
  }

  return header;
};

function tBody(daysCount, weekStart) {
  const body = document.createElement('tbody');

  const weeksCount = Math.ceil(daysCount / 7);

  let mainCounter = 1;
  let addCounter = 0;

  for (let i = 0; i < weeksCount; i++) {
    const row = document.createElement('tr');

    body.append(row);

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');

      if (mainCounter < weekStart) {
        addCounter++;
      } else if (mainCounter >= weekStart
        && mainCounter <= daysCount + addCounter) {
        cell.textContent = mainCounter - addCounter;
      }
      mainCounter++;
      row.append(cell);
    }
  }

  return body;
};

calendarTable(2020, 6, calendar);
