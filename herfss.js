// JScript File

function start_matrix()//page load 
{
    //alert(1);
     hoehe = (screen.height * 0.90);
     breite = (screen.width * 0.95);
    newmatrix(id);
};


var produkt_Zustand_notar;//merkt den Zustand des produktes 1=unbearbeitet 2=in arbeit 3=fertig
var id;// biroon bashe behtare baraye funktione updatemp3 estefade mishe
var aktuellepicnummer;var gmp3 ;
function xystart()
{
     hoehe = (screen.height * 0.65);
     breite = (screen.width * 0.95);
    //var urll = window.location.hash.split('#');// idye zeitfenster ro migire
    //id = urll[1];
    //xy.laden(id);
    
    aj_laden();
    laden();
    var immage_ink = web_options_liste.split("|")[25].split("^")[0];
    $('html, body').css({'background-color': '#c5eaff',"background-image":'url('+immage_ink+')',});
    var div_matt_setzer=zero('div',0,0,0,0,document.body);div_matt_setzer.id='js28_div_matt_setzer';
    var mattopaciti = web_options_liste.split("|")[26].split("^")[1];
    $(div_matt_setzer).css({'width':'100%','height':'100%',"background-color":'#ffffff','position':'fixed','opacity': '0.'+mattopaciti,});
    
    var table_top=zero('table',0,0,0,0,document.body);var body_top=zero('tbody',0,0,0,0,table_top);var tr_top=zero('tr',0,0,0,0,body_top);
    $(table_top).css({"background-color":'yellow','top':'2px','width':'98%','z-index':'1','height':35+'px','position':'fixed','left':'0px', });
    var div_time_info_div = zero('div', 0, 0, 0, 0, tr_top);
    zeit_info = $('#zeit_info' + zeit_id).text();
    $(div_time_info_div).text('x93 ' + zeit_info);
    //var info_td=zero('td',0,0,0,0,tr_top);$(info_td).text('x93 '+zeit_info);

    var fax_box_td_top=zero('td',0,0,0,0,tr_top);
    var weg = k_m_f('u9piewp9','F A X',fax_box_td_top,'',10,'on',(speise4-5),speise2);weg.onclick = function(){$('#g_box').remove();start_fax_box();}
    var bg_foto_td=zero('td',0,0,0,0,tr_top);var a_td_add_fotos = k_m_f('cerdfr4','BG Foto',bg_foto_td,'',8,'on',(speise4-5),speise2);a_td_add_fotos.onclick = function(){gruppen_bild_update(restaurantId,'bg_img');};
    
    var down_icon=zero('td',0,0,0,0,tr_top);var down_icon = k_m_f('cerdfr4','↓↓↓↓↓',down_icon,'',8,'on',(speise4-5),speise2);down_icon.onclick = function()
    {
        //$('html, body').animate({scrollTop: $(this).offset().top+15000}, 500);
        //alert();
        $('html, body').animate({scrollTop: $('#bild-'+teck_gruppen_id).offset().top-70}, 500);
        
    };
    var up_icon=zero('td',0,0,0,0,tr_top);var up_icon = k_m_f('cerdfr4','↑↑↑↑↑↑',up_icon,'',8,'on',(speise4-5),speise2);up_icon.onclick = function()
    {
        $('html, body').animate({scrollTop: $(this).offset().top-15000 }, 500);
    };
    
    var add_grups_td=zero('td',0,0,0,0,tr_top);var a_td_add_grupps = k_m_f('cerdfr4','G Start',add_grups_td,'',8,'on',(speise4-5),speise2);a_td_add_grupps.onclick = function(){add_grups_box();};
    var matrix_td=zero('td',0,0,0,0,tr_top);var icon_matrix = k_m_f('cerdfr4','matrix',matrix_td,'',8,'on',(speise4-5),speise2);icon_matrix.onclick = function(){window.open('herfss.aspx?'+id, '_blank');};
    var web_options_td=zero('td',0,0,0,0,tr_top);var web_optionen_icon = k_m_f('cerdfr4','Extras',web_options_td,'',8,'on',(speise4-5),speise2);web_optionen_icon.onclick = function(){ start_web_options();};
    var pllzz_td=zero('td',0,0,0,0,tr_top);var web_plz_icon = k_m_f('cerdfr4','PLZ',pllzz_td,'',8,'on',(speise4-5),speise2);web_plz_icon.onclick = function(){ start_plz_box();};
    var optionen_td=zero('td',0,0,0,0,tr_top);var optionen_icon = k_m_f('cerdfr4','Optionen',optionen_td,'',8,'on',(speise4-5),speise2);optionen_icon.onclick = function(){optionen_click();};
    var an_alle_mp3_td=zero('td',0,0,0,0,tr_top);var an_alle_mp3_icon = k_m_f('dess','53ds speichern u. An alle',an_alle_mp3_td,'',8,'on',(speise4-5),speise2);
    an_alle_mp3_icon.onclick = function(){an_alle_mp3();};
    var icon_td_Ext=zero('td',0,0,0,0,tr_top);var a_td_show = k_m_f('rtufcwe','Ext',icon_td_Ext,'',10,'on',(speise4-5),speise2);a_td_show.onclick = function(){open_div_exit_liste();};

    
    var Speichern_td=zero('td',0,0,0,0,tr_top);var speichern_icon = k_m_f('cerdfr4','kxf Speichern',Speichern_td,'',8,'on',(speise4-5),speise2);
    speichern_icon.onclick = function()
    {
        $(this).css('color', 'red');
        entladen();
        var returned = xy.export_html_button_localhost_express_einzeln(restaurantId,zeit_id).value;
        if(returned!="")
            alert(returned);
        else{alert2(700,'exported!')};
    };
    lage_pic_verhaeltnisse();
    open_navi_click();
    element_filter_technologie();
    
    var table_down=zero('table',0,0,0,0,document.body);var body_top=zero('tbody',0,0,0,0,table_down);var tr_top=zero('tr',0,0,0,0,body_top);
    $(table_down).css({"background-color":'yellow','bottom':'5px','width':'98%','z-index':'1','height':35+'px','position':'fixed','left':'0px', });
    //go to this icon
    var td_68=zero('td',0,0,0,0,tr_top);var go_to_fenster = k_m_f('54ys','kxd Go to time',td_68,'',10,'on',(speise4-5),speise2);go_to_fenster.onclick = function()
    {
        switch_time_fenster();
    };
    var td_68=zero('td',0,0,0,0,tr_top);var update_zelle = k_m_f('54ys','kxg update global',td_68,'',10,'on',(speise4-5),speise2);update_zelle.onclick = function()
    {
        //operation_update_zellen();
        global_update();
    };
    var td_68=zero('td',0,0,0,0,tr_top);var update_zelle = k_m_f('54ys','kxk update this',td_68,'',10,'on',(speise4-5),speise2);update_zelle.onclick = function()
    {
        //operation_update_zellen();
        this_i78yu_update(id);
    };
    var td_68=zero('td',0,0,0,0,tr_top);var update_zelle = k_m_f('54ys','kxc reinigung menu',td_68,'',10,'on',(speise4-5),speise2);update_zelle.onclick = function()
    {
        reinigung_menu();
    };
    var Flyer_td=zero('td',0,0,0,0,tr_top);var Flyer_icon = k_m_f('dess','56g Fleyer',Flyer_td,'',8,'on',(speise4-5),speise2);Flyer_icon.onclick = function(){Flyer_table(web_options_liste.split("|")[27].split("^")[1]);};
    var td_68=zero('td',0,0,0,0,tr_top);var update_zelle = k_m_f('54ys','7474 Global Abfrage',td_68,'',10,'on',(speise4-5),speise2);
    update_zelle.onclick = function()
    {
        global_angebote_zeigen();
    };
    var wochen_optionen_td=zero('td',0,0,0,0,tr_top);var wochen_optionen_icon = k_m_f('dess','Wochenoptionen',wochen_optionen_td,'',8,'on',(speise4-5),speise2);wochen_optionen_icon.onclick = function(){wochen_93_optionen();};
    var alle_speise_namen_td=zero('td',0,0,0,0,tr_top);var alle_speise_namen_icon = k_m_f('92ujkm','Direkt U+',alle_speise_namen_td,'',8,'on',(speise4-5),speise2);alle_speise_namen_icon.onclick = function(){open_div_103();};
    
    var font_box_td_top=zero('td',0,0,0,0,tr_top);var rups_f_b = k_m_f('54ys','Font Box',font_box_td_top,'',10,'on',(speise4-5),speise2);rups_f_b.onclick = function(){grupppen_font_box('g');};
    var sup_switcher_td_top=zero('td',0,0,0,0,tr_top);var sup_switcher_f_b = k_m_f('54ys','Sup Legende',sup_switcher_td_top,'',10,'on',(speise4-5),speise2);sup_switcher_f_b.onclick = function(){sup_switcher();};
    lade_zutaten();
    //$('#getting-started').countdown('2015/01/01', function (event) {
        //$(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
    //});
}



function global_angebote_zeigen()
{
    $('#Div_an_alle').remove();//{var nur_einmal_diese_aktion= zero('div', 0, 0, 0, 0,document.body);nur_einmal_diese_aktion.id='nur_einmal_diese_aktion';jeweils_ein_div();}
    
    var Div_an_alle= zero('div', 0, 0, 0, 0,document.body);
    $(Div_an_alle).css({'overflow' : 'auto','top' : '50px','z-index':'250','background-color':'#16ffe6','height':'83%','position':'fixed','width':'80%',
            'left' :'7%',"border":"3px solid black",'border-color': '#'+ speise5,});
            
    Div_an_alle.id='Div_an_alle';         
    //var table=zero('table',0,0,0,1,Div_an_alle);var body=zero('tbody',0,0,0,0,table);var tr1=zero('tr',0,0,0,0,body);
    //var td_11=zero('td',0,0,0,0,tr1);
    $(Div_an_alle).text("9393 global Abfrage");
    close_me_knopf(Div_an_alle);
    //var tr2=zero('tr',0,0,0,0,body);var td_13=zero('td',0,0,0,0,tr2);
    //start updates
    
    var samler_count=0;
    for (var i = 0; i < haupt_mp3_split_2.split("#").length - 1; i++)
    {
        var open_time_in_mp3_text = haupt_mp3_split_2.split("#")[i];
        var zeit_id = open_time_in_mp3_text.split('|')[3];
        var von_bis = open_time_in_mp3_text.split('|')[1] + "-" + open_time_in_mp3_text.split('|')[2];
        var tag = tag_returner(open_time_in_mp3_text.split('|')[0]);
        
        var fieldset= zero('fieldset', 0, 0, 0, 0,Div_an_alle);
        var Clone_titel2= zero('legend', 0, 0, 0, 0,fieldset);$(Clone_titel2).text(zeit_id+','+tag+','+von_bis);

        var div_ergebniss= zero('div', 0, 0, 0, 0,fieldset);
        div_ergebniss.id = 'div_y56_'+zeit_id;
        
        samler_count++;
    }
    var abfrage_angebot_con = k_m_f('101','115 Angebot Abfrage',Div_an_alle,'',10,'on',(speise4-8),speise2);
    abfrage_angebot_con.onclick = function()
    {
        $("body").css("cursor", "progress");
        setTimeout( function() 
        {
            var zeit_id_s ='';
            for (var i = 0; i < haupt_mp3_split_2.split("#").length - 1; i++)
            {
                var open_time_in_mp3_text = haupt_mp3_split_2.split("#")[i];
                var zeit_id = open_time_in_mp3_text.split('|')[3];
                var returned = xy.global_abfrage_angebot(zeit_id).value;
                
                for (var i2 = 0; i2 < returned.split("@").length - 1; i2++)
                {
                    var returned_satz = returned.split("@")[i2];
                    var name = $('#C_mini_Zelle_SpeiseNr'+returned_satz.split('!')[2]).text().split('!')[0];
                    var format =''; if(returned_satz.split('!')[8]!='f0')format=returned_satz.split('!')[8];
                    var org_pr = returned_satz.split('!')[0];
                    var ang_pr = returned_satz.split('!')[13];
                    //var new_value = $('#div_y56_'+zeit_id).text();
                    //new_value+= name+' '+format+' ' + org_pr+' ' + ang_pr +'<br>';
                    var div_satzt= zero('div', 0, 0, 0, 0,document.getElementById('div_y56_'+zeit_id));
                    $(div_satzt).text(name+' '+format+'\n ' + org_pr+' ' + ang_pr);
                    
                }
            }
            $("body").css("cursor", "default");
        }, 500);
    }
}

function open_div_exit_liste()
{
    $('#Div_an_alle').remove();var Div_an_alle= zero('div', 0, 0, 0, 0,document.body);$(Div_an_alle).css({'top' : '50px','position':'fixed','z-index':'50','background-color':'#16ffe6','width' :'35%' , 'height' :'73%', 'left' :'53%',"border":"3px solid black",'border-color': '#'+ speise5,});
    Div_an_alle.id='Div_an_alle'; $(Div_an_alle).text('js_6262');        close_me_knopf(Div_an_alle);
    
    var div_898=zero('div',0,0,0,0,Div_an_alle);
    var icon_open_76 = k_m_f('101','7678 Export localhost (fuer schnelle Source update)',div_898,'',10,'on',(speise4-8),speise2);
    icon_open_76.onclick = function()
    {
        $("body").css("cursor", "progress");
        setTimeout( function() {
            entladen();
            alert(xy.export_html_button_localhost(restaurantId).value);
            $("body").css("cursor", "default");
        }, 700);
    }
    var div_898=zero('div',0,0,0,0,Div_an_alle);
    var icon_open_85 = k_m_f('101','Show exit from localhost',div_898,'',10,'on',(speise4-8),speise2);
        icon_open_85.onclick = function(){window.open('web.aspx?'+restaurantId+"?1?1?1", '_blank');}
     var div_898=zero('div',0,0,0,0,Div_an_alle);
    var icon_open_84 = k_m_f('101','Show m.exit from localhost',div_898,'',10,'on',(speise4-8),speise2);
        icon_open_84.onclick = function(){window.open('mob.aspx?'+restaurantId+"?1?1?1", '_blank');}
     var div_898=zero('div',0,0,30,0,Div_an_alle);
    var div_898=zero('div',0,0,0,0,Div_an_alle);
    var icon_open_76 = k_m_f('101','7678 Export 1UND1',div_898,'',10,'on',(speise4-8),speise2);
    icon_open_76.onclick = function()
    {
        $("body").css("cursor", "progress");
        setTimeout( function() {
            entladen();
            alert(xy.export_1und1_button_gesamt(restaurantId).value);
            $("body").css("cursor", "default");
        }, 700);
    }
    var div_898=zero('div',0,0,0,0,Div_an_alle);
    var icon_open_76 = k_m_f('101','7678 Export 1UND1 Einzeln',div_898,'',10,'on',(speise4-8),speise2);
    icon_open_76.onclick = function()
    {
        $("body").css("cursor", "progress");
        setTimeout( function() {
            entladen();
            alert(xy.export_1und1_button_einzeln(restaurantId,zeit_id).value);
            $("body").css("cursor", "default");
        }, 700);
    }
    var div_898=zero('div',0,0,30,0,Div_an_alle);
    //var icon_open_86 = k_m_f('86','8690 Export Express localhost Einzeln (fuer noch schnellere Source update)',Div_an_alle,'',10,'on',(speise4-8),speise2);
        //icon_open_86.onclick = function()
        //{
           // entladen();
           // var returned = xy.export_html_button_localhost_express_einzeln(restaurantId,zeit_id).value;
           // if(returned!="")
            //    alert(returned);
           // else{alert2(700,'exported!')};
      //  }
    var icon_open_92 = k_m_f('101','Show this exit from localhost(for express update)',Div_an_alle,'',10,'on',(speise4-8),speise2);
        icon_open_92.onclick = function(){window.open('web.aspx?'+restaurantId+"?0?0?1?"+zeit_id, '_blank');}
    var icon_open_94 = k_m_f('9454','Show this m.exit from localhost(for express update)',Div_an_alle,'',10,'on',(speise4-8),speise2);
        icon_open_94.onclick = function(){window.open('mob.aspx?'+restaurantId+"?0?0?1?"+zeit_id, '_blank');}
        //alert(id);
}
function alert2(time,text)
{
    var parde_kk2 = zero('div',0,0,0,0,document.body);
    
    $(parde_kk2).css({'text-size' : '20px','padding-top' : '10px','padding-left' : '5px','top' : '60px','padding-right' : '65px',
    'left' : '4%','position' : 'fixed',"background-color":'#AAA',
    'z-index':'3000',
    'overflow':'auto',});
    
    var icon_close = k_m_f('9454','X',parde_kk2,'',10,'on',(speise4-2),speise2);
    icon_close.onclick = function(){
        $(parde_kk2).remove();
    };
    var parde_kk = zero('div',0,0,0,0,parde_kk2);
    $(parde_kk).text(text);
    setTimeout( function() {$(parde_kk2).remove();},time);
}
function Flyer_table(alue)
{
    $('#js_61').remove();var Div_Flyer= zero('div', 0, 0, 0, 0,document.body);$(Div_Flyer).animate({ scrollTop: 999999 }, 'fast');
    $(Div_Flyer).css({'top' : '50px','position':'fixed','z-index':'50','background-color':'#16ffe6','width' :'95%',
         'height' :'87%', 'left' :'2%',"border":"2px solid black",'border-color': '#'+ speise5,'overflow':'auto'});
    close_me_knopf(Div_Flyer);
    Div_Flyer.id='js_61';  
   $(Div_Flyer).resizable();
   $(Div_Flyer).draggable();
    //table
    var table_Flyer=zero('table',0,0,0,1,Div_Flyer);var body66=zero('tbody',0,0,0,0,table_Flyer);$(table_Flyer).css({'width':'96%'});
    var tr1=zero('tr',0,0,0,0,body66);$(tr1).text("fl8 Flyer");$(tr1).css({'font-size':'120%'});
    for (var i2 = 0; i2 < alue.split("¶").length; i2++) 
    {   
        var tr73=zero('tr',0,0,0,0,body66);
        if(alue.split("¶")[i2].split("Î")[0]=='t')
        {$(tr73).css({'font-size':'120%'});
            //input
            var td78=zero('td',0,0,0,0,tr73);$(td78).css({'width':'460px'});
            var titel_input_75 = zero('textarea', 0, 0, 0, 0, td78);
            $(titel_input_75).css({'background-color': 'white','width':'450px','font-size':'120%','height':'20px'});
            titel_input_75.id=i2;
            $(titel_input_75).blur(function () {
                $(this).css("color","red");
                $('#myid81'+this.id).text($(this).val());
                alue=privat_fcion_alue_writer(alue);
                Flyer_table(alue);
            });
            //name
            var td80=zero('td',0,0,0,0,tr73);$(td80).text(alue.split("¶")[i2].split("Î")[1]);td80.colSpan='2';td80.id='myid81'+i2;
            $(titel_input_75).text(alue.split("¶")[i2].split("Î")[1]);
        }
        if(alue.split("¶")[i2].split("Î")[0]=='b')//beschreibung
        {
            //input
            var td78=zero('td',0,0,0,0,tr73);$(td78).css({'width':'460px'});
            var titel_input_75 = zero('textarea', 0, 0, 0, 0, td78);
            $(titel_input_75).css({'background-color': 'white','width':'450px','font-size':'120%','height':'20px'});
            titel_input_75.id=i2;
            $(titel_input_75).blur(function () {
                $(this).css("color","red");
                $('#myid81'+this.id).text($(this).val());
                alue=privat_fcion_alue_writer(alue);
                Flyer_table(alue);
            });
            //name
            var td80=zero('td',0,0,0,0,tr73);$(td80).text(alue.split("¶")[i2].split("Î")[1]);td80.colSpan='2';td80.id='myid81'+i2;
            $(titel_input_75).text(alue.split("¶")[i2].split("Î")[1]);
        }
        if(alue.split("¶")[i2].split("Î")[0]=='p')
        {
            //var tr74=zero('tr',0,0,0,0,body66);
            //input
            var td81=zero('td',0,0,0,0,tr73);$(td81).css({'width':'460px'});
            var produkt_input_83 = zero('textarea', 0, 0, 0, 0, td81);$(produkt_input_83).css({'background-color': 'white','width':'450px','height':'20px'});
            produkt_input_83.id=i2;
            $(produkt_input_83).blur(function () 
            {
                $(this).css("color","red");
                $('#stedc'+this.id).text($(this).val().split(';')[0]);
                $('#stedv'+this.id).text($(this).val().split(';')[1]);
                alue=privat_fcion_alue_writer(alue);
                Flyer_table(alue);
            });
            //name
            var td82=zero('td',0,0,0,0,tr73);$(td82).text(alue.split("¶")[i2].split("Î")[1].split(';')[0]);td82.id='stedc'+i2; 
            //preis
            var td83=zero('td',0,0,0,0,tr73);$(td83).text(alue.split("¶")[i2].split("Î")[1].split(';')[1]); 
            $(td83).css({'width':'49px'});td83.id='stedv'+i2; 
            $(produkt_input_83).text(alue.split("¶")[i2].split("Î")[1]);
        }
        if(alue.split("¶")[i2]!='')
        {
            var delet_tr_icon = k_m_f(i2,'delet',tr73,'',10,'on',(speise4-4),speise2);
            delet_tr_icon.onclick = function()
            {
                alue=delet_privat_fcion_alue_tr(alue,this.id);
                Flyer_table(alue);
            }
        }
        
    }
     //icons
    var add_titel_icon = k_m_f('y83imk','+ Titel',Div_Flyer,'',10,'on',(speise4-4),speise2);
    add_titel_icon.onclick = function()
    {
        alue=alue+'¶tÎ'; 
        alue=privat_fcion_alue_writer(alue);
        Flyer_table(alue);
    }
    var add_angebot_icon = k_m_f('y83imk','+ Beschreibung',Div_Flyer,'',10,'on',(speise4-4),speise2);
    add_angebot_icon.onclick = function()
    {
        alue=alue+'¶bÎ'; 
        alue=privat_fcion_alue_writer(alue);
        Flyer_table(alue);
    }
    var add_angebot_icon = k_m_f('y83imk','+ Produkt',Div_Flyer,'',10,'on',(speise4-4),speise2);
    add_angebot_icon.onclick = function()
    {
        alue=alue+'¶pÎ'; 
        alue=privat_fcion_alue_writer(alue);
        Flyer_table(alue);
    }
    var loesche_icon = k_m_f('y83imk','Delet',Div_Flyer,'',10,'on',(speise4-4),speise2);
    loesche_icon.onclick = function()
    {
        update_web_options('',27); Flyer_table('');
    }
}
function delet_privat_fcion_alue_tr(alue,count)
{
    var antwort='';
    for (var i2 = 0; i2 < alue.split("¶").length; i2++) 
    {
        if(i2!=count)
        antwort+=alue.split("¶")[i2]+'¶';
    }
    update_web_options(antwort,27);  
    return     antwort;
}
function privat_fcion_alue_writer(alue)
{
    var antwort='';
    for (var i2 = 0; i2 < alue.split("¶").length; i2++) 
    {
        if(alue.split("¶")[i2].split("Î")[0]=='p')
        {
            antwort+= '¶pÎ'+$('#stedc'+i2).text()+';'+$('#stedv'+i2).text()+'Î';
        }
        if(alue.split("¶")[i2].split("Î")[0]=='t')
        {
            antwort+= '¶tÎ'+$('#myid81'+i2).text()+'Î';
        }
        if(alue.split("¶")[i2].split("Î")[0]=='b')
        {
            antwort+= '¶bÎ'+$('#myid81'+i2).text()+'Î';
        }
    }
    update_web_options(antwort,27);  
    return     antwort;
}
function update_web_options(value,atribute)
{
    var antwort='';
    for (var i2 = 0; i2 < web_options_liste.split("|").length-1; i2++) 
    {
        if(i2==atribute)
        {
            //alert(web_options_liste.split("|")[i2].split("^")[0]);
            antwort+=web_options_liste.split("|")[i2].split("^")[0]+'^';
            antwort+=value+'|';
        }
        else
        {
            antwort+=web_options_liste.split("|")[i2]+'|';
        }
    }
    web_options_liste=antwort;
    //alert(web_options_liste);
}


function wochen_93_optionen()
{
    if(document.getElementById('Div_wochen_93_optionen'))$('#Div_wochen_93_optionen').remove();
    var Div_wochen_93_optionen= zero('div', 0, 0, 0, 0,document.body);$(Div_wochen_93_optionen).css({'top' : '50px','position':'fixed','z-index':'50',
    'background-color':'#16ffe6','width' :'95%' , 'height' :'83%', 'left' :'3%',"border":"3px solid black",'border-color': '#'+ speise5,'overflow':'auto'});
    Div_wochen_93_optionen.id='Div_wochen_93_optionen';         close_me_knopf(Div_wochen_93_optionen);
    var table=zero('table',0,0,0,1,Div_wochen_93_optionen);var body=zero('tbody',0,0,0,0,table);
    var tr1=zero('tr',0,0,0,0,body);var td_11=zero('td',0,0,0,0,tr1);$(td_11).text("1hikus6 Tag");
    var tr1=zero('tr',0,0,0,0,body);
        var td_12=zero('td',0,0,0,0,tr1);$(td_12).text("Mo.");//td_12.colSpan=10;
    var tr2=zero('tr',0,0,0,0,body);
        var td_13=zero('td',0,0,0,0,tr2);$(td_13).text("Di.");
    var tr3=zero('tr',0,0,0,0,body);
        var td_14=zero('td',0,0,0,0,tr3);$(td_14).text("Mi.");
    var tr4=zero('tr',0,0,0,0,body);
        var td_15=zero('td',0,0,0,0,tr4);$(td_15).text("Do.");
    var tr5=zero('tr',0,0,0,0,body);
        var td_16=zero('td',0,0,0,0,tr5);$(td_16).text("Fr.");
    var tr6=zero('tr',0,0,0,0,body);
        var td_17=zero('td',0,0,0,0,tr6);$(td_17).text("Sa.");
    var tr7=zero('tr',0,0,0,0,body);
        var td_18=zero('td',0,0,0,0,tr7);$(td_18).text("So.");
    var tr9=zero('tr',0,0,0,0,body);
        var td_19=zero('td',0,0,0,0,tr9);$(td_19).text("Fei.");
    for (var i = 0; i < haupt_mp3_split_2.split("#").length - 1; i++)
    {
        if(haupt_mp3_split_2.split("#")[i].split('|')[0]==1){var div_126=zero('div',0,0,0,0,tr1);
        $(div_126).text(haupt_mp3_split_2.split("#")[i].split('|')[1]+" bis "+haupt_mp3_split_2.split("#")[i].split('|')[2]);
        var text_130=zero('textarea',0,600,0,0,tr1);$(text_130).val(haupt_mp3_split_2.split("#")[i].split('|')[4]);text_130.id="area-"+haupt_mp3_split_2.split("#")[i].split('|')[3];
        var div_127=zero('div',0,0,0,0,tr1);$(div_127).text(haupt_mp3_split_2.split("#")[i].split('|')[5]);
        var weg = k_m_f('icon-'+haupt_mp3_split_2.split("#")[i].split('|')[3],'202 Update',tr1,'',10,'on',(speise4-8),speise2);
        weg.onclick = function(){update_wochen_angebote($('#area-'+this.id.split('-')[1]).val(),this.id.split('-')[1]);$(this).css({'background-color':'red'});}
        }
        if(haupt_mp3_split_2.split("#")[i].split('|')[0]==2){var div_126=zero('div',0,0,0,0,tr2);
        $(div_126).text(haupt_mp3_split_2.split("#")[i].split('|')[1]+" bis "+haupt_mp3_split_2.split("#")[i].split('|')[2]);
        var text_130=zero('textarea',0,600,0,0,tr2);$(text_130).val(haupt_mp3_split_2.split("#")[i].split('|')[4]);text_130.id="area-"+haupt_mp3_split_2.split("#")[i].split('|')[3];
        var div_127=zero('div',0,0,0,0,tr2);$(div_127).text(haupt_mp3_split_2.split("#")[i].split('|')[5]);
        var weg = k_m_f('icon-'+haupt_mp3_split_2.split("#")[i].split('|')[3],'209 Update',tr2,'',10,'on',(speise4-8),speise2);
        weg.onclick = function(){update_wochen_angebote($('#area-'+this.id.split('-')[1]).val(),this.id.split('-')[1]);$(this).css({'background-color':'red'});}
        }
        if(haupt_mp3_split_2.split("#")[i].split('|')[0]==3){var div_126=zero('div',0,0,0,0,tr3);
        $(div_126).text(haupt_mp3_split_2.split("#")[i].split('|')[1]+" bis "+haupt_mp3_split_2.split("#")[i].split('|')[2]);
        var text_130=zero('textarea',0,600,0,0,tr3);$(text_130).val(haupt_mp3_split_2.split("#")[i].split('|')[4]);text_130.id="area-"+haupt_mp3_split_2.split("#")[i].split('|')[3];
        var div_127=zero('div',0,0,0,0,tr3);$(div_127).text(haupt_mp3_split_2.split("#")[i].split('|')[5]);
        var weg = k_m_f('icon-'+haupt_mp3_split_2.split("#")[i].split('|')[3],'216 Update',tr3,'',10,'on',(speise4-8),speise2);
        weg.onclick = function(){update_wochen_angebote($('#area-'+this.id.split('-')[1]).val(),this.id.split('-')[1]);$(this).css({'background-color':'red'});}
        }
        if(haupt_mp3_split_2.split("#")[i].split('|')[0]==4){var div_126=zero('div',0,0,0,0,tr4);
        $(div_126).text(haupt_mp3_split_2.split("#")[i].split('|')[1]+" bis "+haupt_mp3_split_2.split("#")[i].split('|')[2]);
        var text_130=zero('textarea',0,600,0,0,tr4);$(text_130).val(haupt_mp3_split_2.split("#")[i].split('|')[4]);text_130.id="area-"+haupt_mp3_split_2.split("#")[i].split('|')[3];
        var div_127=zero('div',0,0,0,0,tr4);$(div_127).text(haupt_mp3_split_2.split("#")[i].split('|')[5]);
        var weg = k_m_f('icon-'+haupt_mp3_split_2.split("#")[i].split('|')[3],'223 Update',tr4,'',10,'on',(speise4-8),speise2);
        weg.onclick = function(){update_wochen_angebote($('#area-'+this.id.split('-')[1]).val(),this.id.split('-')[1]);$(this).css({'background-color':'red'});}
        }
        if(haupt_mp3_split_2.split("#")[i].split('|')[0]==5){var div_126=zero('div',0,0,0,0,tr5);
        $(div_126).text(haupt_mp3_split_2.split("#")[i].split('|')[1]+" bis "+haupt_mp3_split_2.split("#")[i].split('|')[2]);
        var text_130=zero('textarea',0,600,0,0,tr5);$(text_130).val(haupt_mp3_split_2.split("#")[i].split('|')[4]);text_130.id="area-"+haupt_mp3_split_2.split("#")[i].split('|')[3];
        var div_127=zero('div',0,0,0,0,tr5);$(div_127).text(haupt_mp3_split_2.split("#")[i].split('|')[5]);
        var weg = k_m_f('icon-'+haupt_mp3_split_2.split("#")[i].split('|')[3],'230 Update',tr5,'',10,'on',(speise4-8),speise2);
        weg.onclick = function(){update_wochen_angebote($('#area-'+this.id.split('-')[1]).val(),this.id.split('-')[1]);$(this).css({'background-color':'red'});}
        }
        if(haupt_mp3_split_2.split("#")[i].split('|')[0]==6){var div_126=zero('div',0,0,0,0,tr6);
        $(div_126).text(haupt_mp3_split_2.split("#")[i].split('|')[1]+" bis "+haupt_mp3_split_2.split("#")[i].split('|')[2]);
        var text_130=zero('textarea',0,600,0,0,tr6);$(text_130).val(haupt_mp3_split_2.split("#")[i].split('|')[4]);text_130.id="area-"+haupt_mp3_split_2.split("#")[i].split('|')[3];
        var div_127=zero('div',0,0,0,0,tr6);$(div_127).text(haupt_mp3_split_2.split("#")[i].split('|')[5]);
        var weg = k_m_f('icon-'+haupt_mp3_split_2.split("#")[i].split('|')[3],'237 Update',tr6,'',10,'on',(speise4-8),speise2);
        weg.onclick = function(){update_wochen_angebote($('#area-'+this.id.split('-')[1]).val(),this.id.split('-')[1]);$(this).css({'background-color':'red'});}
        }
        if(haupt_mp3_split_2.split("#")[i].split('|')[0]==7){var div_126=zero('div',0,0,0,0,tr7);
        $(div_126).text(haupt_mp3_split_2.split("#")[i].split('|')[1]+" bis "+haupt_mp3_split_2.split("#")[i].split('|')[2]);
        var text_130=zero('textarea',0,600,0,0,tr7);$(text_130).val(haupt_mp3_split_2.split("#")[i].split('|')[4]);text_130.id="area-"+haupt_mp3_split_2.split("#")[i].split('|')[3];
        var div_127=zero('div',0,0,0,0,tr7);$(div_127).text(haupt_mp3_split_2.split("#")[i].split('|')[5]);
        var weg = k_m_f('icon-'+haupt_mp3_split_2.split("#")[i].split('|')[3],'244 Update',tr7,'',10,'on',(speise4-8),speise2);
        weg.onclick = function(){update_wochen_angebote($('#area-'+this.id.split('-')[1]).val(),this.id.split('-')[1]);$(this).css({'background-color':'red'});}
        }
        if(haupt_mp3_split_2.split("#")[i].split('|')[0]==9){var div_126=zero('div',0,0,0,0,tr9);
        $(div_126).text(haupt_mp3_split_2.split("#")[i].split('|')[1]+" bis "+haupt_mp3_split_2.split("#")[i].split('|')[2]);
        var text_130=zero('textarea',0,600,0,0,tr9);$(text_130).val(haupt_mp3_split_2.split("#")[i].split('|')[4]);text_130.id="area-"+haupt_mp3_split_2.split("#")[i].split('|')[3];
        var div_127=zero('div',0,0,0,0,tr9);$(div_127).text(haupt_mp3_split_2.split("#")[i].split('|')[5]);
        var weg = k_m_f('icon-'+haupt_mp3_split_2.split("#")[i].split('|')[3],'251 Update',tr9,'',10,'on',(speise4-8),speise2);
        weg.onclick = function(){update_wochen_angebote($('#area-'+this.id.split('-')[1]).val(),this.id.split('-')[1]);$(this).css({'background-color':'red'});}
        }
    }
    
}
function update_wochen_angebote(wert,fenster_id)
{
    alert(xy.update_tagesname(restaurantId,fenster_id,wert).value);
}
function switch_time_fenster()
{
    $('#Div_an_alle').remove();
    var Div_an_alle= zero('div', 0, 0, 0, 0,document.body);$(Div_an_alle).css({'top' : '50px','position':'fixed','z-index':'50','background-color':'#16ffe6','left' :'7%',"border":"3px solid black",'border-color': '#'+ speise5,});
    Div_an_alle.id='Div_an_alle';         close_me_knopf(Div_an_alle);
    
    var Clone_titel= zero('h2', 0, 0, 0, 0,Div_an_alle);$(Clone_titel).text('429 Wähle time:');
    var fieldset= zero('fieldset', 0, 0, 0, 0,Div_an_alle);
    var Clone_titel2= zero('legend', 0, 0, 0, 0,fieldset);$(Clone_titel2).text(' zeit_id, tag, von-bis');
    for (var i = 0; i < haupt_mp3_split_2.split("#").length - 1; i++)
    {
        var open_time_in_mp3_text = haupt_mp3_split_2.split("#")[i];
        var tag = tag_returner(open_time_in_mp3_text.split('|')[0]);
        
        var von_bis = open_time_in_mp3_text.split('|')[1] + "-" + open_time_in_mp3_text.split('|')[2];
        var zeit_id = open_time_in_mp3_text.split('|')[3];
        var labels_div= zero('div', 0, 0, 0, 0,fieldset);
        var weg = k_m_f(zeit_id,zeit_id+','+tag+','+von_bis,labels_div,'',10,'on',(speise4-4),speise2);
        weg.onclick = function(){
            entladen();
            window.location.href = 'xy.aspx?' + this.id;
        };
        var weg = k_m_f(zeit_id,'ohne this speichern ',labels_div,'',10,'on',(speise4-4),speise2);
        weg.onclick = function(){
            window.location.href = 'xy.aspx?' + this.id;
        };
        
    }
}

