/*******************************************
 *           Telegram Bot Library          *
 *******************************************/

class Telebot {
  constructor(token, botSheet = null) {
    this.token = token;

    if(botSheet) this.SSA = SpreadsheetApp.openById(botSheet);
  }

  getUpdate(json) {
    this.data = json;
    this.replyTo = this.data.callback_query?.from.id || this.data.message.chat.id || '';
  }

  request(method, payload) {
    let options = {
      'method': 'post',
      'contentType': 'application/json',
      'payload': JSON.stringify(payload)
    };

    let response = UrlFetchApp.fetch('https://api.telegram.org/bot' + this.token + '/' + method, options);

    if (response.getResponseCode() == 200) {
      return JSON.parse(response.getContentText());
    }
    return false;
  }

  sendMessage(text, options) {
    // https://core.telegram.org/bots/api#sendmessage
    options = options || {};

    let defaults = {
      'chat_id': this.replyTo,
      'text': text,
      'parse_mode': 'HTML',
      'disable_web_page_preview': true
    };

    let params = { ...defaults, ...options };

    return this.request('sendMessage', params);
  }

  sendPhoto(caption, photo, inlinekeyboard, options) {
    // https://core.telegram.org/bots/api#sendphoto
    options = options || {};

    let defaults = {
      'chat_id': this.replyTo,
      'caption': caption,
      'photo': photo,
      'parse_mode': 'HTML',
      'reply_markup': {
        'inline_keyboard': inlinekeyboard
      }
    };
    if (inlinekeyboard == null || inlinekeyboard == undefined) {
      delete defaults['reply_markup'];
    }

    let params = { ...defaults, ...options };

    return this.request('sendPhoto', params);
  }

  sendPhotoTo(chatid, caption, photo, inlinekeyboard, options) {
    // https://core.telegram.org/bots/api#sendphoto
    options = options || {};

    let defaults = {
      'chat_id': chatid,
      'caption': caption,
      'photo': photo,
      'parse_mode': 'HTML',
      'reply_markup': {
        'inline_keyboard': inlinekeyboard
      }
    };
    if (inlinekeyboard == null || inlinekeyboard == undefined) {
      delete defaults['reply_markup'];
    }

    let params = { ...defaults, ...options };

    return this.request('sendPhoto', params);
  }

  sendVideo(caption, video, inlinekeyboard, options) {
    // https://core.telegram.org/bots/api#sendvideo
    options = options || {};

    let defaults = {
      'chat_id': this.replyTo,
      'caption': caption,
      'video': video,
      'parse_mode': 'HTML',
      'reply_markup': {
        'inline_keyboard': inlinekeyboard
      }
    };
    if (inlinekeyboard == null || inlinekeyboard == undefined) {
      delete defaults['reply_markup'];
    }

    let params = { ...defaults, ...options };

    return this.request('sendVideo', params);
  }

  sendVideoTo(chatid, caption, video, inlinekeyboard, options) {
    // https://core.telegram.org/bots/api#sendvideo
    options = options || {};

    let defaults = {
      'chat_id': chatid,
      'caption': caption,
      'video': video,
      'parse_mode': 'HTML',
      'reply_markup': {
        'inline_keyboard': inlinekeyboard
      }
    };
    if (inlinekeyboard == null || inlinekeyboard == undefined) {
      delete defaults['reply_markup'];
    }

    let params = { ...defaults, ...options };

    return this.request('sendVideo', params);
  }

  sendAudio(caption, audio, inlinekeyboard, options) {
    // https://core.telegram.org/bots/api#sendaudio
    options = options || {};

    let defaults = {
      'chat_id': this.replyTo,
      'caption': caption,
      'audio': audio,
      'parse_mode': 'HTML',
      'reply_markup': {
        'inline_keyboard': inlinekeyboard
      }
    };
    if (inlinekeyboard == null || inlinekeyboard == undefined) {
      delete defaults['reply_markup'];
    }

    let params = { ...defaults, ...options };

    return this.request('sendAudio', params);
  }

