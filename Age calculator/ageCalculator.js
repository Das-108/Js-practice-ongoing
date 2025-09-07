let age = document.getElementById("result");

document.getElementById("calcAge").addEventListener("click", function () {
    const usersDobValue = document.getElementById("dob").value;
    if (!usersDobValue) {
        age.innerHTML = "Please select a valid date of birth.";
        return;
    }

    let currentTime = new Date();
    let usersDob = new Date(usersDobValue);

    let years = currentTime.getFullYear() - usersDob.getFullYear();
    let months = currentTime.getMonth() - usersDob.getMonth();
    let days = currentTime.getDate() - usersDob.getDate();

    if (days < 0) {
        months -= 1;
        // Get days in previous month
        let daysInPrevMonth = new Date(currentTime.getFullYear(), currentTime.getMonth(), 0).getDate();
        days += daysInPrevMonth;
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    age.innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
});