function reinigung_menu()
{
    var sats=0;
    for (var i = 0; i < $('.mini_Zelle_herfs').length; i++)
            {
                var my_value= $('.mini_Zelle_herfs')[i];my_value=$(my_value).text();
                //var for_update = zero('div',0,0,0,0,document.body);
                //$(for_update).text(my_value.split('!')[11]);
                //for_update.id='update_epsie'+my_value.split('!')[2];
                var menu_speisen_information = my_value.split('!')[6];
                var update='';
                for (var i2 = 0; i2 < menu_speisen_information.split("~").length-1; i2++)
                {
                    if(menu_speisen_information.split("~")[i2].split("|").length==5 && menu_speisen_information.split("~")[i2].split("|")[1]!=0)
                    {
                        update+=menu_speisen_information.split("~")[i2]+'~';
                    }
                    else
                         sats++;
                }
                update_href_modern(my_value.split("!")[1],6,update);
                //update_href_modern(my_value.split('!')[1],0,my_value.split('!')[0].split('|')[4])
                //update_href_modern(my_value.split('!')[1],11,'')
            }
            alert('gereinigte speisen: '+sats);
}

function optionen_click()
{
    
    
    if(document.getElementById('menu_box'))$('#menu_box').remove();var Div_Flyer= zero('div', 0, 0, 0, 0,document.body);$(Div_Flyer).animate({ scrollTop: 999999 }, 'fast');
    $(Div_Flyer).css({'top' : '50px','position':'fixed','z-index':'1','background-color':'#16ffe6','width' :'95%',
         'height' :'87%', 'left' :'2%',"border":"2px solid black",'border-color': '#'+ speise5,'overflow':'auto'});
    close_me_knopf(Div_Flyer);
    Div_Flyer.id='menu_box';  
    var div_titel = zero('div',0,0,0,0,Div_Flyer);
    $(div_titel).text('Haupt Menu 95_u9ih');
    
    save_fax();
    show_matrix_und_options();
    save_mail();
    save_pizza_tag();
    save_restaurant_art()
    //design();
}
function show_matrix_und_options(){
    
    var farbe =mini_design_Unico_bGColor.split("!")[0];
    var div_bg_farbe = zero('div',0,0,0,0,document.getElementById('menu_box'));
    var input_farbe = zero('input', 0, 0, 0, 0, div_bg_farbe);
        input_farbe.id='input_farbe';
        input_farbe.size = '6';
        $(input_farbe).val(farbe);
    var icon_ok_farbe = zero('input', 0, 0, 0, 0, div_bg_farbe);
        icon_ok_farbe.type = 'button';
        icon_ok_farbe.style.color = '#336699';
        icon_ok_farbe.value = '318 Color';
        icon_ok_farbe.id='design_button';
        icon_ok_farbe.onclick = function(){
            var jj = $(input_farbe).val();
            insert_farbe(jj);
            farbe =mini_design_Unico_bGColor.split("!")[0];
            //alert(xy.abfrage_farbe().value);
            $(document.body).css("background-color",'#'+farbe );
        };

    var div_gruppen_namen = zero('div',0,0,0,0,document.getElementById('menu_box'));div_gruppen_namen.style.right=(screen.width * 0.02)+'px';
     var icon_gruppen_box = k_m_f('cewrr4w','606 Gruppen in Platform',div_gruppen_namen,'',10,'on',(speise4-8),speise2);
    
    icon_gruppen_box.onclick = function(){
        //document.getElementById('menu_box').style.visibility='hidden';
        
            $('#plz_box').remove();
            gruppen_emxport_giessengastro();
    };

    var div_slide = zero('div',0,0,0,0,document.getElementById('menu_box'));
    div_slide.style.right=(screen.width * 0.02)+'px';
    $(div_slide).text('Slide')
    div_slide.onclick = function(){
            window.open('pic.aspx?id=' + id + '&von=59', '_blank');
    };
    var div_pic_unter_slide = zero('div',0,0,0,0,document.getElementById('menu_box'));
    div_pic_unter_slide.style.right=(screen.width * 0.02)+'px';
    $(div_pic_unter_slide).text('pic unter slide')
    div_pic_unter_slide.onclick = function(){
            window.open('pic.aspx?id=' + id + '&von=60', '_blank');
    };
    var div_pic_unter_slide = zero('div',0,0,0,0,document.getElementById('menu_box'));
    div_pic_unter_slide.style.right=(screen.width * 0.02)+'px';
    $(div_pic_unter_slide).text('Druck Version')
    div_pic_unter_slide.onclick = function(){
            window.open('www.aspx?id=' + id + '&von=60', '_blank');
    };
}
function betrag_format(speise_preis)
{
    var preis_mit_koma = '';
                //var adad = speise_preis.split("").length;
    if(speise_preis.split("").length==1)
        speise_preis='00'+speise_preis;
    if(speise_preis.split("").length==2)
        speise_preis='0'+speise_preis;
    //alert(speise_preis+'-'+speise_preis.split("").length);
    for (var i2 = 0; i2 < speise_preis.split("").length; i2++)
    {
        //age 2 ya 1 sefre ye sefre dige behesh ezafe kone

        if(i2==speise_preis.split("").length-2)
            preis_mit_koma+=',';
        preis_mit_koma+=speise_preis.split("")[i2];
    }
    return preis_mit_koma;
}
    var schrift_font = 'Arial;Impact;Times New Roman;Verdana;Wide Latin;';
function timsar_135(tr2,letzte_atribut,class_name,atribut7)//modul 
{
    return_werte = new Array();
    var td_21=zero('td',0,0,0,0,tr2);
    var font_size='10;12;14;16;18;20;22;24;26;28;30;32;34;36;38;40;'
    var font_bold='normal;bold;bolder;lighter;500;initial;'
    var titel1 = web_options_liste.split("|")[18].split("^")[1].split('$')[0];
    var titel2 = web_options_liste.split("|")[18].split("^")[1].split('$')[1];;
    var titel3 = web_options_liste.split("|")[18].split("^")[1].split('$')[2];
    //var titel4 = web_options_liste.split("|")[18].split("^")[1].split('$')[letzte_atribut];letzte_atribut=(letzte_atribut+1);
    var titel5 = web_options_liste.split("|")[18].split("^")[1].split('$')[4];
    var titel6 = web_options_liste.split("|")[18].split("^")[1].split('$')[5];
    //var titel7 = web_options_liste.split("|")[18].split("^")[1].split('$')[atribut7];
    if(titel1==0)titel1='arial';
    var schrift_art_name = option_feld(td_21,schrift_font,'f-art',class_name,titel1);
        return_werte.push(schrift_art_name);
        if(titel2==null)titel2='202020';
    var font_color_name = zero_input(td_21,'f-co',titel2);
        return_werte.push(font_color_name);
    if(titel5==null)titel5='f89b30';
    var bg_color_name = zero_input(td_21,'bg_co',titel5);
        return_werte.push(bg_color_name);
    
    //var input_button_timsar = document.createElement('input');input_button_timsar.type = 'button';input_button_timsar.style.color = '#336699';
    //$(input_button_timsar).val('g28 general');
    //td_21.appendChild(input_button_timsar);
    var antwort='fonts'+'^';
    var input_button_timsar = k_m_f('ddss','g28 general',td_21,'',10,'on',(speise4-4),speise2);
    
    input_button_timsar.onclick = function()
    {  
        if(merker[schrift_art_name]!=null){antwort+=merker[schrift_art_name]+'$';titel1=merker[schrift_art_name];}else{antwort+=titel1+'$';};//gruppen art
        if($(font_color_name).val()!=null){antwort+=$(font_color_name).val()+'$';titel2=$(font_color_name).val();}else{antwort+=titel2+'$';};//gruppen font color
        if($(font_color_name).val()!=null){antwort+=$(font_color_name).val()+'$';titel3=$(font_color_name).val();}else{antwort+=titel3+'$';};//gruppen font over color
        antwort+=36+'$';titel4=36;//gruppen font size
        if($(bg_color_name).val()!=null){antwort+=$(bg_color_name).val()+'$';titel5=$(bg_color_name).val();}else{antwort+=titel5+'$';};//gruppen bg color
        if($(bg_color_name).val()!=null){antwort+=$(bg_color_name).val()+'$';titel6=$(bg_color_name).val();}else{antwort+=titel6+'$';};//gruppen bg over color
        
        if(merker[schrift_art_name]!=null){antwort+=merker[schrift_art_name]+'$';  anhang1=merker[schrift_art_name];}else{antwort+=  anhang1+'$';};//anhang_schriftart
        if($(font_color_name).val()!=null){antwort+=$(font_color_name).val()+'$';  anhang2=$(font_color_name).val();}else{antwort+=  anhang2+'$';};//anhang_font_color
        if($(font_color_name).val()!=null){antwort+=$(font_color_name).val()+'$';  anhang3=$(font_color_name).val();}else{antwort+=  anhang3+'$';};//anhang_font_over_color
        antwort+=20+'$';anhang4=20;//anhang_schrift_groesse
        if($(bg_color_name).val()!=null){antwort+=$(bg_color_name).val()+'$';   anhang5=$(bg_color_name).val();}else{antwort+=  anhang5+'$';};//anhang_bg_color
        if($(bg_color_name).val()!=null){antwort+=$(bg_color_name).val()+'$';  anhang6=$(bg_color_name).val();}else{antwort+=  anhang6+'$';};//anhang_bg_over_color
        
        if(merker[schrift_art_name]!=null){antwort+=merker[schrift_art_name]+'$';  kopf1=merker[schrift_art_name];}else{antwort+=  kopf1+'$';};//kopfzeile_schriftart
        if($(font_color_name).val()!=null){antwort+=$(font_color_name).val()+'$';  kopf2=$(font_color_name).val();}else{antwort+=  kopf2+'$';};//kopfzeile_font_color
        if($(font_color_name).val()!=null){antwort+=$(font_color_name).val()+'$';  kopf3=$(font_color_name).val();}else{antwort+=  kopf3+'$';};//kopfzeile_font_over_color
        antwort+=12+'$';kopf4=12;//kopfzeile_schrift_groesse
        if($(bg_color_name).val()!=null){antwort+=$(bg_color_name).val()+'$';   kopf5=$(bg_color_name).val();}else{antwort+=  kopf5+'$';};//kopfzeile_bg_color
        if($(bg_color_name).val()!=null){antwort+=$(bg_color_name).val()+'$';  kopf6=$(bg_color_name).val();}else{antwort+=  kopf6+'$';};//kopfzeile_bg_over_color
        
        if(merker[schrift_art_name]!=null){antwort+=merker[schrift_art_name]+'$';  fus1=merker[schrift_art_name];}else{antwort+=  fus1+'$';};//fuszeile_schriftart
        if($(font_color_name).val()!=null){antwort+=$(font_color_name).val()+'$';  fus2=$(font_color_name).val();}else{antwort+=  fus2+'$';};//fuszeile_font_color
        if($(font_color_name).val()!=null){antwort+=$(font_color_name).val()+'$';  fus3=$(font_color_name).val();}else{antwort+=  fus3+'$';};//fuszeile_font_over_color
        antwort+=10+'$';fus4=10;//fuszeile_schrift_groesse
        if($(bg_color_name).val()!=null){antwort+=$(bg_color_name).val()+'$';   fus5=$(bg_color_name).val();}else{antwort+=  fus5+'$';};//fuszeile_bg_color
        if($(bg_color_name).val()!=null){antwort+=$(bg_color_name).val()+'$';   fus6=$(bg_color_name).val();}else{antwort+=  fus6+'$';};//fuszeile_bg_over_color
        //speise {
        if(merker[schrift_art_name]!=null){antwort+=merker[schrift_art_name]+'$';  speise1=merker[schrift_art_name];}else{antwort+=  speise1+'$';};//speisezeile_schriftart
        if($(font_color_name).val()!=null){antwort+=$(font_color_name).val()+'$';  speise2=$(font_color_name).val();}else{antwort+=  speise2+'$';};//speisezeile_font_color
        //5b311a
        if($(font_color_name).val()!=null){antwort+=$(font_color_name).val()+'$';  speise3=$(font_color_name).val();}else{antwort+=  speise3+'$';};//speisezeile_font_over_color
        //antwort+='5b311a$';speise2='5b311a';//speisezeile_schrift_groesse
        //antwort+='5b311a$';speise3='5b311a';//speisezeile_schrift_groesse
        antwort+=20+'$';speise4=20;//speisezeile_schrift_groesse
        //f9f2de
        antwort+='f9f2de$';speise5='f9f2de';//speisezeile_schrift_groesse
        //if($(bg_color_name).val()!=null){antwort+=$(bg_color_name).val()+'$';   speise5=$(bg_color_name).val();}else{antwort+=  speise5+'$';};//speisezeile_bg_color
        //if($(font_color_name).val()!=null){antwort+=$(font_color_name).val()+'$';  speise6=$(font_color_name).val();}else{antwort+=  speise6+'$';};//speisezeile_bg_over_color
        antwort+='f3e2ae$';speise6='f3e2ae';//speisezeile_schrift_groesse
        // }ende speise
        
        //zutat
        if(merker[schrift_art_name]!=null){antwort+=merker[schrift_art_name]+'$';  zutat1=merker[schrift_art_name];}else{antwort+=  zutat1+'$';};//zutatzeile_schriftart
        if($(font_color_name).val()!=null){antwort+=$(font_color_name).val()+'$';  zutat2=$(font_color_name).val();}else{antwort+=  zutat2+'$';};//zutatzeile_font_color
        //antwort+='5b311a$';zutat2='5b311a';//zutatzeile_schrift_groesse
        if($(font_color_name).val()!=null){antwort+=$(font_color_name).val()+'$';  zutat3=$(font_color_name).val();}else{antwort+=  zutat3+'$';};//zutatzeile_font_over_color
        //antwort+='5b311a$';zutat3='5b311a';//zutatzeile_schrift_groesse
        
        antwort+=16+'$';zutat4=16;//zutatzeile_schrift_groesse
        //if($(bg_color_name).val()!=null){antwort+=$(bg_color_name).val()+'$';   zutat5=$(bg_color_name).val();}else{antwort+=  zutat5+'$';};//zutatzeile_bg_color
        antwort+='$';zutat5='';//speisezeile_schrift_groesse
        //if($(font_color_name).val()!=null){antwort+=$(font_color_name).val()+'$';  zutat6=$(font_color_name).val();}else{antwort+=  zutat6+'$';};//speisezeile_bg_over_color
        antwort+='$';zutat6='';//speisezeile_schrift_groesse
        
        if(merker[schrift_art_name]!=null){antwort+=merker[schrift_art_name]+'$';  navi1=merker[schrift_art_name];}else{antwort+=  navi1+'$';};//navizeile_schriftart
        if($(font_color_name).val()!=null){antwort+=$(font_color_name).val()+'$';  navi2=$(font_color_name).val();}else{antwort+=  navi2+'$';};//navizeile_font_color
        if($(bg_color_name).val()!=null){antwort+=$(bg_color_name).val()+'$';  navi3=$(bg_color_name).val();}else{antwort+=  navi3+'$';};//navizeile_font_over_color
        antwort+=14+'$';navi4=13;//navizeile_schrift_groesse
        if($(bg_color_name).val()!=null){antwort+=$(bg_color_name).val()+'$';   navi5=$(bg_color_name).val();}else{antwort+=  navi5+'$';};//navizeile_bg_color
        if($(font_color_name).val()!=null){antwort+=$(font_color_name).val()+'$';  navi6=$(font_color_name).val();}else{antwort+=  navi6+'$';};//speisezeile_bg_over_color
        
        if(merker[schrift_art_name]!=null){antwort+=merker[schrift_art_name]+'$';  menu1=merker[schrift_art_name];}else{antwort+=  menu1+'$';};//menuzeile_schriftart
        if($(font_color_name).val()!=null){antwort+=$(font_color_name).val()+'$';  menu2=$(font_color_name).val();}else{antwort+=  menu2+'$';};//menuzeile_font_color
        //if($(bg_color_name).val()!=null){antwort+=$(bg_color_name).val()+'$';  menu3=$(bg_color_name).val();}else{antwort+=  menu3+'$';};//menuzeile_font_over_color
        antwort+='ff0000$';menu3='ff0000';//menuzeile_schrift_groesse
        antwort+=14+'$';menu4=14;//menuzeile_schrift_groesse
        if($(bg_color_name).val()!=null){antwort+=$(bg_color_name).val()+'$';   menu5=$(bg_color_name).val();}else{antwort+=  menu5+'$';};//menuzeile_bg_color
        if($(bg_color_name).val()!=null){antwort+=$(bg_color_name).val()+'$';   menu6=$(bg_color_name).val();}else{antwort+=  menu6+'$';};//speisezeile_bg_over_color
        
        antwort+='bold$';titel7='bold';//menuzeile_schrift_groesse
        antwort+='bold$';anhang7='bold';//menuzeile_schrift_groesse
        antwort+='bold$';kopf7='bold';//menuzeile_schrift_groesse
        antwort+='bold$';fus7='bold';//menuzeile_schrift_groesse
        antwort+='bold$';speise7='bold';//menuzeile_schrift_groesse
        antwort+='bold$';zutat7='bold';//menuzeile_schrift_groesse
        antwort+='bold$';navi7='bold';//menuzeile_schrift_groesse
        antwort+='bold$';menu7='bold';//menuzeile_schrift_groesse
        var alle_web_options='';
        for (var i2 = 0; i2 < web_options_liste.split("|").length-1; i2++) 
        {
            if(i2==18)
            {
                alle_web_options+= antwort+'|';
            }
            else
            {
                alle_web_options+= web_options_liste.split("|")[i2]+'|';
            }
        }
        web_options_liste=alle_web_options;
        //insert_farbe($(font_color_name).val());
        grupppen_font_box();
        alert('257 Die Einstelung wurde übernommen!');
    $('#di_v_font_box').remove();
        
    }//and click general
}//end timsar
function update_web_option(atribut_nummer,value_ohne_trennzeichen)
{
    var alle_web_options='';
    for (var i2 = 0; i2 < web_options_liste.split("|").length-1; i2++) 
    {
        if(i2==atribut_nummer)
        {
            alle_web_options+= value_ohne_trennzeichen+'|';
        }
        else
        {
            alle_web_options+= web_options_liste.split("|")[i2]+'|';
        }
    }
    web_options_liste=alle_web_options;
}
function font_modul(tr2,letzte_atribut,class_name,atribut7)
{
    return_werte = new Array();
    var td_21=zero('td',0,0,0,0,tr2);
    //var schrift_font = 'Arial;Impact;Times New Roman;Verdana;Wide Latin;';
    var font_size='10;12;14;16;18;20;22;24;26;28;30;32;34;36;38;40;'
    var font_bold='normal;bold;bolder;lighter;500;initial;'
    var titel1 = web_options_liste.split("|")[18].split("^")[1].split('$')[letzte_atribut];letzte_atribut=(letzte_atribut+1);
    var titel2 = web_options_liste.split("|")[18].split("^")[1].split('$')[letzte_atribut];letzte_atribut=(letzte_atribut+1);
    var titel3 = web_options_liste.split("|")[18].split("^")[1].split('$')[letzte_atribut];letzte_atribut=(letzte_atribut+1);
    var titel4 = web_options_liste.split("|")[18].split("^")[1].split('$')[letzte_atribut];letzte_atribut=(letzte_atribut+1);
    var titel5 = web_options_liste.split("|")[18].split("^")[1].split('$')[letzte_atribut];letzte_atribut=(letzte_atribut+1);
    var titel6 = web_options_liste.split("|")[18].split("^")[1].split('$')[letzte_atribut];letzte_atribut=(letzte_atribut+1);
    var titel7 = web_options_liste.split("|")[18].split("^")[1].split('$')[atribut7];
    //alert(titel7);
        //strat gruppen name
    var schrift_art_name = option_feld(td_21,schrift_font,'schrift_art',class_name,titel1);
        //return_werte+= schrift_art_name +"@";//0
        return_werte.push(schrift_art_name);
    var font_color_name = zero_input(td_21,'font_color',titel2);
        //return_werte+= font_color_name +"@";//1
        return_werte.push(font_color_name);
    $(font_color_name).blur(function () {
        $('.'+class_name).css({'color':'#'+ $(font_color_name).val(),});
    });
    var font_over_color_name = zero_input(td_21,'font_over_color',titel3);
        //return_werte+= font_over_color_name +"@";//2
        return_werte.push(font_over_color_name);
    $(font_over_color_name).blur(function () {
        $('.'+class_name).hover(function(){ 
           $(this).css({'color':'#'+ $(font_over_color_name).val(),});
        }, function () {
            $(this).css("color","#"+$(font_color_name).val());
        });
    });
    var schrift_groesse_name = option_feld(td_21,font_size,'schrift_groesse',class_name,titel4);
        //return_werte+= schrift_groesse_name +"@";//3
        return_werte.push(schrift_groesse_name);
    var bg_color_name = zero_input(td_21,'bg_color',titel5);
        //return_werte+= bg_color_name +"@";//4
        return_werte.push(bg_color_name);
    $(bg_color_name).blur(function () {
        $('.'+class_name).css({'background-color':'#'+ $(bg_color_name).val(),});
    });
    var bg_over_color_name = zero_input(td_21,'bg_over_color',titel6);
        //return_werte+= bg_over_color_name +"@";//5
        return_werte.push(bg_over_color_name);
    $(bg_over_color_name).blur(function () {
        $('.'+class_name).hover(function(){ 
           $(this).css({'background-color':'#'+ $(bg_over_color_name).val(),});
        }, function () {
            $(this).css("background-color","#"+$(bg_color_name).val());
        });
    });
    var schrift_bold = option_feld(td_21,font_bold,'schrift_bold',class_name,titel7);
        //return_werte+= schrift_art_name +"@";//0
        return_werte.push(schrift_bold);
    //ende gruppen nameschrift_font
    return return_werte;
}

