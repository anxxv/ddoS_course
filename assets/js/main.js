document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const sidebar = document.getElementById("sidebar");
  
    burger.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      document.querySelector(".main-content").classList.toggle("sidebar-open");
    });
  
    // Charts
    const ctx1 = document.getElementById('visitorChart').getContext('2d');
    const ctx2 = document.getElementById('incomeChart').getContext('2d');
  
    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Tasks',
          data: [30, 50, 40, 60, 50, 100, 90],
          borderColor: 'Bisque',
          fill: true,
          backgroundColor: 'rgba(248, 195, 232, 0.22)',
          tension: 0.3
        }]
      }
    });
  
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        datasets: [{
          label: 'coins',
          data: [2000, 3000, 2500, 2800, 1500, 2700, 2900],
          backgroundColor: '#D89CFF'
        }]
      }
    });
  });
  

  const orders = [
    { ID: '00129384', CourseName: 'Python for Beginners', EnrolledUsers: '420', status: 'Easy', Access: 'free' },
    { ID: '00129385', CourseName: 'Ethical Hacking Basics', EnrolledUsers: '310', status: 'Medium', Access: 'free' },
    { ID: '00129386', CourseName: 'Frontend Web Development', EnrolledUsers: '512', status: 'Medium', Access: 'free' },
    { ID: '00129387', CourseName: 'Linux Terminal Mastery', EnrolledUsers: '275', status: 'Hard', Access: 'free' },
    { ID: '00129388', CourseName: 'Cybersecurity Essentials', EnrolledUsers: '198', status: 'Hard', Access: '$180' },
    { ID: '00129389', CourseName: 'Fullstack Developer Bootcamp', EnrolledUsers: '348', status: 'Easy', Access: '$139' },
    { ID: '00129390', CourseName: 'SQL & Databases Fundamentals', EnrolledUsers: '412', status: 'Medium', Access: 'free' },
    { ID: '00129391', CourseName: 'DDoS Attack Defense: Fundamentals', EnrolledUsers: '521', status: 'Medium', Access: 'free' },
    { ID: '00129392', CourseName: 'Advanced DDoS Protection Techniques', EnrolledUsers: '450', status: 'Hard', Access: '$200' },
    { ID: '00129393', CourseName: 'DDoS Attacks: Analysis & Mitigation', EnrolledUsers: '600', status: 'Medium', Access: 'free' }
];

const tableBody = document.getElementById('table-body');

orders.forEach(order => {
    const row = document.createElement('div');
    row.className = 'table-row';

    let statusClass = '';
    if (order.status === 'Easy') {
        statusClass = 'status-approved';  
    } else if (order.status === 'Medium') {
        statusClass = 'status-pending';   
    } else if (order.status === 'Hard') {
        statusClass = 'status-rejected'; 
    }

    row.innerHTML = `
        <div>${order.ID}</div>
        <div>${order.CourseName}</div>
        <div>${order.EnrolledUsers}</div>
        <div class="status ${statusClass}">
            <span class="status-dot"></span>
            ${order.status}
        </div>
        <div>${order.Access}</div>
    `;

    tableBody.appendChild(row);
});
