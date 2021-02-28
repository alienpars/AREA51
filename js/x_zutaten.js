
   
   
function lade_zutaten()
{
    mini_Zelle_zutat_quelle = xy.mp3_zutat_quelle().value;
    mini_Zelle_zutat_quelle_67 = xy.mp3_zutat_quelle_67().value;
    for (var i = 0; i < mini_Zelle_zutat_quelle.split("@").length-1; i++) 
    { 
        zutat_bib_satz=mini_Zelle_zutat_quelle.split("@")[i].split("|")[1];
    }
}
function zutatequlle_u_zutatbiblioth_sperr_div_creator(elemet,gruppen_id)
{
    for (var i = 0; i < $('.C829_zutat_gruppen_class'+gruppen_id).length; i++)
    {
        var my_value= $('.C829_zutat_gruppen_class'+gruppen_id)[i];
        my_value=$(my_value).text();
        var sperr_div_zutat = zero('div',0,0,0,0,elemet);
        sperr_div_zutat.id='sperr_div_zutat'+my_value.split("!")[0];
    }
}
function zutat_modern_nur_gruppe(speise_name,focus_merker)
{
    fehler_suche="x_zutat 24";
    $('#dyhjss').remove();
    var Div_an_alle=zero('div',0,0,0,0,document.body);
    $(Div_an_alle).css({"background-color":'#f89b30','color':'#000',
        'position':'fixed','top':'0px','right':'50px','padding':'20px',
        'z-index':'2000'});
    Div_an_alle.id='dyhjss';
    fehler_suche="x_zutat 31";
    var div_hide_icon = zero('div',0,0,0,0,Div_an_alle);$(div_hide_icon).text('X');
        $(div_hide_icon).css({"color":'#fff','top':'1px','right':'1px','position':'absolute',
        'font-size':'200%','cursor': 'pointer',});
        $(div_hide_icon).click(function() {
            $('#dyhjss').remove();
        });
        
    var sechs = $('#C_mini_Zelle_gruppen'+teck_gruppen_id).text().split('!')[6];
    for (var i_stf = 0; i_stf < sechs; i_stf++)
    {
    fehler_suche="x_zutat 42";
        var fieldset= zero('fieldset', 0, 0, 0, 0,Div_an_alle);$(fieldset).buttonsetv();
        var Clone_titel2= zero('legend', 0, 0, 0, 0,fieldset);
        $(Clone_titel2).text(i_stf+1);
    
        var div_zutat_imput=zero('div',0,0,0,0,fieldset);
        div_zutat_imput.id='input_div_20';
        zutatequlle_u_zutatbiblioth_sperr_div_creator(div_zutat_imput,teck_gruppen_id)
        
    fehler_suche="x_zutat 52";
        var input_zutat = zero('div',0,0,0,0,div_zutat_imput);$(input_zutat).text('skd ADD Zutat:');
        var input_zutat = zero('div',0,0,0,0,div_zutat_imput);
        var label_zutat = zero('label',0,0,0,0,input_zutat);$(label_zutat).text(speise_name);
        $(label_zutat).css({'font-weight':'Bold', 'font-size': '121%',}); 
        label_zutat.id='x_zutat_25_label'
        var input_zutat = zero('div',0,0,0,0,div_zutat_imput);
        var input_zutat = zero('textarea',0,0,0,0,input_zutat);
    fehler_suche="x_zutat 59";
    
        input_zutat.id='focus-'+(i_stf+1);;
        autocomplet_zutat= new Array();
        var i_for_2=0;
        //lade gruppen_zutaten
        var zutat_bib_satz_intern = $('.C829_zutat_gruppen_class'+teck_gruppen_id).text();
        for (var i = 0; i < zutat_bib_satz_intern.split("@").length-1; i++) 
        {
            autocomplet_zutat[i]=zutat_bib_satz_intern.split("@")[i];
            i_for_2++;
        }
        //lade quelle zutaten
    fehler_suche="x_zutat 72";
        var zutat_sortiert = new Array();
        for (var i = 0; i < mini_Zelle_zutat_quelle_67.split("~").length-1; i++) 
        {
            zutat_sortiert[i]=mini_Zelle_zutat_quelle_67.split("~")[i];
        }
        zutat_sortiert.sort();
        for (var i = 0; i < zutat_sortiert.length; i++) 
        {
           if(!document.getElementById('sperr_div_zutat'+zutat_sortiert[i].split("!")[0]))
           {
                autocomplet_zutat[i_for_2] = zutat_sortiert[i];
                i_for_2++;
           }
        }
    
    fehler_suche="x_zutat 88";
        $(input_zutat).autocomplete({
            source: autocomplet_zutat,
            'z-index':'1251',
            select: function(event, ui) {
                if(ui.item){
                    $(this).val(ui.item.value);
                    inzert_zutat_from_imput($(this).val(),'gruppe');
                    update_mini_Zelle_zutatBibliothek(frischling_zutat_satz.split('!')[1],6,this.id.split('-')[1]);
                    zutat_modern_nur_gruppe(speise_name,this.id);
                    $(this).val('');
                    return false;
                }
            }
        });
    fehler_suche="x_zutat 103";
        $(input_zutat).keydown(function(event){
            if(event.keyCode == 13) 
            {
                if($(this).val()!='') 
                {
                    var neue_satz = zutat_bibliotek_insertor(teck_gruppen_id,$(this).val(),';','zutat','input_modern');
                    update_mini_Zelle_zutatBibliothek(neue_satz.split('!')[1],6,this.id.split('-')[1]);
                    zutat_modern_nur_gruppe(speise_name,this.id);
                    $(this).val('');
                    return false;
                }
            }
        });
        fehler_suche="x_zutat 117";
        var div_gherghi = zero('div',0,0,0,0,div_zutat_imput);
        fehler_suche="x_zutat 118";
        div_gherghi.id='gherghi'+((1*i_stf)+(1*1));
        //alert('gherghi'+((1*i_stf)+(1*1)));
        fehler_suche="x_zutat 122";
        
    }//end for stufen
    setTimeout( function() {
        fehler_suche="x_zutat 126";
        $('#'+focus_merker).focus();
        fehler_suche="x_zutat 127";
    }, 400);
    stufen_berischt_gherghi();
    fehler_suche="x_zutat 127";
    
}

