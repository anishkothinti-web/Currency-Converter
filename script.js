function convert(){
    let amount=document.getElementById('amount').value;
    let from=document.getElementById('from').value
    let to=document.getElementById('to').value
    let rates={
    USD:1,
    INR:91,
    EUR:0.92,
    AUD:1.42,
    }
    let amountIn=amount/rates[from]
    let convertedAmount=amountIn*rates[to]
    document.getElementById('result').innerHTML=amount+' '+from+'='+convertedAmount.toFixed(2)+' '+to;
}