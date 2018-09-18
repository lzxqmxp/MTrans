package com.swjtu.trans.impl;

import cn.hutool.core.util.RandomUtil;
import cn.hutool.crypto.digest.DigestUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.swjtu.lang.LANG;
import com.swjtu.trans.AbstractTranslator;
import com.swjtu.util.Util;
import org.apache.http.HttpEntity;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.util.EntityUtils;

import java.io.IOException;

public final class YoudaoTranslatorApi extends AbstractTranslator {
    private static final String url = "https://openapi.youdao.com/api";

    public YoudaoTranslatorApi(){
        super(url);
    }


    @Override
    public void setLangSupport() {
        langMap.put(LANG.AUTO, "auto");
        langMap.put(LANG.ZH, "zh");
        langMap.put(LANG.EN, "en");
        langMap.put(LANG.JP, "jp");
        langMap.put(LANG.KOR, "kor");
        langMap.put(LANG.FRA, "fra");
        langMap.put(LANG.RU, "ru");
        langMap.put(LANG.DE, "de");
    }

    @Override
    public void setFormData(LANG from, LANG to, String text) {
        formData.put("from", langMap.get(from));
        formData.put("to", langMap.get(to));
        formData.put("q", text);
        formData.put("appKey", "5951a9fde2018380");
    }

    @Override
    public String query() throws Exception {
        formData.put("salt",RandomUtil.randomNumbers(5));
        formData.put("sign", DigestUtil.md5Hex(formData.get("appKey")+formData.get("q")+formData.get("salt")+"cWDUbjswrsqPSVrL37d4AEqadNml4uow"));

        HttpPost request = new HttpPost(url);

        request.setEntity(new UrlEncodedFormEntity(Util.map2list(formData), "UTF-8"));
//        request.setHeader("Cookie", "BAIDUID=16FFA1EAAF1A387C647A22DB9FC81DAE:FG=1; BIDUPSID=16FFA1EAAF1A387C647A22DB9FC81DAE; PSTM=1514024118; __cfduid=d2f7fd3a024d1ee90b8a817ddd866d9bc1514812370; REALTIME_TRANS_SWITCH=1; FANYI_WORD_SWITCH=1; HISTORY_SWITCH=1; SOUND_SPD_SWITCH=1; SOUND_PREFER_SWITCH=1; BDUSS=E83bFplYnBRen5hV3FKNDZCM3ZSZldWMVBjV1ZGbW9uTTVwcjFYVDQzTGVFTlJhQVFBQUFBJCQAAAAAAAAAAAEAAADnIjgkcG9obG9ndTQxNTA3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN6DrFreg6xaS; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; H_PS_PSSID=1429_21103_18559_22075; PSINO=3; locale=zh; Hm_lvt_64ecd82404c51e03dc91cb9e8c025574=1525654866,1525657996,1525658015,1525671031; Hm_lpvt_64ecd82404c51e03dc91cb9e8c025574=1525671031; to_lang_often=%5B%7B%22value%22%3A%22en%22%2C%22text%22%3A%22%u82F1%u8BED%22%7D%2C%7B%22value%22%3A%22zh%22%2C%22text%22%3A%22%u4E2D%u6587%22%7D%5D; from_lang_often=%5B%7B%22value%22%3A%22zh%22%2C%22text%22%3A%22%u4E2D%u6587%22%7D%2C%7B%22value%22%3A%22en%22%2C%22text%22%3A%22%u82F1%u8BED%22%7D%5D");
//        request.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36");
        CloseableHttpResponse response = httpClient.execute(request);
        HttpEntity entity = response.getEntity();
        String result = EntityUtils.toString(entity, "UTF-8");
        EntityUtils.consume(entity);
        response.getEntity().getContent().close();
        response.close();

        return result;
    }

    @Override
    public String parses(String text) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
//        return mapper.readTree(text).path("trans_result").findPath("dst").toString();
        return text;
    }
}
