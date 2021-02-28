




var samler_count_oijkkre = 0;
function start_wahl_zutat(body)
{
    //start Wahlzutat
    var tr_titel2230=zero('tr',0,0,0,0,body);var trb=zero('table',0,0,0,0,tr_titel2230);var trbdy=zero('tbody',0,0,0,0,trb);$(tr_titel2230).css({'background-color': '#AAA'});
    var f0_aktiv=1;
    samler_count_oijkkre = 0;
    for (var i = 0; i <  mini_Zelle_formatid.split("@").length - 1; i++)
    {
        if (teck_gruppen_id == mini_Zelle_formatid.split("@")[i].split("!")[2])
        {
            var var_global = space_remover(mini_Zelle_formatid.split("@")[i].split("!")[0]);
            if (var_global != 'f0')
            {
                var labels_div= zero('div', 0, 0, 0, 0,trb);
                var labels= zero('label', 0, 0, 0, 0,labels_div);
                $(labels).text(mini_Zelle_formatid.split("@")[i].split('!')[0]);
                $(labels).attr({'for':'checkbox-'+samler_count_oijkkre})
                var inputs= zero('input', 0, 0, 0, 0,labels_div);
                $(inputs).attr({'type':'checkbox','name':mini_Zelle_formatid.split("@")[i].split('!')[1],'id':'checkbox-'+samler_count_oijkkre})
                $(inputs).checkboxradio();
                samler_count_oijkkre++;
                f0_aktiv=0;
                input_wahl_zutat_gruppe(trb,mini_Zelle_formatid.split("@")[i]);
            }
        }
    }
    if(f0_aktiv==1)
    {
        for (var i = 0; i < mini_Zelle_formatid.split("@").length - 1; i++)
        {
            if(mini_Zelle_formatid.split("@")[i].split('!')[2]==teck_gruppen_id)
            {
                var labels_div= zero('div', 0, 0, 0, 0,trb);
                var labels= zero('label', 0, 0, 0, 0,labels_div);
                $(labels).text(mini_Zelle_formatid.split("@")[i].split('!')[0]);
                $(labels).attr({'for':'checkbox-'+samler_count_oijkkre})
                var inputs= zero('input', 0, 0, 0, 0,labels_div);
                $(inputs).attr({'type':'checkbox','name':mini_Zelle_formatid.split("@")[i].split('!')[1],'id':'checkbox-'+samler_count_oijkkre})
                $(inputs).checkboxradio();
                samler_count_oijkkre++;
                input_wahl_zutat_gruppe(trb,mini_Zelle_formatid.split("@")[i]);
            }
        }
    }
    
    var tr_titel2230=zero('tr',0,0,0,0,body);$(tr_titel2230).text('xla  mit Preis(vom Hähnchen^050 |) ohne Preis(vom Hähnchen^ |)');
    var trb=zero('table',0,0,0,0,tr_titel2230);var trbdy=zero('tbody',0,0,0,0,trb);
    var tr_titel223=zero('tr',0,0,0,0,trb);$(tr_titel2230).css({'background-color': '#AAA'});
    weitere_gruppe_1=0;var div_druck=zero('div',0,0,0,0,tr_titel223);$(div_druck).text(' Weitere Gruppe');$(div_druck).css({'cursor':'pointer','padding-right':'10px','padding-left':'10px',"border":"1px solid black",'background-color': 'red'});$(div_druck).click(function() {for (var i2 = 0; i2 <samler_count_oijkkre; i2++){if($("#checkbox-"+i2).is(':checked')){var formaten_from_chek_box= $('#checkbox-'+i2).prop('name');weitere_gruppe_98ijd(formaten_from_chek_box);}}});
    
    var my_para = ' Joghurt-Dressing^ ; Essig & Öl^ ; Kräuter-Sahne-Dressing^ ; Kräuter-Dressing^ ; Balsamico-Dressing^ ; French Dressing^ ;';
    popup_wahlweise_editor(tr_titel223,' Dressing Ihrer Wahl',my_para);
    my_para = ' Tortellini^ ; Maccaroni^ ; Spaghetti^ ; Penne^ ; Gnocchi^ ; Cannelloni^ ; Rigatoni^ ; Tagliatelle^ ; Farfalle^ ;';
    popup_wahlweise_editor(tr_titel223,' Nudelsorte',my_para);
    my_para = ' Pommes^ ; Kroketten^ ; Bratkartoffeln^ ; Basmatireis^ ; gebratene Nudeln^ ; gebratener Reis^ ;';
    popup_wahlweise_editor(tr_titel223,' Beilage',my_para);
    my_para = ' vom Schwein^ ; vom Hähnchen^ ; vom Kalb^ ; vom Lamm^ ; vom Puten^ ;';
    popup_wahlweise_editor(tr_titel223,' Fleischsorte',my_para);
    my_para = ' Pizza Suace^ ; BBQ Suace^ ; Sour Cream^ ; Clasico^ ; Cremig würzig^ ; Joghurtsoße^ ; Knoblauchsoße^ ; Remouladen^ ;Knoblauchcreme^ ;';
    popup_wahlweise_editor(tr_titel223,' wähle deine Suace',my_para);
    my_para = ' Coca Cola^ ; Coca Cola Zero^ ; Coca Cola Light^ ; Sprite^ ; Mezzo Mix^ ; Fanta^ ;';
    popup_wahlweise_editor(tr_titel223,' Getränk',my_para);
    my_para = ' sauer-scharf^ ; Kokosmilch^ ;';
    popup_wahlweise_editor(tr_titel223,' China',my_para);
    
    my_para = ' Käse überbacken^ ; klasisch^ ;';
    popup_wahlweise_editor(tr_titel223,' Extras',my_para);
}
function weitere_gruppe_98ijd(formaten_from_chek_box)
{
   weitere_gruppe_1=1; 
   $('#gruppe_input_wahl_zutat-'+teck_gruppen_id+'-'+formaten_from_chek_box).val($('#gruppe_input_wahl_zutat-'+teck_gruppen_id+'-'+formaten_from_chek_box).val()+'~')
}
function input_wahl_zutat_gruppe(trb,format_satz)
{
    //format schleife
    var tr_titel223=zero('tr',0,0,0,0,trb);
    var td_titel223=zero('td',0,0,0,0,tr_titel223);$(td_titel223).text('cxo Wahl Zutat:mit(|)trennen ');
    var td_titel223=zero('td',0,0,0,0,tr_titel223);$(td_titel223).text(format_satz.split('!')[0]);
    var td_wahl_zutat_show=zero('textarea',0,0,0,0,td_titel223);
    var input_text = format_satz.split('!')[5].replace(/\~/g, '~\n');
    $(td_wahl_zutat_show).text(input_text);
    $(td_wahl_zutat_show).css({'width':'800px',})
    td_wahl_zutat_show.id='gruppe_input_wahl_zutat-'+teck_gruppen_id+'-'+format_satz.split('!')[1];
    $(td_wahl_zutat_show).blur(function () {
        var format_id_ersw44 = this.id.split('-')[2];
        var update='';
        for (var i = 0; i < mini_Zelle_formatid.split("@").length-1; i++) 
        {
            if(mini_Zelle_formatid.split("@")[i].split('!')[1]==format_id_ersw44 )
            {
                update += mini_Zelle_formatid.split("@")[i].split("!")[0]+'!'+
                          mini_Zelle_formatid.split("@")[i].split("!")[1] + '!' +
                          mini_Zelle_formatid.split("@")[i].split("!")[2] + '!' +
                          mini_Zelle_formatid.split("@")[i].split("!")[3] + '!' +
                          mini_Zelle_formatid.split("@")[i].split("!")[4] + '!' +
                          $(this).val() + '!' +
                          mini_Zelle_formatid.split("@")[i].split("!")[6] + '!' +mini_Zelle_formatid.split("@")[i].split("!")[7] + '!' + mini_Zelle_formatid.split("@")[i].split("!")[8] + '!@';
            }
            else{
                update += mini_Zelle_formatid.split("@")[i] += '@';
            }
        }
        mini_Zelle_formatid = update;
    
        //update_gruppen_modern(this.id.split('-')[1],3,$(this).val())
        //for (var i2 = 0; i2 < $('.C1987_speise_gruppen_class'+this.id.split('-')[1]).length; i2++)
        for (var i2 = 0; i2 < $('.C1987_href_gruppen_class'+teck_gruppen_id).length; i2++)
        {
            //var my_value525= $('.C1987_speise_gruppen_class'+this.id.split('-')[1])[i2];my_value525=$(my_value525).text();
            var my_value525= $('.C1987_href_gruppen_class'+this.id.split('-')[1])[i2];my_value525=$(my_value525).text();
            if(format_id_ersw44== my_value525.split('!')[3])
            {
                update_href_modern(my_value525.split('!')[1],11,$(this).val());
            }
        }
        //$(this).css('background-color','yellow');
        $(this).css({'background-color': 'yellow'});
    }); 
    //ende format schleife
}
function wahlzutat_tr_in_speise(tr_element,href_satz)
{
    //var td_kommentar_titel=zero('td',0,0,0,0,tr_element);
    //$(td_kommentar_titel).html('pxy WahlZutat: <br>Titel: '+my_value.split('!')[3].split('|')[0]);
    //var td_kommentar=zero('td',0,0,0,0,tr_essen_beschreibung);
    var div_1=zero('div',0,0,0,0,tr_element);$(div_1).buttonsetv();
    $(div_1).text('tsr:-');
    var div_=zero('div',0,0,0,0,tr_element);$(div_).buttonsetv();
    $(div_).text(' '+href_satz.split('!')[8]);
    var div_=zero('div',0,0,0,0,tr_element);$(div_).buttonsetv();
    var td_wahl_zutat_show=zero('textarea',0,0,0,0,div_);
    $(td_wahl_zutat_show).text(href_satz.split('!')[11]);
    $(td_wahl_zutat_show).css({'width':'900px','height':'20px'})
    td_wahl_zutat_show.id='speise_input_wahl_zutat-'+href_satz.split('!')[1]+'-'+href_satz.split('!')[3];
    $(td_wahl_zutat_show).attr('class', 'speise_input_wahl_zutat_class'+'-'+href_satz.split('!')[3]);
    $(td_wahl_zutat_show).blur(function () {
        //update_speise_modern(this.id.split('-')[1],3,$(this).val())
        update_href_modern(this.id.split('-')[1],11,$(this).val())
        $(this).css({'background-color': 'yellow'});
    }); 
}
var weitere_gruppe_1=0;

