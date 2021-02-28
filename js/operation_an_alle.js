// JScript File

function global_update()
{
    //alert2(8000,xy.update_global(id).value);
    alert(xy.update_global('').value);
}
function this_i78yu_update(my_id_kolksu)
{
    //alert(my_id_kolksu);
    alert(xy.update_global(my_id_kolksu).value);
}
function operation_update_zellen()
{
    var answer = confirm("Achtung die Daten werden evtl. bearbeitet!")
    if (answer)
    {
            //alert2(8000,mini_Zelle_formatid);
        
        $("body").css("cursor", "progress");
        setTimeout( function() 
        { 
            for (var i2 = 0; i2 < $('.mini_Zelle_SpeiseNr').length; i2++)
            {
                var my_value= $('.mini_Zelle_SpeiseNr')[i2];
                my_value=$(my_value).text();
                //update_speise_modern(my_value.split('!')[1],8,$('#update_epsie'+my_value.split('!')[1]).text());
                
                var for_update = zero('div',0,0,0,0,document.body);
                $(for_update).text(my_value.split('!')[3]);
                for_update.id='update_epsie'+my_value.split('!')[1];
                update_speise_modern(my_value.split('!')[1],3,'');
            }
            //start update
            for (var i = 0; i < $('.mini_Zelle_herfs').length; i++)
            {
                var my_value= $('.mini_Zelle_herfs')[i];
                my_value=$(my_value).text();
                
                var atrr_drei = $('#update_epsie'+my_value.split('!')[2]).text();
                
                
                //var for_update = zero('div',0,0,0,0,document.body);
                //$(for_update).text(my_value.split('!')[11]);
                //for_update.id='update_epsie'+my_value.split('!')[2];

                //update_href_modern(my_value.split('!')[1],0,my_value.split('!')[0].split('|')[4])
                if(atrr_drei!='')
                {
                    update_href_modern(my_value.split('!')[1],11,atrr_drei);
                    update_format(my_value.split('!')[3],5,atrr_drei);
                }
            }
            //alert(mini_Zelle_formatid);
            //alert2(8000,mini_Zelle_formatid);
            
            
            $("body").css("cursor", "default");
        }, 500);
    }
}
var privat_counter_u9ikk=0;
function an_alle_mp3()
{
    //divs werden geschrieben
    $('#Div_an_alle').remove();//{var nur_einmal_diese_aktion= zero('div', 0, 0, 0, 0,document.body);nur_einmal_diese_aktion.id='nur_einmal_diese_aktion';jeweils_ein_div();}
    
    var Div_an_alle= zero('div', 0, 0, 0, 0,document.body);$(Div_an_alle).css({'height':'95%','overflow':'auto','top' : '10px','position':'fixed','z-index':'50','background-color':'#16ffe6','left' :'7%',"border":"3px solid black",'border-color': '#'+ speise5,});
    Div_an_alle.id='Div_an_alle';         close_me_knopf(Div_an_alle);
    var table=zero('table',0,0,0,1,Div_an_alle);var body=zero('tbody',0,0,0,0,table);var tr1=zero('tr',0,0,0,0,body);
    var td_11=zero('td',0,0,0,0,tr1);$(td_11).text("pjf Update nur falls vorhanden ist  an die ausgewaehlten Felder in checkboxs");
    var tr2=zero('tr',0,0,0,0,body);var td_13=zero('td',0,0,0,0,tr2);
    //start updates
    var Clone_titel= zero('h2', 0, 0, 0, 0,td_13);$(Clone_titel).text('Clone time an:');
    var fieldset= zero('fieldset', 0, 0, 0, 0,td_13);
    var Clone_titel2= zero('legend', 0, 0, 0, 0,fieldset);$(Clone_titel2).text('zeit_id, tag, von-bis');
    var samler_count=0;
    for (var i = 0; i < haupt_mp3_split_2.split("#").length - 1; i++)
    {
        var open_time_in_mp3_text = haupt_mp3_split_2.split("#")[i];
        var tag = tag_returner(open_time_in_mp3_text.split('|')[0]);
        
        var von_bis = open_time_in_mp3_text.split('|')[1] + "-" + open_time_in_mp3_text.split('|')[2];
        var zeit_id = open_time_in_mp3_text.split('|')[3];
        var labels_div= zero('div', 0, 0, 0, 0,fieldset);$(labels_div).buttonsetv();
        var labels= zero('label', 0, 0, 0, 0,labels_div);
        $(labels).text(zeit_id+','+tag+','+von_bis);
        $(labels).attr({'for':'checkbox-'+i*4981})
        var inputs= zero('input', 0, 0, 0, 0,labels_div);
        $(inputs).attr({'type':'checkbox','name':zeit_id,'id':'checkbox-'+i*4981})
        $(inputs).checkboxradio();
        samler_count++;
        privat_counter_u9ikk++;
    }

    
    
    var icon_navi_bilder_an_alle = k_m_f('101','275 Gruppenbilder',td_13,'',10,'on',(speise4-8),speise2);
        icon_navi_bilder_an_alle.onclick = function()
        {
            var zeit_id_s ='';
            for (var i = 0; i <samler_count; i++)
            {
                if($("#checkbox-"+i*4981).is(':checked'))
                zeit_id_s+= $('#checkbox-'+i*4981).prop('name')+'@';
            }
            //operation_an_alle(mini_Zelle_gruppen , 'solo' , zeit_id_s);
            operation_an_alle($('.mini_Zelle_gruppen').text() , 'solo' , zeit_id_s);
        }
    var icon_zutat_bibliothek_an_alle = k_m_f('107','277 Zutat Bibliothek',td_13,'',10,'on',(speise4-8),speise2);
        icon_zutat_bibliothek_an_alle.onclick = function()
        {
            var zeit_id_s ='';
            for (var i = 0; i <samler_count; i++)
            {
                if($("#checkbox-"+i*4981).is(':checked'))
                zeit_id_s+= $('#checkbox-'+i*4981).prop('name')+'@';
            }
            //operation_an_alle(mini_Zelle_zutatBibliothek , 'solo' , zeit_id_s);
            operation_an_alle($('.mini_Zelle_zutatBibliothek').text() , 'solo' , zeit_id_s);
            
        }
    var icon_speise_nr = k_m_f('109','gtx Speise Name und Nummer',td_13,'',10,'on',(speise4-8),speise2);
        icon_speise_nr.onclick = function()
        {
            var zeit_id_s ='';
            for (var i = 0; i <samler_count; i++)
            {
                if($("#checkbox-"+i*4981).is(':checked'))
                zeit_id_s+= $('#checkbox-'+i*4981).prop('name')+'@';
            }
            //operation_an_alle(mini_Zelle_SpeiseNr , 'zwei' , zeit_id_s);
            operation_an_alle($('.mini_Zelle_SpeiseNr').text() , 'solo' , zeit_id_s);
        }
     var icon_speise_nr = k_m_f('109','jiae mini_Zelle_V_zutat_speise',td_13,'',10,'on',(speise4-8),speise2);
    icon_speise_nr.onclick = function()
    {
        var zeit_id_s ='';
        for (var i = 0; i <samler_count; i++)
        {
            if($("#checkbox-"+i*4981).is(':checked'))
            zeit_id_s+= $('#checkbox-'+i*4981).prop('name')+'@';
        }
        adding_an_alle($('.mini_Zelle_V_zutat_speise').text() , 'solo' , zeit_id_s);
    }
    //var icon_zutat_v_speise = k_m_f('111','111 Zutaten_in_Speise',td_13,'',10,'on',(speise4-8),speise2);
        //icon_zutat_v_speise.onclick = function(){operation_an_alle(mini_Zelle_V_zutat_speise);}
    var div_glo=zero('td',0,0,0,0,td_13);
    var icon_Formaten = k_m_f('113','286 Formaten',div_glo,'',10,'on',(speise4-8),speise2);
        icon_Formaten.onclick = function()
        {
            var zeit_id_s ='';
            for (var i = 0; i <samler_count; i++)
            {
                if($("#checkbox-"+i*4981).is(':checked'))
                zeit_id_s+= $('#checkbox-'+i*4981).prop('name')+'@';
            }
            operation_an_alle(mini_Zelle_formatid+mini_Zelle_format_etikett ,'solo' , zeit_id_s);
        }
    var div_glo=zero('td',0,0,0,0,td_13);
    var icon_preisen = k_m_f('115','xy5 Preis ohne angebot an alle',div_glo,'',10,'on',(speise4-8),speise2);
        icon_preisen.onclick = function()
        {
            var zeit_id_s ='';
            for (var i = 0; i <samler_count; i++)
            {
                if($("#checkbox-"+i*4981).is(':checked'))
                zeit_id_s+= $('#checkbox-'+i*4981).prop('name')+'@';
            }
            preis_ohne_angebot_an_alle($('.mini_Zelle_herfs').text(),zeit_id_s);
        }

    var td_12=zero('td',0,0,0,0,tr2);
    $(td_12).text("Totale Überschreibung an die ausgewaehlten Felder in checkboxs");
        var icon_total = k_m_f('115','486 T O T A L',td_12,'',10,'on',(speise4-8),speise2);
        icon_total.onclick = function()
        {
            var zeit_id_s ='';
            for (var i = 0; i <samler_count; i++)
            {
                if($("#checkbox-"+i*4981).is(':checked'))
                zeit_id_s+= $('#checkbox-'+i*4981).prop('name')+'@';
            }
            operation_an_alle('','total',zeit_id_s);
        }
    //ende updates
}
function preis_ohne_angebot_an_alle(wert,zeit_id_s,atribut)
{
    var answer = confirm("Achtung alle vergleichbare Zeiten werden evtl. preise(ohne Angebote) überschrieben!")
    if (answer)
    {
        $("body").css("cursor", "progress");
        setTimeout( function() 
        {
            alert(xy.uebertragung_an_alle_preisen(wert , zeit_id_s , zeit_id).value);
            $("body").css("cursor", "default");
            $('#Div_an_alle').remove();
        }, 1000);
    }
}
function adding_an_alle(wert,art,zeit_id_s)
{
    var answer = confirm('Achtung alle vergleichbare Zeiten werden '+art+' addiert !')
    if (answer)
    {
        $("body").css("cursor", "progress");
        setTimeout( function() 
        {
            alert(xy.adding_an_alle(wert , zeit_id_s , zeit_id).value);
            $("body").css("cursor", "default");
            $('#Div_an_alle').remove();
        }, 500);
    }
}
function operation_an_alle(wert,art,zeit_id_s,adding)
{
        var answer = confirm("Achtung alle vergleichbare Zeiten werden evtl. bearbeitet!")
        if (answer)
        {
            $("body").css("cursor", "progress");
            setTimeout( function() 
            {
                if(art=='total')
                {alert(art);
                    entladen();
                    $("body").css("cursor", "progress");
                    setTimeout( function() 
                    { 
                        alert(xy.totale_ueberschreibung_an_alle(zeit_id_s , zeit_id).value);
                        $("body").css("cursor", "default");
                    }, 500);
                    
                }
                //if(art=='solo')
                //{
                //    alert(xy.uebertragung_an_alle(wert , zeit_id_s , zeit_id).value);
                //    $("body").css("cursor", "default");
                //    $('#Div_an_alle').remove();
                //}
                if(art=='solo')
                {
                    alert(xy.uebertragung_an_alle(wert , zeit_id_s , zeit_id,art).value);
                    $("body").css("cursor", "default");
                    $('#Div_an_alle').remove();
                }
            }, 500);
        }
}
function totale_ueberschreibung_an_alle(wert)
{
        var answer = confirm("Achtung alle vergleichbare Zeiten werden total Ueberschrieben!!")
        if (answer){
            //alert(xy.totale_ueberschreibung_an_alle(wert,id).value);
            alert("nicht aktive 155");
            $('#Div_an_alle').remove();
        }else{};
}