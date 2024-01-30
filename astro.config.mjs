import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import config from "./src/config/config.json";
import partytown from "@astrojs/partytown";

const siteBaseUrl = import.meta.env.SITE_BASE_URL;

// https://astro.build/config
export default defineConfig({
  site: siteBaseUrl ? siteBaseUrl : "http://examplesite.com",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  integrations: [
    react(),
    sitemap({
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date(),
    }),
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    mdx(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    })
  ],
  markdown: {
    remarkPlugins: [],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    },
    extendDefaultPlugins: true
  },
  image: {
    remotePatterns: [{
      protocol: "https"
    }]
  },
  redirects: {
    '/2': '/page/2',
    '/3': '/page/3',
    '/4': '/page/4',
    '/5': '/page/5',
    '/6': '/page/6',
    '/7': '/page/7',
    '/8': '/page/8',
    '/9': '/page/9',
    '/10': '/page/10',
    '/11': '/page/11',
    '/12': '/page/12',
    '/13': '/page/13',
    '/14': '/page/14',
    '/15': '/page/15',
    '/16': '/page/16',
    '/17': '/page/17',
    '/18': '/page/18',
    '/19': '/page/19',
    '/20': '/page/20',
    '/21': '/page/21',
    '/22': '/page/22',
    '/23': '/page/23',
    '/24': '/page/24',
    '/25': '/page/25',
    '/26': '/page/26',
    '/27': '/page/27',
    '/28': '/page/28',
    '/29': '/page/29',
    '/30': '/page/30',
    '/31': '/page/31',
    '/32': '/page/32',
    '/33': '/page/33',
    '/34': '/page/34',
    '/35': '/page/35',
    '/36': '/page/36',
    '/37': '/page/37',
    '/38': '/page/38',
    '/39': '/page/39',
    '/40': '/page/40',
    '/41': '/page/41',
    '/42': '/page/42',
    '/43': '/page/43',
    '/44': '/page/44',
    '/45': '/page/45',
    '/46': '/page/46',
    '/47': '/page/47',
    '/48': '/page/48',
    '/49': '/page/49',
    '/50': '/page/50',
    '/51': '/page/51',
    '/52': '/page/52',
    '/53': '/page/53',
    '/54': '/page/54',
    '/55': '/page/55',
    '/56': '/page/56',
    '/57': '/page/57',
    '/58': '/page/58',
    '/59': '/page/59',
    '/60': '/page/60',
    '/61': '/page/61',
    '/62': '/page/62',
    '/63': '/page/63',
    '/64': '/page/64',
    '/65': '/page/65',
    '/66': '/page/66',
    '/67': '/page/67',
    '/68': '/page/68',
    '/69': '/page/69',
    '/70': '/page/70',
    '/71': '/page/71',
    '/72': '/page/72',
    '/73': '/page/73',
    '/74': '/page/74',
    '/75': '/page/75',
    '/76': '/page/76',
    '/77': '/page/77',
    '/78': '/page/78',
    '/79': '/page/79',
    '/80': '/page/80',
    '/81': '/page/81',
    '/82': '/page/82',
    '/83': '/page/83',
    '/84': '/page/84',
    '/85': '/page/85',
    '/86': '/page/86',
    '/87': '/page/87',
    '/88': '/page/88',
    '/89': '/page/89',
    '/90': '/page/90',
    '/91': '/page/91',
    '/92': '/page/92',
    '/93': '/page/93',
    '/94': '/page/94',
    '/95': '/page/95',
    '/96': '/page/96',
    '/97': '/page/97',
    '/98': '/page/98',
    '/99': '/page/99',
    '/100': '/page/100',
    '/101': '/page/101',
    '/102': '/page/102',
    '/103': '/page/103',
    '/104': '/page/104',
    '/105': '/page/105',
    '/106': '/page/106',
    '/107': '/page/107',
    '/108': '/page/108',
    '/109': '/page/109',
    '/110': '/page/110',
    '/111': '/page/111',
    '/112': '/page/112',
    '/113': '/page/113',
    '/114': '/page/114',
    '/115': '/page/115',
    '/116': '/page/116',
    '/117': '/page/117',
    '/118': '/page/118',
    '/119': '/page/119',
    '/120': '/page/120',
    '/121': '/page/121',
    '/122': '/page/122',
    '/123': '/page/123',
    '/124': '/page/124',
    '/125': '/page/125',
    '/126': '/page/126',
    '/127': '/page/127',
    '/128': '/page/128',
    '/129': '/page/129',
    '/130': '/page/130',
    '/131': '/page/131',
    '/132': '/page/132',
    '/133': '/page/133',
    '/134': '/page/134',
    '/135': '/page/135',
    '/136': '/page/136',
    '/137': '/page/137',
    '/138': '/page/138',
    '/139': '/page/139',
    '/140': '/page/140',
    '/141': '/page/141',
    '/142': '/page/142',
    '/143': '/page/143',
    '/144': '/page/144',
    '/145': '/page/145',
    '/146': '/page/146',
    '/147': '/page/147',
    '/148': '/page/148',
    '/149': '/page/149',
    '/150': '/page/150',
    '/151': '/page/151',
    '/152': '/page/152',
    '/153': '/page/153',
    '/154': '/page/154',
    '/155': '/page/155',
    '/156': '/page/156',
    '/157': '/page/157',
    '/158': '/page/158',
    '/159': '/page/159',
    '/160': '/page/160',
    '/161': '/page/161',
    '/162': '/page/162',
    '/163': '/page/163',
    '/164': '/page/164',
    '/165': '/page/165',
    '/166': '/page/166',
    '/167': '/page/167',
    '/168': '/page/168',
    '/169': '/page/169',
    '/170': '/page/170',
    '/171': '/page/171',
    '/172': '/page/172',
    '/173': '/page/173',
    '/174': '/page/174',
    '/175': '/page/175',
    '/176': '/page/176',
    '/177': '/page/177',
    '/178': '/page/178',
    '/179': '/page/179',
    '/180': '/page/180',
    '/181': '/page/181',
    '/182': '/page/182',
    '/183': '/page/183',
    '/184': '/page/184',
    '/185': '/page/185',
    '/186': '/page/186',
    '/187': '/page/187',
    '/188': '/page/188',
    '/189': '/page/189',
    '/190': '/page/190',
    '/191': '/page/191',
    '/192': '/page/192',
    '/193': '/page/193',
    '/194': '/page/194',
    '/195': '/page/195',
    '/196': '/page/196',
    '/197': '/page/197',
    '/198': '/page/198',
    '/199': '/page/199',
    '/200': '/page/200',
    '/201': '/page/201',
    '/202': '/page/202',
    '/203': '/page/203',
    '/204': '/page/204',
    '/205': '/page/205',
    '/206': '/page/206',
    '/207': '/page/207',
    '/208': '/page/208',
    '/209': '/page/209',
    '/210': '/page/210',
    '/211': '/page/211',
    '/212': '/page/212',
    '/213': '/page/213',
    '/214': '/page/214',
    '/215': '/page/215',
    '/216': '/page/216',
    '/217': '/page/217',
    '/218': '/page/218',
    '/219': '/page/219',
    '/220': '/page/220',
    '/221': '/page/221',
    '/222': '/page/222',
    '/223': '/page/223',
    '/224': '/page/224',
    '/225': '/page/225',
  }
});
