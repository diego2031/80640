package mx.uv;

import static spark.Spark.*;

public class App 
{
    public static String nombre = " ";
    public static void main( String[] args )
    {
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

        get("/insertar", 
            (request, response) -> {
                System.out.println("Nombre insertado: " + request.queryParams("nombre"));
                nombre = request.queryParams("nombre");
                return "Insertado";
            }
        );

        get ("/mostrar", 
            (request, response) -> {
                System.out.println("Mostrando nombre: " + nombre);
                return "Mostrado";
            }
        );

        get ("/editar", 
            (request, response) -> {
                System.out.println("Nombre editado: " + request.queryParams("nombre"));
                nombre = request.queryParams("nombre");
                return "Editado";
            }
        );

        get("/eliminar", 
            (request, response) -> {
                nombre = " ";
                System.out.println("Nombre eliminado" + nombre);
                return "Eliminado";
            }
        );
     
    }
}