function grupppen_font_box()//art = g / s  shekl
{
    $('#di_v_font_box').remove();
    var add_grups= zero('div', 0, 0, 0, 0,document.body);
    add_grups.id='di_v_font_box';
    close_me_knopf(add_grups);
    $(add_grups).css({'width':'98%',
                      'height':'500px',
                      'position':'fixed',
                      'left':'10px',
                      'top':'42px',
                      'background-color': 'green',
                      'z-index':'2',
                      });
    var table=zero('table',0,0,0,1,add_grups);var body=zero('tbody',0,0,0,0,table);  
    //start tr titel
    var tr1=zero('tr',0,0,0,0,body);
    var td_11=zero('td',0,0,0,0,tr1);$(td_11).text('349 titel optionen');td_11.className='gruppen_text';
    var td_12=zero('td',0,0,0,0,tr1);$(td_12).text('403 Anhang optionen');td_12.className='Anhang_text';
    var td_13=zero('td',0,0,0,0,tr1);$(td_13).text('kopf optionen');td_13.className='kopf_text';
    var td_14=zero('td',0,0,0,0,tr1);$(td_14).text('fuss optionen');td_14.className='fuss_text';
    //ende tr titel
    var tr2=zero('tr',0,0,0,0,body);
    
    //strat gruppen name
    var werte = font_modul(tr2,0,'gruppen_text',48);//atribut 0-5
    var schrift_art_name = werte[0];
    var font_color_name = werte[1];
    var font_over_color_name = werte[2];
    var schrift_groesse_name = werte[3];
    var bg_color_name = werte[4];
    var bg_over_color_name = werte[5];
    var name_bold = werte[6];
    //ende gruppen nameschrift_font
    
    //strat gruppen anhang
    werte = font_modul(tr2,6,'Anhang_text',49);//atribut 6-11
    var schrift_art_anhang = werte[0];
    var font_color_anhang = werte[1];
    var font_over_color_anhang = werte[2];
    var schrift_groesse_anhang = werte[3];
    var bg_color_anhang = werte[4];
    var bg_over_color_anhang = werte[5];
    var anhang_bold = werte[6];
    //ende gruppen anhang
     
    //strat gruppen kopfzeile
    werte = font_modul(tr2,12,'kopf_text',50);//atribut 12-17
    var schrift_art_kopfzeile = werte[0];
    var font_color_kopfzeile = werte[1];
    var font_over_color_kopfzeile = werte[2];
    var schrift_groesse_kopfzeile = werte[3];
    var bg_color_kopfzeile = werte[4];
    var bg_over_color_kopfzeile = werte[5];
    var kopfzeile_bold = werte[6];
    //ende gruppen kopfzeile
    
    //strat gruppen fusszeile
    werte = font_modul(tr2,18,'fuss_text',51);//23
    var schrift_art_fusszeile = werte[0];
    var font_color_fusszeile = werte[1];
    var font_over_color_fusszeile = werte[2];
    var schrift_groesse_fusszeile = werte[3];
    var bg_color_fusszeile = werte[4];
    var bg_over_color_fusszeile = werte[5];
    var fusszeile_bold = werte[6];
    //ende gruppen fusszeile
    //////////////////////////////////////////// ETAGE 2
    var tr3=zero('tr',0,0,0,0,body);
    var td_31=zero('td',0,0,0,0,tr3);$(td_31).text('speise text optionen');td_31.className='speise_text';
    var td_32=zero('td',0,0,0,0,tr3);$(td_32).text('402 zutat optionen');td_32.className='zutat_text';
    var td_33=zero('td',0,0,0,0,tr3);$(td_33).text('Navigator');td_33.className='gruppenbild';
    var td_13=zero('td',0,0,0,0,tr3);$(td_13).text('menu leiste');td_13.className='menu_leiste';
    var td_general=zero('td',0,0,0,0,tr3);$(td_general).text('General');//td_general.className='menu_leiste';
    //var td_14=zero('td',0,0,0,0,tr1);$(td_14).text('fuss optionen');td_14.className='fuss_text';
    var tr4=zero('tr',0,0,0,0,body);
    //strat speise name
    werte = font_modul(tr4,24,'speise_text',52);//29
    
    var schrift_art_speise = werte[0];
    var font_color_speise = werte[1];
    var font_over_color_speise = werte[2];
    var schrift_groesse_speise = werte[3];
    var bg_color_speise = werte[4];
    var bg_over_color_speise = werte[5];
    var speise_bold = werte[6];
    //ende speise nameschrift_font
    
    //strat zutat name
    werte = font_modul(tr4,30,'zutat_text',53);//35
    var schrift_art_zutat = werte[0];
    var font_color_zutat = werte[1];
    var font_over_color_zutat = werte[2];
    var schrift_groesse_zutat = werte[3];
    var bg_color_zutat = werte[4];
    var bg_over_color_zutat = werte[5];
    var zutat_bold = werte[6];
    //ende zutat nameschrift_font
    
    //strat navi name
    werte = font_modul(tr4,36,'gruppenbild',54);//41
    var schrift_art_navi = werte[0];
    var font_color_navi = werte[1];
    var font_over_color_navi = werte[2];
    var schrift_groesse_navi = werte[3];
    var bg_color_navi = werte[4];
    var bg_over_color_navi = werte[5];
    var navi_bold = werte[6];
    //ende navi nameschrift_font
    
    //strat menu_leiste
    werte = font_modul(tr4,42,'menu_leiste',55);//
    var schrift_art_menu_leiste = werte[0];
    var font_color_menu_leiste = werte[1];
    var font_over_color_menu_leiste = werte[2];
    var schrift_groesse_menu_leiste = werte[3];
    var bg_color_menu_leiste = werte[4];
    var bg_over_color_menu_leiste = werte[5];
    var menu_leiste_bold = werte[6];
    //ende menu_leiste
    
    //general wertr
    werte = timsar_135(tr4);//timsar(tr4,,class_name,atribut7)//modul
    //var schrift_art_timsar = werte[0];
    //var font_color_timsar = werte[1];
    //var font_over_color_timsar = werte[2];
    //var schrift_groesse_menu_leiste = werte[3];
    //var bg_color_timsar = werte[4];
    //var bg_over_color_timsar = werte[5];
    
    //var menu_leiste_bold = werte[6];
    //ende general wertr
    
    
    
    var input_button = document.createElement('input');input_button.type = 'button';input_button.style.color = '#336699';
    $(input_button).val('save 521');
    add_grups.appendChild(input_button);
    
    input_button.onclick = function()
    {   
       
        var antwort='';
        for (var i2 = 0; i2 < web_options_liste.split("|").length-1; i2++) 
        {
            if(i2==18)
            {   
                antwort+='fonts'+'^';
                var titel_schriftart = merker[schrift_art_name];  //schrift_art_name ==wert[0]
                if(titel_schriftart!=null)
                {
                    antwort+=titel_schriftart+'$';
                    $('.gruppen_text').css({'font-family':'#'+ titel_schriftart,});
                }
                else
                {
                    antwort+=titel1+'$';
                    $('.gruppen_text').css({'font-family':'#'+ titel1,});
                }
                var titel_font_color = $(font_color_name).val();
                if(titel_font_color!=null)
                {
                    antwort+=titel_font_color+'$';
                    $('.gruppen_text').css({'color':'#'+ titel_font_color,});
                    
                }
                else
                {
                    antwort+=titel2+'$';
                    $('.gruppen_text').css({'color':'#'+ titel2,});
                    
                }
                    
                var titel_font_over_color = $(font_over_color_name).val();
                if(titel_font_over_color!=null)
                {
                    antwort+=titel_font_over_color+'$';
                    $('.gruppen_text').hover(function(){ 
                       $(this).css({'color':'#'+ titel_font_over_color,});
                    }, function () {
                        $(this).css("color","#"+titel_font_color);
                    });
                }
                else
                {
                    antwort+=titel3+'$';
                    $('.gruppen_text').hover(function(){ 
                       $(this).css({'color':'#'+ titel3,});
                    }, function () {
                        $(this).css("color","#"+titel2);
                    });
                } 
                    
                var titel_schrift_groesse = merker[schrift_groesse_name];
                if(titel_schrift_groesse!=null)
                {
                    antwort+=titel_schrift_groesse+'$';
                    $('.gruppen_text').css({"font-size": titel_schrift_groesse+ "px"});
                }
                else
                {
                    antwort+=titel4+'$';
                    $('.gruppen_text').css({"font-size": titel4+ "px"});
                }
                   
                var titel_bg_color = $(bg_color_name).val();
                if(titel_bg_color!=null)
                {
                    antwort+=titel_bg_color+'$';
                    $('.gruppen_text').css({'background-color':'#'+ titel_bg_color,});
                }
                else
                {
                    antwort+=titel5+'$';
                    $('.gruppen_text').css({'background-color':'#'+ titel5,});
                }
                    
                var titel_bg_over_color = $(bg_over_color_name).val();
                if(titel_bg_over_color!=null)
                {
                    antwort+=titel_bg_over_color+'$';
                    $('.gruppen_text').hover(function(){ 
                       $(this).css({'background-color':'#'+ titel_bg_over_color,});
                    }, function () {
                        $(this).css("background-color","#"+titel_bg_color);
                    });
                }
                else
                {
                    antwort+=titel6+'$';
                    $('.gruppen_text').hover(function(){ 
                       $(this).css({'background-color':'#'+ titel6,});
                    }, function () {
                        $(this).css("background-color","#"+titel5);
                    });
                }
                    
                
                var anhang_schriftart = merker[schrift_art_anhang];
                
                if(anhang_schriftart!=null)
                {
                    antwort+=anhang_schriftart+'$';
                    $('.Anhang_text').css({'font-family':'#'+ anhang_schriftart,});
                }
                else
                {
                    antwort+=anhang1+'$';
                    $('.Anhang_text').css({'font-family':'#'+ anhang1,});
                }
                    
                var anhang_font_color = $(font_color_anhang).val();
                if(anhang_font_color!=null)
                {
                    antwort+=anhang_font_color+'$';
                    $('.Anhang_text').css({'color':'#'+ anhang_font_color,});
                }
                else
                {
                    antwort+=anhang2+'$';
                    $('.Anhang_text').css({'color':'#'+ anhang2,});
                }
                    
                var anhang_font_over_color = $(font_over_color_anhang).val();
                if(anhang_font_over_color!=null)
                {
                    antwort+=anhang_font_over_color+'$';
                    $('.Anhang_text').hover(function(){ 
                       $(this).css({'color':'#'+ anhang_font_over_color,});
                    }, function () {
                        $(this).css("color","#"+anhang_font_color);
                    });
                }
                else
                {
                    antwort+=anhang3+'$';
                    $('.Anhang_text').hover(function(){ 
                       $(this).css({'color':'#'+ anhang3,});
                    }, function () {
                        $(this).css("color","#"+anhang2);
                    });
                }
                    
                var anhang_schrift_groesse = merker[schrift_groesse_anhang];
                if(anhang_schrift_groesse!=null)
                {
                    antwort+=anhang_schrift_groesse+'$';
                    $('.Anhang_text').css({"font-size": anhang_schrift_groesse+ "px"});
                }
                else
                {
                    antwort+=anhang4+'$';
                    $('.Anhang_text').css({"font-size": anhang4+ "px"});
                }
                    
                var anhang_bg_color = $(bg_color_anhang).val();
                if(anhang_bg_color!=null)
                {
                    antwort+=anhang_bg_color+'$';
                    $('.Anhang_text').css({'background-color':'#'+ anhang_bg_color,});
                }
                else
                {
                    antwort+=anhang5+'$';
                    $('.Anhang_text').css({'background-color':'#'+ anhang5,});
                }
                    
                var anhang_bg_over_color = $(bg_over_color_anhang).val();
                if(anhang_bg_over_color!=null)
                {
                    antwort+=anhang_bg_over_color+'$';
                    $('.Anhang_text').hover(function(){ 
                       $(this).css({'background-color':'#'+ anhang_bg_over_color,});
                    }, function () {
                        $(this).css("background-color","#"+anhang_bg_color);
                    });
                }
                else
                {
                    antwort+=anhang6+'$';
                    $('.Anhang_text').hover(function(){ 
                       $(this).css({'background-color':'#'+ anhang6,});
                    }, function () {
                        $(this).css("background-color","#"+anhang5);
                    });
                }
                    
                
                var kopfzeile_schriftart = merker[schrift_art_kopfzeile];
                if(kopfzeile_schriftart!=null)
                {
                    antwort+=kopfzeile_schriftart+'$';
                    $('.kopf_text').css({'font-family':'#'+ kopfzeile_schriftart,});
                }
                else
                {
                    antwort+=kopf1+'$';
                    $('.kopf_text').css({'font-family':'#'+ kopf1,});
                }
                    
                var kopfzeile_font_color = $(font_color_kopfzeile).val();
                if(kopfzeile_font_color!=null)
                {
                    antwort+=kopfzeile_font_color+'$';
                    $('.kopf_text').css({'color':'#'+ kopfzeile_font_color,});
                }
                else
                {
                    antwort+=kopf2+'$';
                    $('.kopf_text').css({'color':'#'+ kopf2,});
                }
                    
                var kopfzeile_font_over_color = $(font_over_color_kopfzeile).val();
                if(kopfzeile_font_over_color!=null)
                {
                    antwort+=kopfzeile_font_over_color+'$';
                    $('.kopf_text').hover(function(){ 
                       $(this).css({'color':'#'+ kopfzeile_font_over_color,});
                    }, function () {
                        $(this).css("color","#"+kopfzeile_font_color);
                    });
                }
                else
                {
                    antwort+=kopf3+'$';
                    $('.kopf_text').hover(function(){ 
                       $(this).css({'color':'#'+ kopf3,});
                    }, function () {
                        $(this).css("color","#"+kopf2);
                    });
                }
                    
                var kopfzeile_schrift_groesse = merker[schrift_groesse_kopfzeile];
                if(kopfzeile_schrift_groesse!=null)
                {
                    antwort+=kopfzeile_schrift_groesse+'$';
                    //$('.kopf_text').css({"font-size": kopfzeile_schrift_groesse+ "px"});
                }
                else
                {
                    antwort+=kopf4+'$';
                    //$('.kopf_text').css({"font-size": kopf4+ "px"});
                }
                    
                var kopfzeile_bg_color = $(bg_color_kopfzeile).val();
                if(kopfzeile_bg_color!=null)
                {
                    antwort+=kopfzeile_bg_color+'$';
                    //$('.kopf_text').css({"font-size": kopfzeile_bg_color+ "px"});
                }
                else
                {
                    antwort+=kopf5+'$';
                    //$('.kopf_text').css({"font-size": kopf5+ "px"});
                }
                    
                var kopfzeile_bg_over_color = $(bg_over_color_kopfzeile).val();
                if(kopfzeile_bg_over_color!=null)
                {
                    antwort+=kopfzeile_bg_over_color+'$';
                    $('.kopf_text').hover(function(){ 
                       $(this).css({'background-color':'#'+ kopfzeile_bg_over_color,});
                    }, function () {
                        $(this).css("background-color","#"+kopfzeile_bg_color);
                    });
                }
                else
                {
                    antwort+=kopf6+'$';
                    $('.kopf_text').hover(function(){ 
                       $(this).css({'background-color':'#'+ kopf6,});
                    }, function () {
                        $(this).css("background-color","#"+kopf5);
                    });
                }
                    
                
                var fusszeile_schriftart = merker[schrift_art_fusszeile];
                if(fusszeile_schriftart!=null)
                {
                    antwort+=fusszeile_schriftart+'$';
                    $('.fuss_text').css({'font-family':'#'+ fusszeile_schriftart,});
                }
                else
                {
                    antwort+=fus1+'$';
                    $('.fuss_text').css({'font-family':'#'+ fus1,});
                }
                var fusszeile_font_color = $(font_color_fusszeile).val();
                if(fusszeile_font_color!=null)
                {
                    antwort+=fusszeile_font_color+'$';
                    $('.fuss_text').css({'color':'#'+ fusszeile_font_color,});
                }
                else
                {
                    antwort+=fus2+'$';
                    $('.fuss_text').css({'color':'#'+ fus2,});
                }
                    
                var fusszeile_font_over_color = $(font_over_color_fusszeile).val();
                if(fusszeile_font_over_color!=null)
                {
                    antwort+=fusszeile_font_over_color+'$';
                    $('.fuss_text').hover(function(){ 
                       $(this).css({'color':'#'+ fusszeile_font_over_color,});
                    }, function () {
                        $(this).css("color","#"+fusszeile_font_color);
                    });
                }
                else
                {
                    antwort+=fus3+'$';
                    $('.fuss_text').hover(function(){ 
                       $(this).css({'color':'#'+ fus3,});
                    }, function () {
                        $(this).css("color","#"+fus2);
                    });
                }
                    
                var fusszeile_schrift_groesse = merker[schrift_groesse_fusszeile];
                if(fusszeile_schrift_groesse!=null)
                {
                    antwort+=fusszeile_schrift_groesse+'$';
                    $('.fuss_text').css({"font-size": fusszeile_schrift_groesse+ "px"});
                }
                else
                {
                    antwort+=fus4+'$';
                    $('.fuss_text').css({"font-size": fus4+ "px"});
                }
                    
                var fusszeile_bg_color = $(bg_color_fusszeile).val();
                if(fusszeile_bg_color!=null)
                {
                    antwort+=fusszeile_bg_color+'$';
                    $('.fuss_text').css({'background-color': '#'+fusszeile_bg_color});
                }
                else
                {
                    antwort+=fus5+'$';
                    $('.fuss_text').css({'background-color': '#'+fus5});
                }
                    
                var fusszeile_bg_over_color = $(bg_over_color_fusszeile).val();
                if(fusszeile_bg_over_color!=null)
                {
                    antwort+=fusszeile_bg_over_color+'$';
                    $('.fuss_text').hover(function(){ 
                       $(this).css({'background-color':'#'+ fusszeile_bg_over_color,});
                    }, function () {
                        $(this).css("background-color","#"+fusszeile_bg_color);
                    });
                }
                else
                {
                    antwort+=fus6+'$';
                    $('.fuss_text').hover(function(){ 
                       $(this).css({'background-color':'#'+ fus6,});
                    }, function () {
                        $(this).css("background-color","#"+fus5);
                    });
                }
                    
                
                var speise_schriftart = merker[schrift_art_speise];
                if(speise_schriftart!=null)
                {
                    antwort+=speise_schriftart+'$';
                    $('.speise_text').css({'font-family':'#'+ speise_schriftart,});
                }
                else
                {
                    antwort+=speise1+'$';
                    $('.speise_text').css({'font-family':'#'+ speise1,});
                }
                    
                var speise_font_color = $(font_color_speise).val();
                if(speise_font_color!=null)
                {
                    antwort+=speise_font_color+'$';
                    $('.speise_text').css({'color':'#'+ speise_font_color,});
                }
                else
                {
                    antwort+=speise2+'$';
                    $('.speise_text').css({'color':'#'+ speise2,});
                }
                    
                var speise_font_over_color = $(font_over_color_speise).val();
                if(speise_font_over_color!=null)
                {
                    antwort+=speise_font_over_color+'$';
                    $('.speise_text').hover(function(){ 
                       $(this).css({'color':'#'+ speise_font_over_color,});
                    }, function () {
                        $(this).css("color","#"+speise_font_color);
                    });
                }
                else
                {
                    antwort+=speise3+'$';
                    $('.speise_text').hover(function(){ 
                       $(this).css({'color':'#'+ speise3,});
                    }, function () {
                        $(this).css("color","#"+speise2);
                    });
                }
                    
                var speise_schrift_groesse = merker[schrift_groesse_speise];
                if(speise_schrift_groesse!=null)
                {
                    antwort+=speise_schrift_groesse+'$';
                    $('.speise_text').css({"font-size": speise_schrift_groesse+ "px"});
                }
                else
                {
                    antwort+=speise4+'$';
                    $('.speise_text').css({"font-size": speise4+ "px"});
                }
                    
                var speise_bg_color = $(bg_color_speise).val();
                if(speise_bg_color!=null)
                {
                    antwort+=speise_bg_color+'$';
                    //$('.speise_text').css({'background-color':'#'+ speise_bg_color,});
                }
                else
                {
                    antwort+=speise5+'$';
                    //$('.speise_text').css({'background-color':'#'+ speise5,});
                }
                    
                var speise_bg_over_color = $(bg_over_color_speise).val();
                if(speise_bg_over_color!=null)
                {
                    antwort+=speise_bg_over_color+'$';
                    $('.speise_text').hover(function(){ 
                       //$(this).css({'background-color':'#'+ speise_bg_over_color,});
                    }, function () {
                        //$(this).css("background-color","#"+speise_bg_color);
                    });
                }
                else
                {
                    antwort+=speise6+'$';
                    $('.speise_text').hover(function(){ 
                       //$(this).css({'background-color':'#'+ speise6,});
                    }, function () {
                        //$(this).css("background-color","#"+speise5);
                    });
                }
                    
                
                var zutat_schriftart = merker[schrift_art_zutat];
                if(zutat_schriftart!=null)
                {
                    antwort+=zutat_schriftart+'$';
                    $('.zutat_text').css({'font-family':'#'+ zutat_schriftart,});
                }
                else
                {
                    antwort+=zutat1+'$';
                    $('.zutat_text').css({'font-family':'#'+ zutat1,});
                }
                    
                var zutat_font_color = $(font_color_zutat).val();
                if(zutat_font_color!=null)
                {
                    antwort+=zutat_font_color+'$';
                    $('.zutat_text').css({'color':'#'+ zutat_font_color,});
                }
                else
                {
                    antwort+=zutat2+'$';
                    $('.zutat_text').css({'color':'#'+ zutat2,});
                }
                    
                var zutat_font_over_color = $(font_over_color_zutat).val();
                if(zutat_font_over_color!=null)
                {
                    antwort+=zutat_font_over_color+'$';
                    $('.zutat_text').hover(function(){ 
                       $(this).css({'color':'#'+ zutat_font_over_color,});
                    }, function () {
                        $(this).css("color","#"+zutat_font_color);
                    });
                }
                else
                {
                    antwort+=zutat3+'$';
                    $('.zutat_text').hover(function(){ 
                       $(this).css({'color':'#'+ zutat3,});
                    }, function () {
                        $(this).css("color","#"+zutat2);
                    });
                }
                    
                var zutat_schrift_groesse = merker[schrift_groesse_zutat];
                if(zutat_schrift_groesse!=null)
                {
                    antwort+=zutat_schrift_groesse+'$';
                    $('.zutat_text').css({"font-size": zutat_schrift_groesse+ "px"});
                }
                else
                {
                    antwort+=zutat4+'$';
                    $('.zutat_text').css({"font-size": zutat4+ "px"});
                }
                    
                var zutat_bg_color = $(bg_color_zutat).val();
                if(zutat_bg_color!=null)
                {
                    antwort+=zutat_bg_color+'$';
                    $('.zutat_text').css({'background-color':'#'+ zutat_bg_color,});
                }
                else
                {
                    antwort+=zutat5+'$';
                    $('.zutat_text').css({'background-color':'#'+ zutat5,});
                }
                    
                var zutat_bg_over_color = $(bg_over_color_zutat).val();
                if(zutat_bg_over_color!=null)
                {
                    antwort+=zutat_bg_over_color+'$';//
                    $('.zutat_text').hover(function(){ 
                       $(this).css({'background-color':'#'+ zutat_bg_over_color,});
                    }, function () {
                        $(this).css("background-color","#"+zutat_bg_color);
                    });
                }
                else
                {
                    antwort+=zutat6+'$';
                    $('.zutat_text').hover(function(){ 
                       $(this).css({'background-color':'#'+ zutat6,});
                    }, function () {
                        $(this).css("background-color","#"+zutat5);
                    });
                }
                //beginn navi
                
                var navi_schriftart = merker[schrift_art_navi];
                if(navi_schriftart!=null)
                {
                    antwort+=navi_schriftart+'$';
                    $('.gruppenbild').css({'font-family':'#'+ navi_schriftart,});
                }
                else
                {
                    antwort+=navi1+'$';
                    $('.gruppenbild').css({'font-family':'#'+ navi1,});
                }
                    
                var navi_font_color = $(font_color_navi).val();
                if(navi_font_color!=null)
                {
                    antwort+=navi_font_color+'$';
                    $('.gruppenbild').css({'color':'#'+ navi_font_color,});
                }
                else
                {
                    antwort+=navi2+'$';
                    $('.gruppenbild').css({'color':'#'+ navi2,});
                }
                    
                var navi_font_over_color = $(font_over_color_navi).val();
                if(navi_font_over_color!=null)
                {
                    antwort+=navi_font_over_color+'$';
                    $('.gruppenbild').hover(function(){ 
                       $(this).css({'color':'#'+ navi_font_over_color,});
                    }, function () {
                        $(this).css("color","#"+navi_font_color);
                    });
                }
                else
                {
                    antwort+=navi3+'$';
                    $('.gruppenbild').hover(function(){ 
                       $(this).css({'color':'#'+ navi3,});
                    }, function () {
                        $(this).css("color","#"+navi2);
                    });
                }
                    
                var navi_schrift_groesse = merker[schrift_groesse_navi];
                if(navi_schrift_groesse!=null)
                {
                    antwort+=navi_schrift_groesse+'$';
                    $('.gruppenbild').css({"font-size": navi_schrift_groesse+ "px"});
                }
                else
                {
                    antwort+=navi4+'$';
                    $('.gruppenbild').css({"font-size": navi4+ "px"});
                }
                    
                var navi_bg_color = $(bg_color_navi).val();
                if(navi_bg_color!=null)
                {
                    antwort+=navi_bg_color+'$';
                    $('.gruppenbild').css({'background-color':'#'+ navi_bg_color,});
                }
                else
                {
                    antwort+=navi5+'$';
                    $('.gruppenbild').css({'background-color':'#'+ navi5,});
                }
                    
                var navi_bg_over_color = $(bg_over_color_navi).val();
                if(navi_bg_over_color!=null)
                {
                    antwort+=navi_bg_over_color+'$';//
                    $('.gruppenbild').hover(function(){ 
                       $(this).css({'background-color':'#'+ navi_bg_over_color,});
                    }, function () {
                        $(this).css("background-color","#"+navi_bg_color);
                    });
                }
                else
                {
                    antwort+=navi6+'$';
                    $('.gruppenbild').hover(function(){ 
                       $(this).css({'background-color':'#'+ navi6,});
                    }, function () {
                        $(this).css("background-color","#"+navi5);
                    });
                }
                //beginn menu_leiste  pari
                
                var menu_leiste_schriftart = merker[schrift_art_menu_leiste];
                if(menu_leiste_schriftart!=null)
                {
                    antwort+=menu_leiste_schriftart+'$';
                    $('.menu_leiste').css({'font-family':'#'+ menu_leiste_schriftart,});
                }
                else
                {
                    antwort+=menu1+'$';
                    $('.menu_leiste').css({'font-family':'#'+ menu1,});
                }
                    
                var menu_leiste_font_color = $(font_color_menu_leiste).val();
                if(menu_leiste_font_color!=null)
                {
                    antwort+=menu_leiste_font_color+'$';
                    $('.menu_leiste').css({'color':'#'+ menu_leiste_font_color,});
                }
                else
                {
                    antwort+=menu2+'$';
                    $('.menu_leiste').css({'color':'#'+ menu2,});
                }
                    
                var menu_leiste_font_over_color = $(font_over_color_menu_leiste).val();
                if(menu_leiste_font_over_color!=null)
                {
                    antwort+=menu_leiste_font_over_color+'$';
                    $('.menu_leiste').hover(function(){ 
                       $(this).css({'color':'#'+ menu_leiste_font_over_color,});
                    }, function () {
                        $(this).css("color","#"+menu_leiste_font_color);
                    });
                }
                else
                {
                    antwort+=menu3+'$';
                    $('.menu_leiste').hover(function(){ 
                       $(this).css({'color':'#'+ menu3,});
                    }, function () {
                        $(this).css("color","#"+menu2);
                    });
                }
                    
                var menu_leiste_schrift_groesse = merker[schrift_groesse_menu_leiste];
                if(menu_leiste_schrift_groesse!=null)
                {
                    antwort+=menu_leiste_schrift_groesse+'$';
                    $('.menu_leiste').css({"font-size": menu_leiste_schrift_groesse+ "px"});
                }
                else
                {
                    antwort+=menu4+'$';
                    $('.menu_leiste').css({"font-size": menu4+ "px"});
                }
                    
                var menu_leiste_bg_color = $(bg_color_menu_leiste).val();
                if(menu_leiste_bg_color!=null)
                {
                    antwort+=menu_leiste_bg_color+'$';
                    $('.menu_leiste').css({'background-color':'#'+ menu_leiste_bg_color,});
                }
                else
                {
                    antwort+=menu5+'$';
                    $('.menu_leiste').css({'background-color':'#'+ menu5,});
                }
                    
                var menu_leiste_bg_over_color = $(bg_over_color_menu_leiste).val();
                if(menu_leiste_bg_over_color!=null)
                {
                    antwort+=menu_leiste_bg_over_color+'$';//
                    $('.menu_leiste').hover(function(){ 
                       $(this).css({'background-color':'#'+ menu_leiste_bg_over_color,});
                    }, function () {
                        $(this).css("background-color","#"+menu_leiste_bg_color);
                    });
                }
                else
                {
                    antwort+=menu6+'$';//47
                    $('.menu_leiste').hover(function(){ 
                       $(this).css({'background-color':'#'+ menu6,});
                    }, function () {
                        $(this).css("background-color","#"+menu5);
                    });
                } 
                
                //48
                var flexi = merker[name_bold];
                if(flexi!=null)
                {
                    antwort+=flexi+'$';
                    $('.gruppen_text').css({"font-weight": flexi});
                }
                else
                {
                    antwort+=titel7+'$';
                    $('.gruppen_text').css({"font-weight": titel7});
                }
                
                //49
                flexi = merker[anhang_bold];
                if(flexi!=null)
                {
                    antwort+=flexi+'$';
                    $('.Anhang_text').css({"font-weight": flexi});
                }
                else
                {
                    antwort+=titel7+'$';
                    $('.Anhang_text').css({"font-weight": titel7});
                }
                //antwort+=merker[anhang_bold]+'$';//49
                
                //50
                flexi = merker[kopfzeile_bold];
                if(flexi!=null)
                {
                    antwort+=flexi+'$';
                    $('.kopf_text').css({"font-weight": flexi});
                }
                else
                {
                    antwort+=kopf7+'$';
                    $('.kopf_text').css({"font-weight": kopf7});
                }
                //antwort+=merker[kopfzeile_bold]+'$';//50
                
                //51
                //alert(1);
                flexi = merker[fusszeile_bold];
                //alert(flexi);
                if(flexi!=null)
                {
                    antwort+=flexi+'$';
                    $('.fuss_text').css({"font-weight": flexi});
                }
                else
                {
                    antwort+=fus7+'$';
                    $('.fuss_text').css({"font-weight": fus7});
                }
                //antwort+=merker[fusszeile_bold]+'$';//51
                
                //52
                flexi = merker[speise_bold];
                if(flexi!=null)
                {
                    antwort+=flexi+'$';
                    $('.speise_text').css({"font-weight": flexi});
                }
                else
                {
                    antwort+=speise7+'$';
                    $('.speise_text').css({"font-weight": speise7});
                }
                //antwort+=merker[speise_bold]+'$';//52
                
                //53
                flexi = merker[zutat_bold];
                if(flexi!=null)
                {
                    antwort+=flexi+'$';
                    $('.zutat_text').css({"font-weight": flexi});
                }
                else
                {
                    antwort+=zutat7+'$';
                    $('.zutat_text').css({"font-weight": zutat7});
                }
                //antwort+=merker[zutat_bold]+'$';//53
                
                //54
                flexi = merker[navi_bold];
                if(flexi!=null)
                {
                    antwort+=flexi+'$';
                    $('.class_navi').css({"font-weight": flexi});
                }
                else
                {
                    antwort+=navi7+'$';
                    $('.class_navi').css({"font-weight": navi7});
                }
                //antwort+=merker[navi_bold]+'$';//54 
                
                //55
                flexi = merker[menu_leiste_bold];
                if(flexi!=null)
                {
                    antwort+=flexi+'$';
                    //$('.class_navi').css({"font-weight": flexi});
                }
                else
                {
                    antwort+=menu7+'$';
                    //$('.class_navi').css({"font-weight": menu7});
                }   
                //antwort+=merker[menu_leiste_bold]+'$';//55   
                //alert(merker[menu_leiste_bold]);
                antwort+='|';
                
            }
            else
                antwort+=web_options_liste.split("|")[i2]+'|';
                
            //antwort+=$('#input_kunden_fax'+i2).val()+'|';
        }
        
        web_options_liste=antwort;
        grupppen_font_box();
        alert('1322 Die Einstelung wurde übernommen!');
    };
}
function add_grups_box()
{
    var add_grups= zero('div', 0, 0, 0, 0,document.body);
    //$(add_grups).text('add_grups');
    $(add_grups).css({'width':'250px',
                      'height':'200px',
                      'position':'fixed',
                      'right':'10px',
                      'top':'172px',
                      'background-color': 'green',
                      'z-index':'2',
                      });
    var table=zero('table',0,0,0,0,add_grups);var body=zero('tbody',0,0,0,0,table);
    var tr=zero('tr',0,0,0,0,body);
    var td1=zero('td',0,0,0,0,tr);
    var td2=zero('td',0,0,0,0,tr);
    var input_button = document.createElement('input');input_button.type = 'button';input_button.style.color = '#336699';
    $(input_button).val('gruppe 1381');
    td1.appendChild(input_button);
    close_me_knopf(add_grups);
    var tr_handbuch=zero('tr',0,0,0,0,body);
    //$(tr_handbuch).text('Name | anhang | kopfzeile | fusszeile');
    $(tr_handbuch).text('Azahl der Gruppen z.B. 6');
    var tr2=zero('tr',0,0,0,0,body);
    var td21=zero('td',0,0,0,0,tr2);td21.colSpan='2';
    var add_grups_text = zero('input', 0, 0, 0, 0, td21);//mki
    add_grups_text.id='add_grups_text';
    $(add_grups_text).css({
                      //'height':'200px',
                      //'position':'fixed',
                      });
    /*
    */
    input_button.onclick = function()
    {   
        var grupen_text =$(add_grups_text).val();
        for (var i = 0; i < grupen_text; i++) 
        {
            insertGruppe_text('gruppe'+i+'||||');
            $(add_grups).remove();
        }
    };
}

function save_mail()
{//gruppensatz = position+50   // dess
    var div_design = document.getElementById('menu_box');
    div_design.style.right=(screen.width * 0.02)+'px';
    
    for (var i2 = 0; i2 < 5 ; i2++) 
    {
        var div_beschreibung = zero('div', 0, 0, 0, 0, div_design);$(div_beschreibung).css({'padding-top':'6px'});
        var input_farbe = zero('input', 0, 0, 0, 0, div_design);
        if(i2==0)$(div_beschreibung).text('Partner Unternehmen:');
        if(i2==1)$(div_beschreibung).text('Restaurant Printer:');
        if(i2==2)$(div_beschreibung).text('1762 Restaurant Cheff:');
        if(i2==3)$(div_beschreibung).text('Restaurant Fahrer1:(nicht aktiv)');
        if(i2==4)$(div_beschreibung).text('Restaurant Fahrer2:(nicht aktiv)');
        input_farbe.id='input_fax'+i2;
        input_farbe.size = '30';//input_farbe.id = 'input_fax';
        if(mail_value!=null)//ke error nade
        {
            if(mail_value.split("|")[i2])// error nade
            {
                var mail_show = mail_value.split("|")[i2];
                mail_show = mail_show.replace('^','@');
                $(input_farbe).val(mail_show);
            }
        }
    }
    //knopf
    var div_icon = zero('div', 0, 0, 0, 0, div_design);
    var icon_email_eintag = k_m_f('134','1784 eMail speichern',div_icon,'',10,'on',(speise4-4),speise2);
    icon_email_eintag.onclick = function()
    {
        var jj_a = $('#input_fax0').val();jj_a = jj_a.replace('@','^');
        var jj_b = $('#input_fax1').val();jj_b = jj_b.replace('@','^');
        var jj_c = $('#input_fax2').val();jj_c = jj_c.replace('@','^');
        var jj_fahrer_1 = $('#input_fax3').val();jj_fahrer_1 = jj_fahrer_1.replace('@','^');
        var jj_fahrer_2 = $('#input_fax4').val();jj_fahrer_2 = jj_fahrer_2.replace('@','^');
        insert_mail(jj_a+'|'+jj_b+'|'+jj_c+'|'+jj_fahrer_1+'|'+jj_fahrer_2);
        jj_a = jj_a.replace('^','@');$('#input_fax0').val(jj_a);$('#input_fax0').css("background-color","red")
        jj_b = jj_b.replace('^','@');$('#input_fax1').val(jj_b);$('#input_fax1').css("background-color","red")
        jj_c = jj_c.replace('^','@');$('#input_fax2').val(jj_c);$('#input_fax2').css("background-color","red")
        jj_fahrer_1 = jj_fahrer_1.replace('^','@');$('#input_fax3').val(jj_fahrer_1);$('#input_fax3').css("background-color","red")
        jj_fahrer_2 = jj_fahrer_2.replace('^','@');$('#input_fax4').val(jj_fahrer_2);$('#input_fax4').css("background-color","red")
    };
}
function space_remover(value)
{
    value = value.replace( /\s/g, "");
    return value;
}

function save_fax(){//gruppensatz = position+50   // dess
    var div_design = document.getElementById('menu_box');
    div_design.style.right=(screen.width * 0.02)+'px';
    var input_farbe = zero('input', 0, 0, 0, 0, div_design);
    input_farbe.id='input_fax';
    input_farbe.size = '17';input_farbe.id = 'input_fax';
    $(input_farbe).val(mini_design_Unico_bGColor.split("!")[3]);
    //knopf

    var input_button = document.createElement('input');
    input_button.type = 'button';
    input_button.style.color = '#336699';
    input_button.value = 'FAX 1484';
    input_button.id='fax_button';
    div_design.appendChild(input_button);
    input_button.onclick = function(){
        var jj = $(input_farbe).val();
        insert_fax(jj);
        $(input_farbe).val(jj);
    };
}
function save_restaurant_art(){//srar
    var div_design = document.getElementById('menu_box');
    div_design.style.right=(screen.width * 0.02)+'px';
    var input_pizzatag = zero('input', 0, 0, 0, 0, div_design);
    input_pizzatag.size = '17';input_pizzatag.id = 'input_restaurant_art';
    $(input_pizzatag).val(restaurant_art.split("^")[1]);
    //knopf

    var input_button = document.createElement('input');
    input_button.type = 'button';
    input_button.style.color = '#336699';
    input_button.value = 'z.B. Pizzaria';
    input_button.id='restaurant_art_button';
    div_design.appendChild(input_button);
    
    input_button.onclick = function(){
        //document.getElementById('menu_box').style.visibility='hidden';
        restaurant_art='restaurant_art^'+$(input_pizzatag).val();
        $(input_pizzatag).css("background-color","red");
    };
}
function save_pizza_tag(){//spta
    var div_design = document.getElementById('menu_box');
    div_design.style.right=(screen.width * 0.02)+'px';
    var input_pizzatag = zero('input', 0, 0, 0, 0, div_design);
    input_pizzatag.size = '17';input_pizzatag.id = 'input_pizzatag';
    for (var i2 = 0; i2 < haupt_mp3_split_2.split("#").length - 1; i2++) 
    {
        if(haupt_mp3_split_2.split("#")[i2].split("|")[3]==id)
            $(input_pizzatag).val(haupt_mp3_split_2.split("#")[i2].split("|")[4]);
    }
    //knopf

    var input_button = document.createElement('input');
    input_button.type = 'button';
    input_button.style.color = '#336699';
    input_button.value = 'Tagesname';
    input_button.id='pizza_tag_button';
    div_design.appendChild(input_button);
    
    input_button.onclick = function(){
        var update='';
        for (var i2 = 0; i2 < haupt_mp3_split_2.split("#").length - 1; i2++) 
        {
            if(haupt_mp3_split_2.split("#")[i2].split("|")[3]!=id)
                update+=haupt_mp3_split_2.split("#")[i2]+'#';
            else
            {
                update+=haupt_mp3_split_2.split("#")[i2].split("|")[0]+'|';
                update+=haupt_mp3_split_2.split("#")[i2].split("|")[1]+'|';
                update+=haupt_mp3_split_2.split("#")[i2].split("|")[2]+'|';
                update+=haupt_mp3_split_2.split("#")[i2].split("|")[3]+'|';
                update+=$(input_pizzatag).val()+'|';
                update+=haupt_mp3_split_2.split("#")[i2].split("|")[5]+'|#';
            }
        }
        haupt_mp3_split_2=update;
        update_hauptmp3_2017(2,haupt_mp3_split_2);
        $(input_pizzatag).css("background-color","red")
    };
}

function start_zutat_liste(gruppenId)//naghd
{
    $('#zutat_liste').remove();
    var d = zero('div',0,(screen.width * 0.55),(screen.height * 0.79),0,document.body);$(d).css({'position':'fixed','top':'60px','left':'160px','background-color':'#CCC','z-index':'150',});
    d.id='zutat_liste';d.className = 'zwei_liste';d.style.overflow = 'auto';
    
    close_me_knopf(d);
    //exxy
    //var zutat_bib_satz = zutat_bibliotek_start(gruppenId);
    var zutat_bib_satz = $('.C829_zutat_gruppen_class'+gruppenId).text();
    
    var table=zero('table',0,0,0,1,d);var body=zero('tbody',0,0,0,0,table);
    var zutat_sortiert = new Array();
    for (var i = 0; i < zutat_bib_satz.split("@").length-1; i++) 
    {
        zutat_sortiert[i]=zutat_bib_satz.split("@")[i];
    }
    zutat_sortiert.sort();
   
    for (var i = 0; i < zutat_sortiert.length; i++) 
    {//zutat_bibliotek
        var tr=zero('tr',0,0,0,0,body);
        var td1=zero('td',0,0,0,0,tr);
        
        var z_div = zero('input', 0, 0, 0, 0, td1);
        z_div.id = zutat_sortiert[i].split("!")[1];
        $(z_div).val(zutat_sortiert[i].split("!")[0]);
        $(z_div).css({'background-color': 'white','width':'450px'});
        $(z_div).blur(function () {
            $(this).css("color","red");
            update_mini_Zelle_zutatBibliothek(this.id,0,$(this).val());
        });
        var td2=zero('td',0,0,0,0,tr);
        var adirekt = zero('a', 0, 0, 0, 0, td2);
        adirekt.href ="javascript:dell_zutat('" +zutat_sortiert[i].split("!")[1]+"','" +gruppenId+"');";
        var zutztpic = zero('img','Bilder/delete.png', 20, 20, 0, adirekt);
        var td2=zero('td',0,0,0,0,tr);
        var sup_icon = k_m_f('supper-'+zutat_sortiert[i].split("!")[1],'35r<sup>',td2,'',10,'on',(speise4-8),speise2);
        sup_icon.onclick = function()
        {
            //var dato = $('#'+this.id.split("-")[1]).val();dato+=' <sup></sup>';$('#'+this.id.split("-")[1]).val(dato);
            sup_switcher($('#'+this.id.split("-")[1]));
        }
        var td2=zero('td',0,0,0,0,tr);
        var sup_icon = k_m_f('supper2-'+zutat_sortiert[i].split("!")[1],'sup legend',td2,'',10,'on',(speise4-8),speise2);
        sup_icon.onclick = function()
        {
            //var dato = $('#'+this.id.split("-")[1]).val();
            //dato+=' <sup></sup>';
            //$('#'+this.id.split("-")[1]).val(dato);
            power_sup('#'+this.id.split("-")[1],'');
        }
    }
    var tr=zero('tr',0,0,0,0,body);
        var td1=zero('td',0,0,130,0,tr);
}
function dell_zutat(ZutztId,gruppen1665id)//dzu
{
    dell_zutat_sharp(ZutztId);
    start_zutat_liste(gruppen1665id);
}


function format_update_6(formatId,wert)
{
    var antwort = '';//position|xy|picId|@
    for (var i = 0; i < mini_Zelle_formatid.split("@").length - 1; i++)//speise Schleife
    {
        if (formatId == mini_Zelle_formatid.split("@")[i].split("!")[1])
        {//formathaye gruppe ro filter mikone
            antwort += mini_Zelle_formatid.split("@")[i].split("!")[0]+'!';
            antwort += mini_Zelle_formatid.split("@")[i].split("!")[1]+'!';
            antwort += mini_Zelle_formatid.split("@")[i].split("!")[2]+'!';
            antwort += mini_Zelle_formatid.split("@")[i].split("!")[3]+'!';
            antwort += mini_Zelle_formatid.split("@")[i].split("!")[4]+'!';
            antwort += mini_Zelle_formatid.split("@")[i].split("!")[5]+'!';
            antwort += wert+'!';
            antwort += mini_Zelle_formatid.split("@")[i].split("!")[7]+'!';
            antwort += mini_Zelle_formatid.split("@")[i].split("!")[8]+'!@';
            //update info_div
            $('#info5519_'+ mini_Zelle_formatid.split("@")[i].split("!")[1]).text
            (
                mini_Zelle_formatid.split("@")[i].split("!")[0]+'!'+
                mini_Zelle_formatid.split("@")[i].split("!")[1]+'!'+
                mini_Zelle_formatid.split("@")[i].split("!")[2]+'!'+
                mini_Zelle_formatid.split("@")[i].split("!")[3]+'!'+
                mini_Zelle_formatid.split("@")[i].split("!")[4]+'!'+
                mini_Zelle_formatid.split("@")[i].split("!")[5]+'!'+
                wert+'!'+
                mini_Zelle_formatid.split("@")[i].split("!")[7]+'!'+
                mini_Zelle_formatid.split("@")[i].split("!")[8]+'!'
            );
        }
        else
            antwort += mini_Zelle_formatid.split("@")[i]+'@';
            
    }
    mini_Zelle_formatid=antwort;
}
function preis_korrektur_bei_speisen(formatId,zutaten_wert_speise_wert)
{
    var zutaten_wert = zutaten_wert_speise_wert.split('|')[0];
    var speise_wert = zutaten_wert_speise_wert.split('|')[1];
    var update='';
    var conter = 0;
    for (var i = 0; i < $('.mini_Zelle_herfs').length; i++)
    {
        var my_value= $('.mini_Zelle_herfs')[i];
        my_value=$(my_value).text();
        
        if(my_value.split('!')[3]==formatId && // nur diese Gruppe ist betroffen
            my_value.split('!')[5]=='speise' && //nur speisen
            my_value.split("!")[12]<=zutaten_wert &&
            my_value.split("!")[0].split("|")[4]>=speise_wert //ke arzoonaro geroon nankone
            )//zutatwert ist kleiner. Angebot trift zu.
        {
            conter++;
            update_href_modern(my_value.split('!')[1],13,speise_wert);
                    
        }
    }
    alert(conter +' Produkte');
}
function zutat_kapazitaet_rechner()
{   
    
    var zutaten_wert = zutaten_wert_speise_wert.split('|')[0];
    var speise_wert = zutaten_wert_speise_wert.split('|')[1];

    //start zutat preisen drucken
    //for (var i = 0; i < mini_Zelle_zutatpreis.split("@").length - 1; i++)
    //{
     //       var div_zutat = zero('div',0,0,0,0,document.getElementById('g_box'));
      //      div_zutat.id='format_id'+mini_Zelle_zutatpreis.split("@")[i].split('!')[3]+'zutat_id'+mini_Zelle_zutatpreis.split("@")[i].split('!')[2];//zutat_id
      //      $(div_zutat).text(mini_Zelle_zutatpreis.split("@")[i].split('!')[0]);
      //      $(div_zutat).hide();
   // }
    //ende zutat preisen drucken

    //start zutat wert der Speisen rausfinden und in preiskorrektur_div speichenr(wird oben kreiert)
    for (var i0 = 0; i0 < mini_Zelle_formatid.split("@").length - 1; i0++)
    {
        //var 
        var format_id = mini_Zelle_formatid.split("@")[i0].split('!')[1];
        //for (var i = 0; i < mini_Zelle_V_zutat_speise.split("@").length - 1; i++)
        //{
        
        for (var i = 0; i < $('.mini_Zelle_V_zutat_speise').length; i++)
        {
            var my_value= $('.mini_Zelle_V_zutat_speise')[i];
            my_value=$(my_value).text();
            
            
            var speise_id = my_value.split('!')[2];
            var zutat_id = my_value.split('!')[3];
            var zutat_preis = $('#format_id'+format_id+'zutat_id'+zutat_id).text();
            if(document.getElementById('format_id'+format_id+'speise_id'+speise_id))
            {//age hast faghat preis += mishe
                var bisherige_zutat_wert_in_speise = $('#format_id'+format_id+'speise_id'+speise_id).text();
                bisherige_zutat_wert_in_speise=((bisherige_zutat_wert_in_speise*1)+(zutat_preis*1));
                $('#format_id'+format_id+'speise_id'+speise_id).text(bisherige_zutat_wert_in_speise);
            }
            else
            {// age nist div creat mishe wa gheymate zutat mire tush
                var div_zutat = zero('div',0,0,0,0,document.getElementById('g_box'));
                div_zutat.id='format_id'+format_id+'speise_id'+speise_id;
                $('#format_id'+format_id+'speise_id'+speise_id).text(zutat_preis);
            }
        }
    }
    
    var update='';
    for (var i = 0; i < $('.mini_Zelle_herfs').length; i++)
    {
        var my_value= $('.mini_Zelle_herfs')[i];
        my_value=$(my_value).text();
        
        var speise_id = my_value.split('!')[2];
        var format_id = my_value.split('!')[3];
        update_href_modern(my_value.split('!')[1],12,$('#format_id'+format_id+'speise_id'+speise_id).text());
    }
    //ende update preis fuer href von divs
}
function update_format_geld(formatId,zutat_anzahl_geld,billiger_moeglich)
    {   
        var update='';
        for (var i = 0; i < mini_Zelle_formatid.split("@").length - 1; i++)
        {
            if (formatId == mini_Zelle_formatid.split("@")[i].split("!")[1])
            {    
                //alert(mini_Zelle_formatid.split("@")[i].split("!")[0]);
                update += mini_Zelle_formatid.split("@")[i].split("!")[0] + '!' +
                          mini_Zelle_formatid.split("@")[i].split("!")[1] + '!' +
                          mini_Zelle_formatid.split("@")[i].split("!")[2] + '!' +
                          mini_Zelle_formatid.split("@")[i].split("!")[3] + '!' +
                          mini_Zelle_formatid.split("@")[i].split("!")[4] + '!' +
                          zutat_anzahl_geld + '!' +
                          mini_Zelle_formatid.split("@")[i].split("!")[6] + '!' +
                          mini_Zelle_formatid.split("@")[i].split("!")[7] + '!' +
                          billiger_moeglich + '!@';
            }
            else
                update += mini_Zelle_formatid.split("@")[i] += '@';
        }
        mini_Zelle_formatid = update;
    }
