import { ScrollAnimator } from "react-animate-observer";
import "../styles/Access.css";

export default function Access() {
  return (
    <div className="access">
      <div className="margin"></div>
      <h2>
        INFO <span className="sub-title">店舗情報</span>
      </h2>
      <iframe
        title="アクセス"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13166.89529219298!2d132.4508819!3d34.408365!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a990027f1fa5f%3A0x1425edea4964d359!2z5qiq5bed44Kz44Oz44OV44Kj!5e0!3m2!1sja!2sjp!4v1730389138646!5m2!1sja!2sjp"
        height="450"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <ScrollAnimator as="section">
        <table id="table01">
          <tr>
            <th>営業時間</th>
            <td>
              17:00～23:30
              <br />
              （ラストオーダー 23:15）
            </td>
          </tr>
          <tr>
            <th>定休日</th>
            <td>日曜日</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>
              〒733-0011
              <br />
              広島県広島市西区横川2丁目5-4
            </td>
          </tr>
          <tr>
            <th>アクセス</th>
            <td>横川駅から徒歩5分</td>
          </tr>
          <tr>
            <th>支払い方法</th>
            <td>キャッシュレス決済あり</td>
          </tr>
          <tr>
            <th>予約</th>
            <td>ご予約はお電話またはオンラインで承っております。</td>
          </tr>
          <tr>
            <th>お問い合わせ</th>
            <td>TEL 082-909-2024</td>
          </tr>
        </table>
      </ScrollAnimator>
    </div>
  );
}
