export interface IUserMessaging {
  code: string;
  message: string;
  data: IUserMessaging_data;
}

export interface IUserMessaging_data {
  noti_cnt: NotiCnt;
  noti_show: number;
  show: number;
  new_bucket_id: number;
  new_bucket_name: string;
  new_bucket_shortcode: string;
  bucket: number;
  new_bucket_all: NewBucketAll;
  package_details: PackageDetails;
  package_details_1: PackageDetails1;
  siteblock: Siteblock;
  profile: string;
  menu: Menu;
  bann_head: any;
  bann_short: any;
  bann_url: string;
  bannerlist: Bannerlist[];
  bann_link: string;
  banner_hash: string;
  next_webinar: INext_webinar_data;
  show_verdict_banner: string;
  header_webinar: HeaderWebinar;
  data: Data2;
  mojo_stocks: MojoStock[];
  featured_model_portfolio: FeaturedModelPortfolio[];
  premium: number;
  premiumurl: string;
  epochtime: number;
  canAccessProduct: number;
  show_featured_banner: number;
  featuredBanner: FeaturedBanner[];
  sitecard: Sitecard;
  web_popupshow: string;
  web_popup: any[];
  offershow: number;
  offerwebinar_txt: OfferwebinarTxt;
  sub_popupshow: string;
  country_list: CountryList[];
  pmsg: string;
  subscounter: string;
  subscountertext: string;
  device_type: string;
  show_rec: string;
  is_rec: string;
  puser: string;
  uname: string;
  trial: string;
  utrial: number;
  trial_isemail_confirmed: number;
  isdisclaimer: number;
  isnewfreetrial: string;
  modelportfoliourl: string;
  usages: Usages;
  isInfinityNewUser: number;
  isdisclaimerifh: number;
  screener_paid: number[];
}

interface NotiCnt {
  web_push: number;
  web_show: number;
}

interface NewBucketAll {
  '1': N1;
}

interface N1 {
  shortcode: string;
  segmentid: number;
}

interface PackageDetails {
  p1: P1;
  p2: P2;
  heading1: any;
  heading2: string;
  note: string;
  anniversary: number;
  complimentary: number;
  complimentary_days: string;
  toptxt: string;
}

interface P1 {
  plan_name: string;
  pkg_id: string;
  month: string;
  amount: string;
  orgamt: string;
  perc: string;
  monthval: string;
  monthly_billed: string;
  toptext: string;
  stickyhead: any;
  stickylink: string;
}

interface P2 {
  plan_name: string;
  pkg_id: string;
  month: string;
  amount: string;
  orgamt: string;
  perc: string;
  monthval: string;
  monthly_billed: string;
  toptext: string;
  stickyhead: any;
  stickylink: string;
}

interface PackageDetails1 {
  women: Women;
  senior_citizen: SeniorCitizen;
}

interface Women {
  p1: P12;
  p2: P22;
  p3: P3;
  heading2: string;
}

interface P12 {
  plan_name: string;
  pkg_id: string;
  month: string;
  monthly_billed: string;
  amount: string;
  orgamt: string;
  perc: string;
  monthval: string;
  toptext: string;
}

interface P22 {
  plan_name: string;
  pkg_id: string;
  month: string;
  monthly_billed: string;
  amount: string;
  orgamt: string;
  perc: string;
  monthval: string;
  toptext: string;
}

interface P3 {
  pkg_id: string;
  plan_name: string;
  month: string;
  month1: string;
  amount: string;
  orgamt: string;
  perc: string;
  monthval: string;
  toptext: string;
}

interface SeniorCitizen {
  p1: P13;
  p2: P23;
  p3: P32;
  heading2: string;
}

interface P13 {
  plan_name: string;
  pkg_id: string;
  month: string;
  monthly_billed: string;
  amount: string;
  orgamt: string;
  perc: string;
  monthval: string;
  toptext: string;
}

interface P23 {
  plan_name: string;
  pkg_id: string;
  month: string;
  monthly_billed: string;
  amount: string;
  orgamt: string;
  perc: string;
  monthval: string;
  toptext: string;
}

interface P32 {
  pkg_id: string;
  plan_name: string;
  month: string;
  month1: string;
  amount: string;
  orgamt: string;
  perc: string;
  monthval: string;
  toptext: string;
}

interface Siteblock {
  mf: number;
  paid: number;
}

interface Menu {
  menu_head: string;
  menu_sum: string;
  menu_img: string;
}

interface Bannerlist {
  url: string;
  link: string;
}

