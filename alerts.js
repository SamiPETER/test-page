
let sugarLevel = localStorage.getItem('sugarLevel');

function checkAlerts() {
    let alerts = "";
    
    if (sugarLevel < 70) {
        alerts = "<p>تحذير: مستوى السكر في الدم منخفض. تأكد من تناول وجبة خفيفة.</p>";
    } else if (sugarLevel > 180) {
        alerts = "<p>تحذير: مستوى السكر في الدم مرتفع. تجنب الأطعمة الغنية بالسكر.</p>";
    } else {
        alerts = "<p>مستوى السكر في الدم طبيعي. استمر في اتباع نظامك الغذائي الصحي.</p>";
    }

    document.getElementById('alerts').innerHTML = alerts;
}

checkAlerts();
