# Internal-portal

Внутренний организационный портал для частной компании.

## Функциональность

Авторизованный доступ на портал только для сотрудников организации. Возможность поиска сотрудников, отделов, команд.
Отображение команд и отделов с описанием, указанием участников и их ролей.

## Установка

Установить пакеты зависимостей

```
npm i
```

Создать и подключить БД под учетной записью Postgres

```

CREATE DATABASE crm;
CREATE USER admin WITH ENCRYPTED PASSWORD '123';
GRANT ALL PRIVILEGES ON DATABASE crm TO admin;
Выполнить миграцию и сид:
npx sequelize db:migrate
npx sequelize db:seed:all

```

## Запуск

В корневой папке проекта выполнить команду

```

npm start

```

---

Перейти на URL http://localhost:3000/ и авторизоваться под учетной записью админа

```
login admin@companyM.com
password 123
```

  <img width="1426" alt="1" src="screenshots/1.png">
  <img width="1410" alt="2" src="screenshots/2.png">
  <img width="1426" alt="3" src="screenshots/3.png">
  <img width="1423" alt="4" src="screenshots/4.png">
