using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.IO;
using System.Text.RegularExpressions;
using System.Net;
using System.Text;
using AjaxPro;


public partial class xy : System.Web.UI.Page
{
    DataSet2TableAdapters.mp31TableAdapter mp3_adabtor = new DataSet2TableAdapters.mp31TableAdapter();
    DataSet2TableAdapters.G4TableAdapter G4 = new DataSet2TableAdapters.G4TableAdapter();
    DataSet2TableAdapters.hauptMp31TableAdapter ta_hauptMp3 = new DataSet2TableAdapters.hauptMp31TableAdapter();
    DataSet2TableAdapters.plz02TableAdapter ta_plz02 = new DataSet2TableAdapters.plz02TableAdapter();
    DataSet2TableAdapters.archiv_hauptMp3TableAdapter ta_archiv_haupt_mp3 = new DataSet2TableAdapters.archiv_hauptMp3TableAdapter();
    string id = "";
    public void Page_Load(object sender, EventArgs e)
    {
        
        //sup = Regex.Replace(title, "<.*?>", String.Empty);

        AjaxPro.Utility.RegisterTypeForAjax(typeof(xy), this.Page);
        string windowUrl = Request.Url.ToString().Split('#')[0]; try { id = Request.Url.Query.Split('?')[1]; }
        catch { id = "387";/*zutat*/ };
        string makulatur = laden(id);
        if (makulatur != "")
            alert(makulatur);
       
        mybody.Attributes.Add("onload", "xystart();");
    }
    private static readonly Random getrandom = new Random();
    private static readonly object syncLock = new object();

    public static int GetRandomNumber(int min, int max)
    {

        lock (syncLock)
        { // synchronize
            return getrandom.Next(min, max);
        }
    }
    [AjaxPro.AjaxMethod()]
    public string insert_gutscheine(string Gutschein_nummer)
    {
        DataSet2TableAdapters.QueriesTableAdapter ta_insert_gutscheine = new DataSet2TableAdapters.QueriesTableAdapter();
        int anzahl_insert = 0;
        string[] lines = Gutschein_nummer.Split(new string[] { "\r\n", "\n" }, StringSplitOptions.None);
        DateTime theDate = DateTime.Now;
        DateTime yearInTheFuture = theDate.AddYears(1);
        //anzahl_insert = lines.Length-1;
        //zeitfenster schleife
        for (int i = 0; i < lines.Length-1; i++)
        {
            //5 = 5;
            anzahl_insert++;
        }
        return anzahl_insert.ToString();
    }
    protected void alert(string text)
    {
        ClientScript.RegisterStartupScript(this.GetType(), "myalert", "alert('" + text + " ');", true);
    }