function stufen_berischt_gherghi()
{
    fehler_suche="x_zutat 137";
    var zutat_bib_satz_21 = $('.C829_zutat_gruppen_class'+teck_gruppen_id).text();
    var zutat_sortiert = new Array();
    for (var i = 0; i < zutat_bib_satz_21.split("@").length-1; i++) 
    {
        zutat_sortiert[i]=zutat_bib_satz_21.split("@")[i];
    }
    zutat_sortiert.sort();
    for (var i = 0; i < zutat_sortiert.length; i++) 
    {//zutat_bibliotek
        //if(zutat_sortiert[i].split("!")[6]==i)
        //{
            //var gherghi_id = ((1*1)+(zutat_sortiert[i].split("!")[6]*1));
            var gherghi_id = zutat_sortiert[i].split("!")[6];
            //alert(zutat_sortiert[i])
    fehler_suche="x_zutat 152";
            if(document.getElementById('gherghi'+gherghi_id))//sonst gibt error fals bei einigen Zutaten die Stufe nicht eingetragen ist.
            {
                var z_div = zero('div',0,0,0,0,document.getElementById('gherghi'+gherghi_id));$(z_div).buttonsetv(); 
                $(z_div).css({'background-color': 'yellow','cursor':'pointer','margin': '2px','padding':'1px'});
                $(z_div).text(zutat_sortiert[i].split("!")[0]);
            }
        //}
    fehler_suche="x_zutat 157";
    }
}

