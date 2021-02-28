    
    function gruppen_delete(id)//grd
    {//id = 260665*160665|278|16|385|117|00|1362|!260665!160665!160665!50!29800!0!-!g100002!@*

        ///////////////////////////////////////////////gruppe delete
        
        $('#C_mini_Zelle_gruppen'+id).remove();

        ///////////////////////////////////////formaten der gruppe delete
        var Formaten_der_gruppe = '';
        for (var i2 = 0; i2 < mini_Zelle_formatid.split("@").length - 1; i2++)
        {//loescht formaten der gruppe
            if (id != mini_Zelle_formatid.split("@")[i2].split("!")[2]) //wenn gruppenId=gn2; unico
                Formaten_der_gruppe += mini_Zelle_formatid.split("@")[i2] + '@';
            else
            {//delete format coordinaten
                var delet_formatId = mini_Zelle_formatid.split("@")[i2].split("!")[1];
                var coordinaten_des_formates = '';
                for (var i3 = 0; i3 < mini_Zelle_format_etikett.split("@").length - 1; i3++)
                {//loescht coordinaten des formats
                    if (delet_formatId != mini_Zelle_format_etikett.split("@")[i3].split("!")[2])
                        coordinaten_des_formates += mini_Zelle_format_etikett.split("@")[i3] + '@';
                }
                mini_Zelle_format_etikett = coordinaten_des_formates;
            }
        }
        mini_Zelle_formatid = Formaten_der_gruppe;
        ///////////////////////////////////////speisen der gruppe delete
        var speisen_der_gruppe = '';
        //for (var i2 = 0; i2 < mini_Zelle_SpeiseNr.split("@").length - 1; i2++)
        //{//loescht speisen der gruppe
           // if (id != mini_Zelle_SpeiseNr.split("@")[i2].split("!")[2]) //wenn gruppenId=gn2; unico
             //   speisen_der_gruppe += mini_Zelle_SpeiseNr.split("@")[i2] + '@';
            //else
            //{
        var geloschte_href=0;
        for (var i2 = 0; i2 < $('.C1987_speise_gruppen_class'+id).length; i2++)
        {
            var my_value= $('.C1987_speise_gruppen_class'+id)[i2];
            my_value=$(my_value).text();
            var delet_speise_nrId = my_value.split("!")[1];
            
            //loescht coordinaten der speise
            for (var i3 = 0; i3 < $('.C1987_href_speise_class'+delet_speise_nrId).length; i3++)
            {
                var my_value2= $('.C1987_href_speise_class'+delet_speise_nrId)[i3];
                my_value2=$(my_value2).text();
                $('#C_mini_Zelle_herfs'+my_value2.split('!')[1]).remove();
                geloschte_href++;
            }
            $('#C858_V_id_speise_class'+delet_speise_nrId).remove();
            $('#C_mini_Zelle_V_zutat_speise'+delet_speise_nrId).remove();
            $('#C_mini_Zelle_SpeiseNr'+delet_speise_nrId).remove();
            $('.C1987_href_speise_class'+delet_speise_nrId).remove();
        }
        
        ///////////////////////////////////////zutaten der gruppe delete
        var zutaten_der_gruppe = '';
        for (var i2 = 0; i2 < mini_Zelle_zutatBibliothek.split("@").length - 1; i2++)
        {//loescht zutaten der gruppe
            if (id != mini_Zelle_zutatBibliothek.split("@")[i2].split("!")[2]) //wenn gruppenId=gn2; unico
                zutaten_der_gruppe += mini_Zelle_zutatBibliothek.split("@")[i2] + '@';
            else
            {//delete preis der zutaten
                var delet_zutat = mini_Zelle_zutatBibliothek.split("@")[i2].split("!")[1];
                var preisen_der_zutaten = '';
                for (var i3 = 0; i3 < mini_Zelle_zutatpreis.split("@").length - 1; i3++)
                {//loescht coordinaten des formats
                    if (delet_zutat != mini_Zelle_zutatpreis.split("@")[i3].split("!")[2])
                        preisen_der_zutaten += mini_Zelle_zutatpreis.split("@")[i3] + '@';
                }
                mini_Zelle_zutatpreis = preisen_der_zutaten;
            }
        }
        mini_Zelle_zutatBibliothek = zutaten_der_gruppe;
        alert('geloschte_href: '+geloschte_href);
        ///////////////////////////////////////speisen der gruppe delete
    }
    function delete_speise(id)
    {
        var speisen_der_gruppe = '';
        
        //for (var i2 = 0; i2 < mini_Zelle_SpeiseNr.split("@").length - 1; i2++)
        //{
        for (var i2 = 0; i2 < $('.mini_Zelle_SpeiseNr').length; i2++)
            {
            //if (id != mini_Zelle_SpeiseNr.split("@")[i2].split("!")[1])
             //   speisen_der_gruppe += mini_Zelle_SpeiseNr.split("@")[i2] + '@';
            //else
            //{
                //var delet_speise_nrId = mini_Zelle_SpeiseNr.split("@")[i2].split("!")[1];
                //delete speise coordinaten
                //delete speise hrefs
                for (var i3 = 0; i3 < $('.C1987_href_speise_class'+id).length; i3++)
                {
                    var my_value= $('.C1987_href_speise_class'+id)[i3];
                    my_value=$(my_value).text();
                    $('#C_mini_Zelle_herfs'+my_value.split('!')[1]).remove();
                }
                
                //delete speise zutaten
                //var zutaten_der_speise = '';
                //for (var i3 = 0; i3 < mini_Zelle_V_zutat_speise.split("@").length - 1; i3++)
                //{
                    //if (id != mini_Zelle_V_zutat_speise.split("@")[i3].split("!")[2])
                      //  zutaten_der_speise += mini_Zelle_V_zutat_speise.split("@")[i3] + '@';
                //}
                //mini_Zelle_V_zutat_speise = zutaten_der_speise;
                $('.C857_V_speise_class'+id).remove();
                
            //}
        }
        $('.C1987_href_speise_class'+id).remove();
        $('#C_mini_Zelle_SpeiseNr'+id).remove();
        $('#C890_speise_id_gr_class'+id).remove();
        
        
       // mini_Zelle_SpeiseNr = speisen_der_gruppe;
    }
    function dell_zutat_von_speise_sharp(v_id)
    {   //mini_Zelle_V_zutat_speise : z1! 66253! 735977700! 65657! 49! 356! 0! -! ifaction!@

        var speise_id = $('#C_mini_Zelle_V_zutat_speise'+v_id).text().split('!')[2];
        
        $('#C858_V_id_speise_class'+v_id).remove();
        $('#C_mini_Zelle_V_zutat_speise'+v_id).remove();
        $('#C858_V_id_gruppe_class'+v_id).remove();
    }

    function dell_zutat_sharp(zutatId)
    {   
        $('#C_mini_Zelle_zutatBibliothek'+zutatId).remove();
        $('#C829_zutat_id_gr_class'+zutatId).remove();
    }