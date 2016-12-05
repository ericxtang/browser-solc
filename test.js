var exampleSource = "pragma solidity ^0.4.2;\n\ncontract mortal {\n    /* Define variable owner of the type address*/\n    address owner;\n\n    /* this function is executed at initialization and sets the owner of the contract */\n    function mortal() { owner = msg.sender; }\n\n    /* Function to recover the funds on the contract */\n    // function kill() { if (msg.sender == owner) selfdestruct(owner); }\n}\n\ncontract greeter is mortal {\n    /* define variable greeting of the type string */\n    string greeting;\n\n    /* this runs when the contract is executed */\n    function greeter(string _greeting) public {\n        greeting = _greeting;\n    }\n\n    /* main function */\n    function greet() constant returns (string) {\n        return greeting;\n    }\n}";
var optimize = 1;
var compiler;

function getSourceCode() {
    return document.getElementById("source").value;
}

function getVersion() {
    return document.getElementById("versions").value;
}

function status(txt) {
    document.getElementById("status").innerHTML = txt;
}

function populateVersions(versions) {
    sel = document.getElementById("versions");
    sel.innerHTML = "";

    for(var i = 0; i < versions.length; i++) {
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(versions[i]) );
        opt.value = versions[i]; 
        sel.appendChild(opt); 
    }
}

function solcCompile(compiler) {
    status("compiling");
    document.getElementById("compile-output").value = "";
    var result = compiler.compile(getSourceCode(), optimize);
    var stringResult = JSON.stringify(result);
    document.getElementById("compile-output").value = stringResult;
    status("Compile Complete.");
}

function loadSolcVersion() {
    status("Loading Solc: " + getVersion());
    BrowserSolc.loadVersion(getVersion(), function(c) {
        compiler = c;
        console.log("Solc Version Loaded: " + getVersion());
        status("Solc loaded.  Compiling...");
        solcCompile(compiler);
    });
}

window.onload = function() {
    document.getElementById("source").value = exampleSource;

    document.getElementById("versions").onchange = loadSolcVersion;

    if (typeof BrowserSolc == 'undefined') {
        console.log("You have to load browser-solc.js in the page.  We recommend using a <script> tag.");
        throw new Error();
    }

    status("Loading Compiler");
    BrowserSolc.getVersions(function(soljsonSources, soljsonReleases) {
        populateVersions(soljsonSources);

        document.getElementById("versions").value = soljsonReleases["0.4.5"];

        loadSolcVersion();
    });
};