  sendAudio(chatid, caption, audio, inlinekeyboard, options) {
    // https://core.telegram.org/bots/api#sendaudio
    options = options || {};

    let defaults = {
      'chat_id': chatid,
      'caption': caption,
      'audio': audio,
      'parse_mode': 'HTML',
      'reply_markup': {
        'inline_keyboard': inlinekeyboard
      }
    };
    if (inlinekeyboard == null || inlinekeyboard == undefined) {
      delete defaults['reply_markup'];
    }

    let params = { ...defaults, ...options };

    return this.request('sendAudio', params);
  }

  sendDocument(caption, document, inlinekeyboard, options) {
    // https://core.telegram.org/bots/api#senddocument
    options = options || {};

    let defaults = {
      'chat_id': this.replyTo,
      'caption': caption,
      'document': document,
      'parse_mode': 'HTML',
      'reply_markup': {
        'inline_keyboard': inlinekeyboard
      }
    };
    if (inlinekeyboard == null || inlinekeyboard == undefined) {
      delete defaults['reply_markup'];
    }

    let params = { ...defaults, ...options };

    return this.request('sendDocument', params);
  }

  sendDocumentTo(chatid, caption, document, inlinekeyboard, options) {
    // https://core.telegram.org/bots/api#senddocument
    options = options || {};

    let defaults = {
      'chat_id': chatid,
      'caption': caption,
      'document': document,
      'parse_mode': 'HTML',
      'reply_markup': {
        'inline_keyboard': inlinekeyboard
      }
    };
    if (inlinekeyboard == null || inlinekeyboard == undefined) {
      delete defaults['reply_markup'];
    }

    let params = { ...defaults, ...options };

    return this.request('sendDocument', params);
  }

  sendMediaGroup(caption, media, inlinekeyboard, options) {
    // https://core.telegram.org/bots/api#sendMediaGroup
    options = options || {};

    let defaults = {
      'chat_id': this.replyTo,
      'caption': caption,
      'media': media,
      'parse_mode': 'HTML',
      'reply_markup': {
        'inline_keyboard': inlinekeyboard
      }
    };
    if (inlinekeyboard == null || inlinekeyboard == undefined) {
      delete defaults['reply_markup'];
    }

    let params = { ...defaults, ...options };

    return this.request('sendMediaGroup', params);
  }

  sendPoll(question, option, options) {
    // https://core.telegram.org/bots/api#sendpoll
    options = options || {};

    let defaults = {
      'chat_id': this.replyTo,
      'question': question,
      'options': option,
      'disable_notification': true
    }

    let params = { ...defaults, ...options };

    return this.request('sendPoll', params);
  }

  sendPollTo(chatid, question, option, options) {
    // https://core.telegram.org/bots/api#sendpoll
    options = options || {};

    let defaults = {
      'chat_id': chatid,
      'question': question,
      'options': option,
      'disable_notification': true
    }

    let params = { ...defaults, ...options };

    return this.request('sendPoll', params);
  }

  sendMessageTo(chatid, text, options) {
    let sendTo = { 'chat_id': chatid };
    let params = { ...options, ...sendTo };

    return this.sendMessage(text, params);
  }  

  sendMessageCustomKeyboard(text, array, placeholder, options) {

    let len = array.length;
    for(let i = 0; i < len; i++) {
      array[i] = array[i].split(',');
    }

    let defaults = {
      reply_markup: {
        keyboard: array || null,
        resize_keyboard: true,
        one_time_keyboard: true,
        input_field_placeholder: placeholder || null
      }
    }
    let params = { ...defaults, ...options };

    return this.sendMessage(text, params);
  }

  sendMessageCustomKeyboardTo(chatid, text, array, placeholder, options) {
    let sendTo = { 'chat_id': chatid };
    let params = { ...options, ...sendTo };

    return this.sendMessageCustomKeyboard(text, array, placeholder, params);
  }

