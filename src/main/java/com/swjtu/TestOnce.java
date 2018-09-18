package com.swjtu;

import com.swjtu.lang.LANG;
import com.swjtu.querier.Querier;
import com.swjtu.trans.AbstractTranslator;
import com.swjtu.trans.impl.BaiduTranslatorApi;
import com.swjtu.trans.impl.YoudaoTranslator;
import com.swjtu.trans.impl.YoudaoTranslatorApi;

import java.io.UnsupportedEncodingException;
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

    public static void main(String[] args) throws InterruptedException, UnsupportedEncodingException {
        Querier<AbstractTranslator> querierTrans = new Querier<>();                   // 获取查询器

      String text = "I think we need to talk about the flying San Diego rabbit.";
//        String text= "<P>Do ảnh hưởng của bão số 3 và hoàn lưu bão, trên địa bàn TP Hà Nội những ngày qua có mưa lớn trên diện rộng. Cùng với đó, nước lũ từ thượng nguồn đổ về khiến nước sông Bùi, sông Tích chảy qua Hà Nội dâng cao, gây ngập lụt nặng nề cho một số vùng ngoại thành, nhất là các huyện Chương Mỹ, Quốc Oai. Những ngày này, cả thành phố Hà Nội đang dồn sức giúp đỡ người dân vùng ngập lụt sớm ổn định cuộc sống...</P><P>Trưa 1-8, mặc dù nước sông Bùi tiếp tục rút, nhưng khắp tuyến đê tả sông Bùi vẫn tập trung lực lượng thường trực bảo vệ đê. Tại khu vực Trạm bơm Trung Hoàng, xã Thanh Bình, huyện Chương Mỹ, một điểm đê xung yếu thuộc bờ tả sông Bùi, lực lượng tại chỗ đã có mặt. Ðồng chí Nguyễn Tiến Anh Quyến, Chỉ huy trưởng Quân sự xã Thanh Bình cho biết, từ ngày 21-7, nước lũ bắt đầu dâng cao, lực lượng tại chỗ của xã thường xuyên túc trực và chủ động đắp bao cát trên mặt đê. Nhờ đó, dù nước sông Bùi lên nhanh, cao hơn mặt đê từ 30 đến 40 cm, nhưng không tràn qua đê. Ngày 30-7, khi nước sông Bùi đạt đỉnh 7,51 m, gần 200 dân quân tự vệ, hội viên các đoàn thể của xã đã tham gia hộ đê suốt đêm. Huyện cũng cử lực lượng vũ trang về xã hỗ trợ người dân đắp thêm bao cát, với chiều dài hơn 3 km, bảo đảm không để nước sông tràn qua đê. Toàn bộ hoa màu, vật nuôi, tài sản và người dân trong đê đều bảo đảm an toàn.</P><P>Quan sát tại hiện trường, tuyến đê tả sông Bùi thuộc huyện Chương Mỹ được đắp bao cát cao gần 1 m. Mặc dù ở một số điểm xung yếu, nước vẫn cao hơn mặt đê, nhưng không có hiện tượng nước tràn qua đê. Tại khu vực ngập lụt thuộc bờ hữu sông Bùi, đến chiều 1-8 vẫn còn hơn 3.600 hộ dân bị ngập, hơn 6.000 người dân phải sơ tán, gần 1.000 hộ dân bị ngừng cung cấp điện. Mưa lũ đã làm gần 2.500 ha lúa, hoa màu, cây ăn quả, khu vực nuôi trồng thủy sản bị úng ngập.</P><P>Lãnh đạo UBND huyện Chương Mỹ cho biết, đây là trận ngập lịch sử. Trong những lần ngập vào năm 2008 và năm 2017, chỉ sau khoảng mười ngày là nước rút, nhưng lần này nước ngập từ ngày 21-7, đạt đỉnh vào ngày 30-7 và đang rút chậm. Mực nước sông Bùi tại Yên Duyệt hồi 17 giờ ngày 1-8 đạt 7,22 m, trên báo động 3 là 0,22 m, giảm 0,29 m so với đỉnh lũ. Mặc dù nước đang rút, nhưng huyện đã chuẩn bị kỹ lưỡng các phương án, bảo đảm an toàn cho tuyến đê tả sông Bùi.</P><P>Tại huyện Quốc Oai, mực nước sông Tích sáng 1-8 lên trên báo động 3 là 0,22 m, làm ba thôn gồm: Phú Cao (xã Phú Cát), Thông Ðạt (xã Liệp Tuyết) và Bến Vôi (xã Cấn Hữu) bị cô lập hoàn toàn do nước lũ bao vây. Toàn huyện có hơn 700 ngôi nhà bị ngập từ 1 đến 3 m, hai ngôi nhà phải di dời khẩn cấp. Thống kê sơ bộ, mưa lũ đã gây ngập úng hơn 1.800 ha lúa, gần 120 ha rau màu và nhiều diện tích cây ăn quả, cây hằng năm, lâu năm của huyện.</P><P>Trên thực tế, những xã nêu trên của huyện Chương Mỹ và huyện Quốc Oai nằm trong vùng quy hoạch thoát lũ, cho nên lực lượng chức năng cùng người dân sinh sống tại đây rất chủ động mỗi khi mưa lũ đến. Trong những ngày mưa lũ vừa qua, khi nước sông dâng cao, tại các đoạn đê xung yếu luôn có cán bộ, các ban, ngành, đoàn thể và đông đảo người dân tham gia hộ đê, đồng thời chuẩn bị phương tiện, vật tư và lực lượng sẵn sàng khi có tình huống xấu xảy ra. Tại các xã bị ngập lụt, lực lượng tại chỗ và bộ đội đã dầm mình trong nước để giúp người dân sơ tán người và tài sản đến nơi an toàn. Anh Cấn Văn Hà, ở thôn Cấn Vôi, xã Cấn Hữu, huyện Quốc Oai chia sẻ, mặc dù mưa lũ gây cô lập nhưng gia đình vẫn đầy đủ lương thực, nước uống. Gia đình anh cảm thấy ấm lòng khi đại diện chính quyền, các ban, ngành, đoàn thể của huyện, xã, thôn thường xuyên đến thăm hỏi, động viên và hỗ trợ bốn thùng mì tôm, ba thùng nước uống, bột canh, đèn pin, nến thắp sáng, thuốc chữa bệnh.</P><P>Theo báo cáo nhanh của Ban Chỉ huy phòng, chống lụt bão huyện Quốc Oai, đến nay huyện đã hỗ trợ hơn 660 hộ dân ở ba thôn bị nước cô lập hơn 1.250 thùng mì tôm, hơn 1.100 thùng nước uống. Huyện Chương Mỹ hỗ trợ người dân vùng ngập hơn 7.300 thùng mì tôm, 20 tấn gạo, hơn 5.000 thùng nước uống, bảo đảm không có người nào bị đói, thiếu nước uống. Phó Chủ tịch UBND huyện Chương Mỹ Hoàng Minh Hiến cho biết, cùng với hỗ trợ ổn định đời sống người dân vùng ngập nước, huyện đặc biệt quan tâm công tác phòng, chống dịch bệnh, bảo vệ, chăm sóc sức khỏe nhân dân. Huyện chỉ đạo các cơ quan y tế chuẩn bị đủ thuốc, nhân lực và các điều kiện phục vụ công tác sơ cấp cứu, điều trị. Tính đến ngày 1-8, huyện tổ chức các đoàn khám, chữa bệnh cho gần 1.600 người, cấp phát gần 4.700 túi thuốc, hóa chất cho các xã, thị trấn để khử trùng môi trường, 15.200 lọ thuốc tra mắt, 8.800 tuýp thuốc chữa bệnh ngoài da, 2.740 túi phèn chua xử lý nguồn nước. Bên cạnh đó, các cơ sở y tế của huyện tổ chức tiêu độc, vệ sinh môi trường cho gần 350 hộ dân; bố trí tổ cấp cứu cơ động thường trực tại đê tả sông Bùi để kịp thời xử lý các tình huống…</P><P>Những ngày qua, lãnh đạo thành phố, MTTQ, cùng nhiều ban, ngành, đoàn thể, các quận, huyện và tổ chức, cá nhân đã trực tiếp đến thăm hỏi, động viên và hỗ trợ người dân vùng ngập nước. Trực tiếp đi kiểm tra công tác phòng, chống lụt bão tại huyện Chương Mỹ, Chủ tịch UBND thành phố Hà Nội Nguyễn Ðức Chung yêu cầu chính quyền địa phương và các lực lượng chức năng tiếp tục tổ chức ứng trực bảo vệ đê, chuẩn bị mọi phương án để giúp người dân ổn định cuộc sống sau lũ. Huyện Chương Mỹ là khu vực nằm trong quy hoạch vùng thoát lũ, cho nên thành phố sẽ sớm có các giải pháp giúp người dân khắc phục tình trạng này, từ việc thiết kế nhà cửa, lắp đặt hệ thống cung cấp nước sạch, hạ tầng giao thông…, để giúp người dân có cuộc sống tốt hơn.</P><P>Hỗ trợ năm trường học ở Chương Mỹ</P><P>Ngày 1-8, đại diện lãnh đạo Sở Giáo dục và Ðào tạo Hà Nội và Công đoàn ngành giáo dục Hà Nội đến thăm hỏi, động viên cán bộ, giáo viên, học sinh một số xã thuộc huyện Chương Mỹ bị ảnh hưởng nặng bởi ngập úng. Ðoàn đã trao một tỷ đồng trích từ Quỹ vận động ủng hộ nhà giáo vùng cao, vùng xa, vùng đặc biệt khó khăn của cán bộ, giáo viên, nhân viên ngành giáo dục Hà Nội. Số tiền một tỷ đồng được trao cho năm trường bị ngập úng nặng (mỗi trường 200 triệu đồng), gồm: Trường THCS Nam Phương Tiến A, Trường tiểu học Nam Phương Tiến A; Trường mầm non Nam Phương Tiến, Trường tiểu học Quảng Bị (Khu 2) và Trường THCS Hoàng Văn Thụ.</P><P>PV</P>";
        querierTrans.setParams(LANG.AUTO, LANG.ZH, text);    // 设置参数
//        querierTrans.attach(new GoogleTranslatorHtml());     // 向查询器中添加 Google 翻译器
//      querierTrans.attach(new BaiduTranslatorApi());
        querierTrans.attach(new YoudaoTranslatorApi());
        for (int i = 0; i < 1; i++) {
            List<String> result = querierTrans.execute();    // 执行查询并接收查询结果
            for (String str : result) {
                System.out.println(str);
            }
        }
//        System.out.println(DigestUtil.md5Hex("123456").length());
    }
}