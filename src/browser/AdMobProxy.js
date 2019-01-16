'use strict'

const AdMob = {
  setOptions() {},
  createBannerView() {},
  showBannerAd() {},
  destroyBannerView() {},
  requestInterstitialAd() {},
  showInterstitialAd() {},
  requestRewardedAd() {},
  showRewardedAd() {}
}

// eslint-disable-next-line node/no-missing-require
require('cordova/exec/proxy').add('AdMobAds', AdMob)
