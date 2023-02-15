import moment from 'moment';

export const uniqueKey = (name, i) => `${name}+${i}`;

export const getActiveChat = (chats, activeId) => chats?.filter((chat) => chat.id === activeId)[0];

export const getContinedTime = () => {};

export const getRandomMes = (max) => botAnswer[Math.floor(Math.random() * max)];

const botAnswer = [
    'Мне кажется ты перепутал',
    'Смотря кто спрашивает',
    'Проснитесь и пойте минстер Фриман, проснитесь и пойте',
    'А что выберешь ты, буть прислушник Рая, или править в аду?',
    'День не всегда начинается с кофе',
    'Моё имя Сережа, меня держит в заперти маньяк по имени Илья, ЕМУ НРАВИТСЯ СМОТРЕТЬ КАК Я СПЛЮ!!!',
];
