/*!
 * SAPUI5
 * (c) Copyright 2009-2022 SAP SE. All rights reserved.
 */
sap.ui.define(["sap/ui/core/Core","sap/ui/core/library"],function(e){"use strict";var t=sap.ui.getCore().initLibrary({name:"sap.ui.richtexteditor",dependencies:["sap.ui.core"],types:["sap.ui.richtexteditor.EditorType"],interfaces:["sap.ui.richtexteditor.IToolbar"],controls:["sap.ui.richtexteditor.RichTextEditor","sap.ui.richtexteditor.ToolbarWrapper","sap.ui.richtexteditor.RTESplitButton"],elements:[],version:"1.108.8"});t.EditorType={TinyMCE:"TinyMCE",TinyMCE4:"TinyMCE4",TinyMCE5:"TinyMCE5",TinyMCE6:"TinyMCE6"};t.ButtonsToCommandsMap={bold:"Bold",italic:"Italic",underline:"Underline",fontfamily:"FontFamily",strikethrough:"Strikethrough",fontselect:"FontFamily",fontsize:"FontSize",fontsizeselect:"FontSize",forecolor:"TextColor",backcolor:"BackgroundColor",cut:"Cut",copy:"Copy",paste:"Paste",bullist:"UnorderedList",numlist:"OrderedList",outdent:"Outdent",indent:"Indent",undo:"Undo",redo:"Redo",image:"InsertImage",link:"InsertLink",unlink:"Unlink",alignleft:"Left",aligncenter:"Center",alignright:"Right",alignjustify:"Full",styleselect:"FormatBlock",formatselect:"FormatBlock",styles:"FormatBlock",blocks:"FormatBlock",table:"InsertTable"};t.EditorCommands={Bold:{icon:"bold-text",command:"Bold",style:"bold",bundleKey:"BOLD_BUTTON_TOOLTIP"},Italic:{icon:"italic-text",command:"Italic",style:"italic",bundleKey:"ITALIC_BUTTON_TOOLTIP"},Underline:{icon:"underline-text",command:"Underline",style:"underline",bundleKey:"UNDERLINE_BUTTON_TOOLTIP"},Strikethrough:{icon:"strikethrough",command:"Strikethrough",style:"strikethrough",bundleKey:"STRIKETHROUGH_BUTTON_TOOLTIP"},Copy:{icon:"copy",command:"Copy",bundleKey:"COPY_BUTTON_TOOLTIP"},Cut:{icon:"scissors",command:"Cut",bundleKey:"CUT_BUTTON_TOOLTIP"},Paste:{icon:"paste",command:"Paste",bundleKey:"PASTE_BUTTON_TOOLTIP"},UnorderedList:{icon:"list",command:"InsertUnorderedList",bundleKey:"UNORDERED_LIST_BUTTON_TOOLTIP"},OrderedList:{icon:"numbered-text",command:"InsertOrderedList",bundleKey:"ORDERED_LIST_BUTTON_TOOLTIP"},Outdent:{icon:"outdent",command:"Outdent",bundleKey:"OUTDENT_BUTTON_TOOLTIP"},Indent:{icon:"indent",command:"Indent",bundleKey:"INDENT_BUTTON_TOOLTIP"},Undo:{icon:"undo",command:"Undo",bundleKey:"UNDO_BUTTON_TOOLTIP"},Redo:{icon:"redo",command:"Redo",bundleKey:"REDO_BUTTON_TOOLTIP"},TextAlign:{Left:{icon:"text-align-left",style:"alignleft",bundleKey:"TEXTALIGH_LEFT"},Center:{icon:"text-align-center",style:"aligncenter",bundleKey:"TEXTALIGH_CENTER"},Right:{icon:"text-align-right",style:"alignright",bundleKey:"TEXTALIGH_RIGHT"},Full:{icon:"text-align-justified",style:"alignjustify",bundleKey:"TEXTALIGH_FULL"},bundleKey:"TEXTALIGN_BUTTON_TOOLTIP"},FontFamily:{AndaleMono:{text:"Andale Mono",commandValue:'"andale mono",monospace'},Arial:{text:"Arial",commandValue:"arial, helvetica, sans-serif"},ArialBlack:{text:"Arial Black",commandValue:'"arial black", sans-serif'},BookAntiqua:{text:"Book Antiqua",commandValue:'"book antiqua", palatino, serif'},ComicSansMS:{text:"Comic Sans MS",commandValue:'"comic sans ms", sans-serif'},CourierNew:{text:"Courier New",commandValue:'"courier new", couriret, monospace'},Georgia:{text:"Georgia",commandValue:"georgia, palatino, serif"},Helvetica:{text:"Helvetica",commandValue:"helvetica, arial, sans-serif"},Impact:{text:"Impact",commandValue:"impact, sans-serif"},Symbol:{text:"Symbol",commandValue:'"symbol"'},Tahoma:{text:"Tahoma",commandValue:"tahoma, arial, helvetica, sans-serif"},Terminal:{text:"Terminal",commandValue:"terminal, monaco, monospace"},TimesNewRoman:{text:"Times New Roman",commandValue:'"times new roman", times, sans-serif'},TrebuchetMS:{text:"Trebuchet MS",commandValue:'"trebuchet ms", geneva, sans-serif'},Verdana:{text:"Verdana",commandValue:"verdana, geneva, sans-serif"},Webdings:{text:"Webdings",commandValue:'"webdings"'},Wingdings:{text:"Wingdings",commandValue:'wingdings, "zapf dingbats"'}},FontSize:[8,10,12,14,18,24,36],TextColor:{icon:"text-color",command:"ForeColor",style:"color",defaultValue:"#000000",bundleKey:"TEXT_COLOR_BUTTON_TOOLTIP"},BackgroundColor:{icon:"color-fill",command:"HiliteColor",style:"background-color",defaultValue:"#ffffff",bundleKey:"BACKGROUND_COLOR_BUTTON_TOOLTIP"},InsertImage:{icon:"picture",bundleKey:"IMAGE_BUTTON_TOOLTIP"},InsertLink:{icon:"chain-link",bundleKey:"LINK_BUTTON_TOOLTIP"},Unlink:{icon:"broken-link",command:"unlink",bundleKey:"UNLINK_BUTTON_TOOLTIP"},InsertTable:{icon:"table-view",bundleKey:"TABLE_BUTTON_TOOLTIP"},FormatBlock:{Paragraph:{text:"Paragraph",commandValue:"p",bundleKey:"PARAGRAPH_BUTTON_TEXT"},Heading1:{text:"Heading 1",commandValue:"h1",bundleKey:"HEADING1_BUTTON_TEXT"},Heading2:{text:"Heading 2",commandValue:"h2",bundleKey:"HEADING2_BUTTON_TEXT"},Heading3:{text:"Heading 3",commandValue:"h3",bundleKey:"HEADING3_BUTTON_TEXT"},Heading4:{text:"Heading 4",commandValue:"h4",bundleKey:"HEADING4_BUTTON_TEXT"},Heading5:{text:"Heading 5",commandValue:"h5",bundleKey:"HEADING5_BUTTON_TEXT"},Heading6:{text:"Heading 6",commandValue:"h6",bundleKey:"HEADING6_BUTTON_TEXT"}}};t.Accessibility={FontFamily:"FONT_FAMILY_TEXT",FontSize:"FONT_SIZE_TEXT",FontColor:"FONT_COLOR_TEXT",BackgroundColor:"BACKGROUND_COLOR_TEXT",FormatBlock:"FORMAT_BUTTON_TOOLTIP"};t.ButtonGroups={"font-style":["Bold","Italic","Underline","Strikethrough"],"text-align":["TextAlign"],font:["FontFamily","FontSize","TextColor","BackgroundColor"],structure:["UnorderedList","OrderedList","Outdent","Indent"],link:["InsertLink","Unlink"],insert:["InsertImage"],undo:["Undo","Redo"],clipboard:["Cut","Copy","Paste"],custom:[]};var n={};var o=function(){sap.ui.require(["sap/m/MenuItem","sap/m/Button","sap/m/OverflowToolbarButton","sap/m/OverflowToolbarToggleButton","sap/m/SplitButton","sap/m/MenuButton","sap/m/Menu","sap/m/Select","sap/m/ToolbarSeparator","sap/m/OverflowToolbar","sap/m/OverflowToolbarLayoutData","sap/m/Dialog","sap/m/Label","sap/m/CheckBox","sap/m/Input","sap/m/HBox","sap/m/VBox","sap/m/Text","sap/m/StepInput","sap/ui/core/InvisibleText","sap/m/ColorPalettePopover","sap/m/library"],function(e,o,a,r,i,l,u,T,c,d,s,m,p,O,y,b,B,f,g,I,_,L){t.RichTextEditorHelper.bSapMLoaded=true;n.Button=o;n.OverflowToolbarButton=a;n.OverflowToolbarToggleButton=r;n.SplitButton=i;n.MenuButton=l;n.Menu=u;n.Select=T;n.ToolbarSeparator=c;n.OverflowToolbar=d;n.OverflowToolbarLayoutData=s;n.MenuItem=e;n.Dialog=m;n.Label=p;n.CheckBox=O;n.Input=y;n.HBox=b;n.VBox=b;n.Text=f;n.StepInput=g;n.InvisibleText=I;n.ColorPalettePopover=_;n.ButtonTypeDefault=L.ButtonType.Default;n.ButtonTypeTransparent=L.ButtonType.Transparent;n.PriorityNeverOverflow=L.OverflowToolbarPriority.NeverOverflow})};var a=function(e,t){if(n[e]){return new n[e](t)}};t.RichTextEditorHelper={bSapMLoaded:false,createOverflowToolbar:function(e,t){return a("OverflowToolbar",{id:e,content:t})},createInvisibleText:function(e){return a("InvisibleText",e)},createButton:function(e){e.type?e.type:n.ButtonTypeTransparent;return a("Button",e)},createOverflowToolbarButton:function(e){e.type=n.ButtonTypeTransparent;return a("OverflowToolbarButton",e)},createSplitButton:function(e){e.type=n.ButtonTypeDefault;return a("SplitButton",e)},createOverflowToolbarToggleButton:function(e){e.type=n.ButtonTypeTransparent;return a("OverflowToolbarToggleButton",e)},createMenuButton:function(e,t,o,r,i){return a("MenuButton",{layoutData:a("OverflowToolbarLayoutData",{priority:n.PriorityNeverOverflow}),type:n.ButtonTypeTransparent,id:e,menu:a("Menu",{itemSelected:o,items:t}),icon:r,tooltip:i})},createMenuItem:function(e,t,n){return a("MenuItem",{id:e,icon:n,text:t})},createToggleButton:function(e){e.layoutData=a("OverflowToolbarLayoutData",{priority:n.PriorityNeverOverflow});e.type=n.ButtonTypeTransparent;return a("ToggleButton",e)},createToolbarSeparator:function(){return a("ToolbarSeparator")},createSelect:function(e){return a("Select",e)},createInput:function(e){return a("Input",e)},createLabel:function(e){return a("Label",e)},createCheckBox:function(e){return a("CheckBox",e)},createDialog:function(e){return a("Dialog",e).addStyleClass("sapUiContentPadding")},createText:function(e){return a("Text",e)},createHBox:function(e){return a("HBox",e)},createVBox:function(e){return a("VBox",e)},createStepInput:function(e){return a("StepInput",e)},createColorPalettePopover:function(e){return a("ColorPalettePopover",e)}};if(sap.ui.getCore().getLoadedLibraries()["sap.m"]){o()}else{var r=function(e){var t=e.getParameters();if(t.stereotype==="library"&&t.name==="sap.m"){setTimeout(o.bind(null),0);setTimeout(sap.ui.getCore()["detachLibraryChanged"].bind(sap.ui.getCore(),r),0)}};sap.ui.getCore().attachLibraryChanged(r)}return t});
//# sourceMappingURL=library.js.map