function start_fax_box()//fbox
{
    var d = zero('div',0,(screen.width * 0.61),(screen.height * 0.65),0,document.getElementById('geldliste'));
    var h1 = zero('h1',0,0,0,0,d);
    $(h1).text('FAX OPTIONEN 2156')
        //body += "<img src=http://pics.alice-eur.it/karte/" + rh_restaurant_name + "/mlogo.png height='" + (10 * mini) + "'>";
    var h2 = zero('h1',0,0,0,0,d);
    var piiic_id_fo= restaurantId;
    //var div_logo = zero('img',pic_link+'/karte/'+restaurant_name+'/mlogo.png',0,(100*h2_bild_groesse),0,h2);
    var div_logo = zero('img','fsw/logos/'+restaurantId+'.png',0,(100*fax_optionen_string.split("!")[0].split("|")[0].split("^")[1]),0,h2);
    //
    div_logo.id=piiic_id_fo;
    var td_iframe_div=zero('div',0,200,80,0,h2);
        var iftaam_iinn = pic_link+'/pic_own.aspx?idendity='+piiic_id_fo+'&format=.png';
        var td_iframe2=zero('iframe',iftaam_iinn,180,70,0,td_iframe_div);
        td_iframe_div.id='fram:'+piiic_id_fo;
        $(td_iframe_div).mousemove(function() {
            $('#'+this.id.split(':')[1]).css({
                "background-image":'url(fsw/logos/'+this.id.split(':')[1]+'.png)',
            });
        });
    close_me_knopf(d);
    d.id='g_box';
    document.getElementById('geldliste').style.top=(screen.height * 0.12)+'px';
    document.getElementById('geldliste').style.left='20px';
    d.style.overflow = 'auto';
    $(d).css('background-color', 'green');
    var table1=zero('table',0,0,0,1,d);var body1=zero('tbody',0,0,0,0,table1);var tr_titel1=zero('tr',0,0,0,0,body1)
    //erst eintag

    var td_anzahl1=zero('td',0,0,0,0,tr_titel1);var table_k1=zero('table',0,0,0,1,td_anzahl1);var body_k1=zero('tbody',0,0,0,0,table_k1);
    var tr_titel_kunden_titel=zero('tr',0,0,0,0,body_k1)
    $(tr_titel_kunden_titel).text('Kunden Fax')
    //var fax_daten = fax_optionen_()value.
    var h2_bild_groesse=0;
    for (var i2 = 0; i2 < fax_optionen_string.split("!")[0].split("|").length-1; i2++) 
    {//kunden fax
        var tr_titel=zero('tr',0,0,0,0,body_k1)
            var td_anzahl=zero('td',0,0,0,0,tr_titel);
                var input_titel = zero('div', 0, 0, 0, 0, td_anzahl);
                if(i2==1)
                    $(input_titel).text("xfx FAX breite in %");
                else{
                    $(input_titel).text(fax_optionen_string.split("!")[0].split("|")[i2].split("^")[0]);
                }
                input_titel.id='input_titel_kunden'+i2;
            var td_preis=zero('td',0,0,0,0,tr_titel);
            var option_innen ="";
            if(fax_optionen_string.split("!")[0].split("|")[i2].split("^")[0]=='Aktiv:')option_innen="|0|1|";
            if(fax_optionen_string.split("!")[0].split("|")[i2].split("^")[0]=='Kunden Analyse:')option_innen="|0|1|";
            if(fax_optionen_string.split("!")[0].split("|")[i2].split("^")[0]=='Kunden Analyse:')option_innen="|0|1|";
            if(fax_optionen_string.split("!")[0].split("|")[i2].split("^")[0]=='Zutat Font:')option_innen="|1|2|3|4|5|";
            if(fax_optionen_string.split("!")[0].split("|")[i2].split("^")[0]=='Page Font:')option_innen="|1|2|3|4|5|";
            if(fax_optionen_string.split("!")[0].split("|")[i2].split("^")[0]=='produkt Bild:')option_innen="|20%|30%|40%|50%|60%|70%|80%|90%|100%|";//produkt Bild
            if(fax_optionen_string.split("!")[0].split("|")[i2].split("^")[0]=='Titelbild:')option_innen="|0.3|0.6|1|1.3|1.6|2|2.3|";//produkt Bild
            if(fax_optionen_string.split("!")[0].split("|")[i2].split("^")[0]=='reserve3047:')option_innen="|20%|30%|40%|50%|60%|70%|80%|90%|100%|";//produkt Bild
            //alert(fax_optionen_string.split("!")[0].split("|")[i2].split("^")[0]);
            //Titelbild:
            //reserve3047:
            //Reserve3048:
            //Page Font:
            //Zutat Font:
            //Kunden Analyse:
            //Aktiv:
            //Kopfzeile:
            //Fusszeile:
            
            if(fax_optionen_string.split("!")[0].split("|")[i2].split("^")[0]=='Kopfzeile:'||fax_optionen_string.split("!")[0].split("|")[i2].split("^")[0]=='Fusszeile:')
            {
                var input_preis = zero('textarea', 0, 0, 0, 0, td_preis);
                input_preis.id='input_kunden_fax'+i2;
                $(input_preis).width((screen.width * 0.19));
                $(input_preis).height((screen.height * 0.08));
                $(input_preis).val(fax_optionen_string.split("!")[0].split("|")[i2].split("^")[1]);
                
            }
            else
            {
                var oplist = o_p('input_kunden_fax'+i2,fax_optionen_string.split("!")[0].split("|")[i2].split("^")[1]+option_innen,td_preis,'',10,'20px',(speise4-5),speise2);
                oplist.onchange = function()
                {
                    var antwort="";
                    for (var i2 = 0; i2 < fax_optionen_string.split("!")[0].split("|").length-1; i2++) 
                    {
                        antwort+=fax_optionen_string.split("!")[0].split("|")[i2].split("^")[0]+'^';
                        antwort+=$('#input_kunden_fax'+i2).val()+'|';
                        if(i2==0){h2_bild_groesse =  $('#input_kunden_fax'+i2).val();}
                        
                    }
                    
                    antwort+='!';//geht an atribut 2 privat fax
                    for (var i2 = 0; i2 < fax_optionen_string.split("!")[1].split("|").length-1; i2++) 
                    {
                        antwort+=fax_optionen_string.split("!")[1].split("|")[i2].split("^")[0]+'^';
                        antwort+=$('#input_privat_fax'+i2).val()+'|';
                    }
                    antwort+='!';//
                    for (var i2 = 0; i2 < fax_optionen_string.split("!")[2].split("|").length-1; i2++) 
                    {
                        antwort+=fax_optionen_string.split("!")[2].split("|")[i2].split("^")[0]+'^';
                        antwort+=$('#input_sonstiges'+i2).val()+'|';
                    }
                    antwort+='!';
                    fax_optionen_string=antwort;
                    update_hauptmp3_2017(12,fax_optionen_string);
                    $(this).css("background-color","yellow");
                    
                }
            }
            if(i2==0)h2_bild_groesse =  fax_optionen_string.split("!")[0].split("|")[i2].split("^")[1];
            
    }
    
    var td_anzahl2=zero('td',0,0,0,0,tr_titel1);var table_p=zero('table',0,0,0,1,td_anzahl2);var body_p=zero('tbody',0,0,0,0,table_p);
    var tr_titel_p_titel=zero('tr',0,0,0,0,body_p)
    $(tr_titel_p_titel).text('Privat Fax')
    for (var i2 = 0; i2 < fax_optionen_string.split("!")[1].split("|").length-1; i2++) 
    {//privar fax
        var tr_titel3=zero('tr',0,0,0,0,body_p)
            var td_anzahl=zero('td',0,0,0,0,tr_titel3);
                var input_titel = zero('div', 0, 0, 0, 0, td_anzahl);
                $(input_titel).text(fax_optionen_string.split("!")[1].split("|")[i2].split("^")[0])
                input_titel.id='input_titel_privat'+i2;
            var td_preis3=zero('td',0,0,0,0,tr_titel3);
                var input_preis = zero('input', 0, 0, 0, 0, td_preis3);input_preis.size = 5;$(input_preis).val(fax_optionen_string.split("!")[1].split("|")[i2].split("^")[1]);
                input_preis.id='input_privat_fax'+i2;
    }
    var td_anzahl2=zero('td',0,0,0,0,tr_titel1);var table_p=zero('table',0,0,0,1,td_anzahl2);var body_p=zero('tbody',0,0,0,0,table_p);
    var tr_titel_p_titel=zero('tr',0,0,0,0,body_p)
    $(tr_titel_p_titel).text('sonstiges')
    for (var i2 = 0; i2 < fax_optionen_string.split("!")[2].split("|").length-1; i2++) 
    {//privar fax
        var tr_titel3=zero('tr',0,0,0,0,body_p)
            var td_anzahl=zero('td',0,0,0,0,tr_titel3);
                var input_titel = zero('div', 0, 0, 0, 0, td_anzahl);
                $(input_titel).text(fax_optionen_string.split("!")[2].split("|")[i2].split("^")[0])
                input_titel.id='sonstiges'+i2;
            var td_preis3=zero('td',0,0,0,0,tr_titel3);
                var input_preis = zero('input', 0, 0, 0, 0, td_preis3);input_preis.size = 5;$(input_preis).val(fax_optionen_string.split("!")[2].split("|")[i2].split("^")[1]);
                input_preis.id='input_sonstiges'+i2;
    }
    var tr_button=zero('tr',0,0,0,0,body1);var td_button=zero('td',0,0,0,0,tr_button);td_button.colSpan='2';td_button.align='center'
    var input = document.createElement('input');input.type = 'button';input.style.color = '#336699';
    input.value = 'Fax einstellung speichern 2231';
    td_button.appendChild(input);
    input.onclick = function(){
        var antwort='';
        $(input).css("color","red");
        for (var i2 = 0; i2 < fax_optionen_string.split("!")[0].split("|").length-1; i2++) 
        {
            antwort+=fax_optionen_string.split("!")[0].split("|")[i2].split("^")[0]+'^';
            antwort+=$('#input_kunden_fax'+i2).val()+'|';
            if(i2==0){h2_bild_groesse =  $('#input_kunden_fax'+i2).val();}
        }
        
        
        antwort+='!';//geht an atribut 2 privat fax
        for (var i2 = 0; i2 < fax_optionen_string.split("!")[1].split("|").length-1; i2++) 
        {
            antwort+=fax_optionen_string.split("!")[1].split("|")[i2].split("^")[0]+'^';
            antwort+=$('#input_privat_fax'+i2).val()+'|';
        }
        antwort+='!';//
        for (var i2 = 0; i2 < fax_optionen_string.split("!")[2].split("|").length-1; i2++) 
        {
            antwort+=fax_optionen_string.split("!")[2].split("|")[i2].split("^")[0]+'^';
            antwort+=$('#input_sonstiges'+i2).val()+'|';
        }
        antwort+='!';//geht an atribut 3
        //antwort+='3!58!5!6!7!8!@';
        fax_optionen_string=antwort;
        update_hauptmp3_2017(12,fax_optionen_string);
        
        alert('2546 Fax Update');
    };
    
}
function start_web_options()//swbox
{
    var dard = zero('div',0,0,0,0,document.body);
    $(dard).css({'background-color': 'blue','width':'95%','overflow':'auto','height':'90%','z-index':'10','position':'fixed','color': '#ffffff','font-size':'120%'});
        $(dard).css({'left':'10px', 'top':'60px'});
    var erklaerung = zero('div',0,0,0,0,dard);
    $(erklaerung).text('zutatstoffe: bei dem Titel(menue Titel 4:) zutatstoffe# und leerem Body überninmmt das System (stoff_legende.txt)');
    $(erklaerung).css({'font-size':'80%',});
    var h1 = zero('h1',0,0,0,0,dard);$(h1).text('Web Optionen 2271')
    dard.id='web_box_fenster';//$(d).css('background-color', 'blue');
    close_me_knopf(dard);
    var table1=zero('table',0,0,0,1,dard);var body1=zero('tbody',0,0,0,0,table1);
    //erst eintag ergaenzung der web_options
    if(web_options_liste.split("|").length-1==20){alert('web_options_liste wird ergaenzt 2258');var new_value ='';for (var i2 = 0; i2 < web_options_liste.split("|").length-1; i2++) {new_value+=web_options_liste.split("|")[i2].split("^")[0]+'^'+web_options_liste.split("|")[i2].split("^")[1]+'|';}new_value+='urlaub: z.B.(24/12:3/1)^0/0:0/0|';new_value+='reserve12:^0|';new_value+='reserve13:^0|';new_value+='reserve14:^0|';new_value+='reserve15:^0|';new_value+='reserve16:^0|';
    new_value+='bg_matt:^0|';new_value+='reserve18:^0|';new_value+='reserve19:^0|';new_value+='reserve20:^0|';web_options_liste=new_value;}
        
    var tr_button=zero('tr',0,0,0,0,body1);var td_button=zero('td',0,0,0,0,tr_button);td_button.colSpan='2';td_button.align='center'
    var icon_speichern = k_m_f('134','2316 speichern',td_button,'',10,'on',(speise4),speise2);
    
   // var input = document.createElement('input');input.type = 'button';input.style.color = '#336699';input.value = '2316 speichern';
        $(icon_speichern).css({'position':'fixed','top':'50px'});
    //td_button.appendChild(input);
    icon_speichern.onclick = function(){
        var antwort='';
        $(this).css("background-color","green");
        for (var i2 = 0; i2 < web_options_liste.split("|").length-1; i2++) 
        {
            antwort+=web_options_liste.split("|")[i2].split("^")[0]+'^';
            var mit_doppelpunke = $('#input_kunden_fax'+i2).val();
            antwort+=$('#input_kunden_fax'+i2).val()+'|';
        }
        web_options_liste=antwort;
    };
    var tr_titel1=zero('tr',0,0,0,0,body1)
    var td_anzahl1=zero('td',0,0,0,0,tr_titel1);var table_k1=zero('table',0,0,0,1,td_anzahl1);var body_k1=zero('tbody',0,0,0,0,table_k1);
    
    for (var i2 = 0; i2 < web_options_liste.split("|").length-1; i2++) //
    {//kunden fax
    //sperre
        var tr_titel=zero('tr',0,0,0,0,body_k1)
        if (/*slide*/i2 == 0 ||
            /*blink href:*/i2 == 1 ||
            /*Vorbestellen*/i2 == 3 ||
            /*Ip_sperre:*/i2 == 4 ||
            /*Hover color in Menue:*/i2 == 9 ||
            /*jpg bei confirm aktiv = 1:*/i2 == 10 ||
            /*Href((bordercolor=0)*/i2 == 16 ||
            /*fonts*/i2 == 18 ||
            /*background-img*/i2 == 25 ||
            /*Angebote*/i2 == 27 ||
            /*sup switcher*/i2 == 28 ||
            /*res*/i2 == 29)

        { $(tr_titel).css("display", "none"); }
    
            var td_anzahl=zero('td',0,0,0,0,tr_titel);
                var input_titel = zero('div', 0, 0, 0, 0, td_anzahl);
                $(input_titel).text(web_options_liste.split("|")[i2].split("^")[0])
                if(web_options_liste.split("|")[i2].split("^")[0]=='reserve1:')
                    $(input_titel).text('3- jpg bei Konfirm mail an smartphone aktiv=1:');
                if(web_options_liste.split("|")[i2].split("^")[0]=='reserve2:')
                    $(input_titel).text('4- Lndes-vorwahl ohne 00 z.B 49:');
                if(web_options_liste.split("|")[i2].split("^")[0]=='reserve3:')
                    $(input_titel).text('5- Mit Konfirm email:1 ohne = 0:');
                if(web_options_liste.split("|")[i2].split("^")[0]=='reserve4:')
                    $(input_titel).text('6- Facebook:');
                if(web_options_liste.split("|")[i2].split("^")[0]=='reserve5:')
                    $(input_titel).text('7- Paypal Aktiv -:');
                if(web_options_liste.split("|")[i2].split("^")[0]=='reserve6:')
                    $(input_titel).text('8- 2363 Plattform Name "giessen3" :');
                if(web_options_liste.split("|")[i2].split("^")[0]=='reserve7:')
                    $(input_titel).text('9- Href((bordercolor=0)-(schatenstärke=0.1)-(schatenFarbe=0)-(hoverColor=0)):');
                if(web_options_liste.split("|")[i2].split("^")[0]=='reserve8:')
                    $(input_titel).text('10- geschlosse Tage(21/1;):');
                if(web_options_liste.split("|")[i2].split("^")[0]=='reserve10:')
                    $(input_titel).text('11- Feiertage(a.B.:  17/1;31/12;5/2):');
                if(web_options_liste.split("|")[i2].split("^")[0]=='reserve12:')
                    $(input_titel).text('12- Google_fram http://www.gpskoordinaten.de/:');
                //if(web_options_liste.split("|")[i2].split("^")[0]=='reserve13:')//nur vulkan
                if(i2==22)//nur vulkan
                    $(input_titel).text('13- 2373 Fahrtkosten Immer:');
                if(web_options_liste.split("|")[i2].split("^")[0]=='reserve14:')
                    $(input_titel).text('14- POST inizial um PLZ-Eintrag-Liste zu wählen:');
                if(web_options_liste.split("|")[i2].split("^")[0]=='reserve15:')//nur vulkan
                    $(input_titel).text('15- 0=karten-Modul  1=fenster-Modul:');
                if(web_options_liste.split("|")[i2].split("^")[0]=='reserve17:')//i=26
                    $(input_titel).text('16- 2379 BG Matt setzen:');
                    
                input_titel.id='input_titel_kunden'+i2;
                var td_preis=zero('td',0,0,0,0,tr_titel);
                var td_i=zero('td',0,0,0,0,tr_titel);$(td_i).text("5byx "+i2);
                var input_preis ='';
                if(i2==13||i2==5||i2==6||i2==7||i2==8||i2==19||i2==21)
                {
                     input_preis = zero('textarea', 0, 900, 55, 0, td_preis);
                    $(input_preis).val(web_options_liste.split("|")[i2].split("^")[1]);
                     input_preis.id='input_kunden_fax'+i2;
                }
                //optionfelder
                else if(i2==2||i2==12||i2==24||i2==8||i2==19||i2==14)
                {
                    option_innen = "|0|1|";
                    
                        input_preis = o_p('input_kunden_fax' + i2, web_options_liste.split("|")[i2].split("^")[1] + option_innen, td_preis, '', 10, '20px', (speise4 - 5), speise2);

                    input_preis.onchange = function()
                    {
                        var antwort='';
                        //$(this).css("color","red");
                        for (var i2 = 0; i2 < web_options_liste.split("|").length-1; i2++) 
                        {
                            antwort+=web_options_liste.split("|")[i2].split("^")[0]+'^';
                            var mit_doppelpunke = $('#input_kunden_fax'+i2).val();
                            antwort+=$('#input_kunden_fax'+i2).val()+'|';
                        }
                        web_options_liste=antwort;
                    }
                }
                else if(i2==26)
                {
                    option_innen="|0|1|2|3|4|5|6|7|8|9|";
                    input_preis = o_p('input_kunden_fax'+i2,web_options_liste.split("|")[i2].split("^")[1]+option_innen,td_preis,'',10,'20px',(speise4-5),speise2);
                    input_preis.onchange = function()
                    {
                        var antwort='';
                        //$(this).css("color","red");
                        for (var i2 = 0; i2 < web_options_liste.split("|").length-1; i2++) 
                        {
                            antwort+=web_options_liste.split("|")[i2].split("^")[0]+'^';
                            var mit_doppelpunke = $('#input_kunden_fax'+i2).val();
                            antwort+=$('#input_kunden_fax'+i2).val()+'|';
                        }
                        web_options_liste=antwort;
                        $('#js28_div_matt_setzer').css({'opacity': '0.'+$(this).val(),});
                    }
                }
                else
                {
                    input_preis = zero('input', 0, 0, 0, 0, td_preis);
                    input_preis.size = 15;
                    $(input_preis).val(web_options_liste.split("|")[i2].split("^")[1]);
                    input_preis.id='input_kunden_fax'+i2;
                }
    }//end for
    
}

var gr_tr_ticker=0;var unsere_gruppen_fuer_suchmaschine='';
function gruppen_emxport_giessengastro()//sgz
{
    for (var i2 = 0; i2 < haupt_mp3_split_2.split("#").length-1; i2++) 
    {
        if(haupt_mp3_split_2.split("#")[i2].split("|")[3]==id)
        {
            unsere_gruppen_fuer_suchmaschine = haupt_mp3_split_2.split("#")[i2].split("|")[5];
        }
    }
    var d = zero('div',0,(screen.width * 0.61),(screen.height * 0.65),0,document.getElementById('geldliste'));
    close_me_knopf(d);
    var h1 = zero('h1',0,0,0,0,d);
    $(h1).text('Gruppen für suchmaschine 2490');$(h1).animate({color:'white'},2000);
    d.id='plz_box';
    document.getElementById('geldliste').style.top=(screen.height * 0.05)+'px';
    document.getElementById('geldliste').style.left='220px';
    d.style.overflow = 'auto';
    $(d).css('background-color', 'green');
    //table haupt
    var table_haupt=zero('table',0,0,0,1,d);var body_haupt=zero('tbody',0,0,0,0,table_haupt);
    var tr_haupt=zero('tr',0,0,0,0,body_haupt);tr_haupt.id='tr_haupt_gruppen_liste';
    //td gesamt 1
    var td_haupt1=zero('td',0,0,0,0,tr_haupt);
    
    var table_k1=zero('table',0,0,0,1,td_haupt1);var body_k1=zero('tbody',0,0,0,0,table_k1);
    var tr_button=zero('tr',0,0,0,0,body_k1);
    //td add td
    var td_add=zero('td',0,0,0,0,tr_button);
        var zutztpic = zero('img','Bilder/add.png', 20, 20, 0, td_add);
        zutztpic.onclick = function(){
            add_tr_gruppen_suchmaschiene(gr_tr_ticker,body_k1);
        }
    
    var td_button=zero('td',0,0,0,0,tr_button);td_button.colSpan='2';td_button.align='center'
    var input = document.createElement('input');input.type = 'button';input.style.color = '#336699';input.value = 'speichern 2512';td_button.appendChild(input);
    input.onclick = function(){
        var antwort='';
        for (var i2 = 0; i2 < gr_tr_ticker; i2++) 
        {
            if($('#a_'+i2).val()!='')
            {
                var input_innerhalt = $('#a_'+i2).val();
                //antwort+=string_format(input_innerhalt)+'^';
                antwort+=input_innerhalt+'^';
            }
            $('#al_tr'+i2).remove();//$('#b_t'+i2).remove();$('#c_t'+i2).remove();
        }
        var update_offnungen='';
        for (var i2 = 0; i2 < haupt_mp3_split_2.split("#").length-1; i2++) 
        {
            if(haupt_mp3_split_2.split("#")[i2].split("|")[3]!=id)
            {/*ke male hamin zeitfenster ro neshoon bede*/
                update_offnungen+=haupt_mp3_split_2.split("#")[i2]+'#';
            }
            else
            {
                update_offnungen+=haupt_mp3_split_2.split("#")[i2].split('|')[0]+'|';
                update_offnungen+=haupt_mp3_split_2.split("#")[i2].split('|')[1]+'|';
                update_offnungen+=haupt_mp3_split_2.split("#")[i2].split('|')[2]+'|';
                update_offnungen+=haupt_mp3_split_2.split("#")[i2].split('|')[3]+'|';
                update_offnungen+=haupt_mp3_split_2.split("#")[i2].split('|')[4]+'|';
                if(haupt_mp3_split_2.split("#")[i2].split('|')[5]!='undefined')//ke undefined nanewise
                    update_offnungen+=haupt_mp3_split_2.split("#")[i2].split('|')[5]+antwort+'|#';
                else
                    update_offnungen+=antwort+'|#';
                unsere_gruppen_fuer_suchmaschine = haupt_mp3_split_2.split("#")[i2].split('|')[5]+antwort;
            }
        }
        haupt_mp3_split_2=update_offnungen;
        liste_gruppen_name_fur_suchmaschiene(tr_haupt);
        gr_tr_ticker=0;
            
    };
    var tr_titel_kunden_titel=zero('tr',0,0,0,0,body_k1);
    var td_titel1=zero('td',0,(screen.width * 0.09),0,0,tr_titel_kunden_titel);$(td_titel1).text('Gruppe 2553');$(td_titel1).animate({color:'white'},2000);
    //td gesamt 2 fuer die liste
    td_titel1.colSpan='2';
    liste_gruppen_name_fur_suchmaschiene(tr_haupt);
    var td_import_button=zero('td',0,0,0,0,tr_haupt);td_import_button.id='td_import_button';
    var input = document.createElement('input');input.type = 'button';input.style.color = '#336699';input.value = 'improt from List 2557';
    td_import_button.appendChild(input);input.onclick = function(){import_from_list_for_giessen_gastro();}
    //alert(999);
}
function import_from_list_for_giessen_gastro()//lgfs
{
    //var gruppen = gruppenstart();
    var antwort='';
    //for (var i2 = 0; i2 < gruppen.length; i2++) 
    //for (var i2 = 0; i2 < mini_Zelle_gruppen.split("@").length - 1; i2++)
    for (var i2 = 0; i2 < $('.mini_Zelle_gruppen').length; i2++)
    {
                var my_value= $('.mini_Zelle_gruppen')[i2];
                my_value=$(my_value).text();
            //antwort+=gruppen[i2]+'^';
            //antwort+=gruppen[i2].split('|')[7].split('!')[8]+'^';
            //antwort+=gruppen[i2].split('|')[7].split('!')[8]+'^';
            antwort += my_value.split('|')[0];
    }
    
    var update_offnungen='';
    for (var i2 = 0; i2 < haupt_mp3_split_2.split("#").length-1; i2++) 
    {
        if(haupt_mp3_split_2.split("#")[i2].split("|")[3]!=id)
        {/*ke male hamin zeitfenster ro neshoon bede*/
            update_offnungen+=haupt_mp3_split_2.split("#")[i2]+'#';
        }
        else
        {
            update_offnungen+=haupt_mp3_split_2.split("#")[i2].split('|')[0]+'|';
            update_offnungen+=haupt_mp3_split_2.split("#")[i2].split('|')[1]+'|';
            update_offnungen+=haupt_mp3_split_2.split("#")[i2].split('|')[2]+'|';
            update_offnungen+=haupt_mp3_split_2.split("#")[i2].split('|')[3]+'|';
            update_offnungen+=haupt_mp3_split_2.split("#")[i2].split('|')[4]+'|';
            
            if(haupt_mp3_split_2.split("#")[i2].split('|')[5]!='undefined')//ke undefined nanewise
                update_offnungen+=haupt_mp3_split_2.split("#")[i2].split('|')[5]+antwort+'|#';
            else
                update_offnungen+=antwort+'|#';
            unsere_gruppen_fuer_suchmaschine = haupt_mp3_split_2.split("#")[i2].split('|')[5]+antwort;
        }
    }
    haupt_mp3_split_2=update_offnungen;
    liste_gruppen_name_fur_suchmaschiene(document.getElementById('tr_haupt_gruppen_liste'));
    gr_tr_ticker=0;
}
function liste_gruppen_name_fur_suchmaschiene(element)//lgfs
{
    if(document.getElementById('td_haupt2'))
        $('#td_haupt2').remove();
    var td_haupt2=zero('td',0,0,0,0,element);td_haupt2.id='td_haupt2';
    var table_k2=zero('table',0,0,0,1,td_haupt2);var body_k2=zero('tbody',0,0,0,0,table_k2);
    var tr_titel_=zero('tr',0,0,0,0,body_k2);
        var td_t2=zero('td',0,0,0,0,tr_titel_);td_t2.colSpan='2';$(td_t2).text('GRUPPEN 2566');$(td_t2).animate({color:'white'},2000);
    for (var i2 = 0; i2 < haupt_mp3_split_2.split("#").length-1; i2++) 
    {
        //alert(3);
        if(haupt_mp3_split_2.split("#")[i2].split("|")[3]==id)
        {//ke male hamin zeitfenster ro neshoon bede
        //alert(haupt_mp3_split_2.split("#")[i2]);
            for (var i3 = 0; i3 < haupt_mp3_split_2.split("#")[i2].split("|")[5].split("^").length-1; i3++) 
            {
        //alert(5);
                var text_for_td = haupt_mp3_split_2.split("#")[i2].split("|")[5].split("^")[i3]
                var tr_k2=zero('tr',0,0,0,0,body_k2);
                var td_k2=zero('td',0,0,0,0,tr_k2);$(td_k2).text(text_for_td);$(td_k2).animate({color:'white'},2000);
        //alert(6);
                var td_k5=zero('td',0,0,0,0,tr_k2);
                var adirekt = zero('a', 0, 0, 0, 0, td_k5);
                adirekt.href ="javascript:dell_gruppe_fuer_suchmaschine('" +text_for_td+"');";
                var zutztpic = zero('img','Bilder/delete.png', 20, 20, 0, adirekt);
        //alert(7);
            }
        }
    }
    //alert(9999);
}
function add_tr_gruppen_suchmaschiene(ticker,element)//atrgs
{
    var tr_button=zero('tr',0,0,0,0,element);
    tr_button.id='al_tr'+ticker;
    var td_plz=zero('td',0,0,0,0,tr_button);
    td_plz.id='a_t'+ticker;
    var input_plz = zero('input', 0, 0, 0, 0, td_plz);
    input_plz.id='a_'+ticker;
    $(input_plz).width((screen.width * 0.09));
    $(input_plz).blur(function () {
        for (var i2 = 0; i2 < unsere_gruppen_fuer_suchmaschine.split("^").length-1; i2++) 
        {
            var gruppe_name = unsere_gruppen_fuer_suchmaschine.split("^")[i2];
            if($(input_plz).val()==gruppe_name)
            {
                alert('diese gruppe gibt es schon!');
                $(input_plz).focus();
                break;
            }
        }
    });
    $(input_plz).focus();
    gr_tr_ticker++;
}

function dell_gruppe_fuer_suchmaschine(delete_plz)//dgfsm
{
    //alert(delete_plz);
    var update='';
    for (var i2 = 0; i2 < unsere_gruppen_fuer_suchmaschine.split("^").length-1; i2++) 
    {
        if(unsere_gruppen_fuer_suchmaschine.split("^")[i2]!=delete_plz)
            update+=unsere_gruppen_fuer_suchmaschine.split("^")[i2]+'^';
    }
    var update_offnungen='';
        for (var i2 = 0; i2 < haupt_mp3_split_2.split("#").length-1; i2++) 
        {
            if(haupt_mp3_split_2.split("#")[i2].split("|")[3]!=id)
            {//ke male hamin zeitfenster ro neshoon bede
                update_offnungen+=haupt_mp3_split_2.split("#")[i2]+'#';
            }
            else
            {
                update_offnungen+=haupt_mp3_split_2.split("#")[i2].split('|')[0]+'|';
                update_offnungen+=haupt_mp3_split_2.split("#")[i2].split('|')[1]+'|';
                update_offnungen+=haupt_mp3_split_2.split("#")[i2].split('|')[2]+'|';
                update_offnungen+=haupt_mp3_split_2.split("#")[i2].split('|')[3]+'|';
                update_offnungen+=haupt_mp3_split_2.split("#")[i2].split('|')[4]+'|';
                update_offnungen+=update+'|#';
                unsere_gruppen_fuer_suchmaschine = update;
            }
        }
        haupt_mp3_split_2=update_offnungen;
    //unsere_gruppen_fuer_suchmaschine=update;
    liste_gruppen_name_fur_suchmaschiene(document.getElementById('tr_haupt_gruppen_liste'));
}

function start_zutat_box(gruppenId,art,woher)//zbox  art= ,'zutat'/,'speise'
{
    //ladet.....
    //strecke+='start_zutat_box(gruppenId:'+gruppenId+',art:'+art+',woher:'+woher+')@\n';
    $('#z_box').remove()
    var d = zero('div',0,(screen.width * 0.41),(screen.height * 0.35),0,document.getElementById('matt_flach'));
    var id_text = zero('div', 0, 0, 0, 0, d);
    $(id_text).text('dcu');
    d.id='z_box';
    $(d).css('zIndex','250');
    close_me_knopf(d);$(d).draggable();
    $(d).css('position','absolute');$(d).css('background-color', 'royalblue');$(d).css('top','3%');$(d).css('right','3%');
    var d = zero('div',0,0,0,0,d);

    
    
    zutat_quelle(art,gruppenId,'start_zutat_box');
    
    var z_bibliotek_eingang = zero('textarea', 0, 0, 0, 0, d);//mki
    
    $(z_bibliotek_eingang).width((screen.width * 0.39));
    $(z_bibliotek_eingang).height((screen.height * 0.25));
    var split = zero('input', 0, 0, 0, 0, d);//mki
    split.size = 5;
    $(split).val(';');
    var knopf = document.createElement('input');
    knopf.type = 'button';
    knopf.value = 'INSERT 2862';
    d.appendChild(knopf);
    knopf.onclick = function(){//chah
        if($(z_bibliotek_eingang).val()=='')
        {
            alert('tragen Sie erst was rein');
        }
        else if(optionsgruppe==0)
        {
            alert('bitte waehlen Sie eine Gruppe');
        }
        else
        {
            if(art=='speise')
            {
                //alert(art+'vor');
                zutat_bibliotek_insertor(gruppenId,$(z_bibliotek_eingang).val(),$(split).val(),art,'start_zutat_box');
                //alert(art+'nach');
            }
            if(art=='zutat')
            {
                //alert('was ist los'+art);
                zutat_bibliotek_insertor(teck_gruppen_id,$(z_bibliotek_eingang).val(),$(split).val(),art,'start_zutat_box');
                zutat_bibliothek();
            }
            $(z_bibliotek_eingang).val('');
        }
    }
    var OptionBilder = document.createElement('input');
    OptionBilder.type = 'button';
    OptionBilder.value = 'OptionBilder 2726';
    d.appendChild(OptionBilder);
    OptionBilder.onclick = function()
    { //zob
    
        if(document.getElementById('div_OptionBilder'))
            $('#div_OptionBilder').remove();
        if(document.getElementById('zutat_liste'))
            $('#zutat_liste').remove();//zutat_preis_liste ro pak mikone
        var bereich = zero('div',0,0,(screen.height * 0.75),0,document.getElementById('matt_flach'));
            bereich.id='div_OptionBilder';
            /*css*/$(bereich).css('position','absolute');$(bereich).css('top',0 +'%');$(bereich).css('left',30 +'%');$(bereich).css('background-color', 'green');
        bereich.className = 'zwei_liste';
        bereich.style.overflow = 'auto';
        $(bereich).draggable();
        //var zutatalle = zutat_bibliotek_start(teck_gruppen_id);
        var zutatalle = $('.C829_zutat_gruppen_class'+teck_gruppen_id).text();
       
        for (var i = 0; i < zutatalle.split("@").length-1; i++) 
        {//zutat_bibliotek
            var zutat_bib_satz = zutatalle.split("@")[i];
            var z_div = zero('div',0,0,0,0,bereich);z_div.id = zutat_bib_satz;$(z_div).css('background-color', 'green');
            
            var Optionkette = zero('input', 0, 0, 0, 0, z_div);Optionkette.size = '30';
            Optionkette.id = 'option_samler'+zutatalle.split("@")[i].split("!")[1];// bekommt die ZutatId
            $(Optionkette).val(zutatalle.split("@")[i].split("!")[3]);
            
            var text = tzt(4, zutatalle.split("@")[i].split("!")[0], '#ffffff',z_div);
        }
        
        var input = document.createElement('input');input.type = 'button';input.style.color = '#336699';input.value = 'Update';
        bereich.appendChild(input);
        input.onclick = function(){
            //var alertstring='';
            for(var i = 0; i < zutatalle.split("@").length-1; i++)//format schleife
            {
                update_zutat_Optionkette(zutatalle.split("@")[i].split("!")[1],$('#option_samler'+zutatalle.split("@")[i].split("!")[1]).val());
            }
            //alert(alertstring);
            zutat_bibliothek();
            //mini_Zelle_zutatpreis = reform_it(mini_Zelle_zutatpreis);
            $('#div_OptionBilder').remove();
        }
    }//end OptionBilder.onclick
}
var scrollto=0;


