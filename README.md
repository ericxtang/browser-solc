# browser-solc

Solc is the solidity compiler.  It usually runs on the Ethereum node.  Browser-solidity is an example for Solc in the browser, but it's hard to pick apart just the solc library from the entire application.  This repo is a wrapper that helps you do that.  browser-solc is a browserified version of [solc-js](https://github.com/ethereum/solc-js).  

###[Demo app](https://s3.amazonaws.com/browser-solc.dappbench.com/index.html)

You should use browser-solc if you:
* Want to do `solc.compile()` in your Dapp
* Don't want to worry about browserify the solc-js npm package


##Usage:
```html
<!-- Include this in your HTML page -->
<script src="http://code.dappbench.com/browser-solc.min.js" type="text/javascript"></script>

```

```javascript

//Get a list of all possibile solc versions
BrowserSolc.getVersions(function(soljsonSources, soljsonReleases) {
  console.log(soljsonSources);
  console.log(soljsonReleases);
});

//Load a specific compiler version
BrowserSolc.loadVersion("soljson-v0.4.6+commit.2dabbdf0.js", function(compiler) {
  source = 'contract x { function g() {} }';
  optimize = 1;
  result = compiler.compile(source, optimize);
  console.log(result);
});
```


##Development
To build browser-solc.js, run `browserify src/index.js -g yo-yoify -o browser-solc.js; babel browser-solc.js --out-file browser-solc.js`

Note: browser-solc does NOT implement the whole interface of solc-js.  
