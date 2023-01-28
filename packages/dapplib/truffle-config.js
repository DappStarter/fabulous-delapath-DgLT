require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain million hockey argue blue trend'; 
let testAccounts = [
"0xd13b3c34c2b082782807865717190a0181ca466ecb3d0fd7f3e9374a39c3277d",
"0xb05f8f5a5c06aa3e0c59a69fddcb2679d4f5e19abe5659897de6c971d507bc31",
"0xb3d570bd895eade71d8fe0c13ca847c7eaa9d820085278270dee30ab4629ef24",
"0x27dc8fbc621339969ae379f8330b5c0fc2abcf56a65bb8b18f23c44f9831b17a",
"0x5e1e9e8b39127476efed9eea452c92be2aaa5c670f0c00b3271c66e575e9fccb",
"0xc924fba7393c22c43e04b25613b8417e884d6719a2e6b45343e1567a7d3d2553",
"0xaf120d4e95192c3ebec8f6767bfb99c0c973e1c4902bebd63aeb00c0a2837ae2",
"0x818e15668db980043497128aa21267b1cdd2e83e55614119225cc9438885167f",
"0x29b7217e3b1836937736b6dc6dc9f914ccccf5c75c03f5e2833f0edbd564f799",
"0x95f7aef5408d3dedbe09e4059e4730b83244203dede31c1edcfb698ec13dccee"
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

