window.addEventListener('load', () => {
  const intro = document.getElementById('intro');
  const heroText = document.getElementById('heroText');
  let step = 0;

  // Шаблоны двух состояний текста
  const scene1HTML = () => `
    <div class="stack s1">
      <div class="front">
        <span class="inter">привет, это портфолио</span>
      </div>
      <div class="back">
        <span class="script">Лии</span>
      </div>
    </div>
  `;

  const scene2HTML = () => `
    <div class="stack s2">
      <div class="top">
        <span class="inter">а я его сторожу</span>
      </div>
      <div class="back">
        <div class="script">прямо</div>
      </div>
      <div class="bottom">
        <div class="inter">как её рабочий стол</div>
      </div>
    </div>
  `;

  setTimeout(() => {
    intro.classList.add('shrink');
    heroText.innerHTML = scene1HTML();
    heroText.classList.add('show');
    step = 1;
  }, 500);

  window.addEventListener('scroll', () => {
    if (step === 1 && window.scrollY > 30) {
      heroText.classList.remove('show');
      setTimeout(() => {
        heroText.innerHTML = scene2HTML();
        heroText.classList.add('show');
      }, 300);
      step = 2;
    } else if (step === 2 && window.scrollY <= 30) {
      heroText.classList.remove('show');
      setTimeout(() => {
        heroText.innerHTML = scene1HTML();
        heroText.classList.add('show');
      }, 300);
      step = 1;
    }
  }, { passive: true });
});


const overlay = document.getElementById('overlay');
const projectTitle = document.getElementById('projectTitle');
const projectDescription = document.getElementById('projectDescription');
const projectContent = document.getElementById('projectContent');
const gallery = document.getElementById('gallery');

let firstRandomRun = true;

function collageText(element, text) {
  const fonts = [
    "'Press Start 2P', cursive",
    "'Caveat', cursive",
    "'Anton', sans-serif",
    "'Playfair Display', serif",
    "'Permanent Marker', cursive",
    "'Bebas Neue', sans-serif",
    "'IBM Plex Mono', monospace",
    "'Great Vibes', cursive"
  ];

  const colors = ["#000", "#2b59ff"];

  element.innerHTML = "";

  for (const ch of text) {
    // перенос строки поддерживаем через \n
    if (ch === "\n") {
      element.appendChild(document.createElement("br"));
      continue;
    }

    const span = document.createElement("span");

    if (ch === " ") {
      span.innerHTML = "&nbsp;";
      element.appendChild(span);
      continue;
    }

    span.textContent = ch;
    span.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    span.style.display = "inline-block";
    span.style.margin = "0 2px";
    span.style.transform = `rotate(${Math.random() * 16 - 8}deg)`;
    span.style.color = colors[Math.floor(Math.random() * colors.length)];

    // иногда обводка
    if (Math.random() > 0.65) {
      span.style.webkitTextStroke = "1px black";
      span.style.color = "transparent";
    }

    // иногда как наклейка
    if (Math.random() > 0.8) {
      span.style.background = "#fff";
      span.style.padding = "2px 6px";
      span.style.border = "2px solid black";
    }

    element.appendChild(span);
  }
}
function createGallery(images){

gallery.innerHTML='';

images.forEach((itemData, index)=>{

let src;
let type = 'half';

if(typeof itemData === 'object'){
src = itemData.src;
type = itemData.type || 'half';
}else{
src = itemData;
}

/* первое изображение всегда full */
if(index === 0){
type = 'full';
}

const item = document.createElement('div');
item.className = 'gallery-item ' + type;

const img = document.createElement('img');
img.src = src;

item.appendChild(img);
gallery.appendChild(item);

});

}

