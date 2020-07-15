<header>
  <title>Как Python фронтендеру в быту пригодился</title>
  <description>Как Python фронтендеру в быту пригодился</description>
  <date>24.02.2020</date>
  <author>Максим Новерин</author>
</header>

## Предыстория

Будучи фронтенд-разработчиком, я всегда с интересом посматривал на Python. Он меня привлекал в качестве инструмента решения "бытовых" задач, автоматизации рутины и, конечно, своей универсальностью. Однако, дальше "посматривания" дело никогда не заходило. Но мою голову не покидало осознание того, что при возникновении неудобства, которому необходима автоматизация, на помощь может прийти Python. И, наконец, такое неудобство возникло.

## Проблема

Я работаю удалённо. Не фрилансером - на компанию, но всё же удаленно, из дома. Моё рабочее место находится в паре метров от спального, утром не нужно тратить уйму времени на путь до офиса, на кухне всегда есть завтрак по настроению, но... К сожалению, в удаленной работе есть и минусы. Самый существенный из них, на мой взгляд, если опустить околофилософские темы, - это соседи. Квартира - не офис. Негласного закона тишины здесь нет. Не раз возникала ситуация, когда посреди рабочего дня в уши врезалась чья-то дрель, перфоратор, на пост нового раздражителя начинала претендовать чья-то музыка или, что самое неприятное, громыхал топот соседей сверху. Жил я всегда на съемной квартире и в какой-то момент начал подыскивать жильё таким образом, чтобы оно располагалось обязательно на последнем этаже. Так становилось на одних соседей меньше и была гарантия избавления от проблемы громкого топота, актуальной в новых и относительно новых домах. Производить такой поиск было непросто - пользовался для этих целей я небезызвестным Авито. Проблема заключалась в том, что в настройках фильтрации выдачи просто-напросто отсутствовал чекбокс "последний этаж", хотя чекбокс "первый этаж" имелся. Здесь-то я и вспомнил о Python!

## Решение

Писать я решил обычный граббер-парсер, который бы смог отделять квартиры на последнем этаже от всех остальных. Погуглив, я выяснил, что мне нужна библиотека BeautifulSoup и стандартный модуль requests. Должен сказать, что какого-то представления о том, как должна выглядеть структура небольшого Python-приложения, у меня не было. Поэтому я решил придерживаться принципов, независимых от языка программирования, а именно: разделения кода по функциям, константы вместо магических значений и отдельно лежащие хелперы. Вот такая получилась простенькая структура.
<img data-name="afpStructure" alt="структура приложения" title="структура приложения" style="max-width: 350px">

В файле с константами по полочкам разместилась информация о городе, максимальной стоимости аренды (в месяц), номере страницы на Авито, классе рядового искомого элемента и файле для вывода результата. В константе BASE_URL конструировалась итоговая ссылка для запроса - с учетом города, цены и страницы. Да, утруждать себя написанием логики, избавляющей от необходимости вручную менять номер страницы, я не стал.
<br><br>
```
  CITY = 'Orenburg'
  MAX_RENT = 15000
  PAGE = 1
  BASE_URL = f'https://www.avito.ru/{CITY.lower()}/kvartiry/sdam/na_dlitelnyy_srok-ASgBAgICAkSSA8gQ8AeQUg
    ?cd=1&pmax={MAX_RENT}
    &f=ASgBAQICAkSSA8gQ8AeQUgJAzAg0kFmMWY5ZrL4NFKTHNQ
    &p={PAGE}'
  AD_ITEM_CLASS = 'item_table-description'
  RESULT_FNAME = 'result.txt'
```
<br><br>
Так выглядит файл, в котором хранятся хелперы.
<br><br>
```
  import re

  """ Public """

  def writeAdContentToFile(f, data):
    text, address, url = data
    f.write(f'{text} {address}\n')
    f.write(f'{url}\n\n')


  def getAdContent(ad):
    text, address, url = __parseAdContent(ad)

    return [
      __formatAdText(text),
      __formatAdAddress(address),
      __formatAdUrl(url),
      __isThatLastFloorAparts(text)
    ]

  """ Private """

  def __parseAdContent(ad):
    text = __parseAdText(ad)
    url = __parseAdUrl(ad)
    address = __parseAdAddress(ad)

    return [text, address, url]

  def __parseAdText(ad):
    return ad.findAll('a', 'snippet-link')[0].text

  def __parseAdUrl(ad):
    return ad.findAll('a', 'snippet-link')[0]['href']

  def __parseAdAddress(ad):
    return ad.findAll('span', 'item-address__string')[0].text

  def __isThatLastFloorAparts(ad_text):
    floors = re.findall(r"(\d+\/\d+\s)(эт.)", ad_text)[0][0]
    floor, max_floor = floors.split('/')
    return int(floor) == int(max_floor)

  def __formatAdText(text):
    formatted = re.sub(r"(\d+\s)(м²,\s)", "", text)
    formatted = formatted.replace(' квартира', '')
    return formatted

  def __formatAdUrl(url):
    return f'https://www.avito.ru{url}'

  def __formatAdAddress(address):
    return address.strip()
```
<br><br>
Среди приватных функций тут расположились функции для парсинга контента объявления - для получения текста, ссылки и адреса. Также есть функция для проверки условия о последнем этаже и три форматирующих функции для последующего вывода информации в удобном виде.
<br><br>
Публичных функций всего две - для получения контента объявления и для записи в файл.
<br><br>
И, наконец, код основного файла `main.py`.
<br><br>
```
  import requests
  from bs4 import BeautifulSoup
  from constants import BASE_URL, AD_ITEM_CLASS, RESULT_FNAME
  from helpers import getAdContent, writeAdContentToFile

  req = requests.get(BASE_URL)
  soup = BeautifulSoup(req.text, features="lxml")
  ads = soup.findAll('div', AD_ITEM_CLASS)

  last_floor_apartments = []

  def print_ad_content(data):
    text, address, url = data
    print(f'{text}, {address}\n{url}\n')

  def print_regular_apartments():
    for ad in ads:
      text, address, url, last_floor = getAdContent(ad)

      if (last_floor == True):
        last_floor_apartments.append(ad)

  def print_last_floor_apartments():
    for ad in last_floor_apartments:
      text, address, url, last_floor = getAdContent(ad)
      print_ad_content([text, address, url])
      writeAdContentToFile(f, [text, address, url])

  with open(RESULT_FNAME, encoding='utf-8', mode="w") as f:
    f.write(f'Fetching from: {BASE_URL}\n\n')
    print_regular_apartments()
    print_last_floor_apartments()
```
<br><br>
Тут импортируется всё понаписанное, выполняется запрос, объявляются три функции для вывода информации, осуществляется вывод информации и её запись в файл. Для запуска скрипта достаточно выполнить `python main.py` в консоли.
<br><br>
Результат будет выглядеть так:
<img data-name="afpResult" alt="результат работы приложения" title="результат работы приложения" style="min-width: 650px">
В зависимости от используемой обертки над консолью ссылки могут быть как кликабельными, так и некликабельными.
<br><br>
По итогу проблема решена, написанным скриптом с тех пор я пользуюсь каждый раз при поиске квартиры и не могу остановиться в своем восхищении о количестве сэкономленного времени.
