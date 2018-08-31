package com.swjtu.trans.impl;

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
import java.util.List;

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
//        formData.put("client", "te_lib");
        formData.put("client", "t");
        formData.put("format", "html");
        formData.put("v", "1.0");
        formData.put("key", "AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw");
        formData.put("logld", "vTE_20180625_00");
        formData.put("sl", langMap.get(from));
        formData.put("tl", langMap.get(to));
        formData.put("sp", "nmt");
        formData.put("tc", "1");//这个值为连续请求序列
        formData.put("sr", "1");
        formData.put("mode", "2");
        formData.put("tk", token(text));
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
                System.out.println(s);

            }
            String value = formData.get(key);
            uri.addParameter(key, value);
        }
//      HttpUriRequest request = new HttpGet();
        HttpUriRequest request = new HttpPost(uri.toString());
        request.setHeader("Content-Type","application/x-www-form-urlencoded");
        request.setHeader("DNT","1");
        request.setHeader("User-Agent","Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36");
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
        return StringEscapeUtils.unescapeJava(result);
    }

    @Override
    public String parses(String text) throws IOException {
//        ObjectMapper mapper = new ObjectMapper();
//        JsonNode jsonNode  =  mapper.readTree(text);
//        JsonNode jsonNode1 = jsonNode.get(0);
//        Iterator<JsonNode> jsonNodeIterator = jsonNode1.iterator();
//        StringBuffer sb = new StringBuffer();
//        while(jsonNodeIterator.hasNext()){
//            JsonNode node = jsonNodeIterator.next();
//            sb.append(node.get(0));
//        }
//        StringEscapeUtils
        return text;
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
}
