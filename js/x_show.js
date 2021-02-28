var teck_gruppen_id="";
var fehler_suche=0;
var tab_index=1;
var tab_index_sup=2000;
var tab_zutat=3000;
var aktueller_speise_id_modern='';
function element_filter_technologie()//eoxi///////////////////////////////////////////////start
{   //52336!52336!52325!1003!55!-1!3594!-!piinsert!
    //step_2453 start
    speise_herf_f0=0;
    tab_zutat=3000;//reset
    document.getElementById('foto').innerHTML='';
    $('#foto').css({'left':'270px','top':'39px'});
    var fdivmitte = document.getElementById("foto");
    var table=zero('table',0,0,0,1,fdivmitte);var body=zero('tbody',0,0,0,0,table);
    $(table).css({'background-color':'#c7dee5'});
    if(teck_gruppen_id!=''){
    //alert(teck_gruppen_id);

        var tr_titel=zero('tr',0,0,0,0,body);var td_titel=zero('td',0,0,0,0,tr_titel);
        var gruppen_nummer = $('#C_mini_Zelle_gruppen'+teck_gruppen_id).text().split('!')[1];
        
        td_titel.className='gruppen_text';
        td_titel.id=gruppen_nummer;// for scolling
        
        //start laden gruppen texte
        var gruppen_name=$('#C_mini_Zelle_gruppen'+teck_gruppen_id).text().split('!')[0];
        var gruppen_anhang_value='';
        if(gruppen_name.split('|')[1]||gruppen_name.split('|')[1]!=''||gruppen_name.split('|')[1]!=null)
            gruppen_anhang_value = gruppen_name.split('|')[1];
        var gruppen_kopfzeile='';if(gruppen_name.split('|')[2]||gruppen_name.split('|')[2]!=''||gruppen_name.split('|')[2]!=null)gruppen_kopfzeile = gruppen_name.split('|')[2];
        var gruppen_fuss_zeile='';if(gruppen_name.split('|')[3]||gruppen_name.split('|')[3]!=''||gruppen_name.split('|')[3]!=null)gruppen_fuss_zeile = gruppen_name.split('|')[3];
        var gruppen_bild= $('#C_mini_Zelle_gruppen'+teck_gruppen_id).text().split('!')[7];
            
        if(gruppen_name.split('|')[0])
            gruppen_name = gruppen_name.split('|')[0];
        $(td_titel).text(gruppen_name);
        $(td_titel).css('cursor', 'pointer');
        $(td_titel).click(function() {
            gruppen_text_update(this.id,0);
        });
        
        //td start anhang
        var tr_gruppen_anhang=zero('tr',0,0,0,0,body);var td_gruppen_anhang=zero('td',0,0,0,0,tr_gruppen_anhang);td_gruppen_anhang.colSpan='5';td_gruppen_anhang.className='Anhang_text';td_gruppen_anhang.id='tdanhang:'+gruppen_nummer;$(td_gruppen_anhang).css('cursor', 'pointer');
        $(td_gruppen_anhang).click(function() {gruppen_text_update(this.id.split(':')[1],1);}); 
        if(gruppen_anhang_value!='')
        {
            $(td_gruppen_anhang).text(replace_back(gruppen_anhang_value) +' 6594');
        }
        else
        {
            $(td_gruppen_anhang).text('gruppen_anhang................. 6596');
        }
        //td start kopfzeile
        var tr_gruppen_kopfzeile=zero('tr',0,0,0,0,body);var td_gruppen_kopfzeile=zero('td',0,0,0,0,tr_gruppen_kopfzeile);td_gruppen_kopfzeile.colSpan='5';td_gruppen_kopfzeile.className='kopf_text';td_gruppen_kopfzeile.id='tdkopf:'+gruppen_nummer;$(td_gruppen_kopfzeile).css('cursor', 'pointer');$(td_gruppen_kopfzeile).click(function() {gruppen_text_update(this.id.split(':')[1],2);});if(gruppen_kopfzeile!='')$(td_gruppen_kopfzeile).text(gruppen_kopfzeile+ ' 6609');else{$(td_gruppen_kopfzeile).text('gruppen_kopfzeile................... 6611');}
        //td start gruppen bild
        
        
        var tr_speisen=zero('tr',0,0,0,0,body);
        var td_speisen=zero('td',0,0,0,0,tr_speisen);td_speisen.colSpan='5';
        
        var table22=zero('table',0,0,0,1,td_speisen);
        var body22=zero('tbody',0,0,0,0,table22);
        body22.id = 'speisen_body'+gruppen_nummer;
        
        var gruppen_nummer = $('#C_mini_Zelle_gruppen'+teck_gruppen_id).text().split('!')[1];
        //start tr format titel
        var tr_for_format_titel = zero('div',0,0,0,0,body22);
        tr_for_format_titel.id = 'tr_format'+gruppen_nummer;
        var td_for_format_titel1 = zero('div',0,0,0,0,tr_for_format_titel);$(td_for_format_titel1).buttonsetv();
        $(td_for_format_titel1).text('fsx formaten');
        //td start fusszeile
        var tr_gruppen_fuss_zeile=zero('tr',0,0,0,0,body);
        var td_gruppen_fuss_zeile=zero('td',0,0,0,0,tr_gruppen_fuss_zeile);
        td_gruppen_fuss_zeile.className='fuss_text';
        $(td_gruppen_fuss_zeile).text(gruppen_fuss_zeile);
        td_gruppen_fuss_zeile.id='tdfus:'+gruppen_nummer;
        $(td_gruppen_fuss_zeile).css('cursor', 'pointer');
        $(td_gruppen_fuss_zeile).click(function() {gruppen_text_update(this.id.split(':')[1],3);});if(gruppen_fuss_zeile!='')$(td_gruppen_fuss_zeile).text(gruppen_fuss_zeile);else{$(td_gruppen_fuss_zeile).text('gruppen_fuss_zeile.................');}
        var tr_gruppen_bild=zero('div',0,0,0,0,body);
        var td_gruppen_bild=zero('div',0,0,0,0,tr_gruppen_bild);//td_gruppen_bild.colSpan='5';
        $(td_gruppen_bild).buttonsetv();
        td_gruppen_bild.className='kopf_text';
        td_gruppen_bild.id='bild-'+gruppen_nummer;
        $(td_gruppen_bild).css('cursor', 'pointer');
        $(td_gruppen_bild).click(function() {
            gruppen_bild_update(this.id.split('-')[1],'web_album');
        });
        if(gruppen_bild!='-')
        {   
            var div_bild = zero('div',0,'0','0','0',td_gruppen_bild);
            $(div_bild).css({'cursor': 'pointer','border-radius': '5px',"background-image":'url('+pic_link+'/'+gruppen_bild+'.jpg)','background-size': '20%','height': '100px','background-Repeat':'no-repeat','width':'90%',});}    else{$(td_gruppen_bild).text('gruppen_bild................... 6627');}
        //tr href speise und format insert 
            

        //end tr href speise und format insert ↓
        //start generalpreis
        //var tr_generalpreis=zero('tr',0,0,0,0,body);
        var td_generalpreis=zero('div',0,0,0,0,tr_gruppen_bild);//td_generalpreis.colSpan='10';
        
        $(td_generalpreis).buttonsetv();
        var table_generalpreis=zero('tr',0,0,0,0,td_generalpreis);
        var tr_generalpreis_in=zero('tr',0,0,0,0,table_generalpreis);
        tr_generalpreis_in.id = 'tr_generalpreis_in'+gruppen_nummer;
        var td_generalpreis_in=zero('td',0,0,0,0,tr_generalpreis_in);
        $(td_generalpreis_in).text('generalpreis ksd');
        $('#gyh98').remove();
        
    }//end if
    //step_2453 format 
    
    //start generalpreis
    var f0_aktiv = 1;
    var if_i=0;
    //mit formaten
    var vorstufe_format_id='';
    //for (var i = 0; i < mini_Zelle_format_etikett.split("@").length - 1; i++)
    for (var i = 0; i <  mini_Zelle_formatid.split("@").length - 1; i++)
    //{if(teck_gruppen_id==mini_Zelle_format_etikett.split("@")[i].split('!')[6]){
    {if (teck_gruppen_id == mini_Zelle_formatid.split("@")[i].split("!")[2]){
        var var_global = space_remover(mini_Zelle_formatid.split("@")[i].split("!")[0]);
        if (var_global != 'f0')
        {
            f0_aktiv=0;
            var gruppen_id = teck_gruppen_id;
            var div_format_name =zero('div',0,0,0,0,tr_generalpreis_in);
            $(div_format_name).text(mini_Zelle_formatid.split("@")[i].split("!")[0]+'._______..._______..._______......Angebot');
            
            var div_format_name =zero('div',0,0,0,0,tr_generalpreis_in);
            var input_general_preis =zero('input',0,0,0,0,div_format_name); 
            //input_general_preis.id='input_general_preis'+mini_Zelle_format_etikett.split('@')[i].split('!')[2];
            input_general_preis.id='input_general_preis'+mini_Zelle_formatid.split("@")[i].split("!")[1];
            var input_general_angebot_preis =zero('input',0,0,0,0,tr_generalpreis_in); 
            //input_general_angebot_preis.id='input_general_angebot_preis'+mini_Zelle_format_etikett.split('@')[i].split('!')[2];
            input_general_angebot_preis.id='input_general_angebot_preis'+mini_Zelle_formatid.split("@")[i].split("!")[1];
            input_general_preis.className='speise_text';
            //var icon_update_generalpreis = k_m_f(mini_Zelle_format_etikett.split('@')[i].split('!')[2],'979 update ',tr_generalpreis_in,'',10,'on',(speise4-7),speise2);
            var icon_update_generalpreis = k_m_f(mini_Zelle_formatid.split("@")[i].split("!")[1],'979 update ',tr_generalpreis_in,'',10,'on',(speise4-7),speise2);
            icon_update_generalpreis.onclick = function()
            {
                    update_general_preis(this.id,$('#input_general_preis'+this.id).val(),$('#input_general_angebot_preis'+this.id).val());
            }
            //minus billiger
            var div_minus_summe_billiger =zero('div',0,0,0,0,tr_generalpreis_in);
            var input_minus_summe_billiger =zero('input',0,0,0,0,div_minus_summe_billiger); 
            //input_minus_summe_billiger.id='input_input_minus_summe_billiger'+mini_Zelle_format_etikett.split('@')[i].split('!')[2];
            input_minus_summe_billiger.id='input_input_minus_summe_billiger'+mini_Zelle_formatid.split("@")[i].split("!")[1];
            var icon_minus_summe_billiger = k_m_f(mini_Zelle_formatid.split("@")[i].split("!")[1],'113 z.B (-50) cent billiger ',div_minus_summe_billiger,'',10,'on',(speise4-7),speise2);
            icon_minus_summe_billiger.onclick = function()
            {
                    update_minus_billiger(this.id,$('#input_input_minus_summe_billiger'+this.id).val());
            }
            //ende minus billiger
            $(div_format_name).buttonsetv();
            if(if_i!=0)
            {
                var div_aufschlag_von_vorstufe =zero('div',0,0,0,0,tr_generalpreis_in);
                var input_aufschlag_von_vorstufe =zero('input',0,0,0,0,div_aufschlag_von_vorstufe); 
                //$(input_aufschlag_von_vorstufe).css({'background-color': '#ccc',});
                input_aufschlag_von_vorstufe.id='input_aufschlag_von_vorstufe'+mini_Zelle_formatid.split("@")[i].split("!")[1];
                var icon_aufschlag_von_vorstufe = k_m_f(mini_Zelle_formatid.split("@")[i].split("!")[1],'sux Aufschlag von Vorstufe ',div_aufschlag_von_vorstufe,'',10,'on',(speise4-7),'');
                icon_aufschlag_von_vorstufe.onclick = function()
                {
                    update_aufschlag_auf_vorstufe(this.id,vorstufe_format_id,$('#input_aufschlag_von_vorstufe'+this.id).val());
                }
            }
            else
            {
                var div_vostufe =zero('div',0,0,0,0,tr_generalpreis_in);
                $(div_vostufe).text(mini_Zelle_formatid.split("@")[i].split("!")[0]);
                $(div_vostufe).css({'background-color':'#000','color':'#fff'});
                vorstufe_format_id = mini_Zelle_formatid.split("@")[i].split("!")[1];
            }
            $(div_aufschlag_von_vorstufe).buttonsetv();
            $(icon_aufschlag_von_vorstufe).buttonsetv();
            if_i++;
            var div_abstand =zero('div',0,10,10,1,tr_generalpreis_in);
            $(div_abstand).css({'background-color':'#c7dee5','width':'100%'});
            
        }
    }}
    if(f0_aktiv==1)//ohne formaten
    {
        for (var i = 0; i < mini_Zelle_formatid.split("@").length - 1; i++)
        {if(mini_Zelle_formatid.split("@")[i].split('!')[2]==teck_gruppen_id){
            var input_general_preis =zero('input',0,0,0,0,tr_generalpreis_in); //td_format.colSpan='12';
            input_general_preis.id='input_general_preis'+mini_Zelle_formatid.split("@")[i].split('!')[1];
            input_general_preis.className='speise_text';
            var input_general_angebot_preis =zero('input',0,0,0,0,tr_generalpreis_in); //td_format.colSpan='12';
            input_general_angebot_preis.id='input_general_angebot_preis'+mini_Zelle_formatid.split("@")[i].split('!')[1];
            var icon_update_generalpreis = k_m_f(mini_Zelle_formatid.split("@")[i].split('!')[1],'9792 update ',tr_generalpreis_in,'',10,'on',(speise4-7),speise2);
            icon_update_generalpreis.onclick = function()
            {
                update_general_preis(this.id,$('#input_general_preis'+this.id).val(),$('#input_general_angebot_preis'+this.id).val());
            }
            
            //minus billiger
            var div_minus_summe_billiger =zero('div',0,0,0,0,tr_generalpreis_in);
            var input_minus_summe_billiger =zero('input',0,0,0,0,div_minus_summe_billiger); 
            input_minus_summe_billiger.id='input_input_minus_summe_billiger'+mini_Zelle_formatid.split("@")[i].split('!')[1];
            var div_minus_summe_billiger =zero('div',0,0,0,0,tr_generalpreis_in);
            var icon_minus_summe_billiger = k_m_f(mini_Zelle_formatid.split("@")[i].split('!')[1],'z.B (-50) billiger ',div_minus_summe_billiger,'',10,'on',(speise4-7),speise2);
            icon_minus_summe_billiger.onclick = function()
            {
                update_minus_billiger(this.id,$('#input_input_minus_summe_billiger'+this.id).val());
            }
        }}
    }
    
    //ende generalpreis
    
    //start format 
    
    //for (var i = 0; i < mini_Zelle_format_etikett.split("@").length - 1; i++)
    for (var i = 0; i <  mini_Zelle_formatid.split("@").length - 1; i++)
    //{if(teck_gruppen_id==mini_Zelle_format_etikett.split("@")[i].split('!')[6])
    {
        if (teck_gruppen_id == mini_Zelle_formatid.split("@")[i].split("!")[2])
        {
            var var_global = space_remover(mini_Zelle_formatid.split("@")[i].split("!")[0]);
            if (var_global != 'f0')
            {
                var td_format =zero('div',0,0,0,0,document.getElementById('tr_format'+teck_gruppen_id)); $(td_format).buttonsetv();
                $(td_format).text(mini_Zelle_formatid.split("@")[i].split("!")[0]);
                td_format.id='format_nuuumer:'+mini_Zelle_formatid.split("@")[i].split("!")[1];
                $(td_format).click(function() {update_format_name(this.id.split(':')[1],'Format Name');});
                $(td_format).css({'cursor': 'pointer','padding':'8px'});
                //td_format.className='speise_text';
            }
        }
    }
    var reperatur_id_samler='';
    //start speise nr
    //step_2453 speise //
fehler_suche=400;
    //for (var i2 = 0; i2 < mini_Zelle_SpeiseNr.split('@').length-1; i2++)  //speisen for
    //{if(teck_gruppen_id==mini_Zelle_SpeiseNr.split('@')[i2].split('!')[2]){
    for (var i2 = 0; i2 < $('.C1987_speise_gruppen_class'+teck_gruppen_id).length; i2++)
    {
        var my_value= $('.C1987_speise_gruppen_class'+teck_gruppen_id)[i2];
        my_value=$(my_value).text();
        
        var speise_nummer =  my_value.split('!')[0];
        var karrten_nuuumer =my_value.split('!')[6];
        var gruppen_id = my_value.split('!')[2];
        var tr_black =zero('div',0,0,0,0,document.getElementById('speisen_body'+gruppen_id));
        var td_black =zero('div',0,0,15,0,tr_black);$(td_black).buttonsetv();
        $(td_black).css({'width':'100%','background-color': 'black'});td_black.colSpan='15';
        var tr_speisen_nummer =zero('div',0,0,0,0,document.getElementById('speisen_body'+gruppen_id)); 
        //undefined reinigung
        
        if(karrten_nuuumer=='undefined')update_speise_modern(my_value.split('!')[1],6,'');

        //var td_karrten_nuuumer =zero('td',0,0,0,0,tr_speisen_nummer); //td_karrten_nuuumer.colSpan='20';
        //$(td_karrten_nuuumer).text(karrten_nuuumer);td_karrten_nuuumer.className='speise_text';$(td_karrten_nuuumer).css('cursor', 'pointer');
        //td_karrten_nuuumer.id='td_karrten_nuuumer:'+my_value.split('!')[1];
        //$(td_karrten_nuuumer).click(function() {kaarrten_nnnummer_update(this.id.split(':')[1]);});
        
        var td_speisen_nummer =zero('input',0,0,0,0,tr_speisen_nummer);$(td_speisen_nummer).buttonsetv();
        //var td_speisen_nummer =zero('textarea',0,0,0,0,td_name);
        //$(td_speisen_nummer).css({'width':'540px','height':'40px',}); 
        $(td_speisen_nummer).val(speise_nummer);td_speisen_nummer.className='speise_text';//$(td_speisen_nummer).css('cursor', 'pointer');
        td_speisen_nummer.id='td_speisen_nummer-'+my_value.split('!')[1];
        $(td_speisen_nummer).css({'width':'100%','background-color': '#f89b30'});
        //$(td_speisen_nummer).click(function() 
        $(td_speisen_nummer).blur(function () {
            update_speise_modern(this.id.split('-')[1],0,$(this).val());
            $(this).css({'background-color': 'yellow'});
        });
        var td_sup_input =zero('div',0,0,0,0,tr_speisen_nummer);$(td_sup_input).buttonsetv();
        $(td_sup_input).text('ar2 <sup>'); 
        var input_sup =zero('input',0,0,0,0,td_sup_input);
        input_sup.id='input_sup-'+my_value.split('!')[1];
        $(input_sup).attr('tabindex', tab_index_sup);
        tab_index_sup++;
        $(input_sup).css({'width':'150px'}); 
        $(input_sup).blur(function () {if($(this).val()!=''){
            //beginne <sup>Eintragung
            var erste_komma_reiniger=0;
            var antwort='';
            var imput_wert = $(this).val()+'';
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
            if(antwort!='')
                //$('#td_speisen_nummer-'+this.id.split('-')[1]).val($('#td_speisen_nummer-'+this.id.split('-')[1]).val()+' <sup>'+antwort+'</sup>');
            //if(speise_nummer!='')
            {
                update_speise_modern(this.id.split('-')[1],3,' <sup>'+antwort+'</sup>');
                $('#sup_show_div-'+this.id.split('-')[1]).text(' <sup>'+antwort+'</sup>'); 
                $('#sup_show_div-'+this.id.split('-')[1]).css({'background-color': 'yellow',});
            }
            $('#iwxk').remove();//beendet sup_switcher();
            $(this).css({"background-color":"RoyalBlue",'color':'#fff'});
            $('html, body').animate({scrollTop: $(this).offset().top-60}, 900);
            
            
        }});
        var td_sup_input =zero('div',0,0,0,0,tr_speisen_nummer);$(td_sup_input).buttonsetv();
        $(td_sup_input).text(my_value.split('!')[3]); 
        td_sup_input.id='sup_show_div-'+my_value.split('!')[1];
        $(td_sup_input).css({'background-color': '#c0392b',});
        //var input_sup_real =zero('input',0,0,0,0,td_sup_input);
        //$(input_sup_real).val(my_value.split('!')[3]); 
        
        format_daten = new Array();
        var format_6162_ticker=0;var f0_aktiv = 1;
        var privat_i0=0;
        var tr_new =zero('div',0,0,0,0,document.getElementById('speisen_body'+gruppen_id));
        //$(tr_new).text('hjz ');
                    $(tr_new).css({'width': '100%',});
        
        //mit formaten
        for (var i = 0; i <  mini_Zelle_formatid.split("@").length - 1; i++)
        {
            if (gruppen_id == mini_Zelle_formatid.split("@")[i].split("!")[2])
            {
                var var_global = space_remover(mini_Zelle_formatid.split("@")[i].split("!")[0]);
                if (var_global != 'f0')
                {
                    tab_index++;
                    format_daten [privat_i0] = mini_Zelle_formatid.split("@")[i].split("!")[1];
                    privat_i0++;
                    format_6162_ticker++;
                    f0_aktiv=0;
                    var td_speisen_preis0 =zero('div',0,0,0,0,tr_new); $(td_speisen_preis0).buttonsetv();
                    $(td_speisen_preis0).text('P');
                    var input_speisen_preis =zero('input',0,0,0,0,td_speisen_preis0); 
                    $(input_speisen_preis).click(function () {$(this).select();});
                    input_speisen_preis.size = '1';
                    input_speisen_preis.className='speise_text';
                    $(input_speisen_preis).attr('tabindex', tab_index);
                    $(input_speisen_preis).css({'background-color': '#f9c5ff',});
                    input_speisen_preis.id ='f'+mini_Zelle_formatid.split("@")[i].split("!")[1]+'s'+my_value.split('!')[1];
                    var td_speisen_preis_angebot =zero('div',0,0,0,0,tr_new); $(td_speisen_preis_angebot).buttonsetv();
                    $(td_speisen_preis_angebot).text('A');
                    var input_speisen_preis_angebot =zero('input',0,0,0,0,td_speisen_preis_angebot); 
                    $(input_speisen_preis_angebot).click(function () {$(this).select();});
                    $(input_speisen_preis_angebot).css({'background-color': '#f9c5ff'});
                    input_speisen_preis_angebot.size = '3';
                    input_speisen_preis_angebot.id ='angebotf'+mini_Zelle_formatid.split("@")[i].split("!")[1]+'s'+my_value.split('!')[1];
                    var tr_wahl_zutaten =zero('div',0,0,0,0,document.getElementById('speisen_body'+gruppen_id)); 
                    tr_wahl_zutaten.id='wahlzutatf'+mini_Zelle_formatid.split("@")[i].split("!")[1]+'s'+my_value.split('!')[1];
                }
            }
        }
        //ohne formaten
        if(f0_aktiv==1){
        var privat_i=0;
        format_daten = new Array();
        for (var i = 0; i < mini_Zelle_formatid.split("@").length - 1; i++)
        {if(mini_Zelle_formatid.split("@")[i].split('!')[2]==gruppen_id){
            tab_index++;
            format_6162_ticker++;
            format_daten [privat_i]=mini_Zelle_formatid.split("@")[i].split('!')[1];
            privat_i++;
            var td_speisen_preis0 =zero('td',0,0,0,0,tr_new);
            $(td_speisen_preis0).text('Preis');
            var td_speisen_preis =zero('input',0,0,0,0,td_speisen_preis0); 
            $(td_speisen_preis).click(function () {$(this).select();});
            td_speisen_preis.size = '1';
            td_speisen_preis.className='speise_text';
            $(td_speisen_preis).attr('tabindex', tab_index);
            $(td_speisen_preis).css({'background-color': '#f9c5ff'});
            td_speisen_preis.id = 'f'+mini_Zelle_formatid.split("@")[i].split('!')[1]+'s'+my_value.split('!')[1];
            var td_speisen_preis_angebot =zero('td',0,0,0,0,tr_new); 
            $(td_speisen_preis_angebot).text('Angebot');//f9c5ff
            var input_speisen_preis_angebot =zero('input',0,0,0,0,td_speisen_preis_angebot); 
            $(input_speisen_preis_angebot).click(function () {$(this).select();});
            $(input_speisen_preis_angebot).css({'background-color': '#f9c5ff'});
            input_speisen_preis_angebot.size = '3';
            input_speisen_preis_angebot.id ='angebotf'+mini_Zelle_formatid.split("@")[i].split('!')[1]+'s'+my_value.split('!')[1];
            var tr_wahl_zutaten =zero('div',0,0,0,0,document.getElementById('speisen_body'+gruppen_id)); 
            tr_wahl_zutaten.id='wahlzutatf'+mini_Zelle_formatid.split("@")[i].split('!')[1]+'s'+my_value.split('!')[1];
        }}}
        
    //step_2453 icons 
        //knopf preis update    
        //var td_ok_knopf = zero('div',0,0,0,0,tr_new);$(td_ok_knopf).buttonsetv();
        //alert(format_daten);
        var icon_preis = k_m_f(my_value.split('!')[1]+'|'+f0_aktiv+'|'+format_6162_ticker+'|'+format_daten,'$ upd',tr_new,'',10,'on',(speise4-8),speise2);
        tab_index++;
        $(icon_preis).attr('tabindex', tab_index);
        icon_preis.onclick = function()
        {
            var spid_kliked = this.id.split("|")[0];
            var f0_aktiv_kliked = this.id.split("|")[1];
            var format_ticker_kliked = this.id.split("|")[2];
            var format_daten_kliked = this.id.split("|")[3];
            var next_id_for_focus='';var ersteformat='';
            for(var i3 = 0; i3 < format_ticker_kliked; i3++)
            {
                var preis = $('#f'+format_daten_kliked.split(',')[i3]+'s'+spid_kliked).val();
                /*load next focus id*/if(i3==0)next_id_for_focus='#f'+format_daten_kliked.split(',')[i3]+'s'+((1*1)+(1*spid_kliked));
                var angebot = $('#angebotf'+format_daten_kliked.split(',')[i3]+'s'+spid_kliked).val();
                update_preis_und_angebot(preis,spid_kliked,format_daten_kliked.split(',')[i3],angebot);
            }
            $(this).css({"background-color":"green","color":"white",});
            $('html, body').animate({scrollTop: $(this).offset().top-40}, 900);
            //tab to next
            $('[tabindex=' + ((1*$(this).attr('tabindex'))+(1*1)) + ']').select();
        };
        $(icon_preis).buttonsetv();
        var tr_icons =zero('div',0,0,0,0,document.getElementById('speisen_body'+gruppen_id)); 
        var td_6281=zero('td',0,0,0,0,tr_icons);td_6281.colSpan='10';
        var tabed_6281=zero('table',0,0,0,1,td_6281);var tabedbdy_6281=zero('body',0,0,0,0,tabed_6281);
        var tabedbdytr_6281=zero('tr',0,0,5,0,tabedbdy_6281);
        var td_6281=zero('td',0,0,0,0,tabedbdytr_6281);$(td_6281).text('5793'); 
fehler_suche=700;
        
        //delet icon 
        var td_delet=zero('td',0,0,0,0,tabedbdytr_6281);
        var delet_icon = k_m_f(my_value.split('!')[1],'5316 delete',td_delet,'',10,'on',(speise4-8),speise2);
        delet_icon.onclick = function(){
            if (confirm('Achtung Speise wird geöscht!!')) {
                delete_speise(this.id);element_filter_technologie();
            } else {
                alert('ABGEBROCHEN');
            } 
        };
        //zutat icon
        var td_bearbeiten=zero('td',0,0,0,0,tabedbdytr_6281);
        td_bearbeiten.id='zutat_div_in_speisen_einzeln'+my_value.split('!')[1];
        var bearbeiten_icon = k_m_f(my_value.split('!')[1]+'-'+my_value.split('!')[2],'Bearbeiten',td_bearbeiten,'',10,'on',(speise4-8),speise2);
        bearbeiten_icon.onclick = function()
        {
            gruppen_id_nach_click = this.id.split('-')[1];
            
            gruppenId = this.id.split('-')[1];
            
            var f0_href = '00|'+ $('#C1979_speise_f0-'+this.id.split('-')[0]).text();
            //click_knopf_kueche('00|'+herf_f0_finder(this.id.split('-')[0]) , td_bearbeiten,'zutat','speisen_einzeln');
            click_knopf_kueche(f0_href , td_bearbeiten,'zutat','speisen_einzeln');
        };    
        //kommentar
        var td_beschreibung_icon=zero('td',0,0,0,0,tabedbdytr_6281);
        var komentar_icon = k_m_f(my_value.split('!')[1],'5326 Kommentar',td_beschreibung_icon,'',10,'on',(speise4-8),speise2);
        komentar_icon.onclick = function(){speise_kasten_update(this.id,'kommentar');};    
        
        //hide or visible
        if(my_value.split('!')[7]!='-'){$(tr_icons).css({'background-color': 'blue','color': 'white',});var td_hide_or_visible=zero('td',0,0,0,0,tabedbdytr_6281);var icon_hide = k_m_f(my_value.split('!')[1],'Sichtbar machen('+my_value.split('!')[7]+')',td_hide_or_visible,'',10,'on',(speise4-8),speise2);icon_hide.onclick = function(){hide_it('-',this.id);element_filter_technologie();};}else{var td_hide_or_visible=zero('td',0,0,0,0,tabedbdytr_6281);var icon_hide = k_m_f(my_value.split('!')[1],'Unsichtbar machen('+my_value.split('!')[7]+')',td_hide_or_visible,'',10,'on',(speise4-8),speise2);icon_hide.onclick = function(){hide_it('9999',this.id);element_filter_technologie();};}
        if(my_value.split('!')[7]!='-'){$(tr_icons).css({'background-color': 'blue','color': 'white',});var td_hide_or_visible=zero('td',0,0,0,0,tabedbdytr_6281);td_hide_or_visible.className='speise_text';$(td_hide_or_visible).text('privat '+my_value.split('!')[7]);}if(my_value.split('!')[7]=='hide'){alert('5679 hide wird auf - korregiert speiseId = '+ my_value.split('!')[1] );hide_it('-',my_value.split('!')[1]);}
        //blue
        var td_blue=zero('td',0,100,0,0,tabedbdytr_6281);
        $(td_blue).css({'cursor': 'pointer',});
        td_blue.id='bring_me_up-'+my_value.split('!')[1];
        $(td_blue).text('↑↑↑↑');
        td_blue.onclick = function(){
            //speise_herf_f0 = '00|'+ $('#C1979_speise_f0-'+this.id.split('-')[1]).text();
            //var aktuelle_speiseId =  speise_herf_f0.split("!")[2];
            //var speise_name = $('#C_mini_Zelle_SpeiseNr'+aktuelle_speiseId).text().split('!')[0];
            //zutat_gts_modern(speise_name);            
            $(this).css({'background-color': 'blue','cursor': 'pointer',});
            $('html, body').animate({scrollTop: $(this).offset().top-80}, 900);
        };   
        var td_blue=zero('td',0,100,0,0,tabedbdytr_6281);
        $(td_blue).css({'cursor': 'pointer','background-color': 'yellow',});
        td_blue.id='bring_me_up-'+my_value.split('!')[1];
        $(td_blue).text('↑↑↑↑↑↑↑');
        td_blue.onclick = function(){
            $('html, body').animate({scrollTop: $(this).offset().top+(1*580)}, 900);
        };
        var td_blue=zero('td',0,100,0,0,tabedbdytr_6281);
        $(td_blue).css({'cursor': 'pointer','background-color': 'green',});
        td_blue.id='bring_me_up-'+my_value.split('!')[1];
        $(td_blue).text('↑↑↑↑↑↑↑↑↑↑');
        td_blue.onclick = function(){
            $('html, body').animate({scrollTop: $(this).offset().top+(1*1280)}, 900);
        };
        var td_blue=zero('td',0,100,0,0,tabedbdytr_6281);
        $(td_blue).css({'cursor': 'pointer','background-color': '#fff',});
        td_blue.id='bring_me_up-'+my_value.split('!')[1];
        $(td_blue).text('↓↓↓');
        td_blue.onclick = function(){
            $('html, body').animate({scrollTop: $(this).offset().top-(1*900)}, 900);
        }; 
        tab_zutat++;
        var td_blue = k_m_f('bring_me_up-'+my_value.split('!')[1]+'-'+(tab_zutat),' Z-S ',tabedbdytr_6281,'',10,'on',(speise4-8),speise2);
        $(td_blue).attr('tabindex', tab_zutat);
        td_blue.onclick = function(){
            speise_herf_f0 = '00|'+ $('#C1979_speise_f0-'+this.id.split('-')[1]).text();
            var aktuelle_speiseId =  speise_herf_f0.split("!")[2];
            var speise_name = $('#C_mini_Zelle_SpeiseNr'+aktuelle_speiseId).text().split('!')[0];
            zutat_gts_modern(speise_name,this.id.split('-')[2]);            
            $(this).css({'background-color': 'blue','cursor': 'pointer',});
            $('html, body').animate({scrollTop: $(this).offset().top-310}, 900);
        };
fehler_suche=800;
        
        //tauschen
        var td_tauschen_icon=zero('td',0,0,0,0,tabedbdytr_6281);
        var td_id_schild=zero('td',0,0,0,0,tabedbdytr_6281);$(td_id_schild).text(my_value.split('!')[1])
        var tauschen_icon = k_m_f(my_value.split('!')[1],'danach setzer ',td_tauschen_icon,'',10,'on',(speise4-8),speise2);
        var td_input_transfer_id=zero('td',0,0,0,0,tabedbdytr_6281);
        var input_transfer_id =zero('input',0,0,0,0,td_input_transfer_id); 
        input_transfer_id.id='input_transfer_id'+my_value.split('!')[1];
        
        tauschen_icon.onclick = function()
        {
            speisen_danach_setzer(this.id,$('#input_transfer_id'+this.id).val());
        };    
        
        var tr_speise_zutaten =zero('tr',0,0,0,0,document.getElementById('speisen_body'+gruppen_id)); 
        var td_for_zutat_table= zero('td', 0, 0, 0, 0,tr_speise_zutaten);td_for_zutat_table.colSpan='10';
        
        //start table zutat
        var table_zutaten=zero('table',0,0,0,1,td_for_zutat_table);
        $(table_zutaten).css({'background-color': 'royalblue',})
        var body_zutaten=zero('tbody',0,0,0,0,table_zutaten);
        var tr_zutaten=zero('tr',0,0,0,0,body_zutaten);
        tr_zutaten.id='zutaten_tr'+my_value.split('!')[1];
        //ende table zutat
        //start table beschreibung
        var table_essen_beschreibung=zero('table',0,0,0,1,td_for_zutat_table);
        var body_essen_beschreibung=zero('tbody',0,0,0,0,table_essen_beschreibung);
        var tr_essen_beschreibung=zero('tr',0,0,0,0,body_essen_beschreibung);
        //step_2453 kommentar 
        if(my_value.split('!')[8]!="0")
        {
                var td_kommentar_titel=zero('td',0,0,0,0,tr_essen_beschreibung);
                $(td_kommentar_titel).text('oxi Komment: ');
                var td_kommentar=zero('td',0,0,0,0,tr_essen_beschreibung);
                
                $(td_kommentar).text(my_value.split('!')[8]);
        }
        fehler_suche=900;
 
        //start speise foto
        /*
        
        var speiisen_bild= my_value.split('!')[2];
        var td_for_ft_table= zero('td', 0, 0, 0, 0,tr_speise_zutaten);
        var tr_peeisen_bild=zero('tr',0,0,0,0,td_for_ft_table);
        var td_peeisen_bild=zero('td',0,0,0,0,tr_peeisen_bild);td_peeisen_bild.colSpan='5';td_peeisen_bild.className='kopf_text';
        var div_bild_ps = zero('div',0,'100','100','0',td_peeisen_bild);
        var piiic_id_fo= restaurantId+my_value.split('!')[1];
        div_bild_ps.id=piiic_id_fo;
        $(div_bild_ps).css({
            'border-radius': '5px',
            "background-image":'url('+pic_link+'/album_privat/&'+piiic_id_fo+'.jpg)',
            'background-size': '100%',
            'background-Repeat':'no-repeat',
        });
        
        var input_button = document.createElement('input');input_button.type = 'checkbox';div_bild_ps.appendChild(input_button);
        input_button.id = 'inpuut:'+ my_value.split('!')[1];
        input_button.onchange = function(){if (this.checked) {update_speise_bild('show_imag',this.id.split(':')[1])} else {update_speise_bild('-',this.id.split(':')[1])}};
        if(my_value.split('!')[7]=='show_imag')input_button.checked=true;
        
        var td_iframe=zero('td',0,0,0,0,tr_peeisen_bild);$(td_iframe).text('6532');
        var td_iframe_div=zero('div',0,200,80,0,td_iframe);
        var iftaam_iinn = pic_link+'/pic_own.aspx?idendity='+piiic_id_fo+'&format=.jpg';
        var td_iframe2=zero('iframe',iftaam_iinn,180,70,0,td_iframe_div);
        td_iframe_div.id='fram:'+piiic_id_fo;
        $(td_iframe_div).mousemove(function() {
            $('#'+this.id.split(':')[1]).css({
                "background-image":'url('+pic_link+'/album_privat/&'+this.id.split(':')[1]+'.jpg)',
            });
        });
        */
        
    }//}// ende for speise nr
        //start zutaten td 
    
    //step_2453 etesal 
    for (var i = 0; i < $('.C857_V_gruppe_class'+teck_gruppen_id).length; i++)
    {
        var my_value6= $('.C857_V_gruppe_class'+teck_gruppen_id)[i];
        my_value6=$(my_value6).text();
        if(document.getElementById('zutaten_tr'+my_value6.split('!')[2]))
        {
            var td_zutat =zero('div',0,0,0,0,document.getElementById('zutaten_tr'+my_value6.split('!')[2])); $(td_zutat).buttonsetv();
            $(td_zutat).css({'margin':'2px'});
            td_zutat.id = i+'zutat_td'+my_value6.split('!')[3];
            //td_zutat.className='zutat_text';
            var div_text =zero('div',0,0,0,0,td_zutat); $(div_text).buttonsetv();
            div_text.className='div_text'+my_value6.split('!')[3];
            $(div_text).css({'cursor': 'pointer','background-color':'#16ffe6',"border":"1px solid black",'border-color': '#000','padding':'2px'});
            div_text.id='my_oiuy-'+my_value6.split('!')[1];
            div_text.onmousedown=function(){
                $(this).toggle('slow');
                dell_zutat_von_speise(this.id.split('-')[1]);//speisen_zutat
            }
        }
    }
    
fehler_suche=1000;
    //alert2(9000,reperatur_id_samler);
    for (var i2 = 0; i2 < $('.C829_zutat_gruppen_class'+teck_gruppen_id).length; i2++)
    {var my_value= $('.C829_zutat_gruppen_class'+teck_gruppen_id)[i2];my_value=$(my_value).text();
        $('.div_text'+my_value.split('!')[1]).text(my_value.split('!')[0]);
    }
    //start general href
    //step_2453 preis 
    for (var i2 = 0; i2 < $('.C1987_href_gruppen_class'+teck_gruppen_id).length; i2++)
    {
        //start preis zuteulung
        var my_value= $('.C1987_href_gruppen_class'+teck_gruppen_id)[i2];
        my_value=$(my_value).text();
        
        
        //var preis = my_value.split('!')[0].split('|')[4];
        var preis = my_value.split('!')[0];
        var elemet_id_erstellen = 'f'+ my_value.split('!')[3]+'s'+my_value.split('!')[2];
        $('#'+elemet_id_erstellen).val(preis);//
        var angebot = my_value.split('!')[13];
        $('#angebot'+elemet_id_erstellen).val(angebot);//
        //ende preis zuteulung
        if(document.getElementById('wahlzutat'+elemet_id_erstellen))
            wahlzutat_tr_in_speise(document.getElementById('wahlzutat'+elemet_id_erstellen),my_value);
        
        var menu_selected = '';
        try{
            menu_selected = my_value.split('!')[6];
            var bab = menu_selected.split('~').length;
        }
        catch(e)
        {
            //alert(my_value.split('!')[6]);menu_selected='';
            //alert(my_value +'bei '+i2);
            menu_selected='';
        };
        
    //step_2453 menu 
        if (menu_selected != '' && menu_selected !='0|0|0~' && my_value.split('!')[6] !='0')
        {
            var menu_coordinaten = "";
            var menue_text = "";
            for (var i3 = 0; i3 < menu_selected.split('~').length - 1; i3++)
            {
                if (menu_selected.split('~')[i3].split('|')[2] != "0")
                {
                    menu_coordinaten = menu_selected.split('~')[i3].split('^')[1];
                    //mydiv.InnerHtml += menu_coordinaten.split('|')[5] + ", <br>";
                    //menue_text += menu_coordinaten.split('|')[5] + ', \n';
                    menue_text += menu_selected.split('~')[i3].split('|')[3] + ', \n';
                    
                }
            }
            if(menue_text!='')
            {
                var td_speisen_in_menu=zero('td',0,0,0,0,document.getElementById('zutaten_tr'+my_value.split('!')[2]));
                $(td_speisen_in_menu).text(menue_text);
            }
        }
        

    }
    //ende general href

    if(teck_gruppen_id!='')
    {
//tr1
            var tr_titel2230=zero('tr',0,0,0,0,body);var trb=zero('table',0,0,0,0,tr_titel2230);var trbdy=zero('tbody',0,0,0,0,trb);
            
            var tr_titel223=zero('tr',0,0,0,0,trb);$(tr_titel2230).css({'background-color': '#AAA'});
            var td_titel223=zero('td',0,0,0,0,tr_titel223);$(td_titel223).text('6090');
            var icon_stamp_pizza = k_m_f(gruppen_nummer,'stamp pizza',td_titel223,'',10,'on',(speise4-7),speise2);
            icon_stamp_pizza.onclick = function(){
                click_knopf_kueche(this.id,td_titel223,'speise','element_filter_technologie');
            }
            var td_titel224=zero('td',0,0,0,0,tr_titel223);
            var icon_open_speise_kasten = k_m_f(gruppen_nummer,'add essen',td_titel224,'',10,'on',(speise4-7),speise2);icon_open_speise_kasten.onclick = function(){open_speise_kasten(this.id,'speise');}
            var td_titel_menu_insert=zero('td',0,0,0,0,tr_titel223);var icon_add_menu = k_m_f(gruppen_nummer,'add menu',td_titel_menu_insert,'',10,'on',(speise4-7),speise2);icon_add_menu.onclick = function(){open_speise_kasten(this.id,'menu');}
            var td_titel_format_insert=zero('td',0,0,0,0,tr_titel223);var icon_add_format = k_m_f(gruppen_nummer,'add format',td_titel_format_insert,'',10,'on',(speise4-7),speise2);icon_add_format.onclick = function(){open_speise_kasten(this.id,'format');}
            var td_zutat_optionen=zero('td',0,0,0,0,tr_titel223);var icon_zutat_optionen = k_m_f(gruppen_nummer,'6432 $$ Z',td_zutat_optionen,'',10,'on',(speise4-7),speise2);icon_zutat_optionen.onclick = function(){start_geld_box(this.id);}
            var td_zutat_stufen=zero('td',0,0,0,0,tr_titel223);var icon_zutat_stufen = k_m_f(gruppen_nummer,'Z Stufen: '+$('#C_mini_Zelle_gruppen'+teck_gruppen_id).text().split('!')[6],td_zutat_stufen,'',10,'on',(speise4-7),speise2);icon_zutat_stufen.onclick = function(){gruppen_text_update(this.id,6);}
            var td_zutat_update=zero('td',0,0,0,0,tr_titel223);var icon_zutat_update = k_m_f(gruppen_nummer,'Z $ Verteilen',td_zutat_update,'',10,'on',(speise4-7),speise2);icon_zutat_update.onclick = function()
            {
                    //start_zutat_liste(this.id);
                    open_zutat_geld_2017(this.id);
            }
            var td_gruppen_delet=zero('td',0,0,0,0,tr_titel223);
            var icon_gruppen_delete = k_m_f(gruppen_nummer,'gld Delete Gruppe',td_gruppen_delet,'',10,'on',(speise4-7),speise2);
            icon_gruppen_delete.onclick = function()
                {
                    if (confirm('Achtung Gruppe wird geöscht!!')) {
                        gruppen_delete(this.id);
                    } else {
                        alert('ABGEBROCHEN');
                    } 
                    //xy.gruppen_delete(this.id); deaktiviert ohne test okt. 2016
                }
            var td_update_zutat=zero('td',0,0,0,0,tr_titel223);
            var icon_zutat_update = k_m_f(gruppen_nummer,'4474 Update Zutat',td_update_zutat,'',10,'on',(speise4-8),speise2);
            icon_zutat_update.onclick = function(){
                    start_zutat_liste(this.id);
            }
            //reihe zwei icons
            var tr_titel2230=zero('tr',0,0,0,0,body);var trb=zero('table',0,0,0,0,tr_titel2230);var trbdy=zero('tbody',0,0,0,0,trb);
            var tr_titel223=zero('tr',0,0,0,0,trb);$(tr_titel2230).css({'background-color': '#AAA'});
            var td_zutat_stufen=zero('td',0,0,0,0,tr_titel223);var icon_zutat_stufen = k_m_f(gruppen_nummer,'import Format: ',td_zutat_stufen,'',10,'on',(speise4-7),speise2);icon_zutat_stufen.onclick = function(){clone_format(this.id,6);}
            var td_zutat_copieren=zero('td',0,0,0,0,tr_titel223);var icon_zutat_copieren = k_m_f(gruppen_nummer,'import Zutat',td_zutat_copieren,'',10,'on',(speise4-7),speise2);icon_zutat_copieren.onclick = function(){list_gruppen_clone_zutaten(this.id);}
            var td_blue=zero('td',0,100,0,0,tr_titel223);
            $(td_blue).css({'cursor': 'pointer','background-color': 'red','color': '#fff','font-size':'150%'});
            //td_blue.id='bring_me_up-'+my_value.split('!')[1];
            $(td_blue).text(' -Z- ');
            td_blue.onclick = function(){
                zutat_modern_nur_gruppe($('#C_mini_Zelle_gruppen'+teck_gruppen_id).text().split('!')[0].split('|')[0]);            
                $(this).css({'background-color': 'blue','cursor': 'pointer',});
                $('html, body').animate({scrollTop: $(this).offset().top-80}, 900);
            };
            start_wahl_zutat(body);
    }
    lade_classen('teknologie 5823');
        var tr_fasle=zero('tr',0,0,0,0,body);var td_fasele=zero('td',0,0,100,0,tr_fasle);
    
fehler_suche=1200;

}