function formaten_einzeln(speisensatz,td){//fzz
        //alert(speisensatz);
        var gntotal = speisensatz.split("!");
        var href_coords = gntotal[0].split("|");
        var d = td;
        var tdSpeisebild = zero('div', 0, 0, 0, 0,d);
        tdSpeisebild.className='speisenbild'; 
        
        tdSpeisebild.id=speisensatz;//ganze datensatz
        if(href_coords[6]!='picId'){
            var bolandi = (href_coords[3]*1)-(href_coords[1]*1);
            //tdSpeisebild.style.width=(screen.width * 0.19)+'px';
            scrollto =(scrollto*1)+(bolandi*1);
            var picdimension = pic_size(href_coords[6]).split("|");
            var breite_der_schnitt = (href_coords[4]*1)-(href_coords[2]*1);
            //tdSpeisebild.style.width=breite_der_schnitt+'px';
            //var weite_verhaeltnis = (screen.width * 0.19)/breite_der_schnitt;
            //tdSpeisebild.style.backgroundImage='url(gtomini.aspx?id='+href_coords[6]+'&w='+Math.round(weite_verhaeltnis*picdimension[1])+'&h='+Math.round(picdimension[0]*weite_verhaeltnis)+')';
            //tdSpeisebild.style.backgroundPosition='-'+href_coords[2]*weite_verhaeltnis+'px -'+href_coords[1]*weite_verhaeltnis+'px';
            //tdSpeisebild.style.height=bolandi*weite_verhaeltnis+'px';
            var picdimension = pic_size(href_coords[6]).split("|");
            var weite_verhaeltnis = 0.5;
            //tdSpeisebild.style.backgroundImage='url(gtomini.aspx?id='+href_coords[6]+'&w='+Math.round(weite_verhaeltnis*picdimension[1])+'&h='+Math.round(picdimension[0]*weite_verhaeltnis)+')';
            //tdSpeisebild.style.backgroundImage='url(gto.aspx?id='+href_coords[6]+')';
            //tdSpeisebild.style.backgroundPosition='-'+weite_verhaeltnis*href_coords[2]+'px -'+weite_verhaeltnis*href_coords[1]+'px';
            tdSpeisebild.style.backgroundImage='url(gtocrop.aspx?id='+href_coords[6]+
                                                       '&w='+Math.round(breite_der_schnitt)+
                                                       '&h='+Math.round(bolandi)+
                                                       '&x='+Math.round(href_coords[2])+
                                                       '&oh='+Math.round(bolandi*weite_verhaeltnis)+
                                                       '&ow='+Math.round(weite_verhaeltnis*breite_der_schnitt)+
                                                       '&y='+Math.round(href_coords[1])+')';/**/
            tdSpeisebild.style.height=weite_verhaeltnis*bolandi+'px';
            tdSpeisebild.style.width=weite_verhaeltnis*breite_der_schnitt+'px';
            
           
            tdSpeisebild.onclick = function(){
                    //xy_modus=0;// muss sein sonst bleibt bei xyModus nach fototausch
                    //$('#verbindungsdiv').remove();// leoscht mullknopf damit nicht doppelt wird
                    
                    letzte_fotosatz= fotoFinder(speisensatz);// damit bei fotolang() nach jcrop das bild bleibt
                    //alert(speisensatz);
                    exy1=speisensatz.split("|")[1];
                    exx1=speisensatz.split("|")[2];
                    exy2=speisensatz.split("|")[3];
                    exx2=speisensatz.split("|")[4];
                    speisensatz_nach_click=speisensatz;
                    alert('tdSpeisebildclick(this.id)');
                };
               
        }
        else{//waghti gruppe an ng2 insert shode wa hanuz ax nadare
            tdSpeisebild.style.height='32px';
            var icon = zero('img','bilder/a434.png','30','30','0',tdSpeisebild);//gntotal[1]
            icon.left=(screen.width * 0.22)+'px';
            icon.id=gntotal[1]+'*'+speisensatz+'*';
            icon.visible='no';
            icon.onclick = function(){click(this.id)};
            var name=tzt(2,gntotal[8], '#00000', tdSpeisebild);//(gntotal[8])
        }
        //$('.gruppenbild').toggle('slow');
}


var speise_herf_f0 = 0;
function click_knopf_kueche(speise_satz,z_div,art,woher)//art = zutat/speise
{   //alert(2);
    strecke+='click_knopf_kueche(speise_satz:'+speise_satz+',z_div:'+z_div+',art:'+art+',woher:'+woher+')@\n';
        speise_herf_f0 = speise_satz;
            
        var div_kuche = zero('div',0,0,0,0,document.getElementById('div_kuche'));
        $(div_kuche).css({'z-index':'201','width':screen.width*0.95+'px','height':(screen.height*0.85)+'px','left':'0px','top':'0px',});
        div_kuche.id='matt_flach';
        $(div_kuche).animate({'opacity': '1',"background-color":'#babae0',"border":"3px solid black",}, 1000);
        
        start_kueche(z_div,art);
}
var strecke='';var swich_menu_modus=0;var selected_g='';
function start_kueche(z_div,art)//kst  //art = zutat/speise
{
    $('#input_div_20').css({'display':'none',});
    strecke+='\n start_kueche(z_div:'+z_div+',art:'+art+')@\n';
    var div_kopf = zero('div',0,0,0,0,document.getElementById('matt_flach'));
        close_me_knopf(document.getElementById('matt_flach'));
    div_kopf.id='div_kopf';
    //titel
    $(div_kopf).css({'width': 100+'%','height': '130px',"background-color":'blue'});
    
    var menu_0_oder_speise_1_oder_gruppe2=1;
    //start art erkennung
    if(speise_herf_f0.split("!")[5]=='menue')
        menu_0_oder_speise_1_oder_gruppe2=0;
    if(art=='speise')
        menu_0_oder_speise_1_oder_gruppe2=2;
    //ende art erkennung
    if(menu_0_oder_speise_1_oder_gruppe2==1)
    {
        speise_titel(); // faghat esme ghazas
        //var div_zutat_input = zero('div',0,0,0,0,document.getElementById('matt_flach'));
        //$(div_zutat_input).css({'position':'absolute','right':'7px','top':'100px','width':'320px',});
        //zutat_gts_modern(div_zutat_input);
        
        speisen_zutat_431();
        zutat_bibliothek();
        zutzt_einschalten_kopf();//
        zutat_quelle_angebot('',art,gruppen_id_nach_click,'start_kueche');
        ok_knopf_kueche(0,40,40,0,z_div);
        zusatzt_eintrag();  //zusatzt_eintrag un zire nimpaz usw. eintragung
        ABC('zutat',gruppen_id_nach_click);
    }
    if(menu_0_oder_speise_1_oder_gruppe2==0)//menu insert
    {
        speise_titel();
        var table_icons=zero('table',0,0,0,0,document.getElementById('matt_flach'));var body3210=zero('tbody',0,0,0,0,table_icons);var tr_3210=zero('tr',0,0,0,0,body3210);
        $(table_icons).css({'right':3+'px','top':'3px','position':'absolute'});
        
        var td_flex=zero('td',0,0,0,0,tr_3210);
        var icon_show_bestand = k_m_f('3370','3197 Bestand Zeigen',td_flex,'',10,'on',(speise4-8),speise2);icon_show_bestand.onclick = function(){menu_bestand_anschauen();}
        var icon_update_bestand = k_m_f('3370','Bestand update',td_flex,'',10,'on',(speise4-8),speise2);icon_update_bestand.onclick = function(){menu_bestand_anschauen_liste();}
        var icon_show_liste = k_m_f('3373','Listen Maske',td_flex,'',10,'on',(speise4-8),speise2);icon_show_liste.onclick = function(){menu_bibliothek_old();swich_menu_modus=1;}
        var icon_show_all_liste = k_m_f('3385','Listen Maske Alle',td_flex,'',10,'on',(speise4-8),speise2);icon_show_all_liste.onclick = function(){menu_bibliothek_old();swich_menu_modus=1;}
        var icon_show_karte = k_m_f('3377','Karten Maske',td_flex,'',10,'on',(speise4-8),speise2);icon_show_karte.onclick = function(){menu_bibliothek();swich_menu_modus=0;}
        var icon_show_all_karte = k_m_f('3383','Karten Maske Alle',td_flex,'',10,'on',(speise4-8),speise2);icon_show_all_karte.onclick = function(){selected_g = '';menu_bibliothek();swich_menu_modus=0;}
        menu_heshmat();
        //kstm
        ok_knopf_kueche(0,40,40,0,z_div);//(left,width,height,top,z_div)
        zusatzt_eintrag();
        menu_bestand_anschauen();
        menu_bibliothek();
        lade_classen('start_kueche 3193');
    }
    if(menu_0_oder_speise_1_oder_gruppe2==2)//speise insert
    {
        var gruppen_identiti = speise_herf_f0;
        speis_haupt_bibliothek_kopf(gruppen_identiti);
        close_me_knopf(document.getElementById('matt_flach'));
        var information = zero('div',0,0,0,0,document.getElementById('matt_flach'));$(information).text(3375);$(information).css({"position": "absolute",'top':'40px'});
        zutat_quelle_angebot('',art,gruppen_identiti,'start_kueche');
        ABC('speise',gruppen_identiti);
    }
}//kst e

function close_me_knopf(element)//kok
{
        $(element).css({"position": "relativ"});
        var d = zero('div',0,0,0,0,element);
        $(d).css({"position": "absolute"});
        $(d).css({'right' : '45px' , 'top' : '5px'});
        var zutztpic = zero('img','Bilder/delete.png', 40, 40, 0, d);
        $(zutztpic).css({"position": "fixed"});
        
        zutztpic.onmousedown=function()
        {
            $(element).remove();
            
        }    
}

function menu_heshmat()//
{
    var d = zero('div',0,0,0,0,document.getElementById('div_kopf'));
    $(d).css({'position':'absolute','width':'200','height':'85%','overflow':'auto','top':'60px','left':'10px',});
    d.id = 'heshmatleiste';
    
        var Optionkette = zero('input', 0, 0, 0, 0, d);
                Optionkette.size = '20';
                Optionkette.id = 'Optionkette';
                
    //for (var i = 0; i < mini_Zelle_gruppen.split('@').length-1; i++) //gruppen for
    //{
    for (var i = 0; i < $('.mini_Zelle_gruppen').length; i++)
    {
                var my_value= $('.mini_Zelle_gruppen')[i];
                my_value=$(my_value).text();
        var gruppen_navi = zero('div', 0, 0, 0, 0, d);
        gruppen_navi.id='menu-'+my_value.split('!')[1];
        $(gruppen_navi).text(my_value.split('!')[0].split('|')[0]);
        gruppen_navi.className='class_navi';
        $(gruppen_navi).click(function() 
        {
            selected_g = this.id.split('-')[1];
            if(swich_menu_modus==1)
            {
                menu_bibliothek_old();
            }
            else
            {
                menu_bibliothek(); 
            }
        });
    }
}

function menu_bibliothek()//// bufe5
{
    $('#div_OptionBilder').remove();
    //start flaeche
    var fdivmitte = zero('div', 0, 0, 0, 0,document.getElementById("matt_flach"));
    $(fdivmitte).css({'height':85+'%','overflow':'auto','top':60+'px','right':10+'px','position':'fixed','color':'#'+ titel2,"width": 55+ "%","background-color":'#'+mini_design_Unico_bGColor.split("!")[0],});
    fdivmitte.id='div_OptionBilder';
    
    var table=zero('table',0,0,0,0,fdivmitte);$(table).css({"width": '96%',});
    table.id='und_weg_mit_mir';
    var body=zero('tbody',0,0,0,0,table);
    //for (var i = 0; i < mini_Zelle_gruppen.split('@').length-1; i++) //gruppen for
    
    //for (var i = 0; i < $('.mini_Zelle_gruppen').length; i++)
    //{
        //var my_value= $('.mini_Zelle_gruppen')[i];
        //my_value=$(my_value).text();
    
        //if(my_value.split('!')[1]==selected_g ){
        //for (var i = 0; i < mini_Zelle_gruppen.split('@').length-1; i++) //gruppen for
        //{
        //if(selected_g==''){
        var my_value = $('#C_mini_Zelle_gruppen'+selected_g).text();
        var tr_titel=zero('tr',0,0,0,0,body);
        var gruppen_nummer = my_value.split('!')[1];
        var td_titel=zero('td',0,0,0,0,tr_titel);
        td_titel.className='gruppen_text';
        td_titel.id=gruppen_nummer+'gotome';
        
        //start laden gruppen texte
        var gruppen_name= my_value.split('!')[0];
        var gruppen_anhang='';
        if(gruppen_name.split('|')[1]||gruppen_name.split('|')[1]!=''||gruppen_name.split('|')[1]!=null)gruppen_anhang = gruppen_name.split('|')[1];
        var gruppen_kopfzeile='';
        if(gruppen_name.split('|')[2]||gruppen_name.split('|')[2]!=''||gruppen_name.split('|')[2]!=null)gruppen_kopfzeile = gruppen_name.split('|')[2];
        var gruppen_fuss_zeile='';
        if(gruppen_name.split('|')[3]||gruppen_name.split('|')[3]!=''||gruppen_name.split('|')[3]!=null)gruppen_fuss_zeile = gruppen_name.split('|')[3];
        if(gruppen_name.split('|')[0])gruppen_name = gruppen_name.split('|')[0];
        
        //ende laden gruppen texte
        $(td_titel).text('3299 ' +gruppen_name);
        var tr_speisen=zero('tr',0,0,0,0,body);var td_speisen=zero('td',0,0,0,0,tr_titel);var table22=zero('table',0,0,0,0,tr_speisen);$(table22).css({'width':'100%','color':'#'+ titel2,});var body22=zero('tbody',0,0,0,0,table22);body22.id = 'speisen_body'+gruppen_nummer;
        //var gruppen_nummer = mini_Zelle_gruppen.split('@')[i].split('!')[1];
        //alert(gruppen_nummer);
        //start tr format titel
        var tr_for_format_titel = zero('tr',0,0,0,0,body22);tr_for_format_titel.id = 'tr_format'+gruppen_nummer;
        tr_for_format_titel.className='speise_text';var td_for_format_titel1 = zero('td',0,0,0,0,tr_for_format_titel);
        //td start fusszeile
        if(gruppen_fuss_zeile!=''){var tr_gruppen_fuss_zeile=zero('tr',0,0,0,0,body);
        var td_gruppen_fuss_zeile=zero('td',0,0,0,0,tr_gruppen_fuss_zeile);td_gruppen_fuss_zeile.className='fuss_text';
        $(td_gruppen_fuss_zeile).text(gruppen_fuss_zeile);td_gruppen_fuss_zeile.id='tdfus:'+gruppen_nummer;}
        
        // start tr abstand zwischen gruppen
    //}}//end for gruppen
    //start format 
    for (var i = 0; i <  mini_Zelle_formatid.split("@").length - 1; i++)
    //for (var i = 0; i < mini_Zelle_format_etikett.split("@").length - 1; i++)
    {
        //var gruppen_id = mini_Zelle_format_etikett.split("@")[i].split('!')[6];
        //if(gruppen_id==selected_g)
        if (selected_g == mini_Zelle_formatid.split("@")[i].split("!")[2])
        {
            var var_global = space_remover(mini_Zelle_formatid.split("@")[i].split("!")[0]);
            if (var_global != 'f0')
            {
                var td_format = zero('td',0,0,0,0,document.getElementById('tr_format'+selected_g)); 
                $(td_format).text(mini_Zelle_formatid.split("@")[i].split("!")[0]);
                td_format.className='speise_text';
                $(td_format).css({'text-align': 'center',});
            }
        }
    }
    //start speise nr
    var gerade='';
    //for (var i2 = 0; i2 < mini_Zelle_SpeiseNr.split('@').length-1; i2++)  
    //{if(mini_Zelle_SpeiseNr.split('@')[i2].split('!')[7]=='-' || mini_Zelle_SpeiseNr.split('@')[i2].split('!')[7]=='9999'){
    for (var i2 = 0; i2 < $('.C1987_speise_gruppen_class'+selected_g).length; i2++)
    {
        var my_value= $('.C1987_speise_gruppen_class'+selected_g)[i2];
        my_value=$(my_value).text();
        //if(my_value.split('!')[1]==selected_g ){
        var speise_nummer =  my_value.split('!')[0];
        var gruppen_id = my_value.split('!')[2];
        //if(gruppen_id==selected_g||selected_g=='')
        //{        
            var tr_speisen_nummer =zero('tr',0,0,0,1,document.getElementById('speisen_body'+gruppen_id)); 
            var td_speisen_nummer =zero('td',0,0,0,1,tr_speisen_nummer); 
            td_speisen_nummer.className=gerade+'speise_text';
            $(td_speisen_nummer).text(speise_nummer);
            //start preis td
            var f0_aktiv = 1;
            //for (var i = 0; i < mini_Zelle_format_etikett.split("@").length - 1; i++)
            for (var i = 0; i <  mini_Zelle_formatid.split("@").length - 1; i++)
            {
                //if(mini_Zelle_format_etikett.split("@")[i].split('!')[6]==gruppen_id)
                if (gruppen_id == mini_Zelle_formatid.split("@")[i].split("!")[2])
                {
                    var var_global = space_remover(mini_Zelle_formatid.split("@")[i].split("!")[0]);
                    if (var_global != 'f0')
                    {
                        f0_aktiv=0;
                        var td_speisen_preis =zero('td',0,0,0,0,tr_speisen_nummer); 
                        td_speisen_preis.className=gerade+'speise_text';
                        //td_speisen_preis.id = 'f'+mini_Zelle_format_etikett.split("@")[i].split('!')[2]+'s'+my_value.split('!')[1];
                        td_speisen_preis.id = 'f'+mini_Zelle_formatid.split("@")[i].split("!")[1]+'s'+my_value.split('!')[1];
                        $(td_speisen_preis).css({'text-align': 'center','font-weight':'bold',});
                        var td_invisible =zero('td',0,0,0,0,tr_speisen_nummer); 
                        td_invisible.id = 'invis-'+'f'+mini_Zelle_formatid.split("@")[i].split("!")[1]+'s'+my_value.split('!')[1];
                        $(td_invisible).hide();
                    }
                }
            }
            if(f0_aktiv==1)
            {
                for (var i = 0; i < mini_Zelle_formatid.split("@").length - 1; i++)
                {
                    if(mini_Zelle_formatid.split("@")[i].split('!')[2]==gruppen_id)
                    {
                        var id_combi = 'f'+mini_Zelle_formatid.split("@")[i].split('!')[1]+'s'+my_value.split('!')[1];
                        var td_speisen_preis =zero('td',0,0,0,0,tr_speisen_nummer); 
                        td_speisen_preis.className=gerade+'speise_text';
                        $(td_speisen_preis).css({'text-align': 'center','font-weight':'bold',});
                        var td_invisible =zero('td',0,0,0,0,tr_speisen_nummer); 
                        td_invisible.id = 'invis-'+id_combi;
                        $(td_invisible).hide();
                        td_speisen_preis.id = id_combi;
                    }
                }
            }
        //}
    }//}
    // ende speise nr
    //start preis zuteulung
    //for (var i2 = 0; i2 < $('.mini_Zelle_herfs').length; i2++)
    for (var i2 = 0; i2 < $('.C1987_href_gruppen_class'+selected_g).length; i2++)
    {
        var my_value= $('.C1987_href_gruppen_class'+selected_g)[i2];
        my_value=$(my_value).text();
        
        //var preis = my_value.split('!')[0].split('|')[4];
        var preis = my_value.split('!')[0];
        var elemet_id_erstellen = 'f'+ my_value.split('!')[3]+'s'+my_value.split('!')[2];
        if(document.getElementById(elemet_id_erstellen))
        {
            var td_nobre =zero('nobr',0,0,0,0,document.getElementById(elemet_id_erstellen));
            $(td_nobre).text( betrag_format(preis)+' €');
            $(td_nobre).css({'text-decoration':'underline',});
            if(my_value.split('!')[13]!=0)
                {$(td_nobre).text( betrag_format(preis)+' € ');
            $(td_nobre).css({'text-decoration':'line-through','font-size': '85%'});
            var td_nobre_angebot =zero('nobr',0,0,0,0,document.getElementById(elemet_id_erstellen)); 
            $(td_nobre_angebot).text('\n '+betrag_format(my_value.split('!')[13])+' €');
            $(td_nobre_angebot).css({'text-decoration':'underline',});}    
            //icon
            var icon_add_list = k_m_f(my_value.split('!')[1]+'-'+my_value.split('!')[7],'Add 3359 ',td_nobre,'',6,'on',(speise4-8),speise2);
            $(icon_add_list).click(function() {
                if($('#Optionkette').val()=='')
                {
                    alert('Tragen erst Sie einen Titel ein');
                    $('#Optionkette').focus();
                    $('#Optionkette').select();
                    $('#Optionkette').css({'background-color':'red'});
                }
                else
                {
                    var option_nummer = $('#Optionkette').val();
                    menu_speisen_erzeugen(speise_herf_f0.split("!")[1], this.id.split('-')[0]+'|'+option_nummer+'|'+0+'|'+ 1+'|',this.id.split('-')[1]);
                    $(this).css("background-color","green");
                    
                }
            });
        }
        $('#invis-'+elemet_id_erstellen).text(my_value);
    }
    //ende preis zuteulung
    lade_classen('menu bibliothek 3484');
}


function menu_bestand_anschauen_liste()//// 
{
    if(document.getElementById('div_OptionBilder'))$('#div_OptionBilder').remove();
    var bereich = zero('div',0,0,(screen.height * 0.65),0,document.getElementById('matt_flach'));bereich.id='div_OptionBilder';
    $(bereich).css({'position':'absolute','top':130 +'px','left':220 +'px','background-color': 'green'});
    $(bereich).text('3517');
    bereich.className = 'zwei_liste';bereich.style.overflow = 'auto';
    
    var menu_speisen_information = speise_herf_f0.split("!")[6];
    /*start der Reinigung von nichtmehr beteiligten Speisen*/var gereinigt='';for (var i2 = 0; i2 < menu_speisen_information.split("~").length - 1; i2++){if(menu_speisen_information.split("~")[i2].split("|")[1]!='0')gereinigt+=menu_speisen_information.split("~")[i2]+'~';}menu_speisen_information = gereinigt;
        var d = zero('div',0,0,0,0,bereich);var table3=zero('table',0,0,0,0,d);var body3=zero('tbody',0,0,0,0,table3);
    for (var i2 = 0; i2 < menu_speisen_information.split("~").length - 1; i2++)
    {
        var herf_id_f0 = menu_speisen_information.split("~")[i2].split("|")[0];//herf_id|kettenNummer|default|~
        var value_OptionNummer = menu_speisen_information.split("~")[i2].split("|")[1] ;
        var value_default_1 = menu_speisen_information.split("~")[i2].split("|")[2]; 
        var value_anzahl = menu_speisen_information.split("~")[i2].split("|")[3];
        if(value_anzahl==0)value_anzahl=1;
        var tr3=zero('tr',0,0,0,0,body3);
        //namen td
        var href_3895_satz_3895_in_3895_speise= herf_8918_satz_8918_finder(herf_id_f0.split("!")[0]);
        var td_3902_Name_speise_in_menu=zero('td',0,0,0,0,tr3);$(td_3902_Name_speise_in_menu).text(href_3895_satz_3895_in_3895_speise.split("|")[5]);
        //format td
        var td_3902_Name_speise_format_in_menu=zero('td',0,0,0,0,tr3);if(href_3895_satz_3895_in_3895_speise.split("!")[8]!='f0')
        $(td_3902_Name_speise_format_in_menu).text(href_3895_satz_3895_in_3895_speise.split("!")[8]);
        
        //start input optionNummer
        var td_beschreibung=zero('td',0,0,0,0,tr3);$(td_beschreibung).text('Titel:');var td_zutat=zero('td',0,0,0,0,tr3);var Optionkette = zero('input', 0, 0, 0, 0, td_zutat);Optionkette.size = '30';Optionkette.id = 'Optionkette'+herf_id_f0;
        $(Optionkette).val(value_OptionNummer);if(value_OptionNummer!=0)$(Optionkette).css("background-color","yellow");
        //ende input optionNummer
        var td_beschreibung2=zero('td',0,0,0,0,tr3);$(td_beschreibung2).text('default = 1');var td_default=zero('td',0,0,0,0,tr3);
        var default_input = zero('input', 0, 0, 0, 0, td_default);default_input.size = '10';default_input.id = 'default_input'+herf_id_f0;if(value_default_1==1)$(default_input).css("background-color","red");$(default_input).val(value_default_1);
        //anzahl
        var td_anzahl=zero('td',0,0,0,0,tr3);$(td_anzahl).text('Anzahl:');var td_anzahl_input=zero('td',0,0,0,0,tr3);var anzahl_input = zero('input', 0, 0, 0, 0, td_anzahl_input);anzahl_input.size = '5';anzahl_input.id = 'anzahl_input'+herf_id_f0;$(anzahl_input).val(value_anzahl);
        //update icon
        var td_input_update=zero('td',0,0,0,0,tr3);var input = document.createElement('input');
        input.type = 'button';input.style.color = '#336699';input.value = 'Update 3545';
        input.id = herf_id_f0+'-'+href_3895_satz_3895_in_3895_speise.split("!")[7];
        td_input_update.appendChild(input);
        input.onclick = function()
        {
            $(this).css("background-color","red");
            this.value='clicked';
            menu_speisen_erzeugen(speise_herf_f0.split("!")[1],this.id.split('-')[0]+/*speise id*/'|'+$('#Optionkette'+this.id.split('-')[0]).val()+'|'+$('#default_input'+this.id.split('-')[0]).val()+'|'+$('#anzahl_input'+this.id.split('-')[0]).val()+'|',this.id.split('-')[1]);
        }
    }
          
}

function menu_speisen_erzeugen(herfId,update,gruppenId)
{
    //alert(herfId+'-'+update+'-'+gruppenId)
    //6641895-6641599|ddd|0|1|-33843
    //6641895-6641601|ddd|0|1|-33843
    var speise_in_menu_href_id = update.split("|")[0];
    var kreis_nummer = update.split("|")[1];
    var default_number = update.split("|")[2];
    //var anzahl_speise = update.split("|")[3];
    //var vater_menu_herf_id_macht_auch_unvisible=herfId;
    //speise info
    var herf_satz = herf_8918_satz_8918_finder(speise_in_menu_href_id);
    //var speise_preis = herf_satz.split('|')[4];
    //var speise_name = herf_satz.split('|')[5];
    var speiseee_idd = $('#C_mini_Zelle_herfs'+speise_in_menu_href_id).text().split('!')[2];
    var speise_name  = $('#C_mini_Zelle_SpeiseNr'+speiseee_idd).text().split('!')[0];
    //var speise_id_zwillinge = herf_satz.split('!')[2];
    //var format_id = herf_satz.split('!')[3];
    var format_name = herf_satz.split('!')[8];
    if(format_name=='f0')format_name='';
    //var zwillingsherf = speise_in_menu_href_id;
    
    //var speiise_kaarten_nuumer = herf_satz.split('!')[0].split('|')[6];
    //var privat_href_Id = speisen_3661_insert_for_menu( gruppenId , format_name , format_id , 'speise', speise_name, speiise_kaarten_nuumer,vater_menu_herf_id_macht_auch_unvisible , speise_preis , zwillingsherf,speise_id_zwillinge);
    
    
    //var new_update = privat_href_Id +'|'+ kreis_nummer +'|'+ default_number +'|'+ anzahl_speise +'|';
    var atribut_6_bis_jetzt = herf_8918_satz_8918_finder(herfId).split('!')[6];
    //alert('atribut_6_bis_jetzt \n start-'+atribut_6_bis_jetzt+'-ende');
    var atribut_6_bis_jetzt_gefiltert='';
    //start filter SWG
    if(atribut_6_bis_jetzt!=' ' && atribut_6_bis_jetzt!='0')
    {
        atribut_6_bis_jetzt_gefiltert=atribut_6_bis_jetzt;
    }
    var new_update = atribut_6_bis_jetzt_gefiltert + speise_in_menu_href_id +'|'+ kreis_nummer +'|'+ default_number +'|'+speise_name+' '+ format_name +'|~';
                   //126229770        |oo                |                   0|                  1|
    update_href_modern(herfId,6,new_update);
    menu_bestand_anschauen();
}
function menu_bestand_anschauen()//bufe4
{
    $('#bestand').remove();
    
    var menu_speisen_information = $('#C_mini_Zelle_herfs'+speise_herf_f0.split("!")[1]).text().split('!')[6];
    var bereich = zero('div',0,0,0,0,document.getElementById('div_kopf'));$(bereich).text('3441');
    bereich.id='bestand';
    $(bereich).css({'position':'absolute','left': '220px','height':85+'%','overflow':'auto','top':60+'px','background-color': 'green',"width": '320px',});
    var table=zero('table',0,0,0,0,bereich);var body=zero('tbody',0,0,0,0,table);$(table).css({"width": '95%',});
    /*start der Reinigung von nichtmehr beteiligten Speisen und ketten tr erzeugnisse*/
   /**/
    var gereinigt='';
    for (var i2 = 0; i2 < menu_speisen_information.split("~").length - 1; i2++)
    {
        //alert(menu_speisen_information.split("~")[i2]);
        if(menu_speisen_information.split("~")[i2].split("|")[1]!='0')
            gereinigt+=menu_speisen_information.split("~")[i2]+'~';
            
        var value_OptionNummer = menu_speisen_information.split("~")[i2].split("|")[1];
        if(!document.getElementById('trtitel'+value_OptionNummer) && value_OptionNummer!='0')
        {   var trtitel=zero('tr',0,0,0,0,body);
            trtitel.id = 'trtitel'+value_OptionNummer;
            var titel_td_in_menu = zero('td',0,0,0,0,trtitel);
            titel_td_in_menu.id='ttle-'+value_OptionNummer;
            $(titel_td_in_menu).text(value_OptionNummer);
            $(titel_td_in_menu).css({'cursor':'pointer','padding':'2px','background-color': 'yellow','font-size': '110%','border-radius': '4px','text-align': 'center','font-weight':'bold',});
            $(titel_td_in_menu).click(function() {
                $('#Optionkette').val(this.id.split('-')[1]);
                $('#Optionkette').css({'background-color': 'yellow',});
            });
            var td_speisen0=zero('td',0,0,0,0,trtitel);
            td_speisen0.id='td_speisen'+value_OptionNummer;
        }
    };
    menu_speisen_information = gereinigt;
    //alert(gereinigt);
   
    
    for (var i2 = 0; i2 < menu_speisen_information.split("~").length - 1; i2++)
    {
        //alert(menu_speisen_information.split("~")[i2]);// 6596492|dd|0|249. kleiner Salat |
        
        var herf_id_f0 = menu_speisen_information.split("~")[i2].split("|")[0];//herf_id|kettenNummer|default|~
        herf_id_f0=herf_id_f0*1;//leerzeichen reiniger
        var value_OptionNummer = menu_speisen_information.split("~")[i2].split("|")[1] ;
        var value_default_1 = menu_speisen_information.split("~")[i2].split("|")[2]; 
        var speiseee_idd = $('#C_mini_Zelle_herfs'+herf_id_f0).text().split('!')[2];
        var speise_nammme  = $('#C_mini_Zelle_SpeiseNr'+speiseee_idd).text().split('!')[0];
        
        //namen td
        var href_3895_satz_3895_in_3895_speise= herf_8918_satz_8918_finder(herf_id_f0,1);//nafas
        //format td
        var format_name ='';
        if(href_3895_satz_3895_in_3895_speise.split("!")[8]!='f0')format_name = '( '+href_3895_satz_3895_in_3895_speise.split("!")[8]+' )';
        
        var td_speisen = document.getElementById('td_speisen'+value_OptionNummer);var table3476=zero('table',0,0,0,0,td_speisen);
        var body3476=zero('tbody',0,0,0,0,table3476);var tr_rest3476=zero('tr',0,0,0,0,body3476);

        var sp_td_in_menu = zero('td',0,0,0,0,tr_rest3476);
        $(sp_td_in_menu).css({'background-color': 'white',})
        sp_td_in_menu.id='sp_td_in_menu';
        var sp_div = zero('div',0,0,0,1,sp_td_in_menu);$(sp_div).css({'font-size': '80%','padding':'5px','font-weight':'bold','width':'130px'});
        sp_div.id = herf_id_f0;
        
        $(sp_div).text(speise_nammme+ format_name);
        
        if(value_default_1=='1'){$(sp_td_in_menu).css({'background-color': 'red','color': 'white',});}
        
        var div_delet = zero('div',0,0,0,0,tr_rest3476);
        var icon_delet = k_m_f(herf_id_f0+'¬'+value_OptionNummer,'löschen',div_delet,'',4,'on',(speise4-9),speise2);
        icon_delet.onmousedown=function(){
            dell_speise_von_menu(this.id);
            menu_bestand_anschauen();
        }
        var div_default = zero('div',0,0,0,0,tr_rest3476);
        var icon_show_all_karte = k_m_f(herf_id_f0+'¬'+value_OptionNummer,'3785 default',div_default,'',4,'on',(speise4-6),speise2);
        icon_show_all_karte.onclick = function()
        {
            menu_speise_default_setzer(this.id);
            menu_bestand_anschauen();
        }
        var td_abstand = zero('td',0,7,0,0,tr_rest3476);
    }
}
function dell_speise_von_menu(herf_in_menu)
{
    var update='';
    var menu_speisen_information = $('#C_mini_Zelle_herfs'+speise_herf_f0.split("!")[1]).text().split('!')[6];
    for (var i2 = 0; i2 < menu_speisen_information.split("~").length - 1; i2++)
    {
        if(menu_speisen_information.split("~")[i2].split("|")[0]+'¬'+menu_speisen_information.split("~")[i2].split("|")[1]!=herf_in_menu)
            update+=menu_speisen_information.split("~")[i2]+'~';
    }
    update_href_modern(speise_herf_f0.split("!")[1],6,update);
}
function menu_speise_default_setzer(herf_in_menu)
{
    var menu_speisen_information = $('#C_mini_Zelle_herfs'+speise_herf_f0.split("!")[1]).text().split('!')[6];
    var update='';
    //var default_ist_nimpaz=0;
    for (var i2 = 0; i2 < menu_speisen_information.split("~").length-1; i2++)
    {
        var sp_satz = menu_speisen_information.split("~")[i2];
        var sp_t1 = sp_satz;
                //default         &&           //in gleicher Gruppe                   &&                     //khodesh nist
        if(sp_t1.split("|")[2]==1 && sp_t1.split("|")[1] == herf_in_menu.split("¬")[1]&& sp_t1.split("|")[0]+'¬'+sp_t1.split("|")[1] != herf_in_menu)
        {//alte default weg
            update+= sp_t1.split("|")[0]+'|';
            update+= sp_t1.split("|")[1]+'|';
            update+= '0|';
            update+= sp_t1.split("|")[3]+'|';
            update+='~';
            //alert('(weg) '+menu_speisen_information.split("~")[i2] +'\n'+herf_in_menu);
        }
        if(sp_t1.split("|")[0]+'¬'+sp_t1.split("|")[1] == herf_in_menu)
        {//default setzer
            update+= sp_t1.split("|")[0]+'|';
            update+= sp_t1.split("|")[1]+'|';
            update+= '1|';
            update+= sp_t1.split("|")[3]+'|';
            update+='~';
            //alert('(add) '+menu_speisen_information.split("~")[i2]);
        }
        else{//nichts tun
            update+=menu_speisen_information.split("~")[i2]+'~';
            //alert('(rest) '+menu_speisen_information.split("~")[i2]);
        }
    }
    update_href_modern(speise_herf_f0.split("!")[1],6,update);
}