  sendMessageKeyboardRemove(text, options) {
    // https://core.telegram.org/bots/api#replykeyboardremove
    options = options || {};

    let defaults = {
      'reply_markup': {
        'remove_keyboard': true
      }
    };

    let params = { ...defaults, ...options };

    return this.sendMessage(text, params);
  }

  sendMessageKeyboardRemoveTo(chatid, text, options) {
    let sendTo = { 'chat_id': chatid };
    let params = { ...options, ...sendTo };

    return this.sendMessageKeyboardRemove(text, params);
  }

  sendMessageForceReply(text, placeholder, options) {
    // https://core.telegram.org/bots/api#forcereply
    options = options || {};

    let defaults = {
      'reply_markup': {
        'force_reply': true
      }
    };

    if(placeholder)
      defaults.reply_markup.input_field_placeholder = placeholder;

    let params = { ...defaults, ...options };

    return this.sendMessage(text, params);
  }

  sendMessageForceReplyTo(chatid, text, placeholder, options) {
    let sendTo = { 'chat_id': chatid };
    let params = { ...options, ...sendTo };

    return this.sendMessageForceReply(text, placeholder, params);
  }

  sendLocation(latitude, longitude, options) {
    // https://core.telegram.org/bots/api#sendlocation
    options = options || {};

    let defaults = {
      'chat_id': this.replyTo,
      'latitude': latitude,
      'longitude': longitude
    };

    let params = { ...defaults, ...options };

    return this.request('sendLocation', params);
  }

  sendLocationTo(chatid, latitude, longitude, options) {
    let sendTo = { 'chat_id': chatid };
    let params = { ...options, ...sendTo };

    return this.sendLocation(latitude, longitude, params);
  }

  sendVenue(latitude, longitude, title, address, options) {
    // https://core.telegram.org/bots/api#sendvenue
    options = options || {};

    let defaults = {
      'chat_id': this.replyTo,
      'latitude': latitude,
      'longitude': longitude,
      'title': title,
      'address': address
    };

    let params = { ...defaults, ...options };

    return this.request('sendVenue', params);
  }

  sendVenueTo(chatid, latitude, longitude, title, address, options) {
    let sendTo = { 'chat_id': chatid };
    let params = { ...options, ...sendTo };

    return this.sendVenue(latitude, longitude, title, address, params);
  }

  sendChatAction(action, options) {
    // https://core.telegram.org/bots/api#sendchataction
    action = action || 'typing';

    let defaults = {
      'chat_id': this.replyTo,
      'action': action
    };

    let params = { ...defaults, ...options };

    return this.request('sendChatAction', params);
  }

  sendChatActionTo(chatid, action, options) {
    let sendTo = { 'chat_id': chatid };
    let params = { ...options, ...sendTo };

    return this.sendChatAction(action, params);
  }

  editMessageText(text, messageid, chatid, options) {
    // https://core.telegram.org/bots/api#editmessagetext
    options = options || {};

    let defaults = {
      'chat_id': chatid || this.replyTo,
      'message_id': messageid,
      'text': text,
      'parse_mode': 'HTML',
      'disable_web_page_preview': true
    };

    let params = { ...defaults, ...options };

    return this.request('editMessageText', params);
  }



  editMessageKeyboard(text, messageid, chatid = null, inlinekeyboard = [], options) {
    // https://core.telegram.org/bots/api#editmessagereplymarkup
    options = options || {};

    let defaults = {
      'chat_id': chatid || this.replyTo,
      'message_id': messageid,
      'text': text,
      'parse_mode': 'HTML',
      'disable_web_page_preview': true,
      'reply_markup': inlinekeyboard
    };

    let params = { ...defaults, ...options };

    return this.request('editMessageText', params);
  }

