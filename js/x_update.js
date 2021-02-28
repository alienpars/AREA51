

function update_gruppen_zero_modern(gruppen_id,atribut_nr,value)//melika
{  
    var update = '';
    var href_vv = $('#C_mini_Zelle_gruppen'+gruppen_id).text();
    for (var i2 = 0; i2 < href_vv.split("!")[0].split("|").length-1; i2++)
    {
        if(i2==atribut_nr)
        {
            update+=value+'|';
        }
        else{update+=href_vv.split("|")[i2]+'|';}
    }
    update_gruppen_modern(gruppen_id,0,update);
}
function update_gruppen_modern(gruppen_id,atribut_nr,value)
{  
    var update = '';

    var href_vv = $('#C_mini_Zelle_gruppen'+gruppen_id).text();
    for (var i2 = 0; i2 < href_vv.split("!").length-1; i2++)
    {
        if(i2==atribut_nr){update+=value+'!';}
        else{update+=href_vv.split("!")[i2]+'!';}
    }
    update+= '@';
    $('#C_mini_Zelle_gruppen'+gruppen_id).text(update);
}



function update_speise_modern(speise_id,atribut_nr,value)
{  
    var update = '';
    var href_vv = $('#C_mini_Zelle_SpeiseNr'+speise_id).text();
    for (var i2 = 0; i2 < href_vv.split("!").length-1; i2++)
    {
        if(i2==atribut_nr){update+=value+'!';}
        else{update+=href_vv.split("!")[i2]+'!';}
    }
    update+= '@';

    $('#C_mini_Zelle_SpeiseNr'+speise_id).text(update);
    $('#C890_speise_id_gr_class'+speise_id).text(update);
}




function update_mini_Zelle_V_zutat_speise(V_id,atribut_nr,value)
{  
    var update = '';
    var href_vv = $('#C_mini_Zelle_V_zutat_speise'+V_id).text();
    for (var i2 = 0; i2 < href_vv.split("!").length-1; i2++)
    {
        if(i2==atribut_nr){update+=value+'!';}
        else{update+=href_vv.split("!")[i2]+'!';}
    }
    update+= '@';

    $('#C_mini_Zelle_V_zutat_speise'+V_id).text(update);
    $('#C858_V_id_speise_class'+V_id).text(update);
    $('#C858_V_id_gruppe_class'+V_id).text(update);
}



function update_mini_Zelle_zutatBibliothek(zutat_id,atribut_nr,value)
{  
    var update = '';
    var href_vv = $('#C_mini_Zelle_zutatBibliothek'+zutat_id).text();
    for (var i2 = 0; i2 < href_vv.split("!").length-1; i2++)
    {
        if(i2==atribut_nr){update+=value+'!';}
        else{update+=href_vv.split("!")[i2]+'!';}
    }
    update+= '@';

    $('#C_mini_Zelle_zutatBibliothek'+zutat_id).text(update);
    $('#C829_zutat_id_gr_class'+zutat_id).text(update);
}



function update_href_modern(href_id,atribut_nr,value)
{  
    var update = '';

    var href_vv = $('#C_mini_Zelle_herfs'+href_id).text();
    for (var i2 = 0; i2 < href_vv.split("!").length-1; i2++)
    {
        if(i2==atribut_nr){update+=value+'!';}
        else{update+=href_vv.split("!")[i2]+'!';}
    }
    update+= '@';
    speise_herf_f0 = herf_8918_satz_8918_finder(href_id);
    //update_hreft_und_derivaten_href(href_id,update);

    var speise_id = $('#C_mini_Zelle_herfs'+href_id).text().split('!')[2];
    $('#C1979_speise_f0-'+speise_id).text(update);
    var format_id = $('#C_mini_Zelle_herfs'+href_id).text().split('!')[3];
    var gruppen_id = $('#C_mini_Zelle_herfs'+href_id).text().split('!')[7];
    $('#C_mini_Zelle_herfs'+href_id).text(update);
    
    
    $('#C1986_speise_id_und_format_id'+speise_id+'_'+format_id).text(update);
    $('#C1987_href_id_gr_class'+href_id).text(update);
    $('#C1988_href_id_format_class'+href_id).text(update);
    $('#C1988_href_id_speise_class'+href_id).text(update);
}

