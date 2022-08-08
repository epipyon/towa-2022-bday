module.exports = {
    publicPath: '',
  pluginOptions: {
    i18n: {
      locale: 'jp',
      fallbackLocale: 'jp',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    },
    chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
            args[0].title = 'トワ様の大胆で悪魔的な所業'
            args[0].description = `お誕生日おめでとうトワ様！今年はトワ様の悪魔的な所業の可能性見せるためにあつまり！サイトで載せています！今年も素晴らしい一年をありがとう！大好きだよ！
            Happy birthday, Towa-sama! This year the Kenzoku got together to show off the great potential of your devilish deeds and put it all on a website! Thank you for another wonderful year, we love you!`
            args[0].image = 'https://towa-is-devil.github.io/cover.png'
            return args;
          });
    }
  }
}
