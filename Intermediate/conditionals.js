const age =18
if(age>18){
    console.log('Congrats, you can vote.')
}
else if(age==18){
    console.log('You now can start voting.')
}
else{
    console.log('Sorry,you cannot vote')
}


const option =1
switch(option){
    case 1: console.log('BMW-S1000RR')
    break
    case 2: console.log('Kawasaki H2-R')
    break
    case 3: console.log('Honda Fireblade SP-RR-R')
    break
    case 4: console.log('Ducati V4-S')
    break
    case 5: console.log('BMW-G310-RR')
    break
    default: console.log('Invalid Option, no bike available')
}