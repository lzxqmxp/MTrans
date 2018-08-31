package com.swjtu;

import com.swjtu.lang.LANG;
import com.swjtu.querier.Querier;
import com.swjtu.trans.AbstractTranslator;
import com.swjtu.trans.impl.GoogleTranslator;

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

        querierTrans.setParams(LANG.ZH, LANG.EN, "如果这都不算爱，我有什么好悲哀！");    // 设置参数

        querierTrans.attach(new GoogleTranslator());                                  // 向查询器中添加 Google 翻译器

        List<String> result = querierTrans.execute();                                 // 执行查询并接收查询结果

        for (String str : result) {
            System.out.println(str);
        }
    }
}
