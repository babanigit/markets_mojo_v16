FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Clear default Nginx static files
RUN rm -rf ./*

# Copy your Angular build output (adjust path if needed)
COPY dist/project16.2.14/ ./

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