  editMessageMedia(text, file, messageid, chatid = null, inlinekeyboard = [], options) {
    // https://core.telegram.org/bots/api#editmessagemedia
    options = options || {};
    let defaults = {
      'chat_id': chatid || this.replyTo,
      'message_id': messageid,
      'media': {caption: String(text), file_id: String(file)},
      'parse_mode': 'HTML',
      'disable_web_page_preview': true,
      'reply_markup': {
      'inline_keyboard': inlinekeyboard
      }
    };

    let params = { ...defaults, ...options };

    return this.request('editMessageMedia', params);
  }

  editMessageReplyMarkup(messageid, chatid = null, inlinekeyboard = [], options) {
    // https://core.telegram.org/bots/api#editmessagereplymarkup
    options = options || {};

    let defaults = {
      'chat_id': chatid || this.replyTo,
      'message_id': messageid,
      'reply_markup': {
      'inline_keyboard': inlinekeyboard
      }
    };

    let params = { ...defaults, ...options };

    return this.request('editMessageReplyMarkup', params);
  }

  deleteMessage(message_id, chatid = null) {
    // https://core.telegram.org/bots/api#deletemessage

    let defaults = {
      'chat_id': chatid || this.replyTo,
      'message_id': message_id,
    };

    return this.request('deleteMessage', defaults);
  }
  
  restrictChatMember(chatid = null, user_id, permissions, until_date = null) {
    // https://core.telegram.org/bots/api#restrictchatmember

    let defaults = {
      'chat_id': chatid || this.replyTo,
      'user_id': String(user_id),
      'permissions': JSON.stringify(permissions),
      'until_date': String(until_date) //тут строка, хотя в документации Число,

    };

    return this.request('restrictChatMember', defaults);
  }


  // Проверка сообщений

  isTextMessage() {
    try {
      return typeof this.data.message.text != 'undefined';
    }
    catch(e) {
      return false;
    }
  }

  isGIF() {
    try {
      return typeof this.data.message.animation != 'undefined';
    }
    catch(e) {
      return false;
    }
  }

  isSticker() {
    try {
      return typeof this.data.message.sticker != 'undefined';
    }
    catch(e) {
      return false;
    }
  }

  isPhoto() {
    try {
      return typeof this.data.message.photo != 'undefined';
    }
    catch(e) {
      return false;
    }
  }

  isMap() {
    try {
      return (
        typeof this.data.message.location.latitude != 'undefined' &&
        typeof this.data.message.location.longitude != 'undefined'
      );
    }
    catch(e) {
      return false;
    }
  }

  isAudio() {
    try {
      return typeof this.data.message.audio != 'undefined';
    }
    catch(e) {
      return false;
    }
  }

  isVoice() {
    try {
      return typeof this.data.message.voice != 'undefined';
    }
    catch(e) {
      return false;
    }
  }

  isVideo() {
    try {
      return typeof this.data.message.video != 'undefined' &&
        typeof this.data.message.animation == 'undefined'
    }
    catch(e) {
      return false;
    }
  }

  isRoundVideo() {
    try {
      return typeof this.data.message.video_note != 'undefined';
    }
    catch(e) {
      return false;
    }
  }

  isPoll() {
    try {
      return typeof this.data.message.poll != 'undefined';
    }
    catch(e) {
      return false;
    }
  }

  isContact() {
    try {
      return typeof this.data.message.contact.phone_number != 'undefined';
    }
    catch(e) {
      return false;
    }
  }

  // isAnimation() {
  //   try {
  //     return (
  //       typeof this.data.message.animation != 'undefined'
  //     );
  //   }
  //   catch(e) {
  //     return false;
  //   }
  // }

  isDocument() {
    try {
      return (
        typeof this.data.message.document != 'undefined'
      );
    }
    catch(e) {
      return false;
    }
  }

  isGame() {
    try {
      return typeof this.data.message.game != 'undefined';
    }
    catch(e) {
      return false;
    }
  }