    [AjaxPro.AjaxMethod()]
    public string abfrage_alle_zeiten(string zeitfenster_id)
    {
        
        string pizzaria_Id = mp3_adabtor.GetDataByGn2(int.Parse(zeitfenster_id))[0]["risId"].ToString();
        string new_value = "";
        //zeitfenster schleife
        for (int i = 0; i < mp3_adabtor.GetDataByRisId(int.Parse(pizzaria_Id)).Count; i++)
        {
            string open_time_in_mp3_text = mp3_adabtor.GetDataByRisId(int.Parse(pizzaria_Id))[i]["mp3"].ToString().Split('~')[2];
            string tag = open_time_in_mp3_text.Split('|')[0];if (tag == "8") tag = "muster";else if (tag == "9") tag = "Feiertage";else if (tag == "1") tag = "Montag";else if (tag == "2") tag = "Dienstag";else if (tag == "3") tag = "Mittwoch";else if (tag == "4") tag = "Donnerstag";else if (tag == "5") tag = "Freitag";else if (tag == "6") tag = "Samstag";else if (tag == "7") tag = "Sonntag";else tag = tag;
            string von_bis = open_time_in_mp3_text.Split('|')[1] + " " + open_time_in_mp3_text.Split('|')[2];
            string zeit_id = mp3_adabtor.GetDataByRisId(int.Parse(pizzaria_Id))[i]["gn2"].ToString();
            new_value += mp3_adabtor.GetDataByRisId(int.Parse(pizzaria_Id))[i]["gn2"].ToString();
            //5 = 5;
        }
        return new_value;
    }
    [AjaxPro.AjaxMethod()]
    public string adding_an_alle(string wert, string zeit_id_s, string zeit_id)
    {
        int beshmar_fenster = 0;
        int beshmar_satz = 0;
        string new_value = "";
        //zeitfenster schleife
        string mp3_text = mp3_adabtor.GetDataByGn2(int.Parse(zeit_id))[0]["mp3"].ToString();
        for (int i3 = 0; i3 < zeit_id_s.Split('@').Length - 1; i3++)
        {
            string mp3_text_mangel = mp3_adabtor.GetDataByGn2(int.Parse(zeit_id_s.Split('@')[i3]))[0]["mp3"].ToString();
            beshmar_fenster++;
            mp3_text_mangel += wert;
            mp3_adabtor.UpdateQueryGn2(mp3_text_mangel, int.Parse(zeit_id_s.Split('@')[i3]));
            new_value = "";
        }
        return "C77 an: \n Zeitfenster(" + beshmar_fenster.ToString() + ")\n Datensätze(" + beshmar_satz + ")" + "\n html_export";// +antwort;
    }
    [AjaxPro.AjaxMethod()]
    public string uebertragung_an_alle(string wert, string zeit_id_s, string zeit_id, string adding)
    {
        DataTable table_daten_satz = new DataTable();
        table_daten_satz.Columns.Add("id", typeof(string));
        table_daten_satz.Columns.Add("satz", typeof(string));
        string gozaresh = "hu67om \n Fehler";
        for (int i = 0; i < wert.Split('@').Length - 1; i++)
        {
            string satz = wert.Split('@')[i];
            string dna_soll = satz.Split('!')[1] + "!" + satz.Split('!')[4];
            table_daten_satz.Rows.Add("satz_dna" + dna_soll, satz);

        }
        int beshmar_fenster = 0;
        int beshmar_satz = 0;
        string new_value = "";
        //zeitfenster schleife
        //string mp3_text = mp3_adabtor.GetDataByGn2(int.Parse(zeit_id))[0]["mp3"].ToString();
        for (int i3 = 0; i3 < zeit_id_s.Split('@').Length - 1; i3++)
        {
            string mp3_text = mp3_adabtor.GetDataByGn2(int.Parse(zeit_id_s.Split('@')[i3]))[0]["mp3"].ToString();
            beshmar_fenster++;
            for (int i2 = 0; i2 < mp3_text.Split('@').Length - 1; i2++)
            {
                string datensatz = mp3_text.Split('@')[i2];
                string dna_ist = datensatz.Split('!')[1] + "!" + datensatz.Split('!')[4];
                try
                {
                    DataRow[] foundRows = table_daten_satz.Select("id = 'satz_dna" + dna_ist + "'");
                    new_value += foundRows[0][1].ToString() + "@";
                    beshmar_satz++;
                    string makiam = "";
                    if (foundRows[0][1].ToString().Split('!')[4] != "37")
                    {
                        makiam = foundRows[0][1].ToString();
                        makiam = foundRows[0][1].ToString();
                    }

                }
                catch
                {
                    new_value += datensatz + "@";
                }
                gozaresh = "hu67om \n erfolgreich";
            }
            mp3_adabtor.UpdateQueryGn2(new_value, int.Parse(zeit_id_s.Split('@')[i3]));
            new_value = "";
        }
        return gozaresh + "\n C149 an: \n Zeitfenster(" + beshmar_fenster.ToString() + ")\n Datensätze(" + beshmar_satz + ")" + "\n html_export";// +antwort;
    }
    [AjaxPro.AjaxMethod()]
    public string update_global(string zeit_id_s)
    {
        DataTable table_daten_satz = new DataTable();
        table_daten_satz.Columns.Add("id", typeof(string));
        table_daten_satz.Columns.Add("satz", typeof(string));

        string antwort = "";
        if (zeit_id_s == "")
        {
            int alle_mp3 = mp3_adabtor.GetData().Count;
            for (int i = 0; i < alle_mp3; i++)
            {
                string wert = mp3_adabtor.GetData()[i]["mp3"].ToString();
                string gn2 = mp3_adabtor.GetData()[i]["gn2"].ToString();
                zeit_id_s += mp3_adabtor.GetData()[i]["gn2"].ToString() + "@";
                for (int i2 = 0; i2 < wert.Split('@').Length - 1; i2++)
                {
                    try
                    {
                        string satz = wert.Split('@')[i2];
                        string arto = satz.Split('!')[4];
                        if (arto == "36")
                        {

                            string name_orginal = satz.Split('!')[0];
                            string format_name = System.Text.RegularExpressions.Regex.Replace(satz.Split('!')[0], " ", "");
                            format_name = System.Text.RegularExpressions.Regex.Replace(format_name, " ", "");
                            format_name = System.Text.RegularExpressions.Regex.Replace(format_name, " ", "");
                            format_name = System.Text.RegularExpressions.Regex.Replace(format_name, " ", "");
                            format_name = System.Text.RegularExpressions.Regex.Replace(format_name, "\n", "");
                            format_name = System.Text.RegularExpressions.Regex.Replace(format_name, "\n", "");
                            format_name = System.Text.RegularExpressions.Regex.Replace(format_name, "\n", "");
                            string dna_soll = format_name;
                            //table_daten_satz.Rows.Add("satz_dna" + dna_soll, satz);
                            DataRow[] format_row_f0 = table_daten_satz.Select("id = '" + dna_soll + "'");
                            if (format_row_f0.Length == 0)
                            {
                                table_daten_satz.Rows.Add(dna_soll, name_orginal);
                            }
                        }
                    }
                    catch { };
                }
            }
        }
        else
        {
            string wert = mp3_adabtor.GetDataByGn2(int.Parse(zeit_id_s))[0]["mp3"].ToString();
            string gn2 = mp3_adabtor.GetDataByGn2(int.Parse(zeit_id_s))[0]["gn2"].ToString();
            for (int i2 = 0; i2 < wert.Split('@').Length - 1; i2++)
            {
                try
                {
                    string satz = wert.Split('@')[i2];
                    string format_name = System.Text.RegularExpressions.Regex.Replace(satz.Split('!')[0], " ", "");
                    format_name = System.Text.RegularExpressions.Regex.Replace(format_name, "\n", "");
                    format_name = System.Text.RegularExpressions.Regex.Replace(format_name, "\n", "");
                    format_name = System.Text.RegularExpressions.Regex.Replace(format_name, "\n", "");
                    string dna_soll = gn2 + "-" + satz.Split('!')[2] + "-" + format_name;
                    table_daten_satz.Rows.Add("satz_dna" + dna_soll, satz);
                }
                catch { };
            }
            zeit_id_s += "@";

        }
        int beshmar_fenster = 0;
        int beshmar_satz = 0;
        string new_value = "deutsch|";
        string nicht_gefundene_daten = "";
        string Verpasst_fenster = "";
        string update_value_for_show = "";
        //for (int i3 = 0; i3 < zeit_id_s.Split('@').Length - 1; i3++)
        //{
            try
            {
                //string mp3_text = mp3_adabtor.GetDataByGn2(int.Parse(zeit_id_s.Split('@')[i3]))[0]["mp3"].ToString();
                beshmar_fenster++;
                //DataRow[] format_row_f0 = table_daten_satz.;
                for (int i2 = 0; i2 < table_daten_satz.Rows.Count; i2++)
                {
                    string datensatz = table_daten_satz.Rows[i2]["satz"].ToString();
                    /*
                    try
                    {
                        string nicht = mp3_text.Split('@')[i2].Split('!')[3];
                        int hichi = int.Parse(nicht);
                        string new_value_zwei = update_href_satz(datensatz, 3, "");
                        new_value += new_value_zwei;
                        //if(hichi<=20)
                          //  new_value += datensatz + "@";
                    }
                    catch 
                    {
                        new_value += datensatz + "@";
                    };
                    //href update
                     */
                    //if (mp3_text.Split('@')[i2].Split('!')[4] == "37")
                    //{
                        try
                        {
                            //string nicht = mp3_text.Split('@')[i2].Split('!')[3];
                            //nicht = System.Text.RegularExpressions.Regex.Replace(nicht, " ", "");
                            //nicht = System.Text.RegularExpressions.Regex.Replace(nicht, " ", "");
                            //nicht = System.Text.RegularExpressions.Regex.Replace(nicht, "\n", "");
                            //nicht = nicht[1].ToString(); 
                            //int hichi = int.Parse(nicht);
                            //string new_value_zwei = update_href_satz(datensatz, 3, "");
                            //new_value += datensatz;
                            try
                            {
                                new_value += datensatz.Split('<')[0]+"~";
                            }
                            catch
                            {
                                new_value += datensatz + "~";
                            }
                            /*
                            string gruppen_id = datensatz.Split('!')[7];
                            string format_name = datensatz.Split('!')[8];
                            format_name = System.Text.RegularExpressions.Regex.Replace(format_name, " ", "");
                            format_name = System.Text.RegularExpressions.Regex.Replace(format_name, "\n", "");
                            format_name = System.Text.RegularExpressions.Regex.Replace(format_name, "\n", "");
                            format_name = System.Text.RegularExpressions.Regex.Replace(format_name, "\n", "");
                            string speise_s_id = "satz_dna" + zeit_id_s.Split('@')[i3] + "-" + gruppen_id + "-" + format_name;
                            DataRow[] format_satz = table_daten_satz.Select("id = '" + speise_s_id + "'");
                            string format_s_id = format_satz[0][1].ToString().Split('!')[1];
                            //string title = speise_satz[0][1].ToString();
                            //string titel_ohne = title.Split('<')[0];
                            //string sup = title.Split('>')[1];
                            //sup = sup.Split('<')[0];

                            //string update_value = speise_satz[0][1].ToString().Split('!')[3];
                            //string new_value_zwei = update_href_satz(datensatz, 0, titel_ohne);
                            //new_value_zwei = update_href_satz(new_value_zwei, 3, "<sup>"+sup+"</sup>");
                            */
                            //new_value += update_href_satz(datensatz, 3, "0");
                            //update_value_for_show += new_value_zwei;
                            beshmar_satz++;
                        }
                        catch
                        {
                            //new_value += datensatz + "@";
                            //nicht_gefundene_daten += "zeitid: " + zeit_id_s.Split('@')[i3] + " datensatz: " + datensatz.Split('!')[3] + "\n";
                        }
                        //deutsch|Zwiebeln~Mais@
                    //}
                    //else
                    //{
                        //new_value += datensatz + "@";
                    //}
                }//end for zellen
                //new_value = new_value;
                new_value += "@";
                //mp3_adabtor.UpdateQueryGn2(new_value, 66);
                mp3_adabtor.UpdateQueryArt(new_value, 66);
            }//end tyr zeit id schleife
            catch
            {
                //Verpasst_fenster += zeit_id_s.Split('@')[i3] + "------";
            }
            //new_value = new_value;
            //new_value = "";
        //}//end for zeitschleife
        //}
        //return gozaresh + "\n C149 an: \n Zeitfenster(" + beshmar_fenster.ToString() + ")\n Datensätze(" + beshmar_satz + ")" + "\n Verpasst:(" + nicht_gefundene_daten + ")" + "\n html_export";// +antwort;
        return "\n C149 an: \n Zeitfenster(" + beshmar_fenster.ToString() + ")\n  Datensätze(" + beshmar_satz + ")" + "\n Verpasst:(" + nicht_gefundene_daten + ")" + "\n html_export" + "\n Verpasst_fenster:(" + Verpasst_fenster + ")" + "\n html_export";// +antwort;
        //return update_value_for_show;
    }//koko
    public string update_href_satz(string satz, int atribute, string value)
    {
        string antwort = "";
        for (int i2 = 0; i2 < satz.Split('!').Length - 1; i2++)
        {
            if (i2 == atribute) { antwort += value + "!"; }
            else { antwort += satz.Split('!')[i2] + "!"; }
        }
        antwort += "@";
        return antwort;
    }
    [AjaxPro.AjaxMethod()]
    public string uebertragung_an_alle_preisen(string wert, string zeit_id_s, string zeit_id)
    {
        DataTable table_daten_satz = new DataTable();
        table_daten_satz.Columns.Add("id", typeof(string));
        table_daten_satz.Columns.Add("satz", typeof(string));
        string gozaresh = "hu67om \n Fehler";
        for (int i = 0; i < wert.Split('@').Length - 1; i++)
        {
            string satz = wert.Split('@')[i];
            string dna_soll = satz.Split('!')[1] + "!" + satz.Split('!')[4];
            table_daten_satz.Rows.Add("satz_dna" + dna_soll, satz);

        }
        int beshmar_fenster = 0;
        int beshmar_satz = 0;
        string new_value = "";
        string nicht_gefundene_daten = "";
        //zeitfenster schleife
        //string mp3_text = mp3_adabtor.GetDataByGn2(int.Parse(zeit_id))[0]["mp3"].ToString();
        for (int i3 = 0; i3 < zeit_id_s.Split('@').Length - 1; i3++)
        {
            string mp3_text = mp3_adabtor.GetDataByGn2(int.Parse(zeit_id_s.Split('@')[i3]))[0]["mp3"].ToString();
            beshmar_fenster++;
            for (int i2 = 0; i2 < mp3_text.Split('@').Length - 1; i2++)
            {
                string datensatz = mp3_text.Split('@')[i2];
                if (mp3_text.Split('@')[i2].Split('!')[4] == "40")
                {
                    string dna_ist = datensatz.Split('!')[1] + "!" + datensatz.Split('!')[4];
                    try
                    {
                        DataRow[] foundRows = table_daten_satz.Select("id = 'satz_dna" + dna_ist + "'");
                        new_value += update_href_satz(datensatz, 0, foundRows[0][1].ToString().Split('!')[0]);
                        beshmar_satz++;
                    }
                    catch
                    {
                        nicht_gefundene_daten += "zeitid: " + zeit_id_s.Split('@')[i3] + " datensatz: " + datensatz + "\n";
                    }
                    gozaresh = "hu67om \n erfolgreich";
                }//end if art == 40
                else
                {
                    new_value += datensatz + "@";
                }
            }
            mp3_adabtor.UpdateQueryGn2(new_value, int.Parse(zeit_id_s.Split('@')[i3]));
            new_value = "";
        }//end for zeitschleife
        return gozaresh + "\n C149 an: \n Zeitfenster(" + beshmar_fenster.ToString() + ")\n Datensätze(" + beshmar_satz + ")" + "\n Verpasst:(" + nicht_gefundene_daten + ")" + "\n html_export";// +antwort;
    
    }

