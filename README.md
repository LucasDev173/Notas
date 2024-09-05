# Acerca de

<p>Este proyecto fue originalmente hecho como un challenge que tomo aproximadamente 3 días, el reto era crear una aplicacion para tomar notas con backend y frontend usando las tecnologias que yo quisiera.</p> 
<p>Faltan algunas features en el frontend (solamente permite crear notas y no se actualiza asincronicamente), pero el foco principal fue lograr configurar una base de datos local, crear interaccion con ella a traves de Spring y permitir que el frontend pueda comunicarse con este.</p>

# Setup

Used packages:
- Java SE 17
- Apache Maven 3.8.4
- MySQL Server 8.0.36
- Node.js v20.12.2.
- npm 10.5.0
- Angular CLI 17.3.4

MySQL Server create statement:
```
CREATE DATABASE ensolvers_notes /!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci/ /!80016 DEFAULT ENCRYPTION='N'/;
CREATE USER 'springuser'@'%' identified by 'ThePassword';
GRANT ALL ON ensolvers_notes to 'springuser'@'%';
```