  isPinnedMessage() {
    try {
      return typeof this.data.message.pinned_message != 'undefined';
    }
    catch(e) {
      return false;
    }
  }

  isBotCommand() {
    try {
      return (
        this.data.message.entities[0].type == 'bot_command' &&
        this.data.message.text.charAt(0) == '/'
      );
    }
    catch(e) {
      return false;
    }
  }

  isCallbackQuery() {
    try {
      return typeof this.data.callback_query != 'undefined';
    }
    catch(e) {
      return false;
    }
  }

  isForwarded() {
    try {
      return typeof this.data.message.forward_date != 'undefined';
    }
    catch(e) {
      return false;
    }
  }

  isReply() {
    try {
      return typeof this.data.message.reply_to_message != 'undefined';
    }
    catch(e) {
      return false;
    }
  }

  isMessageToBot() {
    try {
      return typeof this.data.message.reply_to_message.from.is_bot != 'undefined';
    }
    catch(e) {
      return false;
    }
  }

  isNewChatMember() {
    try {
      return typeof this.data.message.new_chat_member != 'undefined';
    }
    catch(e) {
      return false;
    }
  }

  isLeftChatMember() {
    try {
      return typeof this.data.message.left_chat_member != 'undefined';
    }
    catch(e) {
      return false;
    }
  }

  isChatType(type) {
    try {
      return this.data.message.chat?.type == type;
    }
    catch(e) {
      return false;
    }
  }

  hasForwardedFrom() {
    try {
      return this.data.message.forward_from;
    }
    catch(e) {
      return false;
    }
  }

  mentionByID(obj) {
    return 'tg://user?id=' + this.getUserID(obj);
  }

  getUserFirstName(obj) {
    return (obj?.first_name || this.data.callback_query?.from.first_name || this.data.callback_query?.message.chat.first_name || this.data.message.from.first_name);
  }

  getUserLastName(obj) {
    return (obj?.last_name || this.data.callback_query?.from.last_name || this.data.callback_query?.message.chat.last_name || this.data.message.from.last_name || "");
  }

  getUserFullName(obj) {
    return (this.getUserFirstName(obj) + ' ' + this.getUserLastName(obj)).trim();
  }

  getUsername(obj) {
    if(obj && 'username' in obj)
      return '@' + obj.username;
    else if('callback_query' in this.data && 'username' in this.data.callback_query.from)
      return '@' + this.data.callback_query.from.username;
    else if('username' in this.data.message.from)
      return '@' + this.data.message.from.username;
    else if('username' in this.data.message.reply_to_message.from.username)
      return '@' + this.data.message.reply_to_message.from.username;
    else
      return '';
  }

  getUserID(obj) {
    return (obj?.id || this.data.callback_query?.from.id || this.data.message.from.id || this.data.message.reply_to_message.from.id);
  }

  getChatID(obj) {
    return (obj?.id || this.data.message?.chat?.id);
  }

  getTextMessage() {
    return this.data.message?.text || this.data.message?.contact?.phone_number || this.data.callback_query?.data || '';
  }

  startThreadedConversation(array, overwritevalue) {
    let activeSheet = this.SSA.getSheetByName('tmp');
    let answer = overwritevalue ? "'"+overwritevalue : null;

    activeSheet.appendRow([this.getUserID(), -1, answer, new Date()]);

    this.sendMessage(array[0].q, array[0].o || null);
  }

  userHasThreadedConversation() {
    let activeSheet = this.SSA.getSheetByName('tmp');

    let a = activeSheet.getRange(2, 1, activeSheet.getLastRow(), 3).getValues().filter(r => r[0] == this.getUserID());
    let stepOffset = 2;

    let found = a.length > 0;
    let step = found ? a[a.length-1][1]+stepOffset : null;
    let answers = found ? a.map(c => c[2]) : null;  //a.map(c => c[2]).filter(x => x)

    return {found: found, step: step, answers: answers};
  }