    [AjaxPro.AjaxMethod()]
    public string global_abfrage_angebot(string zeit_id)
    {
        string antwort = "";
        string mp3_text = mp3_adabtor.GetDataByGn2(int.Parse(zeit_id))[0]["mp3"].ToString();
        for (int i2 = 0; i2 < mp3_text.Split('@').Length - 1; i2++)
        {
            string datensatz = mp3_text.Split('@')[i2];
            try
            {
                if ("40" == datensatz.Split('!')[4] && int.Parse(datensatz.Split('!')[13]) >= 1)
                {
                    antwort += mp3_text.Split('@')[i2] + "@";
                    
                }
            }
            catch
            {
                antwort += "ABFRAGE FEHLER BEI SATZ: \n " + mp3_text.Split('@')[i2] + "@";
            }
        }
        return antwort;
    }

    [AjaxPro.AjaxMethod()]
    public string totale_ueberschreibung_an_alle(string zeit_id_s, string zeit_id)
    {
        string fehler_report = "";
        int beshmar_fenster = 0;
        try
        {
            string mp3_text = mp3_adabtor.GetDataByGn2(int.Parse(zeit_id))[0]["mp3"].ToString();

            for (int i3 = 0; i3 < zeit_id_s.Split('@').Length - 1; i3++)
            {
                mp3_adabtor.UpdateQueryGn2(mp3_text, int.Parse(zeit_id_s.Split('@')[i3]));
                fehler_report += "OK an (" + zeit_id_s.Split('@')[i3] + ") Zeit-ID \n";
            }
        }
        catch
        {
            fehler_report += "C144ds SYSTEM FEHLER! \n";
            
        };
        return fehler_report;
    }
    [AjaxPro.AjaxMethod()]
    public string mp3_zutat_quelle()//07,12,13
    {
        string mp3_text = mp3_adabtor.GetDataByArt(66)[0]["mp3"].ToString();
        return mp3_text;
    }
    [AjaxPro.AjaxMethod()]
    public string mp3_zutat_quelle_67()//07,12,13
    {
        string mp3_text = mp3_adabtor.GetDataByArt(67)[0]["mp3"].ToString();
        return mp3_text;
    }
    
    [AjaxPro.AjaxMethod()]
    public string export_html_button_localhost(string id)
    {
        //string antwort = ny_cls.ccl_karte.export_html_alt(id, path_server);
        string antwort = export_html.ftp.export_html_localhost(id,Server.MapPath(@"~/fsw/ablage/" + id));
        return antwort;
    }
    [AjaxPro.AjaxMethod()]
    public string export_html_button_localhost_express_einzeln(string id, string zeit_id)//kxf
    {
        string path_server = Server.MapPath(@"~/fsw/ablage/" + id);
        //string antwort = ny_cls.ccl_karte.export_html_alt(id, path_server);
        string antwort = export_html.ftp.export_html_localhost_einzeln(id, path_server, zeit_id);
        return antwort;
    }
    [AjaxPro.AjaxMethod()]
    public string export_1und1_button_gesamt(string id)
    {
        string antwort = export_html.ftp.export_1und1_gesamt(id);
        return antwort;
    }
    [AjaxPro.AjaxMethod()]
    public string export_1und1_button_einzeln(string id, string zeit_id)
    {
        string antwort = export_html.ftp.export_1und1_einzeln(id, zeit_id);
        return antwort;
    }
    //static string restaurantId = "00";
    [AjaxPro.AjaxMethod()]
    public string mp3_auf(string id)//07,12,13
    {
        string mp3_text = mp3_adabtor.GetDataByGn2(int.Parse(id))[0]["mp3"].ToString();
        return mp3_text;
    }
    static string mini_design_Unico_bGColor = "";//57-id|name|gn2=Zeitfenster|
    static string fax_optionen = "";//57-id|name|gn2=Zeitfenster|
    static string mini_design_Unico_lineColor = "";//58-id|name|gn2=Zeitfenster|
    static string mini_design_Unico_smsTd = "";//63-id|name|gn2=Zeitfenster|
    static string mini_Zelle_gruppen = "";//35-id|name|gn2|gn3=position|
    //static string mini_Zelle_gruppen_coords = "";//50-id|name|gn2|
    static string mini_Zelle_zutatBibliothek = "";//36-id|name|gn2=gruppe|gn3|page1|
    static string mini_Zelle_SpeiseNr = "";//37-id|name|gn2|
    static string mini_Zelle_SpeiseName = "";//38-id|name|gn2|
    static string mini_Zelle_formatid = "";//39-id|name|gn2|
    static string mini_Zelle_zutatpreis = "";//43-id|name=preis|gn2=zutatId|gn3=formatid|
    static string mini_Zelle_bildReihenfolge = "";//55-id|gn2|gn3=position|
    //static string mini_Zelle_bilder = "";//56-id|gn2|gn3=picid|
    static string mini_Zelle_herfs = "";//40-id|gn2=speiseNummer|gn3=formatId|page1=g1-1-sp1-klein|
    static string mini_Zelle_V_zutat_speise = "";//49-id|name|gn2=speiseNummer|gn3=ursprungZutatId|
    //static string mini_Zelle_privatzutat = "";//106-id|name|gn2=speiseNummer|gn3=id~
    static string mini_Zelle_rest = "";//106-id|name|gn2=speiseNummer|gn3=id~
    //static string mini_Zelle_Speise_etikett = "";//131-id|name|gn2=speiseNummer|gn3=id~
    static string mini_Zelle_format_etikett = "";//132-id|name|gn2=speiseNummer|gn3=id~
    //static string mini_Zelle_logo = "";//133-id|name|gn2=speiseNummer|gn3=id~
    //static string mini_Zelle_menu = "";//135-id|name|gn2=speiseNummer|gn3=id~
    static string name_des_restaurants = "";//133

