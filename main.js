const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const link = books.querySelectorAll('a');
const adv = document.querySelector('.adv');
const lists = books.querySelectorAll('ul');
const chaptersSecondBook = lists[0].querySelectorAll('li');
const chaptersFifthBook = lists[5].querySelectorAll('li');


books.prepend(book[1]);
books.append(book[4]);
books.append(book[3]);
books.append(book[5]);
books.append(book[2]);

//изменение фона===================================================
document.body.style.background = 'url(./image/you-dont-know-js.jpg)';

//изменение заголовка==============================================
link[4].textContent = 'Книга 3. this и Прототипы Объектов';

//удаление рекламы=================================================
adv.remove();

//вторая книга=======================================================
lists[0].append(chaptersSecondBook[6]);
lists[0].append(chaptersSecondBook[8]);
lists[0].append(chaptersSecondBook[4]);
lists[0].append(chaptersSecondBook[5]);
lists[0].append(chaptersSecondBook[7]);
lists[0].append(chaptersSecondBook[9]);
lists[0].append(chaptersSecondBook[2]);
lists[0].append(chaptersSecondBook[10]);

//пятая книга=======================================================
lists[5].append(chaptersFifthBook[9]);
lists[5].append(chaptersFifthBook[3]);
lists[5].append(chaptersFifthBook[4]);
lists[5].append(chaptersFifthBook[2]);
lists[5].append(chaptersFifthBook[6]);
lists[5].append(chaptersFifthBook[7]);
lists[5].append(chaptersFifthBook[5]);
lists[5].append(chaptersFifthBook[8]);
lists[5].append(chaptersFifthBook[10]);

//====================================================================
lists[2].insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6”</li>');