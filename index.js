/** Copyright (C) 2023.
Licensed under the  MIT License;
You may not use this file except in compliance with the License.
* @project_name : CLASH-WA-BOT
* @author : TOXIC-KICHUX
**/

'use strict';const _0x31eabb=_0xa600;function _0xa600(_0x392337,_0x1c2471){const _0x599bb0=_0x599b();return _0xa600=function(_0xa600c2,_0x48718a){_0xa600c2=_0xa600c2-0x164;let _0x256b40=_0x599bb0[_0xa600c2];return _0x256b40;},_0xa600(_0x392337,_0x1c2471);}function _0x599b(){const _0x5af706=['watchFile','anjing','statusCode','message','format','84196OHiuje','nopref','forEach','prefa','child','creds.update','cache','24OtabOM','2157354DAftKL','store','3736356xvTbqn','readdirSync','multi','fatal','log','299025xsPeeI','CLASH-WA-BOT','output','messageContextInfo','@whiskeysockets/baileys','toLowerCase','\x20has\x20been\x20updated!','session','figlet','relayMessage','close','./lib/server.js','default','\x20Booting\x20WhatsApp\x20Bot','./lib/serialize.js','textSync','543540YUEIFS','startsWith','reply','bind','6cffEzE','DATABASE','.js','\x20Preparing\x20After\x20Connect','./config.js','resolve','sendMessageFromContent','176360vyUeXU','Module\x20','Safari','error','pino','109659fPKePL','catch','loggedOut','BAE5','\x20Reconnecting\x20WhatsApp\x20Bot','./lib/database/store.json','path','[\x20CLASH-WA-BOT\x20]\x20\x20','./lib/message.js','connection\x20logged\x20out...','clear','\x20are\x20being\x20watched\x20for\x20changes','sync','/components','sendMessage','moment','connection.update'];_0x599b=function(){return _0x5af706;};return _0x599b();}(function(_0x4fe168,_0x2be05b){const _0x3237a2=_0xa600,_0x2c8ca3=_0x4fe168();while(!![]){try{const _0x537090=-parseInt(_0x3237a2(0x19c))/0x1+-parseInt(_0x3237a2(0x197))/0x2+parseInt(_0x3237a2(0x18c))/0x3+parseInt(_0x3237a2(0x177))/0x4+-parseInt(_0x3237a2(0x17c))/0x5*(parseInt(_0x3237a2(0x190))/0x6)+-parseInt(_0x3237a2(0x16d))/0x7*(parseInt(_0x3237a2(0x174))/0x8)+-parseInt(_0x3237a2(0x175))/0x9;if(_0x537090===_0x2be05b)break;else _0x2c8ca3['push'](_0x2c8ca3['shift']());}catch(_0x3853fa){_0x2c8ca3['push'](_0x2c8ca3['shift']());}}}(_0x599b,0x8e0cb));const {default:makeWASocket,BufferJSON,initInMemoryKeyStore,DisconnectReason,AnyMessageContent,makeInMemoryStore,useMultiFileAuthState,delay,generateWAMessageFromContent}=require(_0x31eabb(0x180)),figlet=require(_0x31eabb(0x184)),fs=require('fs'),web=require(_0x31eabb(0x187)),moment=require(_0x31eabb(0x166)),logg=require(_0x31eabb(0x19b)),config=require(_0x31eabb(0x194)),path=require(_0x31eabb(0x1a2)),{serialize}=require(_0x31eabb(0x18a)),time=moment(new Date())[_0x31eabb(0x16c)]('HH:mm:ss\x20DD/MM/YYYY');function title(){const _0x3eaa44=_0x31eabb;console[_0x3eaa44(0x1a6)](),console[_0x3eaa44(0x17b)](figlet[_0x3eaa44(0x18b)]('CLASH-WA-BOT',{'font':'Standard','horizontalLayout':_0x3eaa44(0x188),'verticalLayout':_0x3eaa44(0x188),'width':0x50,'whitespaceBreak':![]}));}function nocache(_0x4f55e7,_0x1a4d89=()=>{}){const _0xd2f493=_0x31eabb;console[_0xd2f493(0x17b)](_0xd2f493(0x198)+_0x4f55e7+_0xd2f493(0x1a7)),fs[_0xd2f493(0x168)](require['resolve'](_0x4f55e7),async()=>{const _0x5d02d0=_0xd2f493;await uncache(require[_0x5d02d0(0x195)](_0x4f55e7)),_0x1a4d89(_0x4f55e7);});}function uncache(_0x1c1f36='.'){return new Promise((_0x3210f4,_0x446c58)=>{const _0x2ff94c=_0xa600;try{delete require[_0x2ff94c(0x173)][require[_0x2ff94c(0x195)](_0x1c1f36)],_0x3210f4();}catch(_0x18ed01){_0x446c58(_0x18ed01);}});}const status=_0x31eabb(0x189),starting=_0x31eabb(0x193),reconnect=_0x31eabb(0x1a0),store=makeInMemoryStore({'logger':logg()[_0x31eabb(0x171)]({'level':_0x31eabb(0x17a),'stream':_0x31eabb(0x176)})});async function fanStart(){const _0x5113a0=_0x31eabb,_0x54dae8=async()=>{const _0x5c9f8f=_0xa600,{state:_0x5343b6,saveCreds:_0x5aa4bd}=await useMultiFileAuthState(_0x5c9f8f(0x183)),_0x5dc06f=makeWASocket({'printQRInTerminal':!![],'logger':logg({'level':_0x5c9f8f(0x17a)}),'auth':_0x5343b6,'browser':[_0x5c9f8f(0x17d),_0x5c9f8f(0x199),'3.0'],'getMessage':async _0x12499a=>{return{};}});return title(),store[_0x5c9f8f(0x18f)](_0x5dc06f['ev']),setInterval(()=>{const _0x2d32d4=_0x5c9f8f;store['writeToFile'](_0x2d32d4(0x1a1));},0x1e*0x3e8),require('./lib/serialize.js'),require(_0x5c9f8f(0x1a4)),nocache('./lib/serialize.js',_0x1d0387=>console['log'](_0x5c9f8f(0x1a3)+time+'\x20'+_0x1d0387+'\x20has\x20been\x20updated!')),nocache('./lib/message.js',_0x43b760=>console[_0x5c9f8f(0x17b)](_0x5c9f8f(0x1a3)+time+'\x20'+_0x43b760+_0x5c9f8f(0x182))),console[_0x5c9f8f(0x17b)]('Syncing\x20Database...'),config[_0x5c9f8f(0x191)][_0x5c9f8f(0x1a8)](),console[_0x5c9f8f(0x17b)]('⬇️\x20Installing\x20Plugins...'),fs[_0x5c9f8f(0x178)](__dirname+_0x5c9f8f(0x164))[_0x5c9f8f(0x16f)](_0x179400=>{const _0x3abadb=_0x5c9f8f;path['extname'](_0x179400)[_0x3abadb(0x181)]()==_0x3abadb(0x192)&&require(__dirname+'/components/'+_0x179400);}),console[_0x5c9f8f(0x17b)]('✅\x20Plugins\x20Installed!'),_0x5dc06f[_0x5c9f8f(0x179)]=!![],_0x5dc06f[_0x5c9f8f(0x16e)]=!![],_0x5dc06f[_0x5c9f8f(0x170)]=_0x5c9f8f(0x169),_0x5dc06f['ev']['on']('messages.upsert',async _0x57003a=>{const _0x62a4d5=_0x5c9f8f;if(!_0x57003a['messages'])return;var _0x374dc7=_0x57003a['messages'][0x0];try{if(_0x374dc7[_0x62a4d5(0x16b)]['messageContextInfo'])delete _0x374dc7[_0x62a4d5(0x16b)][_0x62a4d5(0x17f)];}catch{}_0x374dc7=serialize(_0x5dc06f,_0x374dc7),_0x374dc7['isBaileys']=_0x374dc7['key']['id'][_0x62a4d5(0x18d)](_0x62a4d5(0x19f)),require('./lib/message.js')(_0x5dc06f,_0x374dc7,_0x57003a,store);}),_0x5dc06f['ev']['on'](_0x5c9f8f(0x167),_0x29e129=>{const _0x2ae423=_0x5c9f8f;global['qr']!==_0x29e129['qr']&&(global['qr']=_0x29e129['qr']);const {connection:_0x38518a,lastDisconnect:_0x403ad0}=_0x29e129;_0x38518a===_0x2ae423(0x186)&&(_0x403ad0[_0x2ae423(0x19a)]?.[_0x2ae423(0x17e)]?.[_0x2ae423(0x16a)]!==DisconnectReason[_0x2ae423(0x19e)]?_0x54dae8():console[_0x2ae423(0x17b)](_0x2ae423(0x1a5)));}),_0x5dc06f['ev']['on'](_0x5c9f8f(0x172),await _0x5aa4bd),_0x5dc06f[_0x5c9f8f(0x18e)]=(_0x2b847a,_0x1d499a,_0xea6d9b)=>_0x5dc06f[_0x5c9f8f(0x165)](_0x2b847a,{'text':_0x1d499a},{'quoted':_0xea6d9b}),_0x5dc06f[_0x5c9f8f(0x196)]=async(_0x2615e9,_0x3ba802,_0x3a69e9={})=>{const _0x3db0e7=_0x5c9f8f;var _0x2c5a10={'contextInfo':{},..._0x3a69e9},_0x189154=await generateWAMessageFromContent(_0x2615e9,_0x3ba802,_0x2c5a10);return await _0x5dc06f[_0x3db0e7(0x185)](_0x2615e9,_0x189154[_0x3db0e7(0x16b)],{'messageId':_0x189154['key']['id']}),_0x189154;},_0x5dc06f;};_0x54dae8()[_0x5113a0(0x19d)](_0x1f1791=>console['log'](_0x1f1791));}fanStart(),web();
