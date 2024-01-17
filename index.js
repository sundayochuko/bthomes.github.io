
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel img');
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 100 + '%';
  document.querySelector('.carousel').style.transform = 'translateX(' + translateValue + ')';
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// Create function for calendar booking

document.addEventListener('DOMContentLoaded', function() {
  const calendarBody = document.querySelector('#booking-calendar tbody');
  const today = new Date();
  let selectedDate = null;

  function generateCalendar(year, month) {
    calendarBody.innerHTML = '';

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    let currentDate = new Date(firstDay);
    currentDate.setDate(1 - firstDay.getDay()); // Move back to the first Sunday

    while (currentDate <= lastDay) {
      const weekRow = document.createElement('tr');

      for (let i = 0; i < 7; i++) {
        const cell = document.createElement('td');
        cell.textContent = currentDate.getDate();

        if (currentDate.getMonth() !== month) {
          cell.classList.add('disabled');
        } else {
          cell.addEventListener('click', function() {
            handleDateSelection(currentDate);
          });
        }

        if (currentDate.toDateString() === today.toDateString()) {
          cell.classList.add('selected');
        }

        weekRow.appendChild(cell);
        currentDate.setDate(currentDate.getDate() + 1);
      }

      calendarBody.appendChild(weekRow);
    }
  }

  function handleDateSelection(date) {
    if (date.getMonth() === today.getMonth() && date >= today) {
      if (selectedDate) {
        selectedDate.classList.remove('selected');
      }
      const selectedDate = event.target;
      selectedDate.classList.add('selected');
      alert('Date selected: ' + date.toDateString());
    } else {
      alert('Please select a valid date.');
    }
  }

  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  generateCalendar(currentYear, currentMonth);
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to update and display the current time
  function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);

    document.getElementById("clock_time").innerText = formattedTime;
  }

  // Function to format single-digit hours, minutes, and seconds with leading zeros
  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  // Update time every second
  setInterval(updateTime, 1000);

  // Initial call to display time immediately
  updateTime();
});


document.addEventListener("DOMContentLoaded", function () {
  const rssFeedElement = document.getElementById("rssFeed");

  // Replace 'YOUR_RSS_FEED_URL' with the URL of your RSS feed
  const rssFeedUrl = 'YOUR_RSS_FEED_URL';
  const limit = 5; // Set the number of items you want to display

  fetch(rssFeedUrl)
    .then(response => response.json())
    .then(data => {
      renderFeed(data, limit);
    })
    .catch(error => {
      console.error('Error fetching RSS feed:', error);
      rssFeedElement.innerHTML = 'Error fetching RSS feed.';
    });

  function renderFeed(feedData, limit) {
    if (feedData.items) {
      const items = feedData.items.slice(0, limit);
      let html = '<ul>';
      items.forEach(item => {
        html += `<li><a href="${item.link}" target="_blank">${item.title}</a></li>`;
      });
      html += '</ul>';
      rssFeedElement.innerHTML = html;
    } else {
      rssFeedElement.innerHTML = 'Invalid RSS feed format.';
    }
  }
}); document.addEventListener("DOMContentLoaded", function () {
  const rssFeedElement = document.getElementById("rssFeed");

  // Replace 'YOUR_RSS_FEED_URL' with the URL of your RSS feed
  const rssFeedUrl = 'https://x.com/BBProEvents1?s=20';
  const limit = 5; // Set the number of items you want to display

  fetch(rssFeedUrl)
    .then(response => response.json())
    .then(data => {
      renderFeed(data, limit);
    })
    .catch(error => {
      console.error('Error fetching RSS feed:', error);
      rssFeedElement.innerHTML = 'Error fetching RSS feed.';
    });

  function renderFeed(feedData, limit) {
    if (feedData.items) {
      const items = feedData.items.slice(0, limit);
      let html = '<ul>';
      items.forEach(item => {
        html += `<li><a href="${item.link}" target="_blank">${item.title}</a></li>`;
      });
      html += '</ul>';
      rssFeedElement.innerHTML = html;
    } else {
      rssFeedElement.innerHTML = 'Invalid RSS feed format.';
    }
  }
});

