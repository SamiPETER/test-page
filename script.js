
document.getElementById("data-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let gender = document.getElementById("gender").value;
    let activity = document.getElementById("activity").value;

    // حساب BMR بناءً على الجنس
    let BMR;
    if (gender === "male") {
        BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        BMR = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    // حساب TDEE
    let TDEE = BMR * activity;

    // تخزين النتائج في localStorage
    localStorage.setItem("BMR", BMR);
    localStorage.setItem("TDEE", TDEE);

    // الانتقال إلى صفحة النتائج
    window.location.href = "results.html";
});
