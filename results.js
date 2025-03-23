
let BMR = localStorage.getItem('BMR');
let TDEE = localStorage.getItem('TDEE');

document.getElementById('bmr-result').innerText = "معدل الأيض الأساسي (BMR): " + BMR;
document.getElementById('tdee-result').innerText = "احتياجات الطاقة اليومية (TDEE): " + TDEE;

function calculateNutrients() {
    let goal = document.getElementById("goal").value;
    let carbs, protein, fat;

    if (goal === "lose") {
        carbs = TDEE * 0.40;
        protein = TDEE * 0.30;
        fat = TDEE * 0.30;
    } else if (goal === "build") {
        carbs = TDEE * 0.50;
        protein = TDEE * 0.30;
        fat = TDEE * 0.20;
    } else {
        carbs = TDEE * 0.45;
        protein = TDEE * 0.25;
        fat = TDEE * 0.30;
    }

    document.getElementById("nutrients").innerHTML = `
        <p>الكربوهيدرات: ${carbs.toFixed(2)} سعرات حرارية</p>
        <p>البروتين: ${protein.toFixed(2)} سعرات حرارية</p>
        <p>الدهون: ${fat.toFixed(2)} سعرات حرارية</p>
    `;
}
