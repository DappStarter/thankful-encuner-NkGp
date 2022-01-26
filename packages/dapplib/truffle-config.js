require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remain punch gloom problem off tooth'; 
let testAccounts = [
"0xa88081d382d424667e9a376a426fde724ec26754f718085d28c5253fcc9f1e13",
"0xe9eabb1608bca59ac3e25688918b7778311123d9a6972e013de265f7bf16bc0f",
"0xe601bd076c22219dd6e4c488840961ae23a7fb8f711ab89b17ca05dd04c4f279",
"0x06d6842b1df399dc851f6afd196c3f0dad558e58f3df75b5577e8be5ae644584",
"0x67b9d43e08c356d6ef958d98dd900f510ea950596cb3e0af0ed59baaf737f96a",
"0x9ffc4347370fe1b0e8a4d54d34e504a21af1b0353de005e9d8509dd88657ecb7",
"0x63d1bbbb6de2babe6ac1d6df0cd936e4ed1af906cfdc76425c3176fc934a7aff",
"0x692d3c727e7fb21e93a3f180a4045c1a818d4ae4f70b43a5438c2a2c59d1bea3",
"0xb233f0c019ad503d7ab831e990cb82b889bfb595dcf59a6567158dc6d782186f",
"0x3334885d4d1e183d1ee575d415a7b578746a9bd4b854d5403780c4ef4b4f4cb7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

