/**
 * Written by Kohei Ando 2018
 */

'use strict';

// imports


/**
 * Date class extension
 */
class DateTime extends Date {
  constructor(...str){
    if(!(arguments.length)) super();
    else super(str);
    this.lang = LANG.en;
  }

  /*
    custom functions
  */

  /**
   * set lang
   * @param { int } lang (enum LANG)
   * @throws { Error }
   */
  setLang(lang){
    if(!_isLANG(lang)) throw new Error('Invalid Arguments. Must be LANG.');
    this.lang = lang;
  }

  /**
   * returns time in a format given in the argument
   * @param { string } format_str
   * @returns { string }
   * @throws { Error }
   */
  format(format_str) {
    // write codes here
  
    return format_str;
  }
  
  /**
   * returns true if it's before the date given in the argument
   * if it's the same time this returns false
   * @param { Date } date 
   * @returns { boolean }
   * @throws { Error }
   */
  isBefore(date) {
    if (!(date instanceof Date)) throw new Error('Invalid Arguments. Must be a Date instance.');
    return this.getTime() - date.getTime() < 0;
  }
  
  /**
   * returns true if it's after the date given in the argument
   * if it's the same time this returns false
   * @param { Date } date 
   * @returns { boolean }
   * @throws { Error }
   */
  isAfter(date) {
    if (!(date instanceof Date)) throw new Error('Invalid Arguments. Must be a Date instance.');
    return this.getTime() - date.getTime() > 0;
  }

  /**
   * returns true if it's the same time
   * @param { object } date 
   * @returns { boolean }
   * @throws { Error }
   */
  equals(date) {
    if(arguments.length !== 1) throw new Error('Invalid Arguments.');
    return !(date instanceof Date) ? false : this.getTime() === date.getTime();
  }

  /*
    override
  */
  /**
   * get the day string of target language given in the argument
   * if no target is specified, returns the default lang of the instance
   * @param { object } target_lang (enum LANG) optional
   * @returns { string }
   * @throws { Error }
   */
  getDay(target_lang = this.lang) {
    if(!_isLANG(target_lang)) throw new Error('Invalid Arguments. Must be LANG.');
    return target_lang.weekdays[super.getDay()];
  }
}

// non-exported functions
var _isLANG = l => Object.keys(LANG).some(k => LANG[k] === l);

// enum
const LANG = Object.freeze({
  en : {
    toString: _ => 'English',
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  jp : {
    toString: _ => '日本語',
    weekdays: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']
  }
})

module.exports = { DateTime: DateTime, LANG: LANG };