<template>

</template>

<script>
export default {
  name: "news",
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
      newsArrayTwo: [
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
        },
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
      newsArrayThree: [
        {
          img: require("assets/img/news/13.png"),
          link: 'https://www.youtube.com/watch?v=dXix6OIU1hw',
          author: 'MicroStrategy',
          title: 'Bitcoin is Digital Energy - Michael Saylor at the MIT Bitcoin Expo',
          date: 'May 7, 2022'
        },
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

<style scoped>

</style>
