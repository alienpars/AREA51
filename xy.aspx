<%@ Page Language="C#" AutoEventWireup="true" CodeFile="xy.aspx.cs" Inherits="xy" %>
<!DOCTYPE html>


<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
<style type="text/css">
  body { margin-left:10px; }
  p,table,ul,ol { margin-left:5px; }
    div { border-radius: 2px; }
    #foto { position:absolute; top:30px; left:50px; bottom:50px; right:50px;
      z-index:1;
	
      
       }
    .fix { position:fixed; z-index:2;}
        #xylable { position:absolute;z-index:-1; }
    .gruppenbild {
	    background-repeat: no-repeat;
	    border-width:1px;
	    border-right-width:2px;
	    border-left-width:2px;
        border-style:solid;
        border-color:metal;
    }
    
    .ui-effects-transfer {  /* style the transfer element */
			border: black 3px solid;
			background-color: #AAA;
			z-index:1;
		}
	.map{  /* style the transfer element */
		border: black 3px solid;
		background-color: #AAA;
		z-index:1;
	}
	.divecke{  /* style the transfer element */
	    border-radius: 5px; 
		border: black 1px solid;
		background-color: #AAA;
		z-index:2;
	}
	.ui-autocomplete { position: absolute; cursor: pointer;z-index:3330 !important;border-radius: 5px; 
		border: black 1px solid;
		background-color: #AAA;}  
</style>
    <title>YX Href</title>
    <script language="javascript" type="text/javascript" src="herfss.js"> </script>
    <script type="text/javascript" src="js/x_insert.js"></script>
    <script type="text/javascript" src="js/x_update.js"></script>
    <script type="text/javascript" src="js/x_delete.js"></script>
    <script type="text/javascript" src="js/x_show.js"></script>
    <script type="text/javascript" src="js/x_zutaten.js"></script>
    <script type="text/javascript" src="js/x_wahl_zutaten.js"></script>
    <script type="text/javascript" src="js/x_zutat_geld.js"></script>
    <script type="text/javascript" src="js/x_plz.js"></script>
    <script type="text/javascript" src="js/x_format.js"></script>
    <script type="text/javascript" src="js/operation_an_alle.js"></script>

    
    
   <!-- <script src="js/jquery.min.js"type="text/javascript";></script>
	
 <script language="javascript"; src="www.js"; type="text/javascript";></script>
    <script src="js/jquery.Jcrop.js"type="text/javascript";></script>
    <script type="text/javascript" src="js/jquery.backgroundpos.js"type="text/javascript";></script>
	<link href="css/ui-lightness/jquery-ui-1.10.3.custom.css" rel="stylesheet">
	<script src="js/jquery-1.9.1.js"type="text/javascript";></script>
	<script src="js/jquery.corner.js"type="text/javascript";></script>
    <link rel="shortcut icon" id="pagetitlepic" type="image/png" />
	
	<script src="js/jquery-ui-1.10.3.custom.js"type="text/javascript";></script>
	<script type="text/javascript" src="js/jquery.infobox.js"></script><link rel="stylesheet" type="text/css" href="css/infobox_plugin.css" />
	-->
	  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <!--<link rel="stylesheet" href="/resources/demos/style.css">-->
	  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="js/jquery.myplugin.js"></script>
    <script src="fsw/js/jquery.countdown.js"></script>

        

</head>
<body id="mybody" runat="server">
      <form id="form1" runat="server">
        
        <div ><label id="kopfgruppe"  class="fix" ></label></div>
        <div ><label id="koppreis"  class="fix"></label></div>
        <div id="xymodus"  class="fix"  style="top:5px"></div>
        <div id="switch"  class="fix"  style="top:5px"></div>
        <div id="lang"  class="fix"  style="top:5px"></div>
        <div id="breit"  class="fix" style="top:5px"></div>
        <div id="kette"  class="fix"  style="top:5px"></div>
        <div id="zutzt_einschalten"  class="fix"  style="top:55px"></div>
        <div id="geld"  class="fix"  style="top:55px"></div>
        <div id="delete"  class="fix"  style="top:55px"></div>
        <div id="addgrupp"  class="fix"  style="top:55px"></div>
        <div id="addmenu"  class="fix"  style="top:105px"></div>
        <div id="speichern"  class="fix"  style="top:55px"></div>
        <!----><div id="design"  class="fix"  style="top:55px"></div>
        <!--<div id="div_fax"  class="fix"  style="top:90px"></div>-->
        <!--<div id="div_mail"  class="fix"  style="top:116px"></div>-->
        <div id="div_kuche" class="fix"></div>
        <div id="matt_flach"  class="fix"  style="top:140px"></div>
        <!----><div id="div_matrix"  class="fix"  style="top:140px"></div>
        <!--<div id="div_plz"  class="fix"  style="top:170px"></div>-->
        <!--<div id="div_pizzatag"  class="fix"  style="top:200px"></div>-->
        <!--<div id="gruppen_namen"  class="fix"  style="top:240px"></div>-->
        <!--<div id="div_restaurant_art"  class="fix"  style="top:270px"></div>-->
        <!--<div id="job_div"  class="fix"  style="top:320px"></div>-->
        <!--<div id="div_slide"  class="fix"  style="top:340px"></div>-->
        <!--<div id="div_pic_unter_slide"  class="fix"  style="top:360px"></div>-->
        <!--<div id="div_web_options"  class="fix"  style="top:380px"></div>-->
        <div id="up_jcrop"  class="fix"  style="top:380px; right:15px;"></div>
        <div id="Down_jcrop"  class="fix"  style="top:440px; right:15px;"></div>
        

        <div id="divtitle"   class="fix"></div>
        <div id="div_speisen"   class="fix"></div>
        <div id="div_format"   class="fix"></div>


        <div id="foto"></div>
        <!--<div id="zutatliste" class="fix"></div>-->
        <div id="geldliste" class="fix"></div>
        
        
                    <!--<div id="zutatbox" class="fix"></div>-->

        <div class="inline-labels" id="xylable">
            <label> <input type="text" size="1" id="x1" name="x1"  style="border:0" /></label>
            <label> <input type="text" size="1" id="y1" name="y1"  style="border:0" /></label>
            <label> <input type="text" size="1" id="x2" name="x2" style="border:0"  /></label>
            <label><input type="text" size="1" id="y2" name="y2" style="border:0" /></label>
        </div>
    </form>
        <div id="reterta" runat="server"></div>
</body>
</html>
