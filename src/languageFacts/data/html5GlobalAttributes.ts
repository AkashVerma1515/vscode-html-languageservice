/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { IAttributeData } from '../../htmlLanguageTypes';

export const HTML5_GLOBAL_ATTRIBUTES: IAttributeData[] = [
  {
    "name": "accesskey",
    "description": {
      "kind": "markdown",
      "value": "Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters. The browser should use the first one that exists on the computer keyboard layout."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/accesskey"
      }
    ]
  },
  {
    "name": "autocapitalize",
    "description": {
      "kind": "markdown",
      "value": "Controls whether and how text input is automatically capitalized as it is entered/edited by the user. It can have the following values:\n\n*   `off` or `none`, no autocapitalization is applied (all letters default to lowercase)\n*   `on` or `sentences`, the first letter of each sentence defaults to a capital letter; all other letters default to lowercase\n*   `words`, the first letter of each word defaults to a capital letter; all other letters default to lowercase\n*   `characters`, all letters should default to uppercase"
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autocapitalize"
      }
    ]
  },
  {
    "name": "class",
    "description": {
      "kind": "markdown",
      "value": "A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the [class selectors](/en-US/docs/Web/CSS/Class_selectors) or functions like the method [`Document.getElementsByClassName()`](/en-US/docs/Web/API/Document/getElementsByClassName \"returns an array-like object of all child elements which have all of the given class names.\")."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/class"
      }
    ]
  },
  {
    "name": "contenteditable",
    "description": {
      "kind": "markdown",
      "value": "An enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing. The attribute must take one of the following values:\n\n*   `true` or the _empty string_, which indicates that the element must be editable;\n*   `false`, which indicates that the element must not be editable."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contenteditable"
      }
    ]
  },
  {
    "name": "contextmenu",
    "description": {
      "kind": "markdown",
      "value": "The `[**id**](#attr-id)` of a [`<menu>`](/en-US/docs/Web/HTML/Element/menu \"The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.\") to use as the contextual menu for this element."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contextmenu"
      }
    ]
  },
  {
    "name": "dir",
    "description": {
      "kind": "markdown",
      "value": "An enumerated attribute indicating the directionality of the element's text. It can have the following values:\n\n*   `ltr`, which means _left to right_ and is to be used for languages that are written from the left to the right (like English);\n*   `rtl`, which means _right to left_ and is to be used for languages that are written from the right to the left (like Arabic);\n*   `auto`, which lets the user agent decide. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then it applies that directionality to the whole element."
    },
    "valueSet": "d",
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dir"
      }
    ]
  },
  {
    "name": "draggable",
    "description": {
      "kind": "markdown",
      "value": "An enumerated attribute indicating whether the element can be dragged, using the [Drag and Drop API](/en-us/docs/DragDrop/Drag_and_Drop). It can have the following values:\n\n*   `true`, which indicates that the element may be dragged\n*   `false`, which indicates that the element may not be dragged."
    },
    "valueSet": "b",
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/draggable"
      }
    ]
  },
  {
    "name": "dropzone",
    "description": {
      "kind": "markdown",
      "value": "An enumerated attribute indicating what types of content can be dropped on an element, using the [Drag and Drop API](/en-US/docs/DragDrop/Drag_and_Drop). It can have the following values:\n\n*   `copy`, which indicates that dropping will create a copy of the element that was dragged\n*   `move`, which indicates that the element that was dragged will be moved to this new location.\n*   `link`, will create a link to the dragged data."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dropzone"
      }
    ]
  },
  {
    "name": "exportparts",
    "description": {
      "kind": "markdown",
      "value": "Used to transitively export shadow parts from a nested shadow tree into a containing light tree."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/exportparts"
      }
    ]
  },
  {
    "name": "hidden",
    "description": {
      "kind": "markdown",
      "value": "A Boolean attribute indicates that the element is not yet, or is no longer, _relevant_. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. This attribute must not be used to hide content that could legitimately be shown."
    },
    "valueSet": "v",
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden"
      }
    ]
  },
  {
    "name": "id",
    "description": {
      "kind": "markdown",
      "value": "Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS)."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/id"
      }
    ]
  },
  {
    "name": "inputmode",
    "description": {
      "kind": "markdown",
      "value": "Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Used primarily on [`<input>`](/en-US/docs/Web/HTML/Element/input \"The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.\") elements, but is usable on any element while in `[contenteditable](/en-US/docs/Web/HTML/Global_attributes#attr-contenteditable)` mode."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inputmode"
      }
    ]
  },
  {
    "name": "is",
    "description": {
      "kind": "markdown",
      "value": "Allows you to specify that a standard HTML element should behave like a registered custom built-in element (see [Using custom elements](/en-US/docs/Web/Web_Components/Using_custom_elements) for more details)."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/is"
      }
    ]
  },
  {
    "name": "itemid",
    "description": {
      "kind": "markdown",
      "value": "The unique, global identifier of an item."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemid"
      }
    ]
  },
  {
    "name": "itemprop",
    "description": {
      "kind": "markdown",
      "value": "Used to add properties to an item. Every HTML element may have an `itemprop` attribute specified, where an `itemprop` consists of a name and value pair."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemprop"
      }
    ]
  },
  {
    "name": "itemref",
    "description": {
      "kind": "markdown",
      "value": "Properties that are not descendants of an element with the `itemscope` attribute can be associated with the item using an `itemref`. It provides a list of element ids (not `itemid`s) with additional properties elsewhere in the document."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemref"
      }
    ]
  },
  {
    "name": "itemscope",
    "description": {
      "kind": "markdown",
      "value": "`itemscope` (usually) works along with `[itemtype](/en-US/docs/Web/HTML/Global_attributes#attr-itemtype)` to specify that the HTML contained in a block is about a particular item. `itemscope` creates the Item and defines the scope of the `itemtype` associated with it. `itemtype` is a valid URL of a vocabulary (such as [schema.org](https://schema.org/)) that describes the item and its properties context."
    },
    "valueSet": "v",
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemscope"
      }
    ]
  },
  {
    "name": "itemtype",
    "description": {
      "kind": "markdown",
      "value": "Specifies the URL of the vocabulary that will be used to define `itemprop`s (item properties) in the data structure. `[itemscope](/en-US/docs/Web/HTML/Global_attributes#attr-itemscope)` is used to set the scope of where in the data structure the vocabulary set by `itemtype` will be active."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemtype"
      }
    ]
  },
  {
    "name": "lang",
    "description": {
      "kind": "markdown",
      "value": "Helps define the language of an element: the language that non-editable elements are in, or the language that editable elements should be written in by the user. The attribute contains one “language tag” (made of hyphen-separated “language subtags”) in the format defined in [_Tags for Identifying Languages (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt). [**xml:lang**](#attr-xml:lang) has priority over it."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/lang"
      }
    ]
  },
  {
    "name": "part",
    "description": {
      "kind": "markdown",
      "value": "A space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the [`::part`](/en-US/docs/Web/CSS/::part \"The ::part CSS pseudo-element represents any element within a shadow tree that has a matching part attribute.\") pseudo-element."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/part"
      }
    ]
  },
  {
    "name": "role",
    "valueSet": "roles"
  },
  {
    "name": "slot",
    "description": {
      "kind": "markdown",
      "value": "Assigns a slot in a [shadow DOM](/en-US/docs/Web/Web_Components/Shadow_DOM) shadow tree to an element: An element with a `slot` attribute is assigned to the slot created by the [`<slot>`](/en-US/docs/Web/HTML/Element/slot \"The HTML <slot> element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.\") element whose `[name](/en-US/docs/Web/HTML/Element/slot#attr-name)` attribute's value matches that `slot` attribute's value."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/slot"
      }
    ]
  },
  {
    "name": "spellcheck",
    "description": {
      "kind": "markdown",
      "value": "An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values:\n\n*   `true`, which indicates that the element should be, if possible, checked for spelling errors;\n*   `false`, which indicates that the element should not be checked for spelling errors."
    },
    "valueSet": "b",
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/spellcheck"
      }
    ]
  },
  {
    "name": "style",
    "description": {
      "kind": "markdown",
      "value": "Contains [CSS](/en-US/docs/Web/CSS) styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the [`<style>`](/en-US/docs/Web/HTML/Element/style \"The HTML <style> element contains style information for a document, or part of a document.\") element have mainly the purpose of allowing for quick styling, for example for testing purposes."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/style"
      }
    ]
  },
  {
    "name": "tabindex",
    "description": {
      "kind": "markdown",
      "value": "An integer attribute indicating if the element can take input focus (is _focusable_), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values:\n\n*   a _negative value_ means that the element should be focusable, but should not be reachable via sequential keyboard navigation;\n*   `0` means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;\n*   a _positive value_ means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the [**tabindex**](#attr-tabindex). If several elements share the same tabindex, their relative order follows their relative positions in the document."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/tabindex"
      }
    ]
  },
  {
    "name": "title",
    "description": {
      "kind": "markdown",
      "value": "Contains a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip."
    },
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/title"
      }
    ]
  },
  {
    "name": "translate",
    "description": {
      "kind": "markdown",
      "value": "An enumerated attribute that is used to specify whether an element's attribute values and the values of its [`Text`](/en-US/docs/Web/API/Text \"The Text interface represents the textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element's text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children.\") node children are to be translated when the page is localized, or whether to leave them unchanged. It can have the following values:\n\n*   empty string and `yes`, which indicates that the element will be translated.\n*   `no`, which indicates that the element will not be translated."
    },
    "valueSet": "y",
    "references": [
      {
        "name": "MDN Reference",
        "url": "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/translate"
      }
    ]
  }
];