// JScript File

var tr_ticker=0;var alle_plzen= '';
autocomplet_plz= new Array();
function start_plz_box()//splz
{
    alle_plzen= xy.lade_plz_liste(plz_initialen).value;
    alle_plzen= alle_plzen.replace(/\-/g, ' ');
    for (var i = 0; i < alle_plzen.split("@").length-1; i++) 
    {
        autocomplet_plz[i]=alle_plzen.split("@")[i].split("~")[0];
    }
    
    var divplz = zero('div',0,(screen.width * 0.61),(screen.height * 0.65),0,document.body);
    divplz.id='plzbox2661';
    $(divplz).css({"background-color":'blue','top':'5px','left':'20%','width':'75%','z-index':'10','height':'96%','position':'fixed',
        'overflow':'auto', });
    var divicon = zero('div',0,0,0,0,divplz);$(divplz).css({'padding':'15px'});$(divicon).buttonsetv();
    var PLZ_entladen = k_m_f('0345986ij','Speichern und beenden',divicon,'',10,'on',(speise4-6),speise2);
    PLZ_entladen.onclick = function(){
        $("body").css("cursor", "progress");
        setTimeout( function() 
        { 
            xy.update_plz(plz_iformation,restaurantId);
            $('#plzbox2661').remove();
            $("body").css('cursor', 'default');
        }, 700);
    }
    var div_plz_imput=zero('div',0,0,0,0,divplz);$(div_plz_imput).buttonsetv();
    $(div_plz_imput).css({'top':'5px','right':'2px','width':'275%','z-index':'10'});
     div_plz_imput.id="xyhgty";
    
    var h1 = zero('h2',0,0,0,0,divplz);
    h1.id = 'plz_box_ueberschrift';
    $(h1).text('PLZ Berechnung 2423:'+plz_initialen);$(h1).animate({color:'white','top':'10px',},2000);
    //document.getElementById('geldliste').style.top=(screen.height * 0.05)+'px';
    //document.getElementById('geldliste').style.left='20px';
    var haupt_plz_addition =zero('div',0,0,0,1,divplz);
    $(haupt_plz_addition).text('G Adition 2401');
    haupt_plz_addition.onclick=function(){
        if(document.getElementById('plz_g_box'))
            $('#plz_g_box').remove();
        else
            plz_haupt_adition_box();
    }
    //table haupt
    var table_haupt=zero('table',0,0,0,1,divplz);var body_haupt=zero('tbody',0,0,0,0,table_haupt);
    var tr_haupt=zero('tr',0,0,0,0,body_haupt);tr_haupt.id='tr_haupt_plz_liste';
    //td gesamt 1
    var td_haupt1=zero('td',0,0,0,0,tr_haupt);$(td_haupt1).css('top',0 +'%');
    
    var table_k1=zero('table',0,0,0,1,td_haupt1);var body_k1=zero('tbody',0,0,0,0,table_k1);$(table_k1).css('top',0 +'%');
    var tr_button=zero('tr',0,0,0,0,body_k1);
    //td add td
    var td_add=zero('td',0,0,0,0,tr_button);
    var zutztpic = k_m_f('37ysju','PLZ 2226',td_add,'',10,'on',(speise4-8),speise2);
    zutztpic.onclick = function(){
        $('#ex_345').text('PLZ');
        $('#ex_346').text('Mindestbetrag');
        $('#ex_347').text('Aufpreis');
        $('#0345986ij').animate({'opacity': '0'}, 1000);
        add_tr_plz(tr_ticker,body_k1);
    }
    var zutztpic2 = k_m_f('0345986ij','add Kilometer',td_add,'',10,'on',(speise4-8),speise2);
    zutztpic2.onclick = function(){
        $('#ex_345').text('meter');
        $('#ex_346').text('minimal');
        $('#ex_347').text('agio');
        $('#37ysju').animate({'opacity': '0'}, 1000);
        add_kilometer(tr_ticker,body_k1);
    }
    var td_button=zero('td',0,0,0,0,tr_button);td_button.colSpan='2';td_button.align='center'
    var input = document.createElement('input');input.type = 'button';input.style.color = '#336699';
    input.value = 'PLZ einstellung speichern 2453';
    td_button.appendChild(input);
    input.onclick = function(){
        var antwort='';
        for (var i2 = 0; i2 < tr_ticker; i2++) 
        {
            if($('#a_'+i2).val()!=''&&$('#b_'+i2).val()!=''&&$('#c_'+i2).val()!='')
            {
                antwort+=$('#a_'+i2).val()+'|';
                antwort+=$('#b_'+i2).val()+'|';
                antwort+=$('#c_'+i2).val()+'|#';
            }
            $('#al_tr'+i2).remove();
        }
        plz_iformation+=antwort;
        update_hauptmp3_2017(3,plz_iformation);
        
        liste_plz(tr_haupt);
        tr_ticker=0;
            
    };
    var tr_titel_kunden_titel=zero('tr',0,0,0,0,body_k1);
    var td_titel1=zero('td',0,(screen.width * 0.09),0,0,tr_titel_kunden_titel);$(td_titel1).text('PLZ');$(td_titel1).animate({color:'white'},2000);td_titel1.id='ex_345';
    var td_titel2=zero('td',0,(screen.width * 0.05),0,0,tr_titel_kunden_titel);$(td_titel2).text('Mindestbetrag');$(td_titel2).animate({color:'white'},2000);td_titel2.id='ex_346';
    var td_titel3=zero('td',0,(screen.width * 0.05),0,0,tr_titel_kunden_titel);$(td_titel3).text('Aufpreis');$(td_titel3).animate({color:'white'},2000);td_titel3.id='ex_347';
    //td gesamt 2 fuer die liste
    liste_plz(tr_haupt);
    plz_input_2017(div_plz_imput,autocomplet_plz);
}
function plz_input_2017(div_plz_imput,my_autocomplet_plz)
{
    //filter_aktion
    gefiltert= new Array();
    for (var i = 0; i < my_autocomplet_plz.length; i++) 
    {
        var press_me = my_autocomplet_plz[i].replace(/ /g, '');
        press_me = press_me.replace(/\)/g, '');
        press_me = press_me.replace(/\(/g, '');
        if(!document.getElementById('block_dp_ki8u'+press_me))
        {
            var div_dp_block=zero('div',0,0,0,0,div_plz_imput);
            $(div_dp_block).css({'display':'none'});
            gefiltert[i]=my_autocomplet_plz[i];
            div_dp_block.id = 'block_dp_ki8u'+press_me;
        }
    }    
    //end filter aktion
    $('#my_idmkiw88').remove();
    var input_plz_new = zero('textarea',0,0,0,0,div_plz_imput);
    $(input_plz_new).focus();//my_id_3326
    input_plz_new.id='my_idmkiw88';
    $(input_plz_new).autocomplete({
        source: gefiltert,
        'z-index':'1251',
        select: function(event, ui) {
            if(ui.item){
                $(this).val(ui.item.value);
                add_tr_2017($(this).val())
                $(this).val('');
                return false;
            }
        }
    });
}
function add_tr_2017(value)//lplz
{
    var vergleich_value = value.replace( /\s/g, "");
    vergleich_value = vergleich_value.replace(/\)/g, '');
    vergleich_value = vergleich_value.replace(/\(/g, '');
    var test=0;
    //duplikat test
    for (var i2 = 0; i2 < plz_iformation.split("#").length-1; i2++) 
    {
        var my_id = plz_iformation.split("#")[i2].split("|")[0].replace( /\s/g, "");//ohne leerzeichen
        my_id = my_id.replace(/\)/g, '');
        my_id = my_id.replace(/\(/g, '');
        if(vergleich_value==my_id)
        {
            test=0;
            alert('EXISTING!');
            break;
        }
        else{
            test=1;
        }
    }
    if(test==1)
    {
        plz_iformation+=value+'|00|00|#'
        update_hauptmp3_2017(3,plz_iformation);
        liste_plz(document.getElementById('tr_haupt_plz_liste'));
    }
}
function liste_plz(element)//lplz
{
    //var plz_iformation = xy.abfrage_plz().value;
    $('#td_haupt2').remove();
    var td_haupt2=zero('td',0,0,0,0,element);td_haupt2.id='td_haupt2';
    var table_k2=zero('table',0,0,0,1,td_haupt2);var body_k2=zero('tbody',0,0,0,0,table_k2);
    var tr_titel_=zero('tr',0,0,0,0,body_k2);
        var td_t2=zero('td',0,0,0,0,tr_titel_);$(td_t2).text('PLZ 2685');$(td_t2).animate({color:'white'},2000);
        var td_t3=zero('td',0,0,0,0,tr_titel_);$(td_t3).text('Mindestbetrag');$(td_t3).animate({color:'white'},2000);
        var td_t4=zero('td',0,0,0,0,tr_titel_);$(td_t4).text('Aufpreis');$(td_t4).animate({color:'white'},2000);
        
    for (var i2 = 0; i2 < plz_iformation.split("#").length-1; i2++) 
    {
        var text_for_td = plz_iformation.split("#")[i2]
        var tr_k2=zero('tr',0,0,0,0,body_k2);
        var td_k2=zero('td',0,0,0,0,tr_k2);$(td_k2).text(text_for_td.split("|")[0]);
        var my_id = text_for_td.split("|")[0].replace( /\s/g, "");//ohne leerzeichen
        my_id = my_id.replace(/\)/g, '');
        my_id = my_id.replace(/\(/g, '');
        td_k2.id=my_id;
        //plz_list_elemet_2017(text_for_td.split("|")[0],td_k2,'250px')
        var td_k3=zero('td',0,0,0,0,tr_k2);
        plz_list_elemet_2017(text_for_td.split("|")[1],td_k3,'midesgeld-'+my_id)
        var td_k4=zero('td',0,0,0,0,tr_k2);
        plz_list_elemet_2017(text_for_td.split("|")[2],td_k4,'aufpreis-'+my_id)
        var td_k5=zero('td',0,0,0,0,tr_k2);
        var adirekt = zero('a', 0, 0, 0, 0, td_k5);
        //alert(text_for_td.split("|")[0]);
        adirekt.href ="javascript:dell_plz('" +text_for_td.split("|")[0]+"');";
        var zutztpic = zero('img','Bilder/delete.png', 20, 20, 0, adirekt);
        //filter
        
        //end filter
    }
}
function plz_list_elemet_2017(wert,element,my_id)//atrp
{
    var input_blur=zero('input',0,0,0,0,element);
    input_blur.id=my_id;
    $(input_blur).css({'width':'70px',});
    $(input_blur).val(wert);
    $(input_blur).blur(function () {
        var update='';
        for (var i2 = 0; i2 < plz_iformation.split("#").length-1; i2++) 
        {
            var neue_vergleich = plz_iformation.split("#")[i2].split("|")[0].replace( /\s/g, "");//ohne leerzeichen
            neue_vergleich = neue_vergleich.replace(/\(/g, '');
            neue_vergleich = neue_vergleich.replace(/\)/g, '');
            
            if(this.id.split('-')[1]==neue_vergleich)
            {
                update+=$('#'+neue_vergleich).text()+'|'+$('#midesgeld-'+neue_vergleich).val()+'|'+$('#aufpreis-'+neue_vergleich).val()+'|#';
                ///alert(this.id);
                //alert(this.id);
            }    
            else{
                update+=plz_iformation.split("#")[i2]+'#';
            }
        }
        $(this).css("color","red");
        plz_iformation=update;
        update_hauptmp3_2017(3,plz_iformation);
    });
}
function add_tr_plz(ticker,element)//atrp
{
    var tr_button=zero('tr',0,0,0,0,element);
            tr_button.id='al_tr'+ticker;
            var td_plz=zero('td',0,0,0,0,tr_button);
            td_plz.id='a_t'+ticker;
            var input_plz3 = zero('input', 0, 0, 0, 0, td_plz);
            input_plz3.id='a_'+ticker;
            $(input_plz3).width(('260px'));
            $(input_plz3).css({'z-index':'1250'});
            //autocomplet
            if(plz_initialen==0)
                alert('Error 2642 \n PLZ inizial ist 0 \n tragen Sie unter Extras welche ein!');
            
            
            $(input_plz3).autocomplete({
                            source: autocomplet_plz,
                            'z-index':'1251',
                            change: function( event, ui ){
                                val = $(this).val();
                                exists = $.inArray(val,autocomplet_plz);
                                if (exists<0)
                                {
                                    $(this).val("");
                                    return false;
                                }
                            }
                        });
            $(input_plz3).css({});
            
            //td mindeswert
            var td_mindeswert=zero('td',0,0,0,0,tr_button);
            td_mindeswert.id='b_t'+ticker;
            var input_mindeswert = zero('input', 0, 0, 0, 0, td_mindeswert);
            input_mindeswert.id='b_'+ticker;
            $(input_mindeswert).width((screen.width * 0.05));
            //mindesbetrag-check
            $(input_mindeswert).blur(function () {
                if($(input_mindeswert).val()>=0)
                    var nix;
                else
                {
                    alert('bitte korregieren Sie die Angabe in Mindestbetrag');
                    $(input_plz).focus();
                }
            });
            
            var td_aufpreis=zero('td',0,0,0,0,tr_button);
            td_aufpreis.id='c_t'+ticker;
            var input_aufpreis = zero('input', 0, 0, 0, 0, td_aufpreis);
            input_aufpreis.id='c_'+ticker;
            $(input_aufpreis).width((screen.width * 0.05));
            $(input_aufpreis).val('00');
            //Aufpreis-check
            $(input_aufpreis).blur(function () {
                if($(input_aufpreis).val()>=0)
                    var nix;
                else
                {
                    alert('bitte korregieren Sie die Angabe in Aufpreis');
                    $(input_plz).focus();
                }
            });
            tr_ticker++;
}
function dell_plz(delete_plz)//
{
    var plz_in_orginal = delete_plz;
    delete_plz = delete_plz.replace( /\s/g, "");//ohne leerzeichen
    var update='';
    for (var i2 = 0; i2 < plz_iformation.split("#").length-1; i2++) 
    {
        var neue_vergleich = plz_iformation.split("#")[i2].split("|")[0].replace( /\s/g, "");//ohne leerzeichen
        if(neue_vergleich!=delete_plz)
            update+=plz_iformation.split("#")[i2]+'#';
    }
    plz_iformation=update;
    liste_plz(document.getElementById('tr_haupt_plz_liste'));
    //alert(plz_in_orginal);
    //plz_in_orginal='35398 Lützellinden';
    xy.delete_hauptId_aus_plz(plz_in_orginal,restaurantId);
}


