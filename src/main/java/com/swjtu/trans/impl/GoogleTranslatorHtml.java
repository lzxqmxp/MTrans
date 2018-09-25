package com.swjtu.trans.impl;

import cn.hutool.core.util.XmlUtil;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.org.apache.bcel.internal.util.ClassPath;
import com.swjtu.lang.LANG;
import com.swjtu.trans.AbstractTranslator;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;

public final class GoogleTranslatorHtml extends AbstractTranslator {
    private static final String url = "https://translate.googleapis.com/translate_a/t";
    private static int s = 0;
    public GoogleTranslatorHtml(){
        super(url);
    }


    @Override
    public void setLangSupport() {
        langMap.put(LANG.AUTO,"auto");
        langMap.put(LANG.ZH, "zh-CN");
        langMap.put(LANG.EN, "en");
        langMap.put(LANG.JP, "ja");
        langMap.put(LANG.KOR, "ko");
        langMap.put(LANG.FRA, "fr");
        langMap.put(LANG.RU, "ru");
        langMap.put(LANG.DE, "de");
    }

    @Override
    public void setFormData(LANG from, LANG to, String text) {
        formData.put("anno","3");
        //当前client 可以用于后期制作同译使用，原文后面，紧跟译文
        formData.put("client", "te_lib");
        //当前client 可直接返回译文
//        formData.put("client", "t");
        formData.put("format", "html");
        formData.put("v", "1.0");
        formData.put("key", "AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw");
        formData.put("logld", "vTE_20180625_00");
        formData.put("sl", langMap.get(from));
        formData.put("tl", langMap.get(to));
        formData.put("sp", "nmt");
        formData.put("tc", "1");//这个值为连续请求序列
        formData.put("sr", "1");
        formData.put("mode", "1");
        formData.put("tk", generateToken(text));
        formData.put("q", text);

    }

    @Override
    public String query() throws Exception {
        URIBuilder uri = new URIBuilder(url);
        for (String key : formData.keySet()) {
            if("q".equals(key)){
                continue;
            }
            //对参数序列进行序列化提交
            if("tc".equals(key)){
                formData.put(key,String.valueOf(s++));
            }
            String value = formData.get(key);
            uri.addParameter(key, value);
        }
//      HttpUriRequest request = new HttpGet();
        HttpUriRequest request = new HttpPost(uri.toString());
        request.setHeader("Content-Type","application/x-www-form-urlencoded");
        request.setHeader("DNT","1");
        request.setHeader("User-Agent","Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36");
        request.setHeader("Origin","https://en.wikipedia.org");
        request.setHeader("Referer","https://en.wikipedia.org/");
//        ((HttpPost) request).setEntity(new http);
        List<NameValuePair> params=new ArrayList<NameValuePair>();
        params.add(new BasicNameValuePair("q", formData.get("q")));
        ((HttpPost) request).setEntity(new UrlEncodedFormEntity(params,HTTP.UTF_8));
        CloseableHttpResponse response = httpClient.execute(request);
        HttpEntity entity = response.getEntity();

        String result = EntityUtils.toString(entity, "utf-8");

        EntityUtils.consume(entity);
        response.getEntity().getContent().close();
        response.close();
//        return StringEscapeUtils.unescapeJava(result);
        return result;
    }

    @Override
    public String parses(String text) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode  =  mapper.readTree(text);
        JsonNode jsonNode1 = jsonNode.get(0);
        String replaceText = jsonNode1.asText();
        replaceText = replaceText.replaceAll("<i>[\\s\\S]*?</i>","").replaceAll("<b>","").replaceAll("</b>","");
        return replaceText;
    }

    private String token(String text) {
        String tk = "";
        ScriptEngine engine = new ScriptEngineManager().getEngineByName("js");
        try {
            FileReader reader = new FileReader("./tk/Google.js");
            engine.eval(reader);
            if (engine instanceof Invocable) {
                Invocable invoke = (Invocable)engine;
                tk = String.valueOf(invoke.invokeFunction("token", text));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return tk;
    }
    private static int[] TKK() {
        return new int[]{ 0x6337E , 0x217A58DC + 0x5AF91132 };
    }
    private static int shr32(int x , int bits) {
        if (x < 0) {
            long x_l = 0xffffffffl + x + 1;
            return (int) ( x_l >> bits );
        }
        return x >> bits;
    }
    private static int RL(int a , String b) {//I am not entirely sure what this magic does.
        for (int c = 0; c < b.length() - 2; c += 3) {
            int d = b.charAt(c + 2);
            d = d >= 65 ? d - 87 : d - 48;
            d = b.charAt(c + 1) == '+' ? shr32(a, d) : ( a << d );
            a = b.charAt(c) == '+' ? ( a + ( d & 0xFFFFFFFF ) ) : a ^ d;
        }
        return a;
    }
    private static String generateToken(String text) {
        int tkk[] = TKK();
        int b = tkk[0];
        int e = 0;
        int f = 0;
        List<Integer> d = new ArrayList<Integer>();
        for (; f < text.length(); f++) {
            int g = text.charAt(f);
            if (0x80 > g) {
                d.add(e++, g);
            } else {
                if (0x800 > g) {
                    d.add(e++, g >> 6 | 0xC0);
                } else {
                    if (0xD800 == ( g & 0xFC00 ) && f + 1 < text.length() && 0xDC00 == ( text.charAt(f + 1) & 0xFC00 )) {
                        g = 0x10000 + ( ( g & 0x3FF ) << 10 ) + ( text.charAt(++f) & 0x3FF );
                        d.add(e++, g >> 18 | 0xF0);
                        d.add(e++, g >> 12 & 0x3F | 0x80);
                    } else {
                        d.add(e++, g >> 12 | 0xE0);
                        d.add(e++, g >> 6 & 0x3F | 0x80);
                    }
                }
                d.add(e++, g & 63 | 128);
            }
        }

        int a_i = b;
        for (e = 0; e < d.size(); e++) {
            a_i += d.get(e);
            a_i = RL(a_i, "+-a^+6");
        }
        a_i = RL(a_i, "+-3^+b+-f");
        a_i ^= tkk[1];
        long a_l;
        if (0 > a_i) {
            a_l = 0x80000000l + ( a_i & 0x7FFFFFFF );
        } else {
            a_l = a_i;
        }
        a_l %= Math.pow(10, 6);
        return String.format(Locale.US, "%d.%d", a_l, a_l ^ b);
    }
}