const cases = {

1:{
title:'Редизайн корпоративного стиля',

images:[
'images/case1/1.png',
'images/case1/7.png',
'images/case1/10.png',
'images/case1/4.png',
'images/case1/5.png',
'images/case1/6.png',
'images/case1/2.png',
'images/case1/8.png',
'images/case1/9.png',
'images/case1/3.png',
'images/case1/12.png',
'images/case1/11.png'
],

description:'<strong>Научно-инженерный центр - занимается  IT-услуга для бизнеса и промышленности: от проектирования и разработки систем до производства, внедрения и их сопровождения</strong>',

content:`<div class="text-block">
<a href="https://drive.google.com/drive/folders/12hAF1hhwoigwqtJdPV7oG6sK01pp-KLv?usp=sharing" class="video-link" target="_blank">Примеры видео-генераций и анимаций</a>
<br>
<br>
<h3>Цель</h3>
<p>Обновить визуальный стиль компании для соответствующего позиционирования на рынке</p>
<br>
<h3>Выводы при анализе</h3>
<p>Нужно что-то современное и технологичное, но при этом строгое</p>
<p>Освежить, а не полностью сделать заново</p>
<br>
<h3>Работа с графикой</h3>
<p>Логотип изменениям не подвергался, но новая визуальная идеология строилась вокруг него.
Главным графическим элементом стали круг из логотипа, а линии пересечения - как метафора сетевых процессов, коммуникации. 
Эти элементы используются в композициях как фоновая графика, навигационные акценты. За счёт разных масштабов и плотности 
линий удалось создать ощущение динамики, не перегружая материалы, где они используются</p>
<br>
<h3>Цвета</h3>
<p>Так как компания до этого использовала сине-голубую палитру, уходить от нее смысла не было, чтобы не сбивать столку и сотрудников, 
и заказчиков. Базовые фирменные цвета - синий и голубой - оттенки стали более насыщенными, что добавило свежести. Для акцента был  выбран оранжевый оттенок</p>
<br>
<h3>Шаблонизация</h3>
<p>После согласования деталей нового дизайна основные рабочие форматы от печатных до соц. сетей приводились к шаблонному 
формату для работы сотрудников компании</p>
</div>`
},

2:{
title:'Прототип интерактивной книги',

images:[
'images/case2/1.png',
'images/case2/7.gif',
'images/case2/10.png',
'images/case2/4.gif',
'images/case2/5.gif',
'images/case2/6.png',
'images/case2/8.gif',
'images/case2/2.png',
'images/case2/3.png',
'images/case2/11.png',
'images/case2/9.png'
],

description:'<strong>Разработка концепции и прототипа интерактивной электронной книги на основе повести “Жёлтая стрела”. Прототип разработан в Figma и включает десктоп и мобильную версии, а также светлую и тёмную темы оформления</strong>',

content:`<div class="text-block">
<h3>Цель</h3>
<p>Познакомить аудиторию с современным автором через небольшое произведение, 
сделав чтение более эмоциональным, доступным и интерактивным</p>
<br>
<h3>Основные задачи</h3>
 <p>выбор литературного произведения</p>
 <p>разработка визуальной концепции книгит</p>
  <p>интегрирация анимаций в повествование</p>
 <p>продумывание интерактивные сценарии взаимодействия</p>
  <p>создание удобной навигации для устройств</p>
  <p>адаптирование чтения под привычные цифровые паттерны пользователя</p>
<br>
<h3>Этапы работы</h3>
<p>1. Исследование</p>
<p>Рассматривались компактные произведения авторов, но с насыщенным сюжетом, подходящая для цифровой интерпретации</p>
<br>
<p>2. Формулирование концепции</p>
<p>Основная идея — познакомить читателя с современным автором не через масштабный роман, а через короткое произведение, которое можно пройти за одно взаимодействие</p>
<br>
<p>3. Анализ текста
<p>Из повести были выделены ключевые сцены, символы и эмоциональные моменты, подходящие для иллюстрирования и анимации</p>
<br>
<p>4. Пользовательские сценарии</p>
<p>- перелистывание глав</p>
<p>- появление анимаций во время чтения</p>
<p>- интерактивные элементы внутри сцен</p>
<p>- создание заметок</p>
<p>- переход по содержанию</p>
<br>
<p>5. Дизайн интерфейса</p>
<p>Cетка, верстка,  и система экранов</p>
<br>
<p>6. Иллюстрации и анимация</p>
<p>Созданы иллюстрации, дополненные анимированными деталями для передачи атмосферы и эмоций произведения</p>
<br>
<p>7. Сборка прототипа</p>
<p>Все экраны были собраны в интерактивный прототип с логикой переходов и анимаций</p>
<br>
<h3>Особенности проекта</h3>
<p>Две платформы</p>
<p>- Десктоп версия</p>
<p>- Мобильная версия</p>
<br>
<p>Две темы интерфейса</p>
<p>- Светлая тема</p>
<p>- Тёмная тема</p>

<br>
<p>Интерактивные функции</p>
<p>- встроенные анимации</p>
<p>- заметки пользователя</p>
<p>- интерактивные сцены</p>
<p>- концепт озвучки отдельного текста</p>
<br>
<p>Содержание</p>
<p>визуализировано в виде вагонов поезда — отсылка к центральному образу произведения</p>
<br>
<p>Мобильная UX-концепция</p>
<p>построена по принципу современных digital-форматов: каждая глава скроллится как отдельная статья, а следующая открывается с нового экрана.
Такой подход делает чтение привычным для пользователя социальных сетей и мобильных платформ, сохраняя вовлечённость и удобство восприятия текста</p>

</div>`
},
3:{
title:'Оформление контента',

images:[
'images/case3/1.png',
'images/case3/2.png',
'images/case3/3.png',
'images/case3/4.png',
'images/case3/9.gif',
'images/case3/6.png',
'images/case3/7.png',
'images/case3/8.png',
'images/case3/10.png',
'images/case3/11.png',
'images/case3/12.png',
'images/case3/13.png',
'images/case3/14.png',
'images/case3/15.png'
],

description:'<strong>Визуальный стиль для бьюти-бара / ногти, ресницы, брови /</strong>',

content:`<div class="text-block">
<a href="https://drive.google.com/drive/folders/1gR7IC7Gz_wmA4cto2yyaoDpg7WoGUZYA?usp=drive_link" class="video-link" target="_blank">Примеры видео-генераций и анимаций</a>
<br>
<br>
<h3>Цель</h3>
<p>Привлечение клиентов по средствам визуальной коммуникации через соц сети</p>
<br>
<h3>Визуал</h3>
<p>Логотип и название отсылка к японской мифологии. Фоновый элемент “лаковые” разводы</p>
<br>
<h3>Продукты</h3>
<p>- Прайс-лист</p>

<p>- Описание дизайн услуг</p>

<p>- Окошки</p>

<p>- Истории</p>

<p>- Дополнительные акции</p>
<br>
<p>Дополнительно монтаж коротких роликов для tik-tok и tg-канала, а также генерации персонажа</p>
</div>`
},

4:{
title:'Приглашения',

images:[
'images/case4/1.png',
'images/case4/2.png',
'images/case4/3.png',
'images/case4/6.gif',
'images/case4/8.png',
'images/case4/4.png',
'images/case4/7.png',
'images/case4/5.png'
],

description:'<strong>Свадебный переполох</strong>',

content:`<div class="text-block">
<h3>Цель</h3>
<p>Создать цельную визуальную систему свадьбы, которая:</p>
<p>- отражает атмосферу и характер мероприятия</p>
<p>- делает коммуникацию с гостями удобной</p>
<p>- объединяет офлайн и digital-форматы</p>
<p>Важно было сохранить единый стиль во всех носителях — от бумажных приглашений до интерфейсов сайтов
</p>
<br>
<h3>Что входило в проект</h3>
<p>Разработка печатных носителей</p>
<br>
<p>Иллюстрации</p>
<p>Для проекта были созданы sketch-иллюстрации - на основе загса, идеи украшений ресторана, 
которые стали частью визуального языка свадьбы</p>
<br>

<h3>Сайт</h3>
<p>Строится с упором на удобство пользователя как со стороны организаторов, так и со стороны гостей</p>
<p>-первично идет информация о дате, времени и месте проведения</p>
<p>-затем сразу же форма, где указываются данные гостя и его возможность присутствовать и дополнительные данные в зависимости от вида приглашения</p>
<p> в конец идет доп. информация о дресс-коде и подарках</p>
<br>
<p>3 уровня приглашённых с разным объёмом информации и сценариями</p>
<br>
<p>отдельная англоязычная версия сайта для иностранных гостей</p>
<br>
<p>разработка, анимации и адаптация под мобильую версию - Tilda</p>

</div>`
},
5:{
title:'Прототип сайта',

images:[
'images/case5/9.gif',
'images/case5/1.png',
'images/case5/2.png',
'images/case5/3.png',
'images/case5/6.png',
'images/case5/4.png',
'images/case5/5.png',
'images/case5/7.png',
'images/case5/8.png'
],

description:'<strong>Горизонтальный сайт для галереи современного искусства</strong>',

content:`<div class="text-block">
<h3>Цель</h3>
<p>Учебный проект - Создание сайта для привлечения пользователей аудитории</p>
<br>
<h3>MES Gallery — сайт для галереи современного искусства</h3>
<p>Проект был построен вокруг идеи коммуникации, художественного высказывания и цифрового взаимодействия со зрителем</p>
<br>
<h3>Задачи</h3>
<p>Нейминг + первичное продумывание фирменных элементов</p>
<br>
<p>Создание сайта</p>
<h3>MES - message как основа айдентики</h3>
<p>Пиксельный формат как отсылка к цифровой эпохе.</p>
<p>Главным графическим элементом для мобильной версии стал пиксельный bubble - окно сообщения</p>
<br>
<h3>Разработка сайта</h3>
<p>Структура</p>
<p>- главная страница</p>
<p>- страница выставок</p>
<p>- афиша мероприятий</p>
<p>- страницы о художниках</p>
<p>- стоимость</p>
<p>- контакты</p>
<br>

<p>Визуальная система</p>
<p>-свободные композиции</p>
<p>- пикселизация, использование квадратов и пиксельное преобразование изображений</p>
<p>-главным акцентным цветом был выбран глубокий синий:</p>
<br>
<p>Горизонтальный формат интерфейса</p>
<p>-создание ощущение digital-инсталляции</p>
<p>-уход от привычного вертикального скролла</p>
<br>
</div>`
},
6:{
title:'Ещё одна проигрышная лотерея в жизни',

custom:`
<div class="random-box">

<div class="random-image-wrap">
<img id="randomMain" src="images/basket.png">
</div>

<div id="randomControls">
<button id="randomBtn">достать</button>
</div>

</div>
`,

description:'<div class="text-block">Нажми на кнопку и получи приз</div>',

content:`<div class="text-block">
<h4>откуда у дизайнера деньги на призы,</h4>
<h4>они же все у оператора станка чпу...</h4>
</div>`
},
7:{
title:'portfoliya',

custom:`
<div class="about-files">

<a class="file" id="mailCopy" href="mailto:liyamqrv@yandex.ru">
<img src="images/mail.png">
<p>liyamqrv<br>@yandex.ru</p>
</a>

<div id="copyMsg">адрес скопирован</div>

<a class="file" href="https://t.me/@mauorik" target="_blank">
<img src="images/tg.png">
<p>@mauorik</p>
</a>


<a class="file" href="files/cv.pdf" target="_blank">
<img src="images/cv.png">
<p>cv</p>
</a>


<a class="file no-hover">
<img src="images/loc.png">
<p>СПб</p>
</a>


</div>
`,

description:'<strong>Кто я?!</strong>',

content:`<div class="text-block">
<h3>Дизайнер</h3>
<p>Лия Майорова</p>
</br>
<h3>3 года работы дизайнером в it-компании</h3>
<p>Разработка печатных и digital материалов для внутренних и внешних процессов </p>
<p>Работа с интерфейсами (в основном доработки и редизайны)</p>
<p>Анимации и видео от генерации до монтажа</p>
<h4>Полное содержание в резюме</h4>
<h4>в принципе, что запросят то и делаю</h4>
<h4>к задачам не испытаю избегающий тип привязанности:)</h4>
</br>
<p>Также беру фриланс-проекты по самозанятости, конечно</p>
</br>
<h3>Образование</h3>
<p>Бакалавр - Прикладная информатика в дизайне 
<h4>2024 - СПбГУПТД </h4>
</br>
<p>Фотограф 4 уровен </p>
<h4>2023 - СПбГУПТД </h4>

</div>`
}
};
function createGallery(images){

gallery.innerHTML='';

images.forEach((src,index)=>{

const item=document.createElement('div');
item.classList.add('gallery-item');

if(index===0){
item.classList.add('full');
}

const img=document.createElement('img');
img.src=src;

item.appendChild(img);
gallery.appendChild(item);

});

}