function plz_haupt_adition_box()//phab
{
    var d = zero('div',0,(screen.width * 0.31),(screen.height * 0.65),0,document.body);d.id='plz_g_box';strecke+='plz_haupt_adition_box()\n@';
    $(d).text('beginnt mit 4 leerzeichen und dann: 35398 Giessen(kleinlinden)  2326');
    $(d).draggable();$(d).css('position','absolute');d.style.top=(screen.height * 0.32)+'px';d.style.right='10px';$(d).css('zIndex','100');$(d).css('background-color', 'green');$(d).css('bottom',30 +'%');$(d).css('right',0 +'%');
    var z_bibliotek_eingang = zero('textarea', 0, 0, 0, 0, d);$(z_bibliotek_eingang).width((screen.width * 0.19));$(z_bibliotek_eingang).height((screen.height * 0.25));
    
    var table_k1=zero('table',0,0,0,1,d);var body_k1=zero('tbody',0,0,0,0,table_k1);
    var tr_4398ut=zero('tr',0,0,0,0,body_k1);
    var td_jof5533=zero('td',0,0,0,0,tr_4398ut);$(td_jof5533).text('Split Value');
    var td_948hr5i=zero('td',0,0,0,0,tr_4398ut);var split_box = zero('input', 0, 0, 0, 0, td_948hr5i);split_box.id='my_split_box';split_box.type = 'text';
    
    var tr_438oruii=zero('tr',0,0,0,0,body_k1);
    var td_reyfieur=zero('td',0,0,0,0,tr_438oruii);$(td_reyfieur).text('String Identity (inizial)');
    var td_euicl00=zero('td',0,0,0,0,tr_438oruii);var inizi = zero('input', 0, 0, 0, 0, td_euicl00);inizi.id='my_inizi';inizi.type = 'text';
    
    var tr_re98if=zero('tr',0,0,0,0,body_k1);
    var knopf = document.createElement('input');
    knopf.type = 'button';knopf.value = 'INSERT';tr_re98if.appendChild(knopf);
    knopf.onclick = function(){
        if($(z_bibliotek_eingang).val()==''||$(inizi).val()=='')
        {
            alert('tragen Sie erst was rein');
        }
        else
        {
            var split_value = $(split_box).val();
            var inizial_value = $(inizi).val();
            plz_g_insertor($(z_bibliotek_eingang).val(),split_value,inizial_value);
            $(z_bibliotek_eingang).val('');
        }
    }
}
function plz_g_insertor(box,my_split_box,inizialen)//zbis
{   
    var samler = '';
    var spl =my_split_box;
    alert(inizialen+'-'+box.split(spl).length)
    if(box!='')
    {
        for (var i = 0; i < box.split(spl).length; i++)//OHNE MINUS EINS
        {
            var plz_satz = box.split(spl)[i];
            if(plz_satz!='')
            {
                plz_satz = plz_satz.replace('\n','');
                samler+=plz_satz+'~~@';
            }
        }
    }
    xy.plz_general_insertor(inizialen,samler);
}


    function add_kilometer(ticker,element)//atrp
    {
        var tr_button=zero('tr',0,0,0,0,element);tr_button.id='al_tr'+ticker;
        var td_plz=zero('td',0,0,0,0,tr_button);td_plz.id='a_t'+ticker;
        var input_plz = zero('input', 0, 0, 0, 0, td_plz);input_plz.id='a_'+ticker;$(input_plz).width((screen.width * 0.09));
        var selcted_meter =  0;
        $(input_plz).keyup(function() {
            if(!isNaN($(input_plz).val()))
            {
                selcted_meter=$(input_plz).val();
            }
            else{alert('not nummeric error! \n 2752');$(input_plz).val(0);}
        });
                        //td mindeswert
        var td_mindeswert=zero('td',0,0,0,0,tr_button);td_mindeswert.id='b_t'+ticker;
        var input_mindeswert = zero('input', 0, 0, 0, 0, td_mindeswert);input_mindeswert.id='b_'+ticker;$(input_mindeswert).width((screen.width * 0.05));
        $(input_mindeswert).blur(function () {
            if($(input_mindeswert).val()>=0)var nix;
            else
            {
                alert('bitte korregieren Sie die Angabe in Mindestbetrag');
                $(input_plz).focus();
            }
        });
        var td_aufpreis=zero('td',0,0,0,0,tr_button);td_aufpreis.id='c_t'+ticker;
        var input_aufpreis = zero('input', 0, 0, 0, 0, td_aufpreis);input_aufpreis.id='c_'+ticker;$(input_aufpreis).width((screen.width * 0.05));
        $(input_aufpreis).blur(function () {
            if($(input_aufpreis).val()>=0)var nix;
            else
            {
                alert('bitte korregieren Sie die Angabe in Aufpreis');
                $(input_plz).focus();
            }
        });
        tr_ticker++;
}


