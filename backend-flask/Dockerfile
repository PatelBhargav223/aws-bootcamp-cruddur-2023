FROM  python:latest
#Inside the container
# this will make a new container inside the container
WORKDIR /backend-flask
 # outside container-> Inside constainer the container
 #this contain libraries that we want to install to run the app 
COPY requirements.txt requirements.txt
#Inside the container
# THis will install python libraries used for the app 
RUN pip3 install -r requirements.txt

# here we are coping from outside container -> inside container
#  . first period means .-/backend-flask (outside the container)
#  . second period  means ./backend-flask (inside the container)
COPY . . 

#set enviroment  variables
#Inside the container and will reamian set when the container is running 
ENV FLASK_ENV=development

EXPOSE ${PORT}

# here -m is a module, it is a way to specify flask  
CMD [ "python3","-m","flask","run", "--host=0.0.0.0","--port=4567   " ]