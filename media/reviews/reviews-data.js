(function () {
  // Сколько плиток показывать в галерее. Если отзывов меньше, они повторяются по кругу.
  const totalSlots = 36;

  // Поля каждого отзыва (все необязательны):
  //   name, city  — подпись в панели просмотра («Тимур, г. Уфа»)
  //   regalia     — регалии, показываются под именем: "Врач-психиатр с 20-летним стажем."
  //   photo       — миниатюра в сетке (по умолчанию media/reviews/<номер>.jpeg)
  //   scan        — скан отзыва   (по умолчанию media/reviews/r<номер>.jpeg)
  //   video       — видеоотзыв, например "media/reviews/v28.mp4"
  // Текст отзыва здесь не хранится: на сайте показывается скан.
  const items = {
    "1": {
      name: "Тимур",
      city: "г. Уфа",
      photo: "media/reviews/1.jpeg",
      scan: "media/reviews/r1.jpeg"
    },
    "2": {
      name: "Гульнара",
      city: "г. Уфа",
      photo: "media/reviews/2.jpeg",
      scan: "media/reviews/r2.jpeg"
    },
    "3": {
      name: "Ольга",
      city: "г. Москва",
      photo: "media/reviews/3.jpeg",
      scan: "media/reviews/r3.jpeg"
    },
    "4": {
      name: "Ильнур",
      city: "г. Уфа",
      photo: "media/reviews/4.jpeg",
      scan: "media/reviews/r4.jpeg"
    },
    "5": {
      name: "Альбина",
      city: "г. Уфа",
      photo: "media/reviews/5.jpeg",
      scan: "media/reviews/r5.jpeg"
    },
    "6": {
      name: "Айгыль",
      city: "г. Казань",
      photo: "media/reviews/6.jpeg",
      scan: "media/reviews/r6.jpeg"
    },
    "7": {
      name: "Ольга",
      city: "г. Ярославль",
      photo: "media/reviews/7.jpeg",
      scan: "media/reviews/r7.jpeg"
    },
    "8": {
      name: "Регина",
      city: "г. Уфа",
      photo: "media/reviews/8.jpeg",
      scan: "media/reviews/r8.jpeg"
    },
    "9": {
      name: "Регина",
      city: "г. Уфа",
      photo: "media/reviews/9.jpeg",
      scan: "media/reviews/r9.jpeg"
    },
    "10": {
      name: "Алексей",
      city: "г. Уфа",
      photo: "media/reviews/10.jpeg",
      scan: "media/reviews/r10.jpeg"
    },
    "11": {
      name: "Татьяна",
      city: "г. Красноярск",
      photo: "media/reviews/11.jpeg",
      scan: "media/reviews/r11.jpeg"
    },
    "12": {
      name: "Альбина",
      city: "г. Уфа",
      photo: "media/reviews/12.jpeg",
      scan: "media/reviews/r12.jpeg"
    },
    "13": {
      name: "Татьяна",
      city: "г. Уфа",
      photo: "media/reviews/13.jpeg",
      scan: "media/reviews/r13.jpeg"
    },
    "14": {
      name: "Татьяна",
      city: "г. Москва",
      photo: "media/reviews/14.jpeg",
      scan: "media/reviews/r14.jpeg"
    },
    "15": {
      name: "Анна",
      city: "г. Москва",
      photo: "media/reviews/15.jpeg",
      scan: "media/reviews/r15.jpeg"
    },
    "16": {
      name: "Екатерина",
      city: "г. Уфа",
      photo: "media/reviews/16.jpeg",
      scan: "media/reviews/r16.jpeg"
    },
    "17": {
      name: "Надежда",
      city: "г. Уфа",
      photo: "media/reviews/17.jpeg",
      scan: "media/reviews/r17.jpeg"
    },
    "18": {
      name: "Зиля",
      city: "г. Туймазы",
      photo: "media/reviews/18.jpeg",
      scan: "media/reviews/r18.jpeg"
    },
    "19": {
      name: "Роман",
      city: "с. Тюлюк",
      photo: "media/reviews/19.jpeg",
      scan: "media/reviews/r19.jpeg"
    },
    "20": {
      name: "Татьяна",
      city: "г. Красноярск",
      photo: "media/reviews/20.jpeg",
      scan: "media/reviews/r20.jpeg"
    },
    "21": {
      name: "Светлана",
      city: "г. Алания",
      photo: "media/reviews/21.jpeg",
      scan: "media/reviews/r21.jpeg"
    },
    "22": {
      name: "Светлана",
      city: "г. Уфа",
      photo: "media/reviews/22.jpeg",
      scan: "media/reviews/r22.jpeg"
    },
    "23": {
      name: "Лиана",
      city: "г. Казань",
      photo: "media/reviews/23.jpeg",
      scan: "media/reviews/r23.jpeg"
    },
    "24": {
      name: "Ирина",
      city: "г. Уфа",
      photo: "media/reviews/24.jpeg",
      scan: "media/reviews/r24.jpeg"
    },
    "25": {
      name: "Юлия",
      city: "г. Самара",
      photo: "media/reviews/25.jpeg",
      scan: "media/reviews/r25.jpeg"
    },
    "26": {
      name: "Людмила",
      city: "г. Магнитогорск",
      photo: "media/reviews/26.jpeg",
      scan: "media/reviews/r26.jpeg"
    },
    "27": {
      name: "Ольга",
      city: "г. Магнитогорск",
      photo: "media/reviews/27.jpeg",
      scan: "media/reviews/r27.jpeg"
    },
    "28": {
      name: "Максим",
      city: "г. Казань",
      regalia: "Врач-психиатр с 20-летним стажем, нарколог, гипнотерапевт. 7 лет работает кинезитерапевтом в центре Бубновского. Интеллект-тренер (тренер по ресурсному состоянию).",
      photo: "media/reviews/28.jpeg",
      scan: "media/reviews/r28.jpeg",
      video: "media/reviews/v28.mp4"
    },
    "29": {
      name: "Давид",
      city: "г. Санкт-Петербург",
      regalia: "29 лет, профессиональный гипнотерапевт и целитель.",
      photo: "media/reviews/29.jpeg",
      scan: "media/reviews/r29.jpeg",
      video: "media/reviews/v29.mp4"
    }
  };

  window.reviewsData = {
    totalSlots: totalSlots,
    items: items
  };
})();