    [AjaxPro.AjaxMethod()]
    public string entladen_modern(string id_entladen, string restaurantId_entladen, string new_hauptMP3
        , string mini_design_Unico_bGColor_new
        , string mini_design_Unico_lineColor_new
        , string mini_design_Unico_smsTd_new//3
        , string mini_Zelle_gruppen_new
        , string mini_Zelle_formatid_new
        , string mini_Zelle_format_etikett_new//6
        , string mini_Zelle_SpeiseNr_new
        , string mini_Zelle_herfs_new//8
        , string mini_Zelle_zutatBibliothek_new//9
        , string mini_Zelle_zutatpreis_new
        , string mini_Zelle_V_zutat_speise_new
        , string mini_Zelle_bildReihenfolge_new//12
        , string mini_Zelle_rest_new
        )
    {
        string new_mp3 = "";
        new_mp3 += mini_design_Unico_bGColor_new;//58-id|name|gn2=Zeitfenster|
        new_mp3 += mini_design_Unico_lineColor_new;//57-id|name|gn2=Zeitfenster|
        new_mp3 += mini_design_Unico_smsTd_new;//63-id|name|gn2=Zeitfenster|
        new_mp3 += mini_Zelle_gruppen_new;//35-id|name|gn2|gn3=position|
        //new_mp3 += mini_Zelle_gruppen_coords;//50-id|name|gn2|
        new_mp3 += mini_Zelle_formatid_new;//39-id|name|gn2|
        new_mp3 += mini_Zelle_format_etikett_new;//132-id|name|gn2=speiseNummer|gn3=id~
        new_mp3 += mini_Zelle_SpeiseNr_new;//37-id|name|gn2=gruppe|gn3|page1|
        new_mp3 += mini_Zelle_herfs_new;//40-id|gn2=speiseNummer|gn3=formatId|page1=g1-1-sp1-klein|
        new_mp3 += mini_Zelle_zutatBibliothek_new;//36-id|name|gn2=gruppe|gn3|page1|
        new_mp3 += mini_Zelle_zutatpreis_new;//43-id|name=preis|gn2=zutatId|gn3=formatid|
        new_mp3 += mini_Zelle_V_zutat_speise_new;//49-id|name|gn2=speiseNummer|gn3=ursprungZutatId|
        new_mp3 += mini_Zelle_bildReihenfolge_new;//55-id|gn2|gn3=position|
        new_mp3 += mini_Zelle_rest_new;
        string antwort = "";
        try
        {
            if (new_mp3 == "" || new_mp3 == null)
                antwort += "C242 \n Update fehlgeschlagen \n versucht leer zu speichern!";
            else
                mp3_adabtor.UpdateQueryGn2(new_mp3, int.Parse(id_entladen));
            //antwort += "C257 \n Update MP3 erfoglreich";
        }
        catch
        {
            antwort += "C261 \n Update fehlgeschlagen!";
        }
        try
        {
            string hauptmp3 = ta_hauptMp3.GetDataByResId(int.Parse(restaurantId_entladen))[0]["mp3"].ToString();
            string geburtstag = ta_hauptMp3.GetDataByResId(int.Parse(restaurantId_entladen))[0]["geburtstag"].ToString();
        }
        catch
        {
            antwort += " C236 \n mp3haupt archivierung gescheitert! \n xy.aspx Fehler \n Fehler code : because the 'PRIMARY' filegroup is full \n SQL Befehl: \n DBCC SHRINKDATABASE ('f22', TRUNCATEONLY) \n hilft";
        }
        try
        {
            ta_hauptMp3.UpdateQueryMp3(new_hauptMP3, int.Parse(restaurantId_entladen));
        }
        catch
        {
            antwort += " C246 \n Update  haupt_MP3 gescheitert!";
        }
        return antwort;
    }
    [AjaxPro.AjaxMethod()]
    public string entladen(string id_entladen, string restaurantId_entladen, string new_hauptMP3)//19,1,14
    {
        string new_mp3 = "";
        new_mp3 += mini_design_Unico_bGColor;//58-id|name|gn2=Zeitfenster|
        new_mp3 += mini_design_Unico_lineColor;//57-id|name|gn2=Zeitfenster|
        new_mp3 += mini_design_Unico_smsTd;//63-id|name|gn2=Zeitfenster|
        new_mp3 += mini_Zelle_gruppen;//35-id|name|gn2|gn3=position|
        //new_mp3 += mini_Zelle_gruppen_coords;//50-id|name|gn2|
        new_mp3 += mini_Zelle_formatid;//39-id|name|gn2|
        new_mp3 += mini_Zelle_format_etikett;//132-id|name|gn2=speiseNummer|gn3=id~
        new_mp3 += mini_Zelle_SpeiseNr;//37-id|name|gn2=gruppe|gn3|page1|
        new_mp3 += mini_Zelle_herfs;//40-id|gn2=speiseNummer|gn3=formatId|page1=g1-1-sp1-klein|
        new_mp3 += mini_Zelle_zutatBibliothek;//36-id|name|gn2=gruppe|gn3|page1|
        new_mp3 += mini_Zelle_zutatpreis;//43-id|name=preis|gn2=zutatId|gn3=formatid|
        new_mp3 += mini_Zelle_V_zutat_speise;//49-id|name|gn2=speiseNummer|gn3=ursprungZutatId|
        new_mp3 += mini_Zelle_bildReihenfolge;//55-id|gn2|gn3=position|
        new_mp3 += mini_Zelle_rest;
        string antwort = "";
        try
        {
            if (new_mp3 == "" || new_mp3 == null)
                antwort += "C242 \n Update fehlgeschlagen \n versucht leer zu speichern!";
            else
                mp3_adabtor.UpdateQueryGn2(new_mp3, int.Parse(id_entladen));
            //antwort += "C257 \n Update MP3 erfoglreich";
        }
        catch
        {
            antwort += "C261 \n Update fehlgeschlagen!";
        }
        try
        {
            string hauptmp3 = ta_hauptMp3.GetDataByResId(int.Parse(restaurantId_entladen))[0]["mp3"].ToString();
            string geburtstag = ta_hauptMp3.GetDataByResId(int.Parse(restaurantId_entladen))[0]["geburtstag"].ToString();
        }
        catch
        {
            antwort += " C236 \n mp3haupt archivierung gescheitert! \n xy.aspx Fehler \n Fehler code : because the 'PRIMARY' filegroup is full \n SQL Befehl: \n DBCC SHRINKDATABASE ('f22', TRUNCATEONLY) \n hilft";
        }
        try
        {
            ta_hauptMp3.UpdateQueryMp3(new_hauptMP3, int.Parse(restaurantId_entladen));
        }
        catch
        {
            antwort += " C246 \n Update  haupt_MP3 gescheitert!";
        }
        return antwort;
    }

    string web_options="";int vorwahl = 1; string zeit_tabelle = "";string speise1 = ""; string speise2 = ""; string speise3 = ""; string speise4 = ""; string speise5 = ""; string speise6 = "";string speise7 = "";string zutat1 = ""; string zutat2 = ""; string zutat3 = ""; string zutat4 = ""; string zutat5 = ""; string zutat6 = "";string zutat7 = "";string navi1 = ""; string navi2 = ""; string navi3 = ""; string navi4 = ""; string navi5 = ""; string navi6 = "";string navi7 = "";string titel1 = ""; string titel2 = ""; string titel3 = ""; string titel4 = ""; string titel5 = ""; string titel6 = "";string titel7 = "";string pic_link = "";

    protected void titel_tr_dual(Table table_ganz, string ret_td_id, string td_titel_id)
    {
        TableRow tr_titel = new TableRow(); table_ganz.Rows.Add(tr_titel);
        TableCell td_return_titel = new TableCell(); tr_titel.Cells.Add(td_return_titel);
        td_return_titel.ID = ret_td_id; td_return_titel.Width = 50;
        TableCell td_titel_txt = new TableCell(); tr_titel.Cells.Add(td_titel_txt);
        td_titel_txt.ID = td_titel_id;
        td_titel_txt.Attributes.Add("class", "gruppen_text");
        TableCell td_rechts_ohne_anmeldung_titel = new TableCell(); tr_titel.Cells.Add(td_rechts_ohne_anmeldung_titel);
        td_rechts_ohne_anmeldung_titel.Width = 70;
    }
    protected void body_tr_dual(Table table_ganz, string body_td_id)
    {
        TableRow tr_body = new TableRow(); table_ganz.Rows.Add(tr_body);
        TableCell td_body = new TableCell(); tr_body.Cells.Add(td_body);
        td_body.HorizontalAlign = HorizontalAlign.Center;
        td_body.ColumnSpan = 20;
        td_body.ID = body_td_id;
        TableRow tr_abstand_ohne_anmeldung = new TableRow(); table_ganz.Rows.Add(tr_abstand_ohne_anmeldung);
        tr_abstand_ohne_anmeldung.Height = 15;
        tr_abstand_ohne_anmeldung.Attributes.Add("class", "fuss_text");
    }
    protected Table ganze_table(Table table1, string ganz_td_class)
    {
        TableRow tr_ganz = new TableRow(); table1.Rows.Add(tr_ganz);

        TableCell td_ganz = new TableCell(); tr_ganz.Cells.Add(td_ganz);
        td_ganz.Attributes.Add("class", ganz_td_class);
        td_ganz.Style.Add("display", "none");
        Table tb_ganz = new Table(); td_ganz.Controls.Add(tb_ganz);
        tb_ganz.Style.Add("width", "100%");

        return tb_ganz;
    }
     string sp_bestellungsnummer = "";
     string sp_empfaenger = "";
     string sp_tel = "";
     string sp_anschrift = "";
     string sp_bemerkung = "";
     string sp_fahrtkosten = "";
     string sp_heute = "";
     string sp_morgen = "";
     string sp_bis = "";
     string sp_ohne = "";
     string sp_mit = "";
     string sp_waehrung = "";
     string sp_Lieferung = "";
     string sp_nicht_akzeptieren = "";
     string sp_mail_betreff_anfrage_der_bestel_0_lung = "";
     string sp_karte = "";
     string sp_minuten = "";
     string sp_datum = "";
     string sp_rh_waehrung = "";

