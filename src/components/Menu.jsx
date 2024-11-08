import React from "react";
import "../styles/Menu.css";
import { ScrollAnimator } from "react-animate-observer";

export default function Menu() {
  return (
    <div className="menu-div">
      <div className="menu">
        <div className="margin"></div>

        <section id="menu1">
          <ScrollAnimator as="section">
            <h2>
              COURSE<span className="sub-title">コース料理</span>
            </h2>
            <div>
              当店のコース料理は、旬の食材をふんだんに使ったバランスの取れたメニューが自慢です。
              <br />
              ぜひ、お気軽にお楽しみください！
            </div>

            <div>
              <h3>3000円コース</h3>
              {/* <div className="course-image"></div> */}
              <p>
                定番料理を楽しむならこのコース！
                <br />
                前菜からメインディッシュまで、彩り豊かな料理が揃っています。
              </p>
              <div className="course-list">
                <ul>
                  <li>前菜３種盛り</li>
                  <li>揚げ物</li>
                  <li>小イワシの南蛮漬け</li>
                  <li>本日のサラダ</li>
                  <li>チキンステーキ</li>
                  <li>パスタ</li>
                  <li>デザート</li>
                </ul>
              </div>
            </div>
          </ScrollAnimator>
          <ScrollAnimator as="section">
            <div>
              <h3>5000円コース</h3>
              {/* <div className="course-image"></div> */}
              <p>
                ちょっと特別な気分を味わいたい方におすすめ。
                <br />
                特別な日や大切な方とのお食事にぴったりの内容です。
              </p>

              <div className="course-list">
                <ul>
                  <li>前菜３種盛り</li>
                  <li>刺身四種盛り</li>
                  <li>揚げ物</li>
                  <li>小イワシの南蛮漬け</li>
                  <li>本日のサラダ</li>
                  <li>塩サバのアクアパッツァ</li>
                  <li>牛ヒレステーキ</li>
                  <li>パスタ</li>
                  <li>デザート</li>
                </ul>
              </div>
            </div>
          </ScrollAnimator>

          <ScrollAnimator as="section">
            <div>
              <h3>牡蠣フェア限定オプション</h3>
              <p>お好みに合わせて以下の牡蠣メニューに変更いただけます。</p>
              <ul>
                <li>
                  <strong>+500円:</strong>{" "}
                  コースのパスタを「牡蠣のパスタ」に変更
                </li>
                <li>
                  <strong>+1500円:</strong> 殻付き牡蠣追加 ＋
                  パスタを「牡蠣のパスタ」に変更 ＋ 牛ヒレステーキに変更
                </li>
              </ul>
            </div>
          </ScrollAnimator>

          <ScrollAnimator as="section">
            <div>
              <h3>飲み放題</h3>
              <p>
                飲み放題は2時間制で、お好みのお酒やソフトドリンクをお楽しみいただけます。
              </p>

              <ul>おひとり様: 1,980円</ul>

              <div className="course-list">
                <ul>
                  <li>ビール（サッポロ生ビール）</li>
                  <li>ハイボール</li>
                  <li>サワー（パイン、マンゴー、男梅）</li>
                  <li>焼酎（芋・麦）</li>
                  <li>ワイン（赤・白）</li>
                  <li>スパークリングワイン</li>
                  <li>
                    ソフトドリンク（ウーロン茶、ジャスミン茶、コーラ、ジンジャーエール）
                  </li>
                </ul>
              </div>
            </div>
          </ScrollAnimator>
        </section>

        <section id="menu2">
          <ScrollAnimator as="section">
            <h2>
              FOOD<span class="sub-title">お食事</span>
            </h2>
            <div>
              新鮮な食材を使った小鉢やサラダ、おつまみを揃えております。お食事を楽しみながらゆったりとした時間をお過ごしください。
            </div>

            <div class="menu-category">
              <h3>肉</h3>
              <div className="food-image1 fimg"></div>
              <dl>
                <div class="menu-item">
                  <dt>石見豚のローストポーク</dt>
                  <dd>880円</dd>
                </div>
                <div class="menu-item">
                  <dt>チキンステーキ</dt>
                  <dd>780円</dd>
                </div>
                <div class="menu-item">
                  <dt>手羽先の柚子こしょう焼</dt>
                  <dd>680円</dd>
                </div>
                <div class="menu-item">
                  <dt>豚トロキムチ</dt>
                  <dd>680円</dd>
                </div>
                <div class="menu-item">
                  <dt>牛ヒレステーキ</dt>
                  <dd>2480円</dd>
                </div>
              </dl>
            </div>
          </ScrollAnimator>

          <ScrollAnimator as="section">
            <div class="menu-category">
              <h3>魚介</h3>
              <div className="food-image2 fimg"></div>
              <dl>
                <div class="menu-item">
                  <dt>本日のカルパッチョ</dt>
                  <dd>880円</dd>
                </div>
                <div class="menu-item">
                  <dt>オイルサーディン 七味しょうゆ</dt>
                  <dd>530円</dd>
                </div>
                <div class="menu-item">
                  <dt>塩サバのアクアパッツァ</dt>
                  <dd>780円</dd>
                </div>
                <div class="menu-item">
                  <dt>えびマヨ</dt>
                  <dd>880円</dd>
                </div>
                <div class="menu-item">
                  <dt>ガーリックシュリンプ</dt>
                  <dd>880円</dd>
                </div>
                <span class="note">※バゲット追加 200円</span>
              </dl>
            </div>
          </ScrollAnimator>

          <ScrollAnimator as="section">
            <div class="menu-category">
              <h3>小鉢</h3>
              <div className="food-image3 fimg"></div>
              <dl>
                <div class="menu-item">
                  <dt>塩ゆで枝豆</dt>
                  <dd>450円</dd>
                </div>
                <div class="menu-item">
                  <dt>うまキムチのせ冷やっこ</dt>
                  <dd>450円</dd>
                </div>
                <div class="menu-item">
                  <dt>自家製たこわさ</dt>
                  <dd>450円</dd>
                </div>
                <div class="menu-item">
                  <dt>チャンジャ</dt>
                  <dd>450円</dd>
                </div>
                <div class="menu-item">
                  <dt>しめサバ</dt>
                  <dd>520円</dd>
                </div>
                <div class="menu-item">
                  <dt>小イワシの南蛮漬け</dt>
                  <dd>480円</dd>
                </div>
              </dl>
            </div>
          </ScrollAnimator>

          <ScrollAnimator as="section">
            <div class="menu-category">
              <h3>サラダ</h3>
              <div className="food-image4 fimg"></div>
              <dl>
                <div class="menu-item">
                  <dt>明太子ポテトサラダ</dt>
                  <dd>580円</dd>
                </div>
                <div class="menu-item">
                  <dt>塩辛ポテトサラダ</dt>
                  <dd>580円</dd>
                </div>
                <div class="menu-item">
                  <dt>カプレーゼ</dt>
                  <dd>680円</dd>
                </div>
                <div class="menu-item">
                  <dt>生ハムトマトサラダ</dt>
                  <dd>880円</dd>
                </div>
                <div class="menu-item">
                  <dt>海老とベーコンのシーザーサラダ</dt>
                  <dd>980円</dd>
                </div>
              </dl>
            </div>
          </ScrollAnimator>

          <ScrollAnimator as="section">
            <div class="menu-category">
              <h3>おつまみ</h3>
              <div className="food-image5 fimg"></div>
              <dl>
                <div class="menu-item">
                  <dt>もつ煮込み</dt>
                  <dd>480円</dd>
                </div>
                <div class="menu-item">
                  <dt>トラふぐ皮ポン酢</dt>
                  <dd>450円</dd>
                </div>
                <div class="menu-item">
                  <dt>広島名物せんじがら</dt>
                  <dd>680円</dd>
                </div>
                <div class="menu-item">
                  <dt>枝豆ブラックペッパー</dt>
                  <dd>480円</dd>
                </div>
                <div class="menu-item">
                  <dt>やみつきキュウリ</dt>
                  <dd>480円</dd>
                </div>
                <div class="menu-item">
                  <dt>無限キャベツ</dt>
                  <dd>580円</dd>
                </div>
                <div class="menu-item">
                  <dt>味玉ペペロンチーノ</dt>
                  <dd>480円</dd>
                </div>
                <div class="menu-item">
                  <dt>酒盗クリームチーズ</dt>
                  <dd>480円</dd>
                </div>
                <div class="menu-item">
                  <dt>自家製レーズンバター</dt>
                  <dd>480円</dd>
                </div>
                <span class="note">※バゲット追加 200円</span>
              </dl>
            </div>
          </ScrollAnimator>

          <ScrollAnimator as="section">
            <div class="menu-category">
              <h3>たまご</h3>
              <div className="food-image6 fimg"></div>
              <dl>
                <div class="menu-item">
                  <dt>だし巻きたまご</dt>
                  <dd>630円</dd>
                </div>
                <div class="menu-item">
                  <dt>オムレツ（チーズ or めんたいこ）</dt>
                  <dd>600円</dd>
                </div>
              </dl>
            </div>
          </ScrollAnimator>

          <ScrollAnimator as="section">
            <div class="menu-category">
              <h3>あげもの</h3>
              <div className="food-image7 fimg"></div>
              <dl>
                <div class="menu-item">
                  <dt>とりの唐揚げ</dt>
                  <dd>680円</dd>
                </div>
                <div class="menu-item">
                  <dt>チキン南蛮</dt>
                  <dd>780円</dd>
                </div>
                <div class="menu-item">
                  <dt>もつ天</dt>
                  <dd>580円</dd>
                </div>
                <div class="menu-item">
                  <dt>小イワシの天ぷら</dt>
                  <dd>530円</dd>
                </div>
                <div class="menu-item">
                  <dt>タコの天ぷら</dt>
                  <dd>580円</dd>
                </div>
                <div class="menu-item">
                  <dt>ゴボウの唐あげ</dt>
                  <dd>480円</dd>
                </div>
                <div class="menu-item">
                  <dt>なんこつの唐あげ</dt>
                  <dd>680円</dd>
                </div>
                <div class="menu-item">
                  <dt>フライドポテト</dt>
                  <dd>480円</dd>
                </div>
                <span class="note">※チーズ追加 100円</span>
              </dl>
            </div>
          </ScrollAnimator>

          <ScrollAnimator as="section">
            <div class="menu-category">
              <h3>ごはん</h3>
              <div className="food-image8 fimg"></div>
              <dl>
                <div class="menu-item">
                  <dt>塩むすび</dt>
                  <dd>280円</dd>
                </div>
                <div class="menu-item">
                  <dt>お茶づけ</dt>
                  <dd>480円</dd>
                </div>
              </dl>
            </div>
          </ScrollAnimator>

          <ScrollAnimator as="section">
            <div class="menu-category">
              <h3>デザート</h3>
              <div className="food-image9"></div>
              <dl>
                <div class="menu-item">
                  <dt>バニラアイス</dt>
                  <dd>450円</dd>
                </div>
                <div class="menu-item">
                  <dt>抹茶アイス</dt>
                  <dd>450円</dd>
                </div>
                <div class="menu-item">
                  <dt>カタラーナ</dt>
                  <dd>580円</dd>
                </div>
                <div class="menu-item">
                  <dt>
                    ハニーバタートースト
                    <br />
                    （バニラアイスのせ）
                  </dt>
                  <dd>890円</dd>
                </div>
              </dl>
            </div>
          </ScrollAnimator>
        </section>

        <ScrollAnimator as="section">
          <section id="menu3">
            <h2>
              DRINK<span class="sub-title">お飲み物</span>
            </h2>
            <div className="drink-image"></div>
            <p className="img-info">※画像はフルーツスパークリングです。</p>
            <div class="menu-category">
              <h3>ビール</h3>
              <dl>
                <div class="menu-item">
                  <dt>サッポロ生ビール黒ラベル</dt>
                  <dd>550円</dd>
                </div>
                <div class="menu-item">
                  <dt>ノンアルコールビール</dt>
                  <dd>400円</dd>
                </div>
                <div class="menu-item">
                  <dt>
                    サッポロラガービール<span class="label">瓶</span>
                  </dt>
                  <dd>660円</dd>
                </div>
                <div class="menu-item">
                  <dt>
                    アサヒスーパードライ<span class="label">瓶</span>
                  </dt>
                  <dd>660円</dd>
                </div>
                <div class="menu-item">
                  <dt>
                    キリン一番搾り<span class="label">瓶</span>
                  </dt>
                  <dd>660円</dd>
                </div>
                <div class="menu-item">
                  <dt>
                    キリンハートランド<span class="label">瓶</span>
                  </dt>
                  <dd>660円</dd>
                </div>
              </dl>
              <h3>ハイボール</h3>
              <dl>
                <div class="menu-item">
                  <dt>デュワーズハイボール</dt>
                  <dd>450円</dd>
                </div>
                <div class="menu-item">
                  <dt>角ハイボール</dt>
                  <dd>550円</dd>
                </div>
              </dl>

              <h3>サワー</h3>
              <dl>
                <div class="menu-item">
                  <dt>氷彩プレーンサワー</dt>
                  <dd>420円</dd>
                </div>
                <div class="menu-item">
                  <dt>パイン</dt>
                  <dd>450円</dd>
                </div>
                <div class="menu-item">
                  <dt>マンゴー</dt>
                  <dd>450円</dd>
                </div>
                <div class="menu-item">
                  <dt>男梅</dt>
                  <dd>450円</dd>
                </div>
              </dl>
              <h3>ワイン</h3>
              <dl>
                <div class="menu-item">
                  <dt>グラスワイン（赤）</dt>
                  <dd>420円</dd>
                </div>
                <div class="menu-item">
                  <dt>グラスワイン（白）</dt>
                  <dd>420円</dd>
                </div>
              </dl>
              <h3>スパークリングワイン</h3>
              <dl>
                <div class="menu-item">
                  <dt>ポールスター</dt>
                  <dd>450円</dd>
                </div>
              </dl>
              <h3>フルーツスパークリング</h3>
              <dl>
                <div class="menu-item">
                  <dt>イチゴ</dt>
                  <dd>660円</dd>
                </div>
                <div class="menu-item">
                  <dt>メロン</dt>
                  <dd>660円</dd>
                </div>
                <div class="menu-item">
                  <dt>パイナップル</dt>
                  <dd>660円</dd>
                </div>
                <div class="menu-item">
                  <dt>マンゴー</dt>
                  <dd>660円</dd>
                </div>
                <div class="menu-item">
                  <dt>ミックスベリー</dt>
                  <dd>660円</dd>
                </div>
              </dl>

              <h3>カクテル（ジンジャー割・ソーダ割）</h3>
              <dl>
                <div class="menu-item">
                  <dt>キミア</dt>
                  <dd>660円</dd>
                </div>
                <div class="menu-item">
                  <dt>プルシア</dt>
                  <dd>660円</dd>
                </div>
                <div class="menu-item">
                  <dt>ミスティア</dt>
                  <dd>660円</dd>
                </div>
              </dl>

              <h3>ウイスキー（ロック）</h3>
              <dl>
                <div class="menu-item">
                  <dt>マルウのウイスキー</dt>
                  <dd>500円</dd>
                </div>
                <div class="menu-item">
                  <dt>サントリー角</dt>
                  <dd>530円</dd>
                </div>
                <div class="menu-item">
                  <dt>戸河内 黒</dt>
                  <dd>600円</dd>
                </div>
              </dl>
              <h3>日本酒</h3>
              <dl>
                <div class="menu-item">
                  <dt>賀茂泉七割五部</dt>
                  <dd>グラス550円</dd>
                </div>
                <div class="menu-item">
                  <dt>神雷</dt>
                  <dd>グラス660円</dd>
                </div>
                {/* あああああああ */}
              </dl>
              <h3>梅酒（ロック・ソーダ割）</h3>
              <dl>
                <div class="menu-item">
                  <dt>さつまの梅酒</dt>
                  <dd>550円</dd>
                </div>
                <div class="menu-item">
                  <dt>八海山の梅酒 黒</dt>
                  <dd>550円</dd>
                </div>
                <div class="menu-item">
                  <dt>赤短の梅酒</dt>
                  <dd>550円</dd>
                </div>
              </dl>
              <h3>焼酎</h3>
              <dl>
                <div class="menu-item">
                  <dt>
                    二階堂<span class="label">麦</span>
                  </dt>
                  <dd>グラス450円</dd>
                </div>
                <div class="menu-item">
                  <dt>
                    中々<span class="label">麦</span>
                  </dt>
                  <dd>グラス550円</dd>
                </div>
                <div class="menu-item">
                  <dt>
                    兼八<span class="label">麦</span>
                  </dt>
                  <dd>グラス660円</dd>
                </div>
                <div class="menu-item">
                  <dt>
                    黒霧島<span class="label">芋</span>
                  </dt>
                  <dd>グラス450円</dd>
                </div>
                <div class="menu-item">
                  <dt>
                    伊佐美<span class="label">芋</span>
                  </dt>
                  <dd>グラス550円</dd>
                </div>
                <div class="menu-item">
                  <dt>
                    山大一<span class="label">芋</span>
                  </dt>
                  <dd>グラス660円</dd>
                </div>
              </dl>

              <h3>ソフトドリンク</h3>
              <dl>
                <div class="menu-item">
                  <dt>ソライロコーラ</dt>
                  <dd>450円</dd>
                </div>
                <div class="menu-item">
                  <dt>ウーロン茶</dt>
                  <dd>380円</dd>
                </div>
                <div class="menu-item">
                  <dt>ジャスミン茶</dt>
                  <dd>380円</dd>
                </div>
                <div class="menu-item">
                  <dt>ジンジャーエール</dt>
                  <dd>380円</dd>
                </div>
              </dl>
            </div>
          </section>
        </ScrollAnimator>
      </div>
    </div>
  );
}
