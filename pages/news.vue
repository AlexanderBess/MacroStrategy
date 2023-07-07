<template>
  <div class="news">
    <div class="news__head">
      <span class="news__title">News</span>
    </div>
    <div class="news__image-head">
      <span class="image-head__text">Bitcoin is a bank in cyberspace, run by incorruptible software, offering a global, affordable, simple, & secure savings account to billions of people that don't have the option or desire to run their own hedge fund.</span>
      <a class="news__view-all" target="_blank" href="https://www.youtube.com/watch?v=vveGfIfoDkc&ab_channel=OnlyTheSAVVY">
        <span class="news__view-all-text">Watch the video</span>
        <img style="width: 24px; height: 24px;" src="~assets/img/ui/Arrow-Right.svg"/>
      </a>
    </div>
    <div class="news__content news__content_first">
      <div class="news__twit">
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">MicroStrategy has acquired an additional 12,333 BTC for ~$347.0 million at an average price of $28,136 per <a href="https://twitter.com/hashtag/bitcoin?src=hash&amp;ref_src=twsrc%5Etfw">#bitcoin</a>. As of 6/27/23 <a href="https://twitter.com/MicroStrategy?ref_src=twsrc%5Etfw">@MicroStrategy</a> hodls 152,333 <a href="https://twitter.com/search?q=%24BTC&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$BTC</a> acquired for ~$4.52 billion at an average price of $29,668 per bitcoin. <a href="https://twitter.com/search?q=%24MSTR&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$MSTR</a> <a href="https://t.co/joHo1gEnR0">https://t.co/joHo1gEnR0</a>
          </p>&mdash; Michael Saylor⚡️ (@saylor) <a href="https://twitter.com/saylor/status/1674025857063571456?ref_src=twsrc%5Etfw">June 28, 2023</a>
        </blockquote>
      </div>
      <div class="news__container news__container_small">
        <div
            v-for="item in newsArrayOne"
            class="news__card news__card_small">
          <newsCard
              :card="item"
              mode="small"/>
        </div>
      </div>
    </div>
    <div class="news__content">
      <div class="news__post">
        <newsCard
            v-for="item in newsArrayHalfTwo"
            :card="item"
            mode="big"/>
      </div>
    </div>
    <div class="news__content news__content_wrap">
<!--      <div class="news__container news__container_small">-->
        <newsCard
          v-for="item in newsArrayTwo"
          :card="item"/>
<!--      </div>-->
    </div>
    <div class="news__content">
      <div class="news__post">
        <newsCard
          :card="newsArrayHalfThree"
          mode="big"/>
      </div>
      <div class="news__container news__container_small">
        <newsCard
          v-for="item in newsArrayThree"
          :card="item"
          mode="small"/>
      </div>
    </div>
    <div class="news__content">
      <newsCard
          v-for="item in newsArrayFour"
          :card="item"/>
    </div>
  </div>
</template>

