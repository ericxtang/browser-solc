# browser-solc

Solc is the solidity compiler.  It usually runs on the Ethereum node.  But it can also run in the browser.  This repo is a wrapper that helps you do that.

browser-solc is a browserified version of [solc-js](https://github.com/ethereum/solc-js).  

##Usage:
```html
<!-- Include this in your HTML page -->
<script src="https://code.dappbench.com/code/browser-solc.min.js" type="text/javascript"></script>

```

```javascript

//Get a list of all possibile solc versions
BrowserSolc.getVersions(function(soljsonSources, soljsonReleases) {
  console.log(soljsonSources);
  console.log(soljsonReleases);
}

//Load a specific compiler version
BrowserSolc.loadVersion("soljson-v0.4.6+commit.2dabbdf0.js", function(compiler) {
  source = 'contract x { function g() {} }';
  optimize = 1;
  result = compiler.compile(getSourceCode(), optimize);
  console.log(result);
}
```

Note: browser-solc does NOT implement the whole interface of solc-js.  
