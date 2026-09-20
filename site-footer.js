/*
 * Общий подвал сайта: иконки контактов и копирайт.
 *
 * Подключается на каждой странице одной строкой перед </body>:
 *     <script src="site-footer.js"></script>
 *
 * Контакты и подпись правятся ТОЛЬКО здесь: список CONTACTS ниже.
 * Порядок в списке = порядок иконок на сайте.
 *
 * Иконки: Font Awesome Free 6 (fontawesome.com), лицензия CC BY 4.0 — https://fontawesome.com/license/free
 */
(function () {
    'use strict';

    var SIGNATURE = 'Ильвера Ситдикова. Духовный наставник.';

    /* ===================== КОНТАКТЫ ===================== */
    var CONTACTS = [
        { kind: 'tg',      label: 'Написать в Telegram', href: 'https://t.me/ILVERA69',                    icon: 'telegram'  },
        { kind: 'channel', label: 'Telegram-канал',      href: 'https://t.me/+0lgaxWEGh8gwZTg6',           icon: 'bullhorn'  },
        { kind: 'wa',      label: 'Написать в WhatsApp', href: 'https://wa.me/qr/M2SDO3W56BNOA1',          icon: 'whatsapp'  },
        { kind: 'inst',    label: 'Instagram',           href: 'https://instagram.com/sitdikova_ilvera',   icon: 'instagram' },
        { kind: 'mail',    label: 'Написать на e-mail',  href: 'mailto:ilvera69@mail.ru',                  icon: 'envelope', sameTab: true },
        { kind: 'max',     label: 'Написать в MAX',      href: 'https://max.ru/u/f9LHodD0cOJS7diLaHgIue6mxa4Qjx1kaxz4WjEKQkUqwhomlWcYtCnDxpA', text: 'MAX' },
        { kind: 'vk',      label: 'ВКонтакте',           href: 'https://vk.ru/id177739125',                icon: 'vk'        },
        { kind: 'yt',      label: 'YouTube',             href: 'https://youtube.com/@mommy_dragon?si=_bSPuVhnY9Qzcek5', icon: 'youtube' }
    ];
    /* =================== КОНЕЦ КОНТАКТОВ ================== */

    var ICONS = {
        telegram: ['0 0 496 512', 'M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z'],
        bullhorn: ['0 0 512 512', 'M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75l-8.7 0-32 0-96 0c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-147.6c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4L480 32zm-64 76.7L416 240l0 131.3C357.2 317.8 280.5 288 200.7 288l-8.7 0 0-96 8.7 0c79.8 0 156.5-29.8 215.3-83.3z'],
        whatsapp: ['0 0 448 512', 'M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'],
        instagram: ['0 0 448 512', 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'],
        envelope: ['0 0 512 512', 'M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z'],
        vk: ['0 0 448 512', 'M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z'],
        youtube: ['0 0 576 512', 'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z']
    };

    var CSS = [
        '.site-footer{padding:40px 0;text-align:center;background:#333;color:#B8B8B8;font-family:"Montserrat",system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;font-size:.9rem;line-height:1.6}',
        '.site-footer__inner{max-width:1200px;margin:0 auto;padding:0 20px}',
        '.site-footer__icons{display:flex;flex-wrap:wrap;justify-content:center;gap:20px;margin-bottom:20px}',
        '.site-footer__link{width:45px;height:45px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:#444;color:#fff;font-size:1.2rem;text-decoration:none;transition:background-color .3s ease,color .3s ease,transform .3s ease}',
        '.site-footer__link:hover{transform:translateY(-5px)}',
        '.site-footer__link:focus-visible{outline:3px solid #C5A880;outline-offset:3px}',
        '.site-footer__link--tg:hover{background:#229ED9}',
        '.site-footer__link--wa:hover{background:#25D366}',
        '.site-footer__link--inst:hover{background:#C13584}',
        '.site-footer__link--vk:hover{background:#0077FF}',
        '.site-footer__link--yt:hover{background:#FF0000}',
        '.site-footer__link--mail:hover{background:#EA4335}',
        '.site-footer__link--channel{background:#fff;color:#1B7DAE;border:2px solid #229ED9}',
        '.site-footer__link--channel:hover{background:#229ED9;color:#fff}',
        '.site-footer__link--max{background:#20232a;border:1px solid #3a3f4b}',
        '.site-footer__link--max:hover{background:#2f3440}',
        '.site-footer__max{font-family:"Arial Black",Arial,sans-serif;font-size:.65rem;font-weight:700;letter-spacing:.08em;line-height:1}',
        '.site-footer__icon{width:1em;height:1em;fill:currentColor}',
        '@media (prefers-reduced-motion:reduce){.site-footer__link{transition:none}.site-footer__link:hover{transform:none}}'
    ].join('\n');

    function iconMarkup(name) {
        var icon = ICONS[name];
        return '<svg class="site-footer__icon" viewBox="' + icon[0] + '" aria-hidden="true" focusable="false"><path d="' + icon[1] + '"/></svg>';
    }

    function linkMarkup(contact) {
        var attrs = contact.sameTab ? '' : ' target="_blank" rel="noopener noreferrer"';
        var inner = contact.icon ? iconMarkup(contact.icon) : '<span class="site-footer__max" aria-hidden="true">' + contact.text + '</span>';
        return '<a class="site-footer__link site-footer__link--' + contact.kind + '" href="' + contact.href + '"' + attrs +
            ' aria-label="' + contact.label + '" title="' + contact.label + '">' + inner + '</a>';
    }

    function build() {
        if (document.getElementById('site-footer')) {
            return;
        }

        var style = document.createElement('style');
        style.id = 'site-footer-style';
        style.textContent = CSS;
        document.head.appendChild(style);

        var footer = document.createElement('footer');
        footer.className = 'site-footer';
        footer.id = 'site-footer';
        footer.innerHTML =
            '<div class="site-footer__inner">' +
                '<div class="site-footer__icons">' + CONTACTS.map(linkMarkup).join('') + '</div>' +
                '<p>© ' + new Date().getFullYear() + ' ' + SIGNATURE + '</p>' +
            '</div>';
        document.body.appendChild(footer);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', build);
    } else {
        build();
    }
})();