function dell_speise_von_menu_alt(herf_in_menu)
{
    var update='';
    var menu_speisen_information = speise_herf_f0.split("!")[6];
    for (var i2 = 0; i2 < menu_speisen_information.split("~").length - 1; i2++)
    {
        if('del'+menu_speisen_information.split("~")[i2].split("|")[0]!=herf_in_menu)
        {
            update+=menu_speisen_information.split("~")[i2]+'~';
        }
    }
    update_href_modern(speise_herf_f0.split("!")[1],6,update);
}



function menu_bibliothek_old()//// bufe3
{//alt start hier
alert('433 die angaben sind evt nicht korrekt weil href-ajax technologie nicht benutzt werden. war mir zu wenig zeit');
    if(document.getElementById('div_OptionBilder'))$('#div_OptionBilder').remove();
    var bereich = zero('div',0,0,(screen.height * 0.65),0,document.getElementById('matt_flach'));
    bereich.id='div_OptionBilder';
    $(bereich).text('3560');
    $(bereich).css({'position':'absolute','top':80 +'px','left':220 +'px','background-color': 'green'});
    bereich.className = 'zwei_liste';bereich.style.overflow = 'auto';
    
    var menu_speisen_information = speise_herf_f0.split("!")[6];
    var d = zero('div',0,0,0,0,bereich);
    var table3=zero('table',0,0,0,0,d);var body3=zero('tbody',0,0,0,0,table3);
    for (var i2 = 0; i2 < mini_Zelle_herfs.split('@').length-1; i2++)
    {if(mini_Zelle_herfs.split("@")[i2].split("!")[7]==selected_g || selected_g==''){//menu_bibliothek_old
        var herf_id_f0 = mini_Zelle_herfs.split("@")[i2].split("!")[1];//menu_bibliothek_old
        var value_OptionNummer = 00 ;
        var value_default_1 = 00 ; 
        var value_anzahl = 1 ; 
        //href 6 ro dor mizane va OptionNummer und default_1 peyda mikone
        for (var i3 = 0; i3 < menu_speisen_information.split("~").length-1; i3++) {if(menu_speisen_information.split("~")[i3].split("|")[0]==herf_id_f0){value_OptionNummer = menu_speisen_information.split("~")[i3].split("|")[1];value_default_1 = menu_speisen_information.split("~")[i3].split("|")[2];value_anzahl = menu_speisen_information.split("~")[i3].split("|")[3];if(value_anzahl=='0')value_anzahl=1;}}
        
        var href_3895_satz_3895_in_3895_speise= herf_8918_satz_8918_finder(herf_id_f0.split("!")[0]);
        var menu_3579_speise_3579_id=href_3895_satz_3895_in_3895_speise.split("!")[2];
        $('#tr_black'+menu_3579_speise_3579_id).remove();
        
        var tr3=zero('tr',0,0,0,0,body3);
        /*zum loeschen von f0 gedacht*/tr3.id='fo'+href_3895_satz_3895_in_3895_speise.split("!")[8]+'sp'+menu_3579_speise_3579_id;
        //format td
        var td_3902_Name_speise_format_in_menu_o=zero('td',0,0,0,0,tr3);var td_3902_Name_speise_format_in_menu =zero('nobr',0,0,0,0,td_3902_Name_speise_format_in_menu_o);
        if(href_3895_satz_3895_in_3895_speise.split("!")[8]!='f0')
        {
            $('#fof0sp'+menu_3579_speise_3579_id).remove();
            $(td_3902_Name_speise_format_in_menu).text(href_3895_satz_3895_in_3895_speise.split("!")[8]);
            $(td_3902_Name_speise_format_in_menu).css({'color':'yellow',});
        }
        //namen td
        var td_3902_Name_speise_in_menu=zero('td',0,0,0,0,tr3);$(td_3902_Name_speise_in_menu).text(href_3895_satz_3895_in_3895_speise.split("|")[5]);$(td_3902_Name_speise_in_menu).css({'color':'#ffffff',});
        
        //start input optionNummer
        var td_beschreibung=zero('td',0,0,0,0,tr3);$(td_beschreibung).text('Titel:');
        var td_zutat=zero('td',0,0,0,0,tr3);var Optionkette = zero('input', 0, 0, 0, 0, td_zutat);Optionkette.size = '30';Optionkette.id = 'Optionkette'+herf_id_f0;if(value_OptionNummer!=0)$(Optionkette).css("background-color","yellow");$(Optionkette).val(value_OptionNummer);
        //ende input optionNummer
        //start input default_1
        var td_beschreibung2=zero('td',0,0,0,0,tr3);$(td_beschreibung2).text('default_1:');
        var td_default=zero('td',0,0,0,0,tr3);var default_input = zero('input', 0, 0, 0, 0, td_default);default_input.size = '5';default_input.id = 'default_input'+herf_id_f0;
        if(value_default_1==1)$(default_input).css("background-color","red");$(default_input).val(value_default_1);
        //anzahl
        var td_anzahl=zero('td',0,0,0,0,tr3);$(td_anzahl).text('Anzahl:');
        var td_anzahl_input=zero('td',0,0,0,0,tr3);
        var anzahl_input = zero('input', 0, 0, 0, 0, td_anzahl_input);
        anzahl_input.size = '5';anzahl_input.id = 'anzahl_input'+herf_id_f0;$(anzahl_input).val(value_anzahl);
        if(value_anzahl>=2)$(anzahl_input).css("background-color","blue");
        
        //icon update
        var td_input_update=zero('td',0,0,0,0,tr3);var input = document.createElement('input');input.type = 'button';input.style.color = '#336699';input.value = 'Update';td_input_update.appendChild(input);
        input.id = herf_id_f0+'-'+mini_Zelle_herfs.split("@")[i2].split("!")[7];//menu_bibliothek_old
        input.onclick = function()
        {
            $(this).css("background-color","red");
            this.value='clicked';
            menu_speisen_erzeugen(speise_herf_f0.split("!")[1],this.id.split('-')[0]+'|'+$('#Optionkette'+this.id.split('-')[0]).val()+'|'+$('#default_input'+this.id.split('-')[0]).val()+'|'+$('#anzahl_input'+this.id.split('-')[0]).val()+'|',this.id.split('-')[1]);
        }
        var tr_black=zero('tr',0,0,5,0,body3);tr_black.id='tr_black'+menu_3579_speise_3579_id; var td_black=zero('td',0,0,0,0,tr_black);td_black.colSpan='10';$(td_black).css("background-color","black");
        var tr_black2=zero('tr',0,0,4,0,body3);var td_black2=zero('td',0,0,0,0,tr_black2);td_black2.colSpan='10';$(td_black2).css("background-color","black");
        
    }}  
}

function lade_classen(woher)//(); shekl
{
                    
                    $('.gruppen_text').css({'font-family':'#'+ titel1,
                                            'color':'#'+ titel2,
                                            "font-size": (titel4-2)+ "px",
                                            "background-color":'#'+titel5,
                                            'text-align':'center',
                                            'padding-left':'15px',
                                            'padding-right':'15px',
                                            'padding-top':'5px',
                                            'padding-bottom':'5px',
                                            'border-top-right-radius': '4px',
                                            'border-top-left-radius': '6px',
                                            'font-weight':'bold',
                                            "width": '100%',
                                            
                                          });
                   
                    
                    $('.Anhang_text').css({
                                            'font-family':'#'+ anhang1,
                                            'text-align':'center',
                                            'color':'#'+ anhang2,
                                            "font-size": (2-anhang4)+ "px",
                                            'background-color':'#'+ anhang5,
                                            'padding-left':'15px',
                                            'padding-right':'15px',
                                            'padding-top':'5px',
                                            'padding-bottom':'5px',
                                            //'border-radius': '4px',
                                            });
                    


                    $('.kopf_text').css({'font-family':'#'+ kopf1,
                                         'color':'#'+ kopf2,
                                         "font-size": kopf4+ "px",
                                         'background-color':'#'+ kopf5,
                                         'padding-left':'15px',
                                         'padding-right':'15px',
                                         'padding-top':'5px',
                                         'padding-bottom':'5px',
                                         //'border-radius': '4px',
                                        });
                   



                    $('.fuss_text').css({'font-family':'#'+ fus1,
                                         //'color':'#'+ fus2,
                                         "font-size": fus4+ "px",
                                         'background-color':'#'+ fus5,
                                         'padding-left':'15px',
                                         'padding-right':'15px',
                                         'padding-top':'5px',
                                         'padding-bottom':'5px',
                                         //'border-radius': '4px',
                                         
                                        });
                    
                    //.......................................................SPEISE
                    $('.speise_text').css({'font-family':'#'+ speise1,
                                           //'color':'#'+ speise2,
                                           "font-size": (2-speise4)+ "px",
                                           //'background-color':'#'+ speise5,
                                           'padding-left':'15px',
                                           'padding-right':'15px',
                                           'padding-top':'5px',
                                           'padding-bottom':'5px',
                                           //'border-radius': '4px',
                                           'font-weight':'bold',
                                          });//font famili


                    
                     $('.geradespeise_text').css({'font-family':'#'+ speise1,
                                           'color':'#'+ speise2,
                                           "font-size": speise4+ "px",
                                           'background-color':'#'+ speise6,
                                           'padding-left':'15px',
                                           'padding-right':'15px',
                                           'padding-top':'5px',
                                           'padding-bottom':'5px',
                                           //'border-radius': '4px',
                                           'font-weight':'bold',
                                          });//font famili
                     $('.geradespeise_text').hover(function(){ 
                       $(this).css({'color':'#'+ speise3,});// font hover
                    }, function () {
                        $(this).css("color","#"+speise2);
                    });
                    //$('.speise_text').hover(function(){ 
                       //$(this).css({'background-color':'#'+ speise6,});
                    //}, function () {
                        //$(this).css("background-color","#"+speise5);
                    //});



                    $('.zutat_text').css({'font-family':'#'+ zutat1,
                                          "font-size": zutat4+ "px",
                                          //'color':'#'+ zutat2,
                                          //'background-color':'#'+ zutat5,
                                          'padding-left':'3px',
                                          'padding-right':'3px',
                                        });
                    
                    /*
                    $('.zutat_text').hover(function(){ 
                       $(this).css({'background-color':'#'+ zutat6,});
                    }, function () {
                        $(this).css("background-color","#"+zutat5);
                    });
                    */


                    $('.class_navi').hover(function(){ 
                       $(this).css({'color':'#'+ navi3,});
                    }, function () {
                        $(this).css("color","#"+navi2);
                    });
                    $('.class_navi').hover(function(){ 
                       $(this).css({'background-color':'#'+ navi6,});
                    }, function () {
                        $(this).css("background-color","#"+navi5);
                    });
                    $('.class_navi').css({'margin-bottom':'1%',
                                          'cursor': 'pointer',
                                          'text-align': 'center',
                                          'border-radius': 5+'px',
                                          "font-size": navi4+ "px",
                                          'background-color':'#'+ navi5,
                                          'color':'#'+ navi2,
                                          'font-family':'#'+ navi1,
                                          'padding-left':'15px',
                                           'padding-right':'15px',
                                           'padding-top':'5px',
                                           'padding-bottom':'5px',
                                           'border-radius': '4px',
                                           'font-weight':'bold',
                                          });
                
}//ende load class
    function hide_it(art,sd)
    {
        //performanz update
       // var u='';var p='';
      //  for (var i = 0; i < mini_Zelle_SpeiseNr.split("@").length - 1; i++)
      //  {
          //  if(mini_Zelle_SpeiseNr.split("@")[i].split("!")[1]==sd)
           // {
           //     u+=mini_Zelle_SpeiseNr.split("@")[i].split('!')[0]+'!';
           //     u+=mini_Zelle_SpeiseNr.split("@")[i].split('!')[1]+'!';
           //     u+=mini_Zelle_SpeiseNr.split("@")[i].split('!')[2]+'!';
           //     u+=mini_Zelle_SpeiseNr.split("@")[i].split('!')[3]+'!';
           //     u+=mini_Zelle_SpeiseNr.split("@")[i].split('!')[4]+'!';
          //      u+=mini_Zelle_SpeiseNr.split("@")[i].split('!')[5]+'!';
           //     u+=mini_Zelle_SpeiseNr.split("@")[i].split('!')[6]+'!';
          //      u+=art+'!';
          //      u+=mini_Zelle_SpeiseNr.split("@")[i].split('!')[8]+'!';
           //     u += '@';
                
         //   }
         //   else
//{
         //       u += mini_Zelle_SpeiseNr.split("@")[i]+'@';
        //    }
        //}
        //mini_Zelle_SpeiseNr=u;
        update_speise_modern(sd,7,art);
        //speise_liste('preis');
    }
function td_bild(tr3,speisensatz,click_aktiv_ist_1)//kok
{
    var href_coords = speisensatz.split("!")[0].split("|");
    var tdSpeisebild_2=zero('td',0,0,0,0,tr3);
    var tdSpeisebild=zero('img',0,0,0,0,tdSpeisebild_2);
    tdSpeisebild.className='speisenbild'; 
    tdSpeisebild.id=speisensatz.split("!")[1];//ganze datensatz
    tdSpeisebild_2.style.height='32px';
    
    var name=tzt(4,href_coords[6], '#00000', tdSpeisebild_2);
    var td_2=zero('td',0,0,0,0,tr3);$(td_2).text(href_coords[7]);
    td_2.className='speisenbild'; 
    td_2.style.height='32px';
}
function ok_knopf_kueche(left,width,height,top,z_div)//kok
{
    var div_close = zero('div',0,0,0,0,document.getElementById('div_kopf'));
    $(div_close).css('position','absolute');
    div_close.style.left=left+'%';
    div_close.style.width=width+'px';
    div_close.style.height=height+'px';
    div_close.style.top=top+'%';
    var weg = zero('img','Bilder/ok.png',width,height,'0',div_close);//
    $(weg).css('cursor', 'pointer');//maus ro hand mikone
    weg.className='divecke';
    weg.onclick = function(){//kuche weg click kwc
        zutat_stufen_eintrag_modus_0_normal = 0;
        document.getElementById('matt_flach').style.visibility='hidden';
$('#matt_flach').effect('transfer', { to: $('#xymodus') }, 500).queue(function() {
            $(document.getElementById('matt_flach')).remove();
            open_speise_zutaten(speise_herf_f0,z_div);
        });
        
        $('#div_OptionBilder').remove();
        element_filter_technologie();
        $('#bring_me_up'+speise_herf_f0.split('!')[2]).css({'background-color': 'blue','cursor': 'pointer',});
        
    }
}//zusatzt_eintrag
var block_href_update = 0;
function zusatzt_eintrag()//kok
{
    var div_close = zero('div',0,0,0,0,document.getElementById('div_kopf'));
    $(div_close).css('position','absolute');
    div_close.style.right='320px';
    div_close.style.top='70px';
    //div_close.style.width=100+'px';
    //div_close.style.height=40+'px';
    //div_close.style.top=8+'px';
    $(div_close).draggable();
    
    //start table
    var table=zero('table',0,0,0,1,div_close);var body=zero('tbody',0,0,0,0,table);
    var tr=zero('tr',0,0,0,0,body);
    var formaten = formatinfo_hujk(gruppenId);
    var format_ticker=0;
    var speiseId = speise_herf_f0.split("!")[2];
    for(var i3 = 0; i3 < formaten.split("@").length-1; i3++)//format schleife
    {
        var formatId = formaten.split("@")[i3].split("!")[1];
        var href_satzt = $('#C1986_speise_id_und_format_id'+speiseId+'_'+formatId).text();
        
        var td1=zero('td',0,0,0,0,tr);
        $(td1).text('4426_zutat_wert=');$(td1).css("color","white");
        var td_box_1=zero('td',0,0,0,0,tr);
        var maxi_preis = zero('input', 0, 0, 0, 0, td_box_1);
        maxi_preis.size = '2';maxi_preis.id = href_satzt.split('!')[1];
        $(maxi_preis).val(href_satzt.split("!")[9]);
        $(maxi_preis).blur(function () {$(this).css("background-color","yellow");update_href_modern(this.id,9,$(this).val());});
        
        var td2=zero('td',0,0,0,0,tr);$(td2).text('nimpaz=1');
        $(td2).css("color","white");var td_box_2=zero('td',0,0,0,0,tr);
        var opnimpaz = o_p(href_satzt.split('!')[1],href_satzt.split("!")[10]+'|0|1|',td_box_2,'',10,'20px',(speise4-5),speise2);
        opnimpaz.onchange = function()
        {
            $(this).css("background-color","yellow");
            update_href_modern(this.id,10,$(this).val());
        }
    }
    //document.getElementById('div_fotoalle').style.visibility='visible';//visible
}//zusatzt_eintrag
    
var optionsgruppe=0;
function zutat_quelle(art,gr_id,woher)//zql
{
    strecke+='zutat_quelle(art:'+art+',gr_id:'+gr_id+',woher:'+woher+')\n@';
    //imput 
    if(document.getElementById('input_gruppe'))
        $('#input_gruppe').remove();
    var input_gruppe = zero('input', 0, 0, 0, 0, document.getElementById('z_box'));
    input_gruppe.id='input_gruppe';//$(input_gruppe).css('position','absolute');$(input_gruppe).css('left', 10+'%');$(input_gruppe).css('top', 47+'%');
    //imput button
    if(document.getElementById('zutat_insert'))
        $('#zutat_insert').remove();
    var input_button = document.createElement('input');
    input_button.type = 'button';
    input_button.style.color = '#336699';
    input_button.id='zutat_insert';
    //$(input_button).css('position','absolute');$(input_button).css('left', 5+'%');$(input_button).css('top', 47+'%');$(input_button).css('height', 50);
    $(input_button).val('gruppe 4601');
    document.getElementById('z_box').appendChild(input_button);
    input_button.onclick = function(){
        var dublikat_positiv=0;
        var string2 = $(input_gruppe).val(); string2 =string2.toUpperCase();
        for (var i = 0; i < mini_Zelle_zutat_quelle.split("@").length-1; i++) 
        { //micharkhe wa aghe nadare ezafe mikone
            var string1 = mini_Zelle_zutat_quelle.split("@")[i].split("|")[0]; string1 =string1.toUpperCase();
            if(string1 == string2)
                dublikat_positiv=1;
        }
        if(dublikat_positiv==0)
        {
            //mini_Zelle_zutat_quelle+=string_format(string2)+'|~@';//gruppen eintrag
            mini_Zelle_zutat_quelle+=string2+'|~@';//gruppen eintrag
            zutat_quelle(art,gr_id,'zutat_quelle');
        }
    }
    //kombinfeld
    if(document.getElementById('cc'))
        $('#cc').remove();
    var div_kombi = zero('select',0,0,0,0,document.getElementById('z_box'));
    div_kombi.id='cc';
    //gruppenauswahl
    
    
    div_kombi.onchange = function()
    {
        var myselect = document.getElementById("cc");
        optionsgruppe=myselect.options[myselect.selectedIndex].text;
        zutat_quelle_angebot('',art,gr_id,'zutat_quelle');
        if(document.getElementById('zutat_liste'))
            $('#zutat_liste').remove();//zutat_preis_liste ro pak mikone
        //$('#z_box').remove();
    };
    //leeres feld
    var optionfeld0 = zero('option',0,0,0,0,div_kombi);
    $(optionfeld0).text('4637');
    optionfeld0.selected='selected';
    var option_feld_innerhalt = new Array();
    for (var i = 0; i < mini_Zelle_zutat_quelle.split("@").length-1; i++) 
    {
        //alert(mini_Zelle_zutat_quelle.split("@")[i].split("|")[0]);
        if(mini_Zelle_zutat_quelle.split("@")[i].split("|")[0]!='')
        option_feld_innerhalt[i] = mini_Zelle_zutat_quelle.split("@")[i].split("|")[0];
        
    }
    option_feld_innerhalt.sort();
    for (var i = 0; i < option_feld_innerhalt.length; i++) 
    {
        var optionfeld1 = zero('option',0,0,0,0,div_kombi);
         
        $(optionfeld1).text(option_feld_innerhalt[i]);
    }
}
merker = new Array();var ticker_merker=-1;
function option_feld(elem,strings,titel,clas,defaultt)//gsch
{
    var table=zero('table',0,0,0,0,elem);var body=zero('tbody',0,0,0,0,table);
    var tr=zero('tr',0,0,0,0,body);var td1=zero('td',0,0,0,0,tr);
    $(td1).text(titel+': ');
    var td2=zero('td',0,0,0,0,tr);
    ticker_merker++;
    var div_kombi = zero('select',0,0,0,0,td2);
    div_kombi.id=ticker_merker;
    div_kombi.onchange = function(){
        var myselect = document.getElementById(this.id);
        optionsgruppe=myselect.options[myselect.selectedIndex].text;
        merker[this.id]=optionsgruppe;
        $('.'+clas).css({"font-family": merker[this.id],"font-size": merker[this.id]+ "px","font-weight": merker[this.id],});
        
    };
    var optionfeld0 = zero('option',0,0,0,0,div_kombi);
    $(optionfeld0).text(defaultt);
    optionfeld0.selected='selected';
    for (var i = 0; i < strings.split(";").length-1; i++) 
    {
        var optionfeld1 = zero('option',0,0,0,0,div_kombi);
        $(optionfeld1).text(strings.split(";")[i]);
    }
    return ticker_merker;
}
function string_format(stringme)//gsch
{
    var antwort='';
    for (var i = 0; i < stringme.split("").length; i++) 
    {
        if(i==0)
            antwort+=stringme.split("")[i].toUpperCase();
        else
            antwort+=stringme.split("")[i];
    }
    return antwort;
}

function speise_zutat4351(speiseId)
{
    var antwort = '';
    for (var i = 0; i < $('.C857_V_speise_class'+speiseId).length; i++)
    {
        var my_value= $('.C857_V_speise_class'+speiseId)[i];
        my_value=$(my_value).text();
        var v_id_fuer_delet_nuetzlich = my_value.split("!")[1];
        var Orginal_Zutat_Id = my_value.split("!")[3];
        antwort += $('#C_mini_Zelle_zutatBibliothek'+Orginal_Zutat_Id).text().split("@")[0]+ v_id_fuer_delet_nuetzlich + '!@';
    }
    return antwort;
}


function speise_titel()//spt
{
    var div_speise_titel = zero('div',0,0,0,0,document.getElementById('matt_flach'));
    div_speise_titel.id='ks_t_titel';
    var pic_daten = speise_herf_f0;
    div_speise_titel.align='right';
    $(div_speise_titel).css('position','absolute');
    //var picdimension = pic_size(pic_daten.split("|")[6]).split("|");
    //if(!isNaN(pic_daten.split("|")[6]))//numeric
    //{var breite = (pic_daten.split("|")[4]-pic_daten.split("|")[2]);var hoehe = (pic_daten.split("|")[3]-pic_daten.split("|")[1]);var weite_verhaeltnis = fax_optionen_string.split("!")[2].split("|")[1].split("^")[1];div_speise_titel.style.width=(breite*2.5*weite_verhaeltnis)+'px';div_speise_titel.style.backgroundImage='url(gtocrop.aspx?id='+pic_daten.split("|")[6]+'&w='+Math.round(breite*5.5)+'&h='+Math.round(hoehe*4)+'&x='+Math.round(pic_daten.split("|")[2])+'&oh='+Math.round(hoehe*4*weite_verhaeltnis)+'&ow='+Math.round(weite_verhaeltnis*breite*5.5)+'&y='+Math.round(pic_daten.split("|")[1])+')';/**/div_speise_titel.style.height=(hoehe*2*weite_verhaeltnis)+'px';}
    //else//html
    //{
        var sp_nm = $('#C_mini_Zelle_SpeiseNr'+speise_herf_f0.split("!")[2]).text().split("!")[0];
        $(div_speise_titel).text(sp_nm);
        $(div_speise_titel).css({'font-size':'40px','background-color': 'green','color': '#ffffff',});
   // }
    $(div_speise_titel).css('left', '70px');
    $(div_speise_titel).css('top', 5+'px');
    $(div_speise_titel).draggable();
    $(div_speise_titel).resizable();
}
function open_speise_zutaten(speisensatz,z_div)//opz
{           //alert(speisensatz);
    z_div.innerHTML = "";
    //exxy
    var sp_zutaten = speise_zutat4351(speisensatz.split("!")[2]);
    for (var i = 0; i < sp_zutaten.split("@").length-1; i++) 
    {//zutaten
        tzt(3, sp_zutaten.split("@")[i].split("!")[0]+' ', '#ffffff', z_div,'text');
    }/**/
}



var zutat_box_auf_zu = 0;
function zutzt_einschalten_kopf()//zkp
{//zutat_open
    strecke+='zutzt_einschalten_kopf()@\n';
    var zutzt_einschalten = zero('div', 0, 0, 0, 0,document.getElementById('matt_flach'));
    $(zutzt_einschalten).css({'position':'absolute','cursor': 'pointer','left':1+'px'});
    var Open_Options_butten = k_m_f(gruppen_id_nach_click,'Open Options 5139',zutzt_einschalten,'',10,'on',(speise4-8),speise2);
    Open_Options_butten.onclick = function(){
            start_zutat_box(this.id,'zutat','zutzt_einschalten_kopf');zutat_box_auf_zu=1;//zbox
    }
    
    var geld_eintrag2 = zero('div', 0, 0, 0, 0,document.getElementById('matt_flach'));
    $(geld_eintrag2).css({'position':'relative','cursor': 'pointer','left':'350px','top':'-20px'});
    //$(geld_eintrag2).text('GELD Eintrag modern 5171');
    //var geld_eintrag2_icon = k_m_f(gruppen_id_nach_click.split("!")[1],'GELD Eintrag modern 5171',geld_eintrag2,'',10,'on',(speise4-8),speise2);
    var geld_eintrag2_icon = k_m_f(gruppen_id_nach_click,'zqk GELD Eintrag alt',geld_eintrag2,'',10,'on',(speise4-8),speise2);
    geld_eintrag2_icon.onclick = function(){
        geld_stufen_bericht();
    }
}

var zutat_stufen_eintrag_modus_0_normal = 0;
function speis_haupt_bibliothek_kopf(g_id)//sdfp
{//zutat_open
    strecke+='speis_haupt_bibliothek_kopf(g_id:'+g_id+')\n@';
    var zutzt_einschalten = zero('div', 0, 0, 0, 0,document.getElementById('matt_flach'));
    zutzt_einschalten.id='zutzt_einschalten';
    $(zutzt_einschalten).css({'position':'absolute','cursor': 'pointer','left':0.07+'%',});
    var icon = zero('img','bilder/z.png','30','30','0',zutzt_einschalten);
    zutzt_einschalten.id=g_id;//gruppenId
    zutzt_einschalten.onclick = function(){
        if(zutat_box_auf_zu == 0)
        {   
            zutat_quelle_angebot('','speise',g_id,'speis_haupt_bibliothek_kopf');
            start_zutat_box(this.id,'speise','speis_haupt_bibliothek_kopf');
            zutat_box_auf_zu=1;//zbox
        }
        else if(zutat_box_auf_zu == 1)
        {
            $('#z_box').remove();
            zutat_box_auf_zu=0;
            $('.zwei_liste').remove();
            //var d = document.getElementById('zutatliste'); 
        }
    }
}


function open_navi_click()
{
    $('#5718').remove();
    var div_mini_navi = zero('div', 0, 0, 0, 0,document.body);$(div_mini_navi).text('zqk');
    div_mini_navi.id='5718';
    $(div_mini_navi).css({'left':'0px','top':'39px','height':'85%','overflow':'auto','font-weight':'Bold',
    'background-color':'royalblue','color':'#ffffff','position':'fixed','padding-left':'3px','padding-right':'15px',
    'padding-top':'15px','padding-bottom':'15px','font-size':'60%',});
    var a_td_mini_navi = k_m_f('rtufcwe','refresh',div_mini_navi,'',10,'on',(speise4-5),speise2);
    a_td_mini_navi.onclick = function(){open_navi_click();};
    
    var down_icon = k_m_f('cerdfr4','↓↓↓↓↓',div_mini_navi,'',8,'on',(speise4-5),speise2);down_icon.onclick = function()
    {
        $('#5718').animate({scrollTop: $('#5718').offset().top+1500}, 300);
    };
        for (var i = 0; i < $('.mini_Zelle_gruppen').length; i++)
        {
            var my_value= $('.mini_Zelle_gruppen')[i];
            my_value=$(my_value).text();
            
            var table_navi_simulator=zero('table',0,0,0,1,div_mini_navi);
            var body_navi_simulator=zero('tbody',0,0,0,0,table_navi_simulator);
            var tr_navi_simulator=zero('tr',0,0,0,0,body_navi_simulator);
            if(my_value.split('!')[8]!='1')
            {
                var td_navi_simulator_links=zero('td',0,0,0,0,tr_navi_simulator);
                var go_re = k_m_f(my_value.split('!')[1],'>>',td_navi_simulator_links,'',8,'on',6,speise2);
                go_re.onclick = function(){
                    links_rechts_navi_update(this.id,'1');
                };
            }
            var td_bild=zero('td',0,45,0,0,tr_navi_simulator);
            var div_bild = zero('div',0,'0','0','0',td_bild);
            div_bild.id=i;
            $(div_bild).css({'cursor': 'pointer','border-radius': '5px',"background-image":'url('+pic_link+'/'+my_value.split('!')[7]+'.jpg)','background-size': '100%','height': '30px','background-Repeat':'no-repeat','width':'60px',});
            td_bild.id=my_value.split('!')[1];
            td_bild.className='blueme';
            td_bild.onclick = function(){
                teck_gruppen_id=this.id;
                element_filter_technologie();
                $('html, body').animate({scrollTop: $('#'+this.id).offset().top-40}, 500);
                $('.blueme').css('background-color','blue');
                $(this).css('background-color','#f4aaaa');
            };
            var td_name=zero('td',0,90,0,0,tr_navi_simulator);
            $(td_name).text(my_value.split('|')[0]);
            $(td_name).css({'cursor': 'pointer',});
            td_name.id=my_value.split('!')[1];
            td_name.className='blueme';
            td_name.onclick = function(){
                teck_gruppen_id=this.id;
                element_filter_technologie();
                $('html, body').animate({scrollTop: $('#'+this.id).offset().top-40}, 500);
                $('.blueme').css('background-color','blue');
                $(this).css('background-color','#f4aaaa');
            };
            var td_info=zero('td',0,30,0,0,tr_navi_simulator);
            var div_speisenzahl=zero('div',0,0,0,0,td_info);
                $(div_speisenzahl).text('$:'+my_value.split('!')[6]);$(div_speisenzahl).css({'font-size':'75%',});
            var div_speisenzahl=zero('div',0,0,0,0,td_info);
                $(div_speisenzahl).text('S:'+$('.C1987_speise_gruppen_class'+my_value.split('!')[1]).length);$(div_speisenzahl).css({'font-size':'75%',});
            var div_speisenzahl=zero('div',0,0,0,0,td_info);
                $(div_speisenzahl).text('Z:'+$('.C857_V_gruppe_class'+my_value.split('!')[1]).length);$(div_speisenzahl).css({'font-size':'75%',});
                
            
            if(my_value.split('!')[8]=='1')
            {
                var td_navi_simulator_links=zero('td',0,0,0,0,tr_navi_simulator);
                var go_re = k_m_f(my_value.split('!')[1],'<<',td_navi_simulator_links,'',8,'on',6,speise2);
                go_re.onclick = function()
                {
                    links_rechts_navi_update(this.id,'0');
                };
            }
        }
        var down_icon = k_m_f('cerdfr4','↑↑↑↑↑↑',div_mini_navi,'',8,'on',(speise4-5),speise2);down_icon.onclick = function()
        {
            $('#5718').animate({scrollTop: $('#5718').offset().top-1500}, 300);
        };
        var a_td_mini_navi = k_m_f('rtufcwe','refresh',div_mini_navi,'',10,'on',(speise4-5),speise2);a_td_mini_navi.onclick = function(){
            open_navi_click();
            $('#5718').animate({scrollTop: $('#5718').offset().top+1500}, 300);
        };
        
        var div_mini_navi = zero('div', 0, 0, 70, 0,div_mini_navi);
}

function links_rechts_navi_update(gruppen_nummer,neu_wert)//vbrstg  foxi///////////////////////////////////////////////start
{
    update_gruppen_modern(gruppen_nummer,8,neu_wert);
    open_navi_click();
}

 function addmenu(){//fgb
    
    var addgrupp = document.getElementById('addmenu');
    addgrupp.innerHTML='';
    addgrupp.style.left=(screen.width*0.26)+'px';
    addgrupp.style.top=(screen.height*0.20)+'px';
    var aaddgrupp = zero('a', 0, 0, 0, 0, addgrupp);//cvb
    aaddgrupp.href = "javascript:insertmenue();";
    var picIdtablo3 = zero('img','Bilder/sorte.jpg', 50, 50, 0, aaddgrupp);
    
};
 function insertGruppe_text(name_der_gruppe)
 {
    var position_und_funfzig = (gruppen_insert(id,0+'|'+0+'|'+0+'|'+0+'|'+0+'|'+'picId'+'|!',name_der_gruppe));
   $('html,body').animate({ scrollTop: 999999 }, 'slow');
    open_navi_click();
    //element_filter_technologie();
};


  function clearCoords()
  {
    $('#coords input').val('');
    PageProduktId=null;// das produkt wird von rubberband los gelassen/
speicherknopf('off');
//save shishehi
    var fdivmitte = document.getElementById('speichern');fdivmitte.innerHTML='';var adirekt = zero('a', 0, 0, 0, 0, fdivmitte);//cvb
    adirekt.href = "javascript:starteupdate();";var picIdtablo2 = zero('img','Bilder/save.png', 50, 50, 0, adirekt); 
  };
var gruppenModus=0;var picIdTrasporter;var zusatzHoeheTransporter;
var breite;var hoehe; var bc;var lc;var speicher_knopf;var art=40;

function Pos100 (links,oben) {
    $(document).ready(function(){
        $("#xy_insertor").animate({scrollTop: oben});
    });
}
var PageProduktId;// damit die idaentitaet fuer rubber sichtbar wird und das Produkt gefunden werden kann
var clickonId=0;// damit rubber erst nach klick sich startet
var alteFarbe='';// damit das gelbe td wieder seine alte farbe bekommt, falls vor update andere td geclicky eird;
var gn1transporter='';
var Identitaetalt='';var coloralt='';
function click(table)//Identitaet,gn1alles
{   

        var satz = table.split("*");var Identitaet = satz[0];var gn1alles=satz[1];
        clickonId=table;
        PageProduktId=Identitaet;
        if(document.getElementById(Identitaetalt)){
            document.getElementById(Identitaetalt).src = 'bilder/a44.png';//range ghablio war midare
            document.getElementById(Identitaetalt).style.width='30px';
            document.getElementById(Identitaetalt).style.height='30px';
        } 
        if(table==Identitaetalt){// damit falls sebst nochmal geklickt wird update modus aus geht
            document.getElementById(Identitaetalt).src = 'bilder/a44.png'; 
            document.getElementById(Identitaetalt).style.width='30px';
            document.getElementById(Identitaetalt).style.height='30px';
            clickonId=0;Identitaetalt=0;
        }
        else{     
            document.getElementById(table).src = 'Bilder/a44m.png';//click shodaro range jadid behesh mide.
            document.getElementById(table).style.width='50px';
            document.getElementById(table).style.height='50px';
            Identitaetalt=table;
            gn1transporter=gn1alles;
        }
}



    
function update_general_preis(formatid,wert,angebot_wert)
{
    //start preiseintrag
    if(isNaN(wert)||wert==0||wert=='')alert2(700,'4957 \n Normalpreis: \n format nicht akzeptiert');
    else
    {
        update_int=0;
        for (var i = 0; i < $('.C1987_href_format_class'+formatid).length; i++)
        {
                var my_value= $('.C1987_href_format_class'+formatid)[i];
                my_value=$(my_value).text();
                update_href_modern(my_value.split("!")[1],0,wert);
                update_int++;
        }
        alert2(1500,'6070\n'+update_int+' Updates preis');
        element_filter_technologie();
    }
    //start Angebotseintrag
    if(isNaN(angebot_wert)||angebot_wert=='')
        alert2(700,'4957 \n Angebot: \n  format nicht akzeptiert');
    else
    {
        update_int=0;
        for (var i = 0; i < $('.C1987_href_format_class'+formatid).length; i++)
        {
            var my_value= $('.C1987_href_format_class'+formatid)[i];
            my_value=$(my_value).text();
                update_href_modern(my_value.split("!")[1],13,angebot_wert);
                update_int++;
        }
        alert2(800,'6106\n'+update_int+' Updates Angebote');
        element_filter_technologie();
    }
}
function update_aufschlag_auf_vorstufe(formatid,vorstufe_format_id,wert)
{
    //start preiseintrag
    if(isNaN(wert)||wert==0||wert=='')var nichts=1;
    else
    {
        update_int=0;
        for (var i = 0; i < $('.C1987_href_format_class'+formatid).length; i++)
        {
                var my_value= $('.C1987_href_format_class'+formatid)[i];
                my_value=$(my_value).text();
                var speise_id = my_value.split("!")[2];
                var elemet_id_erstellen = 'f'+ vorstufe_format_id+'s'+speise_id;
                var vorstufe_preis = $('#'+elemet_id_erstellen).val();//
                var neue_preis = ((1*vorstufe_preis)+(1*wert));
                update_href_modern(my_value.split("!")[1],0,neue_preis);
                update_int++;
        }
        alert2(2000,'huyt\n'+update_int+' Updates preis');
        element_filter_technologie();
    }
}
function update_minus_billiger(formatid,wert)
{
    //start preiseintrag
    if(isNaN(wert)||wert==0||wert=='')var nichts=1;
    else
    {
        update_int=0;
        for (var i = 0; i < $('.C1987_href_format_class'+formatid).length; i++)
        {
                var my_value= $('.C1987_href_format_class'+formatid)[i];
                my_value=$(my_value).text();
                var neue_preis = ((1*my_value.split("!")[0])+(1*wert));
                update_href_modern(my_value.split("!")[1],13,neue_preis);
                update_int++;
        }
        alert2(2000,'xdr\n'+update_int+' Updates preis');
        element_filter_technologie();
    }
}
    
