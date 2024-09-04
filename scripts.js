function copyMainData() {
    let mainData = '';

    const post = document.getElementById("post").value;
    if (post) mainData += `Пост: ${post}\n`;

    const settlement = document.getElementById("settlement").value;
    if (settlement) mainData += `Населений пункт: ${settlement}\n`;

    const time = document.getElementById("time").value;
    if (time) mainData += `Час: ${time}\n`;

    const date = document.getElementById("date").value;
    if (date) mainData += `Дата: ${date}\n`;

    const targetNumber = document.getElementById("target-number").value;
    if (targetNumber) mainData += `Ном.цілі: ${targetNumber}\n`;

    const targetName = document.getElementById("target-name").value;
    if (targetName) mainData += `Назва цілі: ${targetName}\n`;

    const azimuth = document.getElementById("azimuth").value;
    if (azimuth) mainData += `Азимут: ${azimuth}°\n`;

    const course = document.getElementById("course").value;
    if (course) mainData += `Курс: ${course}°\n`;

    const altitude = document.getElementById("altitude").value;
    if (altitude) mainData += `Висота: ${altitude}\n`;

    const distance = document.getElementById("distance").value;
    if (distance) mainData += `Дистанція: ${distance}\n`;

    const results = document.getElementById("results").value;
    if (results) mainData += `Результати роботи: ${results}\n`;

    navigator.clipboard.writeText(mainData).then(() => {
        alert("Дані основної секції скопійовані.");
    });
}

function shareMainData() {
    let mainData = '';

    const post = document.getElementById("post").value;
    if (post) mainData += `Пост: ${post}\n`;

    const settlement = document.getElementById("settlement").value;
    if (settlement) mainData += `Населений пункт: ${settlement}\n`;

    const time = document.getElementById("time").value;
    if (time) mainData += `Час: ${time}\n`;

    const date = document.getElementById("date").value;
    if (date) mainData += `Дата: ${date}\n`;

    const targetNumber = document.getElementById("target-number").value;
    if (targetNumber) mainData += `Ном.цілі: ${targetNumber}\n`;

    const targetName = document.getElementById("target-name").value;
    if (targetName) mainData += `Назва цілі: ${targetName}\n`;

    const azimuth = document.getElementById("azimuth").value;
    if (azimuth) mainData += `Азимут: ${azimuth}°\n`;

    const course = document.getElementById("course").value;
    if (course) mainData += `Курс: ${course}°\n`;

    const altitude = document.getElementById("altitude").value;
    if (altitude) mainData += `Висота: ${altitude}\n`;

    const distance = document.getElementById("distance").value;
    if (distance) mainData += `Дистанція: ${distance}\n`;

    const results = document.getElementById("results").value;
    if (results) mainData += `Результати роботи: ${results}\n`;

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
    let akData = '';

    const pm = document.getElementById("pm").value;
    if (pm) akData += `ПМ: ${pm}\n`;

    const ts = document.getElementById("ts").value;
    if (ts) akData += `ТС: ${ts}\n`;

    const targetingAk = document.getElementById("targeting-ak").value;
    if (targetingAk) akData += `Цілевказівку дав: ${targetingAk}\n`;

    const shooterAk = document.getElementById("shooter-ak").value;
    if (shooterAk) akData += `Стрільбу вів: ${shooterAk}\n`;

    navigator.clipboard.writeText(akData).then(() => {
        alert("Дані секції АК-74/5.45 скопійовані.");
    });
}

function shareAKData() {
    let akData = '';

    const pm = document.getElementById("pm").value;
    if (pm) akData += `ПМ: ${pm}\n`;

    const ts = document.getElementById("ts").value;
    if (ts) akData += `ТС: ${ts}\n`;

    const targetingAk = document.getElementById("targeting-ak").value;
    if (targetingAk) akData += `Цілевказівку дав: ${targetingAk}\n`;

    const shooterAk = document.getElementById("shooter-ak").value;
    if (shooterAk) akData += `Стрільбу вів: ${shooterAk}\n`;

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
    let iglaData = '';

    const bkUsage = document.getElementById("bk-usage").value;
    if (bkUsage) iglaData += `НДЖ: ${bkUsage}\n`;

    const missile = document.getElementById("missile").value;
    if (missile) iglaData += `Ракета: ${missile}\n`;

    const targeting = document.getElementById("targeting").value;
    if (targeting) iglaData += `Цілевказівку дав: ${targeting}\n`;

    const shooter = document.getElementById("shooter").value;
    if (shooter) iglaData += `Стрілець: ${shooter}\n`;

    navigator.clipboard.writeText(iglaData).then(() => {
        alert("Дані секції ПЗРК Игла-1 скопійовані.");
    });
}

function shareIglaData() {
    let iglaData = '';

    const bkUsage = document.getElementById("bk-usage").value;
    if (bkUsage) iglaData += `НДЖ: ${bkUsage}\n`;

    const missile = document.getElementById("missile").value;
    if (missile) iglaData += `Ракета: ${missile}\n`;

    const targeting = document.getElementById("targeting").value;
    if (targeting) iglaData += `Цілевказівку дав: ${targeting}\n`;

    const shooter = document.getElementById("shooter").value;
    if (shooter) iglaData += `Стрілець: ${shooter}\n`;

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
    let dataString = '';

    const mainData = copyMainData().trim();
    if (mainData) dataString += `Основна секція:\n${mainData}\n`;

    const akData = copyAKData().trim();
    if (akData) dataString += `Расход БК АК-74/5.45:\n${akData}\n`;

    const iglaData = copyIglaData().trim();
    if (iglaData) dataString += `Розхід Б.К. ПЗРК Игла-1:\n${iglaData}\n`;

    if (dataString) {
        navigator.clipboard.writeText(dataString).then(() => {
            alert("Усі дані скопійовані.");
        });
    } else {
        alert("Немає даних для копіювання.");
    }
}

function shareAllData() {
    let dataString = '';

    const mainData = copyMainData().trim();
    if (mainData) dataString += `Основна секція:\n${mainData}\n`;

    const akData = copyAKData().trim();
    if (akData) dataString += `Расход БК АК-74/5.45:\n${akData}\n`;

    const iglaData = copyIglaData().trim();
    if (iglaData) dataString += `Розхід Б.К. ПЗРК Игла-1:\n${iglaData}\n`;

    if (dataString) {
        if (navigator.share) {
            navigator.share({
                title: 'Усі дані',
                text: dataString,
            }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
        } else {
            alert('Ваш браузер не підтримує функцію поділитися.');
        }
    } else {
        alert("Немає даних для поділитися.");
    }
}
