function copyMainData() {
    const form = document.getElementById('dataForm');
    let dataString = '';

    const keys = [
        { id: 'post', label: 'Пост' },
        { id: 'settlement', label: 'Населений пункт' },
        { id: 'time', label: 'Час' },
        { id: 'date', label: 'Дата' },
        { id: 'target-number', label: 'Ном.цілі' },
        { id: 'target-name', label: 'Назва цілі' },
        { id: 'azimuth', label: 'Азимут' },
        { id: 'course', label: 'Курс' },
        { id: 'altitude', label: 'Висота' },
        { id: 'distance', label: 'Дистанція' },
        { id: 'results', label: 'Результати роботи' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    navigator.clipboard.writeText(dataString).then(() => {
        alert('Дані основної секції скопійовано до буферу обміну!');
    });
}

function shareMainData() {
    const form = document.getElementById('dataForm');
    let dataString = '';

    const keys = [
        { id: 'post', label: 'Пост' },
        { id: 'settlement', label: 'Населений пункт' },
        { id: 'time', label: 'Час' },
        { id: 'date', label: 'Дата' },
        { id: 'target-number', label: 'Ном.цілі' },
        { id: 'target-name', label: 'Назва цілі' },
        { id: 'azimuth', label: 'Азимут' },
        { id: 'course', label: 'Курс' },
        { id: 'altitude', label: 'Висота' },
        { id: 'distance', label: 'Дистанція' },
        { id: 'results', label: 'Результати роботи' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    if (navigator.share) {
        navigator.share({
            title: 'Дані основної секції',
            text: dataString,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує ф""ункцію поділитися.');
    }
}

function copyRpkData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Витрата БК РПК/5.45:\n';

    const keys = [
        { id: 'rpk-ps', label: 'ПС' },
        { id: 'rpk-ts', label: 'ТС' },
        { id: 'shooter-rpk', label: 'Стрільбу вів' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    navigator.clipboard.writeText(dataString).then(() => {
        alert('Дані секції "Витрата БК РПК/5.45" скопійовано до буферу обміну!');
    });
}

function shareRpkData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Витрата БК РПК/5.45:\n';

    const keys = [
        { id: 'rpk-ps', label: 'ПС' },
        { id: 'rpk-ts', label: 'ТС' },
        { id: 'shooter-rpk', label: 'Стрільбу вів' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    if (navigator.share) {
        navigator.share({
            title: 'Дані секції "Витрата БК РПК/5.45"',
            text: dataString,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}

function copyDhkData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Витрата на БК ДШК/12.7мм:\n';

    const keys = [
        { id: 'mdz', label: 'МДЗ' },
        { id: 'bzt', label: 'БЗТ' },
        { id: 'shooter-dhk', label: 'Стрільбу вів' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    navigator.clipboard.writeText(dataString).then(() => {
        alert('Дані секції "Витрата БК ДШК/12.7мм" скопійовано до буферу обміну!');
    });
}

function shareDhkData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Витрата БК ДШК/12.7мм:\n';

    const keys = [
        { id: 'mdz', label: 'МДЗ' },
        { id: 'bzt', label: 'БЗТ' },
        { id: 'shooter-dhk', label: 'Стрільбу вів' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    if (navigator.share) {
        navigator.share({
            title: 'Дані секції "Витрата БК ДШК/12.7мм"',
            text: dataString,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}

function copyAKData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Витрата БК АК-74/5.45:\n';

    const keys = [
        { id: 'ps', label: 'ПС' },
        { id: 'ts', label: 'ТС' },
        { id: 'shooter-ak', label: 'Стрільбу вів' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    navigator.clipboard.writeText(dataString).then(() => {
        alert('Дані секції "Витрата БК АК-74/5.45" скопійовано до буферу обміну!');
    });
}

function shareAKData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Витрата БК АК-74/5.45:\n';

    const keys = [
        { id: 'ps', label: 'ПС' },
        { id: 'ts', label: 'ТС' },
        { id: 'shooter-ak', label: 'Стрільбу вів' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    if (navigator.share) {
        navigator.share({
            title: 'Дані секції "Витрата БК АК-74/5.45"',
            text: dataString,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}

function copyBofData() {
    const form = document.getElementById('dataForm');
    let dataString = 'BOFORS L70 40мм:\n';

    const keys = [
        { id: '40mm', label: 'Витрата БК' },
        { id: 'shooter', label: 'Задіяний о/с та розрахунки' },
        { id: 'targeting', label: 'Цілевказівку дав' },
        { id: 'video', label: 'Відео' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    navigator.clipboard.writeText(dataString).then(() => {
        alert('Дані секції "BOFORS L70 40мм" скопійовано до буферу обміну!');
    });
}

function shareBofData() {
    const form = document.getElementById('dataForm');
    let dataString = 'BOFORS L70 40мм:\n';

    const keys = [
        { id: '40mm', label: 'Витрата БК' },
        { id: 'shooter', label: 'Задіяний о/с та розрахунки' },
        { id: 'targeting', label: 'Цілевказівку дав' },
        { id: 'video', label: 'Відео' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    if (navigator.share) {
        navigator.share({
            title: 'Дані секції "BOFORS L70 40мм"',
            text: dataString,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}

function copyAllData() {
    const form = document.getElementById('dataForm');
    let dataString = '';

    const mainSectionKeys = [
        { id: 'post', label: 'Пост' },
        { id: 'settlement', label: 'Населений пункт' },
        { id: 'time', label: 'Час' },
        { id: 'date', label: 'Дата' },
        { id: 'target-number', label: 'Ном.цілі' },
        { id: 'target-name', label: 'Назва цілі' },
        { id: 'azimuth', label: 'Азимут' },
        { id: 'course', label: 'Курс' },
        { id: 'altitude', label: 'Висота' },
        { id: 'distance', label: 'Дистанція' },
        { id: 'results', label: 'Результати роботи' }
    ];

    const RpkSectionKeys = [
        { id: 'rpk-ps', label: 'ПС' },
        { id: 'rpk-ts', label: 'ТС' },
        { id: 'shooter-rpk', label: 'Стрільбу вів' }
    ];
    
    const DhkSectionKeys = [
        { id: 'mdz', label: 'МДЗ' },
        { id: 'bzt', label: 'БЗТ' },
        { id: 'shooter-dhk', label: 'Стрільбу вів' }
    ];
    
    const AkSectionKeys = [
        { id: 'ps', label: 'ПС' },
        { id: 'ts', label: 'ТС' },
        { id: 'shooter-ak', label: 'Стрільбу вів' }
    ];

    const BofSectionKeys = [
        { id: '40mm', label: 'Витрата БК' },
        { id: 'shooter', label: 'Задіяний о/с та розрахунки' },
        { id: 'targeting', label: 'Цілевказівку дав' },
        { id: 'video', label: 'Відео' }
    ];

    mainSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });
    
    dataString += '\nВитрата БК РПК/5.45:\n';
    RpkSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });
    
    dataString += '\nВитрата БК ДШК/12.7мм:\n';
    DhkSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    dataString += '\nВитрата БК АК-74/5.45:\n';
    AkSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    dataString += '\nBOFORS L70 40мм:\n';
    BofSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    navigator.clipboard.writeText(dataString).then(() => {
        alert('Усі дані скопійовано до буферу обміну!');
    });
}

function shareAllData() {
    const form = document.getElementById('dataForm');
    let dataString = '';

    const mainSectionKeys = [
        { id: 'post', label: 'Пост' },
        { id: 'settlement', label: 'Населений пункт' },
        { id: 'time', label: 'Час' },
        { id: 'date', label: 'Дата' },
        { id: 'target-number', label: 'Ном.цілі' },
        { id: 'target-name', label: 'Назва цілі' },
        { id: 'azimuth', label: 'Азимут' },
        { id: 'course', label: 'Курс' },
        { id: 'altitude', label: 'Висота' },
        { id: 'distance', label: 'Дистанція' },
        { id: 'results', label: 'Результати роботи' }
    ];
    
    const RpkSectionKeys = [
        { id: 'rpk-ps', label: 'ПС' },
        { id: 'rpk-ts', label: 'ТС' },
        { id: 'shooter-rpk', label: 'Стрільбу вів' }
    ];
    
    const DhkSectionKeys = [
        { id: 'mdz', label: 'МДЗ' },
        { id: 'bzt', label: 'БЗТ' },
        { id: 'shooter-dhk', label: 'Стрільбу вів' }
    ];

    const AkSectionKeys = [
        { id: 'ps', label: 'ПС' },
        { id: 'ts', label: 'ТС' },
        { id: 'shooter-ak', label: 'Стрільбу вів' }
    ];

    const BofSectionKeys = [
        { id: '40mm', label: 'Витрата БК\n' },
        { id: 'shooter', label: 'Задіяний о/с та розрахунки' },
        { id: 'targeting', label: 'Цілевказівку дав' },
        { id: 'video', label: 'Відео' }
    ];

    mainSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });
    
    dataString += '\nВитрата БК РПК/5.45:\n';
    RpkSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });
    
    dataString += '\nВитрата БК ДШК/12.7мм:\n';
    DhkSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    dataString += '\nВитрата БК АК-74/5.45:\n';
    AkSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    dataString += '\nBOFORS L70 40мм:\n';
    BofSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    if (navigator.share) {
        navigator.share({
            title: 'Усі дані',
            text: dataString,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}
