FROM openjdk:17

ENV ENVIRONMENT=prod

ADD backend/target/shoppingListApp.jar shoppingListApp.jar

EXPOSE 8080

CMD [ "sh", "-c", "java -Dserver.port=$PORT -jar /shoppingListApp.jar" ]