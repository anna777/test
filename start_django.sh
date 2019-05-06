#!/bin/bash

PROJECT_NAME='synergy-way-task'

cd backend
source env/bin/activate
cd testtask

pip3 install -r requirements.txt

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py loaddata students/fixtures/initial_data.json
python3 manage.py runserver