function popup_wahlweise_editor(tr_titel223,titel,innerhalt)
{
    var div_druck=zero('div',0,0,0,0,tr_titel223);
    $(div_druck).text(titel);
    $(div_druck).css({'cursor':'pointer','padding-right':'10px','padding-left':'10px',"border":"1px solid black",'background-color': 'yellow',
    'text-align':'center','font-size':'120%'});
    $(div_druck).click(function() {
        
        for (var i = 0; i <samler_count_oijkkre; i++)
        {
            if($("#checkbox-"+i).is(':checked'))
            {
                var formaten_from_chek_box= $('#checkbox-'+i).prop('name');
          
                var new_value ='';
                if(weitere_gruppe_1==1)
                    new_value = $('#gruppe_input_wahl_zutat-'+teck_gruppen_id+'-'+formaten_from_chek_box).val()+$(this).text()+'|';
                if(weitere_gruppe_1==0)
                    new_value = $(this).text()+'|';
                 
                 $('#gruppe_input_wahl_zutat-'+teck_gruppen_id+'-'+formaten_from_chek_box).val(new_value)
                 
                 //update_gruppen_modern(teck_gruppen_id,3,new_value)
                 var update='';
                for (var i2 = 0; i2 < mini_Zelle_formatid.split("@").length-1; i2++) 
                {
                    if(mini_Zelle_formatid.split("@")[i2].split('!')[1]==formaten_from_chek_box )
                    {
                        update += mini_Zelle_formatid.split("@")[i2].split("!")[0]+'!'+
                                  mini_Zelle_formatid.split("@")[i2].split("!")[1] + '!' +
                                  mini_Zelle_formatid.split("@")[i2].split("!")[2] + '!' +
                                  mini_Zelle_formatid.split("@")[i2].split("!")[3] + '!' +
                                  mini_Zelle_formatid.split("@")[i2].split("!")[4] + '!' +
                                  new_value + '!' +
                                  mini_Zelle_formatid.split("@")[i2].split("!")[6] + '!' +mini_Zelle_formatid.split("@")[i2].split("!")[7] + '!' + mini_Zelle_formatid.split("@")[i2].split("!")[8] + '!@';
                    }
                    else{
                        update += mini_Zelle_formatid.split("@")[i2] += '@';
                    }
                }
                mini_Zelle_formatid = update;
                 
                 
                 //for (var i2 = 0; i2 < $('.C1987_speise_gruppen_class'+teck_gruppen_id).length; i2++)
                 for (var i2 = 0; i2 < $('.C1987_href_gruppen_class'+teck_gruppen_id).length; i2++)
                 {
                    //var my_value525= $('.C1987_speise_gruppen_class'+teck_gruppen_id)[i2];my_value525=$(my_value525).text();
                    var my_value525= $('.C1987_href_gruppen_class'+teck_gruppen_id)[i2];my_value525=$(my_value525).text();
                    //var speise_id =  my_value525.split('!')[1];
                    if(formaten_from_chek_box== my_value525.split('!')[3])
                    {
                        //update_speise_modern(speise_id,3,new_value);
                        update_href_modern(my_value525.split('!')[1],11,new_value);
                    }
                 }
                 $('#gruppe_input_wahl_zutat-'+teck_gruppen_id+'-'+formaten_from_chek_box).css("background-color","#f89b30");
                 $('.speise_input_wahl_zutat_class'+'-'+formaten_from_chek_box).val(new_value);
           }

        }//end for formaten
    });//end click titel
    for (var i = 0; i < innerhalt.split(";").length-1; i++) 
    {
        var div_druck=zero('div',0,0,0,0,tr_titel223);$(div_druck).text(innerhalt.split(";")[i]);$(div_druck).buttonsetv();
        $(div_druck).css({'cursor':'pointer','padding-right':'10px','padding-left':'10px',"border":"1px solid black",});
        $(div_druck).click(function() { 
            for (var i2 = 0; i2 <samler_count_oijkkre; i2++)
            {
                if($("#checkbox-"+i2).is(':checked'))
                {
                    var formaten_from_chek_box= $('#checkbox-'+i2).prop('name');
                    var new_value = $('#gruppe_input_wahl_zutat-'+teck_gruppen_id+'-'+formaten_from_chek_box).val()+$(this).text()+'|';
                    $('#gruppe_input_wahl_zutat-'+teck_gruppen_id+'-'+formaten_from_chek_box).val(new_value);
                     $('.speise_input_wahl_zutat_class'+'-'+formaten_from_chek_box).val(new_value);
                     
                     
                    //update_gruppen_modern(teck_gruppen_id,3,$('#gruppe_input_wahl_zutat-'+teck_gruppen_id+'-'+formaten_from_chek_box).val())
                    
                    var update='';
                    for (var i3 = 0; i3 < mini_Zelle_formatid.split("@").length-1; i3++) 
                    {
                        if(mini_Zelle_formatid.split("@")[i3].split('!')[1]==formaten_from_chek_box )
                        {
                            update += mini_Zelle_formatid.split("@")[i3].split("!")[0]+'!'+
                                      mini_Zelle_formatid.split("@")[i3].split("!")[1] + '!' +
                                      mini_Zelle_formatid.split("@")[i3].split("!")[2] + '!' +
                                      mini_Zelle_formatid.split("@")[i3].split("!")[3] + '!' +
                                      mini_Zelle_formatid.split("@")[i3].split("!")[4] + '!' +
                                      $('#gruppe_input_wahl_zutat-'+teck_gruppen_id+'-'+formaten_from_chek_box).val() + '!' +
                                      mini_Zelle_formatid.split("@")[i3].split("!")[6] + '!' +
                                      mini_Zelle_formatid.split("@")[i3].split("!")[7] + '!' + mini_Zelle_formatid.split("@")[i3].split("!")[8] + '!@';
                        }
                        else{
                            update += mini_Zelle_formatid.split("@")[i3] += '@';
                        }
                    }
                    mini_Zelle_formatid = update;
                    
                    
                     //for (var i2 = 0; i2 < $('.C1987_speise_gruppen_class'+teck_gruppen_id).length; i2++)
                     for (var i3 = 0; i3 < $('.C1987_href_gruppen_class'+teck_gruppen_id).length; i3++)
                     {
                        //var my_value525= $('.C1987_speise_gruppen_class'+teck_gruppen_id)[i2];my_value525=$(my_value525).text();
                        var my_value525= $('.C1987_href_gruppen_class'+teck_gruppen_id)[i3];my_value525=$(my_value525).text();
                        if(formaten_from_chek_box== my_value525.split('!')[3])
                        {
                            //update_speise_modern(speise_id,3,$('#gruppe_input_wahl_zutat-'+teck_gruppen_id+'-'+formaten_from_chek_box).val())
                            update_href_modern(my_value525.split('!')[1],11,$('#gruppe_input_wahl_zutat-'+teck_gruppen_id+'-'+formaten_from_chek_box).val());
                        }
                     }
                     $('#gruppe_input_wahl_zutat-'+teck_gruppen_id+'-'+formaten_from_chek_box).css("background-color","yellow");
                }
            }//end for formaten
        });//end klich zutat
    }// end for zutat
}
