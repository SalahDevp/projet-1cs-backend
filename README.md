# Getting Started

## Server:


### 1. create virtual environment

```console
py -m venv venv
```

### 2. activate environment

```console
. ./venv/scripts/activate.ps1
```

### 3. install dependencies

```console
pip install -r requirements.txt
```
### 4. initialize database

```console
py manage.py makemigrations
py manage.py migrate
```

### 5. create super user
run command:
```console
py manage.py createsuperuser
```
and enter **email** and **password**

### 6. run server

```console
py manage.py runserver
```

### 7. admin panel
go to url
```
http://localhost:8000/admin
```
and login with super user credentials

## Client:


### 1. change to client directory

-create a new terminal and type

```console
cd ./client
```

### 2. install dependencies

```console
npm install
```

### 3. run

```console
npm start
```
