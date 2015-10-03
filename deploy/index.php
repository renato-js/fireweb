<!DOCTYPE html>  
<html class="no-js" lang="pt-br">	
<head>

    <?php require "src/php/_inc-meta.php" ?>
  
    <!-- ASSETS -->
    <link rel="stylesheet" href="assets/font-awesome/font-awesome.min.css">    
    <!-- AnimaDIV -->
    <script type="text/javascript" src="assets/animadiv/animaDIV.js"></script> 
    <!-- CheckpointJS -->
    <script type="text/javascript" src="assets/checkpointjs/checkpointjs.js"></script>
    <!-- livicon -->
    <script type="text/javascript" src="assets/livicon/livicons-1.3.min.js"></script>
    <script type="text/javascript" src="assets/livicon/raphael-min.js"></script>
    <!-- parallax -->
    <script type="text/javascript" src="assets/parallax/parallax.min.js"></script>
    <!-- 3D web GL -->
    <script type='text/javascript' src='assets/x3d/x3dom.js'> </script> 
    <link rel='stylesheet' type='text/css' href='assets/x3d/x3dom.css'></link> 

    <!-- fontes Google -->
    
    <!-- Support old ie browsers -->
    <!--[if lt IE 9]>
        <script src="src/js/components/html5shiv.js"></script>
        <link rel="stylesheet" href="src/css/iefix.css">  
    <![endif]-->

    <style>
        
        x3d {
            border:none;
        }

    </style>

        <style type="text/css">
          #trans {
            display: block;
            -ms-animation: spin 8s infinite linear;
            -moz-animation: spin 8s infinite linear;
            -webkit-animation: spin 8s infinite linear;
            animation: spin 8s infinite linear; 
          }
          
          @-webkit-keyframes spin {
            from {
              -ms-transform: rotateY(0); 
              -moz-transform: rotateY(0); 
              -webkit-transform: rotateY(0); 
              transform: rotateY(0); 
            }
            to {
              -ms-transform: rotateY(-360deg);
              -moz-transform: rotateY(-360deg);
              -webkit-transform: rotateY(-360deg);
              transform: rotateY(-360deg); 
            }
          }
          
          @keyframes spin {
            from {
              -ms-transform: rotateY(0); 
              -moz-transform: rotateY(0); 
              -webkit-transform: rotateY(0); 
              transform: rotateY(0); 
            }
            to {
              -ms-transform: rotateY(-360deg);
              -moz-transform: rotateY(-360deg);
              -webkit-transform: rotateY(-360deg);
              transform: rotateY(-360deg); 
            }
          }
        </style>



</head>
<body>

    <h1>Hello, X3DOM!</h1> 
    <p> 
        This is my first html page with some 3d objects. 
    </p> 

    <x3d width="800" height="800">
        <scene>
            


            <!-- nova viewpoint -->
            <Viewpoint position="-1.69842 0.70906 -4.51619" orientation="-0.02472 0.99969 -0.00308 3.49165" zNear="2.69478" zFar="8.05385" description=""></Viewpoint>
            
            <transform id="trans" >
                  <Inline url="deer.x3d"></Inline>
            </transform>

        </scene>
    </x3d>



</body>
</html>