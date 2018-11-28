
// 未完成
var decodeAtIndex = function (S, K) {
  let result = {
    decodeCode: '',
    keys: K,
    init () {
      this.returnStr(S, K)
      console.log(this.decodeCode.length, this.keys)
      return this.decodeCode.substr(this.keys - 1, 1)
    },
    returnStr (S, K) {
      for (let a = 0; a < S.length; a++) {
        if (this.decodeCode.length >= K) break;
        if (parseInt(S[a])) {
          let JSONSTR = JSON.stringify(this.decodeCode)
          for (let b = 1; b < parseInt(S[a]); b++) {
            try {
              this.decodeCode += JSON.parse(JSONSTR)
            } catch (e) {
              if (K <= this.decodeCode.length) break;
              K = K - this.decodeCode.length
              // console.log(this.decodeCode.length)
              this.keys = K
              this.decodeCode = JSONSTR
            }
          }

        } else {
          this.decodeCode += S[a]
        }
      }
    }
  }

    console.log(result.init())
}
decodeAtIndex('epoqkhzwyii8ncmps5kjt9ecriykc9piwfsu9ptcavck9xw4pdmtcream8xwua3a54ewqr4ofbycslxt2iitdo2nkk67e3kof936', 639033442)
