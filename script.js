function inflationCalc() {
    let inflationRate = document.querySelector('#inflationRate').value;
    let money = document.querySelector('#money').value;
    let year = document.querySelector('#years').value;

    let worth = parseFloat(money) + (parseFloat(money) * (parseFloat(inflationRate) / 100));

    console.log(worth)

    for(let i = 1; i < year; i++) {
        worth += worth * (inflationRate / 100);

        
    }
    
    worth = worth.toFixed(2);
    
    let notification = document.createElement('div');
    notification.className = 'notification-value';
    notification.innerText = `Danasnjih ${money}€ vredi isto kao ${worth}€ za ${year} godina.`
    document.querySelector('.container').appendChild(notification);

}