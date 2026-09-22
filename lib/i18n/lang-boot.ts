/**
 * Language resolution that has to run before the browser decides what language
 * the page is in.
 *
 * The root layout server-renders `lang` on <html>, but the real choice lives in
 * localStorage / navigator.language and was only applied inside a useEffect,
 * which runs after hydration. Chrome runs its translation detection during the
 * initial parse, so it had already concluded "Italian" and offered to translate
 * the page into English before the effect could correct the attribute. Changing
 * `lang` afterwards does not retract that prompt.
 *
 * So this runs as a blocking inline script at the very top of <body>: it sets
 * the attribute during parse, ahead of the detector. Same pattern as the
 * script every dark-mode library injects to avoid a flash of the wrong theme.
 *
 * The key is shared with LanguageContext rather than duplicated, because two
 * copies of a localStorage key in two files is a bug waiting for someone to
 * rename one of them.
 */
export const LANG_STORAGE_KEY = 'ovioplus-lang';

/**
 * Must stay behaviourally identical to the resolution in LanguageContext's
 * mount effect, or the attribute and the rendered copy disagree.
 */
export const LANG_BOOT_SCRIPT = `(function(){try{
var s=localStorage.getItem(${JSON.stringify(LANG_STORAGE_KEY)});
var l=(s==='en'||s==='it')?s:(((navigator.language||'').toLowerCase().indexOf('it')===0)?'it':'en');
document.documentElement.lang=l;
}catch(e){}})();`;
