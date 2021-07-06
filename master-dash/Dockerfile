FROM nginx:1.19.0-alpine
RUN rm -rf /usr/share/nginx/html
COPY build /usr/share/nginx/html
#RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx/nginx.conf /etc/nginx/conf.d

# Fire up nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