export interface INext_webinar_data {
  _id: Id;
  id: number;
  topic: string;
  date: string;
  day: string;
  time: string;
  link: string;
  subject: string;
  agenda: string;
  text: string;
  text2: string;
  page_title: string;
  insert_date: string;
  userid: number;
  social_img: any;
  facilitator: string;
  facilitator_title: string;
  facilitator_title_sender: string;
  facilitator_title_end: string;
  facilitator_img: string;
  webinar_logo: string;
  utm_key: string;
  webinar_medium: string;
  webinar_type: any;
  banner_text: any;
  date_time: string;
  usertype: string;
  designation: string;
  landing_image: string;
  menu_card: string;
  webinar_section: string;
  webinar_topic: string;
  small_banner_img: string;
  web_head: string;
  big_banner_img: string;
  special_text: string;
  menucard_txt: string;
  speakers: string;
  demo_webinar: string;
  speaker_img: string;
  livebanner_img: string;
  livebanner_header: string;
  livebanner_desc: string;
  popup_text: string;
  pms_banner: string;
  pms_banner_img: string;
  pms_banner_subtext: string;
  diwali_banner: string;
  is_event: string;
  event_link: string;
  event_desc: string;
  highlightslink: string;
  fullvideolink: string;
  sunday_webinar: string;
  show_offer: string;
  offer_text1: string;
  offer_text2: string;
  offer_url: string;
  lastmodified: Lastmodified;
  ispaid: number;
  ga: Ga;
  webinar_page_link: string;
  findout_text: string;
  web_diwali_img: string;
  web_dt: string;
  registered: string;
  reserve_text_small: string;
  portfolio_reg_text: string;
  sitecard_reg_text: string;
  reserve_text: string;
  sitecard_link: string;
  isyoutubelive: string;
  show_banner: string;
  webinar_class: string;
  webinar_dt: string;
  webinar_card_img: string;
  stockwebinaroption: string;
}

interface Id {
  $oid: string;
}

interface Lastmodified {
  $date: Date;
}

interface Date {
  $numberLong: string;
}

interface Ga {
  type: string;
  hitType: string;
  eventCategory: string;
  eventAction: string;
  eventLabel: string;
}

interface HeaderWebinar {
  _id: Id2;
  id: number;
  topic: string;
  date: string;
  day: string;
  time: string;
  link: string;
  subject: string;
  agenda: string;
  text: string;
  text2: string;
  page_title: string;
  insert_date: string;
  userid: number;
  social_img: any;
  facilitator: string;
  facilitator_title: string;
  facilitator_title_sender: string;
  facilitator_title_end: string;
  facilitator_img: string;
  webinar_logo: string;
  utm_key: string;
  webinar_medium: string;
  webinar_type: any;
  banner_text: any;
  date_time: string;
  usertype: string;
  designation: string;
  landing_image: string;
  menu_card: string;
  webinar_section: string;
  webinar_topic: string;
  small_banner_img: string;
  web_head: string;
  big_banner_img: string;
  special_text: string;
  menucard_txt: string;
  speakers: string;
  demo_webinar: string;
  speaker_img: string;
  livebanner_img: string;
  livebanner_header: string;
  livebanner_desc: string;
  popup_text: string;
  pms_banner: string;
  pms_banner_img: string;
  pms_banner_subtext: string;
  diwali_banner: string;
  is_event: string;
  event_link: string;
  event_desc: string;
  highlightslink: string;
  fullvideolink: string;
  sunday_webinar: string;
  show_offer: string;
  offer_text1: string;
  offer_text2: string;
  offer_url: string;
  lastmodified: Lastmodified2;
  ispaid: number;
  ga: Ga2;
  webinar_page_link: string;
  findout_text: string;
  web_diwali_img: string;
  web_dt: string;
  registered: string;
  reserve_text_small: string;
  portfolio_reg_text: string;
  sitecard_reg_text: string;
  reserve_text: string;
  sitecard_link: string;
  isyoutubelive: string;
  show_banner: string;
}

interface Id2 {
  $oid: string;
}

interface Lastmodified2 {
  $date: Date2;
}

interface Date2 {
  $numberLong: string;
}

interface Ga2 {
  type: string;
  hitType: string;
  eventCategory: string;
  eventAction: string;
  eventLabel: string;
}

interface Data2 {
  cards: Cards;
  banner: Banner;
  headbanner: Headbanner;
  booster: Booster;
}

interface Cards {
  overall: Overall;
}

interface Overall {
  img: string;
  link: string;
}

interface Banner {
  show: number;
}

interface Headbanner {
  show: number;
}

interface Booster {
  show: number;
}

interface MojoStock {
  sname: string;
  return: string;
  duration: string;
}

interface FeaturedModelPortfolio {
  type: string;
  return: string;
  no_of_stocks: string;
}

interface FeaturedBanner {
  type: string;
  image: string;
  url: string;
  header: string;
  content?: string;
  banner_hash?: string;
}

interface Sitecard {
  image: string;
  url: string;
  header: string;
  banner_hash: string;
}

interface OfferwebinarTxt {
  txt1: string;
  txt2: string;
  txt3: string;
}

interface CountryList {
  country_id: number;
  class_name: string;
  country_name: string;
}

interface Usages {
  allvisited: number;
}
