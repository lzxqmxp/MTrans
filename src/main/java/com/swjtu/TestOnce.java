package com.swjtu;

import com.swjtu.lang.LANG;
import com.swjtu.querier.Querier;
import com.swjtu.trans.AbstractTranslator;
import com.swjtu.trans.impl.GoogleTranslator;
import com.swjtu.trans.impl.GoogleTranslatorHtml;

import java.util.List;

/**
 * @ProjectName: MTrans
 * @Package: com.swjtu
 * @ClassName: TestOnce
 * @Description: java类作用描述
 * @Author: mxp
 * @CreateDate: 2018/8/31 9:21
 * @UpdateUser: 更新者
 * @UpdateDate: 2018/8/31 9:21
 * @UpdateRemark: 更新说明
 * @Version: 1.0
 */
public class TestOnce {

    public static void main(String[] args) {
        Querier<AbstractTranslator> querierTrans = new Querier<>();                   // 获取查询器

        String text = "<P><img src=\"../textimg/20180829/392.jpg\"></P><P>Philips, a well-known brand for making high-performance and innovative display solutions for home and businesses was at the recently concluded National Retail Conference (NRCE) Philippines that was held at SMX Convention Center, Pasay City, showcasing some of their innovative display monitors and showed how these solutions can be used for business applications with their unique features.</P><P>In their own booth, Philips showcased a “video wall” set-up which consists of four Ultra High Definition (UHD), or also known as 4k resolution, Philips BDM4350UC display monitors which can be used as a large format display for video advertisements and other content. This is a cost-effective solution for businesses who wants to invest on a large format display and still preserve excellent video quality.</P><P><img src=\"../textimg/20180829/396.jpg\"></P><P>Demonstrating their other products, Jack Salamia, Marketing Manager for MMD Philippines, showed that even the smaller Philips monitors can be as productive as the larger displays solutions. Examples are the Philips BDM3490UC 34” Ultrawide monitor which both offers multiple inputs and can display up to 2 video feeds at the same time which can be useful for certain business applications like CCTV setups. The curved display boasts a color accuracy of 99% SRGB, which means that the reproduction of images will be exactly the way they are when captured in real life which gives a pivotal visual experience to the user, especially for those applications where image accuracy is mission critical.<br></P><P>They also have other monitor products that still support legacy systems such as the Philips 17S4LSB for industries like banks and similar finance industries who are still making use of their investments from years ago.</P><P>Being part of the NRCE, the biggest and most important event in the Philippine retail industry opens new opportunities for Philips to expand their display solutions business as there are a lot of market potential especially here in the Philippines. With over 800 retailer owners, top executives and industry suppliers, Philips is the only monitor brand present in the expo and has fortified their brand name as one of the leading makers of high-quality and innovative display solutions. </P>                            <P>Tags: NRCE, Philips BDM3490UC 34” Ultrawide monito, Philips Monitors</P>";

        querierTrans.setParams(LANG.EN, LANG.ZH, text);    // 设置参数

        querierTrans.attach(new GoogleTranslatorHtml());                                  // 向查询器中添加 Google 翻译器

        List<String> result = querierTrans.execute();                                 // 执行查询并接收查询结果

        for (String str : result) {
            System.out.println(str);
        }
    }
}
