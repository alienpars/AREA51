function clone_format(empfaenger_gruppenId)
{
    var d = zero('div',0,0,0,0,document.body);
    $(d).css({'top' : '50px','position':'fixed','z-index':'50','background-color':'green','width' :'35%' , 'height' :'73%','overflow' : 'auto','top':'80px','left':'220px',});
    d.id='hide_all';$(d).text('XSJ CLONE FROM?');close_me_knopf(d);         
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
            //start format schleife
            var stamm_gruppe_ztat_stufe=$('#C_mini_Zelle_gruppen'+this.id).text().split('!')[6];
            var aleerrt_zahl=0;
            for (var i = 0; i < mini_Zelle_formatid.split("@").length - 1; i++)
            {if(mini_Zelle_formatid.split("@")[i].split('!')[2]==this.id){
                var format_name = mini_Zelle_formatid.split("@")[i].split('!')[0];
                var format_atribut_6 = mini_Zelle_formatid.split("@")[i].split('!')[6];
                if(format_name!='f0')//khodesh dare
                {
                    format_insert(empfaenger_gruppenId,mini_Zelle_formatid.split("@")[i]);
                    aleerrt_zahl++;
                    update_gruppen_modern(empfaenger_gruppenId,6,stamm_gruppe_ztat_stufe);
                }
            }}//end for zutzten
            //ende zutzt samlung
            alert('" '+aleerrt_zahl+' "Format wurden Erfolgreich kopiert!');
            element_filter_technologie();
            
            $('#hide_all').remove();
        });//end click
    }
}
    function format_insert(gruppenId,format_satz)//foin
    {
        var newId = Id_geber();
        if(format_satz.split('!')[0]!='f0')
        {
            var neue_format_satz = format_satz.split('!')[0] + '!' + newId + '!' + gruppenId + '!leer!39!leer!'+format_satz.split('!')[6]+'!-!0|0|0!@';
            mini_Zelle_formatid += neue_format_satz;
            var info_di = zero('div', 0, 0, 0, 0, document.body);
            info_di.id='info5519_'+newId;
            $(info_di).text(neue_format_satz);
            $(info_di).hide();
        }
        for (var i = 0; i < $('.C1987_speise_gruppen_class'+gruppenId).length; i++)
        {
                var my_value= $('.C1987_speise_gruppen_class'+gruppenId)[i];
                my_value=$(my_value).text();
                var newherfId_int = Id_geber();
                var SpeiseNrId = my_value.split("!")[1];
                // inja format etikette format peyda mishe ke x1 wa x2 dozdide mishe
                neue_satzt = '0!' + newherfId_int + '!' + SpeiseNrId + '!' + newId + '!40!'+format_satz.split('!')[0]+'!0!' + gruppenId + '!'+format_satz.split('!')[0]+'! !0!0!0!0!0!0!0!@';
                insert_mini_Zelle_herfs(neue_satzt);
        }
    }
    function formatinfo_hujk(gruppenId)
    {
        var antwort = '';//position|xy|picId|@
        var format_anzahl_anzeiger = 0;
        for (var i = 0; i < mini_Zelle_formatid.split("@").length - 1; i++)//speise Schleife
        {
            if (gruppenId == mini_Zelle_formatid.split("@")[i].split("!")[2])
            {//formathaye gruppe ro filter mikone
                format_anzahl_anzeiger++;
            }
        }
        for (var i = 0; i <  mini_Zelle_formatid.split("@").length - 1; i++)
        {
            if (gruppenId == mini_Zelle_formatid.split("@")[i].split("!")[2])
            {//formathaye gruppe ro filter mikone
                var var_global = space_remover(mini_Zelle_formatid.split("@")[i].split("!")[0]);
                if (var_global != 'f0')
                {
                        antwort += mini_Zelle_formatid.split("@")[i] + '@';
                }
                if (var_global == 'f0')
                {
                    if (format_anzahl_anzeiger == 1)
                        antwort += mini_Zelle_formatid.split("@")[i] + '@';
                }

            }
        }
        return antwort;
    }