function zutat_gts_modern(speise_name,tabulator)
{
    $('#input_div_20').remove();
    var div_zutat_imput=zero('div',0,0,0,0,document.body);
    $(div_zutat_imput).css({"background-color":'royalblue','color':'#fff',
        'position':'fixed','top':'200px','right':'50px','padding':'20px',
        'z-index':'2000'});
    zutatequlle_u_zutatbiblioth_sperr_div_creator(div_zutat_imput,teck_gruppen_id)
    div_zutat_imput.id='input_div_20';
    var div_hide_icon = zero('div',0,0,0,0,div_zutat_imput);$(div_hide_icon).text('X');
    $(div_hide_icon).css({"color":'#fff','top':'1px','right':'1px','position':'absolute',
    'font-size':'200%','cursor': 'pointer',});
    $(div_hide_icon).click(function() {
        $('#input_div_20').remove();
    });
    var input_zutat = zero('div',0,0,0,0,div_zutat_imput);$(input_zutat).text('skd ADD Zutat:');
    var input_zutat = zero('div',0,0,0,0,div_zutat_imput);
    var label_zutat = zero('label',0,0,0,0,input_zutat);$(label_zutat).text(speise_name);
    $(label_zutat).css({'font-weight':'Bold', 'font-size': '121%',}); 
    label_zutat.id='x_zutat_25_label'
    var input_zutat = zero('div',0,0,0,0,div_zutat_imput);
    var input_zutat = zero('textarea',0,0,0,0,input_zutat);
    $(input_zutat).focus();//my_id_3326
        $(input_zutat).attr('tabindex', tabulator);
    
    
    input_zutat.id='my_id_3326';
    autocomplet_zutat= new Array();
    var i_for_2=0;
    //lade gruppen_zutaten
    var zutat_bib_satz_intern = $('.C829_zutat_gruppen_class'+teck_gruppen_id).text();
    
    for (var i = 0; i < zutat_bib_satz_intern.split("@").length-1; i++) 
    {
        autocomplet_zutat[i]=zutat_bib_satz_intern.split("@")[i];
        i_for_2++;
    }
    //lade quelle zutaten
    var zutat_sortiert = new Array(mini_Zelle_zutat_quelle_67.split("~").length-1);
    for (var i = 0; i < mini_Zelle_zutat_quelle_67.split("~").length-1; i++) 
    {
        zutat_sortiert[i]=mini_Zelle_zutat_quelle_67.split("~")[i];
    }
    zutat_sortiert.sort();
    for (var i = 0; i < zutat_sortiert.length; i++) 
    {
       if(!document.getElementById('sperr_div_zutat'+zutat_sortiert[i].split("!")[0]))
       {
            autocomplet_zutat[i_for_2] = zutat_sortiert[i];
            i_for_2++;
       }
    }
    //alert(autocomplet_zutat);
    $(input_zutat).autocomplete({
        source: autocomplet_zutat,
        'z-index':'1251',
        select: function(event, ui) {
            if(ui.item){
                $(input_zutat).val(ui.item.value);
                inzert_zutat_from_imput($(input_zutat).val());
                zutat_gts_modern(speise_name,tabulator);
                $(this).val('');
                return false;
            }
        }
    });
    $(input_zutat).keydown(function(event){
        if(event.keyCode == 13) 
        {
            if($(input_zutat).val()!='') 
            {
                var neue_satz = zutat_bibliotek_insertor(teck_gruppen_id,$(this).val(),';','zutat','input_modern');
                add_zutat(neue_satz,'input');
                zutat_gts_modern(speise_name,tabulator);
                //start eintarg in zutat66
                insert_zutzt_67($(this).val());
                $(this).val('');
                return false;
            }
        }
 });
    //$(input_zutat).blur(function () {
       // $('#input_div_20').css({'display':'none',});
     //});
}
function insert_zutzt_67(value)
{
    if(value!="")
    {
        mini_Zelle_zutat_quelle_67+=value+'~';
    }
}
function inzert_zutat_from_imput(value,art)
{
    if(value.split('!').length<=4)
    {
        add_zutat_from_quelle(value,teck_gruppen_id,'input',art);
    }
    else //insert from bibliothek
    {
        if(art!='gruppe')
            add_zutat(value,'input');
    }
}
function add_zutat(zutatsatz,input)//adz
{
    strecke+='add_zutat(zutatsatz:'+zutatsatz+')@\n';
    var aktuelle_speiseId=  speise_herf_f0.split("!")[2];
    var newId = Id_geber($('.mini_Zelle_V_zutat_speise').text(), aktuelle_speiseId,'7188');
    var gruppppen_id = $('#C_mini_Zelle_SpeiseNr'+aktuelle_speiseId).text().split('!')[2];
    var neuer_satz ='-' +'!' + newId + '!' + aktuelle_speiseId + '!' + zutatsatz.split("!")[1] + '!' + 49 + '!' + gruppppen_id + '!' + '-' + '!' + '-' + '!' + '-' + '!@';
    insert_mini_Zelle_V_zutat_speise(neuer_satz);
    if(input=='input')
    {
        update_zutat_show(zutatsatz.split('!')[0]);
    }
    else
    {
        speisen_zutat_431();
    }
    //alert(speise_herf_f0);
}
var frischling_zutat_satz='';
function add_zutat_from_quelle(neuling,gr_id,input,art)//azf
{
    strecke+='add_zutat_from_quelle(neuling:'+neuling+',gr_id:'+gr_id+')@\n';
    var gruppenId = teck_gruppen_id;
    var insert_me_direct_im_speise='';
    if(neuling!='')
    {
        var darf_rein=0;

        for (var i2 = 0; i2 < $('.mini_Zelle_gruppen').length; i2++)//OHNE MINUS EINS
        { 
            var my_value= $('.mini_Zelle_gruppen')[i2];my_value=$(my_value).text();
            if(neuling == my_value.split("!")[0] && my_value.split("!")[2] == gruppenId)//ist in bibliothek vorhanden
            {
                darf_rein=1;//nein
            }
        }
        if(darf_rein==0)//darf rein
        {
            var newId = Id_geber($('.mini_Zelle_zutatBibliothek').text(), gruppenId,'7156');
            var neue_zutat = neuling + '!' + newId + '!' + gruppenId + '!0!36!516!0!-!xy.aspx!@'; //tablo add_zutat_from_quelle(neuling)
            frischling_zutat_satz = neue_zutat;
            insert_mini_Zelle_zutatBibliothek(neue_zutat);
            if(art!='gruppe')
                add_zutat(neuling + '!' + newId + '!' + gruppenId + '!0!36!516!0!-!xy.aspx!','input');//addiert direct im speise ohne @
        }
        else
            {alert('der Zutat ist bereits eingetragen');}
    }
    if(input!='input')
    {
        zutat_bibliothek();
    }
}
function update_zutat_show(value)
{   
    var td_zutat =zero('td',0,0,0,0,document.getElementById('zutaten_tr'+speise_herf_f0.split("!")[2])); 
    $(td_zutat).text(value);
}

