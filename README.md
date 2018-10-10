# Sundry by Arver
### Список
- ex1 Cделать так, чтобы картинки при рандоме не повторялись
- ex2 Нестандартные тени


## Заметки

- Строка transform: translateZ(0) не вносит никаких визуальных изменений. Она инструктирует браузер переместить элемент на 0 пикселов вдоль оси Z; иными словами, элемент не двигается вообще. Однако, поскольку он использует трехмерное преобразование, браузер обрабатывает этот стиль с помощью графического процессора. Суть заключается в том, что анимация может воспроизводиться более плавно, потому что графический процессор более производительный.Но только для 2д свойств типа:
scale, translate, rotate
>source: Дэвид Макфарланд - Большая книга CSS

- .el + .el {
	margin-left: value;
}

- srcset не работает с именами файлов с пробелами.

- transform: rotate( calc( 360deg / 4 ) ); не работает https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12490382/

- Уловкой запуска асинхронной загрузки стилей является использование элемента <link> и установка недопустимого значения для атрибута media, например значения media = "none".Когда медиа-запрос оценивается как false, браузер все равно будет загружать таблицу стилей, но он не будет ждать, пока контент будет доступен до отображения страницы.
``<link rel="stylesheet" href="css.css" media="none">``
После того, как таблица стилей закончила загрузку, атрибут media должен быть установлен на допустимое значение, поэтому правила стиля будут применены к документу. Событие onload используется для переключения свойства media на все:
``<link rel="stylesheet" href="css.css" media="none" onload="if(media!='all')media='all'">``
Этот метод использует JavaScript, но вы можете обслуживать не-JavaScript-браузеры, обертывая эквивалентные блокирующие элементы <link> в элементе <noscript>:
``<link rel="stylesheet" href="css.css" media="none" onload="if(media!='all')media='all'"><noscript><link rel="stylesheet" href="css.css"></noscript>``

- Версия async 
``<link rel="preload" href="style.css" as="style">``Поодерживают не все браузеры,но loadCSS представляется потенциальным решением.

- polyfill для fetch whatwg-fetch

### Vue
-Если на button подвесить метод,не работает пока в методе не прописать e.preventDefault();