function open_div_103()
{
    if(document.getElementById('Div_an_alle'))$('#Div_an_alle').remove();var Div_an_alle= zero('div', 0, 0, 0, 0,document.body);$(Div_an_alle).css({'top' : '50px','position':'fixed','z-index':'50','background-color':'#16ffe6','width' :'35%' , 'height' :'73%', 'left' :'53%',"border":"3px solid black",'border-color': '#'+ speise5,});
    Div_an_alle.id='Div_an_alle';         close_me_knopf(Div_an_alle);
    var icon_open_text_speisename = k_m_f('101','gka mini_Zelle_SpeiseNr',Div_an_alle,'',10,'on',(speise4-8),speise2);
        //icon_open_text_speisename.onclick = function(){update_alle_speise_namen(mini_Zelle_SpeiseNr,'mini_Zelle_SpeiseNr');}
        icon_open_text_speisename.onclick = function(){update_alle_speise_namen($('.mini_Zelle_SpeiseNr').text(),'mini_Zelle_SpeiseNr');}
    var icon_open_mini_Zelle_herfs = k_m_f('101','axp mini_Zelle_herfs',Div_an_alle,'',10,'on',(speise4-8),speise2);
        icon_open_mini_Zelle_herfs.onclick = function()
        {
            update_alle_speise_namen($('.mini_Zelle_herfs').text(),'mini_Zelle_herfs');
        }
    var icon_open_mini_Zelle_herfs = k_m_f('101','clot mini_Zelle_V_zutat_speise',Div_an_alle,'',10,'on',(speise4-8),speise2);
        icon_open_mini_Zelle_herfs.onclick = function()
        {
            update_alle_speise_namen($('.mini_Zelle_V_zutat_speise').text(),'mini_Zelle_V_zutat_speise');
        }
     var icon_open_gruppen = k_m_f('101','90111 mini_Zeelle_gruppen',Div_an_alle,'',10,'on',(speise4-8),speise2);
        //icon_open_gruppen.onclick = function(){update_alle_speise_namen(mini_Zelle_gruppen,'mini_Zelle_gruppen');}
        icon_open_gruppen.onclick = function(){update_alle_speise_namen($('.mini_Zelle_gruppen').text(),'mini_Zelle_gruppen');}
        //gutschein_eintrag
    var icon_open_gruppen = k_m_f('101','gsi Gutscheine',Div_an_alle,'',10,'on',(speise4-8),speise2);
        //icon_open_gruppen.onclick = function(){update_alle_speise_namen(mini_Zelle_gruppen,'mini_Zelle_gruppen');}
        icon_open_gruppen.onclick = function(){
            gutschein_insert();
        }
}
function gutschein_insert()
{
    if(document.getElementById('Div_wochen_93_optionen'))$('#Div_wochen_93_optionen').remove();
    var Div_wochen_93_optionen= zero('div', 0, 0, 0, 0,document.body);$(Div_wochen_93_optionen).css({'top' : '50px','position':'fixed','z-index':'50','background-color':'#16ffe6','width' :'95%' , 'height' :'83%', 'left' :'3%',"border":"3px solid black",'border-color': '#'+ speise5,'overflow':'auto'});Div_wochen_93_optionen.id='Div_wochen_93_optionen';$(Div_wochen_93_optionen).text('106jikm');close_me_knopf(Div_wochen_93_optionen);var div_117= zero('div', 0, 0, 0, 0,Div_wochen_93_optionen);$(div_117).css({ 'height' :'90%', });
    var name_textarea = zero('textarea', 0, 0, 0, 0, div_117);name_textarea.id='my_Gutschein_textarea';
    $(name_textarea).css({'height':'90%','width':'95%','position':'relative',});$(name_textarea).val();

    var speichern_icon = k_m_f('y83imk','Speichern',Div_wochen_93_optionen,'',10,'on',(speise4-8),speise2);
    speichern_icon.onclick = function()
    {
        alert(xy.insert_gutscheine($('#my_Gutschein_textarea').val()).value +' wurden eingetragen');
    };
}
function update_alle_speise_namen(wert,art)
{
    if(document.getElementById('Div_wochen_93_optionen'))$('#Div_wochen_93_optionen').remove();
    var Div_wochen_93_optionen= zero('div', 0, 0, 0, 0,document.body);$(Div_wochen_93_optionen).css({'top' : '50px','position':'fixed','z-index':'50','background-color':'#16ffe6','width' :'95%' , 'height' :'83%', 'left' :'3%',"border":"3px solid black",'border-color': '#'+ speise5,'overflow':'auto'});Div_wochen_93_optionen.id='Div_wochen_93_optionen';$(Div_wochen_93_optionen).text('106jikm');close_me_knopf(Div_wochen_93_optionen);var div_117= zero('div', 0, 0, 0, 0,Div_wochen_93_optionen);$(div_117).css({ 'height' :'90%', });
    var name_textarea = zero('textarea', 0, 0, 0, 0, div_117);name_textarea.id='add_grups_text';$(name_textarea).css({'height':'90%','width':'95%','position':'relative',});$(name_textarea).val(wert);
    var bruch_icon = k_m_f('cewrr4w','Zeilenbruch',Div_wochen_93_optionen,'',10,'on',(speise4-8),speise2);bruch_icon.onclick = function()
    {
        wert=wert.replace(/\n/g, '');
        wert=wert.replace(/\@/g, '@\n');
        update_alle_speise_namen(wert,art);
    };
    var speichern_icon = k_m_f('y83imk','Speichern',Div_wochen_93_optionen,'',10,'on',(speise4-8),speise2);
    speichern_icon.onclick = function()
    {
    
        if(art=='mini_Zelle_SpeiseNr')
        {
            wert=$(name_textarea).val();
            entladen_direkt_update_mini_Zelle_SpeiseNr(wert);
        }
        if(art=='mini_Zelle_herfs')
        {
            wert=$(name_textarea).val();
            entladen_direkt_update_mini_Zelle_herfs(wert);
        }
        if(art=='mini_Zelle_gruppen')
        {
            wert=$(name_textarea).val();
            entladen_direkt_update_mini_Zelle_gruppen(wert);
        }
        if(art=='mini_Zelle_V_zutat_speise')
        {
            wert=$(name_textarea).val();
            entladen_direkt_update_mini_Zelle_V_zutat_speise(wert);
        }
        //update_alle_speise_namen(wert,art);
        alert('js_122  gepeichert \n refresh ERFORDERLICH!!!!');
    };
}
function entladen_direkt_update_mini_Zelle_herfs(wert)
{
        update_hauptmp3_2017(16,web_options_liste);//update_web_options
        update_hauptmp3_2017(5,restaurant_art);//update_restaurant_art
        update_hauptmp3_2017(2,haupt_mp3_split_2);//update_offnungen
        update_hauptmp3_2017(3,plz_iformation);
        //xy.update_plz(plz_iformation,restaurantId);//update_plz//insert_dise_plz_in_plz_hauptmp3
        update_hauptmp3_2017(17,mini_design_Unico_bGColor);//update_color_fax_mail
        update_hauptmp3_2017(12,fax_optionen_string);//uapdate_fax_optionen
        aj_laden();
        //xy.update_zutat_quelle(mini_Zelle_zutat_quelle);
        var new_hauptMP3 = $('#C2158_haupt_mp3_div').text();
        var meldung = xy.entladen_modern(id,restaurantId,new_hauptMP3
        ,mini_design_Unico_bGColor
        ,mini_design_Unico_lineColor
        ,mini_design_Unico_smsTd//3
        ,$('.mini_Zelle_gruppen').text()
        ,mini_Zelle_formatid//5
        ,mini_Zelle_format_etikett//6
        //,wert//7
        ,$('.mini_Zelle_SpeiseNr').text()//7
        //,$('.mini_Zelle_herfs').text()//8
        ,wert//7
        ,$('.mini_Zelle_zutatBibliothek').text()//9
        ,mini_Zelle_zutatpreis//10
        ,$('.mini_Zelle_V_zutat_speise').text()//11
        ,mini_Zelle_bildReihenfolge//12
        ,mini_Zelle_rest).value;
        if (meldung!='')
            alert(meldung);
        else{alert2(400,'wird gespeichert')};
        //xy.update_Gruppen_in_suchmachiene(restaurantId,id);
}
function entladen_direkt_update_mini_Zelle_V_zutat_speise(wert)
{
        update_hauptmp3_2017(16,web_options_liste);//update_web_options
        update_hauptmp3_2017(5,restaurant_art);//update_restaurant_art
        update_hauptmp3_2017(2,haupt_mp3_split_2);//update_offnungen
        update_hauptmp3_2017(3,plz_iformation);
        //xy.update_plz(plz_iformation,restaurantId);//update_plz//insert_dise_plz_in_plz_hauptmp3
        update_hauptmp3_2017(17,mini_design_Unico_bGColor);//update_color_fax_mail
        update_hauptmp3_2017(12,fax_optionen_string);//uapdate_fax_optionen
        aj_laden();
        //xy.update_zutat_quelle(mini_Zelle_zutat_quelle);
        var new_hauptMP3 = $('#C2158_haupt_mp3_div').text();
        var meldung = xy.entladen_modern(id,restaurantId,new_hauptMP3
        ,mini_design_Unico_bGColor
        ,mini_design_Unico_lineColor
        ,mini_design_Unico_smsTd//3
        ,$('.mini_Zelle_gruppen').text()
        ,mini_Zelle_formatid//5
        ,mini_Zelle_format_etikett//6
        //,wert//7
        ,$('.mini_Zelle_SpeiseNr').text()//7
        ,$('.mini_Zelle_herfs').text()//8
        ,$('.mini_Zelle_zutatBibliothek').text()//9
        ,mini_Zelle_zutatpreis//10
        ,wert//7
        //,$('.mini_Zelle_V_zutat_speise').text()//11
        ,mini_Zelle_bildReihenfolge//12
        ,mini_Zelle_rest).value;
        if (meldung!='')
            alert(meldung);
        else{alert2(400,'wird gespeichert')};
        //xy.update_Gruppen_in_suchmachiene(restaurantId,id);
}
function entladen_direkt_update_mini_Zelle_SpeiseNr(wert)
{
        update_hauptmp3_2017(16,web_options_liste);//update_web_options
        update_hauptmp3_2017(5,restaurant_art);//update_restaurant_art
        update_hauptmp3_2017(2,haupt_mp3_split_2);//update_offnungen
        update_hauptmp3_2017(3,plz_iformation);
        //xy.update_plz(plz_iformation,restaurantId);//update_plz//insert_dise_plz_in_plz_hauptmp3
        update_hauptmp3_2017(17,mini_design_Unico_bGColor);//update_color_fax_mail
        update_hauptmp3_2017(12,fax_optionen_string);//uapdate_fax_optionen
        aj_laden();
        //xy.update_zutat_quelle(mini_Zelle_zutat_quelle);
        var new_hauptMP3 = $('#C2158_haupt_mp3_div').text();
        var meldung = xy.entladen_modern(id,restaurantId,new_hauptMP3
        ,mini_design_Unico_bGColor
        ,mini_design_Unico_lineColor
        ,mini_design_Unico_smsTd//3
        ,$('.mini_Zelle_gruppen').text()
        ,mini_Zelle_formatid//5
        ,mini_Zelle_format_etikett//6
        ,wert//7
        ,$('.mini_Zelle_herfs').text()//8
        ,$('.mini_Zelle_zutatBibliothek').text()//9
        ,mini_Zelle_zutatpreis//10
        ,$('.mini_Zelle_V_zutat_speise').text()//11
        ,mini_Zelle_bildReihenfolge//12
        ,mini_Zelle_rest).value;
        if (meldung!='')
            alert(meldung);
        else{alert2(400,'wird gespeichert')};
        //xy.update_Gruppen_in_suchmachiene(restaurantId,id);
}
function entladen_direkt_update_mini_Zelle_gruppen(wert)
{
        update_hauptmp3_2017(16,web_options_liste);//update_web_options
        update_hauptmp3_2017(5,restaurant_art);//update_restaurant_art
        update_hauptmp3_2017(2,haupt_mp3_split_2);//update_offnungen
        update_hauptmp3_2017(3,plz_iformation);
        //xy.update_plz(plz_iformation,restaurantId);//update_plz//insert_dise_plz_in_plz_hauptmp3
        update_hauptmp3_2017(17,mini_design_Unico_bGColor);//update_color_fax_mail
        update_hauptmp3_2017(12,fax_optionen_string);//uapdate_fax_optionen
        aj_laden();
        //xy.update_zutat_quelle(mini_Zelle_zutat_quelle);
        var new_hauptMP3 = $('#C2158_haupt_mp3_div').text();
        var meldung = xy.entladen_modern(id,restaurantId,new_hauptMP3
        ,mini_design_Unico_bGColor
        ,mini_design_Unico_lineColor
        ,mini_design_Unico_smsTd//3
        ,wert
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
        //xy.update_Gruppen_in_suchmachiene(restaurantId,id);
}

    
function gruppen_bild_update(gruppen_nummer,folder_name)
{
    $('#add_grups6812').remove();
    var add_grups= zero('div', 0, 0, 0, 0,document.body);$(add_grups).text('Update Bild 5922');add_grups.id='add_grups6812';
    close_me_knopf(add_grups);
    $(add_grups).css({'width':'97%','height':'90%','position':'fixed','right':'5px','top':'12px','background-color': 'green','z-index':'2100',
    'overflow':'auto',});
    //alert(2);
    var table=zero('table',0,0,0,1,add_grups);var body=zero('tbody',0,0,0,0,table);
        var tr_titel=zero('tr',0,0,0,0,body);
    var alle_bilder = xy.alle_bilder(pic_link,folder_name).value;
    var laender_server_split='';
    if(vorwahl==98)  laender_server_split=';';else{laender_server_split='&'};
    var td_ticker=0;
    for (var i = 1; i < alle_bilder.split(laender_server_split).length; i++) 
    {
        td_ticker++;
        var td_bild=zero('td',0,0,0,0,tr_titel);td_bild.width='110px';
        if(td_ticker==11){td_ticker=0;var tr_titel=zero('tr',0,0,0,0,body);}
        //var div_bild = zero('div',0,'0','0','0',td_bild);
        var div_bild = zero('img',pic_link+'/'+folder_name+'/&'+alle_bilder.split(laender_server_split)[i].split('.')[0]+'.jpg','80','0','0',td_bild);
        //$(cls_kch).css({'float':'right','padding':'6px','cursor': 'pointer'});cls_kch.onclick = function(){$('#matt_flach_menu').remove();};
        div_bild.id=folder_name+'/&'+alle_bilder.split(laender_server_split)[i].split('.')[0];
        //$(div_bild).css({'cursor': 'pointer','border-radius': '5px',
        //"background-image":'url('+pic_link+'/'+folder_name+'/&'+alle_bilder.split(laender_server_split)[i].split('.')[0]+'.jpg',
        //'background-size': '100%','height': '80px','background-Repeat':'no-repeat',
        //'width':'90%',});
        $(div_bild).css({'cursor': 'pointer','padding':'3px'});
        
        $(div_bild).hover(
            function(){
                var img_pop_up = zero('img',pic_link+'/'+this.id+'.jpg','0','0','0',document.body);
                img_pop_up.className='ko7djj';
                $(img_pop_up).css({'z-index': '2202','position':'fixed','top':'50px'});
            },
            function(){
                $('.ko7djj').remove();
            });
    
        //$(div_bild).infobox("#infobox",'sp_waehlen',1,1);
        var div_bild_name = zero('div',0,'0','0','0',td_bild);
        $(div_bild_name).text(alle_bilder.split(laender_server_split)[i].split('.')[0]);
        
        $(div_bild).dblclick(function() 
        {
            if(folder_name == 'web_album')
            {
                update_gruppen_modern(gruppen_nummer,7,this.id);
                element_filter_technologie();
                $(add_grups).remove();
            }
            //update 
            if(folder_name == 'bg_img')
            {//bg_img/&vqno25mdc12!404!402!-2!58!1815!0!-!insertWochentage
                if(mini_design_Unico_lineColor=='')
                {// regeneration
                    mini_design_Unico_lineColor = '0!'+id+'!'+id+'!3!58!1815!0!-!insertWochentage!';
                }
                mini_design_Unico_lineColor = this.id+'!'+
                                              mini_design_Unico_lineColor.split('!')[1]+'!'+
                                              mini_design_Unico_lineColor.split('!')[2]+'!'+
                                              mini_design_Unico_lineColor.split('!')[3]+'!'+
                                              mini_design_Unico_lineColor.split('!')[4]+'!'+
                                              mini_design_Unico_lineColor.split('!')[5]+'!'+
                                              mini_design_Unico_lineColor.split('!')[6]+'!'+
                                              mini_design_Unico_lineColor.split('!')[7]+'!'+
                                              mini_design_Unico_lineColor.split('!')[8]+'!@';
                //hauptmp3 speicherung
                update_web_option(25,pic_link+'/'+this.id+'.jpg');
                $('html, body').css({'background-size': '100%',"background-image":'url('+pic_link+'/'+this.id+'.jpg)','z-index':'2101',}) 
                //alert(pic_link+'/'+this.id+'.jpg'); 
                $(add_grups).remove();
            }     
        $('.ko7djj').remove();
        });
        
        
    }
    var tr_refresh=zero('tr',0,0,0,0,body);
     var weg = k_m_f('cewrr4w','Refresh 6890',tr_refresh,'',10,'on',(speise4-8),speise2);
    weg.onclick = function(){
            gruppen_bild_update(gruppen_nummer,folder_name);
        };
    var tr_ifram=zero('tr',0,0,0,0,body);
    var td_iframe=zero('td',0,0,0,0,tr_ifram);td_iframe.colSpan='20';
        var td_iframe_div=zero('div',0,770,340,0,td_iframe);
        var iftaam_iinn = pic_link+'/pic_zehn.aspx?ordner='+folder_name;
        var td_iframe2=zero('iframe',iftaam_iinn,750,320,0,td_iframe_div);
        //td_iframe_div.id='fram:'+piiic_id_fo;
}

function gruppen_text_update(gruppen_nummer,update0_1_2_3)//arten = 
{

    
    $('#no_dble').remove();
    var add_grups= zero('div', 0, 0, 0, 0,document.body);
    add_grups.id='no_dble';
    $(add_grups).css({'width':'550px','height':'200px','position':'fixed','right':'100px','top':'172px',
    'background-color': 'RoyalBlue','z-index':'2',});
    $(add_grups).text('74gx update_art('+update0_1_2_3+')');            
    close_me_knopf(add_grups);
    
    var gruppen_satz ='';
    if(update0_1_2_3==6)//zutat stufen eintrag
    {
        var update_grups_input = zero('textarea', 0, 0, 0, 0, add_grups);//mki
        update_grups_input.id='update_grups_text';
        $(update_grups_input).val($('#C_mini_Zelle_gruppen'+gruppen_nummer).text().split('!')[6]);
        $(update_grups_input).focus();
        $(update_grups_input).select();
    }
    else
    {
        var update_grups_input = zero('textarea', 0, 0, 0, 0, add_grups);//mki
        
        update_grups_input.id='update_grups_text';
        $(update_grups_input).val($('#C_mini_Zelle_gruppen'+gruppen_nummer).text().split('!')[0].split('|')[update0_1_2_3])
        $(update_grups_input).focus();
        $(update_grups_input).select();
    } 
        $(update_grups_input).css({'width':'540px','height':'150px',});
    var div_kiv= zero('div', 0, 0, 0, 0,add_grups);
    var input_button = k_m_f('rt56','68ga update gruppe',div_kiv,'',10,'on',(speise4-7),speise2);
    input_button.onclick = function()
    { 
        var my_value = $(update_grups_input).val().replace(/@/g, '');
        my_value = my_value.replace(/!/g, '');
        my_value = my_value.replace(/|/g, '');
        my_value = my_value.replace(/#/g, '');
    
        if(update0_1_2_3=='6')
        {
            update_gruppen_modern(gruppen_nummer,6,my_value);
            x_zutat_geld_js_zutat_stufen_betrag_2017(gruppen_nummer);
        }
        else{
            if(update0_1_2_3==0)
                update_gruppen_zero_modern(gruppen_nummer,update0_1_2_3,my_value.toUpperCase());
            else
            {
                update_gruppen_zero_modern(gruppen_nummer,update0_1_2_3,my_value);
            }
        }
        element_filter_technologie();
        $(add_grups).remove();
    }
}
function speise_name_update(speise_nummer) 
{
    $('#hsy7').remove();
    var add_grups= zero('div', 0, 0, 0, 0,document.body);add_grups.id='hsy7';
    close_me_knopf(add_grups);
    $(add_grups).css({'width':'|750px','height':'200px','position':'fixed','right':'10px','top':'172px','background-color': 'blue','z-index':'2',});
    var update_grups_input = zero('textarea', 0, 500, 100, 0, add_grups);//mki
    update_grups_input.id='update_grups_text';
    var name = $('#C_mini_Zelle_SpeiseNr'+speise_nummer).text().split('!')[0];
    name = name.replace(/\n/g, '');
    $(update_grups_input).val(name);
    $(update_grups_input).focus();
    $(update_grups_input).select();
    var speise_satz ='';
    var sup_icon = k_m_f('u9piewp9','5141 <sup>',add_grups,'',10,'on',(speise4-5),speise2);
    sup_icon.onclick = function()
    {
        sup_switcher(update_grups_input,speise_nummer);
        $(add_grups).remove();
    }
    var sup_icon = k_m_f('u9piewp9','67sl power <sup>',add_grups,'',10,'on',(speise4-5),speise2);
    sup_icon.onclick = function()
    {
        power_sup(update_grups_input);
        $(add_grups).remove();
    }
    
    var input_button = k_m_f('u9piewp9','6225 Speichern',add_grups,'',10,'on',(speise4-5),speise2);
    input_button.onclick = function()
    { 
        update_speise_modern(speise_nummer,0,$(update_grups_input).val());

        element_filter_technologie();
        $(add_grups).remove();
    }
}
function sup_switcher(update_element,speise_nummer) 
{
    var stoff_legende=DS_readTextFile('fsw/stoff_legende.txt');
    $('#iwxk').remove();
    var add_grups= zero('div', 0, 0, 0, 0,document.body);close_me_knopf(add_grups);add_grups.id='iwxk';
    $(add_grups).css({'width':'98%','height':'95%','position':'fixed','right':'1%','top':'1%','background-color': 'RoyalBlue','z-index':'2000','overflow':'auto'});
    
    var abc123=';a;b;c;d;e;f;g;h;i;j;k;l;m;n;o;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20;21;22;'
    if(web_options_liste.split("|")[28].split("^")[1]=='0')
    {//erst eintrag
        update_web_options(abc123,28);
    }
    else
    {
        abc123 = web_options_liste.split("|")[28].split("^")[1];
    }
    
    var div_beschreibung= zero('label', 0, 0, 0, 0,add_grups);
    $(div_beschreibung).text('bitte mit , trennen z.B. (3,4,8,h) ');
    var inputs= zero('input', 0, 0, 0, 0,add_grups);
    $(inputs).css({'width':'200px',});
    //var dato_sub=$(update_element).val().split('<sup>')[1];
    //$(inputs).val(dato_sub);
    var antwort='';
    $(inputs).select();
    var erste_komma_reiniger=0;
    var icon_adapterring = k_m_f('dw3','hf2 Ad_sup and adapterring',add_grups,'',10,'on',(speise4-4),speise2);
    icon_adapterring.onclick = function()
    {
        var duplikat_blocker = '';
        var imput_wert = $(inputs).val();
        imput_wert = imput_wert.toLowerCase();
        //imput_wert = imput_wert.toUpperCase();
        for (var i2 = 0; i2 < imput_wert.split(",").length; i2++) 
        {
            if(!document.getElementById('info_uf45-'+imput_wert.split(",")[i2]))
                alert2(1500,imput_wert.split(",")[i2]+' ist nicht eingetragen!');
            else
            {
                if(erste_komma_reiniger!=0)antwort+= ',';
                erste_komma_reiniger++;
                if(duplikat_blocker != $('#info_uf45-'+imput_wert.split(",")[i2]).text())
                {
                    duplikat_blocker = $('#info_uf45-'+imput_wert.split(",")[i2]).text();
                    antwort+=$('#info_uf45-'+imput_wert.split(",")[i2]).text();
                }
            }
        }
        $(update_element).val($(update_element).val()+' <sup>'+antwort+'</sup>');
        if(speise_nummer!='')
        {
            update_speise_modern(speise_nummer,0,$(update_element).val());
            //element_filter_technologie();
        }
        $('#iwxk').remove();
    }
    
    
    var table=zero('table',0,0,0,1,add_grups);var body=zero('tbody',0,0,0,0,table);var tr1=zero('tr',0,0,0,0,body);
    var td_11=zero('td',0,0,0,0,tr1);
    var td_dd=zero('div',0,0,0,0,td_11);
    var info_label=zero('label',0,0,0,0,td_dd);$(info_label).text('pj7 eingabe input kann auch zwei werte haben. z.B.(a1,a2,a3,a4)');
    var td_dd=zero('div',0,0,0,0,td_11);
    var icon_import = k_m_f('hud3','yl8 Import LiefHeld',td_dd,'',10,'on',(speise4-8),speise2);
    icon_import.onclick = function()
    {
        var my_val_held =  ';a,a1,a2,a3,a4;b;c;d;e;f;g;h,h1,h2,h3,h4,h5,h6,h7,h8;i;j;k;l;m;n;o;1;2;6;5;9;10;22;7;8;4;3;-;13;14;11;12;15;20;13;14;21;16;17;19;18';
        update_web_options(my_val_held,28);
        sup_switcher(update_element);
    }
    var icon_import = k_m_f('hud3','yl9 Import Lieferando',td_dd,'',10,'on',(speise4-8),speise2);
    icon_import.onclick = function()
    {
        //var my_val_held =  ';a;b;c;d;e;f;g;h;i;j ;k ;l ;m ;n ;o;1;2;6;5;9;10;22;7;8;4;3;-;13;14;11;12;15;20;13;14;21;16;17;19;18';
        var my_val_held =  ';1;2;3;4;5;6;7;8;9;10;11;12;13;14;n;'+
        //'h;i;m;n;s;o;p;1;c;q;j;3;-;13;g;11;12;b;20;13;d;21;t;17;u;k;e;f;l;';
        'h;i;m;n;s;o;p;1;c;q;j;-;-;-;g;-;-;a;b;-;-;d;-;t;-;u;k;e;f;l;';
        update_web_options(my_val_held,28);
        sup_switcher(update_element);
    }
    
    
    //;a;b;c;d;e;f;g;h;i;j;k;l;m;n;o;1;2;6;5;9;10;22;7;8;4;3;-;13;14;11;12;15;20;13;14;21;16;17;19;18
    var fieldset= zero('fieldset', 0, 0, 0, 0,td_11);
    
    var Clone_titel2= zero('legend', 0, 0, 0, 0,fieldset);$(Clone_titel2).html(stoff_legende.split(';')[0]);
    var i_my=1;
    //14 alergien
    hh7t(fieldset,abc123,i_my,stoff_legende,'a');i_my++;
    hh7t(fieldset,abc123,i_my,stoff_legende,'b');i_my++;
    hh7t(fieldset,abc123,i_my,stoff_legende,'c');i_my++;
    hh7t(fieldset,abc123,i_my,stoff_legende,'d');i_my++;
    hh7t(fieldset,abc123,i_my,stoff_legende,'e');i_my++;
    hh7t(fieldset,abc123,i_my,stoff_legende,'f');i_my++;
    hh7t(fieldset,abc123,i_my,stoff_legende,'g');i_my++;
    hh7t(fieldset,abc123,i_my,stoff_legende,'h');i_my++;
    hh7t(fieldset,abc123,i_my,stoff_legende,'i');i_my++;
    hh7t(fieldset,abc123,i_my,stoff_legende,'j');i_my++;
    hh7t(fieldset,abc123,i_my,stoff_legende,'k');i_my++;
    hh7t(fieldset,abc123,i_my,stoff_legende,'l');i_my++;
    hh7t(fieldset,abc123,i_my,stoff_legende,'m');i_my++;
    hh7t(fieldset,abc123,i_my,stoff_legende,'n');i_my++;
    var td_dd=zero('div',0,0,0,0,td_11);
    var icon_total = k_m_f('89i','ja3 Übersetzung speichern',td_dd,'',10,'on',(speise4-2),speise2);
    //$(icon_total).css({'position':'fixed','top':'40px'});
    var antwort='';
    icon_total.onclick = function()
    {
        for (var i = 1; i <i_my; i++)
        {
            if(i!=15)
                antwort+= ';'+$("#adapter_input-"+i).val();
            if(i==15)
                antwort+= ';o';
        }
        update_web_options(antwort,28);
        sup_switcher(update_element);
        alert2(2000,'OK')
        $('#iwxk').remove();
    }
    //td2
    var td_12=zero('td',0,0,0,0,tr1);
    var fieldset= zero('fieldset', 0, 0, 0, 0,td_12);
    var Clone_titel2= zero('legend', 0, 0, 0, 0,fieldset);$(Clone_titel2).html(stoff_legende.split(';')[15]);i_my++;
    //zutatstoffe 
    var cotr=1;
    for (var i2 = 16; i2 < stoff_legende.split(";").length-1; i2++) 
    {
        hh7t(fieldset,abc123,i2,stoff_legende,cotr);cotr++;i_my++;
    }
}
function update_format(format_id,atribut,value) 
{
    var update='';
    for (var i = 0; i < mini_Zelle_formatid.split("@").length-1; i++) 
    {
        if(mini_Zelle_formatid.split("@")[i].split('!')[1]==format_id )
        {
            var my_set = mini_Zelle_formatid.split("@")[i];
            for (var i2 = 0; i2 < my_set.split("!").length-1; i2++) 
            {
                if(i2==atribut)
                {
                    update += value+'!';
                }
                else
                {
                    update += my_set.split("!")[i2]+'!';
                    
                }
            }
            update += '@';
        }
        else{
            update += mini_Zelle_formatid.split("@")[i] += '@';
        }
    }
    mini_Zelle_formatid = update;
}
function hh7t(fieldset,eingang_valu,i_my,label_val,return_val) 
{
    return_val = return_val+'';
    //abc123 = abc123.toUpperCase();
    var labels_div= zero('div', 0, 0, 0, 0,fieldset);
    var inputs= zero('input', 0, 0, 0, 0,labels_div);
    $(inputs).blur(function () 
    {
        $(this).css("color","red");
    });
    $(inputs).val(eingang_valu.split(';')[i_my]);
    $(inputs).attr({'id':'adapter_input-'+i_my})
    $(inputs).css({'width':'87px'});
    var labels= zero('label', 0, 0, 0, 0,labels_div);
    $(labels).text(label_val.split(";")[i_my]);
    $(labels).css({"padding-left":"10px",'font-weight':'bold','color':'#fff','font-size':'105%','letter-spacing':'0.01em',});
    var split67 = eingang_valu.split(';')[i_my];
    //for weil eingabe sich splitern kann durch komma
    for (var i2 = 0; i2 < split67.split(",").length; i2++) 
    {
        //info div
        var div_info=zero('div',0,0,0,0,fieldset);$(div_info).css({'display':'none',});
        $(div_info).text(return_val.toUpperCase());
        //div_info.id = 'info_uf45-'+eingang_valu.split(';')[i_my];
        div_info.id = 'info_uf45-'+split67.split(",")[i2];
    }
    
}
function power_sup(update_element) 
{
    $('#iwxk').remove();
    var add_grups= zero('div', 0, 0, 0, 0,document.body);close_me_knopf(add_grups);add_grups.id='iwxk';
    $(add_grups).css({'width':'97%','height':'95%','position':'fixed','right':'1%','top':'1%','background-color': 'RoyalBlue','z-index':'2000','overflow':'auto'});
    var stoff_legende=DS_readTextFile('fsw/stoff_legende.txt');
    
    var antwort='<sup>';
    //icon
    var i_my=1;
    var erste_komma_reiniger=0;
    var icon_total = k_m_f('115','L E G E N D E (36kx)',add_grups,'',10,'on',(speise4-4),speise2);
    $(icon_total).css({'position':'fixed',});
    icon_total.onclick = function()
    {
        for (var i = 1; i <i_my; i++)
        {
            if($("#checkbox-"+i).is(':checked'))
            {
                if(erste_komma_reiniger!=0)antwort+= ',';
                antwort+= $('#checkbox-'+i).prop('name');
                erste_komma_reiniger++;
            }
        }
        antwort+='</sup>';
        //alert(antwort);
        //return antwort;
        $(update_element).val($(update_element).val()+' '+antwort);
        $(add_grups).remove();
    }
    var table=zero('table',0,0,0,1,add_grups);var body=zero('tbody',0,0,0,0,table);var tr1=zero('tr',0,0,0,0,body);
    var td_11=zero('td',0,0,0,0,tr1);
    var fieldset= zero('fieldset', 0, 0, 0, 0,td_11);
    var Clone_titel2= zero('legend', 0, 0, 0, 0,fieldset);$(Clone_titel2).text(stoff_legende.split(';')[0]);
    hh7s(fieldset,i_my,stoff_legende,'a');i_my++;
    hh7s(fieldset,i_my,stoff_legende,'b');i_my++;
    hh7s(fieldset,i_my,stoff_legende,'c');i_my++;
    hh7s(fieldset,i_my,stoff_legende,'d');i_my++;
    hh7s(fieldset,i_my,stoff_legende,'e');i_my++;
    hh7s(fieldset,i_my,stoff_legende,'f');i_my++;
    hh7s(fieldset,i_my,stoff_legende,'g');i_my++;
    hh7s(fieldset,i_my,stoff_legende,'h');i_my++;
    hh7s(fieldset,i_my,stoff_legende,'i');i_my++;
    hh7s(fieldset,i_my,stoff_legende,'j');i_my++;
    hh7s(fieldset,i_my,stoff_legende,'k');i_my++;
    hh7s(fieldset,i_my,stoff_legende,'l');i_my++;
    hh7s(fieldset,i_my,stoff_legende,'m');i_my++;
    hh7s(fieldset,i_my,stoff_legende,'n');i_my++;
    //td2
    var td_11=zero('td',0,0,0,0,tr1);
    var fieldset= zero('fieldset', 0, 0, 0, 0,td_11);
    var Clone_titel2= zero('legend', 0, 0, 0, 0,fieldset);$(Clone_titel2).html(stoff_legende.split(';')[15]);i_my++
    //zutatstoffe 
    var cotr=1;
    for (var i2 = 16; i2 < stoff_legende.split(";").length-1; i2++) 
    {
        hh7s(fieldset,i2,stoff_legende,cotr);cotr++;i_my++
    }
}
function hh7s(fieldset,i_my,label_val,return_val) 
{
    return_val = return_val+'';
    var labels_div= zero('div', 0, 0, 0, 0,fieldset);
    var labels= zero('label', 0, 0, 0, 0,labels_div);
    $(labels).text(label_val.split(";")[i_my]+'-'+i_my+'-'+return_val);
    $(labels).attr({'for':'checkbox-'+i_my})
    var inputs= zero('input', 0, 0, 0, 0,labels_div);
    $(inputs).attr({'type':'checkbox','name':return_val.toUpperCase(),'id':'checkbox-'+i_my})
    $(inputs).checkboxradio();
}
function DS_readTextFile(file)
{
    var antwort = "";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.overrideMimeType('text/xml; charset=iso-8859-1');//umlau zeiger
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                antwort = allText;
            }
        }
    }
    rawFile.send(null);
    return antwort;
}
function kaarrten_nnnummer_update(speise_nummer) 
{
    var add_grups= zero('div', 0, 0, 0, 0,document.body);
    close_me_knopf(add_grups);
    $(add_grups).css({'width':'250px','height':'200px','position':'fixed','right':'10px','top':'172px','background-color': 'green','z-index':'2',});
    var input_button = document.createElement('input');input_button.type = 'button';input_button.style.color = '#336699';
    $(input_button).val('update No' + art);
    add_grups.appendChild(input_button);
    //fill input

            var update_grups_input = zero('textarea', 0, 0, 0, 0, add_grups);
            update_grups_input.id='update_grups_text';
            $(update_grups_input).val($('#C1979_speise_f0-'+speise_nummer).text().split('!')[0].split('|')[6]);
            
    input_button.onclick = function()
    { 
        
        update_speise_modern(speise_nummer,6,$(update_grups_input).val());
        element_filter_technologie();
        $(add_grups).remove();
    }
}
function speise_kasten_update(speise_nummer,art)//arten = komentar/ 
{
    var add_grups= zero('div', 0, 0, 0, 0,document.body);
    close_me_knopf(add_grups);
    $(add_grups).css({'width':'450px','height':'400px','position':'fixed','right':'10px','top':'172px','background-color': 'green','z-index':'2',});
    var input_button = document.createElement('input');input_button.type = 'button';input_button.style.color = '#336699';
    $(input_button).val('7080 update speise ' + art);
    add_grups.appendChild(input_button);
    
    //var speise_satz ='';
        var update_grups_input = zero('textarea', 0, 400, 350, 0, add_grups);//mki
        update_grups_input.id='update_grups_text';
        //if(update_1_2_3_4==1)
        //$(update_grups_input).val($('#C1979_speise_f0-'+speise_nummer).text().split('!')[11]);
        $(update_grups_input).val($('#C_mini_Zelle_SpeiseNr'+speise_nummer).text().split('!')[8]);
        $(update_grups_input).focus();
        $(update_grups_input).select();
        
    //}
    input_button.onclick = function()
    { 
        var update='';
        //for (var i = 0; i < $('.C1987_href_speise_class'+speise_nummer).length; i++)
        //{
          //  var my_567= $('.C1987_href_speise_class'+speise_nummer)[i];my_567=$(my_567).text();
            
           // update_href_modern(my_567.split('!')[1],11,$(update_grups_input).val());
        //}
        update_speise_modern(speise_nummer,8,$(update_grups_input).val());
        element_filter_technologie();
        $(add_grups).remove();
    }
}
function update_format_name(formatId,art)//arten = komentar/ 
{
    var add_grups= zero('div', 0, 0, 0, 0,document.body);
    close_me_knopf(add_grups);
    $(add_grups).css({'width':'450px','height':'400px','position':'fixed','right':'10px','top':'172px','background-color': 'green','z-index':'2',});
    var input_button = document.createElement('input');input_button.type = 'button';input_button.style.color = '#336699';
    $(input_button).val('6411 update speise ' + art);
    add_grups.appendChild(input_button);
    var speise_satz ='';
    for (var i = 0; i < mini_Zelle_formatid.split("@").length-1; i++) 
    {
        if(mini_Zelle_formatid.split("@")[i].split('!')[1]==formatId )
        {
                var update_grups_input = zero('textarea', 0, 400, 350, 0, add_grups);//mki
                update_grups_input.id='update_grups_text';
                $(update_grups_input).val(mini_Zelle_formatid.split("@")[i].split('!')[0]);
                $(update_grups_input).focus();
                $(update_grups_input).select();
            break;
        }
        
    }
    input_button.onclick = function()
    { 
        //update mini_Zelle_formatid
        var update='';
        for (var i = 0; i < mini_Zelle_formatid.split("@").length - 1; i++)
        {
            if (formatId == mini_Zelle_formatid.split("@")[i].split("!")[1]){    
                update += $(update_grups_input).val()+'!'+mini_Zelle_formatid.split("@")[i].split("!")[1] + '!' +mini_Zelle_formatid.split("@")[i].split("!")[2] + '!' +mini_Zelle_formatid.split("@")[i].split("!")[3] + '!' +mini_Zelle_formatid.split("@")[i].split("!")[4] + '!' +mini_Zelle_formatid.split("@")[i].split("!")[5] + '!' +mini_Zelle_formatid.split("@")[i].split("!")[6] + '!' +mini_Zelle_formatid.split("@")[i].split("!")[7] + '!' + mini_Zelle_formatid.split("@")[i].split("!")[8] + '!@';
            }
            else{
                update += mini_Zelle_formatid.split("@")[i] += '@';}
            }
        mini_Zelle_formatid = update;
        
        //update mini_Zelle_format_etikett
        //update='';for (var i = 0; i < mini_Zelle_format_etikett.split("@").length - 1; i++){if (formatId == mini_Zelle_format_etikett.split("@")[i].split("!")[2]){    update += mini_Zelle_format_etikett.split("@")[i].split("!")[0] + '!' +mini_Zelle_format_etikett.split("@")[i].split("!")[1] + '!' +mini_Zelle_format_etikett.split("@")[i].split("!")[2] + '!' +mini_Zelle_format_etikett.split("@")[i].split("!")[3] + '!' +mini_Zelle_format_etikett.split("@")[i].split("!")[4] + '!' +mini_Zelle_format_etikett.split("@")[i].split("!")[5] + '!' +mini_Zelle_format_etikett.split("@")[i].split("!")[6] + '!' +mini_Zelle_format_etikett.split("@")[i].split("!")[7] + '!' +$(update_grups_input).val() + '!@';}else{update += mini_Zelle_format_etikett.split("@")[i] += '@';}}mini_Zelle_format_etikett = update;
        
        update='';
        for (var i = 0; i < $('.C1987_href_format_class'+formatId).length; i++)
        {
            var my_value= $('.C1987_href_format_class'+formatId)[i];
            my_value=$(my_value).text();
            update_href_modern(my_value.split('!')[1],8,$(update_grups_input).val());
        }
        element_filter_technologie();
        $(add_grups).remove();
    }
}