  nextMessageInThreadedConversation(array, step, customtext, overwritevalue, validateoverwrite) {
    if(this.validateAndSaveAnswer_(array, step, overwritevalue, validateoverwrite)) {
      let msg = customtext ? customtext + '\n\n' : '';
      this.sendMessageKeyboardRemove(msg + array[step].q, array[step].o || null);
    }
  }

  endThreadedConversation(array, step, overwritevalue, validateoverwrite) {
    let finalAnswers = false;
  
    if(this.validateAndSaveAnswer_(array, step, overwritevalue, validateoverwrite)) {
      finalAnswers = this.userHasThreadedConversation().answers;

      this.markRowsToBeRemoved_();
    }
    return finalAnswers;
  }

  cancelThreadedConversation() {
    this.markRowsToBeRemoved_();
  }

  validateAndSaveAnswer_(array, step, newvalue, validatenewvalue) {
    let str = typeof validatenewvalue === "boolean" && validatenewvalue ? newvalue : this.getTextMessage();
    let answer = newvalue || this.getTextMessage();

    // Пользователь отменил операцию
    if(answer == '/cancel') {
      this.markRowsToBeRemoved_();
      let msg = "<i>Пользователь отменил операцию.</i>";
      this.sendMessageKeyboardRemove(msg);
      return false;
    }
    // проверьте, нужно ли проверять предыдущие сообщения msg
    if(array[step-1].v) {
      let regex = new RegExp(array[step-1].v, "g");
      let valid = regex.test(str);

      if(!valid) {
        let msg = (array[step-1].w ? array[step-1].w + '\n\n' : '');
        this.sendMessage(msg + array[step-1].q, array[step-1].o || null);
        return false;
      }
    }

    let activeSheet = this.SSA.getSheetByName('tmp');

    activeSheet.appendRow([this.getUserID(), step-1, "'"+answer, new Date()]);

    return true;
  }

  markRowsToBeRemoved_() {
    let activeSheet = this.SSA.getSheetByName('tmp');

    let a = activeSheet.getRange(1, 1, activeSheet.getLastRow()).getValues();
    let b = a.map((e,i) => e[0] == this.getUserID() ? i : undefined).filter(x => x);

    b.forEach(x => activeSheet.getRange(x+1, 1).setValue('X'));
  }

  addSystemUser(tgid, isauth, isadmin) {
    let usr = tgid || this.getUserID();
    let authDate = typeof isauth === "boolean" && isauth ? new Date() : null;
    let adminDate = typeof isadmin === "boolean" && isadmin ? new Date() : null;
    let activeSheet = this.SSA.getSheetByName('users');

    activeSheet.appendRow([new Date(), usr, this.getUsername(), this.getUserFirstName(), this.getUserLastName(), authDate, adminDate]);
  }

  getSystemUser(tgid) {
    let find = tgid || this.getUserID();
    let activeSheet = this.SSA.getSheetByName('users');

    let a = activeSheet.getRange(2, 2, activeSheet.getLastRow(), 6).getValues();
    let b = a.find(x => x[0] == find);
    let c = false;

    if(b) {
      c = {
        id: b[0],
        username: b[1],
        firstName: b[2],
        lastName: b[3],
        isAuth: typeof b[4].getMonth === 'function',
        isAdmin: typeof b[5].getMonth === 'function'
      };
    }

    return c;
  }

  isAuthSystemUser(tgid) {
    let a = this.getSystemUser(tgid);

    return a && a.isAuth;
  }

  isAdmin(tgid) {
    let a = this.getSystemUser(tgid);

    return a && a.isAdmin;
  }

