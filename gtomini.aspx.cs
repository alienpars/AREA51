using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
//using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Data.SqlClient;
//using System.Drawing.Bitmap; 
using System.Drawing;
using System.IO;

public partial class GridImageTemplate : System.Web.UI.Page
{
    DataSet2TableAdapters.H10TableAdapter dd = new DataSet2TableAdapters.H10TableAdapter ();
    protected void Page_Load(object sender, EventArgs e)
    {
        string Width = Request["W"];
        string Height = Request["H"];
            string id =  Request["id"];
            try
            {
                //byte[] bytes =CreateThumbnail((byte[])dd.GetDataById(int.Parse(id))[0]["pic"],int.Parse(Width),int.Parse(Height));

                byte[] bytes = (byte[])dd.GetDataById(int.Parse(id))[0]["pic"];
                Bitmap schritt1 = BytesToBitmap(bytes);
                schritt1 = ResizeBitmap(schritt1, int.Parse(Width), int.Parse(Height));
                bytes = GetBytesOfImage(schritt1);

                string contentt = dd.GetDataById(int.Parse(id))[0]["contenttype"].ToString();//ContentType
                if (contentt == "application/pdf")
                {
                    Response.AddHeader("content-type", "application/pdf");

                }
                Response.OutputStream.Write(bytes, 0, bytes.Length);
            }
            catch
            {
                Response.Write("<img src=bilder/nopic.png alt=picId ist nicht vorhanden>");
            }

    }

   public byte[] CreateThumbnail(byte[] PassedImage, int imgWidth, int imgHeight)
    {
        MemoryStream StartMemoryStream = new MemoryStream(PassedImage);
        System.Drawing.Image fullSizeImg = System.Drawing.Image.FromStream(StartMemoryStream);
        System.Drawing.Image newImg = fullSizeImg.GetThumbnailImage(imgWidth, imgHeight, null, IntPtr.Zero);
        System.IO.MemoryStream myResult = new System.IO.MemoryStream();
        newImg.Save(myResult, System.Drawing.Imaging.ImageFormat.Jpeg);
        return myResult.ToArray();
    }
    public static Bitmap BytesToBitmap(byte[] byteArray)
    {
        using (MemoryStream ms = new MemoryStream(byteArray))
        {
            Bitmap img = (Bitmap)Image.FromStream(ms);
            return img;
        }
    }
    public static byte[] GetBytesOfImage(Image img)
    {
        ImageConverter converter = new ImageConverter();
        return (byte[])converter.ConvertTo(img, typeof(byte[]));
    }
    private static Bitmap ResizeBitmap(Bitmap srcbmp, int width, int height)
    {
        Bitmap newimage = new Bitmap(width, height);
        using (Graphics g = Graphics.FromImage(newimage))
            g.DrawImage(srcbmp, 0, 0, width, height);
        return newimage;
    }
} 
