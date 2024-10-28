Referencia del repositorio local con el remoto (GITHUB)
git remote add origin https://github.com/ElZero002/Backend_3-B_Jary.git

# Inicializar el repositorio local 
````
git init

````

# Validar la referencia 
````
git remote -v 

````
--------------

````

git add .
git commit -m "Proyecto Base"
git put origin master
````

````
- Para forzar

git push -f origin master
````
# Instalacion 
npm i --save @nestjs/jwt passport-jwt bcrypt
npm i --save-dev @types/passport-jwt

# Arrancamos el proyecto
````
 npm run start:dev

 ````
  # Modules y Resource
  nest g mo modules/auth
  nest g res modules/users

  # Controllers y Servicios 
  nest g co modules/auth
  nest g s modules/auth
  



