var vextraEx = 0;
var label =10;
var metabolism = 0;
var extraExercise = 0;
var InVariable = 0;
var weight = 0;
var OutVariable = 0;
var speed = 1;
var vBreakfast  = 0;
var vLunch = 0;
var vDinner = 0;
var dataVals = [[]];
var time = 0;
var weightData = [[]];
var updateTime  =  8640/speed;
var pause = 0;
var firstTime = 0;
var refreshIntervalId = 0;

function updateData(){
  if(dataVals.length % 4 == 0 && time < 730){
    updateCalorieData(dataVals);
    dataVals = [[]];
    updateWeightData(weightData);
    weightData = [[]];
  }
  calculateWeight();
  dataVals.push([[time,0,0],[time+9,vLunch+vBreakfast,OutVariable/2],[time+18,InVariable,OutVariable],[time+19,0,0]]);
  weightData.push([[time,calculateWeight()],[time+9,calculateWeight()],[time+18,calculateWeight()],[time+19,calculateWeight()]]);
  time  = time + 24;
}

function startSimulation(){
  activity();
  sportType();
  updateSpeed();
  calculateWeight();
  updateData();
  updateData();
  updateData();
  updateData();
  manageUpdate();
}

function reset(){
    location.reload();
}

function manageUpdate(){
   refreshIntervalId = setInterval(function() {
    if(pause == 0){
      updateData();
    }
  },updateTime);
}

function onPause(event){
  console.log(event.target);
  if(event.target.getAttribute('id') == 'Play'){
    event.target.setAttribute('id','Pause')
    event.target.setAttribute('src','./images/pause.png')
    pause = 0;
    startSimulation();
    //$("#PPButton").html('Pause');
  }else {
    pause = 1;
    event.target.setAttribute('id','Play')
    event.target.setAttribute('src','./images/play.png')
    //$("#PPButton").html('Play');
  }
}


function updateSlider(breakfast,lunch,dinner,extraEx,sleepTime){
 vextraEx = extraEx;
 vBreakfast = breakfast;
 vLunch = lunch;
 vDinner = dinner;
 updateInVariable(breakfast,lunch,dinner);
 updateMetabolism(sleepTime);
 sportType();
 updateOutVariable();
}

function activity(){
var value = $('input[name="activity"]:checked').val();
if ( value == 'Sedantry' )
label =  ( 10 );
else if ( value == 'Somewhat active' )
label = ( 20 );
else if ( value == 'Active' )
label = ( 30 );
else if ( value == 'Very Active' )
label = ( 40 );
}

function updateSpeed(){
  var value = $('input[name="speed"]:checked').val();
  if ( value == 'x1' )
  speed =  ( 1 );
  else if ( value == 'x10' )
  speed = ( 10 );
  else if ( value == 'x25' )
  speed = ( 25 );
  else if ( value == 'x50' )
  speed = ( 50 );
  updateTime  =  86400/speed;
  if(refreshIntervalId!=0){
  clearInterval(refreshIntervalId);
  manageUpdate();
}
}

function updateMetabolism(sleepTime){
metabolism = 95-(sleepTime*5);
}

function updateOutVariable(){
  OutVariable = metabolism + extraExercise + label;
  calculateWeight();
}

function calculateWeight(){
  weight  = weight+(InVariable-OutVariable)/3500;
  return weight;
}

function sportType(){
var value = $('input[name="extraExercise"]:checked').val();
if ( value == 'Aerobics and Dance' )
var SportType = 500;
else if ( value == 'Badminton,Squash and Tennis' )
SportType = 500;
else if ( value == 'Baseball' )
SportType =600;
else if ( value == 'Basketball' )
SportType =400;
else if ( value == 'Bicycling' )
SportType =300;
else if ( value == 'Bowling' )
SportType =200;
else if ( value == 'Cricket' )
SportType =500;
else if ( value == 'Golf' )
SportType =300;
else if ( value == 'Running' )
SportType =600;
else if ( value == 'Swimming' )
SportType =600;
else if ( value == 'Weight Lifting' )
SportType =700;
else if ( value == 'Yoga' )
SportType =200;

extraExercise = SportType*vextraEx/60;

}

function updateInVariable(breakfast,lunch,dinner){
  InVariable = breakfast + lunch + dinner;
  calculateWeight();
}

//Radio Buttons
$(document).ready(function() {
    $('input[type=radio][name=activity]').change(function() {
      activity();
      updateOutVariable();
    });
});

$(document).ready(function(){
  $('input[type=radio][name=extraExercise]').change(function(){
    sportType();
    updateOutVariable();
  });
});

$(document).ready(function(){
  $('input[type=radio][name=speed]').change(function(){
    updateSpeed();
  });
});