<script>
import newsCard from "/components/newsCard"
export default {
  name: "news",
  components: {
    newsCard
  },
  data() {
    return {
      newsArrayOne: [
        {
          img: require("assets/img/news/1.png"),
          link: 'https://twitter.com/saylor/status/1670478311632302080',
          author: 'Bloomberg HT',
          title: 'The Appeal Of Bitcoin',
          date: 'Jun 18, 2023'
        },
        {
          img: require("assets/img/news/2.png"),
          link: 'https://twitter.com/saylor/status/1668681012115546120',
          author: 'Bloomberg',
          title: 'Regulatory Clarity Is Going To Drive Bitcoin Adoption',
          date: 'Jun 13, 2023'
        },
        {
          img: require("assets/img/news/3.png"),
          link: 'https://twitter.com/saylor/status/1653508990335172611?s=20',
          author: 'CNBC',
          title: 'Bitcoin Adoption Is Being Driven By The Progressive Global Loss Of Confidence In Fiat Currencies',
          date: 'May 2, 2023'
        },
        {
          img: require("assets/img/news/4.png"),
          link: 'https://twitter.com/saylor/status/1621548108269191168',
          author: 'CNBC',
          title: 'The Success Of MicroStrategy, Global Adoption Of Bitcoin And Lightning',
          date: 'Feb 2, 2023'
        }
      ],
      newsArrayHalfTwo: [
        {
          img: require("assets/img/news/5.png"),
          link: 'https://www.youtube.com/watch?v=v4na2pycrcc',
          author: 'Peter H. Diamandis',
          title: 'The Future Is Bitcoin',
          date: 'Nov 3, 2022'
        },
        {
          img: require("assets/img/news/6.png"),
          link: 'https://www.youtube.com/watch?v=mP0f2s39GDs',
          author: 'The Bitcoin Layer',
          title: 'Bitcoin As Property',
          date: 'Oct 21, 2022'
        }
      ],
      newsArrayTwo: [
        {
          img: require("assets/img/news/7.png"),
          link: 'https://www.youtube.com/watch?v=J38-PQ6X8HI',
          author: 'Portal Orange',
          title: 'Satoshi Opened A Portal Into Cyberspace',
          date: 'Jun 12, 2023'
        },
        {
          img: require("assets/img/news/8.png"),
          link: 'https://www.youtube.com/watch?v=OGmdOIXzB64',
          author: 'Robert Breedlove',
          title: 'The Nature Of Energy',
          date: 'May 17, 2023'
        },
        {
          img: require("assets/img/news/9.png"),
          link: 'https://www.youtube.com/watch?v=H-1ddZClFgQ',
          author: 'David Lin',
          title: 'Humanity’s Greatest Threats: \'It’s Going To Be Very Scary\' (Pt. 2/2)',
          date: 'May 11, 2023'
        },
        {
          img: require("assets/img/news/10.png"),
          link: 'https://www.youtube.com/watch?v=Sp5RCtfHGzU',
          author: 'David Lin',
          title: 'Your Money Is \'Dying\' As Banks Fail; Can Bitcoin Survive CBDCs? (Pt. 1/2)',
          date: 'May 10, 2023'
        },
        {
          img: require("assets/img/news/11.png"),
          link: 'https://www.youtube.com/watch?v=8cX1aptP5Io',
          author: 'The Bitcoin',
          title: 'The 24 Risks Of Equities With Michael Saylor',
          date: 'Feb 15, 2023'
        },
        {
          img: require("assets/img/news/12.png"),
          link: 'https://www.youtube.com/watch?v=1jOUnFH-Ins',
          author: 'Bitcoin Mining Council',
          title: 'Bitcoin Mining Council Q4 2022 Briefing',
          date: 'Jan 18, 2023'
        }
      ],
      newsArrayHalfThree: {
        img: require("assets/img/news/13.png"),
        link: 'https://www.youtube.com/watch?v=dXix6OIU1hw',
        author: 'MicroStrategy',
        title: 'Bitcoin is Digital Energy - Michael Saylor at the MIT Bitcoin Expo',
        date: 'May 7, 2022'
      },
      newsArrayThree: [
        {
          img: require("assets/img/news/14.png"),
          link: 'https://twitter.com/saylor/status/1592609346277363713?s=20',
          author: 'Fox News',
          title: 'Michael Saylor\'s Conversation On Crypto Carnage',
          date: 'Nov 15, 2022'
        },
        {
          img: require("assets/img/news/15.png"),
          link: 'https://twitter.com/saylor/status/1592205393333485570?s=20&t=VyTXF1cQfQNlBy5tjtT0aA',
          author: 'Yahoo Finance',
          title: 'Regulatory Clarity Is Going To Drive Bitcoin Adoption',
          date: 'Nov 14, 2022'
        },
        {
          img: require("assets/img/news/16.png"),
          link: 'https://twitter.com/BitcoinNews2905/status/1590743007544107008?s=20',
          author: 'CNBC',
          title: 'Discussion On Virtues Of Bitcoin',
          date: 'Nov 10, 2022'
        }
      ],
      newsArrayFour: [
        {
          img: require("assets/img/news/17.png"),
          link: 'https://www.youtube.com/watch?v=mC43pZkpTec',
          author: 'Lex Fridman',
          title: 'Bitcoin, Inflation, and the Future of Money',
          date: 'Apr 14, 2022'
        },
        {
          img: require("assets/img/news/18.png"),
          link: 'https://www.youtube.com/watch?v=K0Mh-mpemjA',
          author: 'Bitcoin Magazine',
          title: 'The Future is Bright w/ Michael Saylor & Cathie Wood - Bitcoin Conference',
          date: 'Apr 7, 2022'
        },
        {
          img: require("assets/img/news/19.png"),
          link: 'https://www.youtube.com/watch?v=HHbxPpEHEZk',
          author: 'Crypto Banter',
          title: 'Is A $10,000,000 Bitcoin Possible?',
          date: 'Mar 25, 2022'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  gap: 32px;
  padding-top: 32px;
  padding-bottom: 144px;
  &__title {
    color: var(--typo-primary, #171A1C);

    /* Header/Header H2 */
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
  }
  &__image-head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    width: 100%;
    height: 280px;
    border-radius: 24px;
    padding: 144px 32px 40px 32px;
    background: url('assets/img/news/background.jpg') no-repeat;
    background-size: cover;
  }
  &__head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  &__text-link {
    color: var(--control-ghost-typo, #D9232E);
    font-size: 20px;

    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
  &__view-all {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;
    border-radius: 8px;
    background: var(--control-ghost-bg-default, #FFF);

    text-decoration: none;
  }
  &__view-all:hover {
    background: #E3E5E8;
  }
  &__view-all-text {
    padding-top: 3px;
    color: var(--control-ghost-typo, #D9232E);

    /* Button/Small Button Text */
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  &__content {
    display: flex;
    gap: 32px;
    &_wrap {
      flex-wrap: wrap;
    }
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
}
.image-head {
  &__text {
    max-width: 720px;
    color: var(--bg-main, #FFF);
    /* Text/Big Text Medium */
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  }
}
@include _1199{
  .news {
    padding: 32px 16px 72px 16px;
    &__image-head {
      flex-direction: column;
      align-items: flex-start;
      padding: 72px 32px 40px 32px;
    }
    &__content {
      justify-content: space-between;
      flex-wrap: wrap;
      &_first {
        flex-direction: column;
      }
    }
  }
}
@include _767 {
  .news {
    &__content {
      align-items: center;
    }
    &__image-head {
      gap: 32px;
      padding: 32PX 24PX;
    }
  }
}
@include _575 {
  .news {
    &__post {
      max-width: 378px;
    }
    &__image-head {
      height: auto;
    }
  }
}
</style>
