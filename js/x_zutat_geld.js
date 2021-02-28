// JScript File
function open_zutat_geld_2017(gruppen_nummer)
{
    $('#Div_an_alle').remove();
    var Div_an_alle= zero('div', 0, 0, 0, 0,document.body);$(Div_an_alle).css({'top' : '5px','position':'fixed','z-index':'50',
    'background-color':'royalblue','left' :'2%',"border":"3px solid black",'border-color': '#000','valign':'top'});
    Div_an_alle.id='Div_an_alle';         close_me_knopf(Div_an_alle);
    var Clone_titel= zero('h2', 0, 0, 0, 0,Div_an_alle);$(Clone_titel).text('cfp x_zutat_geld.js');
    var stufenlosen = zero('div',0,0,0,0,Div_an_alle);
    stufenlosen.id='my_id_coiweuh';
    
    var sechs = $('#C_mini_Zelle_gruppen'+gruppen_nummer).text().split('!')[6];
    for (var i = 0; i < sechs; i++)
    {
        var fieldset= zero('fieldset', 0, 0, 0, 0,Div_an_alle);$(fieldset).buttonsetv();
        $(fieldset).css({'top':'0px','margin-top':'0px'});
        var Clone_titel2= zero('legend', 0, 0, 0, 0,fieldset);
        $(Clone_titel2).text('zge '+i+1);
        
        //input
        var input_zutat = zero('div',0,0,0,0,fieldset);
        var input_zutat = zero('textarea',0,0,0,0,input_zutat);
        //input_zutat.id='my_id_u6ty';
        input_zutat.id=(i+1);
        autocomplet_zutat= new Array();
        var zutat_bib_satz_intern = $('.C829_zutat_gruppen_class'+gruppen_nummer).text();
        for (var i2 = 0; i2 < zutat_bib_satz_intern.split("@").length-1; i2++) 
        {
            autocomplet_zutat[i2]=zutat_bib_satz_intern.split("@")[i2];
        }
        $(input_zutat).autocomplete({
            source: autocomplet_zutat,
            'z-index':'1251',
            select: function(event, ui) {
                if(ui.item){
                    $(this).val(ui.item.value);
                    //inzert_zutat_from_imput($(input_zutat).val());
                    //zutat_gts_modern(speise_name);
                    update_mini_Zelle_zutatBibliothek($(this).val().split('!')[1],6,this.id);
                    geld_2017_stufen_bericht_modern(gruppen_nummer,this.id-1);
                    $(this).val('');
                    return false;
                }
            }
        });
        var bericht_samler = zero('div',0,0,0,0,fieldset);
        bericht_samler.id='td_zutat_stufe_addirungen_modern'+(i+1);
        
    }
    geld_2017_stufen_bericht_modern(gruppen_nummer);
}
function geld_2017_stufen_bericht_modern(gruppen_nummer)
{
    var sechs = $('#C_mini_Zelle_gruppen'+gruppen_nummer).text().split('!')[6];
    for (var i = 0; i < sechs; i++)
    {
        $('#td_zutat_stufe_addirungen_modern'+(i+1)).html('');
        for (var i2 = 0; i2 < $('.mini_Zelle_zutatBibliothek').length; i2++)
        {var my_value= $('.mini_Zelle_zutatBibliothek')[i2];my_value=$(my_value).text();
            
            if(my_value.split('!')[6]==(i+1) && my_value.split('!')[2]==gruppen_nummer)
            {
                var div_zutat_stufe = zero('div',0,0,0,0,document.getElementById('td_zutat_stufe_addirungen_modern'+(i+1)));
                $(div_zutat_stufe).text(my_value.split("!")[0]);
                //$(div_zutat_stufe).css({ 'background-color': '#ffffff','font-size': '70%','z-index': '2100',});
            }
        }//
    }
    $('#my_id_coiweuh').html('');
    //start stufen lose bericht
    for (var i2 = 0; i2 < $('.mini_Zelle_zutatBibliothek').length; i2++)
    {var my_value= $('.mini_Zelle_zutatBibliothek')[i2];my_value=$(my_value).text();
        
        if(my_value.split('!')[6]==0 && my_value.split('!')[2]==gruppen_nummer)
        {
            //stufen_lose_diese_gruppe+= ','+my_value.split("!")[0];
            var stufen_lose = zero('div', 0, 0, 0, 1,document.getElementById('my_id_coiweuh'));$(stufen_lose).buttonsetv();
            $(stufen_lose).text(my_value.split("!")[0]);
            $(stufen_lose).css({'margin': '2px','padding':'1px','color':'#fff',});
            
        }
        if(my_value.split('!')[6]==0 && my_value.split('!')[2]!=gruppen_nummer)
        {
            //stufen_lose_alle+= ','+my_value.split("!")[0];
            var stufen_lose = zero('div', 0, 0, 0, 1,document.getElementById('my_id_coiweuh'));$(stufen_lose).buttonsetv();
            $(stufen_lose).text(my_value.split("!")[0]+' (global)');
            $(stufen_lose).css({'background-color':'yellow','margin': '2px','padding':'1px'});
        }
    }//
    
}
function geld_stufen_bericht()//sdfp
{
        $('#refresh_4846').remove();
        var stufen_liste = zero('table', 0, 0, 0, 1,document.getElementById('matt_flach'));
        stufen_liste.id='refresh_4846';
        var tr_stufen_preise=zero('tr',0,0,0,0,stufen_liste);
             var td_stufen_preise=zero('td',0,0,0,0,tr_stufen_preise);td_stufen_preise.colSpan='3';$(td_stufen_preise).css({ 'background-color': 'white',});
             var antwort='';
        for (var i = 0; i < mini_Zelle_formatid.split("@").length - 1; i++)
        {if(mini_Zelle_formatid.split("@")[i].split('!')[2]==gruppen_id_nach_click&&mini_Zelle_formatid.split("@")[i].split('!')[6]!='0'){
             antwort+= '-'+mini_Zelle_formatid.split("@")[i].split('!')[6];
        }}
        $(td_stufen_preise).text(antwort);
        
        $(stufen_liste).css({'bottom': 50+'px','position':'absolute','left': '1px',});
        //var sechs = $('#info5519_'+gruppenId).text().split('!')[6];
        var sechs = $('#C_mini_Zelle_gruppen'+gruppenId).text().split('!')[6];
        var stufen_lose_diese_gruppe='';
        var stufen_lose_alle='';
        for (var i = 0; i < sechs; i++)
        {
            var tr_zutat_stufe=zero('tr',0,0,0,0,stufen_liste);
            var td_zutat_stufe=zero('td',0,0,0,0,tr_zutat_stufe);
            var td_zutat_stufe_addirungen=zero('td',0,0,0,0,tr_zutat_stufe);
            td_zutat_stufe_addirungen.id='td_zutat_stufe_addirungen'+(i+1);
            td_zutat_stufe.id=(i+1);
            $(td_zutat_stufe).text('sutfe'+(i+1)+":");
            $(td_zutat_stufe).css({ 'background-color': 'blue','font-size': '150%','cursor': 'pointer','z-index': '2100',});
            td_zutat_stufe.onclick = function(){
                $('#ks_t_titel').text('sutfe'+this.id+":");
                $('#ks_t_titel').css({'font-size': '490%',});
                zutat_stufen_eintrag_modus_0_normal=this.id;
                $('#z_div_kesh').hide();//speisen_zutat
            };
            //start bericht
            for (var i2 = 0; i2 < $('.mini_Zelle_zutatBibliothek').length; i2++)
            {var my_value= $('.mini_Zelle_zutatBibliothek')[i2];my_value=$(my_value).text();
                
                if(my_value.split('!')[6]==(i+1) && my_value.split('!')[2]==gruppen_id_nach_click)
                {
                    var td_zutat_stufe=document.getElementById('td_zutat_stufe_addirungen'+(i+1));
                    var bis_jetzt = $(td_zutat_stufe).text();
                    var bis_jetzt = $(td_zutat_stufe).text(bis_jetzt +'--'+my_value.split("!")[0]);
                    $(td_zutat_stufe).css({ 'background-color': '#ffffff','font-size': '70%','z-index': '2100',});
                }
            }//
            //ende bericht
        }//end for sechs
        
        //start stufen lose bericht
        for (var i2 = 0; i2 < $('.mini_Zelle_zutatBibliothek').length; i2++)
        {var my_value= $('.mini_Zelle_zutatBibliothek')[i2];my_value=$(my_value).text();
            
            if(my_value.split('!')[6]==0 && my_value.split('!')[2]==gruppen_id_nach_click)
            {
                stufen_lose_diese_gruppe+= ','+my_value.split("!")[0];
            }
            if(my_value.split('!')[6]==0 && my_value.split('!')[2]!=gruppen_id_nach_click)
            {
                stufen_lose_alle+= ','+my_value.split("!")[0];
            }
        }//
        var tr_zutat_stufenlos=zero('tr',0,0,0,0,stufen_liste);
            var td_zutat_stufenlos=zero('td',0,0,0,0,tr_zutat_stufenlos);
            td_zutat_stufenlos.colSpan='2';
            td_zutat_stufenlos.id='stufen_lose_td_text';
            $(td_zutat_stufenlos).css({ 'background-color': 'red','font-size': '70%','z-index': '2100',});
            $(td_zutat_stufenlos).text(stufen_lose_diese_gruppe);
            
        var tr_zutat_stufenlos_alle=zero('tr',0,0,0,0,stufen_liste);
            var td_zutat_stufenlos_alle=zero('td',0,0,0,0,tr_zutat_stufenlos_alle);td_zutat_stufenlos_alle.colSpan='2';
            $(td_zutat_stufenlos_alle).css({ 'background-color': 'yellow','font-size': '70%','z-index': '2100',});
            
            
        //ende stufen lose bericht
    //}
}
function x_zutat_geld_js_zutat_stufen_betrag_2017(gruppenId)//gbox
{
    $('#input_div_20').remove();
    var div_zutat_imput=zero('div',0,0,0,0,document.body);$(div_zutat_imput).css({"background-color":'royalblue','color':'#fff','position':'fixed','top':'200px','right':'30%','padding':'20px','z-index':'2000'});
    div_zutat_imput.id='input_div_20';
    close_me_knopf(div_zutat_imput);
    //$(div_zutat_imput).text('z_zutat_geld.js gtx')
    
    var formaten = format_start_fuer_geld_zutat_anzahl(gruppenId); //habib
    //00|0|1|0|0|0|0|!98716031!98616031!98616031!132!23600!70770165!70770165!42cm!@
    //         normal!-       !21962659!@
    //normal!-!21962659!@
    for (var i2 = 0; i2 < formaten.split("@").length-1; i2++) 
    {//titel der tabelle
        var div_formaten = zero('div',0,0,0,0,div_zutat_imput);$(div_formaten).buttonsetv();
        $(div_formaten).text(formaten.split("@")[i2].split('!')[8]);
        $(div_formaten).css({'text-align':'center'});
        var formatid=formaten.split("@")[i2].split('!')[2];
        var geld_zutat_tabelle=format_sazt(formatid).split("!")[5];
        //
        var sechs = $('#C_mini_Zelle_gruppen'+gruppenId).text().split('!')[6];
        atribut_6_in_format_id = new Array();if($('#info5519_'+formatid).text().split('!')[6].split('~').length>=2)atribut_6_in_format_id = $('#info5519_'+formatid).text().split('!')[6].split('~');
        for (var i3 = 0; i3 < sechs; i3++) 
        {
            if(!atribut_6_in_format_id[i3])
                atribut_6_in_format_id.push((i3+1)+'|'+'00|');//age dare mizare bashe age nadare behesh ezafe mikona
        }
        for (var i = 0; i < sechs; i++) //gruppen atribut sechs
        {
            //td 1 titel und input
            var div_zutat_stufe=zero('div',0,0,0,0,div_formaten);
            $(div_zutat_stufe).text('sutfe'+(i+1)+":");
                var input_zutat_stufe = zero('input', 0, 0, 0, 0, div_zutat_stufe);
                input_zutat_stufe.size = 20;
                
                $(input_zutat_stufe).val(atribut_6_in_format_id[i].split('|')[1]);
                input_zutat_stufe.id=formatid+'input_zutat_stufe'+(i);
                
        }
        var geld_eintrag2_icon = k_m_f(formatid,'tpc Speichern',div_formaten,'',10,'on',(speise4-8),speise2);
        $(geld_eintrag2_icon).click(function() {
            var antwort='';
            for (var i = 0; i < atribut_6_in_format_id.length; i++) 
            {
                antwort+= (i+1)+'|'+$('#'+this.id+'input_zutat_stufe'+i).val()+'|~';
                $('#'+this.id+'input_zutat_stufe'+i).css({'background-color': 'yellow',});
            }
            format_update_6(this.id,antwort);
        });
    }
}

    function format_start_fuer_geld_zutat_anzahl(gruppenId)
    {
        var antwort = '';//position|xy|picId|@
        var xy_der_format = '';
        var antwort_format_id = '';
        var nur_f0 = 1;var return_format_id='';
        for (var i = 0; i < mini_Zelle_formatid.split("@").length - 1; i++)//format Schleife
        {
            //xy_der_speise = "";
            if (gruppenId == mini_Zelle_formatid.split("@")[i].split("!")[2])
            {
                if (mini_Zelle_formatid.split("@")[i].split("!")[0] != 'f0')
                {
                    nur_f0 = 0;
                    var formatId = mini_Zelle_formatid.split("@")[i].split("!")[1];
                    
                    antwort_format_id+= '-!-!' +formatId + '@';
                }
                else
                    return_format_id = mini_Zelle_formatid.split("@")[i].split("!")[1];
                
            }
            
        }
        //age f0 yek mund yanee formate insert shode nadare
        if (nur_f0 == 1)
        {
            antwort_format_id = '-!-!' + return_format_id + '!@';
        }
        //antwort += "00|" + xy_der_speise + "@";
        //alert(xy_der_format);
        return antwort_format_id;//position als atribut1
    }
function start_geld_box(gruppenId)//gbox
{
    alert('fhl entfernt am 1,4,2017');
}

