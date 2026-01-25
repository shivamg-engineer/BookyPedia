#Use an official Maven image to build the spring boot app
FROM maven:3.8.4-openjdk-17 AS build

#Set the working directory
WORKDIR /app

#Copy the pom.xml and install dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

#Copy the source code and build the application
COPY src ./src
RUN mvn clean package -DskipTests

#Use an official OpenDDK image to run the application
FROM eclipse-temurin:17-jdk-jammy

#set the working directory
WORKDIR /app

# Create uploads directory inside container
RUN mkdir -p /app/uploads/images /app/uploads/pdfs

# Declare volume for uploads
VOLUME ["/app/uploads"]

#Copy the built JAR file from the build stage
COPY --from=build /app/target/Online_Book_Store_Backend-0.0.1.jar .

#Expose port 8080
EXPOSE 8080

#Specify the command to run the application
ENTRYPOINT [ "java", "-jar", "/app/Online_Book_Store_Backend-0.0.1.jar" ]