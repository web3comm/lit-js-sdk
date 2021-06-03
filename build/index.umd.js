!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jszip"),require("tweetnacl"),require("tweetnacl-util"),require("@ethersproject/contracts"),require("@ethersproject/wallet"),require("@ethersproject/providers"),require("@metamask/detect-provider"),require("eth-object"),require("eth-util-lite"),require("protons"),require("multihashing"),require("cids"),require("libp2p"),require("libp2p-websockets"),require("@lit-protocol/libp2p-webrtc-direct"),require("libp2p-noise"),require("libp2p-mplex"),require("libp2p-kad-dht"),require("peer-id"),require("multiaddr"),require("libp2p-bootstrap"),require("it-pipe"),require("it-length-prefixed"),require("it-pushable"),require("secrets.js-lit"),require("uint8arrays/from-string"),require("uint8arrays/to-string"),require("it-all")):"function"==typeof define&&define.amd?define(["jszip","tweetnacl","tweetnacl-util","@ethersproject/contracts","@ethersproject/wallet","@ethersproject/providers","@metamask/detect-provider","eth-object","eth-util-lite","protons","multihashing","cids","libp2p","libp2p-websockets","@lit-protocol/libp2p-webrtc-direct","libp2p-noise","libp2p-mplex","libp2p-kad-dht","peer-id","multiaddr","libp2p-bootstrap","it-pipe","it-length-prefixed","it-pushable","secrets.js-lit","uint8arrays/from-string","uint8arrays/to-string","it-all"],t):(e||self).litJsSdk=t(e.jszip,e.tweetnacl,e.tweetnaclUtil,e.contracts,e.wallet,e.providers,e.detectEthereumProvider,0,e.ethUtilLite,e.protons,e.multihashing,e.cids,e.libp2P,e.libp2PWebsockets,e.WebRTCDirect,e.libp2PNoise,e.libp2PMplex,e.libp2PKadDht,e.peerId,0,e.libp2PBootstrap,e.itPipe,0,0,e.secrets,e.uint8arrayFromString,e.uint8arrayToString,e.itAll)}(this,function(e,t,n,r,o,i,a,s,u,c,l,d,p,y,h,f,m,g,v,b,w,k,P,T,S,E,A,I){function x(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var N=x(e),R=x(t),K=x(n),C=x(a),L=x(c),F=x(l),j=x(d),_=x(p),O=x(y),B=x(h),q=x(m),U=x(g),M=x(v),D=x(w),H=x(k),G=x(S),J=x(E),W=x(A),Y=x(I);!function(e){var t=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var o=Object.create((t&&t.prototype instanceof m?t:m).prototype),i=new x(r||[]);return o._invoke=function(e,t,n){var r=d;return function(o,i){if(r===y)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return R()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=E(a,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=y;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?h:p,u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(e,n,i),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var d="suspendedStart",p="suspendedYield",y="executing",h="completed",f={};function m(){}function g(){}function v(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,k=w&&w(w(N([])));k&&k!==n&&r.call(k,i)&&(b=k);var P=v.prototype=m.prototype=Object.create(b);function T(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){function n(o,i,a,s){var u=l(e[o],e,i);if("throw"!==u.type){var c=u.arg,d=c.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then(function(e){n("next",e,a,s)},function(e){n("throw",e,a,s)}):t.resolve(d).then(function(e){c.value=e,a(c)},function(e){return n("throw",e,a,s)})}s(u.arg)}var o;this._invoke=function(e,r){function i(){return new t(function(t,o){n(e,r,t,o)})}return o=o?o.then(i,i):i()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,f;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,f):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function N(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:R}}function R(){return{value:t,done:!0}}return g.prototype=P.constructor=v,v.constructor=g,g.displayName=u(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,s,"GeneratorFunction")),e.prototype=Object.create(P),e},e.awrap=function(e){return{__await:e}},T(S.prototype),S.prototype[a]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new S(c(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then(function(e){return e.done?e.value:a.next()})},T(P),u(P,s,"Generator"),P[i]=function(){return this},P.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=N,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;I(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),f}},e}({});try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}();var z={name:"AES-CBC",length:256};function V(e,t,n){switch(n){case"x25519-xsalsa20-poly1305":var r,o=R.default.box.keyPair();try{r=K.default.decodeBase64(e)}catch(e){throw new Error("Bad public key")}var i=K.default.decodeUTF8(t),a=R.default.randomBytes(R.default.box.nonceLength),s=R.default.box(i,a,r,o.secretKey);return{version:"x25519-xsalsa20-poly1305",nonce:K.default.encodeBase64(a),ephemPublicKey:K.default.encodeBase64(o.publicKey),ciphertext:K.default.encodeBase64(s)};default:throw new Error("Encryption type/version not supported")}}function Z(e,t){switch(e.version){case"x25519-xsalsa20-poly1305":var n,r=K.default.decodeBase64(t),o=K.default.decodeBase64(e.nonce),i=K.default.decodeBase64(e.ciphertext),a=K.default.decodeBase64(e.ephemPublicKey),s=R.default.box.open(i,o,a,r);try{n=K.default.encodeUTF8(s)}catch(e){throw new Error("Decryption failed.  Could not encode result as utf8")}if(n)return n;throw new Error("Decryption failed.  Output is falsy");default:throw new Error("Encryption type/version not supported.")}}var Q=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"userAddress",type:"address"},{indexed:!1,internalType:"address payable",name:"relayerAddress",type:"address"},{indexed:!1,internalType:"bytes",name:"functionSignature",type:"bytes"}],name:"MetaTransactionExecuted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[],name:"ERC712_VERSION",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"bytes",name:"functionSignature",type:"bytes"},{internalType:"bytes32",name:"sigR",type:"bytes32"},{internalType:"bytes32",name:"sigS",type:"bytes32"},{internalType:"uint8",name:"sigV",type:"uint8"}],name:"executeMetaTransaction",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"payable",type:"function",payable:!0},{inputs:[],name:"getChainId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function",constant:!0},{inputs:[],name:"getDomainSeperator",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getNonce",outputs:[{internalType:"uint256",name:"nonce",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"tokenIds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"isOperator",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"bool",name:"enabled",type:"bool"}],name:"setOpenseaProxyEnabled",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newAdmin",type:"address"}],name:"changeAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"uri",type:"string"}],name:"setURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAdmin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0}],X=L.default("\nmessage Request {\n  enum Type {\n    HANDSHAKE = 0;\n    GET_KEY_FRAGMENT = 1;\n    STORE_KEY_FRAGMENT = 2;\n  }\n  required Type type = 1;\n  optional GetKeyFragment getKeyFragment = 2;\n  optional StoreKeyFragment storeKeyFragment = 3;\n  optional bytes authSig = 4;\n  optional TokenParams tokenParams = 5;\n  optional bytes clientPubKey = 6;\n  optional bytes merkleProof = 7;\n}\nmessage Response {\n  enum Type {\n    HANDSHAKE_RESPONSE = 0;\n    GET_KEY_FRAGMENT_RESPONSE = 1;\n    STORE_KEY_FRAGMENT_RESPONSE = 2;\n  }\n  required Type type = 1;\n  optional GetKeyFragmentResponse getKeyFragmentResponse = 2;\n  optional StoreKeyFragmentResponse storeKeyFragmentResponse = 3;\n  optional bytes serverPubKey = 4;\n}\nmessage GetKeyFragment {\n  required bytes keyId = 1;\n}\nmessage GetKeyFragmentResponse {\n  enum Result {\n    SUCCESS = 0;\n    NOT_FOUND = 1;\n    AUTH_FAILURE = 2;\n    ERROR = 3;\n  }\n  required Result result = 1;\n  optional bytes keyId = 2;\n  optional bytes fragmentValue = 3;\n}\nmessage StoreKeyFragment {\n  required bytes fragmentValue = 1;\n  required bytes fragmentNumber = 2;\n}\nmessage StoreKeyFragmentResponse {\n  enum Result {\n    SUCCESS = 0;\n    AUTH_FAILURE = 1;\n    ERROR = 2;\n  }\n  required Result result = 1;\n  optional bytes errorMessage = 2;\n}\nmessage TokenParams {\n  required bytes tokenAddress = 1;\n  required bytes tokenId = 2;\n  required bytes chain = 3;\n}\n"),$={polygon:{contractAddress:"0xb9A323711528D0c5a70df790929f4739f1cDd7fD",chainId:137,name:"Polygon",symbol:"MATIC",decimals:18,rpcUrls:["https://rpc-mainnet.maticvigil.com"],blockExplorerUrls:["https://explorer.matic.network"],balanceStorageSlot:1,type:"ERC1155"},ethereum:{contractAddress:"0x55485885e82E25446DEC314Ccb810Bda06B9e01B",chainId:1,name:"Ethereum",symbol:"ETH",decimals:18,balanceStorageSlot:1,type:"ERC1155"},kovan:{contractAddress:"0xA9b2180C2A479Ba9b263878C4d81AE4e0E717846",chainId:42,name:"Ethereum",symbol:"ETH",decimals:18,rpcUrls:["https://kovan.infura.io/v3/ddf1ca3700f34497bca2bf03607fde38"],blockExplorerUrls:["https://kovan.etherscan.io"],balanceStorageSlot:1,type:"ERC20"}},ee=function(){try{var e=(new Date).toISOString(),t=oe.replace("{{timestamp}}",e);return Promise.resolve(function(e){var t=e.body;try{return Promise.resolve(re()).then(function(e){var n=e.web3,r=e.account;return console.log("signing with ",r),Promise.resolve(n.request({method:"personal_sign",params:[r,t]})).then(function(e){var n=o.verifyMessage(t,e).toLowerCase();if(console.log("Signature: ",e),console.log("recovered address: ",n),n!==r){var i="ruh roh, the user signed with a different address ("+n+") then they're using with web3 ("+r+").  this will lead to confusion.";throw console.error(i),alert("something seems to be wrong with your wallets message signing.  maybe restart your browser or your wallet.  your recovered sig address does not match your web3 account address"),new Error(i)}return{signature:e,address:n}})})}catch(e){return Promise.reject(e)}}({body:t})).then(function(e){localStorage.setItem("lit-auth-signature",JSON.stringify({sig:e.signature,derivedVia:"web3.eth.personal.sign",signedMessage:t,address:e.address}));var n=R.default.box.keyPair();localStorage.setItem("lit-comms-keypair",JSON.stringify({publicKey:K.default.encodeBase64(n.publicKey),secretKey:K.default.encodeBase64(n.secretKey)})),console.log("generated and saved lit-comms-keypair")})}catch(e){return Promise.reject(e)}},te=function(e){var t=e.chain;try{return Promise.resolve(re()).then(function(e){var n=e.web3,r=e.account;return Promise.resolve(n.request({method:"eth_chainId",params:[]})).then(function(e){var o;function i(e){if(o)return e;function t(){n=JSON.parse(n);var e=function(){if(r!==n.address)return Promise.resolve(ee()).then(function(){n=localStorage.getItem("lit-auth-signature"),n=JSON.parse(n)})}();return e&&e.then?e.then(function(){return n}):n}var n=localStorage.getItem("lit-auth-signature"),i=function(){if(!n)return Promise.resolve(ee()).then(function(){n=localStorage.getItem("lit-auth-signature")})}();return i&&i.then?i.then(t):t()}var a=$[t],s="0x"+a.chainId.toString("16");console.debug("checkAndSignAuthMessage with chainId "+e+" and chain set to "+t+" and selectedChain is ",a);var u=function(){if(e!==s)return 1!==a.chainId?Promise.resolve(n.request({method:"wallet_addEthereumChain",params:[{chainId:s,chainName:a.name,nativeCurrency:{name:a.name,symbol:a.symbol,decimals:a.decimals},rpcUrls:a.rpcUrls,blockExplorerUrls:a.blockExplorerUrls}]}).catch()).then(function(e){e&&console.log(e)}):(o=1,{errorCode:"wrong_chain"})}();return u&&u.then?u.then(i):i(u)})})}catch(e){return Promise.reject(e)}},ne=function(e){var t=e.tokenAddress,n=e.balanceStorageSlot,r=e.tokenId;try{return console.log("getMerkleProof for { tokenAddress, balanceStorageSlot, tokenId } "+t+", "+n+", "+r),Promise.resolve(re()).then(function(e){var o=e.web3,i=e.account;console.log("getting mappingAt("+n+", "+r+", "+i+")");var a=u.mappingAt(n,parseInt(r),i);return console.log("storageAddress: ",a),Promise.resolve(o.request({method:"eth_getBlockByNumber",params:["latest",!1]})).then(function(e){return console.log("rpcBlock: ",e),Promise.resolve(o.request({method:"eth_getProof",params:[t,[a],e.number]})).then(function(t){return console.log("rpcProof: ",t),{header:e,accountProof:t.accountProof,storageProof:t.storageProof[0].proof,blockHash:e.hash}})})})}catch(e){return Promise.reject(e)}},re=function(){try{if(void 0===window.ethereum)throw new Error({errorCode:"no_wallet",message:"No web3 wallet was found"});return Promise.resolve(C.default()).then(function(e){return Promise.resolve(e.request({method:"eth_requestAccounts"})).then(function(t){var n=t[0].toLowerCase();return{web3:e,account:n}})})}catch(e){return Promise.reject(e)}},oe="I am creating an account to use LITs at {{timestamp}}";function ie(e){return new Promise(function(t,n){var r=new FileReader;r.onloadend=function(){t(r.result)},r.readAsDataURL(e)})}function ae(e,t,n){if(!e.s){if(n instanceof se){if(!n.s)return void(n.o=ae.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(ae.bind(null,e,t),ae.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var se=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{ae(r,1,i(this.v))}catch(e){ae(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?ae(r,1,t?t(o):o):n?ae(r,1,n(o)):ae(r,2,o)}catch(e){ae(r,2,e)}},r},e}(),ue=function(e){try{return Promise.resolve(e.generateAsync({type:"blob"})).then(function(e){return Promise.resolve(e.arrayBuffer()).then(function(t){return console.log("blob",e),Promise.resolve(function(){try{return Promise.resolve(crypto.subtle.generateKey(z,!0,["encrypt","decrypt"]))}catch(e){return Promise.reject(e)}}()).then(function(e){return Promise.resolve(function(e,t){try{var n=window.crypto.getRandomValues(new Uint8Array(16));return Promise.resolve(crypto.subtle.encrypt({name:"AES-CBC",iv:n},e,t)).then(function(e){return new Blob([n,new Uint8Array(e)],{type:"application/octet-stream"})})}catch(e){return Promise.reject(e)}}(e,t)).then(function(t){return Promise.resolve(crypto.subtle.exportKey("jwk",e)).then(function(e){return console.log("exportedSymmKey",e),{symmetricKey:JSON.stringify(e),encryptedZip:t}})})})})})}catch(e){return Promise.reject(e)}},ce=function(e,t){try{return Promise.resolve(function(e){try{return Promise.resolve(crypto.subtle.importKey("jwk",JSON.parse(e),z,!0,["encrypt","decrypt"]))}catch(e){return Promise.reject(e)}}(t)).then(function(t){return Promise.resolve(function(e,t){try{return Promise.resolve(e.slice(0,16).arrayBuffer()).then(function(n){return Promise.resolve(e.slice(16).arrayBuffer()).then(function(e){return Promise.resolve(crypto.subtle.decrypt({name:"AES-CBC",iv:n},t,e))})})}catch(e){return Promise.reject(e)}}(e,t)).then(function(e){var t=new N.default;return Promise.resolve(t.loadAsync(e)).then(function(e){return e.files})})})}catch(e){return Promise.reject(e)}},le={},de=function(e){var t=e.tokenId,n=e.chain,r=e.tokenAddress.toLowerCase(),o=parseInt(t).toString(16).padStart(64,"0"),i=F.default(Buffer.from(r+"|"+o+"|"+n),"sha2-256");return new j.default(i).toString()},pe=X.Request,ye=X.Response,he=X.StoreKeyFragmentResponse,fe=X.GetKeyFragmentResponse;return{zipAndEncryptString:function(e){try{var t=new N.default;return t.file("string.txt",e),ue(t)}catch(e){return Promise.reject(e)}},zipAndEncryptFiles:function(e){try{for(var t=new N.default,n=0;n<e.length;n++)t.folder("encryptedAssets").file(e[n].name,e[n]);return ue(t)}catch(e){return Promise.reject(e)}},encryptZip:ue,decryptZip:ce,connectWeb3:re,checkAndSignAuthMessage:te,createHtmlLIT:function(e){var t,n,r,o,i,a=e.title,s=e.htmlBody,u=e.css,c=e.encryptedZipDataUrl,l=e.tokenAddress,d=e.tokenId,p=e.chain,y=e.npmPackages,h=void 0===y?[]:y;try{var f="",m=(t=h,n=function(e){return Promise.resolve(function(e){try{return le[e]?Promise.resolve(le[e]):Promise.resolve(fetch("https://unpkg.com/"+e)).then(function(t){if(!t.ok)throw console.log("error with response: ",t),Error(t.statusText);return Promise.resolve(t.blob()).then(function(t){return Promise.resolve(ie(t)).then(function(t){return le[e]=t,t})})})}catch(e){return Promise.reject(e)}}(h[e])).then(function(e){f+='<script src="'+e+'"><\/script>\n'})},i=-1,function e(a){try{for(;++i<t.length;)if((a=n(i))&&a.then){if(!((s=a)instanceof se&&1&s.s))return void a.then(e,o||(o=ae.bind(null,r=new se,2)));a=a.v}r?ae(r,1,a):r=a}catch(e){ae(r||(r=new se),2,e)}var s}(),r);return Promise.resolve(m&&m.then?m.then(function(){return"\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+a+'</title>\n    <style id="jss-server-side">'+u+"</style>\n    "+f+'\n    <script>\n      var encryptedZipDataUrl = "'+c+'"\n      var tokenAddress = "'+l+'"\n      var tokenId = "'+d+'"\n      var chain = "'+p+'"\n      var locked = true\n\n      function litJsSdkLoaded(){\n         var litNodeClient = new LitJsSdk.default.LitNodeClient()\n        litNodeClient.connect()\n        window.litNodeClient = litNodeClient\n      }\n    <\/script>\n    <script onload=\'litJsSdkLoaded()\' src="https://unpkg.com/lit-js-sdk@^1/build/index.web.js"><\/script>\n  </head>\n  <body>\n    <div id="root">'+s+"</div>\n    <script>\n      const unlockButton = document.getElementById('unlockButton')\n      unlockButton.onclick = function() {\n        if (!window.litNodeClient.ready){\n          alert('The LIT network is still connecting.  Please try again in about 10 seconds.')\n          return\n        }\n        LitJsSdk.default.toggleLock()\n      }\n    <\/script>\n  </body>\n</html>\n  "}):"\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+a+'</title>\n    <style id="jss-server-side">'+u+"</style>\n    "+f+'\n    <script>\n      var encryptedZipDataUrl = "'+c+'"\n      var tokenAddress = "'+l+'"\n      var tokenId = "'+d+'"\n      var chain = "'+p+'"\n      var locked = true\n\n      function litJsSdkLoaded(){\n         var litNodeClient = new LitJsSdk.default.LitNodeClient()\n        litNodeClient.connect()\n        window.litNodeClient = litNodeClient\n      }\n    <\/script>\n    <script onload=\'litJsSdkLoaded()\' src="https://unpkg.com/lit-js-sdk@^1/build/index.web.js"><\/script>\n  </head>\n  <body>\n    <div id="root">'+s+"</div>\n    <script>\n      const unlockButton = document.getElementById('unlockButton')\n      unlockButton.onclick = function() {\n        if (!window.litNodeClient.ready){\n          alert('The LIT network is still connecting.  Please try again in about 10 seconds.')\n          return\n        }\n        LitJsSdk.default.toggleLock()\n      }\n    <\/script>\n  </body>\n</html>\n  ")}catch(e){return Promise.reject(e)}},mintLIT:function(e){var t=e.chain,n=e.quantity;try{return console.log("minting "+n+" tokens on "+t),Promise.resolve(te({chain:t})).then(function(e){return e.errorCode?e:Promise.resolve(re()).then(function(o){var a=o.account,s=$[t].contractAddress,u=new r.Contract(s,Q,new i.Web3Provider(o.web3).getSigner());return console.log("sending to chain..."),function(t,r){try{var o=Promise.resolve(u.mint(n)).then(function(t){return console.log("sent to chain.  waiting to be mined..."),Promise.resolve(t.wait()).then(function(t){console.log("txReceipt: ",t);var n=t.events[0].args[3].toNumber();return{txHash:t.transactionHash,tokenId:n,tokenAddress:s,mintingAddress:a,authSig:e}})})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return console.log(e),4001===e.code?(console.log("User rejected request"),{errorCode:"user_rejected_request"}):(console.error(e),{errorCode:"unknown_error"})})})})}catch(e){return Promise.reject(e)}},toggleLock:function(){try{var e=document.getElementById("mediaGridHolder"),t=document.getElementById("lockedHeader"),n=function(){if(window.locked)return window.publicContent=e.innerHTML,Promise.resolve(te({chain:window.chain})).then(function(n){var r;function o(o){return r?o:Promise.resolve(window.litNodeClient.getEncryptionKey({tokenAddress:window.tokenAddress,tokenId:window.tokenId,authSig:n,chain:window.chain,merkleProof:a})).then(function(n){return Promise.resolve(fetch(window.encryptedZipDataUrl)).then(function(r){return Promise.resolve(r.blob()).then(function(r){return Promise.resolve(ce(r,n)).then(function(n){return Promise.resolve(n["string.txt"].async("text")).then(function(n){e.innerHTML=n,t.innerText="UNLOCKED",window.locked=!1})})})})})}n.errorCode&&"wrong_chain"===n.errorCode&&alert("You are connected to the wrong blockchain.  Please switch your metamask to "+window.chain);var i=$[window.chain].balanceStorageSlot,a=null,s=function(e,t){try{var n=Promise.resolve(ne({tokenAddress:window.tokenAddress,balanceStorageSlot:i,tokenId:window.tokenId})).then(function(e){a=e})}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}(0,function(e){console.log(e),alert("Error - could not obtain merke proof.  Some nodes do not support this operation yet.  Please try another ETH node."),r=1});return s&&s.then?s.then(o):o(s)});e.innerHTML=window.publicContent,t.innerText="LOCKED",window.locked=!0}();return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},LIT_CHAINS:$,LitNodeClient:function(){function e(e){void 0===e&&(e={alertWhenUnauthorized:!0,minNodeCount:8,bootstrapUrls:["/dns4/node1.litgateway.com/tcp/9090/https/p2p-webrtc-direct/p2p/12D3KooWK1KtaAV5rWjbAmZcd62VYSmEz1k81jzr87JAcSS7rKdQ"]}),this.config=e,this.libp2p=null,this.connectedNodes=new Set,this.serverPubKeys={},this.ready=!1}var t=e.prototype;return t.getEncryptionKey=function(e){var t=e.tokenAddress,n=e.tokenId,r=e.chain,o=e.authSig,i=e.merkleProof;try{var a=this;return Promise.resolve(a.getEncryptionKeyFragments({tokenAddress:t,tokenId:n,authSig:o,chain:r,merkleProof:i})).then(function(e){if(e.some(function(e){return"AUTH_FAILURE"===e}))return a.config.alertWhenUnauthorized&&alert("You are not authorized to unlock to this LIT"),document.dispatchEvent(new Event("lit-authFailure")),null;for(var t=JSON.parse(localStorage.getItem("lit-comms-keypair")),n=[],r=0;r<e.length;r++){var o=Z(JSON.parse(e[r]),t.secretKey);n.push(o)}var i=G.default.combine(n);return W.default(J.default(i,"base16"))})}catch(e){return Promise.reject(e)}},t.saveEncryptionKey=function(e){var t=e.tokenAddress,n=e.tokenId,r=e.chain,o=e.authSig,i=e.symmetricKey,a=e.merkleProof;try{var s=this,u=Array.from(s.connectedNodes),c=u.length,l=Math.floor(c/2),d=W.default(J.default(i),"base16");console.debug("splitting up into "+c+" shares with a threshold of "+l);var p=G.default.share(d,c,l);if(p.length!==u.length)throw new Error("kFrags.length ("+p.length+") !== nodes.length ("+u.length+")");for(var y=[],h=t.toLowerCase(),f=0;f<u.length;f++){var m=u[f];console.debug("storing kFrag in node "+(f+1)+" of "+u.length);var g=K.default.encodeBase64(s.serverPubKeys[m]),v=JSON.stringify(V(g,p[f],"x25519-xsalsa20-poly1305"));y.push(s.storeDataWithNode({peerId:m,tokenAddress:h,tokenId:n,fragmentNumber:f,val:v,authSig:o,chain:r,merkleProof:a}))}return Promise.resolve(Promise.all(y)).then(function(e){return e.some(function(e){return"AUTH_FAILURE"===e})?(s.config.alertWhenUnauthorized&&alert("You are not authorized to publish to this LIT"),document.dispatchEvent(new Event("lit-authFailure")),{success:!1}):(console.log("all stored"),{success:!0})})}catch(e){return Promise.reject(e)}},t.getEncryptionKeyFragments=function(e){var t=e.tokenAddress,n=e.tokenId,r=e.authSig,o=e.chain,i=e.merkleProof;try{var a=this,s=t.toLowerCase(),u=de({tokenAddress:t,tokenId:n,chain:o}),c=new j.default(u);return Promise.resolve(Y.default(a.libp2p.contentRouting.findProviders(c,{timeout:3e3}))).then(function(e){console.log("Found "+e.length+" providers");for(var t=[],c=0;c<e.length;c++){var l=e[c].id.toB58String();console.debug("Getting "+u+" from "+l),t.push(a.getDataFromNode({peerId:l,tokenAddress:s,tokenId:n,authSig:r,keyId:u,chain:o,merkleProof:i}))}return Promise.resolve(Promise.all(t))})}catch(e){return Promise.reject(e)}},t.storeDataWithNode=function(e){var t=e.peerId,n=e.tokenAddress,r=e.tokenId,o=e.fragmentNumber,i=e.val,a=e.authSig,s=e.chain,u=e.merkleProof;try{console.debug("storing data with node "+t+" with tokenAddress "+n+" and tokenId "+r);var c=pe.encode({type:pe.Type.STORE_KEY_FRAGMENT,storeKeyFragment:{fragmentValue:J.default(i),fragmentNumber:J.default(o)},authSig:J.default(JSON.stringify(a)),tokenParams:{tokenAddress:J.default(n),tokenId:J.default(r.toString()),chain:J.default(s)},merkleProof:J.default(JSON.stringify(u))});return Promise.resolve(this.sendCommandToPeer({peerId:t,data:c}))}catch(e){return Promise.reject(e)}},t.getDataFromNode=function(e){var t=e.peerId,n=e.tokenAddress,r=e.tokenId,o=e.keyId,i=e.authSig,a=e.chain,s=e.merkleProof;try{console.debug("getDataFromNode "+t+" with keyId "+o);var u=JSON.parse(localStorage.getItem("lit-comms-keypair")),c=pe.encode({type:pe.Type.GET_KEY_FRAGMENT,getKeyFragment:{keyId:J.default(o)},authSig:J.default(JSON.stringify(i)),tokenParams:{tokenAddress:J.default(n),tokenId:J.default(r.toString()),chain:J.default(a)},clientPubKey:K.default.decodeBase64(u.publicKey),merkleProof:J.default(JSON.stringify(s))});return Promise.resolve(this.sendCommandToPeer({peerId:t,data:c}))}catch(e){return Promise.reject(e)}},t.handshakeWithSgx=function(e){var t=e.peerId;try{console.debug("handshakeWithSgx "+t);var n=pe.encode({type:pe.Type.HANDSHAKE});return Promise.resolve(this.sendCommandToPeer({peerId:t,data:n}))}catch(e){return Promise.reject(e)}},t.sendCommandToPeer=function(e){var t=e.peerId,n=e.data;try{var r=this,o=r.libp2p.connectionManager.get(M.default.createFromB58String(t));return Promise.resolve(o.newStream(["/lit/1.0.0"])).then(function(e){var o=e.stream;console.debug("sendCommandToPeer "+t);var i=null;return Promise.resolve(H.default([n],o,function(e){try{return console.debug("in sendCommandToPeer callback"),Promise.resolve(e.next()).then(function(e){var n=ye.decode(e.value.slice());n.type===ye.Type.HANDSHAKE_RESPONSE?(r.serverPubKeys[t]=n.serverPubKey,console.log("handshake success for "+t+" - got server pub key "+K.default.encodeBase64(n.serverPubKey)),i=!0):n.type===ye.Type.STORE_KEY_FRAGMENT_RESPONSE?n.storeKeyFragmentResponse.result===he.Result.SUCCESS?(console.log("success storing key fragment"),i=!0):n.storeKeyFragmentResponse.result===he.Result.AUTH_FAILURE?(console.log("auth failure.  user doesnt own token"),i="AUTH_FAILURE"):(console.log("error storing key fragment: "),console.log(W.default(n.storeKeyFragmentResponse.errorMessage)),i=!1):n.type===ye.Type.GET_KEY_FRAGMENT_RESPONSE?n.getKeyFragmentResponse.result===fe.Result.SUCCESS?(console.log("success getting key fragment"),i=W.default(n.getKeyFragmentResponse.fragmentValue)):n.getKeyFragmentResponse.result===fe.Result.NOT_FOUND?(console.log("key fragment not found"),i=!1):n.getKeyFragmentResponse.result===fe.Result.AUTH_FAILURE?(console.log("auth failure.  user doesnt own token"),i="AUTH_FAILURE"):(console.log("unknown error getting key fragment"),i=!1):console.log("unknown response type")})}catch(e){return Promise.reject(e)}})).then(function(){return i})})}catch(e){return Promise.reject(e)}},t.connect=function(){try{var e,t=this;return Promise.resolve(_.default.create({modules:{transport:[O.default,B.default],connEncryption:[f.NOISE],streamMuxer:[q.default],dht:U.default,peerDiscovery:[D.default]},config:{dht:{enabled:!0},peerDiscovery:(e={},e[D.default.tag]={enabled:!0,list:t.config.bootstrapUrls},e)}})).then(function(e){return t.libp2p=e,t.libp2p.on("peer:discovery",function(e){console.debug("Found peer "+e.toB58String())}),t.libp2p.connectionManager.on("peer:connect",function(e){try{var n=e.remotePeer.toB58String();return console.debug("Connected to "+n),t.connectedNodes.has(n)||(t.connectedNodes.add(n),setTimeout(function(){try{return Promise.resolve(t.handshakeWithSgx({peerId:n})).then(function(){})}catch(e){return Promise.reject(e)}},1e3)),Promise.resolve()}catch(e){return Promise.reject(e)}}),t.libp2p.connectionManager.on("peer:disconnect",function(e){var n=e.remotePeer.toB58String();console.debug("Disconnected from "+n),t.connectedNodes.delete(n)}),Promise.resolve(t.libp2p.start()).then(function(){console.debug("libp2p id is "+t.libp2p.peerId.toB58String()),t.libp2p.multiaddrs.forEach(function(e){return console.debug(e.toString()+"/p2p/"+t.libp2p.peerId.toB58String())});var e=window.setInterval(function(){Array.from(t.connectedNodes).length>=t.config.minNodeCount&&(clearInterval(e),t.ready=!0,console.debug("lit is ready"),document.dispatchEvent(new Event("lit-ready")))},1e3);window.libp2p=t.libp2p,window.PeerId=M.default})})}catch(e){return Promise.reject(e)}},e}(),protobufs:X,kFragKey:de,encryptWithPubKey:V,decryptWithPrivKey:Z,fileToDataUrl:ie,getMerkleProof:ne}});
//# sourceMappingURL=index.umd.js.map