function openCase(caseId){

overlay.classList.add('active');
gallery.classList.remove('about-mode');

if(caseId == 7){
gallery.classList.add('about-mode');
}
document.querySelectorAll('.case-item').forEach(item=>{
item.classList.remove('active');
});

const activeItem = document.querySelector(`.case-item[data-case="${caseId}"]`);

if(activeItem){
activeItem.classList.add('active');
}

if(cases[caseId]){

projectTitle.textContent = cases[caseId].title;
projectDescription.innerHTML = cases[caseId].description;
projectContent.innerHTML = cases[caseId].content;


gallery.innerHTML = '';

if(cases[caseId].custom){
gallery.innerHTML = cases[caseId].custom;

const mail = document.getElementById("mailCopy");
const msg = document.getElementById("copyMsg");

if(mail){
mail.addEventListener("click", function(e){
e.preventDefault();

navigator.clipboard.writeText("liyamqrv@yandex.ru");

msg.classList.add("show");

setTimeout(()=>{
msg.classList.remove("show");
},1500);
});
}

return;
}

if(cases[caseId].images){
createGallery(cases[caseId].images);
}

}

createGallery(cases[caseId].images);


/*gallery.innerHTML='';

cases[caseId].images.forEach(src=>{

const item=document.createElement('div');
item.className='gallery-item';

const img=document.createElement('img');
img.src=src;

item.appendChild(img);
gallery.appendChild(item);

}); */


}