  authSystemUser(tgid, isauth, isadmin) {
    let find = tgid || this.getUserID();
    let authDate = typeof isauth === "boolean" && isauth ? new Date() : null;
    let adminDate = typeof isadmin === "boolean" && isadmin ? new Date() : null;
    let activeSheet = this.SSA.getSheetByName('users');

    let a = activeSheet.getRange(2, 2, activeSheet.getLastRow()).getValues();
    let b = a.findIndex(x => x[0] == find);

    if(b > -1 && authDate) {
      activeSheet.getRange(b + 2, 6).setValue(authDate);

      if(adminDate)
        activeSheet.getRange(b + 2, 7).setValue(adminDate);

      return true;
    }
    else if(b > -1) {
      activeSheet.getRange(b + 2, 2).setValue('X' + activeSheet.getRange(b + 2, 2).getValue());
      return true;
    }

    return false;
  }

  makeAdmin(tgid, isadmin) {
    let find = tgid || this.getUserID();
    let adminDate = typeof isadmin === "boolean" && isadmin ? new Date() : null;
    let activeSheet = this.SSA.getSheetByName('users');

    let a = activeSheet.getRange(2, 2, activeSheet.getLastRow()).getValues();
    let b = a.findIndex(x => x[0] == find);

    // get an authentication date
    let c = activeSheet.getRange(b + 2, 6).getValue();

    if(typeof c.getMonth === 'function' && adminDate) {
      activeSheet.getRange(b + 2, 7).setValue(adminDate);
      return true;
    }
    else if(typeof c.getMonth === 'function') {
      activeSheet.getRange(b + 2, 7).setValue(null);
      return true;  
    }

    return false;
  }

  getAdminsID() {
    let activeSheet = this.SSA.getSheetByName('users');

    let a = activeSheet.getRange(2, 2, activeSheet.getLastRow(),6).getValues();
        a = a.filter(r => (r[0]+'').substring(0,1) != 'X' && typeof r[5].getMonth === 'function');
        a = a.map(m => m[0]);

    return a.length > 0 ? a : false;
  }

  getUsersID() {
    let activeSheet = this.SSA.getSheetByName('users');

    let data = activeSheet.getRange(2, 2, activeSheet.getLastRow()-1).getValues();
    return data.flat();
  }

  removeEmptyColumns_(sheetName) {
    let activeSheet = this.SSA.getSheetByName(sheetName)
    let maxColumns  = activeSheet.getMaxColumns(); 
    let lastColumn  = activeSheet.getLastColumn();

    if(maxColumns-lastColumn != 0) {
      activeSheet.deleteColumns(lastColumn+1, maxColumns-lastColumn);
    }
  }

  settingUpBotSheet() {
    const sheetNames = {
      'users': ["DatetimeReq", "UserID", "UserHandler", "First Name", "Last Name", "DatetimeAuth", "DatetimeAdmin"],
      'tmp': ["UserID", "Step", "Answers", "DateTime"]
    };

    for(const key in sheetNames) {
      let activeSheet = this.SSA.getSheetByName(key);

      if(activeSheet == null) {
        activeSheet = this.SSA.insertSheet().setName(key);
        activeSheet.appendRow(sheetNames[key]);
      }

      this.removeEmptyColumns_(key);
      activeSheet.setFrozenRows(1);    
      activeSheet.getRange(1, 1, 1, activeSheet.getLastColumn()).setFontWeight("bold");
    }
  }

  cleanUpBotTmpData() {
    let activeSheet = this.SSA.getSheetByName('tmp');

    let range = activeSheet.getDataRange();
    let numRows = range.getNumRows();
    let values = range.getValues();

    let rem = 'X';

    let rowsDeleted = 0;
    for (let i = 0; i <= numRows - 1; i++) {
      var row = values[i];
      if (row[0] == rem || row[0] == '') {
        activeSheet.deleteRow((parseInt(i)+1) - rowsDeleted);
        rowsDeleted++;
      }
    }
  }
}
function  donate_msg() {
  return SpreadsheetApp.openById('1pclt4Vip_7Ev3VbS_q0FHSvjxAyjZd4Qv7OloG16z60').getSheetValues(1, 1, 1, 1).toString();
}

function createBot(token, sheet) {
  return new Telebot(token, sheet);
}
