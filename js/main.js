function calculateAge() {
    const input = document.getElementById("birthdate");
    const error = document.getElementById("date-error");
    const result = document.getElementById("age-result");

    if (!input.value) {
        alert("Please select your birth date");
        return;
    }

    const birthDate = new Date(input.value);
    const today = new Date();

    if (birthDate > today) {
        error.style.display = "block";
        result.style.display = "none";
        return;
    }

    error.style.display = "none";

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < today) nextBirthday.setFullYear(today.getFullYear() + 1);

    let daysUntil = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

    const options = { year: "numeric", month: "long", day: "numeric" };

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("display-birthdate").textContent = birthDate.toLocaleDateString("en-US", options);
    document.getElementById("display-currentdate").textContent = today.toLocaleDateString("en-US", options);
    document.getElementById("next-birthday").textContent = nextBirthday.toLocaleDateString("en-US", options);
    document.getElementById("days-until").textContent = daysUntil;

    result.style.display = "block";
}

window.onload = () => {
    document.getElementById("birthdate").max = new Date().toISOString().split("T")[0];
};

