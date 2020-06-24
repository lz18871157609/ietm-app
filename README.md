# ietm-app
ietm-app

npm install -g cordova ionic

运行项目:

cd myApp
ionic serve

打包成单页面项目运行在微信/web浏览器:

ionic build

打包成混合app项目:

ionic build
ionic cordova platform add android
ionic cordova build android
ionic cordova run android