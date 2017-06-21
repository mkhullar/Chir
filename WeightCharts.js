//google.charts.load('current', {'packages':['line']});
google.charts.load('visualization', '1', {
        packages: ['corechart']
      });
var rowNum = 0;
google.charts.setOnLoadCallback(drawChart);
var weightdata;
//arrData = [];
var weightChart;
var weightOptions;
var flag = 0;
var dataInput = [[]];
function drawWeightChart(dataInput) {
  var tempArr = dataInput.slice();
weightdata = new google.visualization.DataTable();
weightdata.addColumn('number', 'Hours');
weightdata.addColumn('number', 'Weight');

//weightdata.addRows([[tempArr[1][0][0],tempArr[1][0]][1]]);
weightdata.addRows([[0,0]]);
options = {
  width: 630,
  height: 160,
  tooltip : 'none',
  animation: {"startup": true},
  axes: {
    x: {
      0: {side: 'bottom'}
    }
  }
};

weightChart = new google.charts.Line(document.getElementById('WeightsChart'));
weightChart.draw(weightdata, options);
}
function updateWeightData(dataInput){
var i = 1;
if (flag==0){
drawWeightChart(dataInput);
flag = 1;}
for(i=1;i<dataInput.length;i++){
weightdata.insertRows(rowNum,dataInput[i]);
weightdata.sort([{column: 0}]);
weightChart.draw(weightdata, options);
rowNum++;
}
}
