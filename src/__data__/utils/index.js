import moment from 'moment';

export const uniqueKey = (name, i) => `${name}+${i}`;

export const getActiveChat = (chats, activeId) => chats?.filter((chat) => chat.id === activeId)[0];

export const getContinedTime = (serverTime) => (serverTime ? moment(serverTime).format('HH:mm') : '');

export const getRandomMes = () => botAnswer[Math.floor(Math.random() * (botAnswer.length - 1 - 0 + 1) + 0)];

export const getRandomId = () => 'active' + new Date().getTime();

export const getRandomChatName = (length) => 'Чат ' + length;

const botAnswer = [
    'Мне кажется ты перепутал',
    'Смотря кто спрашивает',
    'Проснитесь и пойте минстер Фриман, проснитесь и пойте',
    'А что выберешь ты, буть прислушник Рая, или править в аду?',
    'День не всегда начинается с кофе',
    'Моё имя Сережа, меня держит в заперти маньяк по имени Илья, ЕМУ НРАВИТСЯ СМОТРЕТЬ КАК Я СПЛЮ!!!',
];
