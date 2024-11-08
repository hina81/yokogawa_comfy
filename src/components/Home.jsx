import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { ScrollAnimator } from "react-animate-observer";

export const Home = () => {
  return (
    <>
      <div id="contents home">
        <section>
          <div className="main-visual"></div>
        </section>

        <ScrollAnimator as="section">
          <section>
            <p className="concept ">
              JR横川駅から徒歩5分。
              <br />
              広島・横川のおしゃれな居酒屋「横川コンフィ」。
              <br />
              気軽に立ち寄れる1階のカウンター席は、仕事帰りにふらっと一杯飲みたい方や一人飲みにもおすすめの居酒屋らしい雰囲気で、ほっとくつろげる空間です。
              <br />
              2階は女子会やデートにぴったりの落ち着いたこだわりの空間。
              <br />
              コース料理と飲み放題プランもご利用いただけますので、気軽なパーティーや普段のご褒美にも最適です。
              <br />
              また、貸切にも対応可能ですので、プライベートな集まりや記念日などにもご利用いただけます。
              <br />
              ご予約お待ちしております！
            </p>

            <Link
              className="btn"
              to="https://airrsv.net/yokogawacomfy/calendar"
            >
              <div className="arrow">
                <span></span>
              </div>
              予約はこちらから
            </Link>
          </section>
        </ScrollAnimator>

        <ScrollAnimator as="section">
          <section className="news">
            <h2>
              NEWS <span className="sub-title">お知らせ</span>
            </h2>

            <dl className="new">
              <dt>
                2024/11/01<span>お知らせ</span>
              </dt>
              <dd>11月からコースメニューがスタート！ご予約受付中！</dd>
              <dt>
                2024/11/01<span>お知らせ</span>
              </dt>
              <dd>ホームページを開設しました。</dd>
            </dl>
          </section>
        </ScrollAnimator>
      </div>
    </>
  );
};
export default Home;
