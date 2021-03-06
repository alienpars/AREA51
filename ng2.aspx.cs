using System;
using System.Web;
using System.IO;
public partial class ng2 : System.Web.UI.Page
{
    DataSet2TableAdapters.G4TableAdapter G4 = new DataSet2TableAdapters.G4TableAdapter();
    DataSet2TableAdapters.GiTableAdapter Gi = new DataSet2TableAdapters.GiTableAdapter();
    DataSet2TableAdapters.GUTableAdapter GU = new DataSet2TableAdapters.GUTableAdapter();
    DataSet2TableAdapters.GDTableAdapter GD = new DataSet2TableAdapters.GDTableAdapter();
    DataSet2TableAdapters.Kunden3TableAdapter ta_kunden = new DataSet2TableAdapters.Kunden3TableAdapter();
    DataSet2TableAdapters.plz02TableAdapter ta_plz02 = new DataSet2TableAdapters.plz02TableAdapter();
    
    DataSet2TableAdapters.risTableAdapter Gris = new DataSet2TableAdapters.risTableAdapter();
    DataSet2TableAdapters.risUTableAdapter GrisU = new DataSet2TableAdapters.risUTableAdapter();
    DataSet2TableAdapters.H10TableAdapter H10 = new DataSet2TableAdapters.H10TableAdapter();
    DataSet2TableAdapters.Exg2TableAdapter Reiniger = new DataSet2TableAdapters.Exg2TableAdapter();
    DataSet2TableAdapters.PLZ1TableAdapter PLZListe = new DataSet2TableAdapters.PLZ1TableAdapter();
    DataSet2TableAdapters.archiv_loginTableAdapter Login_archiv = new DataSet2TableAdapters.archiv_loginTableAdapter();
    DataSet2TableAdapters.mp31TableAdapter mp3_adabtor = new DataSet2TableAdapters.mp31TableAdapter();
    DataSet2TableAdapters.archivMp3TableAdapter archivMp3_adabtor = new DataSet2TableAdapters.archivMp3TableAdapter();
    DataSet2TableAdapters.hauptMp31TableAdapter ta_hauptMp3 = new DataSet2TableAdapters.hauptMp31TableAdapter();
    DataSet2TableAdapters.archiv_hauptMp3TableAdapter ta_archiv_haupt_mp3 = new DataSet2TableAdapters.archiv_hauptMp3TableAdapter();

    //string startid = "0";
    string ip = HttpContext.Current.Request.UserHostAddress.ToString();
    int idOk = 0; int idOOk = 0; string Art; int pArt;
    string id; string VaterId; string Suchbegriff;

    
    public void Page_Load(object sender, EventArgs e)
    {
        check();
        blank_inerts();
        int kamal = 0;
    }

    public void blank_inerts()
    {
        DataSet2TableAdapters.bestellungTableAdapter ta_bestellung = new DataSet2TableAdapters.bestellungTableAdapter();
        int blank_anzahl_a = ta_bestellung.GetDataBy_blank().Count;
        if (blank_anzahl_a == 0)
        {
            ta_bestellung.InsertQuery_blank("blank");
            alert("ta_bestellung.InsertQuery_blank");
        }
       int blank_anzahl_b = G4.GetDataByGb(999999999999999999).Count;
       if (blank_anzahl_b == 0)
       {
           Gi.IGi();// ye bohrer mizane
           int gnew = int.Parse(G4.GN()[0]["gnew"].ToString());
           GU.UpdateQueryInsertorGn1(gnew, gnew);
           alert("g2 inseert blanck (gb 999999999999999999)");
       }
        //insert_Zeit welt
       int blank_anzahl_c = G4.Gn1(113215).Count;
       if (blank_anzahl_c == 0)//
       {
           int wett_id = int.Parse(G4.GN()[0]["gnew"].ToString());
           GU.UpdateQueryInsertorGn1(113215, wett_id);//setzt den Key von gnew auf gn1
           GU.UGi(0, 999999, 34, 111, 111, "All", "", 113215);
           Gi.IGi();

           int admin_id = IZ("admin()", 113215, 113215, 87, 0, "");

           int dop = IZ("admin()()", admin_id, 119, 88, 0, "");
           int v_mi_we = IZ("v mich welt", admin_id, 113215, 103, 103, "");
           alert("insert welt und admin");
       }
       //insert_Kunden
       int blank_anzahl_d = ta_kunden.GetDataByblank("blank").Count;
       if (blank_anzahl_d == 0)
       {
           ta_kunden.InsertQueryBlank("blank");
           alert("insert Kunden blank");
       }

    }
    
    protected string besucherliste()
    {
        DataSet2TableAdapters.PLZ1TableAdapter Hplz = new DataSet2TableAdapters.PLZ1TableAdapter();
        string stein = "" +
        "<table border=1><tr>";
        stein += "<td colspan=3 style= background-color:#a7c7e8 valign=top>" + "ristolive " + Hplz.GetDataByPage("ristolive").Count;// +" " + babash;
        stein += besucherzelle("ristolive");
        stein += "</td>";
        stein += "<td colspan=3 style= background-color:#a7c7e8 valign=top>" + "Restomap " + Hplz.GetDataByPage("restomap").Count;
        stein += besucherzelle("Restomap");
        stein += "</td>";
        for (int i = 0; i < G4.GetDataByArt(127).Count; i++)
        {
            string gId = G4.GetDataByArt(127)[i]["g2"].ToString();
            string page = gId;
            int alldad = Hplz.GetDataByPage(page).Count;
            if (page!="00")
            {
                if (Hplz.GetDataByPage(page).Count != 0)
                {
                   stein += "<td colspan=3 style= background-color:#a7c7e8 valign=top>" + page + " " + alldad;// +" " + babash;
                   stein += besucherzelle(page);
                   stein += "</td>"; 
                }
                
            }
        }
        stein += "</tr></table>";
        return stein;
    }
    private string besucherzelle(string page) //baraye taghire darsade ax kar mikone
    {
        string stein = "";
        DataSet2TableAdapters.PLZ1TableAdapter Hplz = new DataSet2TableAdapters.PLZ1TableAdapter();
        string jahr = DateTime.Now.Year.ToString(); string monat = DateTime.Now.Month.ToString();
        string datum = DateTime.Now.Day.ToString();//string MIn = DateTime.Now.Minute.ToString();
        string Zeit2 = datum + "/" + monat + "/" + jahr;
        stein += "<table border=1>";
        for (int i2 = 0; i2 < Hplz.GetDataByPage(page).Count; i2++)
            //for (int i2 = 0; i2 < 30; i2++)
        {
            //Gvi.InsertQuery(ip + "@" + Zeit2 + "@" + browser + "@" + version + "@" + Platform + "@" + histori + "@" + histori + "@" + ColorDeepBit + "@" + width + "@" + height + "@", page);
            string bahbah0 = Hplz.GetDataByPage(page)[i2]["ip"].ToString();
            string[] bahbah = bahbah0.Split('@');
            string Ip = bahbah[0];
            if (Ip != "127.0.0.1")
            {
                string time = bahbah[1]; //Hplz.GetDataPage(page)[i2]["zeit"].ToString();
                string brow = bahbah[2]; //Hplz.GetDataPage("Restomap")[i2]["browser"].ToString();
                string Vers = bahbah[3]; //Hplz.GetDataPage("Restomap")[i2]["Version"].ToString();
                string platform = bahbah[4]; //Hplz.GetDataPage("Restomap")[i2]["platform"].ToString();
                string his = bahbah[5]; //Hplz.GetDataPage("Restomap")[i2]["history"].ToString();
                string cBt = bahbah[6]; //Hplz.GetDataPage("Restomap")[i2]["colordeepBit"].ToString();
                string scrW = bahbah[7]; //Hplz.GetDataPage("Restomap")[i2]["screenWidth"].ToString();
                string scrH = bahbah[8]; //Hplz.GetDataPage("Restomap")[i2]["screenHeight"].ToString();
                string[] time2 = time.Split(' ');
                stein += "<tr><td>";
                if (time2[0] == Zeit2)//heute fett gemacht
                {
                    stein += "<font size =4>";
                }
                else
                {
                    stein += "<font size =1>";
                }
                stein += "<a href=http://www.utrace.de/?query=" + Ip + " target=top>" + Ip + "</font></td><td colspan=6><font size =1>" + time + "</font>";
                stein += "</td></tr><tr>";
                stein += "<td><font size =1>V: " + Vers + "</font></td>";
                stein += "<td><font size =1>bw: " + brow + "</font></td>";
                stein += "<td><font size =1>PF " + platform + "</font></td>";
                stein += "<td><font size =1>H: " + his + "</font></td>";
                stein += "<td><font size =1>CDB: " + cBt + "</font></td>";
                stein += "<td><font size =1>sc:" + scrW + " x " + scrH + "</font></td></tr>";
            }
        }
        stein += "</table>";
        return stein;
    }
    protected void dell_resId_aus_plz_mp3(string hauptmp3,string hauptMp3Id)
    {
        string plz = hauptmp3.Split('~')[3];
        //update plz_string 
        for (int i = 0; i < plz.Split('#').Length - 1; i++)
        {
            string unsere_plz = plz.Split('#')[i].Split('|')[0];
            
            string alte_ids = ta_plz02.GetDataByPlz(unsere_plz)[0]["mp3"].ToString();
            string update = "";
            for (int i2 = 0; i2 < alte_ids.Split('|').Length - 1; i2++)
            {//ye dor tu resId plz micharkhe
                if (alte_ids.Split('|')[i2] != hauptMp3Id)//blokiert die geloeschte restid
                    update += alte_ids.Split('|')[i2] + "|";
            }
            ta_plz02.UpdateQueryMp3(update, unsere_plz);
            
        }
    }
    protected void DelletKinder(int gn1,int geblockteId)
    {
        for (int i = 0; i < G4.GetDataByG2(gn1).Count; i++)//babaye kia hast
        {
            string Key = G4.GetDataByG2(gn1)[i]["gn1"].ToString();
            DelletKinder(int.Parse(Key), geblockteId);
        }
        if (gn1 != geblockteId)//ke khodesho delet nakone
        GD.DGi(gn1);
}
    protected string open_kunden()
    {
        string antwort = "";
        antwort += "<table border=1>";
        for (int i = 0; i < ta_kunden.GetDataAll().Count; i++)//ip schleife
        {
            antwort += "<tr>";
            string k_nr = ta_kunden.GetDataAll()[i]["k_nr"].ToString();
            string k_daten = ta_kunden.GetDataAll()[i]["k_daten"].ToString();
            string telefon = ta_kunden.GetDataAll()[i]["telefon"].ToString();
            string email = ta_kunden.GetDataAll()[i]["email"].ToString();
            string pwort = ta_kunden.GetDataAll()[i]["pwort"].ToString();
            string datum2 = ta_kunden.GetDataAll()[i]["datum2"].ToString();
            string aktiv = ta_kunden.GetDataAll()[i]["aktiv"].ToString();
            string code = ta_kunden.GetDataAll()[i]["code"].ToString();
            string datum = ta_kunden.GetDataAll()[i]["datum"].ToString();
            string gesamt_summe = ta_kunden.GetDataAll()[i]["gesamt_summe"].ToString();
            antwort += "<td>";
            if (k_daten != "blank")
                antwort += "<a href=ng2.aspx?id=" + id + "&delet_kunde=" + k_nr + ">" +
                           "<img src=Bilder/dmull.png border=0 alt='Delete Kunden' height=55>" +
                           "</a>";
            antwort += "</td>";
            antwort += "<td>k_nr:</td><td>" + k_nr + "</td>";
            antwort += "<td>k_nr:</td><td>" + k_nr + "</td>";
            //antwort += "<td>k_daten:</td><td>"+k_daten+"</td>";
            antwort += "<td>";
            antwort += "<table border=1>";
            for (int i2 = 0; i2 < k_daten.Split('#').Length - 1; i2++)//ip schleife
            {
                antwort += "<tr>";
                antwort += "<td>Name:</td><td>" + k_daten.Split('#')[i2].Split('|')[1].Split('^')[0] + "</td>";
                antwort += "<td>Strasse:</td><td>" + k_daten.Split('#')[i2].Split('|')[1].Split('^')[1] + "</td>";
                antwort += "<td>HausNr:</td><td>" + k_daten.Split('#')[i2].Split('|')[1].Split('^')[2] + "</td>";
                antwort += "<td>PLZ Stadt:</td><td>" + k_daten.Split('#')[i2].Split('|')[1].Split('^')[3] + "</td>";
                antwort += "<td>Bemerkung:</td><td>" + k_daten.Split('#')[i2].Split('|')[1].Split('^')[4] + "</td>";

                antwort += "</tr>";
            }
            /*
             */
            antwort += "</table>";
            antwort += "</td>";
            antwort += "<td>telefon:</td><td>" + telefon + "</td>";
            antwort += "<td>email:</td><td>" + email + "</td>";
            antwort += "<td>pwort:</td><td>" + pwort + "</td>";
            antwort += "<td>datum2:</td><td>" + datum2 + "</td>";
            antwort += "<td>aktiv:</td><td>" + aktiv + "</td>";
            antwort += "<td>code:</td><td>" + code + "</td>";
            antwort += "<td>datum:</td><td>" + datum + "</td>";
            antwort += "<td>gesamt_summe:</td><td>" + gesamt_summe + "</td>";

            antwort += "</tr>";
        }

        antwort += "</table>";
        return antwort;
    }
    protected string open_hm()
        {
            string antwort = "";
            antwort += "<table border=1>";
            antwort += "<tr>";
            antwort += "<td colspan=3>";
            antwort += "<a href=ng2.aspx?id=" + id + "&open_hm=87&hde_export_all_lock=" + id + ">- hde Eport ALLE LOCAL </a>";
            antwort += "</td>";
            antwort += "<td colspan=3>";
            antwort += "<a href=ng2.aspx?id=" + id + "&open_hm=87&ud8_export_1und_1_all=" + id + ">- ud8 Eport ALLE 1und1 </a>";
            antwort += "</td>";
            antwort += "</tr>";
            for (int i = 0; i < ta_hauptMp3.GetDataByAlles().Count; i++)//ip schleife
            {
                try
                {
                    antwort += "<tr>";
                    string Id = ta_hauptMp3.GetDataByAlles()[i]["Id"].ToString();
                    string mp3 = ta_hauptMp3.GetDataByAlles()[i]["mp3"].ToString();

                    string restaurantId = ta_hauptMp3.GetDataByAlles()[i]["restaurantId"].ToString();
                    string geburtstag = "";//ta_hauptMp3.GetDataByAlles()[i]["geburtstag"].ToString();
                    //string pwort = ta_hauptMp3.GetDataByAlles()[i]["pwort"].ToString();
                    //string restaurantId = ta_hauptMp3.GetDataByAlles()[i]["restaurantId"].ToString();
                    //string todeszeit = ta_hauptMp3.GetDataByAlles()[i]["todeszeit"].ToString();
                    //string geburtstag = ta_hauptMp3.GetDataByAlles()[i]["geburtstag"].ToString();
                    //string id = ta_hauptMp3.GetDataByAlles()[i]["id"].ToString();
                    string gesamt_summe = "";// ta_hauptMp3.GetDataByAlles()[i]["gesamt_summe"].ToString();
                    antwort += "<td>";
                    //if (k_daten != "blank")
                    if (Request["restaurantId_edfg"] == restaurantId)
                        antwort += "<td><h2>" + mp3.Split('~')[0] + "</h2></td>";
                    else
                        antwort += "<td>" + mp3.Split('~')[0] + "</td>";

                    antwort += "<td><a href=ng2.aspx?id=" + restaurantId + ">" + restaurantId + "</a></td>";
                    antwort += "<td>Id:</td><td>" + Id + "</td>";
                    //antwort += "<td>mail:</td><td>" + mail + "</td>";
                    //antwort += "<td>k_daten:</td><td>"+k_daten+"</td>";
                    antwort += "<td>";
                    antwort += "<a href=ng2.aspx?id=" + id + "&open_hm=87&restaurantId_edfg=" + restaurantId + ">Eport HTML LOCAL</a>";
                    antwort += "</td>";
                    antwort += "<td>";
                    antwort += "<a href=ng2.aspx?id=" + id + "&open_hm=87&restaurantId_jpst=" + restaurantId + ">Eport HTML 1und1</a>";
                    antwort += "</td>";
                    //antwort += "<td>mp3:</td><td>" + mp3 + "</td>";
                    antwort += "<td>562 geburtstag:</td><td>" + geburtstag + "</td>";

                    //musterStd
                    string muster_id = Gn2Gn4(restaurantId, 83, "gn1", 0);
                    string muster_std_id = Gn2Gn4(muster_id, 86, "gn1", 0);
                    antwort += "<td><a href=xy.aspx?" + muster_std_id + " target='blank'>muster</a></td>";

                    antwort += "</tr>";
                }
                catch { };
            }
        //export alle
        
            antwort += "</table>";
            return antwort;
        }
    public void export_html_button_localhost_jpst(string id)
    {
        string path_server = Server.MapPath(@"~/fsw/ablage/" + id);
        //string antwort = ny_cls.ccl_karte.export_html_alt(id, path_server);
        string antwort = export_html.ftp.export_html_localhost(id, path_server);
        alert(antwort);
    }
    public void export_html_button_1und1_edfg(string my_id)
    {
        string antwort = export_html.ftp.export_1und1_gesamt(my_id);
        alert(antwort);
    }
    public void hde_export_html_button_localhost_alle()
    {
        alert("export wird gestartet");

        string antwort = "";
        for (int i = 0; i < ta_hauptMp3.GetDataByAlles().Count; i++)//ip schleife
        {
            try
            {
                string restaurantId = ta_hauptMp3.GetDataByAlles()[i]["restaurantId"].ToString();
                string path_server = Server.MapPath(@"~/fsw/ablage/" + restaurantId);
                antwort += export_html.ftp.export_html_localhost(restaurantId, path_server) + "\n\n\n";
            }
            catch {antwort += "exgy Fehler bei export in schleife i=("+i.ToString()+")"; }
        }
        alert("export ist beendet");

        alert(antwort);
    }
    public void ud8_export_html_button_1und1_alle()
    {
        string antwort = "";
        for (int i = 0; i < ta_hauptMp3.GetDataByAlles().Count; i++)//ip schleife
        {
            try
            {
                string restaurantId = ta_hauptMp3.GetDataByAlles()[i]["restaurantId"].ToString();
                antwort += export_html.ftp.export_1und1_gesamt(restaurantId) + "\n\n\n";
            }
            catch { antwort += "exgy Fehler bei export in schleife i=(" + i.ToString() + ")"; }
        }
        alert(antwort);
    }
    protected string open_hm_privat()
    {
        string antwort = "";
        antwort += "<table border=1>";
        antwort += "<tr>";
        string hauptmp3Id = ta_hauptMp3.GetDataByResId(int.Parse(id))[0]["Id"].ToString();
        string mp3 = ta_hauptMp3.GetDataByResId(int.Parse(id))[0]["mp3"].ToString();
        string geburtstag = ta_hauptMp3.GetDataByResId(int.Parse(id))[0]["geburtstag"].ToString();
        antwort += "<form id=frm596 action=ng2.aspx method=post>";  //suche
        for (int i = 0; i < mp3.Split('~').Length - 1; i++)
        {
            string titel_hmp3 = "";
            if (i == 0) titel_hmp3 = "name:<br>";
            if (i == 1) titel_hmp3 = "Restaurant ID:<br>";
            if (i == 2) titel_hmp3 = "602 Open Time:<br>8(mustertag)9(Feiertag)|von|bis|time Id|fenster Name|Gruppennamen^|<br>";
            if (i == 3) titel_hmp3 = "Liefer Radius PLZ | Mindeswert | Aufgeld |:<br>";
            if (i == 4) titel_hmp3 = "LOGO Bild:<br>";
            if (i == 5) titel_hmp3 = "Art des Restaurant:<br>";
            if (i == 6) titel_hmp3 = "Anschrift:<br>";
            if (i == 7) titel_hmp3 = "Foto`s Id`s:<br>";
            if (i == 8) titel_hmp3 = "HomePage:<br>";
            if (i == 9) titel_hmp3 = "Raiting:<br>";
            if (i == 10) titel_hmp3 = "Gesamtsumme:<br>";
            if (i == 11) titel_hmp3 = "Sprache:<br>";
            if (i == 12) titel_hmp3 = "Fax und Web Optionen:<br>";
            if (i == 13) titel_hmp3 = "undefined:<br>";
            if (i == 14) titel_hmp3 = "Slide Foto`s:<br>";
            if (i == 15) titel_hmp3 = "Unnow:<br>";
            if (i == 16) titel_hmp3 = "Weitere Optionen:<br>";
            if (i == 17) titel_hmp3 = "![0]bgcolor ![3]FAX ![5]Mail.split('|'):<br>";

            antwort += "<br>" + titel_hmp3;
            string why = mp3.Split('~')[i];
                antwort += "<textarea form = frm596 name=mp3h_teil" + i + " id = mp3h_teil" + i + " cols=35 rows:35 >" + why + "</textarea>~"+i;
            
        }
        antwort += "<input type=hidden name=mp3h_restaurant_id  value='" + id + "'>~";
        antwort += "<input type=hidden name=id  value='" + id + "'>~";
        antwort += "<br><input type=hidden name=hauptmp3Id  value='" + hauptmp3Id + "'>~";//
        antwort += "<br><input type=hidden name=geburtstag  value='" + geburtstag + "'>~";//geburtstag
        antwort += "<input type=submit value=ok-629 Eintrag>";
        antwort += "</form>";
        string gesamt_summe = "";

        antwort += "<td>hauptmp3Id:</td><td>" + hauptmp3Id + "</td>";
        antwort += "<td>mp3:</td><td>" + mp3 + "</td>";
        antwort += "<td>geburtstag:</td><td>" + geburtstag + "</td>";
        antwort += "</tr>";
        //update compact
        antwort += "<tr>";
        antwort += "<form action=ng2.aspx method=post>";
        antwort += "<br><input type=hidden name=geburtstag  value='" + geburtstag + "'>~";//geburtstag
        antwort += "<br><input type=hidden name=hauptmp3Id  value='" + hauptmp3Id + "'>~";//
        antwort += "<br><input type=textarea name=mp3h_compact cols=40 rows=5 style=width:200px height:50px size=" + mp3.Length + " value='" + mp3 + "'>~";
        antwort += "<input type=hidden name=mp3_compact_639  value='" + id + "'>";
        antwort += "<input type=hidden name=id  value='" + id + "'>";
        antwort += "<input type=submit value=Update_Compact>";
        antwort += "</form>";

        antwort += "</tr>";
        antwort += "</table>";
        return antwort;
    }
    protected string show_all_hmp3()
    {
        string antwort = "";
        antwort += "<table border=1>";
        //ta_archiv_haupt_mp3
        for (int i = 0; i < ta_archiv_haupt_mp3.GetDataByResId(int.Parse(id)).Count; i++)
        {
            antwort += "<tr>";
            string hauptmp3Id = ta_archiv_haupt_mp3.GetDataByResId(int.Parse(id))[i]["Id"].ToString();
            string mp3 = ta_archiv_haupt_mp3.GetDataByResId(int.Parse(id))[i]["mp3"].ToString();
            string todeszeit = ta_archiv_haupt_mp3.GetDataByResId(int.Parse(id))[i]["todeszeit"].ToString();


            string gesamt_summe = "";// ta_hauptMp3.GetDataByAlles()[i]["gesamt_summe"].ToString();
            antwort += "<td>";
            //if (k_daten != "blank")
            //antwort += "<a href=ng2.aspx?id=" + id + "&delet_kunde=" + k_nr + ">" +
            //         "<img src=Bilder/dmull.png border=0 alt='Delete Kunden' height=55>" +
            //       "</a>";
            antwort += "</td>";
            antwort += "<td>hauptmp3Id:</td><td>" + hauptmp3Id + "</td>";
            //antwort += "<td>Id:</td><td>" + Id + "</td>";
            //antwort += "<td>mail:</td><td>" + mail + "</td>";
            //antwort += "<td>k_daten:</td><td>"+k_daten+"</td>";
            antwort += "<td>";
            /*
            antwort += "<table border=1>";
            for (int i2 = 0; i2 < k_daten.Split('#').Length-1; i2++)//ip schleife
            {
                antwort += "<tr>";
                antwort += "<td>Name:</td><td>" + k_daten.Split('#')[i2].Split('|')[1].Split('^')[0] + "</td>";
                antwort += "<td>Strasse:</td><td>" + k_daten.Split('#')[i2].Split('|')[1].Split('^')[1] + "</td>";
                antwort += "<td>HausNr:</td><td>" + k_daten.Split('#')[i2].Split('|')[1].Split('^')[2] + "</td>";
                antwort += "<td>PLZ Stadt:</td><td>" + k_daten.Split('#')[i2].Split('|')[1].Split('^')[3] + "</td>";
                antwort += "<td>Bemerkung:</td><td>" + k_daten.Split('#')[i2].Split('|')[1].Split('^')[4] + "</td>";
                
                antwort += "</tr>";
            }
            antwort += "</table>";
             */
            antwort += "</td>";
            antwort += "<td>mp3:</td><td>" + mp3 + "</td>";
            antwort += "<td>geburtstag:</td><td>" + todeszeit + "</td>";
            //antwort += "<td>id:</td><td>" + id + "</td>";
            //antwort += "<td>aktiv:</td><td>" + aktiv + "</td>";
            //antwort += "<td>code:</td><td>" + code + "</td>";
            //antwort += "<td>datum:</td><td>" + datum + "</td>";
            //antwort += "<td>gesamt_summe:</td><td>" + gesamt_summe + "</td>";

            antwort += "</tr>";
        }
        antwort += "</table>";
        return antwort;
    }