function update_zutat_preis_stufe(zutat_satzt)
{ 
    update_mini_Zelle_zutatBibliothek(zutat_satzt.split('!')[1],6,zutat_stufen_eintrag_modus_0_normal);
    geld_stufen_bericht();
}
function speisen_zutat_431()
{
    $('#z_div_kesh').remove();
    var z_div_kesh = zero('div',0,0,0,0,document.getElementById('div_kopf'));
    z_div_kesh.id='z_div_kesh';
    $(z_div_kesh).css({'position':'absolute','left': 5+'%','top': '50px'});
    
    var this_zutaten = speise_zutat4351(speise_herf_f0.split("!")[2]);
    for (var i = 0; i < this_zutaten.split("@").length-1; i++) 
    {
        var z_div = zero('div',0,0,0,1,z_div_kesh);$(z_div).buttonsetv(); 
        $(z_div).css({'background-color': 'yellow','cursor':'pointer','margin': '2px','padding':'1px'});
        
        z_div.id = this_zutaten.split("@")[i].split("!")[9];
        
        $(z_div).text(sup_editor(this_zutaten.split("@")[i].split("!")[0]));
        z_div.onmousedown=function(){
            $(this).toggle('slow');
            dell_zutat_von_speise(this.id);//speisen_zutat
        }
        var zutztpic = zero('img','Bilder/delete.png', 15, 15, 0, z_div);
    }
    var z_transfer_empfaenger = zero('div',0,0,0,1,z_div_kesh);$(z_transfer_empfaenger).buttonsetv(); 
    z_transfer_empfaenger.id='z_transfer_empfaenger';
}
function zutat_bibliotek_insertor(gruppenId,box,spl,art,woher)//zbis
{
    strecke+='zutat_bibliotek_insertor(gruppenId:'+gruppenId+',box:'+box+',spl:'+spl+',art:'+art+',woher:'+woher+')@\n';
    strecke='';
    //zutat quelle check
    var neue_zutat_string='';
    for (var i = 0; i < mini_Zelle_zutat_quelle.split("@").length-1; i++) 
    { //micharkhe wa aghe nadare ezafe mikone
        var option_gr = mini_Zelle_zutat_quelle.split("@")[i].split("|")[0];
        if(option_gr == optionsgruppe)//mire tu gruppe
        {
            var darf_nicht_addiren = 0;var sameln ='';//dient als bruecke
            neue_zutat_string+= mini_Zelle_zutat_quelle.split("@")[i].split("|")[0]+'|';
            for (var i2 = 0; i2 < box.split(spl).length; i2++)
            {
                if(box.split(spl)[i2]!='')
                {
                    var kommende_zutat = box.split(spl)[i2];
                    //hala ye charkh tuye zutathaye gruppe
                    for (var i3 = 0; i3 < mini_Zelle_zutat_quelle.split("@")[i].split("|")[1].split("~").length-1; i3++) 
                    {//in faghat baraye chek hastesh
                        var zutat_in_der_quelle = mini_Zelle_zutat_quelle.split("@")[i].split("|")[1].split("~")[i3];
                        if(zutat_in_der_quelle==kommende_zutat)
                            darf_nicht_addiren = 1;// in age yek beshe yanee nabayad zutate jadid bere tu zutatquelle
                    }
                    if(darf_nicht_addiren==0)
                        sameln+=kommende_zutat+'~';
                }
            }
            // nadare, shuru mikone be update
            var neue_zutat_liste_in_quelle = '';//baraye update estefade mishe 
            for (var i3 = 0; i3 < mini_Zelle_zutat_quelle.split("@")[i].split("|")[1].split("~").length-1; i3++) 
            {
                if(mini_Zelle_zutat_quelle.split("@")[i].split("|")[1].split("~")[i3]!='')
                    neue_zutat_liste_in_quelle+=mini_Zelle_zutat_quelle.split("@")[i].split("|")[1].split("~")[i3]+'~';//faghat bare update sameln mikne
            }
            //inja add mishe be zutat_quelle
            neue_zutat_liste_in_quelle+=sameln;
            neue_zutat_string+=neue_zutat_liste_in_quelle+'@';
                
        }
        else
            neue_zutat_string+=mini_Zelle_zutat_quelle.split("@")[i]+'@';
    }//end for mini_Zelle_zutat_quelle
    mini_Zelle_zutat_quelle=neue_zutat_string;
    xy.update_zutat_quelle_66(mini_Zelle_zutat_quelle);
    
    if(art=='zutat')
    {
        //update zutaten
        var antwort = 'insert erfogt';//position|xy|picId|@
        for (var i = 0; i < box.split(spl).length; i++)//OHNE MINUS EINS
        {   
            var neuling=box.split(spl)[i];
            if(neuling!='')
            {//age khali nist
                var darf_rein=0;
                //start duplikat check
                for (var i2 = 0; i2 < $('.mini_Zelle_zutatBibliothek').length; i2++)
                {var my_value= $('.mini_Zelle_zutatBibliothek')[i2];my_value=$(my_value).text();
                    if(neuling == my_value.split("!")[0] && my_value.split("!")[2]==gruppenId)//ist in bibliothek vorhanden
                    {
                        darf_rein=1;
                        alert('dieser Zutat gibt schon:('+neuling+')');
                    }
                }
                //ende duplikat check
                if(darf_rein==0)
                {
                    var newId = Id_geber($('.mini_Zelle_zutatBibliothek').text(), gruppenId,'6839');
                    var name_der_neue = box.split(spl)[i];
                    var neue_zutat =  name_der_neue + '!' + newId + '!' + gruppenId + '!0!36!516!0!-!xy.aspx!@';
                    antwort=neue_zutat;
                    insert_mini_Zelle_zutatBibliothek(neue_zutat)
                }
            }
        }//end for box
    }//end if(art=='zutat')
    return antwort;//position als atribut1
}
function list_gruppen_clone_zutaten(aktuelle_gruppen_id) //gliii
{
    //start doppel blocker
    var eigene_zutate = $('.C829_zutat_gruppen_class'+aktuelle_gruppen_id).text();
    for (var i = 0; i < eigene_zutate.split("@").length-1; i++) 
    {
        var doppel_blocker_yu76 = zero('div',0,0,0,0,document.body);
        $(doppel_blocker_yu76).css({'display':'none',});
        doppel_blocker_yu76.id='block_mich_76y-'+eigene_zutate.split("@")[i].split("!")[0];
        doppel_blocker_yu76.className='remove_me_po9ii';
        
    }
    //ende doppelblocker
    //var gruppen = gruppenstart();  
    var d = zero('div',0,0,0,0,document.body);close_me_knopf(d);$(d).css({'top' : '50px','position':'fixed','z-index':'50','background-color':'green','width' :'35%' , 'height' :'73%','overflow' : 'auto','top':'80px','left':'220px',});
    d.id='hide_all';$(d).text(2027);         
    var div_icon = zero('div',0,0,0,0,d);
    var idbig=1; var Identitaet;
    for (var i2 = 0; i2 < $('.mini_Zelle_gruppen').length; i2++)
    {           var my_value= $('.mini_Zelle_gruppen')[i2];
                my_value=$(my_value).text();
        idbig++;
        Identitaet=idbig;
        var mindestens_ein_kind=0;
        var tdSpeisebild = k_m_f(my_value.split('!')[1],my_value.split('|')[0],div_icon,'',10,'on',(speise4-7),speise2);
        $(tdSpeisebild).click(function() {
            //strat zutat samlung 
            var empfaenger_gruppenId = aktuelle_gruppen_id;
            var zutat_bib_satz = $('.C829_zutat_gruppen_class'+this.id).text();
            var kopie_int=0
            for (var i = 0; i < zutat_bib_satz.split("@").length-1; i++) 
            {
                if(!document.getElementById('block_mich_76y-'+zutat_bib_satz.split("@")[i].split("!")[0]))
                {
                    var newId = Id_geber($('.mini_Zelle_zutatBibliothek').text(), empfaenger_gruppenId,'1959');
                    var neue_zutat = zutat_bib_satz.split("@")[i].split("!")[0] + '!' + newId + '!' + empfaenger_gruppenId + '!0!36!516!'+zutat_bib_satz.split("@")[i].split("!")[6]+'!-!xy.aspx!@'; 
                    insert_mini_Zelle_zutatBibliothek(neue_zutat);
                    kopie_int++;
                }
            }//end for zutzten
            //ende zutzt samlung
            alert('" '+kopie_int +' "Zutaten wurden Erfolgreich kopiert!');
            element_filter_technologie();
            
            $('#hide_all').remove();
            $('.remove_me_po9ii').remove();
            
        });//end click
    }
};//ende gruppen liste

