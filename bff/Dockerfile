FROM docker/whalesay:latest
LABEL Name=bff-rick-and-morty Version=1.0.0
RUN apt-get -y update && apt-get install -y fortunes
CMD ["sh", "-c", "/usr/games/fortune -a | cowsay"]
