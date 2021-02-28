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
using System.Data.SqlClient;
using System.Drawing.Imaging;
using System.IO;
using System.Drawing;

public partial class GridImageTemplate : System.Web.UI.Page
{
    DataSet2TableAdapters.H10TableAdapter dd = new DataSet2TableAdapters.H10TableAdapter ();
    protected void Page_Load(object sender, EventArgs e)
    {
        
            
            string art=Request["art"];
            string id =  Request["id"];
            string Width = Request["w"];
            string Height = Request["h"];
            string x = Request["x"];
            string y = Request["y"];
            string oh = Request["oh"];
            string ow = Request["ow"];
            try
            {
                byte[] imageBytes = (byte[])dd.GetDataById(int.Parse(id))[0]["pic"];
                using (MemoryStream ms = new MemoryStream(imageBytes, 0, imageBytes.Length))
                {
                    //write the memory stream out for use
                    ms.Write(imageBytes, 0, imageBytes.Length);

                    //stuff the memory stream into an image to work with
                    System.Drawing.Image img = System.Drawing.Image.FromStream(ms, true);

                    //create the destination (cropped) bitmap
                    Bitmap bmpCropped = new Bitmap(int.Parse(ow), int.Parse(oh));

                    //create the graphics object to draw with
                    Graphics g = Graphics.FromImage(bmpCropped);

                    Rectangle rectDestination = new Rectangle(0, 0, bmpCropped.Width, bmpCropped.Height);
                    //Rectangle rectCropArea = new Rectangle(X, Y, Width, Height);
                    Rectangle rectCropArea = new Rectangle(int.Parse(x), int.Parse(y), int.Parse(Width), int.Parse(Height));

                    //draw the rectCropArea of the original image to the rectDestination of bmpCropped
                    g.DrawImage(img, rectDestination, rectCropArea, GraphicsUnit.Pixel);

                    //release system resources
                    g.Dispose();

                    MemoryStream stream = new MemoryStream();
                    bmpCropped.Save(stream, System.Drawing.Imaging.ImageFormat.Jpeg);
                    Byte[] bytes = stream.ToArray();

                    //profile.Avatar = bytes;
                    //_profileRepository.SaveProfile(profile);
                    Response.OutputStream.Write(bytes, 0, bytes.Length);

                }
                string contentt = dd.GetDataById(int.Parse(id))[0]["contenttype"].ToString();//ContentType
                if (contentt == "application/pdf")
                {
                    Response.AddHeader("content-type", "application/pdf");

                }
            }
            catch
            {
                Response.Write("<img src=bilder/nopic.png alt=picId ist nicht vorhanden>");
            }
    }
   
}
