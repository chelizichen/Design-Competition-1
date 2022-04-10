export const currTime = ()=>{
    let datetime =new Date()
    let year = datetime.getFullYear();
    let month = String(datetime.getMonth())
    let date = String(datetime.getDate())
    if(Number(month)<=9)
    {
        month ="0"+ month;
    }
    if(Number(date)<=9)
    {
        date = "0"+date
    }
    return year+"-"+month+"-"+date
}