function speisen_danach_setzer(speiseNr_id_davor,speiseNr_id_transfer)
{alert(speiseNr_id_davor);
    var transfer_satz='';
    var update_ohne_tansfer='';
    for (var i2 = 0; i2 < mini_Zelle_SpeiseNr.split('@').length-1; i2++)
    {
        if(speiseNr_id_transfer==mini_Zelle_SpeiseNr.split('@')[i2].split('!')[1])
        {
            transfer_satz=mini_Zelle_SpeiseNr.split('@')[i2]+'@';
        }
        else
        {
            update_ohne_tansfer+=mini_Zelle_SpeiseNr.split('@')[i2]+'@';
        }
    }
    mini_Zelle_SpeiseNr=update_ohne_tansfer;
    var update='';
    for (var i2 = 0; i2 < mini_Zelle_SpeiseNr.split('@').length-1; i2++)
    {
        update+= mini_Zelle_SpeiseNr.split('@')[i2]+'@';
        if(speiseNr_id_davor==mini_Zelle_SpeiseNr.split('@')[i2].split('!')[1])
        {
            update+=transfer_satz;
        }
    }
    mini_Zelle_SpeiseNr=update;
    element_filter_technologie();
}

function open_speise_kasten(gruppen_nummer,art)//arten = speise / format
{
    var div_all= zero('div', 0, 0, 0, 0,document.body);
    var div_close= zero('div', 0, 0, 0, 0,div_all);
    var add_grups= zero('div', 0, 0, 0, 0,div_all);
    $(div_all).css({'width':'90%','height':'70%','position':'fixed','right':'10px','top':'140px','background-color': 'green','z-index':'2',});
    $(add_grups).css({'width':'90%','height':'70%','position':'relativ','right':'10px','top':'140px','background-color': 'green','z-index':'2',});
    close_me_knopf(div_all);
    
    var input_button = document.createElement('input');input_button.type = 'button';input_button.style.color = '#336699';
    $(input_button).val(art+ ' sip');
    //if(art=='speise')
    $(add_grups).text('4282 Pizza |sup | pizzaomentar | Preis(preis^preis = bei zwei Formaten.aber erst format eintragen) ; Salat | Salatkomentar');
    add_grups.appendChild(input_button);
    var add_grups_text = zero('textarea', 0, 0, 0, 0, add_grups);//mki
    add_grups_text.id='add_grups_text';
    $(add_grups_text).css({'height':'70%','width':'90%','position':'relative',});
    /*
    */
    input_button.onclick = function()
    {   
        var test_ok = 0;
        var grupen_text =$(add_grups_text).val();
        //start test
        for (var i = 0; i < grupen_text.split(";").length; i++) 
        {if(grupen_text.split(";")[i]!=''){if(grupen_text.split(";")[i]!=null){
            var name=grupen_text.split(";")[i];
            if(art=='speise'||art=='menu')
            {  
                if(name.split("|").length<=3)
                {
                    alert('bitte korregieren sie ihre angabe. es fehlt/en | \n'+ name);
                    test_ok=0;
                    break;
                }
                else
                {
                    test_ok=1;
                }
            }
        }}}
        //ende test
        for (var i = 0; i < grupen_text.split(";").length; i++) 
        {if(grupen_text.split(";")[i]!=''){if(grupen_text.split(";")[i]!=null){
            var name=grupen_text.split(";")[i];
            if(art=='format')
            {
                format_insert(gruppen_nummer,name,0);
            }
            var speiise_kaarten_nuumer=0;
            var inset_me='';
            var speise_sup='';
            var speise_kommentar='';
            var speise_xkx_preis=0;
            if(name.split("|")[0]){inset_me = name.split("|")[0];}
            else{inset_me = name}
            if(name.split("|")[1])speise_sup = name.split("|")[1];
            //start sup swicht 
            speise_sup = sup_for_kasten_insert(speise_sup);
            //end sup switch
            if(name.split("|")[2])speise_kommentar = name.split("|")[2];
            if(name.split("|")[3])speise_xkx_preis = name.split("|")[3];
            if(art=='speise' && test_ok==1)
            {   
                speisen_insert(gruppen_nummer,'0|0|0|0|0|0|!','speise',inset_me,'','-',speise_xkx_preis,speise_kommentar,speise_sup);
            }
            if(art=='menu' && test_ok==1)
            {
                speisen_insert(gruppen_nummer,'0|0|0|0|0|0|!','menue',inset_me,speiise_kaarten_nuumer,'-',speise_xkx_preis,speise_kommentar,speise_sup);
            }
        }}}
        $(div_all).remove();
        element_filter_technologie();
    };
}

function sup_for_kasten_insert(imput_wert,speise_id)
{
    imput_wert = imput_wert.replace(/ /g, '');
    var erste_komma_reiniger=0;
    var antwort='';
    //var imput_wert = $(this).val()+'';
    imput_wert = imput_wert.toLowerCase();
    sup_switcher($(this),'');//divs fuer zutatstoffe werden deklariert
    for (var i2 = 0; i2 < imput_wert.split(",").length; i2++) 
    {
        if(!document.getElementById('info_uf45-'+imput_wert.split(",")[i2]))
        {
            alert2(1500,imput_wert.split(",")[i2]+' ist nicht eingetragen!');
        }
        else
        {
            if(erste_komma_reiniger!=0)antwort+= ',';
            erste_komma_reiniger++;
            antwort+=$('#info_uf45-'+imput_wert.split(",")[i2]).text();
        }
    }
    $('#iwxk').remove();//beendet sup_switcher();
    return  ' <sup>'+antwort+'</sup>';
 }   
            
function speisen_insert(gruppenId,coords,speise_oder_menu,speise_name,speiise_kaarten_nuumer,menu_vater,preis,speise_komentar,speise_sup)//spein
{//speisen_insert:coords = 551|59|570|334|00|1416|!;
    var gruppen_wahl_zutat = $('#C_mini_Zelle_gruppen'+gruppenId).text().split('!')[3];
    var anzahl = $('.mini_Zelle_SpeiseNr').length;
    var newId = Id_geber();//
    var insert_value = speise_name + '!' + newId + '!' + gruppenId + '!'+speise_sup+'!37!'+speise_oder_menu+'!'+speiise_kaarten_nuumer+'!'+
        menu_vater+'!'+speise_komentar+'!@';
    insert_mini_Zelle_SpeiseNr(insert_value);
    //strat preis split
    //end preis split
    var i_op8u = 0;
    for (var i = 0; i < mini_Zelle_formatid.split("@").length - 1; i++)
    {//inja chek mikone ke format dar eya na
        if (gruppenId == mini_Zelle_formatid.split("@")[i].split("!")[2])
        { // be andazeye formathaye gruppe herf baraye speise insert mikone
            var newherfId_int = Id_geber();
            var formatId = mini_Zelle_formatid.split("@")[i].split("!")[1];
            var format_name = mini_Zelle_formatid.split("@")[i].split("!")[0];
            //start preis operation
            var preis_modern = preis
            //alert(preis);
            if(preis.split("^").length>=2&&i_op8u!=0)
            {
                //alert(preis+'preis');
                //alert(preis.split("^")[i_op8u]);
                //preis_modern=preis.split("^")[(i*1)+(1*1)];
                preis_modern=preis.split("^")[(i_op8u-1)];
            }
            preis_modern=preis_modern.replace( /\,/g, "");
            preis_modern = preis_modern.replace(/ /g, '');
            preis_modern = preis_modern.replace( /\s/g, "");
            if(preis_modern=='')preis_modern=0;
            preis_modern=preis_modern*1;
            //ende preis operatoin
            var neue_satzt = preis_modern + '!'  + newherfId_int + '!' + newId + '!' + formatId + '!40!'+speise_oder_menu+'! !' + gruppenId + '!'+format_name+'!0!0! !0!0!0!0!0!@';//7y6t
            insert_mini_Zelle_herfs(neue_satzt);
            i_op8u++;
        }
    }
}

function insertspeise_text(speise_name,aktuelle_gruppe,speiise_kaarten_nuumer,speise_komentar,speise_sup,speise_xkx_preis)
{//lml
    speisen_insert(aktuelle_gruppe,'0|0|0|0|0|0|!','speise',speise_name,speiise_kaarten_nuumer,'-',speise_xkx_preis,speise_komentar,speise_sup,speise_xkx_preis);
};
var foto_lang_modus=0; var letzte_fotosatz = 0;
function switch_foto()
{
    document.getElementById('switch').innerHTML='';
    var div_switch = document.getElementById('switch');
     div_switch.style.left=(screen.width * 0.04)+'px';
     var weg = zero('img','bilder/switch.png','40','40','1',document.getElementById("switch"));
     weg.id='switch_icon';
     weg.onclick = function(){
        if(foto_lang_modus==0)
            {foto_lang_modus=1; weg.src = 'bilder/switchon.png';fotolang();}
        else 
            {foto_lang_modus=0; weg.src = 'bilder/switch.png';foto(letzte_fotosatz);}
     }
}



function starteupdate(){entladen();};
function arten(sauger, breite, hoehe,bc,lc,mp3)
{
    var d = document;
    var t1 = zero('table', 0, 0, 0, 1, document.getElementById('divtitle'));
    t1.style.overflow = 'auto';
    t1.bgColor = bc;
    t1.borderColor = lc;
    t1.cellSpacing = '0';
    t1.cellPadding = '0';
    t1.id = Identitaet + 't1';
    t1.style.verticalAlign = 'top';
    var idbig=1;
    var idsmall=1;
    var Identitaet;
    var Identitaet2;// baraye charkhe tuyee
    var t1body = zero('tbody', 0, 0, 0, 0, t1);
    var sauger2 = sauger.split("|");
    var t1r1 = zero('tr', 0, 0, 0, 0, t1body);
    for (var i = 0; i < sauger2.length - 1; i++) {//////////////////////// for 1
        idbig++;
        Identitaet=idbig;
        var mindestens_ein_kind=0;
        var TextZerlegt = sauger2[i].split("@");
            var tdSpeiseName = zero('td', 0, 01, 0, 0, t1r1);
            tdSpeiseName.colSpan = '2';
            tdSpeiseName.rowSpan = '2';    
            tdSpeiseName.bgColor = '#0943cf';
            tdSpeiseName.align = 'center';
            tdSpeiseName.style.verticalAlign = 'top';
            tdSpeiseName.id = Identitaet + 'tdSpeiseName';
            var text = tzt(5, TextZerlegt[0]+' '+TextZerlegt[1], '#ffffff', tdSpeiseName);
            var t2 = zero('table', 0, 0, 0, 1,document.getElementById(Identitaet + 'tdSpeiseName'));
            t2.style.overflow = 'auto';
            t2.bgColor = bc;
            t2.borderColor = lc;
            t2.cellSpacing = '0';
            t2.cellPadding = '0';
                var t2body = zero('tbody', 0, 0, 0, 0,t2);
                    var gmp3 = mp3.split("@");
                    for (var i2 = 0; i2 < gmp3.length - 1; i2++) {//////////////////// for 2
                    var href_coords=gmp3[i2].split("!");

                        idsmall++;
                        Identitaet2=idsmall;
                        if(TextZerlegt[0]==href_coords[4]){mindestens_ein_kind++;
                            var t2r1 = zero('tr', 0, 0, 0, 0,t2body);
                                var td2SpeiseName = zero('td', 0, 01, 0, 0,t2r1);
                                //td2SpeiseName.colSpan = '0';
                                //td2SpeiseName.rowSpan = '0';    
                                td2SpeiseName.id = Identitaet2 + 'td2SpeiseName';
                                td2SpeiseName.bgColor = '#0943cf';
                                td2SpeiseName.align = 'center';
                                    var text = tzt(4,href_coords[0]+'|'+href_coords[1], '#ffffff', td2SpeiseName);
                        }//if(TextZerlegt[0]==href_coords[4])
                    }//for (var i2 = 0; i2 < gmp3.length - 1; i2++)
                if(mindestens_ein_kind==0)remove(Identitaet + 'tdSpeiseName');
            }//alert(idsmall);
}
function remove(elem){
    var tableZB = document.getElementById(elem);//
    tableZB.parentNode.removeChild(tableZB);
}


function zero(element, src, width, height, border, vater)
{
    var d = document.createElement(element);
    d.border = border;
    if (src != 0)d.src = src;
    if (width != 0)d.style.width = width + 'px';//height
    if (height != 0) d.style.height = height + 'px';//+'px';//
    try{
        if (vater != 0) vater.appendChild(d);
    }
    catch(e){
        alert('6021 zero errore \n from line('+fehler_suche+')');
    }
    return d;
};
function zero_input(element, titel, wert,clas){
    var table=zero('table',0,0,0,0,element);var body=zero('tbody',0,0,0,0,table);
    var tr=zero('tr',0,0,0,0,body);
    var td1=zero('td',0,0,0,0,tr);
    $(td1).text(titel+': ');
    var td2=zero('td',0,0,0,0,tr);
    var d = document.createElement('input');
    $(d).val(wert);
    td2.appendChild(d);
    return d;
};
function tzt(size, txt, color, elem, id){
    var zutatPreisFont = document.createElement('font');zutatPreisFont.size = size;
    if (color != -1)zutatPreisFont.color = color;
    var zutatPreis = document.createTextNode(txt);
    zutatPreisFont.appendChild(zutatPreis);
    elem.appendChild(zutatPreisFont);
};
//////////////////////////////////////////////////////////Keller///////////////////////////////////////////////////
///////////////////////////////////////////tesetbereich    START
//function bildklick (Ereignis) {
  //if (!Ereignis)
    //Ereignis = window.event;
  //alert("x-Wert: " + window.event.offsetX        + " / y-Wert: " + window.event.offsetY);
  //alert("x-Wert: " + Ereignis.layerX          bild   +firefox(+ower)0  -Explorer         +chrome(-ower)0 
  //alert("x-Wert: " + window.event.offsetX     bild   -firefox          +Explorer(+ower)0 +chrome(+ower)0    
  //alert("x-Wert: " + Ereignis.pageX           bild   +firefox(-ower)   -Explorer         +chrome(-ower)   
  
  //alert("x-Wert: " + Ereignis.clientX           fenster   (monitor)
  //alert("x-Wert: " + window.event.x             fenster   (monitor)
  
  //////////////////////////////////////////////////////----  onevent  --------
  //onmouseover =  zange khatar mizane baad az worood
  //onmousedown, onmouseup =  dokme zadan wa well kardan
  //onclick = baad az well kardan hokm mide
  //onmousemove = morattab mipache, pixel fuer pixel
//}
//////////////////////////////////////////tesetbereich  keller2  ENDE



/////////////////////////////////////////////////////////////C# 

    var mini_design_Unico_bGColor = '';//58-id|name|gn2=Zeitfenster|
    var mini_design_Unico_lineColor = '';//57-id|name|gn2=Zeitfenster|
    var mini_design_Unico_smsTd = '';//63-id|name|gn2=Zeitfenster|
    var mini_Zelle_gruppen = '';//35-id|name|gn2|gn3=position|
    //var mini_Zelle_gruppen_coords = '';//50-id|name|gn2|
    var mini_Zelle_zutatBibliothek = '';//36-id|name|gn2=gruppe|gn3|page1|
    var mini_Zelle_SpeiseNr = '';//37-id|name|gn2|
    var mini_Zelle_formatid = '';//39-id|name|gn2|
    var mini_Zelle_zutatpreis = '';//43-id|name=preis|gn2=zutatId|gn3=formatid|
    var mini_Zelle_bildReihenfolge = '';//55-id|gn2|gn3=position|
    //var mini_Zelle_bilder = '';//56-id|gn2|gn3=picid|
    var mini_Zelle_herfs = '';//40-id|gn2=speiseNummer|gn3=formatId|page1=g1-1-sp1-klein|
    var mini_Zelle_V_zutat_speise = '';//49-id|name|gn2=speiseNummer|gn3=ursprungZutatId|
    //var mini_Zelle_privatzutat = '';//106-id|name|gn2=speiseNummer|gn3=id~
    var mini_Zelle_rest = '';//106-id|name|gn2=speiseNummer|gn3=id~
    //var mini_Zelle_Speise_etikett = '';//131-id|name|gn2=speiseNummer|gn3=id~
    var mini_Zelle_format_etikett = '';//132-id|name|gn2=speiseNummer|gn3=id~
    //var mini_Zelle_logo = '';//133
    //var mini_Zelle_menu = '';//135
    var mini_Zelle_zutat_quelle = '';//mp3 art 66
    var mini_Zelle_zutat_quelle_67 = '';//mp3 art 66
    var plz_iformation = '';
    var haupt_mp3_split_2 = '';
    var restaurant_art='';
    //var job_text='';
    var web_options_liste = '';
    var font_box = '';
    var restaurant_name='';
    var vorwahl;
    var pic_link;
    var plz_initialen='';
    var restaurantId='';
    var fax_optionen_string='';
    var mail_value = '';
    var zeit_id = '';
    var zeit_info='';
    
    
function aj_laden()//ldn
{
    zeit_id =$('#C1865_neu_aj_zeitfenster_Id').text();
    id =$('#C1865_neu_aj_zeitfenster_Id').text();
    restaurantId = $('#C2154_div_restaurantId').text();
    web_options_liste = $('#C2158_haupt_mp3_div').text().split('~')[16];
    plz_initialen = web_options_liste.split('|')[23].split('^')[1];
    vorwahl = web_options_liste.split("|")[11].split("^")[1];
     //if(vorwahl==98)  pic_link='http://pics.mihanfood.com';else{pic_link='http://pics.alice-eur.it'};
    pic_link='http://album.giessengastro.de';
    pic_link='';
    restaurant_art = $('#C2158_haupt_mp3_div').text().split('~')[5];
    haupt_mp3_split_2 = $('#C2158_haupt_mp3_div').text().split('~')[2];
    font_box = web_options_liste.split("|")[18].split("^")[1];
    plz_iformation = $('#C2158_haupt_mp3_div').text().split('~')[3];
    
    mini_design_Unico_bGColor = $('#C2158_haupt_mp3_div').text().split('~')[17];
    fax_optionen_string = $('#C2158_haupt_mp3_div').text().split('~')[12];
    
    
    restaurant_name= $('#C2158_haupt_mp3_div').text().split('~')[0];
    mail_value = $('#C2158_haupt_mp3_div').text().split('~')[17].split('!')[5];
    
    $('#pagetitlepic').attr("href",'fsw/logos/'+restaurantId+'.png');
        window.document.title = 'xy:'+restaurant_name;
        zeit_info_insertor();
    
}

function laden()//ldn
{
    //mini_design_Unico_smsTd = xy.mini_design_Unico_smsTd_().value;
    //mini_Zelle_gruppen = xy.mini_Zelle_gruppen_().value;  
    mini_Zelle_gruppen = $('.mini_Zelle_gruppen').text();   
    //mini_Zelle_gruppen_coords = xy.mini_Zelle_gruppen_coords_().value;
    //mini_Zelle_zutatpreis = xy.mini_Zelle_zutatpreis_().value;
    //mini_Zelle_zutatBibliothek = xy.mini_Zelle_zutatBibliothek_().value;
    mini_Zelle_zutatBibliothek = $('.mini_Zelle_zutatBibliothek').text();
    //mini_Zelle_SpeiseNr = xy.mini_Zelle_SpeiseNr_().value;//?
    mini_Zelle_SpeiseNr = $('.mini_Zelle_SpeiseNr').text();   //eyd(mini_Zelle_SpeiseNr,'mini_Zelle_SpeiseNr');
    //mini_Zelle_formatid = xy.mini_Zelle_formatid_().value;   
    mini_Zelle_formatid = $('.mini_Zelle_formatid').text();   
        add_it(mini_Zelle_formatid);
    //mini_Zelle_bildReihenfolge = xy.mini_Zelle_bildReihenfolge_().value;
    //mini_Zelle_herfs = xy.mini_Zelle_herfs_().value;
    mini_Zelle_herfs = $('.mini_Zelle_herfs').text();
    //mini_Zelle_V_zutat_speise = xy.mini_Zelle_V_zutat_speise_().value;
    mini_Zelle_V_zutat_speise = $('.mini_Zelle_V_zutat_speise').text();
    //mini_Zelle_format_etikett = xy.mini_Zelle_format_etikett_().value;
    mini_Zelle_format_etikett = $('.mini_Zelle_format_etikett').text();
    
    //mini_design_Unico_lineColor = xy.mini_design_Unico_lineColor_().value;
    mini_design_Unico_lineColor = $('.mini_design_Unico_lineColor').text();
    
    
    
    lade_font_informationen();
}
function eyd(mini_zelle,id_vorhang)
{
    for (var i = 0; i < mini_zelle.split("@").length - 1; i++)
    {
        var z_speis_menu = zero('div',0,0,0,0,document.body);
        var d_id = mini_zelle.split("@")[i].split("!")[1];
        z_speis_menu.id=id_vorhang + d_id;
        $(z_speis_menu).text(mini_zelle.split("@")[i]);   
        $(z_speis_menu).hide();
    }
}
function add_it(zelle)
{//alert(zelle);
    for (var i = 0; i < zelle.split('@').length-1; i++) //gruppen for
    {
        var info_di = zero('div', 0, 0, 0, 0, document.body);
        info_di.id='info5519_'+zelle.split('@')[i].split('!')[1];
        $(info_di).text(zelle.split('@')[i]);
        $(info_di).hide();
    }
}
function lade_font_informationen()//ldn
{
         titel1 = font_box.split('$')[0];
     titel2 = font_box.split('$')[1];
     titel3 = font_box.split('$')[2];
     titel4 = font_box.split('$')[3];
     titel5 = font_box.split('$')[4];
     titel6 = font_box.split('$')[5];
     anhang1 = font_box.split('$')[6];
     anhang2 = font_box.split('$')[7];
     anhang3 = font_box.split('$')[8];
     anhang4 = font_box.split('$')[9];
     anhang5 = font_box.split('$')[10];
     anhang6 = font_box.split('$')[11];
     kopf1 = font_box.split('$')[12];
     kopf2 = font_box.split('$')[13];
     kopf3 = font_box.split('$')[14];
     kopf4 = font_box.split('$')[15];
     kopf5 = font_box.split('$')[16];
     kopf6 = font_box.split('$')[17];
     fus1 = font_box.split('$')[18];
     fus2 = font_box.split('$')[19];
     fus3 = font_box.split('$')[20];
     fus4 = font_box.split('$')[21];
     fus5 = font_box.split('$')[22];
     fus6 = font_box.split('$')[23];
     speise1 = font_box.split('$')[24];
     speise2 = font_box.split('$')[25];
     speise3 = font_box.split('$')[26];
     speise4 = font_box.split('$')[27];
     speise5 = font_box.split('$')[28];
     speise6 = font_box.split('$')[29];
     zutat1 = font_box.split('$')[30];
     zutat2 = font_box.split('$')[31];
     zutat3 = font_box.split('$')[32];
     zutat4 = font_box.split('$')[33];
     zutat5 = font_box.split('$')[34];
     zutat6 = font_box.split('$')[35];
     navi1 = font_box.split('$')[36];
     navi2 = font_box.split('$')[37];
     navi3 = font_box.split('$')[38];
     navi4 = font_box.split('$')[39];
     navi5 = font_box.split('$')[40];
     navi6 = font_box.split('$')[41];
     menu1 = font_box.split('$')[42];
     menu2 = font_box.split('$')[43];
     menu3 = font_box.split('$')[44];
     menu4 = font_box.split('$')[45];
     menu5 = font_box.split('$')[46];
     menu6 = font_box.split('$')[47];
     //start boldc
     titel7 = font_box.split('$')[48];
     anhang7 = font_box.split('$')[49];
     kopf7 = font_box.split('$')[50];
     fus7 = font_box.split('$')[51];
     speise7 = font_box.split('$')[52];
     zutat7 = font_box.split('$')[53];
     navi7 = font_box.split('$')[54];
     menu7 = font_box.split('$')[55];
}
function zeit_info_insertor()//ldn
{
    for(var i = 0; i < haupt_mp3_split_2.split('#').length-1; i++)
    {
        var bereich = zero('div',0,0,0,0,document.body);$(bereich).css("display","none");
        var tag = tag_returner(haupt_mp3_split_2.split('#')[i].split('^')[0].split('|')[0]);
        var von_bis = haupt_mp3_split_2.split('#')[i].split('|')[1] + "-" + haupt_mp3_split_2.split('#')[i].split('|')[2];
        $(bereich).text(tag+' '+von_bis);
        bereich.id = 'zeit_info'+haupt_mp3_split_2.split('#')[i].split('^')[0].split('|')[3];
    }
}
function tag_returner(tag)
{
    if (tag == 8) tag = "muster";else if (tag == 9) tag = "Feiertage";else if (tag == 1) tag = "Montag";else if (tag == 2) tag = "Dienstag";else if (tag == 3) tag = "Mittwoch";else if (tag == 4) tag = "Donnerstag";else if (tag == 5) tag = "Freitag";else if (tag == 6) tag = "Samstag";else if (tag == 7) tag = "Sonntag";else tag = tag;
    return tag;
}
function update_hauptmp3_2017(atribut,value)
{
    var hpt_mp3=$('#C2158_haupt_mp3_div').text();
    //alert('START: '+hpt_mp3);
    var antwort  = "";
    for (var i = 0; i < hpt_mp3.split("~").length- 1; i++) 
    {
        if(atribut==i)
        {
            antwort+= value+"~";
        }
        else
        {
            antwort+= hpt_mp3.split("~")[i]+"~";
        }
    }
    //alert('atribut: '+atribut);
    //alert('antwort: '+antwort);
    $('#C2158_haupt_mp3_div').text(antwort);
    aj_laden();
    alert2(1000,'Haupt-UPDATE( '+atribut+' ) ABGESCHLOSSEN')
}
function k_m_f(button_id,txt, vater,color,radius,on_off,fo_si,bo_co)
{
    var adresse_send_icon_k = document.createElement('input');adresse_send_icon_k.type='button';adresse_send_icon_k.id =button_id;if (txt != 0)adresse_send_icon_k.value = txt;
    $(adresse_send_icon_k).css({'background-color':'#'+titel5,'border-radius': radius+'px','font-weight':'Bold','font-size': fo_si+'px','border-color' : '#'+titel2,'text-align':'center','padding-left':'4px','padding-right':'4px','padding-top':'2px','padding-bottom':'2px','align':'center','color':'#fff',"border-width":"2px",'cursor': 'pointer',});
    if (vater != 0) vater.appendChild(adresse_send_icon_k);
    if(on_off=='on')adresse_send_icon_k.style.visibility='visible';
    if(on_off=='off')adresse_send_icon_k.style.visibility='hidden';
    return adresse_send_icon_k;
}
function o_p(button_id,a_b_c, vater,color,radius,px_width,fo_si,bo_co)
{
    var adresse_send_icon_k = document.createElement('select');
    //adresse_send_icon_k.type='button';
    adresse_send_icon_k.id =button_id;
    for (var i = 0; i < a_b_c.split("|").length-1; i++) 
    {
        var op_feld = zero('option',0,0,0,0,adresse_send_icon_k);
        $(op_feld).text(a_b_c.split("|")[i]);
    }
    $(adresse_send_icon_k).css({'width':px_width+'px','background-color':'#'+titel5,'border-radius': radius+'px','font-weight':'Bold','font-size': fo_si+'px','border-color' : '#'+titel2,'text-align':'center','padding-left':'4px','padding-right':'4px','padding-top':'2px','padding-bottom':'2px','align':'center','color':'#'+ titel2,"border-width":"2px",'cursor': 'pointer',});
    if (vater != 0) vater.appendChild(adresse_send_icon_k);
    return adresse_send_icon_k;
}







    var titel1 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[0];
    var titel2 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[1];
    var titel3 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[2];
    var titel4 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[3];
    var titel5 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[4];
    var titel6 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[5];
    var titel7 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[5];
    var anhang1 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[6];
    var anhang2 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[7];
    var anhang3 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[8];
    var anhang4 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[9];
    var anhang5 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[10];
    var anhang6 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[11];
    var anhang7 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[11];
    var kopf1 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[12];
    var kopf2 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[13];
    var kopf3 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[14];
    var kopf4 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[15];
    var kopf5 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[16];
    var kopf6 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[17];
    var kopf7 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[17];
    var fus1 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[18];
    var fus2 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[19];
    var fus3 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[20];
    var fus4 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[21];
    var fus5 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[22];
    var fus6 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[23];
    var fus7 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[23];
    var speise1 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[24];
    var speise2 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[25];
    var speise3 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[26];
    var speise4 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[27];
    var speise5 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[28];
    var speise6 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[29];
    var speise7 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[29];
    var zutat1 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[30];
    var zutat2 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[31];
    var zutat3 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[32];
    var zutat4 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[33];
    var zutat5 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[34];
    var zutat6 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[35];
    var zutat7 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[35];
    var navi1 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[36];
    var navi2 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[37];
    var navi3 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[38];
    var navi4 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[39];
    var navi5 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[40];
    var navi6 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[41];
    var navi7 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[41];
    var menu1 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[36];
    var menu2 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[37];
    var menu3 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[38];
    var menu4 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[39];
    var menu5 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[40];
    var menu6 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[41];
    var menu7 = '';//web_options_liste.split("|")[18].split("^")[1].split('$')[41];
/*
*/




    function fotoFinder(fotoId)//25,1,14
    {
        fotoId = fotoId.split("|")[6];
        var antwort = '';
        for (var i = 0; i < mini_Zelle_bildReihenfolge.split("@").length - 1; i++)//gruppe Schleife
        {
            if (mini_Zelle_bildReihenfolge.split("@")[i].split("!")[3] == fotoId)
                antwort = mini_Zelle_bildReihenfolge.split("@")[i];
        }
        return antwort;
    }
    function pic_size(picId)
    {
        var pisize = '';
        for (var i = 0; i < mini_Zelle_bildReihenfolge.split("@").length - 1; i++)//gruppe Schleife
        {
            var gn3pic = mini_Zelle_bildReihenfolge.split("@")[i].split("!")[3];
            if (gn3pic == picId) pisize = mini_Zelle_bildReihenfolge.split("@")[i].split("!")[8];
        }
        return pisize;
    }
    
   
    function format_sazt(formatId)
    {
        var antwort = '';//position|xy|picId|@
        for (var i = 0; i < mini_Zelle_formatid.split("@").length - 1; i++)//speise Schleife
        {
            if (formatId == mini_Zelle_formatid.split("@")[i].split("!")[1])
            {//formathaye gruppe ro filter mikone
                antwort = mini_Zelle_formatid.split("@")[i];
                //alert(mini_Zelle_formatid.split("@")[i].split("|").length);
            }
        }
        return antwort;
    }

    function insert_fax(fax)//19,1,14
    {// ff0000!67439!67435!-2!57!1814!0!-!insertWochentage!@
        mini_design_Unico_bGColor = mini_design_Unico_bGColor.split("!")[0] + '!' +
                                    mini_design_Unico_bGColor.split("!")[1] + '!' +
                                    mini_design_Unico_bGColor.split("!")[2] + '!' +
                                    fax + "!" +
                                    mini_design_Unico_bGColor.split("!")[4] + '!' +
                                    mini_design_Unico_bGColor.split("!")[5] + '!' +
                                    mini_design_Unico_bGColor.split("!")[6] + '!' +
                                    mini_design_Unico_bGColor.split("!")[7] + '!'+
                                    mini_design_Unico_bGColor.split("!")[8] + '!@';
                               update_hauptmp3_2017(17,mini_design_Unico_bGColor);     
    }
    function insert_mail(mail)//19,1,14
    {// ff0000!67439!67435!-2!57!1814!0!-!insertWochentage!@
        mini_design_Unico_bGColor = mini_design_Unico_bGColor.split("!")[0] + '!' +
                                    mini_design_Unico_bGColor.split("!")[1] + '!' +
                                    mini_design_Unico_bGColor.split("!")[2] + '!' +
                                    mini_design_Unico_bGColor.split("!")[3] + '!' +
                                    mini_design_Unico_bGColor.split("!")[4] + '!' +
                                    mail + "!" +
                                    mini_design_Unico_bGColor.split("!")[6] + '!' +
                                    mini_design_Unico_bGColor.split("!")[7] + '!'+
                                    mini_design_Unico_bGColor.split("!")[8] + '!@';
                               update_hauptmp3_2017(17,mini_design_Unico_bGColor);     
    }
    function insert_farbe(farbe)//19,1,14
    {// ff0000!67439!67435!-2!57!1814!0!-!insertWochentage!@
        mini_design_Unico_bGColor = farbe + '!' +
                                    mini_design_Unico_bGColor.split("!")[1] + '!' +
                                    mini_design_Unico_bGColor.split("!")[2] + '!' +
                                    mini_design_Unico_bGColor.split("!")[3] + '!' +
                                    mini_design_Unico_bGColor.split("!")[4] + '!' +
                                    mini_design_Unico_bGColor.split("!")[5] + '!' +
                                    mini_design_Unico_bGColor.split("!")[6] + '!' +
                                    mini_design_Unico_bGColor.split("!")[7] + '!'+
                                    mini_design_Unico_bGColor.split("!")[8] + '!@';
                               update_hauptmp3_2017(17,mini_design_Unico_bGColor);     
    }
function entladen()
{
        update_hauptmp3_2017(16,web_options_liste);//update_web_options
        update_hauptmp3_2017(5, restaurant_art);//update_restaurant_art
        haupt_mp3_split_2 = sort_time(haupt_mp3_split_2);
        update_hauptmp3_2017(2, haupt_mp3_split_2);//update_offnungen
        
        update_hauptmp3_2017(3,plz_iformation);
        //xy.update_plz(plz_iformation,restaurantId);//update_plz//insert_dise_plz_in_plz_hauptmp3
        update_hauptmp3_2017(17,mini_design_Unico_bGColor);//update_color_fax_mail
//        alert(fax_optionen_string);
        update_hauptmp3_2017(12,fax_optionen_string);//uapdate_fax_optionen
        //alert(fax_optionen_string);
        aj_laden();
        //xy.update_zutat_quelle(mini_Zelle_zutat_quelle);
        var new_hauptMP3 = $('#C2158_haupt_mp3_div').text();
        var meldung = xy.entladen_modern(id,restaurantId,new_hauptMP3
        ,mini_design_Unico_bGColor
        ,mini_design_Unico_lineColor
        ,mini_design_Unico_smsTd//3
        ,$('.mini_Zelle_gruppen').text()//4
        ,mini_Zelle_formatid//5
        ,mini_Zelle_format_etikett//6
        ,$('.mini_Zelle_SpeiseNr').text()//7
        ,$('.mini_Zelle_herfs').text()//8
        ,$('.mini_Zelle_zutatBibliothek').text()//9
        ,mini_Zelle_zutatpreis//10
        ,$('.mini_Zelle_V_zutat_speise').text()//11
        ,mini_Zelle_bildReihenfolge//12
        ,mini_Zelle_rest).value;
        if (meldung!='')
            alert(meldung);
        else{alert2(400,'wird gespeichert')};
        xy.update_zutat_quelle_67(mini_Zelle_zutat_quelle_67);
        
        //xy.update_Gruppen_in_suchmachiene(restaurantId,id);
        
}



