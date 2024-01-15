// setup 
const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Promotion',
      data: [118, 132, 146, 169, 182, 193, 209],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)', // Red
      'rgba(255, 205, 86, 0.2)', // Yellow
      'rgba(75, 192, 192, 0.2)', // Teal
      'rgba(54, 162, 235, 0.2)', // Blue
      'rgba(153, 102, 255, 0.2)', // Purple
      'rgba(255, 159, 64, 0.2)', // Orange
      'rgba(0, 0, 0, 0.2)'  
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',  // Red
        'rgba(255, 205, 86, 1)',  // Yellow
        'rgba(75, 192, 192, 1)',  // Teal
        'rgba(54, 162, 235, 1)',  // Blue
        'rgba(153, 102, 255, 1)', // Purple
        'rgba(255, 159, 64, 1)',  // Orange
        'rgba(0, 0, 0, 1)' 
      ],
      borderWidth: 1
    }]
  };

  // config 
  const config = {
    type: 'pie',
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  const oneChart = new Chart(
    document.getElementById('oneChart'),
    config
  );
  
  
  const config2 = {
    type: 'doughnut',
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }; 
  const oeChart = new Chart(
    document.getElementById('oeChart'),
    config2
  );