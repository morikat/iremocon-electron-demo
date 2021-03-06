var packager = require('electron-packager');
var config = require('./package.json');

packager({
  dir: './',
  out: '../dist',
  name: config.name,
  platform: 'win32,darwin',
  arch: 'x64',
  version: '0.30.0',
  icon: './app.icns',
  'app-bundle-id': 'jp.hogehoge.morikat',
  'app-version': config.version,
  'helper-bundle-id': 'jp.hogehoge.morikat',
  overwrite: true,
  asar: true,
  prune: true,
  ignore: "node_modules/(electron-packager|electron-prebuilt|.bin)|release.js",
  'version-string': {
    CompanyName: '会社名',
    FileDescription: 'アプリケーションの説明',
    OriginalFilename: config.name,
    FileVersion: config.version,
    ProductVersion: config.version,
    ProductName: config.name,
    InternalName: config.name
  }
}, function done (err, appPath) {
  if(err) {
    throw new Error(err);
  }
  console.log('Done!!');
});