function sort_time(time_alle)
{
    var antwort_arr = new Array();

    for (var i = 0; i < time_alle.split("#").length - 1; i++) {
        var setmm = time_alle.split("#")[i];
        setmm.split("|")[0];
        var adfb = [[(setmm.split("|")[0] * 1)], [(setmm.split("|")[1].split(":")[0] * 1)], setmm];
        //var adfb = [[(setmm.split("|")[0] * 1)], [(setmm.split("|")[1].split(":")[0] * 1)], "\n"];
        //var adfb = [[(setmm.split("|")[0] * 1)]];

        antwort_arr[i] = adfb;
    };
    
    antwort_arr.sort(function (a, b) {
        return a[1] - b[1];
    });
    antwort_arr.sort(function (a, b) {
        return a[0] - b[0];
    });
    var antwort = '';
    for (var i = 0; i < antwort_arr.length; i++) {
        antwort += antwort_arr[i][2]+"#";
    };
    return antwort;
}
function getCol(matrix, col) {
    var column = [];
    for (var i = 0; i < matrix.length; i++) {
        column.push(matrix[i][col]);
    }
    return column;
}


function ABC(art,gr_id)
{
    strecke+='ABC(art:'+art+',gr_id:'+gr_id+')@\n';

    if(document.getElementById('table_td_alphabet'))
        $('#table_td_alphabet').remove();
    var absde= 'A,Ä,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Ö,P,Q,R,S,T,U,Ü,V,W,X,Y,Z,Alle,';
    if(vorwahl==98) absde="ا,ب ,پ ,ت ,ث ,ج,چ ,ح ,خ ,د ,ذ ,ر ,ز ,ژ ,س ,ش ,ص ,ض ,ط ,ظ ,ع ,غ ,ف ,ق ,ک ,گ ,ل ,م ,ن ,و ,ه ,ی,Alle";
        var table_td_alphabet=zero('td',0,0,0,1,document.getElementById('tr_abc'));table_td_alphabet.colSpan='70';
        table_td_alphabet.id='table_td_alphabet';
        var table_alphabet=zero('table',0,0,0,1,table_td_alphabet);var body_alphabet=zero('tbody',0,0,0,0,table_alphabet);var tr_alphabet=zero('tr',0,0,0,0,body_alphabet);
    for (var i = 0; i < absde.split(",").length; i++) 
    {
        var A = zero('td', 0, 0,0, 0, tr_alphabet);
                A.className='divecke';
        var ohne_space = absde.split(",")[i].replace(' ', '')
        A.id=ohne_space;
        //alert('('+absde.split(",")[i]+')');
        $(A).css({ 'background-color': 'blue','font-size': '90%','cursor': 'pointer','z-index': '2100',});
        var text = tzt(7,' '+ absde.split(",")[i], '#ffffff',A);
        A.onmousedown=function(){
            if(zutat_stufen_eintrag_modus_0_normal==0)/*ke stufe pak nashe*/zutat_quelle_angebot(this.id,art,gr_id,'ABC');
            if(art=='zutat')zutat_bibliothek(this.id);
        };
    }
    
}
var letzte_speise_nr=1;var letzte_speise_titel='';var eintrag_zahl = 0;
function zutat_quelle_angebot(filter,art,gr_id,woher)
{
    strecke+='zutat_quelle_angebot(filter:'+filter+',art:'+art+',gr_id:'+gr_id+',woher:'+woher+')@\n';
    var left = 1; var top = 42;
    var zutat_bib_satz = '';
    for (var i = 0; i < mini_Zelle_zutat_quelle.split("@").length-1; i++) 
    { //micharkhe wa aghe nadare ezafe mikone
        var string1 = mini_Zelle_zutat_quelle.split("@")[i].split("|")[0]; //string1 =string1.toUpperCase();
        if(optionsgruppe == string1)
            zutat_bib_satz=mini_Zelle_zutat_quelle.split("@")[i].split("|")[1];
    }
    var zutat_sortiert = new Array(zutat_bib_satz.split("~").length-1);
    for (var i = 0; i < zutat_bib_satz.split("~").length-1; i++) 
    {
        zutat_sortiert[i]=zutat_bib_satz.split("~")[i];
    }
    zutat_sortiert.sort();
    if(document.getElementById('zutat_quelle_angebot'))
        $('#zutat_quelle_angebot').remove();
    var z_div_kesh = zero('div',0,0,0,0,document.getElementById('matt_flach'));
    z_div_kesh.id='zutat_quelle_angebot';
    $(z_div_kesh).css({'position':'absolute','overflow' : 'auto','height':'300px'});$(z_div_kesh).css('left', left+'%');$(z_div_kesh).css('top', top+'%');
    //block div's einrichten
    zutatequlle_u_zutatbiblioth_sperr_div_creator(z_div_kesh,teck_gruppen_id)
    
    var table=zero('table',0,0,0,1,z_div_kesh);var body=zero('tbody',0,0,0,0,table);var tr_numeric=zero('tr',0,0,0,0,body);
    
    var td_numeric = zero('td',0,0,0,0,tr_numeric);td_numeric.colSpan='4';$(td_numeric).text('listenzeichen: 8175');
    var td_input =       zero('td',0,0,0,0,tr_numeric);      td_input.colSpan='4';      var input_listenzeichen = zero('input',0,0,0,0,td_input);      $(input_listenzeichen).val(letzte_speise_nr);
    
    var td_titel = zero('td',0,0,0,0,tr_numeric);td_titel.colSpan='4';$(td_titel).text('titel vor dem Name( Pizza Sandwich Rollo Calzone Salat):');
    var td_input_titel = zero('td',0,0,0,0,tr_numeric);td_input_titel.colSpan='4';var input_listenzeichen_titel = zero('input',0,0,0,0,td_input_titel);$(input_listenzeichen_titel).val(letzte_speise_titel);
    
    var tr_abc=zero('tr',0,0,0,0,body);tr_abc.id='tr_abc';
    ABC(art,gr_id);
    
    var tr=zero('tr',0,0,0,0,body);
    var kettensamler=''; 
    var ersatzt_i=0;
    
    var i_for_td=0;
    var i_for_td_2=0;
    if(filter!=''&&filter!='Alle')
    {//start gewaelte buchstabe
        
        for (var i = 0; i < zutat_sortiert.length; i++) 
        {//zutat_bibliotek
        
            //alert('(('+filter+'))==('+zutat_sortiert[i].split("")[0]+')||'+filter.toLowerCase()+'=='+zutat_sortiert[i].split("")[0])
            if(filter==zutat_sortiert[i].split("")[0]||filter.toLowerCase()==zutat_sortiert[i].split("")[0])
            {
                if(!document.getElementById('sperr_div_zutat'+zutat_sortiert[i].split("!")[0]))
                {
                    ersatzt_i++;
                    var td2 = zero('td',0,0,0,0,tr);
                    var zutztpic = zero('img','Bilder/delete.png', 20, 20, 0, td2);
                    zutztpic.id=zutat_sortiert[i];
                    zutztpic.onmousedown=function(){
                        delet_zutat_aus_quelle(this.id,left,top,gr_id)
                    }
                    var zutat_bib_satz = zutat_sortiert[i];
                    var td3 = zero('td',0,0,0,0,tr);
                    var z_div = zero('div',0,0,0,0,td3);
                    //$(z_div).css('background-color', 'blue');$(z_div).css('cursor', 'pointer'); 
                    //$(z_div).css('color', '#ffffff');$(z_div).css('text-align','center');
                    z_div.className='class_zutat_out';
                    var textfild = zero('nobr',0,0,0,0,z_div);
                    $(textfild).text(zutat_sortiert[i].split("!")[0]);$(textfild).css({'font-weight':'Bold','text-align':'center'});
                    i_for_td+=zutat_sortiert[i].length;
                    z_div.id = zutat_sortiert[i];
                    z_div.onmousedown=function()
                    {
                        //alert(art+'----'+gr_id);
                        if(art=='zutat')
                        {add_zutat_from_quelle(this.id.split(":")[0],gr_id);}
                        if(art=='speise')
                        {
                            var zahl_vor_speise = $(input_listenzeichen).val();
                            letzte_speise_titel = $(input_listenzeichen_titel).val();
                            var speiise_kaarten_nuumer=letzte_speise_nr;
                            if(vorwahl==98)  {
                                speiise_kaarten_nuumer = persianNumber(''+letzte_speise_nr);
                                insertspeise_text(this.id.split(":")[0]+' '+$(input_listenzeichen_titel).val()+' '+eintrag_zahl,gr_id,speiise_kaarten_nuumer,'','',0);
                            }
                            else{
                                insertspeise_text(eintrag_zahl+' '+$(input_listenzeichen_titel).val()+' '+this.id.split(":")[0],gr_id,speiise_kaarten_nuumer,'','',0);
                            }
                            if(!isNaN(zahl_vor_speise))
                            {
                                if(zahl_vor_speise!=''){letzte_speise_nr=zahl_vor_speise;letzte_speise_nr++;}else{letzte_speise_nr='';};
                            }
                            $(input_listenzeichen).val(letzte_speise_nr);
                            $(input_listenzeichen_titel).val(letzte_speise_titel);
                        }
                        $(this).remove();//alert(1);
                    }//end mous down
                }//end if element filter
            }//end if buchstabe
            //alert(i_for_td);
            if(i_for_td>=50){i_for_td=0;var table=zero('table',0,0,0,1,z_div_kesh);var body=zero('tbody',0,0,0,0,table);var tr=zero('tr',0,0,0,0,body);}
        }//end for
    }
    else
    {
        for (var i = 0; i < zutat_sortiert.length; i++) 
        {//zutat_bibliotek
            if(!document.getElementById('sperr_div_zutat'+zutat_sortiert[i].split("!")[0]))
            {
                var td2 = zero('td',0,0,0,0,tr);
                var zutztpic = zero('img','Bilder/delete.png', 20, 20, 0, td2);
                zutztpic.id=zutat_sortiert[i];
                zutztpic.onmousedown=function(){
                    delet_zutat_aus_quelle(this.id,left,top,gr_id)
                }
                var zutat_bib_satz = zutat_sortiert[i];
                var td3 = zero('td',0,0,0,0,tr);
                var z_div = zero('div',0,0,0,0,td3);
                //$(z_div).css('background-color', 'blue');$(z_div).css('color', '#ffffff');$(z_div).css('text-align','center');
                //$(z_div).css('cursor', 'pointer');
                z_div.className='class_zutat_out';
                var textfild = zero('nobr',0,0,0,0,z_div);$(textfild).text(zutat_sortiert[i].split("!")[0]);$(textfild).css({'font-weight':'Bold',});
                i_for_td_2+=zutat_sortiert[i].length;
                z_div.id = zutat_sortiert[i];
                z_div.onmousedown=function(){
                    if(art=='zutat')
                        {add_zutat_from_quelle(this.id.split(":")[0],gr_id);}
                    if(art=='speise')
                    {
                        var zahl_vor_speise = $(input_listenzeichen).val();
                        letzte_speise_titel = $(input_listenzeichen_titel).val();
                        var speiise_kaarten_nuumer=letzte_speise_nr;
                        if(vorwahl==98)  {
                            speiise_kaarten_nuumer=persianNumber(''+letzte_speise_nr);
                            insertspeise_text(this.id.split(":")[0]+' '+$(input_listenzeichen_titel).val(),gr_id,speiise_kaarten_nuumer,'','',0);
                        }
                        else{//eintrag_zahl war eintrag_zahl
                            insertspeise_text(eintrag_zahl+' '+$(input_listenzeichen_titel).val()+' '+this.id.split(":")[0],gr_id,speiise_kaarten_nuumer,'','',0);
                        }
                        if(!isNaN(zahl_vor_speise))
                        {
                            if(zahl_vor_speise!='')
                            {
                                letzte_speise_nr=zahl_vor_speise;
                                letzte_speise_nr++;
                            }
                            else{letzte_speise_nr='';};
                        }
                        $(input_listenzeichen).val(letzte_speise_nr);
                        $(input_listenzeichen_titel).val(letzte_speise_titel);
                    }
                    $(this).remove();
                }//end if elemnt filter
            }//end if
            //else{alert(zutat_sortiert[i].split("!")[0])}
            //alert(i_for_td_2);            
            if(i_for_td_2>=80)
            {
                i_for_td_2=0;
                var table=zero('table',0,0,0,1,z_div_kesh);var body=zero('tbody',0,0,0,0,table);var tr=zero('tr',0,0,0,0,body);
            }
        }//end for
    }//end else
    $('.class_zutat_out').css({'padding-bottom':'2px','padding-top':'2px','margin-bottom':'1px','cursor': 'pointer','text-align': 'center',"font-size": 13+ "px",'background-color':'#'+ navi2,'color':'#'+ navi5,'font-family': navi1,'padding-left':'10px','padding-right':'10px','cellspacing':'0px','font-weight': navi7,'border-color':'#'+navi5,"border-width":"1px", "border-style":"solid",'border-radius': '5px',/*'width':100+ "px",*/});
    $('.class_zutat_out').hover(function(){ $(this).css({'color':'#'+ navi2,});}, function () {$(this).css("color","#"+navi5);});
    $('.class_zutat_out').hover(function(){ $(this).css({'background-color':'#'+ navi5,});}, function () {$(this).css("background-color","#"+navi2);});
    //$('.class_zutat_out').infobox("#infobox",'sp_extra_Zutat_dazu_tun',1,1);
}

    function delet_zutat_aus_quelle(delet_name,art,g_id)
    {
        strecke+='delet_zutat_aus_quelle(delet_name:'+delet_name+',art:'+art+',g_id:'+g_id+')@\n';
        var update = '';
        //alert(mini_Zelle_zutat_quelle);
        for (var i = 0; i < mini_Zelle_zutat_quelle.split("@").length-1; i++) 
        { //micharkhe wa aghe nadare ezafe mikone
            var string1 = mini_Zelle_zutat_quelle.split("@")[i].split("|")[0]; 
            if(optionsgruppe != string1)
            {
                update+=mini_Zelle_zutat_quelle.split("@")[i]+'@';
                //zutat_bib_satz=mini_Zelle_zutat_quelle.split("@")[i].split("|")[1];
            }
            else
            {
                update+=mini_Zelle_zutat_quelle.split("@")[i].split("|")[0]+'|';//gruppe ro ezafe mikone
                for (var i2 = 0; i2 < mini_Zelle_zutat_quelle.split("@")[i].split("|")[1].split("~").length-1; i2++) 
                {
                     if(delet_name!=mini_Zelle_zutat_quelle.split("@")[i].split("|")[1].split("~")[i2])
                        update+=mini_Zelle_zutat_quelle.split("@")[i].split("|")[1].split("~")[i2]+'~';
                    //else
                        //alert(mini_Zelle_zutat_quelle.split("@")[i].split("|")[1].split("~")[i2]);
                }
                update+='@';
            }
        }
        mini_Zelle_zutat_quelle=update;
        //alert(mini_Zelle_zutat_quelle);
        zutat_quelle_angebot('',art,g_id);
    }//Math.random();
    function Id_geber()
    {
        var propzahl= Math.random()*100000000;
        return Math.round(propzahl);
        
    }//Math.random();
    function Id_geber2(zellen,vaterId,absdr)
    {
        //alert('zellen: '+zellen+'\n vaterId: '+vaterId+'\n absdr: '+absdr);
        var milliseconds = new Date();
        milliseconds =milliseconds.getMilliseconds();
        //alert(milliseconds);
        var newId = 0;
        var anzahl = zellen.split("@").length;// +int.Parse(milliseconds);
        //alert('anzahl: '+anzahl);
        if (anzahl == 1)//noch keine Gruppe
        {
            newId = (vaterId * 14) + (milliseconds*1);// idzeuger() / 100000;
            //alert('if '+vaterId);
        }
        else
        {// hier wird das letzte Id ermittelt und plus 1 gemacht;
          //  alert('else');
            for (var i = 0; i < zellen.split("@").length - 1; i++)//gruppe Schleife
            {
                var SpeiseId = zellen.split("@")[i].split("!")[1];
                newId = (1*SpeiseId) + (1*1);//newId ueberschreibt sich so lange bis der letzte satz erreicht ist
                //alert(zellen.split("@")[i]);
            }
        }
        //alert2(1000,'newid \n'+newId);
        return newId;
    }
    var gruppen_id_nach_click='';

    
    function dell_zutat_von_speise(speise_zutatId)
    {
        dell_zutat_von_speise_sharp(speise_zutatId);
        document.getElementById(speise_zutatId).innerHTML = "";//
        $('#'+speise_zutatId).remove();
        
    }
var aktuelle_speiseId=0;
function zutat_bibliothek(alphabet) //bufe
{
    strecke+='zutat_bibliothek(alphabet:'+alphabet+')@\n';
    var ankommende=0;
        //zutat bibliothek
        var left = 5; var top = 22;
    var gruppenId = teck_gruppen_id;
    //var zutat_bib_satz = zutat_bibliotek_start(gruppenId);
    var zutat_bib_satz = $('.C829_zutat_gruppen_class'+gruppenId).text();
    
    var zutat_sortiert = new Array();
    var privat_int = 0;
    if(!alphabet||alphabet=='Alle')
    {//zeige alle
        for (var i = 0; i < zutat_bib_satz.split("@").length-1; i++) 
        {
            zutat_sortiert[privat_int]=zutat_bib_satz.split("@")[i];
            privat_int++;
        }
    }
    else//nur bestimmte buchstabe
    {
        for (var i = 0; i < zutat_bib_satz.split("@").length-1; i++) 
        {
            if(alphabet==zutat_bib_satz.split("@")[i].split("")[0]||alphabet.toLowerCase()==zutat_bib_satz.split("@")[i].split("")[0])
            {
                zutat_sortiert[privat_int]=zutat_bib_satz.split("@")[i];
                privat_int++;
            }
        }
    }
    zutat_sortiert.sort();
    if(document.getElementById('zutat_bibliothek_div'))
        $('#zutat_bibliothek_div').remove();
    var z_div_kesh = zero('div',0,0,0,0,document.getElementById('matt_flach'));
    $(z_div_kesh).css('position','absolute');
    $(z_div_kesh).css('top', 160+'px');
    z_div_kesh.id='zutat_bibliothek_div';
    var table=zero('table',0,0,0,1,z_div_kesh);var body=zero('tbody',0,0,0,0,table);var tr=zero('tr',0,0,0,0,body);
    
    var kettensamler='';   
    var i_for_td=0;
    for (var i = 0; i < zutat_sortiert.length; i++) 
    {//zutat_bibliotek
        var td2 = zero('td',0,0,0,0,tr);
        //ohne Kettenzutaten
        if(zutat_sortiert[i].split("!")[3]==0)
        {
            var zutat_bib_satz = zutat_sortiert[i];
            var z_div = zero('div',0,0,0,0,td2);
            //var sperr_div_zutat = zero('div',0,0,0,0,td2);
            //sperr_div_zutat.id='sperr_div_zutat'+zutat_sortiert[i].split("!")[0].split('*')[0];
            z_div.id = zutat_bib_satz;
            z_div.onmousedown=function(){
                var div_logo = zero('div',0,0,0,0,document.getElementById(this.id));
                div_logo.id=this.id+':logo';
                //bibliothek normal:
                if(zutat_stufen_eintrag_modus_0_normal==0)
                {
                    add_zutat(this.id.split(":")[0],'1068'); // tablo zutat_bibliothek(alphabet)
                }
                else
                {
                    update_zutat_preis_stufe(this.id.split(":")[0]);
                }
                $(this).remove();//alert(1);
            }
            //$(z_div).css('background-color','blue');$(z_div).css('cursor', 'pointer'); $(z_div).css('color','#ffffff');
            z_div.className='class_zutat_out';
            var textfild = zero('nobr',0,0,0,0,z_div);$(textfild).text(sup_editor(zutat_sortiert[i].split("!")[0]));
            $(textfild).css({'font-weight':'Bold','font-size':'90%'});
            i_for_td+=zutat_sortiert[i].length;
        }
        if(i_for_td>=600)
        {
            i_for_td=0;
            var table=zero('table',0,0,0,1,z_div_kesh);var body=zero('tbody',0,0,0,0,table);var tr=zero('tr',0,0,0,0,body);
        }
                //var td2 = zero('td',0,0,0,0,tr);
    }
    
    //ketten samler
    //var zutatalle = zutat_bibliotek_start(gruppenId);
    var zutatalle = $('.C829_zutat_gruppen_class'+gruppenId).text();
    
    for (var i = 0; i < zutatalle.split("@").length-1; i++) 
    {   
        if(zutatalle.split("@")[i].split("!")[3]!=0)
        {
            //kettensamler+=zutatalle.split("@")[i]+'&';
            var Optionnummer = zutatalle.split("@")[i].split("!")[3];
            if (zutatalle.split("@")[i].split("!")[3] == Optionnummer)
            {
                var update='';
                for (var i2 = 0; i2 < zutatalle.split("@").length-1; i2++) 
                {//zutat_wird_aus_gesetzt
                    if (zutatalle.split("@")[i2].split("!")[3] == Optionnummer)
                    {
                        kettensamler+=zutatalle.split("@")[i2]+'&';
                        
                    }
                    else
                    {
                        update += zutatalle.split("@")[i2] + "@";
                    }
                }//ende for i2
                kettensamler+='@';
                zutatalle=update;
            }//end if [3]=optionnumer
        }//ende if [3]!=0
    }//ende for i
    //ketten wiedergabe
    for (var i = 0; i < kettensamler.split("@").length-1; i++) 
    {//be tedade kete dor mizane
        var zutat_bib_satz2 = kettensamler.split("@")[i];
        //hier wird tr gebildet
        var z_div_leer = zero('div',0,0,6,0,z_div_kesh);
        var z_div = zero('div',0,0,0,0,z_div_kesh);
        var table2=zero('table',0,0,0,0,z_div);
        $(table2).css('background-color', 'blue');
        table2.className='rand';
        var body2=zero('tbody',0,0,0,0,table2);var tr2=zero('tr',0,0,0,0,body2);
        //z_div.id = zutat_bib_satz2+element;$(z_div).css('background-color', 'blue');
        var update='';
        for (var i2 = 0; i2 < kettensamler.split("@")[i].split("&").length-1; i2++) 
        {//dakhele kette ro migarde
            var zutat_bib_satz_innerhalb_der_kette=kettensamler.split("@")[i];
            var td4 = zero('td',0,0,0,0,tr2);
            td4.id = zutat_bib_satz_innerhalb_der_kette.split("&")[i2];
            td4.onmousedown=function()
            {
                //bibliothek kette
                if(zutat_stufen_eintrag_modus_0_normal==0)
                {
                    add_zutat(this.id,'1068'); // tablo zutat_bibliothek(alphabet)
                    //adirekt2.href ="javascript:add_zutat('"+zutat_bib_satz_innerhalb_der_kette.split("&")[i2]+"','add','1140');";//ganze_kette
                }
                else //preis eintrag
                {
                    //alert();
                    update_zutat_preis_stufe(this.id);
                    //adirekt2.href ="javascript:update_zutat_preis_stufe('"+zutat_bib_satz_innerhalb_der_kette.split("&")[i2]+"');";//ganze_kette
                }    
            }
            //var z_div2 = zero('div',0,0,0,0,adirekt2);
            $(td4).css('background-color', 'braun');
            td4.className='divecke';
            var text = tzt(4,' '+ kettensamler.split("@")[i].split("&")[i2].split("!")[0]+' ', '#ffffff',td4);
        }
    } 
    
    $('.class_zutat_out').css({'padding-bottom':'2px','padding-top':'2px','margin-bottom':'1px','cursor': 'pointer','text-align': 'center',"font-size": 13+ "px",'background-color':'#'+ navi2,'color':'#'+ navi5,'font-family': navi1,'padding-left':'10px','padding-right':'10px','cellspacing':'0px','font-weight': navi7,'border-color':'#'+navi5,"border-width":"1px", "border-style":"solid",'border-radius': '5px',/*'width':100+ "px",*/});
    $('.class_zutat_out').hover(function(){ $(this).css({'color':'#'+ navi2,});}, function () {$(this).css("color","#"+navi5);});
    $('.class_zutat_out').hover(function(){ $(this).css({'background-color':'#'+ navi5,});}, function () {$(this).css("background-color","#"+navi2);});
    

}// end zutat bibliothek
function sup_editor(koma_reinigung){var yeki_dar_mion=0;var new_value='';for (var i = 0; i < koma_reinigung.split('*').length; i++){if(yeki_dar_mion==0){new_value+= koma_reinigung.split('*')[i];yeki_dar_mion=1;}else{/*var sup_me = koma_reinigung.split('*')[i].split('`')[0];var new_sup_value='';for (var i2 = 0; i2 < sup_me.length; i2++){if(sup_me[i2]==0)new_sup_value+='°';else if(sup_me[i2]==1)new_sup_value+='¹';else if(sup_me[i2]==2)new_sup_value+='²';else if(sup_me[i2]==3)new_sup_value+='³';else if(sup_me[i2]==4)new_sup_value+='⁴';else if(sup_me[i2]==5)new_sup_value+='⁵';else if(sup_me[i2]==6)new_sup_value+='⁶';else if(sup_me[i2]==7)new_sup_value+='⁷';else if(sup_me[i2]==8)new_sup_value+='⁸';else if(sup_me[i2]==9)new_sup_value+='⁹';else if(sup_me[i2]==' ')new_sup_value+=' ';else{new_sup_value+=' ';}}new_value+= new_sup_value;*/new_value+=koma_reinigung.split('*')[i].split('`')[1];}}return new_value;}



    function lage_pic_verhaeltnisse()
    {
        //alert(fax_optionen_string.split("!")[0].split("|").length);
        if(fax_optionen_string.split("!")[0].split("|").length<=2)
        {//nur beim ersten Mal
            //kunden Fax atribut !=0
            var update ='Titelbild:~1|';
                update+='produkt Bild:~1|';
                update+='Anschrift Font:~1|';
                update+='Page Font:~1|';
                update+='Zutat Font:~1|';
                update+='Kunden Analyse:~0|';
                update +='Aktiv:~1|';
                update +='Kopfzeile:~1|';
                update +='Fusszeile:~1|';
                update+='!';
            //privat fax atribut !=1
                update +='Aktiv:~0|';
                update +='Titelbild:~1|';
                update+='produkt Bild:~1|';
                update+='Anschrift Font:~1|';
                update+='produkt Font:~1|';
                update+='Zutat Font:~1|';
                update+='Kunden Analyse:~0|';
                update+='eMail senden:~0|';
                update+='!';
            //rest
                update+='nach rechts:~0|';
                update+='Kuechen Titel grosse:~1.0|';
                update+='!';
                //update+='3!58!5!6!7!8!@';
            fax_optionen_string=update;
        }
        //alert(fax_optionen_string);
    }



    function update_zutat_Optionkette(zutatId,update)//uzok
    {
        if(update!=''||update!=null)
        {
            update_mini_Zelle_zutatBibliothek(zutatId,3,update);
        }
        else
            alert('update_zutat_Optionkette() hat null parameter(update:'+update+')');
    }
    function herf_8918_satz_8918_finder(href_id,stop)
    {
        return $('#C_mini_Zelle_herfs'+href_id).text();
    }
    function update_preis_und_angebot(preis,speiseId,FormatId,angebot)
    {
        //alert('sId: '+speiseId+'\n fid: '+FormatId);
        //var antwort = '';//position|xy|picId|@
        var ziel_href = $('#C1986_speise_id_und_format_id'+speiseId+'_'+FormatId).text();
               // antwort += ziel_href.split("!")[0].split("|")[0] + '|' +
                 //        ziel_href.split("!")[0].split("|")[1] + '|' +
                 //        ziel_href.split("!")[0].split("|")[2] + '|' +
                   //      ziel_href.split("!")[0].split("|")[3] + '|' +
                    //     preis + '|' +
                    //     ziel_href.split("!")[0].split("|")[5] + '|' +
                      //   ziel_href.split("!")[0].split("|")[6] + '|' ;
                    
                //update_href_modern(ziel_href.split('!')[1],0,antwort);
                update_href_modern(ziel_href.split('!')[1],0,preis);
                update_href_modern(ziel_href.split('!')[1],13,angebot);
        //mini_Zelle_herfs = antwort;
    }

    function foto_wwwin2()
    { //////// bilder
        var bilder_wwwin_string = '';
        var speisen_zellen = mini_Zelle_bildReihenfolge.split("@");
        return speisen_zellen;
        //52336!52336!52325!1003!55!-1!3594!-!piinsert!
    }



    function gruppen_insert(zeitId,coords,name_der_gruppe)
    {
        var anzahl = mini_Zelle_gruppen.split("@").length;
        var newId = Id_geber();
        var insertvalue = name_der_gruppe + '!' + newId + '!' + zeitId + '!!35!36300!0!-!line 9046^!@';
        insert_mini_Zelle_gruppen(insertvalue);
        var newcoordId = Id_geber();

        var newFormatId = Id_geber();
        mini_Zelle_formatid += 'f0!' + newFormatId + '!' + newId + '!' +
                            //newFormatId + '!39!' + insert_geld_zutat_anzahl() + '!0!-!0|0|0!@';
                            newFormatId + '!39!leer!0!-!0|0|0!@';
        return newId + '|' + coords + newcoordId + '!' + newId + '!' + newId + '!50!29800!0!' + newId + '!' + name_der_gruppe + '!';
    }


    




    function replace_go(value)//foin
    {
        value = value.replace(/\!/g, '~');
        value = value.replace(/\@/g, '#');
        return value;
    }
    function replace_back(value)//foin
    {
        value = value.replace(/\~/g, '!');
        value = value.replace(/\#/g, '@');
        return value;
    }


    function newmatrix()
    {
        herfss.laden(id);
        mini_design_Unico_bGColor = herfss.mini_design_Unico_bGColor_().value;//?
        mini_design_Unico_lineColor = herfss.mini_design_Unico_lineColor_().value;
        mini_design_Unico_smsTd = herfss.mini_design_Unico_smsTd_().value;
        mini_Zelle_gruppen = herfss.mini_Zelle_gruppen_().value;
        mini_Zelle_gruppen_coords = herfss.mini_Zelle_gruppen_coords_().value;
        mini_Zelle_zutatBibliothek = herfss.mini_Zelle_zutatBibliothek_().value;
        mini_Zelle_SpeiseNr = herfss.mini_Zelle_SpeiseNr_().value;//?
        mini_Zelle_formatid = herfss.mini_Zelle_formatid_().value;
        mini_Zelle_zutatpreis = herfss.mini_Zelle_zutatpreis_().value;
        mini_Zelle_bildReihenfolge = herfss.mini_Zelle_bildReihenfolge_().value;
        mini_Zelle_herfs = herfss.mini_Zelle_herfs_().value;
        mini_Zelle_V_zutat_speise = herfss.mini_Zelle_V_zutat_speise_().value;
        mini_Zelle_format_etikett = herfss.mini_Zelle_format_etikett_().value;
        //mini_Zelle_logo = herfss.mini_Zelle_logo_().value;
        var table=zero('table',0,0,0,1,document.getElementById('divtitle'));var body=zero('tbody',0,0,0,0,table);
        
        var tr_titel=zero('tr',0,0,0,0,body);
        var td_titel=zero('td',0,0,0,0,tr_titel);td_titel.style.verticalAlign = 'top';
        open_matrix_spalte(mini_design_Unico_bGColor,'mini_design_Unico_bGColor',td_titel);//
        var td_titel=zero('td',0,0,0,0,tr_titel);td_titel.style.verticalAlign = 'top';
        open_matrix_spalte(mini_design_Unico_lineColor,'mini_design_Unico_lineColor',td_titel);//
        var td_titel=zero('td',0,0,0,0,tr_titel);td_titel.style.verticalAlign = 'top';
        open_matrix_spalte(mini_design_Unico_smsTd,'mini_design_Unico_smsTd',td_titel);//
        var td_titel=zero('td',0,0,0,0,tr_titel);td_titel.style.verticalAlign = 'top';
        open_matrix_spalte(mini_Zelle_gruppen,'mini_Zelle_gruppen',td_titel);//
        var td_titel=zero('td',0,0,0,0,tr_titel);td_titel.style.verticalAlign = 'top';
        open_matrix_spalte(mini_Zelle_gruppen_coords,'mini_Zelle_gruppen_coords',td_titel);//
        var td_titel=zero('td',0,0,0,0,tr_titel);td_titel.style.verticalAlign = 'top';
        open_matrix_spalte(mini_Zelle_zutatBibliothek,'mini_Zelle_zutatBibliothek',td_titel);//
        var td_titel=zero('td',0,0,0,0,tr_titel);td_titel.style.verticalAlign = 'top';
        open_matrix_spalte(mini_Zelle_SpeiseNr,'mini_Zelle_SpeiseNr',td_titel);//
        var td_titel=zero('td',0,0,0,0,tr_titel);td_titel.style.verticalAlign = 'top';
        open_matrix_spalte(mini_Zelle_V_zutat_speise,'mini_Zelle_V_zutat_speise',td_titel);//
        var td_titel=zero('td',0,0,0,0,tr_titel);td_titel.style.verticalAlign = 'top';
        
        var td_titel=zero('td',0,0,0,0,tr_titel);td_titel.style.verticalAlign = 'top';
        open_matrix_spalte(mini_Zelle_formatid,'mini_Zelle_formatid',td_titel);//
        var td_titel=zero('td',0,0,0,0,tr_titel);td_titel.style.verticalAlign = 'top';
        open_matrix_spalte(mini_Zelle_zutatpreis,'mini_Zelle_zutatpreis',td_titel);//
        var td_titel=zero('td',0,0,0,0,tr_titel);td_titel.style.verticalAlign = 'top';
        open_matrix_spalte(mini_Zelle_bildReihenfolge,'mini_Zelle_bildReihenfolge',td_titel);//
        var td_titel=zero('td',0,0,0,0,tr_titel);td_titel.style.verticalAlign = 'top';
        open_matrix_spalte(mini_Zelle_herfs,'mini_Zelle_herfs',td_titel);//
        
        var td_titel=zero('td',0,0,0,0,tr_titel);td_titel.style.verticalAlign = 'top';
        open_matrix_spalte(mini_Zelle_format_etikett,'mini_Zelle_format_etikett',td_titel);//
        var td_titel=zero('td',0,0,0,0,tr_titel);td_titel.style.verticalAlign = 'top';
        //open_matrix_spalte(mini_Zelle_logo,'mini_Zelle_logo',td_titel);//
        
    }
    
    function open_matrix_spalte(art_string,titel,td_titel)
    {
        var table=zero('table',0,0,0,1,td_titel);var body=zero('tbody',0,0,0,0,table);
        var tr_titel=zero('tr',0,0,0,0,body);var td_titel=zero('td',0,0,0,0,tr_titel);td_titel.colSpan='9';
            tzt(4, titel+'('+ (art_string.split("@").length-1) + ')', '#000000', td_titel);
        for (var i = 0; i < art_string.split("@").length-1; i++) 
        {   
            var tr=zero('tr',0,0,0,0,body);
            for (var i2 = 0; i2 < art_string.split("@")[i].split("!").length-1; i2++) 
            { 
                var td=zero('td',0,0,0,0,tr);
                td.bgColor = '#0943cf';
                var span=zero('p',0,0,0,0,td);
                span.id='langezeile';
                tzt(4, art_string.split("@")[i].split("!")[i2], '#ffffff', span);
                
            }
        }
        
    }
   