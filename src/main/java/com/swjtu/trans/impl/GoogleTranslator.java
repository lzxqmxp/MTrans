package com.swjtu.trans.impl;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.swjtu.lang.LANG;
import com.swjtu.trans.AbstractTranslator;
import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
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

public final class GoogleTranslator extends AbstractTranslator {
    private static final String url = "https://translate.google.cn/translate_a/single";

    public GoogleTranslator(){
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
        formData.put("client", "t");
        formData.put("sl", langMap.get(from));
        formData.put("tl", langMap.get(to));
        formData.put("hl", "zh-CN");
        formData.put("dt", "at");
        formData.put("dt", "bd");
        formData.put("dt", "ex");
        formData.put("dt", "ld");
        formData.put("dt", "md");
        formData.put("dt", "qca");
        formData.put("dt", "rw");
        formData.put("dt", "rm");
        formData.put("dt", "ss");
        formData.put("dt", "t");
        formData.put("ie", "UTF-8");
        formData.put("oe", "UTF-8");
        formData.put("source", "btn");
        formData.put("ssel", "0");
        formData.put("tsel", "0");
        formData.put("kc", "0");
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
            String value = formData.get(key);
            uri.addParameter(key, value);
        }
//        HttpUriRequest request = new HttpGet();
        HttpUriRequest request = new HttpPost(uri.toString());
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

        return result;
    }

    @Override
    public String parses(String text) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode  =  mapper.readTree(text);
        JsonNode jsonNode1 = jsonNode.get(0);
        Iterator<JsonNode> jsonNodeIterator = jsonNode1.iterator();
        StringBuffer sb = new StringBuffer();
        while(jsonNodeIterator.hasNext()){
            JsonNode node = jsonNodeIterator.next();
            sb.append(node.get(0));
        }
        return sb.toString();
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
