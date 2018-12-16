// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  position: {
    x: 0,
    y: 0
  },
  travelLog: []
}
// ======================

var string = "bfl";


function turnLeft(rover){
  var dir = "";
  switch(rover.direction){
    case "N":
      dir = "W";
      break;

    case "W":
      dir = "S";
      break;
    
    case "S":
      dir = "E";
      break;
    
    default:
      dir = "N";
  }
  return rover.direction = dir ;
}

function turnRight(rover){
  var dir = "";
  switch(rover.direction){
    case "N":
      dir = "E";
      break;

    case "E":
      dir = "S";
      break;
    
    case "S":
      dir = "W";
      break;
    
    default:
      dir = "N";
  }
  return rover.direction = dir ;
}


function moveBackward(rover){
  var prevpos= {x:0,y:0}
  prevpos.x = rover.position.x;
  prevpos.y = rover.position.y;
  rover.travelLog.push(prevpos);

  switch(rover.direction){
    case "N":
      if(rover.position.y < 10){
        rover.position.y ++;
      } else {
        console.log("You don't have space to move the rover");
      }
      break;

    case "E":
      if(rover.position.x > 0){
        rover.position.x --;
      } else {
        console.log("You don't have space to move the rover");
      }
      break;
    
    case "S":
      if(rover.position.y > 0){
        rover.position.y --;
      } else {
        console.log("You don't have space to move the rover");
      }
      break;
    
    default:
      if(rover.position.x < 10){
        rover.position.x ++;
      } else {
        console.log("You don't have space to move the rover");
      }
      break;
  }
  return rover;
}



function moveForward(rover){
  var prevpos= {x:0,y:0}
  prevpos.x = rover.position.x;
  prevpos.y = rover.position.y;
  rover.travelLog.push(prevpos);

  switch(rover.direction){
    case "N":
      if(rover.position.y > 0){
        rover.position.y --;
      } else {
        console.log("You don't have space to move the rover");
      }
      break;

    case "E":
      if(rover.position.x < 10){
        rover.position.x ++;
      } else {
        console.log("You don't have space to move the rover");
      }
      break;
    
    case "S":
      if(rover.position.y < 10){
        rover.position.y ++;
      } else {
        console.log("You don't have space to move the rover");
      }
      break;
    
    default:
      
      if(rover.position.x > 0){
        rover.position.x --;
      } else {
        console.log("You don't have space to move the rover");
      }
      break;
  }
  return rover;
}

function move(string, rover){
  string.toLowerCase();
  for(var i =0; i < string.length;i++){
    switch(string.charAt(i)){
      case 'f':
        moveForward(rover);
        break;
      case 'b':
        moveBackward(rover);
        break;
      case 'l':
        turnLeft(rover);
        moveForward(rover);
        break;
      case 'r':
        turnRight(rover);
        moveForward(rover);
        break;
      default:
        console.log("invalid command");
        break;
    }
  }
  return rover;
}