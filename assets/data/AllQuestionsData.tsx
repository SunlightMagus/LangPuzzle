import { QuizQuestion } from '~/types';

const questions: QuizQuestion[] = [
  {
    id: 'q1',
    type: 'MULTIPLE_CHOICE',
    text: "Kur yra 'Yamato'?",
    options: [
      {
        id: 'option1',
        image: 'https://res.cloudinary.com/dmzg0apbj/image/upload/e_background_removal/f_png/v1749649211/61cD34KOmQL._AC_UF1000_1000_QL80__omhq1u.jpg',
        text: 'Rebellion',
      },
      {
        id: 'option2',
        image: 'https://res.cloudinary.com/dmzg0apbj/image/upload/e_background_removal/f_png/v1749649434/61GswPhm0pL._AC_UF1000_1000_QL80__yvdafg.jpg',
        text: 'Yamato',
        correct: true,
      },
      {
        id: 'option3',
        image: 'https://res.cloudinary.com/dmzg0apbj/image/upload/e_background_removal/f_png/v1749649342/51RX-P1Ve2L._AC_UF1000_1000_QL80__p8ipsz.jpg',
        text: 'Red Queen',
      },
      {
        id: 'option4',
        image: 'https://res.cloudinary.com/dmzg0apbj/image/upload/e_background_removal/f_png/v1749649507/518Q_JmHHNL._UF894_1000_QL80__b3yoch.jpg',
        text: 'Ebony & Ivory',
      },
    ],
  },
  {
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'I am the storm that is approaching',
    answer: 'As esu audra kuri arteja',
  },
  {
    id: 'q2',
    type: 'MULTIPLE_CHOICE',
    text: "Kur yra 'Red Queen'?",
    options: [
      {
        id: 'option4',
        image: 'https://res.cloudinary.com/dmzg0apbj/image/upload/e_background_removal/f_png/v1749649507/518Q_JmHHNL._UF894_1000_QL80__b3yoch.jpg',
        text: 'Ebony & Ivory',
      },
      {
        id: 'option1',
        image: 'https://res.cloudinary.com/dmzg0apbj/image/upload/e_background_removal/f_png/v1749649211/61cD34KOmQL._AC_UF1000_1000_QL80__omhq1u.jpg',
        text: 'Rebellion',
      },
      {
        id: 'option3',
        image: 'https://res.cloudinary.com/dmzg0apbj/image/upload/e_background_removal/f_png/v1749649342/51RX-P1Ve2L._AC_UF1000_1000_QL80__p8ipsz.jpg',
        text: 'Red Queen',
        correct: true,
      },
      {
        id: 'option2',
        image: 'https://res.cloudinary.com/dmzg0apbj/image/upload/e_background_removal/f_png/v1749649434/61GswPhm0pL._AC_UF1000_1000_QL80__yvdafg.jpg',
        text: 'Yamato',
      },
    ],
  },
  {
    id: 'q6',
    type: 'OPEN_ENDED',
    text: 'Power is everything',
    answer: 'Galia yra viskas',
  },
  {
    id: 'q3',
    type: 'MULTIPLE_CHOICE',
    text: "Kur yra 'Rebellion'?",
    options: [
      {
        id: 'option3',
        image: 'https://res.cloudinary.com/dmzg0apbj/image/upload/e_background_removal/f_png/v1749649342/51RX-P1Ve2L._AC_UF1000_1000_QL80__p8ipsz.jpg',
        text: 'Red Queen',
      },
      {
        id: 'option2',
        image: 'https://res.cloudinary.com/dmzg0apbj/image/upload/e_background_removal/f_png/v1749649434/61GswPhm0pL._AC_UF1000_1000_QL80__yvdafg.jpg',
        text: 'Yamato',
      },
      {
        id: 'option4',
        image: 'https://res.cloudinary.com/dmzg0apbj/image/upload/e_background_removal/f_png/v1749649507/518Q_JmHHNL._UF894_1000_QL80__b3yoch.jpg',
        text: 'Ebony & Ivory',
      },
      {
        id: 'option1',
        image: 'https://res.cloudinary.com/dmzg0apbj/image/upload/e_background_removal/f_png/v1749649211/61cD34KOmQL._AC_UF1000_1000_QL80__omhq1u.jpg',
        text: 'Rebellion',
        correct: true,
      },
    ],
  },
  {
    id: 'q4',
    type: 'MULTIPLE_CHOICE',
    text: "Kur yra 'Ebony & Ivory'?",
    options: [
      {
        id: 'option2',
        image: 'https://res.cloudinary.com/dmzg0apbj/image/upload/e_background_removal/f_png/v1749649434/61GswPhm0pL._AC_UF1000_1000_QL80__yvdafg.jpg',
        text: 'Yamato',
      },
      {
        id: 'option3',
        image: 'https://res.cloudinary.com/dmzg0apbj/image/upload/e_background_removal/f_png/v1749649342/51RX-P1Ve2L._AC_UF1000_1000_QL80__p8ipsz.jpg',
        text: 'Red Queen',
      },
      {
        id: 'option1',
        image: 'https://res.cloudinary.com/dmzg0apbj/image/upload/e_background_removal/f_png/v1749649211/61cD34KOmQL._AC_UF1000_1000_QL80__omhq1u.jpg',
        text: 'Rebellion',
      },
      {
        id: 'option4',
        image: 'https://res.cloudinary.com/dmzg0apbj/image/upload/e_background_removal/f_png/v1749649507/518Q_JmHHNL._UF894_1000_QL80__b3yoch.jpg',
        text: 'Ebony & Ivory',
        correct: true,
      },
    ],
  },
  {
    id: 'q7',
    type: 'OPEN_ENDED',
    text: 'Fate lies in my hands',
    answer: 'Likimas yra mano rankose',
  },
];

export default questions;

