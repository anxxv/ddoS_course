const weeks = 18;
const daysInWeek = 6;
const grid = document.getElementById('calendarGrid');

  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < daysInWeek; d++) {
      const cell = document.createElement('div');
      const activityLevel = Math.floor(Math.random() * 4); 
      cell.className = 'day';
      cell.dataset.level = activityLevel;
      grid.appendChild(cell);
    }
  }



