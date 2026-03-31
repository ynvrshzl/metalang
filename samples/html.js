/**
 * This is a sample snippet of what HTML constructor code could look like using meta-js
 * Copyright (c) Hazl, 2026
*/

/**
 * Implementation: new HTML("div") | or even simpler, a factory function composition pattern, where the "new" keyword is... | HTML("div").change().property("color").to("blue");
*/

/** 
 * HTML Component construction 🏗️ interface 
 * @example new HTML("div")
 */
export class HTML {
    constructor(tag) {
        this.tag = document.createElement(tag)
    }
}
/**
 * @description HTML Attributes helper
 */
export class Attributes {
    /**
     * @param {HTMLElement} target is the HTML element for which to modify attributes
     */
    constructor(target){
        this.target = target;
    }
    /** The 'css' operation will semantically set inline css for an HTML element. */
    css(string){
        this.target.style += string;
    }
    /** The 'set' operation will set *any general HTML element attribute, not limited to specific domains. e.g 'css'  */
    set(argsv){
        argsv.forEach(([k, v]) => {
            this.target.setAttribute(k, v);
        })
    }
}
export class Component extends HTML {
    constructor(){
        super();
    }
}
export class Hero {

}
export class Section {
    
}
export class Article {

}
