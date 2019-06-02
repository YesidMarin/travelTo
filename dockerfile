FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/travelTo .
CMD ["nginx","-g","daemon off;"]