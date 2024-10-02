---
title: "Il Postino"
summary: "Restaurant control Fullstack app"
draft: false
tags:
- Nuxt 3
- Shadcn-vue
- Typescript
- Tailwindcss
- Node.js
- Express
- MongoDB
demoUrl: https://github.com/pulygarcia/Postino-ui-nuxt
repoUrl: https://github.com/pulygarcia/postino-api-services
---

Fullstack web app for Restaurant follow up. Includes functionalities like:

Login: Register and Sesion start of users (employees or admin in this case).

Cashier: This section needs the current employee to be logged before enter, in order to save the sells with his/her account name into the history to avoid discrepances between the team members or money.

Sells history: All the sells registered by the cashier are gonna be in this section, it's not allowed to modify any sell to avoid money discrepances. They shows consumed items, the eployee that have registered the sell, and the amount has been collected in the sell. This view includes a chart where the user can see what are the quantity of sells on each month of the year.

Staff members control: This section shows all the members of the staff and their information, like phone number, name, adress and current salary. It's important to say that only the user registered as administrator(or the owner) can salary and adress of the members to avoid dissatisfaction between members when they see differences in their pay. Or problems shows up between them.

Menú: Menú items with fields like name, price and description. Admin user can modify the prices and all the data of these items.



![Il Postino Restaurant](/postino-cashier.PNG)
