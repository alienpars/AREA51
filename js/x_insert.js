    function insert_mini_Zelle_gruppen(value)
    {
        var newId = value.split('!')[1];
        var new_href = zero('div',0,0,0,0,document.body);
        new_href.id='C_mini_Zelle_gruppen'+newId;
        new_href.className = 'mini_Zelle_gruppen';
        $(new_href).text(value);
    }

    function insert_mini_Zelle_SpeiseNr(value)
    {
        var newId = value.split('!')[1];
        var new_href = zero('div',0,0,0,0,document.body);
        new_href.id='C_mini_Zelle_SpeiseNr'+newId;
        new_href.className = 'mini_Zelle_SpeiseNr';
        $(new_href).text(value);
        //gruppen_id als class
        var new_href4 = zero('div',0,0,0,0,document.body);
        new_href4.id='C890_speise_id_gr_class'+newId;
        new_href4.className='C1987_speise_gruppen_class'+value.split('!')[2];
        $(new_href4).text(value);
    }
    
    function insert_mini_Zelle_zutatBibliothek(value)
    {
        var newId = value.split('!')[1];
        var new_href = zero('div',0,0,0,0,document.body);
        new_href.id='C_mini_Zelle_zutatBibliothek'+newId;
        new_href.className = 'mini_Zelle_zutatBibliothek';
        $(new_href).text(value);
        //gruppen_id als class
        var new_href4 = zero('div',0,0,0,0,document.body);
        new_href4.id='C829_zutat_id_gr_class'+newId;
        new_href4.className='C829_zutat_gruppen_class'+value.split('!')[2];
        $(new_href4).text(value);
    }
    
    function insert_mini_Zelle_V_zutat_speise(value)
    {
        var newId = value.split('!')[1];
        var new_href = zero('div',0,0,0,0,document.body);
        new_href.id='C_mini_Zelle_V_zutat_speise'+newId;
        new_href.className = 'mini_Zelle_V_zutat_speise';
        $(new_href).text(value);
        //speise_id als class
        var new_href4 = zero('div',0,0,0,0,document.body);
        new_href4.id='C858_V_id_speise_class'+newId;
        new_href4.className='C857_V_speise_class'+value.split('!')[2];
        $(new_href4).text(value);
        //gruppen_id als class
        var gruppppen_id = $('#C_mini_Zelle_SpeiseNr'+value.split('!')[2]).text().split('!')[2];
        
        var new_href5 = zero('div',0,0,0,0,document.body);
        new_href5.id='C858_V_id_gruppe_class'+newId;
        new_href5.className='C857_V_gruppe_class'+gruppppen_id;
        $(new_href5).text(value);
    }
    function insert_mini_Zelle_herfs(value)
    {
        var newId = value.split('!')[1];
        var new_href = zero('div',0,0,0,0,document.body);
        $(new_href).css({'display': 'none ',});
        
        new_href.id='C_mini_Zelle_herfs'+newId;
        new_href.className = 'mini_Zelle_herfs';
        $(new_href).text(value);
        //derivate_divs nur zur bearbeitung von neu eintraege
        if(value.split('!')[8]=='f0')
        {
            var new_href2 = zero('div',0,0,0,0,document.body);
            $(new_href2).css({'display': 'none ',});
            new_href2.id='C1979_speise_f0-'+value.split('!')[2];
            $(new_href2).text(value);
        }
        var new_href3 = zero('div',0,0,0,0,document.body);
        $(new_href3).css({'display': 'none ',});
        new_href3.id='C1986_speise_id_und_format_id'+value.split('!')[2]+ "_" + value.split('!')[3];
        $(new_href3).text(value);
        //gruppen_id als class
        var new_href4 = zero('div',0,0,0,0,document.body);
        $(new_href4).css({'display': 'none ',});
        new_href4.id='C1987_href_id_gr_class'+newId;
        new_href4.className='C1987_href_gruppen_class'+value.split('!')[7];
        $(new_href4).text(value);
        //format_id als class
        var new_href5 = zero('div',0,0,0,0,document.body);
        $(new_href5).css({'display': 'none ',});
        new_href5.id='C1988_href_id_format_class'+newId;
        new_href5.className='C1987_href_format_class'+value.split('!')[3];
        $(new_href5).text(value);
        //speise_id als class
        var new_href6 = zero('div',0,0,0,0,document.body);
        $(new_href6).css({'display': 'none ',});
        new_href6.id='C1988_href_id_speise_class'+newId;
        new_href6.className='C1987_href_speise_class'+value.split('!')[2];
        $(new_href6).text(value);
    }



