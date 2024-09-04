function copyMainData() {
    const post = document.getElementById("post").value;
    const settlement = document.getElementById("settlement").value;
    const time = document.getElementById("time").value;
    const date = document.getElementById("date").value;
    const targetNumber = document.getElementById("target-number").value;
    const targetName = document.getElementById("target-name").value;
    const azimuth = document.getElementById("azimuth").value;
    const course = document.getElementById("course").value;
    const altitude = document.getElementById("altitude").value;
    const distance = document.getElementById("distance").value;
    const results = document.getElementById("results").value;

    const mainData = `
Пост: ${post}
Населений пункт: ${settlement}
Час: ${time}
Дата: ${date}
Ном.цілі: ${targetNumber}
Назва цілі: ${targetName}
Азимут: ${azimuth}°
Курс: ${course}°
Висота: ${altitude}
Дистанція: ${distance}
Результати роботи: ${results}
`;

    navigator.clipboard.writeText(mainData).then(() => {
        alert("Дані основної секції скопійовані.");
    });
}

function shareMainData() {
    const post = document.getElementById("post").value;
    const settlement = document.getElementById("settlement").value;
    const time = document.getElementById("time").value;
    const date = document.getElementById("date").value;
    const targetNumber = document.getElementById("target-number").value;
    const targetName = document.getElementById("target-name").value;
    const azimuth = document.getElementById("azimuth").value;
    const course = document.getElementById("course").value;
    const altitude = document.getElementById("altitude").value;
    const distance = document.getElementById("distance").value;
    const results = document.getElementById("results").value;

    const mainData = `
Пост: ${post}
Населений пункт: ${settlement}
Час: ${time}
Дата: ${date}
Ном.цілі: ${targetNumber}
Назва цілі: ${targetName}
Азимут: ${azimuth}°
Курс: ${course}°
Висота: ${altitude}
Дистанція: ${distance}
Результати роботи: ${results}
`;

    if (navigator.share) {
        navigator.share({
            title: 'Дані основної секції',
            text: mainData,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}

function copyAKData() {
    const pm = document.getElementById("pm").value;
    const ts = document.getElementById("ts").value;
    const targetingAk = document.getElementById("targeting-ak").value;
    const shooterAk = document.getElementById("shooter-ak").value;

    const akData = `
ПМ: ${pm}
ТС: ${ts}
Цілевказівку дав: ${targetingAk}
Стрільбу вів: ${shooterAk}
`;

    navigator.clipboard.writeText(akData).then(() => {
        alert("Дані секції АК-74/5.45 скопійовані.");
    });
}

function shareAKData() {
    const pm = document.getElementById("pm").value;
    const ts = document.getElementById("ts").value;
    const targetingAk = document.getElementById("targeting-ak").value;
    const shooterAk = document.getElementById("shooter-ak").value;

    const akData = `
ПМ: ${pm}
ТС: ${ts}
Цілевказівку дав: ${targetingAk}
Стрільбу вів: ${shooterAk}
`;

    if (navigator.share) {
        navigator.share({
            title: 'Дані секції АК-74/5.45',
            text: akData,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}

function copyIglaData() {
    const bkUsage = document.getElementById("bk-usage").value;
    const missile = document.getElementById("missile").value;
    const targeting = document.getElementById("targeting").value;
    const shooter = document.getElementById("shooter").value;

    const iglaData = `
НДЖ: ${bkUsage}
Ракета: ${missile}
Цілевказівку дав: ${targeting}
Стрілець: ${shooter}
`;

    navigator.clipboard.writeText(iglaData).then(() => {
        alert("Дані секції ПЗРК Игла-1 скопійовані.");
    });
}

function shareIglaData() {
    const bkUsage = document.getElementById("bk-usage").value;
    const missile = document.getElementById("missile").value;
    const targeting = document.getElementById("targeting").value;
    const shooter = document.getElementById("shooter").value;

    const iglaData = `
НДЖ: ${bkUsage}
Ракета: ${missile}
Цілевказівку дав: ${targeting}
Стрілець: ${shooter}
`;

    if (navigator.share) {
        navigator.share({
            title: 'Дані секції ПЗРК Игла-1',
            text: iglaData,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}

function copyAllData() {
    const mainData = `
Основна секція:
Пост: ${document.getElementById("post").value}
Населений пункт: ${document.getElementById("settlement").value}
Час: ${document.getElementById("time").value}
Дата: ${document.getElementById("date").value}
Ном.цілі: ${document.getElementById("target-number").value}
Назва цілі: ${document.getElementById("target-name").value}
Азимут: ${document.getElementById("azimuth").value}°
Курс: ${document.getElementById("course").value}°
Висота: ${document.getElementById("altitude").value}
Дистанція: ${document.getElementById("distance").value}
Результати роботи: ${document.getElementById("results").value}
`;

    const akData = `
Расход БК АК-74/5.45:
ПМ: ${document.getElementById("pm").value}
ТС: ${document.getElementById("ts").value}
Цілевказівку дав: ${document.getElementById("targeting-ak").value}
Стрільбу вів: ${document.getElementById("shooter-ak").value}
`;

    const iglaData = `
Розхід Б.К. ПЗРК Игла-1:
НДЖ: ${document.getElementById("bk-usage").value}
Ракета: ${document.getElementById("missile").value}
Цілевказівку дав: ${document.getElementById("targeting").value}
Стрілець: ${document.getElementById("shooter").value}
`;

    const dataString = mainData + akData + iglaData;

    navigator.clipboard.writeText(dataString).then(() => {
        alert("Усі дані скопійовані.");
    });
}

function shareAllData() {
    const mainData = `
Основна секція:
Пост: ${document.getElementById("post").value}
Населений пункт: ${document.getElementById("settlement").value}
Час: ${document.getElementById("time").value}
Дата: ${document.getElementById("date").value}
Ном.цілі: ${document.getElementById("target-number").value}
Назва цілі: ${document.getElementById("target-name").value}
Азимут: ${document.getElementById("azimuth").value}°
Курс: ${document.getElementById("course").value}°
Висота: ${document.getElementById("altitude").value}
Дистанція: ${document.getElementById("distance").value}
Результати роботи: ${document.getElementById("results").value}
`;

    const akData = `
Расход БК АК-74/5.45:
ПМ: ${document.getElementById("pm").value}
ТС: ${document.getElementById("ts").value}
Цілевказівку дав: ${document.getElementById("targeting-ak").value}
Стрільбу вів: ${document.getElementById("shooter-ak").value}
`;

    const iglaData = `
Розхід Б.К. ПЗРК Игла-1:
НДЖ: ${document.getElementById("bk-usage").value}
Ракета: ${document.getElementById("missile").value}
Цілевказівку дав: ${document.getElementById("targeting").value}
Стрілець: ${document.getElementById("shooter").value}
`;

    const dataString = mainData + akData + iglaData;

    if (navigator.share) {
        navigator.share({
            title: 'Усі дані',
            text: dataString,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}
