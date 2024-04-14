FROM openjdk:21
ARG JAR_FILE=target/*.jar
COPY ./target/tasktide-be-0.0.1.jar tasktide-be-di.jar
ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/tasktide-be-di.jar"]