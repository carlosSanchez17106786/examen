<?php
if(isset($_POST['nombre']) && isset($_POST['edad']) && isset($_POST['direccion'])
 && isset($_POST['genero']) && isset($_POST['pais']) && isset($_POST['estado'])){

    $nombre=$_POST['nombre'];
    $edad=$_POST['edad'];
    $direccion=$_POST['direccion'];
    $genero=$_POST['genero'];
    $pais=$_POST['pais'];
    $estado=$_POST['estado'];

    switch ($pais) {
        case 0:
            header('location:index.html');
            break;
         case 1:
                $pais='Mexico';
                break;
      case 2:
        $pais='Argentina';
         break;

         case 3:
            $pais='Chile';
            break;
    
    }


    echo '<h1>El nombre es: '.$nombre.'</h1>';
    echo '<h1>La Edad es: '.$edad.'</h1>';
    echo '<h1>La Direccion es: '.$direccion.'</h1>';
    echo '<h1>El Genero es: '.$genero.'</h1>';
    echo '<h1>El Pais es: '.$pais.'</h1>';
    echo '<h1>El Estado es: '.$estado.'</h1>';

    echo "<h2> <a href='index.html'>Regresar</a> </h2>";

}else{
    
    header('location:index.html');
}

?>