#!/bin/bash
echo "Hello! This is my test task. Thank you that look at my project!)
      I want to say that I have used React.js firstly."
PROJECT_NAME='synergy-way-task'
cd $(dirname $(readlink -f "$PROJECT_NAME"))
cd $PROJECT_NAME
chmod +x ./start_django.sh
chmod +x ./start_react.sh


./start_django.sh &
./start_react.sh