package mx.uv;

import static spark.Spark.*;

import com.google.gson.*;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hola Mundo!" );

        //fuente:https://gist.github.com/saeidzebardast/e375b7d17be3e0f4dddf

        options("/*",(request,response)->{

            String accessControlRequestHeaders=request.headers("Access-Control-Request-Headers");
            
            if(accessControlRequestHeaders!=null){
            
            response.header("Access-Control-Allow-Headers",accessControlRequestHeaders);
            
            }
            
            String accessControlRequestMethod=request.headers("Access-Control-Request-Method");
            
            if(accessControlRequestMethod!=null){
            
            response.header("Access-Control-Allow-Methods",accessControlRequestMethod);
            
            }
            
            return "OK";
            
            });
            
            before((request,response)->response.header("Access-Control-Allow-Origin","*"));

        get("/", 
            (request, response) -> "<h1>Hola mundo!</h1>"
        );

        post("/index.html", 
            (request, response) -> "Soy el post"
        );
        
        get("/ruta1", 
            (request, response) -> {
                String parametro = request.queryParams("apellido");
                System.out.println("tipo de contenido ruta1 get: " + request.contentType());

                System.out.println(parametro);
                System.out.println("Esto es el request: " + request.contentType());
                return "<h1>Adios Mundo"+ parametro + "!</h1>";
            }
        );

        post ("/ruta1", 
            (request, response) -> {
                String parametro = request.queryParams("apellido");
                System.out.println("tipo de contenido ruta1 post: " + request.contentType());

                System.out.println(parametro);
                System.out.println("Esto es el request: " + request.contentType());
                return "<h1>Adios "+ parametro + "!</h1>";
            }
        );

        get("/ruta2", 
            (request, response) -> {
                String parametro = request.queryParams("nombre");
                System.out.println("tipo de contenido: " + request.contentType());

                JsonObject respuesta = new JsonObject();
                respuesta.addProperty("msj", "hola");
                respuesta.addProperty("apellido", parametro);
                response.type("application/json");

                return respuesta;
            }
        );

        post("/ruta2", 
            (request, response) -> {
                //String parametro = request.queryParams("nombre");
                String parametro = request.body();
                System.out.println("tipo de contenido: " + request.contentType());
                System.out.println("el body tiene: " + parametro);

                JsonParser parser = new JsonParser();
                //Este objeto sirve para acceder a los elementros de la peticion en Json
                JsonElement arbol = parser.parse(parametro);

                //Este objeto sirve para construir la respuestra en Json
                JsonObject respuesta = new JsonObject();

                respuesta.addProperty("msj", "hola");

                respuesta.addProperty("apellido", arbol.getAsJsonObject().get("nombre").getAsString());
                
                response.type("application/json");

                return respuesta;
            }
        );
        
        get("/ruta3", 
            (request, response) -> "<h1>Ok mundo!</h1>"
        );

        get("/ejemplo", 
            (request, response) -> "{\"Alumno\":\"John\",\"Matricula\":\"20001\",\"Carrera\"':\"TC\"}"

        );

         get("/ejemplo2", 
            (request, response) -> {
                System.out.println("Esto es el request" + request.contentType());
                response.type("application/json");
                return "{\"Alumno\":\"John\",\"Matricula\":\"20001\",\"Carrera\"':\"TC\"}";
            }
        );
            
    }
}