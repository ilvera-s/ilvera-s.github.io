/*
 * Даты ретритов на сайте. Чтобы обновить даты, правьте только блок «ДАННЫЕ» ниже.
 *
 * Ключ записи (family, masters, fire) совпадает с data-retreat-key в блоке дат на странице ретрита.
 *
 * Поля записи:
 *   heading        — название ретрита (жирная строка над датами)
 *   dates          — список дат. Каждая дата записывается так:
 *                      { text: "С 1 по 3 мая", until: "2027-05-03" }
 *                    text  — что увидит посетитель;
 *                    until — последний день показа в формате ГГГГ-ММ-ДД (обычно последний день ретрита).
 *                            На следующий день строка скрывается сама.
 *                    Можно писать и просто строкой: "С 1 по 3 мая" — такая дата не скрывается никогда.
 *   additionalInfo — дополнительная строка под датами; "" — не показывать
 *   contactText    — строка внизу блока и единственный текст, когда актуальных дат не осталось
 *
 * Если у ретрита не осталось актуальных дат (или список пуст), на странице показывается только contactText.
 */

/* ===================== ДАННЫЕ ===================== */
var RETREAT_DATES_SOURCE = {
    family: {
        heading: "Ретрит «Сила рода»",
        dates: [
            { text: "С 1 по 3 мая",  until: "2026-05-03" },
            { text: "С 8 по 10 мая", until: "2026-05-10" }
        ],
        additionalInfo: "",
        contactText: "Следующие даты проведения ретритов можно согласовать по телефону: +79173482348"
    },
    masters: {
        heading: "Ретрит для мастеров «Познай свою силу»",
        dates: [
            { text: "С 13 по 17 апреля — мест нет", until: "2026-04-17" },
            { text: "С 15 по 18 мая",               until: "2026-05-18" }
        ],
        additionalInfo: "",
        contactText: "Следующие даты проведения ретритов можно согласовать по телефону: +79173482348"
    },
    fire: {
        heading: "Ретрит «Огненное сердце Урала»",
        dates: [
            // Пример: { text: "С 12 по 14 июня", until: "2027-06-14" },
        ],
        additionalInfo: "",
        contactText: "Следующие даты проведения ретритов можно согласовать по телефону: +79173482348"
    }
};
/* =================== КОНЕЦ ДАННЫХ =================== */


/* Ниже ничего менять не нужно: скрытие прошедших дат и вывод блока на страницу. */
(function () {
    var DEFAULT_CONTACT_TEXT = "Следующие даты проведения ретритов можно согласовать по телефону: +79173482348";
    var ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

    function pad(number) {
        return number < 10 ? "0" + number : String(number);
    }

    // Сегодняшняя дата посетителя в формате ГГГГ-ММ-ДД (строки такого вида корректно сравниваются)
    function todayIso() {
        var now = new Date();
        return now.getFullYear() + "-" + pad(now.getMonth() + 1) + "-" + pad(now.getDate());
    }

    // Оставляет только актуальные даты и превращает их в обычные строки
    function upcomingDates(list, today) {
        var result = [];
        (Array.isArray(list) ? list : []).forEach(function (item) {
            if (typeof item === "string") {
                result.push(item);
                return;
            }
            if (!item || typeof item.text !== "string") {
                return;
            }
            if (item.until && !ISO_DATE.test(item.until)) {
                if (window.console) {
                    console.warn("retreat-dates.js: у даты «" + item.text + "» поле until должно быть в формате ГГГГ-ММ-ДД, дата показана без проверки");
                }
                result.push(item.text);
                return;
            }
            if (!item.until || item.until >= today) {
                result.push(item.text);
            }
        });
        return result;
    }

    var today = todayIso();
    var prepared = {};

    Object.keys(RETREAT_DATES_SOURCE).forEach(function (key) {
        var source = RETREAT_DATES_SOURCE[key] || {};
        prepared[key] = {
            heading: source.heading || "",
            dates: upcomingDates(source.dates, today),
            additionalInfo: String(source.additionalInfo || "").trim(),
            contactText: source.contactText || DEFAULT_CONTACT_TEXT
        };
    });

    // Для страниц, которые читают даты сами: в списке остаются только актуальные строки
    window.RETREAT_DATES = prepared;

    function render() {
        var panel = document.getElementById("datesPanel");
        if (!panel) {
            return;
        }

        var config = prepared[panel.getAttribute("data-retreat-key")] || {};
        var contactText = config.contactText || DEFAULT_CONTACT_TEXT;
        var html;

        if (!config.dates || !config.dates.length) {
            // Актуальных дат нет: только фраза про телефон
            html = '<p style="margin:0">' + contactText + "</p>";
        } else {
            html = "<h2>Ближайшие даты</h2>";
            if (config.heading) {
                html += "<p><strong>" + config.heading + "</strong></p>";
            }
            config.dates.forEach(function (dateText) {
                html += "<p>" + dateText + "</p>";
            });
            if (config.additionalInfo) {
                html += "<p>" + config.additionalInfo + "</p>";
            }
            html += '<p class="dates-contact">' + contactText + "</p>";
        }

        panel.innerHTML = html;
    }

    window.renderRetreatDates = render;

    // Запускаем после разбора страницы: это же перекрывает старый вывод дат, если он ещё остался в коде страницы
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", render);
    } else {
        render();
    }
})();
