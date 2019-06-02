FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/travelTo .
EXPOSE 8080:80
CMD ["nginx","-g","daemon off;"]