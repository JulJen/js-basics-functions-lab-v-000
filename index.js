// Code your solution in this file!

function distanceFromHqInBlocks(distance){
  const hq = 42
  
  if (distance >= hq) {
    return distance - hq
  } else {
    return hq - distance
  }
}


function distanceFromHqInFeet(distance){
  const hq = 42
  const convert = 264

  if (distance >= hq) {
    return (distance - hq) * convert
  } else {
    return (hq - distance) * convert
  }
}


function distanceTravelledInFeet(start_block, end_block){
  const convert = 264

  let distance = (end_block - start_block) * convert
  if (end_block > start_block) {
    return distance
  } else if (start_block > end_block) {
    return distance *= -1
  }
}


function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)
  const base_rate = (distance - 400) * 0.02
  const free = 0
  const standard = 25
  const nope = 'cannot travel that far'

  let fare;
  if (distance <= 400){
    return fare = free
  } else if (distance > 400 && distance < 2000){
    return fare = base_rate
  } else if(distance > 2000 && distance < 2500){
    return fare = standard
  } else {
    return fare = nope
  }
}
