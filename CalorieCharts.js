      google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);
      var data;
      //arrData = [];
      var chart;
      var options;
      var firstTime = 0;
      var flag = true;
    function drawChart() {
      data = new google.visualization.DataTable();
      data.addColumn('number', 'Hours');
      data.addColumn('number', 'Calories Obtained');
      data.addColumn('number', 'Calories Burnt');

      //data.addRows([[0,0,0]]);
      data.addRows([[0,0,0]]);

      options = {
        width: 700,
        height: 160,
        tooltip : 'none',
        animation: {"startup": false,
                    "duration": false},
        axes: {
          x: {
            0: {side: 'bottom'}
          }
        }
      };

      chart = new google.charts.Line(document.getElementById('CaloriesChart'));
      chart.draw(data, options);
    }
function updateCalorieData(dataInput){
  var i = 1;
  data.removeRows(0,data.qg.length);
  for(i=1;i<dataInput.length;i++){
  //data.addRows([dataInput[1][0],dataInput[1][1],dataInput[1][2],dataInput[1][3]]);
  data.insertRows(0,dataInput[i]);

}
data.sort([{column: 0}]);
chart.draw(data, options);
}
