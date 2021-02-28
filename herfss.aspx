<%@ Page Language="C#" AutoEventWireup="true" CodeFile="herfss.aspx.cs" Inherits="herfss" %>

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Matrix</title>
    <script language="javascript" type="text/javascript" src="herfss.js"> 


    </script>
    <style type="text/css">
        #editor      { white-space:pre; }
        #langezeile  { white-space:nowrap; }
    </style>
</head>
<body id="mybody2" onload="start_matrix()" >
    <form id="form1" runat="server">
    <div>
        <table>
            <tr>
                <td>
                    <div id="divtitle"></div>
                </td>
                
                <td>
                    <div id="Essen_div"></div>
                </td>
                
                <td>
                </td>
            </tr>
        </table>
    </div>
    </form>
</body>
</html>