/* папки */

document.querySelectorAll('.folder').forEach(folder=>{
folder.addEventListener('click',()=>{
openCase(folder.dataset.case);
});
});


/* список */

document.querySelectorAll('.case-item').forEach(item=>{
item.addEventListener('click',()=>{
openCase(item.dataset.case);
});
});


/* закрытие */

overlay.addEventListener('click',e=>{
if(e.target===overlay){
overlay.classList.remove('active');
}
});

const randomImages = [
'images/random/1.jpg',
'images/random/2.png',
'images/random/3.gif',
'images/random/4.png',
'images/random/5.png',
'images/random/6.png',
'images/random/7.png',
'images/random/8.png',
'images/random/9.png',
'images/random/10.png',
'images/random/11.png',
'images/random/12.png'
];

const randomGif = 'images/random/animation.gif';
const basketImg = 'images/basket.png';

document.addEventListener('click', function(e){

if(e.target.id === 'randomBtn' || e.target.id === 'resetRandom'){
startRandom();
}

});

function startRandom(){

const img = document.getElementById('randomMain');
const controls = document.getElementById('randomControls');

img.classList.remove('random-result');

controls.innerHTML = '';

let count = 0;
let maxPlays = firstRandomRun ? 3 : 1; // первый раз 3, потом 1

function playGif(){

img.src = randomGif + '?t=' + Date.now();

setTimeout(()=>{

count++;

if(count < maxPlays){
playGif();
}else{
showResult();
firstRandomRun = false; // после первого раза меняем режим
}

},1200);

}

playGif();
}

function showResult(){

const img = document.getElementById('randomMain');
const controls = document.getElementById('randomControls');

const random = randomImages[Math.floor(Math.random()*randomImages.length)];


const newImg = new Image();
newImg.src = random;

newImg.onload = () => {

img.classList.add('hidden');

setTimeout(()=>{

img.src = random;
img.classList.remove('hidden');
img.classList.add('random-result');

},50);

};


img.src = random;
img.classList.add('random-result');
controls.innerHTML = `<button id="resetRandom">сброс</button>`;
}


function resetRandom(){

const img = document.getElementById('randomMain');
const controls = document.getElementById('randomControls');

img.src = basketImg;


controls.innerHTML = `<button id="randomBtn">достать</button>`;
}