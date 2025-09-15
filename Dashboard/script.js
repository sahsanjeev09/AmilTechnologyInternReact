// Bar Chart: Earnings
const barChart = new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: ['01','02','03','04','05','06','07','08','09','10'],
    datasets: [{
      label: 'Earnings',
      data: [40,20,30,50,25,35,28,40,30,25],
      backgroundColor: '#ff6b6b'
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } }
  }
});

// Donut Chart: Categories
const donutChart = new Chart(document.getElementById('donutChart'), {
  type: 'doughnut',
  data: {
    labels: ['Fast Food','Italian','Main Course','Starter','Beverages','Indian','Dessert','Other'],
    datasets: [{
      data: [30,20,10,15,10,5,7,3],
      backgroundColor: [
        '#ff6b6b','#1dd1a1','#54a0ff','#feca57',
        '#48dbfb','#5f27cd','#ff9f43','#576574'
      ]
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'bottom' } }
  }
});
