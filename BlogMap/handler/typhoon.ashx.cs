using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogMap.handler
{
    /// <summary>
    /// typhoon 的摘要说明
    /// </summary>
    public class typhoon : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //context.Response.ContentType = "text/plain";
            //context.Response.Write("Hello World");
            string type = "";
            if (context.Request["type"] != null)
            {
                type = context.Request["type"].ToString();
            }
            switch (type)
            {
                case "1"://getTFBH
                    getTFBH(context);
                    break;
                case "2":
                    getTFLSLJByTFBH(context);
                    break;
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
        public void getTFBH(HttpContext context)
        {
            string year = "";
            if (context.Request["year"] != null)
            {
                year = context.Request["year"].ToString();
            }
            string name = "";
            if (context.Request["name"] != null)
            {
                name = context.Request["name"].ToString();
            }
            string r = "";
            if (context.Request["r"] != null)
            {
                r = context.Request["r"].ToString();
            }
            string postdatas = "year=" + year + "&r=" + r;
            //byte[] postData = System.Text.Encoding.ASCII.GetBytes("year=" + year + "&r=" + r);
            byte[] postData = System.Text.Encoding.UTF8.GetBytes(postdatas);
            if (name != null && name != "")
            {
                postdatas = "name=" + name + "&r=" + r;
                //postData = System.Text.Encoding.ASCII.GetBytes("name=" + name + "&r=" + r);
                postData = System.Text.Encoding.UTF8.GetBytes(postdatas);
            }
            System.Net.WebClient wCient = new System.Net.WebClient();
            wCient.Headers.Add("Content-Type", "application/x-www-form-urlencoded");
            //byte[] responseData = wCient.UploadData("http://www.zjtyphoon.com/getNowData.php?action=getTFBH", "POST", postData);
            byte[] responseData = wCient.UploadData("http://www.zjtyphoon.com/getNowData.php?action=getTFBH&"+ postdatas, "POST", postData);
            string returnStr = System.Text.Encoding.UTF8.GetString(responseData);//返回接受的数据 
            context.Response.ContentType = "text/plain";
            context.Response.Write(returnStr);
        }
        public void getTFLSLJByTFBH(HttpContext context)
        {
            string TFBH = "";
            if (context.Request["TFBH"] != null)
            {
                TFBH = context.Request["TFBH"].ToString();
            }
            string postdatas = "TFBH=" + TFBH;
            byte[] postData = System.Text.Encoding.ASCII.GetBytes("TFBH=" + TFBH);
            System.Net.WebClient wCient = new System.Net.WebClient();
            wCient.Headers.Add("Content-Type", "application/x-www-form-urlencoded");
            //byte[] responseData = wCient.UploadData("http://www.zjtyphoon.com/getNowData.php?action=getTFLSLJByTFBH", "POST", postData);
            byte[] responseData = wCient.UploadData("http://www.zjtyphoon.com/getNowData.php?action=getTFLSLJByTFBH&" + postdatas, "POST", postData);
            string returnStr = System.Text.Encoding.UTF8.GetString(responseData);//返回接受的数据 
            context.Response.ContentType = "text/plain";
            context.Response.Write(returnStr);
        }

    }
}