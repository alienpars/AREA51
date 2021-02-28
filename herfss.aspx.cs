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

public partial class herfss : System.Web.UI.Page
{
    //DataSet2TableAdapters.risUTableAdapter GrisU = new DataSet2TableAdapters.risUTableAdapter();
    DataSet2TableAdapters.mp3TableAdapter mp3_adabtor = new DataSet2TableAdapters.mp3TableAdapter();
    DataSet2TableAdapters.GArtTableAdapter Gart = new DataSet2TableAdapters.GArtTableAdapter();
    [AjaxPro.AjaxMethod()]
    public void Page_Load(object sender, EventArgs e)
    {
        AjaxPro.Utility.RegisterTypeForAjax(typeof(herfss), this.Page);
        //id = Request["id"];
        id = Request.Url.Query.Split('?')[1];
    }
    static string id;

    static string mini_design_Unico_bGColor = "";//57-id|name|gn2=Zeitfenster|
    static string mini_design_Unico_lineColor = "";//58-id|name|gn2=Zeitfenster|
    static string mini_design_Unico_smsTd = "";//63-id|name|gn2=Zeitfenster|
    static string mini_Zelle_gruppen = "";//35-id|name|gn2|gn3=position|
    static string mini_Zelle_gruppen_coords = "";//50-id|name|gn2|
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
    static string mini_Zelle_logo = "";//133-id|name|gn2=speiseNummer|gn3=id~
    [AjaxPro.AjaxMethod()]
    public void laden()//19,1,14
    {
        mini_design_Unico_bGColor = "";//58-id|name|gn2=Zeitfenster|
        mini_design_Unico_lineColor = "";//57-id|name|gn2=Zeitfenster|
        mini_design_Unico_smsTd = "";//63-id|name|gn2=Zeitfenster|
        mini_Zelle_gruppen = "";//35-id|name|gn2|gn3=position|
        mini_Zelle_gruppen_coords = "";//50-id|name|gn2|
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
        mini_Zelle_logo = "";//133
        mini_Zelle_rest = "";//106-id|name|gn2=speiseNummer|gn3=id~
        string mp3_text =  mp3_adabtor.GetDataByGn2(int.Parse(id))[0]["mp3"].ToString();
        string[] zellen = mp3_text.Split('@');
        int ticker = 0;
        for (int i = 0; i < zellen.Length - 1; i++)
        {
            ticker++;
            string[] zelle = zellen[i].Split('!');//zelle1=name;0=id;2=ng2;3=gn3;4=gn4;5=gcop;6=gb;8=page1;
            if (zelle[4] == "57") mini_design_Unico_bGColor += zellen[i] + "@";
            else if (zelle[4] == "58") mini_design_Unico_lineColor += zellen[i] + "@";
            else if (zelle[4] == "63") mini_design_Unico_smsTd += zellen[i] + "@";
            else if (zelle[4] == "35") mini_Zelle_gruppen += zellen[i] + "@";
            else if (zelle[4] == "50") mini_Zelle_gruppen_coords += zellen[i] + "@";
            else if (zelle[4] == "36") mini_Zelle_zutatBibliothek += zellen[i] + "@";
            else if (zelle[4] == "37") mini_Zelle_SpeiseNr += zellen[i] + "@";
            else if (zelle[4] == "38") mini_Zelle_SpeiseName += zellen[i] + "@";
            else if (zelle[4] == "39") mini_Zelle_formatid += zellen[i] + "@";
            else if (zelle[4] == "43") mini_Zelle_zutatpreis += zellen[i] + "@";
            else if (zelle[4] == "55") mini_Zelle_bildReihenfolge += zellen[i] + "@";
            //else if (zelle[4] == "56") mini_Zelle_bilder += zellen[i] + "@";
            else if (zelle[4] == "40") mini_Zelle_herfs += zellen[i] + "@";
            else if (zelle[4] == "49") mini_Zelle_V_zutat_speise += zellen[i] + "@";
            //else if (zelle[4] != "106") mini_Zelle_privatzutat += zellen[i] + "@";
            //else if (zelle[4] == "131") mini_Zelle_Speise_etikett += zellen[i] + "@";
            else if (zelle[4] == "132") mini_Zelle_format_etikett += zellen[i] + "@";
            else if (zelle[4] == "133") mini_Zelle_logo += zellen[i] + "@";
            else mini_Zelle_rest += zellen[i] + "@";
        }/**/
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
    public string mini_Zelle_gruppen_coords_()
    {
        return mini_Zelle_gruppen_coords;//= coords + 1 + "!" + 1 + "!" + 1 + "!133!29800!0!" + 1 + "!g" + 1 + "!@";
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
    public string mini_Zelle_logo_()
    {
        return mini_Zelle_logo;//= coords + 1 + "!" + 1 + "!" + 1 + "!133!29800!0!" + 1 + "!g" + 1 + "!@";
    }

    [AjaxPro.AjaxMethod()]
    public string G_Art_auf(int art)//gestellt 31.12.13  abrufer:
    {
        string frage="";
        try
        {
            //string Vater = Gart.GetDataByArt(art)[0]["Vater"].ToString();
            //string ArtId = Gart.GetDataByArt(art)[0]["ArtId"].ToString();
            //string AT = Gart.GetDataByArt(art)[0]["AT"].ToString();
            //string Innerhalt = Gart.GetDataByArt(art)[0]["Innerhalt"].ToString();
            frage = Gart.GetDataByArt(art)[0]["Beschreibung"].ToString();
            //string Art = Gart.GetDataByArt(art)[0]["Art"].ToString();
            //string tex = Gart.GetDataByArt(art)[0]["tex"].ToString();
        }
        catch {
            frage="Art unbekant";
        }
        return frage;
    }
        [AjaxPro.AjaxMethod()]
    public string Alle_G_Arten()//gestellt 31.12.13  abrufer: javascript.js funktion start();
    {
        string frage="";
        for (int i = 0; i < Gart.GetData().Count; i++)
        {
            string ArtId = Gart.GetDataByAll()[i]["ArtId"].ToString();
            ArtId = RemoveDoubleSpaceCharacters(ArtId);
            string Beschreibung = Gart.GetDataByAll()[i]["Beschreibung"].ToString();
            Beschreibung = RemoveDoubleSpaceCharacters(Beschreibung);
            frage += ArtId + "@" + Beschreibung + "@" + "|";
        }
        return frage;
    }
    public string RemoveDoubleSpaceCharacters(string text)
    {
        return System.Text.RegularExpressions.Regex.Replace(text, " [ ]+", "");
    }
}
