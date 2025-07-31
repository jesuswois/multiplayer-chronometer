export const formatTime = (timer,unit) => {
    let result = '0';
    if(timer){
        switch (unit) {
            case 'ms':
                // Miliseconds
                result = timer
                if (result > 999) result = result - (1000 * Math.floor(result / 1000))
                break;
            case 's':
                // Seconds
                result = Math.floor(timer / 1000)
                if (result > 60) result = result - (60 * Math.floor(result / 60))
                break;
            case 'm':
                // Minutes
                result = Math.floor((timer / 1000) / 60)
                if (result > 60) result = result - (60 * Math.floor(result / 60))
                break;
            case 'h':
                // Hours
                result = Math.floor(((timer / 1000) / 60) / 60)
                break;
        }
    }
    result = result.toString()
    if(result<10) result = '0'+result
    return result
}