    int gesamtsaetze = 0;// gehoert zu funktion Datenreinigung 17.11.13
    protected void Archiv_hauptMp3_leeren()//von 17.11.2013 reinig den g2 von herrenlosen datensaetze
    {
        ta_archiv_haupt_mp3.DeleteQueryAll();
    }
    protected void Datenreinigung()//von 17.11.2013 reinig den g2 von herrenlosen datensaetze
    {
        int tester = 0;//testet ob kinder von kinder noch da sind
        for (int i = 0; i < G4.GetAll().Count; i++)
        {
            string g2 = G4.GetAll()[i]["g2"].ToString();
            string gn1 = G4.GetAll()[i]["gn1"].ToString();
            string gn2 = G4.GetAll()[i]["gn2"].ToString();//babash kie
            string gn3 = G4.GetAll()[i]["gn3"].ToString();
            string gn4 = G4.GetAll()[i]["gn4"].ToString();
            string gcop = G4.GetAll()[i]["gcop"].ToString();
            string gb = G4.GetAll()[i]["gb"].ToString();
            if (gn2 != "")//damit bohrer nicht haengen bleibt
            {
                if (gn2 != "0")//damit welt nicht haengen bleibt
                {
                    if (G4.Gn1(int.Parse(gn2)).Count == 0)
                    {
                        Reiniger.InsertQuery(int.Parse(gn1), int.Parse(gn2), int.Parse(gn3), int.Parse(gn4), int.Parse(gcop), int.Parse(gb));
                        GD.DGi(int.Parse(gn1));
                        tester++;
                        gesamtsaetze++;
                    }
                }
            }
        }
        if (tester != 0) Datenreinigung();//age nave dasht yebar dige bere
        alert("es wurden "+gesamtsaetze+" bereinigt");//sagt wieviele saetze weg sind
        /*
        for (int i = 0; i < G4.GetAll().Count; i++)
        {
            string page1 = G4.GetAll()[i]["page1"].ToString();
            string gn1 = G4.GetAll()[i]["gn1"].ToString();
            try
            {
                string page1Id = Gn2Gn4(gn1.ToString(), 20, "g2", 0);
                //string volume = nva(gb);
                //if(nummertest(gb))
                GU.UpdateQueryPage1(page1Id, int.Parse(gn1));
                //gesamtsaetze++;
            }
            catch
            {
                gesamtsaetze++;
            }
        }
        alert("es wurden " + gesamtsaetze + " bereinigt");*///sagt wieviele saetze weg sind
    }
    string show_aktive_mp3 = "0";
    protected void Ifaktionen()
    {

        if (Request["show_aktive_mp3"] != null) show_aktive_mp3 = "1";
        if (Request["mp3h_restaurant_id"] != null) update_hauptMp3_629(Request["mp3h_restaurant_id"]);
        if (Request["mp3_compact_639"] != null)
        { update_compack_hauptMp3(Request["mp3_compact_639"], Request["mp3h_compact"]); }
        
        //von 17.11.2013
        if (Request["delet_kunde"] != null)
        {
            ta_kunden.DeleteQueryKunden_nr(int.Parse(Request["delet_kunde"]));
        } 
        //if (Request["delet_plz"] != null)
        //{
          //  ta_plz02.DeleteQueryAutoid(int.Parse(Request["delet_plz"]));
        //}


        if (Request["Datenreinigung"] != null)
            Datenreinigung();
        //if (Request["bildarchiv_leeren"] != null)
          //  bildarchiv_leeren();
        if (Request["Archiv_hauptMp3_leeren"] != null)
            Archiv_hauptMp3_leeren();
        //von 9.3.2014
        if (Request["allesweg"] != null)
            //allesweg();
            alert("nicht aktiv");
        //bis 17.11.2013
        if (Request["id"] == null)
            Response.Write(ObjectPersonen());
        else
        {
            id = Request["id"];
            if (Request["open_kunden"] == "87")//
                Response.Write(open_kunden());
            //if (Request["open_PLZ"] == "87")//open_PLZ
              //  Response.Write(open_PLZ());
            if (Request["open_hm"] == "87")
                Response.Write(open_hm());
            //if (Request["open_album"] == "87")
              //  Response.Write(open_album());
            if (Request["open_hm_privat"] == "87")
                Response.Write(open_hm_privat());
            if (Request["1942"] == "87")
                Response.Write(show_all_hmp3());
            if (Request["update_html_txt_alle_2501"] == "C2501")
                update_html_txt_alle_2501(int.Parse(id));
            if (Request["mail_center_2500"] == "C2500")
            {
                string antwort = "";
                antwort += "<table border=1>";
                antwort += "<tr><td></td><td>logo</td><td>2604 name:</td><td>ID</td><td>Fax aktiv</td><td>Plattform</td><td>partner mail 2619</td><td>Fax nummer</td><td>restaurant mails</td>";
                antwort += "</tr>";
                finder_27(int.Parse(id));//finder_27 fuehlt extern_samel_hmp3;
                antwort += extern_samel_hmp3;
                antwort += "</table>";
                Response.Write(antwort);
            }
            if (Request["restaurantId_edfg"] != null)//
                export_html_button_localhost_jpst(Request["restaurantId_edfg"]);
            if (Request["restaurantId_jpst"] != null)//1und1 einzeln
                export_html_button_1und1_edfg(Request["restaurantId_jpst"]);

            if (Request["hde_export_all_lock"] != null)
                hde_export_html_button_localhost_alle();

            if (Request["ud8_export_1und_1_all"] != null)
                ud8_export_html_button_1und1_alle();

            if (Request["1943"] == "87")
            {
                int feiertag_test = 0;
                for (int i = 0; i < G4.Gn2Gn4(int.Parse(id), 23).Count; i++)
                {
                    feiertag_test++;
                }
                if (feiertag_test == 7)
                {
                    int Iz1 = IZ("Feiertage", int.Parse(id), -2, 23, 1943, "ifactionen"); Page1(Iz1, 23, "ifactionen 1943");
                }
                else
                {
                    alert("1943 anscheinend gibt es schon einen Feiertag");
                }
            }

            if (nummertest(id))
            {
                for (int i = 0; i < G4.Gn2Gn4(person(), 103).Count; i++)
                {
                    string usergipfel = Gn2Gn4(person().ToString(), 103, "gn3", i);
                    stufentest(Request["id"], usergipfel);
                }
                if (idOk == 9 && idOOk != 9)
                    Response.Write(ObjectPersonen());
                else
                {
                    string alo = Request[""];
                    if (Request["creatR"] != null) insertWochentage();
                    //if (Request["PLZlisteErzeuger"] != null) PLZlisteErzeuger();
                    //if (Request["PLZ_bearbeiten"] != null) PLZ_bearbeiten();

                    if (Request["ObjectSuche"] != null)
                    {
                        if (nummertest(Request["ObjectSuche"]))
                            id = Request["ObjectSuche"];//KundenSuche
                        else
                        {
                            Suchbegriff = Request["ObjectSuche"];//KundenSuche
                            kindsuche(int.Parse(id));
                        }
                    }
                    if (Request["addP"] != null)
                    {// hier wir prsonal an objekt gebunden
                        //zikzak add 102 103
                        //102== personal kinder 103 objekt kinder
                        //string agent = gn1(id, "g2", 0);
                        //string boss = gn1(person().ToString(), "g2", 0);
                        //string objectt = gn1(Request["addP"], "g2", 0);
                        string personal_name = G4.Gn1(int.Parse(id))[0]["g2"].ToString();
                        IZ(personal_name, int.Parse(Request["addP"]), int.Parse(id), 102, 372, "ifaction");//objekt kind
                        IZ("per v obj", int.Parse(id), int.Parse(Request["addP"]), 103, 373, "ifaction");//personal kind

                        id = Request["addP"];
                    }
                    if (Request["Dell"] != null) id = deletCenter(id, Request["Dell"]);

                    if (Request["FotoDell"] != null)
                        GU.Ug3(-2, int.Parse(Request["FotoDell"]));
                    if (Request["position"] != null)//damit kein update conflict gibt es 2 bedinunng
                    {
                        string position = Request["position"];
                        string position2 = Request["position2"];
                        string GruppenId = Request["GruppenId"];
                        string GruppeDavor = Request["GruppeDavor"];

                        GU.Ug3(long.Parse(position2), long.Parse(GruppenId));
                        GU.Ug3(long.Parse(position), long.Parse(GruppeDavor));
                    }
                    if (Request["UoderI"] == "IZHead")
                        IZHead(int.Parse(id), Request["ArtValue"], Request["IZHead"], Request["dopoId"]);
                    if (Request["googleMap"] != null)
                    {
                        UZ(Request["googleMapId"], Request["googleMap"]);
                    }
                    if (Request["UoderI"] == "IZP")//IZAP  Personal
                        IZHead(person(), Request["ArtValue"], Request["IZHead"], Request["dopoId"]);
                    string Mailbody = "";
                    //if (Request["UoderI"] == "IZAP")//IZAP
                    //{
                        //Mailbody = "bitte kleben sie: <br>person: " + Request["IZHead"] + " <br>personArt: " + Request["ArtValue"] + " <br>id: " + id + " <br>danke";
                        //sendMail("personal Antrag von: " + gn1(person().ToString(), "g2", 0), "q_lvl_p@yahoo.de", "sender@yousystem.de", Mailbody);
                        //Response.Write("Ihre Antrag wurde gesendet");
                    //}
                    if (Request["addtitel"] != null)//IZAP
                    {
                        //inja jaye id ba addtitel awaz shode, wali dobare dorost mishe, intori shode chunke az ye baum miad, sharmande
                        int newid = IZ("00", int.Parse(id), int.Parse(Request["addtitel"]), 119, 414, "ifaction");
                        string titel = gn1(id, "g2", 0);
                        int newid2 = IZ(titel, int.Parse(Request["addtitel"]), int.Parse(id), 120, -2, "ifaction");
                        id = Request["addtitel"];
                    }
                    if (Request["UoderI"] == "UZHead") UZHead(id, Request["ArtValue"], Request["IZHead"], Request["dopoId"]);
                    /*freitag update bandar*/
                    if (Request["update_feiertag"] == "update_feiertag")
                    {
                        UZ(Request["update_id"], Request["feiertage_string"]);
                        finder_26(int.Parse(id), Request["feiertage_string"]);
                        alert("es wurde bei " + gesamtsaetze_feirtage + " Opjekte  eingetragen");

                    }
                    if (Request["insert_feiertag"] == "insert_feiertag")
                    {
                        IZ(Request["feiertag_string"], int.Parse(id), -2, 131, -2, "ifaction");
                        finder_26(int.Parse(id), Request["feiertage_string"]);
                    }
                    if (Request["k11"] != null)
                    {
                        for (int i = 0; i < G4.Gn2Gn4(int.Parse(id), 109).Count; i++)//liste alle platformen unter diese Id
                        {
                            string PlatFormId = Gn2Gn4(id, 109, "gn1", i);
                            k11(int.Parse(id), PlatFormId);//plattForm Fueller
                        }
                    }
                    if (Request["2370"] != null) Xml_insertor_2370(id, Request["2370"]);//
                    if (Request["copiemp3_2459"] != null) 
                        func_copiemp3_2459(id, Request["copiemp3_2459"], Request["neue_art"]);
                    if (Request["2414"] != null)
                        muster_an_alle2414(id, Request["2414"], "8");
                    if (Request["reinigung"] != null) Reinigung(id);//reinigung
                    if (Request["position_pic"] != null)//aendert die position der fotos
                    {
                        string position = Request["position_pic"];//position_weiblich
                        string position2 = Request["position2_pic"];//position_mascio
                        string picId = Request["picId"];//pic_gn1_weiblich
                        string picId2 = Request["picId2"];//pic_gn1_mascio
                        GU.UpdateQueryG2(position, int.Parse(picId2));// be marde
                        GU.UpdateQueryG2(position2, int.Parse(picId));// be zane
                    }
                    if (Request["logout"] != null)
                    {
                        logout(ip);
                        // kam alles doppelt nach logout
                        //string q = "<form action=ng2.aspx method=post>  " +
                        //"User:<input name=User size=20 value=><br>" +
                        //"Passwort:<input type=password name=Pin size=20 value=>" +
                        //"<input type=submit value=ok2 Eintrag>" +
                        //"</form>";
                        //Response.Write(q);
                    }
                    else
                        Response.Write(WebMaske(id));
                }
            }
            else { alert("Diese Kunden-Nr ist keine Nr");
            }
        }
    }
    public void update_hauptMp3_629(string retaurant_id)
    { 
        string mp3="";
        mp3 += Request["mp3h_teil0"] + "~";
        mp3 += Request["mp3h_teil1"] + "~";
        mp3 += Request["mp3h_teil2"] + "~";
        mp3 += Request["mp3h_teil3"] + "~";
        mp3 += Request["mp3h_teil4"] + "~";
        mp3 += Request["mp3h_teil5"] + "~";
        mp3 += Request["mp3h_teil6"] + "~";
        mp3 += Request["mp3h_teil7"] + "~";
        mp3 += Request["mp3h_teil8"] + "~";
        mp3 += Request["mp3h_teil9"] + "~";
        mp3 += Request["mp3h_teil10"] + "~";
        mp3 += Request["mp3h_teil11"] + "~";
        mp3 += Request["mp3h_teil12"] + "~";
        mp3 += Request["mp3h_teil13"] + "~";
        mp3 += Request["mp3h_teil14"] + "~";
        mp3 += Request["mp3h_teil15"] + "~";
        mp3 += Request["mp3h_teil16"] + "~";
        mp3 += Request["mp3h_teil17"] + "~";
        try
        {
            ta_archiv_haupt_mp3.InsertQueryAll(int.Parse(Request["hauptmp3Id"]), "leer", "leer", mp3, "leer", int.Parse(retaurant_id), DateTime.Now, DateTime.Parse(Request["geburtstag"]));
        }
        catch
        {
            alert("mp3haupt archivierung gescheitert! \n ng2 C1062 Fehler \n Fehler code : because the 'PRIMARY' filegroup is full \n SQL Befehl: \n DBCC SHRINKDATABASE ('f22', TRUNCATEONLY) \n hilft");
        } 
        ta_hauptMp3.UpdateQueryMp3(mp3, int.Parse(retaurant_id));
        //string path_server2 = Server.MapPath(@"~/fsw/ablage/" + retaurant_id);
        //string antwort = ny_cls.ccl_karte.export_html_alt(retaurant_id, path_server2);
        //string antwort = export_html.ftp.export_html(retaurant_id);
    }
    public void update_compack_hauptMp3(string retaurant_id, string mp3)
    {
        try
        {
            ta_archiv_haupt_mp3.InsertQueryAll(int.Parse(Request["hauptmp3Id"]), "leer", "leer", mp3, "leer", int.Parse(retaurant_id), DateTime.Now, DateTime.Parse(Request["geburtstag"]));
        }
        catch
        {
            alert("mp3haupt archivierung gescheitert! \n ng2 C1076 Fehler \n Fehler code : because the 'PRIMARY' filegroup is full \n SQL Befehl: \n DBCC SHRINKDATABASE ('f22', TRUNCATEONLY) \n hilft");
        }
        try
        {
            ta_hauptMp3.UpdateQueryMp3(mp3, int.Parse(retaurant_id));
        }
        catch
        {
            alert("mp3haupt update gescheitert! \n ng2 C1084");
        }
        //string path_server2 = Server.MapPath(@"~/fsw/ablage/" + retaurant_id);
        //string antwort = ny_cls.ccl_karte.export_html_alt(retaurant_id, path_server2);
        //string antwort = export_html.ftp.export_html(retaurant_id);
    }
    protected void k11(int IId, string platformId)
     {
        for (int i = 0; i < G4.GetDataByG2(IId).Count; i++)
        {
            string g1 = G4.GetDataByG2(IId)[i]["gn1"].ToString();
            string gn3Alt = G4.GetDataByG2(IId)[i]["gn3"].ToString();
            string art = G4.GetDataByG2(IId)[i]["gn4"].ToString();
            string name2 = gn1(g1, "g2", 0);
            if (art == "118")
            {//g1 = restaurantId
                if (G4.Gn2Gn3(int.Parse(platformId),int.Parse(g1)).Count==0)//age nadare behesh bede
                {
                    IZ("00", int.Parse(platformId), int.Parse(g1), 115, 496, "k11");
                }
            }
            k11(int.Parse(g1), platformId);
        }
    }  /**/
    public string deletCenter(string deletId, string dell)//deletId= khodesh wa dell=babash
    {
        string art = gn1(deletId, "gn4", 0);  //37=speise

        if (art == "102")//personal v objekt
        {
            kinderDelet(int.Parse(deletId));
            GD.DGi(int.Parse(deletId));
            deletId = dell;
        }
        else if (art == "89" || art == "91" || art == "93" || art == "95" || art == "97")
        {
            //person wird geloescht
            //delet 102 103
            //id=personId
            //deletId = deletId;
            int info = G4.G3G4(int.Parse(deletId), 102).Count;
            GD.Dg3g4(int.Parse(deletId), 102);

            //103 un bala pak mishe dige
            int info2 = G4.Gn2Gn4(int.Parse(deletId), 103).Count;
            GD.Dg2g4(int.Parse(deletId), 103);
            //id = gn1(id,"gn2",0);
            kinderDelet(int.Parse(deletId));
            GD.DGi(int.Parse(deletId));
            deletId = dell;
        }
        else if (art == "120")// bare titel liste verbindung hardoro pak bokone ham 119 ham 120
        {
            kinderDelet(int.Parse(deletId));
            string titleId = gn1(deletId,"gn3", 0);
            string V119 = Gn2Gn4(titleId, 119, "gn1", 0);
            GD.DGi(int.Parse(V119));
            GD.DGi(int.Parse(deletId));
            deletId = dell;
        }
        else if (art == "118")// bare titel liste verbindung hardoro pak bokone ham 119 ham 120
        {
            //inja ham 120 pak mishe ham 115
            GD.Dg3g4(int.Parse(deletId),115);
            GD.Dg3g4(int.Parse(deletId), 120);
            string V119 = "-345";// ye adade alaki ke be kasi azar naresune
            try
            {
                V119 = Gn2Gn4(deletId, 119, "gn1", 0);//119 ro mikeshe birun badan pak mikone
            }
            catch (Exception)
            {
                V119 = "-345";
            }
            GD.DGi(int.Parse(V119));
            GD.DGi(int.Parse(deletId));//inja ham khodesh pak mishe
            deletId = dell;
        }
        else
        {
            if (art == "26")//1,12,13 age reataurante hameye riss hasho ham pak kone
            {
                try
                {

                    for (int ifo = 0; ifo < mp3_adabtor.GetDataByRisId(int.Parse(id)).Count; ifo++)
                    {
                        string mp3 = mp3_adabtor.GetDataByRisId(int.Parse(id))[ifo]["mp3"].ToString();

                        string gn2 = mp3_adabtor.GetDataByRisId(int.Parse(id))[ifo]["gn2"].ToString();
                        string art_hier = mp3_adabtor.GetDataByRisId(int.Parse(id))[ifo]["art"].ToString();
                        string bobrn_time = mp3_adabtor.GetDataByRisId(int.Parse(id))[ifo]["timeNow"].ToString();
                        string Mitarbeiter = mp3_adabtor.GetDataByRisId(int.Parse(id))[ifo]["Mitarbeiter"].ToString();
                        archivMp3_adabtor.InsertQueryAll(00, mp3, int.Parse(gn2), int.Parse(art_hier), DateTime.Now, Mitarbeiter, int.Parse(id), bobrn_time);
                    }
                    mp3_adabtor.DeleteQueryRestId(int.Parse(id));
                    //haupt mp3
                    string exId = ta_hauptMp3.GetDataByResId(int.Parse(id))[0]["Id"].ToString();
                    string mail = ta_hauptMp3.GetDataByResId(int.Parse(id))[0]["mail"].ToString();
                    string telefon = ta_hauptMp3.GetDataByResId(int.Parse(id))[0]["telefon"].ToString();
                    string mp3hir = ta_hauptMp3.GetDataByResId(int.Parse(id))[0]["mp3"].ToString();
                    string pwort = ta_hauptMp3.GetDataByResId(int.Parse(id))[0]["pwort"].ToString();
                    string geburtstag = ta_hauptMp3.GetDataByResId(int.Parse(id))[0]["geburtstag"].ToString();
                    try
                    {
                        ta_archiv_haupt_mp3.InsertQueryAll(int.Parse(exId), mail, telefon, mp3hir, pwort, int.Parse(id), DateTime.Now, DateTime.Parse(geburtstag));
                    }
                    catch
                    {
                        alert("mp3haupt archivierung gescheitert! \n ng2 C1398 Fehler \n Fehler code : because the 'PRIMARY' filegroup is full \n SQL Befehl: \n DBCC SHRINKDATABASE ('f22', TRUNCATEONLY) \n hilft");
                    } 
                    ta_hauptMp3.DeleteQueryId(int.Parse(id));
                    dell_resId_aus_plz_mp3(mp3hir, exId);
                    //delete Pic's
                    string picIds = mp3hir.Split('~')[7].Split('^')[1];
                    for (int i = 0; i < picIds.Split('#').Length -1; i++)
                    {
                        string picId = picIds.Split('#')[i];
                        H10.DeleteQueryPicPicid(int.Parse(picId));
                    }
                    //delete Slide
                    string slide_picIds = mp3hir.Split('~')[14];
                    for (int i = 0; i < slide_picIds.Split('#').Length - 1; i++)
                    {
                        string picId = slide_picIds.Split('#')[i].Split('|')[0];
                        H10.DeleteQueryPicPicid(int.Parse(picId));
                    }
                    string unter_slide_picIds = mp3hir.Split('~')[15];
                    for (int i = 0; i < unter_slide_picIds.Split('#').Length - 1; i++)
                    {
                        string picId = unter_slide_picIds.Split('#')[i].Split('|')[0];
                        H10.DeleteQueryPicPicid(int.Parse(picId));
                    }
                    string path_server = Server.MapPath(@"~/fsw/ablage/" + id);
                    Directory.Delete(path_server, true);
                    alert("mp3 erfolgreich geloescht");
                }
                catch
                {
                    alert("mp3 nicht erfolgreich geloescht");
                }

            }
            if (art == "25")//2,12,13 age zeitfenster hast mp3 ham pak kone
            {
                for (int ifo = 0; ifo < mp3_adabtor.GetDataByGn2(int.Parse(id)).Count; ifo++)
                {
                    string mp3 = mp3_adabtor.GetDataByGn2(int.Parse(id))[ifo]["mp3"].ToString();
                    string mp3Id_ = mp3_adabtor.GetDataByGn2(int.Parse(id))[ifo]["mp3Id"].ToString();
                    string gn2 = mp3_adabtor.GetDataByGn2(int.Parse(id))[ifo]["gn2"].ToString();
                    string art_hier = mp3_adabtor.GetDataByGn2(int.Parse(id))[ifo]["art"].ToString();
                    string bobrn_time = mp3_adabtor.GetDataByGn2(int.Parse(id))[ifo]["timeNow"].ToString();
                    string Mitarbeiter = mp3_adabtor.GetDataByGn2(int.Parse(id))[ifo]["Mitarbeiter"].ToString();
                    string delete_person_ = gn1(person().ToString(), "g2", 0);
                    archivMp3_adabtor.InsertQueryAll(int.Parse(mp3Id_), mp3 + "@delete_mitarbeiter:|" + delete_person_, int.Parse(gn2), int.Parse(art_hier), DateTime.Now, Mitarbeiter, int.Parse(id), bobrn_time);
                }
                mp3_adabtor.DeleteQueryGn2(int.Parse(id));
                //update hauptstring
                string vater = gn1(id, "gn2", 0);
                string resId = gn1(vater, "gn2", 0);
                string hauptmp3 = ta_hauptMp3.GetDataByResId(int.Parse(resId))[0]["mp3"].ToString();
                string alle_zeiten = hauptmp3.Split('~')[2];
                string update_zeiten = "";
                for (int i = 0; i < alle_zeiten.Split('#').Length - 1; i++)
                {
                    string zeitId = alle_zeiten.Split('#')[i].Split('|')[3];
                    if (int.Parse(zeitId) != int.Parse(id))//der Tag wurde gefunden
                        update_zeiten += alle_zeiten.Split('#')[i] + "#";
                }
                string neue_mp3 = hauptmp3.Split('~')[0] + "~" +
                                  hauptmp3.Split('~')[1] + "~" +
                                  update_zeiten + "~" +
                                  hauptmp3.Split('~')[3] + "~" +
                                  hauptmp3.Split('~')[4] + "~" +
                                  hauptmp3.Split('~')[5] + "~" +
                                  hauptmp3.Split('~')[6] + "~" +
                                  hauptmp3.Split('~')[7] + "~" +
                                  hauptmp3.Split('~')[8] + "~" +
                                  hauptmp3.Split('~')[9] + "~" +
                                  hauptmp3.Split('~')[10] + "~" +
                                  hauptmp3.Split('~')[11] + "~" +
                                  hauptmp3.Split('~')[12] + "~" +
                                  hauptmp3.Split('~')[13] + "~" +
                                  hauptmp3.Split('~')[14] + "~" +
                                  hauptmp3.Split('~')[15] + "~" +
                                  hauptmp3.Split('~')[16] + "~" +
                                  hauptmp3.Split('~')[17] + "~";
                ta_hauptMp3.UpdateQueryMp3(neue_mp3, int.Parse(resId));
                //string path_server2 = Server.MapPath(@"~/fsw/ablage/" + resId);
                //string antwort = ny_cls.ccl_karte.export_html_alt(resId, path_server2);
                //string antwort = export_html.ftp.export_html(resId);
            }
            kinderDelet(int.Parse(deletId));
            GD.DGi(int.Parse(deletId));
            deletId = dell;
            
        }
        return deletId;
    }
    protected string WebMaske(string id)
    {
        string page = "<table><tr>";
        // Selbst Kinder Bruder
        //page = "<table border=1><tr><td>";

        //if (id != "113215")//ist nur wegen welt gemacht,
        if (id == "233268" || id == "113215")//ist nur wegen welt gemacht,
            id = id;
        else
        {
            try// nur um fehler auszuschliessen 28.11.13
            {
                string page1 = G4.Gn1(int.Parse(id))[0]["page1"].ToString();
                page += "<td>" + Page1Mixer(page1) + "</td>";/**/
                //id = id;
            }
            catch { alert("fehler art20 fehlt. line 1838"); }
        }
        page += "<form action=ng2.aspx method=post>  " +  //suche
                     "<td valign=middle><input type=text name=ObjectSuche size=10 value=>" +
                     "<input type=hidden name=id size=30 value=" + id + "></td>";
        page += "<td><input  type=image src=Bilder/suche.png border=0 height=50 width=50 value=submit alt=Kunden_Suche>" +
                          "</td></form>";
        page += "<td>" + gn1(person().ToString(), "g2", 0) + "</td>";
        page += "<td> ID:" + gn1(person().ToString(), "gn1", 0) + "</td>";
        page += "<script language='javascript' type='text/javascript'>";
        page += "window.document.title = 'GN2:"+gn1(id,"g2",0)+"'"; 
        page +="</script>";

        page += "<td>";
        page += " Art=" + gn1(id, "gn4", 0);
        pArt = int.Parse(gn1(person().ToString(), "gn4", 0)); ;//sorgt fuer pentagram
        page += " pArt=" + pArt;
        page += " Anzahl der Saetze="+G4.GetDataByAll2().Count.ToString();
        page+="</td><td>";
        for (int i = 0; i < G4.Gn2Gn4(person(), 103).Count; i++)
        {
            string objektId = Gn2Gn4(person().ToString(), 103, "gn3", i);
            page += MZ2(1, objektId, 0, "", 0, 4, "", "");

        }
        //page += "</td><td>";
        //page += G4.Gn1(int.Parse(id))[0][""].ToString();
        if (pArt == 87)
        {
            page += "</td><td>";
            page += "<a href=ng2.aspx?id=" + id + "&open_kunden=" + pArt + ">. </a>";
        }
        if (pArt == 87)
        {
            page += "</td><td>";
            page += "<a href=ng2.aspx?id=" + id + "&open_PLZ=" + pArt + ">ALLE PLZ </a>";
        }
        if (pArt == 87)
        {
            page += "</td><td>";
            page += "<a href=ng2.aspx?id=" + id + "&open_hm=" + pArt + ">  1483 HM  </a>";
        }
        if (pArt == 87)
        {
            page += "</td><td>";
            page += "<a href=ng2.aspx?id=" + id + "&open_album=" + pArt + ">All pics</a>";
        }
        page += "</td></tr></table>";
        page += "<table border=0>";
        page += "<tr>";
        page += "<td><a href=ng2.aspx?id=" + id + "&logout=" + ip + ">" +
                "<img src=Bilder/logout.png alt='logout' height=65 border=0>" +
                "</a></td>";
        page += "<td><a href=ng2.aspx?id=" + gn1(id, "gn2", 0) + ">" +
                   "<img src=Bilder/up7.png onmouseover=(src='Bilder/up7red.png') onmouseout=(src='Bilder/up7.png') border=0 alt='Up' height=65>" +
               "</a></td>";
        
        page += "<td>";
        page += "<a href=personal.aspx?id=" + id + " target='blank'><img src=Bilder/Besucher.png border=0 alt='Besucher' height=60></a>";
        page += "</td>";
        //Datenreiniger knopf 17.11.2013

        page += "<td><a href=ng2.aspx?id=" + gn1(id, "gn2", 0) + "&Datenreinigung=Datenreinigung>" +
                "<img src=Bilder/Reinigung.png border=0 alt='Daten Reinigung' height=55>" +
            "</a></td>";
        page += "<td><a href=ng2.aspx?id=" + id + "&bildarchiv_leeren=leeren>" +
                "Bild Archiv leeren" +
            "</a></td>";
        page += "<td><a href=ng2.aspx?id=" + id + "&Archiv_hauptMp3_leeren=leeren>" +
                "Archiv hauptMp3 leeren" +
            "</a></td>";
        page += "<td><a href=ng2.aspx?allesweg=allesweg>" +
                "<img src=Bilder/delete.png border=0 alt='Daten Reinigung' height=55>" +
            "</a></td></table>";

        if (pArt == 87)
        {
            page += " <body   bgcolor='#c9c9ff'>";//delta.jpg 
        }
        if (pArt == 89)// bgproperties='fixed'
            page += " <body   bgcolor='#c0c0c0' style=background-position:bottom;background-repeat:no-repeat center background=Bilder/admin2.GIF    >";//delta.jpg 
        page += "";
        if (Request["besucher"] == "besucher")
        {
            page += besucherliste();
        }
        VaterId = gn1(id, "gn2", 0);

        
        Art = gn1(id, "gn4", 0);
        if (Art == "34")// alle objekte
        {
            if (pArt == 87 || pArt == 89)//mich und admin
                page = "<td>" + webmaske34_Alle_Objekte(page) + "</td>";
        }
        if (Art == "26")//restaurant
        {
            page += "<td>" + webmaske26() + "</td>";
        }
        if (Art == "109")//werbePlattform
        {
            if (Request["gn4V"] != null)
                page += "<td><table>" + GOB("109*", gn1(id, "g2", 0) + "*" , "Platform*", "25*", "UZHead", "gn1") + "</table></td></tr><tr>";
            else
                page += "<tr><td>" + MZ2(1, id, 1, "", 1, 5, "", VaterId) + "";
            for (int i = 0; i < G4.Gn2Gn4(int.Parse(id), 113).Count; i++)
            {
                page += "<td>";
                string picid = Gn2Gn4(id, 113, "gn3", i);
                //string picid = gn1(logo, "gn3", 0);
                page += "<img src=gto.aspx?id=" + picid + " alt=" + picid + " height='50'>";//
                page += "</td><br>";
            }/**/
        }
        if (Art == "23" || Art == "84")//84=geschlossen  23=wochentage
        {
            if (pArt == 87 || pArt == 93 || pArt == 95 || pArt == 89)
                page = webmaske23und84(page);
        }
        if (Art == "83")//mustertag
        {
            if (pArt == 87 || pArt == 97 || pArt == 93 || pArt == 95 || pArt == 89)
                page = webmaske83(page);
        }

        if (Art == "25")//von Uhrzeit
        {
            if (pArt == 87 || pArt == 93 || pArt == 95 || pArt == 89)
                page = webmaske25(page);
        }
        if (Art == "86")//Muster Stunde
        {
            if (pArt == 87 || pArt == 97 || pArt == 93 || pArt == 95 || pArt == 89)
                page = webmaske86(page);
        }
        if (Art == "106")
        {
            if (pArt == 87)
                page = webmaske106(page);
        }
        if (Art == "28")
        {
            if (pArt == 87)
                page = webmaske28(page);
        }
        if (Art == "104")
        {
            if (pArt == 87 || pArt == 97 || pArt == 93 || pArt == 95 || pArt == 89)
                page = webmaske104(page);
        }
        if (Art == "118")
        {
            if (pArt == 87 || pArt == 97 || pArt == 93 || pArt == 95 || pArt == 89)
                page = webmaske118(page);
        }
        page += "</td></tr></table>";
        //if (pArt == 87 || pArt == 91 || pArt == 95)
            //page += "<td>" + werbung(250, Art) + "</td>";
        return page;
    }
    //login team
    protected void check()
    {
        string zustand = "";
        if (Request["Pin"] != null)
            loginstd(ip, 8);// 8 mige chand saat login bemoonan
        //string IpId = G4.GetDataByG2Gn4(ip, 99)[0]["gn1"].ToString();
        int amar = 0;

        for (int i = 0; i < G4.GetDataByG2Gn4(ip, 99).Count; i++)//ip schleife
        {
            string Ipgn1 = G4.GetDataByG2Gn4(ip, 99)[i]["gn1"].ToString();
            string logzustand = G4.GetDataByG2Gn4(ip, 99)[i]["gn4"].ToString();
            if (logzustand == "99")
            {
                string loginDate = Gn2Gn4(Ipgn1, 100, "g2", 0);
                if (DateTime.Now == DateTime.Now)
                {
                    //gn3 ip ke 99 hast migire
                    //es muss eine startliste sein
                    Ifaktionen();
                    amar = 1;
                }
                else
                {
                    GU.Ugn4(101, int.Parse(Ipgn1));
                    alert("das Zeitlimit wurde erreicht;  time out");
                }
            }
        }
        if (G4.GetDataByG2Gn4(ip, 99).Count == 0 || amar == 0)
        {
            string q = "<body  bgproperties='fixed' style=background-repeat:no-repeat bgcolor='#524c49'  background=Bilder/burg4.jpg    >";//welt.png float='left'
             q += "<form action=ng2.aspx method=post>  " +
                         "User:<input name=User size=20 value=><br>" +
                     "Pin:<input type=password name=Pin size=20 value=>" +
                     "<input type=submit value=ok 1637 Eintrag>" +
                     "</form>";
            Response.Write(q);
        }
    }
    protected void stufentest(string stuId, string usergipfel)
    {
        //int chande=G4.Gn2Gn4(person(), 103).Count;
        //for (int i = 0; i < G4.Gn2Gn4(person(), 103).Count; i++)
        //{
            //string usergipfel = Gn2Gn4(person().ToString(), 103, "gn3", i);
            if (stuId == usergipfel)
            {
                id = id;
                idOOk=9;
            }
            else
            {
                if (stuId != "0")
                {
                    string vater = gn1(stuId, "gn2", 0);
                    stufentest(vater, usergipfel);
                }
                else
                {
                    idOk = 9;
                    //Ifaktionen();
                }
            }
        //}
        //return stuId;
    }
    protected int person()
    {
        try
        {
            string Vater = G4.GetDataByG2Gn4(ip, 99)[0]["gn2"].ToString();// id kasi ke login karde ba in ip
            return int.Parse(Vater);
        }
        catch
        {
            alert("die Person nicht vorhanden 1586");
            return 0;
        }
    }
    protected void loginstd(string ip, int std)// std zamane auto_logout ro bestimmen mikone.
    {   //inja 99=ip,person,gipfel wa 100=login_time druken mishe.
        string user = Request["User"];
        string Pin = Request["Pin"];
        try
        {
            string userId = G4.GetDataByG2new(user)[0]["gn1"].ToString();
            string pinId = G4.GetDataByG2new(Pin)[0]["gn1"].ToString();
            string usergipfel = gn1(userId, "gn2", 0);// id aghaze pyramid
            int nwId = IZ(ip, int.Parse(userId), int.Parse(usergipfel), 99, 965, "loginstd");//insert login ip
            IZ(DateTime.Now.AddHours(std).ToString(), nwId, -2, 100, 966, "loginstd");// insert login time
        }
        catch { alert("Benutzername oder Passwort ist nicht Vorhanden 1603"); }
    }
    protected void logout(string ip)
    {
        string gelogt = G4.GetDataByG2Gn4(ip, 99)[0]["g2"].ToString();
        for (int i = 0; i < G4.GetDataByG2Gn4(gelogt, 99).Count; i++)
        {
            string username = gn1(person().ToString(), "g2", 0);
            string gn1a = G4.GetDataByG2Gn4(ip, 99)[i]["gn1"].ToString();
            string login_Zeit = G4.Gn2Gn4(int.Parse(gn1a), 100)[0]["g2"].ToString();
            string login_Zeit_Id = G4.Gn2Gn4(int.Parse(gn1a), 100)[0]["gn1"].ToString();
            //string login_Zeit=nva(login_Zeit_BibId);
            try
            {
                Login_archiv.InsertQueryAll(username, DateTime.Parse(login_Zeit), ip, DateTime.Now);//hier wird login und logaut archiviert
            }
            catch { alert("error archiv"); }
            GD.DGi(int.Parse(login_Zeit_Id));//loecht die 100 von g4
            //gB.DeleteQueryId(int.Parse(login_Zeit_BibId));//29.12.13__als nva loeschte

            GD.Dg2g4(int.Parse(gn1(person().ToString(), "gn1", 0)), 99);
            //gB.DeleteQueryId(int.Parse(gelogt));
            //GU.Ugn4(101, int.Parse(gn1a)); 101 gibt ab heute 25,11,13 nicht mehr
        }
    }
    protected string ObjectPersonen()
    {
        string person2 = person().ToString();
        string page = " <body  bgproperties='fixed' style=background-repeat:no-repeat style=background-position:bottom center bgcolor='#524c49'  background=Bilder/welt.png    >";//welt.png float='left'
        //page += "<a href=ng2.aspx?id=" + id + "&logout=" + ip + ">";
        //page += "<img src=Bilder/logout.png alt='logout' height=35>";
        page += "</a>" + gn1(person2, "g2", 0);
        //page += gn1(person().ToString(), "gn1", 0);//id person ro mide
        //page += " pArtss=";
        //page += personArt();
        int zeig = person();
        for (int i = 0; i < G4.Gn2Gn4(person(), 103).Count; i++)
        {
            string objektId = Gn2Gn4(person().ToString(), 103, "gn3", i);
            page += MZ2(1,objektId, 0, "", 0, 4, "","");
        }
        return page;
    }
    protected void alert(string text)
    {
        ClientScript.RegisterStartupScript(this.GetType(), "myalert", "alert('" + text + " ');", true);
    }
    protected void kinderDelet(long SId)
    {
        for (int i = 0; i < G4.GetDataByG2(SId).Count; i++)
        {
            string g1 = G4.GetDataByG2(SId)[i]["gn1"].ToString();
            kinderDelet(long.Parse(g1));
        }
        GD.DeleteQueryG2(SId);
    }
    protected void kindsuche(long SId)
    {
        string name = "";
        for (int i = 0; i < G4.GetDataByG2(SId).Count; i++)
        {
            string g1 = G4.GetDataByG2(SId)[i]["gn1"].ToString();
            name = gn1(g1,"g2",0);
            string suchart =gn1(g1,"gn4",0);
            kindsuche(int.Parse(g1));
            if (suchart=="26")
                if (Suchbegriff.ToUpper() == name.ToUpper())
                    id = g1;
        }
    }
    protected string webmaske26()//restaurant
    {
        string page = "";
        DataSet2TableAdapters.mp3TableAdapter mp3_adabtor = new DataSet2TableAdapters.mp3TableAdapter();
               page += "<table><td>" + MZ2(1, id, 1, "", 1, 5, "27*112*121*123*127*", VaterId) + "</td>";
              DataSet2TableAdapters.Ip_register1TableAdapter ta_ip_register = new DataSet2TableAdapters.Ip_register1TableAdapter();
              int besucher_anzahl = ta_ip_register.GetDataByres_id(id).Count;
              page += "<td><a href='visitor.aspx?id=" + id + "' target='blank'>Besucher:" + besucher_anzahl + "</a></td>";
              page += "<td><a href=ng2.aspx?id=" + id + "&show_aktive_mp3=1> (Show aktive Mp3:) " + besucher_anzahl + "</a></td>";
              DataSet2TableAdapters.bestellung1TableAdapter ta_bestellung = new DataSet2TableAdapters.bestellung1TableAdapter();
              int bestellungs_anzahl = ta_bestellung.GetDataByResId(int.Parse(id)).Count;
              page += "<td></td>";
              page += "<td><a href='visitor.aspx?id=" + id + "' target='blank'>Bestellungen:" + bestellungs_anzahl + "</a></td>";
              if (pArt == 87)
              {
                  page += "<td><a href=ng2.aspx?id=" + id + "&open_hm_privat=" + pArt + ">HM_privat 1941</a></td>";
                  page += "<td><a href=ng2.aspx?id=" + id + "&1942=" + pArt + ">show_all_hm 1942</a></td>";
                  page += "<td><a href=ng2.aspx?id=" + id + "&1943=" + pArt + ">addire_feiertag 1943</a></td>";
              }     
        if (pArt == 87 || pArt == 93 || pArt == 95 || pArt == 89)
            page += "<table>" + OFP2(1, 1, "", id, "83*23*84*", "0", 0, 0, "86*25*", "32*", 0, 0, "", 0, "calendar.png height=50  width=110 alt=Kalender") + "";
        
        page += "<table>";
        for (int i = 0; i < 4; i++)
        {
            page += "<tr>";
            page += "<td>";
            page += "</td>";
            page += "</tr>";
        }
        page += "</table>";

        page += "<table>";
        
        page += "</table>";
        if (pArt == 87)
            page += "" + OFP2(0, 0, "", id, "102*", "", 0, 1, "", "", 0, 0, "", 0, "personal.png height=50  width=110 alt=Zugangspersonal") + "";
        if (pArt == 89)
            page += "" + OFP2(0, 0, "Objekt Personal FA-9iuty", id, "102*", "", 0, 0, "", "", 0, 0, "",0,"") + "";
        if (pArt == 87)
            page += personalbaum();
        if (pArt == 89)
            page = Adminpersonalbaum(page);
        return page;
    }
    protected string webmaske23und84(string page)
    {
        page += "<table><td>" + MZ2(1,id, 0, "", 0, 4, "", VaterId)+ "</td>";
        page += "<td>" + GOB("25*", "0*", "2148 Von:Bis:*", "15*", "IZHead", "gn1") + "</td></table></table>";
        page += "<table>" + OFP2(1, 1, "", id, "25*", "32*", 0, 0, "35", "0", 0, 0, "", 0, "zeit.png height=50 width=110 alt= Öffnungszeiten") + "</table>";
        return page;
    }
    //dienen dazu insert_zeit() nochmal zu starten falls,  die 00:00 grenze ueberschnitten wird 
    int zweites_Zeitfester_ist_vorhanden = 0; string uebrige_zeit = "";
    string bis_fuer_anhang = "";
    protected void insert_Zeit(string zeit, int vater, string dopoId, int modus_normal_0_anhang_1)
    {
        //zeit testen
        string von = "";
        string bis = "";
        int nichtOk = 1;


        try //time test
        {
            if (zeit.Split(' ').Length != 2)
            {
                alert("Zeitformat ist falsch 2345");
                nichtOk = 0;
            }
            else
            {
                von = zeit.Split(' ')[0];
                bis = zeit.Split(' ')[1];
                bis_fuer_anhang = zeit.Split(' ')[1];
            }
            DateTime.Parse(von);DateTime.Parse(bis);
        }
        catch
        {
            alert("von ist kein Zeitformat 2362");
            nichtOk = 0;
        }
        
        string morgen = "";
        if (nichtOk == 1)
        {
            string heute = gn1(id, "g2", 0); int heute_nummer = 0;
            if (heute == "Montag")
            { heute_nummer = 1; morgen = "Dienstag"; }
            if (heute == "Dienstag")
            { heute_nummer = 2; morgen = "Mittwoch"; }
            if (heute == "Mittwoch")
            { heute_nummer = 3; morgen = "Donnerstag"; }
            if (heute == "Donnerstag")
            { heute_nummer = 4; morgen = "Freitag"; }
            if (heute == "Freitag")
            { heute_nummer = 5; morgen = "Samstag"; }
            if (heute == "Samstag")
            { heute_nummer = 6; morgen = "Sonntag"; }
            if (heute == "Sonntag")
            { heute_nummer = 7; morgen = "Montag"; }
            if (heute == "Feiertage")
            { heute_nummer = 9; morgen = "M U S T E R"; }
            string restaurantId = gn1(vater.ToString(), "gn2", 0);
            string hauptMp3 = ta_hauptMp3.GetDataByResId(int.Parse(restaurantId))[0]["mp3"].ToString();
            
            //uebrschneidungstest
            string alle_zeiten = hauptMp3.Split('~')[2];
            
            if (nichtOk == 1)
            {
                //verabreichung
                int neueId = IZ(zeit, vater, -2, 25, 1564, "insert_Zeit"); Page1(neueId, 25, "insert_Zeit");
                string neue_mp3 = hauptMp3.Split('~')[0] + "~" +hauptMp3.Split('~')[1] + "~" +
                                  hauptMp3.Split('~')[2] + "\n" + heute_nummer.ToString() + "|" + von + "|" + bis + "|" + neueId.ToString() + "|||Druckerei 2295#" + "~" +
                                  hauptMp3.Split('~')[3] + "~" +hauptMp3.Split('~')[4] + "~" +hauptMp3.Split('~')[5] + "~" +hauptMp3.Split('~')[6] + "~" +hauptMp3.Split('~')[7] + "~" +hauptMp3.Split('~')[8] + "~" +hauptMp3.Split('~')[9] + "~" +hauptMp3.Split('~')[10] + "~" +hauptMp3.Split('~')[11] + "~" +hauptMp3.Split('~')[12] + "~" +hauptMp3.Split('~')[13] + "~" +hauptMp3.Split('~')[14] + "~" +hauptMp3.Split('~')[15] + "~" +hauptMp3.Split('~')[16] + "~" +hauptMp3.Split('~')[17] + "~";
                ta_hauptMp3.UpdateQueryMp3(neue_mp3, int.Parse(restaurantId));/**/
                //string path_server2 = Server.MapPath(@"~/fsw/ablage/" + restaurantId);
                //string antwort = ny_cls.ccl_karte.export_html_alt(restaurantId, path_server2);
                //string antwort = export_html.ftp.export_html(restaurantId);
            }
        }
        id = gn1(id, dopoId, 0);
    }
    protected string webmaske83(string page)
    {
        page += "<td>" + MZ2(1,id, 0, "", 0, 4, "", VaterId) + gn1(id, "gn4", 0) + "</td></tr><tr>";
        //page += "<table>" + GOB("25*32*53*54*63*57*58*", "0*0*0*0*0*ff0000*a7c7e8*", "Von:*Bis:*sms*temp*position*lc*bc*", "4*4*3*3*3*5*5*", "0*0*1*0*0*1*1", "IZHead", "gn1") + "</table>";
        page += "<td><table>" + OFP2(1, 1, "", id, "86*", "32*", 0, 0, "35*", "0", 0, 0, "", 0, "copie.png height=50  width=110 alt=muster") + "</table></td>";
        //page += "<td><table>" + OFP2(1, 1, "Öffnungszeiten", id, "25*", "32*", 1, 1, "35*", "0", 0, 0, "") + "</table></td>";
        return page;
    }
    protected string webmaske86(string page)//muster
    {
        if (Request["gn4V"] != null)
            page += "</tr><tr><td style= background-color:#a7c7e8><table>" + GOB("25*32*53*54*63*57*58*122*", gn1(id, "g2", 0) + "*" +
                Gn2Gn4(id, 32, "g2", 0) + "*" + Gn2Gn4(id, 53, "g2", 0) + "*" +
                Gn2Gn4(id, 54, "g2", 0) + "*" + Gn2Gn4(id, 63, "g2", 0) + "*" +
                Gn2Gn4(id, 57, "g2", 0) + "*" + Gn2Gn4(id, 58, "g2", 0) + "*" +
                Gn2Gn4(id, 122, "g2", 0), "von*bis*sms*smsTempo*smsAnker*lc*bc*linkTitel*", "3*3*70*1*1*3*3*3*", "UZHead", "gn1") + "</table></td></tr><tr>";
        else
        {
            page += "<table border=1><tr><td>" + MZ2(1, id, 1, "", 0, 4, "32*53*54*63*57*58*122*", VaterId) + "</td>";
        }
        if (mp3_adabtor.GetDataByGn2(int.Parse(id)).Count == 0)
        {
            page += "<td><a href=ng2.aspx?id=" + id + "&2370=9>2370 START</a></td> ";// XML
        }
        //mp3_adabtor.DeleteQueryGn2(46162);
        if (mp3_adabtor.GetDataByGn2(int.Parse(id)).Count != 0)
        {
            page += "<td>";
            page += "<a href=ng2.aspx?id=" + id + "&mp3=" + id + ">";
            page+= "<img src=Bilder/xmlaou.png border=0 alt=XML_vorhanden height=55></a></td>";
            page += "<td><a href=xy.aspx?" + id + " target='blank'>2431 Vorschau</a></td>";
        }
        string wochentagId = gn1(id, "gn2", 0);
        string retaurantId = gn1(wochentagId, "gn2", 0);
        string MusterId = "0";
        if (mp3_adabtor.GetDataByResIdArt(int.Parse(retaurantId), 9).Count != 0)//muster
        {
            MusterId = mp3_adabtor.GetDataByResIdArt(int.Parse(retaurantId), 9)[0]["gn2"].ToString();
            //page += "<td><a href=ng2.aspx?id=" + id + "&copiemp3=" + MusterId + "><img src=Bilder/posteingang.png border=0 alt=XML_vorhanden height=50></a></td> ";
            page += "<td>";
            page += "<form action=ng2.aspx method=post>  ";
            page += "<input type=text name=copiemp3_2459 value=" + MusterId + ">";
            page += "<input type=hidden name=neue_art value=9>";
            page += "<input type=hidden name=id size=30 value=" + id + ">";
            page += "<input type=submit value='Time Muster 2459_b'>";
            page += "</form>";
            page += "</td>";
        }
        
        //string vater = gn1(id, "gn2", 0);
        //string opa = gn1(vater, "gn2", 0);
        //string mp3 = ta_hauptMp3.GetDataByResId(int.Parse(opa))[0]["mp3"].ToString();
        //string foto_id_s = mp3.Split('~')[7].Split('^')[1];
        
        page += "<td>";
        page += "<form action=ng2.aspx method=post>  ";
        page += "<input type=hidden name=2414 size=10 value=" + MusterId + ">";
        //page += "<input type=text name=2414 size=10 value=" + foto_id_s.Split('#')[i] + ">";
        page += "<input type=hidden name=id size=30 value=" + id + ">";
        page += "<input type=submit value='2414 muster an alle'>";
        page += "</form>";
        page += "</td>";
            
        page += "</tr>";
        page += "</table>";
        page += "<table>";
        return page;
    }
    protected string webmaske34_Alle_Objekte(string page)
    {
        if (Request["gn4V"] != null) page += "</tr><tr><td><table>Ctb2495: " + GOB("34*", gn1(id, "g2", 0) + "*", "Update*", "25*", "UZHead", "gn1") + "</table></td></tr><tr>";
        else
        {
            page += "</tr><tr><td>C2496: " + MZ2(1, id, 1, "", 1, 4, "r", VaterId) + "</td>";
        }
        if (G4.Gn2Gn4(int.Parse(id),34).Count==0&&G4.Gn2Gn4(int.Parse(id),26).Count==0)
        {
            page += "<td><table>" + MZelle22(id, "ng2.C_2524 Creat Restorant", 0, "", 1, "&creatR=creatR", 0, "", 4) + "</table></td>";
            
        }
        page += "</tr></table></table></table><table border=0><tr>";
        page += "<td>" + GOB("34*", "", "Eintrag*", "40*", "IZHead", "gn1") + "</td>";
        page += "<td>" + GOB("109*", "0*", "PlattForm:*", "20*", "IZHead", "gn1")+ "</td>";
        //28,11,13 page += "<td>" + GOB("118*", "0*", "titelliste:*", "10*", "1*", "IZHead", "gn1") + "</td></tr></table>";
        page += "</table>";
        page += "<table valign=top border=1>";
        page += "<tr>";
        page += "<td><a href=ng2.aspx?id=" + id + "&mail_center_2500=C2500> 2500 Zeige Emails und Fax informationen </a></td><td> </td>";
        page += "<td><a href=ng2.aspx?id=" + id + "&update_html_txt_alle_2501=C2501> 2501 Export HTML 2016</a></td>";
        page += "<td valign=top colSpan=10>" + feiertage_fuctn() + "</td>";
        page += "</tr>";
        page += "<tr>";
        page += "</table>";
        page += "<table valign=top >";
        page += "<td>" + OFP2(1, 1, "", id, "34*26*", "0", 1, 0, "23*83*84*", "0", 0, 0, "", 1, "elemente.png  height=50  width=110 alt=Elemente ") + "</td>";
        page += "<td valign=top>" + OFP2(0, 0, "", id, "102*", "", 0, 1, "", "", 0, 0, "", 0, "personal.png height=50  width=110 alt=Personal") + "</td>";
        page += "<td valign=top>" + OFP2(0, 1, "<a href=ng2.aspx?id=" + id + "&k11=k11><img src=Bilder/disk.png alt='zeitCopie' height=50  width=55></a>", id, "109*", "", 1, 1, "", "", 0, 0, "", 0, "werbung.png height=50  width=110 alt=Werbung ") + "</td>";
        if (pArt == 87)
        {
            page += "<td valign=top>" + personalbaum() + "</td>";
        }
        page += "</tr>";
        page += "</table>";
        if (pArt == 89)
            page = Adminpersonalbaum(page);
        return page;
    }
    protected string feiertage_fuctn()// OeffnungsZeit z.B. von 08:00 bis 22:00
    {
        string page = "Format:   17/1;31/12;5/2";
        string feiertage_string = "";
        try//update
        {
            feiertage_string = Gn2Gn4(id, 131, "g2", 0);
            string freitag_id = Gn2Gn4(id, 131, "gn1", 0);
            page += "<form action=ng2.aspx method=post>  ";
            page += "<input type=hidden name=id value=" + id + ">";
            page += "<input type=hidden name=update_feiertag  value=update_feiertag>";
            page += "<input type=hidden name=update_id value=" + freitag_id + ">";
            page += "<input type=textarea name=feiertage_string  size=150 value=" + feiertage_string + ">";
            page += "<input type=submit value='Update Feiertag Eintrag 2412'>";
            page += "</form>";
        }
        catch //insert
        { 
            feiertage_string = "";
            page = "<form action=ng2.aspx method=post>  ";
            page += "<input type=hidden name=insert_feiertag  value=insert_feiertag>";
            page += "<input type=hidden name=id value=" + id + ">";
            page += "<input type=text name=feiertag_string  size=30 height=40px value=" + feiertage_string + ">";
            //page += "<input type=hidden name=dopoId value=" + id + ">";

            page += "<input type=submit value='Insert Feiertag Eintrag 2424'>";
            page += "</form>";
        };
        
        return page;
    }
    int gesamtsaetze_feirtage=0;
    protected void finder_26 (int start_id,string new_value)//von 17.11.2013 reinig den g2 von herrenlosen datensaetze
    {
        for (int i = 0; i < G4.GetDataByG2(start_id).Count; i++)
        {
            string g2 = G4.GetDataByG2(start_id)[i]["g2"].ToString();
            string gn1 = G4.GetDataByG2(start_id)[i]["gn1"].ToString();
            string gn4 = G4.GetDataByG2(start_id)[i]["gn4"].ToString();
            if (gn4 == "26")//retoran
            {
                update_hauptMp3_web_options_reserve10(int.Parse(gn1), new_value);
                    gesamtsaetze_feirtage++;
            }
            finder_26(int.Parse(gn1), new_value);
        }
    }
    protected void update_hauptMp3_web_options_reserve10(int start_id, string new_value)//von 17.11.2013 reinig den g2 von herrenlosen datensaetze
    {
        try
        {
            string old_haupt_mp3 = ta_hauptMp3.GetDataByResId(start_id)[0]["mp3"].ToString();
            old_haupt_mp3 = old_haupt_mp3;
            /*
             */
            string update_value = "";
            for (int i = 0; i < old_haupt_mp3.Split('~').Length - 1; i++)
            {
                if (i == 16)
                {
                    string new_web_option = "";
                    string old_web_options = old_haupt_mp3.Split('~')[i];
                    int chahhnta = old_haupt_mp3.Split('~')[i].Split('|').Length;// = old_haupt_mp3.Split('~')[i];
                    //update old mp3 web_options
                    if (chahhnta == 21)
                    {
                        old_web_options += "urlaub: z.B.(24/12:3/1)^0/0:0/0|";
                        old_web_options += "reserve12:^0|";
                        old_web_options += "reserve13:^0|";
                        old_web_options += "reserve14:^0|";
                        old_web_options += "reserve15:^0|";
                        old_web_options += "reserve16:^0|";
                        old_web_options += "reserve17:^0|";
                        old_web_options += "reserve18:^0|";
                        old_web_options += "reserve19:^0|";
                        old_web_options += "reserve20:^0|";
                    }
                    for (int i2 = 0; i2 < old_web_options.Split('|').Length - 1; i2++)
                    {
                        if (i2 == 19)
                        {
                            new_web_option += "reserve10:^" + new_value + " |";
                        }
                        else
                            new_web_option += old_web_options.Split('|')[i2] + "|";
                    }
                    new_web_option = new_web_option;
                    update_value += new_web_option + "~";
                }
                else
                    update_value += old_haupt_mp3.Split('~')[i] + "~";
            }
            ta_hauptMp3.UpdateQueryMp3(update_value, start_id);
            //string path_server2 = Server.MapPath(@"~/fsw/ablage/" + start_id.ToString());
            //string antwort = ny_cls.ccl_karte.export_html_alt(start_id.ToString(), path_server2);
            //string antwort = export_html.ftp.export_html(start_id.ToString());
            int update_fertig = 0;
        }
        catch { int hhh2 = 1; };
    }
    string extern_samel_hmp3 = "";
    protected void finder_27(int start_id)
    {
        for (int i = 0; i < G4.GetDataByG2(start_id).Count; i++)
        {
            string g2 = G4.GetDataByG2(start_id)[i]["g2"].ToString();
            string gn1 = G4.GetDataByG2(start_id)[i]["gn1"].ToString();
            string gn4 = G4.GetDataByG2(start_id)[i]["gn4"].ToString();
            if (gn4 == "26")//retoran
            {
                extern_samel_hmp3 += open_res_nach_unten_tr(int.Parse(gn1));
            }
            finder_27(int.Parse(gn1));
        }
        //return value;
    }
    protected string open_res_nach_unten_tr(int start_id)
    {
        string antwort = "";
        antwort += "<tr>";
        string mp3 = ta_hauptMp3.GetDataByResId(start_id)[0]["mp3"].ToString();
        //musterStd
        string muster_id = Gn2Gn4(start_id.ToString(), 83, "gn1", 0);
        string muster_std_id = Gn2Gn4(muster_id, 86, "gn1", 0);
        antwort += "<td><a href=xy.aspx?" + muster_std_id + " target='blank'>muster</a></td>";
        //logo
        antwort += "<td>";
        try
        {
            antwort += "<img src=http://pics.alice-eur.it/album_privat/&" + start_id.ToString() + ".png  height='50'>";
        }
        catch { antwort += "keine Angabe C2609"; antwort += ""; }
        antwort += "</td>";

        for (int i = 0; i < mp3.Split('~').Length - 1; i++)
        {
            if (i == 0)//name 2604
            {
                antwort += "<td>";
                try
                {
                    antwort += mp3.Split('~')[i];
                }
                catch { antwort += "keine Angabe C2609"; antwort += ""; }
                antwort += "</td>";
            }
            if (i == 1)//ID
            {
                antwort += "<td>";
                try
                {
                    antwort += "<a href=http://yousystem2000.de/?" + mp3.Split('~')[i] + "> www.home.de </a> --- <a href=ng2.aspx?id=" + mp3.Split('~')[i] + ">" + mp3.Split('~')[i] + "</a>";
                }
                catch { antwort += "keine Angabe C2623"; antwort += ""; }
                antwort += "</td>";
            }
            if (i == 12)//Fax aktiv
            {
                antwort += "<td>";
                try
                {
                    antwort += mp3.Split('~')[i].Split('|')[6].Split('^')[1];
                }
                catch { antwort += "keine Angabe C2630"; antwort += ""; }
                antwort += "</td>";
            }
            if (i == 16)//plattform
            {
                antwort += "<td>";
                try
                {
                    antwort += mp3.Split('~')[i].Split('|')[15].Split('^')[1];
                }
                catch { antwort += "keine Angabe C2649"; antwort += ""; }
                antwort += "</td>";
            }
            if (i == 17)//partner mail 2619
            {
                antwort += "<td>";
                try
                {
                    antwort += mp3.Split('~')[i].Split('!')[5].Split('|')[0];
                }
                catch { antwort += "keine Angabe C2640"; antwort += ""; }
                antwort += "</td>";
            }
            if (i == 17)//Fax nummer
            {
                antwort += "<td>";
                try
                {
                    antwort += mp3.Split('~')[i].Split('!')[3];
                }
                catch { antwort += "keine Angabe C2650"; antwort += ""; }
                antwort += "</td>";
            }
            if (i == 17)//restaurant mails
            {
                antwort += "<td>";
                try
                {
                    antwort += mp3.Split('~')[i].Split('!')[5].Split('|')[1] + "<br>";
                }
                catch { antwort += "keine Angabe C2660"; antwort += "<br>"; }
                try
                {
                    antwort += mp3.Split('~')[i].Split('!')[5].Split('|')[2] + "<br>";
                }
                catch { antwort += "keine Angabe C2664"; antwort += "<br>"; }
                try
                {
                    antwort += mp3.Split('~')[i].Split('!')[5].Split('|')[3] + "<br>";
                }
                catch { antwort += "keine Angabe C2669"; antwort += "<br>"; }
                try
                {
                    antwort += mp3.Split('~')[i].Split('!')[5].Split('|')[4] + "<br>";
                }
                catch { antwort += "keine Angabe C2674"; antwort += "<br>"; }
                antwort += "</td>";
            }
        }
        antwort += "<tr>";
        return antwort;
    }
    protected void update_html_txt_alle_2501(int start_id)
    {
        for (int i = 0; i < G4.GetDataByG2(start_id).Count; i++)
        {
            string g2 = G4.GetDataByG2(start_id)[i]["g2"].ToString();
            string gn1 = G4.GetDataByG2(start_id)[i]["gn1"].ToString();
            string gn4 = G4.GetDataByG2(start_id)[i]["gn4"].ToString();
            if (gn4 == "26")//retoran
            {
                //export_html.ftp.export_html(gn1);
                //extern_samel_hmp3 += open_res_nach_unten_tr(int.Parse(gn1));
            }
            update_html_txt_alle_2501(int.Parse(gn1));
        }
    }
    protected string webmaske25(string page)// OeffnungsZeit z.B. von 08:00 bis 22:00
    {
        
        if (Request["gn4V"] != null)
            page += "</tr><tr><td style= background-color:#a7c7e8><table>" +
                GOB("25*", gn1(id, "g2", 0), "3012 von-bis*", "15*", "UZHead", "gn1") + "</table></td></tr><tr>";
        else
            page += "<table border=1><tr><td>" + MZ2(1, id, 1, "", 1, 4, "32*", VaterId);
        
        
        string wochentagId = gn1(id, "gn2", 0);
        string retaurantId=gn1(wochentagId, "gn2", 0);
        string MusterId = "0";
        try
        {
            MusterId = mp3_adabtor.GetDataByResIdArt(int.Parse(retaurantId), 9)[0]["gn2"].ToString();
        }
        catch { MusterId = "0"; }
                    page += "<td>";
                    page += "<form action=ng2.aspx method=post>  ";
                    page += "<input type=text name=copiemp3_2459 value=" + MusterId + ">";
                    page += "<input type=hidden name=neue_art value=8>";
                    page += "<input type=hidden name=id size=30 value=" + id + ">";
                    page += "<input type=submit value='Time Muster 2459'>";
                    page += "</form>";
                    page += "</td>";
        if (mp3_adabtor.GetDataByGn2(int.Parse(id)).Count == 0)
        {
            page += "<td valign=center><a  href=pic.aspx?id=" + id + "&von=55>2596 deaktiv</a></td>";
        }
        if (mp3_adabtor.GetDataByGn2(int.Parse(id)).Count != 0)
        {
            page += "<td><a href=xy.aspx?" + id + " target='blank'>1456 Vorschau</a></td>";
        }
        page += "</tr></table>";

        page += "<table>";
        return page;
    }
    protected string webmaske106(string page)
    {
        if (Request["gn4V"] != null)
            page += "<td><table>" + GOB("106*104*", gn1(id, "g2", 0) + "*" + Gn2Gn4(id, 104, "g2", 0) + "*", "Zutat*Option Gruppe*", "25*10*",
                "UZHead", "gn2") + "</table></td></tr><tr>";

        return page;
    }
    protected string webmaske28(string page)
    {
        if (Request["gn4V"] != null)
            page += "<td><table>" + GOB("28*29*30*111*", gn1(id, "g2", 0) + "*" +
                Gn2Gn4(id, 29, "g2", 0) + "*"+
                Gn2Gn4(id, 30, "g2", 0) + "*"+
                Gn2Gn4(id, 111, "g2", 0) + "*",
                " webmaske28 PLZ:*Mindes Preis*Aufpreis*Land*", "10*1*1*1*",
                "UZHead", "gn2") + "</table></td></tr><tr>";
        return page;
    }
    protected string webmaske104(string page)
    {
        if (Request["gn4V"] != null)
            page += "</tr><tr><td style= background-color:#a7c7e8><table>" + GOB("104*", gn1(id, "g2", 0) + "*", "Optional Beilage*", "25*",
                "UZHead", "gn1") + "</table></td></tr><tr>";
        else
            page += "</tr><tr><td style= background-color:#a7c7e8>" + MZ2(1, id, 1, "", 1, 4, "104", VaterId) + gn1(id, "gn4", 0) + "</td></tr><tr>";
        page += "<td><table>" + GOB("106*", "*", "OptionEnkel*", "25*","IZHead", "gn1") + "</table></td></tr><tr>";
        page += "<td><table>" + OFP2(0, 0, "Innerhalt, erste ist standart-umowa", id, "106*", "0", 0, 1, "0", "0", 1, 1, "", 0,"") + "</td>";
        return page;
    }
    protected string webmaske118(string page)
    {
        if (Request["gn4V"] != null)
            page += "</tr><tr><td style= background-color:#a7c7e8><table>" + GOB("118*", gn1(id, "g2", 0) + "*", "Quartiere*", "25*",
                "UZHead", "gn2") + "</table></td></tr><tr>";
        else
            page += "</tr><tr><td style= background-color:#a7c7e8>" + MZ2(1, id, 1, "", 1, 4, "118", VaterId) + gn1(id, "gn4", 0) + "</td></tr><tr>";
        return page;
    }
    protected string personalbaum()
    {
        string page = "<table border=1><tr><td>";
        page += GOB("91*92*", "0*0*", "WerbeAgentur:*Psw*", "1*1*","IZP", "gn3");
        page += "</td></tr><tr><td>";
        page += GOB("93*94*", "0*0*", "WebAgent:*Psw*", "1*1*","IZP", "gn3");
        page += "</td></tr><tr><td>";
        page += GOB("89*90*", "0*0*", "Admin:*Psw*", "1*1*", "IZP", "gn1");
        page += "</td></tr><tr><td>";
        page += GOB("95*96*", "0*0*", "Web& WerbungAgent:*Psw*", "1*1*", "IZP", "gn3");
        page += "</td></tr><tr><td>";
        page += GOB("97*98*", "0*0*", "GrafikAgent:*Psw*", "1*1*", "IZP", "gn3") + "";
        page += "</td></tr></table>";
        page += "<table border=1><tr><td>";
        page += "" + OFP2(1, 1, "Werbeagentur-okg799", person().ToString(), "91*", "92*", 1, 1, "", "", 0, 0, "&addP=" + id, 0, "personal.png height=50  width=110 alt=Zugangspersonal") + "";
        page += "</td></tr><tr><td>";
        page += "" + OFP2(1, 1, "WebAgent-9988", person().ToString(), "93*", "94*", 1, 1, "", "", 0, 0, "&addP=" + id, 0, "personal.png height=50  width=110 alt=Zugangspersonal") + "";
        page += "</td></tr><tr><td>";
        page += "" + OFP2(1, 1, "Admin-oopp", person().ToString(), "89*", "90*", 1, 1, "91*93*", "", 0, 0, "&addP=" + id, 0, "personal.png height=50  width=110 alt=Zugangspersonal") + "";
        page += "</td></tr><tr><td>";
        page += "" + OFP2(1, 1, "Web&WerbungAgent-ddss", person().ToString(), "95*", "", 1, 1, "", "", 0, 0, "&addP=" + id, 0, "personal.png height=50  width=110 alt=Zugangspersonal") + "";
        page += "</td></tr><tr><td>";
        page += "" + OFP2(1, 1, "GrafikAgent-zzxx", person().ToString(), "97*", "98*", 1, 1, "", "", 0, 0, "&addP=" + id, 0, "personal.png height=50  width=110 alt=Zugangspersonal") + "";
        page += "</td></tr></table>";
        return page;
    }
    protected string Adminpersonalbaum(string page)
    {
        page += "<table border=1><tr><td>";
        page += GOB("91*92*", "0*0*", "WerbeAgentur:*Passwort*", "10*10*", "IZAP", "gn1");
        page += "</td></tr><tr><td>";
        page += GOB("93*94*", "0*0*", "WebAgent:*Passwort*", "10*10*", "IZAP", "gn1");
        page += "</td></tr><tr><td>";
        page += GOB("95*96*", "0*0*", "Web&WerbungAgent:*Passwort*", "10*10*", "IZAP", "gn1");
        page += "</td></tr><tr><td>";
        page += GOB("97*98*", "0*0*", "GrafikAgent:*Passwort*", "10*10*", "IZAP", "gn1") + "";
        page += "</td></tr></table>";
        return page;
    }
    protected string OFP2(int herfEnkel, int herf, string titel, string listId, string gn4bacheha, string gn4Vbache, int bacheU, int bacheD, string gn4naveha, string AVNave, int gn4V, int gn4VK, string hMK, int Sort0nein1ja, string Titelbild_Name)
    {
        int gn2 = int.Parse(listId);
        string ft = "<td valign=top><Table border=1  valign=top><tr><td><img src=Bilder/" + Titelbild_Name + ">" + titel + "</td></tr><td></td>";
        //Schleife Format title
        string[] preisvater = new string[G4.Gn2Gn4(gn2, gn4V).Count];
        for (int i41 = 0; i41 < G4.Gn2Gn4(gn2, gn4V).Count; i41++)
        {
            string Formattitle = G4.Gn2Gn4(gn2, gn4V)[i41]["g2"].ToString();
            string ftid = G4.Gn2Gn4(gn2, gn4V)[i41]["gn1"].ToString();
            preisvater[i41] = ftid;
            ft += "<td>" + MZ2(0, ftid, bacheU, "", 1, 4, "39*", VaterId) + "</td>";
        }
        ft += "</tr>";
        string[] gn4bache = gn4bacheha.Split('*');//
        for (int ih = 0; ih < gn4bache.Length - 1; ih++)
        {
            string[] alfabetisch = new string[G4.Gn2Gn4(gn2, int.Parse(gn4bache[ih])).Count];//G4.Gn2Gn4(gn2, int.Parse(gn4bache[ih])).Count;//
            for (int i = 0; i < alfabetisch.Length; i++)//string Array jam mikone
            {
                string sid = Gn2Gn4(gn2.ToString(), int.Parse(gn4bache[ih]), "gn1", i);
                string SpeiseNo = G4.Gn2Gn4(gn2, int.Parse(gn4bache[ih]))[i]["g2"].ToString();
                alfabetisch[i] = SpeiseNo + "^" + sid + "^";
            }
            if (Sort0nein1ja == 1)//sortieren 
            {
                Array.Sort(alfabetisch);
            }
            int ADAD = G4.Gn2Gn4(gn2, int.Parse(gn4bache[ih])).Count;
            
            for (int i = 0; i < alfabetisch.Length; i++)//string Array jam mikone
            {
                ft += "<tr><td>";
                string[] doshakhe = alfabetisch[i].Split('^');
                string sid = doshakhe[1];//Gn2Gn4(gn2.ToString(), int.Parse(gn4bache[ih]), "gn1", i);
                //string SpeiseNo = nva(G4.Gn2Gn4(gn2, int.Parse(gn4bache[ih]))[i]["gb"].ToString());
                ft += MZ2(herf, sid, bacheU, hMK, bacheD, 4, gn4Vbache, id);
                string pasrallelOhneTd = "";
                string[] gn4nave = gn4naveha.Split('*');//
                //NAVEHA
                for (int igh = 0; igh < gn4nave.Length - 1; igh++)
                {
                    for (int ifd = 0; ifd < G4.Gn2Gn4(int.Parse(sid), int.Parse(gn4nave[igh])).Count; ifd++)
                    {//angeklebte zutaten 40 und privatzutaten
                        pasrallelOhneTd += MZ2(herfEnkel, Gn2Gn4(sid, int.Parse(gn4nave[igh]), "gn1", ifd), 0, "", 0, 2, AVNave, VaterId);
                    }
                }
                ft += pasrallelOhneTd + "<form action=ng2.aspx method=post>";
                string preis = "leer00";
                int sis = G4.Gn2Gn4(int.Parse(sid), gn4VK).Count;
                ft += "</tr>";
            }
        }
        ft += "<tr><td><input name=id type=hidden value=" + id + "></td></tr></table><input type=submit value='B'></form></td>";
        return ft;
    }
    protected bool nummertest(object var)
    {
        string var2 = var.ToString();
        try
        {

            Convert.ToInt64(var.ToString());
            return true;
        }
        catch (FormatException)
        {
            return false;
        }
    }
    protected string Suchbegrife(string StartId)
    {
        string werbung1 = "";
        if (G4.Gn1(int.Parse(StartId)).Count != 0)
        {
            werbung1 += Suchbegrife(gn1(StartId, "gn2", 0));
        }
        for (int i = 0; i < G4.Gn2Gn4(int.Parse(StartId), 118).Count; i++)
        {
            string werbungId = Gn2Gn4(StartId, 118, "gn1", i);
            werbung1 += MZ2(1, werbungId, 0, "&addtitel=" + id + "", 0, 2, "gn1", id);
            //werbung1 += nva(Gn2Gn4(StartId, 118, "gb", i)) + "<br>";
        }/**/
        return werbung1;
    }
    public string RemoveDoubleSpaceCharacters(string text)
    {
        return System.Text.RegularExpressions.Regex.Replace(text, "[ ]+", "");
    }
    public void Page1(int newId,int art,string sender)//sender ist nur zum kontrolieren da
    {
            string page0 = "";
            string vater = "";
            try
            {
                vater = gn1(newId.ToString(), "gn2", 0);
                vater = RemoveDoubleSpaceCharacters(vater);
                page0 = gn1(vater.ToString(), "page1", 0);
                //page0 = Gn2Gn4(vater, 20, "g2", 0);
            }
            catch { page0 = ""; }
            string page1 = vater + "^";
            page0 = RemoveDoubleSpaceCharacters(page0);
            page1 = RemoveDoubleSpaceCharacters(page1);
            string page = page0 + page1;
            page = RemoveDoubleSpaceCharacters(page);
            //IZpage1(page0 + page1, newId, -2, 20, -1);
            GU.UpdateQueryPage1(page, newId);
            //IZ(page0 + page1, newId, -2, 20, 2008);
    }
    protected string Page1Mixer(string wurm)
    {
        string page1 = "";
        string art = gn1(id, "gn4", 0);
        string[] Name = wurm.Split('^');
        for (int i = 0; i < Name.Length - 1; i++)
        {
            //page1 += "<td>" + MZelle(Name[i], nva(gn1(Name[i], "gb", 0)), 0, "", 1, "", 0, "", 4) + "</td>";
            page1 += "<td>" + MZ2(1, Name[i], 0, "", 0, 4, "", VaterId) + "</td>";
        }
        return page1;

    }
    public string Gn2Gn4(string gn2, int gn4, string g, int i)
    {
        /*if (G4.Gn2Gn4(int.Parse(gn2), gn4).Count == 0)//17.11.13
        {
            alert("der datensatz mit Vater " + gn2 + " und Art " + gn4 + " gibt es nicht!");//17.11.13
            return "0";
        }
        else//17.11.13*/
            return G4.Gn2Gn4(int.Parse(gn2), gn4)[i][g].ToString();
    }
    public string gn1(string gn1, string g, int i)

    {
        try// nur um fehler auszuschliessen 28.11.13
        {
            string ret = G4.Gn1(int.Parse(gn1))[i][g].ToString();
            return ret;
        }
        catch
        {
            alert("id nicht gefunden oder wurde gezip gn1=(" + gn1 + ")");
            //break;
        }
        return id;
    }
    //liste und hilfsliste
    protected string GOB(string ArtValue, string MzInsertValue, string titelValue, string boxsizeValue, string UoderI, string dopoId)
    {//schiesst direkt in IZHaed
        string stein = "";
        //stein += "<table border=0><tr>";
        stein += "<form action=ng2.aspx?id="+id+" method=post>";
        //stein += "<input name=id value= " + id + " type=hidden>";
        //stein += "<input name=" + IfId + " value= " + id + " type=hidden>";
        stein += "<input name=UoderI value= " + UoderI + " type=hidden>";
        stein += "<input name=dopoId value= " + dopoId + " type=hidden>";
        string[] Name = MzInsertValue.Split('*');
        string[] titel = titelValue.Split('*');
        string[] boxsize = boxsizeValue.Split('*');
        string[] Art = ArtValue.Split('*');
        //string[] IS = ISV.Split('*');
        //stein += "<td><input type=submit src=Bilder/logout.png value=" + UoderI + ">";
        stein += "<td valign=top><input  type=image  onmouseover=(src='Bilder/totenkopf2.gif') onmouseout=(src='Bilder/totenkopf.gif') src=Bilder/totenkopf.gif border=1 height=30 width=10  value=submit value=" + UoderI + " alt='Submit feedback'></td>";
        for (int i = 0; i < Art.Length - 1; i++)
        {
            stein += "<input name=ArtValue value= " + Art[i] + " type=hidden>";//bekommt ein natuerliches koma und wird in izhaed gedreht.V= gbimku
            //stein += "<input name=ISValue value= " + IS[i] + " type=hidden>";// geloescht am 24.12.13, kein Empfaenger
            stein += "<td valign=top>";
            stein += titel[i];
            stein += "</td >";
            stein += "<td valign=top>";
            if (titel[i] == "")
                stein += "<input name=IZHead size=" + boxsize[i] + " value='" + Name[i] + "'  type=hidden>";// V= olatyu
            else
                stein += "<input name=IZHead size=" + boxsize[i] + " value='" + Name[i] + "'>";// V= olatyu
            stein += "</td>";
        }
        stein += "</form>";
        //stein += "</tr><table>";
        return stein;
    }
    protected string MZ2(int herf, string MzId, int update, string hrefValue, int delet, int font, string gn4V, string IdDopoDell)
    {
        //string[] dom = gn4V.Split('*'); delete 29.12.13
        string zelle = "<table border=1><tr>";
        if (update == 1)
        {
            zelle += "<td><a href=ng2.aspx?id=" + MzId + "&gn4V=" + gn4V + ">" +
                          "<img src=Bilder/feder.png  border=0 height=30  width=30 alt=Bearbeiten>" +
                    "</a></td>";
        }
        string[] gn4 = gn4V.Split('*');
        zelle += "<td>";
        zelle += "<font size =" + font + ">";
        if (herf == 1)
            zelle += "<a href=ng2.aspx?id=" + MzId + hrefValue + ">";
        zelle += gn1(MzId,"g2",0);
        if (herf == 1)
            zelle += "</a>";
        zelle += "</font>";
        zelle += "</td>";
        //for (int i = 0; i < gn4.Length - 1; i++)
        for (int i = 0; i < gn4.Length - 1; i++)
        {
            zelle += "<td>";
            zelle += "<font size =" + font + ">";
            //neue Generation 
            for (int i2 = 0; i2 < G4.Gn2Gn4(int.Parse(MzId),int.Parse(gn4[i])).Count; i2++)
            {
                zelle += Gn2Gn4(MzId,int.Parse(gn4[i]),"g2",i2);
            }
            zelle += "</font>";
            zelle += "</td>";
        }
        if (delet == 1)
        {
            zelle += "<td>" +
                   //"<a href=ng2.aspx?id=" + MzId + "&Dell=fd>" +
                   "<a href=ng2.aspx?id=" + MzId + "&Dell=" + IdDopoDell + ">" +
                       "<img src=Bilder/delete.png border=0 height=30  width=30 alt=Delete>" +
                   "</a>" +
                "</td>";
        }
        if (show_aktive_mp3 == "1")
        {
            if (mp3_adabtor.GetDataByGn2(int.Parse(MzId)).Count != 0)
            {
                //string zeit_id = mp3_adabtor.GetDataByGn2(int.Parse(MzId))[]
                zelle += "<td>3544 Aktiv id= " + MzId + "</td>";
                    //"<a href=ng2.aspx?id=" + MzId + "&Dell=fd>" +
                       //"<a href=ng2.aspx?id=" + MzId + "&Dell=" + IdDopoDell + ">" +
                           //"<img src=Bilder/musterxml.png border=0 height=30  width=30 alt=Delete>" +
                       //"</a>" +
                    
            }
        }
        zelle += "</tr></table>";
        return zelle;
    }
    protected string MZelle22(string MzId, string MzNameV, int update, string reqUpdateValue, int href, string hrefValue, int delet, string reqDeleteValue, int font)
    {
        string zelle = "<table><tr>";
        if (update == 1)
        {
            zelle = "<td><a href=ng2.aspx?id=" + id + "&" + reqUpdateValue + "=" + MzId + ">" +
                          "<img alt=alt src=Bilder/rbEdit.gif>" +
                    "</a></td>";
        }
        string[] Name = MzNameV.Split('*');
        for (int i = 0; i < Name.Length; i++)
        {
            zelle += "<td>";
            if (href == 1)
            {
                zelle += "<font size =" + font + ">";
                zelle += "<a href=ng2.aspx?id=" + MzId + hrefValue + ">";
                zelle += Name[i];
                zelle += "</a>";
                zelle += "</font>";
            }
            else
            {
                zelle += "<font size =" + font + ">";
                zelle += Name[i];
                zelle +="</font>";
            }
            zelle += "</td>";
        }
        if (delet == 1)
        {
            zelle += "<td>" +
                   "<a href=ng2.aspx?id=" + id + "&" + reqDeleteValue + "=" + MzId + ">" +
                       "<img src=Bilder/delete.png  height=50  width=110 alt=Delete>" +
                   "</a>" +
                "</td>";
        }
        zelle += "</tr></table>";
        return zelle;
    }
    //Update
    protected void UZHead(string UpdateId,string gn4V,string AtributenV,string dopoId) 
    {
        string[] gn4 = gn4V.Split(',');
        string[] Atributen = AtributenV.Split(',');
        if (gn4V != "25" && gn4V != "131")
            UZ(UpdateId, Atributen[0]);
        for (int i = 0; i < gn4.Length-1; i++)
		{
            string AtributenId = Gn2Gn4(UpdateId, int.Parse(gn4[i + 1]), "gn1", 0);
            string AtributenArt = Gn2Gn4(UpdateId, int.Parse(gn4[i + 1]), "gn4", 0);
            if (AtributenArt == "127")//subDomain Ausnahme
            {
                string subdomain = Gn2Gn4(UpdateId, int.Parse(gn4[i + 1]), "g2", 0);
                int tedadeDogholuha = 0;//strat timing
                string AlleSubDomaineId = "";
                for (int i2 = 0; i2 < G4.GetDataBy127().Count; i2++)
                {
                    string AlleSubDomaine = G4.GetDataBy127()[i2]["g2"].ToString();
                    if (subdomain == AlleSubDomaine)
                    {
                        tedadeDogholuha++;
                        AlleSubDomaineId = G4.GetDataBy127()[i2]["gn2"].ToString();
                    }
                }
                if (tedadeDogholuha >= 1 && AlleSubDomaineId != id)//1min 10 sec  1min20sec
                {
                    UZ(AtributenId, "leider vergeben");
                }
                else
                {
                    UZ(AtributenId, Atributen[i + 1]);
                }
            }
            else
                UZ(AtributenId, Atributen[i + 1]);
        }
        if (gn4V == "25")
        {
            string von = "";
            string bis = "";
            int nichtOk = 1;
            string zeit = AtributenV;
            

            try//time test
            {
                if (zeit.Split(' ').Length != 2)
                {
                    alert("uzheadd 3879 Zeitformat ist falsch");
                    nichtOk = 0;
                }
                else
                {
                    von = zeit.Split(' ')[0];
                    bis = zeit.Split(' ')[1];
                }
                DateTime.Parse(von);DateTime.Parse(bis);
            }
            catch
            {
                alert("uzheadd 3945 ist kein Zeitformat");
                nichtOk = 0;
            }

            //UZ(UpdateId, Atributen[0]);
            if (nichtOk == 1)
            {
                string vater = gn1(id, "gn2", 0);
                string resId = gn1(vater, "gn2", 0);
                string hauptmp3 = ta_hauptMp3.GetDataByResId(int.Parse(resId))[0]["mp3"].ToString();
                string alle_zeiten = hauptmp3.Split('~')[2];
                string update_zeiten = "";
                for (int i = 0; i < alle_zeiten.Split('#').Length - 1; i++)
                {
                    string Pizza_tag = "";
                    string gruppen_fuer_suchmaschiene = "";
                    try { Pizza_tag = alle_zeiten.Split('#')[i].Split('|')[4]; }
                    catch { Pizza_tag = Pizza_tag; }
                    try { gruppen_fuer_suchmaschiene = alle_zeiten.Split('#')[i].Split('|')[5]; }
                    catch { gruppen_fuer_suchmaschiene = gruppen_fuer_suchmaschiene; }
                    string zeitId = alle_zeiten.Split('#')[i].Split('|')[3];
                    if (int.Parse(zeitId) == int.Parse(id))//der Tag wurde gefunden
                        update_zeiten += alle_zeiten.Split('#')[i].Split('|')[0] + "|" + von + "|" + bis + "|" + id + "|" + Pizza_tag + "|" + gruppen_fuer_suchmaschiene + "|#";
                    else
                        update_zeiten += alle_zeiten.Split('#')[i] + "#";
                }
                string neue_mp3 = hauptmp3.Split('~')[0] + "~" +hauptmp3.Split('~')[1] + "~" +
                    update_zeiten + "~" +hauptmp3.Split('~')[3] + "~" +
                    hauptmp3.Split('~')[4] + "~" +hauptmp3.Split('~')[5] + "~" +hauptmp3.Split('~')[6] + "~" +hauptmp3.Split('~')[7] + "~" +hauptmp3.Split('~')[8] + "~" +hauptmp3.Split('~')[9] + "~" +hauptmp3.Split('~')[10] + "~" +hauptmp3.Split('~')[11] + "~" +hauptmp3.Split('~')[12] + "~" +hauptmp3.Split('~')[13] + "~" +hauptmp3.Split('~')[14] + "~" +hauptmp3.Split('~')[15] + "~" +hauptmp3.Split('~')[16] + "~" +hauptmp3.Split('~')[17] + "~";
                ta_hauptMp3.UpdateQueryMp3(neue_mp3, int.Parse(resId));
                //string path_server2 = Server.MapPath(@"~/fsw/ablage/" + resId);
                //string antwort = ny_cls.ccl_karte.export_html_alt(resId, path_server2);
                //string antwort = export_html.ftp.export_html(resId);
                UZ(UpdateId, Atributen[0]);
            }
        }
        id = gn1(id, dopoId, 0);
    }
    //insert
    protected void IZHead(int basis, string ArtValue, string MzInsertValue, string dopoId)
    {//IZHead(int.Parse(id), Request["ArtValue"], Request["IZHead"], Request["dopoId"]);<--ein Auszug aus ifationen.
        string[] Art = ArtValue.Split(',');// V= gbimku
        string[] Name = MzInsertValue.Split(',');// V= olatyu
        if (ArtValue == "25")//zeitfenster insertor
            insert_Zeit(MzInsertValue, basis, dopoId,0);
        else
        {
            for (int i = 0; i < Art.Length; i++)
            {
                string gemelliId = "";
                if (i == 0)// be tedade arthaye ke miad Gipfel insert mikone
                {// gipfel insertor
                    for (int ig = 0; ig < G4.Gn2Gn4(basis, int.Parse(Art[i])).Count; ig++)
                    {
                        string altekindervonbasis = Gn2Gn4(basis.ToString(), int.Parse(Art[i]), "g2", ig);
                        if (altekindervonbasis == Name[i])
                        {
                            //Yanee un objekt hastesh dige insert nakon, uni ke hast biar
                            gemelliId = Gn2Gn4(basis.ToString(), int.Parse(Art[i]), "gn1", ig);
                            id = gemelliId;
                        }
                    }
                    if (gemelliId == "")//age zwling nadare insert kon
                    {
                        //Name[i] = RemoveDoubleSpaceCharacters(Name[i]);
                        basis = IZ(Name[i], basis, -2, int.Parse(Art[i]), 2223, "IZHead");
                        GU.Ug3(basis, basis);// bis 26.11.13
                        //GU.Ug3(int.Parse(id), basis);// ab 26.11.13  // 27.11.13 es klapt mit reihenfolgetausch nicht
                        id = basis.ToString();//ID dopo insert ro miare ru insert shode
                    }
                }
                else// be tedade arthaye ke miad Atribut insert mikone
                {// atribut insertor
                    if (gemelliId == "")//age zwling nadare insert kon
                    {
                        //Name[i] = RemoveDoubleSpaceCharacters(Name[i]);
                        int neuSpeise = IZ(Name[i], basis, -2, int.Parse(Art[i]), 2232, "IZHead");
                        Page1(basis, int.Parse(Art[i]), "IZHead 2236");
                    }
                }
                if (gemelliId == "")//age zwling nadare insert kon
                    Page1(basis, int.Parse(Art[i]), "IZHead 2240");
                // az inja be baad zusatzt insert ausnahme miad baraye Format Speise Zutat FixZutat
            }
        }
        id = gn1(id, dopoId, 0);
    }
    protected void UZ(string gn1, string nva)
    {
        //int gb = ib(nva);
        GU.UpdateQueryG2(nva, int.Parse(gn1));
        //GU.Ugb(gb, int.Parse(gn1));
    }
    //[AjaxPro.AjaxMethod()]
    public int IZ(string g2, int gn2, int gn3, int gn4, int Gcop,string page20)
    {
        int gnew = int.Parse(G4.GN()[0]["gnew"].ToString());//bohrer ro peyda miokne
        GU.UpdateQueryInsertorGn1(gnew, gnew);//setzt den Key von gnew auf gn1
        Gi.IGi();// ye bohrer mizane
        GU.UGi(gn2, gn3, gn4, Gcop, 00, g2,page20, gnew);// updatesh mikone
        ////int gnew = int.Parse(G4.GN()[0]["gnew"].ToString());//bohrere jadido peyda mikone ro peyda miokne
        return gnew;
    }
    public void Reinigung(string id)
    {
        for (int i = 0; i < G4.Gn2Gn4(int.Parse(id), 23).Count; i++)
        {
            string tagId = Gn2Gn4(id, 23, "gn1", i);
            for (int i2 = 0; i2 < G4.Gn2Gn4(int.Parse(tagId), 25).Count; i2++)
            {
                string timeId = Gn2Gn4(tagId, 25, "gn1", i2);
                for (int i3 = 0; i3 < G4.Gn2Gn4(int.Parse(timeId), 35).Count; i3++)
                {
                    string gruppenId = Gn2Gn4(timeId, 35, "gn1", i3);
                    deletCenter(gruppenId, timeId);
                }
            }
        }
        for (int i = 0; i < G4.Gn2Gn4(int.Parse(id), 83).Count; i++)
        {
            string tagId = Gn2Gn4(id, 83, "gn1", i);
            for (int i2 = 0; i2 < G4.Gn2Gn4(int.Parse(tagId), 86).Count; i2++)
            {
                string timeId = Gn2Gn4(tagId, 86, "gn1", i2);
                int chandta = G4.Gn2Gn4(int.Parse(timeId), 35).Count;
                for (int i3i = 0; i3i < G4.Gn2Gn4(int.Parse(timeId), 35).Count; i3i++)
                {
                    string gruppenId = Gn2Gn4(timeId, 35, "gn1", i3i);
                    deletCenter(gruppenId, timeId);
                }
            }
        }
    }
    public void func_copiemp3_2459(string id, string musterStundedId,string neue_art)//07,12,13
    {
        string mp3_text = mp3_adabtor.GetDataByGn2(int.Parse(musterStundedId))[0]["mp3"].ToString();
        string restaurantId = gn1(musterStundedId, "gn2", 0);
        restaurantId = gn1(restaurantId, "gn2", 0);

        
        //string result = laden_kartenmpdul(id, new_mp3);
        string person_ = gn1(person().ToString(), "g2", 0);
        string tagId = gn1(id, "gn2", 0);
        string resId_ = gn1(tagId, "gn2", 0);
        int existens = mp3_adabtor.GetDataByGn2(int.Parse(id)).Count;
        if (existens != 0)//fuer uberschreibungen
        {
            
            mp3_adabtor.UpdateQuery_mp3(mp3_text, int.Parse(neue_art), DateTime.Now, person_, int.Parse(id));
        }
        else
        {
            mp3_adabtor.InsertQueryAll(mp3_text, int.Parse(id), int.Parse(neue_art), DateTime.Now, person_, int.Parse(resId_));
        }
        if (existens >= 2) alert("4014 fehler: es gibt mehr als ein(" + existens + ") mp3 fuer diese Zeitspanne! es kann die falsche ueberschriben worden sein");
        //string path_server2 = Server.MapPath(@"~/fsw/ablage/" + restaurantId);
        //string antwort = ny_cls.ccl_karte.export_html_alt(restaurantId, path_server2);
        //string antwort = export_html.ftp.export_html(restaurantId);
    }
//copiemp3
    public void muster_an_alle2414(string id, string musterStundedId, string neue_art)
    {//august 2016 roma
        string mp3_text = mp3_adabtor.GetDataByGn2(int.Parse(musterStundedId))[0]["mp3"].ToString();
        string restaurantId = gn1(musterStundedId, "gn2", 0);
        restaurantId = gn1(restaurantId, "gn2", 0);
        string result = ny_cls.ccl_karte.laden_kartenmpdul_web(mp3_text, "0", restaurantId);
        string result_mob = ny_cls.ccl_karte.laden_jquery_mob(mp3_text, "0", restaurantId);

        string person_ = gn1(person().ToString(), "g2", 0);
        string tagId = gn1(id, "gn2", 0);
        string resId_ = gn1(tagId, "gn2", 0);
        int becharkh = 0;// mp3_adabtor.GetDataByResIdArt(int.Parse(resId_), 8).Count;
        alert("C4311 vorsicht!\n werden alle Zeitfenster überschreiben \n Abbruch mit f5 Taste");
        for (int i = 0; i < G4.Gn2Gn4(int.Parse(resId_), 23).Count; i++)
        {
            string tages_id = G4.Gn2Gn4(int.Parse(resId_), 23)[i]["gn1"].ToString();
            for (int i2 = 0; i2 < G4.Gn2Gn4(int.Parse(tages_id), 25).Count; i2++)
            {
                string zeitfenster_id = G4.Gn2Gn4(int.Parse(tages_id), 25)[i2]["gn1"].ToString();
                int existens = mp3_adabtor.GetDataByGn2(int.Parse(zeitfenster_id)).Count;
                if (existens != 0)//fuer uberschreibungen
                    mp3_adabtor.UpdateQuery_mp3(mp3_text, int.Parse(neue_art), DateTime.Now, person_,int.Parse(zeitfenster_id));
                else
                    mp3_adabtor.InsertQueryAll(mp3_text, int.Parse(zeitfenster_id), int.Parse(neue_art), DateTime.Now, person_, int.Parse(resId_));
                if (existens >= 2) alert("C4323 Fehler: \n es gibt mehr als ein(" + existens + ") mp3 fuer diese Zeitspanne! es kann die falsche ueberschrieben worden sein");
                becharkh++;
                update_Gruppen_in_suchmachiene(resId_, zeitfenster_id);
            }
        }
        //string path_server2 = Server.MapPath(@"~/fsw/ablage/" + resId_);
        //string antwort = ny_cls.ccl_karte.export_html_alt(resId_, path_server2);
        //string antwort = export_html.ftp.export_html(resId_);
    }
    public void update_Gruppen_in_suchmachiene(string pizzaria_id, string fenster_id)//07,12,13
    {
        string mp3_text = mp3_adabtor.GetDataByGn2(int.Parse(fenster_id))[0]["mp3"].ToString();
        string gruppen_namen = "";
        for (int i = 0; i < mp3_text.Split('@').Length - 1; i++)
        {
            if (mp3_text.Split('@')[i].Split('!')[4] == "35")
            {
                gruppen_namen += mp3_text.Split('@')[i].Split('!')[0].Split('|')[0] + "^";
            }
        }
        string hauptMp3_atribut_zwei = "";
        string hmp3 = ta_hauptMp3.GetDataByResId(int.Parse(pizzaria_id))[0]["mp3"].ToString();
        for (int i = 0; i < hmp3.Split('~')[2].Split('#').Length - 1; i++)
        {
            if (hmp3.Split('~')[2].Split('#')[i].Split('|')[3] == fenster_id)
            {
                hauptMp3_atribut_zwei += hmp3.Split('~')[2].Split('#')[i].Split('|')[0] + "|";
                hauptMp3_atribut_zwei += hmp3.Split('~')[2].Split('#')[i].Split('|')[1] + "|";
                hauptMp3_atribut_zwei += hmp3.Split('~')[2].Split('#')[i].Split('|')[2] + "|";
                hauptMp3_atribut_zwei += hmp3.Split('~')[2].Split('#')[i].Split('|')[3] + "|";
                hauptMp3_atribut_zwei += hmp3.Split('~')[2].Split('#')[i].Split('|')[4] + "|";
                hauptMp3_atribut_zwei += gruppen_namen + "|#";
            }
            else
                hauptMp3_atribut_zwei += hmp3.Split('~')[2].Split('#')[i] + "#";
        }
        update_haupt_mp3_modern(hmp3, 2, hauptMp3_atribut_zwei, pizzaria_id);
    }
    public void update_haupt_mp3_modern(string hmp3, int atribut_nr, string value,string pizzaria_id)
    {
        string update = "";
        for (int i = 0; i < hmp3.Split('~').Length - 1; i++)
        {
            if (atribut_nr == i)
            {
                update += value;
                update += "~";
            }
            else { update += hmp3.Split('~')[i] + "~"; }
        }
        ta_hauptMp3.UpdateQueryMp3(update, int.Parse(pizzaria_id));
        //string path_server2 = Server.MapPath(@"~/fsw/ablage/" + pizzaria_id);
        //string antwort = ny_cls.ccl_karte.export_html_alt(pizzaria_id, path_server2);
        //string antwort = export_html.ftp.export_html(pizzaria_id);
    }
    string mp3;
    public void Xml_insertor_2370(string id, string risArt)
    {
        string resId = gn1(gn1(id, "gn2", 0), "gn2", 0);
        mp3 = "";
        try
        {
            string mp3_text = mp3_adabtor.GetDataByGn2(int.Parse(id))[0]["mp3"].ToString();
            archivMp3_adabtor.InsertQueryAll(0000, mp3_text, int.Parse(id), 0, DateTime.Now, "spaeter", 00, "sparter");
            mp3_adabtor.DeleteQueryGn2(int.Parse(id));//ghabli ro pak mikone
        }
        catch
        {
            mp3_adabtor.DeleteQueryGn2(int.Parse(id));//ghabli ro pak mikone
        }
        mP3_maker(int.Parse(id));// stringe mp3 ro por mikone wa setaro pak mikone//
        mp3 = mp3;
        mp3_adabtor.InsertQueryAll(mp3, int.Parse(id), int.Parse(risArt), DateTime.Now, "C4589_fc_Xml_insertor", int.Parse(resId));
        kinderDelet(int.Parse(id));

    }
    protected void mP3_maker(long SId)
    {
        for (int i = 0; i < G4.GetDataByG2(SId).Count; i++)
        {
            string g1 = G4.GetDataByG2(SId)[i]["gn1"].ToString();
            mP3_maker(long.Parse(g1));
        }
        string g2 = G4.Gn1(SId)[0]["g2"].ToString();
        string gn1 = G4.Gn1(SId)[0]["gn1"].ToString();
        string gn2 = G4.Gn1(SId)[0]["gn2"].ToString();//babash kie
        string gn3 = G4.Gn1(SId)[0]["gn3"].ToString();
        string gn4 = G4.Gn1(SId)[0]["gn4"].ToString();
        string gcop = G4.Gn1(SId)[0]["gcop"].ToString();
        string gb = G4.Gn1(SId)[0]["gb"].ToString();
        string page1 = G4.Gn1(SId)[0]["page1"].ToString();
        page1 = RemoveDoubleSpaceCharacters(page1);
        //if(page1!="")
        //ff0000!46689!46688!-2!57!1814!0!-!insertWochentage!@a7c7e8!46690!46688!-2!58!1815!0!-!insertWochentage!@MusterStd!46688!46681!-2!86!1809!0!-!113215^46058^46059^46060^46061^46062^46063^46671^46672^46681!@
        mp3 += g2 + "!" + gn1 + "!" + gn2 + "!" + gn3 + "!" + gn4 + "!" + gcop + "!" + gb + "!-!" + page1 + "!@";
        //GD.DeleteQueryG2(SId);
    }
    protected void insertWochentage()//2524
    {
        if (G4.Gn2Gn4(int.Parse(id), 83).Count == 0)
        {
            int Iz1 = IZ("Montag", int.Parse(id), -2, 23, 1776, "insertWochentage"); Page1(Iz1, 23, "insertWochentage 1776");
            Iz1 = IZ("Dienstag", int.Parse(id), -2, 23, 1777, "insertWochentage"); Page1(Iz1, 23, "insertWochentage 1777");
            Iz1 = IZ("Mittwoch", int.Parse(id), -2, 23, 1778, "insertWochentage"); Page1(Iz1, 23, "insertWochentage 1778");
            Iz1 = IZ("Donnerstag", int.Parse(id), -2, 23, 1779, "insertWochentage"); Page1(Iz1, 23, "insertWochentage 1779");
            Iz1 = IZ("Freitag", int.Parse(id), -2, 23, 1800, "insertWochentage"); Page1(Iz1, 23, "insertWochentage 1780");
            Iz1 = IZ("Samstag", int.Parse(id), -2, 23, 1801, "insertWochentage"); Page1(Iz1, 23, "insertWochentage 1781");///55555
            Iz1 = IZ("Sonntag", int.Parse(id), -2, 23, 1802, "insertWochentage"); Page1(Iz1, 23, "insertWochentage 1782");
            Iz1 = IZ("Feiertage", int.Parse(id), -2, 23, 1802, "insertWochentage"); Page1(Iz1, 23, "insertWochentage 1784");
            Iz1 = IZ("M U S T E R", int.Parse(id), -2, 83, 1803, "insertWochentage"); Page1(Iz1, 23, "insertWochentage 1783");
            IZ("00", int.Parse(id), -2, 27, 1804, "insertWochentage");
            IZ("MapLink", int.Parse(id), -2, 123, 1805, "insertWochentage");
            IZ("0", int.Parse(id), -2, 124, 18052, "insertWochentage");// 8,12,13 als restaurant logo eingefuehrt und soll 113 ersaetzen
            IZ("Titel", int.Parse(id), -2, 112, 1806, "insertWochentage");
            IZ(gn1(id, "g2", 0), int.Parse(id), -2, 127, 1807, "insertWochentage");//subdomain
            IZ("", int.Parse(id), -2, 121, 1808, "insertWochentage");//clientwebsite
            int Iz12 = IZ("MusterStd", Iz1, -2, 86, 1809, "insertWochentage");
            IZ("ff0000", Iz12, -2, 57, 1814, "insertWochentage");// color line<<<<<<<<
            IZ("a7c7e8", Iz12, -2, 58, 1815, "insertWochentage");// bg Color<<<<<<<<<
            Page1(Iz12, 86, "insertWochentage 1799");
            GU.Ugn4(26, int.Parse(id));//babasho restoran mikone
            //inser haupt mp3
            string restaurant_name = gn1(id, "g2", 0);
            string default_fax_optionen = "Titelbild:^1|reserve3047:^0.5|Reserve3048:^3|Page Font:^3|Zutat Font:^3|" +
                "Kunden Analyse:^0|Aktiv:^0|Kopfzeile:^1|Fusszeile:^1|!Aktiv:^0|Titelbild:^1|" +
                "produkt Bild:^0.5|Anschrift Font:^3|produkt Font:^3|Zutat Font:^3|" +
                "Kunden Analyse:^0|eMail senden:^0|!nach rechts:^600|Kuechen Titel grosse:^1.0|";
            string default_web_optionen = "slide:^0|blink href:^0|";
                default_web_optionen += "logo in Menueleiste:^0|";
                default_web_optionen += "Vorbestellen:^0|";
                default_web_optionen += "Ip_sperre:^1|";
                default_web_optionen += "menue Titel 1:^Kontakt|";
                default_web_optionen += "menue Titel 2:^Jobs|";
                default_web_optionen += "menue Titel 3:^Impressum|";
                default_web_optionen += "menue Titel 4:^Zusatzstoffe#|";
                default_web_optionen += "Hover color in Menue:^000|";
                default_web_optionen += "jpg bei confirm aktiv = 1:^0|";
                default_web_optionen += "Landes Vorwahl ohne 00(z.B.49):^0|";
                default_web_optionen += "Mit Konfirm email:1 ohne = 0:^0|";
                default_web_optionen += "reserve4:^0|";
                default_web_optionen += "reserve5:^0|";
                default_web_optionen += "reserve6:^0|";
                default_web_optionen += "reserve7:^0|";
                default_web_optionen += "reserve8:^0|";
                default_web_optionen += "reserve9:^0|";
                default_web_optionen += "reserve10:^0|";
                default_web_optionen += "urlaub:(von:bis)(24/12:3/1)^0/0:0/0|";
                default_web_optionen += "Breitengrad http://www.gpskoordinaten.de/ :^0|";
                default_web_optionen += "Längengrad :^0|";
                default_web_optionen += "reserve14:^0|";//post inizial
                default_web_optionen += "reserve15:^0|";
                default_web_optionen += "reserve16:^0|";
                default_web_optionen += "reserve17:^0|";
                default_web_optionen += "reserve18:^0|";
                default_web_optionen += "zusatzstoffe adaptor:^0|";
                default_web_optionen += "reserve20:^0|";

            ta_hauptMp3.InsertQueryAll("leer@mail.com", "0049",
                               restaurant_name + "~" +//0
                               id + "~" +//1
                               "8|00:00|00:00|" + Iz12.ToString() + "|pizza Tag|gruppen|#" + "~" +//2
                               "" + "~" + //3 plz
                               "logoBild y1 x1 y2 x2 picId^00|00|00|00|00" + "~" +//4
                               "restaurantart^" + "~" +//5
                               "anschrift^musterstrasse" + "~" +//6
                               "fotoIds^" + "~" +//7
                               "homepage^www.muster.de" + "~" +//8
                               "raiting^0" + "~" +//9
                               "gesamtsumme^00" + "~" +//10
                               "sprache^sprache" + "~" +//11
                               default_fax_optionen + "~" +//12
                               "~" +//13 slide fotos
                               "~" +//14 fotos unter slide
                               "~" +//15
                               default_web_optionen + "~" +//16
                               "~" +//17
                               "~",//18
                               "99999", int.Parse(id), DateTime.Now,1);
            creat_mp3_haupt_blank mp3_h_object = new creat_mp3_haupt_blank();
            string j_s_o_n =  mp3_h_object.objekt_mp3();
            //ta_hauptMp3.InsertQueryAll("leer@mail.com", "0049", j_s_o_n, "jjj", int.Parse(id), DateTime.Now,2);
        }
    }

}