    private void aufbau_spraache()
    {
        if (vorwahl == 39)
        {
            sp_bestellungsnummer = "numero di ordine:"; sp_datum = "data:"; sp_empfaenger = "nome: "; sp_tel = "tel: "; sp_anschrift = "indirizzo: "; sp_bemerkung = "note: "; sp_fahrtkosten = "addebbitati per il transporto: "; sp_heute = "oggi: "; sp_morgen = "domani: "; sp_Lieferung = "arrive tra "; sp_minuten = " minuti"; sp_bis = "tra: "; sp_nicht_akzeptieren = "ordinatione chiusa"; sp_mail_betreff_anfrage_der_bestel_0_lung = "Richiesta"; sp_karte = "Mappa"; sp_ohne = "senza ";
            sp_mit = "con ";
            sp_waehrung = "€";
        }
        if (vorwahl == 49)
        {
            sp_bestellungsnummer = "Bestellungsnummer:"; sp_datum = "Datum:"; sp_empfaenger = "Emfpänger:"; sp_tel = "Tel:"; sp_anschrift = "Anschrift:"; sp_bemerkung = "Bemerkung:"; sp_fahrtkosten = "Fahrtkosten:"; sp_heute = "Heute: "; sp_morgen = "Morgen: "; sp_Lieferung = "Lieferung in "; sp_minuten = " Minuten"; sp_bis = "bis: "; sp_nicht_akzeptieren = "Ablehnung"; sp_mail_betreff_anfrage_der_bestel_0_lung = "Anfrage"; sp_karte = "Karte"; sp_ohne = "ohne ";
            sp_mit = "mit ";
            sp_waehrung = "€";
        }
        if (vorwahl == 98)
        {
            sp_bestellungsnummer = "شماره سفارش: "; sp_datum = "تاریخ: "; sp_empfaenger = "نام: "; sp_tel = "تلفن: "; sp_anschrift = "نشانی: "; sp_bemerkung = "شرح نشانی:"; sp_fahrtkosten = "هزینه ارسال: "; sp_heute = ": "; sp_morgen = ": "; sp_Lieferung = "مدت زمان ارسال "; sp_minuten = " دقیقه"; sp_bis = ": "; sp_nicht_akzeptieren = "پذیرش مقدور نیست"; sp_mail_betreff_anfrage_der_bestel_0_lung = "پذیرش سفارش"; sp_karte = "نقشه"; sp_ohne = " ";
            sp_mit = " ";
            sp_waehrung = "تومان";
        }
        if (vorwahl == 31)
        {
            sp_bestellungsnummer = "Ordernummer: ";
            sp_datum = "Datum: ";
            sp_empfaenger = "Naam: ";
            sp_tel = "Telefoonnummer: ";
            sp_anschrift = "Adres: ";
            sp_bemerkung = "Opmerkingen: ";
            sp_fahrtkosten = "Verzendkosten: ";
            sp_heute = "Vandaag: ";
            sp_morgen = "Morgen: ";
            sp_Lieferung = "Verwachte aankomsttijd ";
            sp_minuten = " Minuten";
            sp_bis = "vanaf: ";
            sp_nicht_akzeptieren = "Ablehnung";
            sp_mail_betreff_anfrage_der_bestel_0_lung = "Anfrage";
            sp_karte = "Karte";
            sp_ohne = "ohne ";
            sp_mit = "mit ";
            sp_waehrung = "€";
        }
        if (vorwahl == 1)
        {
            sp_bestellungsnummer = "numero di ordine:"; sp_datum = "data:"; sp_empfaenger = "nome: "; sp_tel = "tel: "; sp_anschrift = "indirizzo: "; sp_bemerkung = "note: "; sp_fahrtkosten = "addebbitati per il transporto: "; sp_heute = "oggi: "; sp_morgen = "domani: "; sp_Lieferung = "arrive tra "; sp_minuten = " minuti"; sp_bis = "tra: "; sp_nicht_akzeptieren = "ordinatione chiusa"; sp_mail_betreff_anfrage_der_bestel_0_lung = "Richiesta"; sp_karte = "Mappa"; sp_ohne = "senza ";
            sp_mit = "con ";
            sp_waehrung = "$";
        }

    }
    public string betrag_format(string speise_preis)
    {
        string preis_mit_koma = "";
        if (vorwahl != 98)
        {
            speise_preis = string.Format("{0:#0.00}", Convert.ToDecimal(speise_preis) / 100);
            return speise_preis;
        }
        else { return speise_preis; }
    }
    protected void speise_clase(TableRow elem, int gerade)
    {
        if (gerade == 1)
        {
            elem.Style.Add("background-color", "#" + speise5);

        }
        else
        {
            elem.Style.Add("background-color", "#" + speise6);
        } elem.HorizontalAlign = HorizontalAlign.Center; elem.Style.Add("font-family", speise1); elem.Style.Add("color", "#" + speise2); elem.Style.Add("font-size", speise4 + "px"); elem.Style.Add("padding-left", "7px"); elem.Style.Add("padding-right", "0px"); elem.Style.Add("padding-top", "5px"); elem.Style.Add("padding-bottom", "0px"); elem.Style.Add("font-weight", speise7);
    }
    public string gn1(string gn1, string g, int i)
    {
        //try// nur um fehler auszuschliessen 28.11.13
        //{
            string ret = G4.Gn1(int.Parse(gn1))[i][g].ToString();
            return ret;
        //}
        //catch
        //{
            //alert("id nicht gefunden oder wurde gezip gn1=(" + gn1 + ")");
            //break;
        //}
        //return id;
    }
//end exit import 2016 sep
    [AjaxPro.AjaxMethod()]
    public string update_tagesname(string pizzaria_id, string fenster_id,string wert)//07,12,13
    {
        //string mp3_text = mp3_adabtor.GetDataByGn2(int.Parse(fenster_id))[0]["mp3"].ToString();
        //string gruppen_namen = "";
        //for (int i = 0; i < mp3_text.Split('@').Length - 1; i++)
        //{
            //if (mp3_text.Split('@')[i].Split('!')[4] == "35")
            //{
                //gruppen_namen += mp3_text.Split('@')[i].Split('!')[0].Split('|')[0] + "^";
            //}
        //}
        string hauptMp3_atribut_zwei = "";
        string hmp3 = ta_hauptMp3.GetDataByResId(int.Parse(pizzaria_id))[0]["mp3"].ToString();
        hmp3 = hmp3;
        for (int i = 0; i < hmp3.Split('~')[2].Split('#').Length - 1; i++)
        {
            if (hmp3.Split('~')[2].Split('#')[i].Split('|')[3] == fenster_id)
            {
                hauptMp3_atribut_zwei += hmp3.Split('~')[2].Split('#')[i].Split('|')[0] + "|";
                hauptMp3_atribut_zwei += hmp3.Split('~')[2].Split('#')[i].Split('|')[1] + "|";
                hauptMp3_atribut_zwei += hmp3.Split('~')[2].Split('#')[i].Split('|')[2] + "|";
                hauptMp3_atribut_zwei += hmp3.Split('~')[2].Split('#')[i].Split('|')[3] + "|";
                hauptMp3_atribut_zwei += wert + "|";
                hauptMp3_atribut_zwei += hmp3.Split('~')[2].Split('#')[i].Split('|')[5] + "|";
                hauptMp3_atribut_zwei += "#";
            }
            else
                hauptMp3_atribut_zwei += hmp3.Split('~')[2].Split('#')[i] + "#";
        }
        update_haupt_mp3_modern(hmp3, 2, hauptMp3_atribut_zwei, pizzaria_id);
        return "C252\n erfolgreich gespeichert \n die Änderungen werden nach Refresh sichtbar!! ";
    }
    [AjaxPro.AjaxMethod()]
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
    public void update_haupt_mp3_modern(string hmp3, int atribut_nr, string value, string pizzaria_id)
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
    }
    [AjaxPro.AjaxMethod()]
    public string update_zutat_quelle_66(string neue_satz)//19,1,14
    {
        mp3_adabtor.UpdateQueryArt(neue_satz, 66);
        return "update erfolgreich";
    }
    [AjaxPro.AjaxMethod()]
    public string update_zutat_quelle_67(string neue_satz)//19,1,14
    {
        mp3_adabtor.UpdateQueryArt(neue_satz, 67);
        return "update erfolgreich";
    }
    [AjaxPro.AjaxMethod()]
    public void insert_farbe(string farbe)//19,1,14
    {// ff0000!67439!67435!-2!57!1814!0!-!insertWochentage!@
        mini_design_Unico_bGColor = farbe + "!" +
                                    mini_design_Unico_bGColor.Split('!')[1] + "!" +
                                    mini_design_Unico_bGColor.Split('!')[2] + "!" +
                                    mini_design_Unico_bGColor.Split('!')[3] + "!" +
                                    mini_design_Unico_bGColor.Split('!')[4] + "!" +
                                    mini_design_Unico_bGColor.Split('!')[5] + "!" +
                                    mini_design_Unico_bGColor.Split('!')[6] + "!" +
                                    mini_design_Unico_bGColor.Split('!')[7] + "!" +
                                    mini_design_Unico_bGColor.Split('!')[8] + "!@";
    }
    [AjaxPro.AjaxMethod()]
    public string abfrage_farbe()//19,1,14
    {
        return mini_design_Unico_bGColor.Split('!')[0];
    }

    [AjaxPro.AjaxMethod()]
    public void update_plz(string plz, string restaurantId)//
    {
        string hauptmp3Id = ta_hauptMp3.GetDataByResId(int.Parse(restaurantId))[0]["id"].ToString();
        //update plz_string 
        for (int i = 0; i < plz.Split('#').Length - 1; i++)
        {
            string unsere_plz = plz.Split('#')[i].Split('|')[0];
            insert_dise_plz_in_plz_hauptmp3(unsere_plz, hauptmp3Id);
        }
    }
    public void insert_dise_plz_in_plz_hauptmp3(string plz, string hauptmp3Id)
    {
        string plz_initialen = plz.Substring(0, 2);
        string mps_plz = ta_plz02.GetDataByPlz(plz_initialen)[0]["mp3"].ToString();
        string update_plz_string = "";
        for (int i2 = 0; i2 < mps_plz.Split('@').Length - 1; i2++)
        {//ye dor tu plz
            string plz_aus_der_mp3 = mps_plz.Split('@')[i2].Split('~')[0];
            if (plz != plz_aus_der_mp3)
                update_plz_string += mps_plz.Split('@')[i2] + "@";
            else
            {//plz gefunden
                update_plz_string += plz_aus_der_mp3 + "~";
                string bisherigen_hauptstringid_in_plz_mp3 = mps_plz.Split('@')[i2].Split('~')[1];
                //hala ye charkh tu idhaye hauptmp3haye plz mizane
                string neue_id_anhang = "";
                if (bisherigen_hauptstringid_in_plz_mp3.Split('|').Length - 1 == 0)//hanuz khalie wa hichi tush nist wa nemicharkhe
                    neue_id_anhang += hauptmp3Id + "|";
                else
                {
                    int test = 0;
                    for (int i3 = 0; i3 < bisherigen_hauptstringid_in_plz_mp3.Split('|').Length - 1; i3++)
                    {
                        neue_id_anhang += bisherigen_hauptstringid_in_plz_mp3.Split('|')[i3] + "|";
                        if (bisherigen_hauptstringid_in_plz_mp3.Split('|')[i3] == hauptmp3Id)//ist schon in system
                            test = 1;//yanee hastesh
                    }
                    if (test==0)//nadare hanuz bede behesh
                        neue_id_anhang += hauptmp3Id + "|";
                }
                update_plz_string += neue_id_anhang + "~";
                update_plz_string += "@";
            }
        }
        ta_plz02.UpdateQueryMp3(update_plz_string, plz_initialen);
    }
    
    [AjaxPro.AjaxMethod()]
    public string lade_plz_liste(string inizial)
    {
        string plz_alles = ta_plz02.GetDataByPlz(inizial)[0]["mp3"].ToString();
        return plz_alles;
    }
    [AjaxPro.AjaxMethod()]
    public void plz_general_insertor(string inizial, string plzahlen_und_ort)
    {
        //plzahlen_und_ort = System.Text.RegularExpressions.Regex.Replace(kaskade, "\n", "");
        //lade bisherige plz_mp3
        string biherige_plz = "";
        try
        {
            biherige_plz += ta_plz02.GetDataByPlz(inizial)[0]["mp3"].ToString();
        }
        catch { biherige_plz = ""; };
        plzahlen_und_ort += biherige_plz;
        if(biherige_plz!="")//yani list ghablan boode faghat behesh add kon
            ta_plz02.UpdateQueryMp3(plzahlen_und_ort, inizial);
        else
            ta_plz02.InsertQueryAll(0, inizial, plzahlen_und_ort);
    }
    [AjaxPro.AjaxMethod()]
    public void delete_hauptId_aus_plz(string plz, string restaurantId)//19,1,14
    {//plz = "35037Marburg"
        string hauptmp3Id = ta_hauptMp3.GetDataByResId(int.Parse(restaurantId))[0]["id"].ToString();
        //hauptmp3Id = "1"

        string plz_initialen = plz.Substring(0, 2);
        //plz_initialen = "35"
        string mps_plz = ta_plz02.GetDataByPlz(plz_initialen)[0]["mp3"].ToString();
        //mps_plz = "35037 Marburg~1|~@35037 Marburg (Ockershausen)~~@35037 Marburg (Zentrum)~~@35039 Marburg~~@35039 Marburg (Richtsberg)~~@35039 Marburg (Uni)~~@35039 Marburg (Zentrum)~~@35039 Marburg (Brudershäuschen)~~@35039 Marburg (Brügeler Gleichen)~~@35041 Dagobertshau...
        string update_plz_string = "";
        for (int i2 = 0; i2 < mps_plz.Split('@').Length - 1; i2++)
        {//ye dor tu plz
            string plz_aus_der_mp3 = mps_plz.Split('@')[i2].Split('~')[0];
            //plz_aus_der_mp3 = "35037 Marburg (Ockershausen)"
            if (plz != plz_aus_der_mp3)
                update_plz_string += mps_plz.Split('@')[i2] + "@";
            else
            {//plz gefunden
                update_plz_string += plz_aus_der_mp3 + "~";
                string bisherigen_hauptstringid_in_plz_mp3 = mps_plz.Split('@')[i2].Split('~')[1];
                //hala ye charkh tu idhaye hauptmp3haye plz mizane
                string neue_id_anhang = "";
                for (int i3 = 0; i3 < bisherigen_hauptstringid_in_plz_mp3.Split('|').Length - 1; i3++)
                {
                    if (bisherigen_hauptstringid_in_plz_mp3.Split('|')[i3] != hauptmp3Id)//ist schon in system
                        neue_id_anhang += bisherigen_hauptstringid_in_plz_mp3.Split('|')[i3] + "|";
                }
                update_plz_string += neue_id_anhang + "~";
                update_plz_string += "@";
            }
        }
        ta_plz02.UpdateQueryMp3(update_plz_string, plz_initialen);
    }

    [AjaxPro.AjaxMethod()]
    public string alle_bilder(string rh_pic_link,string folder)
    {
        
        WebClient myWebClient = new WebClient();
        Stream myStream = myWebClient.OpenRead(rh_pic_link + "/" + folder + "/");
        //Stream myStream = myWebClient.OpenRead("~/web_album/");
        StreamReader sr = new StreamReader(myStream);
        //filter
        //end filter

        string alles = sr.ReadToEnd();
        alles = ExtractHtmlInnerText(alles);
        myStream.Close();
        return alles;
    }
    public static string ExtractHtmlInnerText(string htmlText)
    {
        //Match any Html tag (opening or closing tags) 
        // followed by any successive whitespaces
        //consider the Html text as a single line
        Regex regex = new Regex("(<.*?>\\s*)+", RegexOptions.Singleline);
        // replace all html tags (and consequtive whitespaces) by spaces
        // trim the first and last space
        string resultText = regex.Replace(htmlText, " ").Trim();
        return resultText;
    }
    
    [AjaxPro.AjaxMethod()]
    public string mini_design_Unico_bGColor_()
    {
        return mini_design_Unico_bGColor;//= coords + 1 + "!" + 1 + "!" + 1 + "!133!29800!0!" + 1 + "!g" + 1 + "!@";
    }
    [AjaxPro.AjaxMethod()]
    public string mini_design_Unico_lineColor_()
    {
        return mini_design_Unico_lineColor;//= coords + 1 + "!" + 1 + "!" + 1 + "!133!29800!0!" + 1 + "!g" + 1 + "!@";
    }
    [AjaxPro.AjaxMethod()]
    public string mini_design_Unico_smsTd_()
    {
        return mini_design_Unico_smsTd;//= coords + 1 + "!" + 1 + "!" + 1 + "!133!29800!0!" + 1 + "!g" + 1 + "!@";
    }
    [AjaxPro.AjaxMethod()]
    public string mini_Zelle_gruppen_()
    {
        return mini_Zelle_gruppen;//= coords + 1 + "!" + 1 + "!" + 1 + "!133!29800!0!" + 1 + "!g" + 1 + "!@";
    }

    [AjaxPro.AjaxMethod()]
    public string mini_Zelle_zutatBibliothek_()
    {
        return mini_Zelle_zutatBibliothek;//= coords + 1 + "!" + 1 + "!" + 1 + "!133!29800!0!" + 1 + "!g" + 1 + "!@";
    }
    [AjaxPro.AjaxMethod()]
    public string mini_Zelle_SpeiseNr_()
    {
        return mini_Zelle_SpeiseNr;//= coords + 1 + "!" + 1 + "!" + 1 + "!133!29800!0!" + 1 + "!g" + 1 + "!@";
    }
    [AjaxPro.AjaxMethod()]
    public string mini_Zelle_SpeiseName_()
    {
        return mini_Zelle_SpeiseName;//= coords + 1 + "!" + 1 + "!" + 1 + "!133!29800!0!" + 1 + "!g" + 1 + "!@";
    }
    [AjaxPro.AjaxMethod()]
    public string mini_Zelle_formatid_()
    {
        return mini_Zelle_formatid;//= coords + 1 + "!" + 1 + "!" + 1 + "!133!29800!0!" + 1 + "!g" + 1 + "!@";
    }
    [AjaxPro.AjaxMethod()]
    public string mini_Zelle_zutatpreis_()
    {
        return mini_Zelle_zutatpreis;//= coords + 1 + "!" + 1 + "!" + 1 + "!133!29800!0!" + 1 + "!g" + 1 + "!@";
    }
    [AjaxPro.AjaxMethod()]
    public string mini_Zelle_bildReihenfolge_()
    {
        return mini_Zelle_bildReihenfolge;//= coords + 1 + "!" + 1 + "!" + 1 + "!133!29800!0!" + 1 + "!g" + 1 + "!@";
    }
    [AjaxPro.AjaxMethod()]
    public string mini_Zelle_herfs_()
    {
        return mini_Zelle_herfs;//= coords + 1 + "!" + 1 + "!" + 1 + "!133!29800!0!" + 1 + "!g" + 1 + "!@";
    }
    [AjaxPro.AjaxMethod()]
    public string mini_Zelle_V_zutat_speise_()
    {
        return mini_Zelle_V_zutat_speise;//= coords + 1 + "!" + 1 + "!" + 1 + "!133!29800!0!" + 1 + "!g" + 1 + "!@";
    }
    [AjaxPro.AjaxMethod()]
    public string mini_Zelle_format_etikett_()
    {
        return mini_Zelle_format_etikett;//= coords + 1 + "!" + 1 + "!" + 1 + "!133!29800!0!" + 1 + "!g" + 1 + "!@";
    } 

    [AjaxPro.AjaxMethod()]
    public void mini_Zelle_SpeiseName_l(string ein)
    {
         mini_Zelle_SpeiseName = ein;//= coords + 1 + "!" + 1 + "!" + 1 + "!133!29800!0!" + 1 + "!g" + 1 + "!@";
    }

    /// </summary>
    /// <param name="id"></param>
    [AjaxPro.AjaxMethod()]
    public string laden(string id)//19,1,14
    {
        fax_optionen = "";
        mini_design_Unico_bGColor = "";//58-id|name|gn2=Zeitfenster|
        mini_design_Unico_lineColor = "";//57-id|name|gn2=Zeitfenster|
        mini_design_Unico_smsTd = "";//63-id|name|gn2=Zeitfenster|
        mini_Zelle_gruppen = "";//35-id|name|gn2|gn3=position|
        //mini_Zelle_gruppen_coords = "";//50-id|name|gn2|
        mini_Zelle_zutatBibliothek = "";//36-id|name|gn2=gruppe|gn3|page1|
        mini_Zelle_SpeiseNr = "";//37-id|name|gn2=gruppe|gn3|page1|
        mini_Zelle_SpeiseName = "";//38-id|name|gn2=gruppe|gn3|page1|
        mini_Zelle_formatid = "";//39-id|name|gn2|
        mini_Zelle_zutatpreis = "";//43-id|name=preis|gn2=zutatId|gn3=formatid|
        mini_Zelle_bildReihenfolge = "";//55-id|gn2|gn3=position|
        //mini_Zelle_bilder = "";//56-id|gn2|gn3=picid|
        mini_Zelle_herfs = "";//40-id|gn2=speiseNummer|gn3=formatId|page1=g1-1-sp1-klein|
        mini_Zelle_V_zutat_speise = "";//49-id|name|gn2=speiseNummer|gn3=ursprungZutatId|
        //mini_Zelle_privatzutat = "";//106-id|name|gn2=speiseNummer|gn3=id~
        //mini_Zelle_Speise_etikett = "";//131-id|name|gn2=speiseNummer|gn3=id~
        mini_Zelle_format_etikett = "";//132-id|name|gn2=speiseNummer|gn3=id~
        //mini_Zelle_logo = "";//133
        //mini_Zelle_menu = "";//135-id|name|gn2=speiseNummer|gn3=id~
        mini_Zelle_rest = "";//106-id|name|gn2=speiseNummer|gn3=id~
        string mp3_text = mp3_adabtor.GetDataByGn2(int.Parse(id))[0]["mp3"].ToString();
        System.Web.UI.HtmlControls.HtmlGenericControl neu_aj_restaurantId = default(System.Web.UI.HtmlControls.HtmlGenericControl);
        neu_aj_restaurantId = new System.Web.UI.HtmlControls.HtmlGenericControl("DIV"); form1.Controls.Add(neu_aj_restaurantId);
        neu_aj_restaurantId.ID = "C2154_div_restaurantId";
        neu_aj_restaurantId.Style.Add("display", "none");
        string pizzaria_id = mp3_adabtor.GetDataByGn2(int.Parse(id))[0]["risId"].ToString();
        neu_aj_restaurantId.InnerHtml = pizzaria_id;
        System.Web.UI.HtmlControls.HtmlGenericControl neu_aj_zeitfenster_Id = default(System.Web.UI.HtmlControls.HtmlGenericControl);
        neu_aj_zeitfenster_Id = new System.Web.UI.HtmlControls.HtmlGenericControl("DIV"); form1.Controls.Add(neu_aj_zeitfenster_Id);
        neu_aj_zeitfenster_Id.ID = "C1865_neu_aj_zeitfenster_Id";
        neu_aj_zeitfenster_Id.Style.Add("display", "none");
        neu_aj_zeitfenster_Id.InnerHtml = id;


        System.Web.UI.HtmlControls.HtmlGenericControl aj_haupt_mp3 = default(System.Web.UI.HtmlControls.HtmlGenericControl);
        aj_haupt_mp3 = new System.Web.UI.HtmlControls.HtmlGenericControl("DIV"); form1.Controls.Add(aj_haupt_mp3);
        aj_haupt_mp3.ID = "C2158_haupt_mp3_div";
        aj_haupt_mp3.Style.Add("display", "none");
        aj_haupt_mp3.InnerHtml = ta_hauptMp3.GetDataByResId(int.Parse(pizzaria_id))[0]["mp3"].ToString();

        System.Web.UI.HtmlControls.HtmlGenericControl div_datensaetze = default(System.Web.UI.HtmlControls.HtmlGenericControl);
        div_datensaetze = new System.Web.UI.HtmlControls.HtmlGenericControl("DIV"); form1.Controls.Add(div_datensaetze);
        div_datensaetze.Style.Add("display", "none");
        string makulatur = "";// mp3_text;
        
        string[] zellen = mp3_text.Split('@');
        for (int i = 0; i < zellen.Length ; i++)
        {
            try
            {
                string im_zelle = zellen[i];
                ticker++;
                string[] zelle = zellen[i].Split('!');//zelle1=name;0=id;2=ng2;3=gn3;4=gn4;5=gcop;6=gb;8=page1;
                if (zelle[4] == "57") mini_design_Unico_bGColor += zellen[i] + "@";
                else if (zelle[4] == "58")
                {
                    mini_design_Unico_lineColor += zellen[i] + "@";
                    info_div_loader(zellen[i], div_datensaetze, "C_mini_design_Unico_lineColor" + zellen[i].Split('!')[1], "mini_design_Unico_lineColor");
                }
                else if (zelle[4] == "63") mini_design_Unico_smsTd += zellen[i] + "@";
                else if (zelle[4] == "35")
                {
                    mini_Zelle_gruppen += zellen[i] + "@";
                    System.Web.UI.HtmlControls.HtmlGenericControl div_mini_Zelle_gruppen = default(System.Web.UI.HtmlControls.HtmlGenericControl);
                    div_mini_Zelle_gruppen = new System.Web.UI.HtmlControls.HtmlGenericControl("DIV");
                    div_mini_Zelle_gruppen.ID = "behind" + zellen[i].Split('!')[1];
                    div_mini_Zelle_gruppen.InnerHtml = zellen[i];
                    div_mini_Zelle_gruppen.Attributes.Add("class", "inviz");
                    info_div_loader(zellen[i], div_datensaetze, "C_mini_Zelle_gruppen" + zellen[i].Split('!')[1], "mini_Zelle_gruppen");

                }
                //else if (zelle[4] == "50") mini_Zelle_gruppen_coords += zellen[i] + "@";
                else if (zelle[4] == "36")
                {
                    mini_Zelle_zutatBibliothek += zellen[i] + "@";
                    info_div_loader(zellen[i], div_datensaetze, "C_mini_Zelle_zutatBibliothek" + zellen[i].Split('!')[1], "mini_Zelle_zutatBibliothek");
                    info_div_loader(zellen[i], div_datensaetze, "C829_zutat_id_gr_class" + zellen[i].Split('!')[1], "C829_zutat_gruppen_class" + zellen[i].Split('!')[2]);
                }
                else if (zelle[4] == "37")
                {
                    mini_Zelle_SpeiseNr += zellen[i] + "@";
                    info_div_loader(zellen[i], div_datensaetze, "C_mini_Zelle_SpeiseNr" + zellen[i].Split('!')[1], "mini_Zelle_SpeiseNr");
                    info_div_loader(zellen[i], div_datensaetze, "C890_speise_id_gr_class" + zellen[i].Split('!')[1], "C1987_speise_gruppen_class" + zellen[i].Split('!')[2]);
                }
                else if (zelle[4] == "38") mini_Zelle_SpeiseName += zellen[i] + "@";
                else if (zelle[4] == "39")
                {
                    mini_Zelle_formatid += zellen[i] + "@";
                    info_div_loader(zellen[i], div_datensaetze, "C_mini_Zelle_formatid" + zellen[i].Split('!')[1], "mini_Zelle_formatid");
                }
                else if (zelle[4] == "43") mini_Zelle_zutatpreis += zellen[i] + "@";
                else if (zelle[4] == "55") mini_Zelle_bildReihenfolge += zellen[i] + "@";
                //else if (zelle[4] == "56") mini_Zelle_bilder += zellen[i] + "@";
                else if (zelle[4] == "40")
                {
                    string href_ankommlinge = zellen[i];
                    if (href_ankommlinge.Split('!').Length <= 10)//verlaengern auf 16 bit
                        href_ankommlinge += "0!0!0!0!0!0!0!0!";
                    mini_Zelle_herfs += href_ankommlinge + "@";

                    //if (zellen[i].Split('!')[8] == "f0")//melika
                    info_div_loader(zellen[i], div_datensaetze, "C1979_speise_f0-" + zellen[i].Split('!')[2], "1979");

                    info_div_loader(zellen[i], div_datensaetze, "C_mini_Zelle_herfs" + zellen[i].Split('!')[1], "mini_Zelle_herfs");
                    info_div_loader(zellen[i], div_datensaetze, "C1986_speise_id_und_format_id" + zellen[i].Split('!')[2] + "_" + zellen[i].Split('!')[3], "");
                    info_div_loader(zellen[i], div_datensaetze, "C1987_href_id_gr_class" + zellen[i].Split('!')[1], "C1987_href_gruppen_class" + zellen[i].Split('!')[7]);
                    info_div_loader(zellen[i], div_datensaetze, "C1988_href_id_format_class" + zellen[i].Split('!')[1], "C1987_href_format_class" + zellen[i].Split('!')[3]);
                    info_div_loader(zellen[i], div_datensaetze, "C1988_href_id_speise_class" + zellen[i].Split('!')[1], "C1987_href_speise_class" + zellen[i].Split('!')[2]);

                }
                else if (zelle[4] == "49")
                {
                    mini_Zelle_V_zutat_speise += zellen[i] + "@";
                    info_div_loader(zellen[i], div_datensaetze, "C_mini_Zelle_V_zutat_speise" + zellen[i].Split('!')[1], "mini_Zelle_V_zutat_speise");
                    info_div_loader(zellen[i], div_datensaetze, "C858_V_id_speise_class" + zellen[i].Split('!')[1], "C857_V_speise_class" + zellen[i].Split('!')[2]);
                    info_div_loader(zellen[i], div_datensaetze, "C858_V_id_gruppe_class" + zellen[i].Split('!')[1], "C857_V_gruppe_class" + zellen[i].Split('!')[5]);
                }
                else if (zelle[4] == "132")
                {
                    mini_Zelle_format_etikett += zellen[i] + "@";
                    info_div_loader(zellen[i], div_datensaetze, "C_mini_Zelle_format_etikett" + zellen[i].Split('!')[1], "mini_Zelle_format_etikett");
                }
                //else if (zelle[4] == "133") mini_Zelle_logo += zellen[i] + "@";
                //else if (zelle[4] == "135") mini_Zelle_menu += zellen[i] + "@";
                else mini_Zelle_rest += zellen[i] + "@";
                /**/
            }
            catch {
                makulatur += zellen[i] + "@ \n";
            };
        }
        return makulatur;
    }
    public static void info_div_loader(string satz, System.Web.UI.HtmlControls.HtmlGenericControl elem, string this_id, string class_name)
    {
        System.Web.UI.HtmlControls.HtmlGenericControl div_satzt = default(System.Web.UI.HtmlControls.HtmlGenericControl);
        div_satzt = new System.Web.UI.HtmlControls.HtmlGenericControl("DIV"); elem.Controls.Add(div_satzt);
        div_satzt.ID = this_id;
        //neu_aj_zeitfenster_Id.Style.Add("display", "none");
        //div_satzt.InnerHtml = satz + "@";
        div_satzt.InnerText  = satz + "@";
        div_satzt.Attributes.Add("class", class_name);
    }
    public void add_it_form1(string satz)
    { //////// bilder
        System.Web.UI.HtmlControls.HtmlGenericControl div_mini_Zelle_gruppen = default(System.Web.UI.HtmlControls.HtmlGenericControl);
        div_mini_Zelle_gruppen = new System.Web.UI.HtmlControls.HtmlGenericControl("DIV");
        div_mini_Zelle_gruppen.ID = "behind"+ satz.Split('!')[1];
        div_mini_Zelle_gruppen.InnerHtml = satz;
        div_mini_Zelle_gruppen.Attributes.Add("class", "inviz");
        //try
        //{
        //div_web_options.Controls.Add(div_mini_Zelle_gruppen);
        //}
        //catch { int df = 0; };
    }
    [AjaxPro.AjaxMethod()]
    public string[] foto_wwwin2()
    { //////// bilder
        string bilder_wwwin_string = "";
        string[] speisen_zellen = mini_Zelle_bildReihenfolge.Split('@');
        return speisen_zellen;
        //52336!52336!52325!1003!55!-1!3594!-!piinsert!
    }
    [AjaxPro.AjaxMethod()]
    public string[] speisen_herfs()
    {//y1|x1|y2|x2|00|picId|!52054!52053!51763!40!2283!0!-!g1|1|sp1|klein|51702|!
        string gruppe_wwwin = "";
        string[] speisen_zellen = mini_Zelle_herfs.Split('@');
        return speisen_zellen;
    }

   

    [AjaxPro.AjaxMethod()]
    public int Id_geber(string zellen, string vaterId)
    {
        string milliseconds = DateTime.Now.ToString("ffffff");
        int newId = 0;
        int anzahl = zellen.Split('@').Length;// +int.Parse(milliseconds);
        if (anzahl == 1)//noch keine Gruppe
            newId = (int.Parse(vaterId) * 100) + int.Parse(milliseconds);// idzeuger() / 100000;
        else
        {// hier wird das letzte Id ermittelt und plus 1 gemacht;
            string[] gruppe_wwwin_zellen = zellen.Split('@');
            for (int i = 0; i < gruppe_wwwin_zellen.Length - 1; i++)//gruppe Schleife
            {
                string[] gruppe_zelle = gruppe_wwwin_zellen[i].Split('!');
                string SpeiseId = gruppe_zelle[1];
                newId = int.Parse(SpeiseId) + 1;//newId ueberschreibt sich so lange bis der letzte satz erreicht ist
            }
        }
        return newId;
    }


    [AjaxPro.AjaxMethod()]
    public void update_preis(string preis, string speiseId, string FormatId)
    {
        string antwort = "";//position|xy|picId|@
        string[] gruppe_wwwin_zellen = mini_Zelle_herfs.Split('@');
        mini_Zelle_herfs = "";
        for (int i = 0; i < gruppe_wwwin_zellen.Length - 1; i++)//speise Schleife
        {
            string[] gruppe_zelle = gruppe_wwwin_zellen[i].Split('!');
            //xy_der_speise = "";
            if (speiseId == gruppe_zelle[2] && FormatId == gruppe_zelle[3])
            {
                //gruppe_zelle[0].Split('|')[4] = preis;

                gruppe_wwwin_zellen[i] = gruppe_zelle[0].Split('|')[0] + "|" +
                                         gruppe_zelle[0].Split('|')[1] + "|" +
                                         gruppe_zelle[0].Split('|')[2] + "|" +
                                         gruppe_zelle[0].Split('|')[3] + "|" +
                                         preis + "|" +
                                         gruppe_zelle[0].Split('|')[5] + "|" +
                    "!" + gruppe_zelle[1] + "!" + gruppe_zelle[2] + "!" + gruppe_zelle[3] + "!" + gruppe_zelle[4] + "!" + gruppe_zelle[5] + "!" + gruppe_zelle[6] + "!" + gruppe_zelle[7] + "!" + gruppe_zelle[8] + "!";
            }
            mini_Zelle_herfs += gruppe_wwwin_zellen[i] + "@";
        }
        //antwort += "00|" + xy_der_speise + "@";
    }
    static int ticker = 1000;
    [AjaxPro.AjaxMethod()]
    public string pic_size(string picId)
    {
        string pisize = "";
        string[] pic_zellen = mini_Zelle_bildReihenfolge.Split('@');
        for (int i = 0; i < pic_zellen.Length - 1; i++)//gruppe Schleife
        {
            ticker++;
            string[] picatribut = pic_zellen[i].Split('!');
            string gn3pic = picatribut[3];
            if (gn3pic == picId) pisize = picatribut[8];
        }
        return pisize;
    }
}
