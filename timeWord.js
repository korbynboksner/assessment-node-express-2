const hourToWord = {
    00: "Twelve",
    01: "One",
    02: "Two",
    03: "Three",
    04: "Four",
    05: "Five",
    06: "Six",
    07: "Seven",
    08: "Eight",
    09: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "One",
    14: "Two",
    15: "Three",
    16: "Four",
    17: "Five",
    18: "Six",
    19: "Seven",
    20: "Eight",
    21: "Nine",
    22: "Ten",
    23: "Eleven",
}

const minuteToWord = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Fourty",
    50: "fifty"
}



function timeToWord(time){
    let hour = time.substring(0, 2)
    let minute1 = time.substring(3,4)
    let minute2 = time.substring(4,5)
    let teen = time.substring(3,5)
    console.log(teen)
    if (minute1 == 0 && minute2 == 0){
        if (hour == 00){
            console.log('midnight')
        }else if (hour == 12){
            console.log('noon')
        }else {
            if (hour >= 12){
                
                console.log(hourToWord[parseInt(hour)] + ' pm')  
            }else{
                
                console.log(hourToWord[parseInt(hour)] + ' am') 
            }
            
        }
    }else {
        if (minute1 == 0){
            if (hour >= 12){
                
                console.log(hourToWord[parseInt(hour)] + ' oh ' + minuteToWord[minute2] +' pm')  
            }else{
                  
                console.log(hourToWord[parseInt(hour)] + ' oh ' + minuteToWord[minute2] +' am') 
            }
        } else if(minute1 == 1){

        }
        if (minute1==1){
            if (hour >= 12){
                
                console.log(hourToWord[parseInt(hour)] + ' ' + minuteToWord[teen] +' pm')  
            }else{
                  
                console.log(hourToWord[parseInt(hour)] + ' ' + minuteToWord[teen] +' am') 
            }
        }
        if (minute1==2){
            if (hour >= 12){
                
                console.log(hourToWord[parseInt(hour)] + ' ' + minuteToWord[20] + ' ' + minuteToWord[minute2] +' pm')  
            }else{
                  
                console.log(hourToWord[parseInt(hour)] + ' ' + minuteToWord[20] + ' ' + minuteToWord[minute2] +' am') 
            }
        }
        if (minute1==3){
            if (hour >= 12){
                
                console.log(hourToWord[parseInt(hour)] + ' ' + minuteToWord[30] + ' ' + minuteToWord[minute2] +' pm')  
            }else{
                  
                console.log(hourToWord[parseInt(hour)] + ' ' + minuteToWord[30] + ' ' + minuteToWord[minute2] +' am') 
            }
        }
        if (minute1==4){
            if (hour > 12){
                
                console.log(hourToWord[parseInt(hour)] + ' ' + minuteToWord[40] + ' ' + minuteToWord[minute2] +' pm')  
            }else{
                  
                console.log(hourToWord[parseInt(hour)] + ' ' + minuteToWord[40] + ' ' + minuteToWord[minute2] +' am') 
            }
        }
        if (minute1==5){
            if (hour >= 12){
                
                console.log(hourToWord[parseInt(hour)] + ' ' + minuteToWord[50] + ' ' + minuteToWord[minute2] +' pm')  
            }else{
                  
                console.log(hourToWord[parseInt(hour)] + ' ' + minuteToWord[50] + ' ' + minuteToWord[minute2] +' am') 
            }
        }
    }
}


timeToWord('00:02')
timeToWord('12:32')
timeToWord('01:42')
timeToWord('15:54')
