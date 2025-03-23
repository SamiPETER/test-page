
function giveRecommendations() {
    let diabetesLevel = document.getElementById('diabetes-level').value;
    let recommendations = "";

    if (diabetesLevel < 70) {
        recommendations = "<p>تناول أطعمة منخفضة GI مثل الخضروات، الحبوب الكاملة، والفواكه غير السكرية.</p>";
    } else if (diabetesLevel > 180) {
        recommendations = "<p>تجنب الأطعمة عالية GI مثل السكر الأبيض، الأطعمة السريعة، والحلويات.</p>";
    } else {
        recommendations = "<p>تناول أطعمة متوازنة تحتوي على بروتينات وكربوهيدرات منخفضة GI مثل الأرز البني والخضروات.</p>";
    }

    document.getElementById('recommendations').innerHTML = recommendations;
}
