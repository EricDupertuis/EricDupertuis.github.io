FROM ubuntu:16.04

MAINTAINER Eric Dupertuis <dupertuis.eric@gmail.com>

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y ruby-full build-essential
RUN gem install jekyll

RUN rm -rf /var/lib/apt/lists/*

CMD ["/bin/